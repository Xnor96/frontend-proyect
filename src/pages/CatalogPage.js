import React from "react";
import ProductList from "../components/ProductList";
import { getProducts } from "../services/products";

const CatalogPage = () => {
  const products = getProducts();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default CatalogPage;
