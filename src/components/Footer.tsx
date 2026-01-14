import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navLinks = [
    'About Us',
    'Coaches',
    'News',
    'Matches',
    'Events',
    'FAQs',
    'Programs',
    'Amenities',
    'Blogs',
  ];

  return (
    <footer id="contact" className="footer">
      <nav className="footer-nav">
        {navLinks.map((link, index) => (
          <Link key={index} href="#" className="footer-nav-link">
            {link}
          </Link>
        ))}
      </nav>

      <div className="footer-main">
        <div className="footer-logo-section">
          <Image
            src="/images/logo.svg"
            alt="SSA Logo"
            width={100}
            height={80}
            className="footer-logo"
          />
          <p className="footer-logo-text">ADOPT NURTURE DELIVER</p>
        </div>

        <div className="footer-contact">
          <h3 className="footer-contact-title">Signature Slam Academy</h3>
          <p className="footer-address">
            30 Wills Hill Road, Lovedale, NSW
          </p>
          <div className="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AB61A" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+915642589752">+ 91 5642589752</a>
          </div>
          <div className="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AB61A" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:info@ssagroup.com">info@ssagroup.com</a>
          </div>
        </div>

        <div className="footer-social">
          <h3 className="footer-social-title">Connect with us</h3>
          <div className="footer-social-links">
            <a href="#" className="footer-social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
