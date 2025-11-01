import React from 'react';
import type { Product } from '../types';
import { siteContent } from '../content';

interface FeaturedProductProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product, onProductClick }) => {
  return (
    <section id="featured" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm tracking-widest uppercase grainy-gradient-text mb-2 font-semibold animate-in">{siteContent.featuredProduct.bestseller}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 grainy-gradient-text animate-in delay-100">{product.name}</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 animate-in delay-200">
              {product.description}
            </p>
            <button
              onClick={() => onProductClick(product)}
              className="inline-block px-10 py-3 border border-gray-600 text-white font-bold rounded-md hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 animate-in delay-300"
            >
              {siteContent.featuredProduct.viewDetails}
            </button>
          </div>
          <div 
            className="aspect-square overflow-hidden cursor-pointer group rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in delay-100" 
            onClick={() => onProductClick(product)}
          >
            <img
              src={product.imageUrls[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};