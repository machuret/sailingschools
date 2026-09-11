'use client';

import { useState } from 'react';

/**
 * The points of sail, as a dial you can drive.
 *
 * Every sailing school draws this diagram on a whiteboard in the first hour, and every
 * version online is a flat JPEG. Made interactive it does the one thing the static
 * version cannot: show the sail easing as the boat bears away, which is the entire point
 * the diagram exists to make.
 *
 * Wind blows down the page from the top. `angle` is degrees off the wind; `side` is which
 * tack, which only mirrors the drawing.
 */

type Point = {
  angle: number;
  name: string;
  short: string;
  trim: string;
  note: string;
};

const POINTS: Point[] = [
  {
    angle: 0,
    name: 'In irons',
    short: 'Head to wind',
    trim: 'Sails flogging, no drive',
    note: 'Not a point of sail — it is the absence of one. Pointed straight at the wind the sails luff, the boat stops and the rudder does nothing. Getting out means backing a sail to push the bow onto one tack or the other.',
  },
  {
    angle: 45,
    name: 'Close hauled',
    short: '45° off the wind',
    trim: 'Sheeted in hard, boom near the centreline',
    note: 'As close to the wind as the boat will go while still driving. The edge of the no-go zone, and where a boat feels most alive and most demanding — steer two degrees too high and the sails start to lift.',
  },
  {
    angle: 70,
    name: 'Close reach',
    short: '70° off the wind',
    trim: 'Sheets eased a little from close hauled',
    note: 'Between close hauled and a beam reach. Faster and more forgiving than close hauled, and the point of sail most beginners are quietly steering on when they think they are pointing higher.',
  },
  {
    angle: 90,
    name: 'Beam reach',
    short: 'Wind across the beam',
    trim: 'Boom around 45° out',
    note: 'The fastest and easiest point of sail for most boats. Wind square on the side, sails at about halfway out, boat upright and tracking. If you are teaching someone to helm, this is where you start.',
  },
  {
    angle: 135,
    name: 'Broad reach',
    short: '135° off the wind',
    trim: 'Boom well out, spinnaker country',
    note: 'Wind over the quarter. Quick, comfortable, and where an asymmetric spinnaker earns its keep. Watch the boom: a gybe from here is unplanned and expensive.',
  },
  {
    angle: 180,
    name: 'Run',
    short: 'Dead downwind',
    trim: 'Boom right out, main blanketing the headsail',
    note: 'Wind directly astern. It feels calm because the apparent wind has dropped by your own boat speed — which is exactly why it is the point of sail where people get hurt. Rig a preventer and watch for a gybe.',
  },
];

const CX = 300;
const CY = 300;
const R = 214;

const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
const pt = (deg: number, r: number) => [CX + Math.cos(rad(deg)) * r, CY + Math.sin(rad(deg)) * r];
const f = (n: number) => Math.round(n * 10) / 10;

/** Wedge from a1 to a2 degrees, measured clockwise from straight up. */
const wedge = (a1: number, a2: number, r0: number, r1: number) => {
  const [x1, y1] = pt(a1, r1);
  const [x2, y2] = pt(a2, r1);
  const [x3, y3] = pt(a2, r0);
  const [x4, y4] = pt(a1, r0);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  return `M${f(x1)} ${f(y1)}A${r1} ${r1} 0 ${large} 1 ${f(x2)} ${f(y2)}L${f(x3)} ${f(y3)}A${r0} ${r0} 0 ${large} 0 ${f(x4)} ${f(y4)}Z`;
};

/** Boom angle off the centreline for a given angle off the wind. */
const boomAngle = (a: number) => (a <= 45 ? 6 : Math.min(86, (a - 45) * 0.55 + 10));

