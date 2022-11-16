import Image from "next/image";
import { Ability, Form, Mfe, Root } from "../../../server/models/pokemon";

interface PokemonDetailsProps extends Root {}

export default function PokemonDetails({
  name,
  sprites,
  base_experience,
  forms,
  moves,
  abilities,
  height,
  weight,
}: PokemonDetailsProps) {
  return (
    <>
      <div className="flex flex-col mb-3 md:flex-row md:space-x-5">
        <Image
          src={sprites.other["official-artwork"].front_default}
          alt={name}
          width={150}
          height={150}
          className={`animate-fade-in mt-0 md:m-0 self-center md:self-start`}
        />
        <div>
          <p className="m-0 font-bold text-secondary">
            Base Experience: {base_experience}
          </p>
          <p>
            <span className="font-bold text-secondary">Height:</span> {height}{" "}
            inches / <span className="font-bold text-secondary">Weight:</span>{" "}
            {weight} lbs
          </p>
          <div className="flex flex-row space-x-5">
            <ListData title="Forms" name={name} data={forms} />
            <ListData title="Abilities" name={name} data={abilities} />
          </div>
        </div>
      </div>

      <ListData title="Moves" name={name} data={moves} />
    </>
  );
}

const ListData = ({
  title,
  name,
  data,
}: {
  title: string;
  name: string;
  data: Form[] | Mfe[] | Ability[];
}) => {
  const listName = (obj: Form | Mfe | Ability) => {
    if (obj.hasOwnProperty("move")) {
      return (obj as Mfe).move.name;
    }

    if (obj.hasOwnProperty("ability")) {
      return (obj as Ability).ability.name;
    }

    return (obj as Form).name;
  };

  return (
    <div className="flex flex-col">
      <p className="mt-0 mb-1 font-bold text-secondary">{title}:</p>
      <p className="flex flex-row flex-wrap gap-1 mt-0 text-xs capitalize">
        {data.map((d: Form | Mfe | Ability, index: number) => (
          <span key={`details-item-${name}-${index}`}>
            {listName(d)}
            {index !== data.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </div>
  );
};
