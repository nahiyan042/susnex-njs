import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const metadata = pageSeo({
  title: "Sustainable Materials & Circularity",
  description:
    "Elevate material choices, embrace circularity, achieve sustainable product compliance, and boost supply chain transparency.",
  path: "/services/material-smart",
  ogImage: "/images/services/material-smart.webp",
});

const data: ServicePageData = {
  title: "Sustainable Materials & Circularity",
  subtitle: "Sustainable Materials, Circularity & Traceability",
  heroImage: "/images/services/material-smart.webp",
  formService: "Sustainable Materials & Circularity",
  description: [
    "SusNex Material SMART helps organizations make smarter, more sustainable material choices throughout their product lifecycle. From raw material sourcing to end-of-life management, we guide you through circularity principles and sustainable product legislation compliance.",
    "Our approach combines deep technical knowledge with practical implementation strategies, ensuring your material choices align with evolving regulatory requirements and stakeholder expectations. We empower your suppliers with training and capacity development to drive sustainability across your entire value chain.",
    "Whether you need to develop circular design strategies, improve material traceability, or prepare for upcoming sustainable product regulations, Material SMART provides the roadmap and support you need.",
  ],
  experts: [
    {
      name: "Shamiul Hoque",
      role: "Director - Sustainability Programs, Materials, Traceability & Circularity",
      photo: "/images/team/shamiul-hoque.jpg",
      linkedin: "https://www.linkedin.com/in/shamiulhoque/",
    },
  ],
  outcomes: [
    { title: "Elevate Your Material Choices", description: "Make informed, sustainable material decisions backed by data and lifecycle analysis." },
    { title: "Embrace Circularity", description: "Implement circular economy principles from design through production to end-of-life management." },
    { title: "Achieve Compliance", description: "Stay ahead of sustainable product legislations and regulatory requirements globally." },
    { title: "Empower Your Suppliers", description: "Build supplier capacity through targeted training and development programs." },
    { title: "Boost Performance & Transparency", description: "Improve reporting capabilities and demonstrate material sustainability to stakeholders." },
  ],
  whyChooseUs: [
    { title: "Unparalleled Expertise", description: "Deep knowledge in sustainable materials, circularity, and traceability across industries." },
    { title: "Tailored Solutions", description: "Customized strategies designed for your specific material challenges and industry context." },
    { title: "Exclusive Regional Presence", description: "On-the-ground expertise in South Asia's key manufacturing regions." },
    { title: "Collaborative Partnership", description: "We work as an extension of your team, ensuring knowledge transfer and lasting impact." },
    { title: "Measurable Results", description: "Clear KPIs and metrics to track your material sustainability progress over time." },
    { title: "Proven Track Record", description: "Successful engagements with leading brands and manufacturers worldwide." },
  ],
  roadmap: {
    heading: "The Program",
    subheading:
      "How a sustainable-materials and circularity engagement unfolds — from understanding your context to communicating the change.",
    /*
     * 10-node "materials" layout. Same S-curve as ESG, but with only
     * 2 nodes in the middle row and 3 in the bottom row, and BOTH
     * loop apexes occupied (Circular Materials on the right,
     * Training on the left). See ProgramRoadmap.tsx → MATERIALS_POSITIONS
     * for the index → node mapping.
     */
    layout: "materials",
    steps: [
      { title: "Kick of Meeting",     subtitle: "Understanding the context",            icon: "play" },
      { title: "Global Trends",       subtitle: "Tailored to your business strategy",   icon: "globe" },
      { title: "Technicalities",      subtitle: "Detailed material breakdown",          icon: "wrench" },
      { title: "Circular Materials",  subtitle: "How & where to find?",                 icon: "recycle" },
      { title: "Traceability",        subtitle: "Options & Implementation",             icon: "link" },
      { title: "Aligning Suppliers",  subtitle: "with your Desires and Expectations",   icon: "users" },
      { title: "Training",            subtitle: "Capacity Development",                 icon: "training" },
      { title: "Setting Goals",       subtitle: "Clear Targets & Objectives",           icon: "target" },
      { title: "Collaboration",       subtitle: "Suppliers & Stakeholders",             icon: "chat" },
      { title: "Branding",            subtitle: "Communication",                        icon: "handshake" },
    ],
  },
  clientLogosHeading: "Our Clients",
  clientLogosSubheading:
    "Development partners and foundations we have collaborated with on sustainable materials, circularity, and supplier capacity-building programs.",
  clientLogos: [
    { src: "/images/clients/SusNex Clients Logo_GIZ.png",                name: "GIZ" },
    { src: "/images/clients/SusNex Clients Logo_Oxfam.png",              name: "Oxfam" },
    { src: "/images/clients/SusNex Clients Logo_Sajida Foundation.png",  name: "Sajida Foundation" },
  ],
};

export default function MaterialSmart() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Sustainable Materials & Circularity",
              "Sustainable materials, circularity, traceability, and product compliance.",
              "/services/material-smart",
            ),
          ),
        }}
      />
      <PageHeader
        title="Sustainable Materials & Circularity"
        description="Elevate material choices, embrace circularity, and achieve sustainable product compliance."
      />
      <ServicePageTemplate data={data} />
    </main>
  );
}
