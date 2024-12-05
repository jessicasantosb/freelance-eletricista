import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const outfit = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valdir Marques - Eletricista",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
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
