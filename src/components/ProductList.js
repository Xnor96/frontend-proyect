import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};

export default ProductList;
