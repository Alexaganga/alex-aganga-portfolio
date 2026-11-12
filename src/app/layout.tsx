
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://alex-aganga-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Alex Aganga | Software Engineer & Digital Systems Engineer",
    template: "%s | Alex Aganga",
  },

  description:
    "Explore Alex Aganga's engineering portfolio: full-stack software development, AI systems, application security, DevSecOps and intelligent digital solutions.",

  applicationName: "ALEX.OS — Alex Aganga Portfolio",

  keywords: [
    "Alex Aganga",
    "Software Engineer Kenya",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Backend Engineering",
    "AI Engineering",
    "Cybersecurity",
    "DevSecOps",
    "Cloud Infrastructure",
    "Mobile App Development",
    "Digital Engineering",
  ],

  authors: [
    {
      name: "Alex Aganga",
    },
  ],

  creator: "Alex Aganga",
  publisher: "Alex Aganga",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "ALEX.OS — Alex Aganga",

    title: "Alex Aganga | Software Engineer",

    description:
      "Software engineering, intelligent systems, cybersecurity and digital solutions.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Alex Aganga | Software Engineer",

    description:
      "Explore my work in software engineering, AI, cybersecurity and DevSecOps.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
