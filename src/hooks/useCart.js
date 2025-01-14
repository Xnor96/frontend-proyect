import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };
  
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;