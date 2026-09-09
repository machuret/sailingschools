# SailingSchools.com.au

## Australia's independent guide to sailing schools, sailing courses and sailing qualifications

**Editorial research baseline:** September 2026

SailingSchools.com.au exists to answer three questions:

1. **Where can I learn to sail in Australia?**
2. **Which sailing course should I take?**
3. **What should I learn next?**

The site is not designed as another sailing club directory.

It focuses on:

- dedicated sailing schools
- sailing academies
- yacht training businesses
- independent sailing instructors where appropriate
- RYA Training Centres
- IYT partner schools
- independent Australian Sailing training providers
- specialist marine education providers relevant to sailors
- sailing safety schools
- navigation schools
- marine radio training
- marine diesel training
- offshore training
- racing instruction
- owner training
- charter preparation
- instructor training
- commercial sailing pathways

A sailing school can operate from a yacht club or marina and still qualify for inclusion if the school is a separate training organisation.

Ordinary yacht clubs and sailing clubs are not included in the main school directory simply because they run occasional courses.

---

# PART 1: SITE ARCHITECTURE

The site should be organised around **learning intent**, not simply around school names.

A visitor may search for:

- sailing schools Sydney
- learn to sail Australia
- beginner sailing courses
- RYA courses Australia
- sailing lessons Melbourne
- catamaran sailing course
- how to become a yacht skipper
- RYA Competent Crew Australia
- sailing courses for adults
- sailing courses for kids
- sailing courses for couples
- yacht training
- Yachtmaster Australia
- boat handling course
- sailing navigation course
- Safety and Sea Survival course
- marine radio course
- diesel course for yacht owners
- bareboat charter course
- ICC Australia
- sailing instructor course
- commercial yacht skipper qualification

Each search should have a logical destination.

```text
/
├── sailing-schools/
│   ├── new-south-wales/
│   │   ├── sydney/
│   │   ├── sydney-harbour/
│   │   ├── middle-harbour/
│   │   ├── pittwater/
│   │   ├── broken-bay/
│   │   └── botany-bay/
│   ├── queensland/
│   │   ├── brisbane/
│   │   ├── moreton-bay/
│   │   ├── sunshine-coast/
│   │   ├── mooloolaba/
│   │   ├── whitsundays/
│   │   ├── airlie-beach/
│   │   └── hervey-bay/
│   ├── victoria/
│   │   ├── melbourne/
│   │   └── port-phillip/
│   ├── western-australia/
│   │   ├── perth/
│   │   ├── fremantle/
│   │   ├── busselton/
│   │   └── geographe-bay/
│   ├── south-australia/
│   │   └── adelaide/
│   ├── tasmania/
│   │   └── hobart/
│   ├── northern-territory/
│   │   └── darwin/
│   └── australian-capital-territory/
│       └── canberra/
│
├── schools/
│   └── [school-name]/
│
├── courses/
│   ├── beginner-sailing/
│   ├── learn-to-sail/
│   ├── sailing-lessons/
│   ├── dinghy-sailing/
│   ├── keelboat-sailing/
│   ├── yacht-sailing/
│   ├── cruising-yacht/
│   ├── catamaran-sailing/
│   ├── kids-sailing/
│   ├── teen-sailing/
│   ├── adult-sailing/
│   ├── couples-sailing/
│   ├── women-sailing/
│   ├── private-sailing-lessons/
│   ├── racing/
│   ├── spinnaker/
│   ├── sail-trim/
│   ├── boat-handling/
│   ├── docking-berthing/
│   ├── anchoring/
│   ├── own-boat-tuition/
│   ├── bareboat-charter/
│   ├── charter-preparation/
│   ├── icc-preparation/
│   ├── mile-building/
│   ├── passage-making/
│   ├── night-sailing/
│   ├── coastal-sailing/
│   ├── offshore-sailing/
│   ├── bluewater-sailing/
│   ├── navigation/
│   ├── weather/
│   ├── marine-radio/
│   ├── radar/
│   ├── diesel-engine/
│   ├── marine-electrics/
│   ├── yacht-maintenance/
│   ├── marine-first-aid/
│   ├── safety-sea-survival/
│   ├── powerboat-for-sailors/
│   ├── instructor-courses/
│   └── commercial-sailing/
│
├── australian-sailing/
│   ├── courses/
│   ├── tackers/
│   ├── outthere-sailing/
│   ├── dinghy/
│   ├── keelboat/
│   ├── racing/
│   ├── safety-sea-survival/
│   ├── instructor-courses/
│   └── powerboat/
│
├── rya/
│   ├── courses-australia/
│   ├── sailing-pathway/
│   ├── dinghy/
│   ├── youth-sailing/
│   ├── keelboat/
│   ├── cruising/
│   ├── navigation/
│   ├── specialist-courses/
│   ├── yachtmaster/
│   ├── commercial-endorsement/
│   └── instructors/
│
├── iyt/
│   ├── courses-australia/
│   ├── sailing-pathway/
│   ├── dinghy/
│   ├── crew/
│   ├── skipper/
│   ├── catamaran/
│   ├── yachtmaster/
│   ├── navigation/
│   └── icc/
│
├── asa/
│   ├── courses-australia/
│   ├── asa-101/
│   ├── asa-102/
│   ├── asa-103/
│   ├── asa-104/
│   ├── asa-105/
│   ├── asa-106/
│   ├── asa-107/
│   ├── asa-108/
│   ├── asa-110/
│   ├── asa-114/
│   ├── asa-116/
│   ├── asa-117/
│   ├── asa-118/
│   ├── asa-119/
│   └── asa-120/
│
├── qualifications/
│   ├── sailing-qualifications-australia/
│   ├── australian-sailing-vs-rya/
│   ├── rya-vs-iyt/
│   ├── rya-vs-asa/
│   ├── rya-vs-iyt-vs-asa/
│   ├── international-certificate-of-competence/
│   ├── qualifications-for-chartering/
│   ├── qualifications-for-yacht-ownership/
│   ├── commercial-sailing-qualifications/
│   ├── amsa-sailing-master-coastal/
│   └── amsa-sailing-master-offshore/
│
├── pathways/
│   ├── complete-beginner/
│   ├── child/
│   ├── teenager/
│   ├── adult/
│   ├── cruising-yacht/
│   ├── catamaran/
│   ├── bareboat-charter/
│   ├── offshore-cruising/
│   ├── yachtmaster/
│   ├── yacht-owner/
│   ├── racing/
│   ├── sailing-instructor/
│   └── commercial-skipper/
│
├── learn/
│   ├── how-to-learn-to-sail/
│   ├── how-long-does-it-take/
│   ├── how-much-do-courses-cost/
│   ├── dinghy-vs-keelboat-vs-yacht/
│   ├── monohull-vs-catamaran-training/
│   ├── first-sailing-lesson/
│   ├── what-to-wear/
│   ├── seasickness/
│   ├── sailing-terms/
│   ├── points-of-sail/
│   ├── sail-trim/
│   ├── knots/
│   ├── navigation-basics/
│   ├── weather-basics/
│   ├── tides/
│   ├── colregs/
│   ├── anchoring/
│   ├── reefing/
│   ├── man-overboard/
│   ├── buying-first-yacht/
│   └── preparing-for-charter/
│
├── licences/
│   ├── do-you-need-a-sailing-licence-australia/
│   ├── nsw/
│   ├── queensland/
│   ├── victoria/
│   ├── western-australia/
│   ├── south-australia/
│   ├── tasmania/
│   └── northern-territory/
│
├── find-a-course/
├── compare-sailing-schools/
├── accreditation/
├── how-we-review-schools/
├── update-a-school/
├── glossary/
├── faq/
└── about/
```

---

# PART 2: HOMEPAGE

# PAGE: /

# Sailing Schools Australia

## Find sailing schools, sailing courses and the right path to learn to sail

SailingSchools.com.au is an independent guide to learning to sail in Australia.

Whether you have never stepped aboard a yacht or you are preparing for Yachtmaster, offshore racing, a bareboat charter or yacht ownership, the goal is simple:

**help you work out what to learn, where to learn it and what comes next.**

Australia does not have one single learn-to-sail system.

Students can encounter:

- Australian Sailing
- RYA
- IYT
- American Sailing
- independent school programs
- AMSA commercial qualifications

That can make choosing a first course confusing.

The solution is to begin with your **goal**, not the certificate name.

## What do you want to do?

| Goal | Where to start |
|---|---|
| Try sailing once | Sailing experience, Discover Sailing or taster course |
| Learn in a small boat | Dinghy beginner course |
| Learn on a stable adult training boat | Keelboat beginner course |
| Learn on a cruising yacht | RYA Start Yachting, Competent Crew, IYT beginner yacht course or equivalent |
| Sail with friends | Crew course |
| Helm confidently | Helming course |
| Become a local skipper | Skipper course |
| Buy a yacht | Yacht training plus navigation, radio, diesel, safety and own-boat tuition |
| Charter a yacht | Day Skipper, Bareboat Skipper or equivalent plus charter preparation |
| Charter a catamaran | Multihull-specific skipper training |
| Race | Start Racing then advanced racing and spinnaker training |
| Sail offshore | Navigation, sea survival, first aid, radio, passages and advanced skippering |
| Become Yachtmaster | Structured RYA or IYT advanced pathway plus sea time |
| Teach sailing | Instructor accreditation |
| Work commercially | Work backwards from AMSA certification requirements |

---

# PAGE: /pathways/complete-beginner/

# How to Learn to Sail in Australia From Zero Experience

There is no rule requiring a complete beginner to start in a dinghy.

There are several legitimate starting routes.

```text
I HAVE NEVER SAILED
        |
        +----------------------+
        |                      |
        v                      v
   SMALL BOATS            CRUISING YACHTS
        |                      |
Dinghy / Keelboat        Crew / Yacht Course
        |                      |
        v                      v
Independent sailing      Useful yacht crew
        |                      |
        +----------+-----------+
                   |
                   v
             SKIPPER TRAINING
                   |
                   v
          COASTAL EXPERIENCE
                   |
                   v
      OFFSHORE / ADVANCED TRAINING
```

