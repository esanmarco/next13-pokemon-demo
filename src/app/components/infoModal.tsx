import { Root } from "@/server/models/pokemon";
import PokemonDetails from "../pokemon/[name]/details";

export default function InfoModal({
  pokemon,
  modalId,
}: {
  pokemon: Root;
  modalId: string;
}) {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <label htmlFor={modalId} className="modal">
        <label className="modal-box realtive" htmlFor="">
          <PokemonDetails {...pokemon} />
        </label>
      </label>
    </>
  );
}
