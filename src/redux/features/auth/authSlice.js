import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const currentToken = (state) => state.auth.token;
// export const currentUser = (state) => state.auth.user;
