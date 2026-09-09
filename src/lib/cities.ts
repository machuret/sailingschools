import type { StateKey } from './schools';

/**
 * City and region pages — the highest-intent geography on the site ("sailing schools
 * Melbourne" beats "sailing schools Victoria"). Titles follow the Part 19 location
 * framework. Copy describes the training water, which is geography we can state
 * accurately; it makes no claim about which school trades from which city, because
 * outside Sydney that is not yet verified.
 */
export type CityRecord = {
  slug: string;
  name: string;
  state: StateKey;
  stateName: string;
  title: string;
  description: string;
  /** Hero standfirst. */
  intro: string;
  /** Why this water teaches what it teaches. */
  waters: string[];
  /** Named training areas within reach. */
  regions: { name: string; note: string }[];
  /** Course types the local market covers. */
  taught: string[];
};

export const cities: CityRecord[] = [
  {
    slug: 'sydney',
    name: 'Sydney',
    state: 'new-south-wales',
    stateName: 'New South Wales',
    title: 'Sailing Schools Sydney | Lessons, RYA & Yacht Courses',
    description:
      'Sailing schools in Sydney — Harbour, Middle Harbour, Pittwater and Botany Bay. Beginner lessons, keelboat courses, RYA and IYT yacht training.',
    intro:
      'Australia’s largest sailing-training market, with dedicated providers operating from Sydney Harbour, Middle Harbour, Pittwater and Botany Bay. Beginner sailing, Australian Sailing keelboat courses, RYA and IYT yacht training, catamaran handling, Yachtmaster preparation, racing, safety, radio, diesel and navigation are all taught here.',
    waters: [
      'Sydney Harbour is confined water carrying heavy commercial traffic — ferries on fixed routes, tugs, cruise ships and, at weekends, racing fleets. That combination teaches collision regulations, pilotage and close-quarters boat handling faster than any classroom.',
      'The Heads open onto the Tasman for coastal miles when the forecast allows, so a Sydney school can run both sheltered first lessons and genuine offshore days without relocating.',
      'An hour north, Pittwater and Broken Bay are quieter, deeper and better suited to anchoring practice and liveaboard courses.',
    ],
    regions: [
      { name: 'Sydney Harbour', note: 'Busy, tidal, unforgiving of poor lookout — the main training ground' },
      { name: 'Middle Harbour', note: 'Sheltered and much less traffic; good for first lessons' },
      { name: 'Pittwater & Broken Bay', note: 'Cruising grounds an hour north, with room to anchor' },
      { name: 'Botany Bay', note: 'Open water for the southern suburbs' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'RYA yacht training', 'IYT courses', 'Catamaran handling', 'Yachtmaster preparation', 'Racing', 'Safety & Sea Survival', 'Marine radio', 'Navigation', 'Own-boat tuition'],
  },
  {
    slug: 'melbourne',
    name: 'Melbourne',
    state: 'victoria',
    stateName: 'Victoria',
    title: 'Sailing Schools Melbourne | Learn to Sail Port Phillip',
    description:
      'Sailing schools in Melbourne and on Port Phillip — learn-to-sail courses, keelboat and yacht training, RYA courses and Yachtmaster preparation.',
    intro:
      'Melbourne sails on Port Phillip, an enclosed bay big enough to lose sight of land in and demanding enough to produce well-prepared coastal sailors. Learn-to-sail courses, keelboat training, RYA cruising courses and Yachtmaster preparation are all taught here.',
    waters: [
      'Port Phillip is large, shallow and quick to build a short, steep chop when the southerly arrives — conditions that teach reefing and heavy-weather handling early rather than as an advanced module.',
      'The Rip at the bay’s entrance runs some of the strongest tidal streams in the country, so passage planning and tidal calculation are practical necessities here rather than theory-paper exercises.',
      'Weather changes fast and often. Sailors who learn on Port Phillip tend to arrive at coastal passages already used to making a go/no-go call.',
    ],
    regions: [
      { name: 'Port Phillip', note: 'The main training water — large, shallow, quick to build chop' },
      { name: 'Hobsons Bay', note: 'Closer to the city, more sheltered for first lessons' },
      { name: 'The Rip', note: 'Strong tidal streams at the bay entrance; advanced pilotage' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'RYA yacht training', 'Yachtmaster preparation', 'Racing', 'Navigation', 'Safety & Sea Survival'],
  },
  {
    slug: 'brisbane',
    name: 'Brisbane',
    state: 'queensland',
    stateName: 'Queensland',
    title: 'Sailing Schools Brisbane | Moreton Bay Sailing Courses',
    description:
      'Sailing schools in Brisbane and on Moreton Bay — beginner sailing, keelboat and yacht courses, catamaran training and charter preparation.',
    intro:
      'Brisbane sails on Moreton Bay, sheltered behind Moreton and North Stradbroke Islands. Warm water and a long season make it one of the easier places in Australia to learn, and a common base for yacht training and charter preparation.',
    waters: [
      'Moreton Bay is protected from Pacific swell by its sand islands, which makes for forgiving conditions — but it is also shallow and full of banks, so navigation and tidal awareness matter more here than the flat water suggests.',
      'The long, warm season means courses run year-round rather than clustering into a short summer, which widens the choice of dates considerably.',
      'It is a natural staging point for sailors heading north toward the Whitsundays, so charter preparation and catamaran training are well represented.',
    ],
    regions: [
      { name: 'Moreton Bay', note: 'Sheltered by sand islands; shallow with banks to navigate' },
      { name: 'Brisbane River', note: 'Marina access and close-quarters handling practice' },
      { name: 'Redcliffe & Scarborough', note: 'Northern bay access with quick open-water reach' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'Yacht training', 'Catamaran handling', 'Charter preparation', 'Navigation', 'Marine radio'],
  },
  {
    slug: 'perth',
    name: 'Perth',
    state: 'western-australia',
    stateName: 'Western Australia',
    title: 'Sailing Schools Perth | Learn to Sail WA & Fremantle',
    description:
      'Sailing schools in Perth and Fremantle — learn-to-sail courses, keelboat and RYA yacht training, and boat handling in the Fremantle Doctor.',
    intro:
      'Perth and Fremantle sail in the most reliable sea breeze in the country. The Fremantle Doctor makes for outstanding boat-handling practice and a genuinely demanding afternoon — which is why local schools often start beginners in the morning.',
    waters: [
      'The Fremantle Doctor is a strong afternoon sea breeze that arrives with near-clockwork reliability through summer. Sailors trained in it learn sail trim, reefing and heavy-air handling as routine rather than as special cases.',
      'Cockburn Sound, south of Fremantle, offers more protected water and is the usual venue for first lessons and for courses that need a calm day.',
      'The Swan River gives flat-water dinghy sailing close to the city, with the tradeoff of gusty, shifty conditions between the banks.',
    ],
    regions: [
      { name: 'Fremantle', note: 'Open water and the full sea breeze; demanding afternoons' },
      { name: 'Cockburn Sound', note: 'Sheltered water south of Fremantle for first lessons' },
      { name: 'Swan River', note: 'Flat water close to the city, gusty and shifty' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'RYA yacht training', 'Racing', 'Navigation', 'Catamaran handling'],
  },
  {
    slug: 'whitsundays',
    name: 'the Whitsundays',
    state: 'queensland',
    stateName: 'Queensland',
    title: 'Sailing Schools Whitsundays | Airlie Beach Courses',
    description:
      'Sailing courses in the Whitsundays and Airlie Beach — bareboat charter preparation, catamaran handling and anchoring in Australia’s best cruising ground.',
    intro:
      'Australia’s best-known bareboat charter ground, and training here reflects it. Courses lean toward charter preparation, catamaran handling, anchoring and passage planning rather than club racing — because that is what people come here to do.',
    waters: [
      'The Whitsunday passage is protected by the islands and the Great Barrier Reef beyond, so conditions are usually moderate — but tidal range is significant and the anchorages are the real skill test.',
      'Anchoring is the defining competence here. Most Whitsunday cruising involves picking an anchorage for the forecast wind direction and moving when it shifts, which is exactly the judgement charter companies want to see.',
      'Catamarans dominate the local charter fleet, so multihull-specific handling is far more widely taught here than in the southern capitals.',
    ],
    regions: [
      { name: 'Airlie Beach', note: 'The mainland base for most charter and training operations' },
      { name: 'Whitsunday Passage', note: 'Protected island cruising with significant tidal range' },
      { name: 'Hamilton Island', note: 'Alternative charter base with its own marina' },
    ],
    taught: ['Charter preparation', 'Catamaran handling', 'Anchoring', 'Bareboat skipper training', 'Navigation', 'Passage planning'],
  },
  {
    slug: 'adelaide',
    name: 'Adelaide',
    state: 'south-australia',
    stateName: 'South Australia',
    title: 'Sailing Schools Adelaide | Learn to Sail South Australia',
    description:
      'Sailing schools in Adelaide and on Gulf St Vincent — learn-to-sail courses, keelboat training and yacht instruction in comparatively sheltered gulf water.',
    intro:
      'Adelaide sails on Gulf St Vincent, a large and comparatively sheltered body of water with a gentle summer sea-breeze pattern. It is forgiving water to learn in, and the training market is correspondingly small.',
    waters: [
      'Gulf St Vincent is protected by the Yorke Peninsula, so it sees far less swell than an open coastline and offers a settled sea-breeze pattern through summer.',
      'That makes it good beginner water. It also means sailors working toward coastal or offshore qualifications usually do at least part of their training or sea time interstate.',
      'The gulf is shallow in places and the tidal pattern is unusual, with a period each month of very small tidal movement — a local quirk worth understanding before planning a passage.',
    ],
    regions: [
      { name: 'Gulf St Vincent', note: 'Sheltered by the Yorke Peninsula; settled sea breeze' },
      { name: 'Outer Harbor & Port Adelaide', note: 'Marina access and commercial traffic' },
      { name: 'Holdfast Bay', note: 'Close to the city, the usual first-lesson water' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'Yacht training', 'Racing', 'Navigation'],
  },
  {
    slug: 'hobart',
    name: 'Hobart',
    state: 'tasmania',
    stateName: 'Tasmania',
    title: 'Sailing Schools Hobart | Sailing Courses Tasmania',
    description:
      'Sailing schools in Hobart — the Derwent, the D’Entrecasteaux Channel and Storm Bay. Learn to sail, yacht training and coastal sailing down south.',
    intro:
      'Hobart sails the Derwent estuary and the D’Entrecasteaux Channel, with Storm Bay and the Southern Ocean beyond. It is cold-water, high-latitude sailing with genuine weather, and it produces disproportionately capable sailors.',
    waters: [
      'The Derwent is a deep estuary with strong, shifty gradient winds funnelling down from the mountain — good, demanding water that rewards attention to trim and sail selection.',
      'The D’Entrecasteaux Channel offers sheltered cruising south of the city, with anchorages that stay usable in most conditions.',
      'Storm Bay is the transition to the Southern Ocean, and it is a serious piece of water. Cold-water immersion is a real risk here in a way it is not further north, which is why local training treats safety equipment and recovery seriously.',
    ],
    regions: [
      { name: 'Derwent estuary', note: 'Deep water with strong, shifty gradient winds' },
      { name: 'D’Entrecasteaux Channel', note: 'Sheltered cruising and reliable anchorages' },
      { name: 'Storm Bay', note: 'The step toward the Southern Ocean; cold and serious' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'Yacht training', 'Coastal sailing', 'Safety & Sea Survival', 'Navigation'],
  },
];

export const cityBySlug = (state: string, slug: string) =>
  cities.find((c) => c.state === state && c.slug === slug);
export const citiesInState = (state: StateKey) => cities.filter((c) => c.state === state);
