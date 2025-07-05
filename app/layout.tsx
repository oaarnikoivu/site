import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
        className={`${geistSans.variable} ${geistMono.variable} dark tracking-tight uppercase antialiased md:tracking-normal`}
      >
        <div className="flex min-h-screen items-center justify-center bg-linear-to-r/oklch from-black to-zinc-800">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
