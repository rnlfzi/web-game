import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createGameAPI, getGameAPI, getGamesAPI } from "./reducerAPI";

const initialState = {
  detail: null,
  games: [],
  status: "idle",
};

export const createGame = createAsyncThunk("games/create", async (payload) => {
  const response = await createGameAPI(payload);
  return response.data.msg;
});

export const getGames = createAsyncThunk("games/games", async () => {
  const response = await getGamesAPI();
  return response.data.data;
});

export const getGame = createAsyncThunk("games/detail", async (gameId) => {
  const response = await getGameAPI(gameId);
  return response.data.data;
});

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createGame.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(getGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = "success";
        state.games = action.payload;
      })
      .addCase(getGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.status = "success";
        state.detail = action.payload;
      })
  }
});

export const { reset } = gamesSlice.actions;
export const data = (state) => state.games.games;
export default gamesSlice.reducer;