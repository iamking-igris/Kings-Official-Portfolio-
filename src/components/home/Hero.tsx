"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const lines = ["Software.", "Products.", "Systems."];

export function Hero() {
  return (
    <section
      className="page-wrap relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-between pb-10 pt-10 md:pb-14 md:pt-14"
      aria-labelledby="hero-name"
    >
      <div className="flex items-start justify-between gap-6">
        <p className="kicker">
          {site.location}
          <span className="mx-3 text-[var(--color-subtle)]" aria-hidden="true">
            ·
          </span>
          {site.year}
        </p>
        <div className="flex items-center gap-3">
          <span className="status-dot hidden sm:inline-block" aria-hidden="true" />
          <p className="kicker hidden sm:block">{site.availability}</p>
        </div>
      </div>

      <div className="grid items-end gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-6">
        <div className="lg:col-span-8">
          <p
            className="kicker mb-6 md:mb-8"
            style={{ animation: "rise-in 0.8s var(--ease-out) both" }}
          >
            I build
          </p>
          <h1 id="hero-name" className="display">
            {lines.map((line, i) => (
              <span
                key={line}
                className="hero-line"
                style={
                  i === 1
                    ? { paddingLeft: "clamp(0.05em, 2vw, 10%)" }
                    : undefined
                }
              >
                <span style={{ ["--line-delay" as string]: `${160 + i * 110}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="mt-8 max-w-xl text-body text-[var(--color-muted)] md:mt-10"
            style={{
              animation: "rise-in 0.9s var(--ease-out) both",
              animationDelay: "0.5s",
            }}
          >
            Turning ideas into software people can open and use — products,
            systems, and the craft under them.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[280px] lg:col-span-4 lg:mx-0 lg:max-w-none lg:justify-self-end"
          style={{
            animation: "rise-in 1s var(--ease-out) both",
            animationDelay: "0.35s",
          }}
        >
          <div className="img-frame relative aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
            <Image
              src="/michael.jpg"
              alt="Michael Anyanwu"
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 280px, 28vw"
              priority
            />
          </div>
          <p className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {site.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 border-t border-[var(--color-line)] pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-title tracking-tight">{site.name}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)] md:text-base">
            {site.roles.join(" · ")}
          </p>
        </div>
        <Link href="/work" className="cta-link cursor-grow">
          Selected work
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
