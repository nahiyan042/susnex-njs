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
