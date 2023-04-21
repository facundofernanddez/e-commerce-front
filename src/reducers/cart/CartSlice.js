import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
  totalCount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.totalCount += 1;
      state.productsList = [...state.productsList, action.payload];
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter((product) => {
        product.id !== productId;
      });
    },
  },
});

export const { addProductToCart, removeProductFromCart } = CartSlice.actions;

export default CartSlice.reducer;
