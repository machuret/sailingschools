/**
 * Goal-based pathways — the third axis of the site.
 *
 * /courses/ answers "what is this course", /rya/ and friends answer "what does this body
 * award". A pathway answers the question people actually type: *I want to do X — what do I
 * need?* It is a route, not a course, so it is allowed to say "no course teaches this, go
 * and get sea time" where that is the truth.
 *
 * House rules carried over from the course records: no price without a check date, and
 * every pathway states plainly what it will not get you.
 */
import type { CourseBlock } from './courses';

export type PathwayStep = {
  name: string;
  detail: string;
  href?: string;
  /** Short right-hand annotation — duration, prerequisite, cost shape. Never a price. */
  meta?: string;
  /** Rendered dimmed, and described in the copy as skippable. */
  optional?: boolean;
};

export type Pathway = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  /** One sentence under the H1. */
  standfirst: string;
  /** "You want to…" — the goal in the reader's words. */
  goal: string;
  /** What the pathway assumes you already have. */
  startsFrom: string;
  /** The honest time framing. Vague where the honest answer is vague. */
  realistic: string;
  /** What finishing this pathway does NOT give you. */
  notThis: string;
  order: number;
  steps: PathwayStep[];
  blocks: CourseBlock[];
  related: { name: string; href: string; note: string }[];
};

