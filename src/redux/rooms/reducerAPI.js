import axios from "axios";

const BASE_URL = "http://localhost:5000/room"

export const createRoomAPI = async (payload) => {
  const res = await axios.post(BASE_URL, payload);
  return res;
};

export const getRoomByPlayerIdAPI = async (playerId) => {
  const res = await axios.get(`${BASE_URL}/${playerId}`);
  return res;
};