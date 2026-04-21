import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { speakForChangeData } from "@/lib/content/services";

export const metadata = pageSeo({
  title: "amfori Speak for Change Implementation",
  description:
    "Supply-chain grievance mechanism setup, guided remediation, and due-diligence reporting support for global supply chains.",
  path: "/services/speak-for-change",
});

export default function SpeakForChange() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "amfori Speak for Change Implementation",
              "Supply-chain grievance mechanism setup, guided remediation, and due-diligence reporting support for global supply chains.",
              "/services/speak-for-change",
            ),
          ),
        }}
      />
      <PageHeader
        title="amfori Speak for Change Implementation"
        description="Worker and stakeholder grievance mechanisms with guided remediation for responsible supply chains."
      />
      <ServicePageTemplate data={speakForChangeData} />
    </main>
  );
}
