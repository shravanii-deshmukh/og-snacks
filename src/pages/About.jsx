import React from 'react';
import { Target, Compass, Flame, Leaf, HelpCircle, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Purity First",
      desc: "We prioritize organic, clean-label ingredients. Absolutely zero artificial colors, synthetic flavors, or trans fats are allowed.",
      icon: <Leaf size={24} />
    },
    {
      title: "Honest Margins",
      desc: "Premium ingredients should be accessible. We work directly with farmers to bring you premium quality at honest price points.",
      icon: <Compass size={24} />
    },
    {
      title: "Flavor Innovation",
      desc: "Guilt-free snacking shouldn't taste boring. We design bold, energetic, and highly satisfying flavor profiles.",
      icon: <Flame size={24} />
    },
    {
      title: "Earth-Conscious",
      desc: "Our boxes are crafted using 100% post-consumer recycled cardboard, printed with clean soy-based inks.",
      icon: <Heart size={24} />
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Brand Story</h1>
          <p style={{ maxWidth: '600px', margin: '16px auto 0', color: 'var(--color-text-muted-dark)' }}>
            We're on a mission to redefine healthy snacking through bold flavor innovation, organic sourcing, and total label transparency.
          </p>
        </div>
      </section>

      {/* Brand Story Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container about-story-grid">
          <div className="about-story-content">
            <h2>Baking With Purpose Since 2024</h2>
            <p>
              OG Snacks was founded in San Francisco with a simple premise: healthy snacks shouldn't taste like cardboard, and delicious snacks shouldn't contain a list of chemical preservatives you can't pronounce.
            </p>
            <p>
              We set out to create high-protein, organic crunchy cookies, stuffed dates enrobed in dark cocoa, and spice-roasted makhanas that combine real, wholesome nutrition with bold, punchy seasonings.
            </p>
            <p>
              We craft each recipe from scratch in small kitchen batches, ensuring the perfect texture and flavor profile. By partnering directly with farmers, we select only the finest organic ragi, rolled oats, rich cacao beans, and high-protein nuts.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/images/hero_snack_spread.png" 
              alt="Bakery fresh snacks" 
              style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="mission-vision-cards">
            <div className="about-mv-card">
              <h3>
                <Target size={24} />
                <span>Our Mission</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                To empower active lifestyles by providing gourmet, premium-quality snacking solutions that are packed with nutrition, clean-label ingredients, and outstanding taste. We want to make clean eating the easiest and most enjoyable choice.
              </p>
            </div>
            
            <div className="about-mv-card">
              <h3>
                <Compass size={24} />
                <span>Our Vision</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                To become the global benchmark for healthy, transparent, and flavor-forward snacking. We envision a world where clean label claims are the baseline, not the exception, and where food is both a source of high-fidelity flavor and natural energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2>Our Snacking Philosophy</h2>
            <p>We believe that food should fuel your body and delight your senses, without shortcuts or compromises.</p>
          </div>
          <div className="why-features" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="feature-box" style={{ textAlign: 'left', padding: '36px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>🌿 Sourced from Nature, Never Labs</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                We work directly with certified organic cooperatives to procure raw grains, organic cold-pressed oil, raw nuts, and premium cacao. You will never find synthetic flavorings, fake texturizers, or chemical agents in our kitchen.
              </p>
            </div>
            <div className="feature-box" style={{ textAlign: 'left', padding: '36px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>🍪 Small-Batch Kitchen Baking</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Instead of mass-producing snacks in large industrial factories, we bake in small batches. This preserves the nutritional integrity of raw grains, ensures consistent high-fidelity crunch, and keeps the ingredients tasting fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
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
    </div>
  );
}
