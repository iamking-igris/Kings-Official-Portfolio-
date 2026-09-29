import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="theme-invert section-y"
      aria-labelledby="contact-heading"
    >
      <div className="page-wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker" id="contact-heading">
            Contact
          </p>
          <h2 className="headline mt-4">
            Have an idea, a product,
            <span className="block">or a problem worth solving?</span>
          </h2>
          <p className="mt-6 max-w-[42rem] text-body text-[var(--color-invert-muted)]">
            Bring the brief. I work on software, products, websites, and systems
            that need to ship. Based in {site.location}.
          </p>
          <ul className="mt-10 space-y-2">
            {socials.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  rel={link.external ? "noreferrer noopener" : undefined}
                  target={link.external ? "_blank" : undefined}
                  className="inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em]"
                >
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-[var(--color-invert-muted)]"
          >
            Full contact page
          </Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm invert />
        </div>
      </div>
    </section>
  );
}
