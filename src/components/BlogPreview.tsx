import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { BLOG_POST_INDEX } from '../seo/blog-index';

function BlogPreviewCard({ slug, title, category, date, excerpt, image }: {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}) {
  return (
    <Link to={`/blog/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        className="glass-card feature-card"
        style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
        <div style={{ padding: 'clamp(16px, 2.5vw, 24px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                background: 'rgba(168,85,247,0.12)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {category}
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {date}
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: 10,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: 16,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {excerpt}
          </p>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--accent)',
            }}
          >
            Read Article →
          </span>
        </div>
      </article>
    </Link>
  );
}

export function BlogPreview() {
  const latestPosts = BLOG_POST_INDEX.slice(0, 3);

  return (
    <AnimatedSection>
      <section
        aria-labelledby="blog-preview-heading"
        style={{
          background: 'var(--bg-base)',
          padding:
            'clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 16,
              marginBottom: 'clamp(28px, 4vw, 40px)',
            }}
          >
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>
                Knowledge Base
              </span>
              <h2
                id="blog-preview-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Latest{' '}
                <span className="gradient-text">R6 Guides</span>
              </h2>
            </div>
            <Link to="/blog" className="btn-ghost">
              View All Articles
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'clamp(16px, 2.5vw, 24px)',
            }}
          >
            {latestPosts.map(post => (
              <BlogPreviewCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
