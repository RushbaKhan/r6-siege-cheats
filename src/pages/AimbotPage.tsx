import { Link } from 'react-router-dom';
import {
  FeaturePageLayout,
  proseHeading,
  proseParagraph,
} from './FeaturePageLayout';
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../seo/constants';
import { GAME_NAME, VIDEO_DEMO } from '../seo/site';

export function AimbotPage() {
  return (
    <FeaturePageLayout
      seoTitle={PAGE_TITLES.aimbot}
      seoDescription={PAGE_DESCRIPTIONS.aimbot}
      path="/aimbot"
      title="Rainbow Six Siege Aimbot"
      subtitle={`Advanced aim assistance with recoil control, headshot targeting, and penetration indicators for ${GAME_NAME} on PC.`}
      demoVideo={VIDEO_DEMO}
    >
      <p style={proseParagraph}>
        Rainbow Six Siege demands precision in gunfights that last fractions of a second — one-tap headshots from
        Jager or Ash, controlled bursts from Zofia's LMG, and tight angle holds where the first bullet decides
        the exchange. The R6 aimbot in our package is built for these encounters: configurable smoothing, FOV
        limits, bone selection, integrated recoil compensation, and a penetration indicator that tells you when
        your current weapon can wall-bang through the surface between you and a target.
      </p>

      <h2 style={proseHeading}>Advanced Aimbot Configuration</h2>
      <p style={proseParagraph}>
        Every competitive player aims differently, so the aimbot ships with granular controls instead of a single
        on/off switch. Bind activation to any key, set your field of view so the assist only engages targets
        within a natural-looking radius, and choose smoothing values that match your sensitivity profile. Visibility
        checks ensure the aimbot only tracks targets you could legitimately engage — reducing obvious snap behavior
        during ranked matches. Dynamic FOV scaling tightens the assist radius at range and widens it in close
        quarters, matching how real engagements play out on maps like Border and Consulate.
      </p>
      <p style={proseParagraph}>
        Team filters prevent accidental locks on squadmates during coordinated site takes. Maximum distance caps
        let you limit engagement range to plausible values — essential when holding long angles on Villa or
        pushing tight corridors on Theme Park. Every setting is toggleable from the overlay menu, so you can run
        conservative configs in high-Elo lobbies and more aggressive setups in casual playlists.
      </p>

      <h2 style={proseHeading}>Integrated Recoil Control</h2>
      <p style={proseParagraph}>
        Recoil is one of the hardest mechanics to master in Rainbow Six Siege because every operator brings a
        different weapon profile. SMGs kick vertically and drift horizontally during sustained fire. DMRs require
        precise tap timing at range. LMGs punish anyone who sprays without compensation. The advanced aimbot
        integrates recoil control alongside aim assistance — stabilizing weapon kick during automatic fire so
        follow-up shots stay on target instead of climbing over an enemy's head.
      </p>
      <p style={proseParagraph}>
        This works in tandem with the standalone no-recoil feature included in the package. Use aimbot recoil
        compensation for active gunfights where you are tracking a moving target, and enable full no-recoil when
        holding angles with an LMG or spraying through a soft wall. Combined with our{' '}
        <Link to="/esp" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          operator ESP
        </Link>
        , you see the target through cover, confirm penetration with the indicator below, and land consistent
        shots without fighting your weapon's kick pattern.
      </p>

      <h2 style={proseHeading}>Automatic Headshot Targeting</h2>
      <p style={proseParagraph}>
        Headshot damage is the fastest path to eliminations in Siege. The automatic headshot targeting system
        prioritizes head-level hitboxes with configurable bone selection — choose head for maximum damage, neck
        for a balance of speed and forgiveness, or chest when engaging mobile targets at range. In one-tap
        gunfights where both players peek the same angle simultaneously, head-level priority means you win the
        exchange before the enemy's third bullet leaves the barrel.
      </p>
      <p style={proseParagraph}>
        Bone selection is not locked to a single profile. Switch between head and body targeting based on operator
        matchup — head against roaming Jagers holding pixel angles, body against shield operators or anchors
        playing behind deployable cover. Smoothing curves keep the transition between bones natural rather than
        robotic, which matters when kill cams and spectator views are scrutinizing your crosshair movement.
      </p>

      <h2 style={proseHeading}>Penetration Indicator</h2>
      <p style={proseParagraph}>
        Wall-bangs are a core part of Rainbow Six Siege strategy, but not every surface is penetrable with every
        weapon and ammo type. The penetration indicator communicates whether your current loadout can shoot through
        the material between you and a target — soft walls, floors, destructible surfaces, and reinforced sections
        that block certain calibers. Instead of wasting ammunition on an impossible wall-bang or hesitating during
        a critical moment, you get an instant read on whether the shot will connect.
      </p>
      <p style={proseParagraph}>
        Pair the penetration indicator with{' '}
        <Link to="/wallhack" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          wallhack operator ESP
        </Link>{' '}
        to identify targets behind cover, confirm the surface is penetrable, and fire with confidence. On maps
        with heavy soft-wall meta like Clubhouse and Oregon, this combination turns standard hold positions into
        liabilities for defenders who assume solid cover means safety. See every aimbot feature alongside gadget
        ESP and objective tracking on our{' '}
        <Link to="/features" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          full feature list
        </Link>
        .
      </p>

      <h2 style={proseHeading}>Built for BattlEye and Ranked Play</h2>
      <p style={proseParagraph}>
        The aimbot runs through external architecture designed with BattlEye compatibility in mind. Updates ship
        through the loader after Ubisoft patches — no full re-download required. Stream-proof mode hides overlay
        elements from capture software when you are recording gameplay, and 24/7 support helps with configuration
        after every seasonal update. Whether you are pushing for Champion or running scrims with your stack, the
        aimbot gives you the mechanical edge while ESP and wallhack handle the information layer.
      </p>
    </FeaturePageLayout>
  );
}
