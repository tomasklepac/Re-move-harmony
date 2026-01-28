import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Re-Move Harmony | Masáže, relaxační a pohybové terapie Plzeň",
  description: "Re-Move Harmony - masáže, relaxační a pohybové terapie v Plzni. Pomůžeme vám vrátit tělu i mysli lehkost a rovnováhu.",
  authors: [{ name: "Tomáš Klepáč" }],
  openGraph: {
    title: "Re-Move Harmony | Masáže, relaxační a pohybové terapie Plzeň",
    description: "Re-Move Harmony - masáže, relaxační a pohybové terapie v Plzni. Pomůžeme vám vrátit tělu i mysli lehkost a rovnováhu.",
    url: "https://re-moveharmony.cz",
    siteName: "Re-Move Harmony",
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/img/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/logo/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/img/logo/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/assets/img/logo/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/img/logo/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/img/logo/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/img/logo/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/assets/img/logo/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/assets/img/logo/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Re-Move Harmony",
  "image": "https://re-moveharmony.cz/assets/img/team/maseri_sirka.jpeg",
  "url": "https://re-moveharmony.cz",
  "telephone": "+420 732 912 705",
  "email": "info@re-moveharmony.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tylova 2814/68",
    "addressLocality": "Plzeň",
    "postalCode": "301 00",
    "addressCountry": "CZ"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "00:00",
      "description": "Zavřeno"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/re_move_harmony/",
    "https://www.reservio.cz/b/re-move-harmony"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <meta name="theme-color" content="#3D7077" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
