import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    base: "src/content/pages",
    pattern: "{es,en}/*.{yaml,yml,md,mdx}",
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    hero: z.any().optional(),
    whatWeDo: z.any().optional(),
    stats: z.any().optional(),
    partners: z.any().optional(),
    hq: z.any().optional(),
    facebook: z.any().optional(),
  }).passthrough(),
});

const ui = defineCollection({
  loader: glob({
    base: "src/content/components",
    pattern: "**/*.{yaml,yml,json}",
  }),
  schema: z.any(),
});

export const collections = { pages, ui };
