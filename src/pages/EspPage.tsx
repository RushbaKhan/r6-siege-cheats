import { Link } from 'react-router-dom';
import {
  FeaturePageLayout,
  proseHeading,
  proseParagraph,
  type InternalLink,
} from './FeaturePageLayout';
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../seo/constants';
import { GAME_NAME, VIDEO_DEMO, VIDEO_HERO } from '../seo/site';

const INTERNAL_LINKS: InternalLink[] = [
  { label: 'R6 Aimbot', to: '/aimbot' },
  { label: 'R6 Wallhack', to: '/wallhack' },
  { label: 'All Cheat Features', to: '/features' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog & Guides', to: '/blog' },
];

export function EspPage() {
  return (
    <FeaturePageLayout
      seoTitle={PAGE_TITLES.esp}
      seoDescription={PAGE_DESCRIPTIONS.esp}
      path="/esp"
      title="Rainbow Six Siege ESP"
      subtitle={`Operator ESP, gadget ESP, defuser tracking, and rotation intelligence for ${GAME_NAME} ranked and casual matches on PC.`}
      internalLinks={INTERNAL_LINKS}
      heroVideo={VIDEO_HERO}
      demoVideo={VIDEO_DEMO}
    >
      <p style={proseParagraph}>
        Rainbow Six Siege ESP is the foundation of competitive awareness in a game where information wins rounds
        before bullets fly. Unlike generic wallhack overlays, R6 ESP is built around the specific mechanics that
        define Siege — reinforced walls, destructible surfaces, vertical play, deployed utility, and objective
        pressure during bomb rounds. When you can see operator positions through geometry, track cameras and traps
        before clearing a room, and know exactly where the defuser sits during a clutch, every decision becomes
        faster and more deliberate.
      </p>

      <h2 style={proseHeading}>Operator ESP Through Walls</h2>
      <p style={proseParagraph}>
        Operator ESP renders attacker and defender positions in real time, even when line of sight is blocked by
        reinforced walls, soft breach surfaces, or multi-floor verticality. Each overlay can display distance,
        team affiliation, and operator identity where supported — giving you the context to decide whether to
        pre-fire an angle, rotate early, or hold a crossfire setup with your squad. On maps like Bank, Clubhouse,
        and Chalet, where flanks and vertical pushes decide rounds, operator ESP removes the guesswork from
        sound-only reads and camera droning.
      </p>
      <p style={proseParagraph}>
        Configurable team filters let you highlight only enemy operators during ranked pushes, reducing visual
        clutter when your stack is stacked on site. Distance sliders keep the overlay readable in close-quarters
        basement fights on Oregon or long-range engagements across Kafe Dostoyevsky skylights. Combined with our{' '}
        <Link to="/wallhack" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          R6 wallhack
        </Link>{' '}
        rendering, operator ESP gives you a persistent tactical picture that updates every time an enemy shifts
        position — whether they are holding a pixel peek, swinging wide, or setting up a late-round flank.
      </p>

      <h2 style={proseHeading}>Gadget ESP — Cameras, Traps, and Drones</h2>
      <p style={proseParagraph}>
        Gadget ESP is what separates Siege-specific cheats from basic player trackers. Defender cameras, attacker
        drones, Kapkan EDD traps, Frost welcome mats, Claymores, Gu mines, and other deployed utility appear on
        your overlay with clear labels and distance markers. Drone safely through hallways knowing exactly where
        Maestro or Valkyrie cameras sit before you enter a sightline. Push into a room without stepping on a
        hidden Frost mat or triggering a doorway Claymore because the trap positions are rendered before you
        commit.
      </p>
      <p style={proseParagraph}>
        During the action phase, gadget ESP helps attackers dismantle defender setups efficiently — shoot cameras
        through soft walls, pre-aim trap locations, and route around utility instead of feeding free picks. Defenders
        benefit equally: track attacker drones during the prep phase, identify where Thermite or Hibana is breaching,
        and coordinate retakes knowing which gadgets remain active on site. For players who pair ESP with our{' '}
        <Link to="/aimbot" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          advanced R6 aimbot
        </Link>
        , gadget awareness means you engage operators first and utility second — the correct priority order in
        high-level Siege.
      </p>

      <h2 style={proseHeading}>Defuser and Objective ESP</h2>
      <p style={proseParagraph}>
        Bomb rounds are the core of ranked Rainbow Six Siege, and objective information wins more clutches than
        raw aim alone. Defuser and objective ESP surfaces the defuser location, bomb site context, and relevant
        objective markers when the feature is active — helping attackers locate the defuser during post-plant
        scenarios and giving defenders critical information during retake windows. When time is ticking down at
        0:10 and the defuser is planted on a multi-level site, knowing its exact position lets you route through
        the fastest vertical or horizontal path instead of guessing.
      </p>
      <p style={proseParagraph}>
        Attackers running a default plant on a two-site map can track defender rotations through operator ESP while
        simultaneously monitoring whether the defuser has been picked up or repositioned. Defenders holding site
        can confirm plant status and coordinate retakes with full objective visibility. This layer of information
        complements rappel and rotation ESP — together they form a complete picture of where the round is heading
        before the kill feed updates.
      </p>

      <h2 style={proseHeading}>Rappel and Rotation ESP</h2>
      <p style={proseParagraph}>
        Verticality defines Rainbow Six Siege, and rappel anchors are the fastest way to change elevation on almost
        every competitive map. Rappel and rotation ESP identifies rappel points, common rotation paths, and
        flanking routes across multi-floor layouts. On Clubhouse, knowing which external wall an attacker is
        rappelling lets you pre-aim before they swing. On Bank vault pushes, rotation ESP reveals whether enemies
        are dropping from skylights or rotating through elevator shafts — information that normally requires
        map knowledge, sound cues, and drone confirmation.
      </p>
      <p style={proseParagraph}>
        Rotation ESP is especially valuable during mid-round when both teams trade map control. Instead of
        committing three operators to a push while a lone flanker rappels onto site from the opposite side, you
        see the rotation developing and adjust your stack accordingly. Pair this with operator ESP through walls
        and you hold crossfires that punish split pushes instead of getting caught in a pincer. See the full
        feature breakdown on our{' '}
        <Link to="/features" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          Rainbow Six Siege cheat features
        </Link>{' '}
        page for every included capability.
      </p>

      <h2 style={proseHeading}>Why R6 ESP Matters in Ranked</h2>
      <p style={proseParagraph}>
        Rainbow Six Siege is an information game disguised as a shooter. The team that knows operator positions,
        gadget placements, and objective state first controls the pace of every round. R6 ESP delivers that
        information continuously — through prep phase droning, action phase pushes, and post-plant clutches. Stream-proof
        mode keeps overlays hidden from OBS and Discord capture when you are recording or streaming, and the
        external architecture is designed with BattlEye compatibility in mind.
      </p>
      <p style={proseParagraph}>
        Whether you are climbing from Gold to Platinum or holding Champion lobbies, ESP gives you the situational
        awareness that hundreds of hours of map knowledge compress into a single overlay. Read our{' '}
        <Link to="/blog" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          R6 cheat guides
        </Link>{' '}
        for configuration tips, or check the{' '}
        <Link to="/faq" style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
          FAQ
        </Link>{' '}
        for answers about gadget ESP, stream-proof mode, and post-patch compatibility. Every feature listed here
        is included in one subscription with instant delivery and 24/7 support.
      </p>
    </FeaturePageLayout>
  );
}
