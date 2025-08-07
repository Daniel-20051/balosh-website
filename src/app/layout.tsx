import type { Metadata } from "next";
import "./globals.css";
import { Inter, Caveat } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import NewsLetter from "@/components/ui/NewsLetter";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

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
      <body className={`antialiased ${inter.variable} ${caveat.variable}`}>
        <Header />
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
