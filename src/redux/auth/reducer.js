import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "./reducerAPI";

const initialState = {
  msg: "",
  isLoading: false,
  isSuccess: false,
};

export const login = createAsyncThunk("login/data", async (payload) => {
  const response = await loginAPI(payload);

  localStorage.setItem("token", response.data.data.token);
  localStorage.setItem("userId", response.data.data.id);
  localStorage.setItem("username", response.data.data.username);

  return response.data.msg;
});

export const register = createAsyncThunk("register/data", async (payload) => {
  const response = await registerAPI(payload);
  return response.data.msg;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.msg = action.payload;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.msg = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.msg = action.payload;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.msg = action.payload;
      })
  }
});

export const {} = authSlice.actions;
export const data = (state) => state.auth;
export default authSlice.reducer;
