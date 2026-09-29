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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-paper)_88%,transparent)] backdrop-blur-sm"
          : "border-transparent bg-[var(--color-paper)]",
      )}
    >
      <div className="page-wrap flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="group flex min-h-11 items-center gap-4"
        >
          <KingMark size={28} className="md:h-8" />
          <span className="hidden text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-ink)] sm:inline">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex lg:gap-3">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                data-active={active}
                className="nav-link text-[var(--color-ink)]"
              >
                <span className="index-num">{item.index}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="relative min-h-11 min-w-11 px-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-ink)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[90] flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="page-wrap flex h-16 items-center justify-between">
            <KingMark size={28} />
            <button
              type="button"
              className="min-h-11 min-w-11 px-2 text-[0.72rem] uppercase tracking-[0.18em]"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="page-wrap flex flex-1 flex-col justify-center gap-2 pb-16">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="flex items-baseline gap-6 border-b border-[var(--color-line)] py-5"
                  onClick={() => setOpen(false)}
                >
                  <span className="index-num">{item.index}</span>
                  <span className="headline">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <p className="page-wrap pb-8 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {site.location} · {site.year}
          </p>
        </div>
      ) : null}
    </header>
  );
}
