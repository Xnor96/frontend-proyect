import React from 'react';
import ProductDetails from '../components/ProductDetails';
import useCart from '../hooks/useCart';

const ProductDetailsPage = ({ currentProduct, onAddToWishlist }) => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails 
        product={currentProduct}
        onAddToCart={addToCart}
        onAddToWishlist={onAddToWishlist}
      />
    </div>
  );
};

export default ProductDetailsPage;