## Route 1: Start in a dinghy

Best for:

- learning wind awareness
- understanding sail balance
- becoming independent quickly
- youth sailors
- racing
- people who enjoy responsive boats

## Route 2: Start in a keelboat

Best for:

- adults
- people uncomfortable with capsizing
- local yacht racing
- learning crew and helm roles
- people wanting a bridge toward larger yachts

## Route 3: Start directly on a cruising yacht

Best for:

- future yacht owners
- couples planning to cruise
- people preparing for charter holidays
- liveaboard ambitions
- coastal and offshore sailing goals

You do not need to complete Route 1 before Route 3.

---

# THE COMPLETE AUSTRALIAN LEARNING MAP

```text
                            NEVER SAILED
                                 |
             +-------------------+-------------------+
             |                   |                   |
             v                   v                   v
          DINGHY             KEELBOAT         CRUISING YACHT
             |                   |                   |
       Basic sailing        Crew + Helm       Competent Crew
             |                   |                   |
       Better sailing        Skippering        Day Skipper
             |                   |                   |
       Racing / Skills      Racing / Yacht      Coastal Skill
             |                   |                   |
             +-------------------+-------------------+
                                 |
                                 v
                       BUILD REAL EXPERIENCE
                                 |
                  +--------------+--------------+
                  |              |              |
                  v              v              v
               RACING        CHARTERING      CRUISING
                  |              |              |
          Spinnaker / Race   Bareboat / ICC   Navigation
                  |              |              |
                  +--------------+--------------+
                                 |
                                 v
                      COASTAL / OFFSHORE SKILLS
                                 |
       Navigation + Weather + Radio + First Aid + Sea Survival
                                 |
                                 v
                      ADVANCED SKIPPER TRAINING
                                 |
                     +-----------+-----------+
                     |                       |
                     v                       v
                YACHTMASTER             COMMERCIAL
                     |                       |
              Offshore / Ocean        AMSA pathway
```

---

# PART 3: COMPLETE COURSE DIRECTORY

# PAGE: /courses/

# Sailing Courses in Australia

There is far more to sailing education than a single "learn to sail" course.

The Australian market contains courses covering:

## Learn to sail

- sailing experiences
- taster courses
- beginner sailing
- dinghy sailing
- keelboat sailing
- cruising yacht sailing
- crew training
- helming
- skippering

## Children and teenagers

- Little Tackers
- Tackers Intro
- Tackers 1
- Tackers 2
- Tackers 3
- OutThere Sailing
- youth dinghy courses
- youth racing

## Boat-handling development

- sail trim
- advanced sail handling
- spinnakers
- docking
- berthing
- anchoring
- mooring
- short-handed sailing
- heavy-weather preparation
- own-boat handling

## Racing

- introduction to racing
- start racing
- club racing
- regional racing
- championship racing
- racing tactics
- spinnaker handling
- boat speed
- sail trim
- race coaching

## Cruising

- crew courses
- skipper courses
- day sailing
- coastal cruising
- passage-making
- night sailing
- mile building
- offshore sailing
- bluewater sailing

## Charter

- charter preparation
- bareboat skipper
- ICC preparation
- catamaran charter preparation
- Mediterranean charter preparation
- Whitsundays charter training

## Navigation and seamanship

- basic navigation
- Essential Navigation and Seamanship
- Day Skipper Theory
- Coastal Skipper and Yachtmaster Theory
- electronic navigation
- coastal navigation
- celestial navigation
- ocean navigation

## Technical courses

- marine diesel
- diesel maintenance
- marine electrical systems
- yacht repairs
- yacht maintenance
- radar
- weather
- sail systems

## Safety

- marine first aid
- Safety & Sea Survival
- Offshore Personal Survival
- basic sea survival
- marine radio
- emergency communications

## Professional development

- sailing instructor
- dinghy instructor
- keelboat instructor
- racing instructor
- sailing coach
- Safety & Sea Survival instructor
- RYA instructor pathways
- IYT instructor pathways
- commercial skipper training
- AMSA Sailing Master pathways

---

# PART 4: AUSTRALIAN SAILING

# PAGE: /australian-sailing/

# Australian Sailing Courses

Australian Sailing currently separates its national course catalogue into programs including Tackers, OutThere Sailing, Dinghy, Keelboat, Powerboat, Safety & Sea Survival, participation programs, instructor and coach education, officials training and other specialist programs.

For SailingSchools.com.au the core sailing pathways are:

```text
KIDS
Little Tackers
→ Tackers Intro
→ Tackers 1
→ Tackers 2
→ Tackers 3

TEENS
OutThere Experience
→ OutThere 1
→ OutThere 2
→ OutThere 3

DINGHY
Discover / Intro
→ Start Sailing 1
→ Start Sailing 2
→ Better Sailing
→ Start Racing
→ Better Racing

KEELBOAT
Discover Sailing
→ Start Crewing
→ Start Helming
→ Start Skippering
→ Spinnakers
→ Start Racing
```

---

# PAGE: /australian-sailing/tackers/

# Tackers Sailing Courses

Tackers is the Australian Sailing junior pathway.

Current Tackers course listings include:

- Little Tackers
- Tackers Intro
- Tackers 1: Having Fun
- Tackers 2: Tricks & Techniques
- Tackers 3: Sailing Fast!

Australian Sailing describes Tackers 1 as a games-based introduction primarily aimed at children aged 7 to 12, while Tackers 2 and 3 progressively develop independence and sailing technique.

## Tackers Intro

**Purpose:** Try sailing before committing to the full program.

**Typical student:** Child with little or no sailing experience.

**What comes next:** Tackers 1.

## Tackers 1

**Purpose:** Learn basic sailing through games.

Students begin learning:

- steering
- basic knots
- tacking
- gybing
- reaching
- sailing upwind
- sailing downwind

## Tackers 2

Develops:

- independent boat control
- correct tiller-extension use
- sailing a triangular course
- close-hauled sailing
- downwind control
- safer gybing
- manoeuvring

## Tackers 3

Develops:

- roll tacking
- roll gybing
- advanced boat handling
- the five sailing essentials
- tactical mark rounding
- introductory racing skills

---

# PAGE: /australian-sailing/outthere-sailing/

# OutThere Sailing for Teenagers

OutThere Sailing is aimed primarily at teenagers and provides a more social introduction to sailing than a traditional junior racing pathway.

Australian Sailing currently lists OutThere courses for both dinghies and keelboats, including Experience, Levels 1, 2 and 3 and combined programs.

## OutThere Sailing Experience

Short introductory experience.

## OutThere Sailing 1

Introduces sailing while retaining a strong social focus.

## OutThere Sailing 2

Develops skills acquired at Level 1.

## OutThere Sailing 3

Moves participants toward greater sailing independence.

## OutThere Combined

Allows different skill levels to participate in one broader program while progressing individually.

This can suit teenagers who may feel too old for Tackers but are not yet looking for a formal adult qualification.

---

# PAGE: /australian-sailing/dinghy/

# Australian Sailing Dinghy Courses

The current Australian Sailing dinghy catalogue includes:

- Start Sailing Intro
- Discover Sailing Experience
- Start Sailing 1
- Start Sailing 2
- combined Start Sailing 1 and 2
- Better Sailing
- Start Racing
- Better Racing

## Start Sailing Intro

A short introduction before the full pathway.

## Discover Sailing Experience

A taster for someone who wants to experience dinghy sailing before committing to a longer course.

## Start Sailing 1

Australian Sailing recommends around 12 hours.

The course introduces terminology, equipment, basic dinghy sailing, launching, returning and capsize recovery.

## Start Sailing 2

Approximately 12 recommended hours.

The objective is to develop sufficient rigging and boat-handling knowledge to sail the dinghy with increasing independence.

## Combined Start Sailing 1 and 2

Australian Sailing also lists a combined program, with a recommended duration of around 20 hours.

## Better Sailing

Moves beyond beginner skills.

Students develop stronger-wind sailing and may be introduced to equipment such as spinnakers and trapezes.

## Start Racing

Introduces:

- racing procedure
- starts
- boat speed
- racing rules
- tactical awareness

## Better Racing

Develops:

- tactics
- strategy
- wind patterns
- boat tuning
- higher-level racing performance

---

# PAGE: /australian-sailing/keelboat/

# Australian Sailing Keelboat Courses

Current Australian Sailing keelboat courses include:

- Discover Sailing Experience
- Start Crewing
- Start Helming
- Start Crewing and Start Helming combined
- Start Skippering
- Spinnakers
- Start Racing

## Discover Sailing Experience

A low-commitment introduction to keelboat sailing.

## Start Crewing

Introduces:

- boat handling
- safety
- terminology
- sailing theory
- crew roles

## Start Helming

Focuses more heavily on:

- steering
- sail trim
- manoeuvres
- person-overboard recovery
- boat control

## Start Crewing and Start Helming

A combined entry pathway.

Australian Sailing currently recommends about 20 hours for the combined program.

## Start Skippering

Moves from individual sailing skills to command.

Students develop the skills and safety knowledge required to skipper a keelboat independently in sheltered waters.

## Spinnakers

Introduces symmetrical and/or asymmetric spinnaker handling.

Typical development includes:

- rigging
- hoisting
- trimming
- gybing
- dropping
- teamwork

Australian Sailing currently recommends around 12 hours.

## Start Racing

Introduces keelboat racing rules, crew roles, skills and tactics.

Australian Sailing currently lists Start Crewing, Start Helming and Spinnakers-level competence as part of the expected preparation.

---

# PAGE: /australian-sailing/safety-sea-survival/

# Australian Sailing Safety & Sea Survival

Safety & Sea Survival is not a learn-to-sail course.

It teaches sailors how to manage serious emergencies.

