export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "government-secrets",
    name: "Government Secrets",
    description: "Declassified documents, Pentagon disclosures, and what officials aren't telling you.",
  },
  {
    slug: "ufo-sightings",
    name: "UFO Sightings",
    description: "Documented reports of unidentified aerial phenomena from across Canada and the world.",
  },
  {
    slug: "alien-theories",
    name: "Alien Theories",
    description: "The latest theories and evidence about extraterrestrial life and contact.",
  },
  {
    slug: "ancient-mysteries",
    name: "Ancient Mysteries",
    description: "Ancient civilisations, unexplained structures, and historical enigmas that science hasn't solved.",
  },
  {
    slug: "space-nasa",
    name: "Space & NASA",
    description: "The latest from space exploration, NASA discoveries, and cosmic anomalies.",
  },
  {
    slug: "american-encounters",
    name: "American Encounters",
    description: "UFO sightings and paranormal events reported across the United States.",
  },
  {
    slug: "scifi-science",
    name: "Sci-Fi & Science",
    description: "Where science fiction meets real-world science and emerging technology.",
  },
];

export function getCategoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
