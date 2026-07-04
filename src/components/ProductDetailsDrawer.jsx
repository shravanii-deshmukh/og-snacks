import React from 'react';
import { X, ShoppingBag } from 'lucide-react';

export default function ProductDetailsDrawer({ product, isOpen, onClose, addToCart }) {
  if (!product) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`details-drawer ${isOpen ? 'open' : ''}`} aria-label="Product Nutrition and Details">
        <div className="drawer-header">
          <h2>Snack Details</h2>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Details">
            <X size={18} />
          </button>
        </div>

        <div className="details-body">
          {/* Hero */}
          <div className="details-hero">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
              {product.tags && product.tags.map(tag => (
                <span className="badge" key={tag} style={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="details-block">
            <p className="details-desc">{product.desc}</p>
          </div>

          {/* Flavor Profile */}
          <div className="details-block">
            <h4>Flavor Profile</h4>
            <div className="flavor-bars">
              {product.flavorProfile && Object.entries(product.flavorProfile).map(([flavor, val]) => (
                <div className="flavor-bar-row" key={flavor}>
                  <span className="flavor-label" style={{ textTransform: 'capitalize' }}>{flavor}</span>
                  <div className="flavor-progress">
                    <div className="flavor-fill" style={{ width: `${val * 10}%` }}></div>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{val}/10</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients & Allergens */}
          <div className="details-block">
            <h4>Ingredients</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              {product.ingredients}
            </p>
          </div>

          <div className="details-block">
            <h4>Allergens</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-error)', fontWeight: 600 }}>
              {product.allergens}
            </p>
          </div>

          {/* Nutrition Label */}
          {product.nutrition && (
            <div className="details-block">
              <h4>Nutrition Facts</h4>
              <div className="nutrition-label">
                <div className="nutrition-title">Nutrition Facts</div>
                <div className="nutrition-row" style={{ borderBottom: '5px solid #121212', fontWeight: 600 }}>
                  <span>Serving Size</span>
                  <span>{product.nutrition.servingSize}</span>
                </div>
                
                <div className="nutrition-row thick" style={{ fontSize: '1.1rem', fontWeight: 900 }}>
                  <span>Calories</span>
                  <span>{product.nutrition.calories}</span>
                </div>

                <div className="nutrition-row" style={{ fontWeight: 700, borderBottom: '3px solid #121212' }}>
                  <span>% Daily Value*</span>
                </div>

                <div className="nutrition-row">
                  <span><strong>Total Fat</strong> {product.nutrition.totalFat}</span>
                  <span><strong>{product.nutrition.fatDv}</strong></span>
                </div>

                <div className="nutrition-row indent">
                  <span>Saturated Fat {product.nutrition.satFat}</span>
                  <span><strong>{product.nutrition.satFatDv}</strong></span>
                </div>

                <div className="nutrition-row indent">
                  <span>Trans Fat {product.nutrition.transFat}</span>
                </div>

                <div className="nutrition-row">
                  <span><strong>Sodium</strong> {product.nutrition.sodium}</span>
                  <span><strong>{product.nutrition.sodiumDv}</strong></span>
                </div>

                <div className="nutrition-row">
                  <span><strong>Total Carbohydrate</strong> {product.nutrition.totalCarb}</span>
                  <span><strong>{product.nutrition.carbDv}</strong></span>
                </div>

                <div className="nutrition-row indent">
                  <span>Dietary Fiber {product.nutrition.dietaryFiber}</span>
                  <span><strong>{product.nutrition.fiberDv}</strong></span>
                </div>

                <div className="nutrition-row indent">
                  <span>Total Sugars {product.nutrition.totalSugars}</span>
                </div>

                <div className="nutrition-row indent" style={{ paddingLeft: '32px' }}>
                  <span>Includes {product.nutrition.addedSugars} Added Sugars</span>
                  <span><strong>{product.nutrition.addedSugarsDv}</strong></span>
                </div>

                <div className="nutrition-row medium">
                  <span><strong>Protein</strong> {product.nutrition.protein}</span>
                </div>

                <div className="nutrition-row">
                  <span>Iron {product.nutrition.iron}</span>
                </div>

                <div className="nutrition-row" style={{ borderBottom: 'none' }}>
                  <span>Potassium {product.nutrition.potassium}</span>
                </div>
              </div>
            </div>
          )}

          <button 
            className="btn btn-primary btn-block" 
            style={{ marginTop: '24px' }}
            onClick={() => {
              addToCart(product);
              onClose();
            }}
          >
            <span>Add to Shelf (Cart)</span>
            <ShoppingBag size={18} />
          </button>
        </div>
      </aside>
    </>
  );
}
