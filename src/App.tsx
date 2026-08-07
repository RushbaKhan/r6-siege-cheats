import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { StorePage } from './pages/Store';
import { EspPage } from './pages/EspPage';
import { AimbotPage } from './pages/AimbotPage';
import { WallhackPage } from './pages/WallhackPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { BLOG_POSTS, BlogListPage, BlogPostPage } from './pages/Blog';
import { I18nProvider } from './i18n';
import { Seo } from './components/Seo';
import { SmoothScroll } from './components/SmoothScroll';
import { HOME_TITLE, HOME_DESCRIPTION, PAGE_TITLES, PAGE_DESCRIPTIONS } from './seo/constants';
import { HOME_FAQ, LOGO_URL, OG_IMAGE, SITE_NAME, SITE_URL } from './seo/site';
import { buildProductSchema, PRODUCT_OFFER } from './seo/product-schema';
import './globals.css';

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

const BUY_FAQ_ITEMS = HOME_FAQ.map(({ q, a }) => ({ q, a }));

function breadcrumb(items: { name: string; item: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

function faqSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: BUY_FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

function RouteSeo() {
  const { pathname } = useLocation();
  const currentPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  const pageRoutes: Record<string, { title: string; description: string; path: string }> = {
    '/esp': { title: PAGE_TITLES.esp, description: PAGE_DESCRIPTIONS.esp, path: '/esp' },
    '/aimbot': { title: PAGE_TITLES.aimbot, description: PAGE_DESCRIPTIONS.aimbot, path: '/aimbot' },
    '/wallhack': { title: PAGE_TITLES.wallhack, description: PAGE_DESCRIPTIONS.wallhack, path: '/wallhack' },
    '/features': { title: PAGE_TITLES.features, description: PAGE_DESCRIPTIONS.features, path: '/features' },
    '/faq': { title: PAGE_TITLES.faq, description: PAGE_DESCRIPTIONS.faq, path: '/faq' },
    '/privacy': { title: PAGE_TITLES.privacy, description: PAGE_DESCRIPTIONS.privacy, path: '/privacy' },
    '/buy': { title: PAGE_TITLES.buy, description: PAGE_DESCRIPTIONS.buy, path: '/buy' },
    '/blog': { title: PAGE_TITLES.blog, description: PAGE_DESCRIPTIONS.blog, path: '/blog' },
  };

  if (pageRoutes[currentPath]) {
    const page = pageRoutes[currentPath];
    const graph: Record<string, unknown>[] = [
      breadcrumb([
        { name: 'Home', item: `${SITE_URL}/` },
        { name: page.title.split('|')[0].trim(), item: `${SITE_URL}${page.path}` },
      ]),
    ];
    if (currentPath === '/faq' || currentPath === '/buy') {
      graph.push(faqSchema());
    }
    if (currentPath === '/buy') {
      graph.push(buildProductSchema('Rainbow Six Siege Cheats', PAGE_DESCRIPTIONS.buy));
    }
    return (
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
        structuredData={{ '@context': 'https://schema.org', '@graph': graph }}
      />
    );
  }

  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = BLOG_POSTS.find(entry => entry.slug === slug);
    if (post) {
      const canonicalPath = `/blog/${post.slug}`;
      const canonicalUrl = `${SITE_URL}${canonicalPath}`;
      return (
        <Seo
          title={`${post.title} | R6SiegeCheats.com`}
          description={post.excerpt}
          path={canonicalPath}
          image={post.image.startsWith('/') ? `${SITE_URL}${post.image}` : post.image}
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                datePublished: toIsoDate(post.date),
                author: { '@type': 'Organization', name: SITE_NAME },
                publisher: {
                  '@type': 'Organization',
                  name: SITE_NAME,
                  logo: { '@type': 'ImageObject', url: LOGO_URL },
                },
                url: canonicalUrl,
                image: post.image.startsWith('/') ? `${SITE_URL}${post.image}` : post.image,
                mainEntityOfPage: canonicalUrl,
              },
              breadcrumb([
                { name: 'Home', item: `${SITE_URL}/` },
                { name: 'Blog', item: `${SITE_URL}/blog` },
                { name: post.title, item: canonicalUrl },
              ]),
            ],
          }}
        />
      );
    }
  }

  return (
    <Seo
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
      path="/"
      structuredData={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: HOME_DESCRIPTION,
            inLanguage: 'en-US',
            publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: LOGO_URL } },
          },
          {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            url: `${SITE_URL}/`,
            inLanguage: 'en-US',
            isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME },
          },
          {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: LOGO_URL },
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Rainbow Six Siege Cheats',
            applicationCategory: 'GameApplication',
            operatingSystem: 'Windows 10, Windows 11',
            image: OG_IMAGE,
            offers: PRODUCT_OFFER,
            description: HOME_DESCRIPTION,
          },
          buildProductSchema('Rainbow Six Siege Cheats', HOME_DESCRIPTION),
          {
            '@type': 'ItemList',
            name: 'R6 Siege Cheats Site Pages',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', url: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'R6 ESP', url: `${SITE_URL}/esp` },
              { '@type': 'ListItem', position: 3, name: 'R6 Aimbot', url: `${SITE_URL}/aimbot` },
              { '@type': 'ListItem', position: 4, name: 'R6 Wallhack', url: `${SITE_URL}/wallhack` },
              { '@type': 'ListItem', position: 5, name: 'Cheat Features', url: `${SITE_URL}/features` },
              { '@type': 'ListItem', position: 6, name: 'FAQ', url: `${SITE_URL}/faq` },
              { '@type': 'ListItem', position: 7, name: 'Blog', url: `${SITE_URL}/blog` },
              ...BLOG_POSTS.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 8,
                name: post.title,
                url: `${SITE_URL}/blog/${post.slug}`,
              })),
            ],
          },
          faqSchema(),
        ],
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <SmoothScroll />
        <RouteSeo />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<StorePage />} />
          <Route path="/esp" element={<EspPage />} />
          <Route path="/aimbot" element={<AimbotPage />} />
          <Route path="/wallhack" element={<WallhackPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </I18nProvider>
    </BrowserRouter>
  );
}
