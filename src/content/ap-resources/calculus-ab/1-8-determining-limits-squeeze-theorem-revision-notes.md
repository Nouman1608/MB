---
resourceId: "mb-ap-calcab-1.8-revision-notes"
title: "Determining Limits Using the Squeeze Theorem: Revision Notes (Calculus AB 1.8)"
description: "One-page recap of the squeeze theorem: its three conditions, how to build bounds from sine and cosine, the two key trig limits and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.8"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.8-study-guide"]
learningObjectives:
  - "Recall the squeeze theorem and the three conditions to check"
  - "Recall the two key trig limits and when they apply"
  - "Spot the common errors in squeeze arguments before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.8-study-guide", "mb-ap-calcab-1.8-practice", "mb-ap-calcab-1.8-checklist"]
next: "mb-ap-calcab-1.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Trap f between g and h near a. If g and h have the same limit L at a, so does f."
  - "sin x / x → 1 and (1 − cos x)/x → 0 as x → 0, in radians."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the proofs, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)". |x| is the absolute value of x. Angles are in radians.

## Recap

- Use the squeeze theorem when the limit laws fail, usually because one factor (such as sin(1/x)) has no limit.
- **Theorem.** If g(x) ≤ f(x) ≤ h(x) for all x in an open interval around a (except possibly at a), and g and h both tend to L, then f tends to L.
- **Three conditions to show:** the inequality; that it holds on both sides of a, close to a; equal outer limits.
- If the outer limits differ, the theorem gives **no conclusion**. It does not prove the limit fails to exist.
- The theorem gives the limit, never the value f(a).

## Key relationships

| Idea | Statement | Use |
|---|---|---|
| Starting bound | −1 ≤ sin u ≤ 1, −1 ≤ cos u ≤ 1 for any u | Build bounds for sin(1/x), cos(4/x) and so on |
| Never-negative factor | Multiply by x², x⁴ or \|x\|: signs stay | −x² ≤ x² sin(1/x) ≤ x² |
| Factor that can be negative | \|x cos u\| ≤ \|x\| gives −\|x\| ≤ x cos u ≤ \|x\| | Valid on both sides of 0 |
| Key limit 1 | lim (x → 0) (sin x)/x = 1 | From cos x ≤ (sin x)/x ≤ 1 near 0 |
| Key limit 2 | lim (x → 0) (1 − cos x)/x = 0 | From −\|x\|/2 ≤ (1 − cos x)/x ≤ \|x\|/2 |
| Matching form | (sin kx)/x = k × (sin kx)/(kx) → k | Angle and denominator must match |

## Assumptions behind the method

- The inequality must hold for **every** x near a, on **both** sides, not just at a few points.
- Both outer limits must exist and be equal.
- The trig results need radians. In degrees, (sin x)/x → π/180 instead of 1.

## Mistakes to avoid

1. **Using the product law** when one factor has no limit.
2. **Writing −x ≤ x cos u ≤ x.** That is wrong for x < 0. Use |x|.
3. **"Different bounds, so the limit does not exist."** No conclusion is the correct conclusion.
4. **Claiming f(a) from the squeeze.** Only the limit follows.
5. **"(sin 5x)/x → 1".** Match the angle: the limit is 5.
6. **Not naming the theorem.** Write "by the squeeze theorem" and show both outer limits.

## Quick self-check

1. Find lim (x → 0) x² cos(7/x). *(0: −x² ≤ x² cos(7/x) ≤ x², and both bounds tend to 0)*
2. Find lim (x → 0) (sin 6x)/(2x). *(3: write 3 × (sin 6x)/(6x))*
3. For x ≠ 1 near 1, 1 − (x − 1)² ≤ f(x) ≤ 1 + 2|x − 1|. What is lim (x → 1) f(x)? *(1: both bounds tend to 1)*
4. Find lim (x → 0) (1 − cos x)/(4x). *(0: it is (1/4) × (1 − cos x)/x)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-practice/).
