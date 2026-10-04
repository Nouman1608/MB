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
const level = z.enum(['igcse', 'o-levels', 'a-levels', 'gcse', 'ib', 'ap', 'sat', 'ielts', 'foundation']);
const country = z.enum(['PK', 'AE', 'SA', 'IN', 'GB', 'EU', 'WW']);
/**
 * `countryAvailability` was found (Flagship Dominance/Trust programme,
 * 2026-08-31, D-094) hardcoded to `['PK']` on every one of the 8 program
 * records and as this field's schema default -- contradicting the site's
 * own delivery model (in-person teaching from the Pakistan academy, live
 * online teaching for every other published, priced region -- see
 * src/data/pricing.ts REGION_PRICING, and GlobalVision.astro/About). This
 * field is currently unused by any rendered page or schema.org output
 * (confirmed by search before this fix), so it was a latent, not a live,
 * inconsistency -- but a structurally false fact left in canonical content
 * data will surface a real bug the first time something is wired to it
 * (a badge, a filter, a future areaServed claim). Corrected to `['PK',
 * 'WW']` (Pakistan in person, worldwide online) using only the enum's
 * existing values -- REGION_PRICING's SA/AE/QA/KW/BH/OM/GB/EU split does
 * not map cleanly onto this enum's coarser AE/SA/GB/EU/IN/WW set, and
 * adding new per-region codes here is a separate, larger schema decision
 * this fix does not make.
 */

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    // SEO round (2026-09-15) -- optional long-form H1 for the program page.
    // `title` stays short because it also feeds nav cards, breadcrumbs and
    // the a/an article logic; `heading` lets the page's H1 carry the real
    // search phrase ("Online IB Tutoring — Diploma Programme & MYP").
    heading: z.string().max(90).optional(),
    order: z.number(),
    shortDescription: z.string().max(140),
    description: z.string(),
    level: level,
    ageRange: z.string().optional(),
    curriculum: z.string().optional(),
    subjects: z.array(reference('subjects')).default([]),
    marlbridgeTeaches,
    countryAvailability: z.array(country).default(['PK', 'WW']),
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
     * Publication workflow state. Defaults to 'review-pending'. 'reviewed'
     * means a named subject teacher (`reviewer`) is credited as accountable
     * for the page's accuracy and the page shows "Reviewed by [name]". Since
     * D-379 (owner, 1 Oct 2026) that is NOT a claim that a dated,
     * line-by-line check took place; see the "Academic review policy"
     * section of src/pages/legal/editorial-policy.astro.
     */
    reviewStatus: z.enum(['draft', 'review-pending', 'reviewed', 'changes-requested', 'archived']).default('review-pending'),
    /**
     * Flagship Dominance/Trust programme (2026-08-31, D-092) asserted a
     * blanket, non-attributed "Reviewed by teachers" claim across the
     * whole study-resources library via this field, defaulted true. That
     * blanket claim was RESCINDED by explicit owner decision 2026-09-05
     * (see docs/decision-log.md D-134): no blanket or non-attributed
     * teacher-review claim is made or required for a resource to be
     * published. The field is kept, defaulted false, purely so a future
     * resource can still carry a genuine, specific, documented exception
     * without a schema change -- it is no longer read by the public-facing
     * trust line in src/pages/resources/[slug].astro, which was removed.
     * This is entirely separate from `reviewStatus`/`reviewer`/
     * `reviewedDate` above (the QIGT programme's stricter, per-resource,
     * named-and-accountable reviewer system, enforced by
     * scripts/validate-review-integrity.mjs). That system's "Reviewed by
     * [Name]" line names the accountable subject teacher (D-379); it emits
     * no structured-data property (D-380).
     */
    reviewedByTeachers: z.boolean().default(false),
    /**
     * The date the `reviewer` credit was applied to this page (for most
     * pages, 28 or 29 Sep 2026). Not a record that a review took place on
     * that date, and not shown on the page since D-379. Validated by
     * scripts/validate-review-integrity.mjs never to precede publishedDate
     * and never to be in the future.
     */
    reviewedDate: z.coerce.date().optional(),
    /**
     * D-388 -- a dated specification check by the Marlbridge Academic Team
     * (an organisation profile, not a teacher). Records that the page was
     * checked against its official specification (or, where the full guide is
     * licensed, the board's public course documents) on `date`. It is NOT a
     * teacher review: it never sets or implies `reviewStatus: reviewed`, and
     * the page stays awaiting a "Reviewed by" teacher. Rendered as a separate
     * "Checked by" line only when the page is not genuinely reviewed.
     * Rules in scripts/validate-review-integrity.mjs [11].
     */
    specCheck: z.object({
      by: reference('authors'),
      date: z.coerce.date(),
      scope: z.enum(['official-specification', 'public-course-documents']),
    }).optional(),
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
    /** The date the reviewer credit was applied -- see the matching field on the resources collection above. */
    reviewedDate: z.coerce.date().optional(),
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
    /** D-379 (audit I414) -- where no published listing exists, a plain
     * statement of who confirmed the facts and when (e.g. the owner, in
     * writing). Shown on the profile instead of the listing link. */
    sourceNote: z.string().optional(),
    /** Date this profile's facts were last checked against sourceUrl (or sourceNote). */
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


