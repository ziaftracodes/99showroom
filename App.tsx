
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProduct } from './components/FeaturedProduct';
import { ProductShowcase } from './components/ProductShowcase';
import { About } from './components/About';
import { JoinDrop } from './components/JoinDrop';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { TOSGate } from './components/TOSGate';
import { CartModal } from './components/CartModal';
import { products } from './constants';
import type { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tosAccepted, setTosAccepted] = useState(() => {
    return typeof window !== 'undefined' ? window.localStorage.getItem('99showroom_tos_accepted') === 'true' : false;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('loaded');
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  const handleAddToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };
  
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleAcceptTOS = () => {
    window.localStorage.setItem('99showroom_tos_accepted', 'true');
    setTosAccepted(true);
  };

  if (!tosAccepted) {
    return <TOSGate onAccept={handleAcceptTOS} />;
  }
  
  const bestSeller = products.find(p => p.bestSeller) || products[0];
  const collectionProducts = products.filter(p => p.id !== bestSeller.id);

  return (
    <div className={`text-white min-h-screen font-sans antialiased transition-opacity duration-1000 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header cartCount={cart.length} onCartClick={handleCartClick} />
      <main>
        <Hero />
        <FeaturedProduct product={bestSeller} onProductClick={handleProductClick} />
        <ProductShowcase products={collectionProducts} onProductClick={handleProductClick} />
        <About />
        <JoinDrop />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal}
          allProducts={products}
          onProductSelect={handleProductClick}
          onAddToCart={handleAddToCart}
        />
      )}
      <CartModal 
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;