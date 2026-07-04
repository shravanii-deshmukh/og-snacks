import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`🎉 Welcome to the club! A 15% discount code has been sent to: ${email}`);
      setEmail('');
    }
  };

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-col brand">
          <a href="#home" className="logo" onClick={() => handleLinkClick('home')}>
            <span className="logo-og">OG</span>
            <span className="logo-snacks">SNACKS</span>
          </a>
          <p className="footer-desc">
            Premium, clean-label snacks packed with high-fidelity flavor profiles. Crafted with love for your organic lifestyle.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="footer-col links">
          <h3>Explore</h3>
          <ul>
            <li><button onClick={() => handleLinkClick('home')}>Home</button></li>
            <li><button onClick={() => handleLinkClick('products')}>Products</button></li>
            <li><button onClick={() => handleLinkClick('about')}>About Us</button></li>
            <li><button onClick={() => handleLinkClick('contact')}>Contact Us</button></li>
          </ul>
        </div>

        {/* Categories Links */}
        <div className="footer-col links">
          <h3>Categories</h3>
          <ul>
            <li><button onClick={() => handleLinkClick('products')}>Chips & Poppers</button></li>
            <li><button onClick={() => handleLinkClick('products')}>Nuts & Seeds</button></li>
            <li><button onClick={() => handleLinkClick('products')}>Sweet Bites</button></li>
            <li><button onClick={() => handleLinkClick('products')}>Healthy Bars</button></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col contact">
          <h3>Stay Crunching</h3>
          <p className="footer-desc" style={{ marginTop: 0 }}>
            Subscribe to our newsletter to receive weekly snack tips, special discounts, and first access to new releases!
          </p>
          <form className="cta-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px' }}>
              <Sparkles size={16} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} OG Snacks Private Limited. All Rights Reserved. Crafted with high-fidelity ingredients.</p>
      </div>
    </footer>
  );
}
