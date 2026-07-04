import React, { useState } from 'react';
import { X, Cookie, CreditCard, Trash2, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const SHIPPING_FREE_LIMIT = 399;
const SHIPPING_FLAT_COST = 49;

export default function CartDrawer({ 
  isOpen, 
  closeCart, 
  cart, 
  updateQuantity, 
  removeFromCart, 
  triggerCheckout,
  coupon,
  applyCoupon,
  removeCoupon
}) {
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState({ text: '', isError: false });

  const resolvedCart = cart.map(item => {
    const freshProduct = PRODUCTS.find(p => p.id === item.product.id) || item.product;
    return { ...item, product: freshProduct };
  });

  const totalItems = resolvedCart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = resolvedCart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Calculate discount
  let discountAmount = 0;
  if (coupon) {
    if (coupon.discountPercent > 0) {
      discountAmount = Math.round(subtotal * (coupon.discountPercent / 100));
    } else if (coupon.flatDiscount > 0) {
      discountAmount = coupon.flatDiscount;
    }
  }

  const isFreeShipping = subtotal >= SHIPPING_FREE_LIMIT || (coupon && coupon.freeShipping);
  const shippingCost = cart.length === 0 ? 0 : (isFreeShipping ? 0 : SHIPPING_FLAT_COST);
  const grandTotal = Math.max(0, subtotal + shippingCost - discountAmount);

  const toFreeShipping = SHIPPING_FREE_LIMIT - subtotal;
  const shippingPercent = Math.min((subtotal / SHIPPING_FREE_LIMIT) * 100, 100);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    
    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponFeedback({ text: res.message, isError: false });
      setCouponInput('');
    } else {
      setCouponFeedback({ text: res.message, isError: true });
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponFeedback({ text: '', isError: false });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-label="Shopping Cart">
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h2>Your Snack Cart</h2>
            <span className="badge-count" style={{ backgroundColor: 'var(--color-tangerine)', color: '#fff' }}>
              {totalItems} item{totalItems === 1 ? '' : 's'}
            </span>
          </div>
          <button className="drawer-close-btn" onClick={closeCart} aria-label="Close Cart">
            <X size={18} />
          </button>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="drawer-body-empty">
            <div className="empty-cart-graphic">
              <Cookie size={64} className="spinning-cookie" style={{ animation: 'spin 15s linear infinite', color: 'var(--color-tangerine)' }} />
            </div>
            <h3>Your snack shelf is empty!</h3>
            <p style={{ color: 'var(--color-text-muted)', margin: '8px 0 24px' }}>
              Fill your drawer with organic, delicious crunch, poppers, and energy cookies.
            </p>
            <button className="btn btn-primary" onClick={closeCart}>Start Snacking</button>
          </div>
        ) : (
          /* Active Cart */
          <div className="drawer-body-active">
            <div className="cart-items-list">
              {resolvedCart.map((item) => (
                <div className="cart-item" key={item.product.id}>
                  <div className="cart-item-img">
                    <img src={item.product.image} alt={item.product.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.product.name}</h4>
                    <div className="cart-item-price">₹{item.product.price}</div>
                    
                    <div className="cart-item-actions">
                      <div className="qty-selectors">
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        style={{ color: 'var(--color-error)', display: 'flex', alignItems: 'center' }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping Progress */}
            <div className="shipping-progress-box">
              <span className="shipping-progress-text">
                {isFreeShipping 
                  ? "🎉 You've unlocked **FREE SHIPPING!**" 
                  : `Add ₹${toFreeShipping} more to unlock **FREE SHIPPING!**`}
              </span>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${shippingPercent}%`, backgroundColor: isFreeShipping ? 'var(--color-lime)' : 'var(--color-tangerine)' }}></div>
              </div>
            </div>

            {/* Promo Coupon Panel */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid var(--color-cream-dark)', backgroundColor: 'var(--color-cream)' }}>
              {!coupon ? (
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px' }}>
                  <input 
                    type="text" 
                    placeholder="Enter Coupon (e.g. WELCOME15)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{ 
                      flexGrow: 1, 
                      padding: '8px 12px', 
                      borderRadius: 'var(--radius-sm)', 
                      border: 'var(--border-thin)',
                      backgroundColor: 'var(--color-white)',
                      fontSize: '0.85rem'
                    }}
                  />
                  <button type="submit" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                    Apply
                  </button>
                </form>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-lime-light)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--color-olive)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-olive)' }}>
                    <Tag size={16} />
                    <span>Applied: {coupon.code} ({coupon.discountPercent > 0 ? `${coupon.discountPercent}% Off` : (coupon.freeShipping ? 'Free Shipping' : `₹${coupon.flatDiscount} Off`)})</span>
                  </div>
                  <button onClick={handleRemoveCoupon} style={{ color: 'var(--color-error)' }} aria-label="Remove Coupon">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
              {couponFeedback.text && (
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: couponFeedback.isError ? 'var(--color-error)' : 'var(--color-success)', marginTop: '6px' }}>
                  {couponFeedback.text}
                </div>
              )}
              
              {!coupon && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', alignSelf: 'center' }}>Try:</span>
                  <button 
                    onClick={() => { applyCoupon('WELCOME15'); setCouponFeedback({ text: '🎉 15% discount applied!', isError: false }); }}
                    style={{ fontSize: '0.7rem', padding: '2px 6px', backgroundColor: 'var(--color-white)', border: 'var(--border-thin)', borderRadius: 'var(--radius-sm)', color: 'var(--color-tangerine)', fontWeight: 700 }}
                  >
                    WELCOME15 (15% Off)
                  </button>
                  <button 
                    onClick={() => { applyCoupon('OGFREE'); setCouponFeedback({ text: '🎉 Free Shipping applied!', isError: false }); }}
                    style={{ fontSize: '0.7rem', padding: '2px 6px', backgroundColor: 'var(--color-white)', border: 'var(--border-thin)', borderRadius: 'var(--radius-sm)', color: 'var(--color-olive)', fontWeight: 700 }}
                  >
                    OGFREE (Free Ship)
                  </button>
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="drawer-footer-totals">
              <div className="totals-line">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="totals-line">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              {discountAmount > 0 && (
                <div className="totals-line" style={{ color: 'var(--color-tangerine)', fontWeight: 700 }}>
                  <span>Coupon Discount</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="totals-line grand-total">
                <span>Estimated Total</span>
                <span>₹{grandTotal}</span>
              </div>

              <button className="btn btn-primary btn-block" onClick={triggerCheckout}>
                <span>Proceed to Checkout</span>
                <CreditCard size={18} />
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
