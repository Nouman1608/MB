---
resourceId: "mb-ap-calcab-4.7-revision-notes"
title: "Using L'Hospital's Rule for Determining Limits of Indeterminate Forms: Revision Notes (Calculus AB 4.7)"
description: "One-page recap of L'Hospital's Rule: the 0/0 and ∞/∞ conditions, how to write the check, repeated use, and the mistakes that cost marks."
course: "calculus-ab"
unit: 4
topics: ["4.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.7-study-guide"]
learningObjectives:
  - "Recall the conditions for L'Hospital's Rule and the written check that goes with them"
  - "Spot the common errors in using the rule before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-4.7-study-guide", "mb-ap-calcab-4.7-practice", "mb-ap-calcab-4.7-checklist"]
next: "mb-ap-calcab-4.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Only for 0/0 or ∞/∞: check both limits first, and write the check."
  - "Use f′(x)/g′(x), not the quotient rule."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the tangent-line explanation, the graph and three worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)".

## Recap

- **0/0 and ∞/∞ are indeterminate forms.** They are labels for a type of limit, not values. Never write "= 0/0".
- **The rule:** if lim f(x) = 0 and lim g(x) = 0 (or both are infinite), then lim f(x)/g(x) = lim f′(x)/g′(x), as long as the new limit exists or is infinite.
- It works for x → a, for one-sided limits and for x → ±∞.
- **Why it works (0/0):** near a, each function is close to its tangent line, so the ratio of the functions is close to the ratio of the slopes.
- If the new limit is still 0/0 or ∞/∞, check again and apply the rule again.

## Key relationships

| Situation | What to do |
|---|---|
| Substitution gives a number with a nonzero bottom | Done. The rule is not needed (and gives wrong answers if used). |
| Both limits 0, or both infinite | Write the check, then use lim f′(x)/g′(x). |
| Nonzero over 0 | Not indeterminate: unbounded, no finite limit (Topic 1.14). |
| 0 over ∞ | Not indeterminate: the limit is 0. |
| Rule keeps returning the same problem | Use algebra instead, e.g. divide by the highest power. |
| Only f(a), g(a), f′(a), g′(a) given, derivatives continuous, g′(a) ≠ 0 | Limit = f′(a)/g′(a), if f(a) = g(a) = 0. |

**The written check (copy this shape):** "lim (x → a) f(x) = 0 and lim (x → a) g(x) = 0, so L'Hospital's Rule applies."

## Assumptions behind the rule

- f and g are differentiable near a (except possibly at a), and g′(x) ≠ 0 there.
- The new limit lim f′(x)/g′(x) exists or is infinite. If it does not exist, the rule gives no conclusion.
- Other forms (0 · ∞, ∞ − ∞, 1^∞ and so on) are not assessed on the exam.

## Mistakes to avoid

1. **Skipping the check**, or checking only the first time when the rule is used twice.
2. **Using the quotient rule** on f/g instead of differentiating top and bottom separately.
3. **Writing "lim f(x)/g(x) = 0/0"** as if it were a value.
4. **Forgetting the chain rule**, e.g. d/dx (sin 5x) = 5 cos 5x.
5. **Using the rule on a non-indeterminate limit** such as (x² + 3)/(x + 1) at 0.
6. **Dropping "lim"** before the substitution step.

## Quick self-check

1. Find lim (x → 0) (sin 4x)/x. *(4: the form is 0/0, and the rule gives 4 cos 4x/1 → 4)*
2. Find lim (x → ∞) x³/eˣ. *(0: ∞/∞ three times in a row, ending with 6/eˣ → 0)*
3. Can you use the rule on lim (x → 0⁺) (cos x)/x? *(No. The top tends to 1, not 0. This is 1/0, so the expression is unbounded: it tends to +∞.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-practice/).