/**
 * D-286 -- short teaching videos. A video is attached to resources, a
 * syllabus hub and a teacher profile through its own fields, so a future
 * YouTube lesson is connected to the site by adding ONE file here -- no
 * template change. Only `publicationState: published` entries with a real
 * `youtubeId` render anywhere; every public video section stays hidden
 * while none exist. Never invent a recording, a YouTube id or a transcript.
 */
const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string().max(110),
    /** One or two sentences: what the lesson teaches. */
    summary: z.string().max(300),
    teacher: reference('authors'),
    subject: reference('subjects'),
    boards: z.array(boardSlug).default([]),
    qualifications: z.array(qualificationSlug).default([]),
    syllabusCodes: z.array(z.string()).default([]),
    /** Topic slugs from src/data/academic/syllabus-topics.ts. */
    topics: z.array(z.string()).default([]),
    /** The 11-character YouTube video id. Empty until the lesson is actually uploaded. */
    youtubeId: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),
    durationSeconds: z.number().int().positive().optional(),
    uploadDate: z.coerce.date().optional(),
    /** True only when YouTube has human-checked captions for it (not just auto-captions). */
    captionsChecked: z.boolean().default(false),
    /** Where the video appears. */
    relatedResources: z.array(reference('resources')).default([]),
    /** Extra practice to try after watching (internal paths, e.g. /practice/0620/). */
    practiceLinks: z.array(z.object({ label: z.string(), href: z.string().startsWith('/') })).default([]),
    publicationState: z.enum(['draft', 'published']).default('draft'),
  }),
});

/**
 * D-286 -- live revision workshops. Nothing is public unless
 * `publicationState: published`; a draft example lives in
 * src/content/workshops/ to show the format and is never built into the
 * public site (see src/utils/content/workshops.ts for the preview flag).
 * `startsAt` must carry an explicit offset (e.g. 2026-11-07T15:00:00Z or
 * +05:00) so the time is unambiguous.
 */
const workshops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
  schema: z.object({
    title: z.string().max(110),
    summary: z.string().max(300),
    topic: z.string(),
    subject: reference('subjects'),
    boards: z.array(boardSlug).default([]),
    qualifications: z.array(qualificationSlug).default([]),
    syllabusCodes: z.array(z.string()).default([]),
    teacher: reference('authors'),
    startsAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(Z|[+-]\d{2}:\d{2})$/, 'startsAt needs a date, time and explicit offset'),
    durationMinutes: z.number().int().min(15).max(240),
    /** Where it runs, as the student will experience it (e.g. "Online, Google Meet"). */
    format: z.string(),
    audience: z.string(),
    registration: z.object({
      status: z.enum(['open', 'closed', 'full']),
      capacity: z.number().int().positive().optional(),
    }),
    status: z.enum(['scheduled', 'cancelled', 'completed']).default('scheduled'),
    relatedResources: z.array(reference('resources')).default([]),
    /** After the event: a published video entry holding the recording (and its transcript). */
    recording: reference('videos').optional(),
    publicationState: z.enum(['draft', 'published']).default('draft'),
  }),
});

