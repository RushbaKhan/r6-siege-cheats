import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';
import { BUY_URL } from '../seo/site';

const CONTENT_BLOCKS = [
  {
    title: 'What Are Rainbow Six Siege Cheats?',
    body: `Rainbow Six Siege cheats are external software tools built for Ubisoft's tactical shooter on PC. Our package combines operator ESP through walls, advanced aimbot with recoil control, gadget ESP for cameras and drones, defuser and objective ESP, no recoil, automatic headshot targeting, and stream-proof mode in one loader with instant delivery and post-patch updates. Whether you play ranked or casual bomb, R6 cheats give you the awareness and precision to read rounds before they unfold — tracking attacker pushes, defender setups, and rotation timing without guessing.`,
  },
  {
    title: 'R6 ESP — Operators, Gadgets & Objectives',
    body: `Rainbow Six Siege ESP is the foundation of round awareness. Operator ESP shows attacker and defender positions through reinforced walls and destructible surfaces. Gadget ESP highlights defender cameras, attacker drones, Kapkan traps, Frost mats, and Claymores so you clear utility efficiently. Defuser and objective ESP tracks bomb site information during attack and defend phases. Rappel and rotation ESP helps you read vertical plays on maps like Clubhouse, Bank, and Chalet. Rank display shows opponent rank information where supported during ranked matches.`,
  },
  {
    title: 'R6 Aimbot — Recoil Control & Headshot Targeting',
    body: `The Rainbow Six Siege aimbot is fully configurable for PC play. Smoothing and FOV limits keep aim movement controlled during firefights. Integrated recoil control stabilizes automatic weapons from Ash's R4-C to defender SMGs. Automatic headshot targeting prioritizes head-level hitboxes for faster eliminations. The penetration indicator shows when your weapon can shoot through the surface between you and a target — essential for wall-bangs through soft walls, floors, and destructible hatches.`,
  },
  {
    title: 'R6 Wallhack — See Through Walls',
    body: `R6 wallhack renders operator and gadget information through solid geometry. Combined with operator ESP, you know which defender holds which angle before you breach. Gadget wallhack prevents walking into trap setups and helps you pre-aim common camera angles. On attack, you track roamers holding unexpected positions. On defense, you spot flanking attackers rotating through adjacent bomb sites. Wallhack and ESP work together as the visual core of Rainbow Six Siege cheats.`,
  },
  {
    title: 'BattlEye, Stream-Proof & CLOUD-DMA',
    body: `The BattlEye bypass system uses external architecture designed for compatibility with Ubisoft's anti-cheat. Stream-proof mode hides overlays from OBS, Discord, and common capture software when recording or streaming. CLOUD-DMA and AWS deployment options are available for users who want remote hardware isolation. While no cheat eliminates all risk, the product prioritizes external design, conservative defaults, transparent 24/7 support, and active maintenance after every Rainbow Six Siege patch.`,
  },
  {
    title: 'Getting Started with R6 Siege Cheats on PC',
    body: `Rainbow Six Siege cheats support Windows 10 and Windows 11. After purchase you receive instant access to the loader, setup guide, and 24/7 support. Configuration takes minutes: adjust Windows settings, launch the loader, open Rainbow Six Siege, and enable operator ESP, aimbot, or gadget ESP from the overlay menu. Read our blog for detailed R6 ESP guides, aimbot setup tutorials, and wallhack explanations. Visit the FAQ for common product questions.`,
  },
];

export function SeoContentSection() {
  return (
    <AnimatedSection>
      <section
        id="r6-cheats-guide"
        aria-labelledby="seo-content-heading"
        style={{
          background: 'var(--bg-deep)',
          padding: 'clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 96px) max(16px, env(safe-area-inset-left), 4vw)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: 16, display: 'flex' }}>Complete Guide</span>
          <h2
            id="seo-content-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Rainbow Six Siege Cheats — ESP, Aimbot &amp; Wallhack Explained
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: 36,
          }}>
            Everything you need to know about Rainbow Six Siege cheats for PC — operator ESP, gadget tracking, aimbot with recoil control, wallhack features, and how each tool fits into ranked and casual play.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {CONTENT_BLOCKS.map(block => (
              <article key={block.title}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: 10,
                }}>
                  {block.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {block.body}
                </p>
              </article>
            ))}
          </div>

          <div style={{
            marginTop: 36,
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(168,85,247,0.06)',
            border: '1px solid rgba(168,85,247,0.18)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}>
              Ready for Rainbow Six Siege? Explore our{' '}
              <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>R6 cheats blog</Link>
              , read about{' '}
              <Link to="/esp" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>R6 ESP</Link>
              {' '}and{' '}
              <Link to="/aimbot" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>R6 Aimbot</Link>
              , or{' '}
              <a href={BUY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
                buy Rainbow Six Siege cheats
              </a>
              {' '}with instant access.
            </p>
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              BUY CHEATS
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
