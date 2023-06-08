import { createSlice } from "@reduxjs/toolkit";
import productsService from "../services/product.service";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    productAdded: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    cartRequested: (state) => {
      state.isLoading = true;
    },
    productDeleted: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
      state.isLoading = false;
    },
    cartRequestFailed: (state) => {
      state.isLoading = false;
    }
  },
});

export const { productAdded, cartRequested, productDeleted, cartRequestFailed } = cartSlice.actions;

export const addProductToCart = (payload) => async (dispatch) => {
  dispatch(cartRequested());
  try {
      const { content } = await productsService.addProductToCart(payload);
      dispatch(productAdded(content));
  } catch (error) {
      dispatch(cartRequestFailed(error.message));
  }
};

export const fetchCart = () => async (dispatch) => {
  dispatch(cartRequested());
  try {
      const { content } = await productsService.getCart();
      dispatch(productAdded(content));
  } catch (error) {
      dispatch(cartRequestFailed(error.message));
  }
};

export const deleteProductFromCart = (payload) => async (dispatch) => {
  dispatch(cartRequested());
  try {
      await productsService.deleteProductFromCart(payload);
      dispatch(productDeleted(payload));
  } catch (error) {
      dispatch(cartRequestFailed(error.message));
  }
};

export const updateProductCart = (payload) => async (dispatch) => {
  dispatch(cartRequested());
  try {
      const { content } = await productsService.updateProductCart(payload);
      dispatch(productAdded(content));
  } catch (error) {
      dispatch(cartRequestFailed(error.message));
  }
}

export const getCartList = () =>  (state) => state.cart.list

export default cartSlice.reducer;
