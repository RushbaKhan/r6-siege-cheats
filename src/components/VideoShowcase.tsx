import { AnimatedSection } from './AnimatedSection';
import { ScreenshotSlider } from './ScreenshotSlider';

export function VideoShowcase() {
  return (
    <AnimatedSection>
      <section
        aria-label="Rainbow Six Siege gameplay showcase"
        style={{
          background: 'var(--bg-base)',
          padding: 'clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 7vw, 80px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}>
              Rainbow Six Siege <span className="gradient-text">Gameplay Showcase</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
            }}>
              Operator pushes, gadget utility, and bomb site rounds in Rainbow Six Siege.
            </p>
          </div>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-ghost)',
            aspectRatio: '16/9',
            background: 'var(--bg-void)',
          }}>
            <ScreenshotSlider interval={4000} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
