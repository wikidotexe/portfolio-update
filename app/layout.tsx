import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wikidotexe | Dwiki Arlian Maulana",
  description:
    "Portfolio of Dwiki Arlian Maulana — IT Support & System Engineer with 4 years of experience optimizing systems, networks, and infrastructure.",
  metadataBase: new URL("https://about.wikiarlianm.com"), // ganti sama domain kamu nanti
  openGraph: {
    title: "Wikidotexe | Dwiki Arlian Maulana",
    description:
      "Explore the portfolio of Dwiki Arlian Maulana — IT Support & System Engineer with 4 years of experience in system optimization, networking, and tech innovation.",
    url: "https://about.wikiarlianm.com",
    siteName: "Wikidotexe",
    images: [
      {
        url: "/images/og-image.jpg", // tambahin nanti di /public/images/
        width: 1200,
        height: 630,
        alt: "Wikidotexe Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wikidotexe | Dwiki Arlian Maulana",
    description:
      "IT Support & System Engineer — exploring systems, networks, and performance optimization.",
    images: ["/images/og-image.jpg"],
    creator: "@wikidotexe", // opsional, bisa diisi username X kamu
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
