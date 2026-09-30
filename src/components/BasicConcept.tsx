type Panel = { icon: 'sail' | 'up' | 'across' | 'turn' | 'boat' | 'eye' | 'talk' | 'rope' | 'check'; title: string; detail: string };
const concepts: Record<string, { title: string; panels: Panel[]; note?: string }> = {
  'sails-sheets-halyards': { title: 'Two ropes, two different jobs', panels: [
    { icon: 'up', title: 'Halyard', detail: 'Raises a sail up the mast.' },
    { icon: 'across', title: 'Sheet', detail: 'Adjusts the sail’s position or angle.' },
  ] },
  'wind-direction': { title: 'A northerly comes FROM north', panels: [
    { icon: 'up', title: 'North: the source', detail: 'The wind is named for where it starts, not where it goes.' },
    { icon: 'across', title: 'South: downwind', detail: 'A northerly flows towards the south.' },
  ], note: 'Direction names describe the source. These symbols are conceptual, not a navigation chart.' },
  'how-sailing-boats-move': { title: 'Air and water work together', panels: [
    { icon: 'sail', title: 'Above the water', detail: 'Airflow acts on the sails and creates a force.' },
    { icon: 'boat', title: 'Below the water', detail: 'The keel or centreboard helps resist sideways movement.' },
  ] },
  'understanding-points-of-sail': { title: 'One wind, different headings', panels: [
    { icon: 'up', title: 'Towards the wind', detail: 'Close-hauled: near the wind, outside the no-go zone.' },
    { icon: 'across', title: 'Across the wind', detail: 'Reaching: the wind comes across the boat.' },
    { icon: 'sail', title: 'Away from the wind', detail: 'Running: travelling downwind.' },
  ], note: 'Names describe relative directions, not exact sail settings. Explore the interactive diagram below.' },
  'tiller-and-wheel': { title: 'Compare the steering controls', panels: [
    { icon: 'across', title: 'Tiller left → bow right', detail: 'A conventional tiller moves opposite to the intended bow turn.' },
    { icon: 'turn', title: 'Wheel right → bow right', detail: 'A conventional wheel turns in the intended direction.' },
  ], note: 'Normal forward movement only. Learn your boat’s arrangement with an instructor.' },
  'tacking-and-gybing': { title: 'Which end crosses the wind?', panels: [
    { icon: 'up', title: 'Tack: the bow', detail: 'The front passes through the wind during the turn.' },
    { icon: 'turn', title: 'Gybe: the stern', detail: 'The rear passes through the wind during a downwind turn.' },
  ], note: 'Both require a prepared crew. Stay clear of the boom and follow the instructor’s sequence.' },
  'sail-trim-basics': { title: 'Adjust, then observe', panels: [
    { icon: 'rope', title: 'Sheet in', detail: 'Bring the sheet in using the demonstrated safe method.' },
    { icon: 'across', title: 'Ease', detail: 'Let the sheet out under control.' },
    { icon: 'eye', title: 'Observe', detail: 'Notice the sail and boat’s response to the change.' },
  ] },
  'sailing-instructions': { title: 'A useful communication sequence', panels: [
    { icon: 'talk', title: '“Stand by…”', detail: 'Prepare for the agreed task.' },
    { icon: 'check', title: 'Confirm readiness', detail: 'Say if you are ready, or explain what is unclear.' },
    { icon: 'up', title: 'Wait for the call', detail: 'Carry out the agreed action when instructed.' },
  ] },
  'beginner-sailing-knots': { title: 'Start with the job, not the knot', panels: [
    { icon: 'rope', title: 'Stop a line end', detail: 'A figure of eight is commonly used as a stopper.' },
    { icon: 'rope', title: 'Form a fixed loop', detail: 'A bowline makes a loop that does not normally tighten.' },
    { icon: 'rope', title: 'Attach around an object', detail: 'A round turn and two half hitches may suit the task.' },
  ], note: 'Rope symbols are not tying instructions. Practise with an instructor and check suitability before use.' },
  'why-boats-heel': { title: 'Boat type changes the balance', panels: [
    { icon: 'boat', title: 'Ballasted monohull', detail: 'The keel’s weight is part of the stability system.' },
    { icon: 'talk', title: 'Small dinghy', detail: 'Crew position and active handling play a larger role.' },
  ], note: 'Multihulls differ again. No boat type is immune to capsize; follow boat-specific instruction.' },
  'moving-around-a-boat': { title: 'Three places to pause and think', panels: [
    { icon: 'boat', title: 'At the boarding gap', detail: 'Wait for instructions; keep limbs out of gaps.' },
    { icon: 'eye', title: 'Before moving', detail: 'Find approved handholds and clear footing.' },
    { icon: 'sail', title: 'Near working equipment', detail: 'Stay clear of the boom and loaded lines.' },
  ] },
  'before-you-leave-the-dock': { title: 'Listen, locate, ask', panels: [
    { icon: 'talk', title: 'Who is in charge?', detail: 'Know the skipper and the agreed calls.' },
    { icon: 'check', title: 'How does it work?', detail: 'Understand the personal safety equipment provided.' },
    { icon: 'eye', title: 'What if something happens?', detail: 'Know who to alert and follow the emergency briefing.' },
  ] },
  'helpful-crew-member': { title: 'A beginner can contribute immediately', panels: [
    { icon: 'talk', title: 'Listen', detail: 'Identify your job and clarify anything uncertain.' },
    { icon: 'eye', title: 'Look', detail: 'Notice and report relevant traffic or hazards.' },
    { icon: 'check', title: 'Confirm', detail: 'Say when a task is complete and ask what is next.' },
  ] },
};

