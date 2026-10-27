#!/usr/bin/env node
/**
 * Fails when two or more resources declare the exact same official
 * syllabus scope (subject + boards + qualifications + stage + resourceType
 * + the full set of syllabusTopics topic/subtopic pairs) UNLESS that exact
 * pair has been hand-reviewed and recorded in REVIEWED_LEGITIMATE below.
 *
 * Background: a site-wide audit (2026-08-23, see docs/decision-log.md
 * D-010) found the weekly `marlbridge-weekly-study-guides` scheduled task
 * had independently generated 27 genuine duplicate resource pairs (54
 * files) under two different slug conventions for the identical syllabus
 * scope, most within a single afternoon of rapid-fire runs. A naive
 * "does a file with a similar name already exist" check is not reliable
 * enough to catch this -- the automation had picked slugs like
 * `as-chem-equilibria-practice` and `as-chemistry-equilibria-practice` for
 * the exact same board/qualification/subject/subtopic, which don't look
 * alike as strings but ARE identical in the one thing that actually
 * matters: the official syllabus scope declared in frontmatter. Those 27
 * were consolidated (see CONSOLIDATED_RESOURCES in generate-redirects.mjs).
 *
 * That same audit found 12 pairs sharing an identical scope signature that
 * were judged, by reading the prose, to be genuinely different content --
 * the official taxonomy simply doesn't split some topics as finely as the
 * actual resources do. Those 12 were re-reviewed from scratch, file by
 * file, during the v1.x Closure release (2026-08-26, not assumed from the
 * 2026-08-23 note) -- see docs/decision-log.md D-048. That re-review found:
 *   - 10 of the 12 groups genuinely are different content under one coarse
 *     tag. Each is recorded below with the specific evidence that
 *     distinguishes them, so the next person doesn't have to re-derive it.
 *   - 2 of the 12 groups (both revision-notes pairs, one Law, one
 *     Sociology) were REAL duplicates: each pair's two files independently
 *     condensed the same underlying study-guide resource and read as the
 *     same content restated. Both were merged into one file; the retired
 *     slugs 301-redirect via CONSOLIDATED_RESOURCES. They no longer appear
 *     as groups at all (each subject+scope now has only one file), so they
 *     need no allowlist entry -- the merge is the fix, not an exemption.
 *
 * This script is a hard gate: a NEW group that is not in REVIEWED_LEGITIMATE
 * fails the build (exit 1). This is deliberate -- WS9 of the v1.x Closure
 * release requires "the checker must fail on new unreviewed groups" so that
 * a future automation run can no longer silently ship an unreviewed
 * same-scope pair the way the 27 above shipped unreviewed. Getting an
 * unfamiliar group past this gate requires actually reading both files and
 * either (a) adding a REVIEWED_LEGITIMATE entry with real evidence, or
 * (b) merging/redirecting the duplicate, exactly as this file's own
 * history was resolved. "The tag is coarser than the content" is not by
 * itself evidence -- name the actual difference in subject matter.
 *
 * Usage: node scripts/check-duplicate-resource-scope.mjs
 *   Optionally restrict the report to groups that include one of a given
 *   set of files (handy for the weekly automation, which only cares
 *   whether ITS new file collides with something pre-existing):
 *     node scripts/check-duplicate-resource-scope.mjs --only-involving <slug1>,<slug2>,...
 *   With --only-involving, the exit code is always 0 -- this mode is an
 *   informational check for the automation to read, not a gate on it
 *   (the automation cannot itself write an allowlist entry).
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const RES_DIR = 'src/content/resources';

/**
 * Every group the fresh 2026-08-26 review confirmed is genuinely different
 * content, keyed by the group's file list (sorted, exact match required --
 * if either file is renamed or a third file joins the group, the key no
 * longer matches and the group must be re-reviewed). Each entry records
 * the specific, readable-by-a-human evidence for the distinction, not just
 * "looks different" -- per WS9's instruction to classify with evidence.
 */
