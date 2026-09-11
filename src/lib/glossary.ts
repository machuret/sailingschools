/**
 * Sailing glossary.
 *
 * Deliberately one page rather than 120 URLs. A definition is two sentences; a page built
 * around two sentences is thin, and a hundred of them would be a hundred thin pages. What
 * a reader actually wants is to find the word fast, which is a filter, not a route.
 *
 * Definitions are written for someone who has just heard the word on a boat and does not
 * know it — so they say what it is, and where useful what it is not.
 */

export type GlossaryTerm = {
  term: string;
  /** Shown in place of `term` when sorting should ignore an article or a plural. */
  sort?: string;
  def: string;
  /** Where the term is explained at length. */
  href?: string;
  tags?: ('beginner' | 'navigation' | 'safety' | 'qualification' | 'racing' | 'rig')[];
};

export const glossary: GlossaryTerm[] = [
  { term: 'Abeam', def: 'At right angles to the boat’s centreline. A mark abeam is directly off the side, neither ahead nor astern.' },
  { term: 'Aft', def: 'Toward the back of the boat. The opposite of forward. “Abaft” means further aft than something else.', tags: ['beginner'] },
  { term: 'Apparent wind', def: 'The wind you feel on the boat, which is the true wind combined with the wind created by the boat’s own movement. It is why a run feels calm and a reach feels windy.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'Asymmetric', def: 'A downwind sail set from a bowsprit rather than a pole, shaped like a large genoa. Easier to handle than a symmetric spinnaker and standard on most modern racing dinghies.', href: '/rya/sailing-with-spinnakers/', tags: ['rig', 'racing'] },
  { term: 'Backstay', def: 'Standing rigging running from the masthead to the stern, holding the mast up against the pull of the forestay. On many boats it is adjustable, which bends the mast and flattens the mainsail.', tags: ['rig'] },
  { term: 'Bareboat charter', def: 'Hiring a yacht without a skipper or crew. The operator sets its own competence requirements; there is no single national rule in Australia.', href: '/pathways/charter-a-yacht/', tags: ['qualification'] },
  { term: 'Batten', def: 'A stiffener in a pocket along the leech of a sail, holding its shape. Full-length battens run the full width of the sail.', tags: ['rig'] },
  { term: 'Beam', def: 'The width of the boat at its widest point. Also used for direction — “on the beam” means abeam.' },
  { term: 'Beam reach', def: 'Sailing with the wind at right angles to the boat. The fastest and easiest point of sail for most boats.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'Bear away', def: 'To turn the boat away from the wind. The opposite of luffing up. As you bear away, the sails go out.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'Beat', def: 'To sail upwind by a series of close-hauled legs, tacking between them. Also the name for the upwind leg of a race course.', tags: ['beginner', 'racing'] },
  { term: 'Bilge', def: 'The lowest internal part of the hull, where water collects. A bilge pump removes it; a dry bilge is a good sign about a boat.' },
  { term: 'Boom', def: 'The horizontal spar along the foot of the mainsail. The single most dangerous object on a sailing boat, because it swings across the cockpit during a gybe.', tags: ['beginner', 'safety', 'rig'] },
  { term: 'Bowline', def: 'A knot forming a fixed loop that does not slip and unties easily after loading. The first knot most courses teach, and the one most used.', tags: ['beginner'] },
  { term: 'Broach', def: 'A sudden uncontrolled turn into the wind, usually downwind under spinnaker, laying the boat over on its side. Alarming, rarely dangerous in a keelboat, and avoided by easing sheets early.', tags: ['safety'] },
  { term: 'Broad reach', def: 'Sailing with the wind over the quarter, between a beam reach and a run. Fast, comfortable, and where a spinnaker earns its keep.', href: '/learn/points-of-sail/' },
  { term: 'Bulkhead', def: 'A structural partition across the inside of the hull. It stiffens the boat as well as dividing the accommodation.' },
  { term: 'Cardinal mark', def: 'A navigation buoy indicating the safe side to pass by reference to north, south, east or west. Identified by its topmarks and, at night, by its light pattern.', tags: ['navigation'] },
  { term: 'Catamaran', def: 'A twin-hulled boat. Sails flat rather than heeling, turns in its own length under twin engines, and carries far more windage than a monohull.', href: '/compare/monohull-vs-catamaran/' },
  { term: 'Centreboard', def: 'A retractable fin lowered through the hull of a dinghy to resist sideways drift. Raised downwind and in shallow water.', tags: ['beginner'] },
  { term: 'Chart datum', def: 'The level charted depths are measured from — usually about the lowest astronomical tide. Actual depth is chart datum plus the height of tide.', tags: ['navigation'] },
  { term: 'Cleat', def: 'A fitting to secure a rope. A jamming or cam cleat holds under load and releases with a tug; a horn cleat is made fast with figure-of-eight turns.', tags: ['beginner'] },
  { term: 'Clew', def: 'The aft lower corner of a sail, where the sheet attaches. The other corners are the tack (forward lower) and the head (top).', tags: ['rig'] },
  { term: 'Close hauled', def: 'Sailing as close to the wind as the boat will go while still driving — about 45 degrees off the wind. Sheets in hard, boom near the centreline.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'Close reach', def: 'Between close hauled and a beam reach, around 60 to 80 degrees off the wind. Faster and more forgiving than close hauled.', href: '/learn/points-of-sail/' },
  { term: 'COLREGs', def: 'The international collision regulations — the rules of the road at sea. They apply to every vessel, and “I had right of way” is not a defence if you could have avoided a collision.', tags: ['safety', 'navigation'] },
  { term: 'Companionway', def: 'The main entrance from the cockpit down into the cabin, usually with a sliding hatch and washboards.' },
  { term: 'Competent Crew', def: 'The RYA’s five-day introductory course. Teaches you to be useful aboard a cruising yacht; it is not a skipper qualification.', href: '/rya/competent-crew/', tags: ['qualification'] },
  { term: 'Cunningham', def: 'A control that tensions the luff of the mainsail, moving draft forward and flattening the sail in stronger wind.', tags: ['rig'] },
  { term: 'Day Skipper', def: 'The RYA qualification for skippering a small cruising yacht on short coastal passages by day. A theory course and a five-day practical, and the certificate charter companies recognise.', href: '/rya/day-skipper-practical/', tags: ['qualification'] },
  { term: 'Dead run', def: 'Sailing directly downwind, with the wind astern. Feels calm and is the point of sail most likely to cause an accidental gybe.', href: '/learn/points-of-sail/', tags: ['safety'] },
  { term: 'Displacement', def: 'The weight of water a boat displaces, and so the boat’s weight. A heavy-displacement cruiser is slower and more comfortable than a light one.' },
  { term: 'Draft', def: 'Two meanings. The depth of the boat below the waterline — what tells you whether you will run aground. Also the depth of curvature in a sail.' },
  { term: 'EPIRB', def: 'Emergency Position-Indicating Radio Beacon. Activated in a genuine emergency, it transmits your identity and position to search and rescue by satellite. Registration with AMSA is required in Australia.', tags: ['safety'] },
  { term: 'Fender', def: 'An inflatable cushion hung over the side to protect the hull alongside a dock or another boat. Stowed before leaving — fenders left out at sea are the sign of an unhappy boat.', tags: ['beginner'] },
  { term: 'Foot', def: 'The bottom edge of a sail. Also a verb: to foot is to sail slightly lower than close hauled for extra speed.', tags: ['rig'] },
  { term: 'Forestay', def: 'The wire from the bow to the mast that holds the mast up and carries the headsail. Its tension controls headsail shape.', tags: ['rig'] },
  { term: 'Genoa', def: 'A large headsail overlapping the mast. Sized by percentage — a 150% genoa overlaps by half the foretriangle.', tags: ['rig'] },
  { term: 'Gooseneck', def: 'The fitting connecting the boom to the mast, allowing the boom to swing and lift.', tags: ['rig'] },
  { term: 'GRIB', def: 'A compact file format for weather model data, downloaded aboard over limited bandwidth. It is raw model output, not a forecast a meteorologist has looked at.', tags: ['navigation'] },
  { term: 'Gunwale', def: 'The upper edge of the boat’s side, where deck meets hull. Pronounced “gunnel”.' },
  { term: 'Gybe', def: 'To turn the stern through the wind, so the boom crosses to the other side. More dangerous than tacking because the boom travels fast and under load.', tags: ['beginner', 'safety'] },
  { term: 'Halyard', def: 'A rope that hoists a sail. Named for the sail it lifts — main halyard, jib halyard, spinnaker halyard.', tags: ['beginner', 'rig'] },
  { term: 'Heave to', def: 'To balance backed headsail against rudder so the boat sits nearly stationary, forereaching slowly. Used to rest, wait out weather, or make lunch.', tags: ['safety'] },
  { term: 'Heel', def: 'The sideways lean of a boat under sail. Normal on a monohull; a catamaran does not heel, which removes a useful warning signal.', href: '/compare/monohull-vs-catamaran/', tags: ['beginner'] },
  { term: 'ICC', def: 'International Certificate of Competence — a document some overseas authorities and charter bases require. Not needed inside Australia, and not a substitute for training.', href: '/compare/icc-vs-bareboat-skipper/', tags: ['qualification'] },
  { term: 'In irons', def: 'Stopped head to wind with the sails flogging and no steerage. Escaped by backing a sail to push the bow onto one tack.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'IYT', def: 'International Yacht Training — an international scheme taught in Australia, notable for dedicated catamaran certificates and for issuing the ICC within the scheme.', href: '/iyt/', tags: ['qualification'] },
  { term: 'Jib', def: 'A headsail that does not overlap the mast. Smaller than a genoa and easier to tack.', tags: ['rig'] },
  { term: 'Keel', def: 'The ballasted fin under a yacht that resists sideways drift and keeps the boat upright. The thing a dinghy does not have, which is why a dinghy capsizes.', href: '/compare/dinghy-vs-keelboat/', tags: ['beginner'] },
  { term: 'Ketch', def: 'A two-masted rig with the shorter mizzen mast forward of the rudder post. A yawl has its mizzen aft of the rudder post.', tags: ['rig'] },
  { term: 'Kicker', def: 'Also called a vang. A control pulling the boom down, keeping the mainsail leech tensioned when the sheet is eased.', tags: ['rig'] },
  { term: 'Knot', def: 'One nautical mile per hour, and the unit of boat speed and wind speed at sea. One knot is about 1.85 km/h. Never “knots per hour”.', tags: ['beginner', 'navigation'] },
  { term: 'Lateral mark', def: 'A navigation buoy marking the side of a channel. In Australia, IALA region A applies: red to port on entering a harbour.', tags: ['navigation'] },
  { term: 'Lee shore', def: 'A shore the wind is blowing onto. The one to be most wary of, because losing the engine or the rig puts you on it.', tags: ['safety'] },
  { term: 'Leech', def: 'The trailing edge of a sail. The luff is the leading edge; the foot is the bottom.', tags: ['rig'] },
  { term: 'Leeward', def: 'The side away from the wind, pronounced “loo-ard”. The sail sets on the leeward side. The opposite is windward.', tags: ['beginner'] },
  { term: 'Leeway', def: 'The sideways slip of a boat through the water, which makes your course over ground differ from your heading. It must be allowed for when navigating.', tags: ['navigation'] },
  { term: 'Luff', def: 'Two meanings. The leading edge of a sail. Also what a sail does when it flutters because it is undertrimmed or the boat is pointing too high — “ease to the luff” is the basic trimming instruction.', href: '/learn/points-of-sail/', tags: ['beginner', 'rig'] },
  { term: 'Mainsheet', def: 'The rope controlling the boom, and therefore the mainsail’s angle to the wind. The single most used control on a boat.', tags: ['beginner', 'rig'] },
  { term: 'MAYDAY', def: 'The radio distress call for grave and imminent danger to a vessel or a person. PAN-PAN is urgency without immediate danger; SÉCURITÉ is a safety message.', tags: ['safety'] },
  { term: 'MOB', def: 'Man overboard. Also the button on a chartplotter that drops a mark at the current position — press it first, then start the recovery.', tags: ['safety'] },
  { term: 'Nautical mile', def: 'One minute of latitude, about 1,852 metres. Distances at sea are measured in them, which is why you can step off a distance on the latitude scale of a chart.', tags: ['navigation'] },
  { term: 'No-go zone', def: 'The arc of roughly 45 degrees either side of the wind in which a boat cannot generate drive. To reach a point inside it, you tack.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'Outhaul', def: 'The control tensioning the foot of the mainsail along the boom. Tighter flattens the sail; easing adds depth for light air.', tags: ['rig'] },
  { term: 'Painter', def: 'The rope at the bow of a dinghy or tender, used to make it fast or tow it.' },
  { term: 'Pilotage', def: 'Navigating by what you can see — marks, transits, depth and the shape of the land — rather than by instruments. The skill that matters most close inshore.', tags: ['navigation'] },
  { term: 'Points of sail', def: 'The boat’s angles relative to the wind: close hauled, close reach, beam reach, broad reach and run, plus the no-go zone in between.', href: '/learn/points-of-sail/', tags: ['beginner'] },
  { term: 'Port', def: 'The left side of the boat looking forward. Marked red. Remember it because port and left are both shorter words than starboard and right.', tags: ['beginner'] },
  { term: 'Preventer', def: 'A line rigged from the boom forward to stop an accidental gybe. Standard practice downwind, and the reason most crews do not get hit by the boom.', tags: ['safety'] },
  { term: 'Pulpit', def: 'The stainless guardrail structure at the bow. The equivalent at the stern is the pushpit.' },
  { term: 'Reach', def: 'Any point of sail between close hauled and a run — close reach, beam reach or broad reach.', href: '/learn/points-of-sail/' },
  { term: 'Reef', def: 'To reduce sail area in stronger wind. The first reef always goes in later than it should have; experienced sailors reef when they first think of it.', tags: ['beginner', 'safety'] },
  { term: 'Rhumb line', def: 'A line of constant compass bearing between two points. On a chart it is a straight line, which is why chart navigation works the way it does.', tags: ['navigation'] },
  { term: 'Rode', def: 'The chain or rope connecting the anchor to the boat. Scope is the ratio of rode deployed to depth — too little scope is why anchors drag.', href: '/courses/anchoring/', tags: ['safety'] },
  { term: 'RYA', def: 'The Royal Yachting Association. The British scheme, taught worldwide, and the international scheme with the widest Australian availability.', href: '/rya/', tags: ['qualification'] },
  { term: 'Sheet', def: 'A rope controlling a sail’s angle to the wind. Not a sail — the confusion is universal and worth clearing up early.', tags: ['beginner', 'rig'] },
  { term: 'Shrouds', def: 'The standing rigging holding the mast up sideways. With the forestay and backstay, they are what keeps the rig in the boat.', tags: ['rig'] },
  { term: 'Sloop', def: 'The standard modern rig: one mast, one mainsail, one headsail. Almost every boat you will learn on is a sloop.', tags: ['rig'] },
  { term: 'SROCP', def: 'Short Range Operator Certificate of Proficiency — the Australian marine VHF radio certificate. Required for the AMSA Sailing Master Coastal certificate; LROCP is the long-range equivalent.', href: '/courses/marine-radio/', tags: ['qualification', 'safety'] },
  { term: 'Starboard', def: 'The right side of the boat looking forward. Marked green. A boat on starboard tack generally has right of way over one on port.', tags: ['beginner'] },
  { term: 'Stay', def: 'Standing rigging running fore and aft — the forestay and backstay. Shrouds run sideways.', tags: ['rig'] },
  { term: 'Tack', def: 'Three meanings, which is why beginners find it confusing. To turn the bow through the wind. The side the wind is coming from (port or starboard tack). And the forward lower corner of a sail.', tags: ['beginner'] },
  { term: 'Telltale', def: 'A short length of wool or ribbon on a sail showing how the air is flowing over it. The cheapest and most useful trimming instrument on the boat.', href: '/courses/sail-trim/', tags: ['rig'] },
  { term: 'Tender', def: 'The small boat used to get between a yacht and the shore. Also a description of a boat that heels easily — the opposite of stiff.' },
  { term: 'Transit', def: 'Two fixed objects lined up, giving a precise line of position without instruments. Used for entering channels and for checking whether your anchor is dragging.', tags: ['navigation'] },
  { term: 'Traveller', def: 'A track across the boat carrying the mainsheet block, controlling the boom’s athwartships position independently of sheet tension.', tags: ['rig'] },
  { term: 'Trim', def: 'Adjusting sails for the wind angle, and the fore-and-aft balance of the boat. “Trim” and “balance” together are most of what makes a boat fast.', href: '/courses/sail-trim/', tags: ['beginner'] },
  { term: 'True wind', def: 'The actual wind over the water, as distinct from apparent wind, which is what you feel once the boat is moving.', tags: ['navigation'] },
  { term: 'VHF', def: 'Very High Frequency marine radio — the standard means of communication at sea and the primary way of calling for help inshore. Operating one legally requires a certificate.', href: '/courses/marine-radio/', tags: ['safety'] },
  { term: 'Waypoint', def: 'A position stored in a chartplotter or GPS, used to build a route. A route of waypoints is not a passage plan — it does not know about depth, traffic or weather.', tags: ['navigation'] },
  { term: 'Winch', def: 'A geared drum for taking load on a sheet or halyard. Turns go on clockwise, always, and fingers stay clear of the drum under load.', tags: ['beginner', 'safety'] },
  { term: 'Windward', def: 'The side the wind is coming from. The opposite of leeward. A windward boat generally keeps clear of a leeward one.', tags: ['beginner'] },
  { term: 'Yachtmaster', def: 'The RYA’s senior qualification, taken as an examination after qualifying sea time rather than as a course. Commercially endorsed, it is the prerequisite AMSA names for its Sailing Master certificates.', href: '/rya/yachtmaster/', tags: ['qualification'] },
];

const key = (t: GlossaryTerm) => (t.sort ?? t.term).toLocaleUpperCase('en-AU');

export const glossarySorted = [...glossary].sort((a, b) => key(a).localeCompare(key(b), 'en-AU'));

/** Letters that actually have entries — the jump bar should not offer an empty Z. */
export const glossaryLetters = [...new Set(glossarySorted.map((t) => key(t)[0]))];

export const glossaryByLetter = glossaryLetters.map((letter) => ({
  letter,
  terms: glossarySorted.filter((t) => key(t)[0] === letter),
}));
