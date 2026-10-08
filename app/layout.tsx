import "./globals.css";

export const metadata = {
  title: "Mehta Insights | 16-Week Live-Mentored Trading Program",
  description:
    "Build your understanding of the financial markets through a 16-week live-mentored trading program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}