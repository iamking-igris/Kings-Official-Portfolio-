export type ProjectFilter =
  | "all"
  | "software"
  | "ai"
  | "product"
  | "web"
  | "client";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  filters: ProjectFilter[];
  year: string;
  role: string;
  status: string;
  summary: string;
  idea: string;
  problem: string;
  approach: string;
  contribution: string;
  build: string;
  engineering?: string;
  product?: string;
  details: string;
  experience: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "igris-tech",
    number: "01",
    title: "IGRIS Tech",
    category: "Software · Product · AI · Systems",
    filters: ["all", "software", "ai", "product"],
    year: "2025—Now",
    role: "Founder · Software Engineer",
    status: "LIVE",
    summary:
      "A software and product venture focused on building digital products, web experiences, AI workflows, and practical systems for real-world use.",
    idea:
      "IGRIS Tech is Michael Anyanwu’s product and software practice. It covers web platforms, custom software, AI workflows, and digital products engineered end-to-end rather than treated as decorative client work.",
    problem:
      "Too many product ideas stall between concept and usable software. IGRIS exists to keep work moving from strategy through implementation, with a clear standard: if it cannot be used, it is not finished.",
    approach:
      "The company combines product thinking with engineering discipline. AI and automation are used where they reduce friction or improve workflows, but they never replace the product fundamentals.",
    contribution:
      "Michael founded and operates the venture, leading product direction, architecture, engineering decisions, and the software delivery process across the portfolio of work.",
    build:
      "The current work spans product websites, software systems, AI prototypes, and client-facing digital products. The portfolio is built with TypeScript and React on the frontend, with Python and FastAPI used for service-oriented backend work when needed.",
    engineering:
      "The system is intentionally practical: clear service boundaries, typed interfaces, maintainable product structure, and a bias toward shipping real work over theoretical complexity.",
    product:
      "The company model is simple: build useful products, ship them, and keep the work honest. It is not framed as a scaled startup story; it is a working software practice.",
    details:
      "The public company site is live at igris.com.ng. Related engineering work includes the File Intelligence API and the broader IGRIS software work published on GitHub.",
    experience:
      "The visual language stays dark, structured, and editorial. The system is meant to feel like a product company building serious work, not a generic portfolio template.",
    technologies: [
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
    ],
    liveUrl: "https://igris.com.ng",
    githubUrl: "https://github.com/iamking-igris",
    image: "/projects/igris-tech.svg",
    imageAlt: "IGRIS Tech — digital systems, software, and AI practice overview.",
  },
  {
    slug: "fanecto",
    number: "02",
    title: "Fanecto",
    category: "PropTech · Product Engineering",
    filters: ["all", "product", "software", "web"],
    year: "2025—Now",
    role: "CTO · Product Engineer",
    status: "IN DEVELOPMENT",
    summary:
      "A PropTech product being developed to make housing discovery, trust signals, and transactions clearer for students, landlords, agents, and inspectors.",
    idea:
      "Fanecto is being built around a simple proposition: help people discover property opportunities, verify the actors involved, inspect the property, and move toward a clearer settlement flow without the usual confusion and friction.",
    problem:
      "The housing market around student and renter search is fragmented. Listings are noisy, trust signals are weak, and the gap between interest and movement is long. The product aims to reduce that friction with better structure and better verification.",
    approach:
      "The product is designed around a staged flow: discover, verify, inspect, and complete the transaction. That workflow shapes the experience, the business rules, and the product decisions rather than treating those steps as bolt-ons.",
    contribution:
      "Michael is acting as CTO and product engineer, leading the product architecture, workflow design, MVP direction, and the frontend product engineering decisions that shape the experience and product logic.",
    build:
      "The work is an active product build focused on listings, role-based experiences, verification states, inspection coordination, and transactional clarity. It is product engineering work in progress, not a finished live platform.",
    engineering:
      "The project is approaching the problem as a systems product: role clarity, state transitions, trust marks, property context, and a flow that needs to work for both the seeker and the provider.",
    product:
      "The core product thinking is not simply listing properties; it is creating a framework where trust, flow, and verification become part of the experience. The product is intentionally being designed for real-world use rather than surface-level polish alone.",
    details:
      "Fanecto remains in active development. The current work is focused on building the MVP structure, user flows, and product logic rather than claiming a launched production product or outcomes that are not yet in place.",
    experience:
      "The interface balances product clarity with trust-building signals. The story is more about how the platform helps people move from browsing to confidence than about marketing claims or inflated launch language.",
    technologies: ["TypeScript", "React", "Next.js", "PostgreSQL"],
    image: "/projects/fanecto.svg",
    imageAlt: "Fanecto — active PropTech product in development for housing discovery and verification.",
  },
  {
    slug: "file-intelligence",
    number: "03",
    title: "File Intelligence",
    category: "AI · API · Document Intelligence",
    filters: ["all", "ai", "software"],
    year: "2025",
    role: "Software Engineer",
    status: "LIVE",
    summary:
      "An API-first document intelligence project that turns uploaded files into structured, machine-readable output for downstream systems and workflows.",
    idea:
      "The project exists to make raw documents usable as data. Files are treated as inputs to a predictable pipeline that extracts relevant structure instead of leaving builders to parse everything manually.",
    problem:
      "Most systems still treat documents as blobs. That creates friction for any workflow that needs reliable extraction, classification, or downstream processing without custom one-off parsing logic.",
    approach:
      "The design is intentionally API-first. The system is structured to receive files, process them, and return structured output with a stable contract that product teams can depend on.",
    contribution:
      "Michael designed and built the API and processing pipeline around reliable extraction, structured responses, and a backend contract that other product surfaces can integrate with.",
    build:
      "The work centers on a FastAPI backend and a structured extraction flow designed to be called by other systems. The project is not framed around vague AI promises; it is built as a real operational pipeline with a focused contract.",
    engineering:
      "The implementation emphasizes predictable data flow, typed responses, and a clear separation between ingestion, processing, and output. This keeps the system easier to integrate and more resilient to iteration.",
    product:
      "The product value is in operational utility: less manual processing, a clearer contract for downstream systems, and data that is easier to work with in other applications.",
    details:
      "The project is live at the API endpoint and is designed to be called by other services. The public repository provides the code surface for the work while the deployed API remains the operational product layer.",
    experience:
      "The visual system is dark and technical, reflecting the product’s backend-first posture and structured output model.",
    technologies: ["Python", "FastAPI", "TypeScript", "React", "AI", "APIs"],
    liveUrl: "https://igris-file-intelligence-api.onrender.com",
    githubUrl: "https://github.com/iamking-igris/IGRIS-FILE-INTELLIGENCE-API",
    image: "/projects/file-intelligence.svg",
    imageAlt: "File Intelligence — API and document-processing workflow.",
  },
  {
    slug: "atelier-lagos",
    number: "04",
    title: "Atelier Lagos",
    category: "Client Work · Fashion · Web",
    filters: ["all", "web", "client"],
    year: "2025",
    role: "Design · Frontend Engineering",
    status: "LIVE",
    summary:
      "A client website for a fashion brand built around editorial presentation, quiet luxury, and a strong responsive shopping-and-brand experience.",
    idea:
      "The brief was to create a digital presence that felt intentional: polished, highly considered, and aligned with the brand’s visual identity without making the experience feel forced or generic.",
    problem:
      "Fashion brands need more than a placeholder site. The digital experience must communicate taste, help visitors understand the collection, and make contact easy without distracting from the brand itself.",
    approach:
      "The layout and interaction approach were grounded in editorial hierarchy and clean spacing. Product imagery, rhythm, and typography were treated as part of the brand expression rather than decoration.",
    contribution:
      "Michael handled the digital experience end-to-end: visual design, implementation, responsiveness, and the UX details that make the site feel premium and coherent.",
    build:
      "The site was built as a responsive web experience focused on clarity, pacing, and product/story presentation. It keeps the brand front and center while making the site easy to navigate on mobile and desktop.",
    engineering:
      "The implementation is straightforward and high-quality: a performance-conscious frontend with a clear content structure and a responsive layout tailored to the brand’s content.",
    product:
      "The value here is in the product presentation: helping visitors understand the brand quickly and understand how to engage without unnecessary friction.",
    details:
      "This is a live client project and works as a real digital brand surface for Atelier Lagos, rather than a concept or demo build.",
    experience:
      "The interface is calm, premium, and editorial, matching the fashion brand’s aesthetic while still keeping the user journey fast and practical.",
    technologies: ["TypeScript", "React", "Next.js", "CSS"],
    liveUrl: "https://atelier-lagos.vercel.app",
    image: "/projects/atelier-lagos.svg",
    imageAlt: "Atelier Lagos — editorial fashion brand website.",
  },
  {
    slug: "modeals",
    number: "05",
    title: "Modeals",
    category: "Client Work · Painting & Renovation · Web",
    filters: ["all", "web", "client"],
    year: "2025",
    role: "Design · Frontend Engineering",
    status: "LIVE",
    summary:
      "A live client website for a painting, decoration, and renovation business highlighting services, finished work, and a direct path to contact.",
    idea:
      "Modeals needed a digital presence that made the business feel trustworthy and professional. The site needed to explain the services clearly and give visitors an easy route to start a project.",
    problem:
      "Service businesses often lose leads when the website is vague or visually inconsistent. The work here is to make the offer clear, the trust signals obvious, and the contact path simple.",
    approach:
      "The solution uses a stronger service-first structure: visible offer categories, clear hierarchy, and a simple communication path. The site keeps the experience calm and readable while still feeling premium and polished.",
    contribution:
      "Michael designed and built the site end-to-end, including the content structure, frontend implementation, and mobile-first delivery focused on clear conversion and contact.",
    build:
      "The site includes service storytelling, contact entry points, and a simple information flow for a service business operating in painting and renovation. It is built to feel trustworthy and practical without being heavy or cluttered.",
    engineering:
      "The implementation is intentionally direct: clean responsive layout, accessible content hierarchy, and a frontend designed to perform well while getting the offer across quickly.",
    product:
      "The primary product goal is communication: visitors should understand what Modeals does, what kind of work it handles, and how to begin a conversation easily.",
    details:
      "This is a live client project for a real painting and renovation brand operating in Nigeria, and the site is intended to support leads and brand presence rather than fictional portfolio presentation.",
    experience:
      "The tone is warm, practical, and professional with enough brand character to feel distinct without becoming overworked or trendy.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://modeals.vercel.app",
    githubUrl: "https://github.com/iamking-igris/Modeals-Decor",
    image: "/projects/modeals.svg",
    imageAlt: "Modeals — painting and renovation brand website.",
  },
];

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "ai", label: "AI" },
  { id: "product", label: "Product" },
  { id: "web", label: "Web" },
  { id: "client", label: "Client work" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return projects[0];
  return projects[(index + 1) % projects.length];
}
