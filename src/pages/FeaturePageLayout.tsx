import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Seo } from '../components/Seo';
import { VideoEmbed } from '../components/VideoEmbed';
import { BUY_URL, SITE_URL } from '../seo/site';

export type InternalLink = {
  label: string;
  to: string;
};

export type FeaturePageLayoutProps = {
  seoTitle: string;
  seoDescription: string;
  path: string;
  sectionLabel?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  children: ReactNode;
  internalLinks?: InternalLink[];
  heroVideo?: string;
  demoVideo?: string;
};

export const proseHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginTop: '36px',
  marginBottom: '14px',
  lineHeight: 1.2,
};

export const proseParagraph: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  marginBottom: '16px',
};

export const proseList: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  marginBottom: '16px',
  paddingLeft: '20px',
};

const DEFAULT_INTERNAL_LINKS: InternalLink[] = [
  { label: 'Rainbow Six Siege ESP', to: '/esp' },
  { label: 'R6 Aimbot', to: '/aimbot' },
  { label: 'R6 Wallhack', to: '/wallhack' },
  { label: 'All Cheat Features', to: '/features' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog & Guides', to: '/blog' },
];

export function FeaturePageLayout({
  seoTitle,
  seoDescription,
  path,
  sectionLabel = 'Rainbow Six Siege Cheats',
  title,
  titleAccent,
  subtitle,
  children,
  internalLinks = DEFAULT_INTERNAL_LINKS,
  heroVideo,
  demoVideo,
}: FeaturePageLayoutProps) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;

  return (
    <main>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={canonicalPath}
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: seoTitle,
              description: seoDescription,
              url: `${SITE_URL}${canonicalPath}`,
              inLanguage: 'en-US',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: title, item: `${SITE_URL}${canonicalPath}` },
              ],
            },
          ],
        }}
      />

      <section
        style={{
          position: 'relative',
          background: 'var(--bg-void)',
          padding:
            'clamp(100px, 15vw, 140px) max(16px, env(safe-area-inset-right), 4vw) clamp(40px, 6vw, 60px) max(16px, env(safe-area-inset-left), 4vw)',
          overflow: 'hidden',
        }}
      >
        <div
          className="grid-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: 'clamp(180px, 28vw, 360px)',
            height: 'clamp(180px, 28vw, 360px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            animation: 'orb-drift 22s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>
            {sectionLabel}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
            {titleAccent ? (
              <>
                {' '}
                <span className="gradient-text">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          {subtitle ? (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 2vw, 1.0625rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 680,
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>

      {heroVideo ? (
        <section
          style={{
            background: 'var(--bg-base)',
            padding: '0 max(16px, 4vw) clamp(40px, 6vw, 60px)',
          }}
        >
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-ghost)',
                aspectRatio: '16/9',
              }}
            >
              <VideoEmbed
                src={heroVideo}
                ariaLabel={`${title} gameplay demonstration`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      ) : null}

      <AnimatedSection>
        <section
          style={{
            background: 'var(--bg-deep)',
            padding:
              'clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
          }}
        >
          <div style={{ maxWidth: 860, margin: '0 auto' }}>{children}</div>
        </section>
      </AnimatedSection>

      {demoVideo ? (
        <AnimatedSection>
          <section
            style={{
              background: 'var(--bg-base)',
              padding: 'clamp(40px, 6vw, 64px) max(16px, 4vw)',
            }}
          >
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                See It in Action
              </h2>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-ghost)',
                  aspectRatio: '16/9',
                }}
              >
                <VideoEmbed
                  src={demoVideo}
                  ariaLabel={`${title} feature demonstration video`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
      ) : null}

      <AnimatedSection>
        <section
          style={{
            background: 'var(--bg-base)',
            padding:
              'clamp(48px, 7vw, 72px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 72px) max(16px, env(safe-area-inset-left), 4vw)',
          }}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: 860,
              margin: '0 auto',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 40px)',
              textAlign: 'center',
            }}
          >
            <span className="accent-line" style={{ margin: '0 auto 20px' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                marginBottom: 12,
              }}
            >
              Ready to Dominate Ranked?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 520,
                margin: '0 auto 24px',
              }}
            >
              Get instant access to operator ESP, aimbot, wallhack, gadget ESP, no recoil, and every feature
              included in one subscription. Updated after every Ubisoft patch with 24/7 support.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                BUY CHEATS
              </a>
              <Link to="/features" className="btn-ghost">
                View All Features
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {internalLinks.length > 0 ? (
        <AnimatedSection>
          <section
            style={{
              background: 'var(--bg-deep)',
              padding:
                '0 max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
            }}
          >
            <nav
              aria-label="Related pages"
              className="glass-card"
              style={{
                maxWidth: 860,
                margin: '0 auto',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(20px, 3vw, 28px)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: 14,
                }}
              >
                Explore More R6 Guides
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px 20px',
                }}
              >
                {internalLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                      }}
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </AnimatedSection>
      ) : null}
    </main>
  );
}
