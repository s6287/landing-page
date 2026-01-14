import Image from 'next/image';

const Facilities = () => {
  const facilities = [
    {
      title: 'Tennis',
      tags: [
        { label: '9 Clay Courts', filled: false },
        { label: '4 Hard Courts', filled: false },
      ],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80',
    },
    {
      title: 'Accommodation',
      tags: [{ label: '5 Star Hotel', filled: false }],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    },
    {
      title: 'Fitness',
      tags: [
        { label: 'Gym', filled: true },
        { label: 'Fitness Room', filled: true },
      ],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    },
    {
      title: 'Recovery',
      tags: [
        { label: 'Spa', filled: true },
        { label: 'Pool', filled: true },
        { label: 'Massage', filled: true },
      ],
      description: '',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    },
  ];

  return (
    <section id="facilities" className="facilities-section">
      <div className="facilities-header">
        <h2 className="section-title">Facilities</h2>
        <p className="features-subtitle">
          Lorem Ipsum has been the industry&apos;s standard dummy
          text ever since the 1500s,
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-img-wrapper">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="facility-img"
                style={{ objectFit: 'cover' }}
              />
              <div className="facility-play-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1B3A4B">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <h3 className="facility-title">{facility.title}</h3>
            <div className="facility-tags">
              {facility.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`facility-tag ${tag.filled ? 'filled' : ''}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            {facility.description && (
              <p className="facility-desc">{facility.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Background decorative logo */}
      <div className="facilities-bg-logo">
        <svg viewBox="0 0 200 200" fill="#9AB61A" opacity="0.2">
          <path d="M100 0 L200 100 L100 200 L0 100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Facilities;
