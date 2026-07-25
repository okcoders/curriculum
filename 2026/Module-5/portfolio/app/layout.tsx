import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinkStyle = "font-bold m-auto"

export const metadata: Metadata = {
  title: "Derrick's Portfolio",
  description: "Derrick Young professional software development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-4/5 m-auto shadow-inset bg-red-200">
        <nav className="flex gap-4 text-xl justify-center h-[50px] w-1/2 mx-auto border-b-1 border-gray-900 shadow-lg mb-5">
          <Link className={navLinkStyle} href="/">Home</Link>
          <Link className={navLinkStyle} href="/about">About</Link>
          <Link className={navLinkStyle} href="/projects">Projects</Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
