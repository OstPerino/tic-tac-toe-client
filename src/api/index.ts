import axios, { AxiosInstance } from "axios";

let API_URL = `http://${process.env.VUE_APP_API_DOMAIN}:${process.env.VUE_APP_API_PORT}/api`;

// @ts-ignore
if(window.Cypress) {
  // @ts-ignore
  API_URL = Cypress.env('apiBaseUrl');
}

const $api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config: any): any => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer_${localStorage.getItem("token")}`;
  }

  return config;
});

export default $api;
