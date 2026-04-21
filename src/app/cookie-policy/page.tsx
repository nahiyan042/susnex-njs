import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Cookie Policy",
  description: "How SusNex uses cookies and similar technologies.",
  path: "/cookie-policy",
  noIndex: true,
});

export default function CookiePolicyPage() {
  return (
    <main>
      <PageHeader
        title="Cookie Policy"
        description="Transparency about cookies and how you can manage them."
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold">
              What Are Cookies
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Cookies are small text files placed on your device when you visit
              a website. They help the site remember your preferences, keep you
              signed in where applicable, and allow us to understand how
              visitors use www.susnex.com. Similar technologies may include
              local storage and pixels used for the same purposes.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              How We Use Cookies
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              <strong className="text-text-primary">Essential cookies</strong>{" "}
              are necessary for the website to function, including security,
              session management, and authentication where we offer logged-in
              experiences.{" "}
              <strong className="text-text-primary">Analytics cookies</strong>{" "}
              (such as those used with Google Analytics) help us measure traffic
              and improve our content and site structure.{" "}
              <strong className="text-text-primary">Functional cookies</strong>{" "}
              remember choices such as theme or display preferences where
              available.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Managing Cookies
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Most browsers let you refuse or delete cookies through their
              settings. Blocking essential cookies may affect how the website
              works. For analytics, you can also use browser extensions or
              opt-out tools provided by analytics vendors where available.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Third-Party Cookies
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We may use third-party services that set their own cookies,
              including Google (e.g., Analytics) and Google reCAPTCHA for spam
              prevention. These providers process data according to their privacy
              policies. We do not control third-party cookies beyond selecting
              and configuring services in line with our privacy practices.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Changes to This Policy
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We may update this Cookie Policy to reflect changes in technology,
              law, or our practices. The last updated date below indicates when
              revisions were made. We encourage you to review this page
              periodically.
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