const REVIEWED_LEGITIMATE = [
  {
    files: ["cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-practice.md", "cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-practice.md: Mutually exclusive and independent events, conditional probability and tree diagrams | cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-practice.md: Probability basics: notation, simple cases with and without replacement, complements and the addition rule",
  },
  {
    files: ["cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-revision-notes.md", "cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional-revision-notes.md: Mutually exclusive and independent events, conditional probability and tree diagrams | cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and-revision-notes.md: Probability basics: notation, simple cases with and without replacement, complements and the addition rule",
  },
  {
    files: ["cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional.md", "cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-igcse-statistics-mutually-exclusive-and-independent-events-conditional.md: Mutually exclusive and independent events, conditional probability and tree diagrams | cambridge-igcse-statistics-probability-basics-notation-simple-cases-with-and.md: Probability basics: notation, simple cases with and without replacement, complements and the addition rule",
  },
  {
    files: ["cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-practice.md", "cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-practice.md: Quartiles, percentiles, range and interquartile range from lists, tables and cumulative frequency curves | cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-practice.md: Standard deviation and choosing a measure of dispersion",
  },
  {
    files: ["cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-revision-notes.md", "cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range-revision-notes.md: Quartiles, percentiles, range and interquartile range from lists, tables and cumulative frequency curves | cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-revision-notes.md: Standard deviation and choosing a measure of dispersion",
  },
  {
    files: ["cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range.md", "cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-igcse-statistics-quartiles-percentiles-range-and-interquartile-range.md: Quartiles, percentiles, range and interquartile range from lists, tables and cumulative frequency curves | cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion.md: Standard deviation and choosing a measure of dispersion",
  },
  {
    files: ["cambridge-o-level-statistics-independent-events-and-selection-with-or-without-practice.md", "cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-o-level-statistics-independent-events-and-selection-with-or-without-practice.md: Independent events and selection with or without replacement | cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-practice.md: Probability basics and mutually exclusive events",
  },
  {
    files: ["cambridge-o-level-statistics-independent-events-and-selection-with-or-without-revision-notes.md", "cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-o-level-statistics-independent-events-and-selection-with-or-without-revision-notes.md: Independent events and selection with or without replacement | cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events-revision-notes.md: Probability basics and mutually exclusive events",
  },
  {
    files: ["cambridge-o-level-statistics-independent-events-and-selection-with-or-without.md", "cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): cambridge-o-level-statistics-independent-events-and-selection-with-or-without.md: Independent events and selection with or without replacement | cambridge-o-level-statistics-probability-basics-and-mutually-exclusive-events.md: Probability basics and mutually exclusive events",
  },
  {
    files: ["edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-practice.md", "edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-practice.md: Indices, surds and quadratics: functions, discriminant and completing the square | edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph-practice.md: Simultaneous equations, inequalities, polynomials, graph sketching and transformations",
  },
  {
    files: ["edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-revision-notes.md", "edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant-revision-notes.md: Indices, surds and quadratics: functions, discriminant and completing the square | edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph-revision-notes.md: Simultaneous equations, inequalities, polynomials, graph sketching and transformations",
  },
  {
    files: ["edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant.md", "edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant.md: Indices, surds and quadratics: functions, discriminant and completing the square | edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph.md: Simultaneous equations, inequalities, polynomials, graph sketching and transformations",
  },
  {
    files: ["edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-practice.md", "edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-practice.md: Integration by substitution, integration by parts and integration using partial fractions | edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-practice.md: Volumes of revolution, separable differential equations and areas from parametric equations",
  },
  {
    files: ["edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-revision-notes.md", "edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-revision-notes.md: Integration by substitution, integration by parts and integration using partial fractions | edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-revision-notes.md: Volumes of revolution, separable differential equations and areas from parametric equations",
  },
  {
    files: ["edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and.md", "edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and.md: Integration by substitution, integration by parts and integration using partial fractions | edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations.md: Volumes of revolution, separable differential equations and areas from parametric equations",
  },
  {
    files: ["ocr-a-level-mathematics-applications-of-differentiation-tangents-normals-practice.md", "ocr-a-level-mathematics-differentiation-fundamentals-gradients-second-practice.md", "ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-applications-of-differentiation-tangents-normals-practice.md: Applications of differentiation: tangents, normals, stationary points, optimisation and increasing/decreasing functions | ocr-a-level-mathematics-differentiation-fundamentals-gradients-second-practice.md: Differentiation fundamentals: gradients, second derivatives, first principles and standard derivatives | ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-practice.md: Techniques of differentiation: product, quotient, chain rule, implicit, parametric and differential equations",
  },
  {
    files: ["ocr-a-level-mathematics-applications-of-differentiation-tangents-normals-revision-notes.md", "ocr-a-level-mathematics-differentiation-fundamentals-gradients-second-revision-notes.md", "ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-applications-of-differentiation-tangents-normals-revision-notes.md: Applications of differentiation: tangents, normals, stationary points, optimisation and increasing/decreasing functions | ocr-a-level-mathematics-differentiation-fundamentals-gradients-second-revision-notes.md: Differentiation fundamentals: gradients, second derivatives, first principles and standard derivatives | ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-revision-notes.md: Techniques of differentiation: product, quotient, chain rule, implicit, parametric and differential equations",
  },
  {
    files: ["ocr-a-level-mathematics-applications-of-differentiation-tangents-normals.md", "ocr-a-level-mathematics-differentiation-fundamentals-gradients-second.md", "ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-applications-of-differentiation-tangents-normals.md: Applications of differentiation: tangents, normals, stationary points, optimisation and increasing/decreasing functions | ocr-a-level-mathematics-differentiation-fundamentals-gradients-second.md: Differentiation fundamentals: gradients, second derivatives, first principles and standard derivatives | ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain.md: Techniques of differentiation: product, quotient, chain rule, implicit, parametric and differential equations",
  },
  {
    files: ["ocr-a-level-mathematics-differential-equations-separable-equations-and-their-practice.md", "ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-practice.md", "ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-differential-equations-separable-equations-and-their-practice.md: Differential equations: separable equations and their interpretation | ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-practice.md: Integration basics: fundamental theorem, indefinite and definite integrals, areas and standard integrals | ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-practice.md: Techniques of integration: reverse chain rule, parts, substitution, partial fractions and the trapezium rule",
  },
  {
    files: ["ocr-a-level-mathematics-differential-equations-separable-equations-and-their-revision-notes.md", "ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes.md", "ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-differential-equations-separable-equations-and-their-revision-notes.md: Differential equations: separable equations and their interpretation | ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes.md: Integration basics: fundamental theorem, indefinite and definite integrals, areas and standard integrals | ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-revision-notes.md: Techniques of integration: reverse chain rule, parts, substitution, partial fractions and the trapezium rule",
  },
  {
    files: ["ocr-a-level-mathematics-differential-equations-separable-equations-and-their.md", "ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and.md", "ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-differential-equations-separable-equations-and-their.md: Differential equations: separable equations and their interpretation | ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and.md: Integration basics: fundamental theorem, indefinite and definite integrals, areas and standard integrals | ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts.md: Techniques of integration: reverse chain rule, parts, substitution, partial fractions and the trapezium rule",
  },
  {
    files: ["ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-practice.md", "ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-practice.md: Discrete random variables and the binomial distribution | ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-practice.md: The normal distribution and choosing an appropriate distribution",
  },
  {
    files: ["ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-revision-notes.md", "ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-revision-notes.md: Discrete random variables and the binomial distribution | ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-revision-notes.md: The normal distribution and choosing an appropriate distribution",
  },
  {
    files: ["ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution.md", "ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution.md: Discrete random variables and the binomial distribution | ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate.md: The normal distribution and choosing an appropriate distribution",
  },
  {
    files: ["ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and-practice.md", "ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and-practice.md: Exponential and logarithmic functions: e^x, a^x, ln x and the gradient of e^kx | ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-practice.md: Laws of logarithms, exponential equations, reduction to linear form and growth/decay modelling",
  },
  {
    files: ["ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and-revision-notes.md", "ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and-revision-notes.md: Exponential and logarithmic functions: e^x, a^x, ln x and the gradient of e^kx | ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-revision-notes.md: Laws of logarithms, exponential equations, reduction to linear form and growth/decay modelling",
  },
  {
    files: ["ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and.md", "ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-exponential-and-logarithmic-functions-e-x-a-x-ln-x-and.md: Exponential and logarithmic functions: e^x, a^x, ln x and the gradient of e^kx | ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to.md: Laws of logarithms, exponential equations, reduction to linear form and growth/decay modelling",
  },
  {
    files: ["ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-practice.md", "ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension-practice.md", "ocr-a-level-mathematics-two-dimensional-equilibrium-connected-particles-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-practice.md: Friction: limiting friction, coefficient of friction and rough surfaces | ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension-practice.md: Newton's laws, weight and equilibrium in one dimension | ocr-a-level-mathematics-two-dimensional-equilibrium-connected-particles-and-practice.md: Two-dimensional equilibrium, connected particles and pulleys",
  },
  {
    files: ["ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-revision-notes.md", "ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension-revision-notes.md", "ocr-a-level-mathematics-two-dimensional-equilibrium-connected-particles-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-revision-notes.md: Friction: limiting friction, coefficient of friction and rough surfaces | ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension-revision-notes.md: Newton's laws, weight and equilibrium in one dimension | ocr-a-level-mathematics-two-dimensional-equilibrium-connected-particles-and-revision-notes.md: Two-dimensional equilibrium, connected particles and pulleys",
  },
  {
    files: ["ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and.md", "ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension.md", "ocr-a-level-mathematics-two-dimensional-equilibrium-connected-particles-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and.md: Friction: limiting friction, coefficient of friction and rough surfaces | ocr-a-level-mathematics-newtons-laws-weight-and-equilibrium-in-one-dimension.md: Newton's laws, weight and equilibrium in one dimension | ocr-a-level-mathematics-two-dimensional-equilibrium-connected-particles-and.md: Two-dimensional equilibrium, connected particles and pulleys",
  },
  {
    files: ["ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and-practice.md", "ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and-practice.md", "ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-practice.md", "ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and-practice.md: Graphs of functions, curve sketching, intersections and proportionality | ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and-practice.md: Indices, surds, simultaneous equations, quadratics and inequalities | ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-practice.md: Modulus, functions, inverses, composites and graph transformations | ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-practice.md: Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions",
  },
  {
    files: ["ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and-revision-notes.md", "ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and-revision-notes.md", "ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-revision-notes.md", "ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and-revision-notes.md: Graphs of functions, curve sketching, intersections and proportionality | ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and-revision-notes.md: Indices, surds, simultaneous equations, quadratics and inequalities | ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-revision-notes.md: Modulus, functions, inverses, composites and graph transformations | ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-revision-notes.md: Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions",
  },
  {
    files: ["ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and.md", "ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and.md", "ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph.md", "ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-graphs-of-functions-curve-sketching-intersections-and.md: Graphs of functions, curve sketching, intersections and proportionality | ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and.md: Indices, surds, simultaneous equations, quadratics and inequalities | ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph.md: Modulus, functions, inverses, composites and graph transformations | ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions.md: Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions",
  },
  {
    files: ["ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-practice.md", "ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-practice.md: Hypothesis testing for correlation: Pearson's product-moment coefficient | ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the-practice.md: Hypothesis testing: language, binomial tests and the sample mean",
  },
  {
    files: ["ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-revision-notes.md", "ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-revision-notes.md: Hypothesis testing for correlation: Pearson's product-moment coefficient | ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the-revision-notes.md: Hypothesis testing: language, binomial tests and the sample mean",
  },
  {
    files: ["ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product.md", "ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product.md: Hypothesis testing for correlation: Pearson's product-moment coefficient | ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the.md: Hypothesis testing: language, binomial tests and the sample mean",
  },
  {
    files: ["ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-practice.md", "ocr-a-level-mathematics-straight-lines-and-circles-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-practice.md: Parametric equations of curves and their use in modelling | ocr-a-level-mathematics-straight-lines-and-circles-practice.md: Straight lines and circles",
  },
  {
    files: ["ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-revision-notes.md", "ocr-a-level-mathematics-straight-lines-and-circles-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-revision-notes.md: Parametric equations of curves and their use in modelling | ocr-a-level-mathematics-straight-lines-and-circles-revision-notes.md: Straight lines and circles",
  },
  {
    files: ["ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in.md", "ocr-a-level-mathematics-straight-lines-and-circles.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in.md: Parametric equations of curves and their use in modelling | ocr-a-level-mathematics-straight-lines-and-circles.md: Straight lines and circles",
  },
  {
    files: ["ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-practice.md", "ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-practice.md: Reciprocal and inverse trig functions, identities, compound and double angles, R-form and proof | ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-practice.md: Trigonometric ratios, triangle rules, small angles, graphs and basic equations",
  },
  {
    files: ["ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-revision-notes.md", "ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-revision-notes.md: Reciprocal and inverse trig functions, identities, compound and double angles, R-form and proof | ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-revision-notes.md: Trigonometric ratios, triangle rules, small angles, graphs and basic equations",
  },
  {
    files: ["ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities.md", "ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities.md: Reciprocal and inverse trig functions, identities, compound and double angles, R-form and proof | ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles.md: Trigonometric ratios, triangle rules, small angles, graphs and basic equations",
  },
  {
    files: ["ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric-practice.md", "ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric-practice.md: Sequences, sigma notation, arithmetic and geometric series and modelling | ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-practice.md: The binomial expansion: positive integer and rational powers",
  },
  {
    files: ["ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric-revision-notes.md", "ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric-revision-notes.md: Sequences, sigma notation, arithmetic and geometric series and modelling | ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-revision-notes.md: The binomial expansion: positive integer and rational powers",
  },
  {
    files: ["ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric.md", "ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric.md: Sequences, sigma notation, arithmetic and geometric series and modelling | ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational.md: The binomial expansion: positive integer and rational powers",
  },
  {
    files: ["ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding-practice.md", "ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding-practice.md: Algebraic language, proof, simplifying and expanding | ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic-practice.md: Factorising, completing the square and algebraic fractions",
  },
  {
    files: ["ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding-revision-notes.md", "ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding-revision-notes.md: Algebraic language, proof, simplifying and expanding | ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic-revision-notes.md: Factorising, completing the square and algebraic fractions",
  },
  {
    files: ["ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding.md", "ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding.md: Algebraic language, proof, simplifying and expanding | ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic.md: Factorising, completing the square and algebraic fractions",
  },
  {
    files: ["ocr-gcse-mathematics-pythagoras-right-angled-trigonometry-and-exact-practice.md", "ocr-gcse-mathematics-sine-rule-and-cosine-rule-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-pythagoras-right-angled-trigonometry-and-exact-practice.md: Pythagoras, right-angled trigonometry and exact trigonometric values | ocr-gcse-mathematics-sine-rule-and-cosine-rule-practice.md: Sine rule and cosine rule",
  },
  {
    files: ["ocr-gcse-mathematics-pythagoras-right-angled-trigonometry-and-exact-revision-notes.md", "ocr-gcse-mathematics-sine-rule-and-cosine-rule-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-pythagoras-right-angled-trigonometry-and-exact-revision-notes.md: Pythagoras, right-angled trigonometry and exact trigonometric values | ocr-gcse-mathematics-sine-rule-and-cosine-rule-revision-notes.md: Sine rule and cosine rule",
  },
  {
    files: ["ocr-gcse-mathematics-pythagoras-right-angled-trigonometry-and-exact.md", "ocr-gcse-mathematics-sine-rule-and-cosine-rule.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-pythagoras-right-angled-trigonometry-and-exact.md: Pythagoras, right-angled trigonometry and exact trigonometric values | ocr-gcse-mathematics-sine-rule-and-cosine-rule.md: Sine rule and cosine rule",
  },
  {
    files: ["ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-practice.md", "ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-practice.md: Sample spaces, systematic listing, product rule, Venn diagrams and sets | ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and-practice.md: Tree diagrams, addition and multiplication laws, and conditional probability",
  },
  {
    files: ["ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-revision-notes.md", "ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-revision-notes.md: Sample spaces, systematic listing, product rule, Venn diagrams and sets | ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and-revision-notes.md: Tree diagrams, addition and multiplication laws, and conditional probability",
  },
  {
    files: ["ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn.md", "ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn.md: Sample spaces, systematic listing, product rule, Venn diagrams and sets | ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and.md: Tree diagrams, addition and multiplication laws, and conditional probability",
  },
  {
    files: ["ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and-practice.md", "ocr-gcse-mathematics-solving-linear-and-quadratic-equations-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and-practice.md: Simultaneous equations, graphical solutions and iteration | ocr-gcse-mathematics-solving-linear-and-quadratic-equations-practice.md: Solving linear and quadratic equations",
  },
  {
    files: ["ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and-revision-notes.md", "ocr-gcse-mathematics-solving-linear-and-quadratic-equations-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and-revision-notes.md: Simultaneous equations, graphical solutions and iteration | ocr-gcse-mathematics-solving-linear-and-quadratic-equations-revision-notes.md: Solving linear and quadratic equations",
  },
  {
    files: ["ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and.md", "ocr-gcse-mathematics-solving-linear-and-quadratic-equations.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and.md: Simultaneous equations, graphical solutions and iteration | ocr-gcse-mathematics-solving-linear-and-quadratic-equations.md: Solving linear and quadratic equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-practice.md", "oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-practice.md: Compound and double angle formulae, R-form, identities and equations | oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-practice.md: Inverse trigonometric functions and secant, cosecant, cotangent",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-revision-notes.md", "oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-revision-notes.md: Compound and double angle formulae, R-form, identities and equations | oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-revision-notes.md: Inverse trigonometric functions and secant, cosecant, cotangent",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities.md", "oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities.md: Compound and double angle formulae, R-form, identities and equations | oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant.md: Inverse trigonometric functions and secant, cosecant, cotangent",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-practice.md", "oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-practice.md: Differentiating exponentials, logarithms, trigonometric functions and the product, quotient and chain rules | oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and-practice.md: Implicit and parametric differentiation, tangents and normals",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-revision-notes.md", "oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-revision-notes.md: Differentiating exponentials, logarithms, trigonometric functions and the product, quotient and chain rules | oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and-revision-notes.md: Implicit and parametric differentiation, tangents and normals",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric.md", "oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric.md: Differentiating exponentials, logarithms, trigonometric functions and the product, quotient and chain rules | oxfordaqa-a-level-mathematics-implicit-and-parametric-differentiation-tangents-and.md: Implicit and parametric differentiation, tangents and normals",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-practice.md", "oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-practice.md: Functions: domain, range, composite and inverse functions, modulus | oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-practice.md: Transformations, rational functions, algebraic division and partial fractions",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-revision-notes.md", "oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-revision-notes.md: Functions: domain, range, composite and inverse functions, modulus | oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division-revision-notes.md: Transformations, rational functions, algebraic division and partial fractions",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions.md", "oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions.md: Functions: domain, range, composite and inverse functions, modulus | oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division.md: Transformations, rational functions, algebraic division and partial fractions",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-practice.md", "oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-practice.md: Hypothesis testing for a proportion and a Poisson mean | oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-practice.md: Hypothesis tests for means: z-tests and t-tests",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-revision-notes.md", "oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-revision-notes.md: Hypothesis testing for a proportion and a Poisson mean | oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-revision-notes.md: Hypothesis tests for means: z-tests and t-tests",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean.md", "oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean.md: Hypothesis testing for a proportion and a Poisson mean | oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests.md: Hypothesis tests for means: z-tests and t-tests",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-practice.md", "oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-practice.md: Integration by inspection and substitution | oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-practice.md: Integration by parts, partial fractions and volumes of revolution",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-revision-notes.md", "oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution-revision-notes.md: Integration by inspection and substitution | oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of-revision-notes.md: Integration by parts, partial fractions and volumes of revolution",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution.md", "oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-integration-by-inspection-and-substitution.md: Integration by inspection and substitution | oxfordaqa-a-level-mathematics-integration-by-parts-partial-fractions-and-volumes-of.md: Integration by parts, partial fractions and volumes of revolution",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass-practice.md", "oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass-practice.md: Moments, rigid bodies in equilibrium and centres of mass | oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-practice.md: Statics: force diagrams, friction, resolving forces and equilibrium of a particle",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass-revision-notes.md", "oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass-revision-notes.md: Moments, rigid bodies in equilibrium and centres of mass | oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-revision-notes.md: Statics: force diagrams, friction, resolving forces and equilibrium of a particle",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass.md", "oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass.md: Moments, rigid bodies in equilibrium and centres of mass | oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and.md: Statics: force diagrams, friction, resolving forces and equilibrium of a particle",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-practice.md", "oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-practice.md: Polynomials, factor theorem, graph sketching and transformations | oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-practice.md: Surds, indices, quadratics and simultaneous equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-revision-notes.md", "oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and-revision-notes.md: Polynomials, factor theorem, graph sketching and transformations | oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-revision-notes.md: Surds, indices, quadratics and simultaneous equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and.md", "oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and.md: Polynomials, factor theorem, graph sketching and transformations | oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations.md: Surds, indices, quadratics and simultaneous equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-practice.md", "oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-practice.md: Sine and cosine rules, radians, arcs and sectors, trigonometric graphs | oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-practice.md: Trigonometric identities and solving trigonometric equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-revision-notes.md", "oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors-revision-notes.md: Sine and cosine rules, radians, arcs and sectors, trigonometric graphs | oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-revision-notes.md: Trigonometric identities and solving trigonometric equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors.md", "oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-sine-and-cosine-rules-radians-arcs-and-sectors.md: Sine and cosine rules, radians, arcs and sectors, trigonometric graphs | oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric.md: Trigonometric identities and solving trigonometric equations",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-practice.md", "oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-practice.md: The scalar product, angles between lines and perpendicular distance | oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-practice.md: Vectors in two and three dimensions and vector equations of lines",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-revision-notes.md", "oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and-revision-notes.md: The scalar product, angles between lines and perpendicular distance | oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-revision-notes.md: Vectors in two and three dimensions and vector equations of lines",
  },
  {
    files: ["oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and.md", "oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-a-level-mathematics-the-scalar-product-angles-between-lines-and.md: The scalar product, angles between lines and perpendicular distance | oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector.md: Vectors in two and three dimensions and vector equations of lines",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-angle-facts-polygons-and-quadrilaterals-practice.md", "oxfordaqa-igcse-mathematics-circle-properties-circle-theorems-and-geometrical-proof-practice.md", "oxfordaqa-igcse-mathematics-scale-drawings-bearings-constructions-and-loci-practice.md", "oxfordaqa-igcse-mathematics-symmetry-congruence-similarity-and-3d-solids-with-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-angle-facts-polygons-and-quadrilaterals-practice.md: Angle facts, polygons and quadrilaterals | oxfordaqa-igcse-mathematics-circle-properties-circle-theorems-and-geometrical-proof-practice.md: Circle properties, circle theorems and geometrical proof | oxfordaqa-igcse-mathematics-scale-drawings-bearings-constructions-and-loci-practice.md: Scale drawings, bearings, constructions and loci | oxfordaqa-igcse-mathematics-symmetry-congruence-similarity-and-3d-solids-with-practice.md: Symmetry, congruence, similarity and 3D solids with plans and elevations",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-angle-facts-polygons-and-quadrilaterals-revision-notes.md", "oxfordaqa-igcse-mathematics-circle-properties-circle-theorems-and-geometrical-proof-revision-notes.md", "oxfordaqa-igcse-mathematics-scale-drawings-bearings-constructions-and-loci-revision-notes.md", "oxfordaqa-igcse-mathematics-symmetry-congruence-similarity-and-3d-solids-with-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-angle-facts-polygons-and-quadrilaterals-revision-notes.md: Angle facts, polygons and quadrilaterals | oxfordaqa-igcse-mathematics-circle-properties-circle-theorems-and-geometrical-proof-revision-notes.md: Circle properties, circle theorems and geometrical proof | oxfordaqa-igcse-mathematics-scale-drawings-bearings-constructions-and-loci-revision-notes.md: Scale drawings, bearings, constructions and loci | oxfordaqa-igcse-mathematics-symmetry-congruence-similarity-and-3d-solids-with-revision-notes.md: Symmetry, congruence, similarity and 3D solids with plans and elevations",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-angle-facts-polygons-and-quadrilaterals.md", "oxfordaqa-igcse-mathematics-circle-properties-circle-theorems-and-geometrical-proof.md", "oxfordaqa-igcse-mathematics-scale-drawings-bearings-constructions-and-loci.md", "oxfordaqa-igcse-mathematics-symmetry-congruence-similarity-and-3d-solids-with.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-angle-facts-polygons-and-quadrilaterals.md: Angle facts, polygons and quadrilaterals | oxfordaqa-igcse-mathematics-circle-properties-circle-theorems-and-geometrical-proof.md: Circle properties, circle theorems and geometrical proof | oxfordaqa-igcse-mathematics-scale-drawings-bearings-constructions-and-loci.md: Scale drawings, bearings, constructions and loci | oxfordaqa-igcse-mathematics-symmetry-congruence-similarity-and-3d-solids-with.md: Symmetry, congruence, similarity and 3D solids with plans and elevations",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-data-types-tables-and-averages-practice.md", "oxfordaqa-igcse-mathematics-statistical-charts-and-diagrams-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-data-types-tables-and-averages-practice.md: Data types, tables and averages | oxfordaqa-igcse-mathematics-statistical-charts-and-diagrams-practice.md: Statistical charts and diagrams",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-data-types-tables-and-averages-revision-notes.md", "oxfordaqa-igcse-mathematics-statistical-charts-and-diagrams-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-data-types-tables-and-averages-revision-notes.md: Data types, tables and averages | oxfordaqa-igcse-mathematics-statistical-charts-and-diagrams-revision-notes.md: Statistical charts and diagrams",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-data-types-tables-and-averages.md", "oxfordaqa-igcse-mathematics-statistical-charts-and-diagrams.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-data-types-tables-and-averages.md: Data types, tables and averages | oxfordaqa-igcse-mathematics-statistical-charts-and-diagrams.md: Statistical charts and diagrams",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-practice.md", "oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs-practice.md", "oxfordaqa-igcse-mathematics-graphs-in-real-contexts-rates-of-change-and-direct-and-practice.md", "oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-practice.md: Differentiation, tangents and stationary points | oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs-practice.md: Functions, coordinates and straight-line graphs | oxfordaqa-igcse-mathematics-graphs-in-real-contexts-rates-of-change-and-direct-and-practice.md: Graphs in real contexts, rates of change and direct and inverse variation | oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and-practice.md: Graphs of quadratic, cubic, reciprocal, exponential and trigonometric functions",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-revision-notes.md", "oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs-revision-notes.md", "oxfordaqa-igcse-mathematics-graphs-in-real-contexts-rates-of-change-and-direct-and-revision-notes.md", "oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-revision-notes.md: Differentiation, tangents and stationary points | oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs-revision-notes.md: Functions, coordinates and straight-line graphs | oxfordaqa-igcse-mathematics-graphs-in-real-contexts-rates-of-change-and-direct-and-revision-notes.md: Graphs in real contexts, rates of change and direct and inverse variation | oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and-revision-notes.md: Graphs of quadratic, cubic, reciprocal, exponential and trigonometric functions",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points.md", "oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs.md", "oxfordaqa-igcse-mathematics-graphs-in-real-contexts-rates-of-change-and-direct-and.md", "oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points.md: Differentiation, tangents and stationary points | oxfordaqa-igcse-mathematics-functions-coordinates-and-straight-line-graphs.md: Functions, coordinates and straight-line graphs | oxfordaqa-igcse-mathematics-graphs-in-real-contexts-rates-of-change-and-direct-and.md: Graphs in real contexts, rates of change and direct and inverse variation | oxfordaqa-igcse-mathematics-graphs-of-quadratic-cubic-reciprocal-exponential-and.md: Graphs of quadratic, cubic, reciprocal, exponential and trigonometric functions",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional-practice.md", "oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected-practice.md", "oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional-practice.md: Independent events, tree diagrams and conditional probability | oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected-practice.md: Probability scale, relative frequency, expected frequency and sample size | oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-practice.md: Sample spaces, mutually exclusive events and Venn diagram probability",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional-revision-notes.md", "oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected-revision-notes.md", "oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional-revision-notes.md: Independent events, tree diagrams and conditional probability | oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected-revision-notes.md: Probability scale, relative frequency, expected frequency and sample size | oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn-revision-notes.md: Sample spaces, mutually exclusive events and Venn diagram probability",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional.md", "oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected.md", "oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-independent-events-tree-diagrams-and-conditional.md: Independent events, tree diagrams and conditional probability | oxfordaqa-igcse-mathematics-probability-scale-relative-frequency-expected.md: Probability scale, relative frequency, expected frequency and sample size | oxfordaqa-igcse-mathematics-sample-spaces-mutually-exclusive-events-and-venn.md: Sample spaces, mutually exclusive events and Venn diagram probability",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-index-laws-surds-standard-form-and-sets-practice.md", "oxfordaqa-igcse-mathematics-ordering-the-four-operations-primes-powers-and-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-index-laws-surds-standard-form-and-sets-practice.md: Index laws, surds, standard form and sets | oxfordaqa-igcse-mathematics-ordering-the-four-operations-primes-powers-and-practice.md: Ordering, the four operations, primes, powers and calculators",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-index-laws-surds-standard-form-and-sets-revision-notes.md", "oxfordaqa-igcse-mathematics-ordering-the-four-operations-primes-powers-and-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-index-laws-surds-standard-form-and-sets-revision-notes.md: Index laws, surds, standard form and sets | oxfordaqa-igcse-mathematics-ordering-the-four-operations-primes-powers-and-revision-notes.md: Ordering, the four operations, primes, powers and calculators",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-index-laws-surds-standard-form-and-sets.md", "oxfordaqa-igcse-mathematics-ordering-the-four-operations-primes-powers-and.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-index-laws-surds-standard-form-and-sets.md: Index laws, surds, standard form and sets | oxfordaqa-igcse-mathematics-ordering-the-four-operations-primes-powers-and.md: Ordering, the four operations, primes, powers and calculators",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-inequalities-on-number-lines-and-graphs-practice.md", "oxfordaqa-igcse-mathematics-linear-equations-and-forming-equations-from-problems-practice.md", "oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-practice.md", "oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-inequalities-on-number-lines-and-graphs-practice.md: Inequalities on number lines and graphs | oxfordaqa-igcse-mathematics-linear-equations-and-forming-equations-from-problems-practice.md: Linear equations and forming equations from problems | oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-practice.md: Simultaneous equations, linear and linear-quadratic | oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-practice.md: Solving quadratic equations by factorising, completing the square and the formula",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-inequalities-on-number-lines-and-graphs-revision-notes.md", "oxfordaqa-igcse-mathematics-linear-equations-and-forming-equations-from-problems-revision-notes.md", "oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-revision-notes.md", "oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-inequalities-on-number-lines-and-graphs-revision-notes.md: Inequalities on number lines and graphs | oxfordaqa-igcse-mathematics-linear-equations-and-forming-equations-from-problems-revision-notes.md: Linear equations and forming equations from problems | oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-revision-notes.md: Simultaneous equations, linear and linear-quadratic | oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing-revision-notes.md: Solving quadratic equations by factorising, completing the square and the formula",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-inequalities-on-number-lines-and-graphs.md", "oxfordaqa-igcse-mathematics-linear-equations-and-forming-equations-from-problems.md", "oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic.md", "oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-inequalities-on-number-lines-and-graphs.md: Inequalities on number lines and graphs | oxfordaqa-igcse-mathematics-linear-equations-and-forming-equations-from-problems.md: Linear equations and forming equations from problems | oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic.md: Simultaneous equations, linear and linear-quadratic | oxfordaqa-igcse-mathematics-solving-quadratic-equations-by-factorising-completing.md: Solving quadratic equations by factorising, completing the square and the formula",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-practice.md", "oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-practice.md", "oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-practice.md: Matrices and matrix transformations | oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-practice.md: Transformations of 2D shapes | oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-practice.md: Vectors and vector geometry",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-revision-notes.md", "oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-revision-notes.md", "oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-revision-notes.md: Matrices and matrix transformations | oxfordaqa-igcse-mathematics-transformations-of-2d-shapes-revision-notes.md: Transformations of 2D shapes | oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-revision-notes.md: Vectors and vector geometry",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations.md", "oxfordaqa-igcse-mathematics-transformations-of-2d-shapes.md", "oxfordaqa-igcse-mathematics-vectors-and-vector-geometry.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations.md: Matrices and matrix transformations | oxfordaqa-igcse-mathematics-transformations-of-2d-shapes.md: Transformations of 2D shapes | oxfordaqa-igcse-mathematics-vectors-and-vector-geometry.md: Vectors and vector geometry",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-pythagoras-theorem-and-right-angled-trigonometry-practice.md", "oxfordaqa-igcse-mathematics-similar-figures-and-arcs-sectors-practice.md", "oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-practice.md", "oxfordaqa-igcse-mathematics-units-perimeter-area-volume-and-surface-area-practice.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-pythagoras-theorem-and-right-angled-trigonometry-practice.md: Pythagoras' theorem and right-angled trigonometry | oxfordaqa-igcse-mathematics-similar-figures-and-arcs-sectors-practice.md: Similar figures and arcs, sectors | oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-practice.md: Sine rule, cosine rule and area of a triangle | oxfordaqa-igcse-mathematics-units-perimeter-area-volume-and-surface-area-practice.md: Units, perimeter, area, volume and surface area",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-pythagoras-theorem-and-right-angled-trigonometry-revision-notes.md", "oxfordaqa-igcse-mathematics-similar-figures-and-arcs-sectors-revision-notes.md", "oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-revision-notes.md", "oxfordaqa-igcse-mathematics-units-perimeter-area-volume-and-surface-area-revision-notes.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-pythagoras-theorem-and-right-angled-trigonometry-revision-notes.md: Pythagoras' theorem and right-angled trigonometry | oxfordaqa-igcse-mathematics-similar-figures-and-arcs-sectors-revision-notes.md: Similar figures and arcs, sectors | oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle-revision-notes.md: Sine rule, cosine rule and area of a triangle | oxfordaqa-igcse-mathematics-units-perimeter-area-volume-and-surface-area-revision-notes.md: Units, perimeter, area, volume and surface area",
  },
  {
    files: ["oxfordaqa-igcse-mathematics-pythagoras-theorem-and-right-angled-trigonometry.md", "oxfordaqa-igcse-mathematics-similar-figures-and-arcs-sectors.md", "oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle.md", "oxfordaqa-igcse-mathematics-units-perimeter-area-volume-and-surface-area.md"],
    evidence: "Maths gaps sprint (D-419, 11 Oct 2026). These sibling units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): oxfordaqa-igcse-mathematics-pythagoras-theorem-and-right-angled-trigonometry.md: Pythagoras' theorem and right-angled trigonometry | oxfordaqa-igcse-mathematics-similar-figures-and-arcs-sectors.md: Similar figures and arcs, sectors | oxfordaqa-igcse-mathematics-sine-rule-cosine-rule-and-area-of-a-triangle.md: Sine rule, cosine rule and area of a triangle | oxfordaqa-igcse-mathematics-units-perimeter-area-volume-and-surface-area.md: Units, perimeter, area, volume and surface area",
  },
  {
    files: ["edexcel-ial-chemistry-acid-base-equilibria-ph-ka-and-kw-practice.md", "edexcel-ial-chemistry-acid-base-equilibria-titration-curves-and-buffers-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-acid-base-equilibria-ph-ka-and-kw-practice.md: YCH11 14.1-14.14 Acid-base equilibria: pH, Ka and Kw -- outcomes 14.1 to 14.14 (Topic 14) | edexcel-ial-chemistry-acid-base-equilibria-titration-curves-and-buffers-practice.md: YCH11 14.15-14.23 Acid-base equilibria: titration curves and buffers -- outcomes 14.15 to 14.23 (Topic 14), including Core Practical 11",
  },
  {
    files: ["edexcel-ial-chemistry-acid-base-equilibria-ph-ka-and-kw-revision-notes.md", "edexcel-ial-chemistry-acid-base-equilibria-titration-curves-and-buffers-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-acid-base-equilibria-ph-ka-and-kw-revision-notes.md: YCH11 14.1-14.14 Acid-base equilibria: pH, Ka and Kw -- outcomes 14.1 to 14.14 (Topic 14) | edexcel-ial-chemistry-acid-base-equilibria-titration-curves-and-buffers-revision-notes.md: YCH11 14.15-14.23 Acid-base equilibria: titration curves and buffers -- outcomes 14.15 to 14.23 (Topic 14), including Core Practical 11",
  },
  {
    files: ["edexcel-ial-chemistry-acid-base-equilibria-ph-ka-and-kw.md", "edexcel-ial-chemistry-acid-base-equilibria-titration-curves-and-buffers.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-acid-base-equilibria-ph-ka-and-kw.md: YCH11 14.1-14.14 Acid-base equilibria: pH, Ka and Kw -- outcomes 14.1 to 14.14 (Topic 14) | edexcel-ial-chemistry-acid-base-equilibria-titration-curves-and-buffers.md: YCH11 14.15-14.23 Acid-base equilibria: titration curves and buffers -- outcomes 14.15 to 14.23 (Topic 14), including Core Practical 11",
  },
  {
    files: ["edexcel-ial-chemistry-alcohols-practice.md", "edexcel-ial-chemistry-mass-spectra-and-infrared-spectroscopy-practice.md", "edexcel-ial-chemistry-organic-principles-and-halogenoalkanes-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-alcohols-practice.md: YCH11 10C Alcohols -- Topic 10 part 10C Alcohols (all its numbered outcomes and core practicals) | edexcel-ial-chemistry-mass-spectra-and-infrared-spectroscopy-practice.md: YCH11 10D Mass spectra and infrared spectroscopy -- Topic 10 part 10D Mass spectra and IR (all its numbered outcomes) | edexcel-ial-chemistry-organic-principles-and-halogenoalkanes-practice.md: YCH11 10A-10B Organic chemistry: general principles and halogenoalkanes -- Topic 10 parts 10A General principles and 10B Halogenoalkanes (all their numbered outcomes and core practicals)",
  },
  {
    files: ["edexcel-ial-chemistry-alcohols-revision-notes.md", "edexcel-ial-chemistry-mass-spectra-and-infrared-spectroscopy-revision-notes.md", "edexcel-ial-chemistry-organic-principles-and-halogenoalkanes-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-alcohols-revision-notes.md: YCH11 10C Alcohols -- Topic 10 part 10C Alcohols (all its numbered outcomes and core practicals) | edexcel-ial-chemistry-mass-spectra-and-infrared-spectroscopy-revision-notes.md: YCH11 10D Mass spectra and infrared spectroscopy -- Topic 10 part 10D Mass spectra and IR (all its numbered outcomes) | edexcel-ial-chemistry-organic-principles-and-halogenoalkanes-revision-notes.md: YCH11 10A-10B Organic chemistry: general principles and halogenoalkanes -- Topic 10 parts 10A General principles and 10B Halogenoalkanes (all their numbered outcomes and core practicals)",
  },
  {
    files: ["edexcel-ial-chemistry-alcohols.md", "edexcel-ial-chemistry-mass-spectra-and-infrared-spectroscopy.md", "edexcel-ial-chemistry-organic-principles-and-halogenoalkanes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-alcohols.md: YCH11 10C Alcohols -- Topic 10 part 10C Alcohols (all its numbered outcomes and core practicals) | edexcel-ial-chemistry-mass-spectra-and-infrared-spectroscopy.md: YCH11 10D Mass spectra and infrared spectroscopy -- Topic 10 part 10D Mass spectra and IR (all its numbered outcomes) | edexcel-ial-chemistry-organic-principles-and-halogenoalkanes.md: YCH11 10A-10B Organic chemistry: general principles and halogenoalkanes -- Topic 10 parts 10A General principles and 10B Halogenoalkanes (all their numbered outcomes and core practicals)",
  },
  {
    files: ["edexcel-ial-chemistry-carbonyl-compounds-practice.md", "edexcel-ial-chemistry-carboxylic-acids-and-their-derivatives-practice.md", "edexcel-ial-chemistry-chirality-practice.md", "edexcel-ial-chemistry-spectroscopy-and-chromatography-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-carbonyl-compounds-practice.md: YCH11 15B Carbonyl compounds -- Topic 15 part 15B Carbonyl compounds (outcomes 15.6 to 15.8) | edexcel-ial-chemistry-carboxylic-acids-and-their-derivatives-practice.md: YCH11 15C-15D Carboxylic acids and their derivatives -- Topic 15 parts 15C Carboxylic acids and 15D Carboxylic acid derivatives (outcomes 15.9 to 15.16) | edexcel-ial-chemistry-chirality-practice.md: YCH11 15A Chirality -- Topic 15 part 15A Chirality (outcomes 15.1 to 15.5) | edexcel-ial-chemistry-spectroscopy-and-chromatography-practice.md: YCH11 15E Spectroscopy and chromatography -- Topic 15 part 15E Spectroscopy and chromatography (outcomes 15.17 to 15.23)",
  },
  {
    files: ["edexcel-ial-chemistry-carbonyl-compounds-revision-notes.md", "edexcel-ial-chemistry-carboxylic-acids-and-their-derivatives-revision-notes.md", "edexcel-ial-chemistry-chirality-revision-notes.md", "edexcel-ial-chemistry-spectroscopy-and-chromatography-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-carbonyl-compounds-revision-notes.md: YCH11 15B Carbonyl compounds -- Topic 15 part 15B Carbonyl compounds (outcomes 15.6 to 15.8) | edexcel-ial-chemistry-carboxylic-acids-and-their-derivatives-revision-notes.md: YCH11 15C-15D Carboxylic acids and their derivatives -- Topic 15 parts 15C Carboxylic acids and 15D Carboxylic acid derivatives (outcomes 15.9 to 15.16) | edexcel-ial-chemistry-chirality-revision-notes.md: YCH11 15A Chirality -- Topic 15 part 15A Chirality (outcomes 15.1 to 15.5) | edexcel-ial-chemistry-spectroscopy-and-chromatography-revision-notes.md: YCH11 15E Spectroscopy and chromatography -- Topic 15 part 15E Spectroscopy and chromatography (outcomes 15.17 to 15.23)",
  },
  {
    files: ["edexcel-ial-chemistry-carbonyl-compounds.md", "edexcel-ial-chemistry-carboxylic-acids-and-their-derivatives.md", "edexcel-ial-chemistry-chirality.md", "edexcel-ial-chemistry-spectroscopy-and-chromatography.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-carbonyl-compounds.md: YCH11 15B Carbonyl compounds -- Topic 15 part 15B Carbonyl compounds (outcomes 15.6 to 15.8) | edexcel-ial-chemistry-carboxylic-acids-and-their-derivatives.md: YCH11 15C-15D Carboxylic acids and their derivatives -- Topic 15 parts 15C Carboxylic acids and 15D Carboxylic acid derivatives (outcomes 15.9 to 15.16) | edexcel-ial-chemistry-chirality.md: YCH11 15A Chirality -- Topic 15 part 15A Chirality (outcomes 15.1 to 15.5) | edexcel-ial-chemistry-spectroscopy-and-chromatography.md: YCH11 15E Spectroscopy and chromatography -- Topic 15 part 15E Spectroscopy and chromatography (outcomes 15.17 to 15.23)",
  },
  {
    files: ["edexcel-ial-chemistry-entropy-practice.md", "edexcel-ial-chemistry-lattice-energy-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-entropy-practice.md: YCH11 12A Entropy -- Topic 12 part 12A Entropy (all its numbered outcomes) | edexcel-ial-chemistry-lattice-energy-practice.md: YCH11 12B Lattice energy -- Topic 12 part 12B Lattice energy (all its numbered outcomes)",
  },
  {
    files: ["edexcel-ial-chemistry-entropy-revision-notes.md", "edexcel-ial-chemistry-lattice-energy-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-entropy-revision-notes.md: YCH11 12A Entropy -- Topic 12 part 12A Entropy (all its numbered outcomes) | edexcel-ial-chemistry-lattice-energy-revision-notes.md: YCH11 12B Lattice energy -- Topic 12 part 12B Lattice energy (all its numbered outcomes)",
  },
  {
    files: ["edexcel-ial-chemistry-entropy.md", "edexcel-ial-chemistry-lattice-energy.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-entropy.md: YCH11 12A Entropy -- Topic 12 part 12A Entropy (all its numbered outcomes) | edexcel-ial-chemistry-lattice-energy.md: YCH11 12B Lattice energy -- Topic 12 part 12B Lattice energy (all its numbered outcomes)",
  },
  {
    files: ["edexcel-ial-chemistry-inorganic-chemistry-of-group-7-practice.md", "edexcel-ial-chemistry-redox-chemistry-practice.md", "edexcel-ial-chemistry-the-elements-of-groups-1-and-2-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-inorganic-chemistry-of-group-7-practice.md: YCH11 8C Inorganic chemistry of Group 7 -- Topic 8 part 8C Inorganic chemistry of Group 7 (all its numbered outcomes and core practicals) | edexcel-ial-chemistry-redox-chemistry-practice.md: YCH11 8A Redox chemistry -- Topic 8 part 8A Redox chemistry (all its numbered outcomes) | edexcel-ial-chemistry-the-elements-of-groups-1-and-2-practice.md: YCH11 8B The elements of Groups 1 and 2 -- Topic 8 part 8B The elements of Groups 1 and 2 (all its numbered outcomes and core practicals)",
  },
  {
    files: ["edexcel-ial-chemistry-inorganic-chemistry-of-group-7-revision-notes.md", "edexcel-ial-chemistry-redox-chemistry-revision-notes.md", "edexcel-ial-chemistry-the-elements-of-groups-1-and-2-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-inorganic-chemistry-of-group-7-revision-notes.md: YCH11 8C Inorganic chemistry of Group 7 -- Topic 8 part 8C Inorganic chemistry of Group 7 (all its numbered outcomes and core practicals) | edexcel-ial-chemistry-redox-chemistry-revision-notes.md: YCH11 8A Redox chemistry -- Topic 8 part 8A Redox chemistry (all its numbered outcomes) | edexcel-ial-chemistry-the-elements-of-groups-1-and-2-revision-notes.md: YCH11 8B The elements of Groups 1 and 2 -- Topic 8 part 8B The elements of Groups 1 and 2 (all its numbered outcomes and core practicals)",
  },
  {
    files: ["edexcel-ial-chemistry-inorganic-chemistry-of-group-7.md", "edexcel-ial-chemistry-redox-chemistry.md", "edexcel-ial-chemistry-the-elements-of-groups-1-and-2.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-inorganic-chemistry-of-group-7.md: YCH11 8C Inorganic chemistry of Group 7 -- Topic 8 part 8C Inorganic chemistry of Group 7 (all its numbered outcomes and core practicals) | edexcel-ial-chemistry-redox-chemistry.md: YCH11 8A Redox chemistry -- Topic 8 part 8A Redox chemistry (all its numbered outcomes) | edexcel-ial-chemistry-the-elements-of-groups-1-and-2.md: YCH11 8B The elements of Groups 1 and 2 -- Topic 8 part 8B The elements of Groups 1 and 2 (all its numbered outcomes and core practicals)",
  },
  {
    files: ["edexcel-ial-chemistry-ionic-and-covalent-bonding-practice.md", "edexcel-ial-chemistry-shapes-of-molecules-and-metallic-bonding-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-ionic-and-covalent-bonding-practice.md: YCH11 3A-3B Ionic and covalent bonding -- Topic 3 parts 3A Ionic bonding and 3B Covalent bonding (all their numbered outcomes) | edexcel-ial-chemistry-shapes-of-molecules-and-metallic-bonding-practice.md: YCH11 3C-3D Shapes of molecules and metallic bonding -- Topic 3 parts 3C Shapes of molecules and 3D Metallic bonding, plus any later Topic 3 outcomes after 3D",
  },
  {
    files: ["edexcel-ial-chemistry-ionic-and-covalent-bonding-revision-notes.md", "edexcel-ial-chemistry-shapes-of-molecules-and-metallic-bonding-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-ionic-and-covalent-bonding-revision-notes.md: YCH11 3A-3B Ionic and covalent bonding -- Topic 3 parts 3A Ionic bonding and 3B Covalent bonding (all their numbered outcomes) | edexcel-ial-chemistry-shapes-of-molecules-and-metallic-bonding-revision-notes.md: YCH11 3C-3D Shapes of molecules and metallic bonding -- Topic 3 parts 3C Shapes of molecules and 3D Metallic bonding, plus any later Topic 3 outcomes after 3D",
  },
  {
    files: ["edexcel-ial-chemistry-ionic-and-covalent-bonding.md", "edexcel-ial-chemistry-shapes-of-molecules-and-metallic-bonding.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-ionic-and-covalent-bonding.md: YCH11 3A-3B Ionic and covalent bonding -- Topic 3 parts 3A Ionic bonding and 3B Covalent bonding (all their numbered outcomes) | edexcel-ial-chemistry-shapes-of-molecules-and-metallic-bonding.md: YCH11 3C-3D Shapes of molecules and metallic bonding -- Topic 3 parts 3C Shapes of molecules and 3D Metallic bonding, plus any later Topic 3 outcomes after 3D",
  },
  {
    files: ["edexcel-ial-chemistry-transition-metals-complexes-and-colour-practice.md", "edexcel-ial-chemistry-transition-metals-redox-and-catalysis-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-transition-metals-complexes-and-colour-practice.md: YCH11 17.1-17.17 Transition metals: electronic structure, complexes and colour -- outcomes 17.1 to 17.17 (Topic 17) | edexcel-ial-chemistry-transition-metals-redox-and-catalysis-practice.md: YCH11 17.18-17.33 Transition metals: redox, reactions and catalysis -- outcomes 17.18 to 17.33 (Topic 17), including Core Practical 14",
  },
  {
    files: ["edexcel-ial-chemistry-transition-metals-complexes-and-colour-revision-notes.md", "edexcel-ial-chemistry-transition-metals-redox-and-catalysis-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-transition-metals-complexes-and-colour-revision-notes.md: YCH11 17.1-17.17 Transition metals: electronic structure, complexes and colour -- outcomes 17.1 to 17.17 (Topic 17) | edexcel-ial-chemistry-transition-metals-redox-and-catalysis-revision-notes.md: YCH11 17.18-17.33 Transition metals: redox, reactions and catalysis -- outcomes 17.18 to 17.33 (Topic 17), including Core Practical 14",
  },
  {
    files: ["edexcel-ial-chemistry-transition-metals-complexes-and-colour.md", "edexcel-ial-chemistry-transition-metals-redox-and-catalysis.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): edexcel-ial-chemistry-transition-metals-complexes-and-colour.md: YCH11 17.1-17.17 Transition metals: electronic structure, complexes and colour -- outcomes 17.1 to 17.17 (Topic 17) | edexcel-ial-chemistry-transition-metals-redox-and-catalysis.md: YCH11 17.18-17.33 Transition metals: redox, reactions and catalysis -- outcomes 17.18 to 17.33 (Topic 17), including Core Practical 14",
  },
  {
    files: ["ib-dp-chemistry-electron-pair-sharing-lewis-acids-complexes-and-practice.md", "ib-dp-chemistry-electron-pair-sharing-nucleophiles-electrophiles-and-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-electron-pair-sharing-lewis-acids-complexes-and-practice.md: DP Chemistry R3.4-6-13 Electron-pair sharing: Lewis acids, complexes and mechanisms -- Reactivity 3.4.6 to Reactivity 3.4.13 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-electron-pair-sharing-nucleophiles-electrophiles-and-practice.md: DP Chemistry R3.4-1-5 Electron-pair sharing: nucleophiles, electrophiles and substitution -- Reactivity 3.4.1 to Reactivity 3.4.5 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-electron-pair-sharing-lewis-acids-complexes-and-revision-notes.md", "ib-dp-chemistry-electron-pair-sharing-nucleophiles-electrophiles-and-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-electron-pair-sharing-lewis-acids-complexes-and-revision-notes.md: DP Chemistry R3.4-6-13 Electron-pair sharing: Lewis acids, complexes and mechanisms -- Reactivity 3.4.6 to Reactivity 3.4.13 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-electron-pair-sharing-nucleophiles-electrophiles-and-revision-notes.md: DP Chemistry R3.4-1-5 Electron-pair sharing: nucleophiles, electrophiles and substitution -- Reactivity 3.4.1 to Reactivity 3.4.5 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-electron-pair-sharing-lewis-acids-complexes-and.md", "ib-dp-chemistry-electron-pair-sharing-nucleophiles-electrophiles-and.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-electron-pair-sharing-lewis-acids-complexes-and.md: DP Chemistry R3.4-6-13 Electron-pair sharing: Lewis acids, complexes and mechanisms -- Reactivity 3.4.6 to Reactivity 3.4.13 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-electron-pair-sharing-nucleophiles-electrophiles-and.md: DP Chemistry R3.4-1-5 Electron-pair sharing: nucleophiles, electrophiles and substitution -- Reactivity 3.4.1 to Reactivity 3.4.5 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-electron-transfer-redox-cells-and-electrolysis-practice.md", "ib-dp-chemistry-electron-transfer-standard-electrode-potentials-and-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-electron-transfer-redox-cells-and-electrolysis-practice.md: DP Chemistry R3.2-1-11 Electron transfer: redox, cells and electrolysis -- Reactivity 3.2.1 to Reactivity 3.2.11 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-electron-transfer-standard-electrode-potentials-and-practice.md: DP Chemistry R3.2-12-16 Electron transfer: standard electrode potentials and Gibbs energy -- Reactivity 3.2.12 to Reactivity 3.2.16 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-electron-transfer-redox-cells-and-electrolysis-revision-notes.md", "ib-dp-chemistry-electron-transfer-standard-electrode-potentials-and-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-electron-transfer-redox-cells-and-electrolysis-revision-notes.md: DP Chemistry R3.2-1-11 Electron transfer: redox, cells and electrolysis -- Reactivity 3.2.1 to Reactivity 3.2.11 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-electron-transfer-standard-electrode-potentials-and-revision-notes.md: DP Chemistry R3.2-12-16 Electron transfer: standard electrode potentials and Gibbs energy -- Reactivity 3.2.12 to Reactivity 3.2.16 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-electron-transfer-redox-cells-and-electrolysis.md", "ib-dp-chemistry-electron-transfer-standard-electrode-potentials-and.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-electron-transfer-redox-cells-and-electrolysis.md: DP Chemistry R3.2-1-11 Electron transfer: redox, cells and electrolysis -- Reactivity 3.2.1 to Reactivity 3.2.11 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-electron-transfer-standard-electrode-potentials-and.md: DP Chemistry R3.2-12-16 Electron transfer: standard electrode potentials and Gibbs energy -- Reactivity 3.2.12 to Reactivity 3.2.16 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-functional-groups-and-naming-organic-compounds-practice.md", "ib-dp-chemistry-isomers-and-spectroscopic-identification-of-organic-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-functional-groups-and-naming-organic-compounds-practice.md: DP Chemistry S3.2-1-6 Functional groups and naming organic compounds -- Structure 3.2.1 to Structure 3.2.6 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-isomers-and-spectroscopic-identification-of-organic-practice.md: DP Chemistry S3.2-7-12 Isomers and spectroscopic identification of organic compounds -- Structure 3.2.7 to Structure 3.2.12 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-functional-groups-and-naming-organic-compounds-revision-notes.md", "ib-dp-chemistry-isomers-and-spectroscopic-identification-of-organic-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-functional-groups-and-naming-organic-compounds-revision-notes.md: DP Chemistry S3.2-1-6 Functional groups and naming organic compounds -- Structure 3.2.1 to Structure 3.2.6 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-isomers-and-spectroscopic-identification-of-organic-revision-notes.md: DP Chemistry S3.2-7-12 Isomers and spectroscopic identification of organic compounds -- Structure 3.2.7 to Structure 3.2.12 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-functional-groups-and-naming-organic-compounds.md", "ib-dp-chemistry-isomers-and-spectroscopic-identification-of-organic.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-functional-groups-and-naming-organic-compounds.md: DP Chemistry S3.2-1-6 Functional groups and naming organic compounds -- Structure 3.2.1 to Structure 3.2.6 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-isomers-and-spectroscopic-identification-of-organic.md: DP Chemistry S3.2-7-12 Isomers and spectroscopic identification of organic compounds -- Structure 3.2.7 to Structure 3.2.12 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-practice.md", "ib-dp-chemistry-how-fast-rates-and-collision-theory-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-practice.md: DP Chemistry R2.2-6-13 How fast? Rate equations, mechanisms and the Arrhenius equation -- Reactivity 2.2.6 to Reactivity 2.2.13 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-how-fast-rates-and-collision-theory-practice.md: DP Chemistry R2.2-1-5 How fast? Rates and collision theory -- Reactivity 2.2.1 to Reactivity 2.2.5 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-revision-notes.md", "ib-dp-chemistry-how-fast-rates-and-collision-theory-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius-revision-notes.md: DP Chemistry R2.2-6-13 How fast? Rate equations, mechanisms and the Arrhenius equation -- Reactivity 2.2.6 to Reactivity 2.2.13 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-how-fast-rates-and-collision-theory-revision-notes.md: DP Chemistry R2.2-1-5 How fast? Rates and collision theory -- Reactivity 2.2.1 to Reactivity 2.2.5 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius.md", "ib-dp-chemistry-how-fast-rates-and-collision-theory.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-how-fast-rate-equations-mechanisms-and-the-arrhenius.md: DP Chemistry R2.2-6-13 How fast? Rate equations, mechanisms and the Arrhenius equation -- Reactivity 2.2.6 to Reactivity 2.2.13 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-how-fast-rates-and-collision-theory.md: DP Chemistry R2.2-1-5 How fast? Rates and collision theory -- Reactivity 2.2.1 to Reactivity 2.2.5 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-proton-transfer-acids-bases-and-ph-practice.md", "ib-dp-chemistry-proton-transfer-kw-ka-kb-buffers-and-titration-curves-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-proton-transfer-acids-bases-and-ph-practice.md: DP Chemistry R3.1-1-8 Proton transfer: acids, bases and pH -- Reactivity 3.1.1 to Reactivity 3.1.8 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-proton-transfer-kw-ka-kb-buffers-and-titration-curves-practice.md: DP Chemistry R3.1-9-17 Proton transfer: Kw, Ka, Kb, buffers and titration curves -- Reactivity 3.1.9 to Reactivity 3.1.17 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-proton-transfer-acids-bases-and-ph-revision-notes.md", "ib-dp-chemistry-proton-transfer-kw-ka-kb-buffers-and-titration-curves-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-proton-transfer-acids-bases-and-ph-revision-notes.md: DP Chemistry R3.1-1-8 Proton transfer: acids, bases and pH -- Reactivity 3.1.1 to Reactivity 3.1.8 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-proton-transfer-kw-ka-kb-buffers-and-titration-curves-revision-notes.md: DP Chemistry R3.1-9-17 Proton transfer: Kw, Ka, Kb, buffers and titration curves -- Reactivity 3.1.9 to Reactivity 3.1.17 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-proton-transfer-acids-bases-and-ph.md", "ib-dp-chemistry-proton-transfer-kw-ka-kb-buffers-and-titration-curves.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-proton-transfer-acids-bases-and-ph.md: DP Chemistry R3.1-1-8 Proton transfer: acids, bases and pH -- Reactivity 3.1.1 to Reactivity 3.1.8 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-proton-transfer-kw-ka-kb-buffers-and-titration-curves.md: DP Chemistry R3.1-9-17 Proton transfer: Kw, Ka, Kb, buffers and titration curves -- Reactivity 3.1.9 to Reactivity 3.1.17 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-the-covalent-model-bonds-lewis-formulas-shapes-and-practice.md", "ib-dp-chemistry-the-covalent-model-formal-charge-sigma-and-pi-bonds-practice.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-the-covalent-model-bonds-lewis-formulas-shapes-and-practice.md: DP Chemistry S2.2-1-10 The covalent model: bonds, Lewis formulas, shapes and intermolecular forces -- Structure 2.2.1 to Structure 2.2.10 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-the-covalent-model-formal-charge-sigma-and-pi-bonds-practice.md: DP Chemistry S2.2-11-16 The covalent model: formal charge, sigma and pi bonds, and hybridization -- Structure 2.2.11 to Structure 2.2.16 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-the-covalent-model-bonds-lewis-formulas-shapes-and-revision-notes.md", "ib-dp-chemistry-the-covalent-model-formal-charge-sigma-and-pi-bonds-revision-notes.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-the-covalent-model-bonds-lewis-formulas-shapes-and-revision-notes.md: DP Chemistry S2.2-1-10 The covalent model: bonds, Lewis formulas, shapes and intermolecular forces -- Structure 2.2.1 to Structure 2.2.10 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-the-covalent-model-formal-charge-sigma-and-pi-bonds-revision-notes.md: DP Chemistry S2.2-11-16 The covalent model: formal charge, sigma and pi bonds, and hybridization -- Structure 2.2.11 to Structure 2.2.16 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ["ib-dp-chemistry-the-covalent-model-bonds-lewis-formulas-shapes-and.md", "ib-dp-chemistry-the-covalent-model-formal-charge-sigma-and-pi-bonds.md"],
    evidence: "Chemistry gaps sprint (D-402, 7 Oct 2026). These units share one subtopic tag because the official specification groups their outcomes under one topic, but each file covers a different, non-overlapping range of outcomes, and each unit was independently verified (coverage map, recomputed numbers, 10-word overlap scan): ib-dp-chemistry-the-covalent-model-bonds-lewis-formulas-shapes-and.md: DP Chemistry S2.2-1-10 The covalent model: bonds, Lewis formulas, shapes and intermolecular forces -- Structure 2.2.1 to Structure 2.2.10 in the guide (every understanding and its guidance, linking questions and HL notes in that range) | ib-dp-chemistry-the-covalent-model-formal-charge-sigma-and-pi-bonds.md: DP Chemistry S2.2-11-16 The covalent model: formal charge, sigma and pi bonds, and hybridization -- Structure 2.2.11 to Structure 2.2.16 in the guide (every understanding and its guidance, linking questions and HL notes in that range)",
  },
  {
    files: ['igcse-physics-0625-nuclear-physics-practice.md', 'igcse-physics-nuclear-physics-extended-practice.md'],
    evidence: 'Pre-existing pair found unreviewed during the thin-subjects sprint (3 Oct 2026). First is a 16-question Core + Extended set (atomic structure, nuclide notation, isotopes, detection, alpha/beta/gamma, decay equations, half-life, safety, scattering, fission). Second is a 6-question Extended-only drill on different scenarios (gold-foil observations, strontium-90 beta decay, half-life from 830/230 counts, deflection between charged plates, smoke-alarm isotope choice, fusion). No shared question, data or answer -- checked question by question.',
  },
  {
    files: ['igcse-physics-thermal-physics-extended-practice.md', 'igcse-physics-thermal-physics-practice.md'],
    evidence: 'Pre-existing pair found unreviewed during the thin-subjects sprint (3 Oct 2026). Second is a 13-question Core + Extended set (particle model, kelvin conversion, evaporation, conduction, radiation, convection, expansion, Brownian motion). First is a 6-question Extended-only drill (bicycle-pump pV, gas pressure from particle collisions, heater and specific heat capacity time, boiling v evaporation, conduction in gases, energy balance of a plate in sunlight). Both include one pV = constant calculation but with different contexts and numbers; no shared question or answer.',
  },
  {
    files: ['oxfordaqa-a-level-chemistry-bonding-and-structure.md', 'oxfordaqa-a-level-chemistry-shapes-polarity-and-intermolecular-forces.md'],
    evidence: 'Pre-existing pair found unreviewed during the thin-subjects sprint (3 Oct 2026). The site tags 9620 bonding only at topic level. First covers specification sections 3.1.3.1-3.1.3.4 (ionic, covalent, dative and metallic bonding; formulae; changes of state; the four crystal structure types). Second covers 3.1.3.5-3.1.3.7 (electron-pair repulsion and shapes, electronegativity and bond polarity, the three intermolecular forces). Different sections of the specification, no shared content.',
  },
  {
    files: ['ib-dp-global-politics-core-interdependence-practice.md', 'ib-dp-global-politics-core-legitimacy-practice.md', 'ib-dp-global-politics-core-power-practice.md', 'ib-dp-global-politics-core-sovereignty-practice.md', 'ib-dp-global-politics-core-stakeholders-and-systems-practice.md', 'ib-dp-global-politics-core-theoretical-perspectives-practice.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-dp-global-politics-core-interdependence-practice.md: Core topic -- Interdependence in global politics -- The "Interdependence in global politics" prescribed topic, as the guide lists its content (global governance, cooperation and the other prescribed content rows). | ib-dp-global-politics-core-legitimacy-practice.md: Core topic -- Legitimacy in global politics -- The "Legitimacy in global politics" prescribed topic: sources of state and government legitimacy, challenges to them, and sources of legitimacy of non-state actors. | ib-dp-global-politics-core-power-practice.md: Core topic -- Power in global politics -- The "Power in global politics" prescribed topic: definitions and ways of understanding power, classifications and types of power exactly as the guide lists them, with real contemporary examples. | ib-dp-global-politics-core-sovereignty-practice.md: Core topic -- Sovereignty in global politics -- The "Sovereignty in global politics" prescribed topic: nature of state sovereignty (traditional and modern notions, sources, internal and external dimensions) and challenges to state sovereignty. | ib-dp-global-politics-core-stakeholders-and-systems-practice.md: Core topic -- Framing global politics: stakeholders, actors and systems -- The "Framing global politics / Systems and interactions in global politics" prescribed topic: every stakeholder and actor type the guide lists, systems (structures and dynamics), legal frameworks, norms and institutions. | ib-dp-global-politics-core-theoretical-perspectives-practice.md: Core topic -- Theoretical perspectives in global politics -- The "Theoretical perspectives in global politics" prescribed topic: the perspectives the guide names, how each explains power, sovereignty, legitimacy and interdependence, and how to use them in Paper 2 essays.',
  },
  {
    files: ['ib-dp-global-politics-core-interdependence-revision-notes.md', 'ib-dp-global-politics-core-legitimacy-revision-notes.md', 'ib-dp-global-politics-core-power-revision-notes.md', 'ib-dp-global-politics-core-sovereignty-revision-notes.md', 'ib-dp-global-politics-core-stakeholders-and-systems-revision-notes.md', 'ib-dp-global-politics-core-theoretical-perspectives-revision-notes.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-dp-global-politics-core-interdependence-revision-notes.md: Core topic -- Interdependence in global politics -- The "Interdependence in global politics" prescribed topic, as the guide lists its content (global governance, cooperation and the other prescribed content rows). | ib-dp-global-politics-core-legitimacy-revision-notes.md: Core topic -- Legitimacy in global politics -- The "Legitimacy in global politics" prescribed topic: sources of state and government legitimacy, challenges to them, and sources of legitimacy of non-state actors. | ib-dp-global-politics-core-power-revision-notes.md: Core topic -- Power in global politics -- The "Power in global politics" prescribed topic: definitions and ways of understanding power, classifications and types of power exactly as the guide lists them, with real contemporary examples. | ib-dp-global-politics-core-sovereignty-revision-notes.md: Core topic -- Sovereignty in global politics -- The "Sovereignty in global politics" prescribed topic: nature of state sovereignty (traditional and modern notions, sources, internal and external dimensions) and challenges to state sovereignty. | ib-dp-global-politics-core-stakeholders-and-systems-revision-notes.md: Core topic -- Framing global politics: stakeholders, actors and systems -- The "Framing global politics / Systems and interactions in global politics" prescribed topic: every stakeholder and actor type the guide lists, systems (structures and dynamics), legal frameworks, norms and institutions. | ib-dp-global-politics-core-theoretical-perspectives-revision-notes.md: Core topic -- Theoretical perspectives in global politics -- The "Theoretical perspectives in global politics" prescribed topic: the perspectives the guide names, how each explains power, sovereignty, legitimacy and interdependence, and how to use them in Paper 2 essays.',
  },
  {
    files: ['ib-dp-global-politics-core-interdependence.md', 'ib-dp-global-politics-core-legitimacy.md', 'ib-dp-global-politics-core-power.md', 'ib-dp-global-politics-core-sovereignty.md', 'ib-dp-global-politics-core-stakeholders-and-systems.md', 'ib-dp-global-politics-core-theoretical-perspectives.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-dp-global-politics-core-interdependence.md: Core topic -- Interdependence in global politics -- The "Interdependence in global politics" prescribed topic, as the guide lists its content (global governance, cooperation and the other prescribed content rows). | ib-dp-global-politics-core-legitimacy.md: Core topic -- Legitimacy in global politics -- The "Legitimacy in global politics" prescribed topic: sources of state and government legitimacy, challenges to them, and sources of legitimacy of non-state actors. | ib-dp-global-politics-core-power.md: Core topic -- Power in global politics -- The "Power in global politics" prescribed topic: definitions and ways of understanding power, classifications and types of power exactly as the guide lists them, with real contemporary examples. | ib-dp-global-politics-core-sovereignty.md: Core topic -- Sovereignty in global politics -- The "Sovereignty in global politics" prescribed topic: nature of state sovereignty (traditional and modern notions, sources, internal and external dimensions) and challenges to state sovereignty. | ib-dp-global-politics-core-stakeholders-and-systems.md: Core topic -- Framing global politics: stakeholders, actors and systems -- The "Framing global politics / Systems and interactions in global politics" prescribed topic: every stakeholder and actor type the guide lists, systems (structures and dynamics), legal frameworks, norms and institutions. | ib-dp-global-politics-core-theoretical-perspectives.md: Core topic -- Theoretical perspectives in global politics -- The "Theoretical perspectives in global politics" prescribed topic: the perspectives the guide names, how each explains power, sovereignty, legitimacy and interdependence, and how to use them in Paper 2 essays.',
  },
  {
    files: ['ib-myp-design-criteria-in-practice-practice.md', 'ib-myp-design-design-cycle-practice.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-design-criteria-in-practice-practice.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions) | ib-myp-design-design-cycle-practice.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions)',
  },
  {
    files: ['ib-myp-design-criteria-in-practice-revision-notes.md', 'ib-myp-design-design-cycle-revision-notes.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-design-criteria-in-practice-revision-notes.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions) | ib-myp-design-design-cycle-revision-notes.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions)',
  },
  {
    files: ['ib-myp-design-criteria-in-practice.md', 'ib-myp-design-design-cycle.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-design-criteria-in-practice.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions) | ib-myp-design-design-cycle.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions)',
  },
  {
    files: ['ib-myp-individuals-and-societies-demographics-and-human-movements-practice.md', 'ib-myp-individuals-and-societies-economic-agents-measurements-trends-practice.md', 'ib-myp-individuals-and-societies-industrialization-and-technology-practice.md', 'ib-myp-individuals-and-societies-rights-and-social-protest-practice.md', 'ib-myp-individuals-and-societies-settlement-and-urban-morphology-practice.md', 'ib-myp-individuals-and-societies-superpowers-empires-alliances-practice.md', 'ib-myp-individuals-and-societies-trade-aid-and-exchange-practice.md', 'ib-myp-individuals-and-societies-warfare-and-peacekeeping-practice.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-individuals-and-societies-demographics-and-human-movements-practice.md: Demographics and human movements -- Population structure, pyramids, demographic transition, push/pull factors, types of migration and their impacts; brief-listed eAssessment topic; include source/data questions. | ib-myp-individuals-and-societies-economic-agents-measurements-trends-practice.md: Economic agents, measurements and trends -- Households, firms and government; GDP, GDP per capita, inflation, unemployment, HDI; reading trends in graphs and tables; brief-listed topic. All numbers fictional and checked in Python. | ib-myp-individuals-and-societies-industrialization-and-technology-practice.md: Industrialization and technological developments -- The Industrial Revolution (accurate dates/inventions), later industrialisation, impacts on work, cities and environment, and technology today; brief-listed topic; criterion B investigation planning. | ib-myp-individuals-and-societies-rights-and-social-protest-practice.md: Rights and social protest -- Human and civil rights, the Universal Declaration of Human Rights (1948), protest movements (e.g. US civil rights, anti-apartheid, suffrage) with accurate facts, methods of protest and their effectiveness; brief-listed topic; source-based questions. | ib-myp-individuals-and-societies-settlement-and-urban-morphology-practice.md: Settlement and urban morphology -- Site and situation, settlement hierarchy, urban land-use models, urbanisation, informal settlements, sustainable cities; brief-listed topic. | ib-myp-individuals-and-societies-superpowers-empires-alliances-practice.md: Superpowers, empires and supra-national alliances -- What makes a superpower or empire, rise and decline, and alliances such as the UN, NATO, EU, ASEAN, AU -- facts accurate; brief-listed topic; source-evaluation questions (criterion D). | ib-myp-individuals-and-societies-trade-aid-and-exchange-practice.md: Trade, aid and exchange -- Imports/exports, comparative advantage (simple), trade blocs, fair trade, types of aid and debates about aid; brief-listed topic; data questions with fictional data. | ib-myp-individuals-and-societies-warfare-and-peacekeeping-practice.md: Warfare and peacekeeping -- Causes and consequences of conflict, types of war, peacekeeping and peacebuilding, the UN\'s role; historical case studies with accurate dates; brief-listed topic.',
  },
  {
    files: ['ib-myp-individuals-and-societies-demographics-and-human-movements-revision-notes.md', 'ib-myp-individuals-and-societies-economic-agents-measurements-trends-revision-notes.md', 'ib-myp-individuals-and-societies-industrialization-and-technology-revision-notes.md', 'ib-myp-individuals-and-societies-rights-and-social-protest-revision-notes.md', 'ib-myp-individuals-and-societies-settlement-and-urban-morphology-revision-notes.md', 'ib-myp-individuals-and-societies-superpowers-empires-alliances-revision-notes.md', 'ib-myp-individuals-and-societies-trade-aid-and-exchange-revision-notes.md', 'ib-myp-individuals-and-societies-warfare-and-peacekeeping-revision-notes.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-individuals-and-societies-demographics-and-human-movements-revision-notes.md: Demographics and human movements -- Population structure, pyramids, demographic transition, push/pull factors, types of migration and their impacts; brief-listed eAssessment topic; include source/data questions. | ib-myp-individuals-and-societies-economic-agents-measurements-trends-revision-notes.md: Economic agents, measurements and trends -- Households, firms and government; GDP, GDP per capita, inflation, unemployment, HDI; reading trends in graphs and tables; brief-listed topic. All numbers fictional and checked in Python. | ib-myp-individuals-and-societies-industrialization-and-technology-revision-notes.md: Industrialization and technological developments -- The Industrial Revolution (accurate dates/inventions), later industrialisation, impacts on work, cities and environment, and technology today; brief-listed topic; criterion B investigation planning. | ib-myp-individuals-and-societies-rights-and-social-protest-revision-notes.md: Rights and social protest -- Human and civil rights, the Universal Declaration of Human Rights (1948), protest movements (e.g. US civil rights, anti-apartheid, suffrage) with accurate facts, methods of protest and their effectiveness; brief-listed topic; source-based questions. | ib-myp-individuals-and-societies-settlement-and-urban-morphology-revision-notes.md: Settlement and urban morphology -- Site and situation, settlement hierarchy, urban land-use models, urbanisation, informal settlements, sustainable cities; brief-listed topic. | ib-myp-individuals-and-societies-superpowers-empires-alliances-revision-notes.md: Superpowers, empires and supra-national alliances -- What makes a superpower or empire, rise and decline, and alliances such as the UN, NATO, EU, ASEAN, AU -- facts accurate; brief-listed topic; source-evaluation questions (criterion D). | ib-myp-individuals-and-societies-trade-aid-and-exchange-revision-notes.md: Trade, aid and exchange -- Imports/exports, comparative advantage (simple), trade blocs, fair trade, types of aid and debates about aid; brief-listed topic; data questions with fictional data. | ib-myp-individuals-and-societies-warfare-and-peacekeeping-revision-notes.md: Warfare and peacekeeping -- Causes and consequences of conflict, types of war, peacekeeping and peacebuilding, the UN\'s role; historical case studies with accurate dates; brief-listed topic.',
  },
  {
    files: ['ib-myp-individuals-and-societies-demographics-and-human-movements.md', 'ib-myp-individuals-and-societies-economic-agents-measurements-trends.md', 'ib-myp-individuals-and-societies-industrialization-and-technology.md', 'ib-myp-individuals-and-societies-rights-and-social-protest.md', 'ib-myp-individuals-and-societies-settlement-and-urban-morphology.md', 'ib-myp-individuals-and-societies-superpowers-empires-alliances.md', 'ib-myp-individuals-and-societies-trade-aid-and-exchange.md', 'ib-myp-individuals-and-societies-warfare-and-peacekeeping.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-individuals-and-societies-demographics-and-human-movements.md: Demographics and human movements -- Population structure, pyramids, demographic transition, push/pull factors, types of migration and their impacts; brief-listed eAssessment topic; include source/data questions. | ib-myp-individuals-and-societies-economic-agents-measurements-trends.md: Economic agents, measurements and trends -- Households, firms and government; GDP, GDP per capita, inflation, unemployment, HDI; reading trends in graphs and tables; brief-listed topic. All numbers fictional and checked in Python. | ib-myp-individuals-and-societies-industrialization-and-technology.md: Industrialization and technological developments -- The Industrial Revolution (accurate dates/inventions), later industrialisation, impacts on work, cities and environment, and technology today; brief-listed topic; criterion B investigation planning. | ib-myp-individuals-and-societies-rights-and-social-protest.md: Rights and social protest -- Human and civil rights, the Universal Declaration of Human Rights (1948), protest movements (e.g. US civil rights, anti-apartheid, suffrage) with accurate facts, methods of protest and their effectiveness; brief-listed topic; source-based questions. | ib-myp-individuals-and-societies-settlement-and-urban-morphology.md: Settlement and urban morphology -- Site and situation, settlement hierarchy, urban land-use models, urbanisation, informal settlements, sustainable cities; brief-listed topic. | ib-myp-individuals-and-societies-superpowers-empires-alliances.md: Superpowers, empires and supra-national alliances -- What makes a superpower or empire, rise and decline, and alliances such as the UN, NATO, EU, ASEAN, AU -- facts accurate; brief-listed topic; source-evaluation questions (criterion D). | ib-myp-individuals-and-societies-trade-aid-and-exchange.md: Trade, aid and exchange -- Imports/exports, comparative advantage (simple), trade blocs, fair trade, types of aid and debates about aid; brief-listed topic; data questions with fictional data. | ib-myp-individuals-and-societies-warfare-and-peacekeeping.md: Warfare and peacekeeping -- Causes and consequences of conflict, types of war, peacekeeping and peacebuilding, the UN\'s role; historical case studies with accurate dates; brief-listed topic.',
  },
  {
    files: ['ib-myp-language-acquisition-criteria-in-practice-practice.md', 'ib-myp-language-acquisition-criterion-a-listening-practice.md', 'ib-myp-language-acquisition-criterion-b-reading-practice.md', 'ib-myp-language-acquisition-criterion-c-speaking-practice.md', 'ib-myp-language-acquisition-criterion-d-writing-practice.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-language-acquisition-criteria-in-practice-practice.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions) | ib-myp-language-acquisition-criterion-a-listening-practice.md: Criterion A -- Listening to spoken multimodal texts -- Strategies for comprehending spoken multimodal texts (explicit and implicit information, conventions, connecting to the audience/purpose), with original transcripts, across proficiency phases. | ib-myp-language-acquisition-criterion-b-reading-practice.md: Criterion B -- Reading written multimodal texts -- Reading written and visual multimodal texts: main ideas, supporting details, text-type conventions, visual elements, author purpose and perspective -- with original texts. | ib-myp-language-acquisition-criterion-c-speaking-practice.md: Criterion C -- Speaking and interacting -- The individual speaking task as the brief describes it (response to multimodal text), interaction strategies, fluency, accuracy, pronunciation, and how to prepare. | ib-myp-language-acquisition-criterion-d-writing-practice.md: Criterion D -- Writing in response to multimodal texts -- Planning and writing for purpose and audience, organisation and cohesive devices, register, accuracy and range; model responses in English with target-language guidance.',
  },
  {
    files: ['ib-myp-language-acquisition-criteria-in-practice-revision-notes.md', 'ib-myp-language-acquisition-criterion-a-listening-revision-notes.md', 'ib-myp-language-acquisition-criterion-b-reading-revision-notes.md', 'ib-myp-language-acquisition-criterion-c-speaking-revision-notes.md', 'ib-myp-language-acquisition-criterion-d-writing-revision-notes.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-language-acquisition-criteria-in-practice-revision-notes.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions) | ib-myp-language-acquisition-criterion-a-listening-revision-notes.md: Criterion A -- Listening to spoken multimodal texts -- Strategies for comprehending spoken multimodal texts (explicit and implicit information, conventions, connecting to the audience/purpose), with original transcripts, across proficiency phases. | ib-myp-language-acquisition-criterion-b-reading-revision-notes.md: Criterion B -- Reading written multimodal texts -- Reading written and visual multimodal texts: main ideas, supporting details, text-type conventions, visual elements, author purpose and perspective -- with original texts. | ib-myp-language-acquisition-criterion-c-speaking-revision-notes.md: Criterion C -- Speaking and interacting -- The individual speaking task as the brief describes it (response to multimodal text), interaction strategies, fluency, accuracy, pronunciation, and how to prepare. | ib-myp-language-acquisition-criterion-d-writing-revision-notes.md: Criterion D -- Writing in response to multimodal texts -- Planning and writing for purpose and audience, organisation and cohesive devices, register, accuracy and range; model responses in English with target-language guidance.',
  },
  {
    files: ['ib-myp-language-acquisition-criteria-in-practice.md', 'ib-myp-language-acquisition-criterion-a-listening.md', 'ib-myp-language-acquisition-criterion-b-reading.md', 'ib-myp-language-acquisition-criterion-c-speaking.md', 'ib-myp-language-acquisition-criterion-d-writing.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-language-acquisition-criteria-in-practice.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions) | ib-myp-language-acquisition-criterion-a-listening.md: Criterion A -- Listening to spoken multimodal texts -- Strategies for comprehending spoken multimodal texts (explicit and implicit information, conventions, connecting to the audience/purpose), with original transcripts, across proficiency phases. | ib-myp-language-acquisition-criterion-b-reading.md: Criterion B -- Reading written multimodal texts -- Reading written and visual multimodal texts: main ideas, supporting details, text-type conventions, visual elements, author purpose and perspective -- with original texts. | ib-myp-language-acquisition-criterion-c-speaking.md: Criterion C -- Speaking and interacting -- The individual speaking task as the brief describes it (response to multimodal text), interaction strategies, fluency, accuracy, pronunciation, and how to prepare. | ib-myp-language-acquisition-criterion-d-writing.md: Criterion D -- Writing in response to multimodal texts -- Planning and writing for purpose and audience, organisation and cohesive devices, register, accuracy and range; model responses in English with target-language guidance.',
  },
  {
    files: ['ib-myp-language-acquisition-multimodal-texts-and-visuals-practice.md', 'ib-myp-language-acquisition-proficiency-phases-practice.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-language-acquisition-multimodal-texts-and-visuals-practice.md: Multimodal texts and visual elements -- Analysing how images, layout, audio and text work together in multimodal texts; describing and interpreting visuals; preparing for the eAssessment tasks the brief lists. | ib-myp-language-acquisition-proficiency-phases-practice.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions)',
  },
  {
    files: ['ib-myp-language-acquisition-multimodal-texts-and-visuals-revision-notes.md', 'ib-myp-language-acquisition-proficiency-phases-revision-notes.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-language-acquisition-multimodal-texts-and-visuals-revision-notes.md: Multimodal texts and visual elements -- Analysing how images, layout, audio and text work together in multimodal texts; describing and interpreting visuals; preparing for the eAssessment tasks the brief lists. | ib-myp-language-acquisition-proficiency-phases-revision-notes.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions)',
  },
  {
    files: ['ib-myp-language-acquisition-multimodal-texts-and-visuals.md', 'ib-myp-language-acquisition-proficiency-phases.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-language-acquisition-multimodal-texts-and-visuals.md: Multimodal texts and visual elements -- Analysing how images, layout, audio and text work together in multimodal texts; describing and interpreting visuals; preparing for the eAssessment tasks the brief lists. | ib-myp-language-acquisition-proficiency-phases.md: existing page (older unit; the new units were written after reading it and avoid its examples and questions)',
  },
  {
    files: ['ib-myp-sciences-atomic-structure-and-bonding-practice.md', 'ib-myp-sciences-cells-and-organisms-practice.md', 'ib-myp-sciences-cycles-practice.md', 'ib-myp-sciences-electromagnetism-and-waves-practice.md', 'ib-myp-sciences-evolution-and-interactions-practice.md', 'ib-myp-sciences-forces-practice.md', 'ib-myp-sciences-metabolism-practice.md', 'ib-myp-sciences-states-and-properties-of-matter-practice.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-sciences-atomic-structure-and-bonding-practice.md: Atomic structure and bonding -- Atoms, subatomic particles, electron arrangement, ions, ionic/covalent/metallic bonding and how bonding explains properties; a brief-listed eAssessment topic, taught with criterion A–D style tasks. | ib-myp-sciences-cells-and-organisms-practice.md: Cells and organisms -- Cell structure (plant/animal/bacterial), organelles, microscopy and magnification, specialised cells, levels of organisation, classification of organisms; brief-listed topics "cells" and "organisms". | ib-myp-sciences-cycles-practice.md: Cycles in science -- The carbon cycle, water cycle, nitrogen cycle and rock cycle (as science content), human impacts on them; brief-listed topic "cycles"; include a criterion D (impacts of science) extended response. | ib-myp-sciences-electromagnetism-and-waves-practice.md: Electromagnetism and waves -- Magnets and fields, electromagnets, motor effect and induction (qualitative), wave properties, v = fλ, reflection/refraction, the electromagnetic spectrum and its uses; brief-listed topics "electromagnetism" and "waves". | ib-myp-sciences-evolution-and-interactions-practice.md: Evolution and interactions between organisms -- Variation, natural selection, adaptation, evidence for evolution, food chains/webs, competition, predation, symbiosis, population sampling; brief-listed topics "evolution" and "interactions between organisms". | ib-myp-sciences-forces-practice.md: Forces -- Types of force, resultant force, Newton\'s laws, speed/velocity/acceleration, graphs of motion, pressure, moments; brief-listed topic "forces"; every calculation checked with Python. | ib-myp-sciences-metabolism-practice.md: Metabolism -- Enzymes, respiration (aerobic/anaerobic), photosynthesis and factors affecting rate, digestion basics; brief-listed topic "metabolism". Include an investigation-design question (criterion B) and data processing (criterion C). | ib-myp-sciences-states-and-properties-of-matter-practice.md: States and properties of matter -- Particle model, changes of state, heating/cooling curves, density, gas behaviour (qualitative), mixtures and separation; a brief-listed eAssessment topic.',
  },
  {
    files: ['ib-myp-sciences-atomic-structure-and-bonding-revision-notes.md', 'ib-myp-sciences-cells-and-organisms-revision-notes.md', 'ib-myp-sciences-cycles-revision-notes.md', 'ib-myp-sciences-electromagnetism-and-waves-revision-notes.md', 'ib-myp-sciences-evolution-and-interactions-revision-notes.md', 'ib-myp-sciences-forces-revision-notes.md', 'ib-myp-sciences-metabolism-revision-notes.md', 'ib-myp-sciences-states-and-properties-of-matter-revision-notes.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-sciences-atomic-structure-and-bonding-revision-notes.md: Atomic structure and bonding -- Atoms, subatomic particles, electron arrangement, ions, ionic/covalent/metallic bonding and how bonding explains properties; a brief-listed eAssessment topic, taught with criterion A–D style tasks. | ib-myp-sciences-cells-and-organisms-revision-notes.md: Cells and organisms -- Cell structure (plant/animal/bacterial), organelles, microscopy and magnification, specialised cells, levels of organisation, classification of organisms; brief-listed topics "cells" and "organisms". | ib-myp-sciences-cycles-revision-notes.md: Cycles in science -- The carbon cycle, water cycle, nitrogen cycle and rock cycle (as science content), human impacts on them; brief-listed topic "cycles"; include a criterion D (impacts of science) extended response. | ib-myp-sciences-electromagnetism-and-waves-revision-notes.md: Electromagnetism and waves -- Magnets and fields, electromagnets, motor effect and induction (qualitative), wave properties, v = fλ, reflection/refraction, the electromagnetic spectrum and its uses; brief-listed topics "electromagnetism" and "waves". | ib-myp-sciences-evolution-and-interactions-revision-notes.md: Evolution and interactions between organisms -- Variation, natural selection, adaptation, evidence for evolution, food chains/webs, competition, predation, symbiosis, population sampling; brief-listed topics "evolution" and "interactions between organisms". | ib-myp-sciences-forces-revision-notes.md: Forces -- Types of force, resultant force, Newton\'s laws, speed/velocity/acceleration, graphs of motion, pressure, moments; brief-listed topic "forces"; every calculation checked with Python. | ib-myp-sciences-metabolism-revision-notes.md: Metabolism -- Enzymes, respiration (aerobic/anaerobic), photosynthesis and factors affecting rate, digestion basics; brief-listed topic "metabolism". Include an investigation-design question (criterion B) and data processing (criterion C). | ib-myp-sciences-states-and-properties-of-matter-revision-notes.md: States and properties of matter -- Particle model, changes of state, heating/cooling curves, density, gas behaviour (qualitative), mixtures and separation; a brief-listed eAssessment topic.',
  },
  {
    files: ['ib-myp-sciences-atomic-structure-and-bonding.md', 'ib-myp-sciences-cells-and-organisms.md', 'ib-myp-sciences-cycles.md', 'ib-myp-sciences-electromagnetism-and-waves.md', 'ib-myp-sciences-evolution-and-interactions.md', 'ib-myp-sciences-forces.md', 'ib-myp-sciences-metabolism.md', 'ib-myp-sciences-states-and-properties-of-matter.md'],
    evidence: 'IB course with no official subtopics, so every unit maps to the same coarse topic tag. Each file is a different unit with different content, examples and questions (content-breadth sprint, 28 Sep 2026, each unit independently verified): ib-myp-sciences-atomic-structure-and-bonding.md: Atomic structure and bonding -- Atoms, subatomic particles, electron arrangement, ions, ionic/covalent/metallic bonding and how bonding explains properties; a brief-listed eAssessment topic, taught with criterion A–D style tasks. | ib-myp-sciences-cells-and-organisms.md: Cells and organisms -- Cell structure (plant/animal/bacterial), organelles, microscopy and magnification, specialised cells, levels of organisation, classification of organisms; brief-listed topics "cells" and "organisms". | ib-myp-sciences-cycles.md: Cycles in science -- The carbon cycle, water cycle, nitrogen cycle and rock cycle (as science content), human impacts on them; brief-listed topic "cycles"; include a criterion D (impacts of science) extended response. | ib-myp-sciences-electromagnetism-and-waves.md: Electromagnetism and waves -- Magnets and fields, electromagnets, motor effect and induction (qualitative), wave properties, v = fλ, reflection/refraction, the electromagnetic spectrum and its uses; brief-listed topics "electromagnetism" and "waves". | ib-myp-sciences-evolution-and-interactions.md: Evolution and interactions between organisms -- Variation, natural selection, adaptation, evidence for evolution, food chains/webs, competition, predation, symbiosis, population sampling; brief-listed topics "evolution" and "interactions between organisms". | ib-myp-sciences-forces.md: Forces -- Types of force, resultant force, Newton\'s laws, speed/velocity/acceleration, graphs of motion, pressure, moments; brief-listed topic "forces"; every calculation checked with Python. | ib-myp-sciences-metabolism.md: Metabolism -- Enzymes, respiration (aerobic/anaerobic), photosynthesis and factors affecting rate, digestion basics; brief-listed topic "metabolism". Include an investigation-design question (criterion B) and data processing (criterion C). | ib-myp-sciences-states-and-properties-of-matter.md: States and properties of matter -- Particle model, changes of state, heating/cooling curves, density, gas behaviour (qualitative), mixtures and separation; a brief-listed eAssessment topic.',
  },
  {
    files: ['o-level-cambridge-english-language-reading-and-writing.md', 'o-level-english-language-paper-1-reading.md'],
    evidence: "First is the whole-syllabus overview: a skills/technique guide covering both Reading and Writing at once (own-words technique, 'effect not label' language analysis with a worked example, summary method, directed-writing/composition technique, an accuracy checklist). Second is a Paper-1-only exam-mechanics deep dive, mirroring the already-reviewed Paper 2 Writing deep dive's pattern: official Question 1/2/3a/3b structure, exact marks per question (16/9/10/10/5), which R1-R5 assessment objective each question is marked against (not mentioned anywhere in the overview), and Paper 1 timing/command words. Written deliberately to avoid restating the overview's own-words/effect-not-label technique points (edited out during this review, 2026-09-02, once the initial draft was found to overlap) -- confirmed no shared sentence-level content after that edit.",
  },
  {
    files: ['o-level-english-language-paper-1-reading-revision-notes.md', 'o-level-english-language-revision-notes.md'],
    evidence: "Same distinction as the already-reviewed study-guide pair above, one level down: the first (o-level-english-language-revision-notes.md) is a whole-syllabus condensed overview covering BOTH Paper 1 and Paper 2 at a light level (a single format comparison table, one worked summary example, technique bullets spanning both papers, an 8-question self-test mixing both papers). The second (new, 2026-09-06) is a Paper-1-only deep dive: exact R1-R5 assessment-objective mapping per sub-question (which the overview never states), Paper-1-specific command words, a Paper-1-only timing breakdown, a distinct relevance-checking worked example for the summary task, and a note on why the two source texts are printed in a separate insert (not covered by the overview at all). No shared sentence-level content -- confirmed by direct comparison before writing.",
  },
  {
    files: ['o-level-english-language-paper-1-reading-practice.md', 'o-level-english-language-practice.md'],
    evidence: "Same overview-vs-paper-specific-deep-dive distinction as the two pairs above, applied to practice-questions: o-level-english-language-practice.md is a whole-syllabus original-question set spanning both Paper 1 and Paper 2 general skills (directed writing register/purpose/audience/form, persuasive devices, descriptive composition structure, a general summary method, a general Use-of-Language technique point) -- none of its questions name an assessment-objective code, a paper-specific mark allocation, or Paper 1's specific format. The new file (2026-09-06) tests Paper-1-only exam mechanics exclusively: exact R4/R1/R5 codes tied to specific questions, the 150-word summary limit's consequences, Paper 1's own timing strategy, and why the summary task sits on the Reading paper despite testing Writing objectives -- content the overview set never touches. Zero shared questions or answers, confirmed by direct comparison before writing.",
  },
  {
    files: ['a-english-language-reading-practice.md', 'a-level-english-language-practice.md'],
    evidence: 'Zero overlapping questions. First is discourse/text analysis (levels of language, register, connotation, cohesion devices); second is language change and child language acquisition (broadening/narrowing/amelioration/pejoration, acquisition stages, Skinner/Chomsky/Bruner/Piaget). Both tagged only to Paper 1 (9093) with no finer official subtopic split.',
  },
  {
    files: ['a-english-language-reading-revision-notes.md', 'a-level-english-language-revision-notes.md'],
    evidence: 'First teaches the analytical toolkit (language frameworks, register, spoken-language features, directed-writing technique); second teaches Paper 1 exam mechanics (timing, mark allocation per question, assessment objectives, task word-count limits). Complementary, not overlapping -- confirmed no shared sentence-level content.',
  },
  {
    files: ['a-law-english-legal-system-practice.md', 'law-english-legal-system-practice.md'],
    evidence: "First's questions are courts/judiciary/juries/legal-personnel/judicial-independence; second's are sources of law/civil procedure tracks/ADR/sentencing/legal funding. No shared question or answer.",
  },
  {
    files: ['elastic-deformation-moments-and-centre-of-gravity.md', 'forces-and-motion.md'],
    evidence: 'Distinct O Level Physics 5054 topics: spring constant/load-extension/principle of moments/centre of gravity vs Newton\'s first and third laws/F=ma/friction/terminal velocity/circular motion. Both tagged only to the single "1.5 Forces" subtopic, which the syllabus does not split further.',
  },
  {
    files: ['energy-resources-and-efficiency.md', 'energy-work-and-power.md'],
    evidence: 'Distinct O Level Physics 5054 topics: renewable/non-renewable energy resources, electricity generation, Sankey diagrams vs energy stores and transfers, KE/GPE, work done, power, conservation of energy.',
  },
  {
    files: ['energy-resources-practice.md', 'energy-work-and-power-practice.md'],
    evidence: 'Practice-question siblings of the pair above; same topic split, confirmed distinct by description and no shared questions.',
  },
  {
    files: ['energy-resources-revision-notes.md', 'energy-work-and-power-revision-notes.md'],
    evidence: 'Revision-notes siblings of the pair above; same topic split, confirmed distinct by description.',
  },
  {
    files: ['forces-and-motion-practice.md', 'moments-and-stability-practice.md'],
    evidence: "Newton's laws/resultant forces/friction/free-body diagrams vs moments/principle of moments/centre of mass/levers/stability -- the pairing explicitly documented in this file's own history (D-010) and re-confirmed by description on 2026-08-26.",
  },
  {
    files: ['forces-and-motion-revision-notes.md', 'moments-and-stability-revision-notes.md'],
    evidence: 'Revision-notes siblings of the pair above; same confirmed topic split.',
  },
  {
    files: ['aqa-gcse-english-literature-paper-2.md', 'aqa-gcse-english-literature-unseen-poetry.md'],
    evidence: "First (paper-2.md) is a whole-paper overview across all three sections of Paper 2 (Section A modern prose/drama, Section B poetry anthology, Section C unseen poetry), giving unseen poetry only a few summary sentences within its 'How to approach it' and 'Common mistakes' sections and one worked example that is actually about the Section B comparison question, not Section C. Second (new, 2026-09-09) is a Section-C-only deep dive: a dedicated fast first-read routine for an unseen poem (five-step annotation method), a direct-comparison strategy for the 8-mark task (select one shared technique across both poems), and a section on why breadth of practice beats memorisation for this specific task type -- none of which appears in the overview. No shared sentence-level content, confirmed by direct comparison before writing.",
  },
  {
    files: ['aqa-gcse-psychology-cognition-and-behaviour.md', 'aqa-gcse-psychology-research-methods.md'],
    evidence: "First (cognition-and-behaviour.md) is a whole-paper overview covering Memory, Perception, Development and Research Methods together, giving research methods a single condensed paragraph (naming experiment types, observations, self-report, correlation and ethics in passing) plus one worked example on interpreting a correlation coefficient. Second (new, 2026-09-09) is a Research-Methods-only deep dive: sampling methods compared with a strength/weakness each, the three experimental designs compared side by side, a dedicated worked example on identifying IV/DV/extraneous variables from a study description, a section distinguishing correlational from experimental research, and data-handling content (descriptive statistics, normal distributions) the overview never mentions. No shared sentence-level content, confirmed by direct comparison before writing.",
  },
  {
    files: ['aqa-gcse-sociology-families-and-education.md', 'aqa-gcse-sociology-research-methods.md'],
    evidence: "First (families-and-education.md) is a whole-paper overview across the Sociological Approach, Social Structures, Families and Education, listing 'Sociological Research Methods' as one bullet in its syllabus-coverage list with no dedicated section, worked example or further development anywhere in the file. Second (new, 2026-09-09) is a Research-Methods-only deep dive: qualitative vs quantitative data compared, practical vs ethical issues addressed together with a worked example, a dedicated worked example on choosing a method for a given research question, and a section on sampling methods and pilot studies -- none of which the overview develops beyond its single bullet point. No shared sentence-level content, confirmed by direct comparison before writing.",
  },
  {
    files: ['igcse-sociology-methods-inequality-practice.md', 'sociology-research-methods-practice.md'],
    evidence: 'First blends core methods terms/sampling/structured interviews with substantive inequality content (gender pay gap, ethnicity and life chances). Second is a pure methods deep-dive (participant observation, official statistics, reliability vs validity, ethics, sampling a hard-to-reach population). No shared question or answer despite both touching "sampling" in passing.',
  },
  {
    files: ['cambridge-igcse-islamiyat-rightly-guided-caliphs.md', 'igcse-cambridge-islamiyat-paper-2.md'],
    evidence: "Second (paper-2.md) is a whole-Paper-2 overview covering all four Paper-2 subtopics (2.1 Hadith passages, 2.2 History of the Hadiths, 2.3 the Rightly Guided Caliphs, 2.4 Articles of Faith/Pillars of Islam) with a compact bullet-point summary for each -- 2.3 gets roughly three short bullets and one paragraph on cross-topic connections. First (new, 2026-09-09) is a 2.3-only deep dive: a named, dated summary of each of the four Caliphs' rule, a comparative worked example on structuring an 'explain the significance' answer, and a dedicated section on achievements/difficulties as a revision structure -- none of which the overview develops beyond its opening bullets. No shared sentence-level content, confirmed by direct comparison before writing.",
  },
  {
    files: ['cambridge-o-level-islamiyat-major-themes-of-the-quran.md', 'o-level-islamiyat-paper-1.md'],
    evidence: "Second (paper-1.md) is a whole-Paper-1 overview covering all four Paper-1 subtopics; it develops 1.1 (Major Themes of the Qur'an) in a single one-line summary bullet before its 'Key content' section shifts focus to 1.2's compilation/standardisation history and a connected timeline spanning 1.3 and 1.4 -- 1.1 itself is never developed beyond that opening bullet. First (new, 2026-09-09) is a 1.1-only deep dive: the three official theme categories (God in Himself, God's relationship with the created world, God's Messengers) each explained with real content, a dedicated section on tawhid as the foundational theme, a section on how guidance and accountability are paired in Qur'anic passages, and a worked example for categorising an unseen passage -- none of which the overview develops. No shared sentence-level content, confirmed by direct comparison before writing.",
  },
  {
    files: ['cambridge-o-level-sociology-social-stratification-and-inequality.md', 'o-level-sociology-research-methods-identity-and-inequality.md'],
    evidence: "Second (research-methods-identity-and-inequality.md) is a whole-Paper-1 overview; its treatment of 1.3 (Social Stratification and Inequality) consists of one syllabus-coverage bullet plus a connective paragraph explaining how 1.2 (Identity) and 1.3 relate to each other -- 1.3's own content (meritocracy, Marxist explanations of class inequality, the specific impact of class/gender/ethnicity on life chances) is not independently developed. First (new, 2026-09-09) is a 1.3-only deep dive: life chances explained as the concept tying the subtopic together, a dedicated section on meritocracy and its sociological critique, a section on gender and ethnicity as forms of stratification, and a full worked example applying a Marxist explanation to a scenario -- none of which the overview develops beyond its connective paragraph. No shared sentence-level content, confirmed by direct comparison before writing.",
  },
  {
    files: ['ib-dp-language-a-language-literature-analysing-literary-forms.md', 'ib-dp-language-a-language-literature-paper-1-guided-textual-analysis.md'],
    evidence: "Same two topic tags (Readers, writers and texts + Time and space) because the course has no subtopics. The analysing-literary-forms unit teaches close reading of LITERARY forms -- prose narration, poetry form/metre/imagery, dramatic conventions -- with pre-1929 and original literary examples. The paper-1 unit is about NON-literary texts only (adverts, opinion pieces, web pages) and teaches the guided-analysis exam method: reading the passage, planning, structuring, timing. Different passages, different questions; no shared sentence-level content (checked by heading and passage comparison, content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-analysing-literary-forms-revision-notes.md', 'ib-dp-language-a-language-literature-paper-1-guided-textual-analysis-revision-notes.md'],
    evidence: "Revision notes siblings of the study-guide pair above; same distinction applies. Same two topic tags (Readers, writers and texts + Time and space) because the course has no subtopics. The analysing-literary-forms unit teaches close reading of LITERARY forms -- prose narration, poetry form/metre/imagery, dramatic conventions -- with pre-1929 and original literary examples. The paper-1 unit is about NON-literary texts only (adverts, opinion pieces, web pages) and teaches the guided-analysis exam method: reading the passage, planning, structuring, timing. Different passages, different questions; no shared sentence-level content (checked by heading and passage comparison, content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-analysing-literary-forms-practice.md', 'ib-dp-language-a-language-literature-paper-1-guided-textual-analysis-practice.md'],
    evidence: "Practice sets siblings of the study-guide pair above; same distinction applies. Same two topic tags (Readers, writers and texts + Time and space) because the course has no subtopics. The analysing-literary-forms unit teaches close reading of LITERARY forms -- prose narration, poetry form/metre/imagery, dramatic conventions -- with pre-1929 and original literary examples. The paper-1 unit is about NON-literary texts only (adverts, opinion pieces, web pages) and teaches the guided-analysis exam method: reading the passage, planning, structuring, timing. Different passages, different questions; no shared sentence-level content (checked by heading and passage comparison, content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-language-context-culture-and-power.md', 'ib-dp-language-a-language-literature-time-and-space.md'],
    evidence: "Both tagged Time and space. The older time-and-space pages are a short overview of the area of exploration with one non-literary and one literary worked example. The language-context-culture-and-power unit is a deep dive on representation, bias and stance, power (who speaks / who is silenced), gender and identity, and changing reception, built on Douglass (1845), Wollstonecraft (1792) and new original passages that the overview never uses. No shared questions or passages (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-language-context-culture-and-power-revision-notes.md', 'ib-dp-language-a-language-literature-time-and-space-revision-notes.md'],
    evidence: "Revision notes siblings of the study-guide pair above; same distinction applies. Both tagged Time and space. The older time-and-space pages are a short overview of the area of exploration with one non-literary and one literary worked example. The language-context-culture-and-power unit is a deep dive on representation, bias and stance, power (who speaks / who is silenced), gender and identity, and changing reception, built on Douglass (1845), Wollstonecraft (1792) and new original passages that the overview never uses. No shared questions or passages (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-language-context-culture-and-power-practice.md', 'ib-dp-language-a-language-literature-time-and-space-practice.md'],
    evidence: "Practice sets siblings of the study-guide pair above; same distinction applies. Both tagged Time and space. The older time-and-space pages are a short overview of the area of exploration with one non-literary and one literary worked example. The language-context-culture-and-power unit is a deep dive on representation, bias and stance, power (who speaks / who is silenced), gender and identity, and changing reception, built on Douglass (1845), Wollstonecraft (1792) and new original passages that the overview never uses. No shared questions or passages (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-non-literary-text-types-and-conventions.md', 'ib-dp-language-a-language-literature-readers-writers-texts.md'],
    evidence: "Both tagged Readers, writers and texts. The older readers-writers-texts pages cover the area's core question and a general technique-to-effect analysis method. The non-literary-text-types unit catalogues the conventions of eight non-literary text types and teaches image/layout reading (salience, anchorage, reading path, shot distance) with its own editorial, captioned photograph, blog, infographic and cartoon. No shared passages or questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-non-literary-text-types-and-conventions-revision-notes.md', 'ib-dp-language-a-language-literature-readers-writers-texts-revision-notes.md'],
    evidence: "Revision notes siblings of the study-guide pair above; same distinction applies. Both tagged Readers, writers and texts. The older readers-writers-texts pages cover the area's core question and a general technique-to-effect analysis method. The non-literary-text-types unit catalogues the conventions of eight non-literary text types and teaches image/layout reading (salience, anchorage, reading path, shot distance) with its own editorial, captioned photograph, blog, infographic and cartoon. No shared passages or questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-language-literature-non-literary-text-types-and-conventions-practice.md', 'ib-dp-language-a-language-literature-readers-writers-texts-practice.md'],
    evidence: "Practice sets siblings of the study-guide pair above; same distinction applies. Both tagged Readers, writers and texts. The older readers-writers-texts pages cover the area's core question and a general technique-to-effect analysis method. The non-literary-text-types unit catalogues the conventions of eight non-literary text types and teaches image/layout reading (salience, anchorage, reading path, shot distance) with its own editorial, captioned photograph, blog, infographic and cartoon. No shared passages or questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-individual-oral-global-issues.md', 'ib-dp-language-a-literature-literary-concepts-and-perspectives.md'],
    evidence: "Both tagged Readers, writers and texts + Intertextuality. The individual-oral unit covers the oral assessment only: choosing a global issue, pairing extracts from a work in translation and a work in the original language, structuring the talk. The literary-concepts unit teaches the course concepts the brief names and seven critical lenses, with three readings of Blake's 'London' and a method for evaluating interpretations; it does not cover the oral. Different texts and questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-individual-oral-global-issues-revision-notes.md', 'ib-dp-language-a-literature-literary-concepts-and-perspectives-revision-notes.md'],
    evidence: "Revision notes siblings of the study-guide pair above; same distinction applies. Both tagged Readers, writers and texts + Intertextuality. The individual-oral unit covers the oral assessment only: choosing a global issue, pairing extracts from a work in translation and a work in the original language, structuring the talk. The literary-concepts unit teaches the course concepts the brief names and seven critical lenses, with three readings of Blake's 'London' and a method for evaluating interpretations; it does not cover the oral. Different texts and questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-individual-oral-global-issues-practice.md', 'ib-dp-language-a-literature-literary-concepts-and-perspectives-practice.md'],
    evidence: "Practice sets siblings of the study-guide pair above; same distinction applies. Both tagged Readers, writers and texts + Intertextuality. The individual-oral unit covers the oral assessment only: choosing a global issue, pairing extracts from a work in translation and a work in the original language, structuring the talk. The literary-concepts unit teaches the course concepts the brief names and seven critical lenses, with three readings of Blake's 'London' and a method for evaluating interpretations; it does not cover the oral. Different texts and questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-paper-2-comparative-essay.md', 'ib-dp-language-a-literature-prose-and-drama-analysis.md'],
    evidence: "Both tagged Intertextuality + Time and space. The paper-2 unit is exam method for the comparative essay (answering the question set, comparative thesis, integrated comparison, remembered quotation) using Jekyll and Hyde and Dorian Gray. The prose-and-drama unit teaches close-reading tools for narrative voice, characterisation, setting and structure in prose and for staging, dialogue and dramatic irony in drama, using Dickens, Austen, Macbeth and original passages. No shared passages or questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-paper-2-comparative-essay-revision-notes.md', 'ib-dp-language-a-literature-prose-and-drama-analysis-revision-notes.md'],
    evidence: "Revision notes siblings of the study-guide pair above; same distinction applies. Both tagged Intertextuality + Time and space. The paper-2 unit is exam method for the comparative essay (answering the question set, comparative thesis, integrated comparison, remembered quotation) using Jekyll and Hyde and Dorian Gray. The prose-and-drama unit teaches close-reading tools for narrative voice, characterisation, setting and structure in prose and for staging, dialogue and dramatic irony in drama, using Dickens, Austen, Macbeth and original passages. No shared passages or questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-paper-2-comparative-essay-practice.md', 'ib-dp-language-a-literature-prose-and-drama-analysis-practice.md'],
    evidence: "Practice sets siblings of the study-guide pair above; same distinction applies. Both tagged Intertextuality + Time and space. The paper-2 unit is exam method for the comparative essay (answering the question set, comparative thesis, integrated comparison, remembered quotation) using Jekyll and Hyde and Dorian Gray. The prose-and-drama unit teaches close-reading tools for narrative voice, characterisation, setting and structure in prose and for staging, dialogue and dramatic irony in drama, using Dickens, Austen, Macbeth and original passages. No shared passages or questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-poetry-analysis.md', 'ib-dp-language-a-literature-readers-writers-texts.md'],
    evidence: "Both tagged Readers, writers and texts. The older readers-writers-texts pages are an overview of the area with one narrative-voice worked example. The poetry-analysis unit is poetry only: voice, form, structure, metre and rhyme, sound, imagery and paragraph writing, using Blake, Rossetti, Hopkins and original poems the overview never uses. No shared questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-poetry-analysis-revision-notes.md', 'ib-dp-language-a-literature-readers-writers-texts-revision-notes.md'],
    evidence: "Revision notes siblings of the study-guide pair above; same distinction applies. Both tagged Readers, writers and texts. The older readers-writers-texts pages are an overview of the area with one narrative-voice worked example. The poetry-analysis unit is poetry only: voice, form, structure, metre and rhyme, sound, imagery and paragraph writing, using Blake, Rossetti, Hopkins and original poems the overview never uses. No shared questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['ib-dp-language-a-literature-poetry-analysis-practice.md', 'ib-dp-language-a-literature-readers-writers-texts-practice.md'],
    evidence: "Practice sets siblings of the study-guide pair above; same distinction applies. Both tagged Readers, writers and texts. The older readers-writers-texts pages are an overview of the area with one narrative-voice worked example. The poetry-analysis unit is poetry only: voice, form, structure, metre and rhyme, sound, imagery and paragraph writing, using Blake, Rossetti, Hopkins and original poems the overview never uses. No shared questions (content-breadth sprint 27 Sep 2026).",
  },
  {
    files: ['aqa-a-level-biology-biodiversity-index-of-diversity-and-farming-practice.md', 'aqa-a-level-biology-dna-genes-chromosomes-and-protein-synthesis-practice.md', 'aqa-a-level-biology-genetic-diversity-natural-selection-and-required-practice.md', 'aqa-a-level-biology-mutation-and-meiosis-practice.md', 'aqa-a-level-biology-species-taxonomy-and-investigating-diversity-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-biodiversity-index-of-diversity-and-farming-revision-notes.md', 'aqa-a-level-biology-dna-genes-chromosomes-and-protein-synthesis-revision-notes.md', 'aqa-a-level-biology-genetic-diversity-natural-selection-and-required-revision-notes.md', 'aqa-a-level-biology-mutation-and-meiosis-revision-notes.md', 'aqa-a-level-biology-species-taxonomy-and-investigating-diversity-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-biodiversity-index-of-diversity-and-farming.md', 'aqa-a-level-biology-dna-genes-chromosomes-and-protein-synthesis.md', 'aqa-a-level-biology-genetic-diversity-natural-selection-and-required.md', 'aqa-a-level-biology-mutation-and-meiosis.md', 'aqa-a-level-biology-species-taxonomy-and-investigating-diversity.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-energy-transfer-and-productivity-in-ecosystems-practice.md', 'aqa-a-level-biology-nutrient-cycles-and-fertilisers-practice.md', 'aqa-a-level-biology-photosynthesis-practice.md', 'aqa-a-level-biology-respiration-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-energy-transfer-and-productivity-in-ecosystems-revision-notes.md', 'aqa-a-level-biology-nutrient-cycles-and-fertilisers-revision-notes.md', 'aqa-a-level-biology-photosynthesis-revision-notes.md', 'aqa-a-level-biology-respiration-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-energy-transfer-and-productivity-in-ecosystems.md', 'aqa-a-level-biology-nutrient-cycles-and-fertilisers.md', 'aqa-a-level-biology-photosynthesis.md', 'aqa-a-level-biology-respiration.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-gene-mutations-and-stem-cells-practice.md', 'aqa-a-level-biology-genome-projects-and-gene-technologies-practice.md', 'aqa-a-level-biology-regulation-of-gene-expression-and-cancer-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-gene-mutations-and-stem-cells-revision-notes.md', 'aqa-a-level-biology-genome-projects-and-gene-technologies-revision-notes.md', 'aqa-a-level-biology-regulation-of-gene-expression-and-cancer-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-gene-mutations-and-stem-cells.md', 'aqa-a-level-biology-genome-projects-and-gene-technologies.md', 'aqa-a-level-biology-regulation-of-gene-expression-and-cancer.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-homeostasis-and-control-of-blood-glucose-practice.md', 'aqa-a-level-biology-muscle-contraction-practice.md', 'aqa-a-level-biology-nerve-impulses-and-synaptic-transmission-practice.md', 'aqa-a-level-biology-osmoregulation-and-the-kidney-practice.md', 'aqa-a-level-biology-survival-response-and-receptors-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-homeostasis-and-control-of-blood-glucose-revision-notes.md', 'aqa-a-level-biology-muscle-contraction-revision-notes.md', 'aqa-a-level-biology-nerve-impulses-and-synaptic-transmission-revision-notes.md', 'aqa-a-level-biology-osmoregulation-and-the-kidney-revision-notes.md', 'aqa-a-level-biology-survival-response-and-receptors-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-homeostasis-and-control-of-blood-glucose.md', 'aqa-a-level-biology-muscle-contraction.md', 'aqa-a-level-biology-nerve-impulses-and-synaptic-transmission.md', 'aqa-a-level-biology-osmoregulation-and-the-kidney.md', 'aqa-a-level-biology-survival-response-and-receptors.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-inheritance-and-chi-squared-practice.md', 'aqa-a-level-biology-populations-hardy-weinberg-selection-and-speciation-practice.md', 'aqa-a-level-biology-populations-in-ecosystems-and-succession-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-inheritance-and-chi-squared-revision-notes.md', 'aqa-a-level-biology-populations-hardy-weinberg-selection-and-speciation-revision-notes.md', 'aqa-a-level-biology-populations-in-ecosystems-and-succession-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['aqa-a-level-biology-inheritance-and-chi-squared.md', 'aqa-a-level-biology-populations-hardy-weinberg-selection-and-speciation.md', 'aqa-a-level-biology-populations-in-ecosystems-and-succession.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-adaptive-immunity-immunisation-and-antibiotics-practice.md', 'edexcel-ial-biology-bacteria-viruses-tb-hiv-and-the-bodys-defences-practice.md', 'edexcel-ial-biology-culturing-microorganisms-and-bacterial-growth-practice.md', 'edexcel-ial-biology-decomposition-pcr-electrophoresis-and-forensic-biology-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-adaptive-immunity-immunisation-and-antibiotics-revision-notes.md', 'edexcel-ial-biology-bacteria-viruses-tb-hiv-and-the-bodys-defences-revision-notes.md', 'edexcel-ial-biology-culturing-microorganisms-and-bacterial-growth-revision-notes.md', 'edexcel-ial-biology-decomposition-pcr-electrophoresis-and-forensic-biology-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-adaptive-immunity-immunisation-and-antibiotics.md', 'edexcel-ial-biology-bacteria-viruses-tb-hiv-and-the-bodys-defences.md', 'edexcel-ial-biology-culturing-microorganisms-and-bacterial-growth.md', 'edexcel-ial-biology-decomposition-pcr-electrophoresis-and-forensic-biology.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-aerobic-and-anaerobic-respiration-practice.md', 'edexcel-ial-biology-homeostasis-the-kidney-osmoregulation-and-gene-practice.md', 'edexcel-ial-biology-skeletal-muscle-cardiac-control-and-adrenaline-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-aerobic-and-anaerobic-respiration-revision-notes.md', 'edexcel-ial-biology-homeostasis-the-kidney-osmoregulation-and-gene-revision-notes.md', 'edexcel-ial-biology-skeletal-muscle-cardiac-control-and-adrenaline-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-aerobic-and-anaerobic-respiration.md', 'edexcel-ial-biology-homeostasis-the-kidney-osmoregulation-and-gene.md', 'edexcel-ial-biology-skeletal-muscle-cardiac-control-and-adrenaline.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-cell-ultrastructure-and-microscopy-practice.md', 'edexcel-ial-biology-meiosis-gametes-fertilisation-and-mitosis-practice.md', 'edexcel-ial-biology-stem-cells-differential-gene-expression-and-phenotype-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-cell-ultrastructure-and-microscopy-revision-notes.md', 'edexcel-ial-biology-meiosis-gametes-fertilisation-and-mitosis-revision-notes.md', 'edexcel-ial-biology-stem-cells-differential-gene-expression-and-phenotype-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-cell-ultrastructure-and-microscopy.md', 'edexcel-ial-biology-meiosis-gametes-fertilisation-and-mitosis.md', 'edexcel-ial-biology-stem-cells-differential-gene-expression-and-phenotype.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-classification-biodiversity-hardy-weinberg-and-practice.md', 'edexcel-ial-biology-plant-cell-structure-starch-cellulose-and-plant-fibres-practice.md', 'edexcel-ial-biology-plant-minerals-antimicrobial-plant-substances-and-drug-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-classification-biodiversity-hardy-weinberg-and-revision-notes.md', 'edexcel-ial-biology-plant-cell-structure-starch-cellulose-and-plant-fibres-revision-notes.md', 'edexcel-ial-biology-plant-minerals-antimicrobial-plant-substances-and-drug-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-classification-biodiversity-hardy-weinberg-and.md', 'edexcel-ial-biology-plant-cell-structure-starch-cellulose-and-plant-fibres.md', 'edexcel-ial-biology-plant-minerals-antimicrobial-plant-substances-and-drug.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-climate-change-evolution-speciation-and-sustainable-practice.md', 'edexcel-ial-biology-photosynthesis-practice.md', 'edexcel-ial-biology-productivity-populations-niche-and-succession-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-climate-change-evolution-speciation-and-sustainable-revision-notes.md', 'edexcel-ial-biology-photosynthesis-revision-notes.md', 'edexcel-ial-biology-productivity-populations-niche-and-succession-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-climate-change-evolution-speciation-and-sustainable.md', 'edexcel-ial-biology-photosynthesis.md', 'edexcel-ial-biology-productivity-populations-niche-and-succession.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-neurones-reflexes-action-potentials-and-synapses-practice.md', 'edexcel-ial-biology-recombinant-dna-genetic-engineering-and-bioinformatics-practice.md', 'edexcel-ial-biology-sensory-reception-plant-hormones-and-the-brain-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-neurones-reflexes-action-potentials-and-synapses-revision-notes.md', 'edexcel-ial-biology-recombinant-dna-genetic-engineering-and-bioinformatics-revision-notes.md', 'edexcel-ial-biology-sensory-reception-plant-hormones-and-the-brain-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['edexcel-ial-biology-neurones-reflexes-action-potentials-and-synapses.md', 'edexcel-ial-biology-recombinant-dna-genetic-engineering-and-bioinformatics.md', 'edexcel-ial-biology-sensory-reception-plant-hormones-and-the-brain.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-dihybrid-crosses-gene-linkage-and-the-chi-squared-test-practice.md', 'ib-dp-biology-inheritance-alleles-monohybrid-crosses-pedigrees-and-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-dihybrid-crosses-gene-linkage-and-the-chi-squared-test-revision-notes.md', 'ib-dp-biology-inheritance-alleles-monohybrid-crosses-pedigrees-and-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-dihybrid-crosses-gene-linkage-and-the-chi-squared-test.md', 'ib-dp-biology-inheritance-alleles-monohybrid-crosses-pedigrees-and.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-energy-flow-in-ecosystems-food-chains-trophic-levels-practice.md', 'ib-dp-biology-production-and-the-carbon-cycle-primary-and-secondary-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-energy-flow-in-ecosystems-food-chains-trophic-levels-revision-notes.md', 'ib-dp-biology-production-and-the-carbon-cycle-primary-and-secondary-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-energy-flow-in-ecosystems-food-chains-trophic-levels.md', 'ib-dp-biology-production-and-the-carbon-cycle-primary-and-secondary.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-hormonal-and-feedback-integration-in-animals-and-plant-practice.md', 'ib-dp-biology-integration-of-body-systems-nervous-system-brain-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-hormonal-and-feedback-integration-in-animals-and-plant-revision-notes.md', 'ib-dp-biology-integration-of-body-systems-nervous-system-brain-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-hormonal-and-feedback-integration-in-animals-and-plant.md', 'ib-dp-biology-integration-of-body-systems-nervous-system-brain.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-human-reproduction-in-detail-puberty-gametogenesis-practice.md', 'ib-dp-biology-reproduction-sexual-and-asexual-human-reproductive-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-human-reproduction-in-detail-puberty-gametogenesis-revision-notes.md', 'ib-dp-biology-reproduction-sexual-and-asexual-human-reproductive-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-biology-human-reproduction-in-detail-puberty-gametogenesis.md', 'ib-dp-biology-reproduction-sexual-and-asexual-human-reproductive.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-activity-half-life-and-the-radioactive-decay-law-practice.md', 'ib-dp-physics-nuclear-structure-binding-energy-and-types-of-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-activity-half-life-and-the-radioactive-decay-law-revision-notes.md', 'ib-dp-physics-nuclear-structure-binding-energy-and-types-of-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-activity-half-life-and-the-radioactive-decay-law.md', 'ib-dp-physics-nuclear-structure-binding-energy-and-types-of.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-conduction-convection-and-thermal-radiation-stefan-practice.md', 'ib-dp-physics-molecular-model-temperature-internal-energy-and-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-conduction-convection-and-thermal-radiation-stefan-revision-notes.md', 'ib-dp-physics-molecular-model-temperature-internal-energy-and-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-conduction-convection-and-thermal-radiation-stefan.md', 'ib-dp-physics-molecular-model-temperature-internal-energy-and.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-electric-charge-coulombs-law-electric-and-magnetic-practice.md', 'ib-dp-physics-electric-potential-energy-potential-and-equipotentials-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-electric-charge-coulombs-law-electric-and-magnetic-revision-notes.md', 'ib-dp-physics-electric-potential-energy-potential-and-equipotentials-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-electric-charge-coulombs-law-electric-and-magnetic.md', 'ib-dp-physics-electric-potential-energy-potential-and-equipotentials.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot-practice.md', 'ib-dp-physics-first-law-of-thermodynamics-gas-processes-and-work-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot-revision-notes.md', 'ib-dp-physics-first-law-of-thermodynamics-gas-processes-and-work-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-entropy-the-second-law-heat-engines-and-the-carnot.md', 'ib-dp-physics-first-law-of-thermodynamics-gas-processes-and-work.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-gravitational-fields-kepler-newtons-law-and-field-practice.md', 'ib-dp-physics-gravitational-potential-escape-speed-and-orbital-energy-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-gravitational-fields-kepler-newtons-law-and-field-revision-notes.md', 'ib-dp-physics-gravitational-potential-escape-speed-and-orbital-energy-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-gravitational-fields-kepler-newtons-law-and-field.md', 'ib-dp-physics-gravitational-potential-escape-speed-and-orbital-energy.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-superposition-double-slit-interference-single-slit-practice.md', 'ib-dp-physics-wavefronts-rays-reflection-refraction-and-diffraction-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-superposition-double-slit-interference-single-slit-revision-notes.md', 'ib-dp-physics-wavefronts-rays-reflection-refraction-and-diffraction-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-dp-physics-superposition-double-slit-interference-single-slit.md', 'ib-dp-physics-wavefronts-rays-reflection-refraction-and-diffraction.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and-practice.md', 'ib-myp-mathematics-number-sense-estimation-exponents-and-proportion-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and-revision-notes.md', 'ib-myp-mathematics-number-sense-estimation-exponents-and-proportion-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-algebra-in-myp-expressions-equations-sequences-and.md', 'ib-myp-mathematics-number-sense-estimation-exponents-and-proportion.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-practice.md', 'ib-myp-mathematics-functions-and-models-linear-quadratic-exponential-and-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-revision-notes.md', 'ib-myp-mathematics-functions-and-models-linear-quadratic-exponential-and-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp.md', 'ib-myp-mathematics-functions-and-models-linear-quadratic-exponential-and.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-coordinate-geometry-transformations-similarity-and-practice.md', 'ib-myp-mathematics-geometry-angles-circles-area-volume-and-metric-measure-practice.md', 'ib-myp-mathematics-trigonometry-and-pythagoras-in-myp-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-coordinate-geometry-transformations-similarity-and-revision-notes.md', 'ib-myp-mathematics-geometry-angles-circles-area-volume-and-metric-measure-revision-notes.md', 'ib-myp-mathematics-trigonometry-and-pythagoras-in-myp-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ib-myp-mathematics-coordinate-geometry-transformations-similarity-and.md', 'ib-myp-mathematics-geometry-angles-circles-area-volume-and-metric-measure.md', 'ib-myp-mathematics-trigonometry-and-pythagoras-in-myp.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-cell-communication-homeostasis-and-the-liver-practice.md', 'ocr-a-level-biology-chemiosmosis-anaerobic-respiration-and-respiratory-practice.md', 'ocr-a-level-biology-glycolysis-the-link-reaction-and-the-krebs-cycle-practice.md', 'ocr-a-level-biology-hormonal-communication-and-blood-glucose-control-practice.md', 'ocr-a-level-biology-nervous-system-reflexes-heart-control-and-muscle-practice.md', 'ocr-a-level-biology-neuronal-communication-practice.md', 'ocr-a-level-biology-photosynthesis-practice.md', 'ocr-a-level-biology-plant-responses-and-plant-hormones-practice.md', 'ocr-a-level-biology-the-kidney-osmoregulation-and-renal-failure-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-cell-communication-homeostasis-and-the-liver-revision-notes.md', 'ocr-a-level-biology-chemiosmosis-anaerobic-respiration-and-respiratory-revision-notes.md', 'ocr-a-level-biology-glycolysis-the-link-reaction-and-the-krebs-cycle-revision-notes.md', 'ocr-a-level-biology-hormonal-communication-and-blood-glucose-control-revision-notes.md', 'ocr-a-level-biology-nervous-system-reflexes-heart-control-and-muscle-revision-notes.md', 'ocr-a-level-biology-neuronal-communication-revision-notes.md', 'ocr-a-level-biology-photosynthesis-revision-notes.md', 'ocr-a-level-biology-plant-responses-and-plant-hormones-revision-notes.md', 'ocr-a-level-biology-the-kidney-osmoregulation-and-renal-failure-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-cell-communication-homeostasis-and-the-liver.md', 'ocr-a-level-biology-chemiosmosis-anaerobic-respiration-and-respiratory.md', 'ocr-a-level-biology-glycolysis-the-link-reaction-and-the-krebs-cycle.md', 'ocr-a-level-biology-hormonal-communication-and-blood-glucose-control.md', 'ocr-a-level-biology-nervous-system-reflexes-heart-control-and-muscle.md', 'ocr-a-level-biology-neuronal-communication.md', 'ocr-a-level-biology-photosynthesis.md', 'ocr-a-level-biology-plant-responses-and-plant-hormones.md', 'ocr-a-level-biology-the-kidney-osmoregulation-and-renal-failure.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-classification-and-taxonomy-practice.md', 'ocr-a-level-biology-measuring-biodiversity-practice.md', 'ocr-a-level-biology-pathogens-transmission-and-the-first-lines-of-defence-practice.md', 'ocr-a-level-biology-specific-immunity-vaccination-and-medicines-practice.md', 'ocr-a-level-biology-threats-to-biodiversity-and-conservation-practice.md', 'ocr-a-level-biology-variation-adaptation-and-natural-selection-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-classification-and-taxonomy-revision-notes.md', 'ocr-a-level-biology-measuring-biodiversity-revision-notes.md', 'ocr-a-level-biology-pathogens-transmission-and-the-first-lines-of-defence-revision-notes.md', 'ocr-a-level-biology-specific-immunity-vaccination-and-medicines-revision-notes.md', 'ocr-a-level-biology-threats-to-biodiversity-and-conservation-revision-notes.md', 'ocr-a-level-biology-variation-adaptation-and-natural-selection-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-classification-and-taxonomy.md', 'ocr-a-level-biology-measuring-biodiversity.md', 'ocr-a-level-biology-pathogens-transmission-and-the-first-lines-of-defence.md', 'ocr-a-level-biology-specific-immunity-vaccination-and-medicines.md', 'ocr-a-level-biology-threats-to-biodiversity-and-conservation.md', 'ocr-a-level-biology-variation-adaptation-and-natural-selection.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis-practice.md', 'ocr-a-level-biology-ecosystems-biomass-transfer-and-succession-practice.md', 'ocr-a-level-biology-gene-mutations-and-control-of-gene-expression-practice.md', 'ocr-a-level-biology-genetic-engineering-and-gene-therapy-practice.md', 'ocr-a-level-biology-microorganisms-in-biotechnology-and-immobilised-enzymes-practice.md', 'ocr-a-level-biology-natural-and-artificial-cloning-practice.md', 'ocr-a-level-biology-populations-hardy-weinberg-speciation-and-artificial-practice.md', 'ocr-a-level-biology-populations-interactions-and-sustainable-management-practice.md', 'ocr-a-level-biology-variation-genetic-diagrams-and-chi-squared-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis-revision-notes.md', 'ocr-a-level-biology-ecosystems-biomass-transfer-and-succession-revision-notes.md', 'ocr-a-level-biology-gene-mutations-and-control-of-gene-expression-revision-notes.md', 'ocr-a-level-biology-genetic-engineering-and-gene-therapy-revision-notes.md', 'ocr-a-level-biology-microorganisms-in-biotechnology-and-immobilised-enzymes-revision-notes.md', 'ocr-a-level-biology-natural-and-artificial-cloning-revision-notes.md', 'ocr-a-level-biology-populations-hardy-weinberg-speciation-and-artificial-revision-notes.md', 'ocr-a-level-biology-populations-interactions-and-sustainable-management-revision-notes.md', 'ocr-a-level-biology-variation-genetic-diagrams-and-chi-squared-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-dna-sequencing-profiling-pcr-and-electrophoresis.md', 'ocr-a-level-biology-ecosystems-biomass-transfer-and-succession.md', 'ocr-a-level-biology-gene-mutations-and-control-of-gene-expression.md', 'ocr-a-level-biology-genetic-engineering-and-gene-therapy.md', 'ocr-a-level-biology-microorganisms-in-biotechnology-and-immobilised-enzymes.md', 'ocr-a-level-biology-natural-and-artificial-cloning.md', 'ocr-a-level-biology-populations-hardy-weinberg-speciation-and-artificial.md', 'ocr-a-level-biology-populations-interactions-and-sustainable-management.md', 'ocr-a-level-biology-variation-genetic-diagrams-and-chi-squared.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-nucleotides-atp-dna-structure-and-semi-conservative-practice.md', 'ocr-a-level-biology-the-genetic-code-transcription-and-translation-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-nucleotides-atp-dna-structure-and-semi-conservative-revision-notes.md', 'ocr-a-level-biology-the-genetic-code-transcription-and-translation-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-nucleotides-atp-dna-structure-and-semi-conservative.md', 'ocr-a-level-biology-the-genetic-code-transcription-and-translation.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-proteins-inorganic-ions-and-biochemical-tests-practice.md', 'ocr-a-level-biology-water-carbohydrates-and-lipids-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-proteins-inorganic-ions-and-biochemical-tests-revision-notes.md', 'ocr-a-level-biology-water-carbohydrates-and-lipids-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-biology-proteins-inorganic-ions-and-biochemical-tests.md', 'ocr-a-level-biology-water-carbohydrates-and-lipids.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy-practice.md', 'ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy-revision-notes.md', 'ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-capacitance-capacitor-combinations-and-stored-energy.md', 'ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-distances-redshift-hubbles-law-and-the-big-bang-practice.md', 'ocr-a-level-physics-stars-stellar-evolution-and-the-hr-diagram-practice.md', 'ocr-a-level-physics-stellar-spectra-wiens-law-stefans-law-and-stellar-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-distances-redshift-hubbles-law-and-the-big-bang-revision-notes.md', 'ocr-a-level-physics-stars-stellar-evolution-and-the-hr-diagram-revision-notes.md', 'ocr-a-level-physics-stellar-spectra-wiens-law-stefans-law-and-stellar-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-distances-redshift-hubbles-law-and-the-big-bang.md', 'ocr-a-level-physics-stars-stellar-evolution-and-the-hr-diagram.md', 'ocr-a-level-physics-stellar-spectra-wiens-law-stefans-law-and-stellar.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-dynamics-free-body-diagrams-drag-and-terminal-velocity-practice.md', 'ocr-a-level-physics-moments-equilibrium-density-and-pressure-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-dynamics-free-body-diagrams-drag-and-terminal-velocity-revision-notes.md', 'ocr-a-level-physics-moments-equilibrium-density-and-pressure-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-dynamics-free-body-diagrams-drag-and-terminal-velocity.md', 'ocr-a-level-physics-moments-equilibrium-density-and-pressure.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-electromagnetic-induction-generators-and-transformers-practice.md', 'ocr-a-level-physics-magnetic-fields-force-on-conductors-and-moving-charges-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-electromagnetic-induction-generators-and-transformers-revision-notes.md', 'ocr-a-level-physics-magnetic-fields-force-on-conductors-and-moving-charges-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-electromagnetic-induction-generators-and-transformers.md', 'ocr-a-level-physics-magnetic-fields-force-on-conductors-and-moving-charges.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal-practice.md', 'ocr-a-level-physics-stationary-waves-harmonics-and-resonance-tubes-practice.md', 'ocr-a-level-physics-superposition-interference-and-the-double-slit-practice.md', 'ocr-a-level-physics-wave-motion-polarisation-and-wave-effects-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal-revision-notes.md', 'ocr-a-level-physics-stationary-waves-harmonics-and-resonance-tubes-revision-notes.md', 'ocr-a-level-physics-superposition-interference-and-the-double-slit-revision-notes.md', 'ocr-a-level-physics-wave-motion-polarisation-and-wave-effects-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal.md', 'ocr-a-level-physics-stationary-waves-harmonics-and-resonance-tubes.md', 'ocr-a-level-physics-superposition-interference-and-the-double-slit.md', 'ocr-a-level-physics-wave-motion-polarisation-and-wave-effects.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound-practice.md', 'ocr-a-level-physics-x-rays-attenuation-and-cat-scanning-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound-revision-notes.md', 'ocr-a-level-physics-x-rays-attenuation-and-cat-scanning-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound.md', 'ocr-a-level-physics-x-rays-attenuation-and-cat-scanning.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-gravitational-fields-newtons-law-and-planetary-motion-practice.md', 'ocr-a-level-physics-gravitational-potential-potential-energy-and-escape-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-gravitational-fields-newtons-law-and-planetary-motion-revision-notes.md', 'ocr-a-level-physics-gravitational-potential-potential-energy-and-escape-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-gravitational-fields-newtons-law-and-planetary-motion.md', 'ocr-a-level-physics-gravitational-potential-potential-energy-and-escape.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-ideal-gases-and-kinetic-theory-practice.md', 'ocr-a-level-physics-temperature-kinetic-model-internal-energy-specific-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-ideal-gases-and-kinetic-theory-revision-notes.md', 'ocr-a-level-physics-temperature-kinetic-model-internal-energy-specific-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-ideal-gases-and-kinetic-theory.md', 'ocr-a-level-physics-temperature-kinetic-model-internal-energy-specific.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-mass-energy-binding-energy-fission-and-fusion-practice.md', 'ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating-practice.md', 'ocr-a-level-physics-the-nuclear-atom-nuclear-size-and-fundamental-particles-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-mass-energy-binding-energy-fission-and-fusion-revision-notes.md', 'ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating-revision-notes.md', 'ocr-a-level-physics-the-nuclear-atom-nuclear-size-and-fundamental-particles-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-a-level-physics-mass-energy-binding-energy-fission-and-fusion.md', 'ocr-a-level-physics-radioactive-decay-activity-half-life-and-dating.md', 'ocr-a-level-physics-the-nuclear-atom-nuclear-size-and-fundamental-particles.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-ecosystem-organisation-abiotic-and-biotic-factors-practice.md', 'ocr-gcse-biology-material-cycling-and-decomposition-in-ecosystems-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-ecosystem-organisation-abiotic-and-biotic-factors-revision-notes.md', 'ocr-gcse-biology-material-cycling-and-decomposition-in-ecosystems-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-ecosystem-organisation-abiotic-and-biotic-factors.md', 'ocr-gcse-biology-material-cycling-and-decomposition-in-ecosystems.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-exchange-surfaces-and-the-human-circulatory-system-practice.md', 'ocr-gcse-biology-transport-in-plants-water-uptake-transpiration-and-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-exchange-surfaces-and-the-human-circulatory-system-revision-notes.md', 'ocr-gcse-biology-transport-in-plants-water-uptake-transpiration-and-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-exchange-surfaces-and-the-human-circulatory-system.md', 'ocr-gcse-biology-transport-in-plants-water-uptake-transpiration-and.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-food-security-agricultural-solutions-and-selective-practice.md', 'ocr-gcse-biology-genetic-engineering-and-biotechnology-in-food-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-food-security-agricultural-solutions-and-selective-revision-notes.md', 'ocr-gcse-biology-genetic-engineering-and-biotechnology-in-food-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-food-security-agricultural-solutions-and-selective.md', 'ocr-gcse-biology-genetic-engineering-and-biotechnology-in-food.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-genome-alleles-variants-and-mutations-practice.md', 'ocr-gcse-biology-sexual-and-asexual-reproduction-haploid-and-diploid-practice.md', 'ocr-gcse-biology-single-gene-inheritance-genetic-crosses-sex-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-genome-alleles-variants-and-mutations-revision-notes.md', 'ocr-gcse-biology-sexual-and-asexual-reproduction-haploid-and-diploid-revision-notes.md', 'ocr-gcse-biology-single-gene-inheritance-genetic-crosses-sex-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-genome-alleles-variants-and-mutations.md', 'ocr-gcse-biology-sexual-and-asexual-reproduction-haploid-and-diploid.md', 'ocr-gcse-biology-single-gene-inheritance-genetic-crosses-sex.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-health-disease-types-and-the-spread-and-prevention-of-practice.md', 'ocr-gcse-biology-monoclonal-antibodies-aseptic-technique-and-drug-practice.md', 'ocr-gcse-biology-named-infections-stis-and-plant-disease-defence-and-practice.md', 'ocr-gcse-biology-non-communicable-disease-cardiovascular-treatment-practice.md', 'ocr-gcse-biology-stem-cells-gene-technology-and-genomics-in-medicine-practice.md', 'ocr-gcse-biology-white-blood-cells-the-immune-system-and-vaccination-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-health-disease-types-and-the-spread-and-prevention-of-revision-notes.md', 'ocr-gcse-biology-monoclonal-antibodies-aseptic-technique-and-drug-revision-notes.md', 'ocr-gcse-biology-named-infections-stis-and-plant-disease-defence-and-revision-notes.md', 'ocr-gcse-biology-non-communicable-disease-cardiovascular-treatment-revision-notes.md', 'ocr-gcse-biology-stem-cells-gene-technology-and-genomics-in-medicine-revision-notes.md', 'ocr-gcse-biology-white-blood-cells-the-immune-system-and-vaccination-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-health-disease-types-and-the-spread-and-prevention-of.md', 'ocr-gcse-biology-monoclonal-antibodies-aseptic-technique-and-drug.md', 'ocr-gcse-biology-named-infections-stis-and-plant-disease-defence-and.md', 'ocr-gcse-biology-non-communicable-disease-cardiovascular-treatment.md', 'ocr-gcse-biology-stem-cells-gene-technology-and-genomics-in-medicine.md', 'ocr-gcse-biology-white-blood-cells-the-immune-system-and-vaccination.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-homeostasis-temperature-control-and-blood-glucose-practice.md', 'ocr-gcse-biology-osmoregulation-water-balance-the-kidney-and-adh-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-homeostasis-temperature-control-and-blood-glucose-revision-notes.md', 'ocr-gcse-biology-osmoregulation-water-balance-the-kidney-and-adh-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-homeostasis-temperature-control-and-blood-glucose.md', 'ocr-gcse-biology-osmoregulation-water-balance-the-kidney-and-adh.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-hormones-in-contraception-and-fertility-treatment-and-practice.md', 'ocr-gcse-biology-the-endocrine-system-thyroxine-adrenaline-and-the-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-hormones-in-contraception-and-fertility-treatment-and-revision-notes.md', 'ocr-gcse-biology-the-endocrine-system-thyroxine-adrenaline-and-the-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-hormones-in-contraception-and-fertility-treatment-and.md', 'ocr-gcse-biology-the-endocrine-system-thyroxine-adrenaline-and-the.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-nervous-system-coordinated-responses-and-reflex-arcs-practice.md', 'ocr-gcse-biology-the-eye-eye-defects-the-brain-and-limits-of-treatment-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-nervous-system-coordinated-responses-and-reflex-arcs-revision-notes.md', 'ocr-gcse-biology-the-eye-eye-defects-the-brain-and-limits-of-treatment-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-nervous-system-coordinated-responses-and-reflex-arcs.md', 'ocr-gcse-biology-the-eye-eye-defects-the-brain-and-limits-of-treatment.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-practical-skills-i-microscopy-food-tests-sampling-and-practice.md', 'ocr-gcse-biology-practical-skills-ii-photosynthesis-physiology-practice.md', 'ocr-gcse-biology-working-scientifically-planning-recording-presenting-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-practical-skills-i-microscopy-food-tests-sampling-and-revision-notes.md', 'ocr-gcse-biology-practical-skills-ii-photosynthesis-physiology-revision-notes.md', 'ocr-gcse-biology-working-scientifically-planning-recording-presenting-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-biology-practical-skills-i-microscopy-food-tests-sampling-and.md', 'ocr-gcse-biology-practical-skills-ii-photosynthesis-physiology.md', 'ocr-gcse-biology-working-scientifically-planning-recording-presenting.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-deformation-springs-and-hookes-law-practice.md', 'ocr-gcse-physics-gravity-weight-and-pressure-force-in-fluids-practice.md', 'ocr-gcse-physics-moments-levers-and-gears-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-deformation-springs-and-hookes-law-revision-notes.md', 'ocr-gcse-physics-gravity-weight-and-pressure-force-in-fluids-revision-notes.md', 'ocr-gcse-physics-moments-levers-and-gears-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-deformation-springs-and-hookes-law.md', 'ocr-gcse-physics-gravity-weight-and-pressure-force-in-fluids.md', 'ocr-gcse-physics-moments-levers-and-gears.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-electromagnetic-induction-alternators-and-dynamos-practice.md', 'ocr-gcse-physics-the-motor-effect-and-electric-motors-practice.md', 'ocr-gcse-physics-transformers-microphones-and-loudspeakers-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-electromagnetic-induction-alternators-and-dynamos-revision-notes.md', 'ocr-gcse-physics-the-motor-effect-and-electric-motors-revision-notes.md', 'ocr-gcse-physics-transformers-microphones-and-loudspeakers-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-electromagnetic-induction-alternators-and-dynamos.md', 'ocr-gcse-physics-the-motor-effect-and-electric-motors.md', 'ocr-gcse-physics-transformers-microphones-and-loudspeakers.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-electromagnetic-waves-and-the-spectrum-practice.md', 'ocr-gcse-physics-uses-and-hazards-of-electromagnetic-radiation-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-electromagnetic-waves-and-the-spectrum-revision-notes.md', 'ocr-gcse-physics-uses-and-hazards-of-electromagnetic-radiation-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-electromagnetic-waves-and-the-spectrum.md', 'ocr-gcse-physics-uses-and-hazards-of-electromagnetic-radiation.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-energy-resources-trends-in-use-and-mains-electricity-practice.md', 'ocr-gcse-physics-the-national-grid-and-transformers-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-energy-resources-trends-in-use-and-mains-electricity-revision-notes.md', 'ocr-gcse-physics-the-national-grid-and-transformers-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-energy-resources-trends-in-use-and-mains-electricity.md', 'ocr-gcse-physics-the-national-grid-and-transformers.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-estimating-stopping-distances-forces-and-crash-dangers-practice.md', 'ocr-gcse-physics-everyday-speeds-reaction-times-and-stopping-distances-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-estimating-stopping-distances-forces-and-crash-dangers-revision-notes.md', 'ocr-gcse-physics-everyday-speeds-reaction-times-and-stopping-distances-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-estimating-stopping-distances-forces-and-crash-dangers.md', 'ocr-gcse-physics-everyday-speeds-reaction-times-and-stopping-distances.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-gas-pressure-compression-and-the-atmosphere-practice.md', 'ocr-gcse-physics-liquid-pressure-upthrust-floating-and-sinking-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-gas-pressure-compression-and-the-atmosphere-revision-notes.md', 'ocr-gcse-physics-liquid-pressure-upthrust-floating-and-sinking-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-gas-pressure-compression-and-the-atmosphere.md', 'ocr-gcse-physics-liquid-pressure-upthrust-floating-and-sinking.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-interacting-forces-vectors-and-free-body-diagrams-practice.md', 'ocr-gcse-physics-newtons-second-law-inertia-momentum-and-circular-motion-practice.md', 'ocr-gcse-physics-work-done-stored-energy-and-power-from-forces-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-interacting-forces-vectors-and-free-body-diagrams-revision-notes.md', 'ocr-gcse-physics-newtons-second-law-inertia-momentum-and-circular-motion-revision-notes.md', 'ocr-gcse-physics-work-done-stored-energy-and-power-from-forces-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-interacting-forces-vectors-and-free-body-diagrams.md', 'ocr-gcse-physics-newtons-second-law-inertia-momentum-and-circular-motion.md', 'ocr-gcse-physics-work-done-stored-energy-and-power-from-forces.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-ionisation-half-life-and-penetrating-power-practice.md', 'ocr-gcse-physics-nuclear-structure-isotopes-and-decay-equations-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-ionisation-half-life-and-penetrating-power-revision-notes.md', 'ocr-gcse-physics-nuclear-structure-isotopes-and-decay-equations-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-ionisation-half-life-and-penetrating-power.md', 'ocr-gcse-physics-nuclear-structure-isotopes-and-decay-equations.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-radiation-from-bodies-the-solar-system-and-orbits-practice.md', 'ocr-gcse-physics-red-shift-the-big-bang-and-star-formation-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-radiation-from-bodies-the-solar-system-and-orbits-revision-notes.md', 'ocr-gcse-physics-red-shift-the-big-bang-and-star-formation-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-radiation-from-bodies-the-solar-system-and-orbits.md', 'ocr-gcse-physics-red-shift-the-big-bang-and-star-formation.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-resistance-ohms-law-and-i-v-characteristics-practice.md', 'ocr-gcse-physics-series-and-parallel-circuit-calculations-and-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-resistance-ohms-law-and-i-v-characteristics-revision-notes.md', 'ocr-gcse-physics-series-and-parallel-circuit-calculations-and-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-resistance-ohms-law-and-i-v-characteristics.md', 'ocr-gcse-physics-series-and-parallel-circuit-calculations-and.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-sound-waves-at-boundaries-and-hearing-practice.md', 'ocr-gcse-physics-wave-properties-transverse-and-longitudinal-waves-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-sound-waves-at-boundaries-and-hearing-revision-notes.md', 'ocr-gcse-physics-wave-properties-transverse-and-longitudinal-waves-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['ocr-gcse-physics-sound-waves-at-boundaries-and-hearing.md', 'ocr-gcse-physics-wave-properties-transverse-and-longitudinal-waves.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-a-level-biology-allele-frequencies-genetic-drift-and-the-hardy-practice.md', 'oxfordaqa-a-level-biology-energy-transfer-productivity-and-farming-practice.md', 'oxfordaqa-a-level-biology-inheritance-and-genetic-crosses-practice.md', 'oxfordaqa-a-level-biology-natural-selection-and-speciation-practice.md', 'oxfordaqa-a-level-biology-nutrient-cycles-carbon-and-nitrogen-practice.md', 'oxfordaqa-a-level-biology-photosynthesis-and-limiting-factors-practice.md', 'oxfordaqa-a-level-biology-populations-communities-and-ecological-succession-practice.md', 'oxfordaqa-a-level-biology-respiration-glycolysis-krebs-cycle-and-respiratory-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-a-level-biology-allele-frequencies-genetic-drift-and-the-hardy-revision-notes.md', 'oxfordaqa-a-level-biology-energy-transfer-productivity-and-farming-revision-notes.md', 'oxfordaqa-a-level-biology-inheritance-and-genetic-crosses-revision-notes.md', 'oxfordaqa-a-level-biology-natural-selection-and-speciation-revision-notes.md', 'oxfordaqa-a-level-biology-nutrient-cycles-carbon-and-nitrogen-revision-notes.md', 'oxfordaqa-a-level-biology-photosynthesis-and-limiting-factors-revision-notes.md', 'oxfordaqa-a-level-biology-populations-communities-and-ecological-succession-revision-notes.md', 'oxfordaqa-a-level-biology-respiration-glycolysis-krebs-cycle-and-respiratory-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-a-level-biology-allele-frequencies-genetic-drift-and-the-hardy.md', 'oxfordaqa-a-level-biology-energy-transfer-productivity-and-farming.md', 'oxfordaqa-a-level-biology-inheritance-and-genetic-crosses.md', 'oxfordaqa-a-level-biology-natural-selection-and-speciation.md', 'oxfordaqa-a-level-biology-nutrient-cycles-carbon-and-nitrogen.md', 'oxfordaqa-a-level-biology-photosynthesis-and-limiting-factors.md', 'oxfordaqa-a-level-biology-populations-communities-and-ecological-succession.md', 'oxfordaqa-a-level-biology-respiration-glycolysis-krebs-cycle-and-respiratory.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-a-level-biology-blood-glucose-control-hormones-and-diabetes-practice.md', 'oxfordaqa-a-level-biology-homeostasis-feedback-and-control-of-heart-rate-practice.md', 'oxfordaqa-a-level-biology-nerve-impulses-and-synaptic-transmission-practice.md', 'oxfordaqa-a-level-biology-plant-growth-substances-tropisms-ethene-and-aba-practice.md', 'oxfordaqa-a-level-biology-recombinant-dna-technology-practice.md', 'oxfordaqa-a-level-biology-reflexes-taxes-and-kineses-and-sensory-receptors-practice.md', 'oxfordaqa-a-level-biology-regulation-of-gene-expression-and-stem-cells-practice.md', 'oxfordaqa-a-level-biology-skeletal-muscle-and-the-sliding-filament-theory-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-a-level-biology-blood-glucose-control-hormones-and-diabetes-revision-notes.md', 'oxfordaqa-a-level-biology-homeostasis-feedback-and-control-of-heart-rate-revision-notes.md', 'oxfordaqa-a-level-biology-nerve-impulses-and-synaptic-transmission-revision-notes.md', 'oxfordaqa-a-level-biology-plant-growth-substances-tropisms-ethene-and-aba-revision-notes.md', 'oxfordaqa-a-level-biology-recombinant-dna-technology-revision-notes.md', 'oxfordaqa-a-level-biology-reflexes-taxes-and-kineses-and-sensory-receptors-revision-notes.md', 'oxfordaqa-a-level-biology-regulation-of-gene-expression-and-stem-cells-revision-notes.md', 'oxfordaqa-a-level-biology-skeletal-muscle-and-the-sliding-filament-theory-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-a-level-biology-blood-glucose-control-hormones-and-diabetes.md', 'oxfordaqa-a-level-biology-homeostasis-feedback-and-control-of-heart-rate.md', 'oxfordaqa-a-level-biology-nerve-impulses-and-synaptic-transmission.md', 'oxfordaqa-a-level-biology-plant-growth-substances-tropisms-ethene-and-aba.md', 'oxfordaqa-a-level-biology-recombinant-dna-technology.md', 'oxfordaqa-a-level-biology-reflexes-taxes-and-kineses-and-sensory-receptors.md', 'oxfordaqa-a-level-biology-regulation-of-gene-expression-and-stem-cells.md', 'oxfordaqa-a-level-biology-skeletal-muscle-and-the-sliding-filament-theory.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-decay-the-carbon-cycle-and-human-effects-on-the-practice.md', 'oxfordaqa-igcse-biology-energy-transfer-biomass-pyramids-adaptations-and-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-decay-the-carbon-cycle-and-human-effects-on-the-revision-notes.md', 'oxfordaqa-igcse-biology-energy-transfer-biomass-pyramids-adaptations-and-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-decay-the-carbon-cycle-and-human-effects-on-the.md', 'oxfordaqa-igcse-biology-energy-transfer-biomass-pyramids-adaptations-and.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-genetic-manipulation-cloning-genetic-engineering-and-practice.md', 'oxfordaqa-igcse-biology-genetic-variation-monohybrid-inheritance-dna-and-practice.md', 'oxfordaqa-igcse-biology-reproduction-cell-division-stem-cells-and-tumours-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-genetic-manipulation-cloning-genetic-engineering-and-revision-notes.md', 'oxfordaqa-igcse-biology-genetic-variation-monohybrid-inheritance-dna-and-revision-notes.md', 'oxfordaqa-igcse-biology-reproduction-cell-division-stem-cells-and-tumours-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-genetic-manipulation-cloning-genetic-engineering-and.md', 'oxfordaqa-igcse-biology-genetic-variation-monohybrid-inheritance-dna-and.md', 'oxfordaqa-igcse-biology-reproduction-cell-division-stem-cells-and-tumours.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-homeostasis-temperature-control-and-blood-glucose-practice.md', 'oxfordaqa-igcse-biology-infection-immunity-vaccination-and-antibiotics-practice.md', 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-practice.md', 'oxfordaqa-igcse-biology-water-and-ion-balance-liver-kidneys-and-adh-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-homeostasis-temperature-control-and-blood-glucose-revision-notes.md', 'oxfordaqa-igcse-biology-infection-immunity-vaccination-and-antibiotics-revision-notes.md', 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour-revision-notes.md', 'oxfordaqa-igcse-biology-water-and-ion-balance-liver-kidneys-and-adh-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-biology-homeostasis-temperature-control-and-blood-glucose.md', 'oxfordaqa-igcse-biology-infection-immunity-vaccination-and-antibiotics.md', 'oxfordaqa-igcse-biology-nervous-system-reflexes-and-animal-behaviour.md', 'oxfordaqa-igcse-biology-water-and-ion-balance-liver-kidneys-and-adh.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-physics-charge-current-potential-difference-and-circuit-symbols-practice.md', 'oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic-practice.md', 'oxfordaqa-igcse-physics-series-and-parallel-circuits-and-heating-effect-of-practice.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), practice-questions, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-physics-charge-current-potential-difference-and-circuit-symbols-revision-notes.md', 'oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic-revision-notes.md', 'oxfordaqa-igcse-physics-series-and-parallel-circuits-and-heating-effect-of-revision-notes.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), revision-notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ['oxfordaqa-igcse-physics-charge-current-potential-difference-and-circuit-symbols.md', 'oxfordaqa-igcse-physics-resistance-i-v-characteristics-and-electronic.md', 'oxfordaqa-igcse-physics-series-and-parallel-circuits-and-heating-effect-of.md'],
    evidence: "Sibling new units from the physics, biology and MYP mathematics gap sprint (12 Oct 2026), study-guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, listed in its own syllabus coverage section, with its own worked examples and questions. Independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-420.",
  },
  {
    files: ["aqa-a-level-economics-budget-balance-national-debt-and-the-consequences-of-practice.md", "aqa-a-level-economics-fiscal-policy-government-spending-taxation-and-the-practice.md", "aqa-a-level-economics-supply-side-policies-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-budget-balance-national-debt-and-the-consequences-of-revision-notes.md", "aqa-a-level-economics-fiscal-policy-government-spending-taxation-and-the-revision-notes.md", "aqa-a-level-economics-supply-side-policies-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-budget-balance-national-debt-and-the-consequences-of.md", "aqa-a-level-economics-fiscal-policy-government-spending-taxation-and-the.md", "aqa-a-level-economics-supply-side-policies.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-central-banks-and-monetary-policy-practice.md", "aqa-a-level-economics-commercial-and-investment-banks-credit-creation-and-practice.md", "aqa-a-level-economics-financial-markets-financial-assets-money-and-bonds-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-central-banks-and-monetary-policy-revision-notes.md", "aqa-a-level-economics-commercial-and-investment-banks-credit-creation-and-revision-notes.md", "aqa-a-level-economics-financial-markets-financial-assets-money-and-bonds-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-central-banks-and-monetary-policy.md", "aqa-a-level-economics-commercial-and-investment-banks-credit-creation-and.md", "aqa-a-level-economics-financial-markets-financial-assets-money-and-bonds.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-comparative-advantage-and-the-costs-and-benefits-of-practice.md", "aqa-a-level-economics-economic-growth-and-development-practice.md", "aqa-a-level-economics-exchange-rate-systems-and-currency-unions-practice.md", "aqa-a-level-economics-globalisation-and-multinational-corporations-practice.md", "aqa-a-level-economics-protectionism-trading-blocs-and-the-wto-practice.md", "aqa-a-level-economics-the-balance-of-payments-and-correcting-imbalances-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-comparative-advantage-and-the-costs-and-benefits-of-revision-notes.md", "aqa-a-level-economics-economic-growth-and-development-revision-notes.md", "aqa-a-level-economics-exchange-rate-systems-and-currency-unions-revision-notes.md", "aqa-a-level-economics-globalisation-and-multinational-corporations-revision-notes.md", "aqa-a-level-economics-protectionism-trading-blocs-and-the-wto-revision-notes.md", "aqa-a-level-economics-the-balance-of-payments-and-correcting-imbalances-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-comparative-advantage-and-the-costs-and-benefits-of.md", "aqa-a-level-economics-economic-growth-and-development.md", "aqa-a-level-economics-exchange-rate-systems-and-currency-unions.md", "aqa-a-level-economics-globalisation-and-multinational-corporations.md", "aqa-a-level-economics-protectionism-trading-blocs-and-the-wto.md", "aqa-a-level-economics-the-balance-of-payments-and-correcting-imbalances.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-competition-policy-public-ownership-regulation-and-practice.md", "aqa-a-level-economics-government-intervention-in-markets-tax-subsidy-price-practice.md", "aqa-a-level-economics-merit-and-demerit-goods-and-market-imperfections-practice.md", "aqa-a-level-economics-public-goods-and-externalities-practice.md", "aqa-a-level-economics-the-price-mechanism-and-the-meaning-of-market-failure-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-competition-policy-public-ownership-regulation-and-revision-notes.md", "aqa-a-level-economics-government-intervention-in-markets-tax-subsidy-price-revision-notes.md", "aqa-a-level-economics-merit-and-demerit-goods-and-market-imperfections-revision-notes.md", "aqa-a-level-economics-public-goods-and-externalities-revision-notes.md", "aqa-a-level-economics-the-price-mechanism-and-the-meaning-of-market-failure-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-competition-policy-public-ownership-regulation-and.md", "aqa-a-level-economics-government-intervention-in-markets-tax-subsidy-price.md", "aqa-a-level-economics-merit-and-demerit-goods-and-market-imperfections.md", "aqa-a-level-economics-public-goods-and-externalities.md", "aqa-a-level-economics-the-price-mechanism-and-the-meaning-of-market-failure.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-conflicts-between-macroeconomic-objectives-and-the-practice.md", "aqa-a-level-economics-economic-growth-and-the-economic-cycle-practice.md", "aqa-a-level-economics-employment-and-unemployment-practice.md", "aqa-a-level-economics-inflation-and-deflation-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-conflicts-between-macroeconomic-objectives-and-the-revision-notes.md", "aqa-a-level-economics-economic-growth-and-the-economic-cycle-revision-notes.md", "aqa-a-level-economics-employment-and-unemployment-revision-notes.md", "aqa-a-level-economics-inflation-and-deflation-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-conflicts-between-macroeconomic-objectives-and-the.md", "aqa-a-level-economics-economic-growth-and-the-economic-cycle.md", "aqa-a-level-economics-employment-and-unemployment.md", "aqa-a-level-economics-inflation-and-deflation.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-costs-of-production-and-economies-and-diseconomies-of-practice.md", "aqa-a-level-economics-production-productivity-specialisation-and-returns-practice.md", "aqa-a-level-economics-revenue-profit-and-technological-change-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-costs-of-production-and-economies-and-diseconomies-of-revision-notes.md", "aqa-a-level-economics-production-productivity-specialisation-and-returns-revision-notes.md", "aqa-a-level-economics-revenue-profit-and-technological-change-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-costs-of-production-and-economies-and-diseconomies-of.md", "aqa-a-level-economics-production-productivity-specialisation-and-returns.md", "aqa-a-level-economics-revenue-profit-and-technological-change.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-demand-and-supply-of-labour-and-competitive-labour-practice.md", "aqa-a-level-economics-monopsony-and-trade-unions-in-labour-markets-practice.md", "aqa-a-level-economics-the-national-minimum-wage-and-discrimination-in-labour-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-demand-and-supply-of-labour-and-competitive-labour-revision-notes.md", "aqa-a-level-economics-monopsony-and-trade-unions-in-labour-markets-revision-notes.md", "aqa-a-level-economics-the-national-minimum-wage-and-discrimination-in-labour-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-demand-and-supply-of-labour-and-competitive-labour.md", "aqa-a-level-economics-monopsony-and-trade-unions-in-labour-markets.md", "aqa-a-level-economics-the-national-minimum-wage-and-discrimination-in-labour.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-demand-shifts-in-demand-and-elasticities-of-demand-practice.md", "aqa-a-level-economics-supply-elasticity-of-supply-equilibrium-and-related-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-demand-shifts-in-demand-and-elasticities-of-demand-revision-notes.md", "aqa-a-level-economics-supply-elasticity-of-supply-equilibrium-and-related-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-demand-shifts-in-demand-and-elasticities-of-demand.md", "aqa-a-level-economics-supply-elasticity-of-supply-equilibrium-and-related.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-distribution-of-income-and-wealth-lorenz-curve-and-the-practice.md", "aqa-a-level-economics-poverty-and-government-policies-on-poverty-and-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-distribution-of-income-and-wealth-lorenz-curve-and-the-revision-notes.md", "aqa-a-level-economics-poverty-and-government-policies-on-poverty-and-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-distribution-of-income-and-wealth-lorenz-curve-and-the.md", "aqa-a-level-economics-poverty-and-government-policies-on-poverty-and.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-dynamic-competition-creative-destruction-and-practice.md", "aqa-a-level-economics-efficiency-market-structure-and-consumer-and-producer-practice.md", "aqa-a-level-economics-market-structures-and-the-objectives-of-firms-practice.md", "aqa-a-level-economics-monopoly-monopoly-power-and-price-discrimination-practice.md", "aqa-a-level-economics-oligopoly-interdependence-collusion-and-the-kinked-practice.md", "aqa-a-level-economics-perfect-competition-and-monopolistic-competition-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-dynamic-competition-creative-destruction-and-revision-notes.md", "aqa-a-level-economics-efficiency-market-structure-and-consumer-and-producer-revision-notes.md", "aqa-a-level-economics-market-structures-and-the-objectives-of-firms-revision-notes.md", "aqa-a-level-economics-monopoly-monopoly-power-and-price-discrimination-revision-notes.md", "aqa-a-level-economics-oligopoly-interdependence-collusion-and-the-kinked-revision-notes.md", "aqa-a-level-economics-perfect-competition-and-monopolistic-competition-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-a-level-economics-dynamic-competition-creative-destruction-and.md", "aqa-a-level-economics-efficiency-market-structure-and-consumer-and-producer.md", "aqa-a-level-economics-market-structures-and-the-objectives-of-firms.md", "aqa-a-level-economics-monopoly-monopoly-power-and-price-discrimination.md", "aqa-a-level-economics-oligopoly-interdependence-collusion-and-the-kinked.md", "aqa-a-level-economics-perfect-competition-and-monopolistic-competition.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-business-objectives-costs-revenue-and-profit-practice.md", "aqa-gcse-economics-productivity-and-economies-of-scale-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-business-objectives-costs-revenue-and-profit-revision-notes.md", "aqa-gcse-economics-productivity-and-economies-of-scale-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-business-objectives-costs-revenue-and-profit.md", "aqa-gcse-economics-productivity-and-economies-of-scale.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-demand-and-supply-factors-curves-shifts-and-movements-practice.md", "aqa-gcse-economics-equilibrium-price-revenue-on-diagrams-and-intermarket-practice.md", "aqa-gcse-economics-price-elasticity-of-demand-and-supply-calculation-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-demand-and-supply-factors-curves-shifts-and-movements-revision-notes.md", "aqa-gcse-economics-equilibrium-price-revenue-on-diagrams-and-intermarket-revision-notes.md", "aqa-gcse-economics-price-elasticity-of-demand-and-supply-calculation-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-demand-and-supply-factors-curves-shifts-and-movements.md", "aqa-gcse-economics-equilibrium-price-revenue-on-diagrams-and-intermarket.md", "aqa-gcse-economics-price-elasticity-of-demand-and-supply-calculation.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-market-structures-competitive-and-non-competitive-practice.md", "aqa-gcse-economics-the-labour-market-wage-determination-differentials-and-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-market-structures-competitive-and-non-competitive-revision-notes.md", "aqa-gcse-economics-the-labour-market-wage-determination-differentials-and-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["aqa-gcse-economics-market-structures-competitive-and-non-competitive.md", "aqa-gcse-economics-the-labour-market-wage-determination-differentials-and.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-actual-and-potential-growth-output-gaps-the-business-practice.md", "cambridge-a-level-economics-inclusive-and-sustainable-economic-growth-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-actual-and-potential-growth-output-gaps-the-business-revision-notes.md", "cambridge-a-level-economics-inclusive-and-sustainable-economic-growth-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-actual-and-potential-growth-output-gaps-the-business.md", "cambridge-a-level-economics-inclusive-and-sustainable-economic-growth.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-components-of-ad-the-accelerator-and-output-gaps-in-practice.md", "cambridge-a-level-economics-the-multiplier-and-propensities-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-components-of-ad-the-accelerator-and-output-gaps-in-revision-notes.md", "cambridge-a-level-economics-the-multiplier-and-propensities-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-components-of-ad-the-accelerator-and-output-gaps-in.md", "cambridge-a-level-economics-the-multiplier-and-propensities.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-controlling-inflation-demand-for-money-and-interest-practice.md", "cambridge-a-level-economics-money-banks-and-the-money-supply-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-controlling-inflation-demand-for-money-and-interest-revision-notes.md", "cambridge-a-level-economics-money-banks-and-the-money-supply-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-controlling-inflation-demand-for-money-and-interest.md", "cambridge-a-level-economics-money-banks-and-the-money-supply.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-effectiveness-of-fiscal-and-monetary-policy-including-practice.md", "cambridge-a-level-economics-effectiveness-of-supply-side-exchange-rate-and-trade-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-effectiveness-of-fiscal-and-monetary-policy-including-revision-notes.md", "cambridge-a-level-economics-effectiveness-of-supply-side-exchange-rate-and-trade-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-effectiveness-of-fiscal-and-monetary-policy-including.md", "cambridge-a-level-economics-effectiveness-of-supply-side-exchange-rate-and-trade.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-imperfect-labour-markets-wage-differentials-transfer-practice.md", "cambridge-a-level-economics-labour-demand-supply-and-wage-determination-in-perfect-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-imperfect-labour-markets-wage-differentials-transfer-revision-notes.md", "cambridge-a-level-economics-labour-demand-supply-and-wage-determination-in-perfect-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-imperfect-labour-markets-wage-differentials-transfer.md", "cambridge-a-level-economics-labour-demand-supply-and-wage-determination-in-perfect.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-international-aid-trade-and-investment-practice.md", "cambridge-a-level-economics-multinationals-fdi-external-debt-the-imf-and-the-world-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-international-aid-trade-and-investment-revision-notes.md", "cambridge-a-level-economics-multinationals-fdi-external-debt-the-imf-and-the-world-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-international-aid-trade-and-investment.md", "cambridge-a-level-economics-multinationals-fdi-external-debt-the-imf-and-the-world.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-long-run-production-economies-of-scale-revenue-and-practice.md", "cambridge-a-level-economics-short-run-production-and-costs-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-long-run-production-economies-of-scale-revenue-and-revision-notes.md", "cambridge-a-level-economics-short-run-production-and-costs-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-long-run-production-economies-of-scale-revenue-and.md", "cambridge-a-level-economics-short-run-production-and-costs.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-market-failure-policies-permits-property-rights-practice.md", "cambridge-a-level-economics-market-failure-policies-taxes-subsidies-controls-and-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-market-failure-policies-permits-property-rights-revision-notes.md", "cambridge-a-level-economics-market-failure-policies-taxes-subsidies-controls-and-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-market-failure-policies-permits-property-rights.md", "cambridge-a-level-economics-market-failure-policies-taxes-subsidies-controls-and.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-market-structures-barriers-to-entry-and-concentration-practice.md", "cambridge-a-level-economics-oligopoly-contestable-markets-price-and-non-price-practice.md", "cambridge-a-level-economics-perfect-competition-monopoly-and-monopolistic-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-market-structures-barriers-to-entry-and-concentration-revision-notes.md", "cambridge-a-level-economics-oligopoly-contestable-markets-price-and-non-price-revision-notes.md", "cambridge-a-level-economics-perfect-competition-monopoly-and-monopolistic-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["cambridge-a-level-economics-market-structures-barriers-to-entry-and-concentration.md", "cambridge-a-level-economics-oligopoly-contestable-markets-price-and-non-price.md", "cambridge-a-level-economics-perfect-competition-monopoly-and-monopolistic.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-balance-of-payments-and-international-competitiveness-practice.md", "edexcel-ial-economics-exchange-rates-and-their-effects-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-balance-of-payments-and-international-competitiveness-revision-notes.md", "edexcel-ial-economics-exchange-rates-and-their-effects-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-balance-of-payments-and-international-competitiveness.md", "edexcel-ial-economics-exchange-rates-and-their-effects.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-comparative-advantage-patterns-of-trade-and-the-terms-practice.md", "edexcel-ial-economics-trading-blocs-the-wto-and-protectionism-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-comparative-advantage-patterns-of-trade-and-the-terms-revision-notes.md", "edexcel-ial-economics-trading-blocs-the-wto-and-protectionism-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-comparative-advantage-patterns-of-trade-and-the-terms.md", "edexcel-ial-economics-trading-blocs-the-wto-and-protectionism.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-demographic-financial-and-non-economic-constraints-on-practice.md", "edexcel-ial-economics-industrialisation-aid-debt-relief-and-international-practice.md", "edexcel-ial-economics-market-orientated-and-interventionist-development-practice.md", "edexcel-ial-economics-measuring-development-and-the-economic-constraints-on-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-demographic-financial-and-non-economic-constraints-on-revision-notes.md", "edexcel-ial-economics-industrialisation-aid-debt-relief-and-international-revision-notes.md", "edexcel-ial-economics-market-orientated-and-interventionist-development-revision-notes.md", "edexcel-ial-economics-measuring-development-and-the-economic-constraints-on-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-demographic-financial-and-non-economic-constraints-on.md", "edexcel-ial-economics-industrialisation-aid-debt-relief-and-international.md", "edexcel-ial-economics-market-orientated-and-interventionist-development.md", "edexcel-ial-economics-measuring-development-and-the-economic-constraints-on.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-economies-and-diseconomies-of-scale-profit-and-practice.md", "edexcel-ial-economics-revenue-short-run-costs-and-diminishing-returns-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-economies-and-diseconomies-of-scale-profit-and-revision-notes.md", "edexcel-ial-economics-revenue-short-run-costs-and-diminishing-returns-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-economies-and-diseconomies-of-scale-profit-and.md", "edexcel-ial-economics-revenue-short-run-costs-and-diminishing-returns.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-efficiency-concentration-ratios-and-perfect-competition-practice.md", "edexcel-ial-economics-monopolistic-competition-and-contestable-markets-practice.md", "edexcel-ial-economics-monopoly-price-discrimination-and-monopsony-practice.md", "edexcel-ial-economics-oligopoly-interdependence-collusion-and-competition-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-efficiency-concentration-ratios-and-perfect-competition-revision-notes.md", "edexcel-ial-economics-monopolistic-competition-and-contestable-markets-revision-notes.md", "edexcel-ial-economics-monopoly-price-discrimination-and-monopsony-revision-notes.md", "edexcel-ial-economics-oligopoly-interdependence-collusion-and-competition-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-efficiency-concentration-ratios-and-perfect-competition.md", "edexcel-ial-economics-monopolistic-competition-and-contestable-markets.md", "edexcel-ial-economics-monopoly-price-discrimination-and-monopsony.md", "edexcel-ial-economics-oligopoly-interdependence-collusion-and-competition.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-externalities-and-public-goods-as-sources-of-market-practice.md", "edexcel-ial-economics-imperfect-information-moral-hazard-and-market-bubbles-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-externalities-and-public-goods-as-sources-of-market-revision-notes.md", "edexcel-ial-economics-imperfect-information-moral-hazard-and-market-bubbles-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-externalities-and-public-goods-as-sources-of-market.md", "edexcel-ial-economics-imperfect-information-moral-hazard-and-market-bubbles.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-fiscal-and-monetary-policy-and-the-role-of-central-practice.md", "edexcel-ial-economics-macroeconomic-objectives-and-conflicts-between-them-practice.md", "edexcel-ial-economics-supply-side-policies-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-fiscal-and-monetary-policy-and-the-role-of-central-revision-notes.md", "edexcel-ial-economics-macroeconomic-objectives-and-conflicts-between-them-revision-notes.md", "edexcel-ial-economics-supply-side-policies-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-fiscal-and-monetary-policy-and-the-role-of-central.md", "edexcel-ial-economics-macroeconomic-objectives-and-conflicts-between-them.md", "edexcel-ial-economics-supply-side-policies.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-fiscal-deficits-and-national-debt-practice.md", "edexcel-ial-economics-macroeconomic-policies-in-a-global-context-control-of-practice.md", "edexcel-ial-economics-public-expenditure-and-taxation-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-fiscal-deficits-and-national-debt-revision-notes.md", "edexcel-ial-economics-macroeconomic-policies-in-a-global-context-control-of-revision-notes.md", "edexcel-ial-economics-public-expenditure-and-taxation-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-ial-economics-fiscal-deficits-and-national-debt.md", "edexcel-ial-economics-macroeconomic-policies-in-a-global-context-control-of.md", "edexcel-ial-economics-public-expenditure-and-taxation.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-economic-growth-gdp-and-the-economic-cycle-practice.md", "edexcel-igcse-economics-environmental-protection-and-redistribution-of-income-practice.md", "edexcel-igcse-economics-inflation-deflation-and-the-cpi-practice.md", "edexcel-igcse-economics-the-current-account-of-the-balance-of-payments-practice.md", "edexcel-igcse-economics-unemployment-and-its-consequences-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-economic-growth-gdp-and-the-economic-cycle-revision-notes.md", "edexcel-igcse-economics-environmental-protection-and-redistribution-of-income-revision-notes.md", "edexcel-igcse-economics-inflation-deflation-and-the-cpi-revision-notes.md", "edexcel-igcse-economics-the-current-account-of-the-balance-of-payments-revision-notes.md", "edexcel-igcse-economics-unemployment-and-its-consequences-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-economic-growth-gdp-and-the-economic-cycle.md", "edexcel-igcse-economics-environmental-protection-and-redistribution-of-income.md", "edexcel-igcse-economics-inflation-deflation-and-the-cpi.md", "edexcel-igcse-economics-the-current-account-of-the-balance-of-payments.md", "edexcel-igcse-economics-unemployment-and-its-consequences.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-fiscal-policy-taxes-spending-deficits-and-surpluses-practice.md", "edexcel-igcse-economics-monetary-policy-and-government-controls-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-fiscal-policy-taxes-spending-deficits-and-surpluses-revision-notes.md", "edexcel-igcse-economics-monetary-policy-and-government-controls-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-fiscal-policy-taxes-spending-deficits-and-surpluses.md", "edexcel-igcse-economics-monetary-policy-and-government-controls.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-free-trade-protectionism-and-tariff-quota-and-subsidy-practice.md", "edexcel-igcse-economics-trading-blocs-the-wto-and-trade-patterns-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-free-trade-protectionism-and-tariff-quota-and-subsidy-revision-notes.md", "edexcel-igcse-economics-trading-blocs-the-wto-and-trade-patterns-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["edexcel-igcse-economics-free-trade-protectionism-and-tariff-quota-and-subsidy.md", "edexcel-igcse-economics-trading-blocs-the-wto-and-trade-patterns.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-aggregate-supply-and-the-ad-as-model-practice.md", "ocr-a-level-economics-the-circular-flow-of-income-propensities-and-aggregate-practice.md", "ocr-a-level-economics-the-multiplier-the-economic-cycle-and-output-gaps-practice.md", "ocr-a-level-economics-the-phillips-curve-and-schools-of-macroeconomic-thought-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-aggregate-supply-and-the-ad-as-model-revision-notes.md", "ocr-a-level-economics-the-circular-flow-of-income-propensities-and-aggregate-revision-notes.md", "ocr-a-level-economics-the-multiplier-the-economic-cycle-and-output-gaps-revision-notes.md", "ocr-a-level-economics-the-phillips-curve-and-schools-of-macroeconomic-thought-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-aggregate-supply-and-the-ad-as-model.md", "ocr-a-level-economics-the-circular-flow-of-income-propensities-and-aggregate.md", "ocr-a-level-economics-the-multiplier-the-economic-cycle-and-output-gaps.md", "ocr-a-level-economics-the-phillips-curve-and-schools-of-macroeconomic-thought.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-business-objectives-and-the-principal-agent-problem-practice.md", "ocr-a-level-economics-economies-of-scale-revenue-and-profit-practice.md", "ocr-a-level-economics-short-run-costs-diminishing-returns-and-cost-curves-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-business-objectives-and-the-principal-agent-problem-revision-notes.md", "ocr-a-level-economics-economies-of-scale-revenue-and-profit-revision-notes.md", "ocr-a-level-economics-short-run-costs-diminishing-returns-and-cost-curves-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-business-objectives-and-the-principal-agent-problem.md", "ocr-a-level-economics-economies-of-scale-revenue-and-profit.md", "ocr-a-level-economics-short-run-costs-diminishing-returns-and-cost-curves.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-central-banks-and-financial-regulation-practice.md", "ocr-a-level-economics-financial-institutions-markets-and-borrowing-practice.md", "ocr-a-level-economics-money-banks-and-the-determination-of-interest-rates-practice.md", "ocr-a-level-economics-the-financial-sector-in-developing-and-emerging-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-central-banks-and-financial-regulation-revision-notes.md", "ocr-a-level-economics-financial-institutions-markets-and-borrowing-revision-notes.md", "ocr-a-level-economics-money-banks-and-the-determination-of-interest-rates-revision-notes.md", "ocr-a-level-economics-the-financial-sector-in-developing-and-emerging-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-central-banks-and-financial-regulation.md", "ocr-a-level-economics-financial-institutions-markets-and-borrowing.md", "ocr-a-level-economics-money-banks-and-the-determination-of-interest-rates.md", "ocr-a-level-economics-the-financial-sector-in-developing-and-emerging.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-contestable-markets-integration-growth-of-firms-and-practice.md", "ocr-a-level-economics-monopoly-natural-monopoly-and-price-discrimination-practice.md", "ocr-a-level-economics-oligopoly-interdependence-and-concentration-ratios-practice.md", "ocr-a-level-economics-perfect-competition-and-monopolistic-competition-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-contestable-markets-integration-growth-of-firms-and-revision-notes.md", "ocr-a-level-economics-monopoly-natural-monopoly-and-price-discrimination-revision-notes.md", "ocr-a-level-economics-oligopoly-interdependence-and-concentration-ratios-revision-notes.md", "ocr-a-level-economics-perfect-competition-and-monopolistic-competition-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-contestable-markets-integration-growth-of-firms-and.md", "ocr-a-level-economics-monopoly-natural-monopoly-and-price-discrimination.md", "ocr-a-level-economics-oligopoly-interdependence-and-concentration-ratios.md", "ocr-a-level-economics-perfect-competition-and-monopolistic-competition.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-demand-for-labour-productivity-and-unit-labour-costs-practice.md", "ocr-a-level-economics-labour-market-issues-inequality-and-government-practice.md", "ocr-a-level-economics-supply-of-labour-economic-rent-and-wage-determination-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-demand-for-labour-productivity-and-unit-labour-costs-revision-notes.md", "ocr-a-level-economics-labour-market-issues-inequality-and-government-revision-notes.md", "ocr-a-level-economics-supply-of-labour-economic-rent-and-wage-determination-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-demand-for-labour-productivity-and-unit-labour-costs.md", "ocr-a-level-economics-labour-market-issues-inequality-and-government.md", "ocr-a-level-economics-supply-of-labour-economic-rent-and-wage-determination.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-demand-supply-and-consumer-and-producer-surplus-practice.md", "ocr-a-level-economics-economic-efficiency-and-the-nature-of-market-failure-practice.md", "ocr-a-level-economics-elasticity-of-demand-and-supply-ped-yed-xed-pes-practice.md", "ocr-a-level-economics-government-intervention-cost-benefit-analysis-and-practice.md", "ocr-a-level-economics-information-failure-merit-and-demerit-goods-public-practice.md", "ocr-a-level-economics-market-equilibrium-price-volatility-and-evaluating-the-practice.md", "ocr-a-level-economics-the-environment-and-market-failure-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-demand-supply-and-consumer-and-producer-surplus-revision-notes.md", "ocr-a-level-economics-economic-efficiency-and-the-nature-of-market-failure-revision-notes.md", "ocr-a-level-economics-elasticity-of-demand-and-supply-ped-yed-xed-pes-revision-notes.md", "ocr-a-level-economics-government-intervention-cost-benefit-analysis-and-revision-notes.md", "ocr-a-level-economics-information-failure-merit-and-demerit-goods-public-revision-notes.md", "ocr-a-level-economics-market-equilibrium-price-volatility-and-evaluating-the-revision-notes.md", "ocr-a-level-economics-the-environment-and-market-failure-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-demand-supply-and-consumer-and-producer-surplus.md", "ocr-a-level-economics-economic-efficiency-and-the-nature-of-market-failure.md", "ocr-a-level-economics-elasticity-of-demand-and-supply-ped-yed-xed-pes.md", "ocr-a-level-economics-government-intervention-cost-benefit-analysis-and.md", "ocr-a-level-economics-information-failure-merit-and-demerit-goods-public.md", "ocr-a-level-economics-market-equilibrium-price-volatility-and-evaluating-the.md", "ocr-a-level-economics-the-environment-and-market-failure.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-economic-development-alternative-measures-and-practice.md", "ocr-a-level-economics-economic-growth-gdp-and-recession-practice.md", "ocr-a-level-economics-income-and-wealth-distribution-poverty-and-uk-practice.md", "ocr-a-level-economics-inflation-deflation-and-index-numbers-practice.md", "ocr-a-level-economics-unemployment-and-employment-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-economic-development-alternative-measures-and-revision-notes.md", "ocr-a-level-economics-economic-growth-gdp-and-recession-revision-notes.md", "ocr-a-level-economics-income-and-wealth-distribution-poverty-and-uk-revision-notes.md", "ocr-a-level-economics-inflation-deflation-and-index-numbers-revision-notes.md", "ocr-a-level-economics-unemployment-and-employment-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-economic-development-alternative-measures-and.md", "ocr-a-level-economics-economic-growth-gdp-and-recession.md", "ocr-a-level-economics-income-and-wealth-distribution-poverty-and-uk.md", "ocr-a-level-economics-inflation-deflation-and-index-numbers.md", "ocr-a-level-economics-unemployment-and-employment.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-economic-integration-the-eu-and-the-wto-practice.md", "ocr-a-level-economics-exchange-rate-determination-measures-and-systems-practice.md", "ocr-a-level-economics-globalisation-and-multinational-firms-practice.md", "ocr-a-level-economics-international-trade-comparative-advantage-and-the-practice.md", "ocr-a-level-economics-protectionism-and-the-case-for-free-trade-practice.md", "ocr-a-level-economics-purchasing-power-parity-the-marshall-lerner-condition-practice.md", "ocr-a-level-economics-the-balance-of-payments-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-economic-integration-the-eu-and-the-wto-revision-notes.md", "ocr-a-level-economics-exchange-rate-determination-measures-and-systems-revision-notes.md", "ocr-a-level-economics-globalisation-and-multinational-firms-revision-notes.md", "ocr-a-level-economics-international-trade-comparative-advantage-and-the-revision-notes.md", "ocr-a-level-economics-protectionism-and-the-case-for-free-trade-revision-notes.md", "ocr-a-level-economics-purchasing-power-parity-the-marshall-lerner-condition-revision-notes.md", "ocr-a-level-economics-the-balance-of-payments-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-economic-integration-the-eu-and-the-wto.md", "ocr-a-level-economics-exchange-rate-determination-measures-and-systems.md", "ocr-a-level-economics-globalisation-and-multinational-firms.md", "ocr-a-level-economics-international-trade-comparative-advantage-and-the.md", "ocr-a-level-economics-protectionism-and-the-case-for-free-trade.md", "ocr-a-level-economics-purchasing-power-parity-the-marshall-lerner-condition.md", "ocr-a-level-economics-the-balance-of-payments.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation-practice.md", "ocr-a-level-economics-fiscal-policy-2-deficits-debt-stabilisers-and-fiscal-practice.md", "ocr-a-level-economics-monetary-policy-and-inflation-targeting-practice.md", "ocr-a-level-economics-policy-conflicts-and-the-evolution-of-macroeconomic-practice.md", "ocr-a-level-economics-supply-side-policy-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation-revision-notes.md", "ocr-a-level-economics-fiscal-policy-2-deficits-debt-stabilisers-and-fiscal-revision-notes.md", "ocr-a-level-economics-monetary-policy-and-inflation-targeting-revision-notes.md", "ocr-a-level-economics-policy-conflicts-and-the-evolution-of-macroeconomic-revision-notes.md", "ocr-a-level-economics-supply-side-policy-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation.md", "ocr-a-level-economics-fiscal-policy-2-deficits-debt-stabilisers-and-fiscal.md", "ocr-a-level-economics-monetary-policy-and-inflation-targeting.md", "ocr-a-level-economics-policy-conflicts-and-the-evolution-of-macroeconomic.md", "ocr-a-level-economics-supply-side-policy.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-opportunity-cost-the-ppf-specialisation-and-trade-practice.md", "ocr-a-level-economics-resource-allocation-economic-systems-and-the-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-opportunity-cost-the-ppf-specialisation-and-trade-revision-notes.md", "ocr-a-level-economics-resource-allocation-economic-systems-and-the-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-a-level-economics-opportunity-cost-the-ppf-specialisation-and-trade.md", "ocr-a-level-economics-resource-allocation-economic-systems-and-the.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-gcse-economics-distribution-of-income-and-wealth-inflation-and-price-practice.md", "ocr-gcse-economics-economic-growth-gdp-and-unemployment-practice.md", "ocr-gcse-economics-fiscal-policy-government-budgets-and-monetary-policy-practice.md", "ocr-gcse-economics-supply-side-policies-and-the-limitations-of-markets-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-gcse-economics-distribution-of-income-and-wealth-inflation-and-price-revision-notes.md", "ocr-gcse-economics-economic-growth-gdp-and-unemployment-revision-notes.md", "ocr-gcse-economics-fiscal-policy-government-budgets-and-monetary-policy-revision-notes.md", "ocr-gcse-economics-supply-side-policies-and-the-limitations-of-markets-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-gcse-economics-distribution-of-income-and-wealth-inflation-and-price.md", "ocr-gcse-economics-economic-growth-gdp-and-unemployment.md", "ocr-gcse-economics-fiscal-policy-government-budgets-and-monetary-policy.md", "ocr-gcse-economics-supply-side-policies-and-the-limitations-of-markets.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-gcse-economics-exchange-rates-globalisation-and-measuring-development-practice.md", "ocr-gcse-economics-why-countries-trade-free-trade-agreements-and-the-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-gcse-economics-exchange-rates-globalisation-and-measuring-development-revision-notes.md", "ocr-gcse-economics-why-countries-trade-free-trade-agreements-and-the-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["ocr-gcse-economics-exchange-rates-globalisation-and-measuring-development.md", "ocr-gcse-economics-why-countries-trade-free-trade-agreements-and-the.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-aggregate-demand-and-activity-short-run-and-long-run-practice.md", "oxfordaqa-a-level-economics-the-circular-flow-and-aggregate-demand-and-supply-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-aggregate-demand-and-activity-short-run-and-long-run-revision-notes.md", "oxfordaqa-a-level-economics-the-circular-flow-and-aggregate-demand-and-supply-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-aggregate-demand-and-activity-short-run-and-long-run.md", "oxfordaqa-a-level-economics-the-circular-flow-and-aggregate-demand-and-supply.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-competition-policy-public-ownership-privatisation-and-practice.md", "oxfordaqa-a-level-economics-competitive-dynamics-efficiency-and-consumer-and-practice.md", "oxfordaqa-a-level-economics-market-structures-perfect-competition-and-monopolistic-practice.md", "oxfordaqa-a-level-economics-monopoly-power-price-discrimination-and-contestable-practice.md", "oxfordaqa-a-level-economics-oligopoly-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-competition-policy-public-ownership-privatisation-and-revision-notes.md", "oxfordaqa-a-level-economics-competitive-dynamics-efficiency-and-consumer-and-revision-notes.md", "oxfordaqa-a-level-economics-market-structures-perfect-competition-and-monopolistic-revision-notes.md", "oxfordaqa-a-level-economics-monopoly-power-price-discrimination-and-contestable-revision-notes.md", "oxfordaqa-a-level-economics-oligopoly-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-competition-policy-public-ownership-privatisation-and.md", "oxfordaqa-a-level-economics-competitive-dynamics-efficiency-and-consumer-and.md", "oxfordaqa-a-level-economics-market-structures-perfect-competition-and-monopolistic.md", "oxfordaqa-a-level-economics-monopoly-power-price-discrimination-and-contestable.md", "oxfordaqa-a-level-economics-oligopoly.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-costs-of-production-economies-of-scale-revenue-and-practice.md", "oxfordaqa-a-level-economics-production-productivity-specialisation-and-exchange-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-costs-of-production-economies-of-scale-revenue-and-revision-notes.md", "oxfordaqa-a-level-economics-production-productivity-specialisation-and-exchange-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-costs-of-production-economies-of-scale-revenue-and.md", "oxfordaqa-a-level-economics-production-productivity-specialisation-and-exchange.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-demand-and-the-elasticities-of-demand-practice.md", "oxfordaqa-a-level-economics-price-determination-linked-markets-and-the-allocation-practice.md", "oxfordaqa-a-level-economics-supply-and-price-elasticity-of-supply-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-demand-and-the-elasticities-of-demand-revision-notes.md", "oxfordaqa-a-level-economics-price-determination-linked-markets-and-the-allocation-revision-notes.md", "oxfordaqa-a-level-economics-supply-and-price-elasticity-of-supply-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-demand-and-the-elasticities-of-demand.md", "oxfordaqa-a-level-economics-price-determination-linked-markets-and-the-allocation.md", "oxfordaqa-a-level-economics-supply-and-price-elasticity-of-supply.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-demand-for-and-supply-of-labour-practice.md", "oxfordaqa-a-level-economics-labour-market-discrimination-and-minimum-wage-laws-practice.md", "oxfordaqa-a-level-economics-wage-determination-in-perfect-and-imperfect-labour-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-demand-for-and-supply-of-labour-revision-notes.md", "oxfordaqa-a-level-economics-labour-market-discrimination-and-minimum-wage-laws-revision-notes.md", "oxfordaqa-a-level-economics-wage-determination-in-perfect-and-imperfect-labour-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-demand-for-and-supply-of-labour.md", "oxfordaqa-a-level-economics-labour-market-discrimination-and-minimum-wage-laws.md", "oxfordaqa-a-level-economics-wage-determination-in-perfect-and-imperfect-labour.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-diminishing-returns-returns-to-scale-short-run-and-practice.md", "oxfordaqa-a-level-economics-revenue-curves-profit-and-technological-change-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-diminishing-returns-returns-to-scale-short-run-and-revision-notes.md", "oxfordaqa-a-level-economics-revenue-curves-profit-and-technological-change-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-diminishing-returns-returns-to-scale-short-run-and.md", "oxfordaqa-a-level-economics-revenue-curves-profit-and-technological-change.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-economic-growth-and-the-economic-cycle-practice.md", "oxfordaqa-a-level-economics-employment-unemployment-inflation-and-deflation-practice.md", "oxfordaqa-a-level-economics-the-current-account-of-the-balance-of-payments-and-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-economic-growth-and-the-economic-cycle-revision-notes.md", "oxfordaqa-a-level-economics-employment-unemployment-inflation-and-deflation-revision-notes.md", "oxfordaqa-a-level-economics-the-current-account-of-the-balance-of-payments-and-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-economic-growth-and-the-economic-cycle.md", "oxfordaqa-a-level-economics-employment-unemployment-inflation-and-deflation.md", "oxfordaqa-a-level-economics-the-current-account-of-the-balance-of-payments-and.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-exchange-rates-practice.md", "oxfordaqa-a-level-economics-financial-markets-practice.md", "oxfordaqa-a-level-economics-the-balance-of-payments-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-exchange-rates-revision-notes.md", "oxfordaqa-a-level-economics-financial-markets-revision-notes.md", "oxfordaqa-a-level-economics-the-balance-of-payments-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-exchange-rates.md", "oxfordaqa-a-level-economics-financial-markets.md", "oxfordaqa-a-level-economics-the-balance-of-payments.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-factors-that-affect-economic-development-practice.md", "oxfordaqa-a-level-economics-measuring-economic-growth-development-and-living-practice.md", "oxfordaqa-a-level-economics-policies-to-promote-development-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-factors-that-affect-economic-development-revision-notes.md", "oxfordaqa-a-level-economics-measuring-economic-growth-development-and-living-revision-notes.md", "oxfordaqa-a-level-economics-policies-to-promote-development-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-factors-that-affect-economic-development.md", "oxfordaqa-a-level-economics-measuring-economic-growth-development-and-living.md", "oxfordaqa-a-level-economics-policies-to-promote-development.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-fiscal-policy-practice.md", "oxfordaqa-a-level-economics-monetary-policy-practice.md", "oxfordaqa-a-level-economics-supply-side-policies-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-fiscal-policy-revision-notes.md", "oxfordaqa-a-level-economics-monetary-policy-revision-notes.md", "oxfordaqa-a-level-economics-supply-side-policies-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-fiscal-policy.md", "oxfordaqa-a-level-economics-monetary-policy.md", "oxfordaqa-a-level-economics-supply-side-policies.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-globalisation-practice.md", "oxfordaqa-a-level-economics-international-trade-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-globalisation-revision-notes.md", "oxfordaqa-a-level-economics-international-trade-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-globalisation.md", "oxfordaqa-a-level-economics-international-trade.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-government-intervention-in-markets-and-government-practice.md", "oxfordaqa-a-level-economics-market-failure-public-goods-and-externalities-practice.md", "oxfordaqa-a-level-economics-merit-and-demerit-goods-market-imperfections-and-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-government-intervention-in-markets-and-government-revision-notes.md", "oxfordaqa-a-level-economics-market-failure-public-goods-and-externalities-revision-notes.md", "oxfordaqa-a-level-economics-merit-and-demerit-goods-market-imperfections-and-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-government-intervention-in-markets-and-government.md", "oxfordaqa-a-level-economics-market-failure-public-goods-and-externalities.md", "oxfordaqa-a-level-economics-merit-and-demerit-goods-market-imperfections-and.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-market-structures-firms-objectives-and-competitive-practice.md", "oxfordaqa-a-level-economics-monopoly-monopoly-power-and-the-competitive-market-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-market-structures-firms-objectives-and-competitive-revision-notes.md", "oxfordaqa-a-level-economics-monopoly-monopoly-power-and-the-competitive-market-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-market-structures-firms-objectives-and-competitive.md", "oxfordaqa-a-level-economics-monopoly-monopoly-power-and-the-competitive-market.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-objectives-and-growth-of-firms-practice.md", "oxfordaqa-a-level-economics-the-rational-and-behavioural-individual-decision-maker-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-objectives-and-growth-of-firms-revision-notes.md", "oxfordaqa-a-level-economics-the-rational-and-behavioural-individual-decision-maker-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-a-level-economics-objectives-and-growth-of-firms.md", "oxfordaqa-a-level-economics-the-rational-and-behavioural-individual-decision-maker.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-demand-supply-and-equilibrium-price-practice.md", "oxfordaqa-igcse-economics-related-markets-and-price-elasticity-of-demand-and-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-demand-supply-and-equilibrium-price-revision-notes.md", "oxfordaqa-igcse-economics-related-markets-and-price-elasticity-of-demand-and-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-demand-supply-and-equilibrium-price.md", "oxfordaqa-igcse-economics-related-markets-and-price-elasticity-of-demand-and.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-fiscal-and-monetary-policy-practice.md", "oxfordaqa-igcse-economics-supply-side-policies-and-correcting-externalities-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-fiscal-and-monetary-policy-revision-notes.md", "oxfordaqa-igcse-economics-supply-side-policies-and-correcting-externalities-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-fiscal-and-monetary-policy.md", "oxfordaqa-igcse-economics-supply-side-policies-and-correcting-externalities.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-globalisation-benefits-drawbacks-and-ethical-issues-practice.md", "oxfordaqa-igcse-economics-why-countries-trade-free-trade-and-exchange-rates-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-globalisation-benefits-drawbacks-and-ethical-issues-revision-notes.md", "oxfordaqa-igcse-economics-why-countries-trade-free-trade-and-exchange-rates-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-globalisation-benefits-drawbacks-and-ethical-issues.md", "oxfordaqa-igcse-economics-why-countries-trade-free-trade-and-exchange-rates.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-market-structures-competitive-and-non-competitive-practice.md", "oxfordaqa-igcse-economics-the-labour-market-and-wage-determination-practice.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), practice sets, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-market-structures-competitive-and-non-competitive-revision-notes.md", "oxfordaqa-igcse-economics-the-labour-market-and-wage-determination-revision-notes.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), revision notes, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: ["oxfordaqa-igcse-economics-market-structures-competitive-and-non-competitive.md", "oxfordaqa-igcse-economics-the-labour-market-and-wage-determination.md"],
    evidence:
      "Sibling new units from the economics gap sprint (19 Oct 2026), study guides, tagged to the same board subtopic or topic because the map does not split it finer. Each unit teaches different numbered specification statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-422.",
  },
  {
    files: [
      "cambridge-o-level-economics-fiscal-policy-measures-and-their-effects.md",
      "cambridge-o-level-economics-government-budget-spending-and-taxation.md",
    ],
    evidence: "Sibling new units from the O Level Economics topics 4-6 sprint (19 Oct 2026), tagged to the same subtopic because the 2026 syllabus keeps them in one section (fiscal policy (4.3): budget, spending and taxation (4.3.1-4.3.6) versus fiscal policy measures and effects (4.3.7-4.3.9)). Each unit teaches different numbered syllabus statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-424.",
  },
  {
    files: [
      "cambridge-o-level-economics-fiscal-policy-measures-and-their-effects-revision-notes.md",
      "cambridge-o-level-economics-government-budget-spending-and-taxation-revision-notes.md",
    ],
    evidence: "Sibling new units from the O Level Economics topics 4-6 sprint (19 Oct 2026), tagged to the same subtopic because the 2026 syllabus keeps them in one section (fiscal policy (4.3): budget, spending and taxation (4.3.1-4.3.6) versus fiscal policy measures and effects (4.3.7-4.3.9)). Each unit teaches different numbered syllabus statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-424.",
  },
  {
    files: [
      "cambridge-o-level-economics-fiscal-policy-measures-and-their-effects-practice.md",
      "cambridge-o-level-economics-government-budget-spending-and-taxation-practice.md",
    ],
    evidence: "Sibling new units from the O Level Economics topics 4-6 sprint (19 Oct 2026), tagged to the same subtopic because the 2026 syllabus keeps them in one section (fiscal policy (4.3): budget, spending and taxation (4.3.1-4.3.6) versus fiscal policy measures and effects (4.3.7-4.3.9)). Each unit teaches different numbered syllabus statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-424.",
  },
  {
    files: [
      "cambridge-o-level-economics-globalisation-multinational-companies-and-free-trade.md",
      "cambridge-o-level-economics-methods-reasons-and-consequences-of-protection.md",
    ],
    evidence: "Sibling new units from the O Level Economics topics 4-6 sprint (19 Oct 2026), tagged to the same subtopic because the 2026 syllabus keeps them in one section (globalisation, free trade and protection (6.2): globalisation, multinational companies and free trade (6.2.1-6.2.3) versus methods, reasons and consequences of protection (6.2.4-6.2.6)). Each unit teaches different numbered syllabus statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-424.",
  },
  {
    files: [
      "cambridge-o-level-economics-globalisation-multinational-companies-and-free-trade-revision-notes.md",
      "cambridge-o-level-economics-methods-reasons-and-consequences-of-protection-revision-notes.md",
    ],
    evidence: "Sibling new units from the O Level Economics topics 4-6 sprint (19 Oct 2026), tagged to the same subtopic because the 2026 syllabus keeps them in one section (globalisation, free trade and protection (6.2): globalisation, multinational companies and free trade (6.2.1-6.2.3) versus methods, reasons and consequences of protection (6.2.4-6.2.6)). Each unit teaches different numbered syllabus statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-424.",
  },
  {
    files: [
      "cambridge-o-level-economics-globalisation-multinational-companies-and-free-trade-practice.md",
      "cambridge-o-level-economics-methods-reasons-and-consequences-of-protection-practice.md",
    ],
    evidence: "Sibling new units from the O Level Economics topics 4-6 sprint (19 Oct 2026), tagged to the same subtopic because the 2026 syllabus keeps them in one section (globalisation, free trade and protection (6.2): globalisation, multinational companies and free trade (6.2.1-6.2.3) versus methods, reasons and consequences of protection (6.2.4-6.2.6)). Each unit teaches different numbered syllabus statements, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-424.",
  },
  {
    files: ["aqa-a-level-economics-aggregate-demand-and-economic-activity-short-run-and-practice.md", "aqa-a-level-economics-circular-flow-ad-and-as-analysis-and-determinants-of-practice.md"],
    evidence:
      "Sibling new units from the economics small-gaps sprint (19 Oct 2026), tagged to the same AQA subtopic because the map does not split 3.2.2 finer. One unit teaches 3.2.2.1 to 3.2.2.3 (circular flow, AD and AS analysis, determinants of AD) and the other 3.2.2.4 to 3.2.2.6 (multiplier and related content). Each teaches different numbered specification statements with its own worked figures, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-425.",
  },
  {
    files: ["aqa-a-level-economics-aggregate-demand-and-economic-activity-short-run-and-revision-notes.md", "aqa-a-level-economics-circular-flow-ad-and-as-analysis-and-determinants-of-revision-notes.md"],
    evidence:
      "Sibling new units from the economics small-gaps sprint (19 Oct 2026), tagged to the same AQA subtopic because the map does not split 3.2.2 finer. One unit teaches 3.2.2.1 to 3.2.2.3 (circular flow, AD and AS analysis, determinants of AD) and the other 3.2.2.4 to 3.2.2.6 (multiplier and related content). Each teaches different numbered specification statements with its own worked figures, and the independent verifier scans found no 10-word overlap beyond shared page boilerplate. D-425.",
  },
  {
    files: ["aqa-a-level-economics-commercial-and-investment-banks-credit-creation-and-practice.md", "aqa-a-level-economics-financial-markets-financial-assets-money-and-bonds-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["aqa-a-level-economics-commercial-and-investment-banks-credit-creation-and-revision-notes.md", "aqa-a-level-economics-financial-markets-financial-assets-money-and-bonds-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["aqa-a-level-economics-commercial-and-investment-banks-credit-creation-and.md", "aqa-a-level-economics-financial-markets-financial-assets-money-and-bonds.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["aqa-a-level-economics-comparative-advantage-and-the-costs-and-benefits-of-practice.md", "aqa-a-level-economics-economic-growth-and-development-practice.md", "aqa-a-level-economics-exchange-rate-systems-and-currency-unions-practice.md", "aqa-a-level-economics-globalisation-and-multinational-corporations-practice.md", "aqa-a-level-economics-protectionism-trading-blocs-and-the-wto-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["aqa-a-level-economics-comparative-advantage-and-the-costs-and-benefits-of-revision-notes.md", "aqa-a-level-economics-economic-growth-and-development-revision-notes.md", "aqa-a-level-economics-exchange-rate-systems-and-currency-unions-revision-notes.md", "aqa-a-level-economics-globalisation-and-multinational-corporations-revision-notes.md", "aqa-a-level-economics-protectionism-trading-blocs-and-the-wto-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["aqa-a-level-economics-comparative-advantage-and-the-costs-and-benefits-of.md", "aqa-a-level-economics-economic-growth-and-development.md", "aqa-a-level-economics-exchange-rate-systems-and-currency-unions.md", "aqa-a-level-economics-globalisation-and-multinational-corporations.md", "aqa-a-level-economics-protectionism-trading-blocs-and-the-wto.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["aqa-a-level-economics-dynamic-competition-creative-destruction-and-practice.md", "aqa-a-level-economics-market-structures-and-the-objectives-of-firms-practice.md", "aqa-a-level-economics-monopoly-monopoly-power-and-price-discrimination-practice.md", "aqa-a-level-economics-oligopoly-interdependence-collusion-and-the-kinked-practice.md", "aqa-a-level-economics-perfect-competition-and-monopolistic-competition-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["aqa-a-level-economics-dynamic-competition-creative-destruction-and-revision-notes.md", "aqa-a-level-economics-market-structures-and-the-objectives-of-firms-revision-notes.md", "aqa-a-level-economics-monopoly-monopoly-power-and-price-discrimination-revision-notes.md", "aqa-a-level-economics-oligopoly-interdependence-collusion-and-the-kinked-revision-notes.md", "aqa-a-level-economics-perfect-competition-and-monopolistic-competition-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["aqa-a-level-economics-dynamic-competition-creative-destruction-and.md", "aqa-a-level-economics-market-structures-and-the-objectives-of-firms.md", "aqa-a-level-economics-monopoly-monopoly-power-and-price-discrimination.md", "aqa-a-level-economics-oligopoly-interdependence-collusion-and-the-kinked.md", "aqa-a-level-economics-perfect-competition-and-monopolistic-competition.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-demand-supply-and-consumer-and-producer-surplus-practice.md", "ocr-a-level-economics-market-equilibrium-price-volatility-and-evaluating-the-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-demand-supply-and-consumer-and-producer-surplus-revision-notes.md", "ocr-a-level-economics-market-equilibrium-price-volatility-and-evaluating-the-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-demand-supply-and-consumer-and-producer-surplus.md", "ocr-a-level-economics-market-equilibrium-price-volatility-and-evaluating-the.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-economic-development-alternative-measures-and-practice.md", "ocr-a-level-economics-income-and-wealth-distribution-poverty-and-uk-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["ocr-a-level-economics-economic-development-alternative-measures-and-revision-notes.md", "ocr-a-level-economics-income-and-wealth-distribution-poverty-and-uk-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["ocr-a-level-economics-economic-development-alternative-measures-and.md", "ocr-a-level-economics-income-and-wealth-distribution-poverty-and-uk.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["ocr-a-level-economics-economic-integration-the-eu-and-the-wto-practice.md", "ocr-a-level-economics-globalisation-and-multinational-firms-practice.md", "ocr-a-level-economics-protectionism-and-the-case-for-free-trade-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["ocr-a-level-economics-economic-integration-the-eu-and-the-wto-revision-notes.md", "ocr-a-level-economics-globalisation-and-multinational-firms-revision-notes.md", "ocr-a-level-economics-protectionism-and-the-case-for-free-trade-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["ocr-a-level-economics-economic-integration-the-eu-and-the-wto.md", "ocr-a-level-economics-globalisation-and-multinational-firms.md", "ocr-a-level-economics-protectionism-and-the-case-for-free-trade.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer.",
  },
  {
    files: ["ocr-a-level-economics-exchange-rate-determination-measures-and-systems-practice.md", "ocr-a-level-economics-purchasing-power-parity-the-marshall-lerner-condition-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-exchange-rate-determination-measures-and-systems-revision-notes.md", "ocr-a-level-economics-purchasing-power-parity-the-marshall-lerner-condition-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-exchange-rate-determination-measures-and-systems.md", "ocr-a-level-economics-purchasing-power-parity-the-marshall-lerner-condition.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation-practice.md", "ocr-a-level-economics-fiscal-policy-2-deficits-debt-stabilisers-and-fiscal-practice.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation-revision-notes.md", "ocr-a-level-economics-fiscal-policy-2-deficits-debt-stabilisers-and-fiscal-revision-notes.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
  {
    files: ["ocr-a-level-economics-fiscal-policy-1-the-budget-and-taxation.md", "ocr-a-level-economics-fiscal-policy-2-deficits-debt-stabilisers-and-fiscal.md"],
    evidence:
      "Sub-group of an already-reviewed set of sibling economics units. Tagging AS Level Economics (AQA 7135 and OCR H060) onto some of the A-level units split the earlier group, so this remainder is listed again with the same reviewed finding: each unit teaches different numbered specification statements with its own worked figures, and the units share a tag only because the syllabus map does not split the subtopic finer. These files carry both A-level and AS Level tags.",
  },
];
const legitimateKeyOf = (fs) => [...fs].sort().join('|');
const REVIEWED_KEYS = new Map(
  REVIEWED_LEGITIMATE.map((entry) => [legitimateKeyOf(entry.files), entry.evidence])
);

const field = (fm, name) => {
  const m = fm.match(new RegExp(`${name}:\\s*"([^"]*)"`));
  return m ? m[1] : '';
};

const arrayField = (fm, name) => {
  const m = fm.match(new RegExp(`${name}:\\s*\\[([^\\]]*)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]).sort();
};

const syllabusTopicsOf = (fm) => {
  const block = fm.match(/^syllabusTopics:\s*\n((?:  - .*\n(?:    .*\n)*)*)/m);
  if (!block) return [];
  const pairs = [];
  for (const entry of block[1].split(/\n(?=  - )/)) {
    const t = entry.match(/topic:\s*"([^"]*)"/);
    const st = entry.match(/subtopic:\s*"([^"]*)"/);
    pairs.push(`${t ? t[1] : ''}::${st ? st[1] : ''}`);
  }
  return pairs.sort();
};

const files = (await readdir(RES_DIR)).filter((f) => f.endsWith('.md'));

const groups = new Map();
for (const fname of files) {
  const text = await readFile(join(RES_DIR, fname), 'utf8');
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];

  const subject = field(fm, 'subject');
  const boards = arrayField(fm, 'boards');
  const quals = arrayField(fm, 'qualifications');
  const stage = field(fm, 'stage');
  const resourceType = field(fm, 'resourceType');
  const topics = syllabusTopicsOf(fm);

  if (topics.length === 0) continue; // nothing to compare -- can't claim scope overlap

  const sig = JSON.stringify({ subject, boards, quals, stage, resourceType, topics });
  if (!groups.has(sig)) groups.set(sig, []);
  groups.get(sig).push(fname);
}

const dupeGroups = [...groups.entries()].filter(([, fs]) => fs.length > 1);

const onlyIdx = process.argv.indexOf('--only-involving');
const isOnlyMode = onlyIdx !== -1 && !!process.argv[onlyIdx + 1];
let filtered = dupeGroups;
if (isOnlyMode) {
  const wanted = new Set(process.argv[onlyIdx + 1].split(',').map((s) => `${s.trim()}.md`));
  filtered = dupeGroups.filter(([, fs]) => fs.some((f) => wanted.has(f)));
}

if (filtered.length === 0) {
  console.log(
    isOnlyMode
      ? 'No existing resource shares an official syllabus scope with the file(s) checked. Safe to proceed, pending your own read of the content.'
      : `No resource pairs share an identical official syllabus scope, across ${files.length} resource file(s).`
  );
  process.exit(0);
}

const unreviewed = [];
const reviewed = [];
for (const [sig, fs] of filtered) {
  const key = legitimateKeyOf(fs);
  if (REVIEWED_KEYS.has(key)) {
    reviewed.push([sig, fs, REVIEWED_KEYS.get(key)]);
  } else {
    unreviewed.push([sig, fs]);
  }
}

if (reviewed.length > 0) {
  console.log(`${reviewed.length} group(s) share an official syllabus scope but are reviewed and allow-listed as genuinely different content:\n`);
  for (const [sig, fs, evidence] of reviewed) {
    const { subject, boards, quals, stage, resourceType } = JSON.parse(sig);
    console.log(`[${subject} | ${boards.join('+')} | ${quals.join('+')} | stage=${stage || '(none)'} | ${resourceType}]`);
    for (const f of fs) console.log(`   - ${f}`);
    console.log(`   Evidence: ${evidence}`);
    console.log('');
  }
}

if (unreviewed.length === 0) {
  console.log(isOnlyMode ? 'File(s) checked only collide with already-reviewed, allow-listed group(s). Safe to proceed.' : 'PASS: every group sharing an identical official syllabus scope is reviewed and allow-listed above.');
  process.exit(0);
}

console.log(`${isOnlyMode ? 'WARNING' : 'FAIL'}: ${unreviewed.length} group(s) share an identical official syllabus scope and are NOT yet reviewed:\n`);
for (const [sig, fs] of unreviewed) {
  const { subject, boards, quals, stage, resourceType } = JSON.parse(sig);
  console.log(`[${subject} | ${boards.join('+')} | ${quals.join('+')} | stage=${stage || '(none)'} | ${resourceType}]`);
  for (const f of fs) console.log(`   - ${f}`);
  console.log('');
}
console.log('Read both files before deciding. Then either:');
console.log('  (a) add an entry to REVIEWED_LEGITIMATE in this script with the specific');
console.log('      evidence that distinguishes the content (not just "the tag is coarse"), or');
console.log('  (b) merge the duplicate and add a redirect (CONSOLIDATED_RESOURCES in');
console.log('      scripts/generate-redirects.mjs), retiring the weaker file.');
console.log('Record the decision in docs/decision-log.md either way.');

// --only-involving is informational for the weekly automation, which
// cannot itself edit REVIEWED_LEGITIMATE -- never fail that invocation.
// Every other invocation (CI, validate:academic, a human running it
// directly) is a real gate: a brand-new unreviewed group fails the build.
process.exit(isOnlyMode ? 0 : 1);