export const pathways: Pathway[] = [
  {
    slug: 'charter-a-yacht',
    title: 'I want to charter a yacht',
    metaTitle: 'Qualifications to Charter a Yacht in Australia | Pathway',
    description:
      'What you need to bareboat charter a yacht in Australia — which certificate operators ask for, why the résumé matters more, and the fastest honest route.',
    standfirst:
      'Charter companies do not check a scheme. They check whether they believe you can bring their boat back.',
    goal: 'Hire a yacht without a skipper and sail it yourself.',
    startsFrom: 'No formal qualification, and possibly no sailing at all.',
    realistic:
      'From zero, two courses and a season of sailing — realistically six to twelve months if you sail most weekends. From existing experience, one course.',
    notThis:
      'A charter certificate is not a commercial licence. It does not let you take paying passengers, and it is not recognised by AMSA.',
    order: 1,
    steps: [
      {
        name: 'Get on a boat first',
        detail:
          'A taster or Level 1 course tells you whether you actually like it before you commit to a five-day liveaboard.',
        href: '/rya/cruising-level-1/',
        meta: '2 days',
        optional: true,
      },
      {
        name: 'Learn to be useful aboard',
        detail:
          'Competent Crew or the IYT equivalent. You are not skippering yet — you are learning the boat, the ropes and the watch routine.',
        href: '/rya/competent-crew/',
        meta: '5 days · no experience needed',
      },
      {
        name: 'Learn the theory',
        detail:
          'Day Skipper Theory is the navigation, tides, lights and rules that the practical course assumes you already know. Do it before the practical, not after.',
        href: '/rya/day-skipper-theory/',
        meta: '40 hours · classroom or online',
      },
      {
        name: 'Take command',
        detail:
          'Day Skipper Practical, or IYT Bareboat Skipper. This is the certificate charter companies recognise, and the one that changes what you are allowed to book.',
        href: '/rya/day-skipper-practical/',
        meta: '5 days · the pivotal course',
      },
      {
        name: 'Build a résumé',
        detail:
          'Miles, nights at sea, boats handled, areas sailed. Charter companies read this more carefully than the certificate.',
        href: '/courses/mile-building/',
        meta: 'ongoing',
      },
      {
        name: 'Add an ICC if you are going overseas',
        detail:
          'The International Certificate of Competence is what Mediterranean and some Asian charter bases ask for. It is not needed inside Australia.',
        href: '/iyt/icc/',
        meta: 'overseas only',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Bareboat charter is where sailing qualifications stop being abstract. Up to this point a certificate is a record of a course; here it is the thing standing between you and the keys.',
      },
      { type: 'sub', text: 'What charter companies actually ask for' },
      {
        type: 'para',
        text: 'There is no single national rule. Each operator sets its own requirements, and they are not consistent — which is why "what qualification do I need to charter in Australia" has no clean answer. In practice operators look at three things:',
      },
      {
        type: 'list',
        items: [
          'a skipper certificate at Day Skipper or Bareboat Skipper level',
          'a written sailing résumé listing miles, boats and areas',
          'their own check-out briefing on the day, on their boat',
        ],
      },
      {
        type: 'para',
        text: 'Some Australian operators, particularly in the Whitsundays, will take an experienced sailor with no certificate at all on the strength of a résumé and a thorough briefing. Others will not release a boat without a certificate on file. Neither policy is wrong, and neither is a rule you can rely on until you have asked the specific operator.',
      },
      { type: 'sub', text: 'The résumé matters more than people expect' },
      {
        type: 'para',
        text: 'A résumé is a plain list: dates, boat type and length, area sailed, your role, and roughly how many nautical miles and night hours. Keep it from your first course. A skipper certificate plus two hundred logged miles is a far easier conversation than a skipper certificate alone, because the certificate proves you passed a week and the log proves you kept going.',
      },
      { type: 'sub', text: 'Where people waste money' },
      {
        type: 'para',
        text: 'The common mistake is booking the practical skipper course before the theory. The practical assumes you can already plan a passage, read a tidal atlas and identify a light by its characteristic. Students who arrive without that spend the week catching up on classroom work instead of learning to handle the boat — which is the one thing they cannot learn from a book.',
      },
    ],
    related: [
      { name: 'Bareboat charter in the Whitsundays', href: '/pathways/bareboat-whitsundays/', note: 'the specific rules for Australia’s main charter ground' },
      { name: 'RYA vs IYT vs ASA', href: '/qualifications/rya-vs-iyt-vs-asa/', note: 'which scheme’s skipper certificate travels best' },
      { name: 'Bareboat charter courses', href: '/courses/charter-preparation/', note: 'the course guide rather than the route' },
    ],
  },
  {
    slug: 'bareboat-whitsundays',
    title: 'I want to bareboat the Whitsundays',
    metaTitle: 'Bareboat Charter Whitsundays | Qualifications & Preparation',
    description:
      'What you need to bareboat charter in the Whitsundays — why operators there run their own briefing instead of demanding a certificate, and what to learn.',
    standfirst:
      'Australia’s easiest bareboat ground to sail and its least predictable to qualify for.',
    goal: 'Charter a yacht or catamaran in the Whitsundays and sail it yourself.',
    startsFrom: 'Some sailing, or a willing crew member who has some.',
    realistic:
      'A capable beginner can be ready in one season. Many charterers arrive with a five-day course and a handful of day sails.',
    notThis:
      'Not a licence to sail anywhere else. The Whitsundays are sheltered, well-charted and heavily supported; that is not what the Bass Strait is like.',
    order: 2,
    steps: [
      {
        name: 'Learn to sail a cruising yacht',
        detail:
          'Competent Crew, IYT International Crew or an Australian Sailing keelboat course. Any of them puts you on a yacht with instruction.',
        href: '/rya/competent-crew/',
        meta: '5 days',
      },
      {
        name: 'Learn anchoring properly',
        detail:
          'Whitsundays cruising is anchoring, not marina-hopping. You will anchor every night, often in a fringing-reef bay with a tidal range.',
        href: '/courses/anchoring/',
        meta: 'the skill that decides your week',
      },
      {
        name: 'Get a skipper certificate if the operator asks',
        detail:
          'Day Skipper Practical or IYT Bareboat Skipper. Ask the operator first — some accept a résumé and their own briefing instead.',
        href: '/rya/day-skipper-practical/',
        meta: 'operator-dependent',
        optional: true,
      },
      {
        name: 'Learn the boat you are actually chartering',
        detail:
          'Most Whitsundays bareboats are catamarans. A monohull sailor is not automatically a catamaran skipper — the handling, the anchoring and the windage are all different.',
        href: '/courses/catamaran-sailing/',
        meta: 'if chartering a cat',
      },
      {
        name: 'Sit the check-out briefing seriously',
        detail:
          'The operator briefing is where the real assessment happens: systems, radio schedule, permitted anchorages, exclusion zones and the daily call-in.',
        meta: 'on the day',
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'The Whitsundays are the reason a lot of Australians learn to sail at all. Short passages, reliable trade winds for much of the year, sheltered water inside the islands and a bay to anchor in at the end of every day.',
      },
      { type: 'sub', text: 'Why the qualification question is confusing here' },
      {
        type: 'para',
        text: 'Whitsundays bareboat operators run a managed model: a daily radio schedule, a defined cruising area, published no-go zones, and shore support that will come to you. That support is why several operators are willing to charter to sailors without a formal certificate — the briefing and the radio schedule do work that a certificate does elsewhere.',
      },
      {
        type: 'para',
        text: 'This varies by operator and changes over time. Confirm the current requirement with the operator you intend to book, in writing, before you book a course specifically to satisfy it.',
      },
      { type: 'sub', text: 'What actually catches people out' },
      {
        type: 'list',
        items: [
          'anchoring in eight to ten metres with a big tidal range',
          'reef and fringing coral marked on the chart but not visible at high water',
          'the afternoon trade-wind build, which is stronger than the morning suggests',
          'catamaran windage when coming alongside or picking up a mooring',
          'stinger season and the reef-safe anchoring rules in the marine park',
        ],
      },
      {
        type: 'para',
        text: 'None of these are hard. All of them are easier to learn before the charter than during it, which is the whole argument for doing a course first even where the operator does not require one.',
      },
      { type: 'sub', text: 'Marine park rules are not optional' },
      {
        type: 'para',
        text: 'The Whitsundays sit inside the Great Barrier Reef Marine Park, which has zoning, anchoring and no-anchoring provisions that apply regardless of your qualification. Operators brief these; check the current zoning maps yourself as well, because responsibility sits with the skipper on the day.',
      },
    ],
    related: [
      { name: 'Charter a yacht', href: '/pathways/charter-a-yacht/', note: 'the general charter route' },
      { name: 'Catamaran sailing courses', href: '/courses/catamaran-sailing/', note: 'most Whitsundays bareboats are cats' },
      { name: 'Sailing schools in Queensland', href: '/sailing-schools/queensland/', note: 'where to train closest to the ground' },
    ],
  },
  {
    slug: 'own-a-yacht',
    title: 'I just bought a boat',
    metaTitle: 'I Bought a Yacht — What Training Do I Need? | Pathway',
    description:
      'Training for new yacht owners in Australia — what to learn first when the boat is already yours, and why owner tuition aboard your own vessel beats a generic course.',
    standfirst:
      'The boat is already in the marina. The question is no longer which course sounds nice — it is what you need before the next weekend.',
    goal: 'Sail your own yacht confidently, including short-handed and in a crosswind berth.',
    startsFrom: 'Ownership, and a range of sailing experience from none to plenty.',
    realistic:
      'Two to three days of own-boat tuition transforms most new owners. Confidence in a tight marina takes a season.',
    notThis:
      'Owning a boat is not a qualification. Insurers, marinas and crew all treat it as a separate question from what you can do.',
    order: 3,
    steps: [
      {
        name: 'Book tuition on your own boat',
        detail:
          'An instructor aboard your vessel, in your berth, with your systems. Nothing else transfers as directly, and it is the single highest-value purchase a new owner makes.',
        href: '/courses/own-boat-tuition/',
        meta: '1–3 days',
      },
      {
        name: 'Learn the engine',
        detail:
          'Most yacht call-outs are engine or fuel problems, not sailing problems. A diesel course pays for itself the first time you bleed a fuel system yourself.',
        href: '/courses/diesel-engine/',
        meta: '1 day',
      },
      {
        name: 'Fix the licence question',
        detail:
          'A recreational boat licence is a state matter and has nothing to do with sailing certificates. Whether you need one depends on the engine and the state.',
        href: '/learn/boat-licence/',
        meta: 'state by state',
      },
      {
        name: 'Get the radio certificate',
        detail:
          'Operating a marine VHF legally requires a certificate. In Australia that is usually the SROCP; the RYA SRC is a different certificate for a different jurisdiction.',
        href: '/courses/marine-radio/',
        meta: '1 day',
      },
      {
        name: 'Learn to sail her short-handed',
        detail:
          'Most owners sail as a couple or alone far more often than they expect. Short-handed technique is a separate skill from crewed sailing, not a reduced version of it.',
        href: '/courses/couples-sailing/',
        meta: 'the realistic case',
      },
      {
        name: 'Add navigation when you start going further',
        detail:
          'Day Skipper Theory is worth doing even if you never sit a practical — it is where passage planning, tides and the rules actually get taught.',
        href: '/rya/day-skipper-theory/',
        meta: '40 hours',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Almost every training pathway is written for someone deciding whether to get into sailing. New owners are in a different position: the decision is made, the money is spent, and the boat is sitting there.',
      },
      { type: 'sub', text: 'Why own-boat tuition wins' },
      {
        type: 'para',
        text: 'A five-day course on a school yacht teaches you to sail a school yacht. Useful — but your boat has a different rig, a different prop walk, a different windlass, an unfamiliar reefing system and a berth with its own peculiar set-up. An instructor aboard your own vessel addresses all of it at once, and does it in the conditions you will actually sail in.',
      },
      {
        type: 'para',
        text: 'It is also the format most likely to be booked in a shape that suits you — an afternoon, a weekend, or a delivery leg with an instructor aboard.',
      },
      { type: 'sub', text: 'What new owners most often get wrong' },
      {
        type: 'list',
        items: [
          'learning the sailing and ignoring the systems',
          'never practising a berth approach in a crosswind until it happens for real',
          'assuming a recreational boat licence covers the radio',
          'no reefing plan, so the first reef always goes in too late',
          'no man-overboard drill with the crew who actually sail aboard',
        ],
      },
      { type: 'sub', text: 'Insurance' },
      {
        type: 'para',
        text: 'Some Australian insurers ask about qualifications and experience, particularly for larger vessels, offshore use or short-handed sailing. Requirements are set by the individual insurer rather than by a national rule, so ask yours directly — and ask before you buy the policy, not after a claim.',
      },
    ],
    related: [
      { name: 'Own boat tuition', href: '/courses/own-boat-tuition/', note: 'the course guide in full' },
      { name: 'Boat licences by state', href: '/learn/boat-licence/', note: 'the legal requirement, which is separate' },
      { name: 'Sailing as a couple', href: '/pathways/sail-as-a-couple/', note: 'if both of you need to be able to handle her' },
    ],
  },
  {
    slug: 'sail-as-a-couple',
    title: 'We want to sail as a couple',
    metaTitle: 'Learn to Sail as a Couple in Australia | Pathway',
    description:
      'Sailing training for couples in Australia — how to avoid the one-skipper-one-passenger trap, and why both of you should be able to bring the boat home alone.',
    standfirst:
      'The most common failure in couples’ sailing is not skill. It is one person doing everything and the other watching.',
    goal: 'Both of you able to sail the boat, including bringing her home without the other.',
    startsFrom: 'Often one confident sailor and one reluctant one — sometimes two beginners.',
    realistic:
      'A shared five-day course plus deliberate role-swapping over a season. The role-swapping is the part people skip.',
    notThis:
      'Not a relationship fix. A course will not resolve a dynamic where one person will not hand over the helm.',
    order: 4,
    steps: [
      {
        name: 'Start together, at the same level',
        detail:
          'If one of you already sails, resist starting them higher. A shared Competent Crew week where both people are learners is worth more than two separate certificates.',
        href: '/rya/competent-crew/',
        meta: '5 days',
      },
      {
        name: 'Both do the theory',
        detail:
          'Navigation is the easiest thing for one partner to quietly own, and the worst one to be without at 2am. Do the theory course as a pair.',
        href: '/rya/day-skipper-theory/',
        meta: '40 hours',
      },
      {
        name: 'Swap roles deliberately',
        detail:
          'Alternate skipper and crew every sail, including the berthing. Not "when she feels ready" — by schedule, so it actually happens.',
        meta: 'every sail',
      },
      {
        name: 'Learn short-handed technique properly',
        detail:
          'Two people is short-handed. Reefing, anchoring and berthing all have two-handed methods that are not obvious from crewed sailing.',
        href: '/courses/couples-sailing/',
        meta: 'the real crew size',
      },
      {
        name: 'Run a solo recovery drill',
        detail:
          'Each of you should practise recovering the other from the water, alone, with the engine and with sails. It is the drill that most validates the whole exercise.',
        href: '/rya/basic-skills/',
        meta: 'the one that matters',
      },
      {
        name: 'Both sit a skipper course',
        detail:
          'Two Day Skippers on one boat is not redundant. It means either of you can be incapacitated and the boat still gets home.',
        href: '/rya/day-skipper-practical/',
        meta: '5 days each',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Couples are one of the largest groups in Australian sailing schools, and one of the most poorly served by generic course listings — because the thing a couple most needs to train is not a skill, it is a division of labour.',
      },
      { type: 'sub', text: 'The one-skipper trap' },
      {
        type: 'para',
        text: 'A predictable pattern: one partner is keener, learns faster, takes the helm, takes the berthing, takes the navigation. The other becomes an increasingly nervous deckhand. Ten years later one person can sail the boat and the other cannot get her home.',
      },
      {
        type: 'para',
        text: 'It is not a skill gap. It is a practice gap, and it compounds — every sail the confident partner takes the hard job, the gap widens, and it becomes more awkward to hand over.',
      },
      { type: 'sub', text: 'What actually fixes it' },
      {
        type: 'list',
        items: [
          'a rule that roles alternate by schedule, not by mood',
          'the less confident partner does the berthing, every second sail, in good conditions first',
          'both partners hold the same certificate rather than complementary ones',
          'own-boat tuition with an instructor who will insist on the swap',
          'a written checklist so neither of you is the only person who knows the systems',
        ],
      },
      { type: 'sub', text: 'Choosing a school' },
      {
        type: 'para',
        text: 'Ask directly how the school handles couples: do they split you across boats, do they rotate helm time by the clock, will they let the quieter partner berth the boat. A school that has a real answer has thought about it. One that says "we treat everyone the same" usually means the confident partner will end up on the helm.',
      },
    ],
    related: [
      { name: 'I just bought a boat', href: '/pathways/own-a-yacht/', note: 'if the boat is already yours' },
      { name: 'Short-handed sailing', href: '/courses/couples-sailing/', note: 'two people is short-handed' },
      { name: 'Private and one-to-one tuition', href: '/courses/private-sailing-lessons/', note: 'when a group course will not do it' },
    ],
  },
  {
    slug: 'offshore-passage',
    title: 'I want to sail offshore',
    metaTitle: 'Offshore Sailing Qualifications Australia | Pathway',
    description:
      'Getting from coastal sailing to genuine offshore passages in Australia — sea time, sea survival, the Yachtmaster route, and what no course can give you.',
    standfirst:
      'Offshore is the one place where the certificate genuinely lags the experience, and everyone involved knows it.',
    goal: 'Make ocean and extended coastal passages, as crew or as skipper.',
    startsFrom: 'Coastal skipper-level competence, or solid crewing experience.',
    realistic:
      'Years, not months. The theory is a winter; the sea time is several seasons.',
    notThis:
      'Not a Yachtmaster Ocean shortcut. Sea time cannot be bought as a course, and the qualifying passage is a passage.',
    order: 5,
    steps: [
      {
        name: 'Be genuinely competent coastally first',
        detail:
          'Coastal Skipper Practical, or equivalent demonstrated ability. Offshore is coastal sailing with fewer options, not a different skill set.',
        href: '/rya/coastal-skipper-practical/',
        meta: '5 days',
      },
      {
        name: 'Do the advanced theory',
        detail:
          'Coastal Skipper / Yachtmaster Offshore Theory is where passage planning, weather routing and the harder navigation live.',
        href: '/rya/coastal-skipper-yachtmaster-theory/',
        meta: '40 hours',
      },
      {
        name: 'Sea Survival and safety',
        detail:
          'A liferaft, a flare and an immersion suit are all things you want to have handled before the day you need them. Most offshore races require this course.',
        href: '/australian-sailing/safety-sea-survival/',
        meta: '1–2 days',
      },
      {
        name: 'Get miles, and get them at night',
        detail:
          'Night hours, watch systems and heavy weather are the parts that change you. Delivery crewing and offshore races are the two realistic ways to accumulate them.',
        href: '/courses/mile-building/',
        meta: 'the long part',
      },
      {
        name: 'Sit Yachtmaster Offshore',
        detail:
          'An examination against a standard, taken after qualifying sea time — not a course you book and pass.',
        href: '/rya/yachtmaster-offshore/',
        meta: 'exam, not a course',
      },
      {
        name: 'Yachtmaster Ocean if you cross one',
        detail:
          'Requires a qualifying ocean passage and celestial navigation. It is the only level that still asks you to find yourself with a sextant.',
        href: '/rya/yachtmaster-ocean/',
        meta: 'after an ocean passage',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Every other pathway on this site can be shortened by booking the right course. This one cannot. Offshore competence is mostly sea time, and sea time is the one input no school sells.',
      },
      { type: 'sub', text: 'What offshore actually adds' },
      {
        type: 'list',
        items: [
          'watch systems and sailing while tired',
          'weather you cannot outrun or shelter from',
          'sail changes and reefing in the dark',
          'self-sufficiency for repairs and medical problems',
          'navigation with degraded or failed electronics',
          'crew management over days rather than hours',
        ],
      },
      { type: 'sub', text: 'How Australians actually get the miles' },
      {
        type: 'para',
        text: 'Three routes, and most people use more than one:',
      },
      {
        type: 'list',
        items: [
          'offshore club racing — the east-coast Category 1 and 2 races have a standing need for crew',
          'delivery crewing, moving boats up and down the coast between seasons',
          'mile-building passages run by schools, which are paid but reliably available',
        ],
      },
      {
        type: 'para',
        text: 'Club racing is the cheapest and the most demanding. Deliveries are the most realistic preparation for cruising, because a delivery is a cruise with a deadline. School passages cost money but do not depend on you knowing anybody, which matters when you are starting.',
      },
      { type: 'sub', text: 'Safety requirements are set by the race, not the scheme' },
      {
        type: 'para',
        text: 'Australian offshore racing safety requirements — including sea survival training, safety equipment and crew experience minimums — are set by the race organisers under the Australian Sailing Special Regulations, and they change. Check the notice of race for the event you intend to enter rather than assuming a certificate covers it.',
      },
    ],
    related: [
      { name: 'RYA Yachtmaster', href: '/rya/yachtmaster/', note: 'what the exam actually assesses' },
      { name: 'Mile building', href: '/courses/mile-building/', note: 'the sea-time problem' },
      { name: 'Sea survival', href: '/australian-sailing/safety-sea-survival/', note: 'required for most offshore racing' },
    ],
  },
  {
    slug: 'race-with-a-club',
    title: 'I want to race',
    metaTitle: 'How to Start Racing Sailing in Australia | Pathway',
    description:
      'How to get into club sailboat racing in Australia — why crewing is the way in, what the courses are worth, and the fastest route from beginner to trusted crew.',
    standfirst:
      'The quickest route into racing is not a course. It is turning up on the dock and being useful.',
    goal: 'Race regularly at a club, as crew or on your own boat.',
    startsFrom: 'Anywhere, including no sailing at all.',
    realistic:
      'You can be crewing within a fortnight. Being wanted back takes a season.',
    notThis:
      'Racing is not a qualification, and no certificate gets you a berth on a good boat. Reliability does.',
    order: 6,
    steps: [
      {
        name: 'Join a club and put your name down for crew',
        detail:
          'Almost every Australian club runs a crew list or a "come and try" night. Boats are short of crew far more often than crew are short of boats.',
        meta: 'week one',
      },
      {
        name: 'Learn to sail well enough to be useful',
        detail:
          'Dinghy Level 2 or an Australian Sailing keelboat course. You need to be safe and know the vocabulary; you do not need to be good yet.',
        href: '/rya/basic-skills/',
        meta: '2 days',
      },
      {
        name: 'Learn the rules',
        detail:
          'The racing rules are the part you cannot pick up by watching, and the part that gets you shouted at. A short rules course or a club rules night pays back immediately.',
        meta: 'an evening',
      },
      {
        name: 'Learn spinnaker work',
        detail:
          'Downwind handling is where crews win and lose races, and where a new crew member becomes genuinely valuable rather than merely present.',
        href: '/rya/sailing-with-spinnakers/',
        meta: '2 days',
      },
      {
        name: 'Own a job on the boat',
        detail:
          'Pit, bow, trim, main. Pick one, get good at it, and become the person who is asked back.',
        meta: 'the whole game',
      },
      {
        name: 'Move to offshore racing if you want more',
        detail:
          'Category 1 and 2 events have their own safety and experience requirements set under the Australian Sailing Special Regulations.',
        href: '/pathways/offshore-passage/',
        meta: 'when ready',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Racing is the cheapest sailing in Australia and the fastest way to get good. A club membership and a willingness to be on the dock at 1pm on a Saturday gets you more time on the water than any course budget will.',
      },
      { type: 'sub', text: 'Why crewing is the way in' },
      {
        type: 'para',
        text: 'Racing boats need bodies. A twin-spinnaker 40-footer wants eight or nine people and rarely has them. If you can be relied on to arrive on time, sober, in the right clothing, and to do one job without being reminded, you will get sailing.',
      },
      {
        type: 'para',
        text: 'Skill is not the entry requirement. Reliability is. Skippers will teach a willing beginner all season and will not call back a good sailor who cancelled twice.',
      },
      { type: 'sub', text: 'What a course is genuinely worth here' },
      {
        type: 'para',
        text: 'Two things. First, safety — knowing where to put your hands, what a loaded sheet does and how to move on a heeled deck. Second, vocabulary, so instructions land the first time. Beyond that, races teach racing.',
      },
      { type: 'sub', text: 'Twilight racing' },
      {
        type: 'para',
        text: 'Most Australian clubs run mid-week twilight series through summer. They are short, informal, forgiving of beginners and the single best entry point into a racing fleet. If you are looking for one thing to do, that is it.',
      },
    ],
    related: [
      { name: 'RYA youth racing modules', href: '/rya/youth-racing/', note: 'if the sailor is under 16' },
      { name: 'Sailing with spinnakers', href: '/rya/sailing-with-spinnakers/', note: 'the skill that makes you wanted' },
      { name: 'I want to sail offshore', href: '/pathways/offshore-passage/', note: 'where club racing leads next' },
    ],
  },
  {
    slug: 'teach-sailing',
    title: 'I want to teach sailing',
    metaTitle: 'How to Become a Sailing Instructor in Australia | Pathway',
    description:
      'Becoming a sailing instructor in Australia — the Australian Sailing and RYA instructor routes, the pre-entry standard, and what the job is actually like.',
    standfirst:
      'Instructor courses assess whether you can teach. They assume you can already sail, and they are strict about it.',
    goal: 'Qualify to teach sailing at a club or a commercial school.',
    startsFrom: 'Confident, tidy sailing well above the level you intend to teach.',
    realistic:
      'A season of consolidation, then a pre-entry assessment and an instructor course. Most candidates who fail, fail on their own sailing.',
    notThis:
      'Not a full-time career for most people. Instructing in Australia is largely seasonal, casual and paid accordingly.',
    order: 7,
    steps: [
      {
        name: 'Get your own sailing well above the standard',
        detail:
          'Instructor courses assess teaching, not sailing — which means they expect the sailing to be already finished. Dinghy Level 3 or equivalent is a realistic baseline.',
        href: '/rya/improving-sailing-skills/',
        meta: 'the real prerequisite',
      },
      {
        name: 'Pick the scheme you will teach in',
        detail:
          'In Australia, Australian Sailing instructor qualifications are the most widely usable at clubs. RYA instructor qualifications matter at recognised RYA Training Centres and travel internationally.',
        href: '/qualifications/rya-vs-iyt-vs-asa/',
        meta: 'decide before you spend',
      },
      {
        name: 'Get the supporting tickets',
        detail:
          'Powerboat handling, first aid and a working with children check are typically required before or alongside the instructor course itself.',
        href: '/courses/marine-first-aid/',
        meta: 'often prerequisites',
      },
      {
        name: 'Pass the pre-entry assessment',
        detail:
          'Most instructor courses screen candidates on their own sailing before accepting a booking. This is where the majority of unsuccessful candidates stop.',
        meta: 'the filter',
      },
      {
        name: 'Sit the instructor course',
        detail:
          'Several days of teaching practice, assessed on how you run a session — briefing, demonstration, observation and debrief.',
        href: '/australian-sailing/instructor-courses/',
        meta: '4–5 days',
      },
      {
        name: 'Log teaching hours and specialise',
        detail:
          'Senior instructor, coach and race-official routes all open up after teaching hours. This is where instructing becomes a career rather than a summer job.',
        meta: 'after qualifying',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Instructing is the most common way Australians turn sailing into work, and the most commonly misunderstood. The courses are not sailing courses, and being a good sailor is the entry fee rather than the qualification.',
      },
      { type: 'sub', text: 'Australian Sailing or RYA?' },
      {
        type: 'para',
        text: 'For most people in Australia, Australian Sailing. It is the domestic scheme, clubs run it nationwide, and club instructing is where the work is. An RYA instructor qualification is the right choice if you intend to work at an RYA Training Centre, or to instruct overseas, where RYA recognition travels further.',
      },
      {
        type: 'para',
        text: 'Requirements, minimum ages and prerequisites are set by each body and change. Confirm the current entry requirements with the training body and the centre running the course before committing.',
      },
      { type: 'sub', text: 'What the job is actually like' },
      {
        type: 'list',
        items: [
          'seasonal — summer holidays and weekends, thin in winter',
          'mostly casual or contract rather than salaried',
          'long days outdoors, often with children',
          'far more safety-boat driving than sailing',
          'genuinely good for your own sailing, because teaching exposes what you only half know',
        ],
      },
      { type: 'sub', text: 'Instructing is not a commercial ticket' },
      {
        type: 'para',
        text: 'An instructor qualification lets you teach within a scheme. It is not an AMSA certificate of competency and does not authorise you to operate a commercial vessel or carry paying passengers. Those are separate, and administered separately.',
      },
    ],
    related: [
      { name: 'Australian Sailing instructor courses', href: '/australian-sailing/instructor-courses/', note: 'the domestic route' },
      { name: 'I want to work on boats', href: '/pathways/work-on-boats/', note: 'the commercial route instead' },
      { name: 'RYA vs IYT vs ASA', href: '/qualifications/rya-vs-iyt-vs-asa/', note: 'which recognition you actually need' },
    ],
  },
  {
    slug: 'work-on-boats',
    title: 'I want to work on boats',
    metaTitle: 'Work on Boats in Australia | AMSA Certificates Pathway',
    description:
      'Turning sailing into paid work in Australia — why recreational certificates are not commercial ones, and which AMSA certificates actually apply.',
    standfirst:
      'The hardest thing to accept here: your Yachtmaster is not an Australian commercial licence.',
    goal: 'Be paid to operate or crew a vessel in Australia.',
    startsFrom: 'Recreational sailing qualifications and sea time, usually.',
    realistic:
      'A full change of paperwork. The sea time transfers; the certificates largely do not.',
    notThis:
      'Not a recreational pathway with an extra module bolted on. AMSA certification is a separate system with its own medicals, sea service records and examinations.',
    order: 8,
    steps: [
      {
        name: 'Understand the two systems',
        detail:
          'Recreational schemes (RYA, IYT, ASA, Australian Sailing) and Australian commercial certification (AMSA) are separate. Start by reading how they relate.',
        href: '/learn/amsa-vs-recreational/',
        meta: 'read this first',
      },
      {
        name: 'Identify the certificate your job needs',
        detail:
          'Coxswain, Master and Marine Engine Driver certificates each cover defined vessel sizes and operating areas. The job dictates the certificate, not the other way round.',
        href: '/learn/amsa-certificates/',
        meta: 'job first, ticket second',
      },
      {
        name: 'Record your sea service properly',
        detail:
          'AMSA certificates require documented sea service in a prescribed form. Recreational miles only count if they were recorded in a way AMSA accepts.',
        href: '/learn/amsa-sea-service/',
        meta: 'start logging now',
      },
      {
        name: 'Get the supporting certificates',
        detail:
          'Radio (SROCP or LROCP), elements of shipboard safety, first aid and a medical are typically required alongside the certificate of competency.',
        href: '/courses/marine-radio/',
        meta: 'several short courses',
      },
      {
        name: 'Consider the sail-specific route',
        detail:
          'AMSA provides for sail-specific certificates, which is where existing sailing qualifications and sea time count for most.',
        href: '/learn/amsa-sailing-certificates/',
        meta: 'where sailing counts',
      },
      {
        name: 'Or work overseas instead',
        detail:
          'Yachtmaster with a commercial endorsement is widely recognised in the superyacht and charter industries outside Australia, which is why many Australians work abroad.',
        href: '/rya/yachtmaster/',
        meta: 'the common alternative',
        optional: true,
      },
    ],
    blocks: [
      {
        type: 'para',
        text: 'This is the pathway that disappoints people, so it is worth stating early: in Australian waters, a recreational sailing certificate does not authorise commercial operation, however senior it is.',
      },
      { type: 'sub', text: 'Why Yachtmaster is not enough' },
      {
        type: 'para',
        text: 'RYA Yachtmaster with a commercial endorsement is a genuine professional qualification, and it is recognised in much of the world. Australia runs its own domestic commercial certification through AMSA, under the national law for domestic commercial vessels, and operating commercially here means holding an AMSA certificate appropriate to the vessel and the operation.',
      },
      {
        type: 'para',
        text: 'This is not a judgement about the quality of the training. It is a jurisdictional fact, and it catches out experienced sailors returning to Australia every year.',
      },
      { type: 'sub', text: 'What does transfer' },
      {
        type: 'list',
        items: [
          'sea time, if it is documented in an acceptable form',
          'actual competence, which makes the assessments straightforward',
          'radio certificates, where the Australian certificate is already held',
          'the habits — watchkeeping, passage planning, maintenance discipline',
        ],
      },
      { type: 'sub', text: 'Check the current rules' },
      {
        type: 'para',
        text: 'AMSA certificate categories, eligibility, sea service requirements and course approvals change. Nothing on this site is a substitute for AMSA’s current published requirements for the certificate you intend to apply for, and you should confirm with AMSA directly before paying for training.',
      },
    ],
    related: [
      { name: 'AMSA vs recreational certificates', href: '/learn/amsa-vs-recreational/', note: 'the two systems side by side' },
      { name: 'AMSA certificates of competency', href: '/learn/amsa-certificates/', note: 'coxswain, master and engineer' },
      { name: 'I want to teach sailing', href: '/pathways/teach-sailing/', note: 'the other way to be paid' },
    ],
  },
];

export const pathwayBySlug = (slug: string) => pathways.find((p) => p.slug === slug);
export const orderedPathways = [...pathways].sort((a, b) => a.order - b.order);
