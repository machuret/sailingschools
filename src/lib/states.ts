import type { StateKey } from './schools';

export type StateRecord = {
  key: StateKey;
  name: string;
  /** Part 19 title framework: head term first, qualifying terms after the pipe. */
  title: string;
  description: string;
  /** Training waters — geography, not claims about any particular school. */
  waters: string;
  /** Training regions named in the site architecture. */
  regions: string[];

};

export const states: StateRecord[] = [
  {
    key: 'new-south-wales',
    name: 'New South Wales',
    title: 'Sailing Schools NSW | Sydney, Pittwater & Botany Bay',
    description:
      'Sailing schools across New South Wales — Sydney Harbour, Middle Harbour, Pittwater and Botany Bay. Beginner, keelboat, RYA and IYT yacht training.',
    waters:
      'New South Wales holds the largest concentration of sailing training in the country. Sydney Harbour is confined water with heavy commercial traffic, which teaches collision regulations and pilotage quickly, and the Heads give coastal access when conditions allow. An hour north, Pittwater and Broken Bay offer sheltered water for first lessons and anchoring practice; Botany Bay serves the southern suburbs with more open conditions.',
    regions: ['Sydney Harbour', 'Middle Harbour', 'Pittwater', 'Broken Bay', 'Botany Bay'],
  },
  {
    key: 'queensland',
    name: 'Queensland',
    title: 'Sailing Schools Queensland | Brisbane & Whitsundays',
    description:
      'Sailing schools in Queensland — Moreton Bay, the Sunshine Coast, the Whitsundays and Hervey Bay. Yacht training, catamaran courses and charter preparation.',
    waters:
      'Queensland covers the widest range of training water of any state. Moreton Bay gives Brisbane sheltered, shallow sailing behind its sand islands. Further north, the Whitsundays are Australia’s best-known bareboat charter ground, so training there tends toward charter preparation, catamaran handling and anchoring rather than club racing. Warm water and a long season make Queensland a common choice for liveaboard courses.',
    regions: ['Brisbane', 'Moreton Bay', 'Sunshine Coast', 'Mooloolaba', 'Whitsundays', 'Airlie Beach', 'Hervey Bay'],
  },
  {
    key: 'victoria',
    name: 'Victoria',
    title: 'Sailing Schools Victoria | Melbourne & Port Phillip',
    description:
      'Sailing schools in Victoria — Melbourne and Port Phillip. Learn to sail, keelboat and yacht training, RYA courses and Yachtmaster preparation.',
    waters:
      'Almost all Victorian training happens on Port Phillip, an enclosed bay large enough to lose sight of land in. It is demanding water to learn on: a short, steep chop builds quickly in a southerly, the tidal streams through the Heads at Port Phillip Bay’s entrance are among the strongest in the country, and the weather changes fast. Sailors trained there tend to arrive well prepared for coastal passages.',
    regions: ['Melbourne', 'Port Phillip'],
  },
  {
    key: 'western-australia',
    name: 'Western Australia',
    title: 'Sailing Schools WA | Perth, Fremantle & Geographe Bay',
    description:
      'Sailing schools in Western Australia — Perth, Fremantle, Cockburn Sound and Geographe Bay. RYA yacht training, keelboat courses and navigation.',
    waters:
      'Perth and Fremantle sail in reliably strong afternoon sea breeze — the Fremantle Doctor — which makes for excellent boat-handling practice and unforgiving conditions for beginners who start late in the day. Cockburn Sound gives more protected water south of Fremantle, and Geographe Bay near Busselton offers a gentler alternative several hours further south.',
    regions: ['Perth', 'Fremantle', 'Cockburn Sound', 'Busselton', 'Geographe Bay'],
  },
  {
    key: 'south-australia',
    name: 'South Australia',
    title: 'Sailing Schools Adelaide | Learn to Sail South Australia',
    description:
      'Sailing schools in South Australia — Adelaide and Gulf St Vincent. Learn-to-sail courses, keelboat training and yacht instruction in sheltered gulf waters.',
    waters:
      'Adelaide sails on Gulf St Vincent, a large, comparatively sheltered body of water with a gentle sea breeze pattern through summer. It is forgiving water to learn in, and the training market is correspondingly small — most South Australian sailors travelling further up the qualification ladder do at least part of it interstate.',
    regions: ['Adelaide', 'Gulf St Vincent'],
  },
  {
    key: 'tasmania',
    name: 'Tasmania',
    title: 'Sailing Schools Hobart | Sailing Courses Tasmania',
    description:
      'Sailing schools in Tasmania — Hobart, the Derwent and the D’Entrecasteaux Channel. Learn to sail, yacht training and coastal sailing in southern waters.',
    waters:
      'Hobart sails the Derwent estuary and the D’Entrecasteaux Channel, with Storm Bay and the Southern Ocean beyond. It is cold-water, high-latitude sailing with real weather, and the shortest-notice conditions of anywhere in the country. Tasmania is a small training market that produces disproportionately capable sailors.',
    regions: ['Hobart', 'Derwent', 'D’Entrecasteaux Channel'],
  },
];

export const stateByKey = (key: string) => states.find((s) => s.key === key);
