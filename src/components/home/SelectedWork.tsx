"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const [active, setActive] = useState(projects[0]?.slug ?? "");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-work-chapter]"),
    );
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const slug = visible?.target.getAttribute("data-work-chapter");
        if (slug) setActive(slug);
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.15, 0.4, 0.65] },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="work"
      className="section-y border-t border-[var(--color-line)]"
      aria-labelledby="work-heading"
    >
      <div className="page-wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="kicker" id="work-heading">
              Selected work
            </p>
            <h2 className="headline mt-4">Five projects. Real ones.</h2>
          </Reveal>
          <Reveal delay={60}>
            <Link href="/work" className="cta-link cursor-grow">
              Full index
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Work index" className="sticky top-28 space-y-1">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={`#work-${project.slug}`}
                  className={cn(
                    "work-index-item flex min-h-11 items-baseline gap-4 py-2 text-sm text-[var(--color-muted)]",
                    active === project.slug && "is-active",
                  )}
                >
                  <span className="index-num">{project.number}</span>
                  <span>{project.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-24 lg:col-span-9 lg:space-y-32">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                id={`work-${project.slug}`}
                data-work-chapter={project.slug}
                className="scroll-mt-28"
              >
                <Reveal delay={index === 0 ? 30 : 0}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block cursor-grow"
                  >
                    <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] pb-4">
                      <p className="index-num">{project.number}</p>
                      <div className="flex items-center gap-3">
                        <span className="status-dot opacity-50" aria-hidden="true" />
                        <p className="index-num">{project.status}</p>
                      </div>
                    </div>

                    <div className="img-frame relative mt-6 aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="project-visual"
                        sizes="(max-width: 768px) 100vw, 70vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                      <div>
                        <h3 className="text-title">
                          {project.title}
                          <span className="ml-3 inline-block text-sm uppercase tracking-[0.12em] text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1.5">
                            →
                          </span>
                        </h3>
                        <p className="mt-2 text-sm text-[var(--color-muted)]">
                          {project.category} · {project.role} · {project.year}
                        </p>
                      </div>
                      <p className="max-w-[42rem] text-sm leading-relaxed text-[var(--color-muted)] md:max-w-xs md:text-right">
                        {project.summary}
                      </p>
                    </div>
                    <p className="mt-4 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                      {project.technologies.slice(0, 5).join("  ·  ")}
                    </p>
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
