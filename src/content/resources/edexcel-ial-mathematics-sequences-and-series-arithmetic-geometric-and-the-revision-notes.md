---
title: "Pearson Edexcel International Advanced Level Mathematics: Sequences and series: arithmetic, geometric and the binomial expansion (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths Sequences and Series Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Sequences and series: arithmetic, geometric and the binomial expansion"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 142
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-sequences-and-series-edexcel-alevel-maths"
description: "Condensed revision notes on sequences and series for Pearson Edexcel IAL Mathematics Unit P2: formulae, methods, self-test and common mistakes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense section 4 (topics 4.1 to 4.5) of Unit P2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification states that P2 is compulsory for IAS Mathematics and IAL Mathematics (and Pure Mathematics). For full explanations and proofs read the [study guide](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the/), then test yourself on the [practice questions](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-practice/).

Related pages: [Unit P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/), the [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and [all free 10-minute diagnostics](/diagnostics/).

## Key vocabulary

- Term: one entry in a sequence. The nth term is uₙ.
- Common difference d (arithmetic) and common ratio r (geometric).
- Series: the sum of the terms of a sequence. Sₙ is the sum of the first n terms.
- Convergent geometric series: one with |r| < 1, which has a finite sum to infinity S∞.
- Order of a periodic sequence: the number of terms in one repeating cycle.
- Binomial coefficient ⁿCᵣ: the number of ways to choose r items from n, and the coefficient in the expansion.

## 4.1 Sequences

- Formula: uₙ is given in terms of n. Substitute n = 1, 2, 3, …
- Recurrence: xₙ₊₁ = f(xₙ) plus a starting value. Compute one term at a time and keep exact values (fractions, surds) until the end.
- To find which term equals a value, solve for n and keep only positive integers.

Reminder: uₙ = 2n² − 5 gives u₄ = 27. With x₁ = 3 and xₙ₊₁ = 2xₙ − 1 the terms are 3, 5, 9, 17, …

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--06-recurrence-cobweb.webp" width="900" height="1140" alt="A cobweb diagram for x_(n+1) = 0.6x_n + 8 with x_1 = 5. The lines y = 0.6x + 8 and y = x are drawn. The path steps from 5 through 11, 14.6 and 16.76 and closes in on where the lines cross at L = 20, found by solving L = 0.6L + 8." loading="lazy">
  <figcaption>A recurrence settles at the limit L where L = f(L); the cobweb shows the terms closing in on it.</figcaption>
</figure>


## 4.2 Arithmetic

| Result | Formula |
|---|---|
| nth term | uₙ = a + (n − 1)d |
| Sum, using d | Sₙ = (n/2)(2a + (n − 1)d) |
| Sum, using last term l | Sₙ = (n/2)(a + l) |
| First n natural numbers | 1 + 2 + … + n = n(n + 1)/2 |
| Number of terms | n = (l − a)/d + 1 |

**Proof of Sₙ (be ready to reproduce it):** write the series forwards and backwards, add term by term, and note that each of the n pairs totals 2a + (n − 1)d. So 2Sₙ = n[2a + (n − 1)d].

**Sigma notation.** Σ (r = p to q) of f(r) adds f(p) up to f(q). Split sums over addition, take out constants, and use Σr = n(n + 1)/2. A sum starting at r = p is the sum to q minus the sum to p − 1.

Reminders: a = 5, d = 4 gives S₁₀ = 5 × 46 = 230. The sum 1 + 2 + … + 50 is 1275. Σ (r = 1 to 12) of (2r + 1) = 2 × 78 + 12 = 168, and Σ (r = 5 to 12) of (2r + 1) = 144.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--01-ap-vs-gp.webp" width="900" height="1060" alt="Two bar charts of six terms each. The arithmetic progression 5, 8, 11, 14, 17, 20 adds 3 each time, so the added amount on top of each bar is the same height every time. The geometric progression 3, 6, 12, 24, 48, 96 doubles each time, so the added amount grows. Three consecutive terms satisfy 2b = a + c for an arithmetic progression (8, 11, 14) and b squared = ac for a geometric one (6, 12, 24)." loading="lazy">
  <figcaption>An arithmetic progression adds the same amount each time; a geometric progression multiplies by the same ratio.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--02-ap-sum-pairing.webp" width="900" height="1070" alt="The series 3 + 7 + 11 + 15 + 19 + 23 + 27, written as the sum from r = 1 to 7 of (4r minus 1), is drawn as seven columns. Each column stacks a term on the term in the reversed order and every column totals 30, the first term plus the last. Seven columns of 30 give twice the sum, 210, so the sum is 105." loading="lazy">
  <figcaption>Pairing each term with its reverse shows why S_n = half n times (a + l).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--05-sequence-behaviour.webp" width="900" height="1110" alt="Three plots of terms against n. u_n = n squared minus 8n falls to its least value, minus 16 at n = 4, then rises. The recurrence x_(n+1) = 1/(1 - x_n) with x_1 = 3 gives 3, minus one half, two thirds, then repeats every three terms. u_n = (3n - 1)/(n + 2) increases for ever but stays below the limit 3." loading="lazy">
  <figcaption>Sequences can decrease then increase, repeat in a cycle, or climb towards a limit.</figcaption>
</figure>


## 4.3 Monotonic and periodic sequences

- Increasing means every term is larger than the one before (uₙ₊₁ > uₙ, any n). Decreasing means every term is smaller.
- Periodic with order k: uₙ₊ₖ = uₙ for all n.
- Method: simplify uₙ₊₁ − uₙ and decide its sign for all n, or list terms until the pattern repeats.
- For a periodic sum, divide the number of terms by k. Multiply the quotient by the sum of one cycle, then add the leftover terms from the start of the cycle.

Reminder: uₙ = cos(90n°) gives 0, −1, 0, 1, 0, −1, … and has order 4.

## 4.4 Geometric

| Result | Formula |
|---|---|
| nth term | uₙ = arⁿ⁻¹ |
| Finite sum | Sₙ = a(1 − rⁿ)/(1 − r), r ≠ 1 |
| Sum to infinity | S∞ = a/(1 − r), valid for \|r\| < 1 |
| Common ratio | r = u₂/u₁ = u₃/u₂ |

**Proof of Sₙ:** subtract rSₙ from Sₙ. Everything cancels except a − arⁿ, so Sₙ(1 − r) = a(1 − rⁿ).

**Logs to find n.**

```
1. Reduce the condition to rⁿ (or rⁿ⁻¹) compared with a number
2. Take logs of both sides
3. Bring the power down: n log r
4. Divide by log r. If log r < 0, reverse the inequality
5. Round up (or down) to a whole number and check the neighbouring terms
```

Reminders: 3, 6, 12, … has u₈ = 384 and S₆ = 189. With a = 9 and r = 1/3, S∞ = 13.5. With a = 20 and r = −1/4, S∞ = 16. For 3(1.5)ⁿ⁻¹ > 500 you need n − 1 > 12.6, so n = 14.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--03-gp-sum-to-infinity.webp" width="900" height="1030" alt="A graph of the partial sums of 81 + 54 + 36 + ... (first term 81, ratio 2/3) for n = 1 to 20. The points rise then flatten towards a dashed line at 243, the sum to infinity. At n = 5 the sum is 211, a gap of 32. The gap 243(2/3)^n first drops below 1 at n = 14." loading="lazy">
  <figcaption>Partial sums of a convergent geometric series level off at S_infinity = a/(1 - r).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--04-gp-convergence.webp" width="900" height="1230" alt="Four stem plots of the first eight terms of a geometric series with first term 1. For r = 0.6 and r = minus 0.6 the terms shrink to zero (convergent). For r = 1.2 and r = minus 1.2 they grow (divergent). A number line shows convergence exactly when r is between minus 1 and 1." loading="lazy">
  <figcaption>A geometric series has a sum to infinity only when |r| &lt; 1.</figcaption>
</figure>


## 4.5 Binomial expansion

```
(a + bx)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ (bx)ʳ     r = 0 to n,  n + 1 terms
ⁿCᵣ = n!/(r!(n − r)!)           ⁿC₀ = ⁿCₙ = 1,  ⁿCᵣ = ⁿCₙ₋ᵣ
```

Pascal's triangle rows give the coefficients: row 4 is 1, 4, 6, 4, 1.

- Put brackets around the whole of bx and any negative sign before raising to a power.
- To find one coefficient, write the general term and choose r so the power of x is right.
- With a product such as (1 + 3x)(5 − 2x)⁴, find which pairs of terms give the power you want, then add.

Reminders: (2 + x)⁴ = 16 + 32x + 24x² + 8x³ + x⁴. The coefficient of x² in (1 + 3x)⁵ is 10 × 9 = 90. 7C3 = 35 and 6!/4! = 30.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--07-pascal-binomial.webp" width="900" height="1130" alt="Pascal’s triangle for n = 0 to 6, each entry the sum of the two above; row 5 (1, 5, 10, 10, 5, 1) is highlighted and 10 is shown as 4 + 6. Below, a bar chart of the six terms of (4 + 3x)^5: 1024, 3840x, 5760x^2, 4320x^3, 1620x^4, 243x^5. At x = 1 they add to 7^5 = 16807." loading="lazy">
  <figcaption>Row n of Pascal’s triangle gives the binomial coefficients; the terms of (4 + 3x)^5 sum to 7^5 at x = 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--08-binomial-validity.webp" width="900" height="980" alt="A graph of y = (1 - 3x)^(-1/2) with its series up to x cubed, 1 + 3x/2 + 27x^2/8 + 135x^3/16. A shaded band shows the range of validity, x between minus one third and one third. The series matches near zero but the curves separate outside the band and near the asymptote at x = 1/3." loading="lazy">
  <figcaption>The series for a rational power only represents the function when |bx/a| &lt; 1.</figcaption>
</figure>


## Method in steps

**Two conditions on a sequence (simultaneous equations).**

```
1. Turn each fact about the sequence into an equation in the first term and d or r
2. Arithmetic: subtract the equations. Geometric: divide them
3. Solve for d or r, then back-substitute for a
4. Check by generating two or three terms
```

**Worked reminder A (arithmetic).** u₂ = 7 and S₆ = 69.

```
a + d = 7
S₆ = 3(2a + 5d) = 69, so 2a + 5d = 23
Substitute a = 7 − d: 14 − 2d + 5d = 23, so d = 3 and a = 4
Check: 4, 7, 10, 13, 16, 19 sums to 69
```

**Worked reminder B (geometric, two possible ratios).** S∞ = 9 and the second term is 2.

```
ar = 2 and a/(1 − r) = 9
Substitute a = 2/r: 2/(r(1 − r)) = 9
9r² − 9r + 2 = 0, so (3r − 1)(3r − 2) = 0
r = 1/3 with a = 6, or r = 2/3 with a = 3
Both satisfy |r| < 1, so both are valid
```

**Worked reminder C (binomial, unknown constant).** The coefficient of x² in (1 + kx)⁵ is 90.

```
5C2 × k² = 10k² = 90, so k² = 9 and k = 3 or k = −3
```

Always give both roots unless the question restricts k, for example "k > 0".

## Must-know distinctions

| | Arithmetic | Geometric |
|---|---|---|
| Rule | add d | multiply by r |
| nth term | a + (n − 1)d | arⁿ⁻¹ |
| n appears as | multiplier | power (use logs) |
| Infinite sum | does not exist unless all terms are 0 | exists if \|r\| < 1 |

## Quick self-test

1. Find the 12th term of an arithmetic sequence with a = 3 and d = 7.
2. Find S₁₅ for a = 4, d = 3.
3. Evaluate Σ (r = 1 to 20) of (5r − 2).
4. A geometric sequence has u₃ = 12 and u₆ = 96. Find a and r.
5. Find S∞ for 40 − 10 + 2.5 − …
6. Find the least n for which 2 × 1.1ⁿ⁻¹ > 50.
7. Find the coefficient of x³ in (1 − x)⁸.
8. Expand (3 + x)³.
9. x₁ = 2 and xₙ₊₁ = 7 − xₙ. Find x₄ and state the order of the sequence.
10. The sum of the first n natural numbers is 820. Find n.
11. Show that the sum of the first n odd numbers is n².
12. A geometric series has a = 5 and r = 2. Find the least n for which Sₙ > 10000.

### Answers

```
1. u₁₂ = 3 + 11×7 = 80
2. S₁₅ = (15/2)(8 + 14×3) = (15/2)(50) = 375
3. Σ(5r − 2) = 5×210 − 40 = 1010
4. r³ = 8, so r = 2, and a = 12/4 = 3
5. r = −1/4, S∞ = 40/(1 + 1/4) = 32
6. 1.1ⁿ⁻¹ > 25, n − 1 > ln 25/ln 1.1 = 33.77, so n = 35
7. 8C3 × (−1)³ = −56
8. 27 + 27x + 9x² + x³
9. x₂ = 5, x₃ = 2, x₄ = 5; the terms alternate 2, 5, so the order is 2
10. n(n + 1)/2 = 820, so n² + n − 1640 = 0, giving n = 40
11. a = 1, d = 2: Sₙ = (n/2)(2 + 2(n − 1)) = (n/2)(2n) = n²
12. 5(2ⁿ − 1) > 10000, so 2ⁿ > 2001, n > ln 2001/ln 2 = 10.97, so n = 11
```

## Where marks are usually lost

- Using n when you needed n − 1 in aₙ = a + (n − 1)d, or in the power of r.
- Quoting S∞ for a series with |r| ≥ 1, or forgetting to state that |r| < 1 holds.
- Not reversing an inequality after dividing by a negative logarithm.
- Giving a fractional n as a final answer instead of rounding to a whole number and checking the neighbouring terms.
- Dropping the bracket or the sign in (bx)ʳ, for example writing −3x² instead of 9x² for (−3x)².
- Finding coefficients in a product by multiplying only the first terms and missing the cross terms.
- Declaring a sequence increasing after checking only a few terms.
- Skipping lines in a proof. A proof that jumps to the final formula shows less than the argument asks for.

Next, try the [practice questions](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-practice/) or revisit the [study guide](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Unit P2, section 4 (Pearson Education Limited).
