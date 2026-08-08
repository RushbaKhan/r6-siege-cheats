import { AnimatedSection } from './AnimatedSection';
import { BUY_URL } from '../seo/site';

export function PurchaseCta() {
  return (
    <AnimatedSection>
      <section className="purchase-cta-section" aria-labelledby="purchase-cta-heading">
        <div className="purchase-cta-card">
          <div style={{ paddingLeft: '8px', flex: 1, minWidth: 0 }}>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '10px',
            }}>
              <span aria-hidden="true" style={{ color: 'var(--accent-bright)' }}>✦</span>
              Ready for Rainbow Six Siege?
            </p>
            <h2 id="purchase-cta-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              Get operator ESP, aimbot &amp; wallhack — instant access on PC.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
            }}>
              Purchase Rainbow Six Siege cheats with stream-proof mode, gadget ESP, no recoil, and 24/7 support after every patch.
            </p>
          </div>
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="purchase-cta-btn"
          >
            PURCHASE NOW
          </a>
        </div>
      </section>
    </AnimatedSection>
  );
}
