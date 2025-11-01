import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className={`cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in bg-slate-900`}
      onClick={() => onClick(product)}
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.imageUrls[0]} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
       <div className="p-4">
        <h3 className="text-base font-medium text-white truncate">{product.name}</h3>
        <p className="text-base font-medium text-gray-300">{product.price}</p>
      </div>
    </div>
  );
};