export const site = {
  name: "Michael Anyanwu",
  shortName: "KING",
  title: "Michael Anyanwu — Software Engineer, Product Builder, Founder",
  description:
    "Michael Anyanwu is a software engineer, product builder, and founder based in Lagos. He builds software, products, and systems — through IGRIS Tech and client work.",
  url: "https://michaelanyanwu.name.ng",
  location: "Lagos, Nigeria",
  year: "2026",
  roles: ["Software Engineer", "Product Builder", "Founder"] as const,
  email: "michaelkm555@gmail.com",
  availability: "Open to selected work",
  keywords: [
    "Michael Anyanwu",
    "KING",
    "software engineer",
    "product builder",
    "founder",
    "IGRIS Tech",
    "Lagos",
    "web development",
    "AI",
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/", index: "01" },
  { label: "Work", href: "/work", index: "02" },
  { label: "About", href: "/about", index: "03" },
  { label: "Contact", href: "/contact", index: "04" },
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Anyanwu",
  alternateName: "KING",
  jobTitle: "Software Engineer / Product Builder / Founder",
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}/michael.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  worksFor: {
    "@type": "Organization",
    name: "IGRIS Tech",
  },
  sameAs: [
    "https://github.com/iamking-igris",
    "https://www.linkedin.com/in/michaelanyanwu.dev",
    "https://www.instagram.com/michaelanyanwu.dev",
    "https://x.com/michaelanyanwu_",
  ],
  knowsAbout: [
    "Software engineering",
    "Product development",
    "AI systems",
    "Automation",
    "Web applications",
  ],
};
