import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { PreloadHandler } from "@/components/PreloadHandler";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#090A0C" },
  ],
};

export const metadata: Metadata = {
  title: "Sonic Technologies | Gas, Fire & SCADA Automation Engineering",
  description:
    "Sonic Technologies is a UAE engineering house specializing in FPGA embedded firmware, gas & fire detection systems, and industrial SCADA deployments.",
  icons: {
    icon: [
      { url: '/assets/favicon.ico' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/favicon.ico',
  },
  manifest: '/assets/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        {/* Anti-flash inline script to establish theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var stored = localStorage.getItem('sonic_theme');
                if (stored === 'dark') {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.classList.remove('dark');
              }
            })();`,
          }}
        />
      </head>
      <body className="preload" suppressHydrationWarning>
        {/* Skip to main content for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border focus:border-black focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        {/* Remove preload class cleanly after React hydration to enable transitions */}
        <PreloadHandler />
      </body>
    </html>
  );
}
