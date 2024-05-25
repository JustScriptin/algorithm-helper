import type { Metadata } from "next";
import { Inter as interFontProvider } from "next/font/google";
import "@/styles/globals.css";

const inter = interFontProvider({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Algorithm Helper",
  description: "An application designed to help users prepare for Leetcode-style interview challenges"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
