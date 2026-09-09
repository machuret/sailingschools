/**
 * Recreational boat licence rules, state by state.
 *
 * Rules were checked against the responsible authority in September 2026 and each record
 * carries that date, consistent with the site's convention that no fact is published
 * undated. Licensing rules change; every page tells the reader to confirm with the
 * authority and links to it.
 *
 * The angle that matters to this site's readers: most cruising yachts carry an auxiliary
 * engine well above the power thresholds used in Queensland, WA, Victoria and South
 * Australia. A sailor who needs no licence under sail may still need one to motor out of
 * the marina — which is exactly the trap nobody warns beginners about.
 */

export type LicenceRecord = {
  slug: string;
  state: string;
  abbr: string;
  /** Links to the state school directory where one exists. */
  schoolsPath?: string;
  title: string;
  description: string;
  /** One-line answer, used on the hub comparison table. */
  short: string;
  /** Does a licence exist in this jurisdiction at all? */
  required: 'yes' | 'no' | 'conditional';
  /** The rule as the authority states it. */
  rule: string;
  /** What it means specifically for someone sailing a yacht. */
  sailing: string[];
  /** Registration is a separate obligation from licensing. */
  registration: string;
  minimumAge?: string;
  authority: string;
  authorityUrl: string;
  checked: string;
};

export const licenceChecked = 'September 2026';

