'use client';

import Link from 'next/link';
import { useState } from 'react';
import { states } from '@/lib/states';

/**
 * The course finder.
 *
 * The previous version showed all three questions at once with defaults pre-selected, so
 * it answered itself before the reader had engaged with it — and its location field was a
 * text input that did nothing next to a button hardcoded to Sydney. A control that does
 * nothing is worse than no control.
 *
 * This asks one question at a time, full width, and only shows a result once all three are
 * answered. Every course named links to the page for that course rather than to a default.
 */

type Experience = 'never' | 'crew' | 'skipper';
type Boat = 'dinghy' | 'keelboat' | 'mono' | 'cat' | 'racing' | 'own';
type Goal = 'fun' | 'crew' | 'skipper' | 'charter' | 'offshore' | 'yachtmaster' | 'work';

type Course = { name: string; meta: string; href: string };
const C = (name: string, meta: string, href: string): Course => ({ name, meta, href });

const START: Record<Experience, Record<Boat, Course[]>> = {
  never: {
    dinghy: [
      C('Australian Sailing dinghy courses', 'club-based, widest availability', '/australian-sailing/dinghy/'),
      C('RYA Start Sailing (Dinghy Level 1)', '2 days, no experience', '/rya/start-sailing/'),
      C('A taster day first', 'one afternoon, find out if you like it', '/courses/sailing-taster/'),
    ],
    keelboat: [
      C('A taster day', 'the cheapest way to find out', '/courses/sailing-taster/'),
      C('Australian Sailing keelboat courses', 'crewing then helming', '/australian-sailing/keelboat/'),
      C('RYA Keelboat Start Sailing', 'stable boat, no capsize', '/rya/keelboat-start-sailing/'),
    ],
    mono: [
      C('RYA Competent Crew', '5 days, no experience required', '/rya/competent-crew/'),
      C('RYA Start Yachting', '2 days, optional taster', '/rya/start-yachting/'),
      C('IYT International Crew', 'the IYT equivalent', '/iyt/international-crew/'),
    ],
    cat: [
      C('RYA Competent Crew', 'learn the boat first', '/rya/competent-crew/'),
      C('IYT International Crew', 'IYT’s crew certificate', '/iyt/international-crew/'),
      C('Then a catamaran conversion', 'after crew skills, not before', '/courses/catamaran-sailing/'),
    ],
    racing: [
      C('Australian Sailing keelboat courses', 'enough to be useful on a boat', '/australian-sailing/keelboat/'),
      C('RYA Basic Skills (Dinghy Level 2)', 'fastest route to real boat feel', '/rya/basic-skills/'),
      C('Then join a club crew list', 'the actual way in', '/pathways/race-with-a-club/'),
    ],
    own: [
      C('Own-boat tuition', 'an instructor on your vessel, in your berth', '/courses/own-boat-tuition/'),
      C('RYA Competent Crew', 'if you want the structure first', '/rya/competent-crew/'),
      C('Check your state boat licence', 'separate from any certificate', '/learn/boat-licence/'),
    ],
  },
  crew: {
    dinghy: [
      C('RYA Basic Skills (Dinghy Level 2)', 'sail unaided, capsize recovery', '/rya/basic-skills/'),
      C('RYA Improving Sailing Skills (Level 3)', 'stronger winds', '/rya/improving-sailing-skills/'),
    ],
    keelboat: [
      C('RYA Keelboat Basic Skills', 'from crewing to helming', '/rya/keelboat-basic-skills/'),
      C('Australian Sailing keelboat courses', 'the club pathway', '/australian-sailing/keelboat/'),
    ],
    mono: [
      C('RYA Day Skipper Theory', '40 hours — do this first', '/rya/day-skipper-theory/'),
      C('RYA Day Skipper Practical', '5 days, first command', '/rya/day-skipper-practical/'),
      C('IYT Flotilla Skipper', 'the IYT step up', '/iyt/flotilla-skipper/'),
    ],
    cat: [
      C('RYA Day Skipper Theory', 'the navigation comes first', '/rya/day-skipper-theory/'),
      C('IYT Catamaran certificates', 'multihull-specific at each level', '/iyt/catamaran/'),
      C('Catamaran handling', 'windage, twin engines, no heel', '/courses/catamaran-sailing/'),
    ],
    racing: [
      C('RYA Sailing with Spinnakers', 'the skill that gets you asked back', '/rya/sailing-with-spinnakers/'),
      C('Get on a club crew list', 'reliability beats skill', '/pathways/race-with-a-club/'),
    ],
    own: [
      C('Own-boat tuition', 'on your boat, in your berth', '/courses/own-boat-tuition/'),
      C('RYA Day Skipper Theory', 'navigation you will actually use', '/rya/day-skipper-theory/'),
      C('Diesel engine course', 'most call-outs are engines, not sails', '/courses/diesel-engine/'),
    ],
  },
  skipper: {
    dinghy: [
      C('RYA Seamanship Skills', 'when things go wrong', '/rya/seamanship-skills/'),
      C('RYA Performance Sailing', 'trapeze, planing, fast boats', '/rya/performance-sailing/'),
    ],
    keelboat: [
      C('RYA Keelboat Advanced Sailing', 'stronger winds, spinnakers', '/rya/keelboat-advanced-sailing/'),
      C('Club racing', 'compresses years into a season', '/pathways/race-with-a-club/'),
    ],
    mono: [
      C('Coastal Skipper / Yachtmaster Theory', 'the advanced shorebased course', '/rya/coastal-skipper-yachtmaster-theory/'),
      C('RYA Coastal Skipper Practical', '5 days', '/rya/coastal-skipper-practical/'),
      C('IYT Bareboat Skipper', 'the IYT charter certificate', '/iyt/bareboat-skipper/'),
    ],
    cat: [
      C('IYT Catamaran certificates', 'skipper level, multihull-specific', '/iyt/catamaran/'),
      C('Catamaran handling', 'the conversion, properly', '/courses/catamaran-sailing/'),
      C('ASA 114 Cruising Catamaran', 'limited Australian availability', '/asa/asa-114/'),
    ],
    racing: [
      C('Sail trim and boat speed', 'where races are actually won', '/courses/sail-trim/'),
      C('Offshore racing', 'category requirements and sea survival', '/pathways/offshore-passage/'),
    ],
    own: [
      C('Own-boat tuition', 'docking, systems, short-handed work', '/courses/own-boat-tuition/'),
      C('Diesel engine', 'one day, pays for itself once', '/courses/diesel-engine/'),
      C('Marine electrics', 'the other half of the systems problem', '/courses/marine-electrics/'),
    ],
  },
};

