import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../redux/players/reducer";
import gamesReducer from "../redux/games/reducer";
import roomsReducer from "../redux/rooms/reducer";

export const store = configureStore({
  reducer: {
    players: playersReducer,
    games: gamesReducer,
    rooms: roomsReducer,
  }
})