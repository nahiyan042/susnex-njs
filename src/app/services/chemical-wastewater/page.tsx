import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const metadata = pageSeo({
  title: "Chemical & Wastewater Management",
  description:
    "ZDHC compliance, wastewater treatment optimization, chemical management, Higg FEM 4.0 documentation, and Zero Liquid Discharge planning.",
  path: "/services/chemical-wastewater",
  ogImage: "/images/services/chemical-wastewater.webp",
});

const data: ServicePageData = {
  title: "Chemical & Wastewater Management",
  subtitle: "Advanced Chemical Management & Wastewater Solutions",
  heroImage: "/images/services/chemical-wastewater.webp",
  formService: "Chemical & Wastewater Management",
  description: [
    "SusNex Chemical & Wastewater SMART provides comprehensive solutions for chemical management systems (CMS) and wastewater treatment plant (WWTP) optimization. Our ZDHC-approved trainers deliver accredited training on both CMS and WWTP operations.",
    "We conduct detailed third-party parameter assessments, identify improvement opportunities, and develop realistic action plans for Zero Liquid Discharge (ZLD). Our approach helps reduce GHG emissions from biological wastewater treatment by 10–20%.",
    "From baseline chemical management to Higg FEM 4.0 documentation readiness, we ensure your facility meets the highest international standards for chemical safety and wastewater management.",
  ],
  experts: [
    {
      name: "Rajib Ul Haque",
      role: "Director & Chief Environmental Expert",
      photo: "/images/team/rajib-ul-haque.jpg",
      linkedin: "https://www.linkedin.com/in/rajib-ul-haque-a10b0081/",
    },
  ],
  outcomes: [
    { title: "Baseline Chemical Management", description: "Establish robust chemical management systems aligned with international best practices." },
    { title: "10–20% GHG Emission Reduction", description: "Reduce greenhouse gas emissions from biological wastewater treatment processes." },
    { title: "Detailed WWTP Assessment", description: "Comprehensive third-party testing and parameter assessment for your wastewater treatment plant." },
    { title: "Water Balance Diagram", description: "Complete extraction-to-discharge water balance mapping for operational transparency." },
    { title: "Bypass Identification", description: "Detect and eliminate untreated wastewater bypass pathways in your treatment system." },
    { title: "WWTP Capacity Determination", description: "Determine the actual processing capacity of your wastewater treatment plant." },
    { title: "Improvement Opportunities", description: "Identify actionable improvement opportunities for both CMS and WWTP operations." },
    { title: "ZDHC Capacity Development", description: "Staff training on chemical management and WWTP operations as per ZDHC standards." },
    { title: "Realistic ZLD Action Plan", description: "Estimate costs and develop stage-by-stage action plans for Zero Liquid Discharge." },
    { title: "WWTP Efficiency Improvement", description: "Lower treatment costs through optimized plant efficiency and operations." },
    { title: "Higg FEM 4.0 Compliance", description: "Meet new documentation requirements with properly structured environmental data." },
    { title: "ESG & CDP Data Readiness", description: "Prepare your environmental data for ESG disclosures and CDP reporting." },
  ],
  whyChooseUs: [
    { title: "30+ WWTP Assessments Conducted", description: "Deep hands-on experience with wastewater treatment plant evaluation and optimization." },
    { title: "ZDHC Approved Trainer", description: "Our experts are approved by ZDHC to deliver accredited chemical management training." },
    { title: "ZDHC Accredited Training", description: "Comprehensive accredited training on both CMS and WWTP operation per ZDHC standards." },
    { title: "Global Operations", description: "Active in all major apparel manufacturing countries across Asia and beyond." },
    { title: "Competent & Multidisciplinary Team", description: "Environmental, chemical, and process engineers working together for holistic solutions." },
    { title: "Global Apparel Retailer Projects", description: "Ongoing engagements with leading international apparel retailers and brands." },
    { title: "Tailored & Cost-Effective Solutions", description: "Custom approaches that deliver maximum impact within your budget constraints." },
  ],
};

export default function ChemicalWastewater() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Chemical & Wastewater Management",
              "ZDHC compliance, wastewater treatment optimization, and chemical management.",
              "/services/chemical-wastewater",
            ),
          ),
        }}
      />
      <PageHeader
        title="Chemical & Wastewater Management"
        description="ZDHC compliance, wastewater treatment optimization, chemical management, and Zero Liquid Discharge planning."
      />
      <ServicePageTemplate data={data} />
    </main>
  );
}
