import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, Heart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105 transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/producto/${product.id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 animate-shimmer"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.isNew && (
              <span className="bg-sage-green text-white text-xs font-medium px-2 py-1 rounded-full animate-bounce">
                Nuevo
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-raspberry text-white text-xs font-medium px-2 py-1 rounded-full animate-pulse">
                Best Seller
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full animate-glow">
                Oferta
              </span>
            )}
          </div>

          {/* Overlay Actions */}
          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}>
            <div className="flex space-x-2">
              {onQuickView && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickView(product);
                  }}
                  className="bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-200 hover:scale-110 animate-bounce-in"
                >
                  <Eye className="h-4 w-4 text-primary-text" />
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsFavorite(!isFavorite);
                }}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  isFavorite 
                    ? 'bg-raspberry text-white animate-heartbeat' 
                    : 'bg-white/90 hover:bg-white text-primary-text'
                }`}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Favorite Button (Always Visible on Mobile) */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 lg:hidden hover:scale-110 ${
              isFavorite 
                ? 'bg-raspberry text-white animate-heartbeat' 
                : 'bg-white/90 text-primary-text'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-medium text-primary-text group-hover:text-raspberry transition-all duration-300 line-clamp-2 animate-typewriter">
              {product.name}
            </h3>
            <p className="text-sm text-secondary-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {product.brand}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 transition-all duration-200 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current animate-twinkle' 
                      : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-xs text-secondary-text">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-raspberry animate-glow">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;