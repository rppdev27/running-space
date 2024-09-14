import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Motherday } from "./style";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Undangan Pernikahan Online Digital - Menica",
  description: "Undangan pernikahan online atau undangan pernikahan digital dengan desain website ekslusif. Yuk buat undangan digital kekinian hanya dalam 1 menit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          {children}
            <Toaster />
          </body>
      </html>
  );
}

