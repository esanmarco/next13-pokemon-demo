"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarAction({ name }: { name: string }) {
  const path = usePathname();
  const activePokemon = (path as string).split("/")[2];

  return (
    <Link
      className={`rounded-none text-secondary no-underline ${
        activePokemon === name ? "active text-base-100" : "hover:text-primary"
      }`}
      href={`/pokemon/${name}`}
    >
      {name}
    </Link>
  );
}
