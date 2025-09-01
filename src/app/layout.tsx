import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond, Inter } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import NewsLetter from "@/components/ui/NewsLetter";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

// Garamond - Primary display typeface (serif)
const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
});

// Gotham - Secondary display typeface (sans-serif) - using Inter as closest alternative
const gotham = Inter({
  subsets: ["latin"],
  variable: "--font-gotham",
  weight: ["400", "500", "600", "700"],
});

// Andhibath Demo - Funky display font (will be loaded via CSS)

export const metadata: Metadata = {
  title: "Balosh Integrated Services - Leading Access Control Company",
  description:
    "Balosh Integrated Services is the leading access control company in Nigeria, proudly serving clients since 2005. Innovative security solutions for modern businesses.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        className={`antialiased pt-[104px] ${garamond.variable} ${gotham.variable}`}
      >
        <Header />
        {children}
        <NewsLetter />
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
