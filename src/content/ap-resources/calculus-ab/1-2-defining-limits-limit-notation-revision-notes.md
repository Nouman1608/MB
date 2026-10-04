---
resourceId: "mb-ap-calcab-1.2-revision-notes"
title: "Defining Limits and Using Limit Notation: Revision Notes (Calculus AB 1.2)"
description: "One-page recap of the informal definition of a limit, each part of limit notation, why f(c) does not decide the limit, and the notation slips that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.2-study-guide"]
learningObjectives:
  - "Recall the informal definition of a limit and the meaning of each part of the notation"
  - "Spot common notation and interpretation errors before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "none-needed"
related: ["mb-ap-calcab-1.2-study-guide", "mb-ap-calcab-1.2-practice", "mb-ap-calcab-1.2-checklist"]
next: "mb-ap-calcab-1.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "lim (x → c) f(x) = R: f(x) gets as close as you like to R when x is close enough to c, with x ≠ c."
  - "The limit ignores f(c)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → c) f(x)** means "the limit as x approaches c of f(x)".

## Recap

- **Definition in words.** lim (x → c) f(x) = R if f(x) can be made as close to R as you like by taking x close enough to c, but not equal to c.
- The limit is **one real number**. If the outputs do not settle on one real number, the limit **does not exist**.
- Inputs on **both sides** of c count. x = c itself never counts.
- So the limit **ignores f(c)**. f(c) can equal the limit, differ from it, or be undefined.
- One limit can be shown three ways: a **graph** (where the curve heads), a **table** (outputs closing in) and **notation**.
- A table suggests a limit; it does not prove it.

## Key relationships

| Notation | Read it as | Meaning |
|---|---|---|
| lim (x → c) f(x) = R | "the limit as x approaches c of f of x is R" | Outputs near c, not at c, approach R |
| f(x) → R as x → c | "f of x tends to R as x tends to c" | Same statement, arrow form |
| f(c) = R | "f of c is R" | One output only; says nothing about the limit |
| lim (t → c) f(t) = R | (any letter) | Same as with x; the letter under lim must match the input |
| x → c⁻, x → c⁺, = ∞ | left, right, unbounded | Coming in Topic 1.3 |

## Assumptions behind the definition

- f must be defined at points near c, on both sides (it need not be defined at c).
- "As close as you like" means for **every** closeness, not just one. The formal epsilon-delta version of this is not assessed.

## Mistakes to avoid

1. **Writing "lim f(x) = R"** with no "x → c" under lim.
2. **Dropping "lim"** so the statement becomes f(x) = R.
3. **Swapping c and R:** c is an input, R is an output.
4. **Using f(c) as the limit** without a reason.
5. **Saying "f(c) is undefined, so there is no limit."** A hole does not stop a limit.
6. **Leaving out units and context** when asked to interpret a limit.

## Quick self-check

1. Write in notation: "as x approaches 4, p(x) approaches 9". *(lim (x → 4) p(x) = 9)*
2. p(4) = 0 and lim (x → 4) p(x) = 9. Is this possible? *(Yes. The limit ignores p(4). The graph has a hole at (4, 9) and a separate point at (4, 0).)*
3. W(d) is water depth in cm, d days into a drought. Interpret lim (d → 20) W(d) = 15. *(As the time gets closer to day 20, the depth gets as close as we like to 15 cm.)*
4. A table shows f(2.999) = 6.0004 and f(3.001) = 5.9996. Does this prove lim (x → 3) f(x) = 6? *(No. It suggests 6; a table shows only a few inputs.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-practice/).
