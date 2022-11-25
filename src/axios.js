import axios from "axios";

// membuat instance axios kemudian atur url nya ke url football API
const api = axios.create({
  baseURL: "https://api.football-data.org/v2",
});

// interceptor untuk mengatur token pada saat melakukan request
api.interceptors.request.use((config) => {
  config.headers["X-Auth-Token"] = "8adb2b0da375429ea763dc79b6d7148b";

  return config;
});

// export agar dapat digunakan di file lain
export default api;
