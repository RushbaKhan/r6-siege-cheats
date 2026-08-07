export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export type BlogPost = BlogPostMeta & {
  body: string;
};
