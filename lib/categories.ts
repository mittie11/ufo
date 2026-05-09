export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "health",
    name: "Health & Wellness",
    description: "Tips for living a healthier life across Canada.",
  },
  {
    slug: "finance",
    name: "Finance & Money",
    description: "Smart money moves for Canadians.",
  },
  {
    slug: "home",
    name: "Home & Living",
    description: "Make the most of your Canadian home.",
  },
  {
    slug: "pets",
    name: "Pets",
    description: "Keep your furry friends happy and healthy.",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Live better, every single day.",
  },
  {
    slug: "travel",
    name: "Travel Canada",
    description: "Explore the best of Canada.",
  },
  {
    slug: "food",
    name: "Food & Recipes",
    description: "Delicious ideas for Canadian kitchens.",
  },
  {
    slug: "science",
    name: "Science & Space",
    description: "UFOs, extraterrestrial life, space discoveries, and the science of the unknown.",
  },
];

export function getCategoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
