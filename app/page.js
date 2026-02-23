import Link from 'next/link';

const featuredServices = [
  { title: 'Furniture Assembly', desc: 'IKEA, Wayfair, Amazon and custom furniture done right the first time.' },
  { title: 'TV Mounting', desc: 'Clean, secure mounting with tidy cable management options.' },
  { title: 'Gym Equipment', desc: 'Assembly + repair for home and commercial fitness setups.' },
  { title: 'Outdoor Builds', desc: 'Gazebos, pergolas, sheds, and playset restoration/relocation.' }
];

const processSteps = [
  'Tell us what needs to be assembled',
  'Get a fast quote with transparent pricing',
  'Book a convenient time window',
  'Professional on-site install and walkthrough'
];

export default function HomePage() {
  return (
    <main>
      <section className="heroSection">
        <div className="container">
          <span className="badge">DoubleJay Assemblies • Louisiana</span>
          <h1>Professional Assembly Services That Save You Time and Stress</h1>
          <p className="lead">
            From furniture and TV mounting to sheds and fitness equipment, DoubleJay Assemblies delivers fast,
            reliable installs across Baton Rouge, New Orleans, Lafayette, and surrounding areas.
          </p>
          <div className="heroCtas">
            <Link href="/contact" className="btn btnPrimary">Request a Quote</Link>
            <a href="tel:2255236604" className="btn btnGhost">Call Now: (225) 523-6604</a>
          </div>
          <div className="heroStats">
            <div><strong>Residential + Commercial</strong><span>Flexible service options</span></div>
            <div><strong>Fast Scheduling</strong><span>Quick response and booking</span></div>
            <div><strong>Trusted Local Team</strong><span>Built for Louisiana homeowners</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2>High-demand services built for conversion</h2>
            <Link href="/services" className="textLink">View all services →</Link>
          </div>
          <div className="cards">
            {featuredServices.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container twoCol">
          <div>
            <h2>Simple booking flow that drives more quote requests</h2>
            <p>
              This demo is designed around one goal: make it effortless for visitors to request a quote or call.
              The structure removes friction, highlights trust, and keeps your strongest CTAs visible.
            </p>
          </div>
          <ol className="steps">
            {processSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container ctaBanner">
          <div>
            <h2>Ready to increase calls and quote submissions?</h2>
            <p>See how this structure can plug directly into your real lead flow.</p>
          </div>
          <div className="heroCtas">
            <Link href="/contact" className="btn btnPrimary">Get My Quote</Link>
            <Link href="/areas" className="btn btnGhost">View Service Areas</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
