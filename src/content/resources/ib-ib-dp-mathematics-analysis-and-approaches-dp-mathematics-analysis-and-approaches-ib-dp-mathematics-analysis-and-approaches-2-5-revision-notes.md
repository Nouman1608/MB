---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.5 Composite functions and inverse functions -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.05
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-5"
description: "Revision notes for IB Maths AA 2.5: composite functions and domains, the identity function, the inverse method and checks, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2.5 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021): composite functions, the identity function and finding the inverse function f⁻¹(x). It is common to SL and HL. For full explanations and worked examples, use the [2.5 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-5/); for exam-style questions, use the [2.5 practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-5-practice/).

## Core recall

- **(f ∘ g)(x) = f(g(x))**: g first, then f.
- Usually f ∘ g ≠ g ∘ f.
- **Domain of f ∘ g:** x in the domain of g, with g(x) in the domain of f.
- **Identity function:** I(x) = x; f ∘ I = I ∘ f = f.
- **Inverse:** (f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x.
- f⁻¹ exists only if f is one-to-one; restrict the domain if necessary.
- **Domain of f⁻¹ = range of f**; range of f⁻¹ = domain of f.
- f⁻¹(x) is not 1/f(x).

## Key terms

| Term | Meaning |
|---|---|
| Composite function | A function formed by applying one function to the output of another |
| Inner function | The function applied first (g in f ∘ g) |
| Outer function | The function applied second (f in f ∘ g) |
| Identity function | I(x) = x |
| Inverse function | The function that undoes f |
| One-to-one | Each output comes from exactly one input |
| Restricted domain | A smaller domain chosen so that f is one-to-one |

## Composite routine

1. Identify the inner function (the one written on the right).
2. Substitute its whole expression into every x of the outer function.
3. Simplify carefully, with brackets.
4. Find the domain from the inner function's domain, then remove inputs whose outputs the outer function cannot accept.

**Quick example.** f(x) = 1/(x − 2), g(x) = x² + 2: (f ∘ g)(x) = 1/x², domain x ≠ 0, because g(0) = 2 is not allowed in f.

## Inverse routine

1. y = f(x).
2. Make x the subject: for rational functions, multiply out, collect the x terms, factorise x.
3. Swap to write f⁻¹(x).
4. Choose the sign of any square root from the restricted domain.
5. State the domain of f⁻¹ (the range of f).
6. Check: f(f⁻¹(x)) = x.

**Quick example.** f(x) = (x + 4)/(2x − 1): y(2x − 1) = x + 4, so x(2y − 1) = y + 4 and f⁻¹(x) = (x + 4)/(2x − 1). This f is its own inverse.

## Composites from tables and graphs

Questions often give f and g as a table of values or as graphs instead of formulas.

- Work from the inside out: read g(a) first, then look up f at that value.
- For an inverse value, read the table or graph backwards: f⁻¹(b) is the input whose output is b.
- (f⁻¹ ∘ f)(a) = a for any a in the domain, so no lookup is needed.

**Quick example.** A table gives g(1) = 4, g(4) = 0, f(0) = 3 and f(4) = −2. Then (f ∘ g)(1) = f(4) = −2, (f ∘ g)(4) = f(0) = 3 and g⁻¹(0) = 4.

## Useful results

| Situation | Result |
|---|---|
| f linear, f(x) = ax + b | f⁻¹(x) = (x − b)/a |
| f(x) = (x − h)² + k, x ≥ h | f⁻¹(x) = h + √(x − k), x ≥ k |
| f increasing | f(x) = f⁻¹(x) ⇔ f(x) = x |
| Point (a, b) on f | Point (b, a) on f⁻¹ |
| Horizontal asymptote y = c of f | Vertical asymptote x = c of f⁻¹ |

## Exam traps

- Order reversed: computing g(f(x)) for (f ∘ g)(x).
- Missing brackets: with f(x) = 3x − 4 and g(x) = x + 1, (f ∘ g)(x) = 3(x + 1) − 4 = 3x − 1; writing 3x + 1 − 4 = 3x − 3 is wrong.
- Domain of a composite taken from the simplified rule.
- Rational inverses: not collecting x terms before factorising.
- ± kept when the restricted domain fixes the sign.
- f⁻¹(x) written as 1/f(x).
- No domain stated for f⁻¹ when asked.

## Self-test

1. f(x) = x − 4 and g(x) = 2x. Find (f ∘ g)(x) and (g ∘ f)(x).
2. f(x) = x² and g(x) = x + 1. Find (f ∘ g)(3).
3. Find the inverse of f(x) = 7 − 2x.
4. Find the inverse of f(x) = x³ + 1.
5. f(x) = √x and g(x) = x − 5. State the domain of f ∘ g.
6. f(x) = 1/x, x ≠ 0. Find (f ∘ f)(x).
7. f(x) = (x − 3)² + 2, x ≥ 3. Find f⁻¹(x) and its domain.
8. Write h(x) = (4x + 1)³ as f ∘ g.
9. Write down the identity function and (f ∘ I)(x).
10. f(2) = 7 and g(7) = 1. Find (g ∘ f)(2).
11. f(x) = 3x + 2. Solve f(x) = f⁻¹(x).
12. Explain why f(x) = x², x ∈ ℝ, has no inverse.

### Answers

1. (f ∘ g)(x) = 2x − 4; (g ∘ f)(x) = 2x − 8
2. g(3) = 4, so (f ∘ g)(3) = 16
3. f⁻¹(x) = (7 − x)/2
4. f⁻¹(x) = ∛(x − 1)
5. x ≥ 5
6. 1/(1/x) = x, so f ∘ f is the identity on x ≠ 0
7. f⁻¹(x) = 3 + √(x − 2), x ≥ 2
8. g(x) = 4x + 1 and f(x) = x³
9. I(x) = x; (f ∘ I)(x) = f(x)
10. 1
11. f is increasing, so solve 3x + 2 = x: x = −1
12. It is not one-to-one: for example f(−2) = f(2) = 4.

## Where to go next

Return to the [2.5 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-5/) for any method that slipped, then complete the [2.5 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-5-practice/). Domain and range ideas are in the [2.2 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-2-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.5.
