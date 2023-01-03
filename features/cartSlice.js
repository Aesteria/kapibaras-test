import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    increaseProductQuantity(state, action) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (!existingProduct) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state.items[existingProductIndex].quantity++;
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    decreaseProductQuantity(state, action) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload
      );
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (!existingProduct) {
        console.log("Something went wrong: decreaseProductQuantity");
        return;
      }

      if (existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[existingProductIndex].quantity--;
      }

      state.totalQuantity -= 1;
      state.totalPrice -= existingProduct.price;
    },

    clearProduct(state, action) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingProduct) {
        console.log("Something went wrong: clearProduct");
        return;
      }

      state.totalPrice -= existingProduct.price * existingProduct.quantity;
      state.totalQuantity -= existingProduct.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    fetchCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const {
  increaseProductQuantity,
  clearProduct,
  decreaseProductQuantity,
  fetchCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectProductQuantity = (state, id) =>
  state.cart.items.find((item) => item.id === id)?.quantity;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
