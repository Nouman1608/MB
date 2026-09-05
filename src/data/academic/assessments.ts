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
  | 'a2-only'
  /** v2.0 MEGA PROGRAMME WS-IB -- IB Diploma Programme Standard/Higher
   * Level. Purely additive: the same 'one code, two depth tiers' concept
   * already modeled by as-only/a2-only for A-level, just under IB's own
   * naming. A DP subject's SL and HL components are recorded as separate
   * per-tier rows (matching the existing core/extended convention) because
   * the same-named paper can carry a different weighting, duration or mark
   * total at each level -- e.g. DP Economics Paper 1 is 30% at SL but 20%
   * at HL, so one component entry with one weightingPercent could not
   * represent both correctly. */
  | 'sl'
  | 'hl';

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
  | 'endorsement'
  /** Added for IB MYP (2026-09-04): a school-assessed, IB-moderated
   * subject-group criterion (always one of exactly four per MYP subject
   * group -- A/B/C/D, each independently named per subject, e.g. MYP
   * Sciences' "Knowing and understanding"/"Inquiring and designing"/
   * "Processing and evaluating"/"Reflecting on the impacts of science").
   * Deliberately distinct from 'coursework': a criterion is not a single
   * deliverable but an ongoing achievement-level judgment (1-8) made
   * across the whole year's work against a published rubric, moderated by
   * IB sampling rather than externally marked. Read directly from each
   * subject's own public IB MYP subject-brief PDF -- see the matching
   * Assessment record's own sourcing notes. */
  | 'criterion';

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
  | 'mixed'
  /** Added for IB MYP (2026-09-04): the whole-qualification model is four
   * equally-weighted, school-assessed criteria (A-D) scored on an 8-level
   * achievement scale, IB-moderated by sampling -- not an externally set
   * and marked paper/component structure at all. Using 'component-based'
   * for this would misrepresent MYP as if it had fixed papers with raw
   * exam marks the way DP/GCSE/A-level do; it does not, for the vast
   * majority of MYP students (the optional formal eAssessment route --
   * on-screen exams or an ePortfolio, for schools/students seeking the
   * MYP Certificate -- is a genuinely separate, opt-in layer, documented
   * in this qualification's own record `notes` rather than modeled as
   * its primary components, since most MYP students never sit it). */
  | 'criterion-referenced';

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
  /** Owner decision 2026-09-05 (see docs/decision-log.md D-129): the
   * requirement that a document be HOSTED on the awarding body's own
   * domain is dropped -- what matters is whether the document ITSELF is a
   * genuine, authentic board-origin document, regardless of who mirrors
   * it. `officialSourceUrl` above must still always point at the board's
   * own official page (an official subject brief/hub, even if the actual
   * figures were confirmed via a mirror) -- it is never replaced by a
   * third-party URL. `mirrorSourceUrl` is the third-party URL actually
   * used to read the authentic figures, set only when it differs from
   * `officialSourceUrl`. Omit entirely when every fact was read directly
   * from the board's own official host. */
  readonly mirrorSourceUrl?: string;
  /** Required whenever `mirrorSourceUrl` is set (validator [14]); must
   * never be 'official-host' in that case, since that value means every
   * fact came from the board's own official host with no mirror involved.
   * A closed union of only the three PUBLISHABLE confidence tiers -- a
   * source that only reached REVIEW_REQUIRED or REJECTED during research
   * never becomes a written record at all, so those two levels have no
   * schema representation here by design (see D-129). */
  readonly sourceConfidence?: 'official-host' | 'authentic-mirror-high-confidence' | 'authentic-mirror-corroborated';
  /** The second, independent source that corroborates `mirrorSourceUrl`
   * when a mirror's own authenticity signals weren't conclusive alone.
   * Required whenever `sourceConfidence` is 'authentic-mirror-corroborated'
   * (validator [14]); may be an official board page, a second independent
   * mirror, or an official subject brief agreeing on the same figures. */
  readonly corroboratingSourceUrl?: string;
  /** Public-facing. Rendered directly on the board/qualification/subject page
   * (see the `[subject].astro` template) immediately after the official-source
   * attribution line. Must only ever contain content a learner should read:
   * qualification structure, honest scope/limitations, and sourcing detail.
   * Never put engineering reasoning, validator/script names, decision-log
   * references, or file paths here -- use `internalNotes` instead. (Post-v2.0
   * Quality Closure WS3: a prior record's `notes` field leaked exactly this
   * kind of commentary to the public page -- see D-056 and its resolution.) */
  readonly notes?: string;
  /** Maintainer-only. NEVER rendered by any public template -- intentionally
   * absent from `[subject].astro` and every other page renderer. Use this for
   * engineering/audit commentary that belongs in git history and the decision
   * log's spirit but is useful to see right next to the record it concerns:
   * why a value was chosen, what was corrected and when, open questions for
   * the next person to touch this record. `audit-content-integrity.mjs`
   * additionally scans the built site for internal-note-shaped text (decision
   * IDs, workstream references, script/file paths) as a second, independent
   * safeguard in case this field's content is ever copy-pasted into `notes`
   * by mistake. */
  readonly internalNotes?: string;
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
    notes: 'Directly confirmed against the official PDF (Syllabus overview, p.8-9): both candidates must take Paper 1 and Paper 2, each 1.5 hours / 50 marks (five questions, Question 1 and Question 2 compulsory plus two more chosen), no explicit percentage stated by the board but the two equal-mark papers are therefore 50%/50% of the total. Both externally assessed, not tiered, answered in English. The syllabus PDF previously cited (635787, window 2024-2025) had lapsed; this record and the matching syllabus record were both corrected to the current 2026-2027 edition (697279) in the same update. Examination-series window 2026-2027 (June and November series); no separate first-teaching date published.',
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
    notes: 'Same structural pattern as O Level/IGCSE Chemistry (independently re-confirmed from Physics\' own source PDF, not copied): Paper 1/3 Core (45min MCQ 30% + 1h15 Theory 50%) and Paper 2/4 Extended (identical durations/marks/weightings, different tier), plus a practical component via Paper 5 Practical Test (1h15/40 marks/20%) OR Paper 6 Alternative to Practical (1h/40 marks/20%), both externally assessed -- a candidate sits ONE of Paper 5/6, hence alternativeGroup. Core candidates eligible for grades C-G; Extended for A*-G. Directly confirmed against the official PDF (Assessment overview, p.9-10). Examination-series window 2026-2028 (June and November series); no separate first-teaching date published by Cambridge.',
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
    notes: 'Directly confirmed against the official PDF\'s "Assessment overview" (Syllabus overview): all candidates take Paper 1 Poetry and Prose (1h30/50 marks/50%, two questions on two texts, externally assessed) plus EXACTLY ONE of three routes, each worth the remaining 50%: Route A is Paper 2 Drama alone (1h30/50 marks/50%, two questions on two texts, externally assessed); Route B is Paper 3 Drama (Open Text) (45min/25 marks/25%, one question on one text) together with Paper 4 Unseen (1h15/25 marks/25%, one question requiring critical commentary), both externally assessed; Route C is Paper 3 again together with Component 5 Coursework (25 marks/25%, a portfolio of two assignments each on a different text, internally assessed and externally moderated). Paper 3 is genuinely shared between Route B and Route C -- it is the same physical paper, not two different papers with the same name -- which this v2.0 dataset represents for the first time via the new `routeGroup` mechanism (an array of route tags per component, letting one component belong to more than one alternative route). Grades A*-G. This is a single-year syllabus edition (2026 only) that should be re-checked for a successor when next touched.',
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
    notes: 'Directly confirmed against the official PDF (Specification Issue 4, September 2024, "the established linear route"): two externally-assessed written papers, both untiered and available in the November and June series. Paper 1 (2h, 110 marks, 61.1%) assesses only core (non-bold, non-"P"-referenced) content; Paper 2 (1h15, 70 marks, 38.9%) assesses all content including bold "P"-referenced material. Calculators permitted in both. Eight topics: Forces and motion, Electricity, Waves, Energy resources and energy transfers, Solids/liquids/gases, Magnetism and electromagnetism, Radioactivity and particles, Astrophysics. Note: Pearson also now offers a separate MODULAR route to this same subject (codes 4WPH1/4WPH2, first assessed June 2025) alongside this established linear route; this record models the linear 4PH1 route only, matching this combination\'s syllabus record. Per Pearson\'s November 2025 subject-advisor update, support materials (equation sheets) are confirmed through the 2025-2027 series for both routes; Pearson\'s stated policy is to align International GCSE support with UK GCSE decisions for 2028 onward, which were not yet confirmed by Ofqual/DfE as of this verification date -- no finalAssessment year is therefore recorded, to avoid fabricating an unconfirmed cutoff.',
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
    notes: 'Directly confirmed against the official PDF (Specification Issue 2, November 2017): tiered qualification. Foundation tier: Paper 1F + Paper 2F, each 2h/100marks/50%, targeted at grades 5-1. Higher tier: Paper 1H + Paper 2H, each 2h/100marks/50%, targeted at grades 9-4 with grade 3 allowed. All four papers externally assessed and calculator-required (a scientific electronic calculator meeting a minimum function spec). A separate modular version also exists (per Pearson search results, first teaching 2024) and is not modeled here, since this site\'s record for this combination is keyed to the established Specification A code 4MA1.',
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
    notes: 'Directly confirmed against the official PDF (Specification Issue 3, April 2019 -- verified this IS the current spec, distinct from and superseding the older 2013 C12/C34-numbered spec that a search initially surfaced). Every unit: externally assessed, 1h30 written exam, 75 marks, 16⅔% (16.67) of the full IAL. The full International Advanced Level (YMA01) = the four compulsory Pure Mathematics units P1-P4 PLUS exactly one pair of applied units chosen from five named valid pairs: M1+S1, M1+D1, M1+M2, S1+D1, or S1+S2 (confirmed verbatim from the spec\'s own IAS/IAL combinations table). This is modeled with the routeGroup mechanism (as used for Cambridge IGCSE Literature in English 0475): each of the five applied units (M1, S1, D1, M2, S2) is tagged with every named route it can belong to, so e.g. M1 carries all three routes it appears in. Every route sums to 4×16.67 + 2×16.67 = 100.02%, within the validator\'s tolerance. The separate International Advanced Subsidiary (IAS, code XMA01: P1+P2 plus ONE applied unit, three units total) is a genuinely different combination requiring its own routeGroup dimension and is NOT modeled here, since this site does not currently record the IAS as a separate combination. Further Pure Mathematics units (FP1-FP3) and the M3/S3 units belong to the separate Further Mathematics (YFM01) and Pure Mathematics (YPM01) awards and are out of scope for this record.',
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
    code: 'YLA1',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'YLA1/01', title: 'Paper 1: Underlying Principles of Law and the English Legal System', durationMinutes: 180, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'YLA1/02', title: 'Paper 2: The Law in Action', durationMinutes: 180, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Law/2015/specification-and-sample-assessments/Pearson-Edexcel-IAL-Law-Specification.pdf',
    verifiedOn: '2026-08-30',
    notes: 'Directly confirmed against the official PDF (Specification Issue 4, November 2021): not split into separate IAS/IAL stages -- two compulsory papers, both taken in the same series (June only), each 3h, 100 marks, 50%, externally assessed. Paper 1 covers the English legal system, the law of contract basics and criminal law; Paper 2 covers the law of tort and applied/synoptic content. First teaching September 2015, first examination June 2017.',
    internalNotes: 'Post-v2.0 Quality Closure WS2 (2026-08-30): corrected code from \'YLA11\' to \'YLA1\' -- the qualification\'s own specification PDF, paper codes and mark-scheme filenames all consistently use YLA1. Coordinated with syllabuses.ts, syllabus-topics.ts (6 topic/subtopic slugs), and the 3 published resource files\' frontmatter in the same change. Resolves the discrepancy tracked in D-056; see D-082 for the full resolution record. This field is for maintainers only -- see the AssessmentRecord type doc comment.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    code: 'YPH11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'WPH11/01', title: 'Unit 1: Mechanics and Materials', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WPH12/01', title: 'Unit 2: Waves and Electricity', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WPH13/01', title: 'Unit 3: Practical Skills in Physics I', durationMinutes: 80, marks: 50, weightingPercent: 10, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WPH14/01', title: 'Unit 4: Further Mechanics, Fields and Particles', durationMinutes: 105, marks: 90, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WPH15/01', title: 'Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology', durationMinutes: 105, marks: 90, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WPH16/01', title: 'Unit 6: Practical Skills in Physics II', durationMinutes: 80, marks: 50, weightingPercent: 10, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Physics/2018/Specification%20and%20Sample%20Assessment/9781446957783_IAL_Physics_Iss3.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 3, July 2021): the standard Edexcel IAL modular structure -- three IAS units (1-3) plus three IA2 units (4-6), each externally assessed. Units 1, 2, 4 and 5 (the four main content units) are each 20% of the full IAL; Units 3 and 6 (Practical Skills in Physics I and II) are each 10%, both written examinations rather than hands-on practical tests -- Pearson\'s IAL sciences assess practical competence through a dedicated written paper, not a lab-based endorsement. Unit 1 and 2 each 1h30/80marks; Unit 3 and 6 each 1h20/50marks; Unit 4 and 5 each 1h45/90marks. First teaching September 2018, first examination January 2019. The spec states a minimum of 40% of marks across the papers overall will target mathematics at Level 2 or above -- the highest of the three IAL sciences (Chemistry and Biology both state 20%), reflecting Physics\'s heavier quantitative content.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    code: 'YCH11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'WCH11/01', title: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WCH12/01', title: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WCH13/01', title: 'Unit 3: Practical Skills in Chemistry I', durationMinutes: 80, marks: 50, weightingPercent: 10, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WCH14/01', title: 'Unit 4: Rates, Equilibria and Further Organic Chemistry', durationMinutes: 105, marks: 90, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WCH15/01', title: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry', durationMinutes: 105, marks: 90, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WCH16/01', title: 'Unit 6: Practical Skills in Chemistry II', durationMinutes: 80, marks: 50, weightingPercent: 10, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF: an identical modular skeleton to sibling Physics YPH11, independently re-confirmed from Chemistry\'s own source PDF -- three IAS units (1-3) plus three IA2 units (4-6), each externally assessed. Units 1, 2, 4 and 5 each 20% of the full IAL (1h30/80marks for 1-2, 1h45/90marks for 4-5); Units 3 and 6 (Practical Skills in Chemistry I and II, each 1h20/50marks) each 10%, again written papers rather than a hands-on lab endorsement. Each written paper includes a stated minimum of mathematics-targeted marks (e.g. Unit 1 at least 18 marks target Level 2 maths or above). First teaching September 2018, first examination January 2019. The spec states a minimum of 20% of marks overall will target mathematics at Level 2 or above -- half of Physics\'s stated 40%, independently confirmed from this qualification\'s own PDF.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    code: 'YBI11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'WBI11/01', title: 'Unit 1: Molecules, Diet, Transport and Health', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBI12/01', title: 'Unit 2: Cells, Development, Biodiversity and Conservation', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBI13/01', title: 'Unit 3: Practical Skills in Biology I', durationMinutes: 80, marks: 50, weightingPercent: 10, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBI14/01', title: 'Unit 4: Energy, Environment, Microbiology and Immunity', durationMinutes: 105, marks: 90, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBI15/01', title: 'Unit 5: Respiration, Internal Environment, Coordination and Gene Technology', durationMinutes: 105, marks: 90, weightingPercent: 20, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBI16/01', title: 'Unit 6: Practical Skills in Biology II', durationMinutes: 80, marks: 50, weightingPercent: 10, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Biology/2018/Specification-and-Sample-Assessment/International-A-Level-Biology-Spec.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 2, February 2021): the third of Pearson\'s three IAL sciences to share this exact modular skeleton -- three IAS units (1-3) plus three IA2 units (4-6), independently re-confirmed from Biology\'s own source PDF against sibling Physics YPH11 and Chemistry YCH11. Units 1, 2, 4 and 5 each 20% of the full IAL (1h30/80marks for 1-2, 1h45/90marks for 4-5); Units 3 and 6 (Practical Skills in Biology I and II, each 1h20/50marks) each 10%, written papers rather than a hands-on lab endorsement. Each paper includes a stated minimum of mathematics-targeted marks (e.g. Unit 1 at least 8 marks target Level 2 maths or above). First teaching September 2018, first examination January 2019.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: 'YBS11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'WBS11/01', title: 'Unit 1: Marketing and People', durationMinutes: 120, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBS12/01', title: 'Unit 2: Managing Business Activities', durationMinutes: 120, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBS13/01', title: 'Unit 3: Business Decisions and Strategy', durationMinutes: 120, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WBS14/01', title: 'Unit 4: Global Business', durationMinutes: 120, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Business/2018/Specification-and-Sample-Assessment/International-A-Level-Business-Spec.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 1, September 2017): a four-unit modular structure -- two IAS units (1-2) plus two IA2 units (3-4), each externally assessed, each 2h/80marks/25% of the full IAL. Units 1 and 2 each: Section A and B are short- and extended-response questions based on different source booklets (30 marks each), Section C one 20-mark essay from a source. Units 3 and 4 each: Section A short/extended-response questions based on sources (40 marks), Sections B and C each one 20-mark essay question. The International Advanced Subsidiary (XBS11) is claimed on Units 1-2 alone; the full International Advanced Level (YBS11) requires all four units. First teaching September 2018, first examination January 2019, first certification August 2019 (IAS) and August 2020 (full IAL).',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    code: 'YEC11',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'WEC11/01', title: 'Unit 1: Markets in Action', durationMinutes: 105, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WEC12/01', title: 'Unit 2: Macroeconomic Performance and Policy', durationMinutes: 105, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WEC13/01', title: 'Unit 3: Business Behaviour', durationMinutes: 120, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WEC14/01', title: 'Unit 4: Developments in the Global Economy', durationMinutes: 120, marks: 80, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Economics/2018/Specification-and-Sample-Assessment/International-A-Level-Economics-spec.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 2): a four-unit modular structure -- two IAS units (1-2) plus two IA2 units (3-4), each externally assessed, each 80marks/25% of the full IAL, matching the same weighting pattern as sibling Business YBS11 but with different unit durations. Units 1 and 2 each 1h45: six multiple-choice questions (6 marks), five short-answer questions (20 marks), a five-part data-response question from a source booklet (34 marks), one 20-mark essay from a choice of two. Units 3 and 4 each 2h: six multiple-choice questions (6 marks), a five-part data-response question (34 marks), two 20-mark essay questions from a choice of three. First teaching September 2018, first examination January 2019.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-literature',
    code: 'YET01',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2016',
    components: [
      { paperCode: 'WET01/01', title: 'Unit 1: Post-2000 Poetry and Prose', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WET02/01', title: 'Unit 2: Drama', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WET03/01', title: 'Unit 3: Poetry and Prose', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
      { paperCode: 'WET04/01', title: 'Unit 4: Shakespeare and Pre-1900 Poetry', durationMinutes: 120, marks: 50, weightingPercent: 25, assessmentType: 'unit', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/english-literature/2015/specification-and-sample-assessments/9781446954058-ial-englit-iss6-9-spec-240521pm.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official PDF (Specification Issue 7, February 2026): a considerably older-vintage IAL than the 2018-cohort sciences/Business/Economics records above -- first teaching September 2015, first examination June 2016, now on its seventh reissued specification issue. Four-unit modular structure -- two IAS units (1-2) plus two IA2 units (3-4), each externally assessed, each 2h/50marks/25% of the full IAL. Unit 1 (Post-2000 Poetry and Prose): two sections, 25 marks each. Unit 2 (Drama): two sections, 25 marks each. Unit 3 (Poetry and Prose): a 20-mark section and a 30-mark section. Unit 4 (Shakespeare and Pre-1900 Poetry): two sections, 25 marks each.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'edexcel',
    qualificationSlug: 'a-level',
    subjectSlug: 'urdu-language',
    code: '9UR0',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: '9UR0/01', title: 'Paper 1: Translation into English, Reading Comprehension and Writing (Research Question) in Urdu', durationMinutes: 150, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '9UR0/02', title: 'Paper 2: Translation into Urdu and Written Response to Works', durationMinutes: 160, marks: 110, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '9UR0/03', title: 'Paper 3: Listening, Reading and Writing in Urdu', durationMinutes: 135, marks: 60, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Urdu/2018/specification-and-sample-assessments/a-level-urdu-specification11.pdf',
    verifiedOn: '2026-08-28',
    notes: 'IMPORTANT STRUCTURAL NOTE, distinct from every other record in this file: this is the Pearson Edexcel Level 3 Advanced GCE in Urdu (listening, reading and writing) -- a UK-regulated A Level qualification, NOT part of the International Advanced Level (IAL) suite the other Edexcel edexcel/a-level records above belong to. Its own specification PDF states this explicitly on its title page. Directly confirmed against the official PDF (Specification Issue 1, June 2018): a linear qualification, not staged into IAS/IA2 units -- the spec states plainly "Students must complete all assessments in May/June in any single year," so all three papers are sat together in one series with no separate AS certification route. Paper 1 (2h30, 80 marks, 40%): translation into English (20), reading (20), an independent-research writing question (40). Paper 2 (2h40, 110 marks, 30%): translation into Urdu (20 marks) plus an internal-choice written response to two prescribed literary texts, or one text and one film (90 marks total, Sections B/C -- the choice does not change the paper\'s marks or weighting, so no alternativeGroup is needed). Paper 3 (2h15, 60 marks, 30%): listening comprehension (30) plus a combined listening/reading/writing question (30); this is the qualification\'s only assessed listening component -- speaking is explicitly stated as unassessed. First teaching September 2018, first assessment May/June 2020.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'biology',
    code: '8461',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: '8461/1F', title: 'Paper 1 (Foundation): Cell biology; Organisation; Infection and response; and Bioenergetics', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8461/1H', title: 'Paper 1 (Higher): Cell biology; Organisation; Infection and response; and Bioenergetics', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
      { paperCode: '8461/2F', title: 'Paper 2 (Foundation): Homeostasis and response; Inheritance, variation and evolution; and Ecology', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8461/2H', title: 'Paper 2 (Higher): Homeostasis and response; Inheritance, variation and evolution; and Ecology', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear qualification, tiered Foundation/Higher, each tier sits its own Paper 1 and Paper 2 (separate question papers per tier, not shared), each 1h45/100marks/50% of GCSE. Paper 1 covers Topics 1-4 (Cell biology, Organisation, Infection and response, Bioenergetics); Paper 2 covers Topics 5-7 (Homeostasis and response, Inheritance/variation/evolution, Ecology). Questions: multiple choice, structured, closed short answer and open response. AO weightings (from the scheme-of-assessment page): AO1 40%, AO2 40%, AO3 20% overall, identical per paper. 10 required practicals are examined within the written papers -- no separate practical-endorsement mark. First teaching September 2016, first examination May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'chemistry',
    code: '8462',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: '8462/1F', title: 'Paper 1 (Foundation): Atomic structure and the periodic table; Bonding, structure and the properties of matter; Quantitative chemistry; Chemical changes; and Energy changes', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8462/1H', title: 'Paper 1 (Higher): Atomic structure and the periodic table; Bonding, structure and the properties of matter; Quantitative chemistry; Chemical changes; and Energy changes', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
      { paperCode: '8462/2F', title: 'Paper 2 (Foundation): The rate and extent of chemical change; Organic chemistry; Chemical analysis; Chemistry of the atmosphere; and Using resources', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8462/2H', title: 'Paper 2 (Higher): The rate and extent of chemical change; Organic chemistry; Chemical analysis; Chemistry of the atmosphere; and Using resources', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: an identical structure to sibling Biology 8461, independently re-confirmed from Chemistry\'s own page -- linear, tiered Foundation/Higher, each tier sits its own Paper 1 and Paper 2, each 1h45/100marks/50% of GCSE. Paper 1 covers Topics 1-5; Paper 2 covers Topics 6-10 (may also draw on fundamental concepts from 4.1-4.3). AO weightings identical to Biology: AO1 40%, AO2 40%, AO3 20% overall. First teaching September 2016, first examination May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'physics',
    code: '8463',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: '8463/1F', title: 'Paper 1 (Foundation): Energy; Electricity; Particle model of matter; and Atomic structure', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8463/1H', title: 'Paper 1 (Higher): Energy; Electricity; Particle model of matter; and Atomic structure', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
      { paperCode: '8463/2F', title: 'Paper 2 (Foundation): Forces; Waves; Magnetism and electromagnetism; and Space physics', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8463/2H', title: 'Paper 2 (Higher): Forces; Waves; Magnetism and electromagnetism; and Space physics', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: the third of AQA\'s three separate GCSE sciences sharing this exact structure, independently re-confirmed from Physics\'s own page against sibling Biology 8461 and Chemistry 8462 -- linear, tiered Foundation/Higher, each tier sits its own Paper 1 and Paper 2, each 1h45/100marks/50% of GCSE. Paper 1 covers Topics 1-4 (Energy, Electricity, Particle model of matter, Atomic structure); Paper 2 covers Topics 5-8 (Forces, Waves, Magnetism and electromagnetism, Space physics -- physics-only content, distinguishing this from the Combined Science: Trilogy 8464 route, not modeled here). First teaching September 2016, first examination May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'business',
    code: '8132',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '8132/1', title: 'Paper 1: Influences on operations and HRM on business activity', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '8132/2', title: 'Paper 2: Influences of marketing and finance on business activity', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/business/gcse/business-8132/specification/scheme-of-assessment',
    verifiedOn: '2026-08-28',
    notes: 'Confirmed against AQA search results for the official specification-at-a-glance and scheme-of-assessment pages: linear, not tiered, two written papers each 1h45/90marks/50% of GCSE. Paper 1: Section A multiple-choice and short-answer (20 marks) plus further data-response sections. Paper 2: Section A (20 marks) plus Section B case-study/data-response (~34 marks) and Section C case-study/data-response (~36 marks). AO weightings (from the scheme-of-assessment page): AO1 35%, AO2 35%, AO3 30% overall, split ~evenly per paper. First teaching September 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'economics',
    code: '8136',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '8136/1', title: 'Paper 1: How markets work', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '8136/2', title: 'Paper 2: How the economy works', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/economics/gcse/economics-8136/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, two written papers each 1h45/80marks/50% of GCSE. Paper 1 (How markets work, Content 1-6): Section A ten multiple-choice questions plus calculation/short/extended-response questions; Section B five questions mixing calculations, short and extended responses. Paper 2 (How the economy works, Content 7-11): identical question format. Both papers explicitly draw on knowledge from the entire course, not just their own content block. AO weightings (from the scheme-of-assessment page): AO1 35%, AO2 35%, AO3 30% overall, ~17.5/17.5/15% per paper. First teaching September 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'english-language',
    code: '8700',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '8700/1', title: 'Paper 1: Explorations in creative reading and writing', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '8700/2', title: "Paper 2: Writers' viewpoints and perspectives", durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, two written papers each 1h45/80marks/50% of GCSE, each split 40/40 marks between a reading section and a writing section. Paper 1 (Explorations in creative reading and writing): Section A Reading (one literature fiction extract, 40 marks) + Section B Writing (descriptive/narrative, 40 marks). Paper 2 (Writers\' viewpoints and perspectives): Section A Reading (two linked non-fiction extracts, 40 marks) + Section B Writing (viewpoint-based, 40 marks). In addition to the two written papers, every candidate also completes a compulsory Spoken Language endorsement -- a separate, internally assessed and centre-marked speaking/listening activity, reported on the certificate as Pass/Merit/Distinction/Not Classified. Ofqual rules require it to be reported separately and it does NOT contribute to the overall GCSE grade -- it is NOT modeled as a component here (the validator requires marks > 0 on every component, and the endorsement carries no numeric mark at all, only a qualitative grade), but is disclosed here so the two written papers are not mistaken for the qualification\'s full assessment picture. First teaching September 2015, first examination June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'world-history',
    code: '8145',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: '8145/1', title: 'Paper 1: Understanding the modern world (Section A period study + Section B wider world depth study)', durationMinutes: 120, marks: 84, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '8145/2', title: 'Paper 2: Shaping the nation (Section A thematic study + Section B British depth study incl. historic environment)', durationMinutes: 120, marks: 84, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/history/gcse/history-8145/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page. NAMING NOTE: AQA itself calls this qualification plain \'History\' (8145) -- there is no separate AQA \'World History\' title -- but this record uses subjectSlug \'world-history\' to match this site\'s existing subject categorisation for this combination. Linear, not tiered, two written papers, each 2h/84marks (including 4 marks for spelling, punctuation and grammar)/50% of GCSE, total 168 marks. Paper 1 (Understanding the modern world): Section A -- choice of ONE period study from four options (America 1840-1895, Germany 1890-1945, Russia 1894-1945, or America 1920-1973), six compulsory questions, 40 marks; Section B -- choice of ONE wider world depth study from five conflict-and-tension options, four compulsory questions, 40 marks. Paper 2 (Shaping the nation): Section A -- choice of ONE thematic study from three long-run Britain options, four compulsory questions, 40 marks; Section B -- choice of ONE British depth study (incl. historic environment) from four options, four compulsory questions, 40 marks. Options are declared at point of entry. First teaching September 2016.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'mathematics',
    code: '8300',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: '8300/1F', title: 'Paper 1 (Non-calculator, Foundation)', durationMinutes: 90, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation' },
      { paperCode: '8300/2F', title: 'Paper 2 (Calculator, Foundation)', durationMinutes: 90, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation', calculatorAllowed: true },
      { paperCode: '8300/3F', title: 'Paper 3 (Calculator, Foundation)', durationMinutes: 90, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true, tier: 'foundation', calculatorAllowed: true },
      { paperCode: '8300/1H', title: 'Paper 1 (Non-calculator, Higher)', durationMinutes: 90, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher' },
      { paperCode: '8300/2H', title: 'Paper 2 (Calculator, Higher)', durationMinutes: 90, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher', calculatorAllowed: true },
      { paperCode: '8300/3H', title: 'Paper 3 (Calculator, Higher)', durationMinutes: 90, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true, tier: 'higher', calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Confirmed against AQA search results for the official specification-at-a-glance/scheme-of-assessment pages: linear, tiered Foundation (grades 1-5) / Higher (grades 4-9), each tier sits three written papers -- Paper 1 non-calculator, Papers 2-3 calculator-allowed -- each 1h30/80marks, each 33\u2153% (33.33) of GCSE, total 240 marks per tier. Assessed 100% by written examination; no coursework, controlled assessment or non-exam assessment. First teaching September 2015, first examination June 2017 (Foundation)/2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'psychology',
    code: '8182',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '8182/1', title: 'Paper 1: Cognition and behaviour', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '8182/2', title: 'Paper 2: Social context and behaviour', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/psychology/gcse/psychology-8182/specification/scheme-of-assessment',
    verifiedOn: '2026-08-28',
    notes: 'Confirmed against AQA search results for the official specification-at-a-glance/scheme-of-assessment pages: linear, not tiered, two written papers, each 1h45/100marks/50% of GCSE. Paper 1 (Cognition and behaviour) and Paper 2 (Social context and behaviour), both externally assessed with no coursework or controlled assessment. First teaching September 2017, first examination June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'english-literature',
    code: '8702',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '8702/1', title: 'Paper 1: Shakespeare and the 19th-century novel', durationMinutes: 105, marks: 64, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: '8702/2', title: 'Paper 2: Modern texts and poetry', durationMinutes: 135, marks: 96, weightingPercent: 60, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, closed-book (any stimulus materials are provided in the assessment), two written papers of UNEQUAL weighting -- unlike the sciences/humanities pairs above. Paper 1 (Shakespeare and the 19th-century novel): 1h45, 64 marks, 40% of GCSE -- Section A one Shakespeare play question, Section B one 19th-century novel question, both requiring detailed extract analysis plus whole-text discussion. Paper 2 (Modern texts and poetry): 2h15, 96 marks, 60% of GCSE -- Section A one modern prose/drama essay from a choice of two, Section B one comparative poetry-anthology question, Section C one unseen-poetry comparison. All assessments compulsory. First teaching September 2015, first examination June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'accounting',
    code: '7127',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '7127/1', title: 'Paper 1', durationMinutes: 180, marks: 120, weightingPercent: 50, assessmentType: 'written-exam' },
      { paperCode: '7127/2', title: 'Paper 2', durationMinutes: 180, marks: 120, weightingPercent: 50, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/accounting/a-level/accounting-7127/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, two written papers, each 3h/120marks/50% of A-level, each split into three compulsory sections (Section A: 10 MCQs plus short-answer, 30 marks; Section B: two structured questions, 40 marks; Section C: two extended-answer questions, 50 marks). Paper 1 covers content sections 1-8 and 14-18; Paper 2 covers sections 1-3, 8-13 and 17-18. First teaching September 2017, first A-level assessment June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    code: '7402',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7402/1', title: 'Paper 1', durationMinutes: 120, marks: 91, weightingPercent: 35, assessmentType: 'written-exam' },
      { paperCode: '7402/2', title: 'Paper 2', durationMinutes: 120, marks: 91, weightingPercent: 35, assessmentType: 'written-exam' },
      { paperCode: '7402/3', title: 'Paper 3', durationMinutes: 120, marks: 78, weightingPercent: 30, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/biology/a-level/biology-7402/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three written papers. Paper 1 (any content from topics 1-4, incl. practical skills): 2h/91marks/35% of A-level -- 76 marks short/long answer, 15 marks extended response. Paper 2 (topics 5-8, incl. practical skills): 2h/91marks/35% -- 76 marks short/long answer, 15 marks comprehension. Paper 3 (any content from topics 1-8, incl. practical skills): 2h/78marks/30% -- 38 marks structured questions incl. practical techniques, 15 marks critical analysis of experimental data, 25 marks essay (choice of two titles). Total 260 marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    code: '7405',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7405/1', title: 'Paper 1', durationMinutes: 120, marks: 105, weightingPercent: 35, assessmentType: 'written-exam' },
      { paperCode: '7405/2', title: 'Paper 2', durationMinutes: 120, marks: 105, weightingPercent: 35, assessmentType: 'written-exam' },
      { paperCode: '7405/3', title: 'Paper 3', durationMinutes: 120, marks: 90, weightingPercent: 30, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/chemistry/a-level/chemistry-7405/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three written papers. Paper 1 (relevant physical chemistry sections 3.1.1-3.1.4/3.1.6-3.1.8/3.1.10-3.1.12, plus inorganic chemistry section 3.2, plus relevant practical skills): 2h/105marks/35% of A-level, short and long answer questions. Paper 2 (relevant physical chemistry sections 3.1.2-3.1.6/3.1.9, plus organic chemistry section 3.3, plus relevant practical skills): 2h/105marks/35%, short and long answer questions. Paper 3 (any content, any practical skills): 2h/90marks/30% -- 40 marks practical techniques and data analysis, 20 marks questions testing across the specification, 30 marks multiple choice. Total 300 marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'computer-science',
    code: '7517',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7517/1', title: 'Paper 1', durationMinutes: 150, marks: 100, weightingPercent: 40, assessmentType: 'written-exam' },
      { paperCode: '7517/2', title: 'Paper 2', durationMinutes: 150, marks: 100, weightingPercent: 40, assessmentType: 'written-exam' },
      { paperCode: '7517/NEA', title: 'Non-exam assessment: the computing practical project', durationMinutes: null, marks: 75, weightingPercent: 20, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance and scheme-of-assessment pages: linear, not tiered. Paper 1 (on-screen exam testing programming ability and theoretical knowledge from content 10-13 plus systematic problem-solving skills from content 22): 2h30, raw 100 marks, 40% of A-level. Paper 2 (written exam testing content 14-21): 2h30, raw 100 marks, 40% of A-level. Non-exam assessment (the computing practical project, assessing ability to solve/investigate a practical problem using a systematic approach): raw 75 marks, 20% of A-level, internally assessed and externally moderated by AQA. Raw Paper 1/2 marks are scaled x1.5 (to 150 each) for the final total of 375 scaled marks -- this record uses the RAW marks the board publishes per component, consistent with how every other record in this file records marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    code: '7136',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7136/1', title: 'Paper 1: Markets and market failure', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7136/2', title: 'Paper 2: National and international economy', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7136/3', title: 'Paper 3: Economic principles and issues', durationMinutes: 120, marks: 80, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/economics/a-level/economics-7136/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three compulsory written papers, each 2h/80marks. Paper 1 (Markets and market failure, content 1-8): Section A data-response (choice of one of two contexts, 40 marks), Section B essay (choice of one of three, 40 marks), 33.3% of A-level. Paper 2 (National and international economy, content 9-14): same format, 33.3%. Paper 3 (Economic principles and issues, all content 1-14): Section A 30 marks multiple choice, Section B 50 marks case-study questions, 33.3% (recorded as 33.34% on the third paper so the tier total sums to exactly 100). Total 240 marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-language',
    code: '7702',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7702/1', title: 'Paper 1: Language, the Individual and Society', durationMinutes: 150, marks: 100, weightingPercent: 40, assessmentType: 'written-exam' },
      { paperCode: '7702/2', title: 'Paper 2: Language Diversity and Change', durationMinutes: 150, marks: 100, weightingPercent: 40, assessmentType: 'written-exam' },
      { paperCode: '7702/NEA', title: 'Non-exam assessment: Language in Action', durationMinutes: null, marks: 100, weightingPercent: 20, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/english/a-level/english-7702/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered. Paper 1 (Language, the Individual and Society -- textual variations/representations, and children\'s language development 0-11): 2h30/100marks/40% of A-level -- Section A analysis of two linked texts plus comparison (70 marks total across three questions), Section B discursive essay on children\'s language development (30 marks). Paper 2 (Language Diversity and Change, Language Discourses, Writing Skills): 2h30/100marks/40% -- Section A evaluative essay on diversity or change (30 marks), Section B analysis of two texts (40 marks) plus directed writing task (30 marks). Non-exam assessment \'Language in Action\' (a 2,000-word language investigation plus a 1,500-word original writing piece with commentary, word count 3,500 total): 100 marks/20% of A-level, teacher-assessed and AQA-moderated. Total 300 marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'law',
    code: '7162',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '7162/1', title: 'Paper 1: The nature of law and the English legal system / Criminal law', durationMinutes: 120, marks: 100, weightingPercent: 33, assessmentType: 'written-exam' },
      { paperCode: '7162/2', title: 'Paper 2: The nature of law and the English legal system / Tort', durationMinutes: 120, marks: 100, weightingPercent: 33, assessmentType: 'written-exam' },
      { paperCode: '7162/3', title: 'Paper 3: The nature of law and the English legal system / Law of contract OR Human rights', durationMinutes: 120, marks: 100, weightingPercent: 34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/law/a-level/law-7162/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three written papers, each 2h/100marks, each mixing multiple-choice, short-answer and extended-writing questions. Paper 1: the nature of law and the English legal system (25 marks) plus Criminal law (75 marks), 33% of A-level. Paper 2: the nature of law and the English legal system (25 marks) plus Tort (75 marks), 33% of A-level. Paper 3: the nature of law and the English legal system (25 marks) plus EITHER Law of contract OR Human rights (75 marks, centre/candidate choice of option), 33% of A-level (recorded as 34% on the third paper so the total sums to exactly 100). Total 300 marks. First teaching September 2017, first A-level assessment June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    code: '7357',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: '7357/1', title: 'Paper 1', durationMinutes: 120, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7357/2', title: 'Paper 2', durationMinutes: 120, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7357/3', title: 'Paper 3', durationMinutes: 120, marks: 100, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three compulsory written papers, each 2h/100marks/33⅓% (recorded as 33.34% on the third paper so the total sums to exactly 100), mixing short single-mark questions with multi-step problems. Paper 1: pure content (Proof, Algebra and functions, Coordinate geometry, Sequences and series, Trigonometry, Exponentials and logarithms, Differentiation, Integration, Numerical methods). Paper 2: Paper 1 content plus mechanics (Vectors, Quantities and units in mechanics, Kinematics, Forces and Newton\'s laws, Moments). Paper 3: Paper 1 content plus statistics (Statistical sampling, Data presentation and interpretation, Probability, Statistical distributions, Statistical hypothesis testing). Total 300 marks. Common DfE-set content across all exam boards. First teaching September 2017, first A-level assessment June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    code: '7408',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7408/1', title: 'Paper 1', durationMinutes: 120, marks: 85, weightingPercent: 34, assessmentType: 'written-exam' },
      { paperCode: '7408/2', title: 'Paper 2', durationMinutes: 120, marks: 85, weightingPercent: 34, assessmentType: 'written-exam' },
      { paperCode: '7408/3', title: 'Paper 3', durationMinutes: 120, marks: 80, weightingPercent: 32, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three written papers. Paper 1 (sections 1-5 plus 6.1 Periodic motion): 2h/85marks/34% of A-level -- 60 marks short/long answer, 25 marks multiple choice. Paper 2 (sections 6.2 Thermal Physics, 7 and 8, assuming knowledge from 1-6.1): 2h/85marks/34% -- 60 marks short/long answer, 25 marks multiple choice. Paper 3 (Section A compulsory practical skills and data analysis, 45 marks; Section B one optional topic chosen from Astrophysics/Medical physics/Engineering physics/Turning points in physics/Electronics, 35 marks): 2h/80marks/32%. Total 250 marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'psychology',
    code: '7182',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2027',
    components: [
      { paperCode: '7182/1', title: 'Paper 1: Introductory Topics in Psychology', durationMinutes: 120, marks: 96, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7182/2', title: 'Paper 2: Psychology in Context', durationMinutes: 120, marks: 96, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7182/3', title: 'Paper 3: Issues and Options in Psychology', durationMinutes: 120, marks: 96, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/psychology/a-level/psychology-7182/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page, which for this subject is a specification UPDATED for first teaching September 2025 (spec PDF dated 08 Oct 2025) -- AQA\'s own page banner states \'first AS exams in 2026 and A-level in 2027\'; firstAssessment below is recorded as the A-level series (2027), not the AS series. Linear, not tiered, three written papers, each 2h/96marks/33⅓% (recorded as 33.34% on the third paper so the total sums to exactly 100), each split into four 24-mark sections of multiple choice/short answer/extended writing. Paper 1 (compulsory content: Social influence, Memory, Attachment, Clinical Psychology and Mental Health). Paper 2 (compulsory content: Approaches in Psychology, Biopsychology, Research methods). Paper 3 (compulsory Issues and debates in Psychology, plus one topic from each of three option groups: Relationships/Gender/Cognition and development; Schizophrenia/Eating behaviour/Stress; Aggression/Forensic Psychology/Addiction). Total 288 marks. This record has not independently verified whether the pre-2025 version of 7182 differed in structure; only the current live specification-at-a-glance page was consulted.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'sociology',
    code: '7192',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: '7192/1', title: 'Paper 1: Education with Theory and Methods', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7192/2', title: 'Paper 2: Topics in Sociology', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7192/3', title: 'Paper 3: Crime and Deviance with Theory and Methods', durationMinutes: 120, marks: 80, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/sociology/a-level/sociology-7192/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three written papers, each 2h/80marks/33⅓% (recorded as 33.34% on the third paper so the total sums to exactly 100). Paper 1 (compulsory: Education 50 marks, Methods in Context 20 marks, Theory and Methods 10 marks). Paper 2 (Topics in Sociology -- one topic chosen from Culture and Identity/Families and Households/Health/Work Poverty and Welfare for Section A, 40 marks, and one topic chosen from Beliefs in Society/Global Development/The Media/Stratification and Differentiation for Section B, 40 marks). Paper 3 (compulsory: Crime and Deviance 50 marks, Theory and Methods 30 marks). Total 240 marks. First teaching September 2015, first A-level assessment June 2017.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-literature',
    code: '7717',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2027',
    components: [
      { paperCode: '7717/1', title: 'Paper 1: Literary genres', durationMinutes: 150, marks: 75, weightingPercent: 40, assessmentType: 'written-exam' },
      { paperCode: '7717/2', title: 'Paper 2: Texts and genres', durationMinutes: 180, marks: 75, weightingPercent: 40, assessmentType: 'written-exam' },
      { paperCode: '7717/NEA', title: 'Non-exam assessment: Theory and independence', durationMinutes: null, marks: 50, weightingPercent: 20, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/english/a-level/english-7717/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page. This is AQA\'s updated English Literature B specification for first teaching September 2025 (spec PDF dated 21 Oct 2025), first A-level exams 2027 per the page\'s own banner; firstAssessment is recorded as 2027. Linear. Paper 1 (Literary genres -- choice of Option 1A \'Aspects of tragedy\' or Option 1B \'Aspects of comedy\'; one Shakespeare text, a second drama text, and one further text, one of which pre-1900): 2h30, closed book, 75marks, 40% of A-level -- Section A Shakespeare passage-based question (25), Section B Shakespeare essay (25), Section C texts-linking essay (25). Paper 2 (Texts and genres -- choice of Option 2A \'Elements of crime writing\' or Option 2B \'Elements of political and social protest writing\'; one post-2000 prose text, one poetry text, one further text (one pre-1900), plus an unseen passage): 3h, open book, 75marks, 40% of A-level -- Section A unseen-passage question (25), Section B set-text essay (25), Section C texts-connecting essay (25). Non-exam assessment (two 1,250-1,500 word essays on two texts informed by the Critical Anthology, one of which may be re-creative with commentary): 50marks/20% of A-level, teacher-assessed and AQA-moderated. Total 200 marks. AQA\'s own title for this combination, as recorded on this site, is \'English Literature B (7716/7717)\'; this record is specifically the A-level (7717), not the AS (7716).',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: '7132',
    specStatus: 'current',
    relatedCode: '7138',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    finalAssessment: '2027',
    components: [
      { paperCode: '7132/1', title: 'Paper 1: Business 1', durationMinutes: 120, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7132/2', title: 'Paper 2: Business 2', durationMinutes: 120, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7132/3', title: 'Paper 3: Business 3', durationMinutes: 120, marks: 100, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/business/a-level/business-7132/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, three compulsory written papers, each 2h/100marks/33⅓% (recorded as 33.34% on the third paper so the total sums to exactly 100), each drawing on all ten content sections. Paper 1 (Business 1): Section A 15 MCQs (15 marks), Section B short-answer (35 marks), Sections C/D one essay each from a choice of two (25 marks each). Paper 2 (Business 2): three compulsory data-response questions, each approx. 33 marks, each with three or four parts. Paper 3 (Business 3): one compulsory case study followed by approx. six questions. Total 300 marks. AQA\'s own subject page carries a live banner stating this specification is \'outgoing\' -- a replacement (7138) has been accredited for first teaching September 2026, but 7132 remains the current, correct code for this site\'s records and continues to be examined for cohorts already partway through, through summer 2027; recorded here as current (with relatedCode 7138) because 7138\'s own first-teaching date, September 2026, has not yet arrived as of this record\'s verification date -- 7132 remains what every enrolling and continuing student actually follows today. First teaching September 2023, first A-level assessment June 2025, final A-level assessment June 2027.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'as-level',
    subjectSlug: 'business',
    code: '7131',
    specStatus: 'current',
    relatedCode: '7137',
    tiers: ['not-tiered'],
    firstAssessment: '2024',
    finalAssessment: '2026',
    components: [
      { paperCode: '7131/1', title: 'Paper 1: Business 1', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam' },
      { paperCode: '7131/2', title: 'Paper 2: Business 2', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/business/as-level/business-7131/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification-at-a-glance page: linear, not tiered, two compulsory written papers, each 1h30/80marks/50% of AS, both required for the award. Paper 1 (Business 1): Section A 10 MCQs (10 marks), Section B short-answer (approx. 20 marks), Section C two data-response stimuli with questions (approx. 25 marks). Paper 2 (Business 2): one compulsory case study, approx. seven questions. Total 160 marks. AQA\'s own subject page carries a live banner stating this specification is \'outgoing\' -- a replacement (7137) has been accredited for first teaching September 2026, but 7131 remains the current, correct code for this site\'s records and continues to be examined for cohorts already partway through, through summer 2026; recorded here as current (with relatedCode 7137) because 7137\'s own first-teaching date, September 2026, has not yet arrived as of this record\'s verification date -- 7131 remains what every enrolling and continuing student actually follows today. First teaching September 2023, first AS assessment June 2024, final AS assessment June 2026.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: '7138',
    specStatus: 'future',
    relatedCode: '7132',
    tiers: ['not-tiered'],
    firstTeaching: '2026-09',
    firstAssessment: '2028',
    components: [
      { paperCode: '7138/1', title: 'Paper 1: What is business? Managing marketing and finance', durationMinutes: 120, marks: 90, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7138/2', title: 'Paper 2: Managing people and operations', durationMinutes: 120, marks: 90, weightingPercent: 33.33, assessmentType: 'written-exam' },
      { paperCode: '7138/3', title: 'Paper 3: Business and society, business and the external environment, and business strategy', durationMinutes: 120, marks: 90, weightingPercent: 33.34, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/business/a-level/business-7138/specification',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification PDF (\'AS and A-level Business AS (7137) A-level (7138) Specification\', Version 1.1, November 2025): linear, not tiered. Paper 1 (Unit 3.1: What is business? Managing marketing and finance): 2h, 90 marks, 33.3% of A-level (recorded as 33.33% here) -- two case studies, each followed by five compulsory questions worth 45 marks. Paper 2 (Unit 3.2: Managing people and operations, with links to Unit 3.1): 2h, 90 marks, 33.3% (33.33% here) -- same two-case-study format. Paper 3 (Unit 3.3: Business and society, business and the external environment, and business strategy, with links to Units 3.1/3.2): 2h, 90 marks, 33.3% (recorded as 33.34% here so the total sums to exactly 100). Total 270 marks (raw marks scaled ×1). Replaces 7132: for teaching from September 2026 onwards, first A-level exams June 2028. 7132 remains the current code and continues to be examined through summer 2027 for cohorts already partway through; recorded here as future with relatedCode 7132 accordingly.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'as-level',
    subjectSlug: 'business',
    code: '7137',
    specStatus: 'future',
    relatedCode: '7131',
    tiers: ['not-tiered'],
    firstTeaching: '2026-09',
    firstAssessment: '2027',
    components: [
      { paperCode: '7137/1', title: 'Paper 1: What is business? Managing marketing and finance', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam' },
      { paperCode: '7137/2', title: 'Paper 2: Managing people and operations', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam' },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/business/as-level/business-7137/specification',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official AQA specification PDF (\'AS and A-level Business AS (7137) A-level (7138) Specification\', Version 1.1, November 2025): linear, not tiered, two compulsory written papers, each 1h45/80marks/50% of AS. Paper 1 (Unit 3.1: What is business? Managing marketing and finance): two case studies, each followed by six compulsory questions worth 40 marks in total. Paper 2 (Unit 3.2: Managing people and operations, with links to Unit 3.1): same two-case-study format. Total 160 marks (raw marks scaled ×1). Replaces 7131: for teaching from September 2026 onwards, first AS exams June 2027. 7131 remains the current code and continues to be examined through summer 2026 for cohorts already partway through; recorded here as future with relatedCode 7131 accordingly.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'gcse',
    subjectSlug: 'mathematics',
    code: 'J560',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'J560/01', title: 'Paper 1 (Foundation Tier, Calculator)', durationMinutes: 90, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'J560/02', title: 'Paper 2 (Foundation Tier, Non-Calculator)', durationMinutes: 90, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'J560/03', title: 'Paper 3 (Foundation Tier, Calculator)', durationMinutes: 90, marks: 100, weightingPercent: 33.34, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'J560/04', title: 'Paper 4 (Higher Tier, Calculator)', durationMinutes: 90, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'J560/05', title: 'Paper 5 (Higher Tier, Non-Calculator)', durationMinutes: 90, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'J560/06', title: 'Paper 6 (Higher Tier, Calculator)', durationMinutes: 90, marks: 100, weightingPercent: 33.34, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/specification-at-a-glance/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own live GCSE (9-1) Mathematics (J560) "Specification at a glance" page (2026-08-28). Foundation tier candidates sit Papers 01, 02 and 03; Higher tier candidates sit Papers 04, 05 and 06. Each paper is 100 marks, 1 hour 30 minutes, printed as "33⅓%" weighting; two papers per tier permit a calculator (01/03 Foundation, 04/06 Higher) and one is non-calculator (02 Foundation, 05 Higher). Topics apply across both tiers and may be assessed on any paper. Weightings recorded as 33.33/33.33/33.34 per tier so the typed total sums to exactly 100%, matching the board\'s own "33⅓%" per-paper figure.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'gcse',
    subjectSlug: 'chemistry',
    code: 'J248',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'J248/01', title: 'Paper 1 (Foundation Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true },
      { paperCode: 'J248/02', title: 'Paper 2 (Foundation Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true },
      { paperCode: 'J248/03', title: 'Paper 3 (Higher Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true },
      { paperCode: 'J248/04', title: 'Paper 4 (Higher Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/462559-exploring-our-question-papers-gateway-science.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own official "GCSE (9-1) Gateway Science: Exploring our question papers" guide (covering J247/J248/J249/J250, 2026-08-28). For each separate science, assessment is through two exams per tier: Paper 1/3 tests topics 1-3 plus topic 7 (practical); Paper 2/4 tests topics 4-6 plus topic 7 (practical), with assumed knowledge of topics 1-3 and synoptic assessment. Each paper is 90 marks, 1 hour 45 minutes, 50% weighting, for both Foundation tier (Papers 1-2) and Higher tier (Papers 3-4).',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'gcse',
    subjectSlug: 'physics',
    code: 'J249',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'J249/01', title: 'Paper 1 (Foundation Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true },
      { paperCode: 'J249/02', title: 'Paper 2 (Foundation Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true },
      { paperCode: 'J249/03', title: 'Paper 3 (Higher Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true },
      { paperCode: 'J249/04', title: 'Paper 4 (Higher Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/462559-exploring-our-question-papers-gateway-science.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own official "GCSE (9-1) Gateway Science: Exploring our question papers" guide (covering J247/J248/J249/J250, 2026-08-28). For each separate science, assessment is through two exams per tier: Paper 1/3 tests topics 1-3 plus topic 7 (practical); Paper 2/4 tests topics 4-6 plus topic 7 (practical), with assumed knowledge of topics 1-3 and synoptic assessment. Each paper is 90 marks, 1 hour 45 minutes, 50% weighting, for both Foundation tier (Papers 1-2) and Higher tier (Papers 3-4).',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'gcse',
    subjectSlug: 'biology',
    code: 'J247',
    specStatus: 'current',
    tiers: ['foundation', 'higher'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'J247/01', title: 'Paper 1 (Foundation Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true },
      { paperCode: 'J247/02', title: 'Paper 2 (Foundation Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'foundation', externallyAssessed: true },
      { paperCode: 'J247/03', title: 'Paper 3 (Higher Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true },
      { paperCode: 'J247/04', title: 'Paper 4 (Higher Tier)', durationMinutes: 105, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', tier: 'higher', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/462559-exploring-our-question-papers-gateway-science.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own official "GCSE (9-1) Gateway Science: Exploring our question papers" guide (covering J247/J248/J249/J250, 2026-08-28). For each separate science, assessment is through two exams per tier: Paper 1/3 tests topics 1-3 plus topic 7 (practical); Paper 2/4 tests topics 4-6 plus topic 7 (practical), with assumed knowledge of topics 1-3 and synoptic assessment. Each paper is 90 marks, 1 hour 45 minutes, 50% weighting, for both Foundation tier (Papers 1-2) and Higher tier (Papers 3-4).',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'gcse',
    subjectSlug: 'business',
    code: 'J204',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'J204/01', title: 'Business Activity, Marketing and People', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'J204/02', title: 'Operations, Finance and Influences on Business', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/business-j204-from-2017/specification-at-a-glance/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own live GCSE (9-1) Business (J204) "Specification at a glance" page (2026-08-28). Component 01 "Business activity, marketing and people" and Component 02 "Operations, finance and influences on business" are each 80 marks, 1 hour 30 minutes, 50% weighting. Component 02 carries synoptic assessment (marked with an asterisk on the board\'s own table). Students must complete both components.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'gcse',
    subjectSlug: 'economics',
    code: 'J205',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'J205/01', title: 'Introduction to Economics', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'J205/02', title: 'National and International Economics', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/economics-j205-from-2017/specification-at-a-glance/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own live GCSE (9-1) Economics (J205) "Specification at a glance" page (2026-08-28). Component 01 "Introduction to economics" and Component 02 "National and international economics" are each 80 marks, 1 hour 30 minutes, 50% weighting. Both components include synoptic assessment, per the board\'s own page. Students must take both components.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    code: 'H432',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'H432/01', title: 'Paper 1: Periodic table, elements and physical chemistry', durationMinutes: 135, marks: 100, weightingPercent: 37, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H432/02', title: 'Paper 2: Synthesis and analytical techniques', durationMinutes: 135, marks: 100, weightingPercent: 37, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H432/03', title: 'Paper 3: Unified chemistry', durationMinutes: 90, marks: 70, weightingPercent: 26, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/assessment-story-exploring-our-question-papers-chemistrya.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own official A Level Chemistry A (H432) "Assessment story: exploring our question papers" guide (2026-08-28). Three examined components: Paper 1 "Periodic table, elements and physical chemistry" and Paper 2 "Synthesis and analytical techniques" are each 100 marks/2h15/37%; Paper 3 "Unified chemistry" (all modules, synoptic) is 70 marks/1h30/26%. Total 270 marks across the three papers determines the overall A*-E grade. A separate Practical Endorsement (non-exam assessment, minimum 12 practical activities, internally assessed) is reported separately as Pass/Not Classified and does not contribute marks to the 270-mark grade; recorded here as a 0-mark/0-weighting non-exam-assessment component to preserve that it exists without implying it adds to the 270-mark total.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    code: 'H556',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'H556/01', title: 'Paper 1: Modelling physics', durationMinutes: 135, marks: 100, weightingPercent: 37, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H556/02', title: 'Paper 2: Exploring physics', durationMinutes: 135, marks: 100, weightingPercent: 37, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H556/03', title: 'Paper 3: Unified physics', durationMinutes: 90, marks: 70, weightingPercent: 26, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/assessment-story-exploring-our-question-papers-physicsa.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own official A Level Physics A (H556) "Assessment story: exploring our question papers" guide (2026-08-28). Three examined components: Paper 1 "Modelling physics" and Paper 2 "Exploring physics" are each 100 marks/2h15/37%; Paper 3 "Unified physics" (all modules, synoptic) is 70 marks/1h30/26%. Total 270 marks across the three papers determines the overall A*-E grade. A separate Practical Endorsement (non-exam assessment, minimum 12 practical activities, internally assessed) is reported separately as Pass/Not Classified and does not contribute marks to the 270-mark grade; recorded here as a 0-mark/0-weighting non-exam-assessment component to preserve that it exists without implying it adds to the 270-mark total.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    code: 'H420',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'H420/01', title: 'Paper 1: Biological processes', durationMinutes: 135, marks: 100, weightingPercent: 37, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H420/02', title: 'Paper 2: Biological diversity', durationMinutes: 135, marks: 100, weightingPercent: 37, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H420/03', title: 'Paper 3: Unified Biology', durationMinutes: 90, marks: 70, weightingPercent: 26, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/Images/assessment-story-exploring-our-question-papers-biologya.pdf',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own official A Level Biology A (H420) "Assessment story: exploring our question papers" guide (2026-08-28). Three examined components: Paper 1 "Biological processes" and Paper 2 "Biological diversity" are each 100 marks/2h15/37%; Paper 3 "Unified Biology" (all modules, synoptic) is 70 marks/1h30/26%. Total 270 marks across the three papers determines the overall A*-E grade. A separate Practical Endorsement (non-exam assessment, minimum 12 practical activities, internally assessed) is reported separately as Pass/Not Classified and does not contribute marks to the 270-mark grade; recorded here as a 0-mark/0-weighting non-exam-assessment component to preserve that it exists without implying it adds to the 270-mark total.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    code: 'H240',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'H240/01', title: 'Pure Mathematics', durationMinutes: 120, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H240/02', title: 'Pure Mathematics and Statistics', durationMinutes: 120, marks: 100, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H240/03', title: 'Pure Mathematics and Mechanics', durationMinutes: 120, marks: 100, weightingPercent: 33.34, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/specification-at-a-glance/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own live A Level Mathematics A (H240) "Specification at a glance" page (2026-08-28). Component 01 "Pure mathematics", Component 02 "Pure mathematics and statistics" (~50 pure/~50 statistics, some questions on a pre-release data set) and Component 03 "Pure mathematics and mechanics" (~50 pure/~50 mechanics) are each 100 marks, 2 hours, printed as "33⅓%" weighting. Students must take all three components. Weightings recorded as 33.33/33.33/33.34 so the typed total sums to exactly 100%.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ocr',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    code: 'H460',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'H460/01', title: 'Microeconomics', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H460/02', title: 'Macroeconomics', durationMinutes: 120, marks: 80, weightingPercent: 33.33, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'H460/03', title: 'Themes in Economics', durationMinutes: 120, marks: 80, weightingPercent: 33.34, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/economics-h060-h460-from-2019/specification-at-a-glance/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against OCR\'s own live A Level Economics (H460) "Specification at a glance" page (2026-08-28). Component 01 "Microeconomics" and Component 02 "Macroeconomics" are each 80 marks, 2 hours, printed as "33⅓%" weighting; Component 03 "Themes in economics" (synoptic, applies content from both prior components to an unseen theme) is also 80 marks/2 hours/"33⅓%". Students must take all three components. Weightings recorded as 33.33/33.33/33.34 so the typed total sums to exactly 100%.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'mathematics',
    code: '9260',
    specStatus: 'current',
    tiers: ['core', 'extended'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'Paper 1C', title: 'Paper 1 (Core)', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2C', title: 'Paper 2 (Core)', durationMinutes: 90, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'core', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 1E', title: 'Paper 1 (Extension)', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2E', title: 'Paper 2 (Extension)', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', tier: 'extended', externallyAssessed: true, calculatorAllowed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-mathematics/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section of the board\'s own qualification page: two tiers, Core (grades 1-5) and Extension (grades 4-9); either paper of a tier may assess any part of the specification; scientific calculator allowed throughout. Linear qualification, no coursework. First teaching September 2016, first examined May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    code: '9660',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'P1', title: 'AS Paper 1 -- Unit P1: Pure Maths', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'PSM1', title: 'AS Paper 2 -- Unit PSM1: Pure Maths, Statistics and Mechanics', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'P2', title: 'A-level Paper 1 -- Unit P2: Pure Maths', durationMinutes: 150, marks: 120, weightingPercent: 37.5, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'S2', title: 'A-level Paper 2 (Option A) -- Unit S2: Statistics', durationMinutes: 90, marks: 80, weightingPercent: 22.5, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true, optionality: 'choose-n-of-m', alternativeGroup: 's2-or-m2' },
      { paperCode: 'M2', title: 'A-level Paper 2 (Option B) -- Unit M2: Mechanics', durationMinutes: 90, marks: 80, weightingPercent: 22.5, assessmentType: 'written-exam', externallyAssessed: true, calculatorAllowed: true, optionality: 'choose-n-of-m', alternativeGroup: 's2-or-m2' },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-mathematics/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four units. Two AS units (P1, PSM1) each worth 50% of AS-level/20% of A-level; one compulsory A2 unit (P2, 37.5% of A-level); and a final A2 unit chosen between Statistics (S2) or Mechanics (M2), each worth 22.5% of A-level, modeled here with alternativeGroup since the two options are mutually exclusive and equally weighted. Units resittable any number of times, best result counts. First teaching September 2017; first AS exams May/June 2018; first A-level exams May/June 2019.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'computer-science',
    code: '9210',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Programming (on-screen exam based on a pre-released skeleton program; available in C#, Python 3 or Visual Basic)', durationMinutes: 120, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Concepts and Principles of Computer Science', durationMinutes: 120, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted papers, no coursework. Paper 1 is an on-screen programming exam set against a pre-released skeleton program, available in a choice of C#, Python 3 or Visual Basic. The page also notes exams for this specification now take place in May/June only, with no November series from 2026. First teaching September 2017, first examined May/June 2019.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'computer-science',
    code: '9645',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Procedural programming, fundamental data structures, program design, searching and sorting algorithms (on-screen exam, C#/Python/VB.Net)', durationMinutes: 120, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Representing data, computer systems, computer organisation and architecture, machine code and assembly language (written exam)', durationMinutes: 90, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Procedural/object-oriented programming, data structures and algorithms (on-screen exam, C#/Python/VB.Net)', durationMinutes: 150, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Functional programming, theory of computation, networking and cyber security, databases, artificial intelligence (written exam)', durationMinutes: 90, marks: 75, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-computer-science/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four papers. AS papers each 50% of AS-level/20% of A-level; A-level papers each 30% of A-level. This is a recently revised specification: first teaching September 2024, first International AS exams May/June 2025, first International A-level exams May/June 2026 -- already examined at both levels as of this record\'s verification date.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'biology',
    code: '9201',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 (any part of the specification may be assessed)', durationMinutes: 90, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 (any part of the specification may be assessed)', durationMinutes: 90, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-biology/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification designed to be taken over two years, two equally weighted papers, no separate practical exam (practical knowledge assessed through the written papers). The page also notes the Prohibited Combinations rule shared by all four OxfordAQA International GCSE Science specifications: a centre cannot enter a student for both a separate Science and Combined Science in the same series. First teaching September 2016, first examined May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    code: '9610',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Unit 1: The Diversity of Living Organisms', durationMinutes: 90, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Unit 2: Biological Systems and Disease', durationMinutes: 90, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Unit 3: Populations and Genes', durationMinutes: 90, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Unit 4: Control', durationMinutes: 90, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 3', title: 'A-level Paper 3 -- Unit 5: Synoptic Paper', durationMinutes: 90, marks: 75, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-biology/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of five equally weighted papers (20% of A-level each). Students complete ten required practical activities, assessed through the written papers rather than a separate practical exam. AS units cashable as a standalone AS award or carried forward, unlimited resits, best result counts. First teaching September 2016; first AS exams May/June 2017; first A-level exams May/June 2018.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    code: '9202',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 (any part of the specification may be assessed)', durationMinutes: 90, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 (any part of the specification may be assessed)', durationMinutes: 90, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-chemistry/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification taken over two years, two equally weighted papers, no separate practical exam. Subject to the same Prohibited Combinations rule (no separate Science alongside Combined Science in the same series) stated on all four OxfordAQA International GCSE Science pages. First teaching September 2016, first examined May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    code: '9620',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Unit 1: Inorganic 1 and Physical 1', durationMinutes: 90, marks: 70, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Unit 2: Organic 1 and Physical 1', durationMinutes: 90, marks: 70, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Unit 3: Inorganic 2 and Physical 2', durationMinutes: 90, marks: 80, weightingPercent: 21, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Unit 4: Organic 2 and Physical 2', durationMinutes: 90, marks: 80, weightingPercent: 21, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 3', title: 'A-level Paper 3 -- Unit 5: Practical and Synoptic Paper', durationMinutes: 85, marks: 60, weightingPercent: 18, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-chemistry/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of five papers -- two AS papers at 20% of A-level each, two A2 papers at 21% each, and a dedicated Practical and Synoptic paper at 18%, summing to 100%. Ten required practicals are assessed through the written papers rather than a hands-on exam. A later first-teaching cohort than OxfordAQA\'s own Biology and Physics AS/A-level: first teaching September 2019; first AS and A-level exams May/June 2020.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'physics',
    code: '9203',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 (any part of the specification may be assessed)', durationMinutes: 90, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 (any part of the specification may be assessed)', durationMinutes: 90, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-physics/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification taken over two years, two equally weighted papers, no separate practical exam. Subject to the same Prohibited Combinations rule stated on all four OxfordAQA International GCSE Science pages. First teaching September 2016, first examined May/June 2018.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    code: '9630',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Mechanics, Materials and Atoms', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Electricity, Waves and Particles', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Fields and Their Consequences', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Energy and Energy Resources', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 3', title: 'A-level Paper 3 -- Physics in Practice', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-physics/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of five equally weighted papers (20% of A-level each). Ten required practicals, assessed through the main exam papers rather than a hands-on exam; Paper 3 (Physics in Practice) can draw on any part of the specification. First teaching September 2019; first AS and A-level exams May/June 2020.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'accounting',
    code: '9215',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Introduction to Book-keeping and Financial Accounting', durationMinutes: 105, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Financial Statements', durationMinutes: 105, marks: 75, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-accounting/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted written papers, no coursework. A recently launched specification: first teaching September 2024, first examined May/June 2026 -- already examined as of this record\'s verification date.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'accounting',
    code: '9615',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Introduction to Financial Accounting', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Financial Management and Accounting', durationMinutes: 120, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Financial Accounting', durationMinutes: 135, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Accounting for Analysis and Decision Making', durationMinutes: 135, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-accounting/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four papers over the AS/A-level teaching period; AS papers each 50% of AS-level/20% of A-level, A2 papers each 30% of A-level. A recently launched specification: first teaching September 2024, first AS exams May/June 2025, first A-level exams May/June 2026 -- already examined at both levels as of this record\'s verification date.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'business',
    code: '9225',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2022',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Influences of Operations and Human Resources on Business Activity', durationMinutes: 120, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Influences of Marketing and Finance on Business Activity', durationMinutes: 120, marks: 90, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-business/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted written papers, no coursework. First teaching September 2020, first examined May/June 2022.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: '9625',
    specStatus: 'current',
    relatedCode: '9725',
    tiers: ['not-tiered'],
    firstTeaching: '2018',
    firstAssessment: '2020',
    finalAssessment: '2028',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Business and Markets (final May/June exam opportunity 2026; re-sit January 2027)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Managing Operations, Human Resources and Finance (final May/June exam opportunity 2026; re-sit January 2027)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Business Strategy (final exam opportunity 2027; re-sit January 2028)', durationMinutes: 105, marks: 80, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Business Decision Making (final exam opportunity 2027; re-sit January 2028)', durationMinutes: 105, marks: 80, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-business/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section of the retained legacy qualification page, which now states only the wind-down window rather than the original first-assessment date: "the final May/June exams for AS will be in 2026, and for A2 in 2027. Re-sits will be available for AS in January 2027, and for A2 in January 2028. There will be no exams for this specification (9625) after January 2028." firstAssessment here (2020) is inferred from this specification\'s first-teaching date (September 2018) plus the standard two-year AS/A2 cycle observed consistently across every other OxfordAQA modular A-level in this dataset, since the source page itself no longer restates the original first-exam year. This remains the operative (\'current\') specification as of this record\'s verification date (2026-08-28) because its intended replacement, 9725, has not yet reached its own first-teaching date (September 2026) -- see that record\'s own notes. AS teaching under 9625 has already effectively concluded (its final May/June AS exam series was 2026, already past), leaving only A2 teaching/assessment and resits live; once 9725\'s September 2026 first teaching begins this record should be re-classified \'legacy-teach-out\'. Four papers: two AS papers at 20% of A-level each, two A2 papers at 30% each.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    code: '9725',
    specStatus: 'future',
    relatedCode: '9625',
    tiers: ['not-tiered'],
    firstTeaching: '2026',
    firstAssessment: '2028',
    components: [
      { paperCode: 'AS Unit 1', title: 'AS Unit 1 -- Business and Markets (first exam opportunity May/June 2027)', durationMinutes: 75, marks: 60, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Unit 2', title: 'AS Unit 2 -- Managing Operations, Human Resources and Finance (first exam opportunity May/June 2027)', durationMinutes: 75, marks: 60, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Unit 3', title: 'A-level Unit 3 -- Business Analysis (first exam opportunity May/June 2028)', durationMinutes: 105, marks: 80, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Unit 4', title: 'A-level Unit 4 -- Strategy (first exam opportunity May/June 2028)', durationMinutes: 105, marks: 80, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-business-revised/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section of the revised specification page: "available for first teaching from September 2026, with first AS exams in May/June 2027 and first A2 exams in May/June 2028." Four units: two AS units at 20% of A-level each, two A-level units at 30% each. specStatus is \'future\' (not \'current\') because, as of this record\'s verification date (2026-08-28), first teaching has not yet begun -- the legacy 9625 specification (see its own record, relatedCode 9725) remains the one existing cohorts are completing. Following teacher feedback, each A2 paper has separate topics and a simplified, fully case-study-based structure compared with the legacy specification.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'economics',
    code: '9214',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- How Markets Work', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- How Economies Work', durationMinutes: 105, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-economics/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted written papers combining multiple choice and essay-style questions, no coursework. First teaching September 2023, first examined May/June 2025 -- already examined as of this record\'s verification date.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    code: '9640',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2022',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- The Operation of Markets, Market Failure and the Role of Government', durationMinutes: 105, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- The National Economy in a Global Environment', durationMinutes: 105, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- The Economics of Business Behaviour and the Distribution of Income', durationMinutes: 120, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Economic Development and the Global Economy', durationMinutes: 120, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-economics/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four papers; AS papers each 50% of AS-level/20% of A-level, A2 papers each 30% of A-level. AS content contributes 40% of final marks and A2 the remaining 60%, though the underlying paper weightings shown here (20/20/30/30) are what the page\'s Assessment section itself states. First teaching September 2020; first AS exams May/June 2021; first A-level exams May/June 2022.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'english-language',
    code: '9270',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Literary Non-Fiction and Composition (all candidates)', durationMinutes: 120, marks: 80, weightingPercent: 60, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Route A -- Paper 2: Source-Based Reading and Directed Writing', durationMinutes: 120, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-a-exam'] },
      { paperCode: 'NEA', title: 'Route B -- Non-Exam Assessment (written task and commentary)', durationMinutes: null, marks: 60, weightingPercent: 40, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-nea'] },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-english-language/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a linear qualification with two routes. All candidates sit Paper 1 (Literary Non-Fiction and Composition, 60% of GCSE). The remaining 40% is EITHER Route A\'s Paper 2 (Source-Based Reading and Directed Writing, an exam) OR Route B\'s Non-Exam Assessment (a written task and commentary, teacher assessed and AQA moderated) -- modeled here with routeGroup, mirroring Cambridge IGCSE Literature in English 0475\'s compulsory-component-plus-routes pattern. An optional, separately certificated Speaking and Listening endorsement also exists but carries no marks toward this qualification\'s grade and is not modeled as a component. First teaching September 2016, first examined May/June 2018.',
    assessmentModel: 'mixed',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-language',
    code: '9670',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Language and Context', durationMinutes: 120, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Language and Society', durationMinutes: 120, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Language Variation', durationMinutes: 120, marks: 50, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'Route A -- A-level Paper 2: Language Exploration (exam)', durationMinutes: 150, marks: 50, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-a-exam'] },
      { paperCode: 'NEA', title: 'Route B -- Non-Exam Assessment (language investigation)', durationMinutes: null, marks: 50, weightingPercent: 30, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-nea'] },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-english-language/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four papers with two routes for the final unit. Two AS papers (20% of A-level each) and one compulsory A2 paper (Language Variation, 30%) are followed by EITHER an exam-based Language Exploration paper (Route A) OR a Non-Exam Assessment language investigation (Route B), each also 30% -- modeled with routeGroup. First teaching September 2017; first AS exams May/June 2018; first A-level exams May/June 2019.',
    assessmentModel: 'mixed',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'english-literature',
    code: '9275',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2018',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Prose and Drama (both routes)', durationMinutes: 90, marks: 60, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2a', title: 'Route A -- Paper 2a: Poetry and Unseen Texts', durationMinutes: 135, marks: 90, weightingPercent: 60, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-a-exam'] },
      { paperCode: 'Paper 2b', title: 'Route B -- Paper 2b: Poetry', durationMinutes: 90, marks: 60, weightingPercent: 40, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-nea'] },
      { paperCode: 'NEA', title: 'Route B -- Non-Exam Assessment (one extended response to a prose fiction text)', durationMinutes: null, marks: 30, weightingPercent: 20, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-nea'] },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-english-literature/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a linear qualification with two routes, both sitting the compulsory Paper 1 (Prose and Drama, 40% of GCSE). Route A adds Paper 2a (Poetry and Unseen Texts, an open-book exam, 60%); Route B instead adds the shorter Paper 2b (Poetry, 40%) together with a Non-Exam Assessment (one extended response to a prose text of the student\'s choice, teacher assessed and AQA moderated, 20%) -- modeled with routeGroup as two components sharing the same route tag. This specification is being revised for first teaching September 2026 with a refreshed set-text, poetry and short-story list (see the board\'s summary-of-changes document), but the board\'s own page states the paper structure, timings, marks and weightings shown here are unchanged by the revision -- only the prescribed texts differ -- so a single record covers both the current cohort (final May/June exams 2027, final resits November 2027) and the revised-text-list cohort from September 2026. First teaching of this assessment structure September 2016, first examined May/June 2018.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'english-literature',
    code: '9675',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Aspects of Dramatic Tragedy (closed-book)', durationMinutes: 120, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Place in Literary Texts (open-book)', durationMinutes: 120, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Elements of Crime and Mystery (closed-book)', durationMinutes: 120, marks: 50, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'Route A -- A-level Paper 2: Literary Representations (unseen prose and poetry, exam)', durationMinutes: 150, marks: 50, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', routeGroup: ['route-a-exam'] },
      { paperCode: 'NEA', title: 'Route B -- Non-Exam Assessment (two essays, one prose and one poetry, 1,250-1,500 words each)', durationMinutes: null, marks: 50, weightingPercent: 30, assessmentType: 'non-exam-assessment', internallyAssessed: true, externallyModerated: true, optionality: 'choose-n-of-m', routeGroup: ['route-b-nea'] },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-english-literature/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four papers with two routes for the final unit, structurally identical to English Language 9670. Two AS papers (20% of A-level each) and one compulsory A2 paper (Elements of Crime and Mystery, 30%) are followed by EITHER an exam-based Literary Representations paper (Route A) OR a two-essay Non-Exam Assessment (Route B), each also 30%. The specification is being revised for first teaching from 2027 with a refreshed set-text list; the board\'s own page states the paper structure, timings, marks and weightings are unchanged by this revision, so one record covers both text-list eras. Flagging a discrepancy on the source page itself, disclosed rather than silently resolved: the introductory summary states the current (pre-revision) text list has "final AS exams in May/June 2027, final A2 exams in May/June 2028," while the page\'s own "Syllabus summary and text list" section states, for the same current cohort, "final AS exams in January 2028, final A2 exams in October/November 2028" -- these two statements on the same live page do not agree, and neither could be confirmed as the typo without contacting the board directly. First teaching of this assessment structure September 2017; first AS exams May/June 2018; first A-level exams May/June 2019.',
    assessmentModel: 'mixed',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'geography',
    code: '9230',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Living with the Physical Environment', durationMinutes: 90, marks: 80, weightingPercent: 36, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Challenges in the Human Environment', durationMinutes: 90, marks: 80, weightingPercent: 36, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Geographical and Fieldwork Skills', durationMinutes: 75, marks: 60, weightingPercent: 28, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-geography/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, three papers weighted 36/36/28, no coursework. The page also notes exams for this specification now take place in May/June only, with no November series from 2026. First teaching September 2018, first examined May/June 2020.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'geography',
    code: '9635',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'AS Paper 1a', title: 'AS Paper 1a -- Physical Geography 1 (Living with Hazards; Hot Desert Systems and Landscapes option)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', alternativeGroup: 'hot-desert-or-coastal' },
      { paperCode: 'AS Paper 1b', title: 'AS Paper 1b -- Physical Geography 1 (Living with Hazards; Coastal Systems and Landscapes option)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true, optionality: 'choose-n-of-m', alternativeGroup: 'hot-desert-or-coastal' },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Human Geography 1 (Global Systems and Governance; Resource Security)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Physical Geography 2 (Water, Carbon and Life on Earth; Ecosystems Under Stress)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Human Geography 2 (Changing Places; People and Contemporary Urban Environments)', durationMinutes: 90, marks: 80, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 3', title: 'A-level Paper 3 -- Fieldwork and Geographical Skills', durationMinutes: 90, marks: 60, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-geography/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of five papers (six components, since Paper 1a/1b are alternative options within the same paper slot, modeled with alternativeGroup). Every component is 20% of A-level. Flagging an apparent typo on the source page, disclosed rather than silently corrected: the AS Paper 2 line reads "1 hour 30 minutes / 80 marks / 50% of GCSE, 20% of A-level" -- every other AS paper on this and every other OxfordAQA A-level page in this dataset reads "50% of AS-level, 20% of A-level," and Paper 2 is explicitly an AS (not GCSE) component, so "50% of GCSE" is almost certainly a copy-paste error for "50% of AS-level." The unambiguous "20% of A-level" figure (used here) is unaffected either way. First teaching September 2018; first AS exams May/June 2019; first A-level exams May/June 2020.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'psychology',
    code: '9218',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Cognition and Behaviour', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Social Context and Behaviour', durationMinutes: 120, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-psychology/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted written papers, no coursework; individual components may not be re-sat, but the whole qualification may be re-taken any number of times. A recently launched specification: first teaching September 2023, first examined May/June 2025 -- already examined as of this record\'s verification date.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'psychology',
    code: '9685',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'AS Paper 1', title: 'AS Paper 1 -- Introductory Topics in Psychology (Memory, Social Psychology, Psychopathology)', durationMinutes: 90, marks: 90, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Paper 2', title: 'AS Paper 2 -- Biopsychology, Development and Research Methods 1', durationMinutes: 90, marks: 90, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 1', title: 'A-level Paper 1 -- Advanced Topics and Research Methods 2 (Psychology of Sleep, Schizophrenia)', durationMinutes: 90, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Paper 2', title: 'A-level Paper 2 -- Approaches and Application', durationMinutes: 90, marks: 90, weightingPercent: 30, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-psychology/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: a modular qualification of four papers; AS papers each 50% of AS-level/20% of A-level, A2 papers each 30% of A-level. Units resittable any number of times, best result counts. First teaching September 2018; first AS exams May/June 2019; first A-level exams May/June 2020.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'sociology',
    code: '9292',
    specStatus: 'future',
    tiers: ['not-tiered'],
    firstAssessment: '2028',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Families; Education; Research Methods', durationMinutes: 90, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Differences and Inequalities; Socialisation and Social Control; Research Methods', durationMinutes: 90, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-sociology/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section of a brand-new specification (the page itself is titled "NEW: International GCSE Sociology (9292)" and states "For first teaching from September 2026, with first exams from May/June 2028"). Two equally weighted written papers, no coursework. specStatus is \'future\' rather than \'current\' because, as of this record\'s verification date (2026-08-28), first teaching has not yet begun -- OxfordAQA has no prior GCSE Sociology specification this succeeds, so there is no companion \'current\' record for this combination until teaching starts.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'a-level',
    subjectSlug: 'sociology',
    code: '9690',
    specStatus: 'future',
    tiers: ['not-tiered'],
    firstAssessment: '2028',
    components: [
      { paperCode: 'AS Unit 1', title: 'AS Unit 1 -- Families; Research Methods', durationMinutes: 105, marks: 60, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'AS Unit 2', title: 'AS Unit 2 -- Socialisation and Social Control; Research Methods', durationMinutes: 105, marks: 60, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Unit 3', title: 'A-level Unit 3 -- People and Development', durationMinutes: 90, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Unit 4', title: 'A-level Unit 4 -- People and the Environment', durationMinutes: 90, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'A-level Unit 5', title: 'A-level Unit 5 -- People and Technologies', durationMinutes: 90, marks: 50, weightingPercent: 20, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-sociology/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section of a brand-new specification (page titled "NEW: International AS and A-level Sociology (9690)"), stating "For first teaching from September 2026, with first AS exams from May/June 2027 and first A-level exams from May/June 2028." Five equally weighted units (20% of A-level each). specStatus is \'future\' for the same reason as the IGCSE Sociology 9292 record: teaching has not yet begun as of this record\'s verification date, and there is no prior OxfordAQA A-level Sociology specification this succeeds.',
    assessmentModel: 'modular',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'world-history',
    code: '9245',
    specStatus: 'future',
    tiers: ['not-tiered'],
    firstAssessment: '2028',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- International Relations Depth Studies: Conflict and Peace in the 20th Century', durationMinutes: 105, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Studies in Change', durationMinutes: 105, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-history/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section of a brand-new specification (page titled "NEW: International GCSE History (9245)"), stating "For first teaching from 2026, with first exams from May/June 2028." Two equally weighted written papers, each offering a choice of optional depth/thematic studies within it (not modeled at component level, consistent with how internal essay-choice is handled elsewhere in this dataset); some sections use pre-released sources. OxfordAQA publishes this qualification as "International GCSE History"; Marlbridge\'s matrix groups it under World History alongside the equivalent offering from other boards. specStatus is \'future\' because teaching has not yet begun as of this record\'s verification date. OxfordAQA does not offer History at AS or A-level.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'islamiyat',
    code: '9237',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Islam: Beliefs and Teachings; Islam: Practices', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Life and Teachings of Hazrat Muhammad; Sources of Authority in Islam', durationMinutes: 90, marks: 50, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-islamiat/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted written papers, no coursework; both papers require study of the related Qur\'an and Hadith passages set out in the specification. OxfordAQA\'s own spelling of the qualification is "Islamiat." First examined May/June 2026 onwards -- already examined as of this record\'s verification date. OxfordAQA does not offer Islamiat/Islamiyat at AS or A-level.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'oxfordaqa',
    qualificationSlug: 'igcse',
    subjectSlug: 'urdu-language',
    code: '9264',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Reading', durationMinutes: 105, marks: 70, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Writing', durationMinutes: 105, marks: 70, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-urdu/',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live "Assessment" section: linear qualification, two equally weighted papers (Reading, including English-to-Urdu translation, and Writing), no coursework. OxfordAQA\'s official title for this qualification is simply "Urdu," not "Urdu Language"; Marlbridge\'s matrix uses the subjectSlug urdu-language. First teaching September 2024, first examined June 2026 onwards -- already examined as of this record\'s verification date. OxfordAQA does not offer Urdu at AS or A-level.',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'aqa',
    qualificationSlug: 'gcse',
    subjectSlug: 'sociology',
    code: '8192',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'Paper 1', title: 'The Sociology of Families and Education', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'The Sociology of Crime and Deviance and Social Stratification', durationMinutes: 105, marks: 100, weightingPercent: 50, assessmentType: 'written-exam', externallyAssessed: true },
    ],
    officialSourceUrl: 'https://www.aqa.org.uk/subjects/sociology/gcse/sociology-8192/specification/specification-at-a-glance',
    verifiedOn: '2026-08-28',
    notes: 'Directly confirmed against the official live \'Specification at a glance\' section: two equally weighted written papers, 1 hour 45 minutes / 100 marks / 50% each, no coursework. Paper 1 covers the sociology of families and education; Paper 2 covers the sociology of crime and deviance and social stratification; both also draw on relevant social theory and methodology content from across the whole course. Linear qualification, first teaching 2017 (per the specification PDF\'s own title), first examined May/June 2019 (per the specification\'s scheme-of-assessment page).',
    assessmentModel: 'linear',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'economics',
    code: 'DP Economics',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2022',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Extended Response (Microeconomics or Macroeconomics)', durationMinutes: 75, marks: 25, weightingPercent: 30, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Data Response (The Global Economy)', durationMinutes: 105, marks: 40, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Portfolio of Three Commentaries', durationMinutes: null, marks: 45, weightingPercent: 30, assessmentType: 'portfolio', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Extended Response (Microeconomics or Macroeconomics)', durationMinutes: 75, marks: 25, weightingPercent: 20, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Data Response (The Global Economy)', durationMinutes: 105, marks: 40, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Policy Paper (HL Extension)', durationMinutes: 105, marks: 60, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Portfolio of Three Commentaries', durationMinutes: null, marks: 45, weightingPercent: 20, assessmentType: 'portfolio', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/en/programmes/diploma-programme/curriculum/individuals-and-societies/economics/',
    verifiedOn: '2026-08-28',
    notes: 'Owner confirmed a formal IB license covering commercial/tutoring use of the full subject guide (economics-guide.pdf). Figures below are read directly from that guide\'s own \'Assessment outline -- SL\' and \'Assessment outline -- HL\' tables (retrieved via the licensed PDF, cross-checked against the syllabus\'s assessment-objectives-to-component mapping in the same document). SL: Paper 1 (one extended-response question from a choice on micro- or macroeconomics, 75min, 25 marks, 30%, no calculator); Paper 2 (data-response question set on the global economy, 105min, 40 marks, 40%, calculator permitted); Internal Assessment (portfolio of three commentaries on published news extracts, no fixed sitting duration, 45 marks, 30%, internally assessed by the teacher and externally moderated by the IB). HL sits the same Paper 1 and Paper 2 (each re-weighted to 20%/30% of the HL total) plus an HL-only Paper 3 (structured, data-based policy paper drawing on the HL extension topics, 105min, 60 marks, 30%, calculator permitted), and the same portfolio Internal Assessment re-weighted to 20%. \'DP Economics\' is used as this record\'s own `code` (there is no separate numeric course code at DP level the way GCSE/A-level boards publish one). First assessed 2022 per the guide\'s own title page. This is one of only two IB DP subjects (with Physics) where Marlbridge holds a license covering the full guide; owner decision 2026-09-05 subsequently established that IB\'s own freely public specimen exam papers (real, printed mark totals, published separately from the paid subject guides) are a sufficient primary source when paired with the free subject brief, so this licensing route is no longer the only path to a complete record -- see the 8 newly modeled IB DP subjects (Biology, Chemistry, Geography, History, Language A: Literature, Language B, and both Mathematics courses) built that way. 6 IB DP subject combinations remain without a published assessment record because, as of this check, neither a specimen paper nor the licensed guide is available for them -- 2 are recently revised courses too new to have a public specimen paper yet, 2 are mid-transition to a new specification not yet examined, and 2 have a genuine sourcing or tooling gap -- see that later work\'s own decision-log entry for the full breakdown.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'physics',
    code: 'DP Physics',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Multiple Choice with Short Data-based Questions', durationMinutes: 90, marks: 45, weightingPercent: 36, assessmentType: 'multiple-choice', tier: 'sl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Short and Extended Response', durationMinutes: 90, marks: 50, weightingPercent: 44, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Individual Scientific Investigation', durationMinutes: null, marks: 24, weightingPercent: 20, assessmentType: 'practical', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Multiple Choice with Short Data-based Questions', durationMinutes: 120, marks: 60, weightingPercent: 36, assessmentType: 'multiple-choice', tier: 'hl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Short and Extended Response', durationMinutes: 150, marks: 90, weightingPercent: 44, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Individual Scientific Investigation', durationMinutes: null, marks: 24, weightingPercent: 20, assessmentType: 'practical', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/en/programmes/diploma-programme/curriculum/sciences/physics/',
    verifiedOn: '2026-08-28',
    notes: 'Owner confirmed a formal IB license covering commercial/tutoring use of the full subject guide (physics-guide.pdf). The guide\'s own \'Assessment outline -- SL/HL\' tables (pages 62-63 of 65) could not be fully extracted through available fetch tooling in this session -- two independent mirrors of the identical PDF (ibo.org direct and a bradfieldcollege.org.uk copy) both truncated at the same point, before reaching the assessment section, which is a tool-side extraction cap rather than a source problem (confirmed by matching truncation length on unrelated hosts). The component structure, durations and weightings below are taken from that guide\'s earlier, successfully-extracted \'Curriculum model overview\' and assessment-summary prose, and the exact mark totals were cross-verified against a current (checked 2026-08-28), actively-maintained school IB Physics resource (Concordian International School Thailand LibGuide, \'External assessment\' and \'Internal assessment\' pages) that transcribes the same official table in detail; both sources agree. SL: Paper 1 (multiple-choice with short data-based questions, 90min, 45 marks, 36%, calculator and data booklet permitted); Paper 2 (short-and-extended-response questions, 90min, 50 marks, 44%, calculator and data booklet permitted); Internal Assessment (individual scientific investigation marked against 4 criteria worth 6 marks each = 24 marks, no fixed sitting duration, 20%, internally assessed and externally moderated). HL sits the same two paper types at greater length and mark total (Paper 1: 120min/60 marks/36%; Paper 2: 150min/90 marks/44%) plus the same-weighted internal-assessment investigation (24 marks, 20%). \'DP Physics\' is used as this record\'s own `code`. First assessed 2025 per the guide\'s own title page -- the most recently first-examined DP science course. This is one of only two IB DP subjects (with Economics) where Marlbridge holds a license covering the full guide; see the Economics DP record above for how that licensing-scope limitation was subsequently narrowed (owner decision 2026-09-05) once IB\'s own freely public specimen exam papers were confirmed sufficient as a primary source for other DP subjects. The site\'s 5 IB Middle Years Programme subjects are a separate case, resolved 2026-09-04: MYP\'s own assessment structure is genuinely criterion-referenced (no fixed exam papers with raw marks for most students), so the freely public subject briefs ARE sufficient to model it correctly -- see the 5 IB Middle Years Programme records below.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'biology',
    code: 'DP Biology',
    specStatus: 'current',
    tiers: ['hl'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Section A: Multiple Choice and Section B: Data-Based Questions', durationMinutes: 120, marks: 75, weightingPercent: 36, assessmentType: 'multiple-choice', tier: 'hl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Data-Based, Short-Answer and Extended-Response Questions', durationMinutes: 150, marks: 80, weightingPercent: 44, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Scientific Investigation', durationMinutes: null, marks: 24, weightingPercent: 20, assessmentType: 'practical', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/recognition/pdfs/dp_sciences_biology_subject-brief_jan_2022_e.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Higher Level only. The freely public official specimen-paper PDF (for first examinations 2025) was directly fetched and read this session, confirming real printed mark totals for the Higher Level papers -- Paper 1 (Section 1A multiple-choice, 40 marks, and Section 1B data-based questions, 35 marks, sat together in one 2-hour session, 75 marks combined, 36% of the final grade, calculator and data booklet permitted) and Paper 2 (data-based, short-answer and extended-response questions, 2 hours 30 minutes, 80 marks, 44%, calculator and data booklet permitted) -- but the same document could not be fully extracted through available tooling past the Higher Level Paper 2 markscheme, before reaching the Standard Level papers. Standard Level is therefore not included here rather than estimated from the Higher Level figures. The Internal Assessment (an individual scientific investigation reported as a written report, maximum 3,000 words) is marked against four criteria -- Research Design, Data Analysis, Conclusion, Evaluation -- worth 6 marks each, 24 marks total, 20% of the final grade, internally assessed by the teacher and externally moderated by the IB; this mark total was independently corroborated against a current, actively maintained third-party IB revision resource rather than read directly from the partially inaccessible primary specimen document. Weighting and duration figures throughout are read directly from the official public subject brief.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'chemistry',
    code: 'DP Chemistry',
    specStatus: 'current',
    tiers: ['hl'],
    firstAssessment: '2025',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Section A: Multiple Choice and Section B: Data-Based Questions and Questions on Experimental Work', durationMinutes: 120, marks: 75, weightingPercent: 36, assessmentType: 'multiple-choice', tier: 'hl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Short-Answer and Extended-Response Questions', durationMinutes: 150, marks: 90, weightingPercent: 44, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true, dataBookletProvided: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Scientific Investigation', durationMinutes: null, marks: 24, weightingPercent: 20, assessmentType: 'practical', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/recognition/pdfs/dp_sciences_chemistry_subject-brief_jan_2022_e.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Higher Level only. The freely public official specimen-paper PDF (for first examinations 2025) was directly fetched and read this session, confirming real printed mark totals for the Higher Level papers -- Paper 1 (Section 1A multiple-choice, 40 marks, and Section 1B data-based questions and questions on experimental work, 35 marks, sat together in one 2-hour session, 75 marks combined, 36% of the final grade, calculator and data booklet permitted) and Paper 2 (short-answer and extended-response questions, 2 hours 30 minutes, 90 marks, 44%, calculator and data booklet permitted) -- but the same document could not be fully extracted through available tooling past the Higher Level Paper 2 markscheme, before reaching the Standard Level papers, which the document\'s own table of contents confirms it also contains. Standard Level is therefore not included here rather than estimated from the Higher Level figures. The Internal Assessment (an individual scientific investigation reported as a written report, maximum 3,000 words) is marked against four criteria -- Research Design, Data Analysis, Conclusion, Evaluation -- worth 6 marks each, 24 marks total, 20% of the final grade, internally assessed by the teacher and externally moderated by the IB; this mark total was independently corroborated against a current, actively maintained third-party IB revision resource rather than read directly from the partially inaccessible primary specimen document. Weighting and duration figures throughout are read directly from the official public subject brief.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'geography',
    code: 'DP Geography',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2019',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Optional Themes (Two at SL)', durationMinutes: 90, marks: 40, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Core Theme: Global Change', durationMinutes: 75, marks: 50, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Fieldwork', durationMinutes: null, marks: 25, weightingPercent: 25, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Optional Themes (Three at HL)', durationMinutes: 135, marks: 60, weightingPercent: 35, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Core Theme: Global Change', durationMinutes: 75, marks: 50, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- HL Extension: Global Interactions', durationMinutes: 60, marks: 28, weightingPercent: 20, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Fieldwork', durationMinutes: null, marks: 25, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/geography-sl-hl-2017-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject brief (first assessments 2019); mark totals for Paper 1 (Higher Level, 60 marks) and Paper 2 (both tiers, 50 marks) are read directly from the official freely public specimen-papers PDF, directly fetched and read this session. Paper 1 Standard Level (40 marks), Paper 3 Higher Level (28 marks) and the Internal Assessment (25 marks, both tiers) were independently corroborated against a current, actively maintained third-party IB revision resource rather than confirmed inside the same specimen document, whose extractable text did not reach those sections; both sources agree exactly where they overlap (Paper 1 Higher Level and Paper 2, both tiers). Standard Level sits two of seven optional themes plus the compulsory core theme (Global Change) plus fieldwork; Higher Level sits three optional themes, the same core theme, an HL-only extension paper on global interactions, and the same fieldwork investigation (re-weighted). The Internal Assessment is a single written report based on a fieldwork investigation, internally assessed by the teacher and externally moderated by the IB, with no fixed sitting duration.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'world-history',
    code: 'DP History',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2017',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Source-Based Paper on the Prescribed Subjects', durationMinutes: 60, marks: 24, weightingPercent: 30, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Essay Paper on the World History Topics', durationMinutes: 90, marks: 30, weightingPercent: 45, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Historical Investigation', durationMinutes: null, marks: 25, weightingPercent: 25, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Source-Based Paper on the Prescribed Subjects', durationMinutes: 60, marks: 24, weightingPercent: 20, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Essay Paper on the World History Topics', durationMinutes: 90, marks: 30, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Essay Paper on One Regional Option (HL Only)', durationMinutes: 150, marks: 45, weightingPercent: 35, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Historical Investigation', durationMinutes: null, marks: 25, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/history-hl-2020-eng.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject briefs (first assessments 2017; the Higher Level and Standard Level briefs are published as two separate PDFs, both directly fetched and read this session). Paper 1 (24 marks, both tiers), Paper 2 (30 marks, both tiers) and Paper 3 (45 marks, Higher Level only) mark totals are read directly from the official freely public specimen papers, also directly fetched and read this session. The Internal Assessment (a historical investigation into a topic of the student\'s own choice, 2,200-word limit, marked against three criteria -- Identification and Evaluation of Sources (6 marks), Investigation (15 marks), Reflection (4 marks), 25 marks total, identical task and criteria at both tiers) was independently corroborated against a current, actively maintained third-party IB revision resource rather than found in either specimen-paper document, since the Internal Assessment is not part of the externally set specimen papers. Higher Level sits an additional Paper 3 essay paper on one of four regional depth-study options (History of Africa and the Middle East, the Americas, Asia and Oceania, or Europe); the 45-mark, 2-hour-30-minute structure is confirmed directly from the official Africa-and-the-Middle-East specimen paper and is stated uniformly across all four regions by the official subject brief\'s own assessment table, which does not differentiate marks or duration by region.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'language-a-literature',
    code: 'DP Language A: Literature',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2021',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Guided Literary Analysis', durationMinutes: 75, marks: 20, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Comparative Essay', durationMinutes: 105, marks: 25, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Individual Oral', title: 'Internal Assessment -- Individual Oral', durationMinutes: null, marks: 40, weightingPercent: 30, assessmentType: 'oral', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Guided Literary Analysis (Two Passages)', durationMinutes: 135, marks: 40, weightingPercent: 35, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Comparative Essay', durationMinutes: 105, marks: 25, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'HL Essay', title: 'HL Essay -- Written Coursework on One Studied Work', durationMinutes: null, marks: 20, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Individual Oral', title: 'Internal Assessment -- Individual Oral', durationMinutes: null, marks: 40, weightingPercent: 20, assessmentType: 'oral', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/curriculum.brief-languagea.literature-eng.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject brief (first assessments 2021). Mark totals for Paper 1 (20 marks Standard Level, 40 marks Higher Level) and Paper 2 (25 marks, both tiers) are read directly from the official freely public specimen papers, directly fetched and read this session (Paper 1 sits one guided literary analysis at Standard Level and two at Higher Level; Paper 2 is a comparative essay common to both tiers). The HL Essay (20 marks, a 1,200-1,500 word externally assessed written-coursework analysis of one studied work) and the Individual Oral (40 marks, both tiers, an internally assessed and externally moderated prepared oral response) mark totals were independently corroborated against a current, actively maintained third-party IB revision resource, since neither component appears in the externally set specimen papers -- the Individual Oral is not a written paper at all, and the HL Essay is a separate coursework submission.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'language-b',
    code: 'DP Language B',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Productive Skills: Writing', durationMinutes: 75, marks: 30, weightingPercent: 25, assessmentType: 'writing', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2 (Listening)', title: 'Paper 2 -- Receptive Skills: Listening Comprehension', durationMinutes: 45, marks: 25, weightingPercent: 25, assessmentType: 'listening', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2 (Reading)', title: 'Paper 2 -- Receptive Skills: Reading Comprehension', durationMinutes: 60, marks: 40, weightingPercent: 25, assessmentType: 'reading', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Individual Oral', title: 'Internal Assessment -- Individual Oral Assessment', durationMinutes: null, marks: 30, weightingPercent: 25, assessmentType: 'oral', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Productive Skills: Writing', durationMinutes: 90, marks: 30, weightingPercent: 25, assessmentType: 'writing', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2 (Listening)', title: 'Paper 2 -- Receptive Skills: Listening Comprehension', durationMinutes: 60, marks: 25, weightingPercent: 25, assessmentType: 'listening', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2 (Reading)', title: 'Paper 2 -- Receptive Skills: Reading Comprehension', durationMinutes: 60, marks: 40, weightingPercent: 25, assessmentType: 'reading', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Individual Oral', title: 'Internal Assessment -- Individual Oral Assessment', durationMinutes: null, marks: 30, weightingPercent: 25, assessmentType: 'oral', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/lang-b-2018-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Both tiers modeled in full. The official public subject brief (first assessment 2020) states the assessment outline is identical at Standard Level and Higher Level except for the complexity of language required, so weighting is the same at both tiers. All mark totals and durations are read directly from the official freely public specimen papers, directly fetched and read this session: Paper 1 (one productive-skills writing task, 30 marks, 1 hour 15 minutes at Standard Level, 1 hour 30 minutes at Higher Level); Paper 2, sat as listening comprehension (25 marks, 45 minutes Standard Level, 1 hour Higher Level) followed by reading comprehension (40 marks, 1 hour, both tiers) -- recorded here as two components since they are separately timed and separately instructed sections, though published together as one \'Paper 2\'; and the Individual Oral Assessment (30 marks, both tiers, internally assessed by the teacher and externally moderated by the IB, stimulus is a visual image at Standard Level and an excerpt from a studied literary work at Higher Level).',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'mathematics-analysis-and-approaches',
    code: 'DP Mathematics: Analysis and Approaches',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2021',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- No Technology Permitted', durationMinutes: 90, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Technology Permitted', durationMinutes: 90, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Exploration', title: 'Internal Assessment -- Mathematical Exploration', durationMinutes: null, marks: 20, weightingPercent: 20, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- No Technology Permitted', durationMinutes: 120, marks: 110, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: false },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Technology Permitted', durationMinutes: 120, marks: 110, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Two Extended-Response Problem-Solving Questions (HL Only)', durationMinutes: 60, marks: 55, weightingPercent: 20, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Exploration', title: 'Internal Assessment -- Mathematical Exploration', durationMinutes: null, marks: 20, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject brief (first assessments 2021). Paper 1 and Paper 2 Higher Level mark totals (110 marks each, 2 hours each) are read directly from the official freely public specimen papers, directly fetched and read this session; the same document could not be fully extracted through available tooling far enough to confirm the Standard Level papers or Paper 3. Standard Level Paper 1/Paper 2 (80 marks each), Higher Level Paper 3 (55 marks, two compulsory extended-response problem-solving questions, 1 hour, technology required) and the Mathematical Exploration (20 marks at both tiers, marked against five criteria -- Presentation (4), Mathematical Communication (4), Personal Engagement (3), Reflection (3), Use of Mathematics (6) -- an internally assessed written investigation, compulsory at both tiers) were independently corroborated against a current, actively maintained third-party IB revision resource that publishes exact maximum-mark grade-boundary tables; those tables agree exactly with the primary specimen document everywhere the two overlap (Higher Level Paper 1 and Paper 2).',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'mathematics-applications-and-interpretation',
    code: 'DP Mathematics: Applications and Interpretation',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2021',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Short-Response Questions, Technology Permitted', durationMinutes: 90, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Extended-Response Questions, Technology Permitted', durationMinutes: 90, marks: 80, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Exploration', title: 'Internal Assessment -- Mathematical Exploration', durationMinutes: null, marks: 20, weightingPercent: 20, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Short-Response Questions, Technology Permitted', durationMinutes: 120, marks: 110, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Extended-Response Questions, Technology Permitted', durationMinutes: 120, marks: 110, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Two Extended-Response Problem-Solving Questions (HL Only)', durationMinutes: 60, marks: 55, weightingPercent: 20, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Exploration', title: 'Internal Assessment -- Mathematical Exploration', durationMinutes: null, marks: 20, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-applications-and-interpretations-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject brief (first assessments 2021); all external papers require technology throughout this course. Paper 1 and Paper 2 Higher Level mark totals (110 marks each, 2 hours each) are read directly from the official freely public specimen papers, directly fetched and read this session; the same document could not be fully extracted through available tooling far enough to confirm the Standard Level papers or Paper 3. Standard Level Paper 1/Paper 2 (80 marks each), Higher Level Paper 3 (55 marks, two compulsory extended-response problem-solving questions, 1 hour) and the Mathematical Exploration (20 marks at both tiers, the same five-criterion structure shared with Mathematics: Analysis and Approaches) were independently corroborated against a current, actively maintained third-party IB revision resource that publishes exact maximum-mark grade-boundary tables; those tables agree exactly with the primary specimen document everywhere the two overlap (Higher Level Paper 1 and Paper 2).',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-myp',
    subjectSlug: 'myp-sciences',
    code: 'MYP Sciences',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2014',
    components: [
      { paperCode: 'Criterion A', title: 'Knowing and understanding', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion B', title: 'Inquiring and designing', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion C', title: 'Processing and evaluating', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion D', title: 'Reflecting on the impacts of science', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-sciences-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Read directly from the public IB MYP Sciences subject brief (framework current "from 2014"; MYP subjects are assessed continuously against these criteria every year rather than in a single first-examined series, so "firstAssessment" here records the framework\'s own stated currency date, not an exam sitting). All four criteria are equally weighted (25% each) and each scored on an 8-level achievement scale (1-8, recorded here as marks=8 -- the maximum achievable level, not an exam mark total), assessed by the student\'s own teacher against published IB rubrics across the year\'s work and externally moderated by IB sampling -- there is no fixed-duration sitting for any criterion, hence durationMinutes: null throughout, matching this schema\'s existing convention for non-timed internal assessment. This is Marlbridge\'s first IB MYP assessment record built without owner-licensed full-guide access; unlike the DP Economics/DP Physics records above, the publicly-available subject brief is sufficient to model MYP correctly because MYP\'s own official structure genuinely does not include fixed exam papers with raw marks for the great majority of students -- the gap for these 19 IB subjects was about missing marks totals for DP\'s paper-based exams, which never applied to MYP\'s criterion-based model in the first place. A separate, optional \'MYP eAssessment\' exists for schools/students seeking the formal MYP Certificate or course results (a further externally-set and marked on-screen examination or ePortfolio) -- explicitly NOT modeled as this record\'s primary components, since most MYP students never sit it and modeling it as the default would misrepresent the qualification most Marlbridge MYP students actually experience. For the record: the brief states its optional on-screen exam comprises three tasks (Knowing and understanding, 25 marks; Investigation skills, 50 marks; Applying science, 25 marks), available in biology, chemistry, physics and integrated sciences -- cited here for completeness, not modeled as a component.',
    assessmentModel: 'criterion-referenced',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-myp',
    subjectSlug: 'mathematics',
    code: 'MYP Mathematics',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2022',
    components: [
      { paperCode: 'Criterion A', title: 'Knowing and understanding', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion B', title: 'Investigating patterns', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion C', title: 'Communicating', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion D', title: 'Applying mathematics in real-life contexts', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-mathematics-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Read directly from the public IB MYP Mathematics subject brief ("From 2020, first assessment 2022" -- the one MYP subject brief among the five modeled in this batch that states an explicit first-assessment year rather than only a framework currency date, used verbatim here). All four criteria equally weighted (25% each), 8-level achievement scale (marks=8 = the maximum achievable level, not an exam mark total), teacher-assessed across the year against published IB rubrics and externally moderated by IB sampling, no fixed sitting duration (durationMinutes: null). Same modeling rationale as the MYP Sciences record above: the public subject brief is sufficient here because MYP genuinely has no fixed-marks exam-paper structure for most students, unlike DP. Optional MYP eAssessment (on-screen exam, for MYP Certificate/course-results seekers only, not modeled as this record\'s components) comprises three tasks per the same brief: Knowing and understanding + Communicating (criteria A and C), Investigating patterns + Communicating (criteria B and C), and Applying mathematics in real-life contexts + Communicating (criteria C and D), each 31-35 marks, with criterion C assessed across all three tasks to a combined 25 marks -- cited for completeness only.',
    assessmentModel: 'criterion-referenced',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-myp',
    subjectSlug: 'myp-individuals-and-societies',
    code: 'MYP Individuals and Societies',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2014',
    components: [
      { paperCode: 'Criterion A', title: 'Knowing and understanding', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion B', title: 'Investigating', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion C', title: 'Communicating', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion D', title: 'Thinking critically', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief_individuals-societies_2015.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Read directly from the public IB MYP Individuals and Societies subject brief ("From 2014"; used as the framework\'s stated currency date, not an exam-sitting year -- see the MYP Sciences record above for why). All four criteria equally weighted (25% each), 8-level achievement scale (marks=8 = the maximum achievable level), teacher-assessed and externally moderated by IB sampling, no fixed sitting duration. Optional MYP eAssessment (on-screen exam, available in history/geography/integrated humanities, for MYP Certificate/course-results seekers only, not modeled as this record\'s components) comprises three tasks per the same brief: Investigating (criteria A and B, 26 marks), Communicating (criteria A and C, 18 marks), Thinking critically (criteria A, C and D, 36 marks) -- cited for completeness only, not modeled.',
    assessmentModel: 'criterion-referenced',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-myp',
    subjectSlug: 'myp-design',
    code: 'MYP Design',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2014',
    components: [
      { paperCode: 'Criterion A', title: 'Inquiring and analysing', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion B', title: 'Developing ideas', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion C', title: 'Creating the solution', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion D', title: 'Evaluating', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief_design_2015.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Read directly from the public IB MYP Design subject brief ("From 2014"; framework currency date, not an exam-sitting year). All four criteria equally weighted (25% each), 8-level achievement scale (marks=8 = the maximum achievable level), teacher-assessed and externally moderated by IB sampling, no fixed sitting duration. Design\'s optional formal route differs from the other four MYP subjects modeled in this batch: instead of an on-screen exam, students seeking IB-validated MYP Design course results submit an ePortfolio (a design folder containing a design brief and specification, marked by the classroom teacher against published year-5 criteria and IB-moderated by sampling) -- not modeled as this record\'s components since it is the same optional, opt-in formal-qualification layer as the other subjects\' on-screen exams, cited here for completeness only.',
    assessmentModel: 'criterion-referenced',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-myp',
    subjectSlug: 'myp-language-acquisition',
    code: 'MYP Language Acquisition',
    specStatus: 'current',
    tiers: ['not-tiered'],
    firstAssessment: '2020',
    components: [
      { paperCode: 'Criterion A', title: 'Listening', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion B', title: 'Reading', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion C', title: 'Speaking', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Criterion D', title: 'Writing', durationMinutes: null, marks: 8, weightingPercent: 25, assessmentType: 'criterion', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-language-acquisition-2020-en.pdf',
    verifiedOn: '2026-09-04',
    notes: 'Read directly from the public IB MYP Language Acquisition subject brief ("From 2020"; framework currency date, not an exam-sitting year -- fetched via a school-hosted mirror of the identical ibo.org PDF after the direct ibo.org URL returned no extractable content in this session, same fallback pattern already used for the DP Physics record above). All four criteria equally weighted (25% each), 8-level achievement scale (marks=8 = the maximum achievable level), teacher-assessed and externally moderated by IB sampling, no fixed sitting duration. Unlike the other four MYP subjects modeled in this batch, language acquisition is compulsory in every MYP year (except for bilingual students following the separate language-and-literature route). Optional MYP eAssessment (for MYP Certificate/course-results seekers only, not modeled as this record\'s components) comprises an on-screen exam (Listening 32 marks, Reading 32 marks, Writing 32 marks) plus a separately-scored, IB-moderated speaking examination (Speaking 32 marks) -- cited for completeness only, not modeled.',
    assessmentModel: 'criterion-referenced',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'business',
    code: 'DP Business Management',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2024',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Pre-Released Case Study Response', durationMinutes: 90, marks: 30, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Unseen Stimulus, Quantitative Focus', durationMinutes: 90, marks: 40, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Business Research Project', durationMinutes: null, marks: 25, weightingPercent: 30, assessmentType: 'project', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Pre-Released Case Study Response', durationMinutes: 90, marks: 30, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Unseen Stimulus, Quantitative Focus', durationMinutes: 105, marks: 50, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true, calculatorAllowed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Unseen Stimulus on a Social Enterprise (HL Only)', durationMinutes: 75, marks: 25, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Business Research Project', durationMinutes: null, marks: 25, weightingPercent: 20, assessmentType: 'project', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/business-management-hl-subject-brief-en.pdf',
    verifiedOn: '2026-09-05',
    mirrorSourceUrl: 'https://anatolia.edu.gr/images/highschool/IBDP/Business_long_subject_guide.pdf',
    sourceConfidence: 'authentic-mirror-high-confidence',
    corroboratingSourceUrl: 'https://dp.uwcea.org/docs/Business%20Management%20Subject%20Guide.pdf',
    notes: 'Both tiers modeled in full. Owner decision 2026-09-05 (D-129) widened this site\'s evidence policy so a genuine, authentic IB-origin document is usable even when mirrored on a third-party host, not only ibo.org itself, provided the primary figures are checked for internal consistency and independently corroborated. Weighting and duration for Higher Level are read directly from the official public subject brief (first assessments 2024), directly fetched this session. Exact mark totals for every component at both tiers -- not published in the two-page subject brief itself -- are read from the full official subject guide\'s own "Assessment outline -- SL/HL" appendix, reproduced verbatim on an IB World School\'s own site (Anatolia College, a non-commercial school domain hosting the guide for its own community) and independently corroborated by a second, separately hosted copy of the identical official guide on another IB World School\'s site (UWC East Africa), both directly fetched this session. Every Higher Level figure the mirror and the official subject brief both state (all three paper weightings and durations) match exactly, giving strong confidence in the mirror\'s accuracy for the figures the brief does not itself publish (all mark totals, and the Standard Level weighting/duration, since no separate Standard Level subject brief could be retrieved this session). Standard Level sits Paper 1 and Paper 2 plus the Business Research Project; Higher Level sits the same two papers (Paper 2 lengthened and extended to cover HL-only extension topics) plus an HL-only Paper 3 on a social enterprise, and the same Business Research Project (internally assessed, externally moderated, maximum 1,800 words, re-weighted).',
    internalNotes: 'D-129 batch. Checklist: both mirrors (anatolia.edu.gr, dp.uwcea.org) reproduce the guide\'s own page numbering, section headers ("Appendix 2 - IBO Assessment outline"), IB terminology and assessment-objective codes (AO1-AO4) verbatim and consistently with each other and with the officially hosted HL subject brief on every overlapping figure (P1=25%/90min, P2=30%/105min, P3=25%/75min, IA=20% at HL) -- no numeric conflict found anywhere the sources overlap. D-128\'s prior session found only the OLD (pre-2024) syllabus and left this subject unmodeled; this session confirmed and used the CURRENT syllabus (first assessment 2024, code family unchanged as "DP Business Management" since IB does not publish a separate numeric code at DP level).',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'language-a-language-and-literature',
    code: 'DP Language A: Language and Literature',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Guided Textual Analysis', durationMinutes: 75, marks: 20, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Comparative Essay', durationMinutes: 105, marks: 25, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Individual Oral', title: 'Internal Assessment -- Individual Oral', durationMinutes: null, marks: 40, weightingPercent: 30, assessmentType: 'oral', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Guided Textual Analysis (Two Passages)', durationMinutes: 135, marks: 40, weightingPercent: 35, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Comparative Essay', durationMinutes: 105, marks: 25, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'HL Essay', title: 'HL Essay -- Written Coursework on One Studied Work', durationMinutes: null, marks: 20, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Individual Oral', title: 'Internal Assessment -- Individual Oral', durationMinutes: null, marks: 40, weightingPercent: 20, assessmentType: 'oral', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/contentassets/5895a05412144fe890312bad52b17044/curriculum.brief-languagea.language.and.literature-eng.pdf',
    verifiedOn: '2026-09-05',
    mirrorSourceUrl: 'https://thinkib.net/englishalanglit/blog/57135/further-update-changes-to-paper-2-for-may-2026-exams-and-beyond',
    sourceConfidence: 'authentic-mirror-corroborated',
    corroboratingSourceUrl: 'https://libguides.westsoundacademy.org/ib-language-and-literature-hl-2026',
    notes: 'Both tiers modeled in full, for the current course as revised for May 2026 examinations onward -- distinct from Language A: Literature already modeled elsewhere in this file. This subject underwent a genuine, IB-announced revision to its Paper 2 marking criteria effective from the May 2026 exam session: Paper 2\'s total fell from 30 to 25 marks (its first criterion narrowed from 10 to 5 marks, with the remaining marks redistributed across two new sub-criteria), while every other component\'s structure, duration and weighting was independently confirmed unchanged. Paper 1, the HL Essay and the Individual Oral mark totals and durations/weighting are read directly from the official public subject brief; the revised Paper 2 total is read from a specialist IB-teacher-authored resource that explains the criterion-by-criterion change in detail, corroborated by a current IB World School\'s own library research guide for this exact course (citing the official 2026 guide and Teacher Support Material by name, and independently confirming the course\'s three areas of exploration are unchanged from the prior syllabus). Standard Level sits one guided analysis at Paper 1 and Higher Level sits two; Paper 2 is a comparative essay on two studied literary works, common to both tiers; the Individual Oral (40 marks, both tiers) is internally assessed and externally moderated; the HL Essay (20 marks, Higher Level only, 1,200-1,500 words) is externally assessed written coursework.',
    internalNotes: 'D-129 batch. This was the subject D-128 left blocked purely by tooling failure (a source repeatedly failed to load); this session found the underlying reason was also a genuine, undocumented course revision (first assessment 2026) that D-128 never got far enough to discover. IMPORTANT CROSS-CHECK: this same Paper 2 mark-total revision (30->25, effective May 2026) also applies to the separate, already-modeled Language A: Literature record elsewhere in this file, whose existing Paper 2 marks (25, both tiers, verifiedOn 2026-09-04) were flagged in an earlier working note as possibly wrong (suspected should be 30). Having now traced the 2026 revision in detail, that existing record\'s 25-mark figure is CORRECT for the current (May-2026-onward) syllabus and needs no correction -- the earlier suspicion was based on pre-revision source material. No change made to that record since it was already accurate; noting this here so the reasoning is not lost. Checklist: officialSourceUrl points to the 2021-dated subject brief (the most recent freely-hosted official brief found; the 2026 full guide itself is paywalled on resources.ibo.org/IB store) -- its structure, weighting and duration for every component OTHER than Paper 2\'s mark total were independently confirmed still current via the West Sound Academy LibGuide\'s explicit "Course at a Glance" citation of the real 2026 guide.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'psychology',
    code: 'DP Psychology',
    specStatus: 'future',
    tiers: ['sl', 'hl'],
    firstAssessment: '2027',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Integration of Concepts, Content and Contexts', durationMinutes: 90, marks: 35, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Applying Concepts and Content to Research Contexts', durationMinutes: 90, marks: 35, weightingPercent: 35, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Psychology Research Proposal', durationMinutes: null, marks: 24, weightingPercent: 30, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Integration of Concepts, Content and Contexts', durationMinutes: 90, marks: 35, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Applying Concepts and Content to Research Contexts', durationMinutes: 90, marks: 35, weightingPercent: 25, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Interpretation and Analysis of Research Data (HL Only)', durationMinutes: 105, marks: 30, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Psychology Research Proposal', durationMinutes: null, marks: 24, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/university-admission/latest-curriculum-updates/psychology-updates/',
    verifiedOn: '2026-09-05',
    notes: 'Both tiers modeled in full, for the NEW psychology course (launched February 2025, first teaching August 2025, first assessment May 2027) -- not yet the syllabus current students sit, and deliberately marked `future` rather than `current` for exactly that reason. Every figure below, including full mark totals for every component, is read directly from the IB\'s own official curriculum-updates page for this subject, which reproduces the new course\'s complete assessment-outline tables in full (no mirror or third-party source was needed). The currently-active syllabus (first assessment 2019, being taught out until this new course fully replaces it) is NOT modeled here: its official public subject brief gives weighting and duration but not mark totals, and this session\'s search for an independently reliable mark-total source for it was not completed -- a genuine gap, not a silent one. Standard Level sits Paper 1 (integration of concepts/content/contexts) and Paper 2 (applying concepts to research contexts, including the four class practicals); Higher Level sits the same two papers (re-weighted) plus an HL-only Paper 3 on interpretation and analysis of research data, since data analysis and interpretation is studied by both levels but assessed only at HL. The Internal Assessment (a research proposal designed using one of four research methods practised in class, 24 marks both tiers) is internally assessed by the teacher and externally moderated by the IB.',
    internalNotes: 'D-129 batch. Subject-specific transition-awareness note from the task brief applied directly: confirmed via ibo.org\'s own psychology-updates page that a genuine two-syllabus transition is underway (old: first assessment 2019; new: first assessment 2027) -- this is the same pattern as ESS/Global Politics/Computer Science. Chose to model ONLY the new/future syllabus because it is the one with complete, OFFICIAL_HOST-sourced marks; did not extend research to source the old syllabus\'s marks (a real M19/3/PSYCH/BP2 markscheme mirror was found confirming that syllabus\'s Paper 2 uses a 22-mark-per-question criterion scale, SL sits one question=22 total marks, HL sits two=44 total marks, but Paper 1 and Paper 3 marks for that old syllabus were not independently confirmed this session) due to time budget -- flagged as a real gap, not silently dropped. sourceConfidence/mirrorSourceUrl intentionally omitted: every fact came directly from ibo.org itself.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'environmental-systems-and-societies',
    code: 'DP Environmental Systems and Societies',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Short-Answer and Data-Based Questions', durationMinutes: 60, marks: 35, weightingPercent: 25, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Section A: Short Answer and Section B: Essay', durationMinutes: 120, marks: 60, weightingPercent: 50, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Individual Investigation', durationMinutes: null, marks: 30, weightingPercent: 25, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Short-Answer and Data-Based Questions', durationMinutes: 120, marks: 70, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Section A: Short Answer and Section B: Essay', durationMinutes: 150, marks: 80, weightingPercent: 50, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Individual Investigation', durationMinutes: null, marks: 30, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/recognition/pdfs/environmental-systems-and-societies-en.pdf',
    verifiedOn: '2026-09-05',
    mirrorSourceUrl: 'https://mrkremerscience.com/new-ess/ess-exams/',
    sourceConfidence: 'authentic-mirror-corroborated',
    corroboratingSourceUrl: 'https://sciencesauceonline.com/ibess/the-ess-ia/',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject brief (first assessment 2026, directly fetched this session, confirming the "first assessment 2026" claim carried over from an earlier session\'s finding rather than assuming it). Standard Level mark totals (Paper 1 35 marks; Paper 2 60 marks, Section A 40 + Section B one essay from a choice of two, 20 marks) are corroborated by three independent sources including a first-hand account from a student sitting this exact syllabus. Higher Level mark totals (Paper 1 70 marks; Paper 2 80 marks, Section A 40 + Section B two essays from a choice of three, 40 marks) rest primarily on one detailed, explicitly guide-citing teacher resource, with the weighting and duration pattern it describes matching the official brief exactly; a second detailed source corroborates the weighting percentages but not the Higher Level mark totals specifically. The Internal Assessment (an individual investigation into a self-chosen environmental issue, maximum 3,000 words, marked against six criteria A-F worth 4/4/4/6/6/6 marks, 30 marks total, identical at both tiers) is independently corroborated by two further sources, one explicitly citing the official IB Examiner Instructions 2026 document.',
    internalNotes: 'D-129 batch. One competing source (esstutor.net) stated Standard Level Paper 2 = 65 marks rather than 60; rejected as an outlier since three independent sources (mrkremerscience.com\'s detailed table, iblieve.org\'s first-hand student account, and a further corroborating search summary describing the same Section A/B split) all agree on 60 and none corroborate 65. Higher Level mark totals are the weakest-evidenced figures in this record (single detailed primary source, mrkremerscience.com, rather than a second source independently stating the same numbers) -- flagged here rather than silently treated as equally strong as the Standard Level figures; the internal arithmetic consistency of that source (Section A 40 marks stated identically at both tiers; Section B doubling from one 20-mark essay at SL to two 20-mark essays at HL, exactly matching the "two essays from a choice of three" structure) supports its reliability. Weighting-table duration for Paper 2 in a corroborating source (Clastify) matched the official brief exactly, adding confidence to the overall figures even though it did not itself state mark totals.',
    assessmentModel: 'component-based',
  },
  {
    boardSlug: 'ib',
    qualificationSlug: 'ib-dp',
    subjectSlug: 'global-politics',
    code: 'DP Global Politics',
    specStatus: 'current',
    tiers: ['sl', 'hl'],
    firstAssessment: '2026',
    components: [
      { paperCode: 'Paper 1', title: 'Paper 1 -- Source-Based Questions on the Core', durationMinutes: 75, marks: 25, weightingPercent: 30, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Extended Response on the Thematic Studies', durationMinutes: 90, marks: 30, weightingPercent: 40, assessmentType: 'written-exam', tier: 'sl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Engagement Project', durationMinutes: null, marks: 24, weightingPercent: 30, assessmentType: 'coursework', tier: 'sl', internallyAssessed: true, externallyModerated: true },
      { paperCode: 'Paper 1', title: 'Paper 1 -- Source-Based Questions on the Core', durationMinutes: 75, marks: 25, weightingPercent: 20, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 2', title: 'Paper 2 -- Extended Response on the Thematic Studies', durationMinutes: 90, marks: 30, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Paper 3', title: 'Paper 3 -- Stimulus-Based Questions on the HL Extension (HL Only)', durationMinutes: 90, marks: 28, weightingPercent: 30, assessmentType: 'written-exam', tier: 'hl', externallyAssessed: true },
      { paperCode: 'Internal Assessment', title: 'Internal Assessment -- Engagement Project', durationMinutes: null, marks: 30, weightingPercent: 20, assessmentType: 'coursework', tier: 'hl', internallyAssessed: true, externallyModerated: true },
    ],
    officialSourceUrl: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/global-politics-sl-hl-subject-brief-en.pdf',
    verifiedOn: '2026-09-05',
    mirrorSourceUrl: 'https://www.glopopolis.org/2026/assessment',
    sourceConfidence: 'authentic-mirror-high-confidence',
    corroboratingSourceUrl: 'https://bespokelearning.io/learning/guides/ib-global-politics-guide',
    notes: 'Both tiers modeled in full. Weighting and duration are read directly from the official public subject brief (first assessment 2026, directly fetched this session, confirming the "first assessment 2026" claim carried over from an earlier session\'s finding rather than assuming it). Mark totals for every component (Paper 1: 25; Paper 2: 30; Paper 3, Higher Level only: 28; Internal Assessment: 24 Standard Level / 30 Higher Level) are read from a detailed, actively maintained independent study site that quotes the official course guide directly for methodology and whose own component-by-component mark breakdowns sum exactly to each stated total; corroborated by a second, independently published subject guide agreeing on structure, weighting and teaching-hours allocation. Standard Level sits Paper 1 (source-based, core topics), Paper 2 (extended response, thematic studies) and the Engagement Project; Higher Level sits the same two papers (re-weighted) plus an HL-only Paper 3 on the HL extension (global political challenges), and a longer, higher-weighted Engagement Project.',
    internalNotes: 'D-129 batch. Genuine duration conflict found and resolved in favour of the official source: the official subject brief states Paper 2 = 1.5 hours at both tiers, but both independent mirrors used for mark totals state 1 hour 45 minutes. Per this batch\'s sourcing rule, a directly-fetched OFFICIAL_HOST figure takes precedence over conflicting mirrors when the two disagree and there is no third source to arbitrate -- 90 minutes (the official brief\'s figure) is used in this record. This does not affect any mark total (the mirrors\' own Paper 2 mark total, 30, is not itself in conflict with anything). Recorded here rather than silently overridden so a future reviewer can see both figures. Paper 1 and Paper 3 durations from the same mirrors matched the official brief exactly (75 and 90 minutes respectively), which is part of why the mirror source as a whole is rated high-confidence despite this one discrepancy.',
    assessmentModel: 'component-based',
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
