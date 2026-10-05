---
resourceId: "mb-ap-calcab-2.1-revision-notes"
title: "Defining Average and Instantaneous Rates of Change at a Point: Revision Notes (Calculus AB 2.1)"
description: "One-page recap of difference quotients, the limit definition of the derivative at a point, how to recognise a limit as f′(a), and the mistakes that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.1-study-guide"]
learningObjectives:
  - "Recall both difference-quotient forms and the definition of f′(a)"
  - "Spot the common errors in derivatives from the definition before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.1-study-guide", "mb-ap-calcab-2.1-practice", "mb-ap-calcab-2.1-checklist"]
next: "mb-ap-calcab-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Average rate = difference quotient; instantaneous rate = its limit = f′(a)."
  - "Both limit forms give 0/0 at first: simplify, cancel, then substitute."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the secant-line diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (h → 0) g(h)** means "the limit as h approaches 0 of g(h)". **f′(a)** is read "f prime of a".

## Recap

- The **average rate of change** of f over an interval is change in output ÷ change in input: the slope of a secant line.
- The **instantaneous rate of change** at x = a is the limit of the average rate as the interval shrinks to a: the slope of the tangent line.
- That limit, **when it exists**, is the **derivative of f at a**, written f′(a). It is a number, with units of output per input.
- Both limit forms are 0/0 at first. Use the Topic 1.6 algebra (expand, factor, conjugate, combine fractions), cancel, then substitute.
- If the left and right limits of the quotient differ (for example at a corner), f′(a) does not exist.

## Key relationships

| Idea | Formula | Notes |
|---|---|---|
| Average rate, h-form | (f(a + h) − f(a))/h | Interval between a and a + h, h ≠ 0 |
| Average rate, x-form | (f(x) − f(a))/(x − a) | Interval between a and x, x ≠ a |
| Link between forms | x = a + h, so x − a = h | Same number, different labels |
| Derivative at a, h-form | f′(a) = lim (h → 0) (f(a + h) − f(a))/h | Provided the limit exists |
| Derivative at a, x-form | f′(a) = lim (x → a) (f(x) − f(a))/(x − a) | Equivalent to the h-form |

**Reading a limit backwards:** find f from the f(a + h) or f(x) part, find a, and check that the number subtracted equals f(a). Example: lim (h → 0) ((3 + h)³ − 27)/h is f′(3) for f(x) = x³.

## Assumptions behind the method

- h ≠ 0 (or x ≠ a) whenever you cancel. The limit never uses h = 0 itself.
- The limit must be a single finite value from both sides. Otherwise there is no derivative at a.

## Mistakes to avoid

1. **Confusing f′(a) with f(a).** One is a rate, the other a value.
2. **Writing f(a) + h for f(a + h).** Substitute a + h for every x.
3. **Subtracting a or f(h) instead of f(a).**
4. **Substituting h = 0 before simplifying.** You always get 0/0.
5. **Stopping at the quotient.** (f(a + h) − f(a))/h is still an average; take the limit.
6. **Leaving out units** in a context question.

## Quick self-check

1. Find the average rate of change of q(x) = 5x − x² over [1, 4]. *(0: q(1) = 4 and q(4) = 4. A zero average does not mean q never changed.)*
2. Use the definition to find q′(1). *(3: the quotient simplifies to 3 − h for h ≠ 0)*
3. Evaluate lim (h → 0) ((3 + h)³ − 27)/h by recognising it. *(It is f′(3) for f(x) = x³. For h ≠ 0 the quotient simplifies to 27 + 9h + h², so the limit is 27.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-practice/).
