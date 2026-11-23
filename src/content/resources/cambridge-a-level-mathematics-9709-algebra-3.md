---
title: "Cambridge A Level Mathematics (9709): Algebra (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "algebra-cambridge-alevel-maths-3"
description: "Study guide to Cambridge 9709 Paper 3 section 3.1 Algebra: modulus inequalities, the factor theorem, all partial fraction types and binomial series."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on section **3.1 Algebra** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. Pure Mathematics 3 is examined on Paper 3 (1 hour 50 minutes, 75 marks), which is compulsory for the full A Level. The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) gives one example per section; this page concentrates on 3.1 alone, with the harder cases that Paper 3 questions are built from. Afterwards, condense it with the [3.1 Algebra revision notes](/resources/cambridge-a-level-mathematics-9709-algebra-3-revision-notes/) and test yourself with the [3.1 Algebra practice questions](/resources/cambridge-a-level-mathematics-9709-algebra-3-practice/).

## What section 3.1 asks for

| Syllabus statement | What it means in an exam |
|---|---|
| Understand \|x\|, sketch y = \|ax + b\|, use \|a\| = \|b\| ⇔ a² = b² and \|x − a\| < b ⇔ a − b < x < a + b | Solve modulus equations and inequalities, including ones with an ordinary expression on one side |
| Divide a polynomial of degree up to 4 by a linear or quadratic polynomial | Find the quotient and the remainder, which may be zero |
| Use the factor and remainder theorems | Find factors, remainders and unknown coefficients, including divisors (ax + b) with a ≠ 1 |
| Partial fractions | Decompose when the denominator is at most (ax + b)(cx + d)(ex + f), (ax + b)(cx + d)² or (ax + b)(cx² + d) |
| Expansion of (1 + x)ⁿ for rational n | Adapt the series to forms such as (2 − x)⁻¹ and state the values of x for which it is valid |

Two limits matter. Partial fractions exclude cases where the degree of the numerator **exceeds** that of the denominator, so a numerator of the **same** degree can still appear. For the binomial series, finding the general term is not required. The first three statements repeat [Pure Mathematics 2 section 2.1](/resources/a-level-maths-9709-pure-mathematics-2-algebra/); the last two are new at Paper 3.

## Modulus inequalities with one ordinary side

When both sides are moduli you can square. When one side is an ordinary expression such as x + 6, that side can be negative, so squaring can produce boundary values that are not real meeting points. Work from a sketch instead.

*Worked example 1.* Solve x + 6 > |3x − 2|.

```text
Sketch: V-shape y = |3x − 2|, vertex (2/3, 0); line y = x + 6.
Right arm:  3x − 2 = x + 6       →  x = 4    check: |10| = 10 ✓
Left arm:   −(3x − 2) = x + 6    →  x = −1   check: |−5| = 5 ✓
The line lies above the V between the two meeting points.
Answer: −1 < x < 4
```

Check each boundary in the original equation before using it. If one case gives a value where x + 6 is negative, that value is not a meeting point and must be discarded.

## The factor theorem with two unknowns

Each fact about p(x) gives one equation. A factor (ax + b) gives p(−b/a) = 0; a remainder R on division by (ax + b) gives p(−b/a) = R.

*Worked example 2.* p(x) = 6x³ + ax² + bx − 2 has factors (2x − 1) and (x + 2). Find a and b and factorise p(x) completely.

```text
p(1/2) = 0:   6/8 + a/4 + b/2 − 2 = 0   →  ×4:  a + 2b = 5
p(−2)  = 0:   −48 + 4a − 2b − 2 = 0     →  2a − b = 25
Solving:      a = 11,  b = −3
p(x) = 6x³ + 11x² − 3x − 2 = (2x − 1)(x + 2)(3x + 1)
```

The third factor comes from comparing the leading coefficient (6 = 2 × 1 × 3) and the constant term (−2 = −1 × 2 × 1). Always multiply out to check.

## Partial fractions: the three denominators

| Denominator | Form to write down |
|---|---|
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| (ax + b)(cx² + d) | A/(ax + b) + (Bx + C)/(cx² + d) |

Write the identity numerator ≡ (combined numerators), then substitute the roots of the linear factors to find constants quickly. Compare coefficients for whatever is left.

*Worked example 3.* Express (4x² + 5x + 3)/((x + 1)(2x + 1)(x + 2)) in partial fractions.

```text
4x² + 5x + 3 ≡ A(2x + 1)(x + 2) + B(x + 1)(x + 2) + C(x + 1)(2x + 1)
x = −1:     4 − 5 + 3 = A(−1)(1)          →  2 = −A    →  A = −2
x = −1/2:   1 − 5/2 + 3 = B(1/2)(3/2)     →  3/2 = 3B/4  →  B = 2
x = −2:     16 − 10 + 3 = C(−1)(−3)       →  9 = 3C    →  C = 3
Answer:  −2/(x + 1) + 2/(2x + 1) + 3/(x + 2)
```

### When the numerator has the same degree

