import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, User, Briefcase, Wrench, Mail, FileUser, Target } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Code2, href: '.hero' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Wrench, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
    { name: 'Resume', icon: FileUser, href: 'https://drive.google.com/file/d/1U6SvkDmW4R7ZPvs2pCZhRTFGJLWnah8G/view?usp=sharing' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <a href=".hero" className="logo">
          HVB
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;