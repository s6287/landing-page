import Image from 'next/image';

const Professionals = () => {
  const professionals = [
    {
      name: 'Craig Tiley',
      title: 'CEO Tennis Australia & Australian Open',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
      name: 'Stephen Farrow',
      title: 'Director - Tournament, Players & International Relations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
      name: 'Cameron Pearson',
      title: 'Head Major Events - Tennis Australia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
  ];

  return (
    <section className="professionals-section">
      <div className="professionals-header">
        <div>
          <h2 className="section-title">Meet our professionals</h2>
          <p className="professionals-subtitle">
            Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
        </div>
        <button className="btn-register">View All</button>
      </div>

      <div className="professionals-grid">
        {professionals.map((professional, index) => (
          <div key={index} className="professional-card">
            <Image
              src={professional.image}
              alt={professional.name}
              width={400}
              height={400}
              className="professional-img"
            />
            <h3 className="professional-name">{professional.name}</h3>
            <p className="professional-title">{professional.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Professionals;
