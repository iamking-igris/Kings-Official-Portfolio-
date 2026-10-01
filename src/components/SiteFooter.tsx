"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { KingMark } from "@/components/KingMark";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ invert = false }: { invert?: boolean }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer
      className={cn(
        invert
          ? "theme-invert border-t border-[var(--color-invert-line)]"
          : "border-t border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)]",
      )}
    >
      <div className="page-wrap py-12 md:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="space-y-5">
            <Link href="/" aria-label={`${site.name} — home`}>
              <KingMark size={28} invert={invert} />
            </Link>
            <div>
              <p className="text-sm tracking-[0.04em]">{site.name}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {site.roles.join(" · ")}
              </p>
            </div>
          </div>

          {/* Footer nav intentionally removed per request */}

          <div className="flex flex-col gap-6 md:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
              {socials.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    rel={link.external ? "noreferrer noopener" : undefined}
                    target={link.external ? "_blank" : undefined}
                    className="nav-link px-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {site.location}
              {time ? ` · ${time}` : ""} · {site.year}
            </p>
          </div>
        </div>

        <p className="mt-12 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
          Built with patience. Signed — KING.
        </p>
      </div>
    </footer>
  );
}
