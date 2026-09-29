export type SocialLink = {
  id: "email" | "github" | "linkedin" | "instagram" | "x" | "whatsapp";
  label: string;
  href: string;
  external: boolean;
};

export const socials: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:michaelkm555@gmail.com",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/iamking-igris",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michaelanyanwu.dev",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/michaelanyanwu.dev",
    external: true,
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/michaelanyanwu_",
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/2348147648714",
    external: true,
  },
];
