import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Science_Gothic } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const scienceGothic = Science_Gothic({
  variable: "--font-science-gothic",
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Live to trade. Trade to live",
  description: "An intelligent investment ecosystem powered by Big Data & AI",
  icons: {
    icon: "/images/ic_favicon.svg",
    shortcut: "/images/ic_favicon.svg",
    apple: "/images/ic_logo@3x.png",
  },
  openGraph: {
    title: "Live to trade. Trade to live",
    description: "An intelligent investment ecosystem powered by Big Data & AI",
    url: "https://avixo.trading",
    siteName: "Avixo",
    images: [{ url: "/images/ic_logo@3x.png", width: 192, height: 192 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Live to trade. Trade to live",
    description: "An intelligent investment ecosystem powered by Big Data & AI",
    images: ["/images/ic_logo@3x.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${scienceGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Providers>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
