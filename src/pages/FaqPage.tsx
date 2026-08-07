import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Seo } from '../components/Seo';
import { BUY_URL, HOME_FAQ, SITE_URL } from '../seo/site';
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../seo/constants';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 'var(--radius-lg)',
        border: open ? '1px solid rgba(168,85,247,0.35)' : '1px solid var(--border-ghost)',
        marginBottom: 12,
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          padding: '18px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.45,
          }}
        >
          {q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="2"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open ? (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            padding: '0 20px 18px',
            margin: 0,
          }}
        >
          {a}
        </p>
      ) : null}
    </div>
  );
}

export function FaqPage() {
  return (
    <main>
      <Seo
        title={PAGE_TITLES.faq}
        description={PAGE_DESCRIPTIONS.faq}
        path="/faq"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'FAQPage',
              mainEntity: HOME_FAQ.map(item => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
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
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>
            Support
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            Rainbow Six Siege Cheats FAQ
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 2vw, 1.0625rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            Answers to common questions about R6 ESP, aimbot, no recoil, gadget ESP, stream-proof mode,
            CLOUD-DMA options, and product support.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section
          style={{
            background: 'var(--bg-deep)',
            padding:
              'clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
          }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {HOME_FAQ.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section
          style={{
            background: 'var(--bg-base)',
            padding:
              'clamp(48px, 7vw, 72px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
          }}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: 760,
              margin: '0 auto',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 40px)',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: 12,
              }}
            >
              Still Have Questions?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              24/7 support is included with every purchase. Or explore our feature pages and blog guides for
              detailed setup instructions.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                BUY CHEATS
              </a>
              <Link to="/features" className="btn-ghost">
                View Features
              </Link>
            </div>
          </div>

          <nav
            aria-label="Related pages"
            className="glass-card"
            style={{
              maxWidth: 760,
              margin: '32px auto 0',
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
              Related Pages
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
              {[
                { label: 'R6 ESP', to: '/esp' },
                { label: 'R6 Aimbot', to: '/aimbot' },
                { label: 'R6 Wallhack', to: '/wallhack' },
                { label: 'All Features', to: '/features' },
                { label: 'Blog', to: '/blog' },
              ].map(link => (
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
    </main>
  );
}
