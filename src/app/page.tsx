import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { organization, website } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd nodes={[organization(), website()]} />
      <section className="hero">
        <div className="hero-photo">
          <ImageSlot tone="deep" live
            placeholder="Drop your hero photograph — a yacht under sail off the Australian coast"
          />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <h1>
              Australia&rsquo;s <em>Independent</em> Guide to Learning to Sail
            </h1>
            <p className="sub">
              Find sailing schools, sailing courses and the right path to learn to sail — from your
              first afternoon on the water to Yachtmaster, bareboat charter or owning your own
              yacht.
            </p>
            <div className="cta">
              <Link className="pill pill-orange" href="/find-a-course/">
                Find a course
              </Link>
              <Link className="pill pill-sky" href="/sailing-schools/new-south-wales/sydney/">
                Browse schools
              </Link>
            </div>
          </div>
          <div className="glass-row">
            <Link className="glass" href="/pathways/complete-beginner/">
              <h3>How to learn to sail from zero experience</h3>
              <p>
                There is no rule requiring a complete beginner to start in a dinghy. Three legitimate
                routes in — and which one suits you depends on the boat you eventually want to
                sail&hellip;
              </p>
              <span className="more">Read the pathway →</span>
            </Link>
            <Link className="glass" href="/qualifications/rya-vs-iyt-vs-asa/">
              <h3>RYA vs IYT vs ASA in Australia</h3>
              <p>
                Three international schemes teach cruising yachts here. They overlap more than they
                differ — the best qualification is the one that matches your goal, your vessel and
                the schools near you&hellip;
              </p>
              <span className="more">Compare them →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Why SailingSchools.com.au?</span>
              <h2 className="lead">
                Australia does not have one single learn-to-sail system — so we start with your goal,
                not the certificate name.
              </h2>
            </div>
            <Link className="pill pill-sky" href="/faq/">
              About us
            </Link>
          </div>
          <div className="panel feat">
            <div>
              <i className="ph-duotone ph-compass" />
              <h3>Independent Guidance</h3>
              <p>
                Not a directory of yacht clubs — dedicated schools, academies and training providers
                only
              </p>
            </div>
            <div>
              <i className="ph-duotone ph-certificate" />
              <h3>Every Scheme Explained</h3>
              <p>
                Australian Sailing, RYA, IYT, American Sailing and AMSA commercial pathways, side by
                side
              </p>
            </div>
            <div>
              <i className="ph-duotone ph-map-trifold" />
              <h3>Goal-Based Pathways</h3>
              <p>Charter, ownership, racing, offshore or Yachtmaster — what to learn and in which order</p>
            </div>
            <div>
              <i className="ph-duotone ph-calendar-check" />
              <h3>Dated, Verified Prices</h3>
              <p>Never an undated price; accreditation and course lists checked against the schools</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Start here</span>
              <h2 className="h2">What do you want to do?</h2>
            </div>
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
          </div>
          <div className="cards">
            <Link className="ccard" href="/pathways/complete-beginner/">
              <div className="photo">
                <span className="badge">Beginner</span>
                <ImageSlot placeholder="Photo — first sail on a keelboat" />
              </div>
              <h3>Learn to sail from scratch</h3>
              <p>
                Dinghy, keelboat or straight onto a cruising yacht. Taster days, Discover Sailing,
                Start Crewing, Start Yachting and Competent Crew.
              </p>
              <div className="foot">
                <span className="tag tag-cream">3 routes in</span>
                <span className="arrow">
                  <i className="ph-duotone ph-arrow-right" />
                </span>
              </div>
            </Link>
            <Link className="ccard" href="/rya/competent-crew/">
              <div className="photo">
                <span className="badge">Skipper</span>
                <ImageSlot placeholder="Photo — skipper at the helm" />
              </div>
              <h3>Become a skipper</h3>
              <p>
                Start Skippering on a keelboat or RYA Day Skipper on a yacht — the move from handling
                sails to taking responsibility for the boat.
              </p>
              <div className="foot">
                <span className="tag tag-cream">AS · RYA · IYT</span>
                <span className="arrow">
                  <i className="ph-duotone ph-arrow-right" />
                </span>
              </div>
            </Link>
            <Link className="ccard" href="/qualifications/rya-vs-iyt-vs-asa/">
              <div className="photo">
                <span className="badge">Charter</span>
                <ImageSlot placeholder="Photo — catamaran at anchor, Whitsundays" />
              </div>
              <h3>Charter a yacht or catamaran</h3>
              <p>
                Day Skipper, Bareboat Skipper or equivalent, an ICC where required, and
                multihull-specific training before you take a cat.
              </p>
              <div className="foot">
                <span className="tag tag-cream">+ ICC</span>
                <span className="arrow">
                  <i className="ph-duotone ph-arrow-right" />
                </span>
              </div>
            </Link>
            <Link className="ccard" href="/qualifications/rya-vs-iyt-vs-asa/">
              <div className="photo">
                <span className="badge">Advanced</span>
                <ImageSlot placeholder="Photo — offshore passage at dusk" />
              </div>
              <h3>Offshore, Yachtmaster or commercial</h3>
              <p>
                Navigation, sea survival, radio and passages; the RYA or IYT Yachtmaster route; or
                working backwards from AMSA Sailing Master.
              </p>
              <div className="foot">
                <span className="tag tag-cream">RYA · IYT · AMSA</span>
                <span className="arrow">
                  <i className="ph-duotone ph-arrow-right" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Where to learn</span>
            <h2 className="h2">Sailing schools in every state</h2>
            <p className="copy">
              Sydney is Australia&rsquo;s largest sailing-training market, but dedicated schools
              operate from Moreton Bay and the Whitsundays to Port Phillip, Fremantle, Adelaide and
              Hobart. Each profile shows accreditation, training boats, course lists and dated prices
              — verified, not copied from a brochure.
            </p>
            <div className="rows">
              <Link className="row" href="/sailing-schools/new-south-wales/">
                <div>
                  <h3>New South Wales</h3>
                  <p>
                    Sydney Harbour, Middle Harbour, Pittwater, Broken Bay, Botany Bay — 14 schools
                  </p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/sailing-schools/queensland/">
                <div>
                  <h3>Queensland</h3>
                  <p>Brisbane, Moreton Bay, Sunshine Coast, Whitsundays, Hervey Bay — 6 schools</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/sailing-schools/victoria/">
                <div>
                  <h3>Victoria &amp; Western Australia</h3>
                  <p>Melbourne and Port Phillip; Perth, Fremantle and Geographe Bay — 9 schools</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
              <Link className="row" href="/sailing-schools/tasmania/">
                <div>
                  <h3>South Australia &amp; Tasmania</h3>
                  <p>Adelaide and Gulf St Vincent; Hobart and the Derwent — 3 schools</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="photo tall">
            <ImageSlot placeholder="Drop a photograph — training keelboat on Sydney Harbour, ferry behind" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Our guides</span>
              <h2 className="serif lead">Latest insights</h2>
            </div>
            <Link className="pill pill-orange" href="/courses/">
              View all guides
            </Link>
          </div>
          <div className="rows">
            <Link className="row" href="/pathways/complete-beginner/">
              <div>
                <h3>How to learn to sail in Australia from zero experience</h3>
                <p>
                  Dinghy, keelboat or cruising yacht? There are several legitimate starting routes,
                  and you do not need to complete one before the next. Here is how to pick the boat
                  you should start on&hellip;
                </p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/rya/competent-crew/">
              <div>
                <h3>Is RYA Competent Crew the right first course?</h3>
                <p>
                  Five days, no experience required and usually liveaboard. The purpose is not to
                  create a skipper — it is to create an active crew member who understands what is
                  happening aboard&hellip;
                </p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/qualifications/rya-vs-iyt-vs-asa/">
              <div>
                <h3>RYA vs IYT vs ASA: which qualification should an Australian sailor choose?</h3>
                <p>
                  All three teach beginner yacht training, skipper pathways and bareboat focus. The
                  real differences are catamaran certificates, Australian school availability and
                  commercial progression&hellip;
                </p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>Not sure which course is right for you?</h2>
            <p>
              Three questions — have you sailed before, what boat do you want to sail, and what is
              your goal — give you a starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/qualifications/rya-vs-iyt-vs-asa/">
              Compare qualifications
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
