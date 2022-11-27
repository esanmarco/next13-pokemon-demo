import { API_BASE_URL } from "@/utils/const";
import { CacheType, Root } from "./models/pokemon";

export const getPokemonById = async (
  id: number,
  cache?: CacheType
): Promise<Root> => {
  return (await (
    await fetch(API_BASE_URL + id, {
      cache: cache ?? "force-cache",
    })
  ).json()) as Root;
};

export const getPokemonByName = async (name: string) => {
  return (await (await fetch(API_BASE_URL + name)).json()) as Root;
};
