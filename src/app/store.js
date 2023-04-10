import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
