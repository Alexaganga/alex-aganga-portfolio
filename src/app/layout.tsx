
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteUrl = "https://alex-aganga-portfolio.vercel.app";

const siteName = "Alex Aganga Portfolio";

const siteDescription =
  "Alex Aganga is a software engineer in Kenya building full-stack applications, AI-powered systems, secure digital products, and cloud infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Alex Aganga | Software Engineer & Digital Systems Engineer",
    template: "%s | Alex Aganga",
  },

  description: siteDescription,

  applicationName: siteName,

  authors: [
    {
      name: "Alex Aganga",
    },
  ],

  creator: "Alex Aganga",
  publisher: "Alex Aganga",
  category: "technology",

  keywords: [
    "Alex Aganga",
    "Software Engineer Kenya",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Backend Engineering",
    "AI Engineering",
    "Artificial Intelligence",
    "Cybersecurity",
    "DevSecOps",
    "Cloud Infrastructure",
    "Mobile App Development",
    "Digital Engineering",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName,

    title: "Alex Aganga | Software Engineer & Digital Systems Engineer",

    description: siteDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Aganga — Engineering Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Alex Aganga | Software Engineer",

    description:
      "Explore Alex Aganga's work in full-stack development, AI, cybersecurity, and DevSecOps.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04060F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Aganga Nyokwoyo",
    url: siteUrl,
    jobTitle: "Full-Stack, Mobile & DevOps Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [
      "https://github.com/Alexaganga",
      "https://www.linkedin.com/in/alex-aganga-a5459a272/",
      "https://x.com/AgangaAlex",
      "https://www.tiktok.com/@alexmoustapha?lang=en",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Laravel",
      "Flutter",
      "DevOps",
      "Docker",
      "PostgreSQL",
      "M-Pesa API",
    ],
  };

  return (
    <html lang="en-KE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
