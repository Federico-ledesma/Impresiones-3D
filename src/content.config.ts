import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const impresiones = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/gallery",
    }),

    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            category: z.string(),
            material: z.string(),
            color: z.string(),
            dimension: z.string(),
            peso: z.string(),
            featured: z.boolean(),
        }),
});

export const collections = {
    impresiones,
};