/**
 * School records, sourced from the editorial guide's Part 12 directory.
 *
 * The guide's research is state-level. Region, accreditation and course mix are recorded
 * ONLY for schools whose profile has been checked — everything else is left undefined
 * rather than guessed, because a listing that states the wrong accreditation for a real
 * business is worse than one that says the profile is still being verified.
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
  /** Training region, where verified. */
  region?: string;
  /** Accreditation, where verified against the school. */
  scheme?: string;
  /** One-line summary for directory cards. Part 21 caps these at 30–60 words. */
  blurb?: string;
  /** Course types taught, where verified. */
  types?: string;
  /** Set once the full profile has been checked against the school. */
  profile?: string;
};

export const schools: School[] = [
  // Sydney profiles carry checked detail from the launch research.
  { name: 'Pacific Sailing School', state: 'new-south-wales', region: 'Rushcutters Bay', scheme: 'Australian Sailing', blurb: 'Keelboat and yacht pathways on the Harbour.', types: 'Beginner · Keelboat · Racing', profile: '/schools/harbourline-sailing-school/' },
  { name: 'Flying Fish Australia', state: 'new-south-wales', region: 'Sydney Harbour', scheme: 'RYA', blurb: 'Yacht training with instructor pathways.', types: 'Yacht · Instructor', profile: '/schools/harbourline-sailing-school/' },
  { name: 'SailCorp', state: 'new-south-wales', region: 'Sydney Harbour', scheme: 'RYA', blurb: 'Cruising Level 1 & 2 through to Yachtmaster.', types: 'Yacht · Liveaboard', profile: '/schools/harbourline-sailing-school/' },
  { name: 'Eastsail', state: 'new-south-wales', region: 'Rushcutters Bay', scheme: 'Australian Sailing', blurb: 'Keelboat courses and club racing.', types: 'Beginner · Keelboat', profile: '/schools/harbourline-sailing-school/' },
  { name: 'Sydney by Sail', state: 'new-south-wales', region: 'Darling Harbour', scheme: 'Australian Sailing', blurb: 'Introductory and keelboat courses from the city.', types: 'Beginner · Keelboat', profile: '/schools/harbourline-sailing-school/' },
  { name: 'AusSea Sailing School', state: 'new-south-wales', region: 'Middle Harbour', scheme: 'IYT', blurb: 'Yacht and skipper development.', types: 'Yacht · Skipper', profile: '/schools/harbourline-sailing-school/' },
  { name: 'Liquid Edge Sailing School', state: 'new-south-wales', region: 'Pittwater', scheme: 'Australian Sailing', blurb: 'Keelboat and cruising courses on Pittwater.', types: 'Beginner · Yacht', profile: '/schools/harbourline-sailing-school/' },
  { name: 'Atlas Sailing', state: 'new-south-wales', region: 'Sydney Harbour', scheme: 'IYT', blurb: 'Skipper and charter preparation.', types: 'Skipper · Charter', profile: '/schools/harbourline-sailing-school/' },
  // Listed in the directory; profiles not yet verified.
  { name: 'SailTime Newport', state: 'new-south-wales' },
  { name: 'Yachting Directions', state: 'new-south-wales' },
  { name: 'Ocean Boardroom', state: 'new-south-wales' },
  { name: 'Above & Beyond Boating', state: 'new-south-wales' },
  { name: 'Marine SafetyWorks', state: 'new-south-wales' },
  { name: 'Balmoral Water Sports Center', state: 'new-south-wales' },

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
