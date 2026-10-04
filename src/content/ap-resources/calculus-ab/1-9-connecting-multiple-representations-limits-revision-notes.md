---
resourceId: "mb-ap-calcab-1.9-revision-notes"
title: "Connecting Multiple Representations of Limits: Revision Notes (Calculus AB 1.9)"
description: "One-page recap of reading limits from graphs, tables, formulas and words, combining them in sums, products and composites, and the traps that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.9"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.9-study-guide"]
learningObjectives:
  - "Recall how to read a limit in each of the four representations"
  - "Spot the common errors when representations are mixed in one question"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.9-study-guide", "mb-ap-calcab-1.9-practice", "mb-ap-calcab-1.9-checklist"]
next: "mb-ap-calcab-1.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Read each side separately, then decide about the two-sided limit."
  - "For f(g(x)), track the side from which g(x) arrives."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)"; **a⁻** and **a⁺** mean from the left and from the right.

## Recap

- A limit is the value f(x) approaches as x gets close to c, **not** the value f(c).
- The two-sided limit exists only if both one-sided limits exist and are equal.
- A limit fails to exist when the sides disagree, when the function is unbounded, or when it oscillates.
- Tables and graphs give **estimates**. A table can skip behaviour between its inputs; a graph can hide a hole at the wrong scale.

## Key relationships

| Representation | Read the limit by… | Trap |
|---|---|---|
| Graph | Covering up x = c and following the curve from each side | Reading the filled dot (that is f(c)) |
| Table | Following the trend of outputs from each side | Copying the nearest entry; trusting too few inputs |
| Piecewise formula | Using the piece that applies on each side | Using the rule for x = c itself |
| Words | "Approaches … from the right" → lim (x → c⁺) | Treating "approaches" as "equals at" |
| Sum or product | Adding or multiplying the limits, if each exists | Using the property when one limit does not exist: split into sides instead |
| Composite f(g(x)) | Finding L = lim g(x) and the side; then the matching limit of f at L | Using f(L), or ignoring the side |

## Assumptions behind the method

- A table is only useful if you may assume its trend continues near c. Exam questions usually say so.
- The sum and product properties need each separate limit to exist.
- For a composite, the side matters whenever f has different one-sided limits at L, or a value f(L) that differs from its limit.

## Mistakes to avoid

1. **Reading f(c) from a filled dot** and calling it the limit.
2. **Saying "no limit" too early.** (x + 1) · f(x) can have a limit even if f does not.
3. **Ignoring the side** in a composite limit.
4. **Using f(L) instead of the limit of f at L** when f has a hole at L.
5. **Testing one side only** in a table, then claiming a two-sided limit.
6. **Trusting a table of special inputs**, such as sin(π/x) at x = 0.1, 0.01, 0.001.

## Quick self-check

1. f(x) = 4 − x for x < 1, f(x) = x² + 2 for x > 1, and f(1) = 0. Find lim (x → 1) f(x). *(3: both sides give 3; f(1) = 0 is irrelevant.)*
2. lim (u → 0⁻) f(u) = 5 and lim (u → 0⁺) f(u) = −2. The values of g(x) approach 0 from above as x → 4. Find lim (x → 4) f(g(x)). *(−2: the input to f arrives from the right.)*
3. Write in notation: "as t gets close to 6 from the right, D(t) gets close to 0.5". *(lim (t → 6⁺) D(t) = 0.5)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-practice/).