const NEXT: Record<Goal, Course[]> = {
  fun: [
    C('Keep sailing', 'club days, taster days, crewing', '/pathways/race-with-a-club/'),
    C('Points of sail', 'the thing worth understanding properly', '/learn/points-of-sail/'),
  ],
  crew: [
    C('RYA Competent Crew', 'the crew certificate skippers recognise', '/rya/competent-crew/'),
    C('Get on a club crew list', 'boats are short of crew, not the reverse', '/pathways/race-with-a-club/'),
  ],
  skipper: [
    C('RYA Day Skipper', 'theory then practical, in that order', '/rya/day-skipper-practical/'),
    C('Competent Crew vs Day Skipper', 'which one you actually need', '/compare/competent-crew-vs-day-skipper/'),
  ],
  charter: [
    C('The charter pathway', 'what operators actually ask for', '/pathways/charter-a-yacht/'),
    C('Charter preparation', 'the course, and the résumé', '/courses/charter-preparation/'),
    C('ICC, if you are going overseas', 'not needed inside Australia', '/iyt/icc/'),
  ],
  offshore: [
    C('Safety and sea survival', 'required for most offshore racing', '/australian-sailing/safety-sea-survival/'),
    C('Marine radio', 'SROCP or LROCP', '/courses/marine-radio/'),
    C('Mile building', 'the part no course can sell you', '/courses/mile-building/'),
  ],
  yachtmaster: [
    C('Coastal / Yachtmaster Theory', 'the advanced shorebased course', '/rya/coastal-skipper-yachtmaster-theory/'),
    C('RYA Yachtmaster', 'an examination, not a course', '/rya/yachtmaster/'),
    C('Day Skipper vs Yachtmaster', 'how far apart they really are', '/compare/day-skipper-vs-yachtmaster/'),
  ],
  work: [
    C('AMSA sailing certificates', 'read this before spending anything', '/learn/amsa-sailing-certificates/'),
    C('The commercial pathway', 'what transfers and what does not', '/pathways/work-on-boats/'),
    C('SROCP marine radio', 'required for Sailing Master Coastal', '/courses/marine-radio/'),
  ],
};

