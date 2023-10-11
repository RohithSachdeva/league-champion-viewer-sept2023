import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../utils/providers";
import { getServerSession } from "next-auth";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League Champion Search",
  description: "Created with Next.js 13",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Header session={session} />
          <div>{children}</div>
        </body>
      </Providers>
    </html>
  );
}

//Place providers and header here.
