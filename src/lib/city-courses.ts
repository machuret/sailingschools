/**
 * City × course pages.
 *
 * The obvious way to build this cluster is a cross-product: every city times every course,
 * filled from a template. That produces a lot of URLs and nothing worth reading, and it
 * would break the rule this site has kept since launch — it would imply, page after page,
 * that schools in that city teach that course, which is not verified.
 *
 * So the cluster is an explicit list instead. A pair exists only where the local water
 * genuinely changes what learning that thing is like, and the `angle` on each record is
 * written for that pair rather than generated. Availability is never asserted: the pages
 * say what training there involves and link to the schools actually verified in that state.
 */
import type { CourseBlock } from './courses';

export type CityCourseTopic = {
  slug: string;
  /** "<Label> in Sydney" */
  label: string;
  blurb: string;
  /** The generic guide this localises. */
  courseHref: string;
  pathwayHref?: string;
};

export const cityCourseTopics: CityCourseTopic[] = [
  {
    slug: 'learn-to-sail',
    label: 'Learn to sail',
    blurb: 'First courses for people who have never sailed.',
    courseHref: '/courses/adult-sailing/',
    pathwayHref: '/pathways/complete-beginner/',
  },
  {
    slug: 'yacht-courses',
    label: 'Yacht courses',
    blurb: 'Cruising-yacht training from crew level to skipper.',
    courseHref: '/rya/competent-crew/',
    pathwayHref: '/pathways/charter-a-yacht/',
  },
  {
    slug: 'catamaran-courses',
    label: 'Catamaran courses',
    blurb: 'Multihull handling, which is not monohull sailing with an extra hull.',
    courseHref: '/courses/catamaran-sailing/',
    pathwayHref: '/pathways/bareboat-whitsundays/',
  },
  {
    slug: 'charter-preparation',
    label: 'Charter preparation',
    blurb: 'Getting ready to be handed the keys to someone else’s yacht.',
    courseHref: '/courses/charter-preparation/',
    pathwayHref: '/pathways/charter-a-yacht/',
  },
];

export type CityCourse = {
  /** City slug, matching a record in cities.ts. */
  city: string;
  /** Topic slug, matching cityCourseTopics. */
  topic: string;
  metaTitle: string;
  description: string;
  standfirst: string;
  /** Hand-written for this pair. Never generated. */
  angle: CourseBlock[];
};