const Q1: { v: Experience; label: string; note: string }[] = [
  { v: 'never', label: 'Never', note: 'Or only as a guest on someone else’s boat' },
  { v: 'crew', label: 'As crew', note: 'I can be useful, but I don’t take the decisions' },
  { v: 'skipper', label: 'I skipper', note: 'The boat has been my responsibility' },
];
const Q2: { v: Boat; label: string; note: string }[] = [
  { v: 'dinghy', label: 'A dinghy', note: 'Small, fast, and it will tip over' },
  { v: 'keelboat', label: 'A keelboat', note: 'Stable day boat that does not capsize' },
  { v: 'mono', label: 'A cruising yacht', note: 'Monohull, with a cabin and an engine' },
  { v: 'cat', label: 'A catamaran', note: 'Two hulls — what most charter fleets are' },
  { v: 'racing', label: 'A racing boat', note: 'Club racing, as crew or on the helm' },
  { v: 'own', label: 'My own boat', note: 'I already have one, or I am about to' },
];
const Q3: { v: Goal; label: string; note: string }[] = [
  { v: 'fun', label: 'Just enjoy it', note: 'No certificate needed' },
  { v: 'crew', label: 'Be useful crew', note: 'Get invited back onto boats' },
  { v: 'skipper', label: 'Skipper a boat', note: 'Take the decisions myself' },
  { v: 'charter', label: 'Charter a yacht', note: 'Bareboat, here or overseas' },
  { v: 'offshore', label: 'Sail offshore', note: 'Real passages, at night' },
  { v: 'yachtmaster', label: 'Yachtmaster', note: 'The senior qualification' },
  { v: 'work', label: 'Work on boats', note: 'Paid, in Australia' },
];

const BOAT_PHRASE: Record<Boat, string> = {
  dinghy: 'in a dinghy',
  keelboat: 'on a keelboat',
  mono: 'on a cruising yacht',
  cat: 'on a yacht, then convert to catamarans',
  racing: 'on a keelboat',
  own: 'on your own boat',
};
const GOAL_PHRASE: Record<Goal, string> = {
  fun: 'keep sailing for the pleasure of it',
  crew: 'become genuinely useful crew',
  skipper: 'train to skipper',
  charter: 'get charter-ready',
  offshore: 'build toward offshore passages',
  yachtmaster: 'work toward Yachtmaster',
  work: 'follow the AMSA commercial pathway',
};
const BODY: Record<Experience, string> = {
  never:
    'Start as crew on the type of boat you actually want to sail — not the one tradition says you should start on. Get comfortable there, then move to a skipper course.',
  crew: 'You know your way around a boat. The next step is the helm and, soon after, the responsibility — which means the theory course before the practical one.',
  skipper:
    'Another beginner certificate will not help you. Sea time and specialist training will. Check prerequisites before booking anything at this level.',
};

const STEPS = [
  { n: 1, q: 'Have you sailed before?' },
  { n: 2, q: 'What do you want to sail?' },
  { n: 3, q: 'What are you aiming at?' },
] as const;

