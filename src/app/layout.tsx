import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CC AI — AI-powered inventory, pricing, and listings for card resellers",
  description:
    "CC AI scans, grades, prices, and lists your collection across every marketplace you sell on. One dashboard. Zero spreadsheets.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CC AI",
    description:
      "AI-powered inventory, pricing, and listings for serious card resellers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
