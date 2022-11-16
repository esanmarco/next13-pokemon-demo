import { POKEMON_LIMIT } from './const';

export const getRandomPokemonIds = (len?: number) => {
    const randomIds = new Set<number>();
    while (randomIds.size < (len ?? 1)) {
        randomIds.add(Math.floor(Math.random() * POKEMON_LIMIT) + 1 + 1);
    }
    return Array.from(randomIds);
};
