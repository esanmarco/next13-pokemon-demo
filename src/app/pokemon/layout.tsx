export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="hidden md:flex">{/** put sidebar here */}</div>
      <div className="flex flex-col flex-1 p-8">
        <div className="w-full max-w-3xl mx-auto text-sm">{children}</div>
      </div>
    </div>
  );
}
