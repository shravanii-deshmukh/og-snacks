import React, { useState } from 'react';
import { X, Sparkles, Cookie, ThumbsUp, Smile, CheckCircle2, Banknote, Smartphone, CreditCard, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const SHIPPING_FREE_LIMIT = 399;
const SHIPPING_FLAT_COST = 49;

export default function CheckoutModal({ isOpen, onClose, cart, clearCart, coupon }) {
  const [step, setStep] = useState(1); // 1 = Form, 2 = Success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    payment: 'cod'
  });
  const [errors, setErrors] = useState({});
  const [orderRef, setOrderRef] = useState('');
  const [successPaymentMethod, setSuccessPaymentMethod] = useState('');

  if (!isOpen) return null;

  const resolvedCart = cart.map(item => {
    const freshProduct = PRODUCTS.find(p => p.id === item.product.id) || item.product;
    return { ...item, product: freshProduct };
  });

  const totalQty = resolvedCart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = resolvedCart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Discount calculation
  let discountAmount = 0;
  if (coupon) {
    if (coupon.discountPercent > 0) {
      discountAmount = Math.round(subtotal * (coupon.discountPercent / 100));
    } else if (coupon.flatDiscount > 0) {
      discountAmount = coupon.flatDiscount;
    }
  }

  const isFreeShipping = subtotal >= SHIPPING_FREE_LIMIT || (coupon && coupon.freeShipping);
  const shippingCost = resolvedCart.length === 0 ? 0 : (isFreeShipping ? 0 : SHIPPING_FLAT_COST);
  const grandTotal = Math.max(0, subtotal + shippingCost - discountAmount);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) newErrors.email = true;

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) newErrors.phone = true;

    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.city.trim()) newErrors.city = true;

    const zipRegex = /^[0-9]{6}$/;
    if (!zipRegex.test(formData.zip.trim())) newErrors.zip = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success flow
    const randNum = Math.floor(10000 + Math.random() * 90000);
    setOrderRef(`#OG-${randNum}-S`);

    let paymentName = "Cash on Delivery (COD)";
    if (formData.payment === 'upi') paymentName = "UPI (GPay / PhonePe / Paytm)";
    else if (formData.payment === 'card') paymentName = "Credit / Debit Card";
    setSuccessPaymentMethod(paymentName);

    setStep(2);
  };

  const handleCloseSuccess = () => {
    clearCart();
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
      payment: 'cod'
    });
    setErrors({});
    onClose();
  };

  return (
    <div className={`modal-backdrop active`} style={{ display: 'flex' }}>
      {step === 1 ? (
        /* STEP 1: FORM */
        <div className="modal-card checkout-form-card" id="checkout-form-card">
          <button className="modal-close-x" onClick={onClose} aria-label="Close Checkout">&times;</button>
          <h2 className="modal-title" style={{ textAlign: 'center', marginBottom: '24px' }}>Secure Checkout</h2>
          
          <form id="checkout-info-form" onSubmit={handleFormSubmit} noValidate>
            <div className="checkout-form-grid">
              
              {/* Left Column: Delivery details */}
              <div className="checkout-form-left">
                <h3 className="checkout-section-title">Delivery Details</h3>
                
                <div className={`floating-input-group ${errors.name ? 'invalid' : ''}`}>
                  <input 
                    type="text" 
                    id="checkout-name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="checkout-name">Full Name</label>
                  <span className="error-msg">Please enter your full name.</span>
                </div>

                <div className="form-row-split">
                  <div className={`floating-input-group ${errors.email ? 'invalid' : ''}`}>
                    <input 
                      type="email" 
                      id="checkout-email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="checkout-email">Email Address</label>
                    <span className="error-msg">Please enter a valid email.</span>
                  </div>
                  <div className={`floating-input-group ${errors.phone ? 'invalid' : ''}`}>
                    <input 
                      type="tel" 
                      id="checkout-phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="checkout-phone">Phone Number</label>
                    <span className="error-msg">Please enter a 10-digit number.</span>
                  </div>
                </div>

                <div className={`floating-input-group ${errors.address ? 'invalid' : ''}`}>
                  <input 
                    type="text" 
                    id="checkout-address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="checkout-address">Street Address</label>
                  <span className="error-msg">Please enter your delivery address.</span>
                </div>

                <div className="form-row-split">
                  <div className={`floating-input-group ${errors.city ? 'invalid' : ''}`}>
                    <input 
                      type="text" 
                      id="checkout-city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="checkout-city">City</label>
                    <span className="error-msg">Please enter your city.</span>
                  </div>
                  <div className={`floating-input-group ${errors.zip ? 'invalid' : ''}`}>
                    <input 
                      type="text" 
                      id="checkout-zip" 
                      name="zip" 
                      value={formData.zip}
                      onChange={handleInputChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="checkout-zip">PIN Code</label>
                    <span className="error-msg">Please enter a 6-digit PIN.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Payment & Summary */}
              <div className="checkout-form-right">
                <h3 className="checkout-section-title">Payment Method</h3>
                <div className="payment-options">
                  <label className="payment-option-card">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod" 
                      checked={formData.payment === 'cod'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-option-content">
                      <Banknote size={20} />
                      <span>Cash on Delivery (COD)</span>
                    </div>
                  </label>
                  
                  <label className="payment-option-card">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="upi" 
                      checked={formData.payment === 'upi'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-option-content">
                      <Smartphone size={20} />
                      <span>UPI (GPay / PhonePe / Paytm)</span>
                    </div>
                  </label>
                  
                  <label className="payment-option-card">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="card" 
                      checked={formData.payment === 'card'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-option-content">
                      <CreditCard size={20} />
                      <span>Credit / Debit Card</span>
                    </div>
                  </label>
                </div>

                <h3 className="checkout-section-title" style={{ marginTop: '24px' }}>Order Summary</h3>
                <div className="checkout-summary-box">
                  <div className="summary-line">
                    <span>Items Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="summary-line">
                    <span>Shipping Fee</span>
                    <span>{shippingCost > 0 ? `₹${shippingCost}` : 'FREE'}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="summary-line" style={{ color: 'var(--color-tangerine)', fontWeight: 600 }}>
                      <span>Discount ({coupon.code})</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <hr className="summary-divider" />
                  <div className="summary-line grand-total">
                    <span>Grand Total</span>
                    <strong>₹{grandTotal}</strong>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '24px' }}>
                  <span>Place Order</span>
                  <ShoppingBag size={18} />
                </button>
              </div>

            </div>
          </form>
        </div>
      ) : (
        /* STEP 2: SUCCESS */
        <div className="modal-card" id="checkout-success-card">
          <div className="success-confetti-emitter">
            <Sparkles className="floating-confetti c-1" />
            <Cookie className="floating-confetti c-2" />
            <ThumbsUp className="floating-confetti c-3" />
            <Smile className="floating-confetti c-4" />
          </div>

          <div className="success-icon-badge">
            <CheckCircle2 />
          </div>

          <h2 className="modal-title">Snack Order Dispatched!</h2>
          <p className="modal-desc">
            Thank you for ordering with **OG Snacks**. We have received your order and our bakery is preparing it. Your delicious box of goodness will ship shortly.
          </p>

          <div className="receipt-box">
            <div className="receipt-row">
              <span>Order Reference</span>
              <strong id="receipt-ref">{orderRef}</strong>
            </div>
            <div className="receipt-row">
              <span>Items Ordered</span>
              <span id="receipt-items">{totalQty} item{totalQty === 1 ? '' : 's'}</span>
            </div>
            <div className="receipt-row">
              <span>Delivery Speed</span>
              <span>Fast Priority (2-3 days)</span>
            </div>
            <div className="receipt-row">
              <span>Payment Method</span>
              <span id="receipt-payment-method">{successPaymentMethod}</span>
            </div>
            <div className="receipt-row total">
              <span>Paid Amount</span>
              <span id="receipt-amount">₹{grandTotal}</span>
            </div>
          </div>

          <button className="btn btn-primary btn-block" onClick={handleCloseSuccess}>
            Keep Snacking
          </button>
        </div>
      )}
    </div>
  );
}
