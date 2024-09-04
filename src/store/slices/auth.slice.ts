import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../components/state-models";

export const authenticationSlice = createSlice({

  name: "authentication",
  initialState: {} as IAuthState,
  reducers: {
    setCredentials: (state, action) => {
      const { refreshToken, accessToken } = action.payload;
      state.refreshToken = refreshToken;
      state.token = accessToken;
    },
    logout: (state) => {
      state.token = "";
      state.loading = false;
      state.refreshToken = "undefined";
      window.localStorage.removeItem("persist:authentication");
    },
    removeMe: (state) => {
      state.refreshToken = "";
    },

  },
});
