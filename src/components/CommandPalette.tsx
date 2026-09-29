"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { navItems } from "@/data/site";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  hint?: string;
  action: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const items: Item[] = useMemo(() => {
    const pageItems: Item[] = [
      ...navItems.map((n) => ({
        id: n.href,
        label: n.label,
        hint: "Page",
        action: () => router.push(n.href),
      })),
      {
        id: "/#work",
        label: "Selected work",
        hint: "Section",
        action: () => router.push("/#work"),
      },
      {
        id: "/#contact",
        label: "Contact form",
        hint: "Section",
        action: () => router.push("/#contact"),
      },
    ];
    const socialItems: Item[] = socials.map((s) => ({
      id: s.id,
      label: s.label,
      hint: "External",
      action: () => {
        if (s.external) window.open(s.href, "_blank", "noopener,noreferrer");
        else window.location.href = s.href;
      },
    }));
    return [...pageItems, ...socialItems];
  }, [router]);

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase().trim()),
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setIndex(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  if (!open) return null;

  function run(item: Item) {
    setOpen(false);
    item.action();
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center bg-[color-mix(in_oklab,var(--color-ink)_40%,transparent)] px-4 pt-[15vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="sr-only" htmlFor="cmd-input">
          Search commands
        </label>
        <input
          id="cmd-input"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setIndex((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && filtered[index]) {
              e.preventDefault();
              run(filtered[index]);
            }
          }}
          placeholder="Jump to…"
          className="w-full border-0 border-b border-[var(--color-line)] bg-transparent px-5 py-4 text-body outline-none"
        />
        <ul className="max-h-72 overflow-auto py-2" role="listbox">
          {filtered.length === 0 ? (
            <li className="px-5 py-4 text-sm text-[var(--color-muted)]">
              No matches
            </li>
          ) : (
            filtered.map((item, i) => (
              <li key={item.id} role="option" aria-selected={i === index}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between px-5 py-3 text-left text-sm",
                    i === index && "bg-[var(--color-ink)] text-[var(--color-paper)]",
                  )}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => run(item)}
                >
                  <span>{item.label}</span>
                  {item.hint ? (
                    <span
                      className={cn(
                        "text-[0.7rem] uppercase tracking-[0.12em]",
                        i === index ? "opacity-70" : "text-[var(--color-muted)]",
                      )}
                    >
                      {item.hint}
                    </span>
                  ) : null}
                </button>
              </li>
            ))
          )}
        </ul>
        <p className="border-t border-[var(--color-line)] px-5 py-2 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
          ⌘K / Ctrl+K · Esc to close
        </p>
      </div>
    </div>
  );
}
