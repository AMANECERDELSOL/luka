import { useState, useMemo } from 'react';
import { Product, FilterOptions } from '../types';

export const useFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    skinConcerns: [],
    skinTypes: [],
    keyIngredients: [],
    attributes: [],
    priceRange: [0, 200000],
    categories: []
  });

  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Skin concerns filter
      if (filters.skinConcerns.length > 0 && 
          !filters.skinConcerns.some(concern => product.skinConcerns.includes(concern))) {
        return false;
      }

      // Skin types filter
      if (filters.skinTypes.length > 0 && 
          !filters.skinTypes.some(type => product.skinTypes.includes(type))) {
        return false;
      }

      // Key ingredients filter
      if (filters.keyIngredients.length > 0 && 
          !filters.keyIngredients.some(ingredient => 
            product.keyIngredients.some(key => key.toLowerCase().includes(ingredient.toLowerCase())))) {
        return false;
      }

      // Attributes filter
      if (filters.attributes.length > 0 && 
          !filters.attributes.every(attr => product.attributes.includes(attr))) {
        return false;
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'popular'
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return filtered;
  }, [products, filters, sortBy]);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      skinConcerns: [],
      skinTypes: [],
      keyIngredients: [],
      attributes: [],
      priceRange: [0, 200000],
      categories: []
    });
  };

  return {
    filters,
    filteredProducts,
    sortBy,
    setSortBy,
    updateFilter,
    clearFilters
  };
};