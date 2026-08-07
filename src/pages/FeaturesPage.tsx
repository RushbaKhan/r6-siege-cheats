import { Link } from 'react-router-dom';
import {
  FeaturePageLayout,
  proseHeading,
  proseParagraph,
} from './FeaturePageLayout';
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../seo/constants';
import { GAME_NAME, PRODUCT_FEATURES } from '../seo/site';

const FEATURE_CONTEXT: Record<string, string> = {
  'Operator ESP through walls':
    'In Rainbow Six Siege ranked, knowing where attackers and defenders sit before you peek an angle is the single biggest advantage. Operator ESP tracks every player through reinforced walls, soft breach surfaces, and multi-floor layouts — showing distance, team, and operator identity on maps like Bank, Clubhouse, and Chalet. Use it during prep phase to confirm roam positions and during executes to pre-fire anchors holding site.',
  'Advanced Aimbot with recoil control':
    'Siege gunfights are decided in milliseconds — one-tap headshots from ARs, controlled bursts from SMGs, and tight angle holds where the first bullet wins. The advanced aimbot combines smoothing, FOV limits, and integrated recoil compensation so your crosshair stays on target during sustained fire. Configure hotkeys, bone selection, and visibility checks for ranked play that looks natural in kill cams.',
  'Gadget ESP - Cameras, traps, drones':
    'Utility wins rounds in R6. Gadget ESP highlights defender cameras, attacker drones, Kapkan EDD traps, Frost welcome mats, Claymores, and other deployed gadgets with distance labels. Drone safely without losing your drone to a hidden camera, clear rooms without stepping on traps, and dismantle defender setups before committing your entry fragger to a contested push.',
  'Defuser and objective ESP':
    'Bomb mode is the ranked standard, and objective information decides more clutches than raw aim. Defuser and objective ESP shows defuser location, bomb site markers, and plant status during action phase — helping attackers locate the defuser in post-plant scenarios and giving defenders the intel they need for coordinated retakes when the round timer hits single digits.',
  'No recoil for all weapons':
    'Every operator in the Siege roster brings a different recoil pattern — from the vertical kick of SMGs in close quarters to the tap-fire discipline required for DMRs at range. No recoil stabilizes weapon kick across the entire weapon pool, making follow-up shots consistent whether you are spraying through a soft wall on Oregon or holding a long angle on Kafe with an LMG.',
  'Automatic headshot targeting':
    'Headshot damage is the fastest elimination method in Rainbow Six Siege. Automatic headshot targeting prioritizes head-level hitboxes with configurable bone selection — head for maximum damage, neck for balance, or chest for mobile targets. In one-tap metas where Jager, Ash, and similar operators dominate, head-level priority wins gunfights before the enemy completes their peek.',
  'Rappel and rotation ESP':
    'Verticality and flanking define Siege strategy. Rappel and rotation ESP identifies rappel anchors, common rotation paths, and flanking routes on multi-floor maps. See when an attacker rappels onto site from the opposite side of your push, track mid-round rotations through elevator shafts on Bank, and hold crossfires that punish split pushes instead of getting pinched.',
  'Penetration indicator':
    'Wall-bangs are core Siege strategy, but not every surface is penetrable with every weapon. The penetration indicator shows whether your current weapon and ammo type can shoot through the material between you and a target — critical for soft walls, floor bangs, and destructible hatches. Pair it with operator ESP to identify targets behind cover and fire with confidence.',
  'Rank display':
    'Ranked matchmaking in Rainbow Six Siege pairs you against players of varying skill. Rank display shows rank information on operators where supported, helping you gauge whether an enemy is a smurf, a boosted account, or a genuine high-Elo player. Adjust your aggression and utility usage based on the skill level you are facing during ranked sessions.',
  'BattlEye bypass system':
    'Rainbow Six Siege runs BattlEye anti-cheat on PC. Our external architecture is designed with BattlEye compatibility in mind — processing game data outside the game executable rather than injecting into the R6 binary. Updates ship through the loader after Ubisoft patches, maintaining compatibility without requiring a full re-download.',
  'Stream-proof mode':
    'Content creators and streamers need overlay privacy. Stream-proof mode hides cheat overlays from OBS, Discord screen share, Streamlabs, and common capture software. Enable it before going live to keep your overlay invisible in clips and VODs — though no mode can guarantee invisibility from every capture method.',
  '24/7 Support':
    'Setup questions, post-patch compatibility, feature configuration, and HWID transfers — support is available around the clock through ticket and chat channels. Average response times stay under 30 minutes, and the team helps you get configured for ranked play within minutes of purchase.',
  'CLOUD-DMA OPTION':
    'For maximum hardware isolation, the CLOUD-DMA option runs cheat processing on remote infrastructure instead of your gaming PC. Your local machine displays the overlay feed while memory reading and calculations happen elsewhere — reducing the local anti-cheat scan surface for users who want an additional layer of separation.',
  'AWS - option':
    'The AWS deployment option provides cloud-hosted execution infrastructure for CLOUD-DMA setups. Processing runs on AWS servers with stable connectivity requirements (25 Mbps+ recommended), delivering overlay output back to your display. Contact support after purchase for setup guidance on cloud-DMA configuration.',
};

export function FeaturesPage() {
  return (
    <FeaturePageLayout
      seoTitle={PAGE_TITLES.features}
      seoDescription={PAGE_DESCRIPTIONS.features}
      path="/features"
      title="Rainbow Six Siege Cheat Features"
      subtitle={`All ${PRODUCT_FEATURES.length} features included in one ${GAME_NAME} subscription — operator ESP, aimbot, wallhack, gadget ESP, no recoil, and more.`}
    >
      <p style={proseParagraph}>
        Every feature below is included in a single Rainbow Six Siege cheat subscription — no tiered upsells,
        no locked modules. Each capability is built specifically for Siege mechanics: reinforced walls, deployed
        utility, bomb objectives, vertical play, and BattlEye-protected ranked matchmaking on PC. Toggle any
        feature on or off from the overlay menu to match your playstyle and lobby.
      </p>

      {PRODUCT_FEATURES.map((feature, index) => (
        <article key={feature.name}>
          <h2 style={{ ...proseHeading, marginTop: index === 0 ? 28 : 36 }}>
            {feature.name}
          </h2>
          <p style={proseParagraph}>{feature.desc}</p>
          <p style={proseParagraph}>
            {FEATURE_CONTEXT[feature.name] ??
              `This feature is designed for ${GAME_NAME} ranked and casual play on PC, with full toggle control from the overlay menu.`}
          </p>
        </article>
      ))}

      <div
        className="glass-card"
        style={{
          marginTop: 36,
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(20px, 3vw, 28px)',
        }}
      >
        <p style={{ ...proseParagraph, marginBottom: 12 }}>
          Dive deeper into individual features:{' '}
          <Link to="/esp" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
            R6 ESP
          </Link>
          ,{' '}
          <Link to="/aimbot" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
            aimbot
          </Link>
          , and{' '}
          <Link to="/wallhack" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
            wallhack
          </Link>
          . Questions? Visit the{' '}
          <Link to="/faq" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
            FAQ
          </Link>{' '}
          or browse our{' '}
          <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
            blog guides
          </Link>
          .
        </p>
      </div>
    </FeaturePageLayout>
  );
}
