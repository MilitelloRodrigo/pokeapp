import { CustomAxios } from "./CustomAxios";

export const getPokemons = () => {
  return CustomAxios.get("pokemon/?limit=151");
};

export const getPokemon = (id: number) => {
  return CustomAxios.get("pokemon/" + id);
};
