import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductDetails = ({ product, onAddToCart, onAddToWishlist }) => {
  if (!product) return null;

  return (
    <div className="product-details bg-white p-6 rounded-lg shadow-lg">
      <div className="product-details__image-container mb-6">
        <img 
          src="/api/placeholder/600/400" 
          alt={product.name}
          className="product-details__image w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      <div className="product-details__content">
        <h2 className="product-details__title text-3xl font-bold mb-2">
          {product.name}
        </h2>
        <p className="product-details__price text-2xl text-green-600 font-bold mb-4">
          {product.price}
        </p>
        <div className="product-details__description mb-6">
          <h3 className="text-xl font-semibold mb-2">Descripción</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
        
        <div className="product-details__actions flex gap-4">
          <button 
            onClick={() => onAddToCart(product)}
            className="product-details__button product-details__button--cart
                     flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg
                     hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Añadir al Carrito
          </button>
          <button
            onClick={() => onAddToWishlist(product)}
            className="product-details__button product-details__button--wishlist
                     flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg
                     hover:bg-pink-700 transition-colors"
          >
            <Heart className="w-5 h-5" />
            Añadir a Favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;