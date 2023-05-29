import { createAction, createSlice } from "@reduxjs/toolkit";
import productsService from "../services/product.service";
const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        productsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        productCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        commentRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
    },
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    productsRequested,
    productsReceved,
    productsRequestFiled,
    productCreated,
    productRemoved,
} = actions;

const addProductRequested = createAction("products/addProductRequested");
const removeProductRequested = createAction("products/removeProductRequested");

export const loadproductsList = (userId) => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const { content } = await productsService.getproducts(userId);
        dispatch(productsReceved(content));
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};
export const createProduct = (payload) => async (dispatch) => {
    dispatch(addProductRequested());
    try {
        const { content } = await productsService.createProduct(payload);
        dispatch(productCreated(content));
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};
export const removeProduct = (commentId) => async (dispatch) => {
    dispatch(removeProductRequested());
    try {
        const { content } = await productsService.removeProduct(commentId);
        if (!content) {
            dispatch(productRemoved(commentId));
        }
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};

export const getProducts = () => (state) => state.products.entities;
export const getProductsLoadingStatus = () => (state) =>
    state.products.isLoading;

export default productsReducer;
