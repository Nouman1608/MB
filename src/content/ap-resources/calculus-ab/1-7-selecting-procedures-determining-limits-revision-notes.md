---
resourceId: "mb-ap-calcab-1.7-revision-notes"
title: "Selecting Procedures for Determining Limits: Revision Notes (Calculus AB 1.7)"
description: "One-page recap of how to choose a limit method: representation, split check, substitution outcomes, the form-to-tool table and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.7-study-guide"]
learningObjectives:
  - "Recall the order of checks for choosing a limit method"
  - "Match each substitution result and expression form to the right next step"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.7-study-guide", "mb-ap-calcab-1.7-practice", "mb-ap-calcab-1.7-checklist"]
next: "mb-ap-calcab-1.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Representation first, then split check, then substitute and read the result."
  - "Number: stop. Nonzero/0: check signs. 0/0: rewrite and substitute again."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the flowchart and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)"; x → a⁺ is from the right, x → a⁻ from the left.

## Recap: the routine

1. **What are you given?** Graph or table: estimate from each side. Formula: continue.
2. **Is there a split at a?** Piecewise rule or |x − a|: find each one-sided limit. The limit exists only if they are equal.
3. **Substitute** and read the result.
4. **If 0/0, read the form** and rewrite. Then substitute again.
5. **Composite?** Find the limit of the inside, then apply the outer function if it is continuous there.

## Key relationships

| Substitution gives | Meaning | Next step |
|---|---|---|
| A number, bottom not 0 | Substitution is valid | Stop: that is the limit |
| 0 over a nonzero number | The value is 0 | Stop: the limit is 0 |
| Nonzero ÷ 0 | Unbounded near a; no finite limit | Check the sign on each side |
| 0 ÷ 0 | Indeterminate | Rewrite using the form |

| Form giving 0/0 | Tool |
|---|---|
| Polynomial over polynomial | Factor and cancel (x − a) |
| Square root and a number | Multiply by the conjugate |
| Fraction inside a fraction | Combine over a common denominator |
| Trig expression | Use an identity |
| Bounded oscillating factor, e.g. cos(1/x) | Squeeze theorem (Topic 1.8) |

## Assumptions behind the method

- Substitution is valid only where the function is defined and well behaved at a (polynomials; rational functions with nonzero bottom; roots and trig inside their domains).
- The value f(a) never decides a limit.
- A table or graph gives an estimate; with a formula, use algebra for the exact value.

## Mistakes to avoid

1. **Factoring before substituting.** Substitute first; you may already be done.
2. **Treating 0/0 as 0 or as "does not exist".**
3. **Cancelling |x − a| as if it were (x − a).** Split into sides first.
4. **Writing ∞ after checking one side only.**
5. **Using f(a) for a piecewise function.**
6. **Giving up on a composite** because the inside is undefined at a.

## Quick self-check

1. Find lim (x → 4) (x² − 3x)/(x + 1). *(4/5, by substitution: the bottom is 5)*
2. Find lim (x → −1) (x + 1)/|x + 1|. *(Does not exist: 1 from the right, −1 from the left)*
3. Describe (x² + 3)/(x − 1) as x → 1. *(4/0, so no finite limit: +∞ from the right, −∞ from the left, so the limit does not exist)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-practice/).
