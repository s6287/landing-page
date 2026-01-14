import Image from 'next/image';

const Programs = () => {
  const programs = [
    {
      title: 'Academy',
      description: 'Live and train with us',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
    {
      title: 'Camps',
      description: 'Train like a pro with us',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=600&q=80',
    },
    {
      title: 'Performance',
      description: 'Elevate your game with us',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&q=80',
    },
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="programs-header">
        <div>
          <h2 className="section-title">Programs</h2>
          <p className="programs-subtitle">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <button className="btn-register">Register Now</button>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <Image
              src={program.image}
              alt={program.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="program-overlay">
              <h3 className="program-title">{program.title}</h3>
              <p className="program-desc">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
