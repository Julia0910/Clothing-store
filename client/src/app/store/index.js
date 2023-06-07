import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import categoriesReducer from "./categories";
import usersReducer from "./users";
import cartReducer from "./cart";

export default configureStore({
    reducer: {
        categories: categoriesReducer,
        users: usersReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});
