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
  "schoolName": "Mainstay Sailing",
  "interviewee": "Mainstay Sailing",
  "role": "School team",
  "credentials": [
    "RYA sailing courses",
    "Australian Sailing training",
    "Liveaboard cruising",
    "Private and couples’ training"
  ],
  "portrait": "/images/schools/mainstay-sailing.jpg",
  "logo": "/images/schools/mainstay-sailing-logo.jpg",
  "logoWidth": 2126,
  "logoHeight": 2126,
  "schoolUrl": "https://www.mainstaysailing.com.au/",
  "teamUrl": "https://www.mainstaysailing.com.au/",
  "coursesUrl": "https://www.mainstaysailing.com.au/rya-sailing-courses",
  "publishedAt": "2026-09-28",
  "subjectType": "Organization",
  "slug": "mainstay-sailing",
  "schoolSlug": "mainstay-sailing",
  "title": "Inside Mainstay Sailing: the Whitsundays as a liveaboard classroom",
  "description": "How Mainstay Sailing teaches through life aboard: cruising yachts, island navigation, crew confidence and RYA pathways from Airlie Beach.",
  "readTime": "8 minute read",
  "biography": [
    "Mainstay Sailing teaches from Coral Sea Marina in Airlie Beach, using the Whitsunday islands as a liveaboard classroom. The school offers both RYA and Australian Sailing training, with a focus on small groups and practical participation.",
    "Students learn aboard Kayami, a Jeanneau 44, and Mohawk, a Beneteau Oceanis 40.1. Sailing, navigation, anchoring, cooking and everyday yacht routines become part of the same experience."
  ],
  "introduction": [
    "A sailing course at Mainstay is also a voyage. Students live aboard cruising yachts, share the jobs that keep a boat running and learn while moving through the Whitsunday islands.",
    "In its interview, the Airlie Beach school explains why it chose this format, how beginners become involved and why the confidence to make decisions matters as much as the qualification."
  ],
  "sections": [
    {
      "heading": "A small school with a clear purpose",
      "paragraphs": [
        "Mainstay began with a gap its founders saw in Airlie Beach: an extraordinary sailing area without the RYA school they wanted to build. Their answer was a niche operation focused on quality, time aboard and practical confidence.",
        "The interview describes a school that treats the Whitsundays as part of the teaching. Students travel, work as a crew and see how decisions about weather, navigation and anchoring affect the day."
      ]
    },
    {
      "heading": "Both RYA and Australian Sailing",
      "paragraphs": [
        "Mainstay clarifies that it offers both RYA and Australian Sailing training. The RYA pathway appealed because of its international reach and progression through crew, skipper and advanced qualifications.",
        "Competent Crew is the most common starting point described in the interview. Some students continue to Day Skipper, Coastal Skipper and Yachtmaster; others achieve their goal by becoming useful, confident crew for family and friends. The next course depends on what the sailor wants to do."
      ]
    },
    {
      "heading": "A week aboard is more than consecutive lessons",
      "paragraphs": [
        "Arrival begins with settling into the yacht, meeting the crew and learning the fundamentals. Students quickly become involved in hoisting sails, handling lines, navigation, meals and looking after the boat.",
        "During the week, responsibility grows. Days combine passages between islands with manoeuvres and anchoring; evenings at anchor provide time to discuss the day and prepare for the next one. Yacht systems, personal space and crew routines are learned alongside sailing skills."
      ]
    },
    {
      "heading": "Cruising yachts chosen for what comes next",
      "paragraphs": [
        "The school currently trains aboard Kayami, a Jeanneau 44, and Mohawk, a Beneteau Oceanis 40.1. Mainstay chose cruising yachts because students may later charter, sail or own similar boats.",
        "Living on the same vessel used for training makes its systems part of the course. Students learn how to organise equipment, keep the yacht tidy and safe, share tasks and operate the boat as a whole."
      ]
    },
    {
      "heading": "Nara Inlet, Hook Passage and routes farther north",
      "paragraphs": [
        "Nara Inlet provides sheltered water for anchoring, boat handling and manoeuvring. Hook Passage adds tides, current and the interaction between wind and land to the navigation exercise.",
        "The school also describes trips towards Gloucester Island and Bowen, beyond the main bareboat charter areas. These routes give students another setting in which to plan and navigate, while the passages between islands bring helming, trim, crew communication and weather awareness together.",
        "The itinerary changes with conditions. Mainstay wants students to start assessing the chart, weather and boat themselves, then work out a sensible next step."
      ]
    },
    {
      "heading": "Starting later in life and settling into a crew",
      "paragraphs": [
        "Mainstay has taught students in their sixties and beyond. Its message is that patience, experience and a willingness to learn can be valuable strengths; students need to be able to participate safely and build skills progressively.",
        "Sharing a yacht begins with expectations about communication, jobs, tidiness and personal space. The school sees the group becoming a crew as part of the learning, with friendships often growing through days of sailing and evenings in the cockpit."
      ]
    },
    {
      "heading": "Packing and the rhythm of the seasons",
      "paragraphs": [
        "The school recommends packing lightly in a soft bag, with comfortable clothes, swimwear, sun protection, suitable footwear, a light warm layer and personal medication. Food is included in its liveaboard training.",
        "Mainstay sails throughout the year. Winter commonly brings cooler days and trade winds; spring and summer bring warmer and more variable conditions. Weather awareness and adapting plans remain part of the course in every season."
      ]
    },
    {
      "heading": "Confidence beyond the certificate",
      "paragraphs": [
        "Students often worry they will be the least experienced person aboard. Mainstay describes growing confidence as the biggest change: newcomers begin to take the helm, navigate and contribute to the crew.",
        "The school is developing private training and couples’ sailing experiences alongside its RYA pathway. The theme across the interview is practical independence: understanding the yacht, making decisions and taking useful sailing knowledge into the next experience."
      ]
    }
  ],
  "pullQuote": "A yacht works best when everyone understands that you’re a crew rather than a collection of individuals.",
  "heroImage": "/images/schools/mainstay-sailing.jpg",
  "profileEyebrow": "Meet the school",
  "profileTitle": "Mainstay Sailing",
  "credentialsHeading": "Training discussed",
  "base": "Coral Sea Marina, Airlie Beach",
  "pathways": "RYA and Australian Sailing",
  "focus": "Liveaboard cruising, navigation and crew confidence",
  "relatedLinks": [
    {
      "href": "/rya/competent-crew/",
      "label": "Explore Competent Crew"
    },
    {
      "href": "/sailing-schools/queensland/whitsundays/",
      "label": "Sailing schools in the Whitsundays"
    }
  ]
},
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