Australian Sailing currently describes the full course as approximately 16 hours, normally over two days, including practical exercises with lifejackets, liferafts and distress equipment. The certificate is valid for five years.

Topics can include:

- lifejackets
- liferafts
- distress signals
- emergency equipment
- heavy weather
- abandoning vessel
- crew responsibilities
- survival priorities
- emergency planning

## Safety & Sea Survival Refresher

Australian Sailing also provides a refresher pathway for eligible certificate holders.

The refresher is currently listed as approximately eight hours.

---

# PAGE: /australian-sailing/powerboat/

# Australian Sailing Powerboat Courses for Sailors

Powerboat training may look unrelated to sailing, but it is important for:

- sailing instructors
- safety boat operators
- coaches
- sailing-school staff
- race management
- rescue operations

Relevant courses include:

- Powerboat Essential Skills e-learning
- Powerboat Handling Practical
- Safety Boat Operator

Safety Boat Operator develops support-boat skills including on-water rescue and race-course support.

---

# PAGE: /australian-sailing/instructor-courses/

# Australian Sailing Instructor Pathway

Someone wanting to teach sailing professionally or through an accredited training centre has a separate education path.

Australian Sailing currently lists instructor and coach education including:

- Dinghy Instructor
- Keelboat Instructor
- Keelboat Racing Instructor
- Powerboat Instructor
- Sailing Coach
- Safety & Sea Survival Instructor
- relevant instructor endorsements and reaccreditation pathways

A Dinghy Instructor, for example, must meet sailing-skill, first-aid, powerboat and other accreditation requirements before completing the instructor program.

---

# PART 5: RYA

# PAGE: /rya/

# RYA Sailing Courses in Australia

RYA training is much broader than Competent Crew, Day Skipper and Yachtmaster.

Its sailing-related education includes:

- adult dinghy sailing
- youth dinghy sailing
- keelboat sailing
- multihull sailing
- sail cruising
- navigation
- racing
- foiling
- Yachtmaster examinations
- marine radio
- first aid
- radar
- diesel engines
- sea survival
- commercial-support education

---

# PAGE: /rya/sailing-pathway/

# RYA Sailing Pathway

For someone whose goal is cruising yachts, a common path is:

```text
OPTIONAL TASTER
Cruising Level 1 / Start Yachting
        |
        v
COMPETENT CREW
        |
        v
DAY SKIPPER THEORY
        |
        v
DAY SKIPPER PRACTICAL
        |
        v
BUILD EXPERIENCE
        |
        v
COASTAL SKIPPER / YACHTMASTER OFFSHORE THEORY
        |
        v
COASTAL SKIPPER PRACTICAL
        |
        v
MORE QUALIFYING SEA TIME
        |
        v
YACHTMASTER COASTAL OR OFFSHORE EXAM
        |
        v
YACHTMASTER OCEAN
```

RYA currently lists navigation courses from Essential Navigation and Seamanship through Yachtmaster Ocean Theory, while the practical sail-cruising pathway includes introductory cruising, Competent Crew, Day Skipper and Coastal Skipper.

---

# PAGE: /rya/cruising-level-1/

# RYA Cruising Level 1: Start Sailing

An entry-level practical sailing course.

RYA currently describes it as approximately two days afloat with no previous experience required.

It introduces:

- personal safety
- sailing theory
- yacht handling
- basic manoeuvring
- basic safety at sea

---

# PAGE: /rya/cruising-level-2/

# RYA Cruising Level 2: Basic Skills

A continuation of introductory cruising training.

It develops greater independence and basic sailing competence before more advanced cruising courses.

Not every Australian RYA school offers Cruising Level 1 and 2, so local availability should be shown dynamically rather than implying national availability.

SailCorp and Oceanwest are examples of Australian RYA centres currently listed for both Cruising Level 1 and Cruising Level 2.

---

# PAGE: /rya/start-yachting/

# RYA Start Yachting

Start Yachting is a short introduction to cruising-yacht sailing.

It suits people who:

- have never sailed
- are unsure whether they want a five-day course
- want an introductory weekend
- want experience on a larger yacht

Students learn basic:

- steering
- sail handling
- ropework
- safety
- yacht terminology

---

# PAGE: /rya/competent-crew/

# RYA Competent Crew

Competent Crew is one of the strongest entry points for someone who intends to sail cruising yachts.

RYA currently lists it as a five-day practical course requiring no previous sailing experience.

The purpose is not to create a skipper.

The purpose is to create an active crew member who understands what is happening aboard.

## Skills

- steering
- changing sails
- reefing
- ropework
- knots
- safety equipment
- person overboard
- basic meteorology
- lookout
- general duties
- onboard routines

## What comes next?

Usually:

[RYA Day Skipper Theory](/rya/day-skipper-theory/)  
and  
[RYA Day Skipper Practical](/rya/day-skipper-practical/)

---

# PAGE: /rya/day-skipper-theory/

# RYA Day Skipper Theory

This is where the cruising pathway becomes much more navigation-focused.

Typical subjects include:

- charts
- buoyage
- latitude and longitude
- navigation
- pilotage
- tides
- weather
- seamanship
- collision regulations
- passage planning

The theory course is preparation for taking responsibility as a skipper rather than simply handling sails.

---

# PAGE: /rya/day-skipper-practical/

# RYA Day Skipper Practical Sailing

Day Skipper Practical marks the transition from crew to skipper.

Students learn to:

- prepare the yacht
- brief crew
- leave a berth
- navigate
- pilot
- anchor
- handle the yacht under sail
- manoeuvre under power
- manage emergencies
- plan and conduct short passages
- take responsibility for decisions

This course should not be marketed as "become an expert skipper in five days".

It is an important stage in skipper development.

Experience still matters.

---

# PAGE: /rya/coastal-skipper-yachtmaster-theory/

# RYA Coastal Skipper and Yachtmaster Offshore Theory

This is the advanced shorebased course commonly taken before advanced practical cruising and Yachtmaster-level assessment.

Subjects extend into:

- advanced chartwork
- passage planning
- meteorology
- tides
- navigation
- collision regulations
- offshore decision-making
- higher-level seamanship

---

# PAGE: /rya/coastal-skipper-practical/

# RYA Coastal Skipper Practical

Coastal Skipper Practical is designed for experienced sailors already operating around Day Skipper level.

Training focuses on:

- advanced navigation
- pilotage
- longer passages
- night sailing
- watchkeeping
- heavy-weather preparation
- unfamiliar harbours
- command
- close-quarters manoeuvring

It is a **training course**.

It should not be confused with a Yachtmaster Certificate of Competence.

---

# PAGE: /rya/yachtmaster/

# RYA Yachtmaster Guide

Yachtmaster is not simply the next five-day course.

The candidate must accumulate the required experience, knowledge and qualifying sea time and then demonstrate competence during an examination.

The major certificates are:

- Yachtmaster Coastal
- Yachtmaster Offshore
- Yachtmaster Ocean

---

# PAGE: /rya/yachtmaster-coastal/

# RYA Yachtmaster Coastal

Yachtmaster Coastal is a Certificate of Competence for experienced coastal sailors.

This should have a separate page from Coastal Skipper Practical because they are not the same thing.

The Coastal Skipper course is training.

Yachtmaster Coastal involves independent examination against the certificate standard.

---

# PAGE: /rya/yachtmaster-offshore/

# RYA Yachtmaster Offshore

RYA Yachtmaster Offshore is an advanced Certificate of Competence.

Preparation courses exist, but completing preparation does not automatically grant the certificate.

The examination tests the candidate's ability to skipper a cruising yacht safely and competently.

The site should always publish the latest RYA prerequisites rather than hard-coding old mileage requirements because these requirements can change.

---

# PAGE: /rya/yachtmaster-ocean/

# RYA Yachtmaster Ocean

Yachtmaster Ocean is aimed at ocean passage-making.

The current RYA Yachtmaster Ocean Theory course covers:

- astro navigation
- sextant use
- position fixing
- worldwide meteorology
- ocean passage planning

RYA lists around 40 hours plus examination time for the shorebased theory component.

---

# RYA DINGHY PATHWAY

# PAGE: /rya/dinghy/

# RYA Dinghy Sailing Courses

RYA's current dinghy system is much larger than many Australian yacht sailors realise.

The adult National Sailing Scheme includes:

- Level 1: Start Sailing
- Level 2: Basic Skills
- Level 3: Better Sailing

Advanced modules include:

- Seamanship Skills
- Day Sailing
- Sailing with Spinnakers
- Performance Sailing

Foiling courses include:

- First Flights
- Sustained Flights
- Performance Flights

Racing includes:

- Start Racing
- Club Racing
- Regional Racing
- Championship Racing

These pages are useful even if Australian independent-school availability is relatively limited because Australians may encounter RYA dinghy training overseas or through selected Australian centres.

---

# PAGE: /rya/dinghy-level-1/

# RYA Dinghy Level 1: Start Sailing

A complete beginner course.

RYA currently lists approximately two days or 16 equivalent hours.

Students learn to sail in different directions and gain awareness of launching and recovery.

---

# PAGE: /rya/dinghy-level-2/

# RYA Dinghy Level 2: Basic Skills

Develops greater confidence and independent decision-making.

RYA currently lists approximately two days or 16 equivalent hours.

---

# PAGE: /rya/dinghy-level-3/

# RYA Dinghy Level 3: Better Sailing

Consolidates Levels 1 and 2 and introduces more advanced sailing situations.

Students may receive introductory exposure to advanced modules such as seamanship and day sailing.

---

# PAGE: /rya/dinghy-seamanship/

# RYA Dinghy Seamanship Skills

Teaches how to manage the boat when things become less straightforward.

Topics include:

- launching and recovery
- stopping
- reefing or reducing sail
- anchoring
- mooring
- person-overboard recovery
- problem solving afloat

---

# PAGE: /rya/dinghy-day-sailing/

