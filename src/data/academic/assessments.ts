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
