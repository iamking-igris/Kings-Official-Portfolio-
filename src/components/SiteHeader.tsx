"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { KingMark } from "@/components/KingMark";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function localTimeLabel() {
  try {
    const now = new Date();
    const time = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Africa/Lagos",
    }).format(now);
    const hour = Number(
      new Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        hour12: false,
        timeZone: "Africa/Lagos",
      }).format(now),
    );
    const greeting =
      hour < 12 ? "GOOD MORNING" : hour < 17 ? "GOOD AFTERNOON" : "GOOD EVENING";
    return `${greeting} — LAGOS, NIGERIA IS ${time}`;
  } catch {
    return `${site.location.toUpperCase()} · ${site.year}`;
  }
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [timeLabel, setTimeLabel] = useState(
    `${site.location.toUpperCase()} · ${site.year}`,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setTimeLabel(localTimeLabel());
    const id = window.setInterval(() => setTimeLabel(localTimeLabel()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-200",
          open
            ? "border-transparent bg-transparent"
            : scrolled
              ? "border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-paper)_88%,transparent)] backdrop-blur-sm"
              : "border-transparent bg-[var(--color-paper)]",
        )}
      >
        <div className="page-wrap flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className={cn(
              "group relative z-[100] flex min-h-11 items-center gap-4",
              open && "text-white",
            )}
            onClick={() => setOpen(false)}
          >
            <KingMark size={28} className="md:h-8" invert={open} />
            <span
              className={cn(
                "text-[0.72rem] uppercase tracking-[0.18em] transition-colors",
                open
                  ? "text-white/70 group-hover:text-white"
                  : "hidden text-[var(--color-muted)] group-hover:text-[var(--color-ink)] sm:inline",
              )}
            >
              {site.shortName}
            </span>
          </Link>

          <button
            type="button"
            className={cn(
              "relative z-[100] min-h-11 min-w-11 px-2 text-[0.72rem] uppercase tracking-[0.22em]",
              open ? "text-white" : "text-[var(--color-ink)]",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        className={cn(
          "fixed inset-0 z-[90] flex flex-col bg-black text-white transition-[opacity,visibility] duration-500 ease-out",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!open}
      >
        <div className="h-16 md:h-[4.5rem]" aria-hidden="true" />

        <nav className="page-wrap flex flex-1 flex-col justify-center gap-1 pb-8 pt-4 md:gap-2">
          {navItems.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "menu-link group block w-fit py-1 font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-white transition-opacity duration-300",
                  open ? "opacity-100" : "opacity-0",
                )}
                style={{
                  transitionDelay: open ? `${80 + i * 55}ms` : "0ms",
                }}
                onClick={() => setOpen(false)}
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="page-wrap flex flex-col gap-3 border-t border-white/10 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/45">
            {timeLabel}
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/45">
            {site.name} · {site.roles[0]}
          </p>
        </div>
      </div>
    </>
  );
}