# RYA Dinghy Day Sailing

Focuses on moving beyond a training area and planning a genuine day sail.

Important topics include:

- planning
- weather
- navigation
- equipment
- decision-making
- leaving and returning safely

---

# PAGE: /rya/dinghy-spinnakers/

# RYA Sailing With Spinnakers

Teaches conventional or asymmetric spinnaker use.

Students develop:

- rigging
- hoisting
- trimming
- gybing
- recovery
- efficient downwind course selection

---

# PAGE: /rya/dinghy-performance-sailing/

# RYA Performance Sailing

A more advanced boat-handling course intended for sailors wanting to improve performance and confidence in faster or more demanding dinghies.

---

# PAGE: /rya/dinghy-foiling/

# RYA Foiling Courses

RYA currently lists three dinghy foiling stages:

```text
First Flights
→ Sustained Flights
→ Performance Flights
```

The aim progresses from first take-off to sustained foiling and eventually foiling transitions.

---

# PAGE: /rya/dinghy-racing/

# RYA Dinghy Racing Pathway

```text
Start Racing
→ Club Racing
→ Regional Racing
→ Championship Racing
```

## Start Racing

Introduces starting, race-course sailing and basic racing rules.

## Club Racing

Develops:

- boat speed
- start-line technique
- rig setup
- first-beat strategy
- boat handling

## Regional Racing

Develops the ability to compete at unfamiliar venues and in more varied conditions.

## Championship Racing

Higher-level training tailored toward competitive sailors.

---

# RYA YOUTH

# PAGE: /rya/youth-sailing/

# RYA Youth Sailing Scheme

The youth pathway contains:

```text
Stage 1
→ Stage 2
→ Stage 3
→ Stage 4
```

Stage 1 introduces boat parts and basic sailing.

Stage 2 develops tacking, gybing and speed control.

Stage 3 develops confidence in moderate conditions.

Stage 4 introduces more developed double-handed sailing and problem-solving.

Youth racing can continue through:

- Youth Start Racing
- Youth Intermediate Racing
- Youth Advanced Racing

---

# RYA KEELBOAT

# PAGE: /rya/keelboat/

# RYA Keelboat Courses

The RYA also provides keelboat versions of its small-boat training scheme.

Current RYA course filters include:

- Keelboat Level 1: Start Sailing
- Keelboat Level 2: Basic Skills
- Keelboat Level 3: Better Sailing
- Keelboat Seamanship Skills
- Keelboat Day Sailing
- Keelboat Sailing with Spinnakers
- Keelboat Performance Sailing
- Keelboat Start Racing
- Keelboat Club Racing
- Keelboat Regional Racing

These are distinct from the larger-yacht Sail Cruising pathway.

---

# RYA NAVIGATION

# PAGE: /rya/navigation/

# RYA Navigation Courses

```text
Essential Navigation & Seamanship
        |
        v
Day Skipper Theory
        |
        v
Coastal Skipper / Yachtmaster Offshore Theory
        |
        v
Yachtmaster Ocean Theory
```

## Essential Navigation and Seamanship

An introductory navigation course.

RYA currently lists around 16 classroom hours or approximately 8 to 10 hours online.

Topics include:

- charts
- safety
- buoyage
- tides
- electronic navigation
- pilotage
- collision rules
- anchoring
- weather
- passage planning

## Day Skipper Theory

More comprehensive coastal navigation for developing skippers.

## Coastal Skipper/Yachtmaster Offshore Theory

Advanced coastal and offshore theory.

## Yachtmaster Ocean Theory

Ocean passage planning, meteorology and celestial navigation.

---

# RYA SPECIALIST COURSES

# PAGE: /rya/specialist-courses/

# RYA Specialist Courses for Sailors

Relevant RYA specialist courses include:

- Marine Radio SRC
- First Aid
- Diesel Engine
- Radar
- Basic Sea Survival
- Offshore Personal Survival
- CEVNI
- Professional Practices and Responsibilities
- Safe and Fun safeguarding training

---

# PAGE: /courses/radar/

# Radar Courses for Sailors

Radar training teaches much more than switching the display on.

Topics include:

- radar components
- range
- bearing
- target discrimination
- radar reflectors
- plotting
- collision avoidance
- navigation
- limitations

The RYA Radar course is currently listed as a one-day course with no previous experience requirement.

---

# PAGE: /courses/marine-first-aid/

# Marine First Aid Courses

Marine first aid should be considered differently from ordinary workplace first aid because help may be hours or days away.

RYA's marine First Aid course includes topics relevant to boating such as:

- drowning
- hypothermia
- cold shock
- seasickness
- dehydration
- medical assistance by radio
- helicopter rescue

Australian schools may also offer Australian first-aid qualifications or marine medicine courses.

---

# PAGE: /courses/marine-radio/

# Marine Radio Courses in Australia

Sailing schools may offer:

- VHF radio training
- SROCP
- LROCP
- RYA SRC
- IYT VHF/SRC
- practical radio refreshers

Students should not assume these certificates are interchangeable for every purpose.

For Australian commercial certificates, AMSA currently identifies SROCP for Sailing Master Coastal and LROCP for Sailing Master Offshore.

---

# PAGE: /courses/diesel-engine/

# Marine Diesel Engine Courses for Sailors

A sailing yacht's engine may only run for a fraction of the voyage, but when needed it can be critical.

Courses can cover:

- diesel cycle
- fuel
- fuel contamination
- filters
- bleeding
- cooling
- raw-water system
- freshwater cooling
- impellers
- belts
- lubrication
- electrical starting
- alternators
- overheating
- failure to start
- routine servicing
- emergency troubleshooting

A beginner diesel course does not make someone a marine mechanic.

Its purpose is to make the yacht owner less helpless when something stops working.

---

# PART 6: IYT

# PAGE: /iyt/

# IYT Sailing Courses in Australia

International Yacht Training Worldwide has a broad recreational course catalogue extending from dinghy sailing and Try Sailing through Yachtmaster Ocean.

Its current recreational catalogue includes sailing, catamaran, navigation, weather, radio and ICC pathways.

---

# PAGE: /iyt/sailing-pathway/

# IYT Sailing Course Pathway

A simplified yacht pathway is:

```text
Try Sailing
        |
        v
Introductory Sailing Skills
        |
        v
Day Skipper / Crew Sail
        |
        v
International Crew
        |
        v
International Flotilla Skipper
        |
        v
International Bareboat Skipper
        |
        v
Yachtmaster Coastal
        |
        v
Yachtmaster Offshore
        |
        v
Yachtmaster Ocean
```

Not every student has to complete every course.

Eligibility and prior-experience requirements become increasingly important higher in the pathway.

---

# IYT COMPLETE RECREATIONAL COURSE CATALOGUE

IYT's current recreational-school course levels include:

## Dinghy

- Bronze: Start Sailing
- Silver: Safe Sailing
- Gold: Independent Sailing
- Platinum: Perfected Sailing

## Introductory yacht sailing

- IYT Try Sailing
- Introductory Sailing Skills
- Day Skipper / Crew Sail
- Introduction to Yachting

## Crew and skipper

- International Crew
- International Flotilla Skipper
- International Bareboat Skipper

## Catamaran

- International Flotilla Skipper Sail - Catamaran
- International Bareboat Skipper Sail - Catamaran

## Advanced recreational

- Yachtmaster Coastal Power or Sail
- Yachtmaster Coastal Sail - Catamaran
- Yachtmaster Offshore Power or Sail
- Yachtmaster Offshore Sail - Catamaran
- Yachtmaster Ocean

## Racing

- International Yacht Racing

## Navigation and weather

- Navigation Master
- Weather Master

## Communications

- Marine Communications VHF/SRC

## ICC

Multiple ICC endorsements exist for sail, power, coastal and inland operating categories.

---

# PAGE: /iyt/international-crew/

# IYT International Crew

International Crew develops someone into an active crew member.

It covers both theory and practical skills needed aboard sailing or power yachts.

IYT's modular passport system currently identifies modules 1 to 11 with International Crew.

---

# PAGE: /iyt/flotilla-skipper/

# IYT International Flotilla Skipper

Designed for someone progressing toward skippering a yacht within a flotilla environment.

It should be understood as a skipper certificate with operating limitations rather than an unrestricted command qualification.

---

# PAGE: /iyt/bareboat-skipper/

# IYT International Bareboat Skipper

International Bareboat Skipper is not a beginner course.

IYT currently requires candidates to have accumulated more than 200 nautical miles and 10 days at sea before qualifying.

This makes it particularly relevant to:

- charter sailors
- yacht owners
- people preparing for overseas cruising
- sailors progressing toward Yachtmaster

---

# PAGE: /iyt/catamaran/

# IYT Catamaran Sailing Qualifications

IYT provides dedicated catamaran versions of several skipper qualifications.

Current courses include:

- International Flotilla Skipper Sail - Catamaran
- International Bareboat Skipper Sail - Catamaran
- Yachtmaster Coastal Sail - Catamaran
- Yachtmaster Offshore Sail - Catamaran

IYT specifically requires catamaran candidates seeking a catamaran certificate to undertake appropriate multihull training.

---

# PAGE: /iyt/yachtmaster-coastal/

# IYT Yachtmaster Coastal

An advanced recreational qualification for command of qualifying recreational yachts within its operating limitations.

It requires substantially greater experience and competence than beginner skipper courses.

---

# PAGE: /iyt/yachtmaster-offshore/

# IYT Yachtmaster Offshore

IYT currently identifies Yachtmaster Offshore as an advanced recreational certificate for yachts operating up to 150 nautical miles offshore.

The IYT passport pathway currently states substantial sea-time requirements before entry to the Offshore course.

---

# PAGE: /iyt/yachtmaster-ocean/

# IYT Yachtmaster Ocean

An advanced recreational ocean-navigation qualification.

It develops:

- celestial navigation
- sextant work
- ocean routing
- ocean meteorology
- passage planning
- tropical weather understanding

