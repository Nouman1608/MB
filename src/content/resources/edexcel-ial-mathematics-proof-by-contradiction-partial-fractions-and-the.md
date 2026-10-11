---
title: "Pearson Edexcel International Advanced Level Mathematics: Proof, partial fractions and binomial series (YMA01)"
seoTitle: "Edexcel IAL Maths P4: Contradiction, Partial Fractions"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Proof by contradiction, partial fractions and the binomial series for any rational n"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 150
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-proof-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-algebra-and-functions-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-binomial-expansion-edexcel-alevel-maths"
description: "Study guide to proof by contradiction, partial fractions and the binomial series for any rational n, for Pearson Edexcel International A Level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. It covers three parts of Unit P4: Pure Mathematics 4, namely proof by contradiction (1.1), partial fractions (2.1) and the binomial series for any rational n (4.1). The specification lists P4 as a compulsory unit for IAL Mathematics and Pure Mathematics. It is not part of IAS. It assumes the content of P1, P2 and P3.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the-revision-notes/) and the [practice set](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the-practice/). Keep the [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) open, and use the [free diagnostics](/diagnostics/) to find your gaps.

## What this unit covers

| Spec ref | Outcome |
|---|---|
| 1.1 | Proof by contradiction, including the irrationality of √2, the infinity of primes, and unfamiliar proofs |
| 2.1 | Partial fractions with denominators such as (ax + b)(cx + d)(ex + f) and (ax + b)(cx + d)², where the numerator degree may equal or exceed the denominator degree |
| 4.1 | The binomial series for any rational n; the expansion of (ax + b)ⁿ for |x| < b/a; expansion of rational functions by partial fractions |

Quadratic factors in the denominator, such as x² + a, are not required in 2.1.

## Proof by contradiction (1.1)

To prove a statement by contradiction, you assume it is false and show that this leads to something impossible. If every step is valid, the only thing left to blame is the assumption, so the statement must be true.

```
1. Write the opposite (negation) of what you want to prove.
2. Reason forward with valid steps.
3. Reach a result that clashes with the assumption or with a known fact.
4. State that the assumption is false, so the original statement is true.
```

Take care with step 1. The opposite of "n is even" is "n is odd". The opposite of "x is rational" is "x is irrational". The opposite of "there are finitely many" is "there are infinitely many".

**Facts you may use.** An integer squared is even only if the integer is even. A rational number can be written as p/q with p and q integers, q ≠ 0, and with no common factor other than 1.

### The irrationality of √2

```
Assume √2 is rational. Then √2 = p/q, where p and q are positive
integers with no common factor.
Square: 2 = p²/q², so p² = 2q².
So p² is even, hence p is even. Write p = 2r.
Then 4r² = 2q², so q² = 2r², so q² is even, hence q is even.
Now p and q are both even, so they share the factor 2.
This contradicts "no common factor".
So √2 is irrational.
```

The contradiction is with your own opening choice of lowest terms. Say so in the last line.

### The infinity of primes

```
Assume there are finitely many primes, p₁, p₂, ..., pₙ (a complete list).
Let N = p₁ × p₂ × ... × pₙ + 1.
N > 1, so N has a prime factor. That prime must be on the list, say pₖ.
pₖ divides p₁ × p₂ × ... × pₙ and pₖ divides N,
so pₖ divides N − p₁ × p₂ × ... × pₙ = 1.
No prime divides 1. This is a contradiction.
So there are infinitely many primes.
```

N is not always prime. The argument only needs N to have a prime factor.

### Unfamiliar proofs

You may be asked to prove a result you have not seen. The same four steps apply.

**Worked example 1.** Prove that if r is rational and s is irrational, then r + s is irrational. Hence show that 4 + √2 is irrational.

```
Assume r + s is rational: r + s = a/b, and r = c/d (integers, b and d non-zero).
Then s = a/b − c/d = (ad − bc)/(bd).
ad − bc and bd are integers and bd ≠ 0, so s is rational.
This contradicts s being irrational. So r + s is irrational.
Now 4 is rational and √2 is irrational, so 4 + √2 is irrational.
```

