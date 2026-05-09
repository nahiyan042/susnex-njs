import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { speakForChangeData } from "@/lib/content/services";

export const metadata = pageSeo({
  title: "Worker Voice & Grievance Mechanism Implementation",
  description:
    "Implement worker voice and grievance mechanisms aligned with amfori Speak for Change — case triage, guided remediation, supplier onboarding, and due-diligence reporting for responsible supply chains.",
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
              "Worker Voice & Grievance Mechanism Implementation",
              "Implement worker voice and grievance mechanisms aligned with amfori Speak for Change — case triage, guided remediation, supplier onboarding, and due-diligence reporting for responsible supply chains.",
              "/services/speak-for-change",
            ),
          ),
        }}
      />
      <PageHeader
        title="Worker Voice & Grievance Mechanism Implementation"
        description="Trusted worker voice systems for responsible supply chains — designed, deployed, and governed in line with amfori Speak for Change and global human rights due-diligence expectations."
      />
      <ServicePageTemplate data={speakForChangeData} />
    </main>
  );
}
