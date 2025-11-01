import React, { useEffect, useState } from 'react';
import type { Product } from '../types';
import { SocialShare } from './SocialShare';
import { siteContent } from '../content';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  allProducts: Product[];
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, allProducts, onProductSelect, onAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    setIsAdded(false);
    setSelectedColor(product.colors ? product.colors[0].hex : null);
    setSelectedSize(product.sizes ? product.sizes[0] : null);
    setActiveImageIndex(0);

    const otherProducts = allProducts.filter(p => p.id !== product.id);
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    setSuggestedProducts(shuffled.slice(0, 3));

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [product, allProducts]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); 
  };
  
  const handleSuggestionClick = (p: Product) => {
      onProductSelect(p);
  }

  const handleAddToCartClick = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
        setIsAdded(false);
    }, 2000);
  };
  
  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.imageUrls.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.imageUrls.length) % product.imageUrls.length);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 border border-slate-800 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors z-20"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="grid md:grid-cols-2 max-h-[90vh]">
          <div className="overflow-hidden md:aspect-auto bg-slate-800 flex flex-col">
            <div className="flex-grow relative group aspect-square">
              <img 
                src={product.imageUrls[activeImageIndex]} 
                alt={`${product.name} - view ${activeImageIndex + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-300"
                key={product.imageUrls[activeImageIndex]}
              />
              {product.imageUrls.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/60 hover:scale-110" aria-label="Previous image">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={handleNextImage} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/60 hover:scale-110" aria-label="Next image">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            {product.imageUrls.length > 1 && (
              <div className="flex-shrink-0 p-2 grid grid-cols-5 gap-2 bg-slate-900/50">
                {product.imageUrls.slice(0, 5).map((url, index) => (
                  <button key={index} onClick={() => setActiveImageIndex(index)} className={`aspect-square rounded-md overflow-hidden transition-all duration-200 ${index === activeImageIndex ? 'ring-2 ring-brand-accent' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}>
                    <img src={url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
                <h2 id="product-modal-title" className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2">{product.name}</h2>
                <p className="text-2xl text-gray-400 mb-6">{product.price}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>
                
                {product.colors && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">{siteContent.productModal.color}</h3>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => setSelectedColor(color.hex)}
                          className={`w-8 h-8 rounded-full transition-transform duration-200 focus:outline-none ${selectedColor === color.hex ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-brand-accent scale-110' : 'hover:scale-110'}`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={`Select color ${color.name}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {product.sizes && (
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">{siteContent.productModal.size}</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${selectedSize === size ? 'bg-white text-black' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto">
                  <button
                    onClick={handleAddToCartClick}
                    disabled={isAdded}
                    className={`w-full px-6 py-3 font-bold rounded-md transition-all duration-300 shadow-md hover:shadow-lg ${
                        isAdded 
                        ? 'grainy-gradient-bg text-brand-dark cursor-not-allowed' 
                        : 'bg-white text-black hover:bg-gray-300 hover:scale-105'
                    }`}
                  >
                    {isAdded ? siteContent.productModal.added : siteContent.productModal.addToCart}
                  </button>
                </div>
                
                <SocialShare product={product} />

                {suggestedProducts.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <h3 className="text-base font-semibold text-white mb-4">{siteContent.productModal.youMightAlsoLike}</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {suggestedProducts.map(p => (
                        <div key={p.id} className="group cursor-pointer" onClick={() => handleSuggestionClick(p)}>
                          <div className="aspect-square bg-slate-800 overflow-hidden rounded-md">
                            <img src={p.imageUrls[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <h4 className="text-xs text-gray-300 mt-2 truncate">{p.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};