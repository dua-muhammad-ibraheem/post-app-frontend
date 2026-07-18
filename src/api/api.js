import axios from "axios";

const API = axios.create({
  baseURL: "https://post-app-backend-lilac.vercel.app/api",
});

export default API;