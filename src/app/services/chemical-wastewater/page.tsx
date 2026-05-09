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
  roadmap: {
    heading: "Program Roadmap",
    subheading:
      "From kickoff to validation, every chemical & wastewater engagement follows a structured 11-step journey — combining ZDHC-aligned CMS upgrades, third-party WW sampling, WWTP assessment, and accredited operator training.",
    /*
     * Reuses the same 11-node "energy" S-curve layout (3 top + 1
     * right-loop apex + 3 middle row + 4 bottom row, no left-loop
     * apex node). Week labels match the source diagram (W 1 → W 50)
     * and are rendered as small italic green captions above each
     * node by ProgramRoadmap (see `week` field).
     */
    layout: "energy",
    steps: [
      { week: "W 1",    title: "Kickoff Meeting",             subtitle: "NDA and Contract Signing",                                                            icon: "play" },
      { week: "W 2",    title: "Initial Data Collection",     subtitle: "Desktop Review",                                                                       icon: "document" },
      { week: "W 4",    title: "Factory Visit",               subtitle: "Wastewater & Chemical Management System (CMS) Data Collection and Setting Baseline",   icon: "factory" },
      { week: "W 6",    title: "Third-Party WW Sampling",     subtitle: "Composite Sampling for Testing",                                                       icon: "droplet" },
      { week: "W 7-10", title: "Baseline Report",             subtitle: "Recommendations for Improvement on CMS and WWTP",                                      icon: "clipboard" },
      { week: "W 14",   title: "WWTP Assessment Report",      subtitle: "Detailed WWTP Improvement and Zero Liquid Discharge (ZLD) Action Plan",                icon: "chart" },
      { week: "W 28",   title: "Implementation Visit",        subtitle: "Detailed Understanding of WWTP Condition & CMS Improvement",                            icon: "wrench" },
      { week: "W 30",   title: "Training on WWTP Operations", subtitle: "Relevant factory personnel get ZDHC-accredited training on WWTP operations",            icon: "training" },
      { week: "W 32",   title: "Training on CMS",             subtitle: "Relevant factory personnel get ZDHC-accredited training on CMS",                       icon: "training" },
      { week: "W 48",   title: "Validation Visit",            subtitle: "Validate the Improvement on WWTP and CMS",                                              icon: "check-badge" },
      { week: "W 50",   title: "Final Improvement Report",    subtitle: "Measured Achievement",                                                                  icon: "handshake" },
    ],
  },
  clientLogosHeading: "Our Clients",
  clientLogosSubheading:
    "Global brands, manufacturers, and institutions we have supported with chemical management systems, wastewater treatment optimisation, and ZDHC-compliant programmes.",
  /*
   * Order matches the user-supplied list (with H&M opening as the
   * marquee global brand). H&M is shipped as SVG and streams through
   * next/image transparently thanks to the dangerouslyAllowSVG flag
   * added in next.config.ts.
   */
  clientLogos: [
    { src: "/images/clients/SusNex Clients Logo_H&M.svg",                          name: "H&M",                                       prominent: true },
    { src: "/images/clients/SusNex Clients Logo_Igloo.png",                        name: "Igloo" },
    { src: "/images/clients/SusNex Clients Logo_BGMEA.png",                        name: "BGMEA",                                     prominent: true },
    { src: "/images/clients/SusNex Clients Logo_Cityscape International.png",      name: "Cityscape International" },
    { src: "/images/clients/SusNex Clients Logo_IUB.png",                          name: "Independent University Bangladesh (IUB)" },
    { src: "/images/clients/SusNex Clients Logo_Square Group.png",                 name: "Square Group" },
    { src: "/images/clients/SusNex Clients Logo_Healthcare Pharmaceutical.png",    name: "Healthcare Pharmaceutical Ltd." },
    { src: "/images/clients/SusNex Clients Logo_Berger Paints.jpg",                name: "Berger Paints" },
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
