import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import Status from "../../types/Status";
import { JSON_SERVER_URL } from "../../constants";

interface InitialState {
  cart: Array<Product>;
  status: Status;
}

const initialState: InitialState = {
  cart: new Array<Product>(),
  status: Status.IDLE,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await fetch(`${JSON_SERVER_URL}/cart`);
  const cart = await response.json();
  return cart;
});
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product: Product) => {
    await fetch(`${JSON_SERVER_URL}/cart`, {
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
    return product;
  }
);
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId: string) => {
    const getResponse = await fetch(`${JSON_SERVER_URL}/cart/${productId}`);
    if (!getResponse.ok) {
      return;
    }
    await fetch(`${JSON_SERVER_URL}/cart/${productId}`, {
      method: "DELETE",
    });

    return productId;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(
        fetchCart.fulfilled,
        (state, action: PayloadAction<Array<Product>>) => {
          state.status = Status.IDLE;
          state.cart = action.payload;
        }
      )
      .addCase(fetchCart.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<Product>) => {
        state.cart.push(action.payload);
      })
      .addCase(
        removeFromCart.fulfilled,
        (state, action: PayloadAction<string | undefined>) => {
          if (!action.payload) return;

          state.cart = state.cart.filter(
            (product) => product.id !== action.payload
          );
        }
      ),
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
