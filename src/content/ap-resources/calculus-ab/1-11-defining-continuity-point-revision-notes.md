---
resourceId: "mb-ap-calcab-1.11-revision-notes"
title: "Defining Continuity at a Point: Revision Notes (Calculus AB 1.11)"
description: "One-page recap of continuity at a point: the three conditions, what each failure looks like on a graph, a justification template and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.11"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.11-study-guide"]
learningObjectives:
  - "Recall the three conditions for continuity at a point and what each failure looks like"
  - "Write a short justification that quotes f(c) and the limit"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.11-study-guide", "mb-ap-calcab-1.11-practice", "mb-ap-calcab-1.11-checklist"]
next: "mb-ap-calcab-1.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Continuous at c means: f(c) exists, the limit at c exists, and they are equal."
  - "Name the first condition that fails, with values."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the four-panel figure and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → c) f(x)** means "the limit as x approaches c of f(x)"; c⁻ and c⁺ mean from the left and from the right.

## Recap

- f is **continuous at x = c** when (1) f(c) exists, (2) lim (x → c) f(x) exists, and (3) lim (x → c) f(x) = f(c).
- Check the conditions **in order** and stop at the first failure.
- The limit exists only if both one-sided limits exist, are finite and are equal.
- At a point where a piecewise function changes formula, find **both** one-sided limits, each with its own piece.
- A justification quotes **values**: f(c) = …, the limit = …, then the comparison.

## Key relationships

| Condition | What you show | If it fails, the graph has… |
|---|---|---|
| 1. f(c) exists | A number for f(c), from the right piece or the given value | A hole with no point (removable) or an asymptote |
| 2. lim (x → c) f(x) exists | lim (x → c⁻) f(x) = lim (x → c⁺) f(x), a finite number | A jump, a vertical asymptote or oscillation |
| 3. lim (x → c) f(x) = f(c) | The two numbers from 1 and 2 are equal | A hole with the point placed elsewhere (removable) |

## Assumptions behind the method

- Condition 3 compares two numbers, so it is checked only after conditions 1 and 2 hold.
- For f(c), use the piece whose inequality includes c (≤ or ≥), or the separately given value.
- To find the limit you may rewrite the formula (factor, conjugate) as in Topic 1.6, because a limit ignores the value at c.

## Mistakes to avoid

1. **"f(c) exists, so f is continuous."** All three conditions are needed.
2. **"The limit exists, so f is continuous."** The value at c must match.
3. **"0/0 in the formula means discontinuous."** If f(c) is given separately and matches the limit, f is continuous.
4. **Checking one side only** at a piecewise boundary.
5. **Using the wrong piece for f(c).** Read ≤ versus <.
6. **Treating ∞ as a limit that exists.** It fails condition 2.
7. **Justifying with "no break" and no numbers.**

## Quick self-check

1. f(x) = (x² − 25)/(x − 5) for x ≠ 5 and f(5) = 10. Is f continuous at 5? *(Yes: f(5) = 10, the limit is 10, and they are equal.)*
2. f(x) = 2x + 1 for x < 3 and f(x) = x² − 2 for x ≥ 3. Is f continuous at 3? *(Yes: f(3) = 7, both one-sided limits are 7.)*
3. lim (x → c) f(x) = 4 but f(c) is undefined. Which condition fails? *(Condition 1.)*
4. f(c) = 2, lim (x → c⁻) f(x) = 2 and lim (x → c⁺) f(x) = 5. Which condition fails? *(Condition 2: the limit does not exist.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-practice/).
