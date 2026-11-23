---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.14 Odd and even functions; self-inverse functions (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-14"
description: "HL revision notes for IB Maths AA 2.14: odd and even tests, combination rules, inverses with restricted domains, self-inverse functions and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.14 (AHL only)** of IB DP Mathematics: Analysis and Approaches, first assessment 2021: odd and even functions, inverse functions with a domain restriction, and self-inverse functions. Explanations and worked examples are in the [odd, even and self-inverse study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-14/); exam-style questions are in the [odd, even and self-inverse practice set](/resources/ib-dp-mathematics-analysis-and-approaches-2-14-practice/).

## Condensed recall

**Definitions**

- Even: f(−x) = f(x) for all x in the domain; symmetric in the y-axis.
- Odd: f(−x) = −f(x) for all x in the domain; rotational symmetry of order 2 about the origin.
- Neither: at least one x breaks both conditions.
- The domain must be symmetric about 0 for either property to hold.
- An odd function defined at x = 0 has f(0) = 0.

**Standard results**

- Even: constants, x², x⁴, any even power, cos x, cos kx, |x|.
- Odd: x, x³, any odd power, 1/x, sin x, sin kx, tan x.
- Polynomials: only even powers (constant included) means even; only odd powers means odd; a mixture means neither.

**Combination rules**

- odd × odd = even; even × even = even; odd × even = odd.
- odd + odd = odd; even + even = even; non-zero odd + non-zero even = neither.
- f(g(x)) is even whenever g is even.
- f(g(x)) is odd when f and g are both odd.

**Periodic examples**

- sin²x even; sin x cos x odd; x sin x even; x cos x odd; tan²x even; sin x + cos x neither.

**Inverse with a domain restriction**

- f⁻¹ exists only if f is one-to-one.
- Restrict a quadratic to one side of its vertex.
- Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f.
- Swap x and y, rearrange, then pick the square-root sign that returns values in the original domain.
- f(f⁻¹(x)) = x and f⁻¹(f(x)) = x on the relevant domains.
- The graphs of f and f⁻¹ are reflections in y = x.

**Self-inverse functions**

- f(f(x)) = x for all x in the domain, equivalently f⁻¹ = f.
- The graph is symmetric in y = x.
- Examples: c − x; k/x; √(1 − x²) for 0 ≤ x ≤ 1.
- General rational form: (ax + b)/(cx − a), provided a² + bc ≠ 0. The top coefficient of x is the negative of the bottom constant.
- Its two asymptotes are x = a/c and y = a/c, meeting on y = x.

**Model lines worth copying**

- Even: "f(−x) = … = f(x) for all x, so f is even."
- Neither, for f(x) = x² + x: "f(2) = 6 and f(−2) = 2. Since f(−2) ≠ f(2) and f(−2) ≠ −f(2), f is neither odd nor even."
- Inverse sign choice: "x ≤ 1, so x − 1 ≤ 0 and the negative root is taken."
- Self-inverse: "f(f(x)) = … = x, so f⁻¹(x) = f(x)."

**Quick check after finding f⁻¹**

- Pick a point (p, q) on f. Then f⁻¹(q) must equal p. This catches a wrong root sign in seconds.

## Key terms

| Term | Meaning |
|---|---|
| Even function | f(−x) = f(x) throughout a domain symmetric about 0 |
| Odd function | f(−x) = −f(x) throughout a domain symmetric about 0 |
| One-to-one | Each output comes from exactly one input |
| Inverse function f⁻¹ | Reverses f: f⁻¹(f(x)) = x |
| Domain restriction | Limiting the inputs so that f becomes one-to-one |
| Self-inverse | A function equal to its own inverse: f(f(x)) = x |
| Line of symmetry y = x | The mirror line between a function and its inverse |

## Exam traps

- One numerical check cannot prove "odd" or "even"; it can only prove "neither".
- To prove "neither", the chosen value must fail both tests. State both comparisons.
- x³ + 1 is not odd: f(0) ≠ 0.
- A function on 0 ≤ x ≤ 3 is neither odd nor even, whatever its formula.
- Picking +√ when the restricted domain is x ≤ k usually needs −√.
- Missing the domain of f⁻¹ costs a mark even when the formula is right.
- "f(f(x)) = x" must be shown for general x, not checked with a number.
- When simplifying f(f(x)), clear the inner fractions first, then cancel.

## Self-test

1. Is f(x) = x⁵ − 2x³ odd, even or neither?
2. Is g(x) = |x| + x⁴ odd, even or neither?
3. Show that h(x) = x³ + x² is neither odd nor even.
4. Is cos 3x sin 2x odd, even or neither?
5. Explain why f(x) = 2x + 3 cannot be odd.
6. Is f(x) = x², −2 ≤ x ≤ 5, an even function?
7. f(x) = x² + 2x, x ≥ k. Find the smallest k for which f⁻¹ exists.
8. For that k, find f⁻¹(x) and its domain.
9. Find f⁻¹(x) for f(x) = e²ˣ − 3, and state its domain.
10. Show that f(x) = 6/x, x ≠ 0, is self-inverse.
11. Is f(x) = (5x − 1)/(2x − 5) self-inverse? Give a reason.
12. A self-inverse function passes through (2, 7). Name another point on its graph.

### Answers

1. Odd: only odd powers, so f(−x) = −f(x).
2. Even: |−x| = |x| and (−x)⁴ = x⁴.
3. h(1) = 2 and h(−1) = 0; 0 ≠ 2 and 0 ≠ −2, so neither.
4. Odd: even × odd.
5. f(0) = 3 ≠ 0, but an odd function defined at 0 must have f(0) = 0.
6. No: the domain is not symmetric about 0 (f(4) exists, f(−4) does not).
7. f(x) = (x + 1)² − 1, so k = −1.
8. f⁻¹(x) = −1 + √(x + 1), x ≥ −1.
9. f⁻¹(x) = ½ ln(x + 3), x > −3.
10. f(f(x)) = 6/(6/x) = x for all x ≠ 0.
11. Yes: it has the form (ax + b)/(cx − a) with a = 5, and a² + bc = 25 − 2 = 23 ≠ 0.
12. (7, 2), its reflection in y = x.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.14.
