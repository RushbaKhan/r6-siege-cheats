import { AnimatedSection } from './AnimatedSection';
import { BUY_URL } from '../seo/site';

export function SupportBanner() {
  return (
    <AnimatedSection>
      <section style={{
        background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(124,58,237,0.08))',
        padding: 'clamp(40px, 6vw, 60px) max(16px, env(safe-area-inset-right), 4vw) clamp(40px, 6vw, 60px) max(16px, env(safe-area-inset-left), 4vw)',
        borderTop: '1px solid var(--border-ghost)',
        borderBottom: '1px solid var(--border-ghost)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: 'var(--text-secondary)',
            marginBottom: '12px',
          }}>
            Ready for Rainbow Six Siege ranked?
          </p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            R6 Aimbot, ESP &amp; Wallhack — Get Instant Access
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            maxWidth: '520px',
            margin: '0 auto 24px',
          }}>
            Rainbow Six Siege cheats with operator ESP, gadget ESP, aimbot with recoil control, no recoil, and stream-proof mode — updated for the current PC build.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              BUY CHEATS
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
