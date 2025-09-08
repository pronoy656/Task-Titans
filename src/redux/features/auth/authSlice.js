import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload && action.payload.token) {
        state.token = action.payload.token;
      } else {
        state.token = null; // ✅ handle null safely
      }
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
