---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Partial fractions (P4.2) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-algebra-and-functions-edexcel-alevel-maths"
description: "Condensed notes on partial fractions for Edexcel IAL Maths Unit P4: forms, finding constants, improper fractions, integration and series, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2 of Unit P4 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "decompose rational functions into partial fractions (denominators not more complicated than repeated linear terms)", including numerators of equal or higher degree and "applications to integration, differentiation and series expansions". For full worked examples, use the [P4 partial fractions study guide](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions/), then try the [P4 partial fractions practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-practice/).

## The forms

| Denominator | Write the fraction as |
|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| Improper: numerator degree ≥ denominator degree | (polynomial) + proper partial fractions |

Quadratic factors such as (x² + 4) in the denominator are outside this specification.

## Method

1. Factorise the denominator fully into linear factors.
2. Check the degrees; if improper, divide (or include a polynomial term in the identity).
3. Write the form with unknown constants.
4. Multiply through by the denominator to get an identity in x.
5. Substitute the roots of each factor to find constants directly.
6. Compare coefficients (x² term or constant) for any constant left over.
7. Write the answer out in full and check with x = 0 (or any convenient value).

## Two quick examples

**Distinct factors.** 3/((x − 1)(x + 2)): 3 ≡ A(x + 2) + B(x − 1). x = 1: A = 1. x = −2: B = −1. Answer 1/(x − 1) − 1/(x + 2).

**Repeated factor.** (x + 5)/(x + 1)² ≡ A/(x + 1) + B/(x + 1)²: x + 5 ≡ A(x + 1) + B. Comparing x terms: A = 1. x = −1: B = 4. Answer 1/(x + 1) + 4/(x + 1)².

## Improper fractions

For (polynomial of degree 2)/(product of two linear factors), the polynomial part is a constant equal to the ratio of the x² coefficients. For degree 3 over degree 2, the polynomial part is linear, Ax + B.

Example: (x³ − x² − 4x + 7)/((x − 2)(x + 1)). Dividing by x² − x − 2 gives quotient x and remainder −2x + 7, so the fraction is x + 1/(x − 2) − 3/(x + 1).

## Applications

| Use | Key result |
|---|---|
| Integration | ∫ k/(ax + b) dx = (k/a) ln\|ax + b\| + c |
| Integration (repeated) | ∫ k/(ax + b)² dx = −k/(a(ax + b)) + c |
| Differentiation | d/dx [k/(ax + b)] = −ka/(ax + b)² |
| Series | Expand each term with the binomial series; validity is the narrowest of the individual ranges |

For series: k/(1 + bx) = k(1 + bx)⁻¹ is valid for |bx| < 1. For k/(a + bx), first take out a factor: (k/a)(1 + bx/a)⁻¹, valid for |x| < |a/b|.

## Key terms

| Term | Meaning |
|---|---|
| Rational function | A fraction whose numerator and denominator are polynomials |
| Proper fraction | Numerator degree less than denominator degree |
| Improper fraction | Numerator degree equal to or greater than denominator degree |
| Partial fractions | Simpler fractions that add up to the original |
| Identity (≡) | Holds for every value of x, so any value may be substituted |
| Repeated factor | A factor that appears squared, such as (x − 2)² |
| Comparing coefficients | Equating the coefficients of each power of x on both sides of an identity |

## Exam traps

- (x − 2)² needs B/(x − 2) **and** C/(x − 2)².
- An improper fraction without a polynomial term cannot be decomposed correctly.
- For (2x + 1), substitute x = −½.
- ∫ 6/(3x − 1) dx = 2 ln|3x − 1| + c: divide by the coefficient of x.
- In a combined series, the validity is the smaller range.
- Write the final partial fractions explicitly; a list of constants alone may lose the final mark.

## Self-test

**1.** Write the form for (3x + 1)/((x + 2)(x − 5)).

**2.** Write the form for 1/((x − 1)(x + 1)²).

**3.** Write the form for (x² + 3)/((x − 1)(x + 2)).

**4.** Express 2x/((x + 1)(x − 1)) in partial fractions.

**5.** Find ∫ 4/(2x + 1) dx.

**6.** Find ∫ 1/(x − 3)² dx.

**7.** One partial fraction expands validly for |x| < 1 and another for |x| < ½. State the validity of the combined expansion.

**8.** Find the constant term A when (4x² − 1)/((x − 2)(x + 3)) is written as A + B/(x − 2) + C/(x + 3).

**9.** Express 5/((x − 2)(x + 3)) in partial fractions.

**10.** Why must (x³ + 1)/(x² − 1) be divided before decomposing?

**11.** Differentiate 3/(x − 1).

### Answers

**1.** A/(x + 2) + B/(x − 5).

**2.** A/(x − 1) + B/(x + 1) + C/(x + 1)².

**3.** A + B/(x − 1) + C/(x + 2).

**4.** 2x ≡ A(x − 1) + B(x + 1): x = 1 gives B = 1; x = −1 gives A = 1. Answer 1/(x + 1) + 1/(x − 1).

**5.** 2 ln|2x + 1| + c.

**6.** −1/(x − 3) + c.

**7.** |x| < ½.

**8.** A = 4, the ratio of the x² coefficients (4 ÷ 1).

**9.** 5 ≡ A(x + 3) + B(x − 2): A = 1, B = −1. Answer 1/(x − 2) − 1/(x + 3).

**10.** The numerator has degree 3, higher than the denominator's degree 2, so it is improper and contains a polynomial part.

**11.** −3/(x − 1)².

## More resources on this topic

- [P4 partial fractions study guide](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions/)
- [P4 partial fractions practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-practice/)
- [Proof by contradiction, partial fractions and binomial series revision notes](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the-revision-notes/)
- [P2 algebra and functions revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-revision-notes/)
