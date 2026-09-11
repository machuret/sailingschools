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
  {
    slug: 'pittwater',
    name: 'Pittwater',
    state: 'new-south-wales',
    stateName: 'New South Wales',
    title: 'Sailing Schools Pittwater | Learn to Sail Broken Bay',
    description:
      'Sailing courses on Pittwater and Broken Bay — sheltered deep water an hour north of Sydney, and the usual place Sydney schools take beginners and anchoring students.',
    intro:
      'An hour north of the city and a different proposition from Sydney Harbour: deep, sheltered and largely free of commercial traffic. It is where a great deal of Sydney’s beginner and anchoring training actually happens.',
    waters: [
      'Pittwater is a drowned river valley — deep almost to the shore, with steep wooded sides that shelter it from the prevailing weather. That makes it forgiving water to learn in, and unusually good for anchoring practice because you can anchor almost anywhere.',
      'There is no ferry traffic and very little commercial shipping, which removes the pressure that makes Sydney Harbour a demanding first lesson. The trade-off is that you learn less about collision regulations here.',
      'Broken Bay, at the mouth, opens onto the Tasman and gives access to genuine coastal conditions within a short passage when a course needs them.',
      'The Hawkesbury River runs west from Broken Bay into sheltered, scenic water that suits overnight and passage-making exercises.',
    ],
    regions: [
      { name: 'Pittwater', note: 'Deep, sheltered, dozens of anchorages — ideal first-lesson water' },
      { name: 'Broken Bay', note: 'Where it opens to the Tasman; coastal conditions on demand' },
      { name: 'Hawkesbury River', note: 'Sheltered overnight cruising west of the bay' },
      { name: 'Barrenjoey', note: 'The headland at the entrance, and the local pilotage landmark' },
    ],
    taught: ['Beginner sailing', 'Anchoring', 'Keelboat courses', 'RYA yacht training', 'Overnight passages', 'Own boat tuition'],
  },
  {
    slug: 'port-stephens',
    name: 'Port Stephens',
    state: 'new-south-wales',
    stateName: 'New South Wales',
    title: 'Sailing Schools Port Stephens | Nelson Bay Courses',
    description:
      'Sailing courses at Port Stephens and Nelson Bay — a large sheltered harbour two and a half hours north of Sydney, with room to sail and easy coastal access.',
    intro:
      'A large natural harbour with more sailable room than anywhere near Sydney, and a coast outside it that is straightforward to get to. Training here can be sheltered or open on the same day.',
    waters: [
      'Port Stephens is roughly two and a half times the area of Sydney Harbour with a fraction of the traffic, which means beginners get space to make mistakes without an approaching ferry making the decision for them.',
      'The harbour is shallow in places and carries sandbanks that shift, so local pilotage and depth awareness are taught seriously here rather than as an afterthought.',
      'The entrance between the heads runs strongly on the tide and can stand up against a swell, which makes it a genuine piece of pilotage and a useful teaching feature.',
      'Outside, the coast north toward Broughton Island gives short coastal passages and overnight anchorages within an easy day.',
    ],
    regions: [
      { name: 'Nelson Bay', note: 'The main base, with the marina and most operators' },
      { name: 'Port Stephens', note: 'Large sheltered harbour, light traffic, plenty of room' },
      { name: 'Broughton Island', note: 'A short coastal passage and an overnight anchorage' },
      { name: 'The heads', note: 'Tidal entrance that teaches real pilotage' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'Coastal passages', 'Anchoring', 'Navigation', 'Charter preparation'],
  },
  {
    slug: 'gold-coast',
    name: 'the Gold Coast',
    state: 'queensland',
    stateName: 'Queensland',
    title: 'Sailing Schools Gold Coast | Broadwater & Coomera',
    description:
      'Sailing courses on the Gold Coast — the Broadwater, Coomera and the Seaway. Sheltered flat water for beginners with a demanding bar entrance for those going further.',
    intro:
      'Flat sheltered water behind the sand islands, an enormous marine industry, and one of the more demanding bar entrances in the country a few minutes away. The contrast is the point.',
    waters: [
      'The Broadwater is protected by South and North Stradbroke Islands, giving flat water and a long sailing season. It is close to ideal beginner water, and the reason so much training is based here.',
      'It is also shallow and tidal, with marked channels that must be followed. Students learn to read a channel and watch a depth sounder much earlier here than in deep harbours.',
      'The Gold Coast Seaway is the entrance to open water and can be genuinely serious on an ebb tide against a swell. Schools treat crossing it as a taught skill, not a formality.',
      'Coomera and the Broadwater hold one of Australia’s largest concentrations of marine trades, which means boats, instructors and refit expertise are all close at hand.',
    ],
    regions: [
      { name: 'The Broadwater', note: 'Flat, sheltered, shallow — excellent beginner water' },
      { name: 'Coomera', note: 'Marine industry hub and boatyard concentration' },
      { name: 'Gold Coast Seaway', note: 'The bar entrance; taught deliberately, not casually' },
      { name: 'South Stradbroke', note: 'Anchorages a short sail from the marinas' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'Bar crossings', 'Navigation', 'Catamaran handling', 'Own boat tuition'],
  },
  {
    slug: 'sunshine-coast',
    name: 'the Sunshine Coast',
    state: 'queensland',
    stateName: 'Queensland',
    title: 'Sailing Schools Sunshine Coast | Mooloolaba Courses',
    description:
      'Sailing courses on the Sunshine Coast — Mooloolaba and the open coast north of Brisbane, where training happens on genuinely open water rather than inside a bay.',
    intro:
      'Unlike Brisbane and the Gold Coast, there is no large sheltered bay here. Training happens on open coast from the start, which changes what a first day looks like.',
    waters: [
      'Mooloolaba is the main base, with a river entrance and a marina immediately inside. Boats are on open water within minutes of leaving, which suits coastal training and suits nervous beginners less well.',
      'The open coast means swell is a normal condition rather than an occasional one. Students here become comfortable with motion early, and seasickness management is a practical part of the teaching.',
      'The river bar can build on an outgoing tide against a swell, so entrance timing is part of every passage plan rather than an advanced topic.',
      'North toward the Great Sandy Strait and Fraser Island the coast opens into genuine cruising ground, which is where longer passages and mile-building runs head.',
    ],
    regions: [
      { name: 'Mooloolaba', note: 'The main base; marina inside a river entrance' },
      { name: 'The open coast', note: 'Swell as standard, from the first hour' },
      { name: 'Caloundra', note: 'Southern access toward the top of Moreton Bay' },
      { name: 'Great Sandy Strait', note: 'Cruising ground north, toward Fraser Island' },
    ],
    taught: ['Coastal passages', 'Keelboat courses', 'Navigation', 'Bar crossings', 'Mile building', 'Charter preparation'],
  },
  {
    slug: 'geelong',
    name: 'Geelong',
    state: 'victoria',
    stateName: 'Victoria',
    title: 'Sailing Schools Geelong | Corio Bay & Port Phillip',
    description:
      'Sailing courses at Geelong and Corio Bay — sheltered water at the western end of Port Phillip, with a strong club culture and a short sail to open bay conditions.',
    intro:
      'Corio Bay is a bay within a bay: sheltered enough for first lessons, with the full width of Port Phillip a short sail away when a course needs more.',
    waters: [
      'Corio Bay is enclosed at the western end of Port Phillip, which makes it noticeably flatter than the bay proper and a good deal more forgiving on a windy day.',
      'Port Phillip itself is large, shallow and capable of building a short steep chop very quickly in a southerly. Sailors trained here handle waves that are closer together and less predictable than ocean swell.',
      'Geelong has an unusually strong club and dinghy racing culture for a regional city, which means club pathways are a realistic alternative to commercial courses.',
      'The Rip at Port Phillip Heads is one of the more serious tidal entrances in Australia and is not casually crossed — a fact that shapes how local coastal training is planned.',
    ],
    regions: [
      { name: 'Corio Bay', note: 'Sheltered, flat, and the usual first-lesson water' },
      { name: 'Port Phillip', note: 'Large and shallow; short steep chop in a blow' },
      { name: 'Geelong waterfront', note: 'Clubs and the main sailing base' },
      { name: 'Port Phillip Heads', note: 'The Rip — planned for, never assumed' },
    ],
    taught: ['Beginner sailing', 'Dinghy courses', 'Keelboat courses', 'Racing', 'Navigation', 'Heavy weather handling'],
  },
  {
    slug: 'gippsland-lakes',
    name: 'the Gippsland Lakes',
    state: 'victoria',
    stateName: 'Victoria',
    title: 'Sailing Schools Gippsland Lakes | Paynesville & Metung',
    description:
      'Sailing courses on the Gippsland Lakes — Australia’s largest inland waterway, with flat sheltered sailing at Paynesville and Metung and no tide to plan around.',
    intro:
      'Australia’s largest inland navigable waterway: four hundred square kilometres of flat, sheltered water with effectively no tide. Different from every other training ground in the country, and better for some things than any of them.',
    waters: [
      'The lakes are almost tideless, which removes an entire dimension from pilotage and lets a beginner concentrate on the boat. It also means tidal work has to be learned somewhere else.',
      'Water is shallow and channels are marked, so depth awareness and channel discipline are taught from the first day. Running aground here is soft, common and instructive.',
      'Wind funnels between the lakes and can be gusty and directionally unstable, which is good boat-handling practice even though the water stays flat.',
      'Lakes Entrance is the only opening to Bass Strait, and it is a working bar that demands respect and timing. Most lake training never crosses it.',
    ],
    regions: [
      { name: 'Paynesville', note: 'The main sailing base, with clubs and moorings' },
      { name: 'Metung', note: 'Sheltered village base on Bancroft Bay' },
      { name: 'Lake King', note: 'The largest open expanse; room to manoeuvre' },
      { name: 'Lakes Entrance', note: 'The bar to Bass Strait — timed, not assumed' },
    ],
    taught: ['Beginner sailing', 'Keelboat courses', 'Own boat tuition', 'Anchoring', 'Navigation', 'Dinghy courses'],
  },
];

export const cityBySlug = (state: string, slug: string) =>
  cities.find((c) => c.state === state && c.slug === slug);
export const citiesInState = (state: StateKey) => cities.filter((c) => c.state === state);
