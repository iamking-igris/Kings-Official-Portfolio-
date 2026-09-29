"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { capabilities } from "@/data/capabilities";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function WhatIBuild() {
  const [active, setActive] = useState(capabilities[0]?.id ?? "software");
  const current = capabilities.find((c) => c.id === active) ?? capabilities[0];
  const related = projects.filter((p) => current?.related.includes(p.slug));

  return (
    <section
      className="section-y border-t border-[var(--color-line)]"
      aria-labelledby="build-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <p className="kicker" id="build-heading">
            What I build
          </p>
          <h2 className="headline mt-4 max-w-[40rem]">
            Breadth with a point.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <ul className="flex flex-col gap-1 lg:col-span-5" role="list">
            {capabilities.map((cap) => (
              <li key={cap.id}>
                <button
                  type="button"
                  onClick={() => setActive(cap.id)}
                  className={cn(
                    "group flex w-full min-h-14 items-baseline justify-between gap-4 border-b border-[var(--color-line)] py-4 text-left transition-colors",
                    active === cap.id
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                  )}
                  aria-pressed={active === cap.id}
                >
                  <span className="text-title">{cap.title}</span>
                  <span
                    className={cn(
                      "text-sm transition-transform duration-300",
                      active === cap.id && "translate-x-1",
                    )}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-body text-[var(--color-muted)]">
              {current?.description}
            </p>
            <p className="kicker mt-10">Related work</p>
            <ul className="mt-4 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group flex min-h-14 items-baseline justify-between gap-4 py-4 cursor-grow"
                  >
                    <span>
                      <span className="index-num mr-4">{p.number}</span>
                      <span className="text-title">{p.title}</span>
                    </span>
                    <span className="text-sm text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