export const licences: LicenceRecord[] = [
  {
    slug: 'boat-licence-nsw',
    state: 'New South Wales',
    abbr: 'NSW',
    schoolsPath: '/sailing-schools/new-south-wales/',
    title: 'Do You Need a Boat Licence to Sail in NSW? | 2026',
    description:
      'In NSW a boat driving licence is required to drive a vessel at 10 knots or more. Sailing under sail alone does not need one — but your auxiliary engine might.',
    short: 'Only at 10 knots or more. Under sail alone, no licence.',
    required: 'conditional',
    rule:
      'A general boat driving licence is required to drive any vessel for recreational purposes at 10 knots (about 18.5 km/h) or more on NSW waters. Below that speed, and for vessels under sail alone, no licence is required.',
    sailing: [
      'NSW is the most sailing-friendly licence regime in the country, because the trigger is speed rather than engine power. Sail your yacht without the engine and no licence applies, whatever the boat’s size.',
      'The catch is the auxiliary. The moment you are under power at 10 knots or more, you need the licence. Most displacement cruising yachts will not reach 10 knots under a diesel auxiliary, so in practice many Sydney yacht owners never need one — but a fast planing motor tender certainly will, and so will a performance multihull.',
      'If you are learning on Sydney Harbour or Pittwater, your school holds whatever is required for its own vessels. You do not need a licence to be a student.',
    ],
    registration: 'Registration of the vessel is a separate requirement from licensing the driver.',
    authority: 'Transport for NSW / Service NSW',
    authorityUrl: 'https://www.service.nsw.gov.au/transaction/apply-for-a-general-boat-driving-licence',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-qld',
    state: 'Queensland',
    abbr: 'QLD',
    schoolsPath: '/sailing-schools/queensland/',
    title: 'Do You Need a Boat Licence to Sail in QLD? | 2026',
    description:
      'Queensland requires a marine licence for any vessel with an engine over 4.5 kW. Most cruising yacht auxiliaries exceed that, so sailors are caught by it.',
    short: 'Yes if the engine is over 4.5 kW — which most yacht auxiliaries are.',
    required: 'yes',
    rule:
      'A recreational marine driver licence is required to operate a boat with engine power greater than 4.5 kW (about 6 horsepower). The threshold is engine power, not speed.',
    sailing: [
      'This is the rule that catches Queensland sailors out. A 4.5 kW threshold is roughly 6 horsepower — smaller than the auxiliary in almost any cruising yacht. A 30-foot yacht typically carries something between 15 and 30 horsepower.',
      'So if you own or charter a yacht in Moreton Bay or the Whitsundays, you very probably need a Queensland marine licence to motor it, even though sailing it needs no licence at all. Bareboat charter operators will ask.',
      'Registration has a lower threshold again: recreational boats with an engine or auxiliary of 3 kW or more must be registered. Licensing and registration are separate obligations.',
      'If you do not hold a licence, you may operate under the direct supervision of someone who does and who can take immediate control.',
    ],
    registration: 'Recreational boats with an engine or auxiliary of 3 kW or more must be registered.',
    authority: 'Maritime Safety Queensland',
    authorityUrl: 'https://www.msq.qld.gov.au/licensing',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-vic',
    state: 'Victoria',
    abbr: 'VIC',
    schoolsPath: '/sailing-schools/victoria/',
    title: 'Do You Need a Boat Licence to Sail in Victoria? | 2026',
    description:
      'Victoria requires a marine licence to operate any powered recreational vessel — including a sailing boat with a motor, whatever the engine size.',
    short: 'Yes for any powered vessel, including a yacht with an auxiliary.',
    required: 'yes',
    rule:
      'A marine licence is required to operate a powered recreational vessel on Victorian waters. This includes sailing boats fitted with a motor, and there is no lower power threshold to fall under.',
    sailing: [
      'Victoria draws no distinction by engine size. If your sailing boat has a motor and you operate it, you need a marine licence — an outboard on a trailer-sailer counts the same as a 40-horsepower diesel.',
      'A dinghy with no engine at all needs no licence, which is one practical reason Port Phillip dinghy sailing remains an easy way in.',
      'Any vessel using an engine for propulsion must also be registered, and registration is renewed annually. That is separate from your licence.',
      'The licence is obtained by studying the Victorian Recreational Boating Safety Handbook and passing a computer-based test.',
    ],
    registration: 'Vessels using an engine for propulsion must be registered, renewed every 12 months.',
    authority: 'Safe Transport Victoria',
    authorityUrl: 'https://safetransport.vic.gov.au/on-the-water/recreational-boating/boat-licence-and-registration/',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-wa',
    state: 'Western Australia',
    abbr: 'WA',
    schoolsPath: '/sailing-schools/western-australia/',
    title: 'Do You Need a Skipper’s Ticket to Sail in WA? | 2026',
    description:
      'Western Australia requires a Recreational Skipper’s Ticket for any vessel with a motor over 4.5 kW. Most yacht auxiliaries are well above that threshold.',
    short: 'Yes — an RST for any motor over 4.5 kW (6hp).',
    required: 'yes',
    rule:
      'A Recreational Skipper’s Ticket (RST) is required to operate a recreational vessel with a motor greater than 4.5 kW (6 horsepower). It has applied since April 2008.',
    sailing: [
      'Western Australia calls its licence a Recreational Skipper’s Ticket, and the 4.5 kW threshold means virtually every cruising yacht auxiliary is covered.',
      'The RST is a nationally recognised certificate of competency covering the knowledge and practical skills to operate a powerboat safely. It involves a practical component, not just a written test.',
      'Only the skipper — the person in charge of the vessel — needs to hold it. You must be at least 14 years old, and once issued it does not need renewing and carries no ongoing fee.',
      'None of this is a sailing qualification. An RST says you can safely operate a powerboat; it says nothing about reefing, navigation or handling a yacht under sail.',
    ],
    registration: 'Vessel registration is a separate requirement from holding an RST.',
    minimumAge: '14',
    authority: 'Department of Transport WA',
    authorityUrl: 'https://www.transport.wa.gov.au/marine/recreational-boating/recreational-skippers-ticket/about-rst',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-sa',
    state: 'South Australia',
    abbr: 'SA',
    schoolsPath: '/sailing-schools/south-australia/',
    title: 'Do You Need a Boat Licence to Sail in SA? | 2026',
    description:
      'South Australia requires a boat operator’s licence for any recreational vessel fitted with an engine, regardless of the size of the boat or the engine.',
    short: 'Yes for any engine at all, whatever its size.',
    required: 'yes',
    rule:
      'A boat operator’s licence is required to operate any type of recreational vessel fitted with an engine, regardless of the size of the boat or its engine.',
    sailing: [
      'South Australia has the broadest rule in the country: any engine, any size, licence required. A small outboard on a trailer-sailer is caught just as surely as a yacht’s diesel.',
      'An unpowered dinghy or sailboard needs no licence, so Gulf St Vincent dinghy sailing remains licence-free.',
      'Applicants must be 16 or older and provide proof of age and identity along with a medical and eyesight certificate — the medical requirement is unusual among the states and worth allowing time for.',
      'The licence is about operating a powered vessel safely. It is not a sailing qualification and no charter company will treat it as one.',
    ],
    registration: 'Powered vessel registration is a separate requirement from the operator licence.',
    minimumAge: '16',
    authority: 'Department for Infrastructure and Transport SA',
    authorityUrl: 'https://www.sa.gov.au/topics/boating-and-marine/boat-licence',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-tas',
    state: 'Tasmania',
    abbr: 'TAS',
    schoolsPath: '/sailing-schools/tasmania/',
    title: 'Do You Need a Boat Licence to Sail in Tasmania? | 2026',
    description:
      'Tasmania requires a motor boat licence for vessels of 4hp or more, obtained through a BoatSafe practical course with an accredited provider.',
    short: 'Yes at 4hp or more — and it requires a practical course.',
    required: 'yes',
    rule:
      'A motor boat licence is required to operate a vessel with an engine of 4 horsepower or more, with an exception for hire-and-drive vessels.',
    sailing: [
      'Tasmania’s 4hp threshold is the lowest powered threshold of the mainland-style rules, so any yacht auxiliary is comfortably above it.',
      'The distinctive part is how you get it: a motor boat licence can only be obtained by completing a BoatSafe practical course with an accredited provider. There is no study-and-sit-a-test-alone route.',
      'A full licence is available from age 17.',
      'Given the water — the Derwent, Storm Bay and the Southern Ocean beyond — the practical requirement is arguably the most sensible version of this rule in the country.',
    ],
    registration: 'Vessel registration is separate from the operator licence.',
    minimumAge: '17',
    authority: 'Marine and Safety Tasmania (MAST)',
    authorityUrl: 'https://mast.tas.gov.au/recreational/licences/',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-nt',
    state: 'Northern Territory',
    abbr: 'NT',
    title: 'Do You Need a Boat Licence in the NT? | 2026',
    description:
      'The Northern Territory does not require a recreational boat licence. Safety equipment rules and marine regulations still apply and are enforced.',
    short: 'No. The NT has no recreational boat licence.',
    required: 'no',
    rule:
      'The Northern Territory does not require a licence to operate a recreational boat. Safety equipment requirements and the Territory’s marine rules still apply.',
    sailing: [
      'The Northern Territory is the only Australian jurisdiction with no recreational boat licence at all. You can operate a powered vessel, including a yacht’s auxiliary, without one.',
      'That is not the same as no rules. Minimum safety equipment requirements and the Territory’s marine regulations apply and are enforced, and you can be prosecuted for failing them.',
      'Two practical cautions specific to the Top End: crocodiles are a genuine consideration in coastal and tidal waters, and the tidal ranges around Darwin are among the largest in Australia. Neither is covered by a licence anywhere.',
      'If you sail interstate, you will need whatever the destination state requires. An absence of licensing at home is not portable.',
    ],
    registration: 'Vessel registration requirements still apply in the NT.',
    authority: 'NT Government — Marine Safety',
    authorityUrl: 'https://nt.gov.au/marine/for-all-harbour-and-boating-safety',
    checked: licenceChecked,
  },
  {
    slug: 'boat-licence-act',
    state: 'Australian Capital Territory',
    abbr: 'ACT',
    title: 'Do You Need a Boat Licence in the ACT? | 2026',
    description:
      'The ACT issues no boat licence of its own — you use one from another state. Lake Burley Griffin is regulated separately by the National Capital Authority.',
    short: 'Yes, but the ACT issues none — you use another state’s.',
    required: 'conditional',
    rule:
      'To operate a powered boat on ACT lakes you need a boat licence and a registered boat, but the ACT does not issue licences itself. Licences must be obtained from another state or territory.',
    sailing: [
      'The ACT is the odd one out. A licence is required for powered vessels on ACT waters, but Access Canberra does not issue one — you obtain a licence from another state or territory and use that.',
      'Lake Burley Griffin is regulated by the National Capital Authority rather than the ACT Government. Powered boats there need an NCA permit, currently issued at no charge, and private recreational powered vessels must use electric auxiliary motors on the lake.',
      'For sailing this matters less than it sounds. An unpowered dinghy or keelboat needs no licence, and Canberra sailing is overwhelmingly dinghy and small-keelboat sailing on the lakes.',
      'Canberra sailors heading to the coast for yacht training will be under the rules of NSW or wherever they are training, not the ACT’s.',
    ],
    registration: 'Boats on ACT lakes must be registered unless exempt.',
    authority: 'Access Canberra / National Capital Authority',
    authorityUrl: 'https://www.accesscanberra.act.gov.au/driving-transport-and-parking/licences/boating-on-act-lakes-and-googong-reservoir',
    checked: licenceChecked,
  },
];

export const licenceBySlug = (slug: string) => licences.find((l) => l.slug === slug);
