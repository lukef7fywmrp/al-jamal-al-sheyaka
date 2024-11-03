import "./globals.css";

import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Instrument_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AL JAMAL AL SHEYAKA | Luxury Beauty Salon in Sharjah",
  description:
    "Experience luxurious hair treatments and beauty services at AL JAMAL AL SHEYAKA salon in Buhira, Sharjah. Professional hair care, styling, and beauty treatments in a premium setting.",
  keywords:
    "beauty salon sharjah, hair salon sharjah, luxury salon UAE, hair treatments, beauty services, AL JAMAL AL SHEYAKA, Buhira salon",
  authors: [{ name: "AL JAMAL AL SHEYAKA" }],
  creator: "AL JAMAL AL SHEYAKA",
  publisher: "AL JAMAL AL SHEYAKA",
  openGraph: {
    title: "AL JAMAL AL SHEYAKA | Luxury Beauty Salon in Sharjah",
    description:
      "Premium beauty salon offering luxurious hair treatments and beauty services in Buhira, Sharjah. Visit us for professional hair care and styling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL JAMAL AL SHEYAKA | Luxury Beauty Salon",
    description:
      "Premium beauty salon offering luxurious hair treatments and beauty services in Buhira, Sharjah.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aljamalsheyaka.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
