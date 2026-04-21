import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Disclaimer",
  description:
    "Limitation of liability for SusNex website content and services.",
  path: "/disclaimer",
  noIndex: true,
});

export default function DisclaimerPage() {
  return (
    <main>
      <PageHeader
        title="Disclaimer"
        description="Important information about how you should use this website."
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold">
              General Information
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              The information on www.susnex.com is provided by The
              Sustainability Nexus Ltd for general informational purposes only.
              It does not constitute a binding offer, contract, or commitment
              unless expressly agreed in writing between you and The Sustainability Nexus Ltd.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Professional Advice
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Nothing on this website is a substitute for professional advice
              tailored to your situation—including legal, financial,
              engineering, environmental, or compliance advice. You should
              consult qualified professionals before making decisions based on
              site content.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Accuracy of Information
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We strive to keep information accurate and up to date but make no
              warranties or representations as to completeness, accuracy, or
              fitness for a particular purpose. Content may change without notice.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">External Links</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Links to third-party websites are provided for convenience. The
              Sustainability Nexus Ltd does not endorse and is not responsible for the content,
              accuracy, or practices of external sites.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              To the maximum extent permitted by law, The Sustainability Nexus Ltd and its
              affiliates disclaim liability for any loss or damage arising from
              your use of or reliance on this website or its content, including
              indirect or consequential losses.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Contact</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              The Sustainability Nexus Ltd, 4th Floor, Bank Asia
              Building, 30 Sonargaon Janapath Ave, Sector 11, Uttara, Dhaka 1230,
              Bangladesh. Email:{" "}
              <Link
                href="mailto:ask@susnex.com"
                className="text-[var(--color-green)] hover:underline"
              >
                ask@susnex.com
              </Link>
              . Website: www.susnex.com.
            </p>
          </section>
        </div>
        <p className="mt-12 text-sm text-text-secondary">
          Last updated: April 2026
        </p>
      </div>
    </main>
  );
}
