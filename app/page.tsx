import { getPokemonById } from "../server/pokemon";
import { getRandomPokemonIds } from "../utils/randomId";
import VoteBlock from "./voteBlock";

const getPokemonsToVoteOn = async () => {
  const pokeIds = getRandomPokemonIds(2);
  const pokemon = await Promise.all(
    pokeIds.map(async (id) => {
      return await getPokemonById(id, "no-store");
    })
  );
  return pokemon;
};

export default async function Home() {
  const pokemon = await getPokemonsToVoteOn();

  const againstId = (currentId: number): number => {
    return pokemon.find((poke) => poke.id !== currentId)?.id as number;
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-screen md:h-screen">
      <h1 className="mt-4 text-center md:mt-0">Which Pokémon would win?</h1>

      <div className="flex flex-col items-center justify-between max-w-5xl gap-8 p-8 md:flex-row animate-fade-in">
        {pokemon.map((poke) => {
          return (
            <VoteBlock
              againstId={againstId(poke.id)}
              key={`vote-${poke.id}`}
              details={poke}
            />
          );
        })}
      </div>
    </div>
  );
}
