import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // console.log(action.payload,"cart item")
      state.cartItems.find((item) => item.id === action.payload.id)
        ? (state.cartItems = state.cartItems.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: item.totalPrice + item.price,
                }
              : item
          ))
        : state.cartItems.push(action.payload);

      state.cartTotalQuantity = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.cartTotalQuantity--;
      state.cartTotalAmount -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
