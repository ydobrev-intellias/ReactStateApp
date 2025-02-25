import { createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";

interface InitialState {
  cart: Array<Product>;
}

const initialState: InitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item: Product) => item.id != action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
