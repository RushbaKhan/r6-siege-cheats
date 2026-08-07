import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { ScreenshotSlider } from './ScreenshotSlider';
import { PRODUCT_FEATURES } from '../seo/site';

const espFeatures = PRODUCT_FEATURES.filter(f =>
  ['Operator ESP through walls', 'Gadget ESP - Cameras, traps, drones', 'Defuser and objective ESP', 'Rappel and rotation ESP', 'Rank display'].includes(f.name)
);

const aimbotFeatures = PRODUCT_FEATURES.filter(f =>
  ['Advanced Aimbot with recoil control', 'No recoil for all weapons', 'Automatic headshot targeting', 'Penetration indicator'].includes(f.name)
);

const safetyFeatures = PRODUCT_FEATURES.filter(f =>
  ['BattlEye bypass system', 'Stream-proof mode', '24/7 Support', 'CLOUD-DMA OPTION', 'AWS - option'].includes(f.name)
);

interface FeatureCardProps {
  name: string;
  desc: string;
}

function FeatureCard({ name, desc }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="glass-card feature-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(20px, 2.5vw, 28px)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        borderColor: hovered ? 'var(--border-bright)' : 'var(--border-ghost)',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '8px',
      }}>{name}</h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
      }}>{desc}</p>
    </div>
  );
}

function BulletItem({ label, desc }: { label: string; desc: string }) {
  return (
    <li style={{
      display: 'flex',
      gap: '8px',
      paddingBottom: '10px',
      borderBottom: '1px solid var(--border-ghost)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.5,
      listStyle: 'none',
    }}>
      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>•</span>
      <span>
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{label}</strong>
        {' – '}
        {desc}
      </span>
    </li>
  );
}

export function FeaturesGrid() {
  return (
    <>
      <section id="esp" style={{
        background: 'var(--bg-base)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>R6 ESP</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                Rainbow Six Siege ESP{' '}
                <span className="gradient-text">Operator &amp; Gadget Awareness</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                R6 ESP reveals operator positions through reinforced and destructible walls, tracks defender cameras and attacker drones, and highlights defuser and objective information. Learn more on our{' '}
                <Link to="/esp" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>Rainbow Six Siege ESP</Link>
                {' '}and{' '}
                <Link to="/wallhack" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>R6 Wallhack</Link>
                {' '}pages.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              {espFeatures.map(f => <FeatureCard key={f.name} name={f.name} desc={f.desc} />)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(40px, 6vw, 64px) max(16px, env(safe-area-inset-right), 4vw)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}>
                Rainbow Six Siege <span className="gradient-text">In-Game</span>
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}>
                Real Rainbow Six Siege gameplay from ranked and bomb matches.
              </p>
            </div>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-ghost)',
              aspectRatio: '16/9',
            }}>
              <ScreenshotSlider interval={4000} style={{ width: '100%', height: '100%' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <span className="section-label" style={{ marginBottom: '16px', display: 'flex' }}>R6 Aimbot</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                Rainbow Six Siege Aimbot{' '}
                <span className="gradient-text">Recoil Control &amp; Headshots</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                The R6 aimbot includes smoothing, FOV configuration, automatic headshot targeting, and integrated no recoil for all weapons. Read the full{' '}
                <Link to="/aimbot" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>R6 Aimbot</Link>
                {' '}guide for setup details.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: 'clamp(40px, 6vw, 64px)',
            }}>
              {aimbotFeatures.map(f => <FeatureCard key={f.name} name={f.name} desc={f.desc} />)}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>Support &amp; Deployment – <span className="gradient-text">BattlEye &amp; Stream-Proof</span></h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {safetyFeatures.map(f => <BulletItem key={f.name} label={f.name} desc={f.desc} />)}
              </ul>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginTop: '24px',
              }}>
                See the complete{' '}
                <Link to="/features" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>Rainbow Six Siege Cheat Features</Link>
                {' '}list or browse the{' '}
                <Link to="/faq" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>FAQ</Link>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
