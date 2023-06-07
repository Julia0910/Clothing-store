import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./cartItem";
import "./cart.css";
import {
    getCartList,
    fetchCart,
    deleteProductFromCart,
} from "../../store/cart";

const ShoppingCart = () => {
    const productList = useSelector(getCartList());
    const dispatch = useDispatch();

    // useEffect(() => {
    //     api.products
    //         .getByIds(productList.map((item) => item.productId))
    //         .then((data) => setProduct(data));
    // }, [productList]);

    useEffect(() => {
        dispatch(fetchCart());
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteProductFromCart(id));
        // const filterProduct = product.filter((prod) => prod.id !== id);
        // setProduct(filterProduct);
    };

    return (
        <>
            <div className="cart-items">
                <h1>Корзина</h1>
                {productList.length > 0 ? (
                    productList.map((prod) => (
                        <CartItems
                            {...prod.product}
                            size={prod.size}
                            id={prod.id}
                            key={prod.id}
                            handleClick={handleDelete}
                        />
                    ))
                ) : (
                    <p>Ваша корзина пуста</p>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;
