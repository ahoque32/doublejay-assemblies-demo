export default function ContactPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <h1>Request a Quote</h1>
        <p className="lead">Fast intake form designed to increase submissions on mobile.</p>
        <form className="quoteForm">
          <label>Name<input type="text" placeholder="Your name" required /></label>
          <label>Email<input type="email" placeholder="you@email.com" required /></label>
          <label>Phone<input type="tel" placeholder="(xxx) xxx-xxxx" required /></label>
          <label>City<input type="text" placeholder="Baton Rouge" required /></label>
          <label>Service Needed
            <select defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Furniture Assembly</option>
              <option>TV Mounting</option>
              <option>Gym Equipment</option>
              <option>Gazebo / Pergola / Shed</option>
              <option>Other</option>
            </select>
          </label>
          <label>Project Details<textarea rows={4} placeholder="Share what needs to be assembled..." /></label>
          <button type="submit" className="btn btnPrimary">Submit Quote Request</button>
          <p className="muted">Demo mode: no backend connected yet.</p>
        </form>
      </div>
    </main>
  );
}