---

# PAGE: /iyt/icc/

# IYT ICC

The International Certificate of Competency should not be described as a universal world sailing licence.

IYT offers several ICC endorsements including sail and power combinations and coastal or inland variants. Eligibility rules apply.

Students should verify:

- nationality
- residency
- destination
- charter company requirements
- intended vessel
- coastal versus inland use
- VHF requirements

---

# PART 7: AMERICAN SAILING

# PAGE: /asa/

# American Sailing Courses in Australia

American Sailing qualifications are less widespread in Australia than Australian Sailing or RYA courses, but they should still be covered comprehensively.

Current American Sailing certification categories include:

- ASA 101 Keelboat 1
- ASA 102 Keelboat 2
- ASA 103 Coastal Cruising
- ASA 104 Bareboat Cruising
- ASA 105 Coastal Navigation
- ASA 106 Advanced Coastal Cruising
- ASA 107 Celestial Navigation
- ASA 108 Offshore Passagemaking
- ASA 110 Basic Small Boat Sailing
- ASA 114 Cruising Catamaran
- ASA 116 Dinghy and Outboard Endorsement
- ASA 117 Basic Celestial Endorsement
- ASA 118 Docking Endorsement
- ASA 119 Marine Weather Endorsement
- ASA 120 Radar Endorsement

Australian availability is more limited.

Sunshine Sailing Australia currently advertises ASA 101, ASA 103 and ASA 118, with additional ASA training packages shown in its course catalogue.

Therefore the site should distinguish:

**ASA course exists**

from

**ASA course currently available at an Australian school**

---

# PAGE: /asa/asa-101/

# ASA 101: Keelboat 1

An introductory keelboat sailing qualification.

Typical students are complete beginners or sailors seeking formal recognition of basic keelboat skills.

---

# PAGE: /asa/asa-102/

# ASA 102: Keelboat 2

Develops sail trim and keelboat-handling ability beyond the introductory stage.

---

# PAGE: /asa/asa-103/

# ASA 103: Coastal Cruising

Moves the sailor toward handling larger cruising yachts in coastal waters.

Typical development includes:

- boat handling
- seamanship
- navigation
- anchoring
- cruising systems
- skipper awareness

---

# PAGE: /asa/asa-104/

# ASA 104: Bareboat Cruising

Bareboat Cruising prepares sailors for multi-day cruising and yacht charter.

Training can include:

- provisioning
- boat systems
- engines
- navigation
- anchoring
- weather
- emergency procedures
- crew management

---

# PAGE: /asa/asa-105/

# ASA 105: Coastal Navigation

A navigation-focused course covering coastal chartwork, piloting, tides, currents and related navigation concepts.

---

# PAGE: /asa/asa-106/

# ASA 106: Advanced Coastal Cruising

Advanced cruising training beyond the basic bareboat level.

---

# PAGE: /asa/asa-107/

# ASA 107: Celestial Navigation

Develops celestial-navigation knowledge for offshore sailors.

---

# PAGE: /asa/asa-108/

# ASA 108: Offshore Passagemaking

Advanced offshore passage training.

---

# PAGE: /asa/asa-110/

# ASA 110: Basic Small Boat Sailing

Small-boat sailing rather than the cruising-yacht pathway.

---

# PAGE: /asa/asa-114/

# ASA 114: Cruising Catamaran

Dedicated cruising-catamaran training.

Important for sailors moving from monohulls into:

- twin-engine manoeuvring
- multihull anchoring
- catamaran sail handling
- catamaran systems
- multihull docking

---

# PAGE: /asa/asa-116/

# ASA 116: Dinghy and Outboard Endorsement

Focuses on the small tender and outboard operation commonly associated with cruising yachts.

---

# PAGE: /asa/asa-117/

# ASA 117: Basic Celestial Endorsement

Introductory celestial navigation.

---

# PAGE: /asa/asa-118/

# ASA 118: Docking Endorsement

Dedicated close-quarters manoeuvring and docking training.

This is particularly useful because docking is often one of the biggest confidence barriers for new yacht owners.

---

# PAGE: /asa/asa-119/

# ASA 119: Marine Weather Endorsement

Focuses on practical marine weather observation, interpretation and forecasting.

---

# PAGE: /asa/asa-120/

# ASA 120: Radar Endorsement

Covers small-craft radar use for:

- navigation
- collision avoidance
- pilotage
- target interpretation

---

# PART 8: INDEPENDENT AND SPECIALIST COURSES

Many of Australia's best sailing courses do not fit neatly into one international certificate scheme.

These deserve their own SEO pages.

---

# PAGE: /courses/sailing-taster/

# Sailing Taster and Try Sailing Courses

A taster course is designed for someone who does not yet know whether sailing is for them.

It may last:

- a few hours
- half a day
- one day
- a weekend

The objective is experience rather than qualification.

---

# PAGE: /courses/adult-sailing/

# Adult Sailing Courses

Adults can learn through:

- dinghy courses
- keelboat courses
- yacht courses
- private lessons
- liveaboard training

There is no age at which someone is "too late" to begin learning recreational sailing, provided they can safely participate in the chosen course.

---

# PAGE: /courses/couples-sailing/

# Sailing Courses for Couples

Couples planning to cruise together should train as a team.

Both partners should ideally learn:

- steering
- reefing
- engine operation
- radio use
- person-overboard recovery
- anchoring
- navigation
- emergency procedures

The goal should not be to create one skipper and one passenger.

---

# PAGE: /courses/private-sailing-lessons/

# Private Sailing Lessons

Private instruction is useful when:

- the student wants more helm time
- a couple wants to train together
- a student has a specific weakness
- a yacht owner wants bespoke training
- the student does not fit a scheduled course

---

# PAGE: /courses/sail-trim/

# Sail Trim Courses

Sail trim courses help sailors move beyond merely making the boat move.

Training can cover:

- telltales
- sheet tension
- halyard tension
- outhaul
- traveller
- mainsheet
- vang
- jib leads
- twist
- draft
- weather helm
- reefing
- upwind trim
- reaching trim
- downwind trim

---

# PAGE: /courses/spinnaker/

# Spinnaker Courses

Spinnaker training can include:

- symmetrical spinnakers
- asymmetric spinnakers
- rigging
- hoisting
- trimming
- gybing
- dropping
- crew communication
- broach recovery
- downwind tactics

---

# PAGE: /courses/docking-berthing/

# Docking and Berthing Courses

Docking is one of the most useful specialist courses for new yacht owners.

Training can include:

- prop walk
- prop wash
- wind effects
- current
- spring lines
- ferry gliding
- reversing
- confined manoeuvring
- crew communication
- aborting a failed approach

For catamarans:

- differential thrust
- twin-engine turning
- windage
- beam awareness

---

# PAGE: /courses/anchoring/

# Anchoring Courses

Anchoring education can cover:

- anchor types
- scope
- seabed
- depth
- tide
- swinging room
- setting the anchor
- testing the set
- dragging
- retrieving
- anchoring under sail
- anchoring under power
- anchor alarms
- crowded anchorages

---

# PAGE: /courses/own-boat-tuition/

# Own-Boat Tuition

Once someone buys a yacht, the best school vessel may be their own.

Own-boat training can cover:

- marina handling
- prop walk
- bow thrusters
- reefing
- furling
- anchoring
- autopilot
- electronics
- safety equipment
- engines
- electrical systems
- tender handling
- night sailing
- emergency steering
- partner training

---

# PAGE: /courses/charter-preparation/

# Yacht Charter Preparation Courses

Charter preparation sits between general skipper training and real-world chartering.

A useful course should cover:

- charter handover
- inventory
- boat systems
- engine checks
- anchoring
- mooring
- berthing
- reefing
- route planning
- charter-company limits
- damage avoidance
- emergency procedures

---

# PAGE: /courses/catamaran-sailing/

# Catamaran Sailing Courses

Anyone planning to own or charter a catamaran should seek multihull-specific training.

Differences include:

- twin engines
- differential thrust
- high windage
- wide beam
- reduced heeling
- different feedback before overloading sails
- bridge-deck clearance
- higher loads
- different reefing considerations
- different anchoring behaviour
- manoeuvring from elevated helm stations

Australian providers currently advertising dedicated catamaran pathways include schools using RYA, IYT, ASA or bespoke training.

---

# PAGE: /courses/mile-building/

# Mile Building Courses

Mile building allows sailors to convert theory into experience.

Useful skills include:

- watchkeeping
- night sailing
- fatigue management
- navigation
- cooking underway
- coastal traffic
- weather changes
- landfall
- log keeping
- crew organisation

Mileage alone does not automatically equal qualifying sea time for every certificate.

Students pursuing Yachtmaster should verify current qualifying requirements before booking a passage.

---

# PAGE: /courses/passage-making/

# Passage-Making Courses

Passage training focuses on the full process:

```text
PLAN
↓
PREPARE BOAT
↓
CHECK WEATHER
↓
BRIEF CREW
↓
DEPART
↓
NAVIGATE
↓
MANAGE WATCHES
↓
ADAPT TO CONDITIONS
↓
MAKE LANDFALL
↓
REVIEW
```

It is often the bridge between course competence and real cruising confidence.

---

# PAGE: /courses/night-sailing/

# Night Sailing Courses

Night changes perception dramatically.

Students learn:

- navigation lights
- buoyage at night
- night vision
- lookout
- cockpit discipline
- electronic navigation
- pilotage
- identifying shore lights
- maintaining situational awareness

---

# PAGE: /courses/offshore-sailing/

# Offshore Sailing Courses

Offshore training should not simply mean sailing farther from land.

It should prepare students for:

- weather
- watches
- fatigue
- heavy conditions
- reefing
- navigation
- failures
- medical issues
- communication
- crew welfare
- emergency planning

---

# PAGE: /courses/weather/

# Marine Weather Courses

Weather education can include:

