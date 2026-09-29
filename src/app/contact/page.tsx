import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Michael Anyanwu — software engineer, product builder, and founder. Lagos, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <header className="page-wrap pb-6 pt-12 md:pt-20">
          <p className="kicker">Contact</p>
          <h1 className="headline mt-6">
            Have an idea, a product,
            <span className="block">or a problem worth solving?</span>
          </h1>
        </header>

        <section className="page-wrap grid gap-16 pb-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-[42rem] text-body text-[var(--color-muted)]">
              Software, products, websites, and systems that need to ship. I read
              every message that arrives with a clear brief.
            </p>
            <dl className="mt-12 space-y-8 border-t border-[var(--color-line)] pt-8">
              <div>
                <dt className="kicker">Email</dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-11 items-center"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="kicker">Elsewhere</dt>
                <dd className="mt-4 flex flex-col items-start gap-1">
                  {socials
                    .filter((link) => link.id !== "email")
                    .map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em]"
                      >
                        {link.label} →
                      </a>
                    ))}
                </dd>
              </div>
              <div>
                <dt className="kicker">Location</dt>
                <dd className="mt-3">
                  {site.location} · {site.year}
                </dd>
              </div>
              <div>
                <dt className="kicker">Availability</dt>
                <dd className="mt-3">{site.availability}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
