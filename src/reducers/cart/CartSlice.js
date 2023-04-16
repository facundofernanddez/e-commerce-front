import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.totalCount += 1;
      state.productsList = [...productsList, action.payload];
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
