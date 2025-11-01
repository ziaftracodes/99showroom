import React, { useEffect, useState } from 'react';
import type { Product } from '../types';
import { siteContent } from '../content';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveItem: (index: number) => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }

    // Reset checkout message when modal opens or items change
    setCheckoutMessage('');

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, cartItems]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleCheckout = () => {
    setCheckoutMessage(siteContent.cartModal.outOfStock);
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));
    return acc + price;
  }, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  if (!isOpen && !isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-start justify-end p-4 bg-brand-dark bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-modal-title"
    >
      <div 
        className={`relative w-full max-w-md h-full bg-slate-900 rounded-lg shadow-2xl flex flex-col transition-transform duration-300 border border-slate-800 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h2 id="cart-modal-title" className="text-xl font-serif font-bold text-white">{siteContent.cartModal.title}</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center text-gray-500">
            <p>{siteContent.cartModal.empty}</p>
          </div>
        ) : (
          <div className="flex-grow p-6 overflow-y-auto">
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={`${item.id}-${index}`} className="flex items-center gap-4">
                  <img src={item.imageUrls[0]} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex-grow">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.price}</p>
                  </div>
                  <button onClick={() => onRemoveItem(index)} className="text-gray-500 hover:text-red-400 transition-colors" aria-label={`Remove ${item.name} from cart`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-800">
                <div className="flex justify-between items-center mb-4 text-lg">
                    <span className="font-semibold text-gray-300">{siteContent.cartModal.total}</span>
                    <span className="font-bold text-white">{totalPrice}</span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="w-full px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                    {siteContent.cartModal.buyNow}
                </button>
                {checkoutMessage && (
                    <p className="mt-4 text-center text-sm grainy-gradient-text font-bold">{checkoutMessage}</p>
                )}
            </div>
        )}
      </div>
    </div>
  );
};