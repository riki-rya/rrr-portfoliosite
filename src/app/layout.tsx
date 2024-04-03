import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import React from "react";

import type { Metadata } from "next";
import { Toaster } from "./components/ui/toaster";

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rrr",
  description: "rrr's portfolio site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

