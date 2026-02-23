import Link from 'next/link';

const serviceHighlights = [
  {
    icon: 'FA',
    title: 'Furniture Assembly',
    desc: 'Bedrooms, offices, retail fixtures, and flat-pack installs completed with careful alignment and cleanup.',
    bullets: ['Single items or full-room setups', 'IKEA, Wayfair, Amazon, and more']
  },
  {
    icon: 'TV',
    title: 'TV Mounting',
    desc: 'Secure wall mounting with placement guidance for a clean viewing angle and tidy finish.',
    bullets: ['Living rooms, offices, and conference rooms', 'Cable management add-ons available']
  },
  {
    icon: 'GY',
    title: 'Gym Equipment',
    desc: 'Home and commercial fitness equipment assembled to spec so everything feels stable and ready to use.',
    bullets: ['Treadmills, racks, benches, bikes', 'Reassembly after moves available']
  },
  {
    icon: 'OD',
    title: 'Outdoor Builds',
    desc: 'Sheds, pergolas, gazebos, and play equipment installed with weather-conscious planning.',
    bullets: ['Backyard structures and kits', 'Large-item team scheduling options']
  }
];

const processSteps = [
  {
    title: 'Share the project',
    body: 'Send the item type, brand/link, quantity, and location details so we can scope the job accurately.'
  },
  {
    title: 'Receive a clear quote',
    body: 'We provide straightforward pricing and timing guidance before you book, with no confusing back-and-forth.'
  },
  {
    title: 'Book and get it done',
    body: 'Choose a time window that works for you, then we handle setup, assembly, and a final walkthrough.'
  }
];

const trustFeatures = [
  { title: 'Transparent Pricing', text: 'Upfront quote guidance before the appointment is confirmed.' },
  { title: 'Professional Communication', text: 'Fast responses and clear arrival windows keep projects moving.' },
  { title: 'Residential + Commercial', text: 'Homes, offices, rentals, and retail environments welcome.' },
  { title: 'Louisiana Coverage', text: 'Baton Rouge, New Orleans, Lafayette, and nearby communities.' }
];

const trustChips = ['Fast quote replies', 'Careful in-home service', 'Flexible scheduling', 'Local team'];

function QuickQuoteForm() {
  return (
    <form className="quoteInline" aria-label="Quick quote form">
      <div className="quoteInlineGrid">
        <label className="field">
          <span className="fieldLabel">ZIP / City</span>
          <input type="text" placeholder="Baton Rouge" name="city" />
        </label>
        <label className="field">
          <span className="fieldLabel">Service</span>
          <select defaultValue="" name="service">
            <option value="" disabled>Choose service</option>
            <option>Furniture Assembly</option>
            <option>TV Mounting</option>
            <option>Gym Equipment</option>
            <option>Outdoor Build</option>
          </select>
        </label>
        <label className="field">
          <span className="fieldLabel">Timeline</span>
          <select defaultValue="" name="timeline">
            <option value="" disabled>When do you need it?</option>
            <option>ASAP</option>
            <option>This week</option>
            <option>Next 2 weeks</option>
            <option>Planning ahead</option>
          </select>
        </label>
        <button type="submit" className="btn btnPrimary">Get Quote</button>
      </div>
      <p className="quoteInlineNote">Demo UI only. No backend is connected in this pass.</p>
    </form>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="heroSection">
        <div className="container">
          <div className="heroGrid">
            <div>
              <span className="eyebrow">DoubleJay Assemblies • Louisiana Service Area</span>
              <h1>Assembly help that feels polished, fast, and easy to book.</h1>
              <p className="lead">
                DoubleJay Assemblies handles furniture builds, TV mounting, gym equipment setup, and outdoor kits
                with a premium service experience built around clear communication and dependable workmanship.
              </p>
              <div className="heroCtas">
                <Link href="/contact" className="btn btnPrimary">Request a Quote</Link>
                <a href="tel:2255236604" className="btn btnGhost">Call (225) 523-6604</a>
              </div>
              <div className="pillRow" aria-label="Trust badges">
                {trustChips.map((chip) => (
                  <span className="trustChip" key={chip}>{chip}</span>
                ))}
              </div>
              <div className="heroStats" aria-label="Service proof points">
                <div>
                  <strong>Residential + Commercial</strong>
                  <span>Homes, offices, rental turns, and retail installations.</span>
                </div>
                <div>
                  <strong>Quick Quote Turnaround</strong>
                  <span>Simple intake flow to reduce back-and-forth before booking.</span>
                </div>
                <div>
                  <strong>Wide Service Coverage</strong>
                  <span>Baton Rouge, New Orleans, Lafayette, and surrounding areas.</span>
                </div>
              </div>
            </div>
            <aside className="heroCard" aria-labelledby="hero-quote-title">
              <span className="badge">Primary CTA • Quote Request</span>
              <h2 id="hero-quote-title">Start with a quick project quote</h2>
              <p>
                Tell us what you need assembled and your preferred timing. We&apos;ll follow up with scope and scheduling
                options.
              </p>
              <QuickQuoteForm />
              <div className="quickMeta" aria-label="Customer reassurance">
                <div>
                  <strong>Clear scope</strong>
                  <span>Project details reviewed before scheduling.</span>
                </div>
                <div>
                  <strong>Flexible timing</strong>
                  <span>Daytime and weekday options available.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quickQuoteStrip" aria-labelledby="quick-quote-strip-title">
            <div className="quickQuoteGrid">
              <div>
                <span className="badge">Quick Quote</span>
                <h2 id="quick-quote-strip-title">Need pricing fast for an upcoming assembly project?</h2>
                <p>
                  Use the quick form for a fast estimate request, or open the full quote page for detailed project notes.
                </p>
              </div>
              <div>
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="badge">How It Works</span>
              <h2>Three simple steps from request to completed setup</h2>
              <p>
                The homepage is structured to move visitors from interest to action quickly while reinforcing trust.
              </p>
            </div>
          </div>
          <div className="stepGrid">
            {processSteps.map((step, index) => (
              <article className="stepCard" key={step.title}>
                <div className="stepNum" aria-hidden="true">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="badge">Service Highlights</span>
              <h2>Built for the jobs people actually need handled this week</h2>
              <p>
                Focused service categories keep the page scannable while giving visitors confidence that their project
                is a fit.
              </p>
            </div>
            <Link href="/services" className="textLink">View all services →</Link>
          </div>
          <div className="featureGrid">
            {serviceHighlights.map((service) => (
              <article className="highlightCard" key={service.title}>
                <div className="cardIcon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="checkList">
                  {service.bullets.map((bullet) => (
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
          <div className="sectionHead">
            <div>
              <span className="badge">Why Customers Book</span>
              <h2>Trust signals that support conversion without clutter</h2>
              <p>
                This row is designed for reassurance: concise proof points, readable on mobile, and easy to extend later.
              </p>
            </div>
          </div>
          <div className="trustRow" role="list" aria-label="Trust features">
            {trustFeatures.map((item) => (
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
              <span className="badge">Final CTA</span>
              <h2>Ready to book your assembly project?</h2>
              <p>
                Request a quote online or call to discuss the project scope, timeline, and location with DoubleJay
                Assemblies.
              </p>
            </div>
            <div className="heroCtas">
              <Link href="/contact" className="btn btnGhost">Get a Quote</Link>
              <a href="tel:2255236604" className="btn btnGhost">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
