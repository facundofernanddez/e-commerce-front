import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/user/UserSlice";
import CartReducer from "../reducers/cart/CartSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer,
  },
});
