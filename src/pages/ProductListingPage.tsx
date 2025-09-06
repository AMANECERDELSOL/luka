import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import FilterSidebar from '../components/Filters/FilterSidebar';
import { products } from '../data/products';
import { useFilters } from '../hooks/useFilters';

const ProductListingPage: React.FC = () => {
  const { category } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter products by category if specified
  const categoryProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  const { 
    filters, 
    filteredProducts, 
    sortBy, 
    setSortBy, 
    updateFilter, 
    clearFilters 
  } = useFilters(categoryProducts);

  const getCategoryTitle = () => {
    switch (category) {
      case 'facial': return 'Cuidado Facial';
      case 'maquillaje': return 'Maquillaje';
      case 'corporal': return 'Cuidado Corporal';
      case 'kits': return 'Kits y Regalos';
      default: return 'Todos los Productos';
    }
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-text mb-2">
            {getCategoryTitle()}
          </h1>
          <p className="text-secondary-text">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex lg:space-x-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={updateFilter}
              onClearFilters={clearFilters}
              isOpen={true}
              onClose={() => {}}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-raspberry focus:border-raspberry"
                >
                  <option value="popular">Más Populares</option>
                  <option value="newest">Novedades</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificados</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center space-x-2 border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' 
                      ? 'bg-raspberry text-white' 
                      : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' 
                      ? 'bg-raspberry text-white' 
                      : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16">
                <div className="mb-4">
                  <Filter className="h-16 w-16 text-gray-300 mx-auto" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-secondary-text mb-6">
                  Intenta ajustar tus filtros para encontrar lo que buscas
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-raspberry text-white px-6 py-2 rounded-lg hover:bg-raspberry/90 transition-colors"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={updateFilter}
        onClearFilters={clearFilters}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default ProductListingPage;