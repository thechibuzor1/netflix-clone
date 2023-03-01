import axios from "axios";
import { baseUrl } from "./constants";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;

export const client = axios.create({
  baseURL: "https://netflix-clone-backend-uoju.onrender.com",
});
