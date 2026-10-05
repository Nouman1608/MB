---
resourceId: "mb-ap-calcab-5.3-revision-notes"
title: "Determining Intervals on Which a Function Is Increasing or Decreasing: Revision Notes (Calculus AB 5.3)"
description: "One-page recap of increasing and decreasing intervals: the sign rule for f′, the sign-chart method, reading a graph of f′, and the mistakes that cost marks."
course: "calculus-ab"
unit: 5
topics: ["5.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.3-study-guide"]
learningObjectives:
  - "Recall the link between the sign of f′ and the direction of f"
  - "Recall the steps of a sign chart and the points it must include"
  - "Spot the common errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.3-study-guide", "mb-ap-calcab-5.3-practice", "mb-ap-calcab-5.3-checklist"]
next: "mb-ap-calcab-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f′ > 0 on an interval: f increasing. f′ < 0 on an interval: f decreasing."
  - "Split points: zeros of f′, points where f′ is undefined, and gaps in the domain of f."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the reasoning, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- f is **increasing** on an interval if x₁ < x₂ always gives f(x₁) < f(x₂); **decreasing** if it always gives f(x₁) > f(x₂).
- The Mean Value Theorem explains the rule: f(x₂) − f(x₁) = f′(c)(x₂ − x₁), so the sign of f′ decides the sign of the change.
- Answers are **intervals**, not single points.
- An isolated zero of f′ with the same sign on both sides does not break an interval (f(x) = x³ is increasing everywhere).

## Key relationships

| You know | You can conclude | Example wording |
|---|---|---|
| f′(x) > 0 on (a, b) | f is increasing on (a, b) | "f is increasing on (a, b) because f′(x) > 0 there." |
| f′(x) < 0 on (a, b) | f is decreasing on (a, b) | "f is decreasing on (a, b) because f′(x) < 0 there." |
| Graph of f′ above the x-axis on (a, b) | f is increasing on (a, b) | "…because the graph of f′ is above the x-axis." |
| Graph of f′ going down, but still above the axis | f is still increasing | Direction of f′ is about concavity (Topic 5.6), not about f rising or falling. |
| Rate P′(t) > 0 in context | The quantity P is increasing | Name the quantity, not "it". |

## The sign-chart method

1. Find f′(x) and factor it.
2. Split points: f′(x) = 0, f′(x) undefined, x not in the domain of f.
3. Test the sign of f′ in each interval (test value or factor signs).
4. Conclude with f, the interval and the sign of f′.

## Assumptions behind the method

- The rule needs f′ to have one sign on the **whole** interval.
- Joining two intervals across a point c is allowed only if f is defined and continuous at c.
- Open intervals are always safe. Closed endpoints are fine only where f is continuous.

## Mistakes to avoid

1. **Reading the direction of f′ instead of its sign.**
2. **Forgetting domain gaps**, e.g. writing "decreasing on (−2, 2)" for x + 4/x, which is undefined at 0.
3. **Assuming signs alternate.** A squared factor such as (x − 1)² does not change sign.
4. **Justifying with the graph of f** ("it goes up") instead of with f′.
5. **Writing "it"**: name f, f′ or the quantity in context.

## Quick self-check

1. q(x) = x² − 8 ln x, for x > 0. Where is q decreasing? *(q′(x) = 2(x² − 4)/x, so q′ < 0 on (0, 2): q is decreasing on (0, 2) and increasing on (2, ∞).)*
2. f′(x) = (x − 3)². Where is f increasing? *(Everywhere: f′ > 0 except at x = 3, where f′ = 0, so f is increasing on (−∞, ∞).)*
3. The graph of g′ is falling and below the x-axis on (1, 5). What do you know about g there? *(g is decreasing on (1, 5), because g′ < 0. The fact that g′ is falling does not change that.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-practice/).
