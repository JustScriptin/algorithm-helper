import type { Metadata } from "next";
import { Gabarito as gabaritoFontProvider } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import "@/styles/globals.css";

const gabarito = gabaritoFontProvider({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
})

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
      <body className={gabarito.variable}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