export const cityCourses: CityCourse[] = [
  /* ---------------- learn to sail ---------------- */
  {
    city: 'sydney',
    topic: 'learn-to-sail',
    metaTitle: 'Learn to Sail Sydney | Beginner Sailing Courses',
    description:
      'Learning to sail in Sydney — Harbour traffic teaches collision rules fast, Pittwater is where the gentler first lessons actually happen, and which to pick depends on you.',
    standfirst: 'Sydney gives beginners two very different first days, an hour apart.',
    angle: [
      { type: 'para', text: 'Sydney Harbour is the hardest beginner water in Australia, and that is mostly an advantage. Ferries run to fixed routes and do not deviate, tugs and cruise ships work the same channels, and at weekends racing fleets fill the middle of it. A beginner here learns collision regulations, pilotage and close-quarters handling as a matter of survival rather than as a syllabus item.' },
      { type: 'para', text: 'It is also busy, and some people find their first day on the water more stressful than it needs to be.' },
      { type: 'sub', text: 'The alternative most people do not know about' },
      { type: 'para', text: 'An hour north, Pittwater is deep, sheltered, almost traffic-free and forgiving. A great deal of Sydney’s beginner and anchoring training actually happens there rather than on the Harbour, and if the idea of a ferry bearing down on you would put you off booking, say so when you call — it changes which venue you are offered.' },
      { type: 'sub', text: 'What to ask a Sydney school' },
      {
        type: 'list',
        items: [
          'which water the course runs on — Harbour, Middle Harbour, Pittwater or Botany Bay',
          'how many students per boat, and how helm time is shared',
          'whether the boat is a dinghy, a keelboat or a cruising yacht',
          'whether the course leads to a certificate, and which scheme',
        ],
      },
    ],
  },
  {
    city: 'melbourne',
    topic: 'learn-to-sail',
    metaTitle: 'Learn to Sail Melbourne | Beginner Sailing Courses',
    description:
      'Learning to sail in Melbourne — Port Phillip is large, shallow and builds a short steep chop quickly, which makes for capable sailors and some cancelled lessons.',
    standfirst: 'Port Phillip is shallow, which is why it gets rough faster than it looks like it should.',
    angle: [
      { type: 'para', text: 'Port Phillip is enormous and, for its size, remarkably shallow. Shallow water builds a short steep chop far more quickly than deep water does, so a southerly that would raise a comfortable swell offshore produces a bay full of closely spaced waves that stop a small boat dead.' },
      { type: 'para', text: 'Learning here means learning to handle that. Melbourne-trained sailors tend to be good in waves and unfazed by conditions that look worse than they are — and they tend to have had a few lessons rescheduled.' },
      { type: 'sub', text: 'The season is shorter, and that matters' },
      { type: 'para', text: 'Melbourne sails year-round but the winter is genuinely cold and the water colder. If you are booking a first course, book for the warmer half of the year: being cold is the fastest way to stop enjoying sailing before you have learned to.' },
      { type: 'sub', text: 'Use the winter for theory' },
      { type: 'para', text: 'Melbourne is one of the better places in the country to split the year sensibly — shorebased navigation across the winter, practical courses from spring. It is cheaper, it is weather-independent, and it makes the practical week far more useful when it comes.' },
    ],
  },
  {
    city: 'brisbane',
    topic: 'learn-to-sail',
    metaTitle: 'Learn to Sail Brisbane | Beginner Sailing Courses',
    description:
      'Learning to sail in Brisbane — Moreton Bay is sheltered by its sand islands and shallow enough that channel discipline is taught from the first lesson.',
    standfirst: 'Sheltered by sand islands, shallow almost everywhere, and warm nearly all year.',
    angle: [
      { type: 'para', text: 'Moreton Bay sits behind Moreton and North Stradbroke Islands, which take the ocean swell out of it. What is left is sheltered, warm and sailable for more of the year than anywhere south of it — close to ideal for a first course.' },
      { type: 'para', text: 'The catch is depth. Much of the bay is shallow, with marked channels you are expected to stay in and sandbanks that are not always where an old chart says. Brisbane students learn to read a channel, watch a sounder and check a tide much earlier than students in deep harbours do.' },
      { type: 'sub', text: 'The long season is the real advantage' },
      { type: 'para', text: 'The single biggest factor in how fast anyone learns to sail is how often they get on the water. Brisbane’s season is long enough that a beginner can realistically sail most months of the year, which compounds faster than any choice of scheme or school.' },
      { type: 'sub', text: 'Summer weather' },
      { type: 'para', text: 'Summer afternoons bring storms that build quickly. Watching a sky and deciding to go in early is a taught skill here rather than an optional one.' },
    ],
  },
  {
    city: 'perth',
    topic: 'learn-to-sail',
    metaTitle: 'Learn to Sail Perth | Beginner Courses & the Doctor',
    description:
      'Learning to sail in Perth — the Fremantle Doctor arrives most summer afternoons, which is why beginner courses here often run in the morning.',
    standfirst: 'The most reliable sea breeze in the country, arriving most afternoons whether you are ready or not.',
    angle: [
      { type: 'para', text: 'The Fremantle Doctor is a strong south-westerly sea breeze that arrives with near-clockwork reliability through summer, often building to something a beginner would not choose. It is the defining fact of learning to sail in Perth.' },
      { type: 'para', text: 'This is why local schools frequently run beginner sessions in the morning and leave the afternoon for students who can handle it. If you are offered an afternoon slot on your first day, ask what the forecast breeze is.' },
      { type: 'sub', text: 'Sailors trained here are good in wind' },
      { type: 'para', text: 'Reefing, sail trim and heavy-air handling stop being special cases and become routine, because they happen every week. Perth-trained sailors are noticeably comfortable in conditions that make visitors nervous.' },
      { type: 'sub', text: 'Three different waters' },
      { type: 'para', text: 'Fremantle gives open water and the full sea breeze. Cockburn Sound to the south is more protected and is the usual venue for first lessons and calm-day courses. The Swan River offers flat water close to the city, at the cost of gusty, shifty conditions between the banks.' },
    ],
  },
  {
    city: 'adelaide',
    topic: 'learn-to-sail',
    metaTitle: 'Learn to Sail Adelaide | Beginner Sailing Courses',
    description:
      'Learning to sail in Adelaide — Gulf St Vincent is open water with a reliable summer sea breeze and a smaller training market than the eastern capitals.',
    standfirst: 'Open gulf water, a dependable afternoon sea breeze, and a small enough market that you should book early.',
    angle: [
      { type: 'para', text: 'Gulf St Vincent is open water rather than an enclosed harbour, so Adelaide beginners work in something closer to coastal conditions from the start. A sea breeze fills in on most summer afternoons, reliably enough to plan a lesson around.' },
      { type: 'sub', text: 'A smaller market has consequences' },
      { type: 'para', text: 'Adelaide has fewer dedicated sailing schools than Sydney, Melbourne or Brisbane. In practice that means less choice of dates, more importance attached to the individual school, and a real advantage in booking early in the season rather than deciding in January.' },
      { type: 'para', text: 'It also means clubs carry more of the load. For a beginner in Adelaide, a club learn-to-sail programme is often the most available option as well as the cheapest.' },
      { type: 'sub', text: 'Ask about the wind, specifically' },
      { type: 'para', text: 'The gulf can be glassy in the morning and blowing by three. Ask a school what time of day their beginner sessions run and why — a good answer tells you they think about it.' },
    ],
  },
  {
    city: 'hobart',
    topic: 'learn-to-sail',
    metaTitle: 'Learn to Sail Hobart | Beginner Courses on the Derwent',
    description:
      'Learning to sail in Hobart — the Derwent is deep, sheltered and serious sailing water, with a short season and a sailing culture out of all proportion to the city’s size.',
    standfirst: 'A small city with an outsized sailing culture, on water that does not flatter anybody.',
    angle: [
      { type: 'para', text: 'The Derwent is deep and largely sheltered, and it is also the finish line of the Sydney to Hobart — which tells you something about the sailing culture attached to it. Hobart takes sailing more seriously per head than anywhere else in the country.' },
      { type: 'sub', text: 'The weather is the constraint' },
      { type: 'para', text: 'Tasmania’s season is the shortest in Australia and the water is genuinely cold. Proper clothing is not an optional extra here; it is the difference between a good first day and a decision never to go again. Ask what the school provides.' },
      { type: 'para', text: 'The upside is that the sailing you do learn in is honest. Derwent conditions can change quickly and the wind funnels off the hills, so Hobart sailors read weather carefully and reef early as a matter of habit.' },
      { type: 'sub', text: 'Clubs first' },
      { type: 'para', text: 'With a small commercial training market, Hobart’s clubs do a great deal of the teaching. For a beginner that is good news: club programmes are cheap, the fleet is strong, and there is a season of racing waiting immediately afterwards.' },
    ],
  },

  /* ---------------- yacht courses ---------------- */
  {
    city: 'sydney',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Sydney | RYA, IYT & Skipper Training',
    description:
      'Yacht courses in Sydney — the largest training market in Australia, with Harbour pilotage, coastal access through the Heads and every level from crew to Yachtmaster preparation.',
    standfirst: 'The deepest yacht-training market in the country, on water that teaches pilotage whether you want it or not.',
    angle: [
      { type: 'para', text: 'Sydney is the largest sailing-training market in Australia, which matters more than it sounds: it means a choice of schools, a choice of dates, and courses at levels that simply do not run elsewhere in the country every year.' },
      { type: 'sub', text: 'What Harbour training gives you' },
      { type: 'para', text: 'Confined water with heavy commercial traffic is demanding, and it produces skippers who are genuinely good at pilotage, traffic awareness and close-quarters handling. Those are the skills that make a charter briefing go well.' },
      { type: 'sub', text: 'And the Heads give you the rest' },
      { type: 'para', text: 'A Sydney school can run a sheltered day and an offshore day without relocating. That matters for Day Skipper and above, where the syllabus needs both — and it is why Sydney is one of the few places in Australia where the whole cruising pathway is reliably available in one market.' },
      { type: 'sub', text: 'Do the theory first' },
      { type: 'para', text: 'The practical skipper courses here assume you can already plan a passage and read a chart. Sydney has the widest choice of shorebased and online theory in the country; use it before you book five days on a boat.' },
    ],
  },
  {
    city: 'melbourne',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Melbourne | Skipper Training on Port Phillip',
    description:
      'Yacht courses in Melbourne — Port Phillip training, what the Rip means for coastal courses, and why local passage planning is unusually serious.',
    standfirst: 'A big bay to train in, and one of Australia’s more serious tidal entrances at the end of it.',
    angle: [
      { type: 'para', text: 'Port Phillip is large enough to run genuine passages inside it — you can plan, navigate and make a real trip without leaving the bay. For Day Skipper-level training that is close to ideal, because it delivers passage-making without committing to open coast.' },
      { type: 'sub', text: 'The Rip changes how passages are planned' },
      { type: 'para', text: 'Port Phillip Heads is one of the more demanding tidal entrances in Australia, with strong streams through a narrow, shallow gap. Nobody crosses it casually, and local courses treat tidal gate planning as core material rather than as an advanced topic.' },
      { type: 'para', text: 'That is a genuine advantage. A skipper trained to plan around a tidal gate is better prepared for the rest of the world than one trained where timing never mattered.' },
      { type: 'sub', text: 'Season and scheduling' },
      { type: 'para', text: 'Practical courses cluster into the warmer half of the year. Book early, and put the theory course in the winter — Melbourne’s shorebased and online options are strong and the sequencing works well here.' },
    ],
  },
  {
    city: 'brisbane',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Brisbane | Moreton Bay Skipper Training',
    description:
      'Yacht courses in Brisbane — Moreton Bay training, shallow-water navigation, and a long season that makes spreading a skipper qualification across months realistic.',
    standfirst: 'Sheltered water, a long season, and navigation that actually depends on the tide.',
    angle: [
      { type: 'para', text: 'Moreton Bay is sheltered enough for comfortable training and shallow enough that the navigation is not academic. Courses here spend real time on depth, tidal height and channel discipline, because getting those wrong in the bay has immediate consequences.' },
      { type: 'sub', text: 'The long season is the scheduling advantage' },
      { type: 'para', text: 'The best way to become a competent skipper is to spread the courses across a season and sail in between. Brisbane’s season is long enough to make that genuinely practical rather than an aspiration — theory in one month, practical two months later, sailing throughout.' },
      { type: 'sub', text: 'Where it leads' },
      { type: 'para', text: 'Brisbane is also the natural launching point north. Sailors here frequently train locally and then use the Queensland coast — Great Sandy Strait, the Capricornia coast, eventually the Whitsundays — to build the miles a higher qualification needs.' },
    ],
  },
  {
    city: 'perth',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Perth | Skipper Training in the Doctor',
    description:
      'Yacht courses in Perth — training in the most reliable strong sea breeze in Australia, plus Rottnest passages and what an isolated coast means for planning.',
    standfirst: 'Skipper training where reefing is routine and the nearest shelter is a decision, not a given.',
    angle: [
      { type: 'para', text: 'Perth yacht training happens in more wind than most Australian training does, and does it predictably. Reefing, heavy-air sail trim and crew management under load are not the last afternoon of the course here — they are most afternoons.' },
      { type: 'sub', text: 'Rottnest is the natural passage' },
      { type: 'para', text: 'The run out to Rottnest Island is short enough for a day, long enough to be a genuine passage, and interesting enough to plan properly. It is the local equivalent of a coastal leg and appears in most skipper-level courses.' },
      { type: 'sub', text: 'Isolation shapes the syllabus' },
      { type: 'para', text: 'Western Australia’s coast is long, sparsely serviced and a long way from help. Local training reflects that: self-sufficiency, engine and systems knowledge, and conservative passage planning get more attention than they might on the east coast.' },
    ],
  },
  {
    city: 'whitsundays',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Whitsundays | Skipper & Charter Training',
    description:
      'Yacht courses in the Whitsundays — skipper training in Australia’s best-known cruising ground, where anchoring and charter readiness matter more than racing skills.',
    standfirst: 'Training shaped entirely by what people come here to do, which is charter.',
    angle: [
      { type: 'para', text: 'Whitsundays yacht training is unusual in Australia because it is aimed almost entirely at cruising and charter rather than at racing or club sailing. The syllabus emphasis follows: anchoring, passage planning between islands, systems, provisioning and crew management.' },
      { type: 'sub', text: 'Anchoring is the defining skill' },
      { type: 'para', text: 'Most Whitsunday cruising means choosing an anchorage for the forecast wind direction, setting properly in eight to ten metres with real tidal range, and moving when the wind shifts. That judgement is what a charter operator is assessing in the briefing, and it is what local courses drill.' },
      { type: 'sub', text: 'Learn on the boat you will charter' },
      { type: 'para', text: 'The local charter fleet is largely catamarans. If a catamaran is what you will be handed, train on one — monohull experience does not automatically transfer, particularly for berthing, anchoring and reefing decisions.' },
      { type: 'sub', text: 'The marine park is part of the syllabus' },
      { type: 'para', text: 'Zoning, anchoring restrictions and reef protection rules apply regardless of qualification, and responsibility sits with the skipper on the day. Good local courses cover them; check the current zoning yourself as well.' },
    ],
  },
  {
    city: 'adelaide',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Adelaide | Skipper Training on Gulf St Vincent',
    description:
      'Yacht courses in Adelaide — open-gulf training, Kangaroo Island and Spencer Gulf passages, and a small market where booking early matters.',
    standfirst: 'Open water from the dock, and some of the best cruising ground in the country an overnight away.',
    angle: [
      { type: 'para', text: 'Adelaide sails on open gulf water rather than in an enclosed harbour, so skipper training here works in conditions closer to coastal sailing from the outset. There is less of a gap between the training water and the real thing than in Sydney or Brisbane.' },
      { type: 'sub', text: 'Where the passages go' },
      { type: 'para', text: 'South Australia is seriously good cruising ground and under-used. Kangaroo Island, Yorke Peninsula and Spencer Gulf are all within reach of a multi-day passage, which makes Adelaide a better mile-building base than its market size suggests.' },
      { type: 'sub', text: 'Plan around the market, not just the weather' },
      { type: 'para', text: 'With fewer schools, higher-level courses may run only a few times a year. If Day Skipper or Coastal Skipper is the goal, ask about the year’s schedule before you plan a season around it — and be prepared to travel interstate for the less common courses.' },
    ],
  },
  {
    city: 'hobart',
    topic: 'yacht-courses',
    metaTitle: 'Yacht Courses Hobart | Skipper Training in Tasmania',
    description:
      'Yacht courses in Hobart — Derwent and D’Entrecasteaux training, some of Australia’s best cruising ground, and weather that makes conservative planning a habit.',
    standfirst: 'Demanding water, short season, and cruising ground that people sail across the world to reach.',
    angle: [
      { type: 'para', text: 'Tasmania is among the best cruising ground in Australia and among the least forgiving. The D’Entrecasteaux Channel, Bruny Island and the south-east coast offer superb sailing with genuinely changeable weather and cold water.' },
      { type: 'sub', text: 'Weather judgement is the local specialism' },
      { type: 'para', text: 'Fronts arrive quickly, the wind funnels off the hills, and the difference between a pleasant passage and an unpleasant one is often a decision made six hours earlier. Hobart-trained skippers tend to be conservative planners, and it shows.' },
      { type: 'sub', text: 'Cold is a safety topic, not a comfort one' },
      { type: 'para', text: 'Water temperature here makes a person overboard a far more urgent problem than the same event in Queensland. Local courses treat recovery drills and immersion seriously for good reason.' },
      { type: 'sub', text: 'A small market with deep expertise' },
      { type: 'para', text: 'There are not many commercial schools, but there is a great deal of offshore experience in Hobart. Ask who is actually instructing — in a market this size, the individual matters more than the logo on the certificate.' },
    ],
  },

  /* ---------------- catamaran ---------------- */
  {
    city: 'whitsundays',
    topic: 'catamaran-courses',
    metaTitle: 'Catamaran Courses Whitsundays | Multihull Training',
    description:
      'Catamaran courses in the Whitsundays — where most of the charter fleet is multihull, and the handling differences that catch out experienced monohull sailors.',
    standfirst: 'If you are chartering here, you are probably chartering a catamaran. Train on one.',
    angle: [
      { type: 'para', text: 'The Whitsundays charter fleet is dominated by catamarans, for obvious reasons: they are flat, roomy, shallow-draft and comfortable at anchor. It also means the boat most visitors are handed is not the boat most Australians learned on.' },
      { type: 'sub', text: 'The three things that catch people out' },
      {
        type: 'list',
        items: [
          'no heel, so no instinctive warning that it is time to reef — you reef by wind speed instead',
          'enormous windage, which makes a crosswind berthing approach a different manoeuvre entirely',
          'sailing around the anchor rather than sitting to it, which is what a bridle is for',
        ],
      },
      { type: 'para', text: 'None of these are difficult. All of them are much easier to learn with an instructor aboard in a breeze than to discover on day one of a charter with your family watching.' },
      { type: 'sub', text: 'Twin engines are a gift and a trap' },
      { type: 'para', text: 'A catamaran will turn in its own length on its engines, which makes it superb in a marina — right up until the wind gets under all that windage and takes charge. Practise in a breeze, deliberately, before you need it.' },
    ],
  },
  {
    city: 'brisbane',
    topic: 'catamaran-courses',
    metaTitle: 'Catamaran Courses Brisbane | Multihull Training Moreton Bay',
    description:
      'Catamaran courses in Brisbane — Moreton Bay’s shallow water suits multihull draft, and the bay is the natural place to convert before heading north to charter.',
    standfirst: 'Shallow water suits a catamaran, and Brisbane is the last big market before the charter grounds.',
    angle: [
      { type: 'para', text: 'Moreton Bay and catamarans get along. Shallow draft is an advantage in water where a keelboat has to think about the tide, and the bay’s sheltered conditions make it comfortable ground for learning a new kind of boat.' },
      { type: 'sub', text: 'The conversion, not the beginning' },
      { type: 'para', text: 'Most people taking a catamaran course in Brisbane are not beginners — they are monohull sailors converting, usually with a Whitsundays or overseas charter in mind. The course is about unlearning as much as learning: reefing by numbers instead of by feel, and re-thinking every close-quarters manoeuvre.' },
      { type: 'sub', text: 'It is on the way' },
      { type: 'para', text: 'Brisbane is the last large training market before the Queensland charter grounds. Converting here and then sailing north is a common and sensible sequence — and it is considerably cheaper than discovering the differences during a charter.' },
    ],
  },
  {
    city: 'gold-coast',
    topic: 'catamaran-courses',
    metaTitle: 'Catamaran Courses Gold Coast | Multihull Training',
    description:
      'Catamaran courses on the Gold Coast — Broadwater shallows suit multihull draft, the marine industry is on the doorstep, and the Seaway tests handling properly.',
    standfirst: 'Flat shallow water to learn in, and a bar entrance to find out what you have learned.',
    angle: [
      { type: 'para', text: 'The Broadwater is flat and shallow, which is close to ideal water for learning a catamaran — the draft is an advantage rather than a worry, and the lack of chop means you can concentrate on the boat.' },
      { type: 'sub', text: 'Then there is the Seaway' },
      { type: 'para', text: 'The Gold Coast Seaway is a serious bar entrance on an ebb tide against a swell, and handling a catamaran through it is a genuinely different exercise from handling a monohull. For anyone who intends to take a multihull offshore, it is instructive water.' },
      { type: 'sub', text: 'The industry is on the doorstep' },
      { type: 'para', text: 'Coomera and the Broadwater hold one of Australia’s largest concentrations of marine trades, including multihull builders and refit yards. If your interest in catamarans extends to buying one, the expertise is unusually close to hand.' },
    ],
  },

  /* ---------------- charter preparation ---------------- */
  {
    city: 'whitsundays',
    topic: 'charter-preparation',
    metaTitle: 'Charter Preparation Whitsundays | Bareboat Readiness',
    description:
      'Charter preparation in the Whitsundays — what operators assess in the briefing, why anchoring decides your week, and what to learn before you arrive.',
    standfirst: 'The operator briefing is the real assessment. Arrive ready for it.',
    angle: [
      { type: 'para', text: 'Whitsundays bareboat operators run a managed model — a daily radio schedule, a defined cruising area, published no-go zones and shore support that will come to you. That support is why several operators will charter to an experienced sailor without a formal certificate, on the strength of a résumé and a thorough briefing.' },
      { type: 'para', text: 'Requirements vary by operator and change. Confirm in writing with the operator you intend to book before you book a course specifically to satisfy them.' },
      { type: 'sub', text: 'Anchoring decides your week' },
      { type: 'para', text: 'Whitsundays cruising is anchoring, not marina-hopping. You will anchor most nights, often in eight to ten metres with a significant tidal range, in a bay chosen for the forecast wind direction. Getting that judgement right is the difference between sleeping and not.' },
      { type: 'sub', text: 'Build the résumé, not just the certificate' },
      { type: 'para', text: 'A written list of dates, boats, areas, your role and rough mileage is read more carefully than the certificate. Keep it from your first course — a skipper certificate plus two hundred logged miles is a much easier conversation than a certificate alone.' },
      { type: 'sub', text: 'Learn the boat you are actually getting' },
      { type: 'para', text: 'Most of the fleet is catamarans. A monohull sailor is not automatically a catamaran skipper, and the operator briefing will find that out.' },
    ],
  },
  {
    city: 'sydney',
    topic: 'charter-preparation',
    metaTitle: 'Charter Preparation Sydney | Skipper Readiness Courses',
    description:
      'Charter preparation in Sydney — the certificate charter companies recognise, the sailing résumé they read more carefully, and where to get both in the largest training market.',
    standfirst: 'Sydney can give you the certificate and the miles. Most people get one and forget the other.',
    angle: [
      { type: 'para', text: 'Sydney is the best-placed market in Australia for charter preparation, because it holds both halves of what a charter operator wants: the training to get a skipper certificate, and enough sailing to put real miles behind it.' },
      { type: 'sub', text: 'What operators actually look at' },
      {
        type: 'list',
        items: [
          'a skipper certificate at Day Skipper or Bareboat Skipper level',
          'a written sailing résumé — dates, boats, areas, your role, rough mileage',
          'their own check-out briefing on the day, on their boat',
        ],
      },
      { type: 'para', text: 'The résumé is where Sydney sailors most often fall short, not the certificate. Pittwater weekends, twilight races and harbour day sails all count — but only if you wrote them down.' },
      { type: 'sub', text: 'Practise the manoeuvre you will be judged on' },
      { type: 'para', text: 'Charter handovers involve leaving a marina berth, usually in wind, usually watched. Sydney schools will sell you an afternoon of nothing but berthing, and it is the single most useful thing you can do in the month before a charter.' },
      { type: 'sub', text: 'If you are chartering overseas' },
      { type: 'para', text: 'Mediterranean and some Asian bases commonly ask for an ICC on top of a skipper certificate. It takes time to arrange, so start before you book flights.' },
    ],
  },
];

export const cityCourseTopicBySlug = (slug: string) =>
  cityCourseTopics.find((t) => t.slug === slug);
export const cityCourseFor = (city: string, topic: string) =>
  cityCourses.find((c) => c.city === city && c.topic === topic);
export const cityCoursesIn = (city: string) => cityCourses.filter((c) => c.city === city);
