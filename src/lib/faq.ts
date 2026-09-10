/**
 * FAQ. The editorial guide (Part 24) answers most of these in a word — "Yes.", "No." —
 * which is right for a quick-reference list and useless as a page.
 *
 * So questions split two ways. Those with real search demand and something substantive to
 * say get their own URL and a full answer. The rest stay as short answers on /faq/, where
 * a one-line answer is exactly what a reader scanning the list wants. Publishing forty-five
 * pages built around the word "No." would be forty-five thin pages.
 */

export type FaqCategory =
  | 'starting' | 'schemes' | 'skipper' | 'charter' | 'safety' | 'owners' | 'working' | 'site';

export type FaqEntry = {
  question: string;
  /** The guide's short answer — used in the index list and in FAQPage markup. */
  short: string;
  category: FaqCategory;
  /** Present when the question gets its own page. */
  page?: {
    slug: string;
    title: string;
    description: string;
    /** Full answer, one paragraph per entry. */
    answer: string[];
    related?: { name: string; href: string }[];
  };
};

export const faqCategories: { key: FaqCategory; name: string }[] = [
  { key: 'starting', name: 'Getting started' },
  { key: 'schemes', name: 'Schemes and qualifications' },
  { key: 'skipper', name: 'Skipper and Yachtmaster' },
  { key: 'charter', name: 'Chartering' },
  { key: 'safety', name: 'Safety, radio and technical' },
  { key: 'owners', name: 'Owners, couples and private tuition' },
  { key: 'working', name: 'Working on the water' },
  { key: 'site', name: 'About this site' },
];

