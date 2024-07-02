import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "../styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "juaneth.dev",
  description: "Desktop and web developer based in the UK.",
};

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

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
          <main className="flex flex-col overflow-y-auto">
            <div className="flex min-h-screen flex-col">
              <Navbar />
              {children}
            </div>

            <Footer></Footer>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
