import axios from "axios";

const BASE_URL = "http://localhost:5000"

export const loginAPI = async (payload) => {
  const res = await axios.post(`${BASE_URL}/login`, payload);
  return res;
};

export const registerAPI = async (payload) => {
  const res = await axios.post(`${BASE_URL}/register`, payload);
  return res;
};
