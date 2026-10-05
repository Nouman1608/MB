---
resourceId: "mb-ap-calcab-1.4-revision-notes"
title: "Estimating Limit Values from Tables: Revision Notes (Calculus AB 1.4)"
description: "One-page recap of estimating limits from tables: reading both sides, one-sided limits, patterns that mean no limit, precision and the traps that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.4-study-guide"]
learningObjectives:
  - "Recall the steps for estimating a limit from a table"
  - "Recognise the table patterns that suggest a limit does not exist"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
related: ["mb-ap-calcab-1.4-study-guide", "mb-ap-calcab-1.4-practice", "mb-ap-calcab-1.4-checklist"]
next: "mb-ap-calcab-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Read both sides towards c; ignore f(c); compare the two trends."
  - "A table suggests a limit. It never proves one."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** is the limit as x approaches a; **x → a⁻** means from the left (x < a); **x → a⁺** means from the right (x > a).

## Recap

- A table gives **numerical** evidence about a limit, just as a graph gives visual evidence.
- Read the rows with x < c moving towards c: that estimates the **left-hand limit**.
- Read the rows with x > c moving towards c: that estimates the **right-hand limit**.
- If both sides approach the same number L, estimate the limit as L. If they differ, the two-sided limit does not exist.
- **Ignore f(c)** even if the table shows it.
- Round your estimate to the decimal places on which the closest values from both sides agree.

## Key relationships

| What you see in the table | Conclusion |
|---|---|
| Both sides approach the same number L | lim (x → c) f(x) ≈ L |
| Left approaches L₁, right approaches L₂, with L₁ ≠ L₂ | One-sided limits differ; the limit does not exist |
| Values grow without bound (100, 10 000, 1 000 000, …) | Unbounded; no finite limit (you may write = ∞ or = −∞ when both sides share one sign) |
| Values keep jumping between numbers however close x is | Oscillation; the limit does not exist |
| f(c) differs from the trend | Irrelevant to the limit; the limit follows the trend |

Good x values: c ± 0.1, c ± 0.01, c ± 0.001, then c ± 0.0001 if you need more precision.

## Assumptions behind the method

- The pattern you see continues for every x between your sampled values and c. A table cannot guarantee this.
- The calculator values are accurate. Extremely close x values (such as c + 10⁻¹⁵) can give rounding nonsense.
- Trig work is done in radians.

## Mistakes to avoid

1. **Taking the closest table value as the exact limit** (for example, answering 9.8821 instead of about 9.9).
2. **Using f(c)** from the table as the limit.
3. **Averaging** two different one-sided values.
4. **Reading one side only** for a two-sided limit.
5. **Calling huge values "the limit"** when they keep growing.
6. **Trusting a "perfect" pattern**: sin(π/x) at x = 0.1, 0.01, 0.001 gives 0 each time, yet the limit does not exist.

## Quick self-check

1. Left values 4.9, 4.99, 4.999; right values 5.1, 5.01, 5.001. Estimate the limit. *(5)*
2. The same table also shows f(c) = 8. Does that change your answer? *(No. The limit is still about 5.)*
3. Left values approach 3 and right values approach 1. What is the two-sided limit? *(It does not exist. It is not 2.)*
4. Closest values are 3.1372 (left) and 3.1461 (right). To how many decimal places can you trust an estimate? *(1: both round to 3.1, but to 2 decimal places they give 3.14 and 3.15.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-practice/).
