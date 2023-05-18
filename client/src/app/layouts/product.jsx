import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/products/productList";
import ProductPage from "../components/products/productPage";

const Product = () => {
  const params = useParams();
  const { productId } = params;

  return (
    <>{productId ? <ProductPage productId={productId} /> : <ProductList />}</>
  );
};

export default Product;
