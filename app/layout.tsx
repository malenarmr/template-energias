import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense } from "react";

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

  // Open Graph para redes sociales
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

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Nuevas Energías - Grupos Electrógenos | Buenos Aires",
    description:
      "Alquiler, venta y mantenimiento de grupos electrógenos en Buenos Aires.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/twitter-image.png`],
  },
  // Datos estructurados básicos
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Buenos Aires",
    "geo.position": "-34.6118;-58.3960", // Coordenadas de Buenos Aires
    ICBM: "-34.6118, -58.3960",
    "business:contact_data:locality": "Buenos Aires",
    "business:contact_data:region": "CABA",
    "business:contact_data:country_name": "Argentina",
  },

  // Robots y indexación
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

  // // Verificación de Google
  // verification: {
  //   google: "tu-codigo-de-verificacion-google",
  //   // yandex: "codigo-yandex",
  //   // bing: "codigo-bing",
  // },

  // Configuración de viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Canonical URL
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
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
