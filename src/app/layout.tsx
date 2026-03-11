import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS LTV & CAC Calculator",
  description: "Calculate your SaaS unit economics instantly.",
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
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "SaaSCalc",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "WebBrowser",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "description": "Calculate your SaaS unit economics instantly. Evaluate Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC)."
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [{
                    "@type": "Question",
                    "name": "What is a good LTV:CAC ratio?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A good LTV:CAC ratio for B2B SaaS companies is generally considered to be 3:1 or higher. This means the Customer Lifetime Value is three times greater than the Customer Acquisition Cost, ensuring sustainable growth."
                    }
                  }]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
