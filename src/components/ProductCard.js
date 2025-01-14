import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div className="product-card border rounded-lg p-4 shadow-md relative">
      {showAlert && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-800 p-2 rounded">
          ¡Producto añadido al carrito!
        </div>
      )}
      <img 
        src="/api/placeholder/300/200"
        alt={product.name}
        className="product-card__image w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="product-card__title text-xl font-bold">{product.name}</h2>
      <p className="product-card__description text-gray-600">{product.description}</p>
      <p className="product-card__price text-green-600 font-bold mt-2">{product.price}</p>
      <div className="product-card__actions flex gap-2 mt-4">
        <button 
          onClick={handleAddToCart}
          className="product-card__button product-card__button--cart bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Añadir al Carrito
        </button>
        <button 
          onClick={() => onAddToWishlist(product)}
          className="product-card__button product-card__button--wishlist bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;