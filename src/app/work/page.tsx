"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/data/projects";
import { cn } from "@/lib/utils";

export default function WorkIndexPage() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const list = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.filters.includes(filter)),
    [filter],
  );

  return (
    <>
      <main id="main">
        <header className="page-wrap pb-8 pt-12 md:pb-12 md:pt-20">
          <p className="kicker">Work</p>
          <h1 className="headline mt-6 max-w-[68rem]">
            Projects that shipped far enough to name.
          </h1>
          <p className="mt-6 max-w-[42rem] text-body text-[var(--color-muted)]">
            Startup product work, AI systems, and client websites — five real
            projects, no filler.
          </p>
        </header>

        <div className="page-wrap pb-6">
          <div
            className="flex flex-wrap gap-2 border-b border-[var(--color-line)] pb-6"
            role="tablist"
            aria-label="Filter projects"
          >
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "min-h-10 px-4 text-sm uppercase tracking-[0.12em] transition-colors",
                  filter === f.id
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ol className="page-wrap pb-24">
          {list.map((project) => (
            <li
              key={project.slug}
              className="border-t border-[var(--color-line)] last:border-b"
            >
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-12"
              >
                <span className="index-num md:col-span-1">{project.number}</span>
                <div className="img-frame relative aspect-[16/10] md:col-span-4">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="project-visual transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:col-span-5">
                  <span className="text-title block">{project.title}</span>
                  <span className="mt-2 block text-sm text-[var(--color-muted)]">
                    {project.category}
                  </span>
                  <span className="mt-3 block text-sm text-[var(--color-muted)]">
                    {project.summary}
                  </span>
                  <span className="mt-3 block text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-subtle)]">
                    {project.role} · {project.year} · {project.status}
                  </span>
                </div>
                <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1 md:col-span-2 md:text-right">
                  View →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
    </>
  );
}
