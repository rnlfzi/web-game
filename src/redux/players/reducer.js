import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlayerAPI, getPlayersAPI, updatePlayerAPI } from "./reducerAPI";

const initialState = {
  detail: {},
  data: [],
  status: "idle",
};

export const getPlayers = createAsyncThunk("players/data", async () => {
  const response = await getPlayersAPI();
  return response.data.data;
});

export const getPlayer = createAsyncThunk("players/detail", async (id) => {
  const response = await getPlayerAPI(id);
  return response.data.data;
});

export const updatePlayer = createAsyncThunk("players/update", async (payload) => {
  const response = await updatePlayerAPI(payload);
  return response.data.msg;
});

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlayers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getPlayer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.status = "success";
        state.detail = action.payload;
      })
      .addCase(updatePlayer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePlayer.fulfilled, (state) => {
        state.status = "success";
      })
  }
});

export const {} = playersSlice.actions;
export const data = (state) => state.players;
export default playersSlice.reducer;

