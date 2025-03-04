import React, { useState, useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import { fetchProducts } from '../services/api';

const ProductDetailsPage = ({ currentProductId, onAddToCart, onAddToWishlist, onNavigate }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProduct = async () => {
      if (!currentProductId) {
        onNavigate('catalog');
        return;
      }

      try {
        setLoading(true);
        setError('');
        
        // En una implementación ideal, harías una llamada específica para un solo producto
        // Pero como estamos trabajando con la estructura actual, obtenemos todos y filtramos
        const products = await fetchProducts();
        const foundProduct = products.find(p => p.id === currentProductId);
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Producto no encontrado');
          setTimeout(() => onNavigate('catalog'), 3000);
        }
      } catch (err) {
        console.error('Error loading product details:', err);
        setError('Error al cargar los detalles del producto');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [currentProductId, onNavigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Cargando detalles del producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600">{error}</p>
        <p>Redirigiendo al catálogo...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => onNavigate('catalog')}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        ← Volver al catálogo
      </button>
      
      {product && (
        <ProductDetails 
          product={product}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      )}
    </div>
  );
};

export default ProductDetailsPage;