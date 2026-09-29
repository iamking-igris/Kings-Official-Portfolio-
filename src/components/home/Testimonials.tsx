import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      className="section-y border-t border-[var(--color-line)]"
      aria-labelledby="people-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <p className="kicker" id="people-heading">
            From people I&apos;ve built with
          </p>
          <h2 className="headline mt-4 max-w-[68rem]">
            Not a résumé claim — a working relationship.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px bg-[var(--color-line)] md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={item.id} className="bg-[var(--color-paper)]">
              <Reveal
                className="flex h-full flex-col p-8 md:p-10"
                delay={index * 50}
              >
                <p className="kicker">{item.context}</p>
                <blockquote className="mt-6 flex-1 font-[family-name:var(--font-display)] text-title leading-snug">
                  “{item.quote}”
                </blockquote>
                <footer className="mt-10">
                  <p className="text-sm">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {item.role}
                  </p>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