**Worked example 2.** Prove that there are no integers m and n such that 6m + 9n = 100.

```
Assume integers m and n exist with 6m + 9n = 100.
Then 3(2m + 3n) = 100, so 100 is a multiple of 3.
But 100 = 3 × 33 + 1, so it is not.
Contradiction. So no such integers exist.
```

## Partial fractions (2.1)

A partial fraction decomposition rewrites one rational expression as a sum of simpler ones. You need it for series (section 4.1 below) and for integration and differentiation elsewhere in P4.

| Denominator contains | Partial fractions |
|---|---|
| distinct linear factors (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| a repeated factor (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| numerator degree ≥ denominator degree | a polynomial part, plus the fractions above |

For the repeated factor you need both B/(cx + d) and C/(cx + d)². Leaving out the middle term gives a decomposition that cannot match the original expression.

### Distinct linear factors

**Worked example 3.** Express (5x² + 14x − 1)/((x − 1)(x + 2)(2x + 1)) in partial fractions.

```
Write  (5x² + 14x − 1)/((x − 1)(x + 2)(2x + 1)) = A/(x − 1) + B/(x + 2) + C/(2x + 1)
Multiply through: 5x² + 14x − 1 = A(x + 2)(2x + 1) + B(x − 1)(2x + 1) + C(x − 1)(x + 2)
x = 1:     18 = 9A,   so A = 2
x = −2:    −9 = 9B,   so B = −1
x = −1/2:  −27/4 = −9C/4,  so C = 3
```

Result: 2/(x − 1) − 1/(x + 2) + 3/(2x + 1). Check with x = 0. The left side is −1/((−1)(2)(1)) = 1/2. The right side is −2 − 1/2 + 3 = 1/2. They agree.

### A repeated factor

**Worked example 4.** Express (10x² − 10x − 2)/((x + 1)(2x − 1)²) in partial fractions.

```
10x² − 10x − 2 = A(2x − 1)² + B(x + 1)(2x − 1) + C(x + 1)
x = −1:   18 = 9A,       so A = 2
x = 1/2:  −9/2 = 3C/2,   so C = −3
Compare x²: 10 = 4A + 2B = 8 + 2B, so B = 1
```

Result: 2/(x + 1) + 1/(2x − 1) − 3/(2x − 1)².

### Numerator degree equal to or greater than denominator degree

Divide first. Then decompose the remainder.

**Worked example 5.** Express (2x³ + 3x² + 7)/((x − 1)(x + 3)) in partial fractions.

```
(x − 1)(x + 3) = x² + 2x − 3
2x³ + 3x² + 7 = (2x − 1)(x² + 2x − 3) + (8x + 4)
So the fraction = 2x − 1 + (8x + 4)/((x − 1)(x + 3))
8x + 4 = A(x + 3) + B(x − 1)
x = 1: 12 = 4A, A = 3.   x = −3: −20 = −4B, B = 5
```

Result: 2x − 1 + 3/(x − 1) + 5/(x + 3).

**Worked example 6.** Express (3x³ − 11x² + 2x + 34)/((x + 1)(x − 2)²) in partial fractions.

```
(x + 1)(x − 2)² = x³ − 3x² + 4
3x³ − 11x² + 2x + 34 = 3(x³ − 3x² + 4) + (−2x² + 2x + 22)
−2x² + 2x + 22 = A(x − 2)² + B(x + 1)(x − 2) + C(x + 1)
x = −1: 18 = 9A, A = 2.   x = 2: 18 = 3C, C = 6.
x²: −2 = A + B, so B = −4
```

Result: 3 + 2/(x + 1) − 4/(x − 2) + 6/(x − 2)².

## The binomial series for any rational n (4.1)

For a positive integer n the binomial expansion stops after n + 1 terms. For any rational n (negative or a fraction) it never stops, and it only converges for a limited range of x.

```
(1 + x)ⁿ = 1 + nx + n(n − 1)/2! x² + n(n − 1)(n − 2)/3! x³ + ...    valid for |x| < 1
```

To expand (ax + b)ⁿ, take out bⁿ:

```
(ax + b)ⁿ = bⁿ (1 + (a/b) x)ⁿ,   valid for |x| < |b/a|
```

Take the factor bⁿ to the front before you expand. If b is not 1, the whole bracket has to be rewritten, not just the x term.

**Worked example 7.** Expand (1 − 2x)⁻³ up to the term in x³, and state the range of validity.

```
Replace x by −2x and n by −3:
1 + (−3)(−2x) + (−3)(−4)/2 (−2x)² + (−3)(−4)(−5)/6 (−2x)³
= 1 + 6x + 24x² + 80x³
Valid when |−2x| < 1, so |x| < 1/2.
```

**Worked example 8.** Expand √(9 − 4x) up to x³, state the range of validity, and use x = 0.1 to estimate √8.6.

```
√(9 − 4x) = 3(1 − 4x/9)^(1/2)
(1 + u)^(1/2) = 1 + u/2 − u²/8 + u³/16 − ...   with u = −4x/9
= 1 − 2x/9 − 2x²/81 − 4x³/729
Multiply by 3:  3 − 2x/3 − 2x²/27 − 4x³/243
Valid for |4x/9| < 1, so |x| < 9/4.
```

For x = 0.1, 9 − 4x = 8.6. The series gives 2.93258 to 5 decimal places, which matches √8.6. The value 0.1 lies inside |x| < 9/4, so the estimate is allowed.

### Rational functions

Decompose into partial fractions. Expand each piece. Add. The result is valid only where every expansion is valid, so take the narrowest range.

**Worked example 9.** Express (5 − x)/((1 + x)(1 − 2x)) in partial fractions, then expand it up to x³ and state the range of validity.

```
(5 − x)/((1 + x)(1 − 2x)) = A/(1 + x) + B/(1 − 2x)
5 − x = A(1 − 2x) + B(1 + x)
x = −1: 6 = 3A, A = 2.   x = 1/2: 9/2 = 3B/2, B = 3
= 2(1 + x)⁻¹ + 3(1 − 2x)⁻¹
2(1 − x + x² − x³) + 3(1 + 2x + 4x² + 8x³)
= 5 + 4x + 14x² + 22x³
(1 + x)⁻¹ needs |x| < 1;  (1 − 2x)⁻¹ needs |x| < 1/2.
Both hold only for |x| < 1/2.
```

**Worked example 10.** Expand (10x − 5x² + 4)/((1 − x)²(1 + 2x)) up to x³.

```
Partial fractions: 2/(1 − x) + 3/(1 − x)² − 1/(1 + 2x)
(1 − x)⁻¹ = 1 + x + x² + x³
(1 − x)⁻² = 1 + 2x + 3x² + 4x³
(1 + 2x)⁻¹ = 1 − 2x + 4x² − 8x³
Sum: 4 + 10x + 7x² + 22x³,   valid for |x| < 1/2.
```

## Common errors

- Assuming the opposite wrongly, for instance "√2 is not an integer" instead of "√2 is rational".
- Forgetting that a contradiction proof has to end by saying why the assumption fails.
- Starting the √2 proof without the words "in lowest terms". Without them there is nothing to contradict.
- Writing A/(cx + d)² as the only term for a repeated factor.
- Not dividing first when the numerator degree is equal to or higher than the denominator degree.
- Expanding (2 + 3x)ⁿ as 1 + n(3x) + ... without taking out 2ⁿ.
- Writing |x| < 3/2 for (2 + 3x)ⁿ. The condition is |3x/2| < 1, which gives |x| < 2/3.
- Quoting the range of one partial fraction rather than the narrowest range.

Move on to the [practice set](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the-practice/) once you can do the worked examples without looking.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. Unit P4: Pure Mathematics 4, sections 1.1, 2.1 and 4.1.
