import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { CursorGlow } from "./cursor-glow";
import { DevAgentation } from "./dev-agentation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const switzer = localFont({
  src: "../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  weight: "100 900",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://nexcraft.app";
const description =
  "NexCraft is a product studio at the intersection of AI, automation, and user experience. Currently in stealth, developing our first set of products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NexCraft · Intelligent digital products",
    template: "%s · NexCraft",
  },
  description,
  applicationName: "NexCraft",
  authors: [{ name: "NexCraft LLC" }],
  creator: "NexCraft LLC",
  publisher: "NexCraft LLC",
  keywords: ["NexCraft", "AI", "automation", "product studio", "stealth"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "NexCraft · Intelligent digital products",
    description,
    siteName: "NexCraft",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexCraft · Intelligent digital products",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${switzer.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="atmosphere" aria-hidden="true" />
        <CursorGlow />
        <div className="grain" aria-hidden="true" />
        {children}
        <DevAgentation />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
