import React, { useState } from 'react';
import type { Product } from '../types';
import { ProductGrid } from './ProductGrid';
import { siteContent } from '../content';

interface ProductShowcaseProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

type Category = 'Clothing' | 'Tech';

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products, onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Clothing');

  const clothingProducts = products.filter(p => p.category === 'Clothing');
  const techProducts = products.filter(p => p.category === 'Tech');

  const productsToShow = activeCategory === 'Clothing' ? clothingProducts : techProducts;

  const ToggleButton = ({ category, label }: { category: Category; label: string }) => (
    <button
      onClick={() => setActiveCategory(category)}
      className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
        activeCategory === category
          ? 'grainy-gradient-bg text-brand-dark'
          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="products" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white grainy-gradient-text animate-in">{siteContent.productShowcase.title}</h2>
          <div className="w-24 h-px grainy-gradient-bg mx-auto mt-4 animate-in delay-100"></div>
        </div>
        <div className="flex justify-center gap-4 mb-16 animate-in delay-200">
          <ToggleButton category="Clothing" label={siteContent.productShowcase.clothing} />
          <ToggleButton category="Tech" label={siteContent.productShowcase.tech} />
        </div>
        <ProductGrid products={productsToShow} onProductClick={onProductClick} />
      </div>
    </section>
  );
};