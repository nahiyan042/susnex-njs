import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const metadata = pageSeo({
  title: "ESG & Sustainability Reporting",
  description:
    "Leading Sustainability & ESG Reporting Services — GRI, ESRS, TCFD, CDP compliance, materiality assessment, and structured public disclosure.",
  path: "/services/esg-reporting",
  ogImage: "/images/services/esg-reporting.webp",
});

const data: ServicePageData = {
  title: "ESG & Sustainability Reporting",
  subtitle: "Leading Sustainability & ESG Reporting Services",
  heroImage: "/images/services/esg-reporting.webp",
  formService: "ESG & Sustainability Reporting",
  description: [
    "In today's rapidly evolving business landscape, companies are increasingly recognizing the value of sustainability and ESG (Environmental, Social, and Governance) reporting as a key driver of success. At SusNex, we specialize in providing top-tier Sustainability and ESG Reporting Services, helping businesses navigate the complex world of sustainability while meeting local and international standards.",
    "By leveraging our expertise in GRI Standards, ESRS, TCFD, and CDP, we ensure that your business is not only compliant but positioned for long-term success. Whether it's GRI Reporting, aligning with ESRS Standards, improving ESG Risk Management, or meeting Higg 4.0 Compliance, SusNex is your trusted partner.",
    "We offer Corporate Sustainability services that help companies develop Sustainability Reporting solutions to boost ESG performance. Elevate your business today by choosing SusNex and ensure that your company ranks high in International Benchmarks.",
  ],
  experts: [
    {
      name: "Rajib Ul Haque",
      role: "Director & Chief Environmental Expert",
      photo: "/images/team/rajib-ul-haque.jpg",
      linkedin: "https://www.linkedin.com/in/rajib-ul-haque-a10b0081/",
    },
    {
      name: "Karen Frauen",
      role: "International Expert - Sustainability Reporting",
      photo: "/images/team/karen-frauen.jpg",
      linkedin: "https://www.linkedin.com/in/karen-frauen-863733b9/",
    },
    {
      name: "Montasir Nahid",
      role: "Director - ESG",
      photo: "/images/team/montasir-nahid.jpg",
      linkedin: "https://www.linkedin.com/in/montasir-nahid-918b7319/",
    },
    {
      name: "Nishat Anzum",
      role: "ESG Specialist & GRI Trainer",
      photo: "/images/team/nishat-anzum.jpg",
      linkedin: "https://www.linkedin.com/in/nishat-anzum-shova-b07147174/",
    },
  ],
  outcomes: [
    { title: "Better ESG Due Diligence", description: "Strengthen your due diligence processes with comprehensive ESG frameworks and data-driven assessments." },
    { title: "Better Risk Management", description: "Identify, assess, and mitigate ESG-related risks across your value chain proactively." },
    { title: "Enhanced Brand Reputation", description: "Build stakeholder trust through transparent and credible sustainability disclosures." },
    { title: "Better Regulatory Preparedness", description: "Stay ahead of evolving regulations and mandatory disclosure requirements worldwide." },
    { title: "Better Transparency & Accountability", description: "Demonstrate genuine commitment with verified data and structured reporting." },
    { title: "Improved Decision Making", description: "Leverage sustainability data insights for strategic business decisions." },
    { title: "Achieve More in Higg 4.0", description: "Maximize your Higg FEM scores with properly documented ESG data and processes." },
    { title: "Stakeholder Engagement", description: "Engage investors, customers, and communities with meaningful sustainability narratives." },
    { title: "Rank High in Int'l Benchmarks", description: "Position your company competitively in global sustainability indices and rankings." },
  ],
  standardLogos: [
    { src: "/images/standards/gri.svg", name: "GRI Standards", url: "https://www.globalreporting.org/" },
    { src: "/images/standards/efrag.svg", name: "EFRAG ESRS", url: "https://www.efrag.org/en" },
    { src: "/images/standards/wbcsd.jpg", name: "WBCSD", url: "https://www.wbcsd.org/" },
    { src: "/images/standards/ungc.svg", name: "UN Global Compact", url: "https://unglobalcompact.org/" },
    { src: "/images/standards/sdgs.png", name: "Sustainable Development Goals", url: "https://sdgs.un.org/goals" },
    { src: "/images/standards/tcfd.svg", name: "TCFD", url: "https://www.fsb-tcfd.org/" },
    { src: "/images/standards/oecd.svg", name: "OECD Guidelines", url: "https://www.oecd.org/en.html" },
    { src: "/images/standards/cdp.jpg", name: "CDP", url: "https://www.cdp.net/en" },
  ],
  whyChooseUs: [
    { title: "Multidisciplinary Team", description: "Our team combines expertise in environmental science, engineering, finance, and social governance." },
    { title: "GRI Certified Training Partner", description: "As a GRI CTP, we bring authoritative knowledge of the world's most widely used reporting standards." },
    { title: "Tailored Solutions", description: "No cookie-cutter reports — every engagement is customized to your industry, size, and goals." },
    { title: "Proven Track Record", description: "50+ successful sustainability reports delivered for leading organizations." },
    { title: "Collaborative Partnership", description: "We work alongside your team, building internal capacity for long-term reporting success." },
    { title: "Integrated Reporting with SDG", description: "Align your disclosures with UN SDGs and multiple international frameworks simultaneously." },
  ],
};

export default function EsgReportingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "ESG & Sustainability Reporting",
              "Leading Sustainability & ESG Reporting Services — GRI, ESRS, TCFD, CDP compliance.",
              "/services/esg-reporting",
            ),
          ),
        }}
      />
      <PageHeader
        title="ESG & Sustainability Reporting"
        description="Comprehensive ESG reporting frameworks to improve due diligence, risk management, and regulatory preparedness."
      />
      <ServicePageTemplate data={data} />
    </main>
  );
}
