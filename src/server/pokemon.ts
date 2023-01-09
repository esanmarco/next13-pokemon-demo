import { API_BASE_URL, POKEMON_LIMIT } from "@/utils/const";
import { CacheType, NoImagePartialRoot, Root } from "./models/pokemon";

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

export const getPokemonList = async () => {
  const res = await (
    await fetch(`${API_BASE_URL}?limit=${POKEMON_LIMIT}`)
  ).json();

  return res.results.map(({ url, name }: { url: string; name: string }) => {
    const pokemonId = url.split("/")[6];
    return {
      id: pokemonId,
      name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
    };
  });
};
