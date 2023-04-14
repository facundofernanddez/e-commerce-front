import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  firstName: "",
  lastName: "",
  email: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.logged = true;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    unsetUser: (state) => {
      state.logged = false;
      state.firstName = "";
      state.lastName = "";
      state.email = "";
    },
  },
});

export const { setUser, unsetUser } = UserSlice.actions;

export default UserSlice.reducer;
