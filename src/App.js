import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import useCart from './hooks/useCart';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [currentProduct, setCurrentProduct] = useState(null);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { 
      id: 1, 
      name: "Producto 1", 
      description: "Descripción detallada del producto 1", 
      price: "$10",
      category: "Electrónica" 
    },
    { 
      id: 2, 
      name: "Producto 2", 
      description: "Descripción detallada del producto 2", 
      price: "$20",
      category: "Hogar" 
    },
    { 
      id: 3, 
      name: "Producto 3", 
      description: "Descripción detallada del producto 3", 
      price: "$30",
      category: "Ropa" 
    },
  ];

  const handleProductClick = (product) => {
    setCurrentProduct(product);
    setCurrentRoute('product-details');
  };

  const handleAddToWishlist = (product) => {
    setWishlist(prev => [...prev, product]);
  };

  const renderCurrentRoute = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={setCurrentRoute} />;
      case 'catalog':
        return (
          <CatalogPage 
            products={products}
            onAddToCart={addToCart}
            onAddToWishlist={handleAddToWishlist}
            onProductClick={handleProductClick}
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
            onRemoveFromWishlist={(id) => setWishlist(prev => prev.filter(item => item.id !== id))}
            onMoveToCart={(product) => {
              addToCart(product);
              setWishlist(prev => prev.filter(item => item.id !== product.id));
            }}
          />
        );
      case 'checkout':
        return <CheckoutPage />;
      case 'product-details':
        return (
          <ProductDetailsPage 
            currentProduct={currentProduct}
            onAddToWishlist={handleAddToWishlist}
          />
        );
      default:
        return <HomePage onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentRoute} currentRoute={currentRoute} />
      {renderCurrentRoute()}
    </div>
  );
};

export default App;