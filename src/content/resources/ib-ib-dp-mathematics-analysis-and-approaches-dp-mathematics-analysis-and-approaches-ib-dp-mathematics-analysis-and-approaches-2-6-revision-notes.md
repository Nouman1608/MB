---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.6 The quadratic function -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-6"
description: "Revision notes for IB Maths AA 2.6 quadratics: the three forms, completing the square, building a quadratic from facts, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2.6 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021): the quadratic function in the forms ax² + bx + c, a(x − p)(x − q) and a(x − h)² + k, with its y-intercept, x-intercepts, vertex and axis of symmetry, and changing between the forms. It is common to SL and HL. For explanations and worked examples, see the [2.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6/); for exam-style questions, see the [2.6 practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6-practice/).

## Core recall

- a > 0: opens up, minimum. a < 0: opens down, maximum.
- **ax² + bx + c:** y-intercept (0, c); axis x = −b/(2a).
- **a(x − p)(x − q):** x-intercepts (p, 0), (q, 0); axis x = (p + q)/2.
- **a(x − h)² + k:** vertex (h, k); axis x = h; extreme value k.
- a is the same in every form.
- Equal outputs f(m) = f(n) put the axis at x = (m + n)/2.
- y = a(x − h)² + k is y = x² stretched by a vertically and translated h horizontally, k vertically.

## Key terms

| Term | Meaning |
|---|---|
| Parabola | The graph of a quadratic function |
| Vertex | The turning point (h, k) |
| Axis of symmetry | Vertical line x = h through the vertex |
| Expanded (standard) form | ax² + bx + c |
| Factorised (intercept) form | a(x − p)(x − q) |
| Vertex (turning-point) form | a(x − h)² + k |
| Completing the square | Rewriting ax² + bx + c as a(x − h)² + k |
| Leading coefficient | a, which sets the direction and width |

## Completing the square in four lines

For 2x² + 12x + 11:

```
= 2(x² + 6x) + 11
= 2[(x + 3)² − 9] + 11
= 2(x + 3)² − 18 + 11
= 2(x + 3)² − 7        vertex (−3, −7)
```

Shortcut check: h = −b/(2a) = −12/4 = −3, and k = f(−3) = 18 − 36 + 11 = −7.

## Which form to start from

| Given | Start with | Then |
|---|---|---|
| Roots p and q and one more point | a(x − p)(x − q) | Substitute the point for a |
| Vertex (h, k) and one more point | a(x − h)² + k | Substitute the point for a |
| y-intercept and axis | ax² + bx + c with c known, −b/(2a) known | One more point gives a and b |

**Quick example.** Vertex (2, −3) and passing through (4, 5): 4a − 3 = 5, so a = 2 and f(x) = 2(x − 2)² − 3 = 2x² − 8x + 5.

## Converting between forms

- Factorised → expanded: multiply out.
- Expanded → factorised: factorise (take out a first).
- Expanded → vertex: complete the square.
- Factorised → vertex: axis halfway between the roots, then substitute to find k.
- Vertex → expanded: expand the square, multiply by a, add k.

## Models

- Maximum or minimum value = k; it occurs at x = h.
- The y-intercept c is the starting value.
- Reject roots outside the model's domain, such as negative times.

**Quick example.** An invented model gives profit P = −3x² + 36x − 60 = −3(x − 2)(x − 10). Zeros at x = 2 and 10 give the axis x = 6, so the maximum profit is P(6) = 48.

## Exam traps

- Vertex of a(x + 3)² + k read as (3, k).
- In completing the square with a ≠ 1, the subtracted term not multiplied by a.
- c taken as the minimum value.
- a omitted when writing a quadratic from its roots.
- Maximum and minimum confused because the sign of a was ignored.
- Expanding (x − 2)² as x² + 4 instead of x² − 4x + 4.

## Self-test

1. Write down the vertex of y = (x − 4)² − 9.
2. Find the axis of symmetry of y = 2x² − 12x + 1.
3. Write down the x-intercepts and the axis of y = 3(x + 2)(x − 6).
4. Find the y-intercept of y = −2(x − 1)² + 5.
5. Write x² + 8x + 3 in the form (x + p)² + q.
6. Write 3x² − 12x + 2 in the form a(x − h)² + k.
7. Find the maximum point of y = −x² + 6x.
8. Find the quadratic with roots 1 and 4 that passes through (0, 8).
9. Write down the range of f(x) = (x + 1)² − 6.
10. A quadratic has f(−2) = f(6). Write down its axis of symmetry.
11. A parabola has vertex (−1, 3) and a = −2. Write it in the form ax² + bx + c.
12. How can you tell from ax² + bx + c whether the vertex is a maximum?

### Answers

1. (4, −9)
2. x = 12/4 = 3
3. (−2, 0) and (6, 0); x = 2
4. −2 + 5 = 3, so (0, 3)
5. (x + 4)² − 13
6. 3(x − 2)² − 10
7. −(x − 3)² + 9, so (3, 9)
8. a(−1)(−4) = 8 gives a = 2: y = 2(x − 1)(x − 4) = 2x² − 10x + 8
9. f(x) ≥ −6
10. x = 2
11. −2(x + 1)² + 3 = −2x² − 4x + 1
12. It is a maximum when a < 0.

## Where to go next

Return to the [2.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6/) for any form you find slow, then try the [2.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6-practice/). The discriminant and quadratic inequalities are revised in the [2.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-7-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.6.
