---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Rational functions of higher degree (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 2 – Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-13"
description: "HL revision notes for IB Maths AA 2.13 rational functions: asymptote rules, oblique asymptotes, the discriminant range method, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.13 (AHL only)** of IB DP Mathematics: Analysis and Approaches, first assessment 2021: rational functions of the form (ax + b)/(cx² + dx + e) and (ax² + bx + c)/(dx + e). Worked sketches are in the [rational functions study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-13/); exam-style questions are in the [rational functions practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-13-practice/).

## Condensed recall

**Before anything else**

- Factorise numerator and denominator. A common factor cancels and leaves a missing point (a hole), not an asymptote.

**Linear over quadratic: (ax + b)/(cx² + dx + e)**

- Horizontal asymptote: y = 0 (denominator has higher degree).
- Vertical asymptotes: real roots of cx² + dx + e = 0.
  - Δ > 0: two vertical asymptotes, three branches.
  - Δ = 0: one vertical asymptote; both sides head the same way (both +∞ or both −∞).
  - Δ < 0: none; one smooth curve with a maximum and a minimum.
- x-intercept at x = −b/a: the curve crosses y = 0 there.
- y-intercept: b/e (if e ≠ 0).

**Quadratic over linear: (ax² + bx + c)/(dx + e)**

- Vertical asymptote: x = −e/d.
- Divide to get mx + k + R/(dx + e).
- Oblique asymptote: y = mx + k, with m = a/d.
- If R ≠ 0, the curve never crosses the oblique asymptote.
- Sign of R/(dx + e) tells you the side: positive means above, negative means below.
- x-intercepts: solve ax² + bx + c = 0 (may be none).
- y-intercept: c/e.

**Finding the range without calculus (discriminant method)**

1. Set y = f(x) and clear the fraction.
2. Rearrange into a quadratic in x with coefficients involving y.
3. Real x exists only if Δ ≥ 0; solve this inequality in y.
4. Check any special value (such as y = 0, where the quadratic in x becomes linear).

**Placing branches**

- Mark the vertical asymptotes and the zeros on a number line.
- Test the sign of f in each interval.
- Near a vertical asymptote x = p from a single factor, the sign changes across p; from a squared factor it does not.

**Typical ranges**

- Linear over quadratic with Δ < 0: a closed interval [min, max].
- Quadratic over linear with two turning points: y ≤ local max or y ≥ local min, with a gap between.

## Key terms

| Term | Meaning |
|---|---|
| Rational function | A quotient of two polynomials |
| Vertical asymptote | Line x = p where \|f(x)\| → ∞ as x → p |
| Horizontal asymptote | Line y = q that f(x) approaches as x → ±∞ |
| Oblique asymptote | Non-horizontal line y = mx + k approached as x → ±∞ |
| Remainder term | R/(dx + e) left after division; tends to 0 |
| Hole | A single missing point caused by a cancelled common factor |
| Discriminant | Δ = b² − 4ac of a quadratic; decides how many real roots |

## Exam traps

- Ratio of leading coefficients is a horizontal asymptote only when the degrees are equal, which is not the case in either 2.13 family.
- Quadratic over linear has an oblique asymptote, not y = 0.
- A denominator such as x² + 2x + 5 has no real roots, so there is no vertical asymptote.
- The graph of linear over quadratic does cross y = 0, at the numerator's zero.
- A curve never crosses a vertical asymptote, and never crosses its oblique asymptote when R ≠ 0.
- Asymptotes must be given as equations: "x = 3", "y = 2x + 1".
- Long-division errors give the wrong oblique asymptote; expand (dx + e)(mx + k) + R to check.

## Self-test

1. Write down all asymptotes of y = (3x − 2)/(x² + x − 12).
2. How many vertical asymptotes does y = (x + 3)/(x² + 2x + 5) have?
3. Where does y = (2x + 6)/(x² − 1) cross its horizontal asymptote?
4. Find the oblique asymptote of y = (x² − 5x + 2)/(x + 1).
5. For x > −1, is the curve in question 4 above or below its oblique asymptote?
6. Find both asymptotes of y = (x² + 3x)/(2x − 4).
7. Write down the y-intercept of y = (4x − 1)/(x² − 2x − 3).
8. Describe the graph of y = (x − 2)/(x² − 4).
9. Use the discriminant method to find the range of y = 2x/(x² + 4).
10. Describe the behaviour of y = 1/(x − 1)² near x = 1.
11. Can the graph of y = x + 2 + 3/(x − 1) cross the line y = x + 2? Explain.
12. y = (ax² + bx + 1)/(x − 1) has oblique asymptote y = 2x + 5. Find a and b.

### Answers

1. Denominator (x + 4)(x − 3): x = −4, x = 3 and y = 0.
2. None: Δ = 4 − 20 < 0.
3. 2x + 6 = 0, so at (−3, 0).
4. x² − 5x + 2 = (x + 1)(x − 6) + 8, so y = x − 6.
5. Above, since 8/(x + 1) > 0 when x > −1.
6. x = 2; (x² + 3x) = (2x − 4)(x/2 + 5/2) + 10, so y = x/2 + 5/2.
7. (0, 1/3).
8. It simplifies to 1/(x + 2) with x ≠ 2: vertical asymptote x = −2, horizontal asymptote y = 0, and a hole at (2, 1/4).
9. yx² − 2x + 4y = 0 needs 4 − 16y² ≥ 0, so −1/2 ≤ y ≤ 1/2.
10. y → +∞ on both sides, since (x − 1)² > 0.
11. No: 3/(x − 1) is never zero, so y never equals x + 2.
12. (x − 1)(2x + 5) = 2x² + 3x − 5, so a = 2, b = 3 (remainder 6).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.13.
