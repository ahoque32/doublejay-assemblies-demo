const areas = ['Baton Rouge', 'New Orleans', 'Lafayette', 'Denham Springs', 'Prairieville', 'Surrounding Louisiana Areas'];

export default function AreasPage() {
  return (
    <main className="section">
      <div className="container">
        <h1>Service Areas</h1>
        <p className="lead">Clear local targeting to improve trust and local conversion.</p>
        <div className="cards">
          {areas.map((area) => (
            <article key={area} className="card"><h3>{area}</h3></article>
          ))}
        </div>
      </div>
    </main>
  );
}
