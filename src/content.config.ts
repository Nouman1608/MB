import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoFields = {
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().min(70).max(160).optional(),
  canonical: z.string().url().optional(),
  noindex: z.boolean().default(false),
};

/** available = taught now, resources-only = published but not taught, coming-soon = neither yet. */
const status = z.enum(['available', 'coming-soon', 'resources-only']);
/** Kept in step with src/data/academic/. Validated against the matrix at build time. */
const boardSlug = z.enum(['cambridge', 'edexcel', 'aqa', 'ocr']);
const qualificationSlug = z.enum(['igcse', 'o-level', 'gcse', 'as-level', 'a-level']);
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
    status,
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
    levels: z.array(level).default([]),
    shortDescription: z.string().max(140),
    description: z.string(),
    topics: z.array(z.object({ title: z.string(), slug: z.string() })).default([]),
    relatedPrograms: z.array(reference('programs')).default([]),
    status,
    featured: z.boolean().default(false),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    ...seoFields,
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    resourceType: z.enum([
      'study-guides', 'revision-notes', 'past-papers', 'practice-questions',
      'exam-preparation', 'subject-guides', 'learning-articles',
    ]),
    subject: reference('subjects'),
    level: z.array(level),
    curriculum: z.string().optional(),
    /**
     * Academic taxonomy. Slugs are validated against the master matrix by
     * scripts/validate-academic-content.mjs — a resource may not claim a
     * board/qualification combination that is not ACTIVE.
     */
    boards: z.array(boardSlug).default([]),
    qualifications: z.array(qualificationSlug).default([]),
    topic: z.string().optional(),
    /**
     * Mapping to the OFFICIAL syllabus taxonomy. Each entry ties this resource
     * to a specific qualification's topic (and optionally subtopic), because
     * the same concept sits at a different place in each syllabus.
     * Validated against src/data/academic/syllabus-topics.ts at build time.
     */
    syllabusTopics: z.array(z.object({
      qualification: qualificationSlug,
      topic: z.string(),
      subtopic: z.string().optional(),
    })).default([]),
    /** Set when applicability to a qualification is uncertain and needs a human check. */
    reviewNeeded: z.boolean().default(false),
    reviewNote: z.string().optional(),
    description: z.string(),
    author: reference('authors').optional(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().optional(),
    featured: z.boolean().default(false),
    relatedResources: z.array(reference('resources')).default([]),
    relatedArticles: z.array(reference('articles')).default([]),
    ...seoFields,
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: reference('authors'),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'exam-preparation', 'study-skills', 'curriculum-guides',
      'higher-education', 'teaching', 'marlbridge-news',
    ]),
    tags: z.array(z.string()).max(6).default([]),
    subjects: z.array(reference('subjects')).default([]),
    levels: z.array(level).default([]),
    /**
     * Optional academic taxonomy. Deliberately NOT required: general study-skills
     * content should stay general rather than be forced into a board/qualification.
     */
    boards: z.array(boardSlug).default([]),
    qualifications: z.array(qualificationSlug).default([]),
    topics: z.array(z.string()).default([]),
    /** Optional syllabus mapping. General articles legitimately have none. */
    syllabusTopics: z.array(z.object({
      qualification: qualificationSlug,
      topic: z.string(),
      subtopic: z.string().optional(),
    })).default([]),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
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
    image: z.string().optional(),
    credentials: z.array(z.string()).default([]),
    links: z.object({ linkedin: z.string().url().optional(), website: z.string().url().optional() }).default({}),
  }),
});

/**
 * Generic flexible pages (infrastructure for future one-off content pages).
 * The current fixed-nav pages (About, Tutoring, For Schools, Contact) stay
 * as dedicated .astro files because each has a bespoke layout — this
 * collection exists so a future page doesn't need a code change to ship.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ...seoFields,
  }),
});

export const collections = { programs, subjects, resources, articles, authors, pages };
