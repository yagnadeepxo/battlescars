import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif bg-stone-100 text-stone-800 min-h-screen">

      {/* Main content */}
        <main className="flex flex-col items-center px-2">
          {children}
        </main>
      </body>
    </html>
  );
}
