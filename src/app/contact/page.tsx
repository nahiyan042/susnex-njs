import { ContactForm } from "@/components/forms/ContactForm";
import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Contact Us",
  description:
    "Contact SusNex for sustainability consulting, SMART programs, training, and global office locations in Bangladesh, USA, UK, and Canada.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Reach SusNex for sustainability advisory, training, and partnership inquiries."
      />

      <section className="bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-xl font-bold sm:text-2xl">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Share your details and we will respond as soon as possible.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <h2 className="font-heading text-xl font-bold sm:text-2xl">
              Offices
            </h2>
            <ul className="mt-8 space-y-8 text-sm text-text-secondary">
              <li>
                <h3 className="font-heading text-base font-semibold text-[var(--color-green)]">
                  Headquarter
                </h3>
                <p className="mt-2 leading-relaxed">
                  4th Floor, Bank Asia Building, 30 Sonargaon Janapath Ave,
                  Sector 11, Uttara, Dhaka 1230, Bangladesh
                </p>
              </li>
              <li>
                <h3 className="font-heading text-base font-semibold text-[var(--color-green)]">
                  USA Office
                </h3>
                <p className="mt-2 leading-relaxed">
                  484 McDonald Ave. Brooklyn, NY 11218, USA
                </p>
              </li>
              <li>
                <h3 className="font-heading text-base font-semibold text-[var(--color-green)]">
                  UK Office
                </h3>
                <p className="mt-2 leading-relaxed">
                  Unit 3A, 34-35 Hatton Garden, Holborn, London EC1N 8DX, UK
                </p>
              </li>
              <li>
                <h3 className="font-heading text-base font-semibold text-[var(--color-green)]">
                  Canada Office
                </h3>
                <p className="mt-2 leading-relaxed">
                  2624 Danforth Ave, Toronto, ON M4C 1L7, Canada
                </p>
              </li>
              <li>
                <h3 className="font-heading text-base font-semibold text-[var(--color-green)]">
                  Email
                </h3>
                <p className="mt-2">
                  <a
                    href="mailto:ask@susnex.com"
                    className="text-[var(--color-green)] underline-offset-2 hover:underline"
                  >
                    ask@susnex.com
                  </a>
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
