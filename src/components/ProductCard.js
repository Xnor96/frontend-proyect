import React from "react";

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded-lg">
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p>{product.description}</p>
    <p className="text-green-600 font-bold">{product.price}</p>
  </div>
);

export default ProductCard;
