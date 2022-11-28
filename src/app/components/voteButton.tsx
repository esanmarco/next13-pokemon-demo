"use client";
import { useVote } from "@/pages/api/vote";
import { useRouter } from "next/navigation";

interface VoteButtonProps {
  votedFor: number;
  votedAgainst: number;
  pokemon: {
    name: string;
    spriteUrl: string;
  };
}

export default function VoteButton({
  votedFor,
  votedAgainst,
  pokemon: { spriteUrl, name },
}: VoteButtonProps) {
  const { refresh } = useRouter();

  const { vote, isLoading, isSuccess } = useVote(async () => {
    await fetch("/api/vote", {
      method: "POST",
      body: JSON.stringify({ name, votedFor, votedAgainst, spriteUrl }),
    });
    refresh();
  });

  const handleVote = () => {
    if (!isSuccess && !isLoading) {
      vote();
    }
  };

  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleVote}
        className={`btn text-white ${
          isSuccess ? "btn-success" : "btn-primary"
        } px-10 text-secondary ${isLoading ? "loading" : ""}`}
      >
        {isSuccess && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}{" "}
        Vote for {name}
      </button>
    </>
  );
}
