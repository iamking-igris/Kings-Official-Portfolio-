import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { labItems } from "@/data/lab";

export function LabPreview() {
  const featured = labItems.slice(0, 4);

  return (
    <section className="theme-invert section-y" aria-labelledby="lab-heading">
      <div className="page-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="kicker" id="lab-heading">
              The Lab
            </p>
            <h2 className="headline mt-4">Experiments, on purpose.</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/lab" className="cta-link cursor-grow">
              Enter the lab
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 divide-y divide-[var(--color-invert-line)] border-y border-[var(--color-invert-line)]">
          {featured.map((item, index) => {
            const row = (
              <>
                <span className="index-num md:col-span-1">{item.number}</span>
                <span className="text-title md:col-span-4">{item.title}</span>
                <span className="text-sm text-[var(--color-invert-muted)] md:col-span-3">
                  {item.kind}
                </span>
                <span className="text-sm text-[var(--color-invert-muted)] md:col-span-2">
                  {item.status}
                </span>
                <span className="text-sm text-[var(--color-invert-muted)] md:col-span-2 md:text-right">
                  {item.year}
                </span>
              </>
            );

            return (
              <li key={item.id}>
                <Reveal delay={index * 40}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group grid gap-3 py-8 md:grid-cols-12 md:items-baseline cursor-grow"
                    >
                      {row}
                    </Link>
                  ) : (
                    <div className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                      {row}
                    </div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
