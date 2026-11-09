import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/site.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || "https://melodytech.my.id";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} | Boutique Software Engineering & Architecture Studio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Melodytechlab Engineering Team", url: baseUrl }],
  creator: "Melodytechlab",
  publisher: "Melodytechlab",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Boutique Software Engineering & Architecture Studio`,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Melodytechlab - Software Engineering Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Boutique Software Engineering & Architecture Studio`,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@melodytechlab",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Melodytechlab",
        url: baseUrl,
        logo: `${baseUrl}/logo.svg`,
        description: siteConfig.description,
        sameAs: [
          "https://github.com/coffeesipee",
        ],
        knowsAbout: [
          "Web Application Engineering",
          "Mobile App Development",
          "Cloud Architecture & DevOps",
          "AI & LLM Integration",
          "Database Architecture",
          "Next.js & React",
          "Go & Microservices",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        name: "Melodytechlab Software Studio",
        url: baseUrl,
        parentOrganization: {
          "@id": `${baseUrl}/#organization`,
        },
        priceRange: "$$$",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Global",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Melodytechlab",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-brand/20 selection:text-brand-light">
        {children}
      </body>
    </html>
  );
}
