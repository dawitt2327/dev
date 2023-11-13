import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: auth,
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
  },
});
