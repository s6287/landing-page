'use client';

import { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Us' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
  ];

  const stats = [
    { number: '20', label: 'courts' },
    { number: '12', label: 'coaches' },
    { number: '17', label: 'years' },
    { number: '10', label: 'clubs' },
  ];

  const images = [
    'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&q=80',
    'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&q=80',
    'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=400&q=80',
    'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&q=80',
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-letter">A</div>

      <p className="about-intro">
        To be the first venue in the world to have <span className="highlight">60 multi surface courts</span>
        <br />
        at one location and establish first one stop tennis academy
        <br />
        in the Asia Pacific producing grand slam champions.
      </p>

      <div className="about-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`about-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            To be the first venue in the world to have 60 multi surface courts at
            one location and establish first one stop tennis academy in the Asia
            Pacific producing grand slam champions.
          </p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="btn-read-more">Read More</button>
        </div>

        <div className="about-right">
          <div className="about-images">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Tennis activity ${index + 1}`}
                width={300}
                height={200}
                className="about-img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
