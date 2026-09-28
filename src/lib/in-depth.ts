export type InDepthArticle = {
  slug: string;
  schoolSlug: string;
  schoolName: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  interviewee: string;
  role: string;
  credentials: string[];
  biography: string[];
  portrait: string;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  schoolUrl: string;
  teamUrl: string;
  coursesUrl: string;
  introduction: string[];
  sections: { heading: string; paragraphs: string[] }[];
  pullQuote: string;
  heroImage?: string;
  profileEyebrow?: string;
  profileTitle?: string;
  credentialsHeading?: string;
  base?: string;
  pathways?: string;
  focus?: string;
  subjectType?: 'Person' | 'Organization';
  relatedLinks?: { href: string; label: string }[];
};

/** Long-form school reporting. Add future interviews here to populate the hub. */
export const inDepthArticles: InDepthArticle[] = [
  {
    slug: 'flying-fish-sailing',
    schoolSlug: 'flying-fish-sailing',
    schoolName: 'Flying Fish Sailing',
    title: 'Inside Flying Fish Sailing: from day one to Yachtmaster',
    description: 'An in-depth look at Flying Fish Sailing in Middle Harbour: its teaching approach, boats, qualifications and professional pathways, based on our interview with Founding Director Andy Fairclough.',
    publishedAt: '2026-09-28',
    readTime: '10 minute read',
    interviewee: 'Andy Fairclough',
    role: 'Founding Director',
    credentials: ['AMSA Master 24', 'RYA Yachtmaster Examiner', 'RYA Cruising Instructor Trainer', 'RYA Dinghy Coach Assessor', 'RYA Windsurfing Trainer'],
    biography: [
      'Andy Fairclough is the Founding Director of Flying Fish. Sailing and windsurfing shaped his early interest in the ocean; he later studied oceanography and worked as a senior lecturer at universities in the UK and Spain.',
      'In 1996, Andy and fellow windsurfing enthusiast Andrew Lorant founded Flying Fish from a small apartment on the Isle of Wight. Their first course trained windsurfing instructors in Barbados. More than twenty-five years later, the school has become an international sailing and watersports training business.',
    ],
    portrait: '/images/schools/andy-fairclough.jpg',
    logo: '/images/schools/flying-fish-logo.webp',
    schoolUrl: 'https://flyingfishsailing.com.au/',
    teamUrl: 'https://flyingfishsailing.com.au/about-us/our-team/',
    coursesUrl: 'https://flyingfishsailing.com.au/catalogue/',
    introduction: [
      'Flying Fish occupies an unusual place in Australian sail training. It can give a complete beginner a first weekend on Sydney Harbour, then keep the same student moving through cruising qualifications, offshore miles and professional preparation.',
      'Our interview with Founding Director Andy Fairclough revealed how that breadth developed, what students actually do on the water and where the school sees a qualification ending and genuine command experience beginning.',
    ],
    pullQuote: 'You do not need to have grown up sailing, own a boat or know all the terminology before you start.',
    sections: [
      { heading: 'A winter programme that became a permanent Sydney school', paragraphs: ['Flying Fish began in the UK nearly three decades ago. Sydney entered the story as a way to keep training through the British winter, using existing connections at Middle Harbour to create a UK–Australia Yachtmaster Fast Track programme.', 'Demand turned a seasonal programme into a permanent centre. The school now serves a substantial Australian audience while retaining an international pipeline of students who travel for professional Fast Track training. Its alumni network matters too: former students who are now captains and senior crew often help new graduates find their first foothold in the industry.'] },
      { heading: 'Why Middle Harbour works for teaching', paragraphs: ['Middle Harbour is picturesque, but the choice is practical rather than promotional. Its bays expose students to changing wind effects, the harbour usually provides useful breeze, and an instructor can move from sheltered exercises to the main harbour or offshore water without wasting the day in transit.', 'Compared with traditional UK training grounds, Sydney offers less tidal complexity. It replaces that with local wind patterns, traffic, confined water and quick access to the Tasman Sea—enough variety to build judgement rather than merely rehearse manoeuvres.'] },
      { heading: 'A beginner’s first day is built around participation', paragraphs: ['The school’s beginner model is deliberately active. After the safety briefing and an introduction to lines, clutches and winches, the boat gets moving. Students rotate through positions, steer, tack, identify the no-go zone, work upwind and then learn the downwind points of sail.', 'That sequence is important. A first lesson can easily become a demonstration by the most experienced person aboard. Flying Fish instead wants a newcomer to finish the day having handled the boat and contributed to the crew.'] },
      { heading: 'The qualification depends on the destination', paragraphs: ['Flying Fish works across several systems, but it does not present them as interchangeable badges. The RYA/MCA Yachtmaster route is the school’s reference point for international sailing-yacht and superyacht work. AMSA Sailing Master matters for commercial sailing vessels operating in Australia. For some professionals, the sensible long-term answer is both.', 'Australian Sailing has a different strength, particularly in dinghy instruction and Safety & Sea Survival. The school is also an Australian Registered Training Organisation and continues developing its AMSA-related offer. The useful lesson for students is to work backwards from the waters, vessels and employment market they actually intend to enter.'] },
      { heading: 'Yachtmaster is a beginning, not a finish line', paragraphs: ['Andy describes a newly qualified Yachtmaster in the same terms as a newly qualified pilot: the formal threshold has been crossed, but command experience now matters more than another line on a certificate.', 'Graduates take different routes. Some qualify as cruising instructors and build responsibility through teaching. Others enter the superyacht world in junior deck roles. Flying Fish favours opportunities to command smaller vessels early, because decision-making responsibility is hard to replace with time spent polishing a much larger yacht.'] },
      { heading: 'Boats chosen to retain feel', paragraphs: ['The main training fleet includes Beneteau First 40.7s and a First 40. These boats combine enough comfort for structured courses with the responsiveness needed to make sail trim, balance and helming inputs legible to a student.', 'For offshore work, the school uses Arctos, a locally built 55-foot Radford cutter. The contrast is useful: harbour training can focus on repeated manoeuvres, while a substantial offshore boat introduces watchkeeping, passage routines and the systems thinking required farther from shelter.'] },
      { heading: 'The instructor is part coach, part skipper', paragraphs: ['Qualifications alone do not define the instructor profile. Flying Fish looks for supportive leaders, clear communicators and people who enjoy helping a group become a crew. Technical experience—engineering and diesel knowledge, for example—adds another layer of value aboard.', 'That matters across a customer base of more than 2,000 people a year. A Try Yachting participant wants a safe, enjoyable first encounter; a Yachtmaster candidate needs challenge, theory discipline and honest feedback. The syllabus may define outcomes, but the instructor must still read the person.'] },
      { heading: 'What a prospective student should take from it', paragraphs: ['Flying Fish makes most sense for someone who values a long runway. A student can start with a small commitment, discover whether sailing fits, and still see a route towards cruising, offshore work or a marine career without immediately changing providers.', 'The breadth also makes it especially important to choose by outcome. Ask which boat the course uses, who the qualification is issued by, how much genuine helm time is included and what experience should follow the certificate. The strongest theme in Andy’s answers was not speed through the ladder; it was participation, immersion and command time.'] },
    ],
  },
  {
    slug: 'adventure-sailing',
    schoolSlug: 'adventure-sailing',
    schoolName: 'Adventure Sailing',
    title: 'Inside Adventure Sailing: learning through life at sea',
    description: 'An in-depth look at Adventure Sailing in Port Geographe: family-cruising origins, liveaboard teaching, a 14-boat fleet and recreational and commercial pathways.',
    publishedAt: '2026-09-28',
    readTime: '9 minute read',
    interviewee: 'Adventure Sailing',
    role: 'School team',
    credentials: ['Recreational and liveaboard sailing', 'International Yacht Training certificates', 'Coxswain and Master 24 training', 'Women-only sailing programmes'],
    biography: [
      'Adventure Sailing is based at Port Geographe Marina in Western Australia. The school grew from a family cruising experience and now works across recreational sailing, liveaboard catamaran courses and commercial maritime training.',
      'Its fleet ranges from dinghies and small sailing boats to the 20-metre ketch Starsand and the 13.85-metre performance catamaran Queimarla. Training is delivered in Geographe Bay and, seasonally, around the Abrolhos Islands.',
    ],
    portrait: '/images/schools/adventure-sailing-queimarla.webp',
    heroImage: '/images/schools/adventure-sailing-queimarla.webp',
    logo: '/images/schools/adventure-sailing-logo.webp',
    logoWidth: 1500,
    logoHeight: 1674,
    schoolUrl: 'https://www.adventuresailing.com.au/',
    teamUrl: 'https://www.adventuresailing.com.au/the-team',
    coursesUrl: 'https://www.adventuresailing.com.au/',
    introduction: [
      'Adventure Sailing’s story starts aboard a family cruising catamaran rather than inside a conventional classroom. When the family returned to Western Australia and settled for the daughters’ high-school years, that lived experience became the seed of a training business.',
      'The school now operates from Port Geographe Marina with 14 boats, year-round local sailing and seasonal passages to the Abrolhos Islands. Its account of the work shows a consistent philosophy: students learn by joining the rhythms and responsibilities of life aboard.',
    ],
    pullQuote: 'A typical day onboard starts with a swim and coffee.',
    profileEyebrow: 'The school and its fleet',
    profileTitle: 'Adventure Sailing',
    credentialsHeading: 'Training covered in the interview',
    base: 'Port Geographe, Western Australia',
    pathways: 'IYT, recreational and AMSA commercial training',
    focus: 'Liveaboards, women-only courses and working at sea',
    subjectType: 'Organization',
    relatedLinks: [
      { href: '/iyt/sailing-pathway/', label: 'Understand the IYT sailing pathway' },
      { href: '/pathways/work-on-boats/', label: 'Explore professional pathways' },
    ],
    sections: [
      { heading: 'A school shaped by family cruising', paragraphs: ['The origin story gives Adventure Sailing a distinctive point of view. Living, cruising and schooling children aboard a family catamaran made the boat a home, transport, classroom and daily system all at once. When the family returned and settled ashore for high school, the practical knowledge accumulated aboard became the foundation for the school.', 'Adventure Sailing first operated from Geographe Bay Yacht Club. An office at Port Geographe Marina created direct access to the fleet and protected water for year-round activity, turning a sailing project into a base with room to grow.'] },
      { heading: 'Why Geographe Bay suits practical teaching', paragraphs: ['Geographe Bay’s north-facing coastline and regular southerly winds can produce fast sailing without the same sea state found on a fully exposed coast. The combination gives instructors useful conditions for demonstrating trim, steering and manoeuvres while remaining close to protected marina water.', 'The local yacht clubs and social sailing scene matter as much as the geography. A course is only the start of a sailor’s development; nearby opportunities to crew and practise make it easier to keep skills alive after formal training finishes.'] },
      { heading: 'The catamaran course begins before departure', paragraphs: ['The liveaboard catamaran course starts with a boat induction, bunk allocation and traditional navigation work, normally on the afternoon before departure. That early orientation gives students time to understand the vessel as a working environment before the first full sailing day.', 'Once underway, the day is structured around participation: steering, winch safety, setting and trimming sails, tacking, gybing, heaving-to and practising man-overboard recovery under sail. The goal is not simply to experience a catamaran, but to share the work required to operate one.'] },
      { heading: 'Certificates connected to a charter goal', paragraphs: ['On the five-day liveaboard course, Adventure Sailing says students work towards a VHF radio licence, an International Bareboat Skipper certificate and an International Certificate of Competency issued through International Yacht Training.', 'Prospective students should still confirm the entry requirements and acceptance of any certificate for the country, charter operator and vessel they intend to use. The practical strength of the course is the way radio, navigation and boat-handling skills are taught in the same liveaboard context rather than as isolated subjects.'] },
      { heading: 'Women-only programmes change the learning atmosphere', paragraphs: ['She Skipper and She Sails were created to give women a relaxed, non-competitive setting in which to learn. The school’s description is less about changing the syllabus than changing the social dynamics around it.', 'That distinction can matter. Confidence at the helm often grows when there is room to ask questions, repeat manoeuvres and make decisions without feeling that a more experienced voice will take over. Adventure Sailing says more women-only recreational skipper and overnight liveaboard options are being developed for 2027.'] },
      { heading: 'Commercial training is deliberately immersive', paragraphs: ['The Coxswain and Master 24 training described by the school takes place aboard its 20-metre training ship. Students stand watches, navigate, handle the vessel, cook and operate small boats—an attempt to make the course resemble working life at sea rather than a sequence of shore-based assessments.', 'Adventure Sailing also uses locations such as Geographe Bay and the Abrolhos Islands. The setting adds complexity and purpose, but the deeper benefit is continuity: students see how watchkeeping, maintenance, navigation, meals and teamwork connect across an entire day.'] },
      { heading: 'A fleet with two very different flagships', paragraphs: ['Adventure Sailing reports a fleet of 14 boats, from a 3.5-metre dinghy and small sailing craft to powerboats and two larger vessels. Starsand is a 20-metre sailing ketch with traditional timber-and-brass character, accommodation for up to 10 overnight guests and capacity for larger day groups.', 'Queimarla is a 13.85-metre performance sailing catamaran that can sleep six or carry 10 people for day sailing. Together the two vessels allow the school to move between classic monohull seamanship, catamaran performance, overnight routines and commercial training.'] },
      { heading: 'A day aboard blends routine and exploration', paragraphs: ['A typical liveaboard day begins with a swim and coffee before the crew moves into cooking, navigation, engineering checks and departure preparation. Skills are revised as the boat moves, rather than saved for a separate classroom block.', 'The day then opens into sailing and exploring, followed by anchoring, a sunset drink and dinner. Shore visits and snorkelling may be included. This mixture is central to the appeal: the course is structured, but it also demonstrates why people want the competence to cruise independently.'] },
      { heading: 'Conditions, seasons and the next chapter', paragraphs: ['Adventure Sailing operates all year from Port Geographe. It describes April to June and August to September as its Abrolhos periods, with the larger boats returning from Geraldton around October for the summer season.', 'Winter on the west coast can alternate between light days and strong gales. The school presents changeable conditions as a learning opportunity when it is safe to proceed with experienced sailors aboard. Plans for 2027 include more women-only training, Abrolhos escapes aboard Starsand, introductory three-day catamaran courses and continued work with Indigenous sea rangers, schools and maritime organisations.'] },
    ],
  },
];

export const inDepthBySlug = (slug: string) => inDepthArticles.find((article) => article.slug === slug);
