import { NoImagePartialRoot } from "@/server/models/pokemon";
import { getPokemonList } from "@/server/pokemon";
import { use } from "react";
import SidebarAction from "./action";

export default function Sidebar() {
  const pokemon = use(getPokemonList());

  return (
    <div className="flex flex-col w-48 overflow-x-hidden overflow-y-auto border-r">
      <h3 className="px-4 my-4 font-bold">All Pokemon</h3>

      <ul className="p-0 menu menu-compact">
        {pokemon.sort().map((p: NoImagePartialRoot) => {
          return (
            <li
              key={p.name}
              className="m-0 capitalize border-t hover:border-base-100 border-base-200/[0.3]"
            >
              <SidebarAction name={p.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
