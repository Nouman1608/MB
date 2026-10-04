---
resourceId: "mb-ap-calcab-1.10-revision-notes"
title: "Exploring Types of Discontinuities: Revision Notes (Calculus AB 1.10)"
description: "One-page recap of removable, jump and vertical-asymptote discontinuities: the limit evidence for each type, a classification routine and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.10"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.10-study-guide"]
learningObjectives:
  - "Recall the limit evidence that defines each type of discontinuity"
  - "Spot the common errors in classifying discontinuities before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.10-study-guide", "mb-ap-calcab-1.10-practice", "mb-ap-calcab-1.10-checklist"]
next: "mb-ap-calcab-1.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Removable: limit exists, f(c) missing or different. Jump: finite one-sided limits that differ. Vertical asymptote: unbounded on at least one side."
  - "Justify the type with one-sided limits and f(c)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → c⁻) f(x)** is the left-hand limit and **lim (x → c⁺) f(x)** is the right-hand limit.

## Recap

- A graph is unbroken at x = c only if **f(c) exists**, **the limit at c exists**, and **the two are equal**. A discontinuity breaks at least one of these.
- The course names three types: **removable**, **jump** and **due to a vertical asymptote**.
- The type depends on the **one-sided limits**, not just on whether f(c) is defined.
- A zero denominator shows **where** to look. Factoring shows **which type** you have.

## Key relationships

| Type | Evidence at x = c | Graph |
|---|---|---|
| Removable | Left and right limits finite and equal (= L); f(c) undefined or f(c) ≠ L | Hole at (c, L) |
| Jump | Left and right limits finite but different | Step from one height to another |
| Vertical asymptote | f(x) → ∞ or −∞ on at least one side | Curve shoots up or down beside x = c |
| No discontinuity | Limit exists and equals f(c) | Unbroken |

Rational functions: a factor (x − c) that **cancels** gives a hole; a factor that **remains** in the denominator gives a vertical asymptote.

Absolute values: |x − c| = x − c for x > c and −(x − c) for x < c. This often produces a jump.

## Assumptions behind the method

- One-sided limits are found from the rule that applies on that side.
- A table of values suggests the type but does not justify it.
- An infinite limit means the limit does not exist as a number.

## Mistakes to avoid

1. **"f(c) is defined, so f is continuous at c."** Check the limit too.
2. **"Zero denominator, so vertical asymptote."** Factor and cancel first.
3. **Calling a jump removable.** If the one-sided limits differ, no single value can fix the break.
4. **Checking only one side** before naming the type.
5. **Misreading ≤ and <** when finding f(c) for a piecewise function.

## Quick self-check

1. Classify the discontinuity of (x² − 25)/(x − 5) at x = 5. *(Removable: the limit is 10 but the function is undefined at 5.)*
2. Classify the discontinuities of (x + 1)/(x² − 1). *(Removable at x = −1, where the limit is −1/2; vertical asymptote at x = 1.)*
3. lim (x → 2⁻) f(x) = 2, lim (x → 2⁺) f(x) = 6 and f(2) = 6. Type? *(Jump: finite one-sided limits that differ. f(2) matching one side does not help.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-practice/).
