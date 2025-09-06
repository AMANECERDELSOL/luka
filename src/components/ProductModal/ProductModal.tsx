import React, { useState } from 'react';
import { X, Star, ShoppingCart, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppPurchase = () => {
    const message = `¡Hola! Me interesa comprar el producto:

🌿 *${product.name}*
💰 Precio: ${formatPrice(product.price)}
⭐ Calificación: ${product.rating}/5 (${product.reviewCount} reseñas)

📝 Descripción: ${product.description}

¿Podrías darme más información sobre disponibilidad y envío?`;

    const whatsappUrl = `https://wa.me/529992414659?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const tabs = [
    { id: 'description', label: 'Descripción' },
    { id: 'usage', label: 'Modo de Uso' },
    { id: 'ingredients', label: 'Ingredientes' },
    { id: 'reviews', label: 'Reseñas' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        <div className="flex h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          {/* Left Side - Images */}
          <div className="w-full lg:w-1/2 relative bg-gray-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain rounded-lg animate-fade-in"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Thumbnail Navigation */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-raspberry scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    {product.isNew && (
                      <span className="inline-block bg-sage-green text-white text-xs font-medium px-2 py-1 rounded-full mb-2 animate-bounce">
                        Nuevo
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="inline-block bg-raspberry text-white text-xs font-medium px-2 py-1 rounded-full mb-2 ml-2 animate-pulse">
                        Best Seller
                      </span>
                    )}
                    <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-primary-text animate-typewriter">
                      {product.name}
                    </h1>
                    <p className="text-secondary-text animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      {product.brand}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 transition-all duration-200 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current animate-twinkle' 
                            : 'text-gray-300'
                        }`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-secondary-text">
                    {product.rating} ({product.reviewCount} reseñas)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  <span className="font-serif text-3xl font-bold text-raspberry animate-glow">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'border-raspberry text-raspberry animate-slide-in'
                          : 'border-transparent text-secondary-text hover:text-primary-text hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mb-6 animate-fade-in">
                {activeTab === 'description' && (
                  <div className="space-y-4">
                    <p className="text-primary-text leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-3">Ingredientes Clave</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.keyIngredients.map((ingredient, index) => (
                          <span
                            key={ingredient}
                            className="bg-sage-green/20 text-primary-text px-3 py-1 rounded-full text-sm animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-3">Para qué tipo de piel</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.skinTypes.map((type, index) => (
                          <span
                            key={type}
                            className="bg-rose-quartz/30 text-primary-text px-3 py-1 rounded-full text-sm animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-3">Preocupaciones que trata</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.skinConcerns.map((concern, index) => (
                          <span
                            key={concern}
                            className="bg-raspberry/20 text-primary-text px-3 py-1 rounded-full text-sm animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {concern}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="space-y-4">
                    {product.howToUse.morning && (
                      <div className="animate-slide-in">
                        <h3 className="font-serif text-lg font-semibold mb-2">Rutina Matutina</h3>
                        <p className="text-primary-text leading-relaxed bg-yellow-50 p-4 rounded-lg">
                          {product.howToUse.morning}
                        </p>
                      </div>
                    )}
                    {product.howToUse.evening && (
                      <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                        <h3 className="font-serif text-lg font-semibold mb-2">Rutina Nocturna</h3>
                        <p className="text-primary-text leading-relaxed bg-blue-50 p-4 rounded-lg">
                          {product.howToUse.evening}
                        </p>
                      </div>
                    )}
                    {product.howToUse.general && (
                      <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="font-serif text-lg font-semibold mb-2">Instrucciones de Uso</h3>
                        <p className="text-primary-text leading-relaxed bg-green-50 p-4 rounded-lg">
                          {product.howToUse.general}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-4">
                    <div className="animate-slide-in">
                      <h3 className="font-serif text-lg font-semibold mb-3">Ingredientes Destacados</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {product.keyIngredients.map((ingredient, index) => (
                          <div
                            key={ingredient}
                            className="bg-white p-3 rounded-lg border border-gray-200 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <h4 className="font-medium text-primary-text mb-1">{ingredient}</h4>
                            <p className="text-sm text-secondary-text">
                              Ingrediente clave para el cuidado especializado de tu piel.
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
                      <h3 className="font-serif text-lg font-semibold mb-3">Lista Completa (INCI)</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-primary-text leading-relaxed">
                          {product.allIngredients.join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    <div className="text-center bg-gray-50 p-6 rounded-lg animate-fade-in">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-8 w-8 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current animate-twinkle' 
                                : 'text-gray-300'
                            }`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-2">
                        Calificación promedio: {product.rating}/5
                      </h3>
                      <p className="text-secondary-text">
                        Basada en {product.reviewCount} reseñas verificadas
                      </p>
                    </div>
                    
                    <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
                      <p className="text-secondary-text mb-4">
                        Las reseñas de clientes aparecerán aquí
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Attributes */}
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="font-serif text-lg font-semibold mb-3">Atributos</h3>
                <div className="flex flex-wrap gap-2">
                  {product.attributes.map((attribute, index) => (
                    <span
                      key={attribute}
                      className="bg-white border border-sage-green text-primary-text px-3 py-1 rounded-full text-sm animate-bounce"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {attribute}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer - Purchase Button */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <button
                onClick={handleWhatsAppPurchase}
                className="w-full bg-gradient-to-r from-raspberry to-raspberry/80 text-white py-4 rounded-xl font-medium hover:from-raspberry/90 hover:to-raspberry/70 transition-all duration-300 flex items-center justify-center space-x-3 btn-primary animate-pulse-glow"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Comprar por WhatsApp</span>
                <ShoppingCart className="h-5 w-5" />
              </button>
              <p className="text-center text-sm text-secondary-text mt-2">
                Te contactaremos para confirmar tu pedido
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;