- pressure
- fronts
- synoptic charts
- sea breezes
- thunderstorms
- coastal effects
- wind shifts
- swell
- GRIB files
- forecast models
- Australian Bureau of Meteorology products
- tropical systems
- passage weather

For Australian cruising, weather deserves a standalone course cluster.

---

# PAGE: /courses/marine-electrics/

# Marine Electrical Courses for Sailors

Useful topics include:

- 12V systems
- 24V systems
- batteries
- lithium
- charging
- alternators
- solar
- shore power
- inverters
- circuit protection
- multimeters
- fault finding
- corrosion
- grounding
- common electrical failures

---

# PAGE: /courses/yacht-maintenance/

# Yacht Maintenance Courses

Yacht-owner maintenance courses may cover:

- rigging inspection
- deck hardware
- winches
- plumbing
- pumps
- toilets
- steering
- engines
- electrical systems
- corrosion
- antifouling
- basic repairs
- preventative maintenance

---

# PART 9: GOAL-BASED LEARNING PATHWAYS

# PAGE: /pathways/cruising-yacht/

# Path From Beginner to Cruising Yacht Skipper

A realistic development path is:

```text
1. FIRST EXPERIENCE
       ↓
2. CREW SKILLS
       ↓
3. NAVIGATION THEORY
       ↓
4. BASIC SKIPPER TRAINING
       ↓
5. REAL SAILING EXPERIENCE
       ↓
6. RADIO
       ↓
7. DIESEL
       ↓
8. FIRST AID
       ↓
9. SAFETY & SEA SURVIVAL
       ↓
10. COASTAL PASSAGES
       ↓
11. ADVANCED SKIPPER TRAINING
       ↓
12. OFFSHORE EXPERIENCE
```

Do not treat every box as a mandatory certificate.

The objective is competence.

---

# PAGE: /pathways/yacht-owner/

# Sailing Course Path for Future Yacht Owners

Someone planning to own a yacht needs broader skills than someone who only wants to crew.

## Stage 1: Sail

Learn:

- sail handling
- steering
- points of sail
- reefing
- anchoring

## Stage 2: Skipper

Learn:

- crew management
- decision-making
- passage planning
- docking
- emergency procedures

## Stage 3: Navigate

Learn:

- charts
- electronic navigation
- tides
- weather
- COLREGs
- pilotage

## Stage 4: Understand systems

Learn:

- diesel
- batteries
- charging
- plumbing
- steering
- rigging

## Stage 5: Safety

Complete appropriate:

- first aid
- radio
- sea survival
- emergency training

## Stage 6: Buy yacht

Then arrange own-boat tuition.

---

# PAGE: /pathways/catamaran/

# Path to Learn Cruising Catamarans

```text
Basic yacht skills
↓
Basic skipper competence
↓
Catamaran-specific handling
↓
Twin-engine manoeuvring
↓
Catamaran anchoring
↓
Catamaran sail handling
↓
Charter / owner experience
```

A monohull qualification can provide strong foundation skills, but it does not automatically give someone practical multihull handling experience.

---

# PAGE: /pathways/bareboat-charter/

# How to Train for a Bareboat Yacht Charter

## Step 1

Learn basic sailing.

## Step 2

Develop skipper competence.

## Step 3

Learn navigation.

## Step 4

Build recent sailing experience.

## Step 5

Train on the type of vessel you will charter.

## Step 6

Check the charter company's certificate requirements.

## Step 7

Check whether an ICC is required.

## Step 8

Take charter-specific preparation if needed.

A certificate does not guarantee that every charter company will accept your experience.

The charter operator and insurer can impose additional requirements.

---

# PAGE: /pathways/offshore-cruising/

# Offshore Cruising Training Path

```text
Competent Crew
↓
Skipper Training
↓
Navigation
↓
Coastal Experience
↓
Marine Radio
↓
First Aid
↓
Diesel
↓
Safety & Sea Survival
↓
Night Sailing
↓
Passage Making
↓
Advanced Navigation
↓
Advanced Skippering
↓
Offshore Passages
```

The biggest change offshore is not a new sail.

It is self-reliance.

Problems must often be handled by the crew without immediate outside assistance.

---

# PAGE: /pathways/racing/

# Sailing Racing Pathway

```text
Learn to Sail
↓
Reliable Boat Handling
↓
Start Racing
↓
Spinnaker Skills
↓
Club Racing
↓
Boat Speed
↓
Sail Trim
↓
Tactics
↓
Strategy
↓
Regional / Championship Training
```

Racing improves:

- boat handling
- manoeuvre speed
- sail trim
- teamwork
- situational awareness
- wind awareness

Cruising and racing are different disciplines, but racing skills can make a cruiser a more technically competent sailor.

---

# PAGE: /pathways/yachtmaster/

# Path to Yachtmaster

## RYA route

```text
Crew skills
↓
Day Skipper theory
↓
Day Skipper practical
↓
Sea time
↓
Coastal Skipper/Yachtmaster theory
↓
Advanced practical training
↓
Qualifying passages
↓
Yachtmaster preparation
↓
Independent Yachtmaster examination
```

## IYT route

```text
International Crew
↓
Flotilla / Bareboat Skipper
↓
Experience
↓
Yachtmaster Coastal
↓
Experience
↓
Yachtmaster Offshore
↓
Yachtmaster Ocean
```

Do not select a Yachtmaster course because the title sounds impressive.

Select it when your experience is ready for the standard.

---

# PAGE: /pathways/sailing-instructor/

# How to Become a Sailing Instructor in Australia

Potential routes include:

## Australian Sailing

Develop competence in the discipline you intend to teach, complete required prerequisites and undertake instructor accreditation.

Australian Sailing currently has distinct instructor pathways for dinghy, keelboat, powerboat, racing and safety disciplines.

## RYA

RYA instructor routes depend on the discipline.

Examples can include:

- Dinghy Instructor
- Cruising Instructor
- Yachtmaster Instructor
- Powerboat Instructor

## IYT

IYT has instructor qualifications tied to the level of course being taught.

Higher skipper courses require significantly more instructor sea time and credentials.

---

# PART 10: COMMERCIAL SAILING

# PAGE: /qualifications/commercial-sailing-qualifications/

# Commercial Sailing Qualifications in Australia

This page must make one point extremely clear:

**A recreational sailing qualification is not automatically permission to work commercially.**

Australia has domestic commercial-vessel certificates administered by AMSA.

Relevant sailing certificates include:

- Sailing Master Coastal
- Sailing Master Offshore

AMSA currently states that these are domestic certificates allowing the holder to command and operate engines of sailing vessels within the certificate's applicable limits.

---

# PAGE: /qualifications/amsa-sailing-master-coastal/

# AMSA Sailing Master Coastal

Sailing Master Coastal is an Australian domestic Certificate of Competency.

It is not a recreational learn-to-sail qualification.

Anyone considering commercial work should check:

- sea-service requirements
- recognised prior certificates
- first aid
- marine radio
- eyesight and medical requirements
- application requirements
- operating limitations

AMSA currently requires the appropriate marine-radio certificate, with SROCP identified for Sailing Master Coastal.

---

# PAGE: /qualifications/amsa-sailing-master-offshore/

# AMSA Sailing Master Offshore

Sailing Master Offshore is a higher commercial sailing certificate.

AMSA currently requires LROCP as the radio qualification for this certificate.

The qualification should be treated as a professional pathway.

Recreational Yachtmaster training may form part of a person's route, but AMSA requirements remain separate.

---

# PAGE: /qualifications/recreational-vs-commercial/

# Recreational Sailing Certificate vs Commercial Qualification

| Qualification | Main purpose |
|---|---|
| Australian Sailing Start Skippering | Recreational keelboat skill development |
| RYA Day Skipper | Recreational cruising skipper development |
| IYT Bareboat Skipper | Recreational bareboat/yacht command |
| ASA 104 | Recreational bareboat cruising |
| RYA Yachtmaster | Advanced certificate of competence |
| IYT Yachtmaster | Advanced recreational qualification |
| AMSA Sailing Master Coastal | Australian commercial Certificate of Competency |
| AMSA Sailing Master Offshore | Australian commercial Certificate of Competency |

---

# PART 11: QUALIFICATION COMPARISON

# PAGE: /qualifications/rya-vs-iyt-vs-asa/

# RYA vs IYT vs ASA in Australia

| Area | RYA | IYT | ASA |
|---|---|---|---|
| Beginner yacht training | Yes | Yes | Yes |
| Crew pathway | Strong | Strong | Less crew-specific |
| Skipper pathway | Strong | Strong | Strong |
| Bareboat focus | Yes | Yes | Yes |
| Catamaran qualifications | Available | Dedicated certificates | ASA 114 |
| Coastal navigation | Yes | Yes | ASA 105 |
| Celestial navigation | Yachtmaster Ocean | Yachtmaster Ocean | ASA 107 |
| Offshore pathway | Yachtmaster | Yachtmaster | ASA 108 |
| Australian school availability | Strong | Moderate | Limited |
| ICC pathway | Available subject to eligibility | Available subject to eligibility | Not the primary ASA structure |
| Commercial progression | Can support some pathways | Can support some pathways | More limited Australian commercial relevance |

The best qualification is the one that matches:

- your goal
- your intended vessel
- your intended destination
- the schools available
- your future training
- your charter requirements
- your commercial ambitions

---

# PART 12: SAILING SCHOOL DIRECTORY

# PAGE: /sailing-schools/

# Sailing Schools in Australia

The directory should show the schools once, with detailed information stored only on each canonical school profile.

## New South Wales

- Pacific Sailing School
- Flying Fish Australia
- SailCorp
- Eastsail
- Sydney by Sail
- AusSea Sailing School
- Liquid Edge Sailing School
- Atlas Sailing
- SailTime Newport
- Yachting Directions
- Ocean Boardroom
- Above & Beyond Boating
- Marine SafetyWorks
- Balmoral Water Sports Center

## Queensland

