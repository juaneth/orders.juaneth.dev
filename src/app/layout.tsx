import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "../styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "juaneth.dev - Commisions",
  description: "Get your brand started today",
};

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

import Cursor from "./_components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${dmsans.className} dark bg-black`}>
          <Cursor></Cursor>
          <div className="relative grid h-screen grid-rows-[auto,1fr]">
            <main className="min-h-screen overflow-y-auto">
              <Navbar />
              {children}
              <Footer></Footer>
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
