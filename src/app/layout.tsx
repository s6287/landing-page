import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ssahuntervalley.com"),
  title: "SSA Hunter Valley | Signature Slam Academy - Tennis Excellence",
  description:
    "Signature Slam Academy Hunter Valley - The first venue in the world to have 60 multi surface tennis courts. Grow your game with the professionals. ADOPT • NURTURE • DELIVER",
  keywords: [
    "tennis academy",
    "Hunter Valley",
    "tennis training",
    "professional tennis",
    "SSA",
    "Signature Slam Academy",
    "tennis courts",
    "tennis coaching",
    "Australia tennis",
  ],
  authors: [{ name: "Signature Slam Academy" }],
  creator: "Signature Slam Academy",
  publisher: "Signature Slam Academy",
  openGraph: {
    title: "SSA Hunter Valley | Signature Slam Academy",
    description:
      "The first venue in the world to have 60 multi surface tennis courts. Grow your game with the professionals.",
    url: "https://ssahuntervalley.com",
    siteName: "Signature Slam Academy",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SSA Hunter Valley Tennis Academy",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSA Hunter Valley | Signature Slam Academy",
    description:
      "The first venue in the world to have 60 multi surface tennis courts.",
    images: ["/images/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Signature Slam Academy Hunter Valley",
              description:
                "Premier tennis academy with 60 multi surface courts in Hunter Valley, Australia",
              url: "https://ssahuntervalley.com",
              telephone: "+91 5642589752",
              email: "info@ssagroup.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "30 Wills Hill Road",
                addressLocality: "Lovedale",
                addressRegion: "NSW",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.7833,
                longitude: 151.4667,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "21:00",
              },
              sameAs: [
                "https://facebook.com/ssahuntervalley",
                "https://instagram.com/ssahuntervalley",
                "https://twitter.com/ssahuntervalley",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