- Southern Cross Yachting
- Mainstay Sailing
- Whitsunday Sailing School
- Sunshine Sailing Australia
- Fraser Coast Sailing Academy
- Paper Sailors Rock

## Victoria

- Yachtmaster Sailing School
- Blue Water Sailing School
- Smooth Sailing School
- The Boatshed

## Western Australia

- Oceanwest RYA Sailing School
- NAVatHOME Australia
- Sailing Eventide
- Adventure Sailing
- Funcats Watersports

## South Australia

- Adelaide Sailing

## Tasmania

- Tasman Adventures
- Paper Sailors Rock Tasmania programs

Each school profile should show its course inventory through structured data rather than duplicating the explanation of every course.

---

# SCHOOL PROFILE FORMAT

```yaml
school_name:
school_slug:
provider_status:
provider_type:

address:
suburb:
city:
state:
postcode:
latitude:
longitude:

training_locations:
training_waters:

website:
email:
phone:

australian_sailing:
rya:
iyt:
asa:
icc_testing:
amsa_related_training:

beginner:
kids:
teen:
adult:
dinghy:
keelboat:
cruising_yacht:
monohull:
catamaran:
racing:
offshore:
own_boat:
private_tuition:
liveaboard:
mile_building:

navigation:
radio:
radar:
weather:
diesel:
electrics:
maintenance:
first_aid:
sea_survival:

courses_offered:
training_vessels:

minimum_age:
maximum_class_size:
liveaboard_available:
meals_included:
equipment_provided:

published_prices:
price_checked:

accreditation_checked:
last_verified:
```

---

# SCHOOL PROFILE CONTENT STRUCTURE

Every detailed school page should contain:

# [School Name]

## Quick facts

| Item | Detail |
|---|---|
| Location | |
| Training waters | |
| Main training type | |
| Accreditation | |
| Beginner courses | |
| Yacht courses | |
| Catamaran available | |
| Own-boat tuition | |
| Online training | |
| Liveaboard | |

## About the school

Unique editorial description.

## What can you learn here?

Dynamic course list.

## Beginner options

Relevant starting courses.

## Skipper development

Relevant skipper courses.

## Advanced training

Relevant advanced courses.

## Specialist training

Navigation, radio, diesel, safety, etc.

## Training boats

Explain the vessels where verified.

## Training location

Explain why the local waters matter.

## Who this school may suit

Neutral matching rather than recommendation.

## Things to check before booking

- current accreditation
- exact vessel
- instructor ratio
- course prerequisites
- accommodation
- meals
- examination fees
- cancellation policy

## Current course list

Pulled dynamically from database.

---

# PART 13: LOCATION SEO

# PAGE TEMPLATE: /sailing-schools/[state]/[city]/

Location pages should target real search intent.

Example:

# Sailing Schools Sydney

Sydney is Australia's largest sailing-training market, with dedicated providers operating from Sydney Harbour, Middle Harbour, Pittwater and Botany Bay.

Students can find:

- beginner sailing
- Australian Sailing keelboat courses
- RYA courses
- IYT courses
- yacht training
- catamaran training
- Yachtmaster preparation
- racing
- Safety & Sea Survival
- marine radio
- diesel
- navigation
- owner tuition

## Schools

Show cards only.

Do not duplicate full profiles.

## Courses available around Sydney

Dynamic database output:

- beginner
- keelboat
- RYA
- IYT
- catamaran
- racing
- Yachtmaster
- safety
- radio
- navigation

## Where will you train?

Unique information about:

- Sydney Harbour
- commercial traffic
- ferries
- navigation
- confined water
- open-water access

## Nearby training regions

- Middle Harbour
- Pittwater
- Broken Bay
- Botany Bay

---

# PART 14: SCHOOL COMPARISON

# PAGE: /compare-sailing-schools/

# How to Compare Sailing Schools

Do not start with price.

Start with the outcome.

## 1. What do you actually want to learn?

A $500 course that does not fit your goal is more expensive than a $1,000 course that does.

## 2. What boat will you use?

Training on a dinghy, 7-metre keelboat, 40-foot monohull and 40-foot catamaran produces different practical experience.

## 3. How many students?

Ask:

- maximum class size
- number of instructors
- amount of helm time
- whether students share cabins
- whether the instructor rotates responsibilities

## 4. Is the qualification relevant?

Ask exactly:

> What certificate will I receive?

Then ask:

> What does that certificate enable or demonstrate?

## 5. Is theory included?

Some pathways separate:

- theory
- practical training
- examination

## 6. Is the course liveaboard?

Living aboard introduces:

- watches
- galley routines
- sleeping aboard
- energy management
- space management
- real cruising routines

## 7. What water will you train in?

Protected-water courses can be excellent for beginners.

Offshore preparation requires progressively broader conditions.

## 8. Does the instructor teach or simply demonstrate?

Students learn through doing.

## 9. Is the school currently accredited?

Verify directly with the qualification body.

---

# PART 15: HOW LONG DOES IT TAKE?

# PAGE: /learn/how-long-does-it-take/

# How Long Does It Take to Learn to Sail?

The answer depends on what you mean by "learn".

## A few hours

You can understand:

- steering
- basic wind direction
- basic sail control
- tacking
- simple terminology

## A few days

You can become useful crew.

## Several courses

You can begin taking responsibility as skipper.

## Months of sailing

You begin developing judgement across different weather and situations.

## Years

Experience begins accumulating across:

- different boats
- different crews
- different weather
- failures
- night sailing
- coastal navigation
- offshore conditions

A certificate records completion or demonstrated competence.

It cannot manufacture experience.

---

# PART 16: WHICH COURSE SHOULD I TAKE?

# PAGE: /find-a-course/

# Find the Right Sailing Course

## Question 1: Have you sailed before?

### No

Choose:

- Try Sailing
- Discover Sailing
- Tackers
- OutThere
- Start Sailing
- Start Crewing
- RYA Start Yachting
- RYA Competent Crew
- IYT Try Sailing
- ASA 101

### Yes, but only as crew

Choose:

- Start Helming
- Start Skippering
- Day Skipper
- Flotilla Skipper
- skipper-development course

### Yes, and I already skipper

Choose according to goal:

- coastal
- offshore
- racing
- navigation
- Yachtmaster
- charter
- catamaran
- safety

---

# Question 2: What boat do you want to sail?

```text
DINGHY
→ Dinghy pathway

SMALL KEELBOAT
→ Keelboat pathway

CRUISING MONOHULL
→ RYA / IYT / ASA yacht pathway

CRUISING CATAMARAN
→ Yacht skills + catamaran-specific training

RACING YACHT
→ Keelboat/yacht fundamentals + racing

OWN YACHT
→ Core training + own-boat tuition
```

---

# Question 3: What is your final goal?

```text
FUN
→ Learn to sail

CREW
→ Crew qualification

SKIPPER
→ Skipper course

CHARTER
→ Bareboat / Day Skipper / ICC as required

OFFSHORE
→ Advanced navigation + safety + passages

YACHTMASTER
→ Advanced structured qualification

WORK
→ Check AMSA pathway first
```

---

# PART 17: PRICE GUIDE

# PAGE: /learn/how-much-do-sailing-courses-cost/

# How Much Do Sailing Courses Cost in Australia?

There is no useful single price for a sailing course.

Cost depends on:

- course duration
- vessel
- private or group tuition
- liveaboard accommodation
- food
- instructor ratio
- qualification fees
- exams
- textbooks
- location
- fuel
- marina costs

A two-hour introduction and a five-day liveaboard yacht course should not be compared on price alone.

For example, Yachtmaster Sailing School currently publishes 2026 prices for several courses ranging from shorter introductory programs through liveaboard RYA courses, while Sunshine Sailing Australia publishes separate current prices for RYA, ASA and charter-preparation programs.

Every price displayed on SailingSchools.com.au should include:

```text
Price:
Price checked:
What is included:
What is excluded:
Exam included:
Accommodation:
Meals:
Course materials:
```

Never publish an undated price.

---

# PART 18: EDUCATIONAL ARTICLES

The site should also teach people enough sailing vocabulary to understand course descriptions.

Required learning pages:

- What is a dinghy?
- What is a keelboat?
- What is a cruising yacht?
- Monohull vs catamaran
- What is a tiller?
- What is a wheel helm?
- What is a mainsail?
- What is a jib?
- What is a genoa?
- What is a spinnaker?
- What is reefing?
- What is tacking?
- What is gybing?
- What are points of sail?
- What is apparent wind?
- What is weather helm?
- What is a tack?
- What is a nautical mile?
- What is a knot?
- What is pilotage?
- What is dead reckoning?
- What is COLREG?
- What is AIS?
- What is DSC?
- What is an EPIRB?
- What is a liferaft?
- What is a passage plan?
- What is a watch?
- What is a lee shore?
- What is a mayday?
- What is bareboat charter?
- What is Yachtmaster?
- What is an ICC?

These pages support the school and course pages without repeating course descriptions.

---

# PART 19: SEO TITLE FRAMEWORK

## National

**Sailing Schools Australia | Sailing Courses & Learn to Sail Guide**

**Learn to Sail Australia | Beginner to Yachtmaster Course Guide**

**Sailing Courses Australia | Compare Schools, Courses & Qualifications**

## Location

**Sailing Schools Sydney | Sailing Lessons, RYA & Yacht Courses**

**Sailing Schools Melbourne | Learn to Sail & Yacht Training Victoria**

**Sailing Schools Brisbane | Sailing Courses & RYA Training**

**Sailing Schools Perth | Learn to Sail, RYA & IYT Courses**

**Sailing Schools Whitsundays | Airlie Beach Sailing Courses**

**Sailing Schools Adelaide | Learn to Sail South Australia**

**Sailing Schools Hobart | Sailing Courses Tasmania**

## Course intent

**Beginner Sailing Courses Australia | How to Learn to Sail**

**Adult Sailing Lessons Australia | Beginner Sailing Courses**

