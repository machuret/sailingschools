export type BasicLesson = {
  slug: string; title: string; group: string; intro: string;
  sections: { title: string; text: string }[];
  memory: [string, string, string]; tip: string;
  quiz: { question: string; options: string[]; answer: number; explanation: string }[];
  related: string;
};
export const basics: BasicLesson[] = [
  {
    slug: 'parts-of-a-sailing-boat', title: 'Parts of a sailing boat', group: 'Meet your boat',
    intro: 'Meet the main parts of a boat so your instructor’s explanations feel familiar, even before you step aboard.',
    sections: [
      { title: 'Start with the boat itself', text: 'The hull is the body that floats. The deck is the upper surface, while the cockpit is the working area where the crew usually sit or stand. A cruising yacht may have a cabin below; a small open dinghy may not. The bow is the front and the stern is the back. These names stay the same whichever way you are facing.' },
      { title: 'Look up, then below the water', text: 'The mast supports the sails. The boom extends along the bottom of the mainsail and can move across the boat, so keep clear of its path. Underwater, a keel or centreboard helps resist sideways movement. A rudder is the underwater steering surface, controlled through a tiller or wheel. A keel and a rudder do different jobs.' },
      { title: 'Connect the names to a real boat', text: 'When your instructor introduces the boat, point out the hull, cockpit, mast and boom. Ask where you can safely hold on and which areas must stay clear. Boats vary: do not assume a fitting is a handhold because it looks strong. Knowing the names helps you ask a precise question rather than guessing at a control.' },
    ], memory: ['Hull: the floating body', 'Mast: supports the sails', 'Rudder: steers the boat'],
    tip: 'Learn the big landmarks first. You do not need to memorise every fitting before your first lesson.',
    quiz: [{ question: 'Which part steers the boat?', options: ['The mast', 'The rudder', 'The cabin'], answer: 1, explanation: 'The rudder is the underwater steering surface.' }, { question: 'What can move across the cockpit during a turn?', options: ['The boom', 'The keel', 'The bow'], answer: 0, explanation: 'The boom can swing across. Your instructor will explain where to sit and how to stay clear.' }], related: 'dinghy-keelboat-or-yacht',
  },
  {
    slug: 'port-starboard-bow-stern', title: 'Port, starboard, bow and stern', group: 'Meet your boat',
    intro: 'Learn four direction words that keep everyone talking about the same part of the boat.',
    sections: [
      { title: 'Face the bow to learn the sides', text: 'Imagine standing in the boat looking forward towards the bow. Port is the boat’s left side and starboard is its right side. The stern is behind you. These are fixed names for parts of the boat, not instructions based on which way your own body is facing.' },
      { title: 'Turn yourself around, not the names', text: 'If you face the stern, the boat’s starboard side is now on your left. It is still starboard. This is why crews use these words: “your left” might mean a different direction to someone facing you. Practise pointing to the bow first, then locating port and starboard from that reference.' },
      { title: 'Use the words without guessing', text: 'You may hear “the bag is in the port locker” or “look off the starboard bow”. The first describes a storage location; the second points towards the forward-right part of the boat. If a sailing instruction is unclear, ask for it to be repeated. Recognising the side names does not, by itself, tell you which boat must give way.' },
    ], memory: ['Bow: front', 'Port: left when facing forward', 'Starboard: right when facing forward'],
    tip: 'Port and left both have four letters. Remember to face the bow before using that memory aid.',
    quiz: [{ question: 'You turn to face the stern. Does port change sides?', options: ['Yes', 'No'], answer: 1, explanation: 'Port is a fixed side of the boat, regardless of where you look.' }, { question: 'Which end is the bow?', options: ['The front', 'The back'], answer: 0, explanation: 'Bow means the front; stern means the back.' }], related: 'first-sailing-lesson',
  },
  {
    slug: 'sails-sheets-halyards', title: 'Sails, sheets and halyards', group: 'Meet your boat',
    intro: 'Understand why ropes have different names, and how those names explain their jobs.',
    sections: [
      { title: 'Meet the sails', text: 'On many beginner training yachts, the mainsail sits behind the mast and a headsail sits in front. The headsail may be called a jib or genoa. Not every boat has this arrangement: some dinghies have one sail, and other rigs have additional masts or sails. Start with the boat you will actually sail.' },
      { title: 'A sheet is a control line', text: 'A sheet adjusts a sail’s position or angle. The mainsheet controls the mainsail; headsail sheets control the headsail. “Sheet in” means bring the sheet in, while “ease” means let it out under control. A sheet is not the sail itself. Pulling a line without identifying it can change something you did not intend.' },
      { title: 'A halyard raises a sail', text: 'A halyard is used to hoist a sail. It has a different job from a sheet even when the ropes look similar. Ask your instructor to identify each line, its cleat and any winch before using it. Keep fingers, loose clothing and hair away from loaded ropes and moving equipment; follow the demonstrated handling method.' },
    ], memory: ['Sail: catches airflow', 'Sheet: adjusts the sail', 'Halyard: hoists the sail'], tip: 'Name the line and its job before touching it. Rope colours are not a universal naming system.',
    quiz: [{ question: 'Which line hoists a sail?', options: ['A sheet', 'A halyard'], answer: 1, explanation: 'A halyard hoists; a sheet adjusts the sail.' }, { question: 'What does “ease the sheet” mean?', options: ['Let it out under control', 'Pull it in harder'], answer: 0, explanation: 'Easing lets the sheet out. Your instructor will show the safe method for your boat.' }], related: 'first-sailing-lesson',
  },
  {
    slug: 'wind-direction', title: 'Where is the wind coming from?', group: 'Understand the wind',
    intro: 'Build wind awareness by separating the direction the wind comes from from the direction your boat is travelling.',
    sections: [
      { title: 'Wind is named for its origin', text: 'A northerly wind comes from the north and blows towards the south. This is different from describing a boat that is travelling north. Before discussing sail settings, identify where the wind comes from relative to the boat: ahead, across the side or behind.' },
      { title: 'Look for more than one clue', text: 'Flags stream away from the wind, while a suitable wind vane points into it. Ripples on the water and the feel of air on your face can provide other clues. Buildings, trees, sails and nearby boats can disturb the airflow. Compare observations rather than trusting a single sheltered flag.' },
      { title: 'The wind aboard a moving boat', text: 'The wind you feel aboard combines the actual wind with the effect of the boat’s movement. Sailors call this apparent wind. It can differ from the wind measured at a fixed location. You do not need to calculate vectors for your first lesson: notice how the sensation changes as the boat turns or speeds up, and ask your instructor to explain.' },
    ], memory: ['Name: where wind comes from', 'Observe: use several clues', 'Aboard: feel apparent wind'], tip: 'Before asking “where should the sail go?”, ask “where is the wind coming from?”',
    quiz: [{ question: 'A southerly wind comes from…', options: ['The north', 'The south'], answer: 1, explanation: 'Winds are named for the direction they come from.' }, { question: 'Does boat movement affect the wind felt aboard?', options: ['Yes', 'No'], answer: 0, explanation: 'Apparent wind includes the effect of the boat’s movement.' }], related: 'weather-for-beginner-sailors',
  },
  {
    slug: 'how-sailing-boats-move', title: 'How a sailing boat moves', group: 'Understand the wind',
    intro: 'See how air, sails and the underwater parts work together to move a boat.',
    sections: [
      { title: 'The wind does not need to be behind you', text: 'Sailing is more than being pushed from behind. A sail set at an angle to airflow can produce a force with a forward component and a sideways component. That is why a boat can travel across the wind. The useful result depends on the sail shape, its angle and the boat’s direction.' },
      { title: 'The water plays a part too', text: 'The hull and underwater foils interact with the water. A keel or centreboard helps resist sideways movement, allowing useful forward progress. It does not remove all sideways drift: that drift is called leeway. A boat’s movement over the ground can also be affected by current.' },
      { title: 'Why you cannot point anywhere', text: 'A conventional sailing boat cannot keep sailing directly into the wind. To reach an upwind destination it normally uses a series of angled legs, changing direction between them. Steering and sail trim work together. This is a useful mental model, not a complete physics lesson or a set of steering instructions.' },
    ], memory: ['Air acts on the sails', 'Water acts on the foils', 'Together: forward progress'], tip: 'Think of the sail and the underwater foil as a team. The sail is not working alone.',
    quiz: [{ question: 'Can a sailing boat travel across the wind?', options: ['Yes', 'Only with an engine'], answer: 0, explanation: 'Sail forces and the underwater foils allow progress across the wind.' }, { question: 'What is leeway?', options: ['Sideways drift through the water', 'A type of rope'], answer: 0, explanation: 'Leeway is sideways movement, distinct from movement caused by current.' }], related: 'dinghy-keelboat-or-yacht',
  },
  {
    slug: 'understanding-points-of-sail', title: 'Understanding points of sail', group: 'Understand the wind',
    intro: 'Learn to describe a sailing direction relative to the wind, then explore our interactive diagram.',
    sections: [
      { title: 'Use the wind as your reference', text: 'A point of sail describes the boat’s heading relative to the wind. It is not a compass course. Two boats travelling north can be on different points of sail if they are experiencing different wind directions. First identify the wind, then consider where the bow is pointing.' },
      { title: 'Group the directions', text: 'Close-hauled means sailing as near the wind as the boat can effectively manage. Reaching covers directions across and away from the wind; a beam reach places the wind across the side. Running means sailing downwind. The no-go zone is the area too close to the wind for sustained sailing; its size varies with boat and conditions.' },
      { title: 'Connect the names to a journey', text: 'A change of heading may require a change in sail trim. Use the linked interactive diagram to explore that relationship at your own pace. Its simplified picture is a learning aid, not an exact sail-setting prescription. On the water, an instructor helps you recognise the boat’s response and maintain a lookout while making changes.' },
    ], memory: ['Upwind: close-hauled', 'Across: reaching', 'Downwind: running'], tip: 'The same compass heading can have a different point-of-sail name when the wind changes.',
    quiz: [{ question: 'What defines a point of sail?', options: ['The compass alone', 'Heading relative to the wind'], answer: 1, explanation: 'Points of sail describe the relationship between heading and wind.' }, { question: 'Where is the wind on a beam reach?', options: ['Across the side', 'Directly ahead'], answer: 0, explanation: 'The beam is the side of the boat.' }], related: 'points-of-sail',
  },
  {
    slug: 'tiller-and-wheel', title: 'Steering with a tiller or wheel', group: 'Control the boat',
    intro: 'Understand the basic steering controls before practising small, supervised changes of direction.',
    sections: [
      { title: 'Two controls, one steering surface', text: 'A tiller is a lever connected to the rudder. A wheel operates the steering system through a linkage. With conventional forward movement, moving a tiller to port turns the bow to starboard; a conventional wheel is turned in the direction you want the bow to go. Your instructor will demonstrate your boat’s arrangement.' },
      { title: 'Small changes give clearer feedback', text: 'New sailors often make a large correction, then another large correction in the opposite direction. On a suitable training course, your instructor can help you choose a reference point and notice how the boat responds to a small input. Response varies with speed, water flow and boat type. Do not expect car-like handling.' },
      { title: 'Steering is not the whole job', text: 'Keep looking around, not just at the tiller or wheel. Obstacles, other boats, crew position and wind direction all matter. Tell the instructor if the steering feels unusually heavy or the boat is not responding. Manoeuvring backwards and at very low speed introduces differences that need practical instruction.' },
    ], memory: ['Tiller: opposite bow direction', 'Wheel: usual turn direction', 'Lookout: keep looking around'], tip: 'Watch where the bow goes, not only where your hand moves.',
    quiz: [{ question: 'With normal forward movement, tiller to port turns the bow…', options: ['To starboard', 'To port'], answer: 0, explanation: 'A conventional tiller moves opposite to the intended bow turn.' }, { question: 'Should you stare at the steering control?', options: ['Yes', 'No, maintain a lookout'], answer: 1, explanation: 'Steering must be combined with awareness of your surroundings.' }], related: 'first-sailing-lesson',
  },
  {
    slug: 'tacking-and-gybing', title: 'Tacking versus gybing', group: 'Control the boat',
    intro: 'Recognise the difference between two turns without confusing an explanation with practical training.',
    sections: [
      { title: 'Which end crosses the wind?', text: 'In a tack, the bow passes through the wind as the boat changes from one tack to the other. In a gybe, the stern passes through the wind while sailing downwind. Both change which side the wind comes over, but the boat travels through a different part of the wind circle.' },
      { title: 'The crew need a shared plan', text: 'Before a manoeuvre, the helm and crew communicate so people and lines are ready. The exact calls and handling sequence vary with boat and school. Learn your instructor’s method rather than trying to improvise from a diagram. Tell the helm if you are not ready or have not understood an instruction.' },
      { title: 'Respect the boom’s movement', text: 'During a gybe, the boom and mainsail can move rapidly across the boat. An unintended gybe is a particular risk when sailing near directly downwind. Remain in the instructed safe position and keep clear of the boom and loaded lines. Practise both turns with a qualified instructor in appropriate conditions.' },
    ], memory: ['Tack: bow through the wind', 'Gybe: stern through the wind', 'Both: communicate first'], tip: 'Remember which end crosses the wind: bow for a tack, stern for a gybe.',
    quiz: [{ question: 'Which end passes through the wind in a tack?', options: ['Bow', 'Stern'], answer: 0, explanation: 'Tacking takes the bow through the wind.' }, { question: 'If you are not ready for a manoeuvre, what should you do?', options: ['Stay silent', 'Tell the helm'], answer: 1, explanation: 'Clear communication helps the crew prepare safely.' }], related: 'points-of-sail',
  },
  {
    slug: 'sail-trim-basics', title: 'Sail trim: easing and pulling in', group: 'Control the boat',
    intro: 'Learn what trimming means and why pulling a sail in harder is not always the answer.',
    sections: [
      { title: 'Trim means adjust', text: 'Sail trim is the adjustment of sails to suit the wind and the boat’s heading. Sheets are among the controls used. “Sheet in” brings a sheet in; “ease” lets it out under control. The right setting is not fixed: it changes as the boat turns and the wind varies.' },
      { title: 'Watch the sail and the boat', text: 'A flapping leading edge can indicate that a sail’s angle to the airflow needs attention. But simply pulling harder is not a universal solution: the boat may be pointed too close to the wind, or another adjustment may be needed. In a lesson, notice the effect of one instructed change instead of changing several controls at once.' },
      { title: 'Learn the handling, not just the theory', text: 'Loaded sheets can exert considerable force. Your instructor must show how to use the boat’s cleats and winches safely, where to keep fingers and how to release a line under control. Never wrap a working sheet around your hand. Good trim starts with safe handling and awareness of other crew.' },
    ], memory: ['Sheet in: bring in', 'Ease: let out under control', 'Observe: sail and boat response'], tip: 'More tension is not automatically more speed. Trim is about the right adjustment for the situation.',
    quiz: [{ question: 'Is the correct sail setting always the same?', options: ['Yes', 'No'], answer: 1, explanation: 'Wind and heading changes can require different settings.' }, { question: 'Should you wrap a loaded sheet around your hand?', options: ['No', 'Yes, for grip'], answer: 0, explanation: 'Loaded lines can cause injury. Use the method demonstrated by your instructor.' }], related: 'points-of-sail',
  },
  {
    slug: 'sailing-instructions', title: 'Ten sailing instructions you will hear', group: 'Learn the language',
    intro: 'Translate common onboard words into plain English, and know when to ask for clarification.',
    sections: [
      { title: 'Direction and sail controls', text: '“Head up” means turn closer towards the wind. “Bear away” means turn further away from it. “Sheet in” means bring a sail-control sheet in. “Ease” means let a line out under control. These are relative instructions: they do not identify a compass direction, and the helm and crew may have different jobs.' },
      { title: 'Preparation and ropework', text: '“Ready to tack?” asks the crew to prepare for an upwind turn. “Ready to gybe?” asks them to prepare for a downwind turn. “Hoist” means raise, commonly a sail. “Lower” means bring down under control. “Make fast” means secure a line using the appropriate fitting and method. These words are an introduction, not a substitute for a demonstration.' },
      { title: 'The most useful instruction: stand by', text: '“Stand by” means be ready for an action, not necessarily do it immediately. Agree the calls your instructor uses and respond clearly. If a call is ambiguous, ask which line or which action is intended. A confident crew member communicates uncertainty early rather than hiding it.' },
    ], memory: ['Listen: identify the action', 'Confirm: clarify the task', 'Respond: say when ready'], tip: '“Please show me which line” is a useful sailing phrase too.',
    quiz: [{ question: 'What does “bear away” mean?', options: ['Turn away from the wind', 'Turn towards the wind'], answer: 0, explanation: 'Bearing away increases the angle away from the wind.' }, { question: 'Does “stand by” always mean act immediately?', options: ['Yes', 'No'], answer: 1, explanation: 'It asks you to be ready. Wait for the agreed instruction.' }], related: 'first-sailing-lesson',
  },
  {
    slug: 'beginner-sailing-knots', title: 'Three useful beginner knots', group: 'Learn the language',
    intro: 'Meet three common ropework tasks and learn why choosing the right knot matters as much as tying it.',
    sections: [
      { title: 'A stopper: the figure of eight', text: 'A figure-of-eight knot is commonly used as a stopper to help prevent a line end running through a fitting. Whether a stopper should be present depends on the system: some lines must be able to run free. Ask before adding or removing one. Recognising a knot’s purpose is the first step towards using it correctly.' },
      { title: 'A fixed loop: the bowline', text: 'A bowline forms a loop that does not normally tighten like a slip loop. It has many sailing uses, but suitability depends on rope, loading and application. It is not a universal safety knot. Learn tying, dressing and checking from an instructor; do not use a first attempt for lifting a person or a critical attachment.' },
      { title: 'Around a suitable object: round turn and two half hitches', text: 'This combination is often introduced for attaching a line around a suitable post or ring. The round turn and finishing hitches have different roles. Practise with an unloaded spare rope ashore and ask an instructor to check the result. This lesson introduces selection and terminology; practical demonstrations are needed before relying on any knot aboard.' },
    ], memory: ['Figure of eight: stopper', 'Bowline: fixed loop', 'Round turn + hitches: attachment'], tip: 'Practise slowly with spare rope, then ask someone qualified to check both the knot and its intended use.',
    quiz: [{ question: 'Which knot is commonly used to form a fixed loop?', options: ['Bowline', 'Figure of eight'], answer: 0, explanation: 'A bowline forms a loop; suitability still depends on the application.' }, { question: 'Should every line always have a stopper?', options: ['Yes', 'No, it depends on the system'], answer: 1, explanation: 'Some lines need to run free. Ask your instructor before changing the setup.' }], related: 'first-sailing-lesson',
  },
  {
    slug: 'why-boats-heel', title: 'Why sailing boats heel', group: 'Learn the language',
    intro: 'Understand the leaning motion that surprises many first-time sailors, without assuming every boat behaves alike.',
    sections: [
      { title: 'Wind can create a leaning force', text: 'Heel is the sideways lean of a boat. Wind force on the sails can create a turning effect that makes the boat lean. The amount depends on the boat, sail area, wind and crew handling. A sudden change can feel surprising, so ask your instructor what to expect before leaving the dock.' },
      { title: 'Different boats balance differently', text: 'Many monohull cruising yachts use a ballasted keel as part of their stability. Dinghies rely much more on crew position and active handling. Multihulls have different stability characteristics again. Do not transfer an assumption about one type of boat to another. No simple statement such as “boats cannot capsize” is safe or accurate.' },
      { title: 'Your job as a beginner', text: 'Sit or move where your instructor directs, use the approved handholds and explain if you feel uncomfortable. Do not abruptly change sides or grab a loaded line. Managing heel may involve sail trim, steering or reducing sail, decisions for the instructor or skipper. Your first goal is to understand the sensation and follow the boat’s briefing.' },
    ], memory: ['Heel: sideways lean', 'Balance: boat-specific', 'Crew: follow the briefing'], tip: 'Tell your instructor if the movement worries you. Understanding what is happening is part of the lesson.',
    quiz: [{ question: 'Do all sailing boats have the same stability?', options: ['Yes', 'No'], answer: 1, explanation: 'Dinghies, keelboats and multihulls have different characteristics.' }, { question: 'What should you do if you feel uncomfortable?', options: ['Tell the instructor', 'Suddenly jump to the other side'], answer: 0, explanation: 'Communicate and follow the instructor’s guidance.' }], related: 'dinghy-keelboat-or-yacht',
  },
  {
    slug: 'moving-around-a-boat', title: 'Moving safely around a boat', group: 'Get ready to sail',
    intro: 'Recognise common movement hazards and the questions to ask before stepping aboard.',
    sections: [
      { title: 'Start at the boarding point', text: 'A boat can move relative to the pontoon or shore. Wait for the crew’s instructions about when and where to board, and ask for help with bags. Avoid jumping across a gap. Never put hands or feet between a boat and a dock or another boat to try to stop movement.' },
      { title: 'Find the approved handholds', text: 'Ask which fittings are safe to hold and where you may stand. Wet decks, loose ropes and changing boat motion can affect footing. Keep the route clear and move deliberately. A line, guard wire or moving part should not automatically be treated as a reliable handhold.' },
      { title: 'Know the areas to stay clear of', text: 'The boom can sweep across, and sheets can move or tighten suddenly. Keep out of rope loops, away from loaded lines and clear of winch working areas unless instructed. Let the skipper know before moving to another part of the boat. Your boat-specific briefing takes priority over generic advice, especially during manoeuvres.' },
    ], memory: ['Board: wait for instructions', 'Move: use approved handholds', 'Avoid: boom and loaded lines'], tip: 'Ask “where should I hold on?” before you need the answer.',
    quiz: [{ question: 'Should you fend off a boat with your foot?', options: ['No', 'Yes'], answer: 0, explanation: 'A limb can be trapped between moving surfaces.' }, { question: 'Is every visible fitting a safe handhold?', options: ['Yes', 'No'], answer: 1, explanation: 'Ask the crew to identify suitable handholds.' }], related: 'what-to-wear-sailing',
  },
  {
    slug: 'before-you-leave-the-dock', title: 'What a pre-departure briefing covers', group: 'Get ready to sail',
    intro: 'Know what to listen for before sailing, and speak up if a key part of the briefing is unclear.',
    sections: [
      { title: 'People, plans and conditions', text: 'A briefing introduces who is in charge, what the session involves and how the crew will communicate. The skipper considers the forecast, local conditions and the boat’s capabilities. As a student, share relevant access needs or concerns privately before departure so the school can discuss appropriate arrangements.' },
      { title: 'Equipment and emergency arrangements', text: 'The crew should explain the personal safety equipment provided, including how it fits and how it is used. Ask where to sit, what to avoid and what to do if someone falls overboard or an alarm is raised. Do not assume equipment on this boat works like equipment you have used elsewhere.' },
      { title: 'Check your understanding', text: 'Repeat an unfamiliar instruction in your own words and ask for a demonstration when needed. Know who to alert if you notice a problem. This is a student’s listening guide, not a complete skipper’s departure checklist: legal requirements, equipment and operating procedures depend on the boat and location.' },
    ], memory: ['People: roles and communication', 'Equipment: fit and use', 'Plan: what to do if needed'], tip: 'A good question before departure is easier to answer than a guess during a manoeuvre.',
    quiz: [{ question: 'Is this lesson a complete skipper’s checklist?', options: ['Yes', 'No'], answer: 1, explanation: 'It is an introduction to what students should listen for; requirements are boat- and location-specific.' }, { question: 'What if you do not understand the safety equipment?', options: ['Ask for a demonstration', 'Assume it is familiar'], answer: 0, explanation: 'Ask before departure so the crew can help.' }], related: 'first-sailing-lesson',
  },
  {
    slug: 'helpful-crew-member', title: 'Being a helpful crew member', group: 'Get ready to sail',
    intro: 'You do not need years of experience to contribute. Start with listening, clear communication and awareness.',
    sections: [
      { title: 'Do the agreed job', text: 'A helpful beginner knows which task they have been given and asks before taking on another. Unrequested changes to ropes or equipment can surprise the helm and other crew. If you finish a task, report it and wait for the next instruction. If you are unsure, say so early.' },
      { title: 'Share useful observations', text: 'Keep looking around and alert the skipper to anything relevant, using clear direction words where possible. For example, “boat off the starboard bow” is more useful than silently pointing. Do not assume the helm has noticed every obstacle. At the same time, avoid distracting someone during a demanding task unless the information matters.' },
      { title: 'Look after the shared space', text: 'Stow personal items where directed, keep working areas clear and tell the crew if a rope or object is obstructing movement. Communicate tiredness, discomfort or confusion. At the end of the session, ask what to practise next and help with agreed packing-up tasks. Good seamanship includes cooperation as well as technical skill.' },
    ], memory: ['Listen: know your role', 'Look: share observations', 'Speak: ask and confirm'], tip: 'Reliable communication is a real contribution, even on your very first sail.',
    quiz: [{ question: 'You are unsure which line to handle. What next?', options: ['Pull the nearest one', 'Ask for clarification'], answer: 1, explanation: 'Clarifying prevents an unintended change to the boat’s setup.' }, { question: 'Is reporting discomfort useful?', options: ['Yes', 'No'], answer: 0, explanation: 'It helps the instructor support you and manage the session.' }], related: 'how-to-choose-a-sailing-school',
  },
];
export const basicHref = (slug: string) => `/learn-the-basics/${slug}/`;
