'use client';

import { useState } from 'react';
import Image from 'next/image';

const Location = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const locations = [
    { name: 'Hunter Valley Golf And Country Club', distance: '220m' },
    { name: 'Rydges Resort Hunter Valley', distance: '550m' },
    { name: 'Cessnock Airport', distance: '1.7km' },
    { name: 'Cessnock CBD', distance: '7km' },
    { name: 'Nulkaba Public School', distance: '4.8km' },
    { name: 'Cessnock Hospital', distance: '7.3km' },
    { name: 'Mcdonalds, KFC, Oporto', distance: '7km' },
  ];

  const slides = [
    'https://images.unsplash.com/photo-1565402170291-8491f14678db?w=800&q=80',
    'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  ];

  return (
    <section className="location-section">
      <div className="location-left">
        <p className="location-launching">LAUNCHING</p>
        <h2 className="location-title">
          Signature Slam Academy
          <br />
          Hunter Valley
        </h2>
        <p className="location-subtitle">SSA Connectivity</p>

        <ul className="location-list">
          {locations.map((location, index) => (
            <li key={index} className="location-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
              </svg>
              <span>{location.name}</span>
              <span className="location-distance">- - - - - - - {location.distance}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="location-right">
        <Image
          src={slides[activeSlide]}
          alt="Aerial view of SSA facility"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="location-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`location-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
