import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { dppEsprData } from "@/lib/content/services";

export const metadata = pageSeo({
  title: "Digital Product Passport (DPP) & ESPR Readiness",
  description:
    "Prepare for EU ESPR and Digital Product Passport requirements with textile traceability, product data architecture, supplier workflows, and sustainability disclosure support.",
  path: "/services/dpp-espr",
});

export default function DppEspr() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Digital Product Passport (DPP) & ESPR Readiness",
              "Prepare for EU ESPR and Digital Product Passport requirements with textile traceability, product data architecture, supplier workflows, and sustainability disclosure support.",
              "/services/dpp-espr",
            ),
          ),
        }}
      />
      <PageHeader
        title="Digital Product Passport (DPP) & ESPR Readiness"
        description="Build traceable, regulation-ready product data systems for Digital Product Passports, ESPR requirements, and circular textile supply chains."
      />
      <ServicePageTemplate data={dppEsprData} />
    </main>
  );
}
