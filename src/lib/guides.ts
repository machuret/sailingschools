/**
 * Explainers under /learn/ that are not boat-licence records.
 *
 * The licence pages have their own shape (a jurisdiction, a rule, an authority). These are
 * ordinary long-form explainers, so they share one record type and one template.
 *
 * The AMSA pages were checked against amsa.gov.au in September 2026 and each one carries
 * that date and a link to the source. Commercial certification changes; the pages say so
 * and tell the reader to confirm with AMSA rather than with us.
 */
import type { CourseBlock } from './courses';

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  standfirst: string;
  kicker: string;
  /** Grouping for the /learn/ hub. */
  section: 'amsa' | 'practical';
  order: number;
  /** Four short definition pairs across the top of the page. */
  facts?: { term: string; def: string }[];
  blocks: CourseBlock[];
  /** Rendered as an FAQPage node as well as visible copy. */
  faqs?: { q: string; a: string }[];
  source?: { name: string; url: string; checked: string };
  related: { name: string; href: string; note: string }[];
};

export const amsaChecked = 'September 2026';

export const guides: Guide[] = [
  {
    slug: 'amsa-vs-recreational',
    title: 'AMSA certificates vs recreational qualifications',
    metaTitle: 'AMSA vs RYA & IYT | Commercial vs Recreational Sailing',
    description:
      'How Australian commercial certification relates to RYA, IYT and Australian Sailing qualifications — where they are separate, and the one place they connect directly.',
    standfirst:
      'Two systems, one connection point — and almost everybody misunderstands which way round it runs.',
    kicker: 'Working on the water',
    section: 'amsa',
    order: 1,
    facts: [
      { term: 'Recreational side', def: 'RYA, IYT, American Sailing, Australian Sailing' },
      { term: 'Commercial side', def: 'AMSA, under the national law for domestic commercial vessels' },
      { term: 'Do they overlap?', def: 'Only for the two sailing certificates' },
      { term: 'Checked', def: amsaChecked },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Australian sailing qualifications divide into two systems that look similar from outside and behave nothing alike.',
      },
      { type: 'sub', text: 'The recreational system' },
      {
        type: 'para',
        text: 'RYA, IYT, American Sailing and Australian Sailing are training schemes. They set a syllabus, recognise centres to teach it, and issue a certificate saying you met a standard. Nobody is obliged to hold one. They are not government licences and they are not, on their own, authority to do anything commercially.',
      },
      { type: 'sub', text: 'The commercial system' },
      {
        type: 'para',
        text: 'Commercial operation of a domestic vessel in Australia is regulated by AMSA, which issues certificates of competency. These are the tickets that authorise you to be paid to operate a vessel, carry passengers or work as crew. They come with medical fitness requirements, first aid, marine radio and — for most of them — documented sea service.',
      },
      {
        type: 'para',
        text: 'AMSA currently issues deck certificates from General Purpose Hand and Coxswain Grade 3 up through the Master grades, engineer certificates from Marine Engine Driver Grade 3 up to Engineer Class 3, and two sailing-specific certificates.',
      },
      { type: 'sub', text: 'Where the two systems actually touch' },
      {
        type: 'para',
        text: 'This is the part that surprises people, and it runs the opposite way to the usual assumption. The two AMSA sailing certificates do not merely accept recreational qualifications — they require one.',
      },
      {
        type: 'list',
        items: [
          'Sailing Master Coastal requires a commercially endorsed RYA Yachtmaster Coastal, or IYT Master of Yachts Coastal',
          'Sailing Master Offshore requires a commercially endorsed RYA Yachtmaster Offshore, a Yachtmaster Ocean, or an IYT Master of Yachts Limited',
        ],
      },
      {
        type: 'para',
        text: 'So a Yachtmaster is not an Australian commercial ticket — and it is also the doorway to one. Both statements are true, and collapsing them into either half is where the confusion starts.',
      },
      { type: 'sub', text: 'What that means in practice' },
      {
        type: 'para',
        text: 'If your goal is paid work skippering sailing vessels in Australia, the recreational pathway is not a detour — it is the prescribed route, and it ends at a commercially endorsed Yachtmaster. If your goal is paid work on power vessels, charter boats, tenders or commercial fishing, the recreational schemes are largely irrelevant and you want the Coxswain and Master certificates instead.',
      },
      {
        type: 'para',
        text: 'The certificate you need is determined by the vessel and the operation, not by how good a sailor you are. Work backwards from the job.',
      },
    ],
    faqs: [
      {
        q: 'Is an RYA Yachtmaster valid in Australia?',
        a: 'It is a recognised recreational qualification anywhere, and it is accepted by AMSA as the prior certification for a Sailing Master certificate. It is not itself an Australian commercial certificate of competency.',
      },
      {
        q: 'Do I need an AMSA certificate to sail my own boat?',
        a: 'No. AMSA certificates of competency apply to domestic commercial vessels. Recreational sailing is a state matter, and what you need there is a recreational boat licence if your state requires one.',
      },
      {
        q: 'Does Australian Sailing instructor training count toward AMSA?',
        a: 'An instructor qualification lets you teach within a scheme. Australian Sailing Powerboat Handling does appear in AMSA’s accepted engine-qualification combinations for the Sailing Master certificates, but instructor tickets themselves are not certificates of competency.',
      },
    ],
    source: {
      name: 'AMSA — Domestic certificates of competency',
      url: 'https://www.amsa.gov.au/qualifications-training/domestic-certificates-competency-cocs',
      checked: amsaChecked,
    },
    related: [
      { name: 'AMSA certificates of competency', href: '/learn/amsa-certificates/', note: 'the full list and what each one covers' },
      { name: 'The two sailing certificates', href: '/learn/amsa-sailing-certificates/', note: 'Sailing Master Coastal and Offshore in detail' },
      { name: 'I want to work on boats', href: '/pathways/work-on-boats/', note: 'the route, step by step' },
    ],
  },
  {
    slug: 'amsa-certificates',
    title: 'AMSA certificates of competency explained',
    metaTitle: 'AMSA Certificates of Competency | Coxswain to Master',
    description:
      'The AMSA domestic certificates of competency — General Purpose Hand, the Coxswain and Master grades, the engineer certificates, and the two for sail.',
    standfirst:
      'Nine deck certificates, four engineer certificates and two for sail. The job picks the certificate, not the other way round.',
    kicker: 'Working on the water',
    section: 'amsa',
    order: 2,
    facts: [
      { term: 'Issued by', def: 'AMSA, under the national law for domestic commercial vessels' },
      { term: 'Governed by', def: 'Marine Order 505' },
      { term: 'Category', def: 'Near coastal' },
      { term: 'Checked', def: amsaChecked },
    ],
    blocks: [
      {
        type: 'para',
        text: 'A certificate of competency is what authorises you to work in a particular role on a domestic commercial vessel. AMSA groups them into deck, engineer and sailing.',
      },
      { type: 'sub', text: 'Deck certificates' },
      {
        type: 'para',
        text: 'These run from crewing up to command, with the limit set by vessel length and operating area:',
      },
      {
        type: 'list',
        items: [
          'General Purpose Hand — work as a deckhand',
          'Coxswain Grade 3 — the entry command certificate',
          'Coxswain Grade 2',
          'Coxswain Grade 1',
          'Master less than 24 metres',
          'Master (inland waters)',
          'Master less than 45 metres',
          'Master less than 100 metres',
        ],
      },
      {
        type: 'para',
        text: 'Coxswain Grade 3 was introduced under the revised Marine Order 505 that came into force in January 2023, replacing an earlier exemption arrangement. The same revision retired Master less than 35 metres, Master less than 80 metres and Mate less than 80 metres.',
      },
      { type: 'sub', text: 'Engineer certificates' },
      {
        type: 'list',
        items: [
          'Marine Engine Driver Grade 3',
          'Marine Engine Driver Grade 2',
          'Marine Engine Driver Grade 1',
          'Engineer Class 3',
        ],
      },
      {
        type: 'para',
        text: 'Sailors usually meet these as a prerequisite rather than a goal: Marine Engine Driver Grade 3 is one of the accepted engine qualifications for the two sailing certificates.',
      },
      { type: 'sub', text: 'Sailing certificates' },
      {
        type: 'list',
        items: [
          'Sailing Master Coastal — sailing vessels under 24 metres, inshore waters',
          'Sailing Master Offshore — sailing vessels under 24 metres, within the EEZ',
        ],
      },
      {
        type: 'para',
        text: 'Both are limited to sailing vessels with propulsion power under 100 kilowatts, and both are covered in full on their own page.',
      },
      { type: 'sub', text: 'What every certificate needs' },
      {
        type: 'para',
        text: 'Whichever certificate you are after, the supporting requirements are consistent:',
      },
      {
        type: 'list',
        items: [
          'a Certificate of Medical Fitness — Domestic Seafarers',
          'a current first aid certificate (AMSA accepts HLTAID011 Provide first aid, or equivalent)',
          'a marine radio operator certificate appropriate to the certificate',
          'the approved training course, delivered by a registered training organisation',
          'documented sea service, for most certificates',
        ],
      },
      {
        type: 'para',
        text: 'The medical fitness certificate became a requirement for all new and equivalent applications from 1 January 2023.',
      },
    ],
    faqs: [
      {
        q: 'Which AMSA certificate do I need?',
        a: 'The one that matches the vessel and the operation — its length, its propulsion power, the waters it works in and whether it carries passengers. Ask the operator you want to work for which certificate the role requires, then work backwards to the training.',
      },
      {
        q: 'Is a Coxswain certificate enough to skipper a sailing charter boat?',
        a: 'It depends entirely on the vessel and the operation. For a sailing vessel specifically, AMSA provides the two Sailing Master certificates; a Coxswain Grade 1 also appears as an accepted engine qualification toward them.',
      },
      {
        q: 'Where do I do the training?',
        a: 'Through a registered training organisation delivering the approved course for that certificate. AMSA issues the certificate; it does not deliver the training.',
      },
    ],
    source: {
      name: 'AMSA — Domestic certificates of competency',
      url: 'https://www.amsa.gov.au/qualifications-training/domestic-certificates-competency-cocs',
      checked: amsaChecked,
    },
    related: [
      { name: 'AMSA vs recreational qualifications', href: '/learn/amsa-vs-recreational/', note: 'how the two systems relate' },
      { name: 'The two sailing certificates', href: '/learn/amsa-sailing-certificates/', note: 'Sailing Master Coastal and Offshore' },
      { name: 'Sea service for AMSA certificates', href: '/learn/amsa-sea-service/', note: 'what counts and how to record it' },
    ],
  },
  {
    slug: 'amsa-sailing-certificates',
    title: 'Sailing Master Coastal and Sailing Master Offshore',
    metaTitle: 'AMSA Sailing Master Coastal & Offshore | Requirements',
    description:
      'AMSA’s two sailing-specific certificates of competency — the operating limits of each, and the RYA and IYT qualifications they require you to hold first.',
    standfirst:
      'The only two AMSA certificates written for sailing vessels — and the only place a Yachtmaster is a formal prerequisite.',
    kicker: 'Working on the water',
    section: 'amsa',
    order: 3,
    facts: [
      { term: 'Vessel', def: 'Sailing vessel under 24 metres' },
      { term: 'Propulsion', def: 'Under 100 kilowatts' },
      { term: 'Sea service evidence', def: 'Not required for either certificate' },
      { term: 'Checked', def: amsaChecked },
    ],
    blocks: [
      {
        type: 'para',
        text: 'These are the two certificates that turn a recreational sailing career into a commercial one in Australia. They are unusual in the AMSA catalogue in two respects: they require a recreational qualification as a prerequisite, and AMSA does not ask for sea service evidence when you apply.',
      },
      { type: 'sub', text: 'Sailing Master Coastal' },
      {
        type: 'para',
        text: 'Command and operate the engines of a sailing vessel under 24 metres, with propulsion power under 100 kilowatts, in inshore waters. It may carry passengers.',
      },
      { type: 'para', text: 'AMSA requires you to hold one of:' },
      {
        type: 'list',
        items: ['commercially endorsed RYA Yachtmaster Coastal', 'IYT Master of Yachts Coastal (Sail, or Power and Sail)'],
      },
      { type: 'sub', text: 'Sailing Master Offshore' },
      {
        type: 'para',
        text: 'The same vessel limits — under 24 metres, propulsion under 100 kilowatts — but out to the limits of the Australian Exclusive Economic Zone. Beyond inshore waters it is limited to no more than 12 passengers.',
      },
      { type: 'para', text: 'AMSA requires you to hold one of:' },
      {
        type: 'list',
        items: [
          'commercially endorsed RYA Yachtmaster Offshore',
          'RYA Yachtmaster Ocean',
          'IYT Master of Yachts Limited (Sail, or Power and Sail)',
        ],
      },
      { type: 'sub', text: 'The engine qualification' },
      {
        type: 'para',
        text: 'Both certificates authorise you to operate the engines as well as command the vessel, so both require an engine qualification. AMSA accepts any one of:',
      },
      {
        type: 'list',
        items: [
          'Coxswain Grade 1 near coastal',
          'Marine Engine Driver Grade 3 near coastal',
          'MAR Maritime Training Package MAR037',
          'RYA Diesel Engine plus Australian Sailing Powerboat Handling',
          'RYA Diesel Engine plus RYA Level 2 Powerboat',
          'IYT Boat Engineer Grade 1 plus Small Powerboat & RIB Master',
        ],
      },
      {
        type: 'para',
        text: 'The last three combinations are why a diesel engine course keeps appearing on this site as more than a nice-to-have. For a sailor already holding a Yachtmaster, a two-day diesel course and a powerboat ticket are a far shorter route than a Coxswain certificate.',
      },
      { type: 'sub', text: 'The rest of the requirements' },
      {
        type: 'list',
        items: [
          'at least 16 years old when the certificate is issued',
          'able to speak, read and understand English',
          'medically fit for the duties required',
          'a current first aid certificate (HLTAID011 Provide first aid)',
          'marine radio — SROCP for Coastal, LROCP for Offshore',
        ],
      },
      {
        type: 'para',
        text: 'The radio certificate is the one difference in the supporting paperwork: the Coastal certificate takes the Short Range Operator Certificate of Proficiency, the Offshore certificate takes the Long Range one.',
      },
      { type: 'sub', text: 'The commercial endorsement matters' },
      {
        type: 'para',
        text: 'Note the word "commercially endorsed" on the Yachtmaster requirements. A recreational Yachtmaster certificate is not the same document; the commercial endorsement is a separate RYA process with its own medical, sea survival and first aid requirements. Budget for it as a distinct step.',
      },
    ],
    faqs: [
      {
        q: 'Do I need sea service for a Sailing Master certificate?',
        a: 'AMSA states that sea service evidence is not required when applying for Sailing Master Coastal or Sailing Master Offshore. The prerequisite Yachtmaster qualification has its own sea time requirements, so the sea time is demanded — just by the RYA rather than by AMSA.',
      },
      {
        q: 'Can I skip the Yachtmaster and take a Coxswain certificate instead?',
        a: 'You can hold a Coxswain certificate and work commercially within its limits, but it is not a substitute for a Sailing Master certificate. They authorise different things. Which is right depends on the vessel and the role, not on which is easier to get.',
      },
      {
        q: 'How big a vessel can I command?',
        a: 'Both certificates are limited to sailing vessels under 24 metres with propulsion power under 100 kilowatts. Beyond that you are into the Master certificates.',
      },
    ],
    source: {
      name: 'AMSA — Sailing Master Coastal and Sailing Master Offshore near coastal',
      url: 'https://www.amsa.gov.au/qualifications-training/domestic-qualifications/sailing-master-offshore-nc',
      checked: amsaChecked,
    },
    related: [
      { name: 'RYA Yachtmaster', href: '/rya/yachtmaster/', note: 'the prerequisite, and what it assesses' },
      { name: 'Diesel engine courses', href: '/courses/diesel-engine/', note: 'part of two accepted engine combinations' },
      { name: 'Marine radio courses', href: '/courses/marine-radio/', note: 'SROCP and LROCP' },
    ],
  },
  {
    slug: 'amsa-sea-service',
    title: 'Sea service for AMSA certificates',
    metaTitle: 'AMSA Sea Service Requirements | Recording Sea Time',
    description:
      'How sea service works for AMSA certificates of competency — what counts, how to record it, and why recreational sailing miles often fail to qualify.',
    standfirst:
      'The commonest reason an application stalls is not a shortage of sea time. It is sea time that was never recorded in a form AMSA will accept.',
    kicker: 'Working on the water',
    section: 'amsa',
    order: 4,
    facts: [
      { term: 'Set by', def: 'Marine Order 505' },
      { term: 'Required for', def: 'Most certificates of competency' },
      { term: 'Not required for', def: 'Sailing Master Coastal and Offshore' },
      { term: 'Checked', def: amsaChecked },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Sea service is the documented record of time you have actually spent working on vessels. For most AMSA certificates of competency it is a hard requirement, and the amount and type are set out in Marine Order 505 for each certificate.',
      },
      { type: 'sub', text: 'Why recreational miles often do not count' },
      {
        type: 'para',
        text: 'A logbook full of weekend sailing is not the same thing as sea service. AMSA is interested in verifiable service in a defined capacity on a vessel, recorded in an accepted form and signed by someone who can attest to it. A personal log with no vessel details, no signature and no master is evidence of sailing; it is not evidence of service.',
      },
      {
        type: 'para',
        text: 'This is the single most avoidable problem in the whole pathway, because it is only fixable going forward. Time already sailed and never documented cannot be reconstructed to a standard AMSA will accept.',
      },
      { type: 'sub', text: 'Start recording now' },
      {
        type: 'para',
        text: 'Whatever stage you are at, start keeping a record that would survive scrutiny. At a minimum, for each period:',
      },
      {
        type: 'list',
        items: [
          'vessel name, length and unique identifier',
          'dates on and off',
          'the waters operated in',
          'your capacity aboard',
          'days at sea, and hours where the certificate counts hours',
          'the name and certificate of the master who can verify it',
        ],
      },
      {
        type: 'para',
        text: 'Get it signed at the end of each period rather than years later. Vessels are sold, operators close and skippers move overseas.',
      },
      { type: 'sub', text: 'The sailing exception' },
      {
        type: 'para',
        text: 'The two Sailing Master certificates are the exception: AMSA states that sea service evidence is not required when applying for either of them. That does not mean sea time is optional — the prerequisite Yachtmaster qualification carries its own mileage, days and night-hours requirements, so the demand simply sits with the RYA or IYT instead.',
      },
      { type: 'sub', text: 'Check the current requirement' },
      {
        type: 'para',
        text: 'Sea service requirements changed with the revised Marine Order 505 in January 2023 and continue to be reviewed. Confirm the current requirement for your specific certificate with AMSA before you plan around it — a season built on a superseded figure is an expensive mistake.',
      },
    ],
    faqs: [
      {
        q: 'Does time as a passenger count?',
        a: 'No. Sea service is time in a defined capacity aboard a vessel, not time aboard. Delivery crewing, working aboard and paid crew roles are the kinds of service that can count.',
      },
      {
        q: 'Does my RYA logbook count as AMSA sea service?',
        a: 'Not by itself. An RYA logbook is designed to evidence the RYA’s own mileage and night-hours requirements. AMSA has its own sea service record requirements, and the two are not interchangeable.',
      },
      {
        q: 'Can I count time on my own boat?',
        a: 'It depends on the certificate and how the service is recorded and verified. Ask AMSA directly about your circumstances rather than assuming either way.',
      },
    ],
    source: {
      name: 'AMSA — Marine Order 505 certificates of competency',
      url: 'https://www.amsa.gov.au/about/regulations-and-standards/marine-order-505-certificates-competency-national-law',
      checked: amsaChecked,
    },
    related: [
      { name: 'AMSA certificates of competency', href: '/learn/amsa-certificates/', note: 'which certificate needs what' },
      { name: 'Mile building', href: '/courses/mile-building/', note: 'how sailors accumulate sea time' },
      { name: 'I want to work on boats', href: '/pathways/work-on-boats/', note: 'the whole route' },
    ],
  },
  {
    slug: 'how-long-to-learn-to-sail',
    title: 'How long does it take to learn to sail?',
    metaTitle: 'How Long Does It Take to Learn to Sail? | Realistic Timeframes',
    description:
      'Realistic timeframes for learning to sail in Australia — a day to get moving, a week to be useful crew, a season to skipper, and years to be genuinely good.',
    standfirst:
      'A day to move the boat. A week to be useful. A season to skipper. Years to be good.',
    kicker: 'Before you book',
    section: 'practical',
    order: 10,
    facts: [
      { term: 'First sail', def: 'A single afternoon' },
      { term: 'Useful crew', def: 'One five-day course' },
      { term: 'Day skipper', def: 'A season, honestly' },
      { term: 'Genuinely good', def: 'Years, and mostly sea time' },
    ],
    blocks: [
      {
        type: 'para',
        text: 'The honest answer depends entirely on what "learn to sail" means to you, and the gap between the four common meanings is enormous.',
      },
      { type: 'sub', text: 'A day: making the boat go' },
      {
        type: 'para',
        text: 'A taster session or a single day will have you steering, trimming a sail and understanding why the boat moves. It is enough to know whether you enjoy it, which is the only question a first day needs to answer.',
      },
      { type: 'sub', text: 'A week: being useful crew' },
      {
        type: 'para',
        text: 'Five days — Competent Crew, IYT International Crew, or two dinghy levels back to back — is the point at which you stop being a passenger. You can take a turn on the helm, handle lines, reef, keep a watch and not be a liability.',
      },
      {
        type: 'para',
        text: 'This is where most people should aim first, and where a surprising number stop happily for years.',
      },
      { type: 'sub', text: 'A season: skippering' },
      {
        type: 'para',
        text: 'Day Skipper — the theory and the practical — is often sold as two courses, which makes it sound like ten days. In practice the certificate is achievable in a season and the competence takes about that long: the courses teach the framework, and the weekends in between make it stick.',
      },
      {
        type: 'para',
        text: 'People who compress it into a fortnight pass the course and then sail nervously for a year. People who spread it over a season sail confidently at the end of it. The certificate is identical.',
      },
      { type: 'sub', text: 'Years: genuinely good' },
      {
        type: 'para',
        text: 'Coastal Skipper, Yachtmaster and real offshore competence are gated by sea time rather than by courses. There is no way to buy the miles, the night hours or the experience of a forecast that was wrong.',
      },
      { type: 'sub', text: 'What actually changes the pace' },
      {
        type: 'list',
        items: [
          'how often you sail between courses — by far the biggest factor',
          'whether you own a boat or have to book one',
          'dinghy versus yacht: dinghies teach feel much faster',
          'whether you get helm time or end up as permanent foredeck',
          'club racing, which compresses years of boat handling into a season',
        ],
      },
      {
        type: 'para',
        text: 'The single best predictor of how fast someone learns is not talent or course choice. It is how many weekends a year they are actually on the water.',
      },
    ],
    faqs: [
      {
        q: 'Can I learn to sail in a weekend?',
        a: 'You can learn enough in a weekend to sail a dinghy in light winds under supervision. That is a real achievement and not the same as being able to take a boat out alone.',
      },
      {
        q: 'How long before I can charter a yacht?',
        a: 'From zero, realistically six to twelve months if you sail regularly: a crew course, a theory course, a skipper practical and some logged miles.',
      },
      {
        q: 'Am I too old to learn?',
        a: 'No. Sailing is one of the few sports where the median beginner is in their forties or fifties, and keelboat and yacht training is not physically demanding in the way dinghy sailing can be.',
      },
    ],
    related: [
      { name: 'I have never sailed', href: '/pathways/complete-beginner/', note: 'the route in from zero' },
      { name: 'What sailing courses cost', href: '/learn/sailing-course-costs/', note: 'the other question everyone asks' },
      { name: 'Find a course', href: '/find-a-course/', note: 'three questions to a starting point' },
    ],
  },
  {
    slug: 'sailing-course-costs',
    title: 'What sailing courses cost in Australia',
    metaTitle: 'Sailing Course Costs Australia | What Drives the Price',
    description:
      'What drives the cost of a sailing course in Australia — boat, duration, accommodation and certification fees — and how to compare two quotes that look identical.',
    standfirst:
      'This site does not publish a price it has not verified. What it can do is tell you what you are actually paying for.',
    kicker: 'Before you book',
    section: 'practical',
    order: 11,
    facts: [
      { term: 'Biggest cost driver', def: 'The boat, and how many of you are on it' },
      { term: 'Most common surprise', def: 'Certification fees quoted separately' },
      { term: 'Prices on this site', def: 'None published without a check date' },
      { term: 'Cheapest real sailing', def: 'Club membership and crewing' },
    ],
    blocks: [
      {
        type: 'para',
        text: 'Every directory on the internet will give you a price range for a sailing course. Almost none of them will tell you when they checked it, and a course price that was accurate two years ago is worse than no price at all — it sets an expectation the school cannot meet.',
      },
      {
        type: 'para',
        text: 'So this site holds a price only where it has been checked against the school, and shows the date it was checked. Where a school listing shows a dash, no verified figure is held. That is not a claim the course is cheap, expensive or free.',
      },
      { type: 'sub', text: 'What you are actually paying for' },
      {
        type: 'para',
        text: 'Four things move a course price far more than the scheme on the certificate:',
      },
      {
        type: 'list',
        items: [
          'the boat — a 40-foot cruising yacht costs many times what a training dinghy costs to run',
          'the student-to-instructor ratio — private tuition is priced per day, not per head',
          'the duration and whether you sleep aboard',
          'shore costs — marina berths, mooring fees and fuel, which vary enormously by city',
        ],
      },
      { type: 'sub', text: 'The costs quoted separately' },
      {
        type: 'para',
        text: 'The advertised course fee is often not the whole number. Ask specifically about:',
      },
      {
        type: 'list',
        items: [
          'certification and registration fees paid to the awarding body',
          'the course pack, logbook or shorebased materials',
          'food and accommodation on liveaboard courses',
          'wet-weather gear hire',
          'examination fees, which for Yachtmaster are separate from any preparation',
          'membership, where the school requires club membership',
        ],
      },
      { type: 'sub', text: 'How to compare two quotes properly' },
      {
        type: 'para',
        text: 'Ask both schools the same four questions: how many students per instructor, what boat, what is included in the fee, and what is billed separately. A course that looks twenty per cent dearer with three students aboard is usually better value than the cheaper one with six.',
      },
      { type: 'sub', text: 'The cheapest way to sail a lot' },
      {
        type: 'para',
        text: 'It is not a course. Join a club, get on a crew list and race. Australian club racing costs a membership and your time, it runs every week through summer, and it will teach you more boat handling per dollar than anything else available.',
      },
      {
        type: 'para',
        text: 'Courses are for structure, certification and the things racing will not teach you — navigation, anchoring, night passages and command. Use them for that, and get your hours somewhere cheaper.',
      },
    ],
    faqs: [
      {
        q: 'Why does this site not list course prices?',
        a: 'Because it does not hold verified ones yet. A price is published here only with the date it was checked against the school; publishing an unchecked figure would be guessing in public about somebody else’s business.',
      },
      {
        q: 'Is a more expensive course better?',
        a: 'Not reliably. Price mostly reflects the boat and the ratio. A small group on a modest boat with a good instructor beats a large group on an impressive one.',
      },
      {
        q: 'Are there subsidies for sailing training?',
        a: 'Some clubs subsidise youth training, and some commercial maritime qualifications attract funding through registered training organisations. Recreational courses generally do not. Ask the club or RTO directly.',
      },
    ],
    related: [
      { name: 'How long it takes to learn', href: '/learn/how-long-to-learn-to-sail/', note: 'the other half of the planning question' },
      { name: 'Sailing schools by state', href: '/sailing-schools/', note: 'who to ask for a quote' },
      { name: 'I want to race', href: '/pathways/race-with-a-club/', note: 'the cheapest way to sail often' },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
export const orderedGuides = [...guides].sort((a, b) => a.order - b.order);
export const guidesInSection = (section: Guide['section']) =>
  orderedGuides.filter((g) => g.section === section);
