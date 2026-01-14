'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section">
      <Image
        src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80"
        alt="Tennis courts at sunset"
        fill
        className="hero-bg"
        priority
        quality={90}
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">SSA HUNTER VALLEY</p>
        <h1 className="hero-title">
          GROW YOUR GAME WITH THE
          <span className="hero-title-highlight">PROFESSIONALS</span>
        </h1>

        {/* Underline decoration */}
        <div className="hero-underline"></div>

        <div className="hero-tagline">
          <span>
            ADOPT
            <span className="dot"></span>
          </span>
          <span>
            NURTURE
            <span className="dot"></span>
          </span>
          <span>DELIVER</span>
        </div>

        <button className="hero-btn">Register Now</button>
      </div>

      {/* Weather Widget */}
      <div className="weather-widget">
        <div className="widget-item">
          <div className="widget-label">WEATHER</div>
          <div className="widget-location">Hunter Valley</div>
          <div className="widget-temp">
            19<sup>o</sup>C
          </div>
          <div className="widget-info">
            <span>Weather</span>
            <br />
            <span>Saturday, 8 pm</span>
          </div>
        </div>

        <div className="widget-item" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}>
          <div className="widget-label">ONGOING MATCHES</div>
        </div>

        <div className="widget-item" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}>
          <div className="widget-label">SCORE</div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
