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

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

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
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[0.68rem] uppercase tracking-[0.18em] transition-colors",
                    active
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={cn(
              "relative z-[100] min-h-11 min-w-11 px-2 text-[0.72rem] uppercase tracking-[0.22em] md:hidden",
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
          "mobile-menu-overlay fixed inset-0 z-[90] flex flex-col overflow-hidden bg-[#090909]/80 text-white backdrop-blur-md transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%),linear-gradient(135deg,rgba(27,9,15,0.92),rgba(11,11,11,0.86))] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "scale-100 opacity-100" : "scale-[1.08] opacity-0",
          )}
        />

        <div className="relative flex h-16 items-start justify-between px-[var(--spacing-page)] pt-4">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
            Michael Anyanwu · Software Engineer
          </p>

          <button
            type="button"
            className={cn(
              "group inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/70 transition-all duration-300 hover:text-white",
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            )}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span className="font-medium">Close</span>
            <span className="h-px w-7 bg-white/40 transition-all duration-300 group-hover:w-9" />
          </button>
        </div>

        <div className="relative h-4 md:h-[4.5rem]" aria-hidden="true" />

        <nav className={cn("page-wrap relative flex flex-1 flex-col justify-center gap-1 pb-8 pt-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-2", open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          {navItems.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "menu-link group block w-fit py-1 font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0",
                )}
                style={{
                  transitionDelay: open ? `${100 + i * 70}ms` : "0ms",
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

        <div className="page-wrap mt-auto mb-6 flex w-full items-end justify-between px-[var(--spacing-page)]">
          <p className="text-[0.7rem] uppercase tracking-[0.12em] text-white/60">
            {`Good ${+time.split(":")[0] < 12 ? "Morning" : +time.split(":")[0] < 18 ? "Afternoon" : "Evening"} ${"Lagos, Nigeria"}`}
          </p>

          <p className="text-[0.7rem] uppercase tracking-[0.12em] text-white/60">{time}</p>
        </div>

      </div>
    </>
  );
}