function ConceptIcon({ kind }: { kind: Panel['icon'] }) {
  return <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className="basic-concept-icon" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    {kind === 'sail' && <><path d="M50 12V76H20L50 12Z" fill="#c4edf0"/><path d="M60 27L83 76H60Z"/><path d="M16 83H87L76 92H28Z"/></>}
    {kind === 'up' && <><path d="M50 82V18M30 39L50 18L70 39"/><path d="M19 88H81"/></>}
    {kind === 'across' && <><path d="M15 50H85M65 30L85 50L65 70"/><path d="M15 25H43M15 75H43"/></>}
    {kind === 'turn' && <><path d="M23 71A32 32 0 1 1 78 70M78 48V70H57"/></>}
    {kind === 'boat' && <><path d="M14 40H86L73 62H27Z" fill="#c4edf0"/><path d="M44 62V88L62 62M10 71Q22 64 34 71T58 71T82 71T98 71"/></>}
    {kind === 'eye' && <><path d="M9 50Q50 6 91 50Q50 94 9 50Z" fill="#c4edf0"/><circle cx="50" cy="50" r="13"/></>}
    {kind === 'talk' && <><path d="M15 18H85V69H44L24 85V69H15Z" fill="#c4edf0"/><path d="M30 35H70M30 49H60"/></>}
    {kind === 'rope' && <><path d="M20 86V38C20 4 80 4 80 38C80 74 36 74 36 41C36 21 64 21 64 41V87"/></>}
    {kind === 'check' && <><rect x="18" y="12" width="64" height="78" rx="9" fill="#c4edf0"/><path d="M32 50L45 63L69 35"/></>}
  </svg>;
}

export default function BasicConcept({ slug }: { slug: string }) {
  const concept = concepts[slug];
  if (!concept) return null;
  if (slug === 'wind-direction') return <div className="basic-concept"><h2>A northerly comes FROM north</h2><div className="basic-wind-flow"><strong>North · where the wind comes from</strong><svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M50 10V85M28 63L50 85L72 63" fill="none" stroke="#086976" strokeWidth="5"/></svg><strong>South · where it blows towards</strong></div><p>The arrow shows the airflow, not the boat’s heading. Wind names describe the source.</p></div>;
  return <div className="basic-concept"><h2>{concept.title}</h2><div className="basic-concept-panels">{concept.panels.map(panel => <div key={panel.title}><ConceptIcon kind={panel.icon}/><h3>{panel.title}</h3><p>{panel.detail}</p></div>)}</div>{concept.note && <p className="basic-meta">{concept.note}</p>}</div>;
}
