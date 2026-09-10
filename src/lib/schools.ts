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

  // ---- Still to verify --------------------------------------------------
  { name: 'Southern Cross Yachting', state: 'queensland' },
  { name: 'Mainstay Sailing', state: 'queensland' },
  { name: 'Whitsunday Sailing School', state: 'queensland' },
  { name: 'Sunshine Sailing Australia', state: 'queensland' },
  { name: 'Fraser Coast Sailing Academy', state: 'queensland' },
  { name: 'Paper Sailors Rock', state: 'queensland' },

  { name: 'Yachtmaster Sailing School', state: 'victoria' },
  { name: 'Blue Water Sailing School', state: 'victoria' },
  { name: 'Smooth Sailing School', state: 'victoria' },
  { name: 'The Boatshed', state: 'victoria' },

  { name: 'Oceanwest RYA Sailing School', state: 'western-australia' },
  { name: 'NAVatHOME Australia', state: 'western-australia' },
  { name: 'Sailing Eventide', state: 'western-australia' },
  { name: 'Adventure Sailing', state: 'western-australia' },
  { name: 'Funcats Watersports', state: 'western-australia' },

  { name: 'Adelaide Sailing', state: 'south-australia' },

  { name: 'Tasman Adventures', state: 'tasmania' },
  { name: 'Paper Sailors Rock Tasmania programs', state: 'tasmania' },
];

export const schoolsInState = (state: StateKey) => schools.filter((s) => s.state === state);
