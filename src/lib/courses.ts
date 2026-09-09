/**
 * Intent course pages — the /courses/ namespace, as distinct from the scheme namespaces
 * (/rya/, /iyt/, /asa/, /australian-sailing/) which hold a training body's named courses.
 *
 * Copy is the editorial guide's Part 8. Blocks keep document order so a lead-in line stays
 * attached to the list it introduces.
 */

export type CourseBlock =
  | { type: 'para'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'flow'; items: string[] };

export type CourseCategory =
  | 'learn' | 'handling' | 'cruising' | 'charter' | 'navigation' | 'safety' | 'technical';

export type CourseRecord = {
  slug: string;
  /** Page heading. */
  title: string;
  /** Part 19 framework title for <title>. */
  metaTitle: string;
  description: string;
  category: CourseCategory;
  blocks: CourseBlock[];
};

export const courseCategories: { key: CourseCategory; name: string; blurb: string }[] = [
  { key: 'learn', name: 'Learn to sail', blurb: 'First courses, taster days and lessons built for how you want to learn.' },
  { key: 'handling', name: 'Boat handling', blurb: 'The skills that separate a competent skipper from a nervous one.' },
  { key: 'cruising', name: 'Cruising & passages', blurb: 'Turning course certificates into real sea time.' },
  { key: 'charter', name: 'Charter', blurb: 'Training aimed at getting the keys to someone else’s yacht.' },
  { key: 'navigation', name: 'Navigation & weather', blurb: 'Knowing where you are and what is coming.' },
  { key: 'safety', name: 'Safety & radio', blurb: 'The short courses that make a sailor self-reliant.' },
  { key: 'technical', name: 'Technical', blurb: 'Systems, engines and the work of keeping a boat going.' },
];

