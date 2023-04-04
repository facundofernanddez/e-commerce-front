import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  token: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      state.id = "";
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.password = "";
      state.token = "";
    },
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
