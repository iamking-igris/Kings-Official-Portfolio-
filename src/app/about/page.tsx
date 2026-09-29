import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KingMark } from "@/components/KingMark";
import { SiteFooter } from "@/components/SiteFooter";
import { nowItems, techStack } from "@/data/capabilities";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michael Anyanwu — software engineer, product builder, and founder based in Lagos. Building IGRIS Tech and shipping client work.",
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <header className="page-wrap pb-8 pt-12 md:pt-20">
          <p className="kicker">About</p>
          <h1 className="headline mt-6 max-w-[68rem]">
            Michael Anyanwu.
            <span className="mt-2 block text-[var(--color-muted)]">
              Most people call me King.
            </span>
          </h1>
        </header>

        <section className="page-wrap grid gap-12 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="img-frame relative aspect-[4/5] max-w-md overflow-hidden bg-[var(--color-ink)]">
              <Image
                src="/michael.jpg"
                alt="Michael Anyanwu"
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="max-w-[42rem] space-y-6 text-body text-[var(--color-muted)]">
              <p>
                I build software and products. Some of that is my own company —
                IGRIS Tech. Some of it is product engineering inside a startup.
                Some of it is client work for brands that need a digital surface
                taken seriously.
              </p>
              <p>
                The through-line is the same: take a rough idea, make the
                decisions that matter, and ship something people can open and
                use. I work across frontend, backend, APIs, AI integrations,
                automation, and product engineering — not as a list of buzzwords,
                but as the tools a build actually needs.
              </p>
              <p>
                I learn by shipping. Code reviews, client feedback, and products
                that have to work in the wild teach more than a stack of tutorials.
                I&apos;m based in {site.location}.
              </p>
            </div>

            <dl className="mt-12 space-y-8 border-t border-[var(--color-line)] pt-8">
              <div>
                <dt className="kicker">Practice</dt>
                <dd className="mt-3">{site.roles.join(" · ")}</dd>
              </div>
              <div>
                <dt className="kicker">Company</dt>
                <dd className="mt-3">IGRIS Tech</dd>
              </div>
              <div>
                <dt className="kicker">Availability</dt>
                <dd className="mt-3">{site.availability}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section-y border-t border-[var(--color-line)]">
          <div className="page-wrap grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="kicker">How I work</p>
              <h2 className="headline mt-4">Engineering and product in the same room.</h2>
              <p className="mt-6 max-w-[42rem] text-body text-[var(--color-muted)]">
                I don&apos;t separate “build it” from “should we build it.” Architecture
                follows the job to be done. Taste is a constraint. Delivery is the
                filter — if it can&apos;t be used, it isn&apos;t finished.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="kicker">Now</p>
              <ol className="mt-6">
                {nowItems.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-5 border-t border-[var(--color-line)] py-5 last:border-b"
                  >
                    <span className="index-num pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <p className="kicker mt-12">Stack</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-title leading-snug">
                {techStack.join("  ·  ")}
              </p>
            </div>
          </div>
        </section>

        <section className="theme-invert">
          <div className="page-wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
            <div className="flex items-center gap-6">
              <KingMark size={36} invert />
              <p className="headline">Have something to build?</p>
            </div>
            <Link
              href="/contact"
              className="cta-link"
            >
              Let&apos;s talk
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter invert />
    </>
  );
}
