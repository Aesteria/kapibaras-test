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
        (item) => item.id === action.payload.product.id
      );
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.product.id
      );

      if (!existingProduct) {
        state.items.push({
          ...action.payload.product,
          quantity: 1,
        });
      } else {
        state.items[existingProductIndex].quantity++;
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.product.price;
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
      }

      if (existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[existingProductIndex].quantity--;
      }

      state.totalQuantity -= 1;
      state.totalPrice -= existingProduct.price;
    },

    removeProductFromCart(state, action) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingProduct) {
        console.log("Something went wrong: removeProductFromCart");
        return;
      }

      state.totalPrice -= existingProduct.price * existingProduct.quantity;
      state.totalQuantity -= existingProduct.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  increaseProductQuantity,
  removeProductFromCart,
  decreaseProductQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectProductQuantity = (state, id) =>
  state.cart.items.find((item) => item.id === id)?.quantity;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
