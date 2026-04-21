import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const metadata = pageSeo({
  title: "Gender Equality and Social Inclusion (GESI)",
  description:
    "Gender-responsive policies, workplace inclusion, social performance, and compliance — building equitable and empowering workplaces.",
  path: "/services/gender-smart",
  ogImage: "/images/services/gender-smart.webp",
});

const data: ServicePageData = {
  title: "Gender Equality and Social Inclusion (GESI)",
  subtitle: "Building Equitable & Empowering Workplaces",
  heroImage: "/images/services/gender-smart.webp",
  formService: "Gender Equality and Social Inclusion (GESI)",
  description: [
    "SusNex Gender SMART is a comprehensive program designed to help organizations create gender-responsive, inclusive, and harassment-free workplaces. Our expert-led approach addresses the full spectrum of gender equality challenges — from policy development to cultural transformation.",
    "We work with leadership teams, HR departments, and workers to implement practical solutions that drive measurable improvements in gender equality, employee retention, and workplace culture. Our programs are aligned with international standards and buyer requirements.",
    "Whether you need to establish anti-harassment committees, develop gender-responsive policies, or train your workforce on inclusion best practices, Gender SMART provides the expertise and tools for lasting organizational change.",
  ],
  experts: [
    {
      name: "S M Nurul Huda",
      role: "Director Compliance & Sustainability",
      photo: "/images/team/sm-nurul-huda.jpg",
      linkedin: "https://www.linkedin.com/in/sm-nurul-huda-6b8a19123/",
    },
    {
      name: "Aleya Aktar",
      role: "Director - Ethical Sourcing & CSR",
      photo: "/images/team/aleya-aktar.jpg",
      linkedin: "https://www.linkedin.com/in/aleya-aktar-94411741/",
    },
    {
      name: "Shahina Parven Alo",
      role: "Expert - Gender & Inclusion",
      photo: "/images/team/shahina-parven-alo.jpg",
      linkedin: "https://www.linkedin.com/in/shahina-parven-alo-8ba36970/",
    },
  ],
  outcomes: [
    { title: "Increased Gender Equality", description: "Measurable improvements in gender representation, pay equity, and opportunity access." },
    { title: "Employee Empowerment", description: "Build confidence and leadership skills across all levels of your workforce." },
    { title: "Enhanced Workplace Culture", description: "Foster a respectful, inclusive environment where everyone can thrive and contribute." },
    { title: "Increased Employee Retention", description: "Reduce turnover through improved satisfaction, safety, and career development opportunities." },
    { title: "Enhanced Corporate Reputation", description: "Demonstrate genuine commitment to gender equality to clients, investors, and stakeholders." },
    { title: "Legal Compliance & Risk Mitigation", description: "Meet regulatory requirements and reduce exposure to discrimination-related risks." },
    { title: "Reduced Discrimination & Harassment", description: "Implement effective prevention mechanisms and response protocols." },
    { title: "Sexual Harassment Prevention & Response", description: "Establish robust policies, committees, and training for prevention and resolution." },
    { title: "Enhanced Skill Development", description: "Targeted training programs that build capacity across gender-related competencies." },
    { title: "Overall Organizational Growth", description: "Gender equality drives innovation, productivity, and sustainable business growth." },
    { title: "Effective Committee Functioning", description: "Well-trained and functional anti-harassment and welfare committees." },
    { title: "Improved Supply Chain Relationships", description: "Meet buyer requirements and strengthen partnerships through demonstrated gender performance." },
  ],
  whyChooseUs: [
    { title: "Unparalleled Expertise", description: "Specialized knowledge in gender equality, inclusion, and workplace rights across industries." },
    { title: "Tailored Solutions", description: "Programs customized to your organizational culture, size, and specific challenges." },
    { title: "Measurable Impact", description: "Data-driven approach with clear metrics to track progress and demonstrate ROI." },
    { title: "Proven Track Record", description: "Successful gender programs implemented across major manufacturing facilities." },
    { title: "Global Perspective", description: "International standards and best practices adapted for local contexts." },
    { title: "Global Apparel Retailer Projects", description: "Ongoing projects meeting the gender requirements of leading international brands." },
    { title: "Collaborative Partnership", description: "We embed within your organization to ensure sustainable, lasting change." },
    { title: "Multidisciplinary Team", description: "Gender specialists, trainers, and auditors working together for comprehensive solutions." },
  ],
};

export default function GenderSmart() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Gender Equality and Social Inclusion (GESI)",
              "Gender-responsive policies, workplace inclusion, social performance, and compliance.",
              "/services/gender-smart",
            ),
          ),
        }}
      />
      <PageHeader
        title="Gender Equality and Social Inclusion (GESI)"
        description="Gender-responsive policies, workplace inclusion, social performance, and compliance for equitable workplaces."
      />
      <ServicePageTemplate data={data} />
    </main>
  );
}
