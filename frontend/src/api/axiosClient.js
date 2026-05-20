import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

// tự gắn token vào mọi request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;