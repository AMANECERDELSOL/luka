import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, ChevronLeft, ChevronRight, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary-text mb-4">
            Producto no encontrado
          </h2>
          <Link
            to="/productos"
            className="text-raspberry hover:text-raspberry/80"
          >
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const tabs = [
    { id: 'description', label: 'Descripción' },
    { id: 'usage', label: 'Modo de Uso' },
    { id: 'ingredients', label: 'Ingredientes' },
    { id: 'reviews', label: 'Reseñas' }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-secondary-text">
            <li><Link to="/" className="hover:text-raspberry">Inicio</Link></li>
            <li>/</li>
            <li><Link to="/productos" className="hover:text-raspberry">Productos</Link></li>
            <li>/</li>
            <li className="text-primary-text">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-white">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex space-x-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-raspberry' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-16 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  {product.isNew && (
                    <span className="inline-block bg-sage-green text-white text-xs font-medium px-2 py-1 rounded-full mb-2">
                      Nuevo
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="inline-block bg-raspberry text-white text-xs font-medium px-2 py-1 rounded-full mb-2 ml-2">
                      Best Seller
                    </span>
                  )}
                  <h1 className="font-serif text-2xl lg:text-3xl font-semibold text-primary-text">
                    {product.name}
                  </h1>
                  <p className="text-secondary-text">{product.brand}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-full transition-colors ${
                      isFavorite 
                        ? 'bg-raspberry text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-primary-text'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <Share2 className="h-5 w-5 text-primary-text" />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-secondary-text">
                  {product.rating} ({product.reviewCount} reseñas)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="font-serif text-3xl font-bold text-raspberry">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Description */}
            <div className="bg-rose-quartz/20 p-4 rounded-lg">
              <p className="text-primary-text leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Ingredients */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-3">Ingredientes Clave</h3>
              <div className="flex flex-wrap gap-2">
                {product.keyIngredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="bg-sage-green/20 text-primary-text px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Attributes */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-3">Atributos</h3>
              <div className="flex flex-wrap gap-2">
                {product.attributes.map((attribute) => (
                  <span
                    key={attribute}
                    className="bg-white border border-sage-green text-primary-text px-3 py-1 rounded-full text-sm"
                  >
                    {attribute}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-primary-text">Cantidad:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-raspberry text-white py-3 rounded-lg font-medium hover:bg-raspberry/90 transition-colors duration-200 flex items-center justify-center space-x-2 btn-primary"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Añadir al Carrito</span>
              </button>

              {/* Shipping Info */}
              <div className="space-y-2 text-sm text-secondary-text">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4" />
                  <span>Envío gratis en compras superiores a $150.000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="h-4 w-4" />
                  <span>Devoluciones gratuitas hasta 30 días</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Producto 100% original garantizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-raspberry text-raspberry'
                      : 'border-transparent text-secondary-text hover:text-primary-text'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-primary-text leading-relaxed text-lg">
                  {product.description}
                </p>
                <h3 className="font-serif text-xl font-semibold mt-6 mb-4">Para qué tipo de piel</h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinTypes.map((type) => (
                    <span key={type} className="bg-sage-green/20 text-primary-text px-3 py-1 rounded-full">
                      {type}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-xl font-semibold mt-6 mb-4">Preocupaciones que trata</h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinConcerns.map((concern) => (
                    <span key={concern} className="bg-rose-quartz/30 text-primary-text px-3 py-1 rounded-full">
                      {concern}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                {product.howToUse.morning && (
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3">Rutina Matutina</h3>
                    <p className="text-primary-text leading-relaxed">
                      {product.howToUse.morning}
                    </p>
                  </div>
                )}
                {product.howToUse.evening && (
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3">Rutina Nocturna</h3>
                    <p className="text-primary-text leading-relaxed">
                      {product.howToUse.evening}
                    </p>
                  </div>
                )}
                {product.howToUse.general && (
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3">Instrucciones de Uso</h3>
                    <p className="text-primary-text leading-relaxed">
                      {product.howToUse.general}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Ingredientes Destacados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.keyIngredients.map((ingredient) => (
                      <div key={ingredient} className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-primary-text mb-2">{ingredient}</h4>
                        <p className="text-sm text-secondary-text">
                          Ingrediente clave para el cuidado especializado de tu piel.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Lista Completa (INCI)</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-primary-text leading-relaxed">
                      {product.allIngredients.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center bg-gray-50 p-8 rounded-lg">
                  <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Calificación promedio: {product.rating}/5
                  </h3>
                  <p className="text-secondary-text">
                    Basada en {product.reviewCount} reseñas verificadas
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-secondary-text mb-4">
                    Las reseñas de clientes aparecerán aquí
                  </p>
                  <button className="bg-raspberry text-white px-6 py-2 rounded-lg hover:bg-raspberry/90">
                    Escribir Reseña
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary-text mb-8 text-center">
              Productos Relacionados
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>

      {/* Mobile Filter Sidebar for filters */}
      <FilterSidebar
        filters={{
          skinConcerns: [],
          skinTypes: [],
          keyIngredients: [],
          attributes: [],
          priceRange: [0, 200000],
          categories: []
        }}
        onFilterChange={() => {}}
        onClearFilters={() => {}}
        isOpen={false}
        onClose={() => {}}
      />
    </div>
  );
};

export default ProductDetailPage;