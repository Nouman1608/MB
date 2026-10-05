---
resourceId: "mb-ap-calcab-2.4-revision-notes"
title: "Connecting Differentiability and Continuity: Revision Notes (Calculus AB 2.4)"
description: "One-page recap of how differentiability and continuity are linked, the four ways a derivative fails to exist, and how to justify it with one-sided difference quotients."
course: "calculus-ab"
unit: 2
topics: ["2.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.4-study-guide"]
learningObjectives:
  - "Recall which way the implication between differentiability and continuity runs"
  - "Name and justify the ways a derivative can fail to exist"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.4-study-guide", "mb-ap-calcab-2.4-practice", "mb-ap-calcab-2.4-checklist"]
next: "mb-ap-calcab-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Differentiable ⇒ continuous. Not continuous ⇒ not differentiable. Continuous does not guarantee differentiable."
  - "Justify a missing derivative with one-sided limits of the difference quotient."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, Figure 1 and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **f′(a) = lim (h → 0) (f(a + h) − f(a))/h**; h → 0⁻ means from the left, h → 0⁺ from the right.

## Recap

- **f′(a) exists** only if both one-sided limits of the difference quotient exist, are finite and are equal.
- **Differentiable at a ⇒ continuous at a.** Reason: f(x) − f(a) = [difference quotient] × (x − a) → f′(a) × 0 = 0.
- **Contrapositive:** a hole, jump or asymptote at a means f′(a) does not exist.
- **Domain:** if f(a) is undefined, f′(a) is undefined, even if the graph "looks" like a line through the hole.
- **Converse is false:** a continuous function can have a corner, cusp or vertical tangent.

## Key relationships

| Feature at x = a | Continuous? | Difference quotient | f′(a)? |
|---|---|---|---|
| Smooth graph | Yes | One finite limit | Exists |
| Corner | Yes | Finite one-sided limits that differ | Does not exist |
| Cusp | Yes | −∞ on one side, +∞ on the other | Does not exist |
| Vertical tangent | Yes | Unbounded, same sign both sides | Does not exist |
| Hole, jump or asymptote | No | Not needed: use the theorem | Does not exist |

## Assumptions behind the method

- One-sided quotients must use **the actual f(a)**, from whichever piece includes a.
- For a piecewise function, check **continuity first**, then compare the one-sided limits.
- Absolute values only cause corners where the inside changes sign.

## Mistakes to avoid

1. **Reversing the theorem**: "continuous, so differentiable" or "not differentiable, so not continuous".
2. **Matching slopes but ignoring a jump** between the pieces.
3. **Writing f′(a) = ∞** for a vertical tangent. Say it does not exist.
4. **"It's sharp" with no limits.** Give the two one-sided values.
5. **Trusting a calculator's numerical derivative** at a corner; it averages the two sides.
6. **Assuming a formula with |x| has a corner.** Check: x|x| is differentiable at 0.

## Quick self-check

1. f′(5) exists. Must f be continuous at 5? *(Yes: differentiability implies continuity.)*
2. f is continuous at 0. Must f′(0) exist? *(No: for example, a corner.)*
3. Is |2x − 6| differentiable at x = 3? *(No: the one-sided limits of the quotient are −2 and 2.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-practice/).
