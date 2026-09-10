/**
 * School records.
 *
 * Names come from the editorial guide's Part 12 directory. Everything else —
 * website, training base, accreditation — was checked against the school's own
 * site in September 2026, and `checked` records that. Where a detail could not
 * be confirmed it is left unset rather than guessed: the guide's own rule is
 * that nothing is published unverified, and a wrong accreditation or address
 * attributed to a real business is worse than a blank.
 *
 * Several regions here correct the launch data, which was taken from the design
 * rather than from the schools.
 */

export type StateKey =
  | 'new-south-wales'
  | 'queensland'
  | 'victoria'
  | 'western-australia'
  | 'south-australia'
  | 'tasmania';

export type School = {
  name: string;
  state: StateKey;
  /** Training base, where confirmed against the school. */
  region?: string;
  /** Accreditation, where the school states it. */
  scheme?: string;
  /** One-line summary for directory cards. Part 21 caps these at 30-60 words. */
  blurb?: string;
  /** Course types taught, where confirmed. */
  types?: string;
  /** The school's own site, confirmed to resolve and to be this school. */
  website?: string;
  /** Month the record was checked against the school. */
  checked?: string;
  /** Set once a full profile page exists on this site. */
  profile?: string;
  /**
   * Path to a self-hosted logo under /public. Only set where the school has
   * given permission or the use has been checked — never a file scraped from a
   * domain guessed from the school's name.
   */
  logo?: string;
};

const CHECKED = 'September 2026';

