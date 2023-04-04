import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/user/User";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
