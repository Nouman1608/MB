/**
 * The "How is <course> assessed?" FAQ answer on a course hub, moved out of
 * src/pages/boards/[board]/[qualification]/[subject].astro (D-448) so it can
 * be unit-tested against every assessment record without a build. The same
 * string feeds the visible accordion and the FAQPage JSON-LD, which search
 * engines and AI answer engines read on its own, without the table beside it
 * -- so the answer must carry its own level / route context.
 *
 * Behaviour kept from WS6 / D-155 / D-264: alternativeGroup papers read "one
 * of X or Y"; two or more tiers are grouped "X candidates take: ...";
 * routeGroup records fall through to the flat list (not claimed fixed); a
 * component with a distinct AS weighting names both figures.
 *
 * D-448 (finding C, 2026-11-15) adds:
 *   - a record with ONE tier (IB DP Biology and Chemistry are HL-only) names
 *     it: "Higher Level (HL) candidates take: ..." and says other levels are
 *     not listed. Before, "Paper 1 -- 2h, 75 marks, 36%" read as applying to
 *     SL too. No SL figure is supplied: none is held.
 *   - a staged Cambridge AS & A Level record (tiers as-only + a2-only, no
 *     per-paper tier) says "% of the A Level", not "% of the qualification",
 *     and that the AS-only route is weighted differently and not itemised.
 *   - the source is named by what the linked document is (specification,
 *     subject brief, course page), not always "specification".
 */
import type { Assessment, AssessmentComponent } from '../../data/academic/assessments.ts';

export const TIER_LABEL: Record<string, string> = {
  'not-tiered': '',
  core: 'Core',
  extended: 'Extended',
  foundation: 'Foundation',
  higher: 'Higher',
  'first-language': 'First Language',
  'second-language': 'Second Language',
  'as-only': 'AS',
  'a2-only': 'A2',
  sl: 'SL',
  hl: 'HL',
};

/** Long form, used where a single level is named on its own. */
const TIER_LONG: Record<string, string> = {
  core: 'Core', extended: 'Extended', foundation: 'Foundation tier', higher: 'Higher tier',
  'first-language': 'First Language', 'second-language': 'Second Language',
  'as-only': 'AS Level', 'a2-only': 'A2', sl: 'Standard Level (SL)', hl: 'Higher Level (HL)',
};

/** True for a Cambridge-style staged AS & A Level record with no per-paper tier. */
export function isStagedAsA(a: Pick<Assessment, 'tiers' | 'components'>): boolean {
  return a.tiers.includes('as-only') && a.tiers.includes('a2-only') && !a.components.some((c) => c.tier && c.tier !== 'not-tiered');
}

/**
 * What the record's linked source is, judged only from its URL. A "brief"
 * is a board subject brief (official, but not the full specification); a
 * PDF named as a syllabus/specification/guide is the specification; any
 * other link is a board course page.
 */
export function sourceKind(url: string): 'subject brief' | 'specification' | 'course page' {
  if (/brief/i.test(url)) return 'subject brief';
  if (/\.pdf($|\?)/i.test(url) && /(syllabus|specification|spec|guide)/i.test(url)) return 'specification';
  if (/(specification|syllabus)/i.test(url)) return 'specification';
  return 'course page';
}

export function assessmentAnswer(a: Assessment, ctx: { courseLabel: string; boardName: string; statusCaveat?: string }): string {
  const staged = isStagedAsA(a);
  const weightingProse = (comp: AssessmentComponent): string => {
    if (comp.asWeightingPercent != null && comp.asWeightingPercent !== comp.weightingPercent) {
      return comp.weightingPercent === 0
        ? `${comp.asWeightingPercent}% of the AS Level (not counted toward the A Level)`
        : `${comp.asWeightingPercent}% of the AS Level, ${comp.weightingPercent}% of the A Level`;
    }
    return `${comp.weightingPercent}% of the ${staged ? 'A Level' : 'qualification'}`;
  };
  const fmtComponent = (comp: AssessmentComponent) => {
    const dur = comp.durationLabel
      ? comp.durationLabel.replace(/^approx\. /, 'approximately ').replace(/m$/, ' minutes')
      : comp.durationMinutes
      ? `${Math.floor(comp.durationMinutes / 60)}h${comp.durationMinutes % 60 ? ` ${comp.durationMinutes % 60}m` : ''}`.trim()
      : 'no fixed duration';
    // D-454: an unconfirmed total is said so, never shown as a number.
    const marks = comp.marks === null ? 'mark total not confirmed' : `${comp.marks} marks`;
    return `${comp.paperCode} (${comp.title}) — ${dur}, ${marks}, ${weightingProse(comp)}`;
  };
  const describeComponents = (comps: readonly AssessmentComponent[]): string => {
    const seen = new Set<string>();
    const parts: string[] = [];
    for (const comp of comps) {
      if (seen.has(comp.paperCode)) continue;
      if (comp.alternativeGroup) {
        const group = comps.filter((c) => c.alternativeGroup === comp.alternativeGroup);
        group.forEach((c) => seen.add(c.paperCode));
        parts.push(`one of ${group.map(fmtComponent).join(' or ')}`);
      } else {
        seen.add(comp.paperCode);
        parts.push(fmtComponent(comp));
      }
    }
    return parts.join('; ');
  };
  const hasRouteGroups = a.components.some((comp) => comp.routeGroup && comp.routeGroup.length > 0);
  const tierValues = hasRouteGroups
    ? []
    : [...new Set(a.components.map((comp) => comp.tier).filter((t): t is NonNullable<typeof t> => !!t && t !== 'not-tiered'))];
  let componentList: string;
  let scopeNote = '';
  if (tierValues.length > 1) {
    componentList = tierValues
      .map((tier) => {
        const shared = a.components.filter((comp) => !comp.tier || comp.tier === 'not-tiered');
        const tierComps = a.components.filter((comp) => comp.tier === tier);
        return `${TIER_LABEL[tier] ?? tier} candidates take: ${describeComponents([...tierComps, ...shared])}`;
      })
      .join('. ');
  } else if (tierValues.length === 1) {
    const t = tierValues[0];
    componentList = `${TIER_LONG[t] ?? TIER_LABEL[t] ?? t} candidates take: ${describeComponents(a.components)}`;
    scopeNote = ` These figures are for ${TIER_LONG[t] ?? t} only; figures for other levels are not listed on this page.`;
  } else {
    componentList = describeComponents(a.components);
    if (staged) scopeNote = ' These weightings are for the full A Level. A candidate taking the AS Level only sits fewer papers, weighted differently; that route is not itemised in this answer.';
  }
  const modelPhrase = a.assessmentModel ? ` It is a ${a.assessmentModel.replace('-', ' ')} qualification.` : '';
  // Only a subject brief is relabelled: a board course page hosts the specification the figures were read from.
  const kind = sourceKind(a.officialSourceUrl) === 'subject brief' ? 'subject brief' : 'specification';
  return `${ctx.courseLabel} (${a.code}) is assessed through: ${componentList}.${scopeNote}${modelPhrase} Source: official ${ctx.boardName} ${kind}, verified ${a.verifiedOn}.${ctx.statusCaveat ?? ''}`;
}
