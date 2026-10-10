import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090e",
};

export const metadata: Metadata = {
  title: "Sonic Technologies | FPGA Gas & Fire Automation • SCADA RTU • UAE",
  description:
    "Sonic Technologies is a premier UAE automation engineering house specializing in FPGA-embedded gas & fire control panels, open-path laser gas detection, and SCADA RTUs. Protecting landmark UAE infrastructure including Etihad Towers and The Royal Atlantis.",
  keywords: [
    "Sonic Technologies",
    "Gas Detection UAE",
    "Fire Control Panels Abu Dhabi",
    "SCADA RTU Dubai",
    "Open-Path Laser Gas Detector",
    "Pipe-in-Pipe Gas Detector",
    "FPGA Embedded Firmware",
    "Boreal Laser UAE",
    "Etihad Towers Safety Systems",
  ],
  authors: [{ name: "Sonic Technologies Engineering" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-zinc-100 selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
