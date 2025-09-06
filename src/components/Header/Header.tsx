import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../Cart/CartDrawer';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Link to="/" className="flex items-center space-x-2 group">
              <Leaf className="h-8 w-8 text-raspberry group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-serif text-xl lg:text-2xl font-semibold text-primary-text">
                Luka Natural Elegance
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="text-primary-text hover:text-raspberry transition-colors duration-200 font-medium"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/blog"
                className="text-primary-text hover:text-raspberry transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Search className="h-5 w-5 text-primary-text" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <User className="h-5 w-5 text-primary-text" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <ShoppingBag className="h-5 w-5 text-primary-text" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-raspberry text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
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
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-primary-text hover:text-raspberry transition-colors duration-200 font-medium"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block text-primary-text hover:text-raspberry transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
};

export default Header;