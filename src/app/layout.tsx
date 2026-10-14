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
  title: "Bao Lam | Software Engineer & Full-Stack Developer",
  description:
    "Personal resume and portfolio of Bao Lam (Baodubaiz) - Software Engineer specializing in Next.js, React, and TypeScript.",
  keywords: [
    "Bao Lam",
    "Baodubaiz",
    "Resume",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
