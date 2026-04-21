import { Accordion } from "@/components/ui/Accordion";
import { pageSeo, faqJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "FAQ",
  description:
    "Frequently asked questions about SusNex sustainability services.",
  path: "/faq",
});

const generalFaq = [
  {
    question: "What is SusNex?",
    answer:
      "The Sustainability Nexus Ltd is a sustainability consultancy based in Bangladesh that helps organizations implement ESG reporting, energy management, chemical safety, and social sustainability programs.",
  },
  {
    question: "Where are your offices?",
    answer:
      "Our headquarters is in Dhaka, Bangladesh. We also have offices in Brooklyn (USA), London (UK), and Toronto (Canada).",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We primarily serve the RMG and textile industry, manufacturing, and businesses seeking sustainability compliance across global supply chains.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a free introductory 30-minute online meeting through our contact page. We'll discuss your sustainability goals and recommend the right SMART program.",
  },
  {
    question: "What makes SusNex different?",
    answer:
      "We combine deep local expertise in Bangladesh's industrial landscape with international standards and a team of global sustainability experts.",
  },
];

const servicesFaq = [
  {
    question: "What are SMART programs?",
    answer:
      "SMART programs are our six integrated sustainability services: ESG Reporting, Energy & Carbon, Chemical & Wastewater, Material, Gender, and Detailed Engineering Assessment.",
  },
  {
    question: "Can I choose individual services?",
    answer:
      "Yes, each SMART program can be engaged independently or combined as a comprehensive sustainability package.",
  },
  {
    question: "How long does a typical engagement last?",
    answer:
      "Engagement duration varies from 3 to 12 months depending on the scope and complexity of the program.",
  },
  {
    question: "Do you provide training?",
    answer:
      "Yes, through SusNex Academy we offer GRI Certified Training, Circular Design courses, and ETP Operation training programs.",
  },
];

const academyFaq = [
  {
    question: "What certifications do you offer?",
    answer:
      "We offer GRI Certified Training (Reporting, Human Rights, SDGs integration) that qualifies participants for the GRI Certified Sustainability Professional Exam.",
  },
  {
    question: "Are courses available online?",
    answer:
      "Yes, our training programs are available both in-person and online to accommodate participants globally.",
  },
  {
    question: "Who should attend the training?",
    answer:
      "Sustainability professionals, ESG analysts, compliance officers, and anyone involved in corporate sustainability reporting and management.",
  },
];

const sectionClass =
  "mx-auto max-w-4xl px-6 py-16 lg:py-24";

const allFaqs = [...generalFaq, ...servicesFaq, ...academyFaq];

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaqs)) }}
      />
      <PageHeader
        title="FAQ"
        description="Answers to common questions about our sustainability services, SMART programs, and training."
      />

      <section className={`bg-bg-primary ${sectionClass}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          General
        </h2>
        <div className="mt-8">
          <Accordion items={generalFaq} />
        </div>
      </section>

      <section className={`bg-bg-secondary ${sectionClass}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Services
        </h2>
        <div className="mt-8">
          <Accordion items={servicesFaq} />
        </div>
      </section>

      <section className={`bg-bg-primary ${sectionClass}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Academy & Training
        </h2>
        <div className="mt-8">
          <Accordion items={academyFaq} />
        </div>
      </section>
    </main>
  );
}
