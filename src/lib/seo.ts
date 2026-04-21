import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.susnex.com";
const SITE_NAME = "SusNex";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.png`;

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function pageSeo({
  title,
  description,
  path,
  ogImage,
  noIndex,
  type = "website",
  publishedTime,
  tags,
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        bn: `${SITE_URL}/bn${path}`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: type === "article" ? "article" : "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Sustainability Nexus Ltd",
    alternateName: "SusNex",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    description:
      "Sustainability consulting, ESG reporting, energy & carbon management, and social responsibility programs.",
    email: "ask@susnex.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, Bank Asia Building, 30 Sonargaon Janapath Ave, Sector 11, Uttara",
        addressLocality: "Dhaka",
        postalCode: "1230",
        addressCountry: "BD",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "484 McDonald Ave.",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11218",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Unit 3A, 34-35 Hatton Garden, Holborn",
        addressLocality: "London",
        postalCode: "EC1N 8DX",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "2624 Danforth Ave",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M4C 1L7",
        addressCountry: "CA",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "ask@susnex.com",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: ["https://linkedin.com/company/susnex"],
    foundingDate: "2023",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 30, maxValue: 50 },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Your partner in Sustainability — ESG reporting, energy & carbon, chemical & wastewater, material circularity, gender equality, and engineering assessment.",
    publisher: {
      "@type": "Organization",
      name: "The Sustainability Nexus Ltd",
    },
    inLanguage: ["en", "bn"],
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: "The Sustainability Nexus Ltd",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: "Sustainability Consulting",
  };
}

export function courseJsonLd(
  name: string,
  description: string,
  provider = "SusNex Academy"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: SITE_URL,
    },
    educationalCredentialAwarded: "GRI Certified Sustainability Professional eligibility",
    inLanguage: "en",
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostJsonLd(
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: "The Sustainability Nexus Ltd",
    },
    publisher: {
      "@type": "Organization",
      name: "The Sustainability Nexus Ltd",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    ...(image && { image }),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
