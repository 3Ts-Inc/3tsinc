import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://3ts-inc.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shareef 3Ts Consulting",
  description: "Considered collaboration. Consequential change.",
  openGraph: {
    title: "Shareef 3Ts Consulting",
    description: "Considered collaboration. Consequential change.",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shareef 3Ts Consulting",
    description: "Considered collaboration. Consequential change.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-charcoal selection:bg-gold selection:text-cream overflow-x-hidden w-full relative">
        {children}
      </body>
    </html>
  );
}
