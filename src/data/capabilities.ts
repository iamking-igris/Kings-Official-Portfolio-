export type Capability = {
  id: string;
  title: string;
  description: string;
  related: string[];
};

export const capabilities: Capability[] = [
  {
    id: "software",
    title: "Software & systems",
    description:
      "Applications, architecture, and the infrastructure that keeps a product usable — under IGRIS Tech and client builds.",
    related: ["igris-tech", "fanecto", "file-intelligence"],
  },
  {
    id: "product",
    title: "Product engineering",
    description:
      "Turning a problem into a product people can open — decisions, flows, and ownership. Fanecto is the clearest example.",
    related: ["fanecto", "igris-tech"],
  },
  {
    id: "ai",
    title: "AI & document intelligence",
    description:
      "File Intelligence API and IGRIS AI — extract, structure, and expose insight other systems can call.",
    related: ["file-intelligence", "igris-tech"],
  },
  {
    id: "web",
    title: "Web & client work",
    description:
      "Brand sites built for clarity and craft — Modeals live, Atelier Lagos delivered.",
    related: ["atelier-lagos", "modeals"],
  },
  {
    id: "apis",
    title: "Backend & APIs",
    description:
      "FastAPI edges, data contracts, and services designed to be integrated — not just demonstrated.",
    related: ["file-intelligence", "igris-tech"],
  },
  {
    id: "prototypes",
    title: "Technical prototypes",
    description:
      "Fast builds to answer a product question — then keep, kill, or promote under IGRIS.",
    related: ["igris-tech"],
  },
];

export const nowItems = [
  "Building IGRIS Tech (igristech.com).",
  "Product engineering on Fanecto — verified property marketplace.",
  "Shipping File Intelligence / IGRIS AI on the backend.",
  "Selected client and product opportunities.",
] as const;

export const techStack = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Node.js",
] as const;
