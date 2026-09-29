export type LabItem = {
  id: string;
  number: string;
  title: string;
  kind: string;
  year: string;
  status: "Experiment" | "Prototype" | "Study" | "Unfinished";
  summary: string;
  href?: string;
};

/** Private lab notes — not part of featured Selected Work. */
export const labItems: LabItem[] = [
  {
    id: "interface-studies",
    number: "01",
    title: "Interface studies",
    kind: "UI experiment",
    year: "2025",
    status: "Study",
    summary:
      "Quiet studies in type, index, and motion. Rehearsals for how software should feel.",
  },
  {
    id: "quiet-apis",
    number: "02",
    title: "Quiet APIs",
    kind: "Small APIs",
    year: "2025",
    status: "Prototype",
    summary:
      "Small interfaces for extraction, routing, and automation. Built to be called.",
  },
  {
    id: "automations",
    number: "03",
    title: "Automations",
    kind: "Automation",
    year: "2025—26",
    status: "Experiment",
    summary:
      "Scripts and agents that take a repetitive job off a desk.",
  },
];
