/**
 * MARLBRIDGE v1.x CLOSURE — WS5.
 *
 * Typed, board-specific ASSESSMENT STRUCTURE data: papers/components, their
 * duration, marks and weighting, tiering, and the dates a specification is
 * current for. This did not exist anywhere in the repository before this
 * file -- `src/data/academic/syllabuses.ts` deliberately records only the
 * board's own title/code/summary/URL and explicitly excludes "paper
 * structures, topic lists, assessment weightings" by its own doc comment.
 * A prior coverage report (`docs/reports/academic-coverage-report-v1.2.md`)
 * found `assessmentStatus` was NO_DATA for all 139 rows it scored -- not
 * because assessment structure was unverified for those rows, but because
 * no field or file anywhere modeled it at all. This file is that model.
 *
 * SCOPE (owner-approved, 2026-08-26): this is a bounded first batch, not
 * full coverage of every ACTIVE board+qualification+subject combination in
 * matrix.ts (160 as of this release). Rigorously sourcing assessment
 * structure for all 160 from official specifications in one pass was
 * judged infeasible; the owner approved building the complete typed model
 * and every validator now, for ALL future records, and populating real,
 * officially-sourced records now only for a bounded set (the site's 10
 * named GSC-priority combinations plus a handful chosen for structural
 * diversity -- a tiered qualification, a legacy/current spec transition).
 * Every OTHER active combination is a genuine gap, not a silent one --
 * see NOT_YET_MODELED in scripts/validate-assessments.mjs's own reporting
 * output and docs/decision-log.md D-050 for the full list and rationale.
 * Populating the remainder is future work, explicitly out of this release.
 *
 * SOURCING RULE: every fact below must trace to the awarding body's own
 * published specification (a syllabus PDF or its own "assessment overview"
 * page) -- never a tutoring site, forum, or model memory. `officialSourceUrl`
 * + `verifiedOn` are required on every record for exactly this reason. If a
 * particular number could not be confirmed from an official source, the
 * record is not included here at all rather than guessed -- there is no
 * "estimated" or "approximate" field; this file contains only what could be
 * read directly from the board's own document.
 */
import type { BoardSlug } from './boards.ts';

/**
 * Tiering vocabulary used across every board this file covers. A closed
 * union (not a free string) so an invalid or made-up tier name is a
 * compile-time error, not just a validator finding -- see
 * scripts/validate-assessments.mjs's own runtime check for the same rule,
 * kept as defence in depth for any future non-TypeScript data source.
 */
export type AssessmentTier =
  | 'not-tiered'
  | 'core'
  | 'extended'
  | 'foundation'
  | 'higher'
  | 'first-language'
  | 'second-language'
  | 'as-only'
  | 'a2-only';

export type AssessmentComponentType =
  | 'written-exam'
  | 'multiple-choice'
  | 'coursework'
  | 'non-exam-assessment'
  | 'practical'
  | 'alternative-to-practical'
  | 'practical-endorsement'
  | 'oral'
  | 'speaking'
  | 'listening'
  | 'reading'
  | 'writing'
  | 'portfolio'
  | 'project'
  | 'unit'
  | 'endorsement';

/** v2.0 MEGA PROGRAMME — assessment-model vocabulary (brief §6). Describes
 * HOW the qualification as a whole aggregates its components, not any one
 * component's own type. Optional and populated only where an official
 * source has been explicitly re-checked for this fact -- see each v2.0
 * record's own `notes`. Deliberately left unset on every pre-v2.0 (WS5)
 * record rather than retrofitted by inference; those 14 records were
 * sourced before this field existed and inferring "linear" vs
 * "component-based" from paper counts alone would not be a verified fact,
 * it would be a guess -- exactly what this programme's brief prohibits. */
export type AssessmentModel =
  | 'linear'
  | 'modular'
  | 'staged'
  | 'unit-based'
  | 'component-based'
  | 'mixed';

/** v2.0 — AS/A-level relationship vocabulary (brief §10). Optional;
 * populated only when the official specification explicitly states the
 * relationship. Backfilled onto the pre-v2.0 Cambridge as-only/a2-only
 * records below ONLY because their existing, already-sourced `notes`
 * already state the relevant fact in prose (e.g. "Papers 1-3 alone can
 * instead be certificated as a standalone AS Level") -- this is
 * formalizing an already-verified fact into structured data, not a new
 * unverified claim. */
export type AsALevelRelationship =
  | 'standalone-as'
  | 'as-stage-within-a-level'
  | 'full-a-level-independent'
  | 'modular-as-contributes'
  | 'staged-cambridge-route';

/** v2.0 — whether a component is compulsory or one of a choice (brief
 * §23). 'choose-n-of-m' components must share a `optionGroup` tag and the
 * record's `notes` must state N. Optional; existing `alternativeGroup`
 * already covers the narrower "sit exactly one of two equally-weighted
 * alternatives" case (e.g. Practical Test vs Alternative to Practical) and
 * is unchanged -- this is for the broader option/route case the brief
 * distinguishes in §23 from the alternative-to-practical case in §19. */
export type ComponentOptionality = 'required' | 'optional' | 'choose-n-of-m';

/** 'current' — this is the specification a new student should follow today.
 * 'legacy-teach-out' — superseded by a newer code, but still being taught
 * out to students already partway through; see `finalAssessment`.
 * 'future' — v2.0 addition (brief §11): announced/published but not yet
 * the specification current students follow; distinguished from 'current'
 * so a not-yet-started replacement is never displayed as though it
 * applies today. 'withdrawn' — v2.0 addition: no longer assessable at
 * all (past its finalAssessment series with no further teach-out); kept
 * as a historical record per brief §43, not deleted.
 * Every (board, qualification, subject) with more than one Assessment
 * record whose tiers overlap must have EXACTLY one 'current' record --
 * enforced by scripts/validate-assessments.mjs's legacy/current-collision
 * check, which only counts 'current' (not 'future' or 'withdrawn') so a
 * future or withdrawn record never collides with the live current one. */
export type SpecStatus = 'current' | 'legacy-teach-out' | 'future' | 'withdrawn';

export interface AssessmentComponent {
  /** The board's own paper/component identifier, exactly as published --
   * e.g. "Paper 1", "Component 21", "P1". Must be unique within a single
   * Assessment record's `components` array (per tier, if tiered). */
  readonly paperCode: string;
  /** The board's own title for this paper/component. */
  readonly title: string;
  /** Exam duration in minutes. null for coursework/non-exam-assessment with
   * no fixed sitting duration. Where the board's own document gives a
   * range rather than a fixed figure, the documented midpoint is used and
   * the record's `notes` says so explicitly -- never silently picked. */
  readonly durationMinutes: number | null;
  readonly marks: number;
  /** Percentage of the FINAL qualification grade this component
   * contributes, for the tier it applies to (or overall, if untiered). All
   * components sharing a tier (or all components, if untiered) must sum to
   * 100 within a small rounding tolerance -- see the weighting-totals
   * validator. A component that does not count toward the graded
   * qualification at all (e.g. an optional, separately-endorsed component)
   * is 0, not omitted, so the record stays complete and auditable. */
  readonly weightingPercent: number;
  readonly assessmentType: AssessmentComponentType;
  /** Set only if this component is specific to one tier (e.g. a tiered
   * qualification's Extended-only Paper 4). Omit entirely for an untiered
   * qualification, or for a component every tier sits. */
  readonly tier?: AssessmentTier;
  /** Set when this component is one of two or more the board treats as
   * alternatives -- a candidate sits exactly ONE of the components sharing
   * this tag, never all of them (e.g. Cambridge IGCSE sciences' "Practical
   * Test" vs "Alternative to Practical", both worth 20% -- a candidate
   * takes one or the other, not both). All components sharing an
   * alternativeGroup value within one record must carry identical
   * weightingPercent -- enforced by the weighting-totals validator, which
   * also counts an alternative group only once (not once per member) when
   * summing a tier's total, exactly reflecting that only one is actually
   * sat. */
  readonly alternativeGroup?: string;
  /** v2.0 — the broader "choose one whole route, where a route may be
   * MORE than one component" case alternativeGroup can't express (e.g.
   * Cambridge IGCSE Literature in English 0475: after a compulsory
   * Paper 1, a candidate sits EITHER Paper 2 alone, OR Paper 3 + Paper 4
   * together, OR Paper 3 + Component 5 together -- three routes of equal
   * total weighting, one of which (Paper 3) is shared between two of the
   * routes). Each element names a route this component belongs to; a
   * shared component like Paper 3 above lists every route it appears in.
   * All routes named anywhere in a record must sum their members'
   * weightingPercent to the same total -- enforced by the weighting-
   * totals validator, which (like alternativeGroup) counts only ONE
   * route's total once per record+tier when summing to 100%, exactly
   * reflecting that a candidate completes only one route. A component
   * should carry either alternativeGroup or routeGroup, not both. */
  readonly routeGroup?: readonly string[];
  /** v2.0 (brief §23) — required vs optional/choose-N-of-M component.
   * Omitted means 'required' (the pre-v2.0 default every existing
   * component already assumes). Only set explicitly when a specification
   * offers real route/option choice beyond the narrower alternativeGroup
   * case above. */
  readonly optionality?: ComponentOptionality;
  /** v2.0 (brief §7) — externally marked by the board vs internally
   * assessed by the centre. Optional; only recorded where the official
   * specification states it explicitly. */
  readonly externallyAssessed?: boolean;
  readonly internallyAssessed?: boolean;
  readonly externallyModerated?: boolean;
  /** v2.0 (brief §22) — calculator/formula-support facts, only recorded
   * where the specification explicitly states them. */
  readonly calculatorAllowed?: boolean;
  readonly formulaSheetProvided?: boolean;
  readonly dataBookletProvided?: boolean;
}