export const courses: CourseRecord[] = [
  {
    slug: 'radar',
    title: 'Radar Courses for Sailors',
    metaTitle: 'Radar Courses for Sailors Australia | Marine Radar Training',
    description: 'Radar courses for sailors in Australia — interpreting a radar picture, collision avoidance and using radar in poor visibility.',
    category: 'navigation',
    blocks: [
      { type: 'para', text: 'Radar training teaches much more than switching the display on.' },
      { type: 'para', text: 'Topics include:' },
      { type: 'list', items: ['radar components', 'range', 'bearing', 'target discrimination', 'radar reflectors', 'plotting', 'collision avoidance', 'navigation', 'limitations'] },
      { type: 'para', text: 'The RYA Radar course is currently listed as a one-day course with no previous experience requirement.' },
    ],
  },
  {
    slug: 'marine-first-aid',
    title: 'Marine First Aid Courses',
    metaTitle: 'Marine First Aid Courses Australia | First Aid at Sea',
    description: 'Marine first aid courses in Australia — treating injury and illness when help is hours away and the deck will not stay still.',
    category: 'safety',
    blocks: [
      { type: 'para', text: 'Marine first aid should be considered differently from ordinary workplace first aid because help may be hours or days away.' },
      { type: 'para', text: 'RYA\'s marine First Aid course includes topics relevant to boating such as:' },
      { type: 'list', items: ['drowning', 'hypothermia', 'cold shock', 'seasickness', 'dehydration', 'medical assistance by radio', 'helicopter rescue'] },
      { type: 'para', text: 'Australian schools may also offer Australian first-aid qualifications or marine medicine courses.' },
    ],
  },
  {
    slug: 'marine-radio',
    title: 'Marine Radio Courses in Australia',
    metaTitle: 'Marine Radio Courses Australia | VHF, SROCP, LROCP & SRC',
    description: 'Marine radio courses in Australia — VHF, SROCP, LROCP and RYA SRC, and why these certificates are not interchangeable.',
    category: 'safety',
    blocks: [
      { type: 'para', text: 'Sailing schools may offer:' },
      { type: 'list', items: ['VHF radio training', 'SROCP', 'LROCP', 'RYA SRC', 'IYT VHF/SRC', 'practical radio refreshers'] },
      { type: 'para', text: 'Students should not assume these certificates are interchangeable for every purpose.' },
      { type: 'para', text: 'For Australian commercial certificates, AMSA currently identifies SROCP for Sailing Master Coastal and LROCP for Sailing Master Offshore.' },
    ],
  },
  {
    slug: 'diesel-engine',
    title: 'Marine Diesel Engine Courses for Sailors',
    metaTitle: 'Marine Diesel Courses Australia | Engine Training for Sailors',
    description: 'Marine diesel engine courses in Australia — fuel, cooling, filters, bleeding and the faults that strand a yacht within sight of the marina.',
    category: 'technical',
    blocks: [
      { type: 'para', text: 'A sailing yacht\'s engine may only run for a fraction of the voyage, but when needed it can be critical.' },
      { type: 'para', text: 'Courses can cover:' },
      { type: 'list', items: ['diesel cycle', 'fuel', 'fuel contamination', 'filters', 'bleeding', 'cooling', 'raw-water system', 'freshwater cooling', 'impellers', 'belts', 'lubrication', 'electrical starting', 'alternators', 'overheating', 'failure to start', 'routine servicing', 'emergency troubleshooting'] },
      { type: 'para', text: 'A beginner diesel course does not make someone a marine mechanic.' },
      { type: 'para', text: 'Its purpose is to make the yacht owner less helpless when something stops working.' },
    ],
  },
  {
    slug: 'sailing-taster',
    title: 'Sailing Taster and Try Sailing Courses',
    metaTitle: 'Sailing Taster Courses Australia | Try Sailing Days',
    description: 'Try sailing and taster courses in Australia — a few hours on the water with no commitment, and how to tell a genuine introductory lesson from a passenger experience.',
    category: 'learn',
    blocks: [
      { type: 'para', text: 'A taster course is designed for someone who does not yet know whether sailing is for them.' },
      { type: 'para', text: 'It may last:' },
      { type: 'list', items: ['a few hours', 'half a day', 'one day', 'a weekend'] },
      { type: 'para', text: 'The objective is experience rather than qualification.' },
    ],
  },
  {
    slug: 'adult-sailing',
    title: 'Adult Sailing Courses',
    metaTitle: 'Adult Sailing Lessons Australia | Beginner Sailing Courses',
    description: 'Adult sailing courses in Australia — learning to sail as an adult, on dinghies, keelboats or straight onto a cruising yacht.',
    category: 'learn',
    blocks: [
      { type: 'para', text: 'Adults can learn through:' },
      { type: 'list', items: ['dinghy courses', 'keelboat courses', 'yacht courses', 'private lessons', 'liveaboard training'] },
      { type: 'para', text: 'There is no age at which someone is "too late" to begin learning recreational sailing, provided they can safely participate in the chosen course.' },
    ],
  },
  {
    slug: 'couples-sailing',
    title: 'Sailing Courses for Couples',
    metaTitle: 'Sailing Courses for Couples | Learn to Sail Together',
    description: 'Sailing courses for couples in Australia — why both partners should be able to handle the boat, and what to look for in training designed for two.',
    category: 'learn',
    blocks: [
      { type: 'para', text: 'Couples planning to cruise together should train as a team.' },
      { type: 'para', text: 'Both partners should ideally learn:' },
      { type: 'list', items: ['steering', 'reefing', 'engine operation', 'radio use', 'person-overboard recovery', 'anchoring', 'navigation', 'emergency procedures'] },
      { type: 'para', text: 'The goal should not be to create one skipper and one passenger.' },
    ],
  },
  {
    slug: 'private-sailing-lessons',
    title: 'Private Sailing Lessons',
    metaTitle: 'Private Sailing Lessons Australia | One-to-One Tuition',
    description: 'Private sailing lessons in Australia — one-to-one tuition at your own pace, on a school boat or your own yacht.',
    category: 'learn',
    blocks: [
      { type: 'para', text: 'Private instruction is useful when:' },
      { type: 'list', items: ['the student wants more helm time', 'a couple wants to train together', 'a student has a specific weakness', 'a yacht owner wants bespoke training', 'the student does not fit a scheduled course'] },
    ],
  },
  {
    slug: 'sail-trim',
    title: 'Sail Trim Courses',
    metaTitle: 'Sail Trim Courses Australia | Boat Speed & Sail Shape',
    description: 'Sail trim courses in Australia — reading sail shape, controlling twist and draft, and the adjustments that turn an adequate boat into a fast one.',
    category: 'handling',
    blocks: [
      { type: 'para', text: 'Sail trim courses help sailors move beyond merely making the boat move.' },
      { type: 'para', text: 'Training can cover:' },
      { type: 'list', items: ['telltales', 'sheet tension', 'halyard tension', 'outhaul', 'traveller', 'mainsheet', 'vang', 'jib leads', 'twist', 'draft', 'weather helm', 'reefing', 'upwind trim', 'reaching trim', 'downwind trim'] },
    ],
  },
  {
    slug: 'spinnaker',
    title: 'Spinnaker Courses',
    metaTitle: 'Spinnaker Courses Australia | Symmetric & Asymmetric',
    description: 'Spinnaker courses in Australia — hoisting, gybing and dropping symmetric and asymmetric kites without the drama.',
    category: 'handling',
    blocks: [
      { type: 'para', text: 'Spinnaker training can include:' },
      { type: 'list', items: ['symmetrical spinnakers', 'asymmetric spinnakers', 'rigging', 'hoisting', 'trimming', 'gybing', 'dropping', 'crew communication', 'broach recovery', 'downwind tactics'] },
    ],
  },
  {
    slug: 'docking-berthing',
    title: 'Docking and Berthing Courses',
    metaTitle: 'Docking & Berthing Courses Australia | Close-Quarters Handling',
    description: 'Docking and berthing courses in Australia — prop walk, springs, wind and tide, and the close-quarters handling that intimidates most new skippers.',
    category: 'handling',
    blocks: [
      { type: 'para', text: 'Docking is one of the most useful specialist courses for new yacht owners.' },
      { type: 'para', text: 'Training can include:' },
      { type: 'list', items: ['prop walk', 'prop wash', 'wind effects', 'current', 'spring lines', 'ferry gliding', 'reversing', 'confined manoeuvring', 'crew communication', 'aborting a failed approach'] },
      { type: 'para', text: 'For catamarans:' },
      { type: 'list', items: ['differential thrust', 'twin-engine turning', 'windage', 'beam awareness'] },
    ],
  },
  {
    slug: 'anchoring',
    title: 'Anchoring Courses',
    metaTitle: 'Anchoring Courses Australia | Scope, Holding & Technique',
    description: 'Anchoring courses in Australia — scope, seabed, swinging room, testing the set and what to do when the anchor drags at 3am.',
    category: 'handling',
    blocks: [
      { type: 'para', text: 'Anchoring education can cover:' },
      { type: 'list', items: ['anchor types', 'scope', 'seabed', 'depth', 'tide', 'swinging room', 'setting the anchor', 'testing the set', 'dragging', 'retrieving', 'anchoring under sail', 'anchoring under power', 'anchor alarms', 'crowded anchorages'] },
    ],
  },
  {
    slug: 'own-boat-tuition',
    title: 'Own-Boat Tuition',
    metaTitle: 'Own-Boat Tuition Australia | Training on Your Own Yacht',
    description: 'Own-boat tuition in Australia — an instructor aboard your own yacht, working through your systems, your handling and your marina.',
    category: 'handling',
    blocks: [
      { type: 'para', text: 'Once someone buys a yacht, the best school vessel may be their own.' },
      { type: 'para', text: 'Own-boat training can cover:' },
      { type: 'list', items: ['marina handling', 'prop walk', 'bow thrusters', 'reefing', 'furling', 'anchoring', 'autopilot', 'electronics', 'safety equipment', 'engines', 'electrical systems', 'tender handling', 'night sailing', 'emergency steering', 'partner training'] },
    ],
  },
  {
    slug: 'charter-preparation',
    title: 'Yacht Charter Preparation Courses',
    metaTitle: 'Charter Preparation Courses Australia | Bareboat Training',
    description: 'Yacht charter preparation courses in Australia — handover, inventory, systems, anchoring and the charter-company limits that decide whether you get your bond back.',
    category: 'charter',
    blocks: [
      { type: 'para', text: 'Charter preparation sits between general skipper training and real-world chartering.' },
      { type: 'para', text: 'A useful course should cover:' },
      { type: 'list', items: ['charter handover', 'inventory', 'boat systems', 'engine checks', 'anchoring', 'mooring', 'berthing', 'reefing', 'route planning', 'charter-company limits', 'damage avoidance', 'emergency procedures'] },
    ],
  },
  {
    slug: 'catamaran-sailing',
    title: 'Catamaran Sailing Courses',
    metaTitle: 'Catamaran Sailing Courses Australia | Multihull Training',
    description: 'Catamaran sailing courses in Australia — twin engines, differential thrust, high windage and the handling differences that catch out experienced monohull sailors.',
    category: 'cruising',
    blocks: [
      { type: 'para', text: 'Anyone planning to own or charter a catamaran should seek multihull-specific training.' },
      { type: 'para', text: 'Differences include:' },
      { type: 'list', items: ['twin engines', 'differential thrust', 'high windage', 'wide beam', 'reduced heeling', 'different feedback before overloading sails', 'bridge-deck clearance', 'higher loads', 'different reefing considerations', 'different anchoring behaviour', 'manoeuvring from elevated helm stations'] },
      { type: 'para', text: 'Australian providers currently advertising dedicated catamaran pathways include schools using RYA, IYT, ASA or bespoke training.' },
    ],
  },
  {
    slug: 'mile-building',
    title: 'Mile Building Courses',
    metaTitle: 'Mile Building Courses Australia | Sea Miles & Passages',
    description: 'Mile building courses in Australia — converting course competence into logged sea miles, watchkeeping and real passage experience.',
    category: 'cruising',
    blocks: [
      { type: 'para', text: 'Mile building allows sailors to convert theory into experience.' },
      { type: 'para', text: 'Useful skills include:' },
      { type: 'list', items: ['watchkeeping', 'night sailing', 'fatigue management', 'navigation', 'cooking underway', 'coastal traffic', 'weather changes', 'landfall', 'log keeping', 'crew organisation'] },
      { type: 'para', text: 'Mileage alone does not automatically equal qualifying sea time for every certificate.' },
      { type: 'para', text: 'Students pursuing Yachtmaster should verify current qualifying requirements before booking a passage.' },
    ],
  },
  {
    slug: 'passage-making',
    title: 'Passage-Making Courses',
    metaTitle: 'Passage Making Courses Australia | Coastal & Offshore',
    description: 'Passage-making courses in Australia — the full process from plan and preparation through watches and landfall to review.',
    category: 'cruising',
    blocks: [
      { type: 'para', text: 'Passage training focuses on the full process:' },
      { type: 'flow', items: ['PLAN', 'PREPARE BOAT', 'CHECK WEATHER', 'BRIEF CREW', 'DEPART', 'NAVIGATE', 'MANAGE WATCHES', 'ADAPT TO CONDITIONS', 'MAKE LANDFALL', 'REVIEW'] },
      { type: 'para', text: 'It is often the bridge between course competence and real cruising confidence.' },
    ],
  },
  {
    slug: 'night-sailing',
    title: 'Night Sailing Courses',
    metaTitle: 'Night Sailing Courses Australia | Sailing After Dark',
    description: 'Night sailing courses in Australia — lights, watchkeeping, judging distance in the dark and the skills every coastal passage eventually requires.',
    category: 'cruising',
    blocks: [
      { type: 'para', text: 'Night changes perception dramatically.' },
      { type: 'para', text: 'Students learn:' },
      { type: 'list', items: ['navigation lights', 'buoyage at night', 'night vision', 'lookout', 'cockpit discipline', 'electronic navigation', 'pilotage', 'identifying shore lights', 'maintaining situational awareness'] },
    ],
  },
  {
    slug: 'offshore-sailing',
    title: 'Offshore Sailing Courses',
    metaTitle: 'Offshore Sailing Courses Australia | Bluewater Training',
    description: 'Offshore sailing courses in Australia — heavy weather, self-sufficiency, watch systems and the training that precedes a bluewater passage.',
    category: 'cruising',
    blocks: [
      { type: 'para', text: 'Offshore training should not simply mean sailing farther from land.' },
      { type: 'para', text: 'It should prepare students for:' },
      { type: 'list', items: ['weather', 'watches', 'fatigue', 'heavy conditions', 'reefing', 'navigation', 'failures', 'medical issues', 'communication', 'crew welfare', 'emergency planning'] },
    ],
  },
  {
    slug: 'weather',
    title: 'Marine Weather Courses',
    metaTitle: 'Marine Weather Courses Australia | Forecasting for Sailors',
    description: 'Marine weather courses in Australia — reading synoptic charts, understanding fronts and sea breeze, and making a go/no-go call.',
    category: 'navigation',
    blocks: [
      { type: 'para', text: 'Weather education can include:' },
      { type: 'list', items: ['pressure', 'fronts', 'synoptic charts', 'sea breezes', 'thunderstorms', 'coastal effects', 'wind shifts', 'swell', 'GRIB files', 'forecast models', 'Australian Bureau of Meteorology products', 'tropical systems', 'passage weather'] },
      { type: 'para', text: 'For Australian cruising, weather deserves a standalone course cluster.' },
    ],
  },
  {
    slug: 'marine-electrics',
    title: 'Marine Electrical Courses for Sailors',
    metaTitle: 'Marine Electrical Courses Australia | Yacht Electrics',
    description: 'Marine electrical courses in Australia — batteries, charging, wiring and fault-finding on a cruising yacht.',
    category: 'technical',
    blocks: [
      { type: 'para', text: 'Useful topics include:' },
      { type: 'list', items: ['12V systems', '24V systems', 'batteries', 'lithium', 'charging', 'alternators', 'solar', 'shore power', 'inverters', 'circuit protection', 'multimeters', 'fault finding', 'corrosion', 'grounding', 'common electrical failures'] },
    ],
  },
  {
    slug: 'yacht-maintenance',
    title: 'Yacht Maintenance Courses',
    metaTitle: 'Yacht Maintenance Courses Australia | Owner Maintenance',
    description: 'Yacht maintenance courses in Australia — the routine work that keeps a boat reliable, and what an owner can sensibly do themselves.',
    category: 'technical',
    blocks: [
      { type: 'para', text: 'Yacht-owner maintenance courses may cover:' },
      { type: 'list', items: ['rigging inspection', 'deck hardware', 'winches', 'plumbing', 'pumps', 'toilets', 'steering', 'engines', 'electrical systems', 'corrosion', 'antifouling', 'basic repairs', 'preventative maintenance'] },
    ],
  },
];

export const courseBySlug = (slug: string) => courses.find((c) => c.slug === slug);
export const coursesInCategory = (key: CourseCategory) => courses.filter((c) => c.category === key);
