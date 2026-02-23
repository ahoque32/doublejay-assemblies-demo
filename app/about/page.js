import Link from 'next/link';

const whyChooseUs = [
  {
    title: 'Dependable Communication',
    text: 'Clear quote conversations and scheduling updates help customers know what to expect before the visit.'
  },
  {
    title: 'Careful, Professional Work',
    text: 'Assembly jobs are completed with attention to alignment, stability, and the overall finished look.'
  },
  {
    title: 'Wide Project Range',
    text: 'DoubleJay Assemblies supports furniture, TV mounting, fitness equipment, and large outdoor builds.'
  },
  {
    title: 'Local Louisiana Coverage',
    text: 'Service routes support core Louisiana markets with flexible scheduling based on job scope and location.'
  }
];

const processSummary = [
  'Share your project details, product links, and location.',
  'Receive quote guidance and timing options based on scope.',
  'Book the visit and get a professional assembly setup completed.'
];

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pageHero">
            <div className="pageHeroGrid">
              <div>
                <span className="badge">About DoubleJay Assemblies</span>
                <h1>A local assembly service built around trust, clarity, and dependable results.</h1>
                <p className="lead">
                  DoubleJay Assemblies supports homeowners, businesses, and property teams that want professional assembly
                  work without a confusing booking process.
                </p>
                <p className="pageBodyText">
                  The brand focuses on practical service: clear scope conversations, responsive communication, and careful
                  on-site work for projects ranging from simple furniture builds to larger installations.
                </p>
              </div>
              <aside className="card pageAsideCard" aria-labelledby="about-story-title">
                <span className="badge">Brand Story</span>
                <h3 id="about-story-title">Built to make assembly projects feel easier from the first message.</h3>
                <p>
                  The goal is straightforward: help customers move from “I still need this assembled” to “it&apos;s done and
                  set up correctly” with less friction and better communication.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="badge">Why Choose Us</span>
              <h2>Reasons customers choose DoubleJay for assembly work</h2>
              <p>Trust-building points presented in a scannable layout for quick decision-making.</p>
            </div>
          </div>
          <div className="featureGrid" role="list" aria-label="Reasons to choose DoubleJay Assemblies">
            {whyChooseUs.map((item) => (
              <article className="highlightCard" role="listitem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quickQuoteStrip">
            <div className="quickQuoteGrid aboutProcessGrid">
              <div>
                <span className="badge">Process Summary</span>
                <h2>How projects move from quote request to completed setup</h2>
                <p>
                  The process is designed to stay simple on mobile while still collecting enough detail to quote accurately.
                </p>
              </div>
              <div className="card insetCard">
                <ol className="processList">
                  {processSummary.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <span className="badge">Next Step</span>
              <h2>Ready to work with DoubleJay Assemblies?</h2>
              <p>
                Send your project details for quote guidance or call to talk through the scope before booking.
              </p>
            </div>
            <div className="heroCtas">
              <Link href="/contact" className="btn btnGhost">Request a Quote</Link>
              <Link href="/services" className="btn btnGhost">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
