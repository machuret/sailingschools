import type { ReactNode } from 'react';

const ink = '#123653', teal = '#087780';
function Label({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return <text x={x} y={y} textAnchor="middle" fill={ink} fontSize="24" fontWeight="600">{children}</text>;
}
function Arrow({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate})`} stroke={teal} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0 V70 M-12 56 L0 70 L12 56" /></g>;
}
function Boat({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate})`}><path d="M0 -65 Q48 -25 32 55 H-32 Q-48 -25 0 -65Z" fill="#c4edf0" stroke={ink} strokeWidth="4"/><path d="M0 -32 V32" stroke={ink} strokeWidth="4"/><circle r="7" fill={teal}/></g>;
}
function Tile({ x, number, title, detail }: { x: number; number: string; title: string; detail: string }) {
  return <g><rect x={x-82} y="85" width="164" height="190" rx="22" fill="white" stroke="#b7d8df" strokeWidth="2"/><circle cx={x} cy="133" r="26" fill="#c4edf0"/><Label x={x} y={142}>{number}</Label><Label x={x} y={199}>{title}</Label><text x={x} y="238" textAnchor="middle" fill={ink} fontSize="20">{detail}</text></g>;
}
const explanations: Record<string, string> = {
  'parts-of-a-sailing-boat': 'The mast rises above the hull; the boom runs along the foot of the mainsail. Below the water, the keel helps resist sideways movement and the rudder steers.',
  'port-starboard-bow-stern': 'Look towards the bow: port is on your left and starboard is on your right. These boat-side names stay the same whichever way you turn.',
  'sails-sheets-halyards': 'A halyard raises a sail up the mast. A sheet adjusts the sail’s angle. Their names describe their jobs, not simply where the rope is found.',
  'wind-direction': 'A northerly wind comes FROM the north and blows towards the south. Wind direction describes its source, not where the boat is pointing.',
  'how-sailing-boats-move': 'Air acts on the sails above the water. The keel or centreboard resists sideways movement below it. Together these allow the boat to make progress; this is a simplified relationship, not a force diagram.',
  'understanding-points-of-sail': 'Compare the boat’s heading with the wind: towards it at an angle, across it, or away from it. A sailing boat cannot sail directly into the wind. The shaded sector is illustrative; its size varies by boat and conditions.',
  'tiller-and-wheel': 'When moving forwards normally, moving the tiller to port turns the bow to starboard. Turning a conventional wheel to starboard turns the bow to starboard. Make small adjustments.',
  'tacking-and-gybing': 'Both manoeuvres change which side receives the wind. In a tack the bow passes through the wind; in a gybe the stern passes through it. The boom changes sides, so follow the instructor’s briefing.',
  'sail-trim-basics': 'Seen from above, easing the sheet lets the sail move farther out; pulling the sheet in brings it closer to the centreline. The correct angle depends on the wind and your point of sail.',
  'sailing-instructions': '“Stand by” means prepare and listen. Confirm you are ready before acting on the instruction. If a command is unclear, ask rather than guess.',
  'beginner-sailing-knots': 'Choose the knot for the job: a figure-eight can act as a stopper, a bowline creates a fixed loop, and a round turn and two half hitches can secure a line around a suitable object. These are job reminders, not tying instructions.',
  'why-boats-heel': 'Heel is the boat leaning sideways. Wind loading can make a sailing boat heel; the acceptable amount and your response depend on the boat and conditions. Follow your instructor’s direction.',
  'moving-around-a-boat': 'Before moving, identify secure handholds, watch for the boom, and keep clear of rope loops and loaded lines. Ask the skipper where to move on this particular boat.',
  'before-you-leave-the-dock': 'Before departure, know your role, check the safety equipment with the instructor, and understand the plan and conditions. A shared briefing comes before casting off.',
  'helpful-crew-member': 'Listen to the briefing, look around you, and report what you notice clearly. Useful crew communicate early and ask before changing unfamiliar equipment.',
};
function Scene({ slug }: { slug: string }) {
  switch (slug) {
    case 'parts-of-a-sailing-boat': return <>
      <path d="M85 228 H480 L438 265 H115Z" fill={ink}/><path d="M285 265 H330 L314 313 H278Z" fill={teal}/><path d="M125 260 V302 M290 226 V46 M290 202 H175" stroke={ink} strokeWidth="7"/><path d="M280 62 L180 191 H280Z M304 82 L438 213 H304Z" fill="#c4edf0" stroke={teal} strokeWidth="2"/>
      <Label x={341} y={53}>Mast</Label><Label x={122} y={194}>Boom</Label><Label x={505} y={249}>Hull</Label><Label x={361} y={314}>Keel</Label><Label x={118} y={337}>Rudder</Label>
    </>;
    case 'port-starboard-bow-stern': return <><Boat x={300} y={181}/><Arrow x={300} y={210} rotate={180}/><Label x={300} y={67}>Bow · front</Label><Label x={300} y={295}>Stern · back</Label><Label x={117} y={185}>Port · left</Label><Label x={475} y={185}>Starboard</Label></>;
    case 'sails-sheets-halyards': return <><path d="M140 257 V73 M140 233 H73" stroke={ink} strokeWidth="6"/><path d="M130 92 L67 222 H130Z" fill="#c4edf0"/><Arrow x={202} y={230} rotate={180}/><Boat x={428} y={180}/><path d="M428 180 L486 235" stroke={teal} strokeWidth="10"/><path d="M486 235 L428 218" stroke="#ae4c1a" strokeWidth="4"/><Label x={150} y={310}>Halyard: hoist</Label><Label x={435} y={310}>Sheet: angle</Label></>;
    case 'wind-direction': return <><Label x={300} y={57}>North · wind source</Label><Arrow x={190} y={94}/><Arrow x={300} y={94}/><Arrow x={410} y={94}/><Boat x={300} y={230} rotate={90}/><Label x={300} y={330}>South · wind travels here</Label></>;
    case 'how-sailing-boats-move': return <><path d="M70 230 H530" stroke="#79c8d6" strokeWidth="3"/><path d="M235 213 H435 L407 250 H255Z" fill={ink}/><path d="M321 250 H360 L348 310 H312Z" fill={teal}/><path d="M320 210 V67 L411 200 H320" fill="#c4edf0" stroke={ink} strokeWidth="4"/><Arrow x={83} y={144} rotate={-90}/><Label x={157} y={95}>Air + sails</Label><Label x={159} y={298}>Water + keel</Label></>;
    case 'understanding-points-of-sail': return <><path d="M300 191 L233 77 A132 132 0 0 1 367 77Z" fill="#ffe6d4"/><circle cx="300" cy="191" r="122" fill="none" stroke="#b7d8df" strokeWidth="2" strokeDasharray="6 7"/><Arrow x={300} y={18}/><Boat x={204} y={117} rotate={-45}/><Boat x={422} y={191} rotate={90}/><Boat x={300} y={291} rotate={180}/><Label x={119} y={69}>Upwind</Label><Label x={511} y={265}>Across</Label><Label x={123} y={322}>Downwind</Label><text x="300" y="152" textAnchor="middle" fontSize="20" fill={ink}>No-go</text></>;
    case 'tiller-and-wheel': return <><Boat x={150} y={170}/><path d="M150 220 L108 181" stroke="#ae4c1a" strokeWidth="8"/><Arrow x={167} y={69} rotate={-90}/><Boat x={445} y={170}/><circle cx="445" cy="204" r="22" fill="white" stroke="#ae4c1a" strokeWidth="5"/><path d="M445 182 V226 M423 204 H467" stroke="#ae4c1a" strokeWidth="3"/><Arrow x={462} y={69} rotate={-90}/><Label x={150} y={287}>Tiller left</Label><Label x={445} y={287}>Wheel right</Label><Label x={300} y={334}>Both: bow turns right</Label></>;
    case 'tacking-and-gybing': return <><Arrow x={300} y={20}/><Label x={300} y={125}>Wind</Label><Boat x={116} y={169} rotate={-35}/><Boat x={216} y={169} rotate={35}/><path d="M115 84 Q166 36 216 84" fill="none" stroke={teal} strokeWidth="4"/><Boat x={385} y={179} rotate={215}/><Boat x={485} y={179} rotate={145}/><path d="M385 92 Q435 48 485 92" fill="none" stroke={teal} strokeWidth="4"/><Label x={166} y={293}>Tack: bow</Label><Label x={435} y={293}>Gybe: stern</Label><Label x={300} y={335}>passes through the wind</Label></>;
    case 'sail-trim-basics': return <><Boat x={160} y={159}/><Boat x={440} y={159}/><path d="M160 159 L229 193 M440 159 L462 233" stroke={teal} strokeWidth="10" strokeLinecap="round"/><path d="M229 193 L160 212 M462 233 L440 212" stroke="#ae4c1a" strokeWidth="4"/><Label x={160} y={288}>Ease: sail out</Label><Label x={440} y={288}>Sheet in</Label><Label x={300} y={333}>View from above</Label></>;
    case 'sailing-instructions': return <><Tile x={110} number="1" title="Stand by" detail="Prepare"/><Tile x={300} number="2" title="Ready?" detail="Confirm"/><Tile x={490} number="3" title="Go ahead" detail="Then act"/></>;
    case 'beginner-sailing-knots': return <><Tile x={110} number="1" title="Stopper" detail="Figure-eight"/><Tile x={300} number="2" title="Fixed loop" detail="Bowline"/><Tile x={490} number="3" title="Secure" detail="Turn + hitches"/><Label x={300} y={325}>Three jobs · different knots</Label></>;
    case 'why-boats-heel': return <><path d="M50 243 H550" stroke="#79c8d6" strokeWidth="4"/>{[0,24].map((r,i)=><g key={r} transform={`translate(${160+i*280} 243) rotate(${r})`}><path d="M-65 -15 Q0 52 65 -15Z" fill={ink}/><path d="M0 -15 V-154" stroke={ink} strokeWidth="7"/><path d="M8 -138 L54 -26 H8Z" fill="#c4edf0" stroke={teal} strokeWidth="2"/><path d="M0 16 V61" stroke={teal} strokeWidth="10"/></g>)}<Label x={160} y={339}>Upright</Label><Label x={440} y={339}>Heeled</Label></>;
    case 'moving-around-a-boat': return <><path d="M78 185 H188 M95 204 H171" stroke={ink} strokeWidth="12" strokeLinecap="round"/><path d="M256 218 V115 L345 166" fill="none" stroke={ink} strokeWidth="8"/><path d="M284 128 Q369 147 348 222" fill="none" stroke="#ae4c1a" strokeWidth="4" strokeDasharray="6 6"/><path d="M455 221 C405 127 554 109 526 191 C508 238 450 186 524 134" fill="none" stroke={teal} strokeWidth="7"/><Label x={130} y={281}>Handholds</Label><Label x={300} y={281}>Boom</Label><Label x={490} y={281}>Rope loops</Label></>;
    case 'before-you-leave-the-dock': return <><Tile x={110} number="1" title="Your role" detail="Who does what"/><Tile x={300} number="2" title="Equipment" detail="Safety checks"/><Tile x={490} number="3" title="The plan" detail="Briefing first"/></>;
    case 'helpful-crew-member': return <><path d="M150 66 Q300 8 450 66 M450 298 Q300 356 150 298" fill="none" stroke={teal} strokeWidth="4" strokeDasharray="8 8"/><Tile x={110} number="1" title="Listen" detail="Understand"/><Tile x={300} number="2" title="Look" detail="Stay aware"/><Tile x={490} number="3" title="Report" detail="Speak clearly"/></>;
    default: return null;
  }
}
export default function BasicDiagram({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const explanation = explanations[slug];
  if (!explanation) return null;
  return <div className={compact ? 'basic-diagram basic-diagram-thumb' : 'basic-diagram'} data-lesson-diagram={slug}>
    <svg viewBox="0 0 600 360" role={compact ? undefined : 'img'} aria-hidden={compact || undefined} aria-label={compact ? undefined : explanation} fontFamily="system-ui, sans-serif"><rect width="600" height="360" rx="20" fill="#edf6f7"/><Scene slug={slug}/></svg>
    {!compact && <p className="basic-diagram-explanation">{explanation}</p>}
  </div>;
}