If the numerator and denominator have equal degree, the fraction is improper and needs a constant term first. Either divide, or include a constant in the form.

*Worked example 4.* Express (2x² + x + 3)/((x − 1)(x + 2)) in partial fractions.

```text
(x − 1)(x + 2) = x² + x − 2, so the leading coefficients give a constant 2.
2x² + x + 3 ≡ 2(x − 1)(x + 2) + A(x + 2) + B(x − 1)
x = 1:    6 = 3A    →  A = 2
x = −2:   9 = −3B   →  B = −3
Answer:  2 + 2/(x − 1) − 3/(x + 2)
```

Check at x = 0: the original gives 3/(−2) = −1.5 and the answer gives 2 − 2 − 1.5 = −1.5. Leaving out the constant is the commonest way to lose every mark on this type.

## The binomial series for rational n

MF19 gives (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …, valid for |x| < 1. For (a + bx)ⁿ, take out aⁿ first so that the bracket starts with 1.

*Worked example 5.* Expand 1/(2 + 3x)² up to the term in x², and state the set of values of x for which the expansion is valid.

```text
(2 + 3x)⁻² = 2⁻²(1 + 3x/2)⁻² = ¼(1 + 3x/2)⁻²
(1 + u)⁻² = 1 − 2u + 3u² + …   with u = 3x/2
          = 1 − 3x + 27x²/4 + …
× ¼:   1/4 − 3x/4 + 27x²/16
Valid for |3x/2| < 1, that is |x| < 2/3
```

Two marks are often lost here: forgetting to raise the 2 to the power −2 (it becomes ¼, not 2), and squaring only the 3 instead of the whole 3x/2.

## Partial fractions, then expansion

A common Paper 3 structure combines the last two statements: split a fraction, then expand each part.

*Worked example 6.* f(x) = (5x² + x + 6)/((1 − x)(2 + x²)).

(a) Express f(x) in partial fractions. (b) Hence find the expansion of f(x) up to the term in x², and state the values of x for which it is valid.

```text
(a) 5x² + x + 6 ≡ A(2 + x²) + (Bx + C)(1 − x)
    x = 1:          12 = 3A          →  A = 4
    compare x²:     5 = A − B        →  B = −1
    compare const:  6 = 2A + C       →  C = −2
    f(x) = 4/(1 − x) − (x + 2)/(2 + x²)

(b) 4(1 − x)⁻¹ = 4 + 4x + 4x² + …
    (2 + x²)⁻¹ = ½(1 + x²/2)⁻¹ = ½ − x²/4 + …
    (x + 2)(½ − x²/4) = 1 + x/2 − x²/2 + …   (up to x²)
    f(x) = 4 + 4x + 4x² − 1 − x/2 + x²/2 = 3 + 7x/2 + 9x²/2
```

Validity: 4/(1 − x) needs |x| < 1, and (2 + x²)⁻¹ needs |x²/2| < 1, that is |x| < √2. Both must hold, so the expansion is valid for **|x| < 1**, the narrower range. A quick check: f(0) = 6/2 = 3, which matches the constant term.

## Common mistakes

- Squaring an inequality such as x + 6 > |3x − 2|, then keeping a boundary that the sketch shows is not a meeting point.
- Writing B/(cx + d)² alone for a repeated factor and leaving out B/(cx + d).
- Using a constant numerator over cx² + d instead of Bx + C.
- Missing the constant term when the numerator has the same degree as the denominator.
- Expanding (a + bx)ⁿ without taking out aⁿ, or taking out a instead of aⁿ.
- Stating validity for only one part of a combined expansion instead of the narrower interval.
- Substituting x = 1/2 for the factor (2x + 1) instead of x = −1/2.

## Exam technique for Paper 3 command words

- **Express … in partial fractions**: write the form first. A correct form can earn a method mark even if the arithmetic slips.
- **Show that**: every substitution must be visible, and the last line must state what was to be shown.
- **Hence**: use the result just found. In an expansion question, "hence" means expand the partial fractions, not the original fraction.
- **State the set of values**: give an inequality in x, such as |x| < 2/3, not a statement about the bracket.
- **Exact** answers keep fractions and surds; otherwise give 3 significant figures. Unsupported calculator answers earn no marks.

## Frequently asked questions

**Can the numerator have the same degree as the denominator in 9709 partial fractions?**
Yes. The syllabus excludes only numerators of higher degree, so equal degree can appear. Include a constant term, found from the leading coefficients or by division.

**How do you decide the validity of a combined binomial expansion?**
Find the interval for each bracket separately, then take the narrower one, because every part of the sum must converge.

## Where to go next

- Condense and self-test: [3.1 Algebra revision notes](/resources/cambridge-a-level-mathematics-9709-algebra-3-revision-notes/)
- Exam-style questions with marks: [3.1 Algebra practice questions](/resources/cambridge-a-level-mathematics-9709-algebra-3-practice/)
- Partial fractions are used again for integration in [3.5 Integration](/resources/cambridge-a-level-mathematics-9709-integration-3/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.1 Algebra.
