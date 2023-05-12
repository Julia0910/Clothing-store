import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api";
import CartItems from "./cartItem";
import "./cart.css";

const ShoppingCart = () => {
  const [product, setProduct] = useState([]);
  const productList = useSelector((state) => state.cart.list);

  useEffect(() => {
    api.products
      .getByIds(productList.map((item) => item.productId))
      .then((data) => setProduct(data));
  }, [productList]);

  const handleDelete = (id) => {
    const filterProduct = product.filter((prod) => prod.id !== id);
    setProduct(filterProduct);
  };

  return (
    <>
      <div className="cart-items">
        <h1>Корзина</h1>
        {product.length>0 ? (
          <div className="">
            {product.map((prod) => (
              <CartItems {...prod} key={prod.id} handleClick={handleDelete} />
            ))}
          </div>
        ) : (
          <p>Ваша корзина пуста</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
