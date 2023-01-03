import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateCartStateInLocalStorage } from "../api/storage";
import {
  clearProduct,
  decreaseProductQuantity,
  increaseProductQuantity,
} from "./cartSlice";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { dispatch, getState }) => {
    dispatch(increaseProductQuantity(product));

    updateCartStateInLocalStorage(getState().cart);
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { dispatch, getState }) => {
    dispatch(decreaseProductQuantity(productId));

    updateCartStateInLocalStorage(getState().cart);
  }
);

export const clearProductInCart = createAsyncThunk(
  "cart/clearProductInCart",
  async (productId, { dispatch, getState }) => {
    dispatch(clearProduct(productId));

    updateCartStateInLocalStorage(getState().cart);
  }
);
