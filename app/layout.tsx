import type { Metadata } from "next";
import { Josefin_Sans, Mulish } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DLS Lawn Services | Fresno Lawn Care — Reliable, Affordable, 5-Star Rated",
  description:
    "DLS Lawn Services — Fresno's most reliable lawn care. Silvino and Miguel deliver beautiful yards at fair prices. Weekly maintenance, cleanups, landscaping. Call (559) 260-2945.",
  keywords:
    "lawn care Fresno, lawn mowing Fresno, lawn cleanup Fresno, landscaping Fresno, DLS Lawn Services, Silvino lawn care",
  openGraph: {
    title: "DLS Lawn Services | Fresno Lawn Care",
    description:
      "Fresno's trusted lawn care team. Beautiful results, fair prices, 7 days a week. Call Silvino at (559) 260-2945.",
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
    <html lang="en" className={`${josefinSans.variable} ${mulish.variable}`}>
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
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"],
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
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
