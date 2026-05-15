import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteUrl } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stepan Demianenko | Graduate Software Engineer",
  description:
    "Graduate software engineering portfolio for Stepan Demianenko, focused on backend APIs, Android applications, and reliable full-stack systems.",
  openGraph: {
    title: "Stepan Demianenko | Graduate Software Engineer",
    description:
      "Backend APIs, Android applications, and practical full-stack software engineering projects.",
    url: siteUrl,
    siteName: "Stepan Demianenko Portfolio",
    locale: "en_GB",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
