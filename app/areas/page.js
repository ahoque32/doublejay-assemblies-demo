import Link from 'next/link';

const primaryCities = [
  'Baton Rouge',
  'New Orleans',
  'Lafayette',
  'Denham Springs',
  'Prairieville',
  'Surrounding Louisiana Areas'
];

const neighborhoodExamples = [
  {
    city: 'Baton Rouge area examples',
    spots: ['Mid City', 'Garden District', 'Shenandoah', 'Central', 'Zachary', 'Port Allen']
  },
  {
    city: 'New Orleans area examples',
    spots: ['Metairie', 'Kenner', 'Uptown', 'Lakeview', 'Harahan', 'Westbank areas']
  },
  {
    city: 'Lafayette area examples',
    spots: ['Youngsville', 'Broussard', 'Scott', 'Carencro', 'River Ranch', 'Milton']
  }
];

const trustItems = [
  {
    title: 'Local routing awareness',
    text: 'Scheduling and quote communication is organized around Louisiana service routes and drive-time planning.'
  },
  {
    title: 'Clear scope before dispatch',
    text: 'Project details are reviewed in advance so visit timing and equipment needs are better aligned.'
  },
  {
    title: 'Residential + commercial coverage',
    text: 'Homes, offices, and multi-unit projects can be scoped based on location and job size.'
  },
  {
    title: 'Call-first support for edge cases',
    text: 'If your city is nearby but not listed, a quick call can confirm availability and travel options.'
  }
];

export default function AreasPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pageHero">
            <div className="pageHeroGrid">
              <div>
                <span className="badge">Service Areas</span>
                <h1>Louisiana coverage built for fast scheduling and clear expectations.</h1>
                <p className="lead">
                  DoubleJay Assemblies serves core Louisiana markets and nearby communities, with quote guidance based on
                  project scope and location.
                </p>
              </div>
              <aside className="card pageAsideCard">
                <span className="badge">Before You Book</span>
                <h3>Have your city and project list ready.</h3>
                <p>
                  Sharing the install location, item count, and preferred timing helps confirm route availability and
                  speeds up quote turnaround.
                </p>
                <div className="heroCtas">
                  <Link href="/contact" className="btn btnPrimary">Request a Quote</Link>
                  <a href="tel:2255236604" className="btn btnGhost">Call to Confirm Area</a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="badge">Primary Cities</span>
              <h2>Main service markets and surrounding coverage</h2>
              <p>Use this list as a fast check. Nearby communities may still be available depending on the job.</p>
            </div>
          </div>
          <div className="cityListGrid" role="list" aria-label="Primary service cities">
            {primaryCities.map((area) => (
              <article key={area} className="card cityListCard" role="listitem">
                <h3>{area}</h3>
                <p>Quote and schedule availability varies by project type, item count, and timing window.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="badge">Neighborhood Examples</span>
              <h2>Examples of nearby communities and local areas</h2>
              <p>
                These are examples to help visitors recognize coverage patterns. Call if your neighborhood is not shown.
              </p>
            </div>
          </div>
          <div className="cards areaExampleGrid">
            {neighborhoodExamples.map((group) => (
              <article className="card areaExampleCard" key={group.city}>
                <h3>{group.city}</h3>
                <div className="chipList" aria-label={group.city}>
                  {group.spots.map((spot) => (
                    <span className="chip" key={spot}>{spot}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="badge">Trust & Coverage Notes</span>
              <h2>How service-area requests are handled</h2>
              <p>Clear expectations reduce scheduling friction and help projects get booked faster.</p>
            </div>
          </div>
          <div className="trustRow" role="list" aria-label="Area trust details">
            {trustItems.map((item) => (
              <div className="trustItem" role="listitem" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <span className="badge">Call CTA</span>
              <h2>Not sure if your address is in range? Call and confirm before you wait.</h2>
              <p>
                A quick phone call can confirm travel coverage, timing options, and whether your project is best handled
                in one visit or staged in phases.
              </p>
            </div>
            <div className="heroCtas">
              <a href="tel:2255236604" className="btn btnGhost">Call (225) 523-6604</a>
              <Link href="/contact" className="btn btnGhost">Send Project Details</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
