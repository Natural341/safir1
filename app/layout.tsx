import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CMSProvider } from "@/context/CMSContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://safirtemizlik.com.tr'),
  title: {
    default: "Safir Temizlik | İstanbul Profesyonel Temizlik Hizmetleri",
    template: "%s | Safir Temizlik"
  },
  description: "İstanbul genelinde ev, ofis, inşaat sonrası ve villa temizliği hizmetleri. Safir Temizlik ile profesyonel, güvenilir ve hijyenik çözümler.",
  keywords: ["temizlik", "istanbul temizlik", "ev temizliği", "ofis temizliği", "inşaat sonrası temizlik", "villa temizliği", "halı yıkama", "koltuk yıkama"],
  authors: [{ name: "Safir Temizlik" }],
  creator: "Safir Temizlik",
  publisher: "Safir Temizlik",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://safirtemizlik.com.tr',
    title: 'Safir Temizlik | İstanbul Profesyonel Temizlik Hizmetleri',
    description: 'İstanbul\'un en güvenilir temizlik ekibi ile tanışın. Hijyen ve kalite bir arada.',
    siteName: 'Safir Temizlik',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Safir Temizlik - İstanbul Profesyonel Temizlik Hizmetleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safir Temizlik | İstanbul Profesyonel Temizlik Hizmetleri',
    description: 'İstanbul\'un en güvenilir temizlik ekibi ile tanışın.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://safirtemizlik.com.tr',
  },
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_CODE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body className={inter.className}>
        <CMSProvider>
          <StructuredData />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </CMSProvider>
      </body>
    </html>
  );
}
