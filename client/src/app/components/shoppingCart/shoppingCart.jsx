import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./cartItem";
import "./cart.css";
import {
    getCartList,
    fetchCart,
    deleteProductFromCart,
    updateProductCart,
} from "../../store/cart";

const ShoppingCart = () => {
    const productList = useSelector(getCartList());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProductFromCart(id));
    };
    const handleDicrement = ({ id: productId, count }) => {
        console.log("dic");
        dispatch(count > 0
            ? updateProductCart({ productId, count })
            : deleteProductFromCart(productId))
    };
    const handleIncrement = ({ id: productId, count }) => {
        console.log("inc");
        dispatch(updateProductCart({ productId, count }))
    };

    const summ = productList.reduce((acc, cur) => (
        Number(acc) + cur.count*Number(cur.product.price)
    ), 0)

    return (
        <>
            <div className="cart-items">
                <h1>Корзина</h1>
                {productList.length > 0 ? (
                    <>
                        {productList.map((prod) => (
                            <CartItems
                                {...prod.product}
                                count={prod.count}
                                size={prod.size}
                                id={prod.id}
                                key={prod.id}
                                handleClick={handleDelete}
                                handleDicrement={handleDicrement}
                                handleIncrement={handleIncrement}
                            />
                        ))}
                        <h2>Итого: {summ}</h2>
                    </>
                ) : (
                    <p>Ваша корзина пуста</p>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;
