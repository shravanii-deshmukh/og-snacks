import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailsDrawer from './components/ProductDetailsDrawer';
import CheckoutModal from './components/CheckoutModal';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import { PRODUCTS } from './data/products';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Cart state
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('og_snacks_cart');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Drawer & Modal states
  const [cartOpen, setCartOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Coupon code states
  const [coupon, setCoupon] = useState(null);

  // Sync cart to local storage
  useEffect(() => {
    localStorage.setItem('og_snacks_cart', JSON.stringify(cart));
  }, [cart]);

  const applyCoupon = (code) => {
    const cleanCode = code.toUpperCase().trim();
    if (cleanCode === 'WELCOME15') {
      setCoupon({ code: 'WELCOME15', discountPercent: 15, flatDiscount: 0, freeShipping: false });
      return { success: true, message: '🎉 15% discount applied successfully!' };
    }
    if (cleanCode === 'OGFREE') {
      setCoupon({ code: 'OGFREE', discountPercent: 0, flatDiscount: 0, freeShipping: true });
      return { success: true, message: '🎉 Free Shipping coupon applied!' };
    }
    if (cleanCode === 'CRUNCH50') {
      setCoupon({ code: 'CRUNCH50', discountPercent: 0, flatDiscount: 50, freeShipping: false });
      return { success: true, message: '🎉 ₹50 discount applied successfully!' };
    }
    return { success: false, message: '❌ Invalid coupon code.' };
  };

  // Cart operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setCartOpen(true); // Open cart drawer automatically on add
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  // Details drawer triggers
  const handleProductClick = (product) => {
    setDetailsProduct(product);
    setDetailsOpen(true);
  };

  const handleTriggerCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  // Header sticky shadow logic
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Sticky Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={totalCartCount}
        openCart={() => setCartOpen(true)}
      />

      {/* Dynamic Page Views */}
      <div style={{ flexGrow: 1 }}>
        {activePage === 'home' && (
          <Home
            products={PRODUCTS}
            setActivePage={setActivePage}
            setCategoryFilter={setCategoryFilter}
            onProductClick={handleProductClick}
            addToCart={addToCart}
          />
        )}
        
        {activePage === 'products' && (
          <Products
            products={PRODUCTS}
            activeCategory={categoryFilter}
            setActiveCategory={setCategoryFilter}
            onProductClick={handleProductClick}
            addToCart={addToCart}
          />
        )}

        {activePage === 'about' && <About />}

        {activePage === 'contact' && <Contact />}
      </div>

      {/* Global Brand Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        triggerCheckout={handleTriggerCheckout}
        coupon={coupon}
        applyCoupon={applyCoupon}
        removeCoupon={() => setCoupon(null)}
      />

      {/* Product Nutrition Detail Drawer */}
      <ProductDetailsDrawer
        product={detailsProduct}
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        addToCart={addToCart}
      />

      {/* Secure Checkout Step Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        clearCart={clearCart}
        coupon={coupon}
      />
    </div>
  );
}
