"use client";
import { useLayoutSwitcherStore } from "./layout-switcher";

interface ResultsContainerProps {
  children: React.ReactNode;
}

interface PokemonWrapperProps extends ResultsContainerProps {
  idx: number;
}

export default function ResultsContainer({ children }: ResultsContainerProps) {
  const { layout } = useLayoutSwitcherStore();
  const layoutClass =
    layout === "grid"
      ? "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-10 sm:p-0"
      : "flex flex-col";
  return <div className={`w-full gap-4 p-4 ${layoutClass}`}>{children}</div>;
}

export function PokemonWrapper({ children, idx }: PokemonWrapperProps) {
  const { layout } = useLayoutSwitcherStore();
  const layoutClass =
    layout === "grid"
      ? "flex-col w-full p-4 rounded-md shadow-md"
      : "flex-row w-fit mx-auto";

  const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "";
  return (
    <div
      className={`relative gap-4 flex items-center p-8 justify-center ${layoutClass}`}
    >
      <span
        className={`absolute top-0 ${
          layout === "grid" ? "left-2" : "right-0"
        } text-4xl`}
      >
        {medal}
      </span>
      {children}
    </div>
  );
}
