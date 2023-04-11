import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    unsetUser: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.password = "";
    },
    loginUser: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
