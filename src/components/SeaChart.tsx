/**
 * SeaChart — the site's signature illustration.
 *
 * Every page had an empty photo slot printing its own art brief, which is the single
 * loudest "unfinished" signal a site can send. Photography is still wanted, but a slot
 * should not sit grey until it arrives.
 *
 * So each slot draws an Admiralty-style chart instead: bathymetric contours, a coastline
 * with a hatched margin, a compass rose throwing rhumb lines across the sheet, soundings,
 * and a dashed track with waypoints. Everything is derived from a string seed, so a given
 * page draws the same chart on every build and no two pages draw the same one.
 *
 * Zero bytes over the wire beyond the markup: no images, no canvas, no client JS.
 */

type Props = {
  /** Anything stable and page-specific. The same seed always draws the same chart. */
  seed: string;
  /** Hero charts are drawn on the dark ground; panel charts on the light one. */
  tone?: 'deep' | 'shallow';
  /** Animate the track and the drift. Off by default; the hero opts in. */
  live?: boolean;
  className?: string;
  /** Described to assistive tech only where the chart is doing decorative work. */
  label?: string;
};

/* ---------- deterministic noise ---------- */

const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

/** mulberry32 — small, fast, and good enough that the blobs do not look like circles. */
const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const r2 = (n: number) => Math.round(n * 100) / 100;

/**
 * Catmull-Rom through the points, converted to cubic beziers, closed. Contours drawn as
 * polygons read as polygons; drawn as splines they read as depth.
 */
const spline = (pts: [number, number][]) => {
  const n = pts.length;
  let d = `M${r2(pts[0][0])} ${r2(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1: [number, number] = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: [number, number] = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${r2(c1[0])} ${r2(c1[1])},${r2(c2[0])} ${r2(c2[1])},${r2(p2[0])} ${r2(p2[1])}`;
  }
  return `${d}Z`;
};

const W = 1200;
const H = 800;

