import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlobalParallaxBackground } from "@/components/ui/GlobalParallaxBackground";
import { PageTransition } from "@/components/animations/PageTransition";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.susnex.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SusNex — Your Partner in Sustainability",
    template: "%s | SusNex",
  },
  description:
    "The Sustainability Nexus Ltd provides sustainability consulting, ESG reporting, energy & carbon management, and gender smart programs for businesses in Bangladesh and beyond.",
  keywords: [
    "sustainability consulting",
    "ESG reporting",
    "energy audit",
    "carbon management",
    "GRI training",
    "Bangladesh",
    "SusNex",
    "sustainability reporting",
    "circular economy",
    "gender equality",
  ],
  authors: [{ name: "The Sustainability Nexus Ltd", url: SITE_URL }],
  creator: "The Sustainability Nexus Ltd",
  publisher: "The Sustainability Nexus Ltd",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: "/images/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "SusNex",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "SusNex — Your Partner in Sustainability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SusNex — Your Partner in Sustainability",
    description:
      "Sustainability consulting, ESG reporting, energy & carbon management for businesses worldwide.",
    images: [`${SITE_URL}/images/logo.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      bn: `${SITE_URL}/bn`,
      "x-default": SITE_URL,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </head>
      <body className="relative flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-bg-primary font-sans text-text-primary antialiased">
        <GlobalParallaxBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Header />
          <div id="main-content" className="flex-1" role="main">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
