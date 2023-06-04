import axios from "axios";

const BASE_URL = "http://localhost:5000/game";

export const createGameAPI = async (payload) => {
  const res = await axios.post(BASE_URL, payload);
  return res;
};

export const getGamesAPI = async () => {
  const res = await axios.get(BASE_URL);
  return res;
};

export const getGameAPI = async (gameId) => {
  const res = await axios.get(`${BASE_URL}/${gameId}`);
  return res;
}