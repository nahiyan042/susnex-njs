import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const metadata = pageSeo({
  title: "Structural Engineering Assessment",
  description:
    "Structural analysis, soil investigation, foundation capacity checks, and compliance with Bangladesh National Building Code, IBC, ACI, and ACCORD standards.",
  path: "/services/engineering-assessment",
  ogImage: "/images/services/engineering-assessment.webp",
});

const data: ServicePageData = {
  title: "Structural Engineering Assessment",
  subtitle: "Comprehensive Structural & Engineering Solutions",
  heroImage: "/images/services/engineering-assessment.webp",
  formService: "Structural Engineering Assessment",
  description: [
    "SusNex Detailed Engineering Assessment provides thorough structural analysis and engineering evaluation services to ensure the safety, compliance, and longevity of your built assets. Our expert civil engineers conduct comprehensive assessments following international and national building codes.",
    "From reproducing drawings and calculations with acceptable references to determining soil carrying capacity and foundation area checks, we deliver detailed engineering documentation that meets the highest standards of quality and accuracy.",
    "Our assessments cover steel-concrete composite structures, reinforcement capacity verification, and compliance with ACCORD, Alliance, and other international safety standards required by global brands and retailers.",
  ],
  experts: [
    {
      name: "Engr. M M Haque Rajib",
      role: "Director & Structural Expert",
      photo: "/images/team/rajib.jpg",
      linkedin: "https://www.linkedin.com/in/engr-rajib-ahmed-%E5%B7%A5%E7%A8%8B%E5%B8%88-%E6%8B%89%E5%90%89%E5%B8%83-%F0%9F%8C%BF-45b1a0186/",
    },
    {
      name: "Nahiyan Al Farook",
      role: "Structural Engineer",
      photo: "/images/team/nahiyan-al-farook.jpg",
      linkedin: "https://www.linkedin.com/in/nahiyan04/",
    },
  ],
  outcomes: [
    { title: "Structural Analysis & Design", description: "Comprehensive analysis and design of steel-concrete composite structures and reinforced structures." },
    { title: "Drawings & Calculations", description: "Reproduce drawings and calculations with acceptable references meeting international standards." },
    { title: "Soil Carrying Capacity", description: "Determine the carrying capacity of soil through professional geotechnical investigation." },
    { title: "Reinforcement Capacity Check", description: "Verify reinforcement adequacy and structural integrity of existing and new buildings." },
    { title: "Foundation Assessment", description: "Foundation area and capacity checks to ensure structural safety and compliance." },
    { title: "Safety Compliance", description: "Meet ACCORD, Alliance, and other international structural safety requirements." },
  ],
  standards: [
    "Bangladesh National Building Code (BNBC)",
    "International Building Code (IBC-2009)",
    "Metal Building Manufacturers Association (MBMA)",
    "Metal Building Systems Manual (MBSM 2006)",
    "American Concrete Institute (ACI-318)",
    "Uniform Building Code (UBC-94, 97)",
    "ACCORD Standard",
    "Alliance Standard",
    "IS-2000",
  ],
  whyChooseUs: [
    { title: "Expert Structural Engineers", description: "Licensed engineers with extensive experience in complex structural assessments." },
    { title: "Multi-Code Compliance", description: "Assessments covering BNBC, IBC, ACI, ACCORD, Alliance, and other international codes." },
    { title: "Detailed Documentation", description: "Comprehensive reports with drawings, calculations, and actionable recommendations." },
    { title: "Proven Track Record", description: "Hundreds of successful structural assessments across industrial and commercial facilities." },
    { title: "Industry Recognition", description: "Trusted by leading apparel brands, retailers, and manufacturing groups." },
    { title: "Cost-Effective Solutions", description: "Practical recommendations that balance safety requirements with budget constraints." },
  ],
};

export default function EngineeringAssessment() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Structural Engineering Assessment",
              "Structural analysis, soil investigation, and building code compliance assessments.",
              "/services/engineering-assessment",
            ),
          ),
        }}
      />
      <PageHeader
        title="Structural Engineering Assessment"
        description="Structural analysis, soil investigation, foundation checks, and compliance with national and international building codes."
      />
      <ServicePageTemplate data={data} />
    </main>
  );
}
