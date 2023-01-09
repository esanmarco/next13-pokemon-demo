import db from "./config";
import { Votes } from "./models/pokemon";
import { getPokemonById } from "./pokemon";

export interface VoteResults {
  [key: string]: {
    name: string;
    spriteUrl: string;
    votes: number;
    votedAgainst: number;
  };
}

export const getResults = async () => {
  const query = "SELECT * FROM votes";
  const rows = await db(query).then((res) => res.rows);
  let allVotes: VoteResults = {};

  rows.forEach(async (row) => {
    const { votedFor, votedAgainst, votedForName, spriteUrl } = row as Votes;
    if (allVotes[votedFor]) {
      allVotes[votedFor].votes += 1;
    } else {
      allVotes[votedFor] = {
        name: votedForName,
        spriteUrl,
        votes: 1,
        votedAgainst: 0,
      };
    }
    if (allVotes[votedAgainst]) {
      allVotes[votedAgainst].votedAgainst += 1;
    } else {
      const res = await getPokemonById(votedAgainst);
      allVotes[votedAgainst] = {
        name: res.name,
        spriteUrl: res.sprites.other["official-artwork"].front_default,
        votes: 0,
        votedAgainst: 1,
      };
    }
  });

  // get total overall votes from allVotes
  const totalVotes = Object.values(allVotes).reduce(
    (acc, { votes }) => acc + votes,
    0
  );

  return {
    data: allVotes,
    totalVotes,
  };
};
