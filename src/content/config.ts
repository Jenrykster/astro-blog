import { defineCollection, z } from "astro:content";
export const technologies = [
  "typescript",
  "react",
  "next",
  "nest",
  "node",
  "other",
] as const;
const technologiesEnum = z.enum(technologies);

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(technologiesEnum),
    image: z.string().optional(),
    repo: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
