const Quote = () => {
  return (
    <section className="quote-section">
      <div
        className="quote-bg-pattern"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 400'%3E%3Cpath fill='none' stroke='%23d0d0d0' stroke-width='1' d='M0 50 Q250 100 500 50 T1000 50 M0 100 Q250 150 500 100 T1000 100 M0 150 Q250 200 500 150 T1000 150 M0 200 Q250 250 500 200 T1000 200 M0 250 Q250 300 500 250 T1000 250 M0 300 Q250 350 500 300 T1000 300 M0 350 Q250 400 500 350 T1000 350'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="quote-content">
        <p className="quote-text">
          &ldquo; We have created an environment ideal for
          building craft. Our goal is to be recognized as the
          best tennis performance centre in the world. &rdquo;
        </p>

        <div className="quote-divider"></div>

        <p className="quote-author">John Doe</p>
        <p className="quote-position">Chairman</p>
      </div>
    </section>
  );
};

export default Quote;
