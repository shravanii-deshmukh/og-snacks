import React, { useState } from 'react';
import { Search, Star, ArrowRight } from 'lucide-react';

export default function Products({ products, activeCategory, setActiveCategory, onProductClick, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('popular');
  const [dietaryFilters, setDietaryFilters] = useState({
    vegan: false,
    glutenFree: false,
    organic: false
  });
  const [flavorSliders, setFlavorSliders] = useState({
    crunch: 0,
    sweet: 0,
    salt: 0,
    spice: 0
  });

  const categories = ['Chips & Poppers', 'Nuts & Seeds', 'Sweet Bites', 'Healthy Bars'];

  // Handle dietary filter toggle
  const handleDietaryChange = (key) => {
    setDietaryFilters({
      ...dietaryFilters,
      [key]: !dietaryFilters[key]
    });
  };

  // Calculate counts for categories based on current products list
  const getCategoryCount = (catName) => {
    return products.filter(p => p.category === catName).length;
  };

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // 1. Search Query check
    if (searchQuery.trim() && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // 2. Category Check
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    // 3. Dietary checks
    if (dietaryFilters.vegan && !product.dietary.includes('vegan')) {
      return false;
    }
    if (dietaryFilters.glutenFree && !product.dietary.includes('gluten-free')) {
      return false;
    }
    if (dietaryFilters.organic && !product.dietary.includes('organic')) {
      return false;
    }
    // 4. Flavor profile thresholds
    if (product.flavorProfile) {
      if (product.flavorProfile.crunch < flavorSliders.crunch) return false;
      if (product.flavorProfile.sweet < flavorSliders.sweet) return false;
      if (product.flavorProfile.salt < flavorSliders.salt) return false;
      if (product.flavorProfile.spice < flavorSliders.spice) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortOption === 'price-low') {
      return a.price - b.price;
    }
    if (sortOption === 'price-high') {
      return b.price - a.price;
    }
    if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    // Default: reviewsCount (popularity)
    return b.reviewsCount - a.reviewsCount;
  });

  return (
    <div className="container section-padding">
      <div className="products-page-layout">
        
        {/* Sidebar Filters */}
        <aside className="filters-sidebar" aria-label="Product Filters">
          <div className="filter-group">
            <h3>Categories</h3>
            <div className="category-filters-list">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>All Snacks</span>
                <span className="badge-count">{products.length}</span>
              </button>
              
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="badge-count">{getCategoryCount(cat)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Dietary Claims</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={dietaryFilters.vegan}
                  onChange={() => handleDietaryChange('vegan')}
                  style={{ cursor: 'pointer' }}
                />
                <span>Vegan Claim</span>
              </label>

              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={dietaryFilters.glutenFree}
                  onChange={() => handleDietaryChange('glutenFree')}
                  style={{ cursor: 'pointer' }}
                />
                <span>Gluten-Free</span>
              </label>

              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={dietaryFilters.organic}
                  onChange={() => handleDietaryChange('organic')}
                  style={{ cursor: 'pointer' }}
                />
                <span>100% Organic</span>
              </label>
            </div>
          </div>

          {/* Flavor Profile Sliders */}
          <div className="filter-group">
            <h3>Flavor Profile</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {Object.entries(flavorSliders).map(([flavor, val]) => (
                <div key={flavor} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, textTransform: 'capitalize' }}>
                    <span>{flavor}</span>
                    <span style={{ color: 'var(--color-tangerine)' }}>{val}+</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    value={val}
                    onChange={(e) => setFlavorSliders({ ...flavorSliders, [flavor]: parseInt(e.target.value) })}
                    style={{ 
                      accentColor: 'var(--color-tangerine)',
                      height: '6px',
                      borderRadius: '3px',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              ))}
              
              <button 
                className="btn btn-secondary" 
                style={{ padding: '8px 16px', fontSize: '0.8rem', marginTop: '10px' }}
                onClick={() => setFlavorSliders({ crunch: 0, sweet: 0, salt: 0, spice: 0 })}
              >
                Reset Flavor Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="products-main-content">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Our Snack Catalogue</h1>
            
            {/* Toolbar */}
            <div className="products-toolbar">
              <div className="search-wrapper">
                <Search className="search-icon" size={16} />
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search snacks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select 
                className="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Average Rating</option>
              </select>
            </div>

            {/* Catalogue Grid */}
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 24px', backgroundColor: 'var(--color-white)', borderRadius: '24px', border: 'var(--border-thin)' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-olive)', marginBottom: '8px' }}>No snacks matched your filters</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Try resetting some checkboxes or modifying your search text.</p>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
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
            )}
          </div>
        </main>

      </div>
    </div>
  );
}
