import { Reveal } from "@/components/Reveal";
import { nowItems, techStack } from "@/data/capabilities";
import { site } from "@/data/site";

export function NowSection() {
  return (
    <section
      className="section-y border-t border-[var(--color-line)]"
      aria-labelledby="now-heading"
    >
      <div className="page-wrap grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker" id="now-heading">
            Now
          </p>
          <h2 className="headline mt-4">In motion.</h2>
          <ol className="mt-10">
            {nowItems.map((item, index) => (
              <li
                key={item}
                className="flex gap-6 border-t border-[var(--color-line)] py-5 last:border-b"
              >
                <span className="index-num pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-body">{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={60}>
          <p className="kicker">Availability</p>
          <p className="headline mt-4">{site.availability}</p>
          <p className="mt-6 max-w-[42rem] text-body text-[var(--color-muted)]">
            Software engineering, product work, web applications, and technical
            builds. Selected opportunities only.
          </p>
          <p className="kicker mt-12">Tools I reach for</p>
          <p className="mt-4 font-[family-name:var(--font-display)] text-title leading-snug">
            {techStack.join("  ·  ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
