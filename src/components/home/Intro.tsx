import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section
      className="section-y border-t border-[var(--color-line)]"
      aria-labelledby="intro-heading"
    >
      <div className="page-wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <p className="kicker" id="intro-heading">
            Introduction
          </p>
        </Reveal>
        <Reveal className="lg:col-span-8 lg:col-start-5" delay={60}>
          <p className="headline max-w-[68rem]">
            I build software, ship products, and take ideas from a rough note to
            something people can actually use.
          </p>
          <p className="mt-8 max-w-[42rem] text-body text-[var(--color-muted)]">
            Founder of IGRIS Tech. Product engineering on Fanecto. Client work
            for brands that need a serious digital surface. Based in Lagos.
          </p>
          <Link
            href="/about"
            className="cta-link mt-8 cursor-grow"
          >
            About Michael
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
