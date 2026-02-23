const contactFaq = [
  {
    q: 'How fast will I hear back?',
    a: 'Quote requests are reviewed as quickly as possible, with response timing depending on project volume and the details provided.'
  },
  {
    q: 'What details help speed up a quote?',
    a: 'Product links, item counts, photos, city, and your preferred timing help reduce follow-up questions.'
  }
];

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pageHero">
            <div className="pageHeroGrid contactHeroGrid">
              <div>
                <span className="badge">Request a Quote</span>
                <h1>Send your project details and get a clear next step.</h1>
                <p className="lead">
                  This quote form is designed for fast mobile completion while still collecting the details needed to scope
                  the job accurately.
                </p>
                <div className="contactOptions" aria-label="Phone and email contact options">
                  <a className="contactOption" href="tel:2255236604">
                    <strong>Call</strong>
                    <span>(225) 523-6604</span>
                  </a>
                  <a className="contactOption" href="mailto:hello@doublejayassemblies.com">
                    <strong>Email</strong>
                    <span>hello@doublejayassemblies.com</span>
                  </a>
                </div>
                <p className="responseNote">
                  Response-time reassurance: detailed requests usually reduce back-and-forth and help quotes move faster.
                </p>
              </div>

              <aside className="contactFormCard" aria-labelledby="quote-form-title">
                <div className="contactFormHead">
                  <span className="badge">Quote Form</span>
                  <h2 id="quote-form-title">Project intake</h2>
                  <p>Share the basics first. Add links or photos in follow-up if needed.</p>
                </div>

                <form className="quoteForm quoteFormEnhanced">
                  <div className="formGrid">
                    <label>
                      Name
                      <input type="text" placeholder="Your name" required />
                    </label>
                    <label>
                      Email
                      <input type="email" placeholder="you@email.com" required />
                    </label>
                    <label>
                      Phone
                      <input type="tel" placeholder="(xxx) xxx-xxxx" required />
                    </label>
                    <label>
                      City
                      <input type="text" placeholder="Baton Rouge" required />
                    </label>
                    <label>
                      Service Needed
                      <select defaultValue="" required>
                        <option value="" disabled>Select one</option>
                        <option>Furniture Assembly</option>
                        <option>TV Mounting</option>
                        <option>Gym Equipment</option>
                        <option>Gazebo / Pergola / Shed</option>
                        <option>Closet / Interior Install</option>
                        <option>Commercial / Multi-Unit</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label>
                      Preferred Timing
                      <select defaultValue="">
                        <option value="" disabled>Choose timing</option>
                        <option>ASAP</option>
                        <option>This week</option>
                        <option>Next 1-2 weeks</option>
                        <option>Planning ahead</option>
                      </select>
                    </label>
                    <label className="formFull">
                      Project Details
                      <textarea rows={5} placeholder="What needs to be assembled? Include item count, brand, and any location notes." />
                    </label>
                  </div>
                  <button type="submit" className="btn btnPrimary">Submit Quote Request</button>
                  <p className="muted">Demo mode: form submission is not connected to a backend in this pass.</p>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quickQuoteStrip">
            <div className="quickQuoteGrid contactSupportGrid">
              <div>
                <span className="badge">What Happens Next</span>
                <h2>Simple follow-up process after you submit</h2>
                <p>
                  Expect scope review, quote guidance, and scheduling options based on your service type, location, and
                  timing preferences.
                </p>
              </div>
              <div className="faqList faqListCompact" aria-label="Contact FAQ snippet">
                {contactFaq.map((item) => (
                  <details className="faqItem" key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
