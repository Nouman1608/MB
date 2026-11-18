---
title: "Edexcel International A Level Mathematics (YMA01): Partial fractions (P4.2)"
resourceType: "study-guides"
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
description: "Partial fractions for Edexcel IAL Maths Unit P4: distinct and repeated linear factors, improper fractions, and uses in integration and series expansions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2 of Unit P4, Algebra and functions, in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). The content statement is "decompose rational functions into partial fractions (denominators not more complicated than repeated linear terms)". The guidance names denominators "such as (ax + b)(cx + d)(ex + f) and (ax + b)(cx + d)²", says "the degree of the numerator may equal or exceed the degree of the denominator", lists "applications to integration, differentiation and series expansions", and states that quadratic factors such as (x² + a) "are not required".

The [guide to proof by contradiction, partial fractions and the binomial series](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/) gives a first set of decompositions. This page goes further into choosing the right form, combining substitution with comparing coefficients, and carrying the result into calculus and series. Test yourself afterwards with the [P4 partial fractions revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-edexcel-alevel-maths-revision-notes/) and the [P4 partial fractions practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-edexcel-alevel-maths-practice/). Algebraic division, which improper fractions need, is covered in the [P2 algebra and functions study guide](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-edexcel-alevel-maths/).

## Why partial fractions?

A single fraction such as (x + 11)/((x + 3)(x − 1)) is awkward to integrate or expand. Written as −2/(x + 3) + 3/(x − 1), each piece is a standard form: it integrates to a logarithm, differentiates easily and expands with the binomial series. Partial fractions reverse the process of adding fractions.

## Choosing the form

| Denominator | Form |
|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| numerator degree ≥ denominator degree | divide first: polynomial + proper fraction |

A repeated factor needs **both** B/(cx + d) and C/(cx + d)². Leaving out the single power is the most common reason the constants "will not work".

## Finding the constants

Multiply through by the whole denominator to get an identity, then:

- **substitute** values of x that make a factor zero (each one gives a constant directly), and
- **compare coefficients** (often of x² or the constant term) for any constant that substitution does not isolate.

### Worked example 1: two distinct factors

**Express (x + 11)/((x + 3)(x − 1)) in partial fractions.**

(x + 11)/((x + 3)(x − 1)) ≡ A/(x + 3) + B/(x − 1), so x + 11 ≡ A(x − 1) + B(x + 3).

- x = 1: 12 = 4B, so B = 3
- x = −3: 8 = −4A, so A = −2

**−2/(x + 3) + 3/(x − 1).** Check at x = 0: left side 11/(−3) = −11/3; right side −2/3 − 3 = −11/3.

### Worked example 2: three factors

**Express (6x² + 2x − 2)/(x(x − 1)(x + 2)) in partial fractions.**

6x² + 2x − 2 ≡ A(x − 1)(x + 2) + Bx(x + 2) + Cx(x − 1).

- x = 0: −2 = −2A, so A = 1
- x = 1: 6 = 3B, so B = 2
- x = −2: 24 − 4 − 2 = 18 = 6C, so C = 3

**1/x + 2/(x − 1) + 3/(x + 2).**

### Worked example 3: a repeated factor

**Express (3x² − 12x + 3)/((x + 1)(x − 2)²) in partial fractions.**

3x² − 12x + 3 ≡ A(x − 2)² + B(x + 1)(x − 2) + C(x + 1).

- x = 2: 12 − 24 + 3 = −9 = 3C, so C = −3
- x = −1: 3 + 12 + 3 = 18 = 9A, so A = 2
- x² terms: 3 = A + B, so B = 1

**2/(x + 1) + 1/(x − 2) − 3/(x − 2)².** Only two values make a factor zero, so the third constant must come from comparing coefficients.

### Worked example 4: an improper fraction

**Express (2x² + x − 9)/((x − 1)(x + 2)) in the form A + B/(x − 1) + C/(x + 2).**

