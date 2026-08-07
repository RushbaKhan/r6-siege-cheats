import { Link } from 'react-router-dom';
import {
  FeaturePageLayout,
  proseHeading,
  proseParagraph,
} from './FeaturePageLayout';
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../seo/constants';
import { GAME_NAME, R6_SCREENSHOTS, VIDEO_HERO } from '../seo/site';

export function WallhackPage() {
  return (
    <FeaturePageLayout
      seoTitle={PAGE_TITLES.wallhack}
      seoDescription={PAGE_DESCRIPTIONS.wallhack}
      path="/wallhack"
      title="Rainbow Six Siege Wallhack"
      subtitle={`See attacker and defender operators through walls, reinforced barriers, and destructible cover — plus full gadget visibility for ${GAME_NAME}.`}
      heroVideo={VIDEO_HERO}
    >
      <p style={proseParagraph}>
        Rainbow Six Siege wallhack is the visual layer that turns map geometry from an obstacle into an information
        source. While standard gameplay limits you to what your operator's camera can see, wallhack rendering
        projects enemy positions through reinforced walls, soft breach surfaces, floors, and ceilings — giving you
        continuous awareness of where threats sit before you commit to a push, hold, or rotation. In a game where
        one unseen flank ends a round, wallhack is the difference between reacting and controlling.
      </p>

      <h2 style={proseHeading}>Operator Wallhack Through Solid Geometry</h2>
      <p style={proseParagraph}>
        Operator wallhack displays attacker and defender positions through any surface on the map — reinforced
        walls on bomb sites, soft walls in destructible rooms, and multi-floor vertical layouts where enemies hide
        above or below your current position. Each operator appears with distance markers and team identification,
        so you know whether the threat is a roaming defender on the opposite side of the map or an anchor holding
        the site you are about to execute on.
      </p>
      <p style={proseParagraph}>
        On ranked maps like Bank and Consulate, wallhack reveals whether defenders are stacked on site or playing
        a spread setup — information that normally costs two drones and a full prep phase to confirm. Attackers
        can pre-fire common hold angles through soft walls knowing exactly where the operator stands. Defenders
        track push progress through reinforced walls without exposing themselves to attacker drones. This is the
        same operator data powering our dedicated{' '}
        <Link to="/esp" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          Rainbow Six Siege ESP
        </Link>{' '}
        page, rendered with wallhack-specific visualization options.
      </p>

      <h2 style={proseHeading}>Gadget Visibility Through Walls</h2>
      <p style={proseParagraph}>
        Wallhack extends beyond operators to deployed utility — the gadgets that win and lose rounds in Rainbow
        Six Siege. Defender cameras, attacker drones, Kapkan traps, Frost mats, Claymores, and other placed utility
        render through walls with clear labels. Clear a room knowing where every trap sits before you entry frag.
        Drone hallways without losing your drone to a hidden Maestro camera because you saw its position through
        the wall before entering the sightline.
      </p>
      <p style={proseParagraph}>
        During site executes, gadget wallhack shows whether defenders have rotated utility to the pushed site or
        left traps on the opposite bombsite as a deterrent. Attackers save time and drones by routing around active
        utility instead of discovering it through trial and error. The combination of operator wallhack and gadget
        visibility creates a complete tactical overlay — every threat on the map, human or mechanical, rendered
        before you step into its range.
      </p>

      <h2 style={proseHeading}>Wallhack and Penetration in Siege</h2>
      <p style={proseParagraph}>
        Seeing an enemy through a wall is only half the advantage — knowing whether you can shoot through that
        wall completes the picture. Our package pairs wallhack with a penetration indicator that confirms whether
        your current weapon and ammo type can connect through the surface between you and the target. Soft walls
        on Clubhouse, floor bangs on Oregon, and destructible hatches on Chalet become offensive opportunities
        instead of dead angles.
      </p>
      <p style={proseParagraph}>
        Combine wallhack visibility with our{' '}
        <Link to="/aimbot" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          R6 aimbot
        </Link>{' '}
        and no-recoil features for controlled wall-bangs that eliminate anchors holding what they believe is
        solid cover. The aimbot tracks the visible target through the penetrable surface while recoil compensation
        keeps the burst tight enough to secure the kill before the defender can reposition.
      </p>

      <h2 style={proseHeading}>Wallhack Across Maps and Modes</h2>
      <p style={proseParagraph}>
        Every competitive map in Rainbow Six Siege benefits from wallhack differently. Vertical maps like
        Clubhouse and Skyscraper reward ceiling and floor awareness. Linear maps like Border and Coastline
        emphasize long-angle wallhack reads through soft breach points. Bomb mode wallhack adds objective context
        — see where defenders anchor relative to the planted defuser during post-plant scenarios. Unranked and
        quick match benefit equally from the same overlay, with configurable range sliders to keep the HUD clean
        during casual sessions.
      </p>

      <div
        style={{
          margin: '28px 0',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-ghost)',
          aspectRatio: '16/9',
        }}
      >
        <img
          src={R6_SCREENSHOTS[0]}
          alt="Rainbow Six Siege wallhack showing operator positions through walls"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <p style={proseParagraph}>
        Stream-proof mode ensures wallhack overlays stay hidden from OBS, Discord, and common capture software
        when you are streaming or recording. The external architecture runs separately from the game process,
        designed with BattlEye compatibility in mind and updated after every Ubisoft patch. Explore the complete
        capability set on our{' '}
        <Link to="/features" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          features page
        </Link>
        , or read the{' '}
        <Link to="/faq" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          FAQ
        </Link>{' '}
        for common questions about wallhack, ESP, and ranked safety.
      </p>
    </FeaturePageLayout>
  );
}
