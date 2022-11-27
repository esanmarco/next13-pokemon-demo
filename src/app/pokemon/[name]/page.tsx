import { getPokemonByName } from "@/server/pokemon";
import PokemonDetails from "./details";

export default async function DetailsWrapper({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const pokemon = await getPokemonByName(name);

  return (
    <>
      <PokemonDetails {...pokemon} />
    </>
  );
}
