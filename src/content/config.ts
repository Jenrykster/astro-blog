import { defineCollection, z } from "astro:content";

const technologies = z.enum([
  "typescript",
  "react",
  "next",
  "nest",
  "node",
  "other",
]);

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(technologies),
    image: z.string().optional(),
    repo: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
