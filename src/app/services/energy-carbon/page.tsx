import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const metadata = pageSeo({
  title: "Energy & Carbon Management",
  description:
    "ASHRAE Level 2 energy assessments, GHG inventories, science-based targets, and actionable energy management plans to reduce emissions.",
  path: "/services/energy-carbon",
  ogImage: "/images/services/energy-carbon.webp",
});

const data: ServicePageData = {
  title: "Energy & Carbon Management",
  subtitle: "Comprehensive Energy & Carbon Management Solutions",
  heroImage: "/images/services/energy-carbon.webp",
  formService: "Energy & Carbon Management",
  description: [
    "SusNex Energy & Carbon SMART delivers end-to-end energy management and carbon reduction solutions. From ASHRAE Level 2 energy assessments to GHG emission inventories and science-based target setting, we provide the technical expertise your organization needs to drive measurable environmental impact.",
    "Our SREDA-certified auditors and multidisciplinary assessment team use state-of-the-art measuring equipment to uncover savings potential and develop actionable improvement plans. We help you reduce energy consumption by 10–25% and GHG emissions by 7–20%.",
    "Whether you need to prepare for SBTi, improve your Higg FEM scores, or build comprehensive ESG & CDP disclosures, our team provides data-ready solutions backed by proven methodologies.",
  ],
  experts: [
    {
      name: "Engr. Yousuf Ali",
      role: "Director & Chief Energy Expert",
      photo: "/images/team/yousuf-ali.jpg",
      linkedin: "https://www.linkedin.com/in/md-yousuf-ali-b45624117/",
    },
  ],
  outcomes: [
    { title: "10–25% Energy Use Reduction", description: "Unlock significant energy savings through detailed assessment and targeted improvement measures." },
    { title: "7–20% GHG Emission Reduction", description: "Achieve measurable greenhouse gas emission cuts across Scope 1 and 2." },
    { title: "ASHRAE Level 2 Energy Assessment", description: "Comprehensive energy audits with financial impact analysis for informed investment decisions." },
    { title: "Climate-Aligned Targets", description: "Set GHG emission targets in line with the latest climate science and SBTi requirements." },
    { title: "Actionable Improvement Plans", description: "Practical, prioritized plans for energy performance improvement and GHG emission reduction." },
    { title: "Smart Vendor & Technology Choices", description: "Expert guidance on selecting the best vendors and technologies for maximum impact." },
    { title: "Training & Capacity Development", description: "Capacitate your team on energy management best practices and monitoring systems." },
    { title: "GHG Transparency", description: "Scope 1 and 2 GHG inventory as per GHG Protocol for full emission transparency." },
    { title: "SBTi Ready", description: "Prepare your business for Science Based Targets initiative validation." },
    { title: "Higher Higg FEM 4.0 Scores", description: "Optimize data and processes to score higher in the Higg Facility Environmental Module." },
    { title: "ESG & CDP Reports Ready", description: "Data readiness for comprehensive ESG disclosures and CDP climate questionnaire." },
  ],
  whyChooseUs: [
    { title: "SREDA Certified Auditors", description: "Our energy auditors hold official SREDA certification for credible assessments." },
    { title: "400+ ASHRAE Level 2 Assessments", description: "Extensive experience conducting detailed energy assessments across diverse industries." },
    { title: "100+ GHG Emission Inventories", description: "Proven track record in comprehensive greenhouse gas accounting and reporting." },
    { title: "State-of-the-Art Equipment", description: "Advanced measuring instruments for precise energy and emissions data collection." },
    { title: "Multidisciplinary Assessment Team", description: "Electrical, mechanical, chemical, and environmental engineers working together." },
    { title: "Global Apparel Retailer Projects", description: "Ongoing projects with major international apparel retailers and brands." },
    { title: "Tailored Solutions", description: "Customized energy management strategies that fit your operational context and budget." },
  ],
  roadmap: {
    heading: "Program Roadmap",
    subheading:
      "From kickoff through validation, every energy & carbon engagement follows a structured 11-step journey aligned with ASHRAE Level-2, SBTi, and the GHG Protocol.",
    /*
     * The 11-node "energy" layout reuses the same S-curve as ESG but
     * skips the left-loop apex node and gains a 4th bottom-row node.
     * Steps mirror the source roadmap diagram (W 1 → W 50). Week
     * labels are rendered as small italic green captions ABOVE each
     * node circle (handled by ProgramRoadmap, see `week` field).
     */
    layout: "energy",
    steps: [
      { week: "W 1",     title: "Kickoff Meeting",                          subtitle: "NDA and Contract Signing",                          icon: "play" },
      { week: "W 2",     title: "Initial Data Collection",                  subtitle: "Desktop Review",                                    icon: "document" },
      { week: "W 4",     title: "Factory Visit",                            subtitle: "Energy Data Measurement",                           icon: "factory" },
      { week: "W 6",     title: "Training of Factory Personnel",            subtitle: "SBTi and Energy Management",                        icon: "training" },
      { week: "W 7-12",  title: "Data Collection & Compilation",            subtitle: "Preparing Baseline & Performance Analysis",          icon: "chart" },
      { week: "W 18",    title: "ASHRAE Level-2 Energy Audit Report with GHG Emissions", subtitle: "Energy Performance Improvement Recommendations", icon: "clipboard" },
      { week: "W 24",    title: "Factory Consultation for Target Setting",  subtitle: "Detailed Action Plan",                              icon: "target" },
      { week: "W 25-38", title: "Assistance During Implementation",         subtitle: "Preparing Specifications & Vendor Selection",       icon: "wrench" },
      { week: "W 26-35", title: "Interim Monitoring",                       subtitle: "Ensuring Technically Sound Implementation",          icon: "eye" },
      { week: "W 48",    title: "Validation Visit",                         subtitle: "Validate the Improvement",                          icon: "check-badge" },
      { week: "W 50",    title: "Final Improvement Report",                 subtitle: "Measured Achievement",                              icon: "handshake" },
    ],
  },
  clientLogosHeading: "Our Clients",
  clientLogosSubheading:
    "Manufacturers, conglomerates, financial institutions, and global brands we have supported with energy audits, GHG inventories, and carbon-reduction roadmaps.",
  /*
   * Order follows the user-supplied list verbatim. Filename references
   * mirror the existing /public/images/clients/ folder convention so the
   * About page wall and any other service page stay file-compatible.
   *
   * "Beximco" -> Beximco Pharma Ltd (the only Beximco-branded asset we
   * currently have on file). If a different Beximco entity is intended,
   * drop the new logo into clients/ and swap the src below.
   */
  clientLogos: [
    { src: "/images/clients/SusNex Clients Logo_Apex.png",                                  name: "Apex" },
    { src: "/images/clients/SusNex Clients Logo_Auchan Retail.png",                         name: "Auchan Retail" },
    { src: "/images/clients/SusNex Clients Logo_Avery Dennison.png",                        name: "Avery Dennison" },
    { src: "/images/clients/SusNex Clients Logo_Beximco Pharma Ltd.png",                    name: "Beximco Pharma" },
    { src: "/images/clients/SusNex Clients Logo_British American Tobacco Ltd.png",          name: "British American Tobacco" },
    { src: "/images/clients/SusNex Clients Logo_CocaCola.png",                              name: "Coca-Cola" },
    /*
     * The "Columbia Washing Plant Ltd" file is actually a composite of the
     * Columbia mark + the parent M&J Group wordmark ("PASSION MAKES
     * INNOVATION"). Per stakeholder direction, that composite is the
     * canonical M&J asset on file — we point M&J Group references at it
     * everywhere instead of the standalone M&J SVG.
     */
    { src: "/images/clients/SusNex Clients Logo_Columbia Washing Plant Ltd.png",            name: "M&J Group" },
    { src: "/images/clients/SusNex Clients Logo_Gildan.png",                                name: "Gildan" },
    { src: "/images/clients/SusNex Clients Logo_Hidramani Group.png",                       name: "Hidramani Group" },
    { src: "/images/clients/SusNex Clients Logo_HSBC Bank PLC.png",                         name: "HSBC" },
    { src: "/images/clients/SusNex Clients Logo_Ispahani.png",                              name: "Ispahani" },
    { src: "/images/clients/SusNex Clients Logo_Kontoor.png",                               name: "Kontoor" },
    { src: "/images/clients/SusNex Clients Logo_Kumudini Cares.png",                        name: "Kumudini" },
    { src: "/images/clients/SusNex Clients Logo_Mohammadi Group.png",                       name: "Mohammadi Group" },
    { src: "/images/clients/SusNex Clients Logo_Nassa Group.png",                           name: "Nassa Group" },
    { src: "/images/clients/SusNex Clients Logo_Navana Group.png",                          name: "Navana Group" },
    { src: "/images/clients/SusNex Clients Logo_NOMAN Terry Towel Mills Ltd.png",           name: "NOMAN Terry Towel Mills" },
    { src: "/images/clients/SusNex Clients Logo_Paddock's Jeans.png",                       name: "Paddock's Jeans" },
    { src: "/images/clients/SusNex Clients Logo_Palmal Group.png",                          name: "Palmal Group" },
    { src: "/images/clients/SusNex Clients Logo_Perfetti.png",                              name: "Perfetti" },
    { src: "/images/clients/SusNex Clients Logo_Pran-RFL Group.png",                        name: "Pran-RFL Group" },
    { src: "/images/clients/SusNex Clients Logo_Simens.png",                                name: "Siemens" },
    { src: "/images/clients/SusNex Clients Logo_SREDA.png",                                 name: "SREDA" },
    { src: "/images/clients/SusNex Clients Logo_Sun Pharma.png",                            name: "Sun Pharma" },
    { src: "/images/clients/SusNex Clients Logo_Tusuka Group.png",                          name: "Tusuka Group" },
    { src: "/images/clients/SusNex Clients Logo_YKK.png",                                   name: "YKK" },
    { src: "/images/clients/SusNex Clients Logo_ZABER & ZUBAIR Fabrics Bangladesh.png",     name: "Zaber & Zubair Fabrics" },
  ],
};

export default function EnergyCarbon() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Energy & Carbon Management",
              "ASHRAE energy assessments, GHG inventories, and science-based targets.",
              "/services/energy-carbon",
            ),
          ),
        }}
      />
      <PageHeader
        title="Energy & Carbon Management"
        description="ASHRAE Level 2 energy assessments, GHG inventories, and science-based target setting to cut energy use and emissions."
      />
      <ServicePageTemplate data={data} />
    </main>
  );
}
