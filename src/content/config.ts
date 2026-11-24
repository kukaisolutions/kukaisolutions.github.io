import { defineCollection, z } from 'astro:content';

// Beiwe help articles: src/content/beiwe-help/<lang>/<slug>.md, published at
// /products/beiwe/<lang>/<slug>/. `key` is the same in every language, so the
// pages can link to their translations; `order` sets the order on the index.
const beiweHelp = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    key: z.string(),
    order: z.number(),
    /** Summary for the index and search results; defaults to the first paragraph. */
    description: z.string().optional(),
    /** "setup" for the step-by-step guides, "account" for plans and account. */
    group: z.enum(['setup', 'account']),
  }),
});

export const collections = { 'beiwe-help': beiweHelp };
