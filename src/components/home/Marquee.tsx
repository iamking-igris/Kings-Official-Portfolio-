export function Marquee() {
  const items = [
    "Software Engineering",
    "Product Development",
    "AI Systems",
    "Automation",
    "Web Applications",
    "Client Work",
    "APIs",
    "Founder Mode",
  ];
  const loop = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-[var(--color-line)] py-5"
      aria-hidden="true"
    >
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-[0.75rem] uppercase tracking-[0.2em] text-[var(--color-muted)]"
            >
              {item}
              <span className="mx-6 text-[var(--color-subtle)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
