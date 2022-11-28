import "@/styles/globals.css";
import QueryWrapper from "./components/queryWrapper";
import Navigation from "./navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="linksquares">
      <head />
      <body>
        <QueryWrapper>
          <Navigation />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
