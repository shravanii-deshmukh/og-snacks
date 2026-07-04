import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Header({ activePage, setActivePage, cartCount, openCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🔥 GET FREE SHIPPING ON ORDERS OVER ₹399! USE CODE: <strong className="badge">OGFREE</strong> 🔥</span>
      </div>

      {/* Main Navigation Header */}
      <header className="main-header">
        <div className="container header-container">
          <a href="#home" className="logo" onClick={() => handleLinkClick('home')}>
            <span className="logo-og">OG</span>
            <span className="logo-snacks">SNACKS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    className={`nav-link ${activePage === link.id ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Utility Actions */}
          <div className="header-actions">
            <button
              className="cart-trigger-btn"
              onClick={openCart}
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
            </button>

            <button
              className="menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`mobile-nav-link ${activePage === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                  style={{ width: '100%', textAlign: 'left', padding: '12px 0' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
