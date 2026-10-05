---
resourceId: "mb-ap-calcbc-6.12-revision-notes"
title: "Integrating Using Linear Partial Fractions: Revision Notes (Calculus BC 6.12)"
description: "One-page recap of linear partial fractions: when the method applies, two ways to find the constants, integrating each piece as a logarithm, and the mistakes that cost marks."
course: "calculus-bc"
unit: 6
topics: ["6.12"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-6.12-study-guide"]
learningObjectives:
  - "Recall the decomposition form for different linear factors and how to find the constants"
  - "Spot the common errors in partial fractions before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Decompose and integrate by hand; a calculator may only check a definite value where one is allowed."
related: ["mb-ap-calcbc-6.12-study-guide", "mb-ap-calcbc-6.12-practice", "mb-ap-calcbc-6.12-checklist"]
next: "mb-ap-calcbc-6.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Proper fraction, different linear factors below: split into A/(x − p) + B/(x − q)."
  - "Each piece integrates to a logarithm. Check by recombining."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the full method, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/). **BC-only material.** Prerequisites (FTC 6.7, ∫ 1/x dx 6.8, substitution 6.9, long division 6.10) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Partial fractions is **adding fractions backwards**: split one hard fraction into simple fractions with linear denominators.
- Use it when the fraction is **proper** and the bottom factors into **different linear factors**.
- **Try substitution first.** If the top is a multiple of the derivative of the bottom, you get a single ln straight away.
- The course does not use repeated factors such as (x − 1)² or quadratic factors such as x² + 1.

## Key relationships

| Step | What to write | Note |
|---|---|---|
| Decompose | N(x)/((x − p)(x − q)) = A/(x − p) + B/(x − q) | Three factors: add C/(x − r) |
| Clear fractions | N(x) = A(x − q) + B(x − p) | True for every x |
| Find constants | Put x = p, then x = q; or match coefficients | Cover-up is the quick version |
| Integrate | ∫ A/(x − p) dx = A ln\|x − p\| + C | Keep the absolute values |
| Non-monic factor | ∫ 1/(ax + b) dx = (1/a) ln\|ax + b\| + C | Chain-rule factor 1/a |
| Improper fraction | Divide first, then decompose the remainder | Needed when top degree ≥ bottom degree |
| Example | 3/(x(x + 3)) = 1/x − 1/(x + 3) | x = 0 gives A = 1; x = −3 gives B = −1 |

## Mistakes to avoid

1. **Log of the denominator.** ∫ 1/(x² − 4) dx is not ln|x² − 4|; differentiate to see why.
2. **Wrong root.** The factor (x + 3) is zero at x = −3.
3. **Missing 1/a** for a factor like 2x − 1.
4. **Decomposing before dividing** when the fraction is improper.
5. **Limits across an asymptote.** If a root of the bottom lies between the limits, the integral is improper (Topic 6.13).
6. **No check.** Recombine the fractions; you should get the original top.

## Quick self-check

1. Decompose 3/(x² + 3x). *(1/x − 1/(x + 3))*
2. Find ∫ 1/((x − 1)(x − 2)) dx. *(ln|x − 2| − ln|x − 1| + C, which is ln|(x − 2)/(x − 1)| + C)*
3. Evaluate ∫ from 0 to 1 of 2/((x + 1)(x + 3)) dx. *(ln(3/2), about 0.405, from 1/(x + 1) − 1/(x + 3))*

Next: [practice questions](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-practice/).
