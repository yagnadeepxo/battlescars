import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yagna’s Intern",
  description: "Curated Intelligence for Discerning Investors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif bg-stone-100 text-stone-800 min-h-screen">
        {/* Header */}
        <header className="w-full max-w-5xl mx-auto flex justify-between items-center py-4 border-b border-stone-300 px-6 mb-8">
          <h1 className="text-2xl font-bold tracking-wide">Yagna’s Intern</h1>
          <nav className="space-x-6 text-stone-600 font-medium text-sm tracking-widest uppercase">
            <a href="/" className="hover:text-stone-900">Home</a>
            <a href="/reports" className="hover:text-stone-900">Reports</a>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex flex-col items-center px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
