import Link from 'next/link';

const serviceCategories = [
  {
    title: 'Furniture Assembly',
    intro: 'Flat-pack and pre-fab furniture assembly for homes, rentals, and office spaces.',
    bullets: [
      'IKEA, Wayfair, Amazon, and custom furniture kits',
      'Bedroom sets, desks, shelving, dressers, and dining furniture',
      'Single-piece jobs or full-room setup appointments'
    ]
  },
  {
    title: 'TV Mounting + Interior Install Support',
    intro: 'Secure TV mounting with clean placement and simple cable organization support.',
    bullets: [
      'Living rooms, bedrooms, offices, and conference spaces',
      'Basic cable organization for a cleaner finish',
      'Placement guidance for height and viewing angle'
    ]
  },
  {
    title: 'Fitness & Specialty Equipment',
    intro: 'Assembly and repair support for home and commercial-use fitness equipment.',
    bullets: [
      'Treadmills, bikes, benches, racks, and multi-station units',
      'Reassembly support after moves or room changes',
      'Stability checks after setup'
    ]
  },
  {
    title: 'Outdoor Structures & Large Builds',
    intro: 'Backyard and exterior kit assembly for projects that need planning and precision.',
    bullets: [
      'Gazebos, pergolas, storage sheds, and playsets',
      'Holiday lighting setup and seasonal install support',
      'Large-item scheduling for multi-person jobs when needed'
    ]
  },
  {
    title: 'Home Installation Services',
    intro: 'Helpful finishing installs that make spaces functional after the main assembly is done.',
    bullets: [
      'Closet installation and organization hardware setup',
      'Window treatment installation',
      'Punch-list style install appointments for multiple items'
    ]
  },
  {
    title: 'Commercial & Multi-Unit Work',
    intro: 'Reliable assembly support for property teams, offices, and business installations.',
    bullets: [
      'Office furniture and workspace setup',
      'Multi-unit turnovers and recurring install needs',
      'Clear scope communication for larger projects'
    ]
  }
];

const miniFaq = [
  {
    q: 'What should I send for a quote?',
    a: 'The item type, brand or product link, quantity, city, and any timing needs help us provide a clear quote faster.'
  },
  {
    q: 'Do you handle more than one item in the same visit?',
    a: 'Yes. Multi-item appointments are common and can be scoped together so pricing and scheduling are straightforward.'
  },
  {
    q: 'Can I request service for a business or property project?',
    a: 'Yes. DoubleJay Assemblies supports residential and commercial assembly work, including office and multi-unit jobs.'
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pageHero">
            <div className="pageHeroGrid">
              <div>
                <span className="badge">Services</span>
                <h1>Assembly services organized by the work you actually need done.</h1>
                <p className="lead">
                  Browse service categories, confirm project fit, and move directly into a quote request with fewer
                  questions and less back-and-forth.
                </p>
                <div className="pillRow" aria-label="Service page highlights">
                  <span className="trustChip">Residential + commercial</span>
                  <span className="trustChip">Single-item or multi-item jobs</span>
                  <span className="trustChip">Large outdoor kits supported</span>
                </div>
              </div>
              <aside className="card pageAsideCard" aria-labelledby="services-page-aside-title">
                <span className="badge">Need a quick answer?</span>
                <h3 id="services-page-aside-title">Send the project details and get a quote path fast.</h3>
                <p>
                  Include the item type, city, and timing and we can confirm fit, scope, and next steps before booking.
                </p>
                <div className="heroCtas">
                  <Link href="/contact" className="btn btnPrimary">Request a Quote</Link>
                  <a href="tel:2255236604" className="btn btnGhost">Call (225) 523-6604</a>
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
              <span className="badge">Service Categories</span>
              <h2>Clear categories make project fit easy to confirm</h2>
              <p>
                Each category is written to help visitors self-qualify quickly and move into the quote form with confidence.
              </p>
            </div>
          </div>
          <div className="serviceCategoryGrid">
            {serviceCategories.map((category) => (
              <article className="card serviceCategoryCard" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.intro}</p>
                <ul className="checkList" aria-label={`${category.title} service details`}>
                  {category.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="miniFaqBlock" aria-labelledby="services-faq-title">
            <div className="sectionHead miniFaqHead">
              <div>
                <span className="badge">Mini FAQ</span>
                <h2 id="services-faq-title">Common questions before booking</h2>
                <p>Quick answers to reduce hesitation before a quote request.</p>
              </div>
            </div>
            <div className="faqList">
              {miniFaq.map((item) => (
                <details className="faqItem" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <span className="badge">Quote CTA</span>
              <h2>Have a project list ready? Let&apos;s scope it and schedule the right visit.</h2>
              <p>
                Share item details, location, and preferred timing. We&apos;ll help you move from quote to completed assembly
                with a clear plan.
              </p>
            </div>
            <div className="heroCtas">
              <Link href="/contact" className="btn btnGhost">Start Quote Request</Link>
              <Link href="/areas" className="btn btnGhost">Check Service Areas</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