/**
 * Advanced-course (College Board AP) learning library -- one file per resource, in a
 * folder per course: src/content/ap-resources/<course-slug>/<resource>.md. Kept apart
 * from `resources` because AP is not an exam board in the academic matrix, and because
 * the library is unpublished until the trademark question is settled (src/data/ap/config.ts).
 * Every record is checked by scripts/validate-ap-library.mjs against
 * src/data/ap/frameworks.ts (unit/topic numbers) and src/data/ap/sources.ts.
 * Metadata schema: docs/ap-library/metadata-schema.md.
 */
const apResourceType = z.enum([
  'study-guide', 'revision-notes', 'practice-questions', 'worked-solutions',
  'topic-checklist', 'unit-diagnostic', 'unit-review', 'exam-skills',
]);
const apResources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ap-resources' }),
  schema: z.object({
    /** Permanent unique identifier, e.g. "mb-ap-chem-1.1-study-guide". Never reused. */
    resourceId: z.string().regex(/^mb-ap-[a-z0-9.-]+$/),
    title: z.string().max(110),
    /** One or two sentences; also the visible summary. */
    description: z.string().min(70).max(220),
    /** Course slug from src/data/ap/frameworks.ts. */
    course: z.enum([
      'chemistry', 'biology', 'calculus-ab', 'calculus-bc', 'statistics', 'physics-1', 'physics-2',
      'physics-c-mechanics', 'physics-c-electricity-and-magnetism', 'microeconomics', 'macroeconomics',
    ]),
    unit: z.number().int().min(1).max(15),
    /** Official topic numbers covered, e.g. ['1.1']. Empty only for unit/course-level resources. */
    topics: z.array(z.string().regex(/^\d+\.\d+$/)).default([]),
    resourceType: apResourceType,
    /** What the student should already know (plain statements). */
    prerequisites: z.array(z.string()).default([]),
    /** resourceIds of earlier Marlbridge resources to read first. */
    prerequisiteResources: z.array(z.string()).default([]),
    learningObjectives: z.array(z.string()).min(1),
    /** Course practice/skill numbers practised (from frameworks.ts), e.g. ['5', '6']. */
    skills: z.array(z.string()).default([]),
    studyMinutes: z.number().int().min(5).max(240),
    difficulty: z.enum(['foundation', 'core', 'stretch', 'mixed']),
    calculator: z.enum(['none-needed', 'not-permitted', 'four-function', 'scientific', 'graphing', 'mixed']).optional(),
    calculatorNote: z.string().optional(),
    /** Calculus only: whether the material is shared by AB and BC or is BC-only. */
    calculusScope: z.enum(['ab-and-bc', 'bc-only']).optional(),
    /** resourceIds of related Marlbridge resources (validated to exist). */
    related: z.array(z.string()).default([]),
    /** resourceId of the next resource in the suggested sequence, if it exists yet. */
    next: z.string().optional(),
    framework: z.object({ schoolYear: z.literal('2026-27'), examSeries: z.literal('May 2027') }),
    /** Source-register ids (src/data/ap/sources.ts). */
    sources: z.array(z.string()).min(1),
    /** Short answer-first takeaways shown at the top of the page. */
    keyPoints: z.array(z.string()).min(2).max(6),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    version: z.string().regex(/^\d+\.\d+$/),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    /**
     * Editorial workflow. 'drafted' = written by Marlbridge (AI-assisted, academic-team
     * checked), awaiting AP-teacher review. 'reviewed' REQUIRES reviewer + reviewedDate,
     * and those may only be filled in with a real teacher's name and date as supplied.
     */
    editorialStatus: z.enum(['planned', 'drafted', 'in-review', 'reviewed', 'published']),
    reviewer: z.string().optional(),
    reviewedDate: z.coerce.date().optional(),
    /**
     * D-390 -- dated check by the Marlbridge Academic Team (an organisation profile, not a
     * teacher) against the 2026-27 Course and Exam Description: content and terminology
     * compared with the framework, every calculation re-worked, errors corrected. Shown as
     * "Checked by Marlbridge Academic Team" (same meaning as the D-388 line on other
     * resources, editorial policy #specification-check). Never implies a teacher review.
     */
    checkedBy: reference('authors').optional(),
    checkedDate: z.coerce.date().optional(),
    author: reference('authors'),
  }),
});

export const collections = { programs, subjects, resources, articles, authors, pages, videos, workshops, apResources };
