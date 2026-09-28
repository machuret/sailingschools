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
  introduction: string[];
  sections: { heading: string; paragraphs: string[] }[];
  pullQuote: string;
};

/** Long-form school reporting. Add future interviews here to populate the hub. */
export const inDepthArticles: InDepthArticle[] = [
  {
    slug: 'flying-fish-sailing',
    schoolSlug: 'flying-fish-sailing',
    schoolName: 'Flying Fish Sailing',
    title: 'Inside Flying Fish Sailing: from day one to Yachtmaster',
    description: 'An in-depth look at Flying Fish Sailing in Middle Harbour: its teaching approach, boats, qualifications and professional pathways, based on our interview with founder Andy.',
    publishedAt: '2026-09-28',
    readTime: '10 minute read',
    interviewee: 'Andy',
    role: 'Founder',
    introduction: [
      'Flying Fish occupies an unusual place in Australian sail training. It can give a complete beginner a first weekend on Sydney Harbour, then keep the same student moving through cruising qualifications, offshore miles and professional preparation.',
      'Our interview with founder Andy revealed how that breadth developed, what students actually do on the water and where the school sees a qualification ending and genuine command experience beginning.',
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
];

export const inDepthBySlug = (slug: string) => inDepthArticles.find((article) => article.slug === slug);
