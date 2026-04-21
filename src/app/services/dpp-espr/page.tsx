import { pageSeo, serviceJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { dppEsprData } from "@/lib/content/services";

export const metadata = pageSeo({
  title: "Digital Product Passport (DPP) & ESPR Readiness",
  description:
    "Textile data architecture, traceability systems, and EU-ready sustainability disclosure workflows for Digital Product Passports.",
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
              "Textile data architecture, traceability systems, and EU-ready sustainability disclosure workflows for Digital Product Passports.",
              "/services/dpp-espr",
            ),
          ),
        }}
      />
      <PageHeader
        title="Digital Product Passport (DPP) & ESPR Readiness"
        description="Build product-level data systems for EU textile compliance and competitive advantage."
      />
      <ServicePageTemplate data={dppEsprData} />
    </main>
  );
}