**Kids Sailing Courses Australia | Tackers & Learn to Sail**

**Catamaran Sailing Courses Australia | Multihull Training**

**Bareboat Charter Courses Australia | Skipper & ICC Training**

**Yacht Sailing Courses Australia | Learn to Crew & Skipper**

**Offshore Sailing Courses Australia | Navigation, Safety & Passage Training**

## Qualification intent

**RYA Courses Australia | Competent Crew to Yachtmaster**

**RYA Competent Crew Australia | Course Guide & Sailing Schools**

**RYA Day Skipper Australia | Theory, Practical & Schools**

**RYA Yachtmaster Australia | Coastal, Offshore & Ocean**

**IYT Courses Australia | Crew, Bareboat & Yachtmaster**

**ASA Courses Australia | ASA 101, 103, 104 & Catamaran**

**Australian Sailing Courses | Dinghy, Keelboat & Racing**

## Specialist

**Marine Navigation Courses Australia | Sailing Navigation Training**

**Marine Radio Courses Australia | VHF, SROCP, LROCP & SRC**

**Marine Diesel Courses Australia | Diesel Training for Sailors**

**Safety & Sea Survival Courses Australia**

**Sailing Instructor Courses Australia | Become a Sailing Instructor**

---

# PART 20: INTERNAL LINKING

Every course page should link:

```text
Course
→ Parent organisation
→ Previous course
→ Next course
→ Relevant pathway
→ Schools offering it
→ Relevant location pages
→ Related specialist training
```

Example:

```text
RYA Day Skipper Practical
→ RYA
→ Competent Crew
→ Day Skipper Theory
→ Coastal Skipper
→ Yachtmaster
→ Sailing schools offering Day Skipper
→ Catamaran training
→ Charter preparation
```

Every school page should link:

```text
School
→ City
→ State
→ Accreditation
→ Course pages
→ Vessel type
→ Student level
```

Every location page should link:

```text
Location
→ Schools
→ Course categories
→ Qualification pages
→ Nearby training areas
```

---

# PART 21: DUPLICATION CONTROL

## Course information

Detailed syllabus appears only on the canonical course page.

Example:

`/rya/competent-crew/`

School pages say:

> RYA Competent Crew available.

They do not rewrite the entire Competent Crew syllabus.

## School information

Full school description appears only on:

`/schools/[school-name]/`

Location pages contain a short 30 to 60-word summary.

## Organisation information

RYA, IYT, ASA and Australian Sailing history and qualification structure appear only on organisation pages.

## Prices

Stored in structured school/course records and rendered dynamically.

## Course availability

Stored relationally.

```text
school_id
course_id
currently_offered
delivery_method
vessel_type
price
last_checked
```

This allows one course page to automatically display all schools currently offering that course.

---

# PART 22: COURSE DATABASE

```yaml
course_name:
course_slug:
organisation:
course_family:

level:
beginner:
intermediate:
advanced:
professional:

child:
teen:
adult:

dinghy:
keelboat:
monohull:
catamaran:
offshore:

course_type:
practical:
theory:
online:
classroom:
liveaboard:

recommended_duration:
minimum_age:
prerequisites:
experience_required:

skills:
qualification_awarded:
certificate_type:

next_courses:
previous_courses:

charter_relevance:
offshore_relevance:
commercial_relevance:

schools_offering:
last_verified:
official_source:
```

---

# PART 23: SCHOOL COURSE RELATIONSHIP

Do not store course names only as text inside a school profile.

Create relationships.

```text
School
   |
   +------ Course
   |
   +------ Course
   |
   +------ Course
```

This allows:

`/rya/competent-crew/`

to automatically show:

**Australian schools offering RYA Competent Crew**

and:

`/schools/southern-cross-yachting/`

to automatically show:

**Courses offered by Southern Cross Yachting**

without duplicating content.

---

# PART 24: FAQ

# PAGE: /faq/

# Sailing Schools Australia FAQ

## Can I learn to sail with no experience?

Yes. Multiple Australian Sailing, RYA, IYT and ASA courses are specifically designed for beginners.

## Do I have to start in a dinghy?

No.

## Is dinghy sailing useful before yacht sailing?

Yes, but it is not mandatory.

## Can adults start directly on cruising yachts?

Yes.

## Can I start directly with RYA?

Yes.

## Is Competent Crew for complete beginners?

Yes. RYA currently lists no previous experience requirement.

## Can children learn sailing?

Yes.

## What is Tackers?

Australian Sailing's junior sailing pathway.

## What is OutThere Sailing?

A social sailing pathway primarily aimed at teenagers.

## What comes after Tackers?

Junior dinghy sailing, racing or other development programs.

## What is the Australian Sailing adult dinghy pathway?

Start Sailing 1, Start Sailing 2, Better Sailing and optional racing development.

## What is the Australian Sailing keelboat pathway?

Start Crewing, Start Helming, Start Skippering, with Spinnakers and Start Racing available as further development.

## What is RYA?

A major international boating and sailing training organisation with a broad cruising-yacht pathway.

## What is IYT?

International Yacht Training Worldwide, another international training organisation offering recreational and professional yacht education.

## What is ASA?

American Sailing, a sailing education organisation whose qualifications are offered by selected schools internationally.

## Which is better, RYA or IYT?

Neither is automatically better for everyone.

## Is RYA Day Skipper a boat licence?

No.

## Does Day Skipper make me an expert skipper?

No.

## Is Yachtmaster a five-day course?

No. Preparation courses exist, but Yachtmaster certification involves experience requirements and examination.

## What is the difference between Coastal Skipper and Yachtmaster?

Coastal Skipper is a training course. Yachtmaster is a Certificate of Competence.

## Do I need an ICC?

It depends on your destination, eligibility and charter operator.

## Is the ICC a global boat licence?

No.

## What qualification do I need to charter in the Whitsundays?

Requirements vary between charter companies. Your experience may be assessed in addition to certificates.

## Should I take a catamaran course before chartering a catamaran?

It is strongly useful, particularly if your previous experience is entirely on monohulls.

## What is bareboat charter?

A charter where the customer operates the vessel without a professional skipper supplied for the entire trip.

## Do I need a marine radio qualification?

Requirements depend on the equipment and operating context.

## What is SROCP?

An Australian Short Range Operator Certificate of Proficiency.

## What is LROCP?

An Australian Long Range Operator Certificate of Proficiency.

## What is Safety & Sea Survival?

Specialist training for managing serious emergencies at sea.

## Is sea survival only for racers?

No. It can be highly useful to offshore cruisers.

## Should yacht owners take a diesel course?

It can be extremely useful for understanding maintenance and common faults.

## Should yacht owners learn electrical systems?

Basic electrical understanding is valuable on modern cruising yachts.

## What is mile building?

Sailing specifically undertaken to build practical experience and sea miles.

## Does every mile count toward Yachtmaster?

Not necessarily.

## Can I learn on my own yacht?

Many Australian instructors and schools offer own-boat tuition.

## Is private tuition better?

It can provide more individual training, but group courses also teach teamwork and crew management.

## Can couples train together?

Yes.

## Should both partners learn to skipper?

At minimum, both should be capable of handling emergencies and taking control if required.

## What is a sailing instructor course?

Training and accreditation for someone who intends to teach sailing.

## Can Yachtmaster be used commercially?

Commercial use depends on endorsement, jurisdiction and regulatory requirements.

## Is Yachtmaster automatically an Australian commercial qualification?

No.

## What is AMSA Sailing Master Coastal?

An Australian domestic commercial Certificate of Competency.

## What is AMSA Sailing Master Offshore?

An Australian domestic commercial Certificate of Competency for higher-level sailing operations within its regulatory limits.

## Does SailingSchools.com.au list sailing clubs?

Not in the primary school directory.

## Why?

Because the site is specifically designed to help people find dedicated schools and training providers rather than becoming another general club directory.

---

# PART 25: EDITORIAL STANDARD

Every page should answer:

1. **What is this?**
2. **Who is it for?**
3. **What will I learn?**
4. **What experience do I need?**
5. **What qualification will I get?**
6. **What does that qualification actually mean?**
7. **What comes before it?**
8. **What comes after it?**
9. **Which Australian schools offer it?**
10. **What should I check before booking?**

This structure makes the site educational rather than promotional.

---

# PART 26: WHAT MAKES SAILINGSCHOOLS.COM.AU DIFFERENT

The site should never simply say:

> Here are ten sailing schools.

It should be capable of answering:

> I have never sailed before, I live in Brisbane, I eventually want to buy a 45-foot catamaran and sail to the Pacific. What training should I take?

The answer should be generated from the learning architecture:

```text
Beginner yacht sailing
↓
Crew skills
↓
Navigation
↓
Skipper training
↓
Catamaran-specific training
↓
Marine radio
↓
Diesel
↓
First aid
↓
Safety & Sea Survival
↓
Own-boat or charter practice
↓
Coastal passages
↓
Offshore development
```

Or:

> My 9-year-old wants to learn.

```text
Tackers Intro
↓
Tackers 1
↓
Tackers 2
↓
Tackers 3
↓
Dinghy development
↓
Racing if interested
```

Or:

> I already sail and want to charter in Europe.

```text
Evaluate present competence
↓
Appropriate skipper qualification
↓
Check charter-company requirements
↓
Check ICC eligibility
↓
VHF / radio requirement
↓
Catamaran training if applicable
↓
Charter preparation
```

Or:

> I want to work as a commercial sailing skipper in Australia.

```text
Determine intended commercial role
↓
Check AMSA certificate required
↓
Work backwards through eligibility
↓
Complete required sea service
↓
Obtain required radio / first aid / medical
↓
Use recognised sailing credentials where applicable
↓
Apply through AMSA pathway
```

That is the core competitive advantage of SailingSchools.com.au.

It becomes not merely a directory of Australian sailing schools, but the **navigation system for sailing education in Australia**.