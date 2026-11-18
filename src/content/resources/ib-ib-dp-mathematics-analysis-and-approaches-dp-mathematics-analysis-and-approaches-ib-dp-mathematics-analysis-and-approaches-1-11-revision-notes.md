---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Partial fractions (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-11"
description: "Revision notes for IB DP Maths AA HL section 1.11: the partial fractions identity, three ways to find A and B, factorising, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.11, partial fractions**, of IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is **HL only**. The syllabus covers proper fractions with at most two distinct linear factors in the denominator. For full explanations and worked examples, use the [section 1.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-11/).

## Condensed recall

**The form.**

(px + q)/((ax + b)(cx + d)) ≡ A/(ax + b) + B/(cx + d), with A and B constants.

**Conditions.** The fraction is proper (numerator degree 0 or 1) and the two linear factors are different.

**The working identity.** Multiply through by the denominator:

px + q ≡ A(cx + d) + B(ax + b).

It holds for every x, so you may substitute any value and equate coefficients.

**Method 1: substitution.** In px + q ≡ A(cx + d) + B(ax + b), the value x = −b/a makes the B term vanish and gives A; the value x = −d/c makes the A term vanish and gives B.

**Method 2: equating coefficients.** Compare x terms and constants to get two simultaneous equations in A and B.

**Method 3: cover-up.** For the fraction over (ax + b), cover that factor in the original and substitute its root into what is left.

**Always check.** Substitute an easy value, such as x = 0 or x = 1, into both the original fraction and your answer.

**Step-by-step summary**

1. Factorise the denominator completely.
2. Write the partial fraction form with unknowns A and B.
3. Multiply out to get the polynomial identity.
4. Find A and B by substitution (or coefficients).
5. Write the final answer with the numbers in place.
6. Check with one value of x.

**Factorising reminders**

- x² − k² = (x − k)(x + k)
- x² + kx = x(x + k)
- ax² + bx + c with a ≠ 1: find two numbers with product ac and sum b, split the middle term, then factorise in pairs. Example: 3x² + 5x − 2: ac = −6, numbers 6 and −1, so 3x² + 6x − x − 2 = 3x(x + 2) − (x + 2) = (3x − 1)(x + 2).

**Uses**

- Binomial series: expand each partial fraction separately, then add; the validity is the smaller interval.
- HL integration: each term integrates to a logarithm, for example ∫ A/(ax + b) dx = (A/a) ln|ax + b| + C.

## Key terms

| Term | Meaning |
|---|---|
| Rational function | A fraction with polynomials in the numerator and denominator |
| Proper fraction | Numerator degree less than denominator degree |
| Linear factor | A factor of the form ax + b |
| Distinct factors | Factors that are not multiples of each other |
| Partial fractions | Simpler fractions whose sum is the original fraction |
| Identity (≡) | Equal for every permitted value of x |
| Cover-up method | Shortcut: cover a factor, substitute its root into the rest |

## Exam traps

- **Wrong substitution value.** The root of 3x − 1 is x = 1/3.
- **Factor with a negative x term.** The root of (4 − x) is x = 4. With (4 − x) in the denominator, the fraction is A/(4 − x), and A keeps its own sign.
- **Arithmetic with fractions.** Substituting x = 1/3 often produces fractions on both sides; multiply through rather than estimating.
- **Unfactorised denominator.** Splitting (x + 5)/(x² − x − 6) needs (x − 3)(x + 2) first.
- **Lost negative.** If B = −1, write −1/(x + 2), not 1/(x + 2) with a sign written elsewhere.
- **Integration coefficient.** ∫ 3/(2x + 1) dx = (3/2) ln|2x + 1| + C; the 1/2 from the inner derivative is easy to forget.

## Self-test

1. Factorise x² − 16 and 2x² − x − 1.
2. Express (5x − 1)/((x + 1)(x − 2)) in partial fractions.
3. Express 6/(x² − 9) in partial fractions.
4. Express (x + 7)/(x² + x − 2) in partial fractions.
5. Express (4x + 1)/(x(2x + 1)) in partial fractions.
6. Express (x − 8)/((x − 2)(x + 3)) in partial fractions and check with x = 0.
7. Express 5/((1 − x)(2 + x)) in partial fractions.
8. Explain why substituting x = 2 into 3x + 1 ≡ A(x + 1) + B(x − 2) is allowed, even though the original fraction is undefined at x = 2.
9. Express (7x + 2)/(3x² + 5x − 2) in partial fractions.
10. Find ∫ 4/(x² − 4) dx, using partial fractions.
11. Write 1/((1 − x)(1 + x)) in partial fractions and hence find its expansion up to x².
12. State why (x² + 1)/((x − 1)(x + 1)) does not fit the section 1.11 form directly.

**Answers**

1. (x − 4)(x + 4); (2x + 1)(x − 1).
2. x = −1: −6 = −3A, A = 2; x = 2: 9 = 3B, B = 3. So 2/(x + 1) + 3/(x − 2).
3. 1/(x − 3) − 1/(x + 3).
4. x² + x − 2 = (x + 2)(x − 1). x = 1: 8 = 3B, so B = 8/3; x = −2: 5 = −3A, so A = −5/3. Answer: 8/(3(x − 1)) − 5/(3(x + 2)).
5. x = 0: 1 = A; x = −1/2: −1 = −B/2, so B = 2. Answer: 1/x + 2/(2x + 1).
6. x = 2: −6 = 5A, A = −6/5; x = −3: −11 = −5B, B = 11/5. Answer: −6/(5(x − 2)) + 11/(5(x + 3)). Check: left −8/(−6) = 4/3; right 3/5 + 11/15 = 20/15 = 4/3.
7. x = 1: 5 = 3A, A = 5/3; x = −2: 5 = 3B, B = 5/3. Answer: 5/(3(1 − x)) + 5/(3(2 + x)).
8. After multiplying through, the two sides are polynomials that are equal for every x, so the identity also holds at x = 2.
9. 3x² + 5x − 2 = (3x − 1)(x + 2). x = 1/3: 13/3 = (7/3)A, so A = 13/7; x = −2: −12 = −7B, so B = 12/7. Answer: 13/(7(3x − 1)) + 12/(7(x + 2)).
10. 4/(x² − 4) = 1/(x − 2) − 1/(x + 2), so the integral is ln|x − 2| − ln|x + 2| + C.
11. (1/2)/(1 − x) + (1/2)/(1 + x). Expansion: (1/2)(1 + x + x²) + (1/2)(1 − x + x²) = 1 + x², valid for |x| < 1.
12. The numerator and denominator both have degree 2, so the fraction is not proper.

## Where next

Practise the algebra, series and integration links in the [section 1.11 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-11-practice/). Binomial series are summarised in the [section 1.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.11.
