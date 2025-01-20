import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';
import { getProducts } from '../services/products';

const CatalogPage = ({ onAddToCart, onAddToWishlist }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [0, 1000]
  });

  // Efecto para cargar productos
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Efecto mejorado para manejar búsquedas y filtros
  useEffect(() => {
    if (products.length > 0) {
      let filtered = products;

      // Aplicar búsqueda
      if (searchQuery.trim()) {
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Aplicar filtros de categoría
      if (activeFilters.categories.length > 0) {
        filtered = filtered.filter(product => 
          activeFilters.categories.includes(product.category)
        );
      }

      // Aplicar filtros de precio
      filtered = filtered.filter(product => {
        const price = parseFloat(product.price.replace('$', ''));
        return price >= activeFilters.priceRange[0] && price <= activeFilters.priceRange[1];
      });

      setFilteredProducts(filtered);
    }
  }, [searchQuery, products, activeFilters]);

  // Manejador de búsqueda mejorado
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Manejador de filtros mejorado
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="text-center py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <p className="mt-4">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SearchFilters 
            onFilterChange={handleFilterChange}
            initialFilters={activeFilters}
          />
        </div>
        <div className="md:col-span-3">
          <SearchBar 
            onSearch={handleSearch}
            initialValue={searchQuery}
          />
          {filteredProducts.length > 0 ? (
            <ProductList 
              products={filteredProducts}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;