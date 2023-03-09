import React, { useState } from "react";
import CargoCard from "./cargoCard";
import { products as productsData } from "../app/api/product.api";
const ProductList = () => {
  const [products] = useState(productsData);
  return (
    <div className="product-list">
      {products.map((product) => (
        <CargoCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