export interface Assessment {
  readonly boardSlug: BoardSlug;
  /** Must match a real qualificationSlug used in matrix.ts/syllabuses.ts
   * for this board (e.g. 'igcse', 'o-level', 'a-level', 'gcse'). */
  readonly qualificationSlug: string;
  /** Must match a real subjectSlug used in matrix.ts/syllabuses.ts. */
  readonly subjectSlug: string;
  /** The specification code. Must appear in the corresponding
   * `syllabuses.ts` entry's `code` field for this board+qualification+
   * subject (that entry's code may be a compound string like "9625 / 9725"
   * during a transition -- this record's code must be one of those, not an
   * invented third code) -- enforced by the spec-code-mismatch check. */
  readonly code: string;
  readonly specStatus: SpecStatus;
  /** For a 'legacy-teach-out' record: the code of the record replacing it.
   * For a 'current' record that is itself a replacement: the code of the
   * legacy spec it replaced. Both directions recorded so the transition is
   * discoverable from either record. */
  readonly relatedCode?: string;
  /** ['not-tiered'] for an untiered qualification. Otherwise every tier
   * this specification actually offers -- each must appear on at least one
   * component below. */
  readonly tiers: readonly AssessmentTier[];
  /** Omitted (not guessed) when the board's own document states only the
   * examination-series window (e.g. "for exams 2025, 2026 and 2027")
   * rather than a distinct first-teaching date -- Cambridge and OxfordAQA
   * both publish syllabuses this way; OCR publishes an explicit first-teach
   * date and it is recorded here when the board states one. */
  readonly firstTeaching?: string;
  readonly firstAssessment: string;
  /** Set only for a legacy-teach-out record: the last exam series this
   * specification will be assessed in. */
  readonly finalAssessment?: string;
  readonly components: readonly AssessmentComponent[];
  readonly officialSourceUrl: string;
  readonly verifiedOn: string;
  readonly notes?: string;
  /** v2.0 (brief §6) — how the qualification as a whole aggregates its
   * components. Optional; see the AssessmentModel type doc for why this is
   * deliberately unset on every pre-v2.0 record. */
  readonly assessmentModel?: AssessmentModel;
  /** v2.0 (brief §10). Optional; see the AsALevelRelationship type doc. */
  readonly asALevelRelationship?: AsALevelRelationship;
  /** v2.0 (brief §11) — the date this record stops being assessable at
   * all (distinct from `finalAssessment`, which is the last SERIES it is
   * assessed in -- withdrawalDate is typically shortly after that series'
   * results are issued). Optional; only set once officially confirmed. */
  readonly withdrawalDate?: string;
  /** v2.0 (brief §6) — free-text summary of resit rules, only recorded
   * where the specification explicitly states them (e.g. "AS units may be
   * resat once; the better result counts"). Never invented. */
  readonly resitPolicySummary?: string;
  /** v2.0 (brief §6, §10) — free-text notes on how this qualification is
   * certificated (e.g. "AS is certificated separately from the full A
   * Level" or "no separate AS certification is offered for this route"),
   * distinct from the general `notes` field above which may cover other
   * sourcing/structural detail. Optional. */
  readonly certificationNotes?: string;
}

