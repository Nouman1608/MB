---
resourceId: "mb-ap-calcab-4.3-revision-notes"
title: "Rates of Change in Applied Contexts Other Than Motion: Revision Notes (Calculus AB 4.3)"
description: "One-page recap of derivatives as rates in any context: the unit rule, the four-part interpretation sentence, sign words and what the second derivative adds."
course: "calculus-ab"
unit: 4
topics: ["4.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.3-study-guide"]
learningObjectives:
  - "Recall the unit rule and the four parts of a full interpretation"
  - "Spot the common wording errors in rate-of-change answers before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
related: ["mb-ap-calcab-4.3-study-guide", "mb-ap-calcab-4.3-practice", "mb-ap-calcab-4.3-checklist"]
next: "mb-ap-calcab-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f′(a) is the rate of change of the output per one unit of input at a, in any context."
  - "Units of f′ = units of f ÷ units of input."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the tangent-line graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A derivative is a rate in **any** setting, not only motion: litres per minute, dollars per item, people per year, grams per centimetre.
- The input need not be time. It can be altitude, distance, number of items and so on.
- f′(a) > 0: the quantity is increasing at a. f′(a) < 0: it is decreasing.
- f″(a) tells you whether the rate itself is rising or falling.
- From a table you can only **estimate** a derivative: use the difference quotient of the nearest values either side.

## Key relationships

| Idea | Rule |
|---|---|
| Units of f′(x) | units of f ÷ units of x |
| Units of f″(x) | units of f ÷ (units of x)² |
| Estimate from a table | f′(c) ≈ (f(b) − f(a))/(b − a), with a < c < b as close as possible |
| Average rate on [a, b] | (f(b) − f(a))/(b − a): an interval, not an instant |
| f′ < 0 and f″ > 0 | Decreasing, but more slowly |
| f′ > 0 and f″ < 0 | Increasing, but more slowly |

**The four-part sentence:** *At [input value with units], the [quantity] is [increasing/decreasing] at a rate of [size] [units].*

## Assumptions behind the method

- The function is differentiable at the input value you are interpreting.
- A table estimate assumes the function behaves smoothly between the table values.
- A model is only valid on the domain it is given for.

## Mistakes to avoid

1. **Confusing f(a) with f′(a)**: an amount versus a rate. Check the units.
2. **Units upside down**: litres per minute, not minutes per litre.
3. **Double negative**: "decreasing at a rate of −60". Drop the minus sign or drop the word "decreasing".
4. **No instant**: always say "at t = …" (or "at an altitude of …").
5. **Calling a rate an exact change**: f′(a) = −60 does not mean exactly 60 lost in the next unit.
6. **Reading f″ < 0 as "the quantity is falling"**: it means the rate is falling.

## Quick self-check

1. N(t) is the number of visitors in a park, t in hours, and N(t) = 40 + 6t − t². Find N′(2) and its units. *(2 visitors per hour: at t = 2 hours, the number of visitors is increasing at 2 visitors per hour.)*
2. In question 1, N″(t) = −2. What does this tell you at t = 2? *(The number of visitors is still increasing, but the rate of increase is falling by 2 visitors per hour each hour.)*
3. R(q) is revenue in euros from selling q tickets. What are the units of R′(q)? *(Euros per ticket.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-practice/).
