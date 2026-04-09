import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DLS Lawn Services | Fresno Lawn Care — Reliable, Affordable, 5-Star Rated",
  description:
    "DLS Lawn Services — Fresno's most reliable lawn care. Weekly maintenance, cleanups, landscaping. Call Silvino at (559) 260-2945. 5 stars, 7 days a week.",
  keywords:
    "lawn care Fresno, lawn mowing Fresno, lawn cleanup Fresno, landscaping Fresno, DLS Lawn Services",
  openGraph: {
    title: "DLS Lawn Services | Fresno Lawn Care — 5 Stars",
    description:
      "Fresno's reliable lawn care team. Silvino delivers beautiful yards at fair prices. Call (559) 260-2945.",
    type: "website",
    locale: "en_US",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LawnCareService",
              name: "DLS Lawn Services",
              telephone: "(559) 260-2945",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1448 E Gettysburg Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93704",
                addressCountry: "US",
              },
              priceRange: "$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Sunday",
                  ],
                  opens: "06:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "06:00",
                  closes: "20:30",
                },
              ],
              areaServed: "Fresno, CA",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
