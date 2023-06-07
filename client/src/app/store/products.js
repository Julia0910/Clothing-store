import { createAction, createSlice } from "@reduxjs/toolkit";
import productsService from "../services/product.service";
import history from "../utils/history";
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
        productRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            );
        },
        productUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload;
        },
        productAddSuccessed: (state, action) => {
            state.entities.unshift(action.payload);
        },
    },
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    productsRequested,
    productsReceved,
    productsRequestFiled,
    productRemoved,
    productUpdateSuccessed,
    productAddSuccessed,
} = actions;

const removeProductRequested = createAction("products/removeProductRequested");
const productUpdateFailed = createAction("products/productUpdateFailed");
const productUpdateRequested = createAction("products/productUpdateRequested");

export const loadProductsList = () => async (dispatch) => {
    dispatch(productsRequested());
    try {
        const { content } = await productsService.getProducts();
        dispatch(productsReceved(content));
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};

export const removeProduct = (productId) => async (dispatch) => {
    dispatch(removeProductRequested());
    try {
        const { content } = await productsService.removeProduct(productId);
        if (!content) {
            dispatch(productRemoved(productId));
        }
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};

export const updateProduct = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const { content } = await productsService.update(payload);
        dispatch(productUpdateSuccessed(content));
    } catch (error) {
        dispatch(productUpdateFailed(error.message));
    }
};

export const createProduct = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const { content } = await productsService.create(payload);
        dispatch(productAddSuccessed(content));
    } catch (error) {
        dispatch(productUpdateFailed(error.message));
    }
};

export const getProductById = (productId) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((prod) => prod.id === productId);
    }
};

export const getProducts = () => (state) => state.products.entities;
export const getProductsLoadingStatus = () => (state) =>
    state.products.isLoading;

export default productsReducer;
