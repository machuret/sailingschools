'use client';

import Link from 'next/link';
import { useState } from 'react';

type Experience = 'never' | 'crew' | 'skipper';
type Boat = 'dinghy' | 'keelboat' | 'mono' | 'cat' | 'racing' | 'own';
type Goal = 'fun' | 'crew' | 'skipper' | 'charter' | 'offshore' | 'yachtmaster' | 'work';

type Course = { name: string; meta: string; href: string };
const C = (name: string, meta: string, href = '/rya/competent-crew/'): Course => ({
  name,
  meta,
  href,
});

const COURSE = '/rya/competent-crew/';
const COMPARE = '/qualifications/rya-vs-iyt-vs-asa/';

const START: Record<Experience, Record<Boat, Course[]>> = {
  never: {
    dinghy: [
      C('Australian Sailing Start Sailing 1', '~12 hours'),
      C('RYA Dinghy Level 1', '2 days'),
      C('IYT Bronze: Start Sailing', 'varies'),
    ],
    keelboat: [
      C('Discover Sailing Experience', 'taster'),
      C('Start Crewing + Start Helming', '~20 hours'),
      C('ASA 101 Keelboat 1', 'limited availability'),
    ],
    mono: [
      C('RYA Competent Crew', '5 days', COURSE),
      C('RYA Start Yachting', '2 days'),
      C('IYT Introductory Sailing Skills', 'varies'),
    ],
    cat: [
      C('RYA Competent Crew', '5 days', COURSE),
      C('IYT International Crew', 'varies'),
      C('Catamaran conversion', 'after crew skills'),
    ],
    racing: [
      C('Start Crewing + Start Helming', '~20 hours'),
      C('Discover Sailing Experience', 'taster'),
    ],
    own: [
      C('RYA Competent Crew', '5 days', COURSE),
      C('Start Crewing + Start Helming', '~20 hours'),
    ],
  },
  crew: {
    dinghy: [C('Start Sailing 2', '~12 hours'), C('Better Sailing', 'stronger winds')],
    keelboat: [C('Start Helming', 'steering & trim'), C('Start Skippering', 'sheltered command')],
    mono: [
      C('RYA Day Skipper Theory', 'classroom or online'),
      C('RYA Day Skipper Practical', '5 days'),
      C('IYT Flotilla Skipper', 'varies'),
    ],
    cat: [
      C('RYA Day Skipper Practical', '5 days'),
      C('IYT Flotilla Skipper — Catamaran', 'multihull'),
      C('Catamaran handling', 'twin engines'),
    ],
    racing: [C('Spinnakers', '~12 hours'), C('Start Racing', 'rules & tactics')],
    own: [C('Start Skippering / Day Skipper', 'command'), C('Own-boat tuition', 'on your yacht')],
  },
  skipper: {
    dinghy: [C('Better Racing', 'tactics & tuning'), C('Seamanship Skills', 'problem solving')],
    keelboat: [C('Spinnakers', '~12 hours'), C('Start Racing', 'club racing')],
    mono: [
      C('Coastal Skipper Practical', '5 days'),
      C('Coastal / Yachtmaster Offshore Theory', 'advanced'),
      C('IYT Bareboat Skipper', '200 nm + 10 days'),
    ],
    cat: [
      C('IYT Bareboat Skipper — Catamaran', 'multihull'),
      C('ASA 114 Cruising Catamaran', 'limited availability'),
    ],
    racing: [C('Sail trim & boat speed', 'coaching'), C('Regional racing', 'unfamiliar venues')],
    own: [C('Own-boat tuition', 'docking, systems'), C('Marine diesel + electrics', '1 day each')],
  },
};

const NEXT: Record<Goal, Course[]> = {
  fun: [C('Keep sailing — club days, taster days', 'experience')],
  crew: [C('Crew course or Start Crewing', 'be useful aboard')],
  skipper: [C('Start Skippering / Day Skipper', 'take command')],
  charter: [
    C('Day Skipper or Bareboat Skipper', '+ ICC if required'),
    C('Charter preparation', 'optional'),
  ],
  offshore: [
    C('Safety & Sea Survival', '2 days'),
    C('Marine radio + first aid', 'short courses'),
    C('Passage making & night sailing', 'miles'),
  ],
  yachtmaster: [
    C('Coastal / Yachtmaster theory', 'advanced'),
    C('Qualifying sea time', 'then exam', COMPARE),
  ],
  work: [
    C('Check AMSA Sailing Master Coastal first', 'commercial', COMPARE),
    C('SROCP marine radio', 'required'),
  ],
};

