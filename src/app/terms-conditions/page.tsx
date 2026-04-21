import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Terms & Conditions",
  description: "Terms of use for the SusNex website and services.",
  path: "/terms-conditions",
  noIndex: true,
});

export default function TermsConditionsPage() {
  return (
    <main>
      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website."
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Acceptance of Terms
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              By accessing or using www.susnex.com and any related services
              offered by The Sustainability Nexus Ltd, you agree to
              be bound by these Terms &amp; Conditions. If you do not agree, you
              must not use our website or services.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Use of Website</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              You may use our website only for lawful purposes and in a manner
              that does not infringe the rights of others or restrict their use
              of the site. You agree not to attempt unauthorized access to our
              systems, transmit malware, scrape content in violation of these
              terms, or misuse contact forms or communications channels.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Intellectual Property
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              All content on this website—including text, graphics, logos,
              images, and layout—is owned by The Sustainability Nexus Ltd or its licensors and is
              protected by applicable intellectual property laws. You may not
              copy, reproduce, distribute, or create derivative works without our
              prior written consent, except for limited personal, non-commercial
              viewing as permitted by law.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              To the fullest extent permitted by applicable law, The Sustainability Nexus Ltd and
              its directors, employees, and affiliates shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the website or reliance on its
              content. Our total liability for any claim relating to the website
              shall not exceed the amount you paid us for the specific service
              giving rise to the claim, or zero if no fees were paid.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Third-Party Links
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Our website may contain links to third-party websites. We do not
              control and are not responsible for the content, privacy
              practices, or availability of those sites. Accessing third-party
              links is at your own risk.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Governing Law</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              These Terms &amp; Conditions are governed by the laws of
              Bangladesh, without regard to conflict-of-law principles. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts of Bangladesh, unless otherwise required by mandatory law.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Changes to Terms</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We may update these terms from time to time. The &ldquo;Last
              updated&rdquo; date at the bottom of this page will be revised
              when material changes are made. Continued use of the website after
              changes constitutes acceptance of the updated terms.
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
