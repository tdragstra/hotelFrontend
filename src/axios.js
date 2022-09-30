import axios from "axios";
import { apiUrl } from "./config/constants";

const instance = axios.create({
  baseURL: apiUrl
});

export default instance;
