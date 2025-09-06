import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuickView }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="fade-in">
          <ProductCard product={product} onQuickView={onQuickView} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;