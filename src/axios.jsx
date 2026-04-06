import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // e.g. http://localhost:8080
});
delete API.defaults.headers.common["Authorization"];
export default API;
