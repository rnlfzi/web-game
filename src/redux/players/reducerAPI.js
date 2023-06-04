import axios from "axios";

const BASE_URL = "http://localhost:5000/player";

export const getPlayersAPI = async () => {
  const res = await axios.get(BASE_URL);
  return res;
}

export const getPlayerAPI = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res;
}

export const updatePlayerAPI = async (payload) => {
  const res = await axios.put(`${BASE_URL}/${payload.id}`, payload);
  return res;
}
