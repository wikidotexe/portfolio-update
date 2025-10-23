import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/LoadingScreen";
import ThemeToggle from "@/components/ThemeToggle";
import Script from "next/script";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wikidotexe | Dwiki Arlian Maulana",
  description: "Portfolio of Dwiki Arlian Maulana — IT Support & System Engineer with 4 years of experience optimizing systems, networks, and infrastructure.",
  metadataBase: new URL("https://about.wikiarlianm.com"),
  openGraph: {
    title: "Wikidotexe | Dwiki Arlian Maulana",
    description: "Explore the portfolio of Dwiki Arlian Maulana — IT Support & System Engineer with 4 years of experience in system optimization, networking, and tech innovation.",
    url: "https://about.wikiarlianm.com",
    siteName: "Wikidotexe",
    images: [
      {
        url: "/images/og-image.jpg",
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
    description: "IT Support & System Engineer — exploring systems, networks, and performance optimization.",
    images: ["/images/og-image.jpg"],
    creator: "@wikidotexe",
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
        {/* apply theme early to avoid flash */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  // no saved choice -> respect OS preference
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <ThemeToggle />
        <LoadingScreen />
      </body>
    </html>
  );
}
