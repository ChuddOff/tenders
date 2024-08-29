import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Comfortaa, Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import Header from "./_components/shared/Header";
import Navbar from "./_components/shared/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Tender",
  description: "Tender ето сайт для посика тендоров",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${comfortaa.variable} ${inter.variable}`}
    >
      <body className="overflow-x-hidden">
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {/* Container */}
            <div className="mx-auto max-w-[1500px] px-5">
              <div className="mb-7">
                <Header />
                <Navbar />
              </div>
              {children}
            </div>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
