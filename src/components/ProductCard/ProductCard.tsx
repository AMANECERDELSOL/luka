import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    
    // Trigger flying animation
    const button = e.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const floatingElement = document.createElement('div');
    floatingElement.className = 'float-to-cart fixed z-50 pointer-events-none';
    floatingElement.style.left = `${rect.left}px`;
    floatingElement.style.top = `${rect.top}px`;
    floatingElement.innerHTML = `
      <img src="${product.images[0]}" class="w-8 h-8 rounded object-cover" alt="${product.name}" />
    `;
    
    document.body.appendChild(floatingElement);
    setTimeout(() => {
      document.body.removeChild(floatingElement);
    }, 800);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/producto/${product.id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.isNew && (
              <span className="bg-sage-green text-white text-xs font-medium px-2 py-1 rounded-full">
                Nuevo
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-raspberry text-white text-xs font-medium px-2 py-1 rounded-full">
                Best Seller
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                Oferta
              </span>
            )}
          </div>

          {/* Overlay Actions */}
          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex space-x-2">
              {onQuickView && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onQuickView(product);
                  }}
                  className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
                >
                  <Eye className="h-4 w-4 text-primary-text" />
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsFavorite(!isFavorite);
                }}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isFavorite 
                    ? 'bg-raspberry text-white' 
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
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 lg:hidden ${
              isFavorite 
                ? 'bg-raspberry text-white' 
                : 'bg-white/90 text-primary-text'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-medium text-primary-text group-hover:text-raspberry transition-colors duration-200 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-secondary-text">{product.brand}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-secondary-text">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-raspberry">
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

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-raspberry text-white py-2 rounded-lg font-medium hover:bg-raspberry/90 transition-all duration-200 flex items-center justify-center space-x-2 btn-primary"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Añadir al Carrito</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;