Numerator and denominator are both degree 2, so there is a constant term. The denominator is x² + x − 2, and

2x² + x − 9 = 2(x² + x − 2) + (−x − 5)

so the fraction is 2 + (−x − 5)/((x − 1)(x + 2)). Then −x − 5 ≡ B(x + 2) + C(x − 1):

- x = 1: −6 = 3B, so B = −2
- x = −2: −3 = −3C, so C = 1

**2 − 2/(x − 1) + 1/(x + 2).** Check at x = 0: left side −9/(−2) = 4.5; right side 2 + 2 + 0.5 = 4.5.

You can also skip the division: write 2x² + x − 9 ≡ A(x − 1)(x + 2) + B(x + 2) + C(x − 1), compare x² coefficients to get A = 2, and substitute for B and C.

## Applications

### Integration

Each linear term integrates to a logarithm: ∫ k/(ax + b) dx = (k/a) ln|ax + b| + c. A squared term integrates as a power: ∫ k/(ax + b)² dx = −k/(a(ax + b)) + c.

**Example.** ∫₂³ (x + 11)/((x + 3)(x − 1)) dx = [−2 ln(x + 3) + 3 ln(x − 1)]₂³

= (−2 ln 6 + 3 ln 2) − (−2 ln 5 + 0) = ln(8 × 25/36) = **ln(50/9)**.

Collecting the logarithms into one, as here, is usually required for an exact answer "in the form ln k".

### Differentiation

From Worked example 1, d/dx[−2(x + 3)⁻¹ + 3(x − 1)⁻¹] = 2/(x + 3)² − 3/(x − 1)², which is quicker than the quotient rule on the original fraction.

### Series expansions

Using the binomial series for negative powers (Unit P4), expand each term separately:

- 3/(x − 1) = −3(1 − x)⁻¹ = −3 − 3x − 3x² − ...
- −2/(x + 3) = −(2/3)(1 + x/3)⁻¹ = −2/3 + (2/9)x − (2/27)x² + ...

Adding: (x + 11)/((x + 3)(x − 1)) = **−11/3 − (25/9)x − (83/27)x² + ...**

The first expansion is valid for |x| < 1 and the second for |x| < 3, so the combined expansion is valid for **|x| < 1**, the narrower range. See the [P4 binomial expansion study guide](/resources/edexcel-a-level-mathematics-yma01-p4-binomial-expansion-edexcel-alevel-maths/) for the series itself.

## Common mistakes

- **Missing the single power** with a repeated factor.
- **Not dividing first** when the numerator's degree is not lower than the denominator's.
- **Arithmetic slips in substitution,** especially with fractions such as x = −½ for (2x + 1).
- **Losing the coefficient of x** when integrating k/(ax + b): the answer is (k/a) ln|ax + b|, not k ln|ax + b|.
- **Taking the wider validity range** when combining series.
- **Not checking** with a convenient value of x such as 0.

## Exam technique

- **"Express in partial fractions"**: state the form, show the identity, find each constant, then write the final answer in full.
- **"Given that ... ≡ A + B/(...) + C/(...), find A, B and C"**: the form is given, so use it exactly.
- **"Hence find ∫ ..."** means integrate the partial fractions you have just found.
- **"Give your answer in the form ln k"**: combine logs using the laws; k is a number, often a fraction.
- **"Hence or otherwise expand ... and state the range of values of x for which it is valid"**: expand each partial fraction and give the most restrictive range.

## Related resources

- [P4 partial fractions revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-edexcel-alevel-maths-revision-notes/)
- [P4 partial fractions practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions-edexcel-alevel-maths-practice/)
- [Proof by contradiction, partial fractions and the binomial series](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/)
- [Integration by substitution, integration by parts and partial fractions](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and/)
- [P2 algebra and functions study guide](/resources/edexcel-a-level-mathematics-yma01-p2-algebra-and-functions-edexcel-alevel-maths/)
