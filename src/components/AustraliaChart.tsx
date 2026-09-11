'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * The directory map, drawn as a chart rather than embedded as an image.
 *
 * The coastline is a coarse trace of real coastal waypoints in degrees, projected here
 * rather than stored as a path, so the geography is legible in the source and the
 * markers — which are actual cities with actual schools — land in the right place by
 * construction instead of by eye.
 *
 * State boundaries are, conveniently, mostly straight lines of latitude and longitude,
 * which is why a map this small can carry them at all.
 */

type Marker = { name: string; href: string; lon: number; lat: number; count: number; anchor?: 'end' };
type Region = { key: string; name: string; href: string; count: number; lon: number; lat: number };

type Props = { markers: Marker[]; regions: Region[] };

/* --- projection: equirectangular, with the longitude scale corrected at mid-latitude --- */
const LON0 = 112.5;
const LAT0 = -9.5;
const KX = 19.8; // px per degree of longitude
const KY = 22; // px per degree of latitude
const W = 870;
const H = 790;
const px = (lon: number) => +((lon - LON0) * KX).toFixed(1);
const py = (lat: number) => +((LAT0 - lat) * KY).toFixed(1);

/** Coastal waypoints, clockwise from Cape York. Coarse on purpose — this is a chart inset. */
const COAST: [number, number][] = [
  [142.5, -10.7], [141.9, -12.6], [141.6, -15.0], [140.8, -17.5], [139.5, -17.7],
  [137.9, -16.5], [136.3, -16.1], [136.8, -12.2], [135.4, -12.2], [133.5, -11.5],
  [130.9, -12.4], [129.6, -14.9], [128.1, -15.4], [125.2, -16.4], [122.2, -18.0],
  [121.0, -19.6], [118.6, -20.3], [115.5, -21.1], [114.1, -21.9], [113.6, -24.9],
  [114.6, -28.8], [115.7, -32.0], [115.1, -34.4], [117.9, -35.0], [121.9, -33.9],
  [125.5, -32.3], [128.9, -31.7], [131.5, -31.5], [133.7, -32.1], [135.9, -34.7],
  [137.5, -33.0], [138.0, -34.2], [138.6, -34.9], [139.9, -36.8], [141.6, -38.3],
  [144.5, -38.4], [146.4, -39.1], [148.0, -37.9], [149.9, -37.5], [150.9, -35.1],
  [151.3, -33.9], [152.9, -31.4], [153.6, -28.7], [153.4, -27.5], [153.2, -25.0],
  [151.3, -23.8], [149.2, -21.1], [147.4, -19.6], [146.0, -18.3], [145.8, -16.9],
  [145.3, -15.5], [143.8, -14.3], [143.5, -12.5],
];

const TASMANIA: [number, number][] = [
  [146.0, -40.7], [147.4, -41.0], [148.3, -40.9], [148.3, -42.6], [147.9, -43.6],
  [146.0, -43.5], [145.2, -42.2], [144.7, -40.9],
];

const poly = (pts: [number, number][]) =>
  `M${pts.map(([lo, la]) => `${px(lo)} ${py(la)}`).join('L')}Z`;

/** State boundaries — lines of latitude and longitude, plus the Murray as two segments. */
const BORDERS: [number, number][][] = [
  [[129, -14.6], [129, -31.7]],            // WA | NT, WA | SA
  [[129, -26], [141, -26]],                // NT/SA | SA/QLD
  [[138, -26], [138, -16.5]],              // NT | QLD
  [[141, -26], [141, -38.2]],              // SA | QLD/NSW/VIC
  [[141, -29], [152.5, -28.6]],            // QLD | NSW
  [[141, -34], [148.2, -36.1]],            // NSW | VIC (the Murray, coarsely)
  [[148.2, -36.1], [149.9, -37.5]],
];

export default function AustraliaChart({ markers, regions }: Props) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="ozmap">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Map of Australia showing where sailing schools are listed">
        <defs>
          <linearGradient id="oz-sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--oz-sea-1)" />
            <stop offset="100%" stopColor="var(--oz-sea-2)" />
          </linearGradient>
          <pattern id="oz-hatch" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="7" stroke="var(--oz-coast)" strokeWidth="1" opacity=".38" />
          </pattern>
        </defs>

        <rect width={W} height={H} fill="url(#oz-sea)" rx="6" />

        {/* graticule, every five degrees */}
        <g className="oz-grid">
          {[115, 120, 125, 130, 135, 140, 145, 150].map((lo) => (
            <line key={lo} x1={px(lo)} y1="0" x2={px(lo)} y2={H} />
          ))}
          {[-15, -20, -25, -30, -35, -40].map((la) => (
            <line key={la} x1="0" y1={py(la)} x2={W} y2={py(la)} />
          ))}
        </g>

        {/* land */}
        <g className="oz-land">
          <path d={poly(COAST)} />
          <path d={poly(TASMANIA)} />
        </g>
        <g className="oz-shelf">
          <path d={poly(COAST)} fill="url(#oz-hatch)" />
          <path d={poly(TASMANIA)} fill="url(#oz-hatch)" />
        </g>
        <g className="oz-coast">
          <path d={poly(COAST)} />
          <path d={poly(TASMANIA)} />
        </g>

        <g className="oz-borders">
          {BORDERS.map((b, i) => (
            <path key={i} d={`M${b.map(([lo, la]) => `${px(lo)} ${py(la)}`).join('L')}`} />
          ))}
        </g>

        {/* region labels — school counts per state */}
        <g className="oz-regions">
          {regions.map((r) => (
            <Link href={r.href} key={r.key} onMouseEnter={() => setActive(r.key)} onMouseLeave={() => setActive(null)}>
              <g className={active === r.key ? 'oz-region on' : 'oz-region'}>
                <text x={px(r.lon)} y={py(r.lat)} className="oz-region-n">
                  {r.count}
                </text>
                <text x={px(r.lon)} y={py(r.lat) + 17} className="oz-region-l">
                  {r.name}
                </text>
              </g>
            </Link>
          ))}
        </g>

        {/* city markers */}
        <g className="oz-marks">
          {markers.map((m) => (
            <Link href={m.href} key={m.name}>
              <g className="oz-mark">
                <circle cx={px(m.lon)} cy={py(m.lat)} r="16" className="oz-halo" />
                <circle cx={px(m.lon)} cy={py(m.lat)} r="5.5" className="oz-dot" />
                <text
                  x={px(m.lon) + (m.anchor === 'end' ? -14 : 14)}
                  y={py(m.lat) + 4.5}
                  textAnchor={m.anchor === 'end' ? 'end' : 'start'}
                  className="oz-label"
                >
                  {m.name}
                </text>
              </g>
            </Link>
          ))}
        </g>

        {/* scale bar and north arrow, because a chart has both */}
        <g className="oz-furniture">
          <path d={`M${px(114)} ${py(-41.5)} h${KX * 5} m0 -5 v10 M${px(114)} ${py(-41.5) - 5} v10`} />
          <text x={px(114)} y={py(-41.5) - 12} className="oz-fine">500 km</text>
          <path d={`M${px(152.8)} ${py(-41)} l0 -34 l-6 10 m6 -10 l6 10`} />
          <text x={px(152.8)} y={py(-41) + 14} textAnchor="middle" className="oz-fine">N</text>
        </g>
      </svg>
    </div>
  );
}
