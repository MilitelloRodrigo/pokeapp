import axios, { AxiosInstance } from "axios";

export const CustomAxios: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
