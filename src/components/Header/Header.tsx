import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../Cart/CartDrawer';
import { products } from '../../data/products';
import { Product } from '../../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keyIngredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ).slice(0, 5);
      setSearchResults(filtered);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const categories = [
    { name: 'Cuidado Facial', path: '/productos/facial' },
    { name: 'Maquillaje', path: '/productos/maquillaje' },
    { name: 'Cuidado Corporal', path: '/productos/corporal' },
    { name: 'Kits y Regalos', path: '/productos/kits' }
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group animate-float">
              <Leaf className="h-8 w-8 text-raspberry group-hover:rotate-12 transition-transform duration-300 animate-spin-slow" />
              <span className="font-serif text-xl lg:text-2xl font-semibold text-primary-text animate-gradient-text">
                Luka Natural Elegance
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="text-primary-text hover:text-raspberry transition-all duration-300 font-medium hover:scale-105 animate-fade-in"
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="hidden lg:block w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-raspberry focus:border-raspberry transition-all duration-300 animate-fade-in"
                  />
                  <Search className="hidden lg:block absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                {/* Mobile Search Button */}
                <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110">
                  <Search className="h-5 w-5 text-primary-text" />
                </button>

                {/* Search Results Dropdown */}
                {isSearchOpen && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-slide-down">
                    <div className="p-2">
                      <div className="text-xs text-gray-500 px-3 py-2">
                        {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
                      </div>
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          to={`/producto/${product.id}`}
                          onClick={() => {
                            setSearchQuery('');
                            setIsSearchOpen(false);
                          }}
                          className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 animate-fade-in"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-primary-text truncate">
                              {product.name}
                            </h4>
                            <p className="text-xs text-secondary-text">
                              {formatPrice(product.price)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 animate-bounce-subtle"
              >
                <ShoppingBag className="h-5 w-5 text-primary-text" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-raspberry text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-primary-text" />
                ) : (
                  <Menu className="h-6 w-6 text-primary-text" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-down">
            {/* Mobile Search */}
            <div className="px-4 py-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-raspberry focus:border-raspberry transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              {/* Mobile Search Results */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="mt-2 bg-gray-50 rounded-lg">
                  <div className="p-2">
                    <div className="text-xs text-gray-500 px-3 py-2">
                      {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''}
                    </div>
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/producto/${product.id}`}
                        onClick={() => {
                          setSearchQuery('');
                          setIsSearchOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-colors duration-200"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-primary-text truncate">
                            {product.name}
                          </h4>
                          <p className="text-xs text-secondary-text">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <nav className="px-4 py-6 space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-primary-text hover:text-raspberry transition-all duration-300 font-medium hover:translate-x-2 animate-fade-in"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
};

export default Header;