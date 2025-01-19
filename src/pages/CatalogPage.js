import React from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';

const CatalogPage = ({ products, onAddToCart, onAddToWishlist }) => {
  const handleFilterChange = (filters) => {
    console.log('Filtros aplicados:', filters);
    // Aquí implementaré la lógica de filtrado más adelante
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SearchFilters onFilterChange={handleFilterChange} />
        </div>
        <div className="md:col-span-3">
          <SearchBar onSearch={(query) => console.log('Búsqueda:', query)} />
          <ProductList 
            products={products}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;