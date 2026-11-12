
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
  },

  twitter: {
    card: "summary",

    title: "Alex Aganga | Software Engineer",

    description:
      "Explore Alex Aganga's work in full-stack development, AI, cybersecurity, and DevSecOps.",
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
  return (
    <html lang="en-KE">
      <body>{children}</body>
    </html>
  );
}
