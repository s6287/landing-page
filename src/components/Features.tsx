import Image from 'next/image';

const Features = () => {
  const features = [
    'First venue in the world',
    'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
    'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
    'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
    'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius',
    'First one stop tennis academy in Asia Pacific',
  ];

  return (
    <section className="features-section">
      <Image
        src="/images/net-pattern.png"
        alt="Net pattern"
        fill
        className="features-bg"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />

      <div className="features-header">
        <div>
          <h2 className="section-title">key Features</h2>
          <p className="features-subtitle">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>
        <button className="btn-register">Register Now</button>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-arrow">→</span>
            <span>{feature}</span>
          </div>
        ))}
        {features.map((feature, index) => (
          <div key={`right-${index}`} className="feature-item">
            <span className="feature-arrow">→</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
