import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';
import { fetchProducts, searchProducts, getProductsByCategory } from '../services/api';

const CatalogPage = ({ onAddToCart, onAddToWishlist, onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [0, 1000]
  });

  // Efecto para cargar productos desde la API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
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

  // Manejar búsqueda
  const handleSearch = async (query) => {
    setSearchQuery(query);
    
    try {
      setLoading(true);
      if (query.trim() === '') {
        // Si la búsqueda está vacía, mostrar todos los productos (con filtros aplicados)
        applyFilters(products, activeFilters);
      } else {
        // Buscar productos por la consulta
        const results = await searchProducts(query);
        // Aplicar filtros a los resultados de búsqueda
        applyFilters(results, activeFilters);
      }
    } catch (error) {
      console.error('Error searching products:', error);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Aplicar filtros a los productos
  const applyFilters = (productsToFilter, filters) => {
    let filtered = [...productsToFilter];
    
    // Filtrar por categorías
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Filtrar por rango de precio
    filtered = filtered.filter(product => {
      const price = parseFloat(product.price.toString().replace('$', ''));
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    setFilteredProducts(filtered);
  };

  // Manejar cambio de filtros
  const handleFilterChange = async (filters) => {
    setActiveFilters(filters);
    
    try {
      setLoading(true);
      
      // Si hay una búsqueda activa, aplicar filtros a los resultados de búsqueda
      if (searchQuery.trim() !== '') {
        const searchResults = await searchProducts(searchQuery);
        applyFilters(searchResults, filters);
      } 
      // Si hay filtro de categoría, obtener productos por categoría
      else if (filters.categories.length === 1) {
        const categoryProducts = await getProductsByCategory(filters.categories[0]);
        applyFilters(categoryProducts, filters);
      } 
      // De lo contrario, aplicar filtros a todos los productos
      else {
        applyFilters(products, filters);
      }
    } catch (error) {
      console.error('Error applying filters:', error);
    } finally {
      setLoading(false);
    }
  };

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
          {loading ? (
            <div className="text-center py-8">
              <p>Cargando productos...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <ProductList 
              products={filteredProducts}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              onProductClick={onProductClick}
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