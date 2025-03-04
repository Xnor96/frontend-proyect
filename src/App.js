import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ReturnOrderPage from './pages/ReturnOrderPage';
import useCart from './hooks/useCart';
import { fetchProducts } from './services/api';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [currentProductId, setCurrentProductId] = useState(null);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar productos al iniciar
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (productId) => {
    setCurrentProductId(productId);
    setCurrentRoute('product-details');
  };

  const handleAddToWishlist = (product) => {
    setWishlist(prev => {
      // Evitar duplicados
      if (prev.some(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const renderCurrentRoute = () => {
    if (loading && (currentRoute === 'catalog' || currentRoute === 'product-details')) {
      return <div className="container mx-auto py-8 text-center">Cargando...</div>;
    }

    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={setCurrentRoute} />;
      case 'catalog':
        return (
          <CatalogPage 
            onAddToCart={addToCart}
            onAddToWishlist={handleAddToWishlist}
            onProductClick={handleProductClick}
          />
        );
      case 'product-details':
        return (
          <ProductDetailsPage 
            currentProductId={currentProductId}
            onAddToCart={addToCart}
            onAddToWishlist={handleAddToWishlist}
            onNavigate={setCurrentRoute}
          />
        );
      case 'cart':
        return (
          <CartPage 
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
            onCheckout={() => setCurrentRoute('checkout')}
          />
        );
      case 'wishlist':
        return (
          <WishlistPage 
            wishlist={wishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onMoveToCart={(product) => {
              addToCart(product);
              handleRemoveFromWishlist(product.id);
            }}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage 
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
            onNavigate={setCurrentRoute}
          />
        );
      case 'return-order':
        return (
          <ReturnOrderPage 
            onSubmit={() => setCurrentRoute('home')}
          />
        );
      default:
        return <HomePage onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onNavigate={setCurrentRoute} 
        currentRoute={currentRoute} 
        cartItemCount={cart.length}
      />
      <main>
        {renderCurrentRoute()}
      </main>
    </div>
  );
};

export default App;