import React, { useState } from 'react';
import { ArrowRight, Star, Heart, Leaf, ShieldAlert, Award, ChevronDown, ChevronUp, Sparkles, Smile, MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home({ products, setActivePage, setCategoryFilter, onProductClick, addToCart }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const categories = [
    { id: 'Chips & Poppers', label: 'Chips & Poppers', desc: 'Crispy pops, loaded makhanas, and wholesome cassava chips.', icon: <Leaf /> },
    { id: 'Nuts & Seeds', label: 'Nuts & Seeds', desc: 'Premium dry roasted nuts, mixed seeds, and creamy nut butter.', icon: <Heart /> },
    { id: 'Sweet Bites', label: 'Sweet Bites', desc: 'Fudgy protein cookies, stuffed dates, and natural fruit bites.', icon: <Smile /> },
    { id: 'Healthy Bars', label: 'Healthy Bars', desc: 'Antioxidant bars, keto bars, and raw energy fuels.', icon: <Sparkles /> }
  ];

  const testimonials = [
    {
      text: "“These dry fruit bites and dates enrobed in dark cocoa are spectacular. Finally, a brand that does not compromise on clean labeling or premium ingredients!”",
      author: "Aditi Sharma",
      role: "Fitness Coach, Mumbai"
    },
    {
      text: "“The Mint & Pepper Makhana is my absolute favorite office snack. The crunch factor is unbelievable, and it's completely guilt-free!”",
      author: "Rohit Verma",
      role: "Software Architect, Bangalore"
    },
    {
      text: "“OG Snacks cookies are soft, fudgy, and keep me full for hours. Finding high-protein snacks that taste this premium is a game-changer.”",
      author: "Priya Nair",
      role: "Nutritionist, Delhi"
    }
  ];

  const faqs = [
    {
      q: "What makes OG Snacks 'clean-label'?",
      a: "Our snacks are made with 100% natural ingredients, zero artificial preservatives, zero refined sugar, and zero trans fat. We believe in complete ingredient transparency."
    },
    {
      q: "Are all your snacks gluten-free and vegan?",
      a: "Most of our catalog is gluten-free and vegan-friendly! You can check the specific tags (e.g. 'Gluten-Free', 'Vegan') and read the detailed allergen disclaimer in the nutrition detail drawer of each snack."
    },
    {
      q: "How long does shipping take?",
      a: "We offer Fast Priority shipping across India. Standard delivery takes 2-3 business days. All orders above ₹399 unlock FREE SHIPPING automatically!"
    },
    {
      q: "Can I customize an order or get wholesale rates?",
      a: "Yes! Please drop us a message via the Contact Us page or select 'Wholesale & Distribution' in the contact form, and our sales team will reach out to you within 24 hours."
    }
  ];

  // Get featured products
  const featured = products.filter(p => p.tags.includes('best seller') || p.tags.includes('new')).slice(0, 4);

  // Get best sellers
  const bestSellers = products.filter(p => p.tags.includes('best seller')).slice(0, 4);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryClick = (catId) => {
    setCategoryFilter(catId);
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">🌿 100% ORGANIC & CLEAN LABEL</span>
            <h1 className="hero-title">
              Elevate Your Snacking With <span>OG Snacks</span>
            </h1>
            <p className="hero-desc">
              Upgrade your snack drawer with premium, bold, and energetic flavors crafted from organic, high-protein, and clean-label ingredients.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setActivePage('products')}>
                <span>Shop Snacks</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => setActivePage('about')}>
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/images/hero_snack_spread.png" 
              alt="OG Snacks Spread" 
              className="hero-main-img"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '24px' }}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Snack Drops</h2>
            <p>Indulge in our newly dropped and best-selling healthy bites.</p>
          </div>
          
          <div className="products-grid">
            {featured.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image-container" onClick={() => onProductClick(product)}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-tags">
                  {product.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`product-badge ${tag === 'best seller' ? 'badge-best-seller' : (tag === 'new' ? 'badge-new' : 'badge-healthy')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 onClick={() => onProductClick(product)}>{product.name}</h3>
                <div className="product-rating">
                  <Star size={14} fill="#F1C40F" color="#F1C40F" />
                  <span>{product.rating} ({product.reviewsCount} reviews)</span>
                </div>
                <div className="product-card-footer">
                  <span className="product-price">₹{product.price}</span>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => addToCart(product)}
                    aria-label="Add to cart"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Explore Categories</h2>
            <p>Find snacks tailored specifically to your cravings and dietary goals.</p>
          </div>

          <div className="category-cards-grid">
            {categories.map(cat => (
              <div 
                className="category-card" 
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.label}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding why-section">
        <div className="container why-grid">
          <div>
            <span className="hero-badge" style={{ backgroundColor: 'var(--color-olive)', color: 'var(--color-lime)' }}>OG ADVANTAGE</span>
            <h2 style={{ fontFamily: 'var(--font-headers)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-olive)', margin: '12px 0 24px' }}>
              Why Choose OG Snacks?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              We're redefining snacks by cutting out the junk and bringing in high-fidelity flavor profiles made entirely of clean, organic ingredients. No compromises.
            </p>
            <button className="btn btn-primary" onClick={() => setActivePage('about')}>
              Our Full Story
            </button>
          </div>

          <div className="why-features">
            <div className="feature-box">
              <Leaf className="value-icon" size={24} />
              <h4>100% Organic</h4>
              <p>Made with organic, non-GMO ingredients sourced from certified local farms.</p>
            </div>
            <div className="feature-box">
              <Award className="value-icon" size={24} />
              <h4>High Protein</h4>
              <p>Stuffed with premium plant-based proteins to keep you energetic all day.</p>
            </div>
            <div className="feature-box">
              <ShieldAlert className="value-icon" size={24} />
              <h4>Zero Preservatives</h4>
              <p>Free from refined sugars, artificial flavors, trans fats, or colors.</p>
            </div>
            <div className="feature-box">
              <Heart className="value-icon" size={24} />
              <h4>Guilt-Free Taste</h4>
              <p>Authentic, bold recipes crafted to satisfy your gourmet tastebuds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Best Sellers</h2>
            <p>Our community's absolute favorites, flying off the shelves daily.</p>
          </div>

          <div className="products-grid">
            {bestSellers.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image-container" onClick={() => onProductClick(product)}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-tags">
                  {product.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`product-badge ${tag === 'best seller' ? 'badge-best-seller' : (tag === 'new' ? 'badge-new' : 'badge-healthy')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 onClick={() => onProductClick(product)}>{product.name}</h3>
                <div className="product-rating">
                  <Star size={14} fill="#F1C40F" color="#F1C40F" />
                  <span>{product.rating} ({product.reviewsCount} reviews)</span>
                </div>
                <div className="product-card-footer">
                  <span className="product-price">₹{product.price}</span>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => addToCart(product)}
                    aria-label="Add to cart"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise Banner */}
      <section className="container">
        <div className="promise-card">
          <MessageSquareQuote size={40} style={{ color: 'var(--color-lime)', marginBottom: '16px' }} />
          <h3>Our Clean Baking Promise</h3>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted-dark)', fontSize: '1.1rem' }}>
            We pledge to never use hydrogenated oils, high fructose corn syrup, or synthetic chemicals. We bake our products fresh in small batches using premium stone-ground flours, pure ghee, and raw cacao.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Community Testimonials</h2>
            <p>Here's what organic snacking enthusiasts say about OG Snacks.</p>
          </div>

          <div className="slider-container">
            {/* Desktop Navigation Chevrons */}
            <button 
              className="testimonial-nav-btn prev desktop-only" 
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="testimonial-card">
              <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
              <div className="testimonial-author">
                <h4>{testimonials[activeTestimonial].author}</h4>
                <span>{testimonials[activeTestimonial].role}</span>
              </div>
            </div>

            <button 
              className="testimonial-nav-btn next desktop-only" 
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>

            <div className="slider-dots">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`slider-dot ${activeTestimonial === idx ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                />
              ))}
            </div>

            {/* Mobile Navigation Controls */}
            <div className="testimonial-nav-controls-mobile mobile-only">
              <button 
                className="testimonial-nav-btn prev" 
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="testimonial-nav-btn next" 
                onClick={handleNextTestimonial}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section-padding faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our products, billing, and deliveries.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                <div className="faq-answer" style={{ maxHeight: activeFaq === idx ? '200px' : '0' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-olive)', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-headers)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-lime)' }}>
            Ready to Upgrade Your Snack Drawer?
          </h2>
          <p style={{ maxWidth: '600px', color: 'var(--color-text-muted-dark)' }}>
            Get started today and enjoy delicious, guilt-free organic crunchy bites delivered directly to your doorstep. Free priority shipping on orders over ₹399.
          </p>
          <button className="btn btn-primary" onClick={() => setActivePage('products')}>
            <span>Start Snacking Now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
