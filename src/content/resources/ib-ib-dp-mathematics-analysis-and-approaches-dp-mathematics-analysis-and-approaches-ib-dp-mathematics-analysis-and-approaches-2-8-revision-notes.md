---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.8 The reciprocal function and rational functions -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-8"
description: "Revision notes for IB Maths AA 2.8: the reciprocal function, asymptotes and intercepts of (ax + b)/(cx + d), branch placement, inverses and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2.8 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021): the reciprocal function f(x) = 1/x and its self-inverse nature, and rational functions (ax + b)/(cx + d) with their graphs and their vertical and horizontal asymptotes. It is common to SL and HL. For explanations and worked examples, use the [2.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8/); for exam-style questions, use the [2.8 practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8-practice/).

## Core recall

**y = 1/x**
- Domain x ≠ 0, range y ≠ 0.
- Asymptotes x = 0 and y = 0; no intercepts.
- Branches in quadrants 1 and 3; symmetric in y = x and y = −x.
- Self-inverse: f(f(x)) = x.

**y = (ax + b)/(cx + d)**
- Vertical asymptote **x = −d/c**; horizontal asymptote **y = a/c**.
- Domain x ≠ −d/c; range y ≠ a/c.
- y-intercept (0, b/d); x-intercept (−b/a, 0).
- Equivalent form a/c + r/(cx + d): a transformed 1/x.
- Inverse: asymptotes swap.

## Key terms

| Term | Meaning |
|---|---|
| Reciprocal function | f(x) = 1/x |
| Rational function | A quotient of two polynomials; here linear over linear |
| Vertical asymptote | x = value that makes the denominator zero |
| Horizontal asymptote | y = limit of f(x) as x → ±∞ |
| Hyperbola | The two-branch curve of these functions |
| Self-inverse | f⁻¹ = f, so f(f(x)) = x |
| Inverse proportion | y = k/x: doubling x halves y |

## Sketch routine

1. Find and draw both asymptotes as dashed, labelled lines.
2. Find and plot both intercepts.
3. Decide which two opposite regions hold the branches, using the intercepts or one test point.
4. Draw each branch approaching both asymptotes, never crossing the vertical one.

**Quick example.** y = (x + 6)/(x − 2): asymptotes x = 2, y = 1; intercepts (0, −3) and (−6, 0). Both intercepts are left of x = 2 and below y = 1, so one branch is bottom-left and the other top-right.

## Finding constants from asymptotes

For f(x) = (ax + b)/(x + d):
- vertical asymptote x = k gives d = −k;
- horizontal asymptote y = m gives a = m;
- one point on the graph gives b.

**Quick example.** Asymptotes x = 5 and y = −3 for (ax + 1)/(x + d): d = −5, a = −3.

## Rewriting by division

(3x + 1)/(x + 2) = 3 − 5/(x + 2), since 3(x + 2) = 3x + 6 and (3x + 1) − (3x + 6) = −5.
So the graph is y = 1/x stretched vertically by 5, reflected in the x-axis, translated 2 left and 3 up.

## Inverse check

f(x) = (2x − 3)/(x + 4) has asymptotes x = −4, y = 2. Its inverse f⁻¹(x) = (4x + 3)/(2 − x) has asymptotes x = 2, y = −4: swapped, as expected.

## Behaviour near the asymptotes

| Near | Test | Tells you |
|---|---|---|
| x = −d/c | Signs of numerator and denominator just left and right | Whether each branch goes up or down |
| y = a/c | Sign of r in a/c + r/(cx + d) for large x | Whether the curve approaches from above or below |

**Quick example.** For 3 − 5/(x + 2), large positive x makes −5/(x + 2) small and negative, so the right-hand branch approaches y = 3 from below.

## Intersections with a line

1. Set the rational expression equal to the line.
2. Multiply by the denominator, noting the excluded value.
3. Solve the quadratic and reject any root equal to the excluded value.
4. Substitute into the line for the y-coordinates.

**Quick example.** 2/(x − 3) = x − 2 gives 2 = x² − 5x + 6, so x² − 5x + 4 = 0, x = 1 or 4: points (1, −1) and (4, 2).

## Exam traps

- y = b/d given as the horizontal asymptote (it is the y-intercept).
- a used instead of a/c when c ≠ 1.
- Branches in the wrong pair of regions.
- A branch crossing a vertical asymptote.
- Asymptotes left as numbers, or not drawn dashed.
- Range given as ℝ instead of y ≠ a/c.
- Excluded value forgotten after multiplying through by the denominator.

## Self-test

1. Write down the asymptotes of y = 1/x.
2. Write down the asymptotes of y = (5x + 2)/(x − 4).
3. Find the y-intercept of y = (2x − 6)/(x + 3).
4. Find the x-intercept of y = (2x − 6)/(x + 3).
5. State the range of y = (x + 1)/(2x − 1).
6. State the domain of y = (x + 1)/(2x − 1).
7. Show that f(x) = 1/x is self-inverse.
8. Find the intersections of y = 4/x and y = x.
9. Write (3x + 1)/(x + 2) in the form A + B/(x + 2).
10. Write down the asymptotes of y = 2 + 3/(x − 1).
11. Find the inverse of f(x) = (x + 1)/(x − 2).
12. Write down the horizontal asymptote of y = 4x/(2x + 7).

### Answers

1. x = 0 and y = 0
2. x = 4 and y = 5
3. (0, −2)
4. (3, 0)
5. y ≠ 1/2
6. x ≠ 1/2
7. f(f(x)) = 1/(1/x) = x, so f⁻¹ = f.
8. x² = 4: (2, 2) and (−2, −2)
9. 3 − 5/(x + 2)
10. x = 1 and y = 2
11. f⁻¹(x) = (2x + 1)/(x − 1), x ≠ 1
12. y = 2

## Where to go next

Go back to the [2.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8/) for branch placement and inverses, then try the [2.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-8-practice/). The wider unit is summarised in the [rational, exponential and logarithmic functions revision notes](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.8.
