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
