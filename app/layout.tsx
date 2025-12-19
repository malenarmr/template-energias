import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Nuevas Energías - Alquiler y Venta de Grupos Electrógenos | Buenos Aires",
  description:
    "Alquiler, venta y mantenimiento de grupos electrógenos en Buenos Aires. Servicio 24/7 para eventos, construcción y emergencias. Generadores eléctricos confiables desde 2010.",
  keywords: [
    "grupos electrógenos",
    "alquiler generadores",
    "venta grupos electrógenos",
    "mantenimiento generadores",
    "Buenos Aires",
    "CABA",
    "Argentina",
    "generadores eléctricos",
    "eventos",
    "construcción",
    "emergencias eléctricas",
  ],
  authors: [{ name: "Nuevas Energías" }],
  creator: "Nuevas Energías",
  publisher: "Nuevas Energías",
  category: "Servicios",
  classification: "Business",

  openGraph: {
    title: "Nuevas Energías - Grupos Electrógenos | Buenos Aires",
    description:
      "Alquiler, venta y mantenimiento de grupos electrógenos en Buenos Aires. Servicio profesional y confiable.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Nuevas Energías",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nuevas Energías - Grupos Electrógenos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nuevas Energías - Grupos Electrógenos | Buenos Aires",
    description:
      "Alquiler, venta y mantenimiento de grupos electrógenos en Buenos Aires.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/twitter-image.png`],
  },

  other: {
    "geo.region": "AR-C",
    "geo.placename": "Buenos Aires",
    "geo.position": "-34.6118;-58.3960",
    ICBM: "-34.6118, -58.3960",
    "business:contact_data:locality": "Buenos Aires",
    "business:contact_data:region": "CABA",
    "business:contact_data:country_name": "Argentina",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MKNG7HV');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKNG7HV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
