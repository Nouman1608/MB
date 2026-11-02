---
title: "Pearson Edexcel International Advanced Level Mathematics: Proof, partial fractions and binomial series (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P4 Partial Fractions Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on proof by contradiction, partial fractions and the binomial series for Pearson Edexcel International A Level Maths P4."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense the study guide for the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. They cover Unit P4 sections 1.1 (proof by contradiction), 2.1 (partial fractions) and 4.1 (binomial series for any rational n). The specification lists P4 as compulsory for IAL Mathematics and Pure Mathematics. It is not part of IAS. For full explanations, start with the [study guide](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/).

Then test yourself with the [practice set](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the-practice/). Track progress on the [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/), and find weak spots with the [free diagnostics](/diagnostics/).

## 1.1 Proof by contradiction

### Method in four steps

```
1. Assume the opposite of the statement.
2. Make valid deductions.
3. Reach a statement that is impossible.
4. Conclude: the assumption is false, so the statement is true.
```

### Negations to know

| Claim | Assume |
|---|---|
| x is irrational | x is rational, x = p/q in lowest terms |
| n is even | n is odd |
| there are infinitely many primes | there is a finite list of all the primes |
| no integers m, n satisfy an equation | some integers m, n satisfy it |
| there is no greatest value | there is a greatest value M (then find something bigger) |

### Key facts used again and again

- n² is even if and only if n is even. The same holds for "divisible by a prime p": if p divides n², then p divides n.
- A fraction in lowest terms has no common factor. The contradiction in the √2 proof is that p and q are both even.
- For the primes proof, N = (product of the list) + 1 leaves remainder 1 on division by every prime on the list. So N has a prime factor that is not on the list. N need not be prime itself.
- Sums, differences and products of rational numbers are rational. Use this to show that a combination such as 3 + 2√2 is irrational, once you know √2 is.

### Worked reminder

Prove that the product of a non-zero rational r and an irrational s is irrational.

