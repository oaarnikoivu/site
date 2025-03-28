import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Oliver Aarnikoivu",
    template: "%s | Oliver Aarnikoivu",
  },
  description:
    "Software Engineer at Next Gate Tech in Luxembourg, with a strong focus on product design. My interests lie in web development, human-computer interaction, and artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} uppercase dark antialiased tracking-tight md:tracking-normal`}
      >
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r/oklch from-black to-zinc-800">
          {children}
        </div>
      </body>
    </html>
  );
}
