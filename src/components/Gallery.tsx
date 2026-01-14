import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div>
          <h2 className="section-title">A Glimpse of Excellence</h2>
          <p className="features-subtitle">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>
        <button className="btn-register">Register Now</button>
      </div>

      <div className="gallery-images">
        <Image
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80"
          alt="Tennis player serving"
          width={400}
          height={500}
          className="gallery-img grayscale"
        />
        <Image
          src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80"
          alt="Tennis courts aerial view"
          width={600}
          height={500}
          className="gallery-img"
        />
      </div>
    </section>
  );
};

export default Gallery;