```
Assume rs = a/b is rational, and r = c/d with c ≠ 0.
Then s = (a/b) ÷ (c/d) = ad/(bc), a ratio of integers with bc ≠ 0.
So s is rational. This contradicts s being irrational.
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--01-proof-anatomy.webp" width="900" height="680" alt="A 7 by 7 grid with a 5 by 5 square in one corner shows 7² − 5² = 24 left over. Beside it are the three parts of a proof: assume 2n+1 and 2n+3, show (2n+3)² − (2n+1)² = 8(n+1), conclude a multiple of 8 for every n. For n = 2 this is 49 − 25 = 24 = 8 × 3." loading="lazy">
  <figcaption>A proof starts from stated assumptions, makes valid steps and ends with a conclusion that holds for every n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--02-two-odd-letters.webp" width="900" height="820" alt="A 4 by 4 table shows p + q for odd p and q from 1, 3, 5, 7: all sixteen sums are even. The diagonal cells, where p = q, hold only 2, 6, 10 and 14, which is all that one letter 2n+1 used twice could cover. Using 2m+1 and 2n+1 gives 2(m+n+1) for every pair." loading="lazy">
  <figcaption>Two different odd numbers need two different letters; using one letter only covers the diagonal.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--03-remainder-lanes.webp" width="900" height="1075" alt="The integers 0 to 39 are arranged in four columns by remainder on division by 4. Squares sit only in the 4k and 4k+1 columns. Cubes (OCR only) sit in 4k, 4k+1 and 4k+3 but never 4k+2." loading="lazy">
  <figcaption>Every integer lies in one of four remainder lanes, so four cases cover them all.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--06-examples-not-proof.webp" width="900" height="860" alt="Four rows of dots, one per n, show each expression is prime until a single failure. 3^n + 2 fails at n = 5 (245), n² + n + 11 at n = 10 (121), 2n² + 11 at n = 11 (253) and n² + n + 41 at n = 40 (1681 = 41²)." loading="lazy">
  <figcaption>Long runs of examples can still end in a counter-example, so examples are not a proof.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--07-root2-contradiction.webp" width="900" height="830" alt="Assume √2 = p/q in lowest terms. Squaring gives p² = 2q², so p is even, and p = 2r then gives q even. Both are even so they share the factor 2, shown as a Venn overlap, which clashes with lowest terms. So √2 is irrational." loading="lazy">
  <figcaption>The assumption of lowest terms is what the contradiction clashes with.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--08-infinite-primes.webp" width="900" height="880" alt="Six primes 2 to 13 each leave remainder 1 into N = 30031. N = 59 × 509, two primes not on the list. N need not be prime, only have a prime factor missing from the list." loading="lazy">
  <figcaption>Multiplying the listed primes and adding 1 always yields a prime factor not on the list.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--09-multiple-of-three-gap.webp" width="900" height="690" alt="On a number line from 93 to 108 the multiples of 3 are filled. 6m + 9n = 3(2m + 3n) is always one of them, but 100 = 3 × 33 + 1 sits between 99 and 102, so no integers m, n exist." loading="lazy">
  <figcaption>Every value of 6m + 9n is a multiple of 3, and 100 is not.</figcaption>
</figure>


## 2.1 Partial fractions

### Forms

| Denominator | Decomposition |
|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |
| numerator degree ≥ denominator degree | polynomial + the proper fractions above |

Quadratic factors such as (x² + a) are not required.

### Method in steps

```
1. Check the degrees. If top degree ≥ bottom degree, divide first.
2. Factorise the denominator fully.
3. Write the form with A, B, C.
4. Multiply through by the whole denominator.
5. Substitute the roots of the factors to get A, B, C quickly.
6. For what is left (repeated factors), compare coefficients of x² or x, or use another value.
7. Check with an easy value of x.
```

### Worked reminder 1: distinct factors

```
(13x + 5)/((x + 2)(3x − 1)) = A/(x + 2) + B/(3x − 1)
13x + 5 = A(3x − 1) + B(x + 2)
x = −2:   −21 = −7A,   A = 3
x = 1/3:  28/3 = 7B/3, B = 4
Result: 3/(x + 2) + 4/(3x − 1)
```

### Worked reminder 2: a coefficient can be zero

```
(x² + 4)/(x(x − 2)²) = A/x + B/(x − 2) + C/(x − 2)²
x² + 4 = A(x − 2)² + Bx(x − 2) + Cx
x = 0: 4 = 4A, A = 1.   x = 2: 8 = 2C, C = 4.
x²: 1 = A + B, so B = 0
Result: 1/x + 4/(x − 2)²
```

A coefficient of 0 is a valid answer. Do not assume you have made an error.

### Worked reminder 3: equal degrees

```
(x² + 1)/((x − 1)(x + 1)) = (x² + 1)/(x² − 1) = 1 + 2/(x² − 1)
2/((x − 1)(x + 1)) = A/(x − 1) + B/(x + 1)
2 = A(x + 1) + B(x − 1)
x = 1: A = 1.   x = −1: B = −1
Result: 1 + 1/(x − 1) − 1/(x + 1)
```

## 4.1 The binomial series for any rational n

### Formulas

| Result | Statement |
|---|---|
| General series | (1 + x)ⁿ = 1 + nx + n(n − 1)/2! x² + n(n − 1)(n − 2)/3! x³ + ... |
| Validity for (1 + x)ⁿ | |x| < 1 (when n is not a non-negative integer) |
| Linear bracket | (ax + b)ⁿ = bⁿ(1 + (a/b)x)ⁿ |
| Validity for (ax + b)ⁿ | |ax/b| < 1, that is |x| < |b/a| |
| Positive integer n | the series stops; valid for every x |

### Common series to recognise

| Expression | Series | Valid for |
|---|---|---|
| (1 + x)⁻¹ | 1 − x + x² − x³ + ... | |x| < 1 |
| (1 + x)^(1/2) | 1 + x/2 − x²/8 + x³/16 − ... | |x| < 1 |
| (1 + x)^(1/3) | 1 + x/3 − x²/9 + 5x³/81 − ... | |x| < 1 |
| (1 + 2x)⁻³ | 1 − 6x + 24x² − 80x³ + ... | |x| < 1/2 |

### Method in steps

```
1. Take out the constant: (ax + b)ⁿ = bⁿ(1 + (a/b)x)ⁿ.
2. Put u = (a/b)x and use the series for (1 + u)ⁿ.
3. Substitute u carefully, with brackets, and simplify.
4. Multiply by bⁿ at the end.
5. State |x| < |b/a|.
```

### Worked reminder 4

Expand (2 − 3x)⁻² up to x².

```
(2 − 3x)⁻² = 2⁻²(1 − 3x/2)⁻²
(1 + u)⁻² = 1 − 2u + 3u² − ...   with u = −3x/2
= 1 + 3x + 27x²/4
Multiply by 1/4:  1/4 + 3x/4 + 27x²/16
Valid for |3x/2| < 1, so |x| < 2/3.
```

### Worked reminder 5

Expand (8 + x)^(1/3) up to x².

```
(8 + x)^(1/3) = 2(1 + x/8)^(1/3)
= 2[1 + x/24 − (1/9)(x²/64)] = 2 + x/12 − x²/288
Valid for |x| < 8.
```

### Quick check

Test any expansion with a small value such as x = 0.01. Work out the original expression and the series numerically. They should agree to several decimal places. A mismatch usually means a sign slip or a forgotten factor of bⁿ.

### Rational functions

```
1. Partial fractions.
2. Write each term as k(1 + ...)ⁿ and expand.
3. Combine like powers.
4. Valid range: the narrowest of the individual ranges.
```

## Must-know distinctions

- Contradiction versus a counter example: a counter example disproves a claim with one case. A contradiction proof proves a claim by showing its negation is impossible.
- Repeated factor versus two distinct factors: (x − 2)² needs two terms, but (x − 2)(x − 3) needs one term for each factor.
- Improper versus proper: divide first when the top degree is not lower than the bottom.
- Terminating versus infinite expansion: only a positive integer power stops.
- Validity of one expansion versus validity of a sum: use the intersection of ranges.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--05-counter-example-graph.webp" width="900" height="920" alt="The graph of y = x² with the line y = 25 shows x² &gt; 25 for x &lt; −5 or x &gt; 5. The claim only fits x &gt; 5. The point (−6, 36) is above the line but −6 is not greater than 5, so it disproves the claim." loading="lazy">
  <figcaption>One case that meets the condition but breaks the conclusion disproves a general claim.</figcaption>
</figure>


## Quick self-test

1. State the assumption you would make to prove by contradiction that there is no largest even integer.
2. In the proof that √2 is irrational, p² = 2q². Explain why p must be even.
3. Express (3x + 17)/((x − 1)(x + 3)) in partial fractions.
4. Write down the form of partial fractions for (4x² + 1)/(x(2x + 1)²). Do not find the constants.
5. Express (x² + 1)/((x − 1)(x + 1)) as a constant plus partial fractions.
6. Expand (1 + 2x)⁻³ up to the term in x³.
7. Expand (8 + x)^(1/3) up to x², and state the range of validity.
8. Expand (2 − 3x)⁻² up to x², and state the range of validity.
9. Expand (3 + x)⁻¹ up to x², and state the range of validity.
10. Explain why the series for (1 + x)^(1/2) cannot be used with x = 2.

### Answers

1. Assume there is a largest even integer, N. (Then N + 2 is even and larger, a contradiction.)
2. p² equals 2q², which is even, and an odd integer squared is odd, so p cannot be odd.
3. 5/(x − 1) − 2/(x + 3)
4. A/x + B/(2x + 1) + C/(2x + 1)²
5. 1 + 1/(x − 1) − 1/(x + 1)
6. 1 − 6x + 24x² − 80x³
7. 2 + x/12 − x²/288, valid for |x| < 8
8. 1/4 + 3x/4 + 27x²/16, valid for |x| < 2/3
9. 1/3 − x/9 + x²/27, valid for |x| < 3
10. The series is valid only for |x| < 1, and 2 is not less than 1, so the expansion is not valid there.

## Where marks are usually lost

- Writing "assume √2 is irrational" as the first line of the √2 proof, the wrong direction.
- Not stating "in lowest terms" in the opening assumption.
- Reaching p and q both even but not saying that this contradicts the assumption.
- Missing the B term for a repeated linear factor.
- Skipping the division when the numerator degree equals the denominator degree.
- Copying the sign of a coefficient wrongly from (−3x/2)².
- Forgetting to multiply the whole expansion by bⁿ.
- Giving |x| < b/a without absolute value signs, or using a wrong ratio such as 3/2 where 2/3 is needed.
- Not combining ranges when a rational function has two denominators.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. Unit P4: Pure Mathematics 4, sections 1.1, 2.1 and 4.1.
