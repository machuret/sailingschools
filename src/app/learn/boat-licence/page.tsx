import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { faqPage, itemList } from '@/lib/schema';
import { licences, licenceChecked } from '@/lib/licences';

export const metadata: Metadata = {
  title: 'Boat Licence Australia | Do You Need One to Sail?',
  description:
    'Boat licence rules for sailors in all eight Australian states, compared. Under sail you rarely need one — your auxiliary engine is a different question.',
  alternates: { canonical: '/learn/boat-licence/' },
};

export default function BoatLicenceHubPage() {
  return (
    <>
      <JsonLd
        nodes={[
          itemList(
            'Boat licence rules by Australian state',
            licences.map((l) => ({ name: l.state, href: `/learn/${l.slug}/` })),
          ),
          faqPage(
            licences.map((l) => ({
              question: `Do you need a boat licence to sail in ${l.state}?`,
              answer: `${l.short} ${l.rule}`,
            })),
          ),
        ]}
      />

      <section className="hero short">
        <div className="hero-photo">
          <ImageSlot tone="deep" placeholder="Drop a photograph — a yacht motoring out of a marina" />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-in">
          <div>
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Boat licences' }]} />
            <h1>
              Do You Need a Boat Licence <em>to Sail?</em>
            </h1>
            <p className="sub">
              Almost never under sail alone — and quite often the moment you start the engine. Every
              Australian state and territory sets its own rule, the thresholds differ enormously, and
              the Northern Territory has no licence at all.
            </p>
            <div className="cta">
              <a className="pill pill-orange" href="#compare">
                Compare all eight
              </a>
              <Link className="pill pill-ghost" href="/find-a-course/">
                Find a sailing course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: '68ch' }}>
            <span className="kicker">The short version</span>
            <h2 className="h2">Sailing is not the problem. The auxiliary is.</h2>
            <p className="copy">
              No Australian jurisdiction requires a licence to sail an unpowered boat. A dinghy, a
              sailboard or a keelboat with no engine needs nothing anywhere in the country. That is
              why dinghy sailing is the simplest legal way into the sport.
            </p>
            <p className="copy">
              Cruising yachts are different, because they have an auxiliary engine — and four states
              set their threshold by engine power, at a level almost every yacht exceeds. Queensland
              and Western Australia trigger at 4.5 kW, roughly six horsepower. Tasmania triggers at
              four horsepower. Victoria and South Australia have no threshold at all: any engine, any
              size, licence required.
            </p>
            <p className="copy">
              A 30-foot cruising yacht typically carries 15 to 30 horsepower. So in most of Australia,
              owning or chartering a yacht means you need a recreational boat licence to motor it out
              of the berth, even though the sailing itself needs nothing.
            </p>
            <p className="copy">
              New South Wales is the outlier, and the most sailing-friendly: its trigger is speed, not
              power. You need a licence at 10 knots or more, which most displacement yachts will never
              reach under auxiliary.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" id="compare">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">All eight jurisdictions</span>
              <h2 className="h2">The rule, state by state</h2>
            </div>
            <span className="tag tag-cream">Checked {licenceChecked}</span>
          </div>
          <div className="scroll-x">
            <table className="table">
              <thead>
                <tr>
                  <th>State or territory</th>
                  <th>Licence needed?</th>
                  <th>What triggers it</th>
                  <th>Authority</th>
                </tr>
              </thead>
              <tbody>
                {licences.map((l) => (
                  <tr key={l.slug}>
                    <td>
                      <b>
                        <Link href={`/learn/${l.slug}/`}>{l.state}</Link>
                      </b>
                    </td>
                    <td>
                      {l.required === 'no' ? (
                        <span className="tag tag-sky">No</span>
                      ) : l.required === 'yes' ? (
                        <span className="tag tag-orange">Yes</span>
                      ) : (
                        <span className="tag tag-cream">Sometimes</span>
                      )}
                    </td>
                    <td>{l.short}</td>
                    <td>{l.authority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="copy" style={{ marginTop: 24, maxWidth: '68ch' }}>
            Rules were checked against each authority in {licenceChecked} and every page carries that
            date. Licensing changes; confirm with the authority before relying on any of it.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="kicker">Read the detail</span>
              <h2 className="h2">Your state</h2>
            </div>
          </div>
          <div className="rows">
            {licences.map((l) => (
              <Link className="row" href={`/learn/${l.slug}/`} key={l.slug}>
                <div>
                  <h3>Boat licence in {l.state}</h3>
                  <p>{l.description}</p>
                </div>
                <span className="arrow">
                  <i className="ph-duotone ph-caret-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Do not confuse the two</span>
            <h2 className="h2">A licence is not a sailing qualification</h2>
            <p className="copy">
              A recreational boat licence tests that you can operate a powered vessel safely and know
              the rules of the water. It is issued by a state government and it is a legal permission.
            </p>
            <p className="copy">
              A sailing qualification — Australian Sailing, RYA, IYT or American Sailing — is issued
              by a training scheme and demonstrates competence at sailing a boat. It is not a legal
              permission, and it does not substitute for a licence where one is required.
            </p>
            <p className="copy">
              You may well need both. A charter company will ask about the qualification; a marine
              officer will ask about the licence.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link className="pill pill-navy" href="/qualifications/rya-vs-iyt-vs-asa/">
                Compare sailing qualifications
              </Link>
            </div>
          </div>
          <div className="rows" style={{ marginTop: 0 }}>
            <Link className="row" href="/pathways/complete-beginner/">
              <div>
                <h3>Learning to sail from zero</h3>
                <p>Dinghy, keelboat or straight onto a cruising yacht</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/sailing-schools/">
              <div>
                <h3>Sailing schools by state</h3>
                <p>Who teaches what, and where</p>
              </div>
              <span className="arrow">
                <i className="ph-duotone ph-caret-right" />
              </span>
            </Link>
            <Link className="row" href="/faq/">
              <div>
                <h3>Common questions</h3>
                <p>Straight answers on courses, schemes and what they get you</p>
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
            <h2>Licence sorted. Now learn to sail.</h2>
            <p>
              Three questions — your experience, the boat you want to sail, and your goal — give you a
              starting course and the schools that teach it near you.
            </p>
          </div>
          <div className="btns">
            <Link className="pill pill-orange" href="/find-a-course/">
              Find a course
            </Link>
            <Link className="pill pill-ghost" href="/courses/">
              Browse courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
