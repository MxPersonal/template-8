import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORTH — Real Estate",
  description: "A considered collection of remarkable homes, guided by local advisors who know the streets—not just the market.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
