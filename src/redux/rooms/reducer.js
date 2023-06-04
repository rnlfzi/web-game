import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createRoomAPI, getRoomByPlayerIdAPI } from "./reducerAPI";

const initialState = {
  data: [],
  detail: null,
  status: "idle",
};

export const createRoom = createAsyncThunk("room/create", async (payload) => {
  const response = await createRoomAPI(payload);
  return response.data.data;
});

export const getRoomByPlayerId = createAsyncThunk("room/data", async (playerId) => {
  const response = await getRoomByPlayerIdAPI(playerId);
  return response.data.data;
});

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRoom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createRoom.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(getRoomByPlayerId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRoomByPlayerId.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
  }
});

export const {} = roomsSlice.actions;
export const data = (state) => state.rooms;
export default roomsSlice.reducer;