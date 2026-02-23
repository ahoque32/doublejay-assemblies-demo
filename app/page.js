const services = [
  'Furniture Assembly (including IKEA)',
  'TV Mounting',
  'Fitness / Gym Equipment Assembly & Repair',
  'Gazebos & Pergolas',
  'Storage Shed Assembly',
  'Closet Installation',
  'Window Treatments',
  'Holiday Lighting',
  'Playset Restoration & Relocation'
];

const trustPoints = [
  'Insured & professional service team',
  'On-time arrival with respectful technicians',
  'Transparent pricing and clear quote process',
  'Residential and commercial project experience',
  'Built for faster quote requests and direct calls'
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">DoubleJay Assemblies Demo</p>
          <h1>Done-for-you assembly services across Louisiana</h1>
          <p className="subhead">
            Fast, professional assembly and mounting for homes and businesses in Baton Rouge, New Orleans, Lafayette, and surrounding areas.
          </p>
          <div className="ctaRow">
            <a href="#quote" className="btn btnPrimary">Request a Quote</a>
            <a href="tel:2255236604" className="btn btnSecondary">Call Now: (225) 523-6604</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Services customers ask for most</h2>
          <div className="grid">
            {services.map((service) => (
              <article className="card" key={service}>
                <p>{service}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionMuted">
        <div className="container">
          <h2>Service Areas</h2>
          <p className="areas">Baton Rouge • New Orleans • Lafayette • Surrounding Louisiana Areas</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why homeowners and businesses choose DoubleJay</h2>
          <ul className="trustList">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="testimonialPlaceholder">
            <strong>Future reviews/testimonials section:</strong> Add customer photos, star ratings, and before/after assembly wins.
          </div>
        </div>
      </section>

      <section className="section sectionMuted" id="quote">
        <div className="container narrow">
          <h2>Request a Quote</h2>
          <p>Tell us what you need assembled and where you’re located. We’ll follow up fast.</p>
          <form className="quoteForm">
            <label>Name<input type="text" placeholder="Your full name" required /></label>
            <label>Email<input type="email" placeholder="you@email.com" required /></label>
            <label>Phone<input type="tel" placeholder="(xxx) xxx-xxxx" required /></label>
            <label>City<input type="text" placeholder="Baton Rouge" required /></label>
            <label>Service Type
              <select defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service} value={service}>{service}</option>)}
              </select>
            </label>
            <label>Project Details<textarea placeholder="What needs to be assembled or mounted?" rows={4}></textarea></label>
            <button type="submit" className="btn btnPrimary">Send Quote Request</button>
            <p className="confirmation">Demo mode: this form is a UX mockup for conversion flow.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
