---
resourceId: "mb-ap-calcab-1.3-revision-notes"
title: "Estimating Limit Values from Graphs: Revision Notes (Calculus AB 1.3)"
description: "One-page recap of reading limits from graphs: one-sided and two-sided limits, holes and filled dots, three reasons a limit fails to exist, and scale traps."
course: "calculus-ab"
unit: 1
topics: ["1.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.3-study-guide"]
learningObjectives:
  - "Recall how to read one-sided and two-sided limits from a graph"
  - "Name the three graphical reasons a limit does not exist and the scale traps to watch for"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "none-needed"
related: ["mb-ap-calcab-1.3-study-guide", "mb-ap-calcab-1.3-practice", "mb-ap-calcab-1.3-checklist"]
next: "mb-ap-calcab-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Read the height the curve approaches from each side; ignore the point at x = a."
  - "Two-sided limit exists only if the left-hand and right-hand limits exist and are equal."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a⁻) f(x)** is the left-hand limit (x below a); **lim (x → a⁺) f(x)** is the right-hand limit (x above a); **lim (x → a) f(x)** is the two-sided limit.

## Recap

- Follow the curve towards x = a from the left, then from the right. Each side gives a **height**, a y-value.
- **Ignore x = a itself.** Open circles, filled dots and gaps at a do not change the limit.
- The two-sided limit exists only when **both** one-sided limits exist and are **equal**.
- At an endpoint of the domain, only one one-sided limit can be read.
- A reading from a graph is an **estimate**, unless the graph labels exact coordinates.

## Key relationships

| What you see at x = a | One-sided limits | Two-sided limit |
|---|---|---|
| Unbroken curve | Both equal f(a) | Exists, equals f(a) |
| Hole (open circle), maybe a separate dot | Both equal the height of the hole | Exists, equals the hole's height, not the dot's |
| Jump | Left ≠ right | Does not exist |
| Vertical asymptote | One or both are ±∞ (unbounded) | Does not exist |
| Faster and faster oscillation | Neither exists | Does not exist |

**Writing ∞.** lim (x → a) f(x) = ∞ is allowed when **both** sides grow without bound upwards. It explains why the limit does not exist. It is not a value.

## Assumptions behind a graph reading

- The drawing is accurate at the scale shown.
- Nothing important happens between plotted points or outside the window.
- Open and filled circles are drawn where they belong. Most graphing tools draw neither, so holes can be invisible.

If you have the formula, check x-values where a denominator is 0 before trusting a picture.

## Mistakes to avoid

1. **Giving f(a) (the filled dot) as the limit.**
2. **Saying "undefined at a, so no limit".** A hole has a limit.
3. **Using only one side.** At a jump, the right-hand limit may equal f(a), but the left side still disagrees.
4. **Reading x → a⁻ as "x is negative".** It means "from the left".
5. **Calling ∞ a limit that exists.**
6. **Giving the x-value instead of the height.**
7. **Trusting a smooth-looking screen.** A narrow asymptote can fall between plotted points.

## Quick self-check

1. A graph has an open circle at (4, 2) and a filled dot at (4, 7). What is lim (x → 4) f(x)? *(2. The dot gives f(4) = 7, which does not affect the limit.)*
2. Find lim (x → 5⁻) 2|x − 5|/(x − 5) and lim (x → 5⁺) 2|x − 5|/(x − 5). Does the two-sided limit exist? *(−2 and 2. No, the one-sided limits differ.)*
3. What can you say about lim (x → 1) 1/(x − 1)⁴? *(Both sides grow without bound, so you may write = ∞. The limit does not exist as a real number.)*
4. Name the three graphical reasons a limit can fail to exist. *(Left ≠ right, unbounded, oscillating.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-practice/).
