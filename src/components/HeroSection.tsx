import { ScreenshotSlider } from './ScreenshotSlider';
import { BUY_URL, HERO_SCREENSHOTS } from '../seo/site';

export function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg-void)',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <ScreenshotSlider
          images={HERO_SCREENSHOTS}
          interval={4000}
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ position: 'absolute', height: '100%' }}
          altPrefix="Rainbow Six Siege ESP wallhack gameplay"
        />
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(6,4,9,0.95) 0%, rgba(6,4,9,0.82) 50%, rgba(6,4,9,0.55) 100%)',
        zIndex: 3,
      }} />

      <div className="grid-overlay" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 4,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-5%',
        width: 'clamp(300px, 50vw, 700px)',
        height: 'clamp(300px, 50vw, 700px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)',
        animation: 'orb-drift 18s ease-in-out infinite',
        zIndex: 4,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        paddingLeft: 'max(16px, env(safe-area-inset-left), 4vw)',
        paddingRight: 'max(16px, env(safe-area-inset-right), 4vw)',
        paddingTop: 'clamp(100px, 15vw, 140px)',
        paddingBottom: 'clamp(60px, 10vw, 100px)',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'rgba(168,85,247,0.1)',
          border: '1px solid rgba(168,85,247,0.25)',
          borderRadius: '100px',
          marginBottom: 'clamp(20px, 3vw, 28px)',
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'var(--accent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent-bright)',
            letterSpacing: '0.04em',
          }}>Operator ESP · BattlEye · PC 2026</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: 'clamp(16px, 2.5vw, 24px)',
          maxWidth: '900px',
        }}>
          <span className="gradient-text" style={{ display: 'block' }}>
            Rainbow Six Siege Cheats –
          </span>
          <span style={{
            display: 'block',
            marginTop: 'clamp(6px, 1vw, 10px)',
            color: '#ffffff',
          }}>
            ESP, Aimbot &amp; Wallhack
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: '560px',
          marginBottom: 'clamp(28px, 4vw, 40px)',
        }}>
          Premium Rainbow Six Siege cheat software with operator ESP through walls, advanced aimbot with recoil control, gadget ESP for cameras and drones, defuser ESP, no recoil, and stream-proof mode for ranked and casual play on PC.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: 'clamp(24px, 3vw, 32px)' }}>
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            BUY CHEATS
          </a>
          <a href="#pricing" className="btn-ghost">
            See pricing &amp; features
          </a>
          <a href="#esp" className="btn-ghost">
            See Features ↓
          </a>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
        }}>
          Windows 10 &amp; 11 · Ubisoft Rainbow Six Siege · Stream-Proof · CLOUD-DMA Available
        </p>
      </div>
    </section>
  );
}