export const faqs: FaqEntry[] = [
  {
    question: 'Can I learn to sail with no experience?',
    short: 'Yes. Australian Sailing, RYA, IYT and ASA all run courses designed for complete beginners.',
    category: 'starting',
    page: {
      slug: 'learn-to-sail-with-no-experience',
      title: 'Can I Learn to Sail With No Experience? | Beginner Guide',
      description:
        'Yes — every major scheme runs courses that assume no previous sailing. What matters more is which boat you start on and whether the course suits your goal.',
      answer: [
        'Yes. Every scheme taught in Australia runs courses that explicitly assume no previous sailing experience. Australian Sailing’s Start Sailing and Start Crewing, RYA Competent Crew and Start Yachting, IYT Try Sailing and International Crew, and ASA 101 are all written for people who have never been on a sailing boat.',
        'The more useful question is not whether you can start, but what you should start on. A dinghy teaches wind awareness fastest and makes you independent soonest. A keelboat is stable, does not capsize, and teaches crew and helm roles. A cruising yacht puts you straight onto the kind of boat you may eventually want to charter or own.',
        'None of these is a prerequisite for the others. You do not have to complete a dinghy course before a yacht course, despite how often that is implied. Choose the route that matches where you want to end up.',
        'One practical caution: a two-hour "sailing experience" and a five-day liveaboard course are both sold as introductions, and they are not comparable. Check the hours on the water, the boat, and how many students share an instructor before comparing prices.',
      ],
      related: [
        { name: 'How to learn to sail from zero', href: '/pathways/complete-beginner/' },
        { name: 'Find the right starting course', href: '/find-a-course/' },
        { name: 'Sailing taster courses', href: '/courses/sailing-taster/' },
      ],
    },
  },
  {
    question: 'Do I have to start in a dinghy?',
    short: 'No. Starting in a dinghy is useful, but it has never been a requirement.',
    category: 'starting',
    page: {
      slug: 'do-i-have-to-start-in-a-dinghy',
      title: 'Do I Have to Start Sailing in a Dinghy? | Straight Answer',
      description:
        'No. Dinghy sailing teaches wind awareness quickly, but it is not a prerequisite for keelboat or yacht courses, and it suits some people better than others.',
      answer: [
        'No. This is probably the most persistent myth in sailing education, and it comes from a time when dinghies were simply the cheapest way into the sport.',
        'The case for dinghies is real. A small boat responds instantly, so you feel the effect of every trim adjustment and every wind shift. You will develop wind awareness faster in a dinghy than anywhere else, and you will be sailing independently — making every decision yourself — within a couple of days.',
        'The case against is equally real for some people. Dinghies capsize, which is part of the training rather than a failure, but it rules them out for anyone with mobility limits, cold-water concerns or simply no wish to swim. And a dinghy teaches nothing about diesel engines, anchoring, berthing or living aboard, all of which matter if your goal is a cruising yacht.',
        'If your ambition is to charter a catamaran in the Whitsundays, spending a season in a dinghy is a pleasant detour rather than a step on the path. Start on the kind of boat you want to sail.',
      ],
      related: [
        { name: 'Three routes in for beginners', href: '/pathways/complete-beginner/' },
        { name: 'Australian Sailing dinghy pathway', href: '/australian-sailing/' },
      ],
    },
  },
  { question: 'Is dinghy sailing useful before yacht sailing?', short: 'Yes, genuinely useful — but not mandatory.', category: 'starting' },
  { question: 'Can adults start directly on cruising yachts?', short: 'Yes. Courses like RYA Competent Crew are built for exactly that.', category: 'starting' },
  { question: 'Can I start directly with RYA?', short: 'Yes. There is no domestic prerequisite before entering the RYA scheme.', category: 'starting' },
  {
    question: 'Is Competent Crew for complete beginners?',
    short: 'Yes. RYA currently lists no previous experience requirement.',
    category: 'starting',
    page: {
      slug: 'is-competent-crew-for-complete-beginners',
      title: 'Is RYA Competent Crew for Complete Beginners? | Course Guide',
      description:
        'Yes — RYA lists no experience requirement for Competent Crew. It is five days, usually liveaboard, and it aims to make you useful crew rather than a skipper.',
      answer: [
        'Yes. RYA currently lists no previous sailing experience as a requirement for Competent Crew, and the course is written on that assumption.',
        'It runs over five days, normally liveaboard on a cruising yacht, and it covers steering, sail handling and changes, reefing, ropework and knots, safety equipment, person-overboard recovery, basic meteorology, keeping a lookout and the general routines of living aboard.',
        'What it is not is a skipper course. The purpose is to make you an active, useful crew member who understands what is happening around them — someone a skipper can give a job to. Taking charge of the boat comes later, at Day Skipper.',
        'It suits beginners heading toward yachts rather than dinghies, couples who both want to be competent, and anyone whose end goal is charter, ownership or offshore passages. If you only want to try sailing once to see whether you like it, Start Yachting is two days rather than five and costs a good deal less.',
      ],
      related: [
        { name: 'RYA Competent Crew in full', href: '/rya/competent-crew/' },
        { name: 'The RYA pathway', href: '/rya/' },
      ],
    },
  },
  { question: 'Can children learn sailing?', short: 'Yes. Tackers starts from about age seven.', category: 'starting' },
  { question: 'What is Tackers?', short: 'Australian Sailing’s junior pathway, built around fun and water confidence first.', category: 'starting' },
  { question: 'What is OutThere Sailing?', short: 'A social sailing pathway aimed at teenagers who have outgrown Tackers.', category: 'starting' },
  { question: 'What comes after Tackers?', short: 'Junior dinghy sailing, racing, or other youth development programs.', category: 'starting' },
  { question: 'What is the Australian Sailing adult dinghy pathway?', short: 'Start Sailing 1, Start Sailing 2, Better Sailing, then optional racing development.', category: 'starting' },
  { question: 'What is the Australian Sailing keelboat pathway?', short: 'Start Crewing, Start Helming and Start Skippering, with Spinnakers and Start Racing beyond.', category: 'starting' },

  { question: 'What is the RYA?', short: 'A major international training organisation with a deep cruising-yacht pathway.', category: 'schemes' },
  { question: 'What is IYT?', short: 'International Yacht Training Worldwide — recreational and professional yacht education.', category: 'schemes' },
  { question: 'What is ASA?', short: 'American Sailing, whose certifications are offered by selected schools internationally.', category: 'schemes' },
  {
    question: 'Which is better, RYA or IYT?',
    short: 'Neither is automatically better. The right one depends on your goal, your boat and what is taught near you.',
    category: 'schemes',
    page: {
      slug: 'rya-or-iyt-which-is-better',
      title: 'RYA or IYT — Which Is Better? | Honest Comparison',
      description:
        'Neither is automatically better. RYA has the strongest Australian availability; IYT has dedicated catamaran certificates. Availability usually decides.',
      answer: [
        'Neither is automatically better, and any school telling you otherwise is selling something. The two schemes cover very similar ground with different vocabulary: RYA runs Competent Crew, Day Skipper and Coastal Skipper toward Yachtmaster; IYT runs International Crew, Flotilla Skipper and Bareboat Skipper toward the same Yachtmaster titles.',
        'Three things genuinely separate them in Australia. First, availability: RYA has considerably more recognised training centres here, which in practice means more dates, more locations and more competition on price. Second, catamarans: IYT offers dedicated multihull certificates at every skipper level, which is the clearest catamaran pathway of any scheme. Third, entry requirements: IYT Bareboat Skipper is not a beginner course and currently requires more than 200 nautical miles and 10 days at sea.',
        'For most Australian sailors heading toward monohull charter or ownership, RYA wins on availability alone. For someone whose goal is specifically a cruising catamaran, IYT’s multihull certificates are worth seeking out.',
        'Neither is a commercial licence, and neither is a boat licence. If you intend to work on the water, the AMSA pathway sits outside both schemes entirely.',
      ],
      related: [
        { name: 'RYA vs IYT vs ASA, side by side', href: '/qualifications/rya-vs-iyt-vs-asa/' },
        { name: 'RYA courses', href: '/rya/' },
        { name: 'IYT courses', href: '/iyt/' },
      ],
    },
  },
  {
    question: 'Is RYA Day Skipper a boat licence?',
    short: 'No. It is a training certificate, not a licence issued by any government.',
    category: 'skipper',
    page: {
      slug: 'is-day-skipper-a-boat-licence',
      title: 'Is RYA Day Skipper a Boat Licence? | What It Actually Is',
      description:
        'No. Day Skipper is a training certificate from a voluntary scheme, not a government licence. Australian recreational boat licences are issued by each state.',
      answer: [
        'No. RYA Day Skipper is a certificate awarded by a training scheme, not a licence issued by a government or regulator. Nobody can revoke it, and holding it does not by itself grant you permission to do anything.',
        'This confuses people because in Australia recreational boat licences genuinely exist — they are issued state by state, with different rules in New South Wales, Queensland, Victoria and so on, and they usually apply to powered vessels above a certain speed or size. A Day Skipper certificate is not one of those and does not substitute for one.',
        'What Day Skipper does do is demonstrate to a charter company, an insurer or a crew that you have been assessed as capable of skippering a small cruising yacht in familiar waters by day. That is genuinely valuable — it is simply not a legal permission.',
        'If you intend to work commercially, neither Day Skipper nor Yachtmaster is an Australian commercial qualification. AMSA administers those separately.',
      ],
      related: [
        { name: 'The RYA pathway', href: '/rya/' },
        { name: 'Recreational vs commercial', href: '/qualifications/rya-vs-iyt-vs-asa/' },
      ],
    },
  },
  { question: 'Does Day Skipper make me an expert skipper?', short: 'No. It is an important stage in skipper development, not the end of one.', category: 'skipper' },
  {
    question: 'Is Yachtmaster a five-day course?',
    short: 'No. Yachtmaster is an examination against a standard, taken after qualifying sea time.',
    category: 'skipper',
    page: {
      slug: 'is-yachtmaster-a-five-day-course',
      title: 'Is Yachtmaster a Five-Day Course? | How It Actually Works',
      description:
        'No. Yachtmaster is an independent examination taken after substantial qualifying sea time. Preparation courses exist and are not the same thing.',
      answer: [
        'No, and this is the single most misleading thing said about sailing qualifications. Yachtmaster is not a course you attend and pass. It is an examination conducted by an independent examiner against a published standard, and you become eligible for it by accumulating qualifying sea time — miles, days, night hours and passages — over years rather than weeks.',
        'What you can book in five days is a preparation course. These are genuinely useful: they run you through the exam format, expose weaknesses and get you used to being assessed. But a preparation course is not the certificate, and a school advertising "Yachtmaster in five days" is describing the prep, not the outcome.',
        'There are three levels — Coastal, Offshore and Ocean — with different sea-time and passage requirements, and the requirements change from time to time. Verify the current ones with the awarding body before planning your mile building around them, because not every mile you sail counts toward every certificate.',
        'The right time to sit it is when your experience is genuinely ready, not when the title starts to sound appealing. Examiners are experienced sailors and the standard is real.',
      ],
      related: [
        { name: 'RYA and IYT Yachtmaster routes compared', href: '/qualifications/rya-vs-iyt-vs-asa/' },
        { name: 'Mile building courses', href: '/courses/mile-building/' },
      ],
    },
  },
  { question: 'What is the difference between Coastal Skipper and Yachtmaster?', short: 'Coastal Skipper is a training course. Yachtmaster is a Certificate of Competence.', category: 'skipper' },
  {
    question: 'Do I need an ICC?',
    short: 'It depends entirely on your destination, your eligibility and the charter operator.',
    category: 'charter',
    page: {
      slug: 'do-i-need-an-icc',
      title: 'Do I Need an ICC to Charter? | What the ICC Really Is',
      description:
        'It depends where you are chartering and who from. The ICC is not a global boat licence, eligibility rules apply, and many destinations never ask for one.',
      answer: [
        'It depends, and the honest answer is that you should ask the charter company before you spend money on obtaining one.',
        'The International Certificate of Competence is a document recognised by a number of countries, mainly in Europe and around the Mediterranean, as evidence that the holder is competent to operate a pleasure craft. Several European inland and coastal jurisdictions genuinely require it, and a charter company operating there will refuse a booking without one.',
        'It is not a global boat licence. It is not required to charter in Australia, and it is not required in many popular destinations. Eligibility rules also apply — the ICC is issued through particular routes and to particular categories of applicant, and holding a sailing qualification does not automatically entitle you to one.',
        'The practical sequence is: pick the destination, ask the charter company exactly what they require, and only then decide whether an ICC is part of your training plan. Chartering companies frequently assess your logged experience alongside any certificate, and a thin logbook can matter more than a missing ICC.',
      ],
      related: [
        { name: 'IYT and the ICC', href: '/iyt/' },
        { name: 'Charter preparation courses', href: '/courses/charter-preparation/' },
      ],
    },
  },
  { question: 'Is the ICC a global boat licence?', short: 'No. It is recognised in some jurisdictions, not universally.', category: 'charter' },
  {
    question: 'What qualification do I need to charter in the Whitsundays?',
    short: 'It varies by company, and your logged experience is usually assessed alongside any certificate.',
    category: 'charter',
    page: {
      slug: 'qualification-to-charter-whitsundays',
      title: 'What Qualification to Charter in the Whitsundays? | Bareboat',
      description:
        'Requirements vary by charter company. Most assess your logged experience alongside any certificate, and many run a skipper briefing instead.',
      answer: [
        'Requirements vary between charter companies, and there is no single certificate that guarantees you the keys.',
        'Many Whitsunday bareboat operators do not demand a formal qualification at all. Instead they assess your experience — what you have sailed, where, how recently, and in what role — and run a compulsory skipper briefing before you leave, covering their vessel, their anchorages and their operating limits. Some will send a skipper out with you for the first few hours if they are not satisfied.',
        'A recognised qualification helps in two ways: it shortens that conversation, and it may reduce your bond or excess. Day Skipper, Bareboat Skipper or equivalent is what most operators recognise. If you are taking a catamaran and all your experience is on monohulls, expect that to come up — and consider multihull-specific training first.',
        'The competence they actually care about is anchoring. Whitsunday cruising is a sequence of anchorages chosen for the forecast wind, and moving when it shifts. Demonstrating you can do that well matters more than any certificate.',
      ],
      related: [
        { name: 'Sailing schools in the Whitsundays', href: '/sailing-schools/queensland/whitsundays/' },
        { name: 'Charter preparation courses', href: '/courses/charter-preparation/' },
        { name: 'Anchoring courses', href: '/courses/anchoring/' },
      ],
    },
  },
  {
    question: 'Should I take a catamaran course before chartering a catamaran?',
    short: 'Strongly advisable, particularly if all your experience is on monohulls.',
    category: 'charter',
    page: {
      slug: 'catamaran-course-before-chartering',
      title: 'Do I Need a Catamaran Course Before Chartering? | Multihull',
      description:
        'Strongly advisable if your experience is all monohull. Twin engines, high windage and no heeling feedback make a catamaran handle very differently.',
      answer: [
        'Strongly advisable, and more so the more monohull experience you have — because much of what you have learned will actively mislead you.',
        'A catamaran manoeuvres on differential thrust from two widely spaced engines, which makes it far more controllable in a marina than a monohull once you understand it, and far more alarming until you do. It has high windage and a wide beam, so it moves sideways in a crosswind in a way that surprises people, and berth selection matters more.',
        'The bigger issue is feedback. A monohull tells you it is overpressed by heeling. A catamaran does not heel meaningfully, so the warning you have relied on for years simply is not there. Reefing decisions have to be made from wind speed and sail load rather than from feel, and getting that wrong on a cruising cat is genuinely dangerous.',
        'Add bridge-deck clearance, different anchoring behaviour, higher loads on every line, and helm stations that are often elevated and offset. A day or two of multihull-specific training before a charter is cheap compared with the excess on a damaged catamaran.',
      ],
      related: [
        { name: 'Catamaran sailing courses', href: '/courses/catamaran-sailing/' },
        { name: 'IYT catamaran certificates', href: '/iyt/' },
      ],
    },
  },
  { question: 'What is bareboat charter?', short: 'A charter where you operate the vessel yourself, without a professional skipper aboard.', category: 'charter' },

  { question: 'Do I need a marine radio qualification?', short: 'It depends on the equipment aboard and the operating context.', category: 'safety' },
  { question: 'What is SROCP?', short: 'An Australian Short Range Operator Certificate of Proficiency.', category: 'safety' },
  { question: 'What is LROCP?', short: 'An Australian Long Range Operator Certificate of Proficiency.', category: 'safety' },
  {
    question: 'What is Safety & Sea Survival?',
    short: 'Specialist training for managing serious emergencies at sea — and not only for racers.',
    category: 'safety',
    page: {
      slug: 'what-is-safety-and-sea-survival',
      title: 'What Is Safety & Sea Survival? | Course Explained',
      description:
        'Specialist training for serious emergencies at sea — liferafts, flares and survival. Required for many offshore races, and just as relevant to cruisers.',
      answer: [
        'Safety & Sea Survival is a short specialist course covering what to do when things go seriously wrong offshore: fire, flooding, dismasting, person overboard, abandoning to a liferaft, and staying alive once you are in one.',
        'It is usually delivered over two days, with a classroom component and a practical session in a pool where you inflate and board a liferaft, right an inverted one, and practise huddling and heat conservation while wearing full wet-weather gear. People consistently describe the pool session as harder than they expected, which is the point.',
        'It has a reputation as a racing requirement, because many offshore races mandate it for a proportion of the crew. That reputation does it a disservice. A cruising couple 40 miles offshore has fewer people, less equipment and no rescue fleet nearby — arguably a stronger case for the training than a fully crewed race boat.',
        'A refresher is available and worth taking, because liferaft drills and flare handling decay quickly. If you intend to sail out of sight of land with any regularity, this is among the highest-value few days you can spend.',
      ],
      related: [
        { name: 'Australian Sailing safety courses', href: '/australian-sailing/' },
        { name: 'Offshore sailing courses', href: '/courses/offshore-sailing/' },
        { name: 'Marine first aid', href: '/courses/marine-first-aid/' },
      ],
    },
  },
  { question: 'Is sea survival only for racers?', short: 'No. It is arguably more relevant to short-handed offshore cruisers.', category: 'safety' },
  { question: 'Should yacht owners take a diesel course?', short: 'Yes — most engine failures at sea are simple faults an owner can fix.', category: 'owners' },
  { question: 'Should yacht owners learn electrical systems?', short: 'Basic electrical understanding is valuable on any modern cruising yacht.', category: 'owners' },
  { question: 'What is mile building?', short: 'Sailing undertaken specifically to accumulate practical experience and sea miles.', category: 'skipper' },
  { question: 'Does every mile count toward Yachtmaster?', short: 'Not necessarily. Verify current qualifying requirements before booking a passage.', category: 'skipper' },
  { question: 'Can I learn on my own yacht?', short: 'Yes. Many Australian instructors offer own-boat tuition.', category: 'owners' },
  { question: 'Is private tuition better?', short: 'It gives more individual attention; group courses teach crew work and teamwork.', category: 'owners' },
  { question: 'Can couples train together?', short: 'Yes, and several schools structure courses specifically around it.', category: 'owners' },
  {
    question: 'Should both partners learn to skipper?',
    short: 'At minimum, both should be able to handle an emergency and take control of the boat.',
    category: 'owners',
    page: {
      slug: 'should-both-partners-learn-to-skipper',
      title: 'Should Both Partners Learn to Skipper? | Sailing as a Couple',
      description:
        'At minimum both should be able to recover the other from the water and get the boat home. The one-skipper split is a single point of failure.',
      answer: [
        'At an absolute minimum, both partners should be able to take control of the boat, recover a person from the water, call for help and get to safety alone. That is not a philosophical position — it is the answer to the question of what happens when the skipper is the one over the side.',
        'The common pattern on cruising yachts is one confident skipper and one partner who handles lines and cooking but has never berthed the boat or planned a passage. It works right up until it does not, and it is a single point of failure on a vessel that may be days from help.',
        'There is a second, less dramatic reason. Couples who both sail tend to keep sailing. Where one partner is permanently crew, they are often the one who quietly stops enjoying it, and the boat gets sold. Schools that run courses for couples will say the same thing.',
        'Practically: both do a crew course, both do a skipper course, and then deliberately alternate roles. Own-boat tuition is particularly good here, because an instructor aboard your own yacht will make the less confident partner do the berthing.',
      ],
      related: [
        { name: 'Sailing courses for couples', href: '/courses/couples-sailing/' },
        { name: 'Own-boat tuition', href: '/courses/own-boat-tuition/' },
      ],
    },
  },
  { question: 'What is a sailing instructor course?', short: 'Training and accreditation for someone who intends to teach sailing.', category: 'working' },
  { question: 'Can Yachtmaster be used commercially?', short: 'Only with the right endorsement, and subject to the jurisdiction you work in.', category: 'working' },
  {
    question: 'Is Yachtmaster automatically an Australian commercial qualification?',
    short: 'No. Australia’s domestic commercial certificates are administered by AMSA, separately.',
    category: 'working',
    page: {
      slug: 'is-yachtmaster-an-australian-commercial-qualification',
      title: 'Is Yachtmaster an Australian Commercial Ticket? | AMSA',
      description:
        'No. Australia’s domestic commercial certificates — Sailing Master Coastal and Offshore — are administered by AMSA and sit outside the RYA and IYT schemes.',
      answer: [
        'No. This catches people out expensively, usually after they have already paid for the training.',
        'Yachtmaster is a recreational certificate awarded by a training scheme. Australia’s domestic commercial certificates for sailing vessels are Sailing Master Coastal and Sailing Master Offshore, and they are administered by the Australian Maritime Safety Authority under the national system for domestic commercial vessels. They are a different thing, issued by a different body, against different requirements.',
        'Recreational Yachtmaster training can form a genuinely useful part of a route toward commercial work, and some of the skills overlap almost completely. But AMSA’s own requirements — documented sea service, medical fitness, marine radio certification such as SROCP or LROCP, and first aid — remain separate and must be satisfied on their own terms.',
        'If your goal is to work on the water in Australia, work backwards from AMSA’s current requirements rather than forwards from a recreational scheme. Check them directly with AMSA before enrolling in anything, because the requirements are updated periodically.',
      ],
      related: [
        { name: 'Recreational vs commercial qualifications', href: '/qualifications/rya-vs-iyt-vs-asa/' },
        { name: 'Marine radio courses', href: '/courses/marine-radio/' },
      ],
    },
  },
  { question: 'What is AMSA Sailing Master Coastal?', short: 'An Australian domestic commercial Certificate of Competency.', category: 'working' },
  { question: 'What is AMSA Sailing Master Offshore?', short: 'An Australian domestic commercial certificate for higher-level sailing operations within its limits.', category: 'working' },
  { question: 'Does SailingSchools.com.au list sailing clubs?', short: 'Not in the main directory — we list dedicated schools and training providers.', category: 'site' },
  { question: 'Why not list clubs?', short: 'Because a club running occasional courses is not a training organisation, and mixing them makes the directory less useful.', category: 'site' },
  { question: 'How do you verify schools?', short: 'Accreditation, course lists and prices are checked against the school and carry the date checked.', category: 'site' },
];

export const faqPages = faqs.filter((f) => f.page);
export const faqBySlug = (slug: string) => faqs.find((f) => f.page?.slug === slug);
export const faqsInCategory = (key: FaqCategory) => faqs.filter((f) => f.category === key);
