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
      role: "Fitness Coach, Mumbai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      text: "“The Mint & Pepper Makhana is my absolute favorite office snack. The crunch factor is unbelievable, and it's completely guilt-free!”",
      author: "Rohit Verma",
      role: "Software Architect, Bangalore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      text: "“OG Snacks cookies are soft, fudgy, and keep me full for hours. Finding high-protein snacks that taste this premium is a game-changer.”",
      author: "Priya Nair",
      role: "Nutritionist, Delhi",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
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
        {/* Background Glowing Ambient Nodes */}
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>

        {/* Decorative Floating SVG Elements */}
        <div className="hero-shapes">
          <svg className="hero-shape shape-1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="10" stroke="var(--color-lime)" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
          <svg className="hero-shape shape-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30L30 10M30 30L10 10" stroke="var(--color-tangerine)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg className="hero-shape shape-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 C 60 40, 90 50, 60 60 C 50 90, 40 60, 10 50 C 40 40, 50 10" fill="var(--color-lime)" opacity="0.3"/>
          </svg>
        </div>

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge animate-item">🌿 100% ORGANIC & PREMIUM QUALITY</span>
            <h1 className="hero-title animate-item">
              India's Finest <span>Gourmet Healthy Snacks</span>
            </h1>
            <p className="hero-desc animate-item">
              Handcrafted in Nagpur. We blend premium local ingredients with bold, energetic flavors to fuel your active lifestyle. 100% clean-label, zero artificial preservatives, zero refined sugars—just pure guilt-free indulgence.
            </p>
            <div className="hero-actions animate-item">
              <button className="btn btn-primary btn-hero-primary" onClick={() => setActivePage('products')}>
                <span>Shop Clean Snacks</span>
                <ArrowRight size={18} className="cta-arrow" />
              </button>
              <button className="btn btn-secondary btn-hero-secondary" onClick={() => setActivePage('about')}>
                <span>Our Nagpur Story</span>
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper animate-item" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-image-container">
              {/* Outer Glowing Background Ring */}
              <div className="hero-img-ring"></div>
              
              <img 
                src="/assets/images/hero_snack_spread.png" 
                alt="OG Snacks Premium Spread" 
                className="hero-main-img"
              />

              {/* Layered Floating Glassmorphic Badges */}
              <div className="hero-float-badge float-badge-left">
                <span className="float-badge-emoji">🍃</span>
                <div className="float-badge-info">
                  <h4>100% Organic</h4>
                  <p>Certified Local Farms</p>
                </div>
              </div>

              <div className="hero-float-badge float-badge-right">
                <span className="float-badge-emoji">🇮🇳</span>
                <div className="float-badge-info">
                  <h4>Nagpur Craft</h4>
                  <p>Grown & Made in India</p>
                </div>
              </div>
            </div>
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
      <section className="section-padding why-section-premium">
        <div className="container why-grid-premium">
          <div className="why-intro-premium">
            <span className="premium-tag-badge">OG ADVANTAGE</span>
            <h2 className="premium-section-title">
              Crafting the Future of <span>Guilt-Free Snacking</span>
            </h2>
            <p className="premium-section-desc">
              We're redefining snacks by cutting out the junk and bringing in high-fidelity flavor profiles made entirely of clean, organic ingredients. Handcrafted in Nagpur with absolute dedication.
            </p>
            <button className="btn btn-primary btn-premium-why" onClick={() => setActivePage('about')}>
              <span>Our Nagpur Story</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="why-features-premium">
            <div className="feature-box-premium">
              <div className="feature-icon-wrapper"><Leaf size={28} /></div>
              <h4>100% Organic</h4>
              <p>Made with organic, non-GMO ingredients sourced from certified local farms across India.</p>
            </div>
            <div className="feature-box-premium">
              <div className="feature-icon-wrapper"><Award size={28} /></div>
              <h4>High Protein</h4>
              <p>Stuffed with premium plant-based proteins to keep you active and energetic all day.</p>
            </div>
            <div className="feature-box-premium">
              <div className="feature-icon-wrapper"><ShieldAlert size={28} /></div>
              <h4>Zero Preservatives</h4>
              <p>Free from refined sugars, hydrogenated oils, trans fats, or synthetic chemicals.</p>
            </div>
            <div className="feature-box-premium">
              <div className="feature-icon-wrapper"><Heart size={28} /></div>
              <h4>Guilt-Free Taste</h4>
              <p>Authentic, bold recipes designed to satisfy your most gourmet snack cravings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding best-sellers-section-premium">
        <div className="container">
          <div className="section-header-premium">
            <span className="premium-tag-badge">BEST SELLERS</span>
            <h2>Community Favorites</h2>
            <p>Our community's absolute favorites, flying off the shelves daily.</p>
          </div>

          <div className="products-grid-premium">
            {bestSellers.map(product => (
              <div className="product-card-premium" key={product.id}>
                <div className="product-image-container-premium" onClick={() => onProductClick(product)}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-tags-premium">
                  {product.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`product-badge-premium ${tag === 'best seller' ? 'badge-best-seller' : (tag === 'new' ? 'badge-new' : 'badge-healthy')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 onClick={() => onProductClick(product)}>{product.name}</h3>
                <div className="product-rating-premium">
                  <Star size={14} fill="#F1C40F" color="#F1C40F" />
                  <span>{product.rating} ({product.reviewsCount} reviews)</span>
                </div>
                <div className="product-card-footer-premium">
                  <span className="product-price-premium">₹{product.price}</span>
                  <button 
                    className="add-to-cart-btn-premium" 
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
      <section className="container section-padding-bottom">
        <div className="promise-card-premium">
          <div className="promise-header-premium">
            <MessageSquareQuote size={44} className="promise-quote-icon" />
            <h3>Our Clean Sourcing Promise</h3>
            <p>We pledge to maintain total transparency in everything we bake.</p>
          </div>
          <div className="promise-grid-premium">
            <div className="promise-col-premium">
              <span className="promise-num">01</span>
              <h4>No Refined Junk</h4>
              <p>Absolutely zero hydrogenated oils, high fructose corn syrup, or trans fats. Period.</p>
            </div>
            <div className="promise-col-premium">
              <span className="promise-num">02</span>
              <h4>Nagpur Kitchen Fresh</h4>
              <p>We bake in small kitchen batches using stone-ground flours, pure ghee, and raw cacao.</p>
            </div>
            <div className="promise-col-premium">
              <span className="promise-num">03</span>
              <h4>Direct Sourcing</h4>
              <p>We procure raw materials directly from Indian organic farming cooperatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding testimonials-section-premium">
        <div className="container">
          <div className="section-header-premium">
            <span className="premium-tag-badge">COMMUNITY REVIEWS</span>
            <h2>Gourmet Snacking Experiences</h2>
            <p>Here's what organic snacking enthusiasts say about OG Snacks.</p>
          </div>

          <div className="slider-container-premium">
            {/* Desktop Navigation Chevrons */}
            <button 
              className="testimonial-nav-btn-premium prev-premium desktop-only" 
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="testimonial-card-premium">
              <div className="testimonial-avatar-wrapper">
                <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].author} className="testimonial-avatar" />
                <div className="testimonial-stars">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#F1C40F" color="#F1C40F" />
                  ))}
                </div>
              </div>
              <p className="testimonial-text-premium">{testimonials[activeTestimonial].text}</p>
              <div className="testimonial-author-premium">
                <h4>{testimonials[activeTestimonial].author}</h4>
                <span>{testimonials[activeTestimonial].role}</span>
              </div>
            </div>

            <button 
              className="testimonial-nav-btn-premium next-premium desktop-only" 
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>

            <div className="slider-dots-premium">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`slider-dot-premium ${activeTestimonial === idx ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                />
              ))}
            </div>

            {/* Mobile Navigation Controls */}
            <div className="testimonial-nav-controls-mobile-premium mobile-only">
              <button 
                className="testimonial-nav-btn-premium prev-premium" 
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="testimonial-nav-btn-premium next-premium" 
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
      <section className="section-padding faq-section-premium">
        <div className="container">
          <div className="section-header-premium">
            <span className="premium-tag-badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our products, billing, and deliveries.</p>
          </div>

          <div className="faq-list-premium">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item-premium ${activeFaq === idx ? 'active' : ''}`}>
                <div className="faq-question-premium" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <div className="faq-chevron-wrapper">
                    <ChevronDown size={20} className="faq-chevron-icon" />
                  </div>
                </div>
                <div className="faq-answer-premium" style={{ maxHeight: activeFaq === idx ? '200px' : '0' }}>
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-section-premium">
        <div className="cta-glow-1"></div>
        <div className="cta-glow-2"></div>
        <div className="container cta-container-premium">
          <div className="cta-content-premium">
            <h2>Upgrade Your Snack Drawer Today</h2>
            <p>
              Indulge in delicious, guilt-free organic crunchy bites handcrafted in Nagpur and delivered fresh to your door. Get free priority shipping across India on orders over ₹399.
            </p>
            <button className="btn btn-primary btn-cta-premium" onClick={() => setActivePage('products')}>
              <span>Start Snacking Now</span>
              <ArrowRight size={20} className="cta-arrow" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
