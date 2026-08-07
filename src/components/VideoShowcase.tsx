import { AnimatedSection } from './AnimatedSection';
import { VideoEmbed } from './VideoEmbed';
import { VIDEO_SHOWCASE } from '../seo/site';

export function VideoShowcase() {
  return (
    <AnimatedSection>
      <section
        aria-label="Rainbow Six Siege cheat gameplay video"
        style={{
          background: 'var(--bg-base)',
          padding: 'clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="section-label" style={{ marginBottom: '16px', justifyContent: 'center', display: 'flex' }}>Live Gameplay</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}>
              See <span className="gradient-text">R6 Cheats</span> in Action
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
            }}>
              Operator ESP, aimbot with recoil control, and gadget tracking during real Rainbow Six Siege ranked play on PC.
            </p>
          </div>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-ghost)',
            aspectRatio: '16/9',
            background: 'var(--bg-void)',
          }}>
            <VideoEmbed
              src={VIDEO_SHOWCASE}
              ariaLabel="Rainbow Six Siege cheat gameplay with operator ESP and aimbot"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
