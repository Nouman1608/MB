import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoFields = {
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().min(70).max(160).optional(),
  canonical: z.string().url().optional(),
  noindex: z.boolean().default(false),
};

const availability = z.enum(['available', 'coming-soon', 'resources-only']);
const level = z.enum(['igcse', 'o-levels', 'a-levels', 'gcse', 'ib', 'sat', 'ielts', 'foundation']);
const country = z.enum(['PK', 'AE', 'SA', 'IN', 'GB', 'EU', 'WW']);

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    shortDescription: z.string().max(140),
    description: z.string(),
    level: level,
    ageRange: z.string().optional(),
    curriculum: z.string().optional(),
    subjects: z.array(reference('subjects')).default([]),
    availability,
    countryAvailability: z.array(country).default(['PK']),
    featured: z.boolean().default(false),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    relatedPrograms: z.array(reference('programs')).default([]),
    ...seoFields,
  }),
});

const subjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/subjects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    levelsLabel: z.string(),
    shortDescription: z.string().max(140),
    description: z.string(),
    topics: z.array(z.object({ title: z.string(), slug: z.string() })).default([]),
    programs: z.array(reference('programs')).default([]),
    availability,
    featured: z.boolean().default(false),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    ...seoFields,
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'study-guides', 'revision-notes', 'past-papers', 'practice-questions',
      'exam-preparation', 'subject-guides', 'learning-articles',
    ]),
    subject: reference('subjects'),
    level: z.array(level),
    topic: z.string().optional(),
    description: z.string(),
    author: reference('authors').optional(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().optional(),
    relatedResources: z.array(reference('resources')).default([]),
    relatedArticles: z.array(reference('articles')).default([]),
    ...seoFields,
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: reference('authors'),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'exam-preparation', 'study-skills', 'curriculum-guides',
      'higher-education', 'teaching', 'marlbridge-news',
    ]),
    tags: z.array(z.string()).max(6).default([]),
    subject: reference('subjects').optional(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    relatedArticles: z.array(reference('articles')).default([]),
    relatedResources: z.array(reference('resources')).default([]),
    draft: z.boolean().default(false),
    ...seoFields,
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    credentials: z.array(z.string()).default([]),
    links: z.object({ linkedin: z.string().url().optional(), website: z.string().url().optional() }).default({}),
  }),
});

export const collections = { programs, subjects, resources, articles, authors };
