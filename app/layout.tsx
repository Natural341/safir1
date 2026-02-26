import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CMSProvider } from "@/context/CMSContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import StructuredData from "@/components/StructuredData";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://safirtemizlik.com.tr'),
  title: {
    default: "Safir Temizlik | İstanbul Profesyonel Temizlik Hizmetleri",
    template: "%s | Safir Temizlik"
  },
  description: "İstanbul genelinde ev, ofis, inşaat sonrası ve villa temizliği hizmetleri. Safir Temizlik ile profesyonel, güvenilir ve hijyenik çözümler.",
  keywords: ["temizlik", "istanbul temizlik", "ev temizliği", "ofis temizliği", "inşaat sonrası temizlik", "villa temizliği", "halı yıkama", "koltuk yıkama", "apartman temizliği", "boş ev temizliği", "cam temizliği", "malzemeli temizlik", "derin temizlik istanbul", "profesyonel temizlik"],
  authors: [{ name: "Safir Temizlik" }],
  creator: "Safir Temizlik",
  publisher: "Safir Temizlik",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    url: 'https://safirtemizlik.com.tr',
    title: 'Safir Temizlik | İstanbul Profesyonel Temizlik Hizmetleri',
    description: 'İstanbul\'un en güvenilir temizlik ekibi ile tanışın. Hijyen ve kalite bir arada.',
    siteName: 'Safir Temizlik',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Safir Temizlik - İstanbul Profesyonel Temizlik Hizmetleri',
        type: 'image/png'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@safirtemizlik',
    creator: '@safirtemizlik',
    title: 'Safir Temizlik | İstanbul Profesyonel Temizlik Hizmetleri',
    description: 'İstanbul\'un en güvenilir temizlik ekibi ile tanışın. Hijyen ve kalite bir arada.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://safirtemizlik.com.tr',
  },
  verification: {
    google: '5GakfXB4QeMWnU8mbDqvrIzu59v3nGxs3wzaixxEJGc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-17977051033" />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17977051033');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:p-4 focus:bg-white focus:text-black">
          Ana İçeriğe Atla
        </a>
        <CMSProvider>
          <StructuredData />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingActions />
        </CMSProvider>
      </body>
    </html>
  );
}
