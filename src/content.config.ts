import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const workSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  tags: z.array(z.string()).default([]),
  imageKey: z.string().optional(),
  links: z.array(linkSchema).default([]),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: workSchema.extend({
    metric: z.string().optional(),
    kind: z.string().default('Project'),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
  schema: workSchema.extend({
    code: z.string(),
    topics: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: workSchema.extend({
    status: z.string(),
    venue: z.string().optional(),
    authors: z.array(z.string()).default([]),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: workSchema.extend({
    event: z.string(),
    location: z.string().optional(),
    recording: z.string().optional(),
  }),
});

export const collections = { projects, teaching, publications, talks };