export const ASSESSMENTS: readonly Assessment[] = [
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'mathematics',
    code: '0580',
    specStatus: 'current',
    tiers: ['core', 'extended'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Non-calculator (Core)', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core' },
      { paperCode: 'Paper 3', title: 'Calculator (Core)', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core' },
      { paperCode: 'Paper 2', title: 'Non-calculator (Extended)', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended' },
      { paperCode: 'Paper 4', title: 'Calculator (Extended)', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Core candidates (Papers 1&3) are eligible for grades C-G; Extended candidates (Papers 2&4) for A*-E. Directly confirmed against the official PDF: Paper 1/3 each 1h30, 80 marks, 50%; Paper 2/4 each 2h, 100 marks, 50%. Cambridge states only the examination-year window (2025-2027), not a separate first-teaching date.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    code: '0620',
    specStatus: 'current',
    tiers: ['core', 'extended'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice (Core)', durationMinutes: 45, marks: 40, weightingPercent: 30, assessmentType: 'written-exam', tier: 'core' },
      { paperCode: 'Paper 3', title: 'Theory (Core)', durationMinutes: 75, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core' },
      { paperCode: 'Paper 2', title: 'Multiple Choice (Extended)', durationMinutes: 45, marks: 40, weightingPercent: 30, assessmentType: 'written-exam', tier: 'extended' },
      { paperCode: 'Paper 4', title: 'Theory (Extended)', durationMinutes: 75, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended' },
      { paperCode: 'Paper 5', title: 'Practical Test', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'practical', alternativeGroup: 'practical' },
      { paperCode: 'Paper 6', title: 'Alternative to Practical', durationMinutes: 60, marks: 40, weightingPercent: 20, assessmentType: 'written-exam', alternativeGroup: 'practical' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697205-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'A candidate of either tier sits ONE of Paper 5 (Practical Test) or Paper 6 (Alternative to Practical), not both -- both worth 20%, hence alternativeGroup. No explicit first-teaching date is published by Cambridge for this syllabus.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'biology',
    code: '0610',
    specStatus: 'current',
    tiers: ['core', 'extended'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice (Core)', durationMinutes: 45, marks: 40, weightingPercent: 30, assessmentType: 'written-exam', tier: 'core' },
      { paperCode: 'Paper 3', title: 'Theory (Core)', durationMinutes: 75, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core' },
      { paperCode: 'Paper 2', title: 'Multiple Choice (Extended)', durationMinutes: 45, marks: 40, weightingPercent: 30, assessmentType: 'written-exam', tier: 'extended' },
      { paperCode: 'Paper 4', title: 'Theory (Extended)', durationMinutes: 75, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended' },
      { paperCode: 'Paper 5', title: 'Practical Test', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'practical', alternativeGroup: 'practical' },
      { paperCode: 'Paper 6', title: 'Alternative to Practical', durationMinutes: 60, marks: 40, weightingPercent: 20, assessmentType: 'written-exam', alternativeGroup: 'practical' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697203-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Same structure as IGCSE Chemistry 0620: Paper 5 or 6 is a single alternative choice common to both tiers. No explicit first-teaching date is published by Cambridge for this syllabus.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    code: '9701',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 75, marks: 40, weightingPercent: 15.5, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'AS Level Structured Questions', durationMinutes: 75, marks: 60, weightingPercent: 23, assessmentType: 'written-exam' },
      { paperCode: 'Paper 3', title: 'Advanced Practical Skills', durationMinutes: 120, marks: 40, weightingPercent: 11.5, assessmentType: 'practical' },
      { paperCode: 'Paper 4', title: 'A Level Structured Questions', durationMinutes: 120, marks: 100, weightingPercent: 38.5, assessmentType: 'written-exam' },
      { paperCode: 'Paper 5', title: 'Planning, Analysis and Evaluation', durationMinutes: 75, marks: 30, weightingPercent: 11.5, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Weightings shown are % of the full A Level (Papers 1-5, sum 100%). Papers 1-3 alone can instead be certificated as a standalone AS Level (weighted 31%/46%/23% of the AS Level in that route, not modeled as a separate record here). A newer 2028-2030 syllabus edition has also been published for future cohorts, not modeled here.',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'AS Level (Papers 1-3) can be certificated on its own as a standalone Cambridge International AS Level, OR a candidate can continue to Papers 4-5 for the full A Level -- both routes officially recognised, per the syllabus\'s own staged-assessment structure.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    code: '9702',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 75, marks: 40, weightingPercent: 15.5, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'AS Level Structured Questions', durationMinutes: 75, marks: 60, weightingPercent: 23, assessmentType: 'written-exam' },
      { paperCode: 'Paper 3', title: 'Advanced Practical Skills', durationMinutes: 120, marks: 40, weightingPercent: 11.5, assessmentType: 'practical' },
      { paperCode: 'Paper 4', title: 'A Level Structured Questions', durationMinutes: 120, marks: 100, weightingPercent: 38.5, assessmentType: 'written-exam' },
      { paperCode: 'Paper 5', title: 'Planning, Analysis and Evaluation', durationMinutes: 75, marks: 30, weightingPercent: 11.5, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664565-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Structurally identical scheme to Chemistry 9701 -- weightings are % of the full A Level; the AS-only standalone route weights Papers 1-3 at 31%/46%/23% of the AS Level instead (not modeled as a separate record here).',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'AS Level (Papers 1-3) can be certificated on its own, OR a candidate can continue to Papers 4-5 for the full A Level -- same staged structure as Cambridge 9701 Chemistry.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    code: '9708',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'AS Level Multiple Choice', durationMinutes: 60, marks: 30, weightingPercent: 17, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'AS Level Data Response and Essays', durationMinutes: 120, marks: 60, weightingPercent: 33, assessmentType: 'written-exam' },
      { paperCode: 'Paper 3', title: 'A Level Multiple Choice', durationMinutes: 75, marks: 30, weightingPercent: 17, assessmentType: 'written-exam' },
      { paperCode: 'Paper 4', title: 'A Level Data Response and Essays', durationMinutes: 120, marks: 60, weightingPercent: 33, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697423-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Weightings are % of the full A Level (Papers 1-4, sum 100%). Papers 1-2 alone certificate as a standalone AS Level, weighted 33%/67% of the AS Level instead (not modeled as a separate record here).',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'AS Level (Papers 1-2) can be certificated on its own, OR a candidate can continue to Papers 3-4 for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-literature',
    code: '9695',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2024',
    components: [
      { paperCode: 'Paper 1', title: 'Drama and Poetry', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'Prose and Unseen', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'written-exam' },
      { paperCode: 'Paper 3', title: 'Shakespeare and Drama', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'written-exam' },
      { paperCode: 'Paper 4', title: 'Pre- and Post-1900 Poetry and Prose', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/636097-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Weightings are % of the full A Level (Papers 1-4, sum 100%). Papers 1-2 alone certificate as a standalone AS Level, each weighted 50% of the AS Level instead (not modeled as a separate record here). A newer 2027-2028 edition has also been published for future cohorts, not modeled here.',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'AS Level (Papers 1-2) can be certificated on its own, OR a candidate can continue to Papers 3-4 for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'islamiyat',
    code: '0493',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: "The Qur'an and the Prophet", durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'Hadith and Islamic History', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697174-2026-2027-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: "Both papers compulsory (grades A*-G), 1h30 each, 50 marks each. The syllabus does not print an explicit % weighting per paper; the 50/50 split is a direct arithmetic consequence of two compulsory papers each carrying an equal 50 of 100 total marks, not an estimate. Paper titles here are a descriptive summary of each paper's content (Paper 1: Qur'an/Prophet/first Islamic community; Paper 2: Hadith/Caliphs/Articles of Faith) -- the syllabus itself labels them only 'Paper 1' and 'Paper 2'. Answers given in English.",
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'urdu-language',
    code: '0539',
    specStatus: 'current',
    tiers: ['second-language'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Reading and Writing', durationMinutes: 120, marks: 60, weightingPercent: 67, assessmentType: 'written-exam', tier: 'second-language' },
      { paperCode: 'Paper 2', title: 'Listening', durationMinutes: 40, marks: 30, weightingPercent: 33, assessmentType: 'written-exam', tier: 'second-language' },
      { paperCode: 'Component 5', title: 'Speaking (optional, separately endorsed)', durationMinutes: 11, marks: 60, weightingPercent: 0, assessmentType: 'oral', tier: 'second-language' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664633-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Cambridge IGCSE Urdu as a Second Language. Component 5 Speaking is OPTIONAL and internally-assessed/externally-moderated -- it does NOT contribute to the overall IGCSE grade (separately endorsed 1-5), hence weightingPercent 0 rather than omitted. Its duration is officially "approximately 10-12 minutes" (11 used as the documented midpoint) and Paper 2\'s is "approximately 35-45 minutes" (40 used as the midpoint) -- both stated as ranges in the source, not fixed figures.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'urdu-language',
    code: '3247',
    specStatus: 'current',
    tiers: ['first-language'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Reading and Writing', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', tier: 'first-language' },
      { paperCode: 'Paper 2', title: 'Texts', durationMinutes: 120, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', tier: 'first-language' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664479-2025-2026-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Cambridge O Level Urdu -- First Language, for candidates with Urdu as their mother tongue; grades A*-E only (no G). All questions answered in Urdu. June series only.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'urdu-language',
    code: '3248',
    specStatus: 'current',
    tiers: ['second-language'],
    firstAssessment: '2024',
    components: [
      { paperCode: 'Paper 1', title: 'Reading and Writing', durationMinutes: 105, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', tier: 'second-language' },
      { paperCode: 'Paper 2', title: 'Grammar, Writing and Translation', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', tier: 'second-language' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/634455-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Cambridge O Level Urdu -- Second Language, for learners with Urdu as an additional language; grades A*-E. All answers given in Urdu; dictionaries not permitted. Coexists with 3247 (First Language, tier "first-language") under the same board+qualification+subject -- these are two genuinely distinct, simultaneously current specifications distinguished by tier, not a legacy/current pair.',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'pakistan-studies',
    code: '9236',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'The History and Culture of Pakistan', durationMinutes: 90, marks: 77, weightingPercent: 50, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'The Human and Physical Geography of Pakistan', durationMinutes: 90, marks: 77, weightingPercent: 50, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/wp-content/uploads/2024/03/oxfordaqa-international-gcse-pakistan-studies-specification.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Specification (Version 1.9), for International GCSE exams May/June 2026 onwards -- no separate first-teaching date is stated in the document. Each paper: written exam, 1h30, 77 marks, 50% of GCSE, with three sections (two compulsory topics + one choice of two optional topics) worth 28/28/21 raw marks.',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: 'H431',
    specStatus: 'legacy-teach-out',
    relatedCode: 'H436',
    tiers: ['not-tiered'],
    firstTeaching: '2015-09',
    firstAssessment: '2017',
    finalAssessment: '2027',
    components: [
      { paperCode: 'H431/01', title: 'Operating in a Local Business Environment', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: 'H431/02', title: 'The UK Business Environment', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: 'H431/03', title: 'The Global Business Environment', durationMinutes: 120, marks: 80, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/170837-specification-accredited-a-level-gce-business-h431.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Being withdrawn: OCR confirms H431 has its final first teach in September 2025 and its final assessment opportunity is Summer 2027; resits after that move to H436. Each component: 2h written paper, 80 marks. The spec\'s own "at a glance" table prints each component as "33.33% of total" (all three, not summing to exactly 100 on paper); the third component here is recorded as 33.34% so the typed record sums to exactly 100%, consistent with the spec\'s own detailed weighting-grid page which prints 25%/25%/25%/25% = 100% against the assessment objectives. Papers 01 and 03 carry synoptic assessment.',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: 'H436',
    specStatus: 'current',
    relatedCode: 'H431',
    tiers: ['not-tiered'],
    firstTeaching: '2026-09',
    firstAssessment: '2028',
    components: [
      { paperCode: 'H436/01', title: 'Business Activity, Marketing and People', durationMinutes: 120, marks: 90, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: 'H436/02', title: 'Operations, Finance and External Influences', durationMinutes: 120, marks: 90, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: 'H436/03', title: 'Strategy, Risk and Managing Change', durationMinutes: 120, marks: 90, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/716172-specification-accredited-a-level-gce-business-h436.pdf',
    verifiedOn: '2026-08-26',
    notes: 'Replaces H431 (see relatedCode). Specification states "for first teaching in 2026" and "for first assessment in 2028". Each component weighted "33.3%"/"33⅓%" per the spec\'s own rounded figures -- recorded here as 33.33/33.33/33.34 so the typed total is exactly 100%, not an invented split. Component 01 and 03 include quality-of-extended-response marks; component 03 is synoptic.',
  },
  // -- v2.0 MEGA PROGRAMME WS4: Cambridge International, batch 1 of N. --
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'chemistry',
    code: '5070',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 60, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Theory', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Practical Test', durationMinutes: 90, marks: 40, weightingPercent: 20, assessmentType: 'practical', alternativeGroup: 'practical', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Alternative to Practical', durationMinutes: 60, marks: 40, weightingPercent: 20, assessmentType: 'alternative-to-practical', alternativeGroup: 'practical', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697326-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Multiple Choice 1h/40 marks/30%; Paper 2 Theory 1h45/80 marks/50%; all candidates also take one practical component, a choice of Paper 3 Practical Test (1h30/40 marks/20%) OR Paper 4 Alternative to Practical (1h/40 marks/20%), both externally assessed. Cambridge states only the examination-series window (2026-2028, June and November series), not a separate first-teaching date.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'physics',
    code: '5054',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 60, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Theory', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Practical Test', durationMinutes: 90, marks: 40, weightingPercent: 20, assessmentType: 'practical', alternativeGroup: 'practical', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Alternative to Practical', durationMinutes: 60, marks: 40, weightingPercent: 20, assessmentType: 'alternative-to-practical', alternativeGroup: 'practical', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697324-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Same structure as O Level Chemistry 5070, directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Multiple Choice 1h/40 marks/30%; Paper 2 Theory 1h45/80 marks/50%; practical component is a choice of Paper 3 Practical Test (1h30/40 marks/20%) OR Paper 4 Alternative to Practical (1h/40 marks/20%), both externally assessed. Examination-series window 2026-2028 (June and November series); no separate first-teaching date published.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'mathematics',
    code: '4024',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Non-calculator', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Calculator', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/662480-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Non-calculator, 2h/100 marks/50%, use of a calculator not allowed; Paper 2 Calculator, 2h/100 marks/50%, a scientific calculator is required. Both externally assessed, not tiered. Examination-series window 2025-2027 (June and November series); no separate first-teaching date published.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    code: '9709',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Pure Mathematics 1', durationMinutes: 110, marks: 75, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Pure Mathematics 2', durationMinutes: 75, marks: 50, weightingPercent: 0, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'optional' },
      { paperCode: 'Paper 3', title: 'Pure Mathematics 3', durationMinutes: 110, marks: 75, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Mechanics', durationMinutes: 75, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true, alternativeGroup: 'a-level-applied-component', optionality: 'choose-n-of-m' },
      { paperCode: 'Paper 5', title: 'Probability & Statistics 1', durationMinutes: 75, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 6', title: 'Probability & Statistics 2', durationMinutes: 75, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true, alternativeGroup: 'a-level-applied-component', optionality: 'choose-n-of-m' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'A genuinely route-based specification, per the official PDF\'s "Structure of AS Level and A Level Mathematics" table (Syllabus overview, pp.14-16). Full A Level is always Paper 1 + Paper 3 (both compulsory, 30%+30%=60%) + Paper 5 Probability & Statistics 1 (compulsory, 20%) + EITHER Paper 4 Mechanics OR Paper 6 Probability & Statistics 2 (each 20%, mutually exclusive -- Paper 6 cannot be combined with Paper 4 because it depends on Paper 5 content) -- modeled here via alternativeGroup so the total is exactly 100%. Paper 2 Pure Mathematics 2 does NOT count toward the A Level at all (weightingPercent 0 here) -- it exists only for the separate standalone "AS Level, Pure Mathematics only" route (Paper 1 + Paper 2, weighted 60%/40% of THAT AS Level, which the syllabus states explicitly cannot be carried forward into the full A Level). AS Level (the staged first half) is instead Paper 1 + ONE of {Paper 2, Paper 4, Paper 5}, each weighted 60% (Paper 1) / 40% (the second paper) of the AS Level -- not separately modeled as distinct AS-only weightings here; see the PDF\'s own table for the exact AS-route figures. Durations/marks per paper (all externally assessed written exams): Paper 1 1h50/75 marks, Paper 2 1h15/50 marks, Paper 3 1h50/75 marks, Papers 4-6 each 1h15/50 marks. Examination-series window 2026-2027 (June, November, and March-in-India series); no separate first-teaching date published.',
    assessmentModel: 'component-based',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Two of the three AS Level routes (Pure+Mechanics via Papers 1+4, or Pure+Probability&Statistics via Papers 1+5) carry forward into the full A Level by adding Paper 3 plus the complementary applied paper. The third AS route ("Pure Mathematics only", Papers 1+2) is certificated as a standalone AS Level and explicitly CANNOT be carried forward to complete the A Level, per the syllabus\'s own statement.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'islamiyat',
    code: '2058',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'The Qur\'an, the Prophet Muhammad (pbuh) and the first Islamic community', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'The Hadiths, the Rightly Guided Caliphs and the Articles of Faith and Pillars of Islam', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697279-2026-2027-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Syllabus overview, p.8-9): both candidates must take Paper 1 and Paper 2, each 1.5 hours / 50 marks (five questions, Question 1 and Question 2 compulsory plus two more chosen), no explicit percentage stated by the board but the two equal-mark papers are therefore 50%/50% of the total. Both externally assessed, not tiered, answered in English. The syllabus PDF previously cited in syllabuses.ts (635787, window 2024-2025) had lapsed; this record and syllabuses.ts were both corrected to the current 2026-2027 edition (697279) in the same commit. Examination-series window 2026-2027 (June and November series); no separate first-teaching date published.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'pakistan-studies',
    code: '2059',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'The history and culture of Pakistan', durationMinutes: 90, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'The environment of Pakistan', durationMinutes: 90, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697282-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment at a glance, p.9-10): Paper 1 (Section A 25 marks compulsory source-based question, Section B 50 marks -- two of four essay-style questions) and Paper 2 (three of five questions, 25 marks each), each 1h30/75 marks/50%, both externally assessed, all answers in English. Same structure (paper titles, timing, mark split) as Cambridge IGCSE Pakistan Studies 0448, independently confirmed from this record\'s own source PDF rather than assumed. This subject is published as a single-year syllabus edition (2026); Cambridge has also published later single-year (2027) and bundled (2028-2030) editions, not modeled here. Examination-series window 2026 (June and November series); no separate first-teaching date published.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'pakistan-studies',
    code: '0448',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'The history and culture of Pakistan', durationMinutes: 90, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'The environment of Pakistan', durationMinutes: 90, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697142-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF: Paper 1 The history and culture of Pakistan (Section A 25 marks compulsory source-based question, Section B 50 marks) and Paper 2 The environment of Pakistan (three of five questions, 25 marks each), each 1h30/75 marks/50%, both externally assessed. Identical structure to Cambridge O Level Pakistan Studies 2059, independently confirmed from this record\'s own source PDF. This syllabus is examined in the June series only (no November series for this IGCSE variant). Examination-series window 2026; no separate first-teaching date published.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'geography',
    code: '0460',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Geographical Themes', durationMinutes: 105, marks: 75, weightingPercent: 45, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Geographical Skills', durationMinutes: 90, marks: 60, weightingPercent: 27.5, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Component 3', title: 'Coursework', durationMinutes: null, marks: 60, weightingPercent: 27.5, assessmentType: 'coursework', alternativeGroup: 'coursework-or-alternative', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 4', title: 'Alternative to Coursework', durationMinutes: 90, marks: 60, weightingPercent: 27.5, assessmentType: 'alternative-to-practical', alternativeGroup: 'coursework-or-alternative', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664610-2025-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): all candidates take Paper 1 Geographical Themes (1h45, 75 raw marks weighted to 100, 45%) and Paper 2 Geographical Skills (1h30, 60 marks, 27.5%), plus EITHER Component 3 Coursework (centre-based, one assignment up to 2000 words, 60 marks, 27.5%, internally assessed and externally moderated) OR Paper 4 Alternative to Coursework (1h30, 60 marks, 27.5%, externally assessed) -- modeled here via alternativeGroup. Paper 1\'s raw 75 marks are explicitly stated by the board as "weighted to 100 marks"; this record uses the board\'s own 45% final weighting rather than re-deriving it. Examination-series window 2025-2026 (June and November series); no separate first-teaching date published.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'geography',
    code: '2217',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Geographical Themes', durationMinutes: 105, marks: 75, weightingPercent: 45, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Geographical Skills', durationMinutes: 90, marks: 60, weightingPercent: 27.5, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Geographical Investigations', durationMinutes: 90, marks: 60, weightingPercent: 27.5, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697292-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Geographical Themes (1h45, 75 raw marks weighted to 100, 45%, three questions one per section), Paper 2 Geographical Skills (1h30, 60 marks, 27.5%, all questions answered), Paper 3 Geographical Investigations (1h30, 60 marks, 27.5%, two compulsory questions) -- all three compulsory and externally assessed, unlike the IGCSE variant (0460) which offers a coursework alternative. This syllabus is examined in the November series only (no June series for this O Level variant). Examination-series window 2026; no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'geography',
    code: '9696',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Core Physical Geography', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam' },
      { paperCode: 'Paper 2', title: 'Core Human Geography', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam' },
      { paperCode: 'Paper 3', title: 'Advanced Physical Geography Options', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam' },
      { paperCode: 'Paper 4', title: 'Advanced Human Geography Options', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664556-2025-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF\'s "Component/Weighting" table (Syllabus overview, p.13): Papers 1-4 each 1h30/60 marks, weighted 25% each of the full A Level (Papers 1+2 are 50% each of the AS Level route instead, not separately modeled here -- see the board\'s own table for exact AS-route figures). Unlike every other record in this file, this PDF does not use the phrase "Externally assessed" anywhere for any component, so externallyAssessed is deliberately left unset here rather than inferred. A Level candidates follow a staged route: Papers 1+2 (AS Level) in one series, then Papers 3+4 (completing the A Level) in a later series.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Geography (Papers 1+2) can be a standalone qualification, or the first half of the full A Level, which is completed by adding Papers 3+4 in a later series.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'sociology',
    code: '0495',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Research Methods, Identity and Inequality', durationMinutes: 120, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Family, Education and Crime', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/662464-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Research Methods, Identity and Inequality (2h, 80 marks, 50% -- compulsory Q1 plus a choice of Q2 or Q3) and Paper 2 Family, Education and Crime (1h45, 80 marks, 50% -- two of three optional questions), both externally assessed, not tiered. Examination-series window 2025-2027 (June and November series); no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'sociology',
    code: '2251',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Research Methods, Identity and Inequality', durationMinutes: 120, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Family, Education and Crime', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/662478-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF: identical paper titles, timing and weighting to Cambridge IGCSE Sociology 0495 (Paper 1 2h/80marks/50%, Paper 2 1h45/80marks/50%, both externally assessed), independently re-confirmed from this record\'s own source PDF rather than copied across records. Examination-series window 2025-2027 (June and November series); no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'world-history',
    code: '0470',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2024',
    components: [
      { paperCode: 'Paper 1', title: 'Structured Questions', durationMinutes: 120, marks: 60, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Document Questions', durationMinutes: 105, marks: 40, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Component 3', title: 'Coursework', durationMinutes: null, marks: 40, weightingPercent: 30, assessmentType: 'coursework', alternativeGroup: 'coursework-or-alternative', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 4', title: 'Alternative to Coursework', durationMinutes: 60, marks: 40, weightingPercent: 30, assessmentType: 'alternative-to-practical', alternativeGroup: 'coursework-or-alternative', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/649636-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): all candidates take Paper 1 Structured Questions (2h, 60 marks, 40%, two Core-content questions plus one Depth-study question) and Paper 2 Document Questions (1h45, 40 marks, 30%), plus EITHER Component 3 Coursework (one piece of extended writing, 40 marks, 30%, internally assessed and externally moderated) OR Paper 4 Alternative to Coursework (1h, 40 marks, 30%, externally assessed) -- modeled via alternativeGroup, same coursework-choice pattern as Geography 0460. Cambridge has since published a later 2027-2028 edition (721455) not modeled here; this record is the current one for the 2026 series. Examination-series window 2024-2026 (June, November, and March-in-India series); no separate first-teaching date published.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'world-history',
    code: '2147',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2024',
    components: [
      { paperCode: 'Paper 1', title: 'Structured Questions', durationMinutes: 120, marks: 60, weightingPercent: 55, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Document Questions', durationMinutes: 105, marks: 40, weightingPercent: 45, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/649640-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Structured Questions (2h, 60 marks, 55%, two Core-content questions plus one Depth-study question) and Paper 2 Document Questions (1h45, 40 marks, 45%), both externally assessed. No coursework option at O Level, unlike the IGCSE variant (0470) -- structurally simpler, two compulsory papers only, and a different weighting split (55/45 rather than 40/30/30). A later 2027-2028 edition (721455) has also been published, not modeled here. Examination-series window 2024-2026 (June and November series); no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'world-history',
    code: '9489',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Document question', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Outline study', durationMinutes: 105, marks: 60, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Interpretations question', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Depth study', durationMinutes: 105, marks: 60, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697368-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.11): Paper 1 Document question (1h15/40 marks, 40% of AS / 20% of A Level) and Paper 2 Outline study (1h45/60 marks, 60% of AS / 30% of A Level) form the AS Level; Paper 3 Interpretations question (1h15/40 marks, 20% of A Level only) and Paper 4 Depth study (1h45/60 marks, 30% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (20+30+20+30=100); AS-only route uses the separate 40%/60% figures instead (not modeled as a distinct record). All four papers externally assessed. AS Level topics for Papers 1 and 2 rotate year-on-year per the syllabus\'s own rotation table (section 4).',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level History (Papers 1+2) can be a standalone qualification, or the first half of the full A Level, completed by adding Papers 3+4 (candidates may select any of the three Paper 3/4 options independent of their Paper 1/2 choice).',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'accounting',
    code: '0452',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 75, marks: 35, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2', title: 'Structured Written Paper', durationMinutes: 105, marks: 100, weightingPercent: 70, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697149-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9, and Details of the assessment, p.20): Paper 1 Multiple Choice (1h15, 35 marks, 30%, all 35 questions answered) and Paper 2 Structured Written Paper (1h45, 100 marks, 70%, five 20-mark questions), both externally assessed, calculators permitted in both. This is a single-year syllabus edition (2026), not tiered. Examination-series window 2026 (June, November, and March-in-India series); no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'accounting',
    code: '9706',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 60, marks: 30, weightingPercent: 14, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Fundamentals of Accounting', durationMinutes: 105, marks: 90, weightingPercent: 36, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Financial Accounting', durationMinutes: 90, marks: 75, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Cost and Management Accounting', durationMinutes: 60, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697417-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" table (Syllabus overview, p.10): Paper 1 Multiple Choice (1h/30 marks, 28% of AS / 14% of A Level) and Paper 2 Fundamentals of Accounting (1h45/90 marks, 72% of AS / 36% of A Level) form the AS Level; Paper 3 Financial Accounting (1h30/75 marks, 30% of A Level only) and Paper 4 Cost and Management Accounting (1h/50 marks, 20% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (14+36+30+20=100); the AS-only route uses the separate 28%/72% figures instead, not modeled as a distinct record. All four papers externally assessed.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Accounting (Papers 1+2) can be a standalone qualification, or the first half of the full A Level, completed by adding Papers 3+4 in a later series.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    code: '9700',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 75, marks: 40, weightingPercent: 15.5, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'AS Level Structured Questions', durationMinutes: 75, marks: 60, weightingPercent: 23, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Advanced Practical Skills', durationMinutes: 120, marks: 40, weightingPercent: 11.5, assessmentType: 'practical', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'A Level Structured Questions', durationMinutes: 120, marks: 100, weightingPercent: 38.5, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 5', title: 'Planning, Analysis and Evaluation', durationMinutes: 75, marks: 30, weightingPercent: 11.5, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664560-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Structurally identical scheme to Cambridge 9701 Chemistry and 9702 Physics already in this file -- independently re-confirmed from Biology\'s own source PDF (Assessment overview, p.10): same five-paper structure, durations, marks and weighting (15.5%/23%/11.5%/38.5%/11.5% of the full A Level, summing to 100%). Papers 1-3 alone can instead be certificated as a standalone AS Level (weighted 31%/46%/23% of the AS Level in that route, not modeled as a separate record here). All five papers externally assessed.',
    assessmentModel: 'component-based',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'AS Level (Papers 1-3) can be certificated on its own as a standalone Cambridge International AS Level, OR a candidate can continue to Papers 4-5 for the full A Level -- same staged structure as Cambridge 9701 Chemistry and 9702 Physics.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'biology',
    code: '5090',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 60, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Theory', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Practical Test', durationMinutes: 90, marks: 40, weightingPercent: 20, assessmentType: 'practical', alternativeGroup: 'practical', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Alternative to Practical', durationMinutes: 60, marks: 40, weightingPercent: 20, assessmentType: 'alternative-to-practical', alternativeGroup: 'practical', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697330-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Same structure as O Level Chemistry 5070 and Physics 5054, independently re-confirmed from Biology\'s own source PDF (Assessment overview, p.9): Paper 1 Multiple Choice 1h/40 marks/30%; Paper 2 Theory 1h45/80 marks/50%; practical component is a choice of Paper 3 Practical Test (1h30/40 marks/20%) OR Paper 4 Alternative to Practical (1h/40 marks/20%), both externally assessed. Examination-series window 2026-2028 (June and November series); no separate first-teaching date published.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'business',
    code: '0450',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Short Answer and Data Response', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Case Study', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697146-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Short Answer and Data Response (1h30, 80 marks, 50%, four questions) and Paper 2 Case Study (1h30, 80 marks, 50%, four questions based on a case-study insert), both externally assessed, all questions compulsory. This is a single-year syllabus edition (2026), not tiered. Examination-series window 2026 (June, November, and March-in-India series); no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: '9609',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Business Concepts 1', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Business Concepts 2', durationMinutes: 90, marks: 60, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Business Decision-Making', durationMinutes: 105, marks: 60, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Business Strategy', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697371-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" table (Syllabus overview, p.10): Paper 1 Business Concepts 1 (1h15/40 marks, 40% of AS / 20% of A Level) and Paper 2 Business Concepts 2 (1h30/60 marks, 60% of AS / 30% of A Level) form the AS Level; Paper 3 Business Decision-Making (1h45/60 marks, 30% of A Level only) and Paper 4 Business Strategy (1h15/40 marks, 20% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (20+30+30+20=100); the AS-only route uses the separate 40%/60% figures instead, not modeled as a distinct record. All four papers externally assessed.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Business (Papers 1+2) can be a standalone qualification, or the first half of the full A Level, completed by adding Papers 3+4 in a later series.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'physics',
    code: '0625',
    specStatus: 'current',
    tiers: ['core', 'extended'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice (Core)', durationMinutes: 45, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', tier: 'core', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Theory (Core)', durationMinutes: 75, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Multiple Choice (Extended)', durationMinutes: 45, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', tier: 'extended', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Theory (Extended)', durationMinutes: 75, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended', externallyAssessed: true },
      { paperCode: 'Paper 5', title: 'Practical Test', durationMinutes: 75, marks: 40, weightingPercent: 20, assessmentType: 'practical', alternativeGroup: 'practical', externallyAssessed: true },
      { paperCode: 'Paper 6', title: 'Alternative to Practical', durationMinutes: 60, marks: 40, weightingPercent: 20, assessmentType: 'alternative-to-practical', alternativeGroup: 'practical', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697209-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Same structural pattern as O Level/IGCSE Chemistry (independently re-confirmed from Physics\' own source PDF, not copied): Paper 1/3 Core (45min MCQ 30% + 1h15 Theory 50%) and Paper 2/4 Extended (identical durations/marks/weightings, different tier), plus a practical component via Paper 5 Practical Test (1h15/40 marks/20%) OR Paper 6 Alternative to Practical (1h/40 marks/20%), both externally assessed -- a candidate sits ONE of Paper 5/6, hence alternativeGroup. Core candidates eligible for grades C-G; Extended for A*-G. Directly confirmed against the official PDF (Assessment overview, p.9-10). This entry closes a data gap flagged earlier in this workstream: 0625 is an ACTIVE board/qualification/subject combination in the site academic matrix that had no syllabuses.ts or assessments.ts entry until now; both were created together in this batch. Examination-series window 2026-2028 (June and November series); no separate first-teaching date published by Cambridge.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'computer-science',
    code: '9618',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Theory Fundamentals', durationMinutes: 90, marks: 75, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Fundamental Problem-solving and Programming Skills', durationMinutes: 120, marks: 75, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 3', title: 'Advanced Theory', durationMinutes: 90, marks: 75, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 4', title: 'Practical', durationMinutes: 150, marks: 75, weightingPercent: 25, assessmentType: 'practical', externallyAssessed: true, calculatorAllowed: false },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697372-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview, p.11-12): Paper 1 Theory Fundamentals (1h30/75 marks, 50% of AS / 25% of A Level) and Paper 2 Fundamental Problem-solving and Programming Skills (2h/75 marks, 50% of AS / 25% of A Level) form the AS Level; Paper 3 Advanced Theory (1h30/75 marks, 25% of A Level only) and Paper 4 Practical (2h30/75 marks, 25% of A Level only -- candidates submit complete program code and testing evidence on a computer with no internet/email access) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (25+25+25+25=100); the AS-only route uses the separate 50%/50% figures instead, not modeled as a distinct record. Calculators must not be used in any paper. All four papers externally assessed. This is a single-year syllabus edition (2026 only) that should be re-checked for a successor when next touched.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Computer Science (Papers 1+2) can be a standalone qualification, or the first half of the full A Level staged over two years (carrying forward the AS result), or all four papers can be taken together in the same series for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'computer-science',
    code: '2210',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Computer Systems', durationMinutes: 105, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Algorithms, Programming and Logic', durationMinutes: 105, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Computer Systems (1h45, 75 marks, 50%, Topics 1-6, short-answer/structured questions) and Paper 2 Algorithms, Programming and Logic (1h45, 75 marks, 50%, Topics 7-10, short-answer/structured/scenario-based questions), both compulsory, no calculators permitted, both externally assessed. Not tiered; grades A*-E. Shares its 10-topic content and two-component structure with IGCSE 0478. Examination-series window 2026-2028; no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'computer-science',
    code: '0478',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Computer Systems', durationMinutes: 105, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Algorithms, Programming and Logic', durationMinutes: 105, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: false },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Computer Systems (1h45, 75 marks, 50%, Topics 1-6, short-answer/structured questions) and Paper 2 Algorithms, Programming and Logic (1h45, 75 marks, 50%, Topics 7-10, short-answer/structured/scenario-based questions), both compulsory, no calculators permitted, both externally assessed. Not tiered; grades A*-G. Independently re-confirmed from IGCSE 0478\'s own source PDF -- structure is identical to O Level 2210 by design, since the syllabus PDF states textbooks endorsed for 0478 are suitable for 2210 as well. Examination-series window 2026-2028; no separate first-teaching date published.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'ict',
    code: '0417',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Theory', durationMinutes: 90, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Document Production, Databases and Presentations', durationMinutes: 135, marks: 70, weightingPercent: 30, assessmentType: 'practical', externallyAssessed: true },
      { paperCode: 'Component 3', title: 'Spreadsheets and Website Authoring', durationMinutes: 135, marks: 70, weightingPercent: 30, assessmentType: 'practical', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697139-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9-10): all candidates take all three components (not a choice) -- Paper 1 Theory (1h30/80 marks/40%, compulsory, sections 1-21), Paper 2 Document Production, Databases and Presentations (2h15/70 marks/30%, practical test on sections 17-19 plus 11-16), and Component 3 Spreadsheets and Website Authoring (2h15/70 marks/30%, practical test on sections 20-21 plus 11-16). All externally assessed. Not tiered. Examination-series window 2026-2028; no separate first-teaching date published.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'economics',
    code: '2281',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 45, marks: 30, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Structured Questions', durationMinutes: 135, marks: 90, weightingPercent: 70, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697295-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Multiple Choice (45min, 30 marks, 30%, all 30 questions compulsory) and Paper 2 Structured Questions (2h15, 90 marks, 70%, one compulsory question plus three from a choice of four), both externally assessed. Not tiered; grades A*-E. This is a single-year syllabus edition (2026 only) -- firstAssessment and finalAssessment are both set to 2026 and this record should be re-checked for a successor edition when next touched.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'economics',
    code: '0455',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 45, marks: 30, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Structured Questions', durationMinutes: 135, marks: 90, weightingPercent: 70, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697154-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Multiple Choice (45min, 30 marks, 30%, all 30 questions compulsory) and Paper 2 Structured Questions (2h15, 90 marks, 70%, one compulsory question plus three from a choice of four), both externally assessed. Independently re-confirmed from IGCSE 0455\'s own source PDF, not copied from O Level 2281 -- the two share an identical paper structure by design, but IGCSE 0455 grades A*-G (O Level 2281 is A*-E). This is a single-year syllabus edition (2026 only) -- firstAssessment and finalAssessment are both set to 2026 and this record should be re-checked for a successor edition when next touched.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'business',
    code: '7115',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Short Answer and Data Response', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Case Study', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697338-2026-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Short Answer and Data Response (1h30, 80 marks, 50%, four questions mixing short answers and structured data responses) and Paper 2 Case Study (1h30, 80 marks, 50%, four questions based on a case-study insert), both externally assessed. Same paper titles/structure as IGCSE Business Studies 0450, independently re-confirmed from 7115\'s own source PDF. Not tiered; grades A*-E. This is a single-year syllabus edition (2026 only) that should be re-checked for a successor when next touched.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'commerce',
    code: '7100',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 60, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Written', durationMinutes: 120, marks: 80, weightingPercent: 70, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/693604-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-27',
    notes: 'Directly confirmed against the official PDF (Assessment overview p.9 and Details of the assessment p.22): Paper 1 Multiple Choice (1h, 40 marks, 30%, compulsory, may involve simple calculations) and Paper 2 Written (2h, 80 marks, 70%, structured questions of varying length, compulsory), both externally assessed. Not tiered; grades A*-E. Current syllabus is Version 2, published February 2026 (a minor typographical correction only, no assessment changes), valid for the 2026-2028 series.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'ict',
    code: '9626',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Theory', durationMinutes: 105, marks: 70, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Practical', durationMinutes: 150, marks: 90, weightingPercent: 25, assessmentType: 'practical', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Advanced Theory', durationMinutes: 105, marks: 70, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Advanced Practical', durationMinutes: 150, marks: 90, weightingPercent: 25, assessmentType: 'practical', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/662482-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview, p.10-11): Paper 1 Theory (1h45/70 marks, 50% of AS / 25% of A Level) and Paper 2 Practical (2h30/90 marks, 50% of AS / 25% of A Level) form the AS Level; Paper 3 Advanced Theory (1h45/70 marks, 25% of A Level only) and Paper 4 Advanced Practical (2h30/90 marks, 25% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (25+25+25+25=100); the AS-only route uses the separate 50%/50% figures instead, not modeled as a distinct record. All four papers externally assessed. Same staged three-route structure (AS-only / staged A-Level / same-series A-Level) as sibling Computer Science 9618. Examination-series window 2025-2027; no separate first-teaching date published.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Information Technology (Papers 1+2) can be a standalone qualification, or the first half of the full A Level staged over two years (carrying forward the AS result), or all four papers can be taken together in the same series for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'law',
    code: '9084',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'English Legal System', durationMinutes: 90, marks: 75, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Criminal Law', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Law of Contract', durationMinutes: 90, marks: 75, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Law of Tort', durationMinutes: 90, marks: 75, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697352-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview): Paper 1 English Legal System (1h30/75 marks, 50% of AS / 25% of A Level) and Paper 2 Criminal Law (1h30/60 marks, 50% of AS / 25% of A Level) form the AS Level; Paper 3 Law of Contract (1h30/75 marks, 25% of A Level only) and Paper 4 Law of Tort (1h30/75 marks, 25% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (25+25+25+25=100); the AS-only route uses the separate 50%/50% figures instead, not modeled as a distinct record. Each paper mixes compulsory/choice questions across two sections (structured/scenario-based plus essays); all four papers externally assessed.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Law (Papers 1+2) can be a standalone qualification, or the first half of the full A Level, completed by adding Papers 3+4 in a later series.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'psychology',
    code: '9990',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2024',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Approaches, Issues and Debates', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Research Methods', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Specialist Options: Approaches, Issues and Debates', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Specialist Options: Application and Research Methods', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/634461-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview, p.10-11): Paper 1 Approaches, Issues and Debates (1h30/60 marks, 50% of AS / 25% of A Level) and Paper 2 Research Methods (1h30/60 marks, 50% of AS / 25% of A Level) form the AS Level; Paper 3 Specialist Options: Approaches, Issues and Debates (1h30/60 marks, 25% of A Level only) and Paper 4 Specialist Options: Application and Research Methods (1h30/60 marks, 25% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (25+25+25+25=100); the AS-only route uses the separate 50%/50% figures instead, not modeled as a distinct record. All four papers externally assessed. This is the 2024-2026 syllabus edition (June/November series, also March in India); finalAssessment is set to 2026 and this record should be re-checked for a successor edition when next touched, since 2026 is its last examination year.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Psychology (Papers 1+2) can be a standalone qualification, or the first half of the full A Level staged over two years (carrying forward the AS result), or all four papers can be taken together in the same series for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'sociology',
    code: '9699',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2024',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Socialisation, Identity and Methods of Research', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'The Family', durationMinutes: 90, marks: 60, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Education', durationMinutes: 75, marks: 50, weightingPercent: 21, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Globalisation, Media and Religion', durationMinutes: 105, marks: 70, weightingPercent: 29, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/636099-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview): Paper 1 Socialisation, Identity and Methods of Research (1h30/60 marks, 50% of AS / 25% of A Level) and Paper 2 The Family (1h30/60 marks, 50% of AS / 25% of A Level) form the AS Level; Paper 3 Education (1h15/50 marks, 21% of A Level only) and Paper 4 Globalisation, Media and Religion (1h45/70 marks, 29% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (25+25+21+29=100, an intentionally uneven split, not a typo -- the syllabus\'s own "Changes to this syllabus" section documents that Paper 3 moved from 20% to 21% and Paper 4 from 30% to 29% in a prior version, and the current overview table already reflects 21%/29%); the AS-only route uses the separate 50%/50% figures instead, not modeled as a distinct record. All four papers externally assessed. This is the 2024-2026 syllabus edition (June/November series, also March in India); finalAssessment is set to 2026 and this record should be re-checked for a successor edition when next touched, since 2026 is its last examination year.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Sociology (Papers 1+2) can be a standalone qualification, or the first half of the full A Level staged over two years (carrying forward the AS result), or all four papers can be taken together in the same series for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-language',
    code: '9093',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2024',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Reading', durationMinutes: 135, marks: 50, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Writing', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Language Analysis', durationMinutes: 135, marks: 50, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 4', title: 'Language Topics', durationMinutes: 135, marks: 50, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/635901-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview): Paper 1 Reading (2h15/50 marks, 50% of AS / 25% of A Level) and Paper 2 Writing (2h/50 marks, 50% of AS / 25% of A Level) form the AS Level; Paper 3 Language Analysis (2h15/50 marks, 25% of A Level only) and Paper 4 Language Topics (2h15/50 marks, 25% of A Level only) complete the full A Level. Weighting figures recorded here are the "% of A Level" figures (25+25+25+25=100); the AS-only route uses the separate 50%/50% figures instead, not modeled as a distinct record. All four papers externally assessed. This is the 2024-2026 syllabus edition (June/November series, also March in India); finalAssessment is set to 2026 and this record should be re-checked for a successor edition when next touched, since 2026 is its last examination year.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level English Language (Papers 1+2) can be a standalone qualification, or the first half of the full A Level staged over two years (carrying forward the AS result), or all four papers can be taken together in the same series for the full A Level.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'global-perspectives',
    code: '0457',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    finalAssessment: '2027',
    components: [
      { paperCode: 'Component 1', title: 'Written Exam', durationMinutes: 85, marks: 70, weightingPercent: 35, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Component 2', title: 'Individual Report', durationMinutes: null, marks: 60, weightingPercent: 30, assessmentType: 'non-exam-assessment', externallyAssessed: true },
      { paperCode: 'Component 3', title: 'Team Project', durationMinutes: null, marks: 70, weightingPercent: 35, assessmentType: 'coursework', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/662457-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9-10): all candidates take all three components (not a choice) -- Component 1 Written Exam (1h25/70 marks/35%, four compulsory source-based questions, externally assessed); Component 2 Individual Report (60 marks/30%, a 1500-2000 word report on a self-chosen global issue, described by the syllabus as "internally set and externally marked" -- recorded here as externallyAssessed since Cambridge examiners do the marking, with the internally-set nuance noted here rather than modeled as a separate field); Component 3 Team Project (70 marks/35%, a collaborative Team Element plus an individually-written 750-1000 word Reflective Paper, internally assessed and externally moderated). Not tiered; grades A*-G. Examination-series window 2025-2027.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'global-perspectives',
    code: '9239',
    specStatus: 'current',
    tiers: ['as-only', 'a2-only'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Component 1', title: 'Written Exam', durationMinutes: 90, marks: 45, weightingPercent: 18, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Component 2', title: 'Essay', durationMinutes: null, marks: 40, weightingPercent: 16, assessmentType: 'non-exam-assessment', externallyAssessed: true },
      { paperCode: 'Component 3', title: 'Team Project', durationMinutes: null, marks: 40, weightingPercent: 16, assessmentType: 'non-exam-assessment', externallyAssessed: true },
      { paperCode: 'Component 4', title: 'Cambridge Research Report', durationMinutes: null, marks: 85, weightingPercent: 50, assessmentType: 'non-exam-assessment', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697359-2026-2028-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview, p.8-9): Component 1 Written Exam (1h30/45 marks, 36% of AS / 18% of A Level) and Component 2 Essay (40 marks, a 1750-2000 word essay, 32% of AS / 16% of A Level) form the AS Level alongside Component 3 Team Project (40 marks, individual presentation plus reflective paper, 32% of AS / 16% of A Level); Component 4 Cambridge Research Report (85 marks, an independent research report up to 5000 words plus a research log, 50% of A Level only) completes the full A Level. All four components are described as "Externally assessed" (none are internally assessed/moderated, unlike the IGCSE 0457 Team Project). Weighting figures recorded here are the "% of A Level" figures (18+16+16+50=100); the AS-only route uses the separate 36%/32%/32% figures instead, not modeled as a distinct record. Note the AS Level here comprises three components (1, 2, 3), not two, unlike the staged four-paper AS/A2 subjects modeled elsewhere in this dataset.',
    assessmentModel: 'staged',
    asALevelRelationship: 'staged-cambridge-route',
    certificationNotes: 'Cambridge International AS Level Global Perspectives (Components 1-3) can be a standalone qualification, or the first three components of the full A Level, completed by adding Component 4 (Cambridge Research Report) in a later series.',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'english-literature',
    code: '0475',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Poetry and Prose', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Drama', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-a-drama-exam'] },
      { paperCode: 'Paper 3', title: 'Drama (Open Text)', durationMinutes: 45, marks: 25, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-unseen', 'route-c-coursework'] },
      { paperCode: 'Paper 4', title: 'Unseen', durationMinutes: 75, marks: 25, weightingPercent: 25, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-unseen'] },
      { paperCode: 'Component 5', title: 'Coursework', durationMinutes: null, marks: 25, weightingPercent: 25, assessmentType: 'coursework', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', routeGroup: ['route-c-coursework'] },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview): all candidates take Paper 1 Poetry and Prose (1h30/50 marks/50%, two questions on two texts, externally assessed) plus EXACTLY ONE of three routes, each worth the remaining 50%: Route A is Paper 2 Drama alone (1h30/50 marks/50%, two questions on two texts, externally assessed); Route B is Paper 3 Drama (Open Text) (45min/25 marks/25%, one question on one text) together with Paper 4 Unseen (1h15/25 marks/25%, one question requiring critical commentary), both externally assessed; Route C is Paper 3 again together with Component 5 Coursework (25 marks/25%, a portfolio of two assignments each on a different text, internally assessed and externally moderated). Paper 3 is genuinely shared between Route B and Route C -- it is the same physical paper, not two different papers with the same name -- which this v2.0 dataset represents for the first time via the new `routeGroup` mechanism (an array of route tags per component, letting one component belong to more than one alternative route; see the `routeGroup` field\'s own doc comment in this file for the general case). This resolves docs/decision-log.md D-055, which explains why this combination was left unmodeled in an earlier batch of this same workstream. Grades A*-G. This is a single-year syllabus edition (2026 only) that should be re-checked for a successor when next touched.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'environmental-management',
    code: '5014',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Theory', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Management in Context', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664483-2025-2026-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Theory (1h45/80 marks/50%, Section A short/structured questions [20 marks] plus Section B short-answer/extended-response questions based on source material [60 marks]) and Paper 2 Management in Context (1h45/80 marks/50%, short and extended-response questions based on source material), both externally assessed. Not tiered; grades A*-E. Exams available in the June series (also November in Mauritius only). This is the 2025-2026 syllabus edition; finalAssessment is set to 2026 and this record should be re-checked for a successor edition when next touched, since 2026 is its last examination year.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'environmental-management',
    code: '0680',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2027',
    components: [
      { paperCode: 'Paper 1', title: 'Principles of Environmental Management', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Environmental Management in Context', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/718156-2027-2029-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Assessment overview, p.9): Paper 1 Principles of Environmental Management (1h45/80 marks/50%, short-answer/structured questions with extended-response questions based on source material) and Paper 2 Environmental Management in Context (1h45/80 marks/50%, short-answer, data processing/analysis, and extended-response questions based on source material), both externally assessed. Not tiered. Examination-series window 2027-2029 (first examination 2027). As of this verification date (2026-08-28) this syllabus has not yet had its first live sitting, but it is the only published edition of 0680 -- there is no separate earlier "current" spec it supersedes -- so specStatus is recorded as \'current\' rather than \'future\' (that status is reserved for a not-yet-live spec that will replace an existing current one; see the field\'s own doc comment). No separate first-teaching date published by Cambridge.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'statistics',
    code: '0479',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2027',
    finalAssessment: '2027',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1', durationMinutes: 135, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2', title: 'Paper 2', durationMinutes: 135, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/718153-2027-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Assessment overview p.9, Details of the assessment p.18): both papers are untitled beyond "Paper 1"/"Paper 2" in the syllabus itself, each 2h15/100 marks/50%, questions of mixed length and style drawn from any part of the subject content, a calculator required (algebraic/graphical calculators not permitted), essential working must be shown. Both externally assessed. Not tiered; grades A*-G. The syllabus states explicitly: "This is a new syllabus for first examination in 2027" -- Version 1, published September 2024, only the June series is available. As of this verification date (2026-08-28) this syllabus has not yet had its first live sitting; it is the ONLY edition of 0479 ever published (there is no separate earlier "current" spec it replaces), so specStatus is recorded as \'current\' rather than \'future\' (see the field\'s own doc comment for why). firstAssessment and finalAssessment are both set to 2027 since only a single exam year is currently published; this record should be re-checked for a successor edition when next touched.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'commerce',
    code: '0715',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2028',
    finalAssessment: '2028',
    components: [
      { paperCode: 'Paper 1', title: 'Multiple Choice', durationMinutes: 60, marks: 40, weightingPercent: 30, assessmentType: 'multiple-choice', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Written', durationMinutes: 120, marks: 80, weightingPercent: 70, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/745979-2028-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF: Paper 1 Multiple Choice (1h, 40 marks, 30%, compulsory, may involve simple calculations) and Paper 2 Written (2h, 80 marks, 70%, structured questions of varying length, compulsory, may involve simple calculations), both externally assessed -- an identical paper structure to the already-modeled O Level Commerce 7100, independently re-confirmed from 0715\'s own source PDF, not copied. Not tiered; grades A*-G. This is a single-year 2028-only syllabus edition. As of this verification date (2026-08-28) this syllabus has not yet had its first live sitting and is the ONLY published edition of 0715 (no earlier "current" spec it replaces), so specStatus is recorded as \'current\' rather than \'future\' (see the field\'s own doc comment for why). firstAssessment and finalAssessment are both set to 2028; this record should be re-checked for a successor edition when next touched.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'english-language',
    code: '1123',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2024',
    finalAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Reading', durationMinutes: 120, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Writing', durationMinutes: 120, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/634453-2024-2026-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Version 2, published December 2022): Paper 1 Reading (2h, 50 marks, 50%, two compulsory sections -- Comprehension and Use of Language, and Summary and Short response, based on two reading texts) and Paper 2 Writing (2h, 50 marks, 50%, one Directed Writing question and one Composition task chosen from four options), both externally assessed, no coursework or speaking component. Not tiered; grades A*-E. Available June and November series. Window 2024-2026, version 2.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'statistics',
    code: '4040',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    finalAssessment: '2027',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1', durationMinutes: 135, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2', title: 'Paper 2', durationMinutes: 135, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.cambridgeinternational.org/Images/664481-2025-2027-syllabus.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Version 1, published September 2022, "no significant changes which affect teaching"): two compulsory, equally-weighted papers, each 2h15 (135 min), 100 marks, 50%, a mix of short questions (up to 8 marks each) and four longer questions (~15 marks each), electronic calculators required. Both externally assessed. Not tiered; grades A*-E. Examined in the November series only. Explicitly a linear qualification -- the syllabus states candidates cannot resit individual components, only the whole qualification -- recorded in resitPolicySummary. Window 2025-2027, version 1.',
    assessmentModel: 'linear',
    resitPolicySummary: 'Linear qualification: candidates may retake the whole qualification but cannot resit individual components (Paper 1 or Paper 2) separately.',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'physics',
    code: '4PH1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '4PH1/1P', title: 'Physics Paper 1', durationMinutes: 120, marks: 110, weightingPercent: 61.1, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: '4PH1/2P', title: 'Physics Paper 2', durationMinutes: 75, marks: 70, weightingPercent: 38.9, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/specification-and-sample-assessments/international-gcse-physics-2017-specification.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 4, September 2024, "the established linear route"): two externally-assessed written papers, both untiered and available in the November and June series. Paper 1 (2h, 110 marks, 61.1%) assesses only core (non-bold, non-"P"-referenced) content; Paper 2 (1h15, 70 marks, 38.9%) assesses all content including bold "P"-referenced material. Calculators permitted in both. Eight topics: Forces and motion, Electricity, Waves, Energy resources and energy transfers, Solids/liquids/gases, Magnetism and electromagnetism, Radioactivity and particles, Astrophysics. Note: Pearson also now offers a separate MODULAR route to this same subject (codes 4WPH1/4WPH2, first assessed June 2025) alongside this established linear route; this record models the linear 4PH1 route only, matching this combination\'s syllabuses.ts entry. Per Pearson\'s November 2025 subject-advisor update, support materials (equation sheets) are confirmed through the 2025-2027 series for both routes; Pearson\'s stated policy is to align International GCSE support with UK GCSE decisions for 2028 onward, which were not yet confirmed by Ofqual/DfE as of this verification date -- no finalAssessment year is therefore recorded, to avoid fabricating an unconfirmed cutoff.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'biology',
    code: '4BI1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '4BI1/1B', title: 'Biology Paper 1', durationMinutes: 120, marks: 110, weightingPercent: 61.1, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '4BI1/2B', title: 'Biology Paper 2', durationMinutes: 75, marks: 70, weightingPercent: 38.9, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/specification-and-sample-assessments/international-gcse-biology-2017-specification1.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF: linear qualification, two externally-assessed, untiered written papers taken in the same series. Paper 1 (2h, 110 marks, 61.1%) assesses only core (non-bold-referenced) content; Paper 2 (1h15, 70 marks, 38.9%) assesses all content including bold-referenced material -- the identical assessment-weighting pattern used across Pearson\'s International GCSE sciences suite (matches sibling Chemistry 4CH1 and Physics 4PH1, independently re-confirmed from 4BI1\'s own source PDF). First teaching September 2017, first assessment June 2019, current specification Issue 3 (September 2024).',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    code: '4CH1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '4CH1/1C', title: 'Chemistry Paper 1', durationMinutes: 120, marks: 110, weightingPercent: 61.1, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '4CH1/2C', title: 'Chemistry Paper 2', durationMinutes: 75, marks: 70, weightingPercent: 38.9, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Chemistry/2017/specification-and-sample-assessments/international-gcse-chemistry-2017-specification.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF: linear qualification, two externally-assessed, untiered written papers taken in the same series. Paper 1 (2h, 110 marks, 61.1%) assesses only core (non-bold-referenced) content; Paper 2 (1h15, 70 marks, 38.9%) assesses all content including bold-referenced material -- the identical assessment-weighting pattern used across Pearson\'s International GCSE sciences suite (matches sibling Biology 4BI1 and Physics 4PH1, independently re-confirmed from 4CH1\'s own source PDF). First teaching September 2017, first assessment June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'english-language',
    code: '4EA1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: '4EA1/01', title: 'Component 1: Non-fiction Texts and Transactional Writing', durationMinutes: 135, marks: 90, weightingPercent: 60, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '4EA1/02', title: 'Component 2: Poetry and Prose Texts and Imaginative Writing', durationMinutes: 90, marks: 60, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', alternativeGroup: 'component-2-or-3' },
      { paperCode: '4EA1/03', title: 'Component 3: Poetry and Prose Texts and Imaginative Writing (non-examined assessment)', durationMinutes: null, marks: 60, weightingPercent: 40, assessmentType: 'coursework', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', alternativeGroup: 'component-2-or-3' },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 7, August 2025): students complete Component 1 (compulsory) plus EITHER Component 2 OR Component 3 -- both alternatives carry identical marks (60) and weighting (40%), so this fits the existing alternativeGroup mechanism (unlike Cambridge 0475\'s mismatched-weighting routes). Component 1 (2h15, 90 marks, 60%): Section A Reading (45 marks, non-fiction text response) + Section B Transactional Writing (45 marks). Component 2 (1h30, 60 marks, 40%, externally assessed written exam): Section A Reading essay (30 marks) + Section B Imaginative Writing (30 marks). Component 3 (60 marks, 40%, internally assessed and externally moderated non-examined assessment): the coursework alternative to Component 2, covering the same content. A separate modular version (4XEA1, first teaching September 2025) also exists and is not modeled here. First teaching September 2016, first examination June 2018.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'english-literature',
    code: '4ET1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: '4ET1/01', title: 'Component 1: Poetry and Modern Prose', durationMinutes: 120, marks: 90, weightingPercent: 60, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '4ET1/02', title: 'Component 2: Modern Drama and Literary Heritage Texts (examined)', durationMinutes: 90, marks: 60, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', alternativeGroup: 'component-2-or-3' },
      { paperCode: '4ET1/03', title: 'Component 3: Modern Drama and Literary Heritage Texts (coursework)', durationMinutes: null, marks: 60, weightingPercent: 40, assessmentType: 'coursework', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', alternativeGroup: 'component-2-or-3' },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/International_GCSE_English_Literature_specification.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 2, November 2017): students complete Component 1 (compulsory) plus EITHER Component 2 OR Component 3 -- both alternatives carry identical marks (60) and weighting (40%), fitting the existing alternativeGroup mechanism. Component 1 (2h, 90 marks, 60%, closed book): poetry collection + modern prose text. Component 2 (1h30, 60 marks, 40%, externally assessed, open book): Section A modern drama (30 marks) + Section B literary heritage text (30 marks). Component 3 (60 marks total -- 30 marks per assignment, 40%, internally set and assessed, externally moderated by Pearson): two coursework assignments, the alternative to Component 2. A separate modular version (4XET1) also exists and is not modeled here. First teaching September 2016, first examination June 2018.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'world-history',
    code: '4HI1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '4HI1/01', title: 'Paper 1: Depth Studies', durationMinutes: 90, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '4HI1/02', title: 'Paper 2: Investigation and Breadth Studies', durationMinutes: 90, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/History/2017/specification-and-sample-assessments/int-gcse-history-specification.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 5, February 2026): two externally-assessed written papers, each 1h30, 60 marks, 50%. Paper 1 (Depth Studies): candidates answer two questions on two depth studies chosen from eight named options (e.g. The French Revolution; unification of Italy; Germany under dictatorship; USSR under dictatorship; superpower relations; US civil rights; South Africa apartheid). Paper 2 (Investigation and Breadth Studies): one historical investigation chosen from five named options plus one breadth study in change chosen from eight named options. Both available as paper-based or onscreen assessment. First teaching September 2017, first examination June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'economics',
    code: '4EC1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '4EC1/01', title: 'Paper 1: Microeconomics and Business Economics', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '4EC1/02', title: 'Paper 2: Macroeconomics and the Global Economy', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Economics/2017/Specification%20and%20SAMS/international-gcse-spec-9781446942789.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 3, February 2026): two externally-assessed written papers, each 1h30, 80 marks, 50%. Paper 1 (Microeconomics and Business Economics) and Paper 2 (Macroeconomics and the Global Economy), each with four compulsory questions worth 20 marks, mixing multiple-choice, short-answer, data-response and open-ended question styles. Both available as paper-based or onscreen assessment. First teaching September 2017, first examination June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'mathematics',
    code: '4MA1',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: '4MA1/1F', title: 'Paper 1F', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: '4MA1/2F', title: 'Paper 2F', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: '4MA1/1H', title: 'Paper 1H', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: '4MA1/2H', title: 'Paper 2H', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 2, November 2017): tiered qualification. Foundation tier: Paper 1F + Paper 2F, each 2h/100marks/50%, targeted at grades 5-1. Higher tier: Paper 1H + Paper 2H, each 2h/100marks/50%, targeted at grades 9-4 with grade 3 allowed. All four papers externally assessed and calculator-required (a scientific electronic calculator meeting a minimum function spec). A separate modular version also exists (per Pearson search results, first teaching 2024) and is not modeled here, since this combination\'s syllabuses.ts entry is keyed to the established Specification A code 4MA1.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    code: 'YMA01',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'WMA11/01', title: 'P1: Pure Mathematics 1', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WMA12/01', title: 'P2: Pure Mathematics 2', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WMA13/01', title: 'P3: Pure Mathematics 3', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WMA14/01', title: 'P4: Pure Mathematics 4', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WME01/01', title: 'M1: Mechanics 1', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-m1-s1', 'route-m1-d1', 'route-m1-m2'] },
      { paperCode: 'WST01/01', title: 'S1: Statistics 1', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-m1-s1', 'route-s1-d1', 'route-s1-s2'] },
      { paperCode: 'WDM11/01', title: 'D1: Decision Mathematics 1', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-m1-d1', 'route-s1-d1'] },
      { paperCode: 'WME02/01', title: 'M2: Mechanics 2', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-m1-m2'] },
      { paperCode: 'WST02/01', title: 'S2: Statistics 2', durationMinutes: 90, marks: 75, weightingPercent: 16.67, assessmentType: 'unit', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-s1-s2'] },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 3, April 2019 -- verified this IS the current spec, distinct from and superseding the older 2013 C12/C34-numbered spec that a search initially surfaced). Every unit: externally assessed, 1h30 written exam, 75 marks, 16⅔% (16.67) of the full IAL. The full International Advanced Level (YMA01) = the four compulsory Pure Mathematics units P1-P4 PLUS exactly one pair of applied units chosen from five named valid pairs: M1+S1, M1+D1, M1+M2, S1+D1, or S1+S2 (confirmed verbatim from the spec\'s own IAS/IAL combinations table). This is modeled with the routeGroup mechanism (as used for Cambridge IGCSE Literature in English 0475): each of the five applied units (M1, S1, D1, M2, S2) is tagged with every named route it can belong to, so e.g. M1 carries all three routes it appears in. Every route sums to 4×16.67 + 2×16.67 = 100.02%, within the validator\'s tolerance. The separate International Advanced Subsidiary (IAS, code XMA01: P1+P2 plus ONE applied unit, three units total) is a genuinely different combination requiring its own routeGroup dimension and is NOT modeled here, since per this combination\'s syllabuses.ts entry the IAS is "not recorded as a separate matrix row." Further Pure Mathematics units (FP1-FP3) and the M3/S3 units belong to the separate Further Mathematics (YFM01) and Pure Mathematics (YPM01) awards and are out of scope for this record.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'accounting',
    code: 'YAC11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2016',
    components: [
      { paperCode: 'WAC11/01', title: 'Unit 1: The Accounting System and Costing', durationMinutes: 180, marks: 200, weightingPercent: 50, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WAC12/01', title: 'Unit 2: Corporate and Management Accounting', durationMinutes: 180, marks: 200, weightingPercent: 50, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Accounting/2015/specification-and-sample-assessments/pearson-edexcel-ial-accounting-specification.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF: the simplest modular structure among the Edexcel IAL sciences/humanities suite -- just two units total instead of the usual six. Unit 1 (The Accounting System and Costing, IAS unit) and Unit 2 (Corporate and Management Accounting, IA2 unit), each 3h, 200 marks, 50% of the full IAL, both externally assessed. The International Advanced Subsidiary (XAC11) is claimed on Unit 1 alone; the full International Advanced Level (YAC11) requires both units. Each unit: Section A two compulsory 55-mark multi-part data-response questions; Section B three 30-mark optional multi-part questions chosen from four. First teaching September 2015, Specification Issue 2 (reissued September 2018).',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'law',
    code: 'YLA11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'YLA1/01', title: 'Paper 1: Underlying Principles of Law and the English Legal System', durationMinutes: 180, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'YLA1/02', title: 'Paper 2: The Law in Action', durationMinutes: 180, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Law/2015/specification-and-sample-assessments/Pearson-Edexcel-IAL-Law-Specification.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 4, November 2021): not split into separate IAS/IAL stages -- two compulsory papers, both taken in the same series (June only), each 3h, 100 marks, 50%, externally assessed. Paper 1 covers the English legal system, the law of contract basics and criminal law; Paper 2 covers the law of tort and applied/synoptic content. IMPORTANT DATA-PROVENANCE NOTE: the qualification\'s own specification PDF title, its paper codes, and its mark-scheme filenames all consistently use the cash-in code "YLA1" (not "YLA11") -- e.g. "Pearson Edexcel International Advanced Level in Law (YLA1)", paper codes YLA1/01 and YLA1/02. This record keeps code: \'YLA11\' to match the pre-existing syllabuses.ts entry and pass the assessment validator\'s code-consistency check; the discrepancy itself, and why it was not silently corrected here, is tracked in docs/decision-log.md D-056. First teaching September 2015, first examination June 2017.',
    assessmentModel: 'linear',
  },
] as const;

/**
 * All Assessment record(s) for a board+qualification+subject combination.
 * Returns an array (not a single record) because a combination can
 * legitimately have more than one -- either a legacy/current transition
 * (e.g. OCR Business H431 + H436), or genuinely simultaneous variants
 * distinguished by tier (e.g. Cambridge O Level Urdu 3247 "first-language"
 * + 3248 "second-language"). An empty array means this combination is
 * NOT_YET_MODELED -- a real, honestly-displayed status, not a silent gap.
 */
export function assessmentsFor(
  boardSlug: string,
  qualificationSlug: string,
  subjectSlug: string,
): readonly Assessment[] {
  return ASSESSMENTS.filter(
    (a) => a.boardSlug === boardSlug && a.qualificationSlug === qualificationSlug && a.subjectSlug === subjectSlug,
  );
}

/** v2.0 MEGA PROGRAMME (brief §12) — "which assessment record applies to a
 * learner sitting exams in YEAR?" `firstAssessment` and `finalAssessment`
 * (both already-required/optional fields on every record, not new data)
 * are parsed as the first exam-series year each record covers and, where
 * `finalAssessment` is set, the last. A record with no `finalAssessment`
 * is treated as covering every year from its `firstAssessment` onward
 * (i.e. still current/future with no announced end) UNLESS a later
 * record's `firstAssessment` for the same overlapping-tier group implies
 * this one ended -- see the `ambiguous` case below, which surfaces that
 * situation for manual review rather than silently picking one.
 *
 * Returns:
 *   { record, ambiguous: false }  — exactly one record covers this year.
 *   { record: null, ambiguous: true, candidates }
 *       — zero or 2+ records could apply (a genuine transition-year
 *         ambiguity, or the combination truly has no record for that
 *         year); `candidates` lists what was found so a human can resolve
 *         it. This function never guesses a single answer in that case. */
export interface ExamYearResolution {
  readonly record: Assessment | null;
  readonly ambiguous: boolean;
  readonly candidates: readonly Assessment[];
}

export function resolveAssessmentForExamYear(
  boardSlug: string,
  qualificationSlug: string,
  subjectSlug: string,
  examYear: number,
): ExamYearResolution {
  const all = assessmentsFor(boardSlug, qualificationSlug, subjectSlug);
  const yearOf = (s: string) => {
    const n = Number.parseInt(s, 10);
    return Number.isFinite(n) ? n : null;
  };
  const covering = all.filter((a) => {
    const start = yearOf(a.firstAssessment);
    if (start === null || examYear < start) return false;
    if (a.finalAssessment) {
      const end = yearOf(a.finalAssessment);
      if (end !== null && examYear > end) return false;
    }
    return true;
  });
  if (covering.length === 1) {
    return { record: covering[0], ambiguous: false, candidates: covering };
  }
  return { record: null, ambiguous: true, candidates: covering };
}
