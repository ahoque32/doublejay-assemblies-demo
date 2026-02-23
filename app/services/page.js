const services = [
  'Furniture Assembly (IKEA, Wayfair, Amazon, custom)',
  'TV Mounting + basic cable organization',
  'Fitness / Gym Equipment Assembly & Repair',
  'Gazebos & Pergolas',
  'Storage Shed Assembly',
  'Closet Installation',
  'Window Treatment Installation',
  'Holiday Lighting Setup',
  'Playset Restoration & Relocation',
  'Commercial office and multi-unit assembly work'
];

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <h1>Assembly Services</h1>
        <p className="lead">Built to help visitors quickly find what they need and request a quote.</p>
        <div className="cards">
          {services.map((service) => (
            <article key={service} className="card"><h3>{service}</h3></article>
          ))}
        </div>
      </div>
    </main>
  );
}
