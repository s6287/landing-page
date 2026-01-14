const Marquee = () => {
  const items = ['ADOPT', 'NURTURE', 'DELIVER'];

  return (
    <section className="marquee-section">
      <div className="marquee-content">
        {/* First set */}
        {items.map((item, index) => (
          <span
            key={`first-${index}`}
            className={`marquee-item ${index % 2 === 0 ? 'outline' : 'green'}`}
          >
            {item}
            <span className="marquee-dot"></span>
          </span>
        ))}
        {/* Second set for seamless loop */}
        {items.map((item, index) => (
          <span
            key={`second-${index}`}
            className={`marquee-item ${index % 2 === 0 ? 'outline' : 'green'}`}
          >
            {item}
            <span className="marquee-dot"></span>
          </span>
        ))}
        {/* Third set */}
        {items.map((item, index) => (
          <span
            key={`third-${index}`}
            className={`marquee-item ${index % 2 === 0 ? 'outline' : 'green'}`}
          >
            {item}
            <span className="marquee-dot"></span>
          </span>
        ))}
        {/* Fourth set */}
        {items.map((item, index) => (
          <span
            key={`fourth-${index}`}
            className={`marquee-item ${index % 2 === 0 ? 'outline' : 'green'}`}
          >
            {item}
            <span className="marquee-dot"></span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
