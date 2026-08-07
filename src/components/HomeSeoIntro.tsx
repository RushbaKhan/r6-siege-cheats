import { Link } from 'react-router-dom';
import { BUY_URL } from '../seo/site';

export function HomeSeoIntro() {
  return (
    <section
      id="r6-cheats-overview"
      aria-labelledby="home-seo-intro-heading"
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-ghost)',
        borderBottom: '1px solid var(--border-ghost)',
        padding: 'clamp(48px, 6vw, 72px) max(16px, env(safe-area-inset-right), 4vw) clamp(48px, 6vw, 72px) max(16px, env(safe-area-inset-left), 4vw)',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <h2
          id="home-seo-intro-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          R6 Siege Cheats for PC — ESP, Aimbot &amp; Wallhack
        </h2>

        <p style={paragraphStyle}>
          R6 Siege Cheats on this site cover the full Rainbow Six Siege toolkit for Windows PC: operator ESP through
          walls, advanced aimbot with recoil control, R6 wallhack overlays, gadget ESP for cameras and drones, defuser
          tracking, no recoil, stream-proof mode, and BattlEye-compatible external architecture. Whether you queue ranked
          or casual bomb, these Rainbow Six Siege cheats help you read attacker pushes, defender setups, and rotation
          timing before you commit to a breach.
        </p>

        <p style={paragraphStyle}>
          Our <Link to="/esp" style={linkStyle}>R6 ESP</Link> highlights attacker and defender positions through
          reinforced and destructible surfaces. Gadget ESP marks Kapkan traps, Frost mats, Claymores, and drones so you
          clear utility safely. Pair ESP with the{' '}
          <Link to="/wallhack" style={linkStyle}>R6 wallhack</Link> page to see how operator and gadget overlays work
          together on maps like Clubhouse, Bank, and Chalet. The{' '}
          <Link to="/aimbot" style={linkStyle}>Rainbow Six Siege aimbot</Link> adds smoothing, FOV limits, automatic
          headshot targeting, and integrated no recoil for every weapon in the roster.
        </p>

        <p style={paragraphStyle}>
          Explore the complete <Link to="/features" style={linkStyle}>Rainbow Six Siege cheat features</Link> list,
          read setup guides on the <Link to="/blog" style={linkStyle}>R6 cheats blog</Link>, or check the{' '}
          <Link to="/faq" style={linkStyle}>FAQ</Link> for loader setup, stream-proof mode, and CLOUD-DMA options.
          When you are ready, visit the <Link to="/buy" style={linkStyle}>buy page</Link> or{' '}
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            purchase R6 Siege cheats
          </a>{' '}
          for instant access with 24/7 support on Windows 10 and 11.
        </p>
        <p style={paragraphStyle}>
          Every plan includes instant loader delivery, post-patch updates, transparent configuration defaults, and
          live support when Ubisoft releases new operators or map changes. R6 Siege Cheats remain focused on PC
          performance with lightweight overlays that stay hidden during streams and recordings when stream-proof mode
          is enabled.
        </p>
      </div>
    </section>
  );
}

const paragraphStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  margin: '0 0 18px',
} as const;

const linkStyle = {
  color: 'var(--accent-bright)',
  textDecoration: 'none',
  fontWeight: 600,
} as const;
