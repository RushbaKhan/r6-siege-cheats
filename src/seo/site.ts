export const SITE_URL = 'https://r6siegecheats.com';
export const SITE_NAME = 'R6SiegeCheats';
export const SITE_SHORT_NAME = 'R6 Siege Cheats';
export const GAME_NAME = 'Rainbow Six Siege';
export const DEVELOPER = 'Ubisoft';
export const BUY_URL = 'https://zadeyo.com/go/RUSHBA?to=%2Fproducts%2Frainbow-six-siege';
export const LOGO_PATH = '/logo.webp';
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;
export const FAVICON_URL = `${SITE_URL}/favicon.ico`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const INDEXNOW_KEY = '7f3c9a2e-1b4d-4e8f-9c6a-2d5e8f1a3b7c';
/** Top demo clip — Google Drive video 1 (web-optimized, lazy-loaded) */
export const VIDEO_PRIMARY = '/videos/r6-demo.mp4';
/** Bottom gameplay clip — Supabase CDN (lazy-loaded) */
export const VIDEO_DEMO = 'https://bryjchknhsrmjdunnfer.supabase.co/storage/v1/object/public/575/0510(3).mp4';
/** @deprecated use VIDEO_PRIMARY on feature pages */
export const VIDEO_SHOWCASE = VIDEO_PRIMARY;
export const VIDEO_HERO = VIDEO_PRIMARY;

export const HERO_SCREENSHOTS = [
  '/screenshots/hero/hero-esp-1.webp',
  '/screenshots/hero/hero-esp-3.webp',
  '/screenshots/hero/hero-esp-4.webp',
  '/screenshots/hero/hero-esp-5.webp',
  '/screenshots/hero/hero-esp-6.webp',
] as const;

export const R6_SCREENSHOTS = [
  '/screenshots/r6-1.webp',
  '/screenshots/r6-2.webp',
  '/screenshots/r6-3.webp',
  '/screenshots/r6-4.webp',
  '/screenshots/r6-5.webp',
] as const;

/** Blog thumbnails — same images as the homepage In-Game slider */
export const BLOG_SCREENSHOTS = R6_SCREENSHOTS;

/** @deprecated Use R6_SCREENSHOTS — kept for legacy imports during migration */
export const SAND_SCREENSHOTS = R6_SCREENSHOTS;

export const PRODUCT_FEATURES = [
  {
    name: 'Operator ESP through walls',
    desc: 'Track attacker and defender operator positions through reinforced walls, soft breach points, and destructible cover — know who holds which angle before you commit.',
  },
  {
    name: 'Advanced Aimbot with recoil control',
    desc: 'Configurable aim assistance with smoothing, FOV limits, and integrated recoil compensation for primary and secondary weapons across all operators.',
  },
  {
    name: 'Gadget ESP - Cameras, traps, drones',
    desc: 'Highlight defender cameras, attacker drones, Kapkan traps, Frost mats, Claymores, and other deployed gadgets so you never walk into utility blind.',
  },
  {
    name: 'Defuser and objective ESP',
    desc: 'See defuser location, bomb site markers, and objective-related information during ranked and unranked rounds when the feature is active.',
  },
  {
    name: 'No recoil for all weapons',
    desc: 'Stabilize weapon kick on automatic fire for every gun in the roster — from SMGs in close quarters to DMRs holding long angles.',
  },
  {
    name: 'Automatic headshot targeting',
    desc: 'Prioritize head-level hitboxes with configurable bone selection for faster eliminations in one-tap gunfights.',
  },
  {
    name: 'Rappel and rotation ESP',
    desc: 'Identify rappel anchors, rotation paths, and flanking routes on multi-floor maps like Clubhouse, Bank, and Chalet.',
  },
  {
    name: 'Penetration indicator',
    desc: 'Shows when your current weapon and ammo type can penetrate the surface between you and a target — critical for wall-bang decisions.',
  },
  {
    name: 'Rank display',
    desc: 'View rank information on operators where supported, helping you gauge opponent skill during ranked matches.',
  },
  {
    name: 'BattlEye bypass system',
    desc: 'External architecture designed with BattlEye compatibility in mind, with updates maintained after Ubisoft patches.',
  },
  {
    name: 'Stream-proof mode',
    desc: 'Hide overlay elements from OBS, Discord, and common capture software when streaming or recording gameplay.',
  },
  {
    name: '24/7 Support',
    desc: 'Round-the-clock product support for setup, configuration, and post-patch compatibility questions.',
  },
  {
    name: 'CLOUD-DMA OPTION',
    desc: 'Optional cloud-based DMA execution for users who want remote hardware isolation from their main gaming PC.',
  },
  {
    name: 'AWS - option',
    desc: 'AWS-hosted deployment option available for cloud-DMA setups requiring remote execution infrastructure.',
  },
] as const;

export const HOME_FAQ = [
  {
    q: 'What features are included in the Rainbow Six Siege cheat?',
    a: 'The package includes operator ESP through walls, advanced aimbot with recoil control, gadget ESP for cameras, traps, and drones, defuser and objective ESP, no recoil for all weapons, automatic headshot targeting, rappel and rotation ESP, penetration indicator, rank display, BattlEye bypass system, stream-proof mode, 24/7 support, and optional CLOUD-DMA and AWS deployment.',
  },
  {
    q: 'Does the R6 cheat include operator ESP?',
    a: 'Yes. Operator ESP shows attacker and defender positions through walls where the feature is supported, with distance and team filtering so you can track threats during pushes, holds, and retakes.',
  },
  {
    q: 'Does the cheat include gadget ESP?',
    a: 'Yes. Gadget ESP highlights cameras, drones, traps, and other deployed utility so you can drone safely, clear rooms efficiently, and avoid walking into defender setups.',
  },
  {
    q: 'Does Rainbow Six Siege ESP show cameras and traps?',
    a: 'Yes. Defender cameras, attacker drones, and common trap placements are rendered on the overlay so you know exactly where utility is positioned on the map.',
  },
  {
    q: 'Does the R6 aimbot include recoil control?',
    a: 'Yes. The advanced aimbot integrates recoil compensation alongside smoothing and FOV settings, keeping shots on target during sustained fire.',
  },
  {
    q: 'Does the cheat include no recoil?',
    a: 'Yes. No recoil is available for all weapons in the game, reducing kick on automatic weapons and making follow-up shots more consistent.',
  },
  {
    q: 'What is the penetration indicator?',
    a: 'The penetration indicator communicates whether your current weapon can shoot through the surface between you and a target — useful for wall-bangs through soft walls, floors, and destructible surfaces.',
  },
  {
    q: 'Does the cheat include defuser and objective ESP?',
    a: 'Yes. Defuser and objective ESP shows relevant objective information during bomb rounds, helping attackers locate the defuser and defenders track plant status.',
  },
  {
    q: 'What is stream-proof mode?',
    a: 'Stream-proof mode hides cheat overlays from common streaming and recording software. It reduces the chance of overlays appearing in clips, though no mode can guarantee invisibility from every capture method.',
  },
  {
    q: 'Are CLOUD-DMA and AWS options available?',
    a: 'Yes. CLOUD-DMA and AWS deployment options are available for users who prefer remote execution. These are optional product tiers — contact support for setup details.',
  },
  {
    q: 'How does product support work?',
    a: '24/7 support is included with your purchase. The team helps with loader setup, feature configuration, post-patch compatibility, and general product questions through ticket and chat channels.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Rainbow Six Siege cheats are built for PC on Windows 10 and Windows 11. Console platforms are not supported.',
  },
] as const;
