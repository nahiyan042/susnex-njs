/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.susnex.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/", "/bn/"] },
    ],
    additionalSitemaps: [],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/api/**"],
  alternateRefs: [
    { href: process.env.NEXT_PUBLIC_SITE_URL || "https://www.susnex.com", hreflang: "en" },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.susnex.com"}/bn`,
      hreflang: "bn",
    },
  ],
  transform: async (_config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/services": 0.9,
      "/academy": 0.9,
      "/about": 0.8,
      "/contact": 0.8,
      "/blog": 0.8,
      "/team": 0.7,
      "/faq": 0.7,
    };

    const isService = path.startsWith("/services/");
    const isLegal = ["/privacy-policy", "/terms-conditions", "/cookie-policy", "/disclaimer", "/gdpr-compliance"].includes(path);

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : isLegal ? "yearly" : "weekly",
      priority: priorityMap[path] ?? (isService ? 0.85 : isLegal ? 0.3 : 0.7),
      lastmod: new Date().toISOString(),
    };
  },
};
