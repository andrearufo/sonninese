import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const voci = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/voci' }),
  schema: z.object({
    lemma: z.string(),
    tipo: z.array(z.string()),
    significato: z.string(),
    esempi: z.array(z.object({ dialetto: z.string(), italiano: z.string() })).default([]),
    fonte: z.string().optional(),
    aggiunta: z.coerce.date(),
  }),
});

export const collections = { voci };