function CourseList({ courses }: { courses: Course[] }) {
  return (
    <ul className="fx-list">
      {courses.map((c) => (
        <li key={c.name}>
          <Link href={c.href}>{c.name}</Link>
          <span>{c.meta}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CourseFinder() {
  const [step, setStep] = useState(0);
  const [q1, setQ1] = useState<Experience | null>(null);
  const [q2, setQ2] = useState<Boat | null>(null);
  const [q3, setQ3] = useState<Goal | null>(null);

  const done = q1 !== null && q2 !== null && q3 !== null && step >= 3;

  const reset = () => {
    setQ1(null);
    setQ2(null);
    setQ3(null);
    setStep(0);
  };

  if (done) {
    const headline =
      q1 === 'never'
        ? `Learn ${BOAT_PHRASE[q2]}, then ${GOAL_PHRASE[q3]}.`
        : q1 === 'crew'
          ? `Move from crew to helm ${BOAT_PHRASE[q2]}, then ${GOAL_PHRASE[q3]}.`
          : `You already skipper — go straight to ${GOAL_PHRASE[q3]}.`;

    return (
      <section className="sec last">
        <div className="wrap">
          <div className="fx-result">
            <div className="fx-answers">
              {[
                Q1.find((o) => o.v === q1)!.label,
                Q2.find((o) => o.v === q2)!.label,
                Q3.find((o) => o.v === q3)!.label,
              ].map((a, i) => (
                <span className="fx-chip" key={a}>
                  <b>{i + 1}</b>
                  {a}
                </span>
              ))}
              <button type="button" className="fx-again" onClick={reset}>
                Start again
              </button>
            </div>

            <span className="kicker">Your starting point</span>
            <h2 className="h2">{headline}</h2>
            <p className="copy">{BODY[q1]}</p>

            <div className="fx-cols">
              <div>
                <h3 className="fx-h">Start with one of</h3>
                <CourseList courses={START[q1][q2]} />
              </div>
              <div>
                <h3 className="fx-h">Then, toward your goal</h3>
                <CourseList courses={NEXT[q3]} />
              </div>
            </div>

            <h3 className="fx-h" style={{ marginTop: 42 }}>
              Now find a school
            </h3>
            <div className="chain">
              {states.map((s) => (
                <Link className="tag tag-sky" href={`/sailing-schools/${s.key}/`} key={s.key}>
                  {s.name}
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 34 }}>
              <Link className="pill pill-orange" href="/sailing-schools/">
                Browse all schools
              </Link>
              <Link className="pill pill-outline" href="/pathways/">
                See the full pathway
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const current = STEPS[step];
  const pick = <T,>(setter: (v: T) => void) => (v: T) => {
    setter(v);
    setStep((s) => s + 1);
  };

  return (
    <section className="sec last">
      <div className="wrap">
        <div className="fx">
          <div className="fx-progress" role="group" aria-label="Progress">
            {STEPS.map((s, i) => (
              <span
                key={s.n}
                className={i === step ? 'fx-dot on' : i < step ? 'fx-dot done' : 'fx-dot'}
                aria-current={i === step ? 'step' : undefined}
              >
                <b>{s.n}</b>
              </span>
            ))}
            <span className="fx-of">
              Question {current.n} of {STEPS.length}
            </span>
            {step > 0 && (
              <button type="button" className="fx-back" onClick={() => setStep((s) => s - 1)}>
                <i className="ph-duotone ph-arrow-left" aria-hidden="true" /> Back
              </button>
            )}
          </div>

          <h2 className="fx-q">{current.q}</h2>

          <div className="fx-opts" key={step}>
            {step === 0 &&
              Q1.map((o) => (
                <button
                  key={o.v}
                  type="button"
                  className={q1 === o.v ? 'fx-opt on' : 'fx-opt'}
                  onClick={() => pick<Experience>(setQ1)(o.v)}
                >
                  <b>{o.label}</b>
                  <span>{o.note}</span>
                </button>
              ))}
            {step === 1 &&
              Q2.map((o) => (
                <button
                  key={o.v}
                  type="button"
                  className={q2 === o.v ? 'fx-opt on' : 'fx-opt'}
                  onClick={() => pick<Boat>(setQ2)(o.v)}
                >
                  <b>{o.label}</b>
                  <span>{o.note}</span>
                </button>
              ))}
            {step === 2 &&
              Q3.map((o) => (
                <button
                  key={o.v}
                  type="button"
                  className={q3 === o.v ? 'fx-opt on' : 'fx-opt'}
                  onClick={() => pick<Goal>(setQ3)(o.v)}
                >
                  <b>{o.label}</b>
                  <span>{o.note}</span>
                </button>
              ))}
          </div>

          <p className="note" style={{ marginTop: 30 }}>
            Nothing is stored and nothing is sent anywhere. This is three questions and a lookup
            table — it will point you at a starting course, not sell you one.
          </p>
        </div>
      </div>
    </section>
  );
}
