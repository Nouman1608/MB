import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const seoFields = {
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().min(70).max(160).optional(),
  canonical: z.url().optional(),
  noindex: z.boolean().default(false),
};

/**
 * v1.2 WS2: replaces the old single `status` field (available /
 * coming-soon / resources-only), which conflated whether Marlbridge
 * teaches a subject/programme with whether resources are published for it
 * and whether enrolment is open — see src/utils/content/status.ts for the
 * full rationale and the three other facts (awardingBodyOffers,
 * resourcesAvailable, enrolmentOpen) that are derived, never hand-claimed,
 * from that one field plus the academic matrix and the real resource count.
 *   teaching       Marlbridge currently teaches this, with evidence on file.
 *   planned        Not taught yet; a start is planned/expected.
 *   not-teaching   Confirmed not currently taught.
 *   not-confirmed  No sufficient evidence either way — the truthful neutral
 *                  state. Never guess between this and 'teaching'.
 */
const marlbridgeTeaches = z.enum(['teaching', 'planned', 'not-teaching', 'not-confirmed']);
/** Kept in step with src/data/academic/. Validated against the matrix at build time. */
const boardSlug = z.enum(['cambridge', 'edexcel', 'aqa', 'ocr', 'oxfordaqa', 'ib']);
const qualificationSlug = z.enum(['igcse', 'o-level', 'gcse', 'as-level', 'a-level', 'ib-myp', 'ib-dp']);
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
    marlbridgeTeaches,
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
    marlbridgeTeaches,
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
    /** Official syllabus codes this resource is written against, e.g. ['0620','5070']. */
    syllabusCodes: z.array(z.string()).default([]),
    /** Exact examination series, e.g. '2026-2028'. Never mix series silently. */
    syllabusSeries: z.string().optional(),
    /**
     * 9701 only: which stage of a combined "AS & A Level" syllabus this
     * resource actually covers. 9701 is published as one qualification, but
     * AS (topics 1-22) and A Level (topics 23-37) are materially different
     * depth, so a resource must be able to say which one it is without a
     * separate, unapproved 'as-level' qualification combination. Leave unset
     * for 0620/5070 (not staged) or a resource genuinely spanning both
     * stages. Validated against the stage of every syllabusTopics entry the
     * resource declares — see scripts/validate-academic-content.mjs.
     */
    stage: z.enum(['AS', 'A']).optional(),
    /** Set when applicability to a qualification is uncertain and needs a human check. */
    reviewNeeded: z.boolean().default(false),
    reviewNote: z.string().optional(),
    description: z.string(),
    author: reference('authors').optional(),
    /**
     * v1.x WS4 -- the named academic reviewer responsible for verifying
     * this resource's content, distinct from `author` (who wrote it) and
     * from the pre-existing `reviewNeeded`/`reviewNote` pair above (a
     * data-quality flag about qualification applicability, not an
     * academic sign-off). Optional: many resources have no reviewer
     * assigned yet, which is honestly reflected by `reviewStatus` staying
     * 'review-pending' rather than by this field being required.
     */
    reviewer: reference('authors').optional(),
    /**
     * Real publication/review workflow state. Defaults to
     * 'review-pending' -- being assigned a reviewer does NOT mean a
     * review has actually happened; that only becomes 'reviewed' once a
     * human with subject expertise has actually checked the content and
     * the site's editorial policy records that. See docs/decision-log.md
     * D-006 and src/pages/legal/editorial-policy.astro.
     */
    reviewStatus: z.enum(['draft', 'review-pending', 'reviewed', 'changes-requested', 'archived']).default('review-pending'),
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
    reviewer: reference('authors').optional(),
    reviewStatus: z.enum(['draft', 'review-pending', 'reviewed', 'changes-requested', 'archived']).default('review-pending'),
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
    links: z.object({ linkedin: z.url().optional(), website: z.url().optional() }).default({}),
    /**
     * v1.2 WS7 — an author byline is not automatically an individual.
     * "Marlbridge Academic Team" is a team, not a person, and must never
     * be emitted as Schema.org Person (see src/pages/authors/[slug].astro
     * and src/utils/schema/person.ts). Required, no default: every author
     * entry must make this an explicit, reviewed decision rather than
     * silently inheriting a guess.
     */
    entityType: z.enum(['person', 'organization']),
    /**
     * v1.x WS4 -- real faculty support. Subjects/boards/qualifications
     * taught are canonical-slug arrays (validated informally against
     * src/data/academic/subjects.ts and boards.ts by convention; not yet
     * cross-checked by a dedicated validator -- see the v1.x governance
     * backlog). Left empty for entityType: 'organization' entries.
     */
    subjectsTaught: z.array(z.string()).default([]),
    boardsTaught: z.array(z.string()).default([]),
    qualificationsTaught: z.array(z.string()).default([]),
    /** Years of teaching experience, exactly as publicly stated by the
     * source cited in sourceUrl -- never estimated or rounded up. */
    yearsExperience: z.number().optional(),
    /** Schools/institutions previously taught at, exactly as the source
     * states them. Never a claimed academic qualification/degree -- see
     * the header comment on this collection for why those are omitted
     * rather than guessed. */
    previousSchools: z.array(z.string()).default([]),
    /**
     * Where this person's profile information was sourced from, so a
     * reader (or an AI system) can verify it independently rather than
     * take Marlbridge's word for it. Required whenever entityType is
     * 'person' and the profile was populated from an external source
     * rather than written fresh for Marlbridge -- not enforced by Zod
     * (a real employee hired directly for Marlbridge may have no
     * external source), but must be set whenever one exists.
     */
    sourceUrl: z.url().optional(),
    /** Date this profile's facts were last checked against sourceUrl. */
    verifiedOn: z.coerce.date().optional(),
    /**
     * Whether this person is the designated academic reviewer for the
     * subjects in subjectsTaught -- a real, named responsibility, not a
     * decorative badge. Being a reviewer does NOT retroactively mark
     * existing resources as reviewed; see the  field on the
     * resources/articles collections, which stays 'review-pending' until
     * an actual review pass happens.
     */
    isReviewer: z.boolean().default(false),
    /** Publication state, separate from whether the profile exists in the
     * repository at all -- lets a profile be prepared and reviewed before
     * it goes live. */
    publicationState: z.enum(['draft', 'published']).default('published'),
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
