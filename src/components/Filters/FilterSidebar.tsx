import React from 'react';
import { X, Filter } from 'lucide-react';
import { FilterOptions } from '../../types';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: any) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose
}) => {
  const skinConcerns = ['Acné', 'Manchas', 'Sequedad', 'Líneas de expresión', 'Rosácea'];
  const skinTypes = ['Grasa', 'Mixta', 'Seca', 'Sensible', 'Normal'];
  const keyIngredients = ['Ácido Hialurónico', 'Vitamina C', 'Retinol', 'Niacinamida', 'Bakuchiol'];
  const attributes = ['Vegano', 'Libre de crueldad', 'Sin parabenos', 'Ecológico'];

  const handleCheckboxChange = (filterKey: keyof FilterOptions, value: string) => {
    const currentValues = filters[filterKey] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onFilterChange(filterKey, newValues);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white lg:bg-transparent
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto border-r border-gray-200 lg:border-0
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="font-serif text-xl font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </h2>
            <button
              onClick={onClearFilters}
              className="text-sm text-raspberry hover:text-raspberry/80"
            >
              Limpiar todo
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <h3 className="font-medium text-primary-text mb-3">Rango de Precio</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={filters.priceRange[1]}
                  onChange={(e) => onFilterChange('priceRange', [0, parseInt(e.target.value)])}
                  className="w-full accent-raspberry"
                />
                <div className="flex justify-between text-sm text-secondary-text">
                  <span>$0</span>
                  <span>${filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Skin Concerns */}
            <div>
              <h3 className="font-medium text-primary-text mb-3">Preocupación Principal</h3>
              <div className="space-y-2">
                {skinConcerns.map((concern) => (
                  <label key={concern} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.skinConcerns.includes(concern)}
                      onChange={() => handleCheckboxChange('skinConcerns', concern)}
                      className="rounded text-raspberry focus:ring-raspberry"
                    />
                    <span className="text-sm text-primary-text">{concern}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Skin Types */}
            <div>
              <h3 className="font-medium text-primary-text mb-3">Tipo de Piel</h3>
              <div className="space-y-2">
                {skinTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.skinTypes.includes(type)}
                      onChange={() => handleCheckboxChange('skinTypes', type)}
                      className="rounded text-raspberry focus:ring-raspberry"
                    />
                    <span className="text-sm text-primary-text">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Key Ingredients */}
            <div>
              <h3 className="font-medium text-primary-text mb-3">Ingredientes Clave</h3>
              <div className="space-y-2">
                {keyIngredients.map((ingredient) => (
                  <label key={ingredient} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.keyIngredients.includes(ingredient)}
                      onChange={() => handleCheckboxChange('keyIngredients', ingredient)}
                      className="rounded text-raspberry focus:ring-raspberry"
                    />
                    <span className="text-sm text-primary-text">{ingredient}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Attributes */}
            <div>
              <h3 className="font-medium text-primary-text mb-3">Atributos</h3>
              <div className="space-y-2">
                {attributes.map((attribute) => (
                  <label key={attribute} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.attributes.includes(attribute)}
                      onChange={() => handleCheckboxChange('attributes', attribute)}
                      className="rounded text-raspberry focus:ring-raspberry"
                    />
                    <span className="text-sm text-primary-text">{attribute}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden mt-8 pt-6 border-t border-gray-200 space-y-3">
            <button
              onClick={onClearFilters}
              className="w-full border border-gray-300 text-primary-text py-3 rounded-lg font-medium hover:bg-gray-50"
            >
              Limpiar Filtros
            </button>
            <button
              onClick={onClose}
              className="w-full bg-raspberry text-white py-3 rounded-lg font-medium hover:bg-raspberry/90"
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;