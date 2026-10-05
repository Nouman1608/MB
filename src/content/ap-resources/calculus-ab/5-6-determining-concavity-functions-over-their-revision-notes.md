---
resourceId: "mb-ap-calcab-5.6-revision-notes"
title: "Determining Concavity of Functions over Their Domains: Revision Notes (Calculus AB 5.6)"
description: "One-page recap of concavity: the link between f′ increasing and concave up, the sign of f″, how to confirm points of inflection and the usual errors."
course: "calculus-ab"
unit: 5
topics: ["5.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-5.6-study-guide"]
learningObjectives:
  - "Recall how f′ and f″ decide concavity and points of inflection"
  - "Spot the common errors in concavity questions before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-5.6-study-guide", "mb-ap-calcab-5.6-practice", "mb-ap-calcab-5.6-checklist"]
next: "mb-ap-calcab-5.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f′ increasing (for example, f″ > 0) means concave up. f′ decreasing (for example, f″ < 0) means concave down."
  - "Inflection point: f defined there and f″ changes sign."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **Concave up** on an open interval: the slopes increase, so f′ is increasing. The graph bends like a cup.
- **Concave down** on an open interval: the slopes decrease, so f′ is decreasing. The graph bends like a cap.
- Concavity is separate from increasing/decreasing. A falling graph can be concave up.
- A **point of inflection** is a point on the graph where concavity changes.
- Candidates for inflection points: f″ = 0 or f″ undefined. Then **check the sign change** and that f(c) exists.

## Key relationships

| You know… | On that open interval, f is… |
|---|---|
| f′ increasing, or f″ > 0 | concave up |
| f′ decreasing, or f″ < 0 | concave down |
| f″ changes sign at c, f(c) defined | point of inflection at (c, f(c)) |
| Graph of f′ has a local max or min at c | point of inflection of f at x = c |
| Graph of f′ crosses the x-axis at c | local extremum of f (Topic 5.4), not concavity |
| f′ > 0 and f″ < 0 (in context) | increasing at a decreasing rate |

## Assumptions behind the method

- Concavity is decided on **open** intervals between the candidates.
- The sign of f″ is constant between consecutive candidates, so one test value per interval is enough (when f″ is continuous there).
- An inflection point needs f to be defined at c. A gap in the domain (such as x = 0 for 1/x) is never one.

## Mistakes to avoid

1. **"f″(c) = 0, so inflection point."** Check the sign change: x⁴ has none at 0.
2. **Confusing zeros of f′ with inflection points.**
3. **Reading a graph of f′ as a graph of f.**
4. **Missing points where f″ does not exist**, such as x = 0 for ∛x.
5. **Giving only x** when the question asks for the point of inflection.
6. **Vague context wording.** Say "increasing at a decreasing rate", not "slowing down".

## Quick self-check

1. Where is f(x) = x³ − 3x² + 1 concave down, and what is its point of inflection? *(f″ = 6x − 6 < 0 for x < 1, so concave down on (−∞, 1). Inflection point (1, −1).)*
2. Find the inflection points of f(x) = x⁴ − 6x². *(f″ = 12(x − 1)(x + 1) changes sign at ±1. Points (−1, −5) and (1, −5).)*
3. The graph of f′ crosses the x-axis at x = 2 and has a local maximum at x = 5. Which x-value gives an inflection point of f? *(x = 5. x = 2 gives a local extremum of f.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-practice/).
