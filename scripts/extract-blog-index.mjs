import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, '../src/seo/blog-posts.ts');
const outPath = path.join(__dirname, '../src/seo/blog-index.ts');
const src = fs.readFileSync(srcPath, 'utf8');

const arrayMatch = src.match(/export const BLOG_POSTS: BlogPost\[\] = (\[[\s\S]*?\n\]);/);
if (!arrayMatch) throw new Error('Could not parse BLOG_POSTS');

const body = arrayMatch[1]
  .replace(/\bBLOG_SCREENSHOTS\[(\d+)\]/g, (_, index) => `'\/screenshots\/blog\/blog-${String(Number(index) + 1).padStart(2, '0')}.webp'`)
  .replace(/\bR6_SCREENSHOTS\[(\d+)\]/g, (_, index) => `'\/screenshots\/r6-${Number(index) + 1}.webp'`)
  .replace(/\bbody:\s*`[\s\S]*?`,/g, '');

// eslint-disable-next-line no-eval
const posts = eval(body);

const lines = posts.map((p) => {
  const excerpt = p.excerpt.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const title = p.title.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `  {
    slug: '${p.slug}',
    title: '${title}',
    category: '${p.category}',
    date: '${p.date}',
    readTime: '${p.readTime}',
    image: '${p.image}',
    excerpt: '${excerpt}',
  }`;
});

const output = `import type { BlogPostMeta } from './blog-types';

/** Lightweight blog metadata — full post bodies load on demand. */
export const BLOG_POST_INDEX: BlogPostMeta[] = [
${lines.join(',\n')},
];
`;

fs.writeFileSync(outPath, output);
console.log(`Wrote ${posts.length} entries to ${outPath}`);
