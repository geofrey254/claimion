import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claimion – AI-Powered Vehicle Damage & Claim Platform",
  description:
    "Claimion helps insurers and drivers assess vehicle damage instantly using AI and generate detailed claim reports with ease. Faster, smarter insurance claims.",
  keywords: [
    "vehicle damage assessment",
    "AI car damage detection",
    "insurance claims automation",
    "Claimion",
    "auto claims platform",
    "AI for insurers",
    "claim reporting tool",
    "car insurance tech",
    "SaaS for insurance",
    "fast claims processing",
  ],
  authors: [{ name: "Claimion Team", url: "https://claimion.ai" }],
  creator: "Claimion Inc.",
  applicationName: "Claimion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
