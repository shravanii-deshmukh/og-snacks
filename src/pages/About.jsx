import React from 'react';
import { Target, Compass, Flame, Leaf, Heart, Award, Clock, Users, ShieldCheck, Sparkles, CheckCircle, Smile } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Purity First",
      desc: "We prioritize organic, clean-label ingredients. Absolutely zero artificial colors, synthetic flavors, or trans fats are allowed.",
      icon: <Leaf size={24} />
    },
    {
      title: "Honest Margins",
      desc: "Premium ingredients should be accessible. We work directly with smallholder farmers to bring you premium quality at honest price points.",
      icon: <Compass size={24} />
    },
    {
      title: "Flavor Innovation",
      desc: "Guilt-free snacking shouldn't taste boring. We design bold, energetic, and highly satisfying Indian and global flavor profiles.",
      icon: <Flame size={24} />
    },
    {
      title: "Earth-Conscious",
      desc: "Our packaging is crafted using 100% post-consumer recycled boxes, printed with clean soy-based organic inks.",
      icon: <Heart size={24} />
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "The Spark in Nagpur",
      desc: "Experimenting in a small home kitchen to create crunchy ragi cookies and spiced makhanas without toxic additives."
    },
    {
      year: "2024",
      title: "Farmer Sourcing Network",
      desc: "Partnered directly with 15 certified organic farming cooperatives across Maharashtra, Karnataka, and Kerala."
    },
    {
      year: "2025",
      title: "Official Drop & Local Launch",
      desc: "Official drop of our first 10 clean-label healthy snacks. Received overwhelming love from Nagpur communities."
    },
    {
      year: "2026",
      title: "Snacking Revolution",
      desc: "Expanded delivery nationwide, shipping to over 15,000 active snackers with zero compromises on quality."
    }
  ];

  return (
    <div className="about-page-premium">
      {/* 1. Hero Banner */}
      <section className="about-hero-premium">
        <div className="about-hero-glow"></div>
        <div className="container">
          <span className="premium-tag-badge">OUR ORIGIN STORY</span>
          <h1>Redefining Clean Eating for <span>Modern India</span></h1>
          <p style={{ maxWidth: '650px', margin: '20px auto 0', color: 'var(--color-text-muted-dark)', fontSize: '1.15rem', lineHeight: '1.7' }}>
            We're on a mission to reshape Indian snacking habits through bold flavor innovation, 100% organic sourcing, and complete label transparency.
          </p>
        </div>
      </section>

      {/* 2. Brand Story & Why We Started (Dual Column) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container about-story-grid">
          <div className="about-story-content">
            <span className="premium-tag-badge">HOW WE BEGAN</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-olive)', margin: '16px 0 24px' }}>Baking With Nagpur Pride</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '18px', lineHeight: '1.7' }}>
              OG Snacks was founded in Nagpur, India with a simple premise: healthy snacks shouldn't taste like cardboard, and delicious snacks shouldn't contain a list of chemical preservatives you can't pronounce.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '18px', lineHeight: '1.7' }}>
              As fitness enthusiasts, we noticed a frustrating gap in the Indian snack aisles. Products claimed to be "healthy" but were loaded with hydrogenated fats, hidden sugars, and chemical stabilizers. We decided to build a brand that bakes transparently.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              We set out to create high-protein crunchy cookies, stuffed dates enrobed in dark cocoa, and spice-roasted makhanas that combine real, wholesome nutrition with bold, punchy seasonings. Handcrafted fresh, with premium local ingredients.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div className="about-image-wrapper">
              <img 
                src="/assets/images/hero_snack_spread.png" 
                alt="Bakery fresh snacks" 
                style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', maxWidth: '100%', height: 'auto', border: '3px solid rgba(212, 241, 30, 0.1)' }}
              />
              <div className="about-img-floating-card">
                <span style={{ fontSize: '1.8rem' }}>🇮🇳</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-white)' }}>Indian Origin</h4>
                  <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--color-lime)' }}>Nagpur Craft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistics Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-olive)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="about-stats-glow"></div>
        <div className="container">
          <div className="section-header-premium" style={{ marginBottom: '50px' }}>
            <span className="premium-tag-badge" style={{ backgroundColor: 'rgba(212, 241, 30, 0.12)', border: '1px solid rgba(212, 241, 30, 0.3)', color: 'var(--color-lime)' }}>OG NUMBERS</span>
            <h2 style={{ color: 'var(--color-white)' }}>Our Impact in Figures</h2>
            <p style={{ color: 'var(--color-text-muted-dark)' }}>Quantifying our journey towards healthier snacking alternatives.</p>
          </div>
          
          <div className="stats-grid-premium">
            <div className="stat-card-premium">
              <Users size={32} className="stat-icon" />
              <h3>15,000+</h3>
              <p>Happy Active Customers</p>
            </div>
            <div className="stat-card-premium">
              <Award size={32} className="stat-icon" />
              <h3>80,000+</h3>
              <p>Packs Freshly Shipped</p>
            </div>
            <div className="stat-card-premium">
              <ShieldCheck size={32} className="stat-icon" />
              <h3>100%</h3>
              <p>Clean Label Guarantee</p>
            </div>
            <div className="stat-card-premium">
              <Leaf size={32} className="stat-icon" />
              <h3>50+</h3>
              <p>Organic Sourcing Cooperatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="mission-vision-cards">
            <div className="about-mv-card">
              <h3>
                <Target size={26} />
                <span>Our Mission</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                To empower active lifestyles by providing gourmet, premium-quality snacking solutions that are packed with nutrition, clean-label ingredients, and outstanding taste. We make clean eating the easiest and most enjoyable choice.
              </p>
            </div>
            
            <div className="about-mv-card">
              <h3>
                <Compass size={26} />
                <span>Our Vision</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                To become the global benchmark for healthy, transparent, and flavor-forward snacking. We envision a world where clean label claims are the baseline, not the exception, and where food is both a source of high-fidelity flavor and natural energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Timeline Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header-premium">
            <span className="premium-tag-badge">THE JOURNEY</span>
            <h2>Our Milestones</h2>
            <p>From humble kitchen trials to a nationwide community.</p>
          </div>

          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-badge">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Philosophy */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header-premium">
            <span className="premium-tag-badge">OUR PHILOSOPHY</span>
            <h2>Sourced from Nature, Baked with Love</h2>
            <p>We believe that food should fuel your body and delight your senses, without shortcuts or compromises.</p>
          </div>
          <div className="why-features-premium" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="feature-box-premium" style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '14px', color: 'var(--color-olive)' }}>🌿 Sourced from Nature, Never Labs</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                We work directly with certified organic cooperatives to procure raw grains, organic cold-pressed oils, raw nuts, and premium cacao. You will never find synthetic flavorings, fake texturizers, or chemical agents in our kitchen.
              </p>
            </div>
            <div className="feature-box-premium" style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '14px', color: 'var(--color-olive)' }}>🍪 Small-Batch Kitchen Baking</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                Instead of mass-producing snacks in large industrial factories, we bake in small batches. This preserves the nutritional integrity of raw grains, ensures consistent high-fidelity crunch, and keeps the ingredients tasting fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Core Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header-premium">
            <span className="premium-tag-badge">CORE VALUES</span>
            <h2>Principles We Live By</h2>
            <p>These values define every ingredient we select, every batch we bake, and how we operate as a brand.</p>
          </div>

          <div className="values-grid">
            {values.map(val => (
              <div className="value-box" key={val.title}>
                <div className="value-icon">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Quality & Clean-Label Promise */}
      <section className="section-padding-bottom" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="promise-card-premium" style={{ background: 'radial-gradient(circle, var(--color-olive-light) 0%, var(--color-olive) 100%)' }}>
            <div className="promise-header-premium">
              <ShieldCheck size={48} className="promise-quote-icon" />
              <h3>Certified Quality & Clean Label Promise</h3>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>We adhere to strict food purity guidelines to guarantee safe, highly nutritious bites.</p>
            </div>
            <div className="promise-grid-premium">
              <div className="promise-col-premium" style={{ textAlign: 'left' }}>
                <CheckCircle size={20} style={{ color: 'var(--color-lime)', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem' }}>Lab Tested Pure</h4>
                <p>Every single batch undergoes quality clearance to verify zero artificial additives or heavy metal traces.</p>
              </div>
              <div className="promise-col-premium" style={{ textAlign: 'left' }}>
                <CheckCircle size={20} style={{ color: 'var(--color-lime)', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem' }}>No Fake Sugars</h4>
                <p>We sweeten snacks naturally using certified organic dates, raw jaggery, and honey. Absolutely zero aspartame.</p>
              </div>
              <div className="promise-col-premium" style={{ textAlign: 'left' }}>
                <CheckCircle size={20} style={{ color: 'var(--color-lime)', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem' }}>100% Traceability</h4>
                <p>Scan any QR code on our box to trace our ragi, oats, cacao, and nuts back to the cooperative farm they grew in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
