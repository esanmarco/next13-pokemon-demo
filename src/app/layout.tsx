import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="linksquares">
      <head />
      <body className="prose">{children}</body>
    </html>
  );
}