export const schools: School[] = [
  // ---- New South Wales -------------------------------------------------
  {
    name: 'Pacific Sailing School',
    state: 'new-south-wales',
    region: 'Rushcutters Bay',
    scheme: 'Australian Sailing',
    blurb: 'Teaching from the Cruising Yacht Club of Australia since 1977, with keelboat and yacht courses on the Harbour.',
    types: 'Beginner · Keelboat · Safety',
    website: 'https://pacificsailingschool.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Flying Fish Australia',
    state: 'new-south-wales',
    region: 'Middle Harbour',
    scheme: 'RYA · Australian Sailing',
    blurb: 'RYA and Australian Sailing centre at Middle Harbour Yacht Club, with professional Yachtmaster programs running 8 to 16 weeks.',
    types: 'Yacht · Yachtmaster · Instructor',
    website: 'https://flyingfishsailing.com.au/',
    checked: CHECKED,
  },
  {
    name: 'SailCorp',
    state: 'new-south-wales',
    region: 'Lavender Bay',
    scheme: 'RYA',
    blurb: 'RYA training centre at the Lavender Bay boatshed, running Start Yachting through Coastal Skipper on a large charter fleet.',
    types: 'Yacht · Liveaboard · Charter',
    website: 'https://www.sailcorp.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Eastsail',
    state: 'new-south-wales',
    region: 'Rushcutters Bay',
    scheme: 'RYA',
    blurb: 'RYA school at Rushcutters Bay covering beginner through Yachtmaster, plus navigation, radio, first aid and sea survival.',
    types: 'Yacht · Skipper · Safety',
    website: 'https://eastsail.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Sydney by Sail',
    state: 'new-south-wales',
    region: 'Darling Harbour',
    blurb: 'Operating from the Festival Pontoon by the Maritime Museum since 1995, with introductory yachting and crew packages.',
    types: 'Beginner · Yacht',
    website: 'https://sydneybysail.com/',
    checked: CHECKED,
  },
  {
    name: 'AusSea Sailing School',
    state: 'new-south-wales',
    region: 'Botany Bay',
    scheme: 'IYT',
    blurb: 'IYT school teaching on the calmer water of Botany Bay near Cronulla, from Try Sail through Bareboat Skipper and ICC.',
    types: 'Beginner · Skipper · Offshore',
    website: 'https://ausseasailingschool.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Liquid Edge Sailing School',
    state: 'new-south-wales',
    region: 'Mort Bay, Balmain',
    scheme: 'IYT',
    blurb: 'IYT school based at Mort Bay in Balmain, with monohull and catamaran courses and fast-track ICC and Bareboat Skipper.',
    types: 'Yacht · Catamaran · Charter',
    website: 'https://www.liquidedge.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Atlas Sailing',
    state: 'new-south-wales',
    region: 'Mosman Bay',
    blurb: 'Sailing and powerboat courses for adults on Sydney Harbour, from first-timers through to skippers.',
    types: 'Beginner · Skipper · Powerboat',
    checked: CHECKED,
  },
  {
    name: 'SailTime Newport',
    state: 'new-south-wales',
    region: 'Newport, Pittwater',
    scheme: 'RYA',
    blurb: 'RYA-affiliated school at the Royal Motor Yacht Club, running Introduction to Sailing through Yachtmaster preparation on Pittwater.',
    types: 'Beginner · Yacht · Yachtmaster',
    website: 'https://sailtimeaustralia.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Yachting Directions',
    state: 'new-south-wales',
  },
  {
    name: 'Ocean Boardroom',
    state: 'new-south-wales',
    region: 'Sydney',
    scheme: 'RYA',
    blurb: 'Shorebased centre founded by an RYA Yachtmaster Ocean instructor and examiner, teaching navigation, radio, diesel and Yachtmaster theory.',
    types: 'Navigation · Radio · Safety · Theory',
    website: 'https://www.oceanboardroom.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Above & Beyond Boating',
    state: 'new-south-wales',
    region: 'Newport, Pittwater',
    scheme: 'RYA · Australian Sailing',
    blurb: 'RYA training centre at the Royal Prince Alfred Yacht Club, with boat handling, navigation, safety and ICC assessments.',
    types: 'Skipper · Navigation · Safety · ICC',
    website: 'https://www.aabboating.com/',
    checked: CHECKED,
  },
  {
    name: 'Marine SafetyWorks',
    state: 'new-south-wales',
    region: 'Sydney',
    scheme: 'Australian Sailing',
    blurb: 'Safety specialist teaching the World Sailing and Australian Sailing Safety & Sea Survival course, marine first aid and radio certificates.',
    types: 'Safety & Sea Survival · First aid · Radio',
    website: 'http://marinesafetyworks.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Balmoral Water Sports Center',
    state: 'new-south-wales',
    region: 'Balmoral Beach, Mosman',
    scheme: 'Australian Sailing',
    blurb: 'Australian Sailing centre at Balmoral Beach for more than 30 years, running Tackers and junior programs alongside dinghy and catamaran lessons.',
    types: 'Kids · Dinghy · Catamaran',
    website: 'https://www.balmoralwatersportscenter.com.au/',
    checked: CHECKED,
  },

  // ---- Queensland ------------------------------------------------------
  {
    name: 'Southern Cross Yachting',
    state: 'queensland',
    region: 'Manly, Moreton Bay',
    scheme: 'RYA',
    blurb: 'RYA training centre at East Coast Marina since 1996, with one-day to five-day courses, charter preparation and coastal mile builders.',
    types: 'Yacht · Skipper · Charter · Powerboat',
    website: 'https://southerncrossyachting.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Mainstay Sailing',
    state: 'queensland',
    region: 'Whitsundays',
    scheme: 'RYA',
    blurb: 'RYA-accredited courses run in the Whitsundays.',
    types: 'Yacht · Charter',
    website: 'https://www.mainstaysailing.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Whitsunday Sailing School',
    state: 'queensland',
    region: 'Whitsundays',
    scheme: 'IYT',
    blurb: 'Teaching in the Whitsundays for over 30 years, liveaboard, from beginner through extended coastal passages, with commercial crossover options.',
    types: 'Beginner · Liveaboard · Offshore · Commercial',
    website: 'https://whitsundaysailingschool.com/',
    checked: CHECKED,
  },
  {
    name: 'Sunshine Sailing Australia',
    state: 'queensland',
    region: 'Mooloolaba, Sunshine Coast',
    scheme: 'RYA · Australian Sailing',
    blurb: 'Based at Mooloolaba Marina, running sail and power training on the Sunshine Coast, in Brisbane and in the Whitsundays.',
    types: 'Yacht · Skipper · Powerboat · ASA',
    website: 'https://learn2sail.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Fraser Coast Sailing Academy',
    state: 'queensland',
    region: 'Hervey Bay',
    scheme: 'Australian Sailing',
    blurb: 'Australian Sailing accredited Discover Sailing Centre running Tackers and junior programs with the Maryborough and Hervey Bay sailing clubs.',
    types: 'Kids · Dinghy',
    website: 'https://frasercoastsailingacademy.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Paper Sailors Rock',
    state: 'queensland',
    region: 'Manly, Moreton Bay',
    scheme: 'RYA',
    blurb: 'RYA centre at the Royal Queensland Yacht Squadron, with shorebased and practical courses, own-boat tuition and radio certificates.',
    types: 'Yacht · Theory · Radio · Own-boat',
    website: 'https://www.papersailorsrock.com.au/',
    checked: CHECKED,
  },

  // ---- Victoria --------------------------------------------------------
  {
    name: 'Yachtmaster Sailing School',
    state: 'victoria',
    region: 'Port Phillip',
    scheme: 'RYA',
    blurb: 'RYA courses on Port Phillip from Competent Crew to Yachtmaster, taught on sea-going yachts rather than inshore training boats.',
    types: 'Yacht · Skipper · Yachtmaster',
    website: 'https://www.yachtmaster.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Blue Water Sailing School',
    state: 'victoria',
    region: 'Docklands, Melbourne',
    blurb: 'Courses from Docklands and in the Whitsundays, covering learn-to-sail, Competent Crew, night sailing and a Bareboat Skipper program with ICC.',
    types: 'Beginner · Yacht · Charter · ICC',
    website: 'https://bluewatersail.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Smooth Sailing School',
    state: 'victoria',
    region: 'Patterson River, Port Phillip',
    blurb: 'Teaching from the mouth of the Patterson River on the eastern shore of Port Phillip Bay.',
    website: 'https://smoothsailingschool.com.au/',
    checked: CHECKED,
  },
  {
    name: 'The Boatshed',
    state: 'victoria',
    region: 'Albert Park Lake, Melbourne',
    scheme: 'Australian Sailing',
    blurb: 'Victoria’s State Sailing Centre on Albert Park Lake, established in 2008 to complement the state’s clubs rather than compete with them.',
    types: 'Beginner · Dinghy · Kids',
    website: 'https://www.theboatshed.net.au/',
    checked: CHECKED,
  },

  // ---- Western Australia -----------------------------------------------
  {
    name: 'Oceanwest RYA Sailing School',
    state: 'western-australia',
    region: 'Busselton, Geographe Bay',
    scheme: 'RYA',
    blurb: 'RYA courses from Port Geographe Marina in the South West, beginner through Yachtmaster, with ICC assessments.',
    types: 'Yacht · Skipper · Yachtmaster · ICC',
    website: 'https://www.oceanwest.net.au/',
    checked: CHECKED,
  },
  {
    name: 'NAVatHOME Australia',
    state: 'western-australia',
    region: 'Online',
    scheme: 'RYA',
    blurb: 'RYA shorebased theory delivered online — navigation and seamanship courses taken at home, at your own pace.',
    types: 'Navigation · Theory · Online',
    website: 'https://www.navathome.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Sailing Eventide',
    state: 'western-australia',
    region: 'Fremantle',
    scheme: 'IYT',
    blurb: 'IYT-accredited school running small-group training and charters from Fremantle aboard a 38-foot sailing catamaran.',
    types: 'Catamaran · Beginner · Charter',
    website: 'https://www.sailingeventide.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Adventure Sailing',
    state: 'western-australia',
    region: 'Busselton, Geographe Bay',
    blurb: 'Catamaran courses from Port Geographe Marina, from the Recreational Skipper’s Ticket through learn-to-sail and commercial maritime qualifications.',
    types: 'Catamaran · Beginner · RST · Commercial',
    website: 'https://www.adventuresailing.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Funcats Watersports',
    state: 'western-australia',
    region: 'South Perth, Swan River',
    blurb: 'A South Perth fixture since 1975, hiring catamarans on the Swan River with lessons included and school programs across WA.',
    types: 'Catamaran · Kids · Schools',
    website: 'https://www.funcats.com.au/',
    checked: CHECKED,
  },

  // ---- South Australia -------------------------------------------------
  {
    name: 'Adelaide Sailing',
    state: 'south-australia',
    region: 'Adelaide',
    blurb: 'Learn-to-sail and certificate courses for bareboat chartering, plus introductory sessions and pleasure cruises.',
    types: 'Beginner · Charter',
    website: 'https://adelaidesailing.com/',
    checked: CHECKED,
  },

  // ---- Tasmania --------------------------------------------------------
  {
    name: 'Tasman Adventures',
    state: 'tasmania',
    region: 'Hobart',
    scheme: 'RYA · Australian Sailing',
    blurb: 'RYA and Australian Sailing school teaching Competent Crew through Yachtmaster from Hobart, with adventure sailing in the Tasmanian wilderness.',
    types: 'Yacht · Skipper · Yachtmaster · Adventure',
    website: 'https://www.tasmanadventures.com.au/',
    checked: CHECKED,
  },
  {
    name: 'Paper Sailors Rock Tasmania',
    state: 'tasmania',
    region: 'Sandy Bay, Hobart',
    scheme: 'RYA',
    blurb: 'The Tasmanian base of the RYA centre, operating from the Royal Yacht Club of Tasmania at Sandy Bay.',
    types: 'Yacht · Theory · Coastal',
    website: 'https://www.papersailorsrock.com.au/',
    checked: CHECKED,
  },
];

export const schoolsInState = (state: StateKey) => schools.filter((s) => s.state === state);
export const schoolsWithScheme = (scheme: string) =>
  schools.filter((s) => s.scheme?.includes(scheme));
