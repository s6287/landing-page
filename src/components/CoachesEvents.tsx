import Image from 'next/image';

const CoachesEvents = () => {
  return (
    <section id="coaches" className="coaches-events-section">
      <div className="coaches-card">
        <Image
          src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800&q=80"
          alt="Tennis coach"
          fill
          className="card-bg-img"
          style={{ objectFit: 'cover', objectPosition: 'right' }}
        />
        <div className="card-content">
          <h2 className="card-title">Our Coaches</h2>
          <p className="card-desc">
            Lorem Ipsum has been the industry&apos;s standard
            dummy text ever since the 1500s,
          </p>
          <a href="#" className="card-link">
            Read More
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="events-card">
        <Image
          src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80"
          alt="Tennis player serving"
          fill
          className="card-bg-img"
          style={{ objectFit: 'cover', objectPosition: 'right' }}
        />
        <div className="card-content">
          <h2 className="card-title">Events</h2>
          <p className="card-desc">
            Lorem Ipsum has been the industry&apos;s standard
            dummy text ever since the 1500s,
          </p>
          <a href="#" className="card-link">
            Read More
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoachesEvents;
