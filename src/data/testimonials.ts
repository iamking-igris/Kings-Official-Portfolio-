export type Testimonial = {
  id: string;
  name: string;
  role: string;
  context: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "atelier",
    name: "Atelier Lagos",
    role: "Client",
    context: "Fashion brand · Website",
    quote:
      "The site matched the standard we hold for the brand. Detail, pacing, and the overall experience of working together were consistent from first conversation to delivery.",
  },
  {
    id: "david",
    name: "David",
    role: "Frontend Engineer",
    context: "Engineering collaboration",
    quote:
      "Solid engineering judgment and clean implementation. Easy to collaborate with — communication stayed clear and the work held up under review.",
  },
  {
    id: "founder",
    name: "Startup founder",
    role: "Product collaboration",
    context: "Early product work",
    quote:
      "Strong ownership from idea to something tangible. Product thinking showed up in the decisions, not only in the code.",
  },
];