export default function PointsOfSail() {
  const [i, setI] = useState(3);
  const [starboard, setStarboard] = useState(true);
  const p = POINTS[i];

  const dir = starboard ? 1 : -1;
  const heading = p.angle * dir;
  const boom = boomAngle(p.angle) * -dir;

  return (
    <div className="pos">
      <div className="pos-dial">
        <svg viewBox="0 0 600 600" role="img" aria-label={`Points of sail diagram, showing ${p.name}`}>
          {/* wind streaming down the page */}
          <g className="pos-wind" aria-hidden="true">
            {[70, 150, 300, 450, 530].map((x, n) => (
              <path key={x} d={`M${x} 14 v${n === 2 ? 70 : 52}`} style={{ animationDelay: `${n * 0.45}s` }} />
            ))}
            <path d="M300 92 l-8 -12 M300 92 l8 -12" className="pos-windhead" />
          </g>
          <text x="300" y="10" className="pos-windlabel" textAnchor="middle">
            WIND
          </text>

          {/* the no-go zone */}
          <path d={wedge(-45, 45, 0, R)} className="pos-nogo" />
          <text x="300" y="150" className="pos-nogo-l" textAnchor="middle">
            NO-GO ZONE
          </text>

          {/* sector rings, both tacks */}
          {POINTS.slice(1).map((q, n) => {
            const prev = POINTS[n].angle;
            const a0 = (prev + q.angle) / 2;
            const a1 = n === POINTS.length - 2 ? 180 : (q.angle + POINTS[n + 2].angle) / 2;
            const on = i === n + 1;
            return (
              <g key={q.angle}>
                <path d={wedge(a0, a1, R - 54, R)} className={on ? 'pos-sector on' : 'pos-sector'} />
                <path d={wedge(-a1, -a0, R - 54, R)} className={on ? 'pos-sector on' : 'pos-sector'} />
              </g>
            );
          })}

          {/* ticks every 15° */}
          <g className="pos-ticks" aria-hidden="true">
            {Array.from({ length: 24 }, (_, n) => {
              const a = n * 15;
              const [x1, y1] = pt(a, R);
              const [x2, y2] = pt(a, R + (n % 2 === 0 ? 11 : 6));
              return <line key={a} x1={f(x1)} y1={f(y1)} x2={f(x2)} y2={f(y2)} />;
            })}
          </g>
          <circle cx={CX} cy={CY} r={R} className="pos-rim" />
          <circle cx={CX} cy={CY} r={R - 54} className="pos-rim faint" />

          {/* the boat, seen from above: bow up, transom square, mast a third aft */}
          <g className="pos-boat" style={{ transform: `rotate(${heading}deg) scale(1.42)`, transformOrigin: '300px 300px' }}>
            <path
              d="M300 244 C313 270, 318 304, 317 340 L317 352 L283 352 L283 340 C282 304, 287 270, 300 244 Z"
              className="pos-hull"
            />
            <path d="M300 256 C308 276, 311 304, 310 340 L290 340 C289 304, 292 276, 300 256 Z" className="pos-deck" />
            {/* the rig pivots about the mast; the sail's camber is a fixed shape carried
                round by that rotation, so it always bellies to leeward */}
            <g style={{ transform: `rotate(${boom}deg)`, transformOrigin: '300px 278px' }} className="pos-rig">
              <path d="M300 278 C322 297, 323 321, 300 342 Z" className="pos-sail" />
              <line x1="300" y1="278" x2="300" y2="342" className="pos-boom" />
              <circle cx="300" cy="342" r="3" className="pos-clew" />
            </g>
            <circle cx="300" cy="278" r="4.5" className="pos-pivot" />
          </g>

          {/* clickable heading markers */}
          {POINTS.map((q, n) => {
            if (n === 0) return null;
            const [x, y] = pt(q.angle * dir, R - 27);
            return (
              <g
                key={q.angle}
                className="pos-knob-g"
                role="button"
                tabIndex={0}
                aria-label={q.name}
                aria-pressed={i === n}
                onClick={() => setI(n)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setI(n);
                  }
                }}
              >
                <circle cx={f(x)} cy={f(y)} r="15" className={i === n ? 'pos-knob on' : 'pos-knob'} />
                <text x={f(x)} y={f(y) + 4} className="pos-knob-t" textAnchor="middle">
                  {q.angle}°
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="pos-panel">
        <div className="pos-tabs" role="tablist" aria-label="Points of sail">
          {POINTS.map((q, n) => (
            <button
              key={q.name}
              role="tab"
              type="button"
              aria-selected={i === n}
              className={i === n ? 'pos-tab on' : 'pos-tab'}
              onClick={() => setI(n)}
            >
              {q.name}
            </button>
          ))}
        </div>

        <h3 className="h3">{p.name}</h3>
        <p className="pos-short">{p.short}</p>
        <p className="copy">{p.note}</p>

        <dl className="pos-trim">
          <dt>Sail trim</dt>
          <dd>{p.trim}</dd>
        </dl>

        <button type="button" className="pill pill-outline pos-tack" onClick={() => setStarboard((s) => !s)}>
          <i className="ph-duotone ph-arrows-clockwise" aria-hidden="true" /> Tack — showing{' '}
          {starboard ? 'starboard' : 'port'}
        </button>
      </div>
    </div>
  );
}