const Q1: { v: Experience; label: string }[] = [
  { v: 'never', label: 'No, never' },
  { v: 'crew', label: 'Yes, only as crew' },
  { v: 'skipper', label: 'Yes, I already skipper' },
];
const Q2: { v: Boat; label: string }[] = [
  { v: 'dinghy', label: 'Dinghy' },
  { v: 'keelboat', label: 'Small keelboat' },
  { v: 'mono', label: 'Cruising monohull' },
  { v: 'cat', label: 'Cruising catamaran' },
  { v: 'racing', label: 'Racing yacht' },
  { v: 'own', label: 'My own yacht' },
];
const Q3: { v: Goal; label: string }[] = [
  { v: 'fun', label: 'Fun' },
  { v: 'crew', label: 'Crew' },
  { v: 'skipper', label: 'Skipper' },
  { v: 'charter', label: 'Charter' },
  { v: 'offshore', label: 'Offshore' },
  { v: 'yachtmaster', label: 'Yachtmaster' },
  { v: 'work', label: 'Work' },
];

const BOAT_PHRASE: Record<Boat, string> = {
  dinghy: 'in a dinghy',
  keelboat: 'on a keelboat',
  mono: 'on a cruising yacht',
  cat: 'on a yacht, then convert to catamarans',
  racing: 'on a keelboat',
  own: 'on a school boat first',
};
const GOAL_PHRASE: Record<Goal, string> = {
  fun: 'keep sailing for fun',
  crew: 'become useful crew',
  skipper: 'train to skipper',
  charter: 'train for charter',
  offshore: 'build toward offshore passages',
  yachtmaster: 'work toward Yachtmaster',
  work: 'check the AMSA pathway',
};
const BODY: Record<Experience, string> = {
  never:
    'You have never sailed. Start as crew on the type of boat you actually want to sail — not the one tradition says you should start on. Get comfortable, then move to a skipper course.',
  crew: 'You already know your way around a boat. The next step is taking the helm and, soon after, taking responsibility: a skipper course on your chosen boat type.',
  skipper:
    'Skills courses and sea time matter more than another beginner certificate now. Pick the specialist training that matches your goal, and verify prerequisites before booking.',
};

function CourseList({ courses }: { courses: Course[] }) {
  return (
    <ul>
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
  const [q1, setQ1] = useState<Experience>('never');
  const [q2, setQ2] = useState<Boat>('mono');
  const [q3, setQ3] = useState<Goal>('charter');

  const headline =
    q1 === 'never'
      ? `Learn ${BOAT_PHRASE[q2]}, then ${GOAL_PHRASE[q3]}.`
      : q1 === 'crew'
        ? `Move from crew to helm ${BOAT_PHRASE[q2]}, then ${GOAL_PHRASE[q3]}.`
        : `You already skipper — go straight to ${GOAL_PHRASE[q3]}.`;

  return (
    <section className="sec last">
      <div
        className="wrap split top lean-left"
        style={{ marginTop: 0 }}
      >
        <div>
          <div className="q">
            <span className="kicker">Question 1</span>
            <h3>Have you sailed before?</h3>
            <div className="opts">
              {Q1.map((o) => (
                <button
                  key={o.v}
                  className={`opt${q1 === o.v ? ' on' : ''}`}
                  aria-pressed={q1 === o.v}
                  onClick={() => setQ1(o.v)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <div className="q">
            <span className="kicker">Question 2</span>
            <h3>What boat do you want to sail?</h3>
            <div className="opts">
              {Q2.map((o) => (
                <button
                  key={o.v}
                  className={`opt${q2 === o.v ? ' on' : ''}`}
                  aria-pressed={q2 === o.v}
                  onClick={() => setQ2(o.v)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <div className="q">
            <span className="kicker">Question 3</span>
            <h3>What is your final goal?</h3>
            <div className="opts">
              {Q3.map((o) => (
                <button
                  key={o.v}
                  className={`opt${q3 === o.v ? ' on' : ''}`}
                  aria-pressed={q3 === o.v}
                  onClick={() => setQ3(o.v)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <div className="q">
            <span className="kicker">Optional</span>
            <h3>Where are you?</h3>
            <div className="field">
              <input className="input" placeholder="Suburb, city or state" aria-label="Location" />
              <Link className="pill pill-sky" href="/sailing-schools/new-south-wales/sydney/">
                Schools near me
              </Link>
            </div>
          </div>
        </div>

        <div className="result">
          <span className="kicker">Your starting point</span>
          <h3>{headline}</h3>
          <p className="copy">{BODY[q1]}</p>
          <div className="sub-h">Start with one of</div>
          <CourseList courses={START[q1][q2]} />
          <div className="sub-h">Then</div>
          <CourseList courses={NEXT[q3]} />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
            <Link className="pill pill-orange" href="/sailing-schools/new-south-wales/sydney/">
              Schools near you
            </Link>
            <Link className="pill pill-outline" href="/pathways/complete-beginner/">
              Full pathway
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
