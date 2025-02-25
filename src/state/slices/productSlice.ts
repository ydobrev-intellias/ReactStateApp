import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FormValues from "../../types/FormValues";
import Product from "../../types/Product";
import Status from "../../types/Status";
import { JSON_SERVER_URL, PUBLIC_API_URL } from "../../constants";

interface InitialState {
  data: Array<Product>;
  status: Status;
}

const initialState: InitialState = {
  data: new Array<Product>(),
  status: Status.IDLE,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const jsonServerResponse = await fetch(`${JSON_SERVER_URL}/products`);
    const jsonServerData = await jsonServerResponse.json();
    if (jsonServerData.length > 0) {
      return jsonServerData;
    }
    const publicApiResponse = await fetch(`${PUBLIC_API_URL}/products`);
    if (!publicApiResponse.ok) return;

    const publicApiData = (await publicApiResponse.json()).map(
      (product: Product) => ({
        ...product,
        id: String(product.id),
      })
    );
    for (const item of publicApiData) {
      await fetch(`${JSON_SERVER_URL}/products`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
        }),
      });
    }

    return publicApiData;
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData: FormValues) => {
    const response = await fetch(`${JSON_SERVER_URL}/products`);

    const products = await response.json();

    const product = await fetch(`${JSON_SERVER_URL}/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...productData,
        price: Number(productData.price),
        id: String(Number(products[products.length - 1].id) + 1),
      }),
    });
    const parsedProduct = await product.json();

    return parsedProduct;
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    await fetch(`${JSON_SERVER_URL}/products/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.IDLE;
        state.data = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = Status.IDLE;
        state.data = state.data.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
