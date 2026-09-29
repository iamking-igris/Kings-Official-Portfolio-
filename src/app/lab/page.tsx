import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { labItems } from "@/data/lab";

export const metadata: Metadata = {
  title: "The Lab",
  description:
    "The Lab — experiments, prototypes, and unfinished ideas from Michael Anyanwu. Separate from selected work.",
};

export default function LabPage() {
  return (
    <>
      <main id="main">
        <header className="page-wrap pb-10 pt-12 md:pb-16 md:pt-20">
          <p className="kicker">The Lab</p>
          <h1 className="headline mt-6 max-w-[68rem]">
            Where curiosity goes before it has to behave.
          </h1>
          <p className="mt-6 max-w-[42rem] text-body text-[var(--color-muted)]">
            Selected Work is the serious record. The Lab is experiments,
            prototypes, small APIs, automations, and unfinished rooms. Some of
            these become products. Some stay sketches. That&apos;s the point.
          </p>
        </header>

        <section className="theme-invert">
          <ol className="page-wrap divide-y divide-[var(--color-invert-line)]">
            {labItems.map((item) => (
              <li key={item.id} className="py-12 md:py-16">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                  <p className="index-num lg:col-span-1">{item.number}</p>
                  <div className="lg:col-span-4">
                    <h2 className="text-title">{item.title}</h2>
                    <p className="mt-3 text-sm text-[var(--color-invert-muted)]">
                      {item.kind} · {item.year} · {item.status}
                    </p>
                  </div>
                  <p className="text-body text-[var(--color-invert-muted)] lg:col-span-5">
                    {item.summary}
                  </p>
                  <div className="lg:col-span-2 lg:text-right">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em]"
                      >
                        View →
                      </Link>
                    ) : (
                      <span className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-invert-muted)]">
                        In the lab
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter invert />
    </>
  );
}
