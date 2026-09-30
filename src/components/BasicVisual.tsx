import BasicConcept from './BasicConcept';
export default function BasicVisual({ slug, memory }: { slug: string; memory: string[] }) {
  return <figure className="basic-visual">
    {slug === 'parts-of-a-sailing-boat' && <svg viewBox="0 0 560 300" role="img" aria-label="Side view of a sailing boat: mast upright, boom horizontal, hull at the water, keel below and rudder at the stern.">
      <path d="M100 215 L450 215 L410 252 L135 252 Z" fill="#123653"/><path d="M255 252 L290 252 L275 290 L245 290Z" fill="#00a0ae"/>
      <path d="M155 250 L155 278" stroke="#123653" strokeWidth="10"/><path d="M260 215 V30 M260 190 H150" stroke="#123653" strokeWidth="7"/>
      <path d="M250 45 L160 179 L250 179Z M272 65 L410 197 L272 197Z" fill="#c4edf0" stroke="#078494" strokeWidth="2"/>
      <g fontSize="17" fill="#123653" fontFamily="sans-serif"><text x="278" y="35">Mast</text><text x="70" y="181">Boom</text><text x="455" y="230">Hull</text><text x="298" y="282">Keel</text><text x="65" y="287">Rudder</text></g>
    </svg>}
    {slug === 'port-starboard-bow-stern' && <svg viewBox="0 0 560 300" role="img" aria-label="Top view facing the bow: port on the left, starboard on the right, bow at the top and stern at the bottom.">
      <path d="M280 50 Q370 130 330 247 H230 Q190 130 280 50Z" fill="#c4edf0" stroke="#123653" strokeWidth="3"/>
      <path d="M280 208 V112 L270 130 M280 112 L290 130" stroke="#078494" strokeWidth="4" fill="none"/>
      <g fontSize="20" fill="#123653" fontFamily="sans-serif" textAnchor="middle"><text x="280" y="30">Bow</text><text x="280" y="282">Stern</text><text x="120" y="160">Port</text><text x="440" y="160">Starboard</text></g>
    </svg>}
    <BasicConcept slug={slug} />
    <figcaption><span className="kicker">Remember these three things</span><ol className="basic-memory">{memory.map((item, i) => <li key={item}><span aria-hidden="true">0{i + 1}</span>{item}</li>)}</ol></figcaption>
  </figure>;
}
