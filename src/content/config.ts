import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z
      .union([
        z.string(),
        z.object({
          url: z.string(),
          alt: z.string(),
        }),
      ])
      .optional(),
    href: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
