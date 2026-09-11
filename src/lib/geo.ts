/**
 * Where the directory map draws each label.
 *
 * City coordinates are the training water rather than the CBD — the Whitsundays marker
 * sits on Airlie Beach, not on the centroid of the island group — and the state counts are
 * placed inland, clear of the coastal markers. Shared so the home page and the directory
 * cannot drift apart.
 */
import { cities } from './cities';
import { states } from './states';
import { schoolsInState } from './schools';

const CITY_POINTS: Record<string, { lon: number; lat: number; anchor?: 'end' }> = {
  sydney: { lon: 151.25, lat: -33.87 },
  melbourne: { lon: 144.95, lat: -37.85, anchor: 'end' },
  brisbane: { lon: 153.1, lat: -27.45, anchor: 'end' },
  perth: { lon: 115.75, lat: -32.05, anchor: 'end' },
  whitsundays: { lon: 148.7, lat: -20.27, anchor: 'end' },
  adelaide: { lon: 138.6, lat: -34.93, anchor: 'end' },
  hobart: { lon: 147.33, lat: -42.88 },
};

const STATE_POINTS: Record<string, { lon: number; lat: number }> = {
  'new-south-wales': { lon: 146.3, lat: -31.6 },
  queensland: { lon: 144, lat: -22.5 },
  victoria: { lon: 142.8, lat: -36.5 },
  'western-australia': { lon: 121, lat: -25.5 },
  'south-australia': { lon: 135, lat: -29.5 },
  tasmania: { lon: 144.3, lat: -42.9 },
};

export const mapMarkers = cities
  .filter((c) => CITY_POINTS[c.slug])
  .map((c) => ({
    name: c.name.replace(/^the /, ''),
    href: `/sailing-schools/${c.state}/${c.slug}/`,
    count: 0,
    ...CITY_POINTS[c.slug],
  }));

export const mapRegions = states
  .filter((s) => STATE_POINTS[s.key])
  .map((s) => ({
    key: s.key,
    name: s.name === 'New South Wales' ? 'NSW' : s.name,
    href: `/sailing-schools/${s.key}/`,
    count: schoolsInState(s.key).length,
    ...STATE_POINTS[s.key],
  }));
