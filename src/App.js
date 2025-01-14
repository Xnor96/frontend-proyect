import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import HomePage from './pages/HomePage';
import useCart from './hooks/useCart';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [wishlist, setWishlist] = useState([]);
  
  const handleAddToWishlist = (product) => {
    setWishlist(prev => [...prev, product]);
  };
  
  const handleRemoveFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };
  
  const handleMoveToCart = (product) => {
    addToCart(product);
    handleRemoveFromWishlist(product.id);
  };

  const renderCurrentRoute = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={setCurrentRoute} />;
      case 'catalog':
        return (
          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
            <SearchBar onSearch={(query) => console.log('Búsqueda:', query)} />
            <ProductList 
              products={[
                { id: 1, name: "Producto 1", description: "Descripción 1", price: "$10" },
                { id: 2, name: "Producto 2", description: "Descripción 2", price: "$20" },
                { id: 3, name: "Producto 3", description: "Descripción 3", price: "$30" },
              ]} 
              onAddToCart={addToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          </div>
        );
      case 'cart':
        return (
          <CartPage 
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
          />
        );
      case 'wishlist':
        return (
          <WishlistPage 
            wishlist={wishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onMoveToCart={handleMoveToCart}
          />
        );
      default:
        return <HomePage onNavigate={setCurrentRoute} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentRoute} currentRoute={currentRoute} />
      <main>
        {renderCurrentRoute()}
      </main>
    </div>
  );
};

export default App;
