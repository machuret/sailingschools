export type CourseDetail = {
  overview: string;
  entry: string;
  skills: [string, string][];
  format: string;
  practice: string;
  questions: string[];
  related: [string, string][];
  sources: [string, string][];
};

export const asaSource = (slug: string): [string, string][] => [['American Sailing: course and certification standard', 'https://americansailing.com/learn-to-sail/certifications/' + slug + '/']];
export const ryaSource = (slug: string): [string, string][] => [['RYA: course information', 'https://www.rya.org.uk/' + slug + '/']];
export const iytSource = (slug: string): [string, string][] => [['IYT Worldwide: course information', 'https://www.iytworld.com/courses/' + slug + '/']];

/** Each record is authored for its course; no generated keyword or word-count padding. */
export const asaDetails: Record<string, CourseDetail> = {
  'asa-101': {
    overview: 'This is the starting point for learning to sail a keelboat, rather than an introduction to operating a large liveaboard yacht. The useful outcome is understanding how steering, sail angle and wind direction work together. You should be an active participant: taking the helm, handling lines and learning how to communicate during a manoeuvre.',
    entry: 'ASA 101 is an entry-level certification. Tell the school about any previous dinghy or yacht experience, but do not feel you need to learn everything beforehand. Ask about the boat used, boarding arrangements and the physical tasks involved if you have accessibility needs or concerns about balance.',
    skills: [
      ['Sailing vocabulary in context', 'Connect names such as sheet, halyard, tack and gybe with the equipment or action aboard. Knowing the words helps you respond to an instructor without confusing a rope with a sail or a direction.'],
      ['Helming and sail handling', 'Develop basic control on different points of sail, including turning through and away from the wind. Aim to understand why a sail fills or flaps, rather than memorising one position for the sheet.'],
      ['Seamanship and safety', 'Learn lookout habits, crew communication and the basic recovery skills in the standard. Safe line handling matters just as much as making the boat go quickly.'],
    ],
    format: 'Expect practical sailing supported by theory and knowledge checks. American Sailing assesses knowledge and demonstrated skills; attending a course is not an automatic pass. The school sets its timetable, so ask how much sailing each student receives and how weather interruptions are handled.',
    practice: 'A useful personal goal is to explain what you are about to do before a turn, make the turn under instruction, then describe what changed. If steering uses all your attention, more supported practice is valuable before adding the systems and navigation responsibilities of cruising.',
    questions: ['Will I practise both helming and trimming?', 'What size keelboat will we use?', 'How can I sail regularly after the course?'],
    related: [['/asa/asa-102/', 'Build handling skills with ASA 102'], ['/asa/asa-103/', 'Move into coastal cruising'], ['/learn-the-basics/', 'Prepare with Saily’s mini-lessons']],
    sources: asaSource('asa-101-keelboat-sailing-1'),
  },
  'asa-102': {
    overview: 'ASA 102 gives early-stage sailors time to improve the quality of their boat handling. It is useful when you can get around a sailing area but do not yet feel consistent with sail trim, smooth turns or keeping the boat balanced. It is a skills-development course, not simply a compulsory number to collect on the way to cruising.',
    entry: 'American Sailing lists ASA 101 as the prerequisite. The published standard describes a roughly 20–30-foot keelboat, daytime sailing and winds up to 20 knots. That is the scope of the standard, not a promise that a course will deliberately sail in the strongest permitted conditions.',
    skills: [
      ['Sail shape and power', 'Move beyond pulling a sheet in or letting it out. Learn what changes to the mainsail and headsail controls are trying to achieve and how to notice whether an adjustment improves the boat’s response.'],
      ['Boat balance', 'Explore the relationship between sail power, heel and helm. The aim is a boat that feels controlled, rather than using large steering movements to compensate for poor trim.'],
      ['Coordinated manoeuvres', 'Practise turns and crew roles with attention to line management and recovery. Repeating a manoeuvre with a clear debrief is more useful than merely completing it once.'],
    ],
    format: 'The course combines practical handling with a written knowledge assessment. Ask how the instructor shares helm and trimming time, whether the boat has a tiller or wheel, and how the sailing area supports repeated exercises. Course duration and daily scheduling are provider-specific.',
    practice: 'For your own learning notes, record one adjustment, the reason for it, and what you observed. This helps distinguish a genuine improvement from a temporary wind change. Do not judge progress only by boat speed: communication, control and a repeatable method matter too.',
    questions: ['Is the focus small-keelboat handling or cruising systems?', 'How many students share the helm?', 'Would ASA 102 or ASA 103 better address my current gaps?'],
    related: [['/asa/asa-101/', 'ASA 101 foundations'], ['/courses/sail-trim/', 'Focused sail-trim training'], ['/asa/asa-103/', 'ASA 103 coastal cruising']],
    sources: asaSource('asa-102-keelboat-sailing-2'),
  },
  'asa-103': {
    overview: 'Coastal Cruising introduces the additional responsibilities that come with an auxiliary-powered cruising yacht. You are no longer thinking only about sailing around a course: the engine, anchor, destination and crew all become part of the outing. This makes it an important bridge between small-keelboat sailing and multi-day bareboat cruising.',
    entry: 'ASA 101 is the published prerequisite. Bring an honest account of your recent sailing, especially if there has been a long gap since your last course. A certificate shows what you demonstrated at the time; it does not tell the instructor which skills feel natural today.',
    skills: [
      ['Handling under power', 'Understand how powered manoeuvring fits into leaving and returning to a berth. The learning priority is controlled movement and clear crew roles, not relying on speed or someone jumping ashore.'],
      ['Anchoring and coastal routines', 'Connect seamanship tasks with the choice of a suitable stopping place. Discuss the boat’s equipment and the checks that should happen before the crew settles into the next activity.'],
      ['Navigation and skipper awareness', 'Develop the habit of knowing where the boat is going, what could interrupt the plan and what information the crew needs. The standard concerns daytime coastal cruising in moderate conditions.'],
    ],
    format: 'Training is practical, with supporting knowledge work and assessment. Ask whether the course is delivered as day sessions or a liveaboard programme and whether it is sold alone or alongside ASA 104. A combined booking still needs to teach and assess the separate standards.',
    practice: 'Before the course, imagine a short outing from departure to return. Write down the decisions that happen before sailing, while underway and before arrival. Bring the list to your instructor: it is a useful way to reveal gaps that a few successful tacks would not uncover.',
    questions: ['Will we practise engine handling and anchoring?', 'Is accommodation aboard part of the programme?', 'What experience should I gain before ASA 104?'],
    related: [['/asa/asa-104/', 'ASA 104 bareboat cruising'], ['/courses/docking-berthing/', 'Docking and berthing practice'], ['/courses/anchoring/', 'Anchoring training']],
    sources: asaSource('asa-103-coastal-cruising'),
  },
  'asa-104': {
    overview: 'Bareboat Cruising brings sailing and living aboard together. The challenge is not just completing a manoeuvre; it is keeping a cruise organised across consecutive days. A good candidate can contribute to route choices, look after the boat and explain the plan to people who may have very different levels of experience.',
    entry: 'American Sailing lists ASA 101 and ASA 103 as prerequisites. Ask the school to review your recent experience before a combined or accelerated programme. If docking or basic sail handling still needs constant prompting, targeted practice may make the cruising course much more productive.',
    skills: [
      ['Preparing a cruise', 'Consider the route, forecast, crew needs and provisions together. A convenient destination is not a complete plan if arrival timing, water or fuel have been overlooked.'],
      ['Living with yacht systems', 'Learn how the boat’s everyday systems support a cruise and what checks are expected. Handover familiarity matters because two similar-looking charter yachts can have different controls and layouts.'],
      ['Sharing command responsibilities', 'Bring navigation, anchoring and crew management into the same exercise. The skipper needs a workable plan and a way to notice when that plan needs changing.'],
    ],
    format: 'ASA 104 is a practical cruising certification with knowledge and skills assessment. Schools may package it into liveaboard training, but the number of calendar days and the balance of sailing versus classroom time must be checked with the provider. Ask how individual competence is assessed within the group.',
    practice: 'A useful preparation task is a mock charter handover: list the systems you would want explained before leaving the dock. Include the location of controls, emergency equipment, documentation and the procedure for reporting a fault. Use the exercise to ask better questions, not to replace the operator’s briefing.',
    questions: ['How much time will each person spend making skipper decisions?', 'Which boat systems are covered?', 'Will my intended charter operator accept this certificate and my experience?'],
    related: [['/courses/charter-preparation/', 'Prepare for a yacht charter'], ['/asa/asa-114/', 'Add cruising-catamaran skills'], ['/asa/asa-105/', 'Build coastal navigation knowledge']],
    sources: asaSource('asa-104-bareboat-cruising'),
  },
  'asa-105': {
    overview: 'Coastal Navigation develops the planning and position-finding work that supports a practical cruise. It is especially useful when you can follow a chartplotter route but cannot explain the underlying calculations or recognise whether the display is misleading. The aim is an independent method of checking a navigation decision.',
    entry: 'This is a navigation qualification rather than a practical sailing course. Ask the provider what introductory chart knowledge it expects and which charts, plotting tools and reference materials are supplied. Refresh basic arithmetic and unit conversions if you have not used them recently; speed matters less than a clear method.',
    skills: [
      ['Working with charts', 'Read positions, distances, bearings and charted information, then relate them to a proposed route. A plotted line needs context: hazards and safe-water choices matter more than a neat pencil mark.'],
      ['Allowing for movement', 'Study how tide, current and other influences affect the relationship between heading and track. This helps explain why pointing towards a destination is not always enough to arrive there.'],
      ['Checking position', 'Use navigation evidence to test your estimated position. Treat separate observations as a cross-check rather than assuming a single instrument is always correct.'],
    ],
    format: 'The work is shorebased and may be offered through different classroom or remote formats. It does not add sea time. Ask about tutor access, marked practice exercises and the final assessment arrangements before choosing a self-paced option.',
    practice: 'Keep your working when solving a chart problem, including the units and assumptions. If an answer looks implausible, trace the calculation instead of starting again at random. After theory training, practise the same reasoning aboard with an instructor, where motion and interruptions make navigation a different task.',
    questions: ['Which plotting equipment and charts do I need?', 'Will someone review my working, not just the final answer?', 'How can I apply the theory on a practical passage?'],
    related: [['/asa/asa-106/', 'Apply navigation in ASA 106'], ['/courses/passage-making/', 'Practical passage-making'], ['/courses/weather/', 'Marine weather training']],
    sources: asaSource('asa-105-coastal-navigation'),
  },
  'asa-106': {
    overview: 'ASA 106 is for sailors who want to move beyond familiar daytime cruising and take more responsibility on extended coastal passages. The important change is sustained decision-making: the boat continues moving while the crew rotates, the light changes and the forecast develops. Navigation, seamanship and leadership have to work together rather than being separate exercises.',
    entry: 'The published prerequisites are ASA 101, ASA 103, ASA 104 and ASA 105. Holding ASA 104 alone is not the complete entry pathway. Before booking, send the school your certificates and a summary of recent passages, night hours and time in charge. Ask it to identify any refresher work rather than assuming an earlier pass means every skill is current.',
    skills: [
      ['Extended passage planning', 'The standard includes weather interpretation, coastal navigation, boat checks and planning fuel, water and provisions. Think of these as connected decisions: a slower passage changes arrival time, crew fatigue and the resources needed aboard.'],
      ['Night sailing and watchkeeping', 'Training addresses operating after dark, watch organisation and maintaining awareness. Ask how the school rotates responsibilities so you get meaningful navigation and helming experience rather than spending the passage watching someone else work.'],
      ['Sail handling and changing conditions', 'Advanced trim, reefing and heavy-weather preparation form part of the syllabus. The goal is sound judgement about conditions and the boat’s limits, not a belief that a qualification makes every forecast acceptable.'],
      ['Managing problems aboard', 'Emergency response, recovery exercises and systems troubleshooting connect boat handling with crew leadership. A useful debrief asks what warning signs were available and how the crew communicated, not simply whether the exercise was completed.'],
    ],
    format: 'The official standard specifies at least 48 hours underway on a liveaboard coastal passage, including one continuous period of at least 24 hours. It describes a sailing vessel of approximately 30–50 feet and includes day and night work. These are training-standard requirements, not the total calendar length of every school’s programme. American Sailing requires demonstrated practical skills and a written assessment; attendance alone does not guarantee certification.',
    practice: 'For example, imagine a training passage whose arrival slips from daylight into darkness. An experienced skipper does more than update the estimated arrival time. They review the approach, crew readiness, weather information and alternative destinations, then brief the people taking over the watch. This is an illustration of the decisions worth discussing with your instructor, not a prescribed ASA examination scenario. Before attending, practise explaining a passage plan aloud and revisit ASA 105 chartwork without relying entirely on a chartplotter. Bring questions about the tasks you still find difficult. If your last sailing was a short, sheltered charter, a supported night sail or a navigation refresher may be a more useful preparation step than immediately booking an advanced passage.',
    questions: ['How does the itinerary meet the required underway and continuous-passage time?', 'Will every student take a navigation watch and practise skipper responsibilities?', 'What happens if weather prevents the planned passage or assessment?', 'What pre-course reading, logbook evidence and ASA 105 revision do you expect?', 'Which safety equipment and overnight clothing should I bring, and what is supplied?'],
    related: [['/asa/asa-105/', 'ASA 105: the navigation prerequisite'], ['/asa/asa-104/', 'ASA 104: the earlier cruising stage'], ['/courses/night-sailing/', 'Build night-sailing experience'], ['/courses/passage-making/', 'Understand passage-making training'], ['/asa/asa-108/', 'ASA 108: the offshore progression']],
    sources: [...asaSource('asa-106-advanced-coastal-cruising'), ['ASA 106 official certification standard (PDF)', 'https://americansailing.com/wp-content/uploads/2025/02/Certification-ASA-106-Standards.pdf']],
  },
  'asa-107': {
    overview: 'Celestial Navigation is about deriving a position from observations of celestial bodies and accurate time. It suits sailors who enjoy understanding how a fix is constructed rather than receiving one from an electronic display. It is a specialist navigation subject, not a substitute for learning coastal pilotage or running a yacht.',
    entry: 'Check the current navigation prerequisites with the school and American Sailing before enrolling. You will benefit from confidence with position, time, plotting and careful numerical work. Ask whether the course expects access to a sextant and whether observation practice is included or the emphasis is on supplied sight data.',
    skills: [
      ['Measurement and corrections', 'Understand why a sextant observation needs correction before it becomes useful navigation information. Keeping a clear record of the observation is part of the method, not an optional extra.'],
      ['Time and celestial data', 'Work with the relationship between a timed observation and reference information. Small transcription errors can undermine otherwise careful work, so a repeatable recording process is valuable.'],
      ['Plotting and interpretation', 'Turn the calculations into lines of position and consider how they support a fix. Distinguish understanding the mathematics from taking reliable sights on a moving vessel.'],
    ],
    format: 'Expect detailed study, worked exercises and a knowledge assessment. Delivery may be classroom-based or remote depending on the provider. Ask how feedback is given on calculations and whether practical sight-taking is demonstrated. Completing a navigation course does not by itself demonstrate offshore command.',
    practice: 'Create a consistent worksheet for recording a practice observation, time, corrections and calculation steps. Use instructor-approved exercises to check the method before attempting to work quickly. A sensible learning goal is being able to explain where an error entered a calculation rather than simply matching the answer sheet.',
    questions: ['Is a sextant supplied for practice?', 'Are live observations included?', 'How does this relate to ASA 117 and my proposed ASA 108 pathway?'],
    related: [['/asa/asa-105/', 'Coastal navigation foundations'], ['/asa/asa-108/', 'Offshore passagemaking'], ['/rya/yachtmaster-ocean/', 'Compare the RYA Ocean route']],
    sources: asaSource('asa-107-celestial-navigation'),
  },
  'asa-108': {
    overview: 'Offshore Passagemaking shifts the emphasis from a coastal cruise to managing a vessel and crew over a longer open-water journey. Decisions made before departure have greater consequences when repairs, shelter and replacement crew are not close by. It is a progression for experienced sailors, not an introductory adventure holiday with a certificate attached.',
    entry: 'American Sailing’s course page lists ASA 101, 103, 104, 105 and 106, plus ASA 107 or 117. Confirm the exact celestial-navigation route and the school’s experience expectations before booking. Discuss your watchkeeping history, offshore time and any difficulties with multi-day life aboard honestly.',
    skills: [
      ['Ocean-scale planning', 'Study route selection and the preparation needed for an extended voyage. Planning has to consider the crew and vessel as well as the line drawn across the chart.'],
      ['Sustained onboard routines', 'Build a disciplined approach to watches, provisioning and maintenance. The aim is to keep the boat and people functioning throughout the passage, not just for the first energetic hours.'],
      ['Navigation and contingencies', 'Bring advanced navigation and emergency planning together. Consider what happens if a key system becomes unavailable and how the crew would recognise the developing problem.'],
    ],
    format: 'This is advanced practical passage training with associated knowledge requirements. Obtain the school’s assessment plan, passage expectations and contingency arrangements in writing. A advertised itinerary can change with weather; ask how the qualification requirements are handled if that happens.',
    practice: 'Before enrolling, write a short account of your longest passage: your role, watch pattern, decisions you made and what you would change. It gives the instructor better evidence than distance alone. Also consider whether the learning objective is offshore seamanship, a particular certificate or preparation for your own boat; those aims may require different programmes.',
    questions: ['What passage and assessment evidence will I complete?', 'How are watch and command roles allocated?', 'What are the alternatives if the intended route cannot be sailed?'],
    related: [['/asa/asa-106/', 'Advanced coastal cruising'], ['/asa/asa-107/', 'Celestial navigation'], ['/courses/offshore-sailing/', 'Choosing offshore training']],
    sources: asaSource('asa-108-offshore-passagemaking'),
  },
  'asa-110': {
    overview: 'Small Boat Sailing offers a direct, responsive introduction to sailing. With less equipment between you and the boat’s movement, changes in balance, steering and sail trim are easy to notice. Choose it because you want to learn on a small boat, not because its course number sounds more advanced than the keelboat sequence.',
    entry: 'This is an introductory small-boat route. Ask about the exact training craft, whether you sail alone or with another student, and the school’s water-confidence expectations. Clothing and capsize arrangements are important questions for a small-boat session and should be explained before arrival.',
    skills: [
      ['Boat preparation', 'Get familiar with the equipment and the sequence of preparing a small sailing boat. The learning task includes recognising when something is not ready before launching.'],
      ['Steering, trim and balance', 'Notice how your movements affect the boat as well as how the sails respond to wind. Small-boat learning rewards gentle, coordinated changes rather than large corrections.'],
      ['Returning and recovering', 'Discuss the school’s launching, landing and recovery exercises. Ask how its safety cover supports beginners while still allowing them to become active sailors.'],
    ],
    format: 'Expect practical sessions with short explanations and demonstrations. Verify the school’s current ASA 110 syllabus and assessment arrangements rather than assuming it uses the same boat or programme as ASA 101. Weather and water temperature can strongly affect the experience.',
    practice: 'After a session, identify whether a difficult moment began with steering, sail angle or where you were sitting. This is more useful than deciding that the boat was simply unpredictable. Ask the instructor for one specific skill to consolidate before moving into a faster or more demanding craft.',
    questions: ['What boat will I sail and how many people share it?', 'How is capsize practice introduced?', 'What supervised sailing is available afterwards?'],
    related: [['/australian-sailing/dinghy/', 'Australian Sailing dinghy training'], ['/asa/asa-101/', 'Compare the keelboat entry route'], ['/learn-the-basics/', 'Learn the basic sailing vocabulary']],
    sources: [['American Sailing certification catalogue', 'https://americansailing.com/learn-to-sail/certifications/']],
  },
  'asa-114': {
    overview: 'Cruising Catamaran training addresses the differences that matter when moving from one hull to two. A spacious deck does not mean a catamaran handles like a wider monohull. Manoeuvring, windage, visibility and the way sail power is managed deserve deliberate practice before taking charge of a charter.',
    entry: 'American Sailing lists ASA 101, 103 and 104 as prerequisites. Ask whether ASA 104 is completed beforehand or within a combined programme and how each standard is assessed. Existing monohull experience is useful, but tell the instructor how much time you have actually spent controlling a catamaran.',
    skills: [
      ['Powered manoeuvring', 'Develop familiarity with the catamaran’s propulsion arrangement and response at low speed. The aim is planned movement with an agreed crew briefing, rather than treating two engines as a cure for every difficult approach.'],
      ['Sailing characteristics', 'Understand how catamaran behaviour affects sail-handling decisions. Do not use the amount of heel as your only feedback about how hard the boat is working.'],
      ['Anchoring and onboard layout', 'Explore the equipment and routines specific to the training boat, including how crew work across a wider platform. Clear communication is especially valuable when people cannot easily see one another.'],
    ],
    format: 'This is practical multihull training with knowledge and skill assessment. Ask about the size and layout of the training boat, opportunities for each student to manoeuvre it, and whether the course includes liveaboard time. The school should explain how it covers catamaran-specific tasks rather than just providing a cruise on a catamaran.',
    practice: 'Before a catamaran charter, compare the training vessel with the one you intend to hire. Note differences in helm position, visibility, propulsion and deck equipment. A qualification is valuable evidence, but a careful vessel handover and the operator’s acceptance are separate parts of being ready.',
    questions: ['How much individual engine-handling practice is included?', 'Which catamaran-specific anchoring and sail-handling tasks are taught?', 'Does the charter company accept my training and experience for its boat?'],
    related: [['/asa/asa-104/', 'Bareboat cruising foundations'], ['/courses/catamaran-sailing/', 'Choosing catamaran tuition'], ['/iyt/catamaran/', 'IYT catamaran options']],
    sources: asaSource('asa-114-cruising-catamaran'),
  },
};