export default function SeaChart({ seed, tone = 'shallow', live = false, className, label }: Props) {
  const rand = rng(hash(seed));
  const uid = `sc${hash(seed).toString(36)}`;

  /* --- bathymetry: six nested contours around an off-centre deep --- */
  const cx = 300 + rand() * 620;
  const cy = 220 + rand() * 380;
  const lobes = 9;
  // One noise value per lobe, reused across rings so the contours nest instead of crossing.
  const wobble = Array.from({ length: lobes }, () => 0.68 + rand() * 0.58);
  const contours = Array.from({ length: 6 }, (_, ring) => {
    const base = 90 + ring * 88;
    const pts = Array.from({ length: lobes }, (_, i): [number, number] => {
      const a = (i / lobes) * Math.PI * 2 + ring * 0.09;
      const rad = base * (0.72 + wobble[i] * 0.4) * (1 + ring * 0.02);
      return [cx + Math.cos(a) * rad * 1.22, cy + Math.sin(a) * rad * 0.82];
    });
    return spline(pts);
  });

  /* --- coastline: anchored off one edge, so the sheet reads as a real chart cut --- */
  const fromLeft = rand() > 0.5;
  const coastPts: [number, number][] = Array.from({ length: 8 }, (_, i) => {
    const t = i / 7;
    const x = (fromLeft ? 1 : -1) * (90 + rand() * 190) + (fromLeft ? 0 : W);
    return [x + Math.sin(t * 5.2) * 40, -60 + t * (H + 120)];
  });
  const coast = `M${fromLeft ? -40 : W + 40} -60 ${coastPts
    .map((p) => `L${r2(p[0])} ${r2(p[1])}`)
    .join(' ')} L${fromLeft ? -40 : W + 40} ${H + 60} Z`;

  /* --- compass rose, with rhumb lines thrown across the whole sheet --- */
  const rx = fromLeft ? 300 + rand() * 180 : 720 + rand() * 180;
  const ry = 480 + rand() * 180;
  const rose = 74;
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return `M${r2(rx)} ${r2(ry)} L${r2(rx + Math.cos(a) * 2000)} ${r2(ry + Math.sin(a) * 2000)}`;
  }).join(' ');
  const star = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const b = a + Math.PI / 8;
    const long = i % 2 === 0 ? rose : rose * 0.62;
    return `M${r2(rx)} ${r2(ry)} L${r2(rx + Math.cos(b) * rose * 0.22)} ${r2(ry + Math.sin(b) * rose * 0.22)} L${r2(rx + Math.cos(a) * long)} ${r2(ry + Math.sin(a) * long)} Z`;
  }).join(' ');

  /* --- the track: a passage across the sheet, with waypoints --- */
  const legs = 5;
  const track: [number, number][] = Array.from({ length: legs }, (_, i) => [
    120 + (i / (legs - 1)) * (W - 240),
    180 + rand() * 460,
  ]);
  let trackD = `M${r2(track[0][0])} ${r2(track[0][1])}`;
  for (let i = 1; i < legs; i++) {
    const p = track[i - 1];
    const q = track[i];
    const mx = (p[0] + q[0]) / 2;
    trackD += `C${r2(mx)} ${r2(p[1])},${r2(mx)} ${r2(q[1])},${r2(q[0])} ${r2(q[1])}`;
  }

  /* --- soundings --- */
  const soundings = Array.from({ length: 46 }, () => ({
    x: r2(rand() * W),
    y: r2(rand() * H),
    r: r2(1.1 + rand() * 1.7),
  }));

  const deep = tone === 'deep';
  const ink = deep ? '#bfe6f5' : '#1a7fc2';
  const land = deep ? '#0b2340' : '#fbf7ea';
  const landInk = deep ? '#26b3c9' : '#c9a86b';

  return (
    <svg
      className={['chart', live ? 'chart-live' : '', className].filter(Boolean).join(' ')}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={`${uid}g`} x1="0" y1="0" x2="1" y2="1">
          {deep ? (
            <>
              <stop offset="0%" stopColor="#0b2340" />
              <stop offset="52%" stopColor="#143d72" />
              <stop offset="100%" stopColor="#1a7fc2" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#eef7fc" />
              <stop offset="100%" stopColor="#d8ecf7" />
            </>
          )}
        </linearGradient>
        <pattern id={`${uid}h`} width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="9" stroke={landInk} strokeWidth="1.1" opacity={deep ? 0.5 : 0.45} />
        </pattern>
        <clipPath id={`${uid}c`}>
          <rect width={W} height={H} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${uid}c)`}>
        <rect width={W} height={H} fill={`url(#${uid}g)`} />

        {/* rhumb lines */}
        <path d={rays} stroke={ink} strokeWidth="0.7" opacity={deep ? 0.16 : 0.2} fill="none" />

        {/* bathymetry */}
        <g className="chart-drift" fill="none" stroke={ink} strokeWidth="1.15">
          {contours.map((d, i) => (
            <path key={i} d={d} opacity={(deep ? 0.3 : 0.36) - i * 0.035} />
          ))}
        </g>

        {/* soundings */}
        <g fill={ink} opacity={deep ? 0.3 : 0.34}>
          {soundings.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} />
          ))}
        </g>

        {/* coastline with a hatched margin */}
        <path d={coast} fill={land} opacity={deep ? 0.62 : 0.9} />
        <path d={coast} fill={`url(#${uid}h)`} opacity="0.5" />
        <path d={coast} fill="none" stroke={landInk} strokeWidth="1.8" opacity={deep ? 0.8 : 0.65} />

        {/* compass rose */}
        <g opacity={deep ? 0.72 : 0.62}>
          <circle cx={rx} cy={ry} r={rose + 16} fill="none" stroke={ink} strokeWidth="1" />
          <circle cx={rx} cy={ry} r={rose + 10} fill="none" stroke={ink} strokeWidth="0.7" />
          <path d={star} fill={ink} opacity="0.45" stroke={ink} strokeWidth="0.8" />
          <circle cx={rx} cy={ry} r="3" fill="#ff5a1f" />
        </g>

        {/* the passage */}
        <g className="chart-track">
          <path
            d={trackD}
            fill="none"
            stroke="#ff5a1f"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="14 11"
            opacity={deep ? 0.92 : 0.8}
          />
          {track.map((p, i) => (
            <circle
              key={i}
              cx={r2(p[0])}
              cy={r2(p[1])}
              r={i === legs - 1 ? 7 : 4.5}
              fill={i === legs - 1 ? '#ff5a1f' : 'none'}
              stroke="#ff5a1f"
              strokeWidth="2.2"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
