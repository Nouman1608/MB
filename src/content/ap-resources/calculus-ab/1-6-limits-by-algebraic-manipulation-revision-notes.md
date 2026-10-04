---
resourceId: "mb-ap-calcab-1.6-revision-notes"
title: "Determining Limits Using Algebraic Manipulation: Revision Notes (Calculus AB 1.6)"
description: "One-page recap of 0/0 limits: why cancelling is valid, the four rewriting techniques with their conditions, and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.6-study-guide"]
learningObjectives:
  - "Recall the four rewriting techniques and the condition for each"
  - "Spot the common errors in 0/0 limits before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.6-study-guide", "mb-ap-calcab-1.6-practice", "mb-ap-calcab-1.6-checklist"]
next: "mb-ap-calcab-1.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "0/0 is indeterminate: rewrite, then substitute again."
  - "Functions that agree near a (except at a) have the same limit at a."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)".

## Recap

- Try direct substitution first. If it gives a number with a nonzero denominator, you are done.
- **0/0 is an indeterminate form.** It does not tell you the limit. Rewrite the expression.
- **Nonzero/0** is not indeterminate: the expression is unbounded near a, so there is no finite limit. Check each side.
- Cancelling a factor (x − a) is valid **only for x ≠ a**. That is enough, because a limit never uses the value at a.
- Graphically, a cancelled factor shows up as a **hole**: the limit is the height of the hole.

## Key relationships

| Technique | Condition | Key step |
|---|---|---|
| Factor and cancel | Polynomial over polynomial, 0/0 at x = a | Both top and bottom contain (x − a) (factor theorem) |
| Conjugate | Square-root sum or difference gives 0/0 | (p − q)(p + q) = p² − q²; expand only the side with the root |
| Combine fractions | Fraction inside a fraction gives 0/0 | Common denominator; note a − x = −(x − a) |
| Trig identity | Trig expression gives 0/0 | sin²x = (1 − cos x)(1 + cos x); sin 2x = 2 sin x cos x |
| Key fact | f(x) = g(x) near a, x ≠ a | lim (x → a) f(x) = lim (x → a) g(x) |

Useful factorisations: x² − a² = (x − a)(x + a); x³ − a³ = (x − a)(x² + ax + a²).

## Assumptions behind the method

- The equivalent expression must agree with the original on an open interval around a (except at a).
- The factor you cancel must be nonzero for x ≠ a near a.
- After simplifying you still substitute, so the simplified expression must be one where substitution is allowed (defined at a).

## Mistakes to avoid

1. **Writing "0/0, so the limit is 0"** (or 1, or "does not exist").
2. **Cancelling terms, not factors.** Only whole factors cancel.
3. **Dropping "lim"** before you substitute.
4. **Expanding the denominator** after multiplying by a conjugate.
5. **Sign slips** when 3 − x appears: 3 − x = −(x − 3).
6. **Trying to cancel x in sin x / x.** That limit is a Topic 1.8 (squeeze theorem) result.

## Quick self-check

1. Find lim (x → 4) (x² − 16)/(x − 4). *(8)*
2. Find lim (h → 0) ((3 + h)² − 9)/h. *(6: the top is 6h + h², so the expression is 6 + h for h ≠ 0)*
3. Substitution gives 7/0. Can factoring rescue a finite limit? *(No. A nonzero number over 0 means the expression is unbounded near a.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-practice/).
