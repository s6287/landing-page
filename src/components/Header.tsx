'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#programs', label: 'Programs' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#coaches', label: 'Coaches' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="SSA Logo"
          width={80}
          height={60}
          className="header-logo"
          priority
        />
      </Link>

      {/* Desktop Nav Wrapper - Cylindrical pill shape */}
      <div className="nav-wrapper">
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <Link href="#register" className="btn-register">
        Register Now
      </Link>

      {/* Mobile hamburger */}
      <div
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        role="button"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
