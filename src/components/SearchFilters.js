import React, { useState } from 'react';

const SearchFilters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'Electrónica',
    'Ropa',
    'Hogar',
    'Deportes'
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      onFilterChange({ categories: newCategories, priceRange });
      return newCategories;
    });
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
    onFilterChange({ categories: selectedCategories, priceRange: newRange });
  };

  return (
    <div className="search-filters p-4 bg-white rounded-lg shadow">
      <h3 className="search-filters__title text-lg font-semibold mb-4">Filtros</h3>
      
      <div className="search-filters__section mb-6">
        <h4 className="font-medium mb-2">Categorías</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded border-gray-300"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="search-filters__section">
        <h4 className="font-medium mb-2">Rango de Precio</h4>
        <div className="space-y-4">
          <div>
            <label>Mínimo</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
              className="w-full"
            />
            <span>${priceRange[0]}</span>
          </div>
          <div>
            <label>Máximo</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              className="w-full"
            />
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;