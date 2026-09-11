/**
 * Comparison pages — "X vs Y", which is how people search once they know both names.
 *
 * The discipline these pages need is a verdict. A comparison that ends "it depends on your
 * goals" has wasted the reader's time; every record here carries a one-line answer at the
 * top and two lists saying who should pick which. Where the honest answer really is "they
 * are the same thing under two names", the page says that instead of manufacturing
 * difference.
 */
import type { CourseBlock } from './courses';

export type ComparisonRow = { label: string; a: string; b: string };

export type Comparison = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  standfirst: string;
  /** The one-line answer, above the fold. */
  verdict: string;
  a: { name: string; blurb: string; href?: string };
  b: { name: string; blurb: string; href?: string };
  rows: ComparisonRow[];
  chooseA: string[];
  chooseB: string[];
  blocks: CourseBlock[];
  faqs?: { q: string; a: string }[];
  related: { name: string; href: string; note: string }[];
  group: 'schemes' | 'courses' | 'boats' | 'practical';
  order: number;
};

export const comparisonGroups: { key: Comparison['group']; name: string; blurb: string }[] = [
  { key: 'schemes', name: 'Training schemes', blurb: 'Which body’s certificate, and whether it matters.' },
  { key: 'courses', name: 'Courses and levels', blurb: 'Which course to book, and which to skip.' },
  { key: 'boats', name: 'Boats', blurb: 'What you learn on changes what you learn.' },
  { key: 'practical', name: 'How you learn', blurb: 'Format, cost and the paperwork that is not a certificate.' },
];

export const comparisons: Comparison[] = [
  {
    slug: 'rya-vs-australian-sailing',
    title: 'RYA vs Australian Sailing',
    metaTitle: 'RYA vs Australian Sailing | Which Scheme in Australia?',
    description:
      'RYA or Australian Sailing? The domestic scheme has far wider availability and club pathways; the RYA travels internationally and dominates yacht training. Which suits which goal.',
    standfirst: 'One is the national body with a club in every harbour. The other is what the yacht world outside Australia recognises.',
    verdict:
      'Australian Sailing if you are learning here and staying here, especially in a dinghy or through a club. RYA if your goal involves yachts, charter or anywhere outside Australia.',
    a: { name: 'Australian Sailing', blurb: 'The national body. Tackers, OutThere, dinghy and keelboat, taught through clubs nationwide.', href: '/australian-sailing/' },
    b: { name: 'RYA', blurb: 'The British scheme, recognised worldwide and the strongest international presence in Australian yacht training.', href: '/rya/' },
    rows: [
      { label: 'Who runs it', a: 'Australian Sailing, the national governing body', b: 'Royal Yachting Association, through recognised training centres' },
      { label: 'Australian availability', a: 'Widest of any scheme — hundreds of affiliated clubs', b: 'Good for yachts, thin for dinghies' },
      { label: 'Strongest in', a: 'Dinghies, youth, club racing, keelboats', b: 'Cruising yachts, skipper and Yachtmaster levels' },
      { label: 'Recognised overseas', a: 'Limited — it is a domestic scheme', b: 'Very widely, including by charter companies' },
      { label: 'Typical cost', a: 'Lower, because clubs are not-for-profit', b: 'Higher, commercial training centres' },
      { label: 'Youth pathway', a: 'Tackers and OutThere, nationwide', b: 'Youth Sailing Scheme, rarely taught here' },
      { label: 'Leads toward', a: 'Club racing, instructing, national squads', b: 'Charter, Yachtmaster, AMSA Sailing Master' },
    ],
    chooseA: [
      'you are learning in a dinghy',
      'the sailor is a child',
      'you want to join a club and race',
      'cost matters and there is a club nearby',
      'you intend to instruct at an Australian club',
    ],
    chooseB: [
      'you want to sail or charter yachts',
      'you may sail overseas',
      'you are heading for Day Skipper or Yachtmaster',
      'you eventually want an AMSA Sailing Master certificate',
      'a charter company will be reading your paperwork',
    ],
    blocks: [
      { type: 'para', text: 'This is the comparison that matters most in Australia, and it is usually framed wrongly — as though the two schemes compete for the same student. They mostly do not.' },
      { type: 'sub', text: 'They are strong in different boats' },
      { type: 'para', text: 'Australian Sailing owns small-boat training here. Tackers is in more clubs than any other children’s programme, and the dinghy and keelboat courses run out of club sheds nationwide at prices a commercial school cannot match.' },
      { type: 'para', text: 'The RYA owns yacht training here. Almost every Australian school teaching Competent Crew, Day Skipper and Yachtmaster preparation is an RYA recognised training centre, and the pathway is the one charter companies and, ultimately, AMSA understand.' },
      { type: 'sub', text: 'The overlap is real but narrow' },
      { type: 'para', text: 'Keelboat training sits in both schemes, and a beginner could reasonably take either. At that level the deciding factor is not the certificate but whether there is a club near you running it — which usually points at Australian Sailing.' },
      { type: 'sub', text: 'Doing both is normal' },
      { type: 'para', text: 'Plenty of Australian sailors learn to sail through a club under Australian Sailing, race for years, then take RYA Day Skipper when they decide to charter. Nothing is wasted: the second scheme assumes the ability the first gave you, and schools will place you by ability rather than by certificate.' },
    ],
    faqs: [
      { q: 'Does Australian Sailing count overseas?', a: 'Not reliably. It is a domestic scheme, and charter companies outside Australia generally ask for RYA, IYT or an ICC. Your logged experience still counts for a great deal — the certificate is the part that does not travel.' },
      { q: 'Can I convert one to the other?', a: 'There is no formal conversion. In practice a school will assess you on ability and start you at the right level, which is usually higher than a beginner course.' },
    ],
    related: [
      { name: 'RYA vs IYT vs ASA', href: '/qualifications/rya-vs-iyt-vs-asa/', note: 'the three international schemes compared' },
      { name: 'Australian Sailing courses', href: '/australian-sailing/', note: 'what the domestic scheme awards' },
      { name: 'RYA courses', href: '/rya/', note: 'the full RYA catalogue in Australia' },
    ],
    group: 'schemes',
    order: 1,
  },
  {
    slug: 'rya-vs-iyt',
    title: 'RYA vs IYT',
    metaTitle: 'RYA vs IYT | Which Yacht Qualification Travels Further?',
    description:
      'RYA or IYT? Both are internationally recognised yacht schemes taught in Australia. The RYA has deeper school availability; IYT has dedicated catamaran certificates and issues the ICC.',
    standfirst: 'Two international schemes covering nearly identical ground, with two genuine differences worth knowing.',
    verdict:
      'RYA for availability and for the Yachtmaster route. IYT if you want a catamaran-specific certificate or need an ICC issued without a separate process.',
    a: { name: 'RYA', blurb: 'The British scheme. Competent Crew, Day Skipper, Coastal Skipper, Yachtmaster.', href: '/rya/' },
    b: { name: 'IYT', blurb: 'International Yacht Training. International Crew, Bareboat Skipper, Master of Yachts.', href: '/iyt/' },
    rows: [
      { label: 'Entry course', a: 'Competent Crew, 5 days', b: 'International Crew, 5 days' },
      { label: 'Skipper level', a: 'Day Skipper', b: 'Bareboat Skipper' },
      { label: 'Top level', a: 'Yachtmaster Coastal / Offshore / Ocean', b: 'Master of Yachts Coastal / Limited / Unlimited' },
      { label: 'Catamaran', a: 'Covered within courses; no separate certificate at every level', b: 'Dedicated catamaran certificates at each skipper level' },
      { label: 'ICC', a: 'Issued separately, and with eligibility conditions', b: 'Issued within the scheme' },
      { label: 'Australian availability', a: 'The widest of any international scheme', b: 'Good, concentrated in yacht training' },
      { label: 'AMSA Sailing Master', a: 'Accepted (commercially endorsed Yachtmaster)', b: 'Accepted (Master of Yachts)' },
    ],
    chooseA: [
      'you want the largest choice of Australian schools',
      'Yachtmaster is the long-term goal',
      'you are sailing monohulls',
      'you want the scheme most charter companies name first',
    ],
    chooseB: [
      'you are training specifically on a catamaran',
      'you need an ICC and want it handled in one place',
      'an IYT school near you is the better school',
      'you are heading for the Master of Yachts route',
    ],
    blocks: [
      { type: 'para', text: 'Compared side by side, RYA and IYT teach the same syllabus in different words. Both are internationally recognised, both feed the AMSA Sailing Master certificates, and both take a beginner to command of a cruising yacht in roughly the same time.' },
      { type: 'sub', text: 'Difference one: catamarans' },
      { type: 'para', text: 'IYT issues catamaran-specific certificates at each skipper level. The RYA teaches catamaran handling within its courses but does not mirror every level with a separate multihull certificate on the cruising side.' },
      { type: 'para', text: 'For anyone whose plan is a Whitsundays bareboat — where most of the fleet is catamarans — that difference is worth money.' },
      { type: 'sub', text: 'Difference two: the ICC' },
      { type: 'para', text: 'The International Certificate of Competence is what many overseas charter bases ask for. IYT issues one within its own scheme. RYA holders can obtain an ICC too, but it is a separate process with its own eligibility conditions.' },
      { type: 'sub', text: 'What is not a difference' },
      { type: 'para', text: 'Rigour. Both schemes assess against a published standard, and both depend far more on the school and the instructor than on the logo. Choose the school first; the scheme second.' },
    ],
    faqs: [
      { q: 'Is one harder than the other?', a: 'No. The standards are comparable, and the variation between two schools inside one scheme is larger than the variation between the schemes.' },
      { q: 'Will a charter company accept IYT?', a: 'Generally yes — IYT is internationally recognised and its Bareboat Skipper certificate is written for exactly this purpose. Confirm with the specific operator, as always.' },
    ],
    related: [
      { name: 'RYA vs IYT vs ASA', href: '/qualifications/rya-vs-iyt-vs-asa/', note: 'all three at once' },
      { name: 'IYT ICC', href: '/iyt/icc/', note: 'what the ICC is and where it is needed' },
      { name: 'Catamaran courses', href: '/courses/catamaran-sailing/', note: 'if the boat is the deciding factor' },
    ],
    group: 'schemes',
    order: 2,
  },
  {
    slug: 'rya-vs-asa',
    title: 'RYA vs American Sailing',
    metaTitle: 'RYA vs ASA | Which Works in Australia?',
    description:
      'RYA or American Sailing? Both are respected schemes, but Australian availability is not close — ASA is taught here rarely, which usually decides it before anything else does.',
    standfirst: 'A fair comparison on paper, and a lopsided one in Australia.',
    verdict:
      'RYA, unless you are training in North America or already hold ASA certificates. Australian ASA availability is limited enough that it is not a plan you can rely on.',
    a: { name: 'RYA', blurb: 'The British scheme, with the strongest Australian school network.', href: '/rya/' },
    b: { name: 'American Sailing', blurb: 'The dominant scheme in the United States, numbered 101 upward.', href: '/asa/' },
    rows: [
      { label: 'Home market', a: 'United Kingdom, taught worldwide', b: 'United States' },
      { label: 'Australian availability', a: 'Widest of any international scheme', b: 'Limited — check before planning around it' },
      { label: 'Naming', a: 'Named courses: Competent Crew, Day Skipper', b: 'Numbered certificates: 101, 103, 104' },
      { label: 'Entry level', a: 'Competent Crew', b: 'ASA 101 Basic Keelboat' },
      { label: 'Charter certificate', a: 'Day Skipper', b: 'ASA 104 Bareboat Cruising' },
      { label: 'Top level', a: 'Yachtmaster, by examination', b: 'ASA 108 Offshore Passagemaking' },
      { label: 'AMSA Sailing Master', a: 'Accepted (commercially endorsed Yachtmaster)', b: 'Not listed among the accepted prerequisites' },
    ],
    chooseA: [
      'you are training in Australia',
      'you may want an AMSA Sailing Master certificate later',
      'you want a school within reasonable reach',
      'Yachtmaster is the destination',
    ],
    chooseB: [
      'you already hold ASA certificates and want to continue the series',
      'you are chartering mainly in North America',
      'you are training while living in the United States',
    ],
    blocks: [
      { type: 'para', text: 'American Sailing is a serious, well-structured scheme with a large and loyal following. None of that helps if no school within a thousand kilometres teaches it.' },
      { type: 'sub', text: 'The availability problem' },
      { type: 'para', text: 'ASA certification is uncommon in Australia. Some courses in the catalogue have effectively no Australian delivery at all. Before choosing ASA here, confirm with a specific school that they currently run the specific certificate you want — not that they "offer ASA".' },
      { type: 'sub', text: 'Where ASA wins' },
      { type: 'para', text: 'In North America, ASA is the default. If your sailing life is going to happen out of a Californian or Caribbean charter base, ASA is the paperwork those operators read every day, and the numbered series is easy for them to assess at a glance.' },
      { type: 'sub', text: 'The AMSA question' },
      { type: 'para', text: 'AMSA names commercially endorsed RYA Yachtmaster and IYT Master of Yachts qualifications as prerequisites for its Sailing Master certificates. ASA certificates do not appear in that list. For anyone with an eye on paid work in Australia, that alone settles it.' },
    ],
    related: [
      { name: 'American Sailing courses', href: '/asa/', note: 'the full catalogue, with availability noted' },
      { name: 'RYA vs IYT vs ASA', href: '/qualifications/rya-vs-iyt-vs-asa/', note: 'the three-way comparison' },
      { name: 'AMSA sailing certificates', href: '/learn/amsa-sailing-certificates/', note: 'what AMSA actually accepts' },
    ],
    group: 'schemes',
    order: 3,
  },
  {
    slug: 'competent-crew-vs-day-skipper',
    title: 'Competent Crew vs Day Skipper',
    metaTitle: 'Competent Crew vs Day Skipper | Which Course First?',
    description:
      'Competent Crew or Day Skipper? One teaches you to be useful aboard, the other to take command. Which to book first, and when it is reasonable to skip straight to Day Skipper.',
    standfirst: 'The difference is not difficulty. It is whether the boat is your responsibility.',
    verdict:
      'Competent Crew first if you have never sailed. Straight to Day Skipper if you have real sailing experience — and the theory course before the practical, either way.',
    a: { name: 'Competent Crew', blurb: 'Five days learning to be genuinely useful aboard a cruising yacht.', href: '/rya/competent-crew/' },
    b: { name: 'Day Skipper', blurb: 'Five days taking command: passage planning, pilotage, and the boat is yours.', href: '/rya/day-skipper-practical/' },
    rows: [
      { label: 'Your role', a: 'Crew', b: 'Skipper' },
      { label: 'Experience assumed', a: 'None', b: 'About 100 miles, 5 days aboard, 4 night hours' },
      { label: 'Length', a: '5 days', b: '5 days, plus the theory course' },
      { label: 'Theory needed first', a: 'No', b: 'Yes — Day Skipper Theory, around 40 hours' },
      { label: 'What you leave with', a: 'Able to steer, handle lines, reef and keep a watch', b: 'Able to plan and run a short coastal passage by day' },
      { label: 'Charter companies', a: 'Not enough on its own', b: 'The certificate they recognise' },
      { label: 'Common mistake', a: 'Treating it as a holiday', b: 'Booking the practical before the theory' },
    ],
    chooseA: [
      'you have never sailed, or sailed only as a guest',
      'you want to join someone else’s boat as crew',
      'you are unsure whether yachting suits you',
      'you would rather learn the boat before the responsibility',
    ],
    chooseB: [
      'you already sail and can handle a boat',
      'you want to charter within the year',
      'you own a boat and need to skipper it',
      'you have the miles and the night hours already',
    ],
    blocks: [
      { type: 'para', text: 'These two courses sit next to each other in the RYA cruising scheme and get confused constantly, usually by people about to book the wrong one.' },
      { type: 'sub', text: 'What actually changes' },
      { type: 'para', text: 'On Competent Crew, somebody else decides where the boat goes, when to reef and whether the anchorage is safe. On Day Skipper, that is you — and the course is largely about the decisions rather than the rope work.' },
      { type: 'sub', text: 'Can you skip Competent Crew?' },
      { type: 'para', text: 'Yes, and many people should. Competent Crew is not a formal prerequisite for Day Skipper. What matters is the experience: roughly 100 miles, five days aboard and four night hours. A club racer with three seasons behind them has that and more.' },
      { type: 'para', text: 'What you cannot skip is the theory. Day Skipper Practical assumes you can already plan a passage, work a tidal stream and identify a light. Students who arrive without that spend the week catching up on classroom work instead of learning to handle the boat.' },
      { type: 'sub', text: 'The honest test' },
      { type: 'para', text: 'Ask yourself whether you could take a yacht out of a marina and bring it back without anyone else aboard making a decision. If the answer is a clear no, do Competent Crew. If it is "probably, nervously", do the theory and then Day Skipper.' },
    ],
    faqs: [
      { q: 'Do I need Competent Crew before Day Skipper?', a: 'No. It is not a prerequisite. Day Skipper assumes about 100 miles, five days aboard and four night hours, however you accumulated them.' },
      { q: 'Can I do both in a fortnight?', a: 'Schools will sell it, and you will pass. You will also sail nervously for a year afterwards. Spreading them across a season with sailing in between produces a far better skipper for the same money.' },
    ],
    related: [
      { name: 'RYA Competent Crew', href: '/rya/competent-crew/', note: 'the course in full' },
      { name: 'Day Skipper Theory', href: '/rya/day-skipper-theory/', note: 'the part people skip and regret' },
      { name: 'I want to charter a yacht', href: '/pathways/charter-a-yacht/', note: 'where both of these sit in the route' },
    ],
    group: 'courses',
    order: 10,
  },
  {
    slug: 'day-skipper-vs-yachtmaster',
    title: 'Day Skipper vs Yachtmaster',
    metaTitle: 'Day Skipper vs Yachtmaster | The Real Difference',
    description:
      'Day Skipper or Yachtmaster? One is a five-day course; the other is an examination taken after qualifying sea time. What separates them, and how long the gap really takes.',
    standfirst: 'One is a course you book. The other is an examination you become ready for.',
    verdict:
      'Day Skipper is the certificate almost everybody actually needs. Yachtmaster is for skippering at night, offshore, or for pay — and it is years away, not weeks.',
    a: { name: 'Day Skipper', blurb: 'Command of a small cruising yacht on short coastal passages by day.', href: '/rya/day-skipper-practical/' },
    b: { name: 'Yachtmaster', blurb: 'An examination against a standard, after qualifying sea time.', href: '/rya/yachtmaster/' },
    rows: [
      { label: 'What it is', a: 'A taught five-day course with assessment', b: 'An independent examination, not a course' },
      { label: 'Sea time required', a: 'About 100 miles, 5 days, 4 night hours', b: 'Hundreds of miles, days as skipper, night passages' },
      { label: 'Assessed by', a: 'Your instructor', b: 'An examiner who has not taught you' },
      { label: 'Conditions', a: 'Familiar waters, daylight, moderate weather', b: 'Unfamiliar waters, at night, in what arrives' },
      { label: 'Typical time from beginner', a: 'A season', b: 'Several seasons' },
      { label: 'Commercial use', a: 'No', b: 'With a commercial endorsement, and the route to AMSA Sailing Master' },
      { label: 'Preparation courses', a: 'The course is the preparation', b: 'Prep weeks exist but do not replace sea time' },
    ],
    chooseA: [
      'you want to charter or skipper your own boat',
      'your sailing is daytime and coastal',
      'you are within a season of your first course',
      'you want a certificate charter companies read',
    ],
    chooseB: [
      'you skipper at night and offshore already',
      'you want paid work on the water',
      'you are heading for an AMSA Sailing Master certificate',
      'you have the miles and want them formally recognised',
    ],
    blocks: [
      { type: 'para', text: 'The most common misunderstanding in Australian sailing training is that Yachtmaster is "the next course after Day Skipper". It is not a course at all.' },
      { type: 'sub', text: 'Yachtmaster is an examination' },
      { type: 'para', text: 'You present yourself to an examiner with the required sea time logged, and you are assessed over a day or more of practical sailing plus an oral examination. Nobody teaches you during it. Preparation weeks exist, and they are useful, but they are preparation for an exam rather than the exam’s syllabus.' },
      { type: 'sub', text: 'The gap is sea time, not knowledge' },
      { type: 'para', text: 'You could read every book on the shelf and still not be ready. What the examination tests is judgement under pressure in unfamiliar water, and the only thing that builds it is having done it. There is no way to buy the miles.' },
      { type: 'sub', text: 'Most people do not need it' },
      { type: 'para', text: 'If your sailing is weekends on a coast you know, chartering once a year, and never at night, Day Skipper covers you completely. Yachtmaster is for people whose sailing has outgrown it, or who want to be paid.' },
    ],
    faqs: [
      { q: 'How long between Day Skipper and Yachtmaster?', a: 'Realistically several seasons of regular sailing, including night passages and time as skipper. Anyone offering a shortcut is selling a preparation week, not the miles.' },
      { q: 'Is Yachtmaster a commercial licence in Australia?', a: 'Not on its own. Commercially endorsed, it is the prerequisite AMSA names for its Sailing Master certificates — so it is the doorway to one rather than a substitute for it.' },
    ],
    related: [
      { name: 'RYA Yachtmaster', href: '/rya/yachtmaster/', note: 'what the examination assesses' },
      { name: 'I want to sail offshore', href: '/pathways/offshore-passage/', note: 'the sea-time problem, honestly' },
      { name: 'AMSA sailing certificates', href: '/learn/amsa-sailing-certificates/', note: 'where a commercial endorsement leads' },
    ],
    group: 'courses',
    order: 11,
  },
  {
    slug: 'yachtmaster-coastal-vs-offshore',
    title: 'Yachtmaster Coastal vs Offshore',
    metaTitle: 'Yachtmaster Coastal vs Offshore | Which Exam?',
    description:
      'Yachtmaster Coastal or Offshore? The difference is the sea time behind you and the water you are assessed in — and only one of them opens the AMSA Sailing Master Offshore route.',
    standfirst: 'Same examination format, materially different sea time, and a real consequence at the commercial end.',
    verdict:
      'Coastal if your sailing is within reach of shelter. Offshore if you make genuine passages — and it is the one AMSA names for Sailing Master Offshore.',
    a: { name: 'Yachtmaster Coastal', blurb: 'Skippering on passages within reasonable reach of shelter.', href: '/rya/yachtmaster-coastal/' },
    b: { name: 'Yachtmaster Offshore', blurb: 'Skippering on passages where shelter is not an option.', href: '/rya/yachtmaster-offshore/' },
    rows: [
      { label: 'Operating area', a: 'Coastal passages, shelter within reach', b: 'Offshore passages, up to substantial distances from shelter' },
      { label: 'Sea time', a: 'Lower requirement', b: 'Substantially more, including longer passages' },
      { label: 'Night hours', a: 'Required', b: 'Required, and more of them' },
      { label: 'Examination', a: 'Practical plus oral', b: 'Practical plus oral, to a higher standard' },
      { label: 'Theory course', a: 'Coastal Skipper / Yachtmaster Offshore Theory', b: 'The same theory course' },
      { label: 'AMSA Sailing Master Coastal', a: 'Accepted when commercially endorsed', b: 'Exceeds it' },
      { label: 'AMSA Sailing Master Offshore', a: 'Not accepted', b: 'Accepted when commercially endorsed' },
    ],
    chooseA: [
      'your passages stay within reach of a harbour',
      'you want formal recognition of solid coastal skippering',
      'the commercial goal is inshore work',
    ],
    chooseB: [
      'you make passages where shelter is not available',
      'you want the AMSA Sailing Master Offshore route open',
      'you intend to work commercially beyond inshore waters',
      'you have the offshore miles already',
    ],
    blocks: [
      { type: 'para', text: 'Both are examinations rather than courses, both use the same format, and both draw on the same theory course. What separates them is the sea time behind the candidate and the demands of the water they are assessed in.' },
      { type: 'sub', text: 'The commercial consequence' },
      { type: 'para', text: 'AMSA lists a commercially endorsed RYA Yachtmaster Coastal, or IYT Master of Yachts Coastal, as the prerequisite for Sailing Master Coastal — which authorises a sailing vessel under 24 metres in inshore waters.' },
      { type: 'para', text: 'Sailing Master Offshore, which extends to the limits of the Australian Exclusive Economic Zone, requires a commercially endorsed Yachtmaster Offshore, a Yachtmaster Ocean, or IYT Master of Yachts Limited. A Coastal certificate does not reach it.' },
      { type: 'para', text: 'If commercial work beyond inshore waters is anywhere in your plan, that turns an abstract choice into a concrete one: you need the Offshore.' },
      { type: 'sub', text: 'Do not sit the wrong one to save time' },
      { type: 'para', text: 'Candidates occasionally sit Coastal because their sea time is short, intending to "upgrade later". There is no upgrade — Offshore is a separate examination sat in full. Building the miles first is cheaper.' },
    ],
    related: [
      { name: 'RYA Yachtmaster', href: '/rya/yachtmaster/', note: 'how the examination works' },
      { name: 'AMSA sailing certificates', href: '/learn/amsa-sailing-certificates/', note: 'the exact prerequisites' },
      { name: 'Mile building', href: '/courses/mile-building/', note: 'how sailors accumulate the sea time' },
    ],
    group: 'courses',
    order: 12,
  },
  {
    slug: 'icc-vs-bareboat-skipper',
    title: 'ICC vs a skipper certificate',
    metaTitle: 'ICC vs Bareboat Skipper | Which Do You Need?',
    description:
      'An ICC and a skipper certificate do different jobs. One is proof of competence to a charter company; the other satisfies a national authority. When you need each.',
    standfirst: 'One proves you can sail. The other satisfies a government. They are not substitutes.',
    verdict:
      'A skipper certificate is the training. An ICC is a document some countries and charter bases require on top of it. Inside Australia you need neither by law — a charter operator may still ask.',
    a: { name: 'Skipper certificate', blurb: 'Day Skipper, Bareboat Skipper or equivalent: the training and assessment.', href: '/rya/day-skipper-practical/' },
    b: { name: 'ICC', blurb: 'International Certificate of Competence — a document for foreign authorities.', href: '/iyt/icc/' },
    rows: [
      { label: 'What it is', a: 'A training qualification', b: 'A certificate of competence for official purposes' },
      { label: 'Issued after', a: 'A course and assessment', b: 'An assessment, or on the basis of an existing qualification' },
      { label: 'Who reads it', a: 'Charter companies, schools, insurers', b: 'Foreign authorities and some charter bases' },
      { label: 'Needed in Australia', a: 'Not by law; operators may ask', b: 'No' },
      { label: 'Needed in the Mediterranean', a: 'Usually wanted', b: 'Commonly required' },
      { label: 'Inland European waterways', a: 'Not sufficient on its own', b: 'Often required, with the CEVNI endorsement' },
      { label: 'Expiry', a: 'Does not expire', b: 'Has a validity period and is renewed' },
    ],
    chooseA: [
      'you are learning to skipper and need the skills',
      'you are chartering in Australia',
      'an operator has asked for a recognised skipper certificate',
      'you want something that does not expire',
    ],
    chooseB: [
      'you are chartering in the Mediterranean or parts of Asia',
      'the base has specifically asked for an ICC',
      'you are taking a boat on European inland waterways',
      'you already hold a skipper certificate and need the document on top',
    ],
    blocks: [
      { type: 'para', text: 'People treat these as competing options. They are not — most sailors chartering overseas end up holding both, because they answer different questions.' },
      { type: 'sub', text: 'The skipper certificate is the substance' },
      { type: 'para', text: 'Day Skipper, IYT Bareboat Skipper or their equivalents are what actually teach and test you. Without one, an ICC is a document with nothing behind it.' },
      { type: 'sub', text: 'The ICC is the paperwork' },
      { type: 'para', text: 'The ICC exists because national authorities wanted a common document for visiting recreational skippers. It is recognised through a United Nations economic commission arrangement, which is why a piece of paper issued in one country satisfies an official in another.' },
      { type: 'sub', text: 'In Australia, neither is a legal requirement' },
      { type: 'para', text: 'Australian recreational boating is regulated by the states, through boat licences, not through sailing certificates. What a charter operator asks for is a commercial decision of theirs, not a legal one — so ask them, not a forum.' },
    ],
    related: [
      { name: 'IYT ICC', href: '/iyt/icc/', note: 'what the ICC covers and how it is obtained' },
      { name: 'I want to charter a yacht', href: '/pathways/charter-a-yacht/', note: 'the whole route' },
      { name: 'Boat licences by state', href: '/learn/boat-licence/', note: 'what Australian law actually requires' },
    ],
    group: 'practical',
    order: 30,
  },
  {
    slug: 'boat-licence-vs-sailing-certificate',
    title: 'Boat licence vs sailing certificate',
    metaTitle: 'Boat Licence vs Sailing Certificate | What You Need',
    description:
      'A boat licence and a sailing certificate are unrelated. One is state law about operating a powered vessel; the other is training. Which you actually need, and when.',
    standfirst: 'The single most common confusion in Australian sailing, and the one with legal consequences.',
    verdict:
      'A boat licence is state law and has nothing to do with sailing ability. A sailing certificate is training and is not required by law anywhere in Australia. Most yacht owners need both, for different reasons.',
    a: { name: 'Boat licence', blurb: 'A state-issued licence to operate a powered vessel.', href: '/learn/boat-licence/' },
    b: { name: 'Sailing certificate', blurb: 'Proof you have been trained and assessed by a scheme.', href: '/qualifications/rya-vs-iyt-vs-asa/' },
    rows: [
      { label: 'Issued by', a: 'A state or territory authority', b: 'A training scheme, through a recognised centre' },
      { label: 'Required by law', a: 'Yes, where the rules apply', b: 'No, anywhere in Australia' },
      { label: 'Tests', a: 'Rules, safety and, in some states, practical competence', b: 'Sailing and seamanship, to a published standard' },
      { label: 'Triggered by', a: 'Engine power or speed, depending on the state', b: 'Nothing — it is voluntary' },
      { label: 'Valid where', a: 'The issuing state, with recognition arrangements', b: 'Internationally, depending on the scheme' },
      { label: 'Relevant to charter', a: 'Rarely asked for', b: 'Usually asked for' },
      { label: 'Relevant to a yacht’s auxiliary', a: 'Yes — this is the trap', b: 'No' },
    ],
    chooseA: ['you operate a vessel your state licenses', 'your yacht has an auxiliary engine above the state threshold', 'you drive a tender or a dinghy with an outboard'],
    chooseB: ['you want to be trained properly', 'you intend to charter', 'you want an insurer or a crew to take you seriously', 'you are working toward commercial certification'],
    blocks: [
      { type: 'para', text: 'These two documents get conflated constantly, and the consequence runs one way: people with sailing certificates assume they are legally covered, and they are not.' },
      { type: 'sub', text: 'The auxiliary-engine trap' },
      { type: 'para', text: 'Most cruising yachts carry an auxiliary engine well above the power thresholds used in Queensland, Western Australia, Victoria and South Australia. A sailor who needs no licence under sail may still need one to motor out of the marina.' },
      { type: 'para', text: 'New South Wales works differently again, triggering on speed rather than engine power. The Northern Territory issues no recreational licence at all.' },
      { type: 'sub', text: 'A certificate is not a licence, and a licence is not training' },
      { type: 'para', text: 'A boat licence test is mostly rules and safety. It will not teach you to sail, reef, anchor or recover a person from the water. Passing one is no evidence at all that you can handle a yacht.' },
      { type: 'sub', text: 'What most owners end up holding' },
      { type: 'list', items: ['a state boat licence, because of the auxiliary', 'a marine radio certificate, to use the VHF legally', 'a sailing certificate, because charter, insurers and crew all care about it'] },
    ],
    faqs: [
      { q: 'Does a Yachtmaster replace a boat licence?', a: 'No. They are issued by different bodies for different purposes. State licensing rules apply to you regardless of what sailing certificates you hold.' },
      { q: 'Do I need a licence to sail with no engine?', a: 'It depends on the state. Victoria and South Australia trigger on any engine; Queensland and Western Australia on power; New South Wales on speed. Check the rule for your state.' },
    ],
    related: [
      { name: 'Boat licences by state', href: '/learn/boat-licence/', note: 'the rule in each jurisdiction, with the source' },
      { name: 'Marine radio courses', href: '/courses/marine-radio/', note: 'the third document owners need' },
      { name: 'I just bought a boat', href: '/pathways/own-a-yacht/', note: 'the whole new-owner checklist' },
    ],
    group: 'practical',
    order: 31,
  },
  {
    slug: 'dinghy-vs-keelboat',
    title: 'Dinghy vs keelboat',
    metaTitle: 'Dinghy or Keelboat? | Where to Learn to Sail',
    description:
      'Learn to sail in a dinghy or a keelboat? A dinghy teaches feel faster because it punishes mistakes. A keelboat is more forgiving and closer to the yacht you want to end up on.',
    standfirst: 'One capsizes. That single fact is the whole comparison, and it cuts both ways.',
    verdict:
      'Dinghy if you want to learn to sail properly and fast. Keelboat if your goal is yachts, you are less mobile, or the idea of swimming would stop you booking at all.',
    a: { name: 'Dinghy', blurb: 'Small, unballasted, responsive — and it will tip over.', href: '/rya/dinghy-scheme/' },
    b: { name: 'Keelboat', blurb: 'Small ballasted boat. Stable, comfortable, does not capsize in normal use.', href: '/rya/keelboat-start-sailing/' },
    rows: [
      { label: 'Capsizes', a: 'Yes, and you practise it deliberately', b: 'Not in normal use' },
      { label: 'Feedback', a: 'Immediate and physical', b: 'Slower and gentler' },
      { label: 'Learning speed', a: 'Fastest way to learn feel and balance', b: 'Steadier, less intense' },
      { label: 'Physical demand', a: 'High — hiking, righting, moving fast', b: 'Low to moderate' },
      { label: 'Weather tolerance', a: 'Lessons cancelled more often', b: 'Sails in a wider range' },
      { label: 'Transfers to yachts', a: 'Indirectly — the feel does, the systems do not', b: 'Directly — same trim, same roles' },
      { label: 'Cost of a boat', a: 'Cheap; a second-hand trainer is affordable', b: 'Higher, plus mooring' },
      { label: 'Australian availability', a: 'Very wide, through clubs', b: 'Good, through clubs and schools' },
    ],
    chooseA: [
      'you want to learn as fast as possible',
      'you are reasonably fit and do not mind getting wet',
      'you might race',
      'you want a boat you can own on a small budget',
    ],
    chooseB: [
      'your goal is cruising yachts',
      'you would rather not capsize while learning',
      'mobility or confidence in the water is a factor',
      'you are learning with a partner or family',
    ],
    blocks: [
      { type: 'para', text: 'Ask an instructor where to learn and most will say a dinghy. Ask a beginner what they want and most will say a keelboat. Both are right, because they are optimising for different things.' },
      { type: 'sub', text: 'Why the dinghy teaches faster' },
      { type: 'para', text: 'A dinghy responds to every mistake immediately and, occasionally, spectacularly. Sheet in too hard in a gust and you go over. That feedback loop builds an instinct for wind, balance and trim that a stable boat simply cannot, because a stable boat forgives the error silently.' },
      { type: 'sub', text: 'Why the keelboat is often the better choice anyway' },
      { type: 'para', text: 'The best course is the one you actually book and finish. For a lot of adults — particularly those learning with a partner, carrying an injury, or who are simply not keen on swimming in April — the keelboat is what gets them sailing at all.' },
      { type: 'para', text: 'And if the destination is a cruising yacht, the keelboat is closer to it: same trim vocabulary, same crew roles, same idea of a boat that stays upright while you think.' },
      { type: 'sub', text: 'Nobody has to choose permanently' },
      { type: 'para', text: 'A season of dinghy sailing makes a better yacht sailor, and yacht sailors take dinghy courses all the time to fix a feel for the wind they never developed. Doing both is normal and neither is wasted.' },
    ],
    related: [
      { name: 'RYA Dinghy Sailing Scheme', href: '/rya/dinghy-scheme/', note: 'the levels and the modules' },
      { name: 'RYA Keelboat Start Sailing', href: '/rya/keelboat-start-sailing/', note: 'the keelboat route in' },
      { name: 'I have never sailed', href: '/pathways/complete-beginner/', note: 'the three routes in, compared' },
    ],
    group: 'boats',
    order: 20,
  },
  {
    slug: 'monohull-vs-catamaran',
    title: 'Monohull vs catamaran',
    metaTitle: 'Monohull vs Catamaran | Which to Learn On',
    description:
      'Learning on a monohull or a catamaran? They handle, berth and anchor differently enough that monohull experience does not automatically make you a catamaran skipper.',
    standfirst: 'Charter companies know these are different boats. Sailors coming from one to the other often do not.',
    verdict:
      'Learn on a monohull for the broader skill set. Train specifically on a catamaran if you are going to charter one — which, in the Whitsundays, you probably are.',
    a: { name: 'Monohull', blurb: 'One hull, ballasted keel. Heels, points higher, berths on a pivot.', href: '/rya/competent-crew/' },
    b: { name: 'Catamaran', blurb: 'Two hulls. Flat, roomy, huge windage, twin engines.', href: '/courses/catamaran-sailing/' },
    rows: [
      { label: 'Heel', a: 'Heels, and tells you about the wind by doing it', b: 'Stays flat — no heel to read' },
      { label: 'Upwind', a: 'Points higher', b: 'Points lower, but sails fast off the wind' },
      { label: 'Manoeuvring', a: 'One engine, prop walk, pivots on the keel', b: 'Twin engines — turns in its own length' },
      { label: 'Windage', a: 'Moderate', b: 'High. It will sail sideways across a marina' },
      { label: 'Tacking', a: 'Carries momentum through the tack', b: 'Loses drive; needs speed and patience' },
      { label: 'Anchoring', a: 'Sits to wind or tide predictably', b: 'Sails around the anchor, needs a bridle' },
      { label: 'Accommodation', a: 'Compact', b: 'Far more space — why charter fleets are full of them' },
      { label: 'Reefing discipline', a: 'Heel warns you', b: 'No warning — reef by wind speed, not by feel' },
    ],
    chooseA: [
      'you want the widest transferable skill set',
      'you may race',
      'you are learning to sail from scratch',
      'the boat you will end up owning is a monohull',
    ],
    chooseB: [
      'you are chartering a catamaran',
      'you are sailing with family and space matters',
      'the Whitsundays are the plan',
      'you have monohull experience and need the conversion',
    ],
    blocks: [
      { type: 'para', text: 'Most Australian bareboat charters, particularly in the Whitsundays, are catamarans. Most Australian sailing training happens on monohulls. That gap is where trouble starts.' },
      { type: 'sub', text: 'The heel you no longer have' },
      { type: 'para', text: 'A monohull sailor reefs by feel: the boat leans, the helm loads up, you shorten sail. A catamaran does none of that. It stays flat and simply goes faster, then faster, and the first clear signal something is wrong can be a very unwelcome one.' },
      { type: 'para', text: 'Catamaran sailors reef by wind speed and by the numbers, early, on a schedule. That is a learned habit, not an instinct, which is precisely why the conversion course exists.' },
      { type: 'sub', text: 'Close quarters' },
      { type: 'para', text: 'Twin engines make a catamaran superb in a marina — it will turn in its own length — right up until a crosswind gets under all that windage and takes charge. Practising in a breeze, with an instructor aboard, is worth the whole course fee.' },
      { type: 'sub', text: 'Anchoring' },
      { type: 'para', text: 'Catamarans sail around an anchor rather than sitting to it, which is why a bridle matters and why a technique that has worked for you for years on a monohull may not hold overnight.' },
    ],
    related: [
      { name: 'Catamaran sailing courses', href: '/courses/catamaran-sailing/', note: 'the conversion, in detail' },
      { name: 'I want to bareboat the Whitsundays', href: '/pathways/bareboat-whitsundays/', note: 'where this matters most' },
      { name: 'IYT courses', href: '/iyt/', note: 'dedicated catamaran certificates at every level' },
    ],
    group: 'boats',
    order: 21,
  },
  {
    slug: 'theory-vs-practical',
    title: 'Theory vs practical courses',
    metaTitle: 'Sailing Theory vs Practical Courses | Which First?',
    description:
      'Sailing theory or practical first? Theory before practical, every time — the practical course assumes the theory, and students who arrive without it spend the week catching up.',
    standfirst: 'The order is not a matter of taste. Get it wrong and you pay for a week you do not get.',
    verdict:
      'Theory first. A practical skipper course assumes you can already plan a passage and read a chart, and it will not stop to teach you.',
    a: { name: 'Theory (shorebased)', blurb: 'Navigation, tides, weather, lights, rules. Classroom or online.', href: '/rya/day-skipper-theory/' },
    b: { name: 'Practical', blurb: 'Days aboard, handling the boat and making the decisions.', href: '/rya/day-skipper-practical/' },
    rows: [
      { label: 'Where', a: 'Classroom, or online at your own pace', b: 'On a boat' },
      { label: 'Length', a: 'Around 40 hours at Day Skipper level', b: '5 days' },
      { label: 'Teaches', a: 'Chartwork, tides, weather, lights, collision rules', b: 'Boat handling, pilotage, command, crew management' },
      { label: 'Sea time', a: 'None — it puts nothing in your logbook', b: 'Counts toward later qualifications' },
      { label: 'Weather-dependent', a: 'No', b: 'Yes' },
      { label: 'Can be done off-season', a: 'Yes, and that is the point', b: 'Harder' },
      { label: 'Assumed by the other', a: 'No', b: 'Yes — heavily' },
    ],
    chooseA: [
      'it is winter and you want to make progress',
      'you have a practical course booked',
      'you own a boat and want to navigate properly',
      'you want the cheapest genuinely useful step',
    ],
    chooseB: [
      'you already hold the theory certificate',
      'you need sea time in your logbook',
      'you can already plan a passage on paper',
    ],
    blocks: [
      { type: 'para', text: 'Schools sell these separately and let you book in any order, which creates the single most expensive scheduling mistake in sailing training.' },
      { type: 'sub', text: 'What happens when you get the order wrong' },
      { type: 'para', text: 'A practical skipper course is five days and costs accordingly. It is built on the assumption that you arrive able to work a tidal stream, plot a course to steer and identify a light by its characteristic. Arrive without that and the instructor has a choice: hold the whole boat up teaching you, or let you follow along.' },
      { type: 'para', text: 'Either way you have paid for five days of boat handling and received rather less.' },
      { type: 'sub', text: 'Theory is the off-season move' },
      { type: 'para', text: 'The theory is weather-independent and can be done online across a winter. It is also, per dollar, the most useful single thing most sailors do — passage planning and tidal work change how you look at every trip, including the ones you already make.' },
      { type: 'sub', text: 'The one thing theory cannot do' },
      { type: 'para', text: 'It puts nothing in your logbook. Sea time comes only from time aboard, and for Yachtmaster that is the binding constraint — so do not mistake a shelf of certificates for progress toward it.' },
    ],
    related: [
      { name: 'Day Skipper Theory', href: '/rya/day-skipper-theory/', note: 'the course itself' },
      { name: 'Competent Crew vs Day Skipper', href: '/compare/competent-crew-vs-day-skipper/', note: 'the other ordering question' },
      { name: 'Navigation courses', href: '/courses/', note: 'the wider shorebased catalogue' },
    ],
    group: 'practical',
    order: 32,
  },
  {
    slug: 'liveaboard-vs-day-courses',
    title: 'Liveaboard vs day courses',
    metaTitle: 'Liveaboard vs Day Sailing Courses | Which Format?',
    description:
      'Liveaboard or day-release sailing courses? A liveaboard week teaches night sailing and life aboard; day courses spread the learning and let it settle. What each format actually gives you.',
    standfirst: 'Same syllabus, same certificate, very different weeks — and only one of them gets you out at night.',
    verdict:
      'Liveaboard if you want night hours, real passages and the experience of living aboard. Day courses if you learn better in instalments, or life will not release you for a week.',
    a: { name: 'Liveaboard', blurb: 'Five days aboard, sleeping on the boat, sailing somewhere.', href: '/rya/competent-crew/' },
    b: { name: 'Day courses', blurb: 'The same content across weekends or evenings, ashore each night.' },
    rows: [
      { label: 'Night sailing', a: 'Yes — and night hours count', b: 'Rarely' },
      { label: 'Real passages', a: 'Yes, the boat goes somewhere', b: 'Usually the same water each time' },
      { label: 'Life aboard', a: 'Taught by necessity', b: 'Not covered' },
      { label: 'Time off work', a: 'A week', b: 'Weekends' },
      { label: 'Learning retention', a: 'Intense; some is lost', b: 'Spread out; settles better' },
      { label: 'Cost', a: 'Higher — includes food and berths', b: 'Lower per day' },
      { label: 'Weather resilience', a: 'The boat moves to find sailable water', b: 'A blown-out weekend is a lost weekend' },
      { label: 'Sea time logged', a: 'More, and better quality', b: 'Less' },
    ],
    chooseA: [
      'you want night hours toward a later qualification',
      'you are heading for charter or cruising',
      'you can take a week',
      'you want to know whether you actually like living aboard',
    ],
    chooseB: [
      'a week away is not possible',
      'you prefer to absorb things gradually',
      'cost is the constraint',
      'you have a local school and want to keep sailing between sessions',
    ],
    blocks: [
      { type: 'para', text: 'For most cruising courses these two formats award exactly the same certificate, and schools often run both. The week you experience is not remotely the same.' },
      { type: 'sub', text: 'The case for a liveaboard' },
      { type: 'para', text: 'Sailing somewhere is different from sailing around. A liveaboard course plans a passage, makes it, arrives, anchors or berths somewhere unfamiliar, and does it again — which is the actual activity the certificate is about.' },
      { type: 'para', text: 'It is also where night hours come from, and those matter: they are a requirement for Day Skipper and, in larger quantity, for Yachtmaster.' },
      { type: 'sub', text: 'The case for day courses' },
      { type: 'para', text: 'Five consecutive days is a lot of new information. Students on day-release courses often finish less exhausted and retain more, because each session has a week to settle and they arrive fresh.' },
      { type: 'para', text: 'It is also the format that lets you keep sailing between sessions, which is the single biggest factor in how fast anybody improves.' },
      { type: 'sub', text: 'The hybrid nobody mentions' },
      { type: 'para', text: 'Theory online across a winter, practical as a liveaboard in the season. It is usually the cheapest route, the best-retained, and the one that produces the most competent sailor at the end.' },
    ],
    related: [
      { name: 'Theory vs practical', href: '/compare/theory-vs-practical/', note: 'the ordering question' },
      { name: 'Mile building', href: '/courses/mile-building/', note: 'passages as sea time rather than training' },
      { name: 'Night sailing', href: '/courses/night-sailing/', note: 'the hours a day course will not give you' },
    ],
    group: 'practical',
    order: 33,
  },
  {
    slug: 'private-tuition-vs-group-courses',
    title: 'Private tuition vs group courses',
    metaTitle: 'Private Sailing Lessons vs Group Courses | Which Is Worth It?',
    description:
      'Private sailing tuition or a group course? Private tuition is faster and can happen on your own boat; a group course is cheaper and gives you the crew dynamic you will actually sail in.',
    standfirst: 'Private tuition is not simply the expensive option. For some people it is the only one that works.',
    verdict:
      'Group courses for most beginners — cheaper, and crewing with others is part of the skill. Private tuition if it is your own boat, your own schedule, or a specific problem to fix.',
    a: { name: 'Private tuition', blurb: 'One instructor, you, and often your own boat.', href: '/courses/private-sailing-lessons/' },
    b: { name: 'Group course', blurb: 'Three to six students on a school boat, sharing the roles.', href: '/rya/competent-crew/' },
    rows: [
      { label: 'Priced by', a: 'The day, regardless of how many of you there are', b: 'The head' },
      { label: 'Helm time', a: 'All of it', b: 'A share of it' },
      { label: 'Pace', a: 'Yours', b: 'The group’s' },
      { label: 'Boat', a: 'Can be your own', b: 'The school’s' },
      { label: 'Crew experience', a: 'None — you never crew for anyone', b: 'Built in' },
      { label: 'Scheduling', a: 'Flexible', b: 'Fixed dates' },
      { label: 'Best for', a: 'Owners, couples, specific weaknesses, nervous sailors', b: 'Beginners, people who want the certificate and the company' },
      { label: 'Cost for two people', a: 'Often comparable to two group places', b: 'Two places' },
    ],
    chooseA: [
      'you already own the boat',
      'you have one specific problem — berthing, usually',
      'a group would move too fast or too slowly for you',
      'there are two of you, which narrows the cost gap sharply',
    ],
    chooseB: [
      'you are starting from nothing',
      'you want the certificate at the lowest cost',
      'you want to learn to work as crew',
      'you would rather learn alongside other people',
    ],
    blocks: [
      { type: 'para', text: 'Private tuition is usually dismissed on price, and the arithmetic is less lopsided than it looks — particularly for two people, since private tuition is charged by the day rather than by the head.' },
      { type: 'sub', text: 'Where private tuition genuinely wins' },
      { type: 'para', text: 'On your own boat. A group course teaches you to sail a school yacht; your boat has a different rig, different prop walk, an unfamiliar reefing system and a berth with its own peculiarities. An instructor aboard your vessel addresses all of it at once.' },
      { type: 'para', text: 'It also wins on specific problems. Somebody who sails competently but cannot berth in a crosswind does not need another five-day course — they need an afternoon of doing nothing but berthing.' },
      { type: 'sub', text: 'What a group gives you that private tuition cannot' },
      { type: 'para', text: 'Crewing. On a group course you spend time taking instructions as well as giving them, working with people you did not choose, in roles you did not pick. That is what sailing with other people is actually like, and it is a skill.' },
      { type: 'sub', text: 'The couples case' },
      { type: 'para', text: 'For a couple, private tuition has a particular advantage: an instructor can insist that both of you take the hard jobs. Group courses are where one partner quietly ends up on the foredeck for five days.' },
    ],
    related: [
      { name: 'Private sailing lessons', href: '/courses/private-sailing-lessons/', note: 'the format in detail' },
      { name: 'Own boat tuition', href: '/courses/own-boat-tuition/', note: 'on your vessel, in your berth' },
      { name: 'We want to sail as a couple', href: '/pathways/sail-as-a-couple/', note: 'why the format matters more here' },
    ],
    group: 'practical',
    order: 34,
  },
  {
    slug: 'sailing-school-vs-yacht-club',
    title: 'Sailing school vs yacht club',
    metaTitle: 'Sailing School or Yacht Club? | Where to Learn',
    description:
      'Learn through a sailing school or a yacht club? A school sells structured courses and certificates; a club sells a season of sailing and the people to do it with. Most sailors want both.',
    standfirst: 'A school sells you a certificate. A club sells you a season. They are not competing.',
    verdict:
      'A school for structure and certification. A club for the hours, the people and the cost. Do a course, then join a club — in that order, and do both.',
    a: { name: 'Sailing school', blurb: 'A training business. Structured courses, instructors, certificates.', href: '/sailing-schools/' },
    b: { name: 'Yacht club', blurb: 'A member organisation. Racing, crewing, a fleet and a bar.' },
    rows: [
      { label: 'What you buy', a: 'A course', b: 'A membership' },
      { label: 'Certification', a: 'Yes, to a scheme standard', b: 'Sometimes — many clubs teach the Australian Sailing scheme' },
      { label: 'Structure', a: 'A syllabus, assessed', b: 'Whatever the season offers' },
      { label: 'Cost per hour afloat', a: 'High', b: 'Very low' },
      { label: 'People', a: 'A different group each course', b: 'The same fleet every week' },
      { label: 'Boats', a: 'Provided', b: 'Crew on someone else’s, or bring your own' },
      { label: 'Teaches boat handling', a: 'Deliberately and quickly', b: 'By osmosis, and eventually very well' },
      { label: 'Teaches navigation', a: 'Yes', b: 'Rarely' },
    ],
    chooseA: [
      'you need a certificate',
      'you want to be taught rather than absorb it',
      'you are learning navigation, anchoring or passage planning',
      'you have no connection to a club',
    ],
    chooseB: [
      'you want to sail every week without a course fee',
      'you want people to sail with',
      'you want boat handling hours, cheaply',
      'the sailor is a child — club programmes are the norm',
    ],
    blocks: [
      { type: 'para', text: 'This site is a directory of sailing schools, not yacht clubs, and it is worth being clear about why: they do different jobs, and pretending otherwise does readers no favours.' },
      { type: 'sub', text: 'What a school is for' },
      { type: 'para', text: 'Structure and certification. A school will take you from nothing to a recognised certificate on a published timetable, teach you the things clubs mostly do not — navigation, anchoring, passage planning, command — and hand you paperwork a charter company will read.' },
      { type: 'sub', text: 'What a club is for' },
      { type: 'para', text: 'Hours. Club racing is the cheapest sailing in Australia and the fastest way to get good, because the feedback is immediate and weekly. A season of twilight racing will do more for your boat handling than any single course.' },
      { type: 'para', text: 'Clubs are also where the people are. Sailing is a crewed activity, and a course ends; a club does not.' },
      { type: 'sub', text: 'The order that works' },
      { type: 'para', text: 'Course first, so you are safe and know the vocabulary. Club immediately after, so the skills get used weekly instead of decaying. Then more courses as specific goals appear — navigation, catamarans, sea survival.' },
      { type: 'sub', text: 'Where the line blurs' },
      { type: 'para', text: 'Plenty of clubs run Australian Sailing courses with qualified instructors, and some schools operate out of club premises. A school can be listed on this site and sit inside a yacht club — what matters is whether it is a separate training organisation.' },
    ],
    related: [
      { name: 'Sailing schools by state', href: '/sailing-schools/', note: 'who teaches near you' },
      { name: 'I want to race', href: '/pathways/race-with-a-club/', note: 'how to get into a club fleet' },
      { name: 'What sailing courses cost', href: '/learn/sailing-course-costs/', note: 'including why clubs are cheaper' },
    ],
    group: 'practical',
    order: 35,
  },
];

export const comparisonBySlug = (slug: string) => comparisons.find((c) => c.slug === slug);
export const orderedComparisons = [...comparisons].sort((a, b) => a.order - b.order);
export const comparisonsInGroup = (group: Comparison['group']) =>
  orderedComparisons.filter((c) => c.group === group);
