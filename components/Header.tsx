import React from 'react';
import { siteContent } from '../content';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-gray-800 shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-wider grainy-gradient-text">
            {siteContent.header.title}
          </a>
          <p className="text-xs text-gray-500 -mt-1 ml-px">{siteContent.header.subtitle}</p>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase">{siteContent.header.nav.products}</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase">{siteContent.header.nav.about}</a>
            <a href="#join" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase">{siteContent.header.nav.join}</a>
          </nav>
          <button onClick={onCartClick} className="relative" aria-label={`View cart with ${cartCount} items`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 grainy-gradient-bg text-brand-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};