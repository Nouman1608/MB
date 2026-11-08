---
title: "Pearson Edexcel International Advanced Level Mathematics: Sequences and series: arithmetic, geometric and the binomial expansion (YMA01)"
seoTitle: "Edexcel IAL Maths Sequences and Series Study Guide"
resourceType: "study-guides"
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
description: "Study guide to sequences and series in Pearson Edexcel IAL Mathematics Unit P2: arithmetic, geometric, sigma notation and the binomial expansion."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

This guide teaches section 4 (topics 4.1 to 4.5) of Unit P2: Pure Mathematics 2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification states that P2 is a compulsory unit for both IAS Mathematics and IAL Mathematics (and Pure Mathematics), so there is no optional route around it. The specification also says knowledge of P1 may be tested, so keep your P1 algebra sharp.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-practice/). For the wider course see the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/), the [Unit P2 overview](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) and [all free 10-minute diagnostics](/diagnostics/).

## What the section covers

| Topic | What you must be able to do |
|---|---|
| 4.1 | Work with sequences given by a formula for the nth term, or by a relation xₙ₊₁ = f(xₙ) |
| 4.2 | Arithmetic sequences and series: nth term, sum of a finite series (know the proof), sum of the first n natural numbers, Σ notation |
| 4.3 | Increasing, decreasing and periodic sequences |
| 4.4 | Geometric sequences and series: nth term, finite sum (know the proof), sum to infinity S∞ when \|r\| < 1, using logs to find n |
| 4.5 | Binomial expansion of (a + bx)ⁿ for positive integer n; the notations n!, ⁿCᵣ and the column form may be used |

## 4.1 Sequences

A sequence is an ordered list of terms. You write the terms u₁, u₂, u₃, … and the general term uₙ.

**By formula.** If uₙ = n² − 6n + 10, substitute n = 1, 2, 3, 4 to get 5, 2, 1, 2.

**By recurrence.** A relation xₙ₊₁ = f(xₙ) needs a starting value. You build the terms one at a time.

**Worked example 1.** The sequence uₙ = n² − 6n + 10 is given. Which term equals 65?

```
n² − 6n + 10 = 65
n² − 6n − 55 = 0
(n − 11)(n + 5) = 0
n = 11   (n = −5 is rejected: n must be a positive integer)
```

The 11th term is 65.

**Worked example 2.** x₁ = 4 and xₙ₊₁ = xₙ/2 + 3. Find x₂, x₃ and x₄.

```
x₂ = 4/2 + 3 = 5
x₃ = 5/2 + 3 = 11/2
x₄ = (11/2)/2 + 3 = 23/4
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--06-recurrence-cobweb.webp" width="900" height="1140" alt="A cobweb diagram for x_(n+1) = 0.6x_n + 8 with x_1 = 5. The lines y = 0.6x + 8 and y = x are drawn. The path steps from 5 through 11, 14.6 and 16.76 and closes in on where the lines cross at L = 20, found by solving L = 0.6L + 8." loading="lazy">
  <figcaption>A recurrence settles at the limit L where L = f(L); the cobweb shows the terms closing in on it.</figcaption>
</figure>


## 4.2 Arithmetic sequences and series

In an arithmetic sequence each term is the previous term plus a constant common difference d. With first term a:

```
uₙ = a + (n − 1)d
Sₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l)     where l is the last term
```

### Proof of the sum formula

<!-- marlbridge-diagram:maths-b24-arithmetic-series-reversed-pairing -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b24-arithmetic-series-reversed-pairing.svg" aria-label="Open full-size diagram: maths-b24-arithmetic-series-reversed-pairing"><img src="/images/learning/mathematics/maths-b24-arithmetic-series-reversed-pairing.svg" width="1600" height="1050" alt="For the source example, u3=16 and u9=40 give a+2d=16 and a+8d=40, so d=4 and a=8. Thus u20=84. Pairing the sequence forward and backward gives 2S20=20(8+84)=1840, so S20=920." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>For the source example, u3=16 and u9=40 give a+2d=16 and a+8d=40, so d=4 and a=8. Thus u20=84. Pairing the sequence forward and backward gives 2S20=20(8+84)=1840, so S20=920. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b24-arithmetic-series-reversed-pairing -->


Write the sum forwards and backwards, then add.

```
Sₙ = a + (a + d) + … + (a + (n − 1)d)
Sₙ = (a + (n − 1)d) + (a + (n − 2)d) + … + a
2Sₙ = [2a + (n − 1)d] + [2a + (n − 1)d] + … (n times)
2Sₙ = n[2a + (n − 1)d]
```

Divide by 2 to finish. Every pair adds to the same total, which is why the method works.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--03-gp-sum-to-infinity.webp" width="900" height="1030" alt="A graph of the partial sums of 81 + 54 + 36 + ... (first term 81, ratio 2/3) for n = 1 to 20. The points rise then flatten towards a dashed line at 243, the sum to infinity. At n = 5 the sum is 211, a gap of 32. The gap 243(2/3)^n first drops below 1 at n = 14." loading="lazy">
  <figcaption>Partial sums of a convergent geometric series level off at S_infinity = a/(1 - r).</figcaption>
</figure>


### The first n natural numbers

Put a = 1, d = 1: 1 + 2 + … + n = n(n + 1)/2.

### Sigma notation

Σ (from r = 1 to n) of f(r) means f(1) + f(2) + … + f(n). The limits tell you the first and last value of r.

**Worked example 3.** The 3rd term of an arithmetic sequence is 16 and the 9th term is 40. Find a and d, then S₂₀.

```
a + 2d = 16
a + 8d = 40
Subtract: 6d = 24, so d = 4 and a = 8
S₂₀ = (20/2)(2×8 + 19×4) = 10 × 92 = 920
```

**Worked example 4.** Find the sum of all multiples of 7 between 100 and 500.

```
Multiples run 105, 112, …, 497, so a = 105, d = 7, l = 497
497 = 105 + (n − 1)×7, so n − 1 = 56 and n = 57
S₅₇ = (57/2)(105 + 497) = (57/2)(602) = 17157
```

**Worked example 5.** Evaluate Σ (r = 1 to 30) of (4r − 3).

```
Σ(4r − 3) = 4 Σr − 3 × 30
Σr = 30 × 31/2 = 465
Result: 4 × 465 − 90 = 1770
```

**Worked example 6.** An arithmetic series has a = −12 and d = 3. Find the least n for which Sₙ > 200.

```
Sₙ = (n/2)(−24 + 3(n − 1)) = n(3n − 27)/2
n(3n − 27)/2 > 200
3n² − 27n − 400 > 0
Roots: n = (27 ± √5529)/6, and the positive root is about 16.89
```

So n ≥ 17. Check: S₁₆ = 168 (too small) and S₁₇ = 204.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--02-ap-sum-pairing.webp" width="900" height="1070" alt="The series 3 + 7 + 11 + 15 + 19 + 23 + 27, written as the sum from r = 1 to 7 of (4r minus 1), is drawn as seven columns. Each column stacks a term on the term in the reversed order and every column totals 30, the first term plus the last. Seven columns of 30 give twice the sum, 210, so the sum is 105." loading="lazy">
  <figcaption>Pairing each term with its reverse shows why S_n = half n times (a + l).</figcaption>
</figure>


## 4.3 Increasing, decreasing and periodic sequences

A sequence is **increasing** if uₙ₊₁ > uₙ for every n, and **decreasing** if uₙ₊₁ < uₙ for every n. It is **periodic** if the terms repeat in a fixed cycle: uₙ₊ₖ = uₙ for all n, where k is the order of the sequence (the smallest such k).

**Worked example 7.** For uₙ = n² − 8n, show how the sequence behaves.

```
uₙ₊₁ − uₙ = (n + 1)² − 8(n + 1) − n² + 8n = 2n − 7
```

This is negative for n = 1, 2, 3 and positive from n = 4. The terms are −7, −12, −15, −16, −15, −12, −7, … The sequence decreases up to u₄ and then increases. It is neither increasing nor decreasing overall.

**Worked example 8.** x₁ = 2 and xₙ₊₁ = 1/(1 − xₙ). Show it is periodic and find the sum of the first 100 terms.

```
x₂ = 1/(1 − 2) = −1
x₃ = 1/(1 + 1) = 1/2
x₄ = 1/(1 − 1/2) = 2 = x₁
```

The cycle 2, −1, 1/2 repeats, so the order is 3. One cycle sums to 3/2. In 100 terms there are 33 complete cycles and one extra term, which is x₁ = 2. Sum = 33 × 3/2 + 2 = 51.5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--05-sequence-behaviour.webp" width="900" height="1110" alt="Three plots of terms against n. u_n = n squared minus 8n falls to its least value, minus 16 at n = 4, then rises. The recurrence x_(n+1) = 1/(1 - x_n) with x_1 = 3 gives 3, minus one half, two thirds, then repeats every three terms. u_n = (3n - 1)/(n + 2) increases for ever but stays below the limit 3." loading="lazy">
  <figcaption>Sequences can decrease then increase, repeat in a cycle, or climb towards a limit.</figcaption>
</figure>


## 4.4 Geometric sequences and series

In a geometric sequence each term is the previous term times a constant common ratio r.

```
uₙ = arⁿ⁻¹
Sₙ = a(1 − rⁿ)/(1 − r) = a(rⁿ − 1)/(r − 1)      (r ≠ 1)
S∞ = a/(1 − r)      valid if |r| < 1
```

### Proof of the finite sum

```
Sₙ = a + ar + ar² + … + arⁿ⁻¹
rSₙ = ar + ar² + … + arⁿ⁻¹ + arⁿ
Sₙ − rSₙ = a − arⁿ
Sₙ(1 − r) = a(1 − rⁿ)
```

Divide by (1 − r). If |r| < 1 then rⁿ → 0 as n grows, which leaves S∞ = a/(1 − r). If |r| ≥ 1 the terms do not shrink to zero and there is no sum to infinity.

**Worked example 9.** A geometric sequence has u₂ = 6 and u₅ = 162. Find a, r, u₈ and S₈.

```
ar = 6 and ar⁴ = 162
Divide: r³ = 27, so r = 3 and a = 2
u₈ = 2 × 3⁷ = 4374
S₈ = 2(3⁸ − 1)/(3 − 1) = 6560
```

**Worked example 10.** Find S∞ for 18 + 12 + 8 + … Then find the least n for which Sₙ > 53.

```
r = 12/18 = 2/3, which satisfies |r| < 1
S∞ = 18/(1 − 2/3) = 54
Sₙ = 54(1 − (2/3)ⁿ) > 53
(2/3)ⁿ < 1/54
n ln(2/3) < −ln 54
n > ln 54 / ln(3/2) = 9.84…     (the inequality flips because ln(2/3) < 0)
```

So n = 10.

**Worked example 11.** A geometric sequence starts 5, 6, 7.2, … Find the first term greater than 1000.

```
r = 1.2, uₙ = 5(1.2)ⁿ⁻¹ > 1000
(1.2)ⁿ⁻¹ > 200
(n − 1) ln 1.2 > ln 200, so n − 1 > 29.06…
n = 31
```

The 30th term is about 989 and the 31st is about 1187.

**Worked example 12.** A series has first term 12 and sum to infinity 48. Find r.

```
12/(1 − r) = 48, so 1 − r = 1/4 and r = 3/4
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--01-ap-vs-gp.webp" width="900" height="1060" alt="Two bar charts of six terms each. The arithmetic progression 5, 8, 11, 14, 17, 20 adds 3 each time, so the added amount on top of each bar is the same height every time. The geometric progression 3, 6, 12, 24, 48, 96 doubles each time, so the added amount grows. Three consecutive terms satisfy 2b = a + c for an arithmetic progression (8, 11, 14) and b squared = ac for a geometric one (6, 12, 24)." loading="lazy">
  <figcaption>An arithmetic progression adds the same amount each time; a geometric progression multiplies by the same ratio.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--04-gp-convergence.webp" width="900" height="1230" alt="Four stem plots of the first eight terms of a geometric series with first term 1. For r = 0.6 and r = minus 0.6 the terms shrink to zero (convergent). For r = 1.2 and r = minus 1.2 they grow (divergent). A number line shows convergence exactly when r is between minus 1 and 1." loading="lazy">
  <figcaption>A geometric series has a sum to infinity only when |r| &lt; 1.</figcaption>
</figure>


## 4.5 The binomial expansion

n! = n × (n − 1) × … × 1, with 0! = 1. The binomial coefficient is ⁿCᵣ = n!/(r!(n − r)!), also written with n above r in brackets. For a positive integer n:

```
(a + bx)ⁿ = aⁿ + ⁿC₁ aⁿ⁻¹(bx) + ⁿC₂ aⁿ⁻²(bx)² + … + (bx)ⁿ
```

There are n + 1 terms. The general term is ⁿCᵣ aⁿ⁻ʳ(bx)ʳ. Keep the bracket round bx, so that b is raised to the power r as well.

**Worked example 13.** Find the first four terms of (2 − 3x)⁶ in ascending powers of x.

```
6C0 = 1, 6C1 = 6, 6C2 = 15, 6C3 = 20
Term 1: 2⁶ = 64
Term 2: 6 × 2⁵ × (−3x) = −576x
Term 3: 15 × 2⁴ × (−3x)² = 2160x²
Term 4: 20 × 2³ × (−3x)³ = −4320x³
```

**Worked example 14.** Find the coefficient of x² in (1 + 2x)(3 − x)⁵.

```
(3 − x)⁵ = 243 − 405x + 270x² − …
x² terms: 1 × 270x² + 2x × (−405x) = 270x² − 810x²
Coefficient: −540
```

**Worked example 15.** The coefficient of x³ in (2 + kx)⁶ is −1280. Find k.

```
6C3 × 2³ × k³ = 20 × 8 × k³ = 160k³
160k³ = −1280, so k³ = −8 and k = −2
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--07-pascal-binomial.webp" width="900" height="1130" alt="Pascal’s triangle for n = 0 to 6, each entry the sum of the two above; row 5 (1, 5, 10, 10, 5, 1) is highlighted and 10 is shown as 4 + 6. Below, a bar chart of the six terms of (4 + 3x)^5: 1024, 3840x, 5760x^2, 4320x^3, 1620x^4, 243x^5. At x = 1 they add to 7^5 = 16807." loading="lazy">
  <figcaption>Row n of Pascal’s triangle gives the binomial coefficients; the terms of (4 + 3x)^5 sum to 7^5 at x = 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--08-binomial-validity.webp" width="900" height="980" alt="A graph of y = (1 - 3x)^(-1/2) with its series up to x cubed, 1 + 3x/2 + 27x^2/8 + 135x^3/16. A shaded band shows the range of validity, x between minus one third and one third. The series matches near zero but the curves separate outside the band and near the asymptote at x = 1/3." loading="lazy">
  <figcaption>The series for a rational power only represents the function when |bx/a| &lt; 1.</figcaption>
</figure>


## Common errors

- Using Sₙ with the wrong n after finding a "number of terms" that is one out. Count with n = (l − a)/d + 1.
- Applying S∞ with |r| ≥ 1.
- Forgetting to reverse the inequality when dividing by a negative logarithm.
- Writing (bx)ʳ as bxʳ in a binomial term.
- Reading "increasing" from the first two terms only. Test uₙ₊₁ − uₙ for general n.

Check your skills on the [practice set](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-practice/) and recall them with the [revision notes](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-revision-notes/).

## Frequently asked questions

**How do you prove the arithmetic series formula?**
Write the sum forwards and backwards, then add the two lines term by term. Every pair adds to the same total, 2a + (n − 1)d, and there are n pairs, so 2Sₙ = n(2a + (n − 1)d).

**What is the sum of the first n natural numbers?**
1 + 2 + … + n = n(n + 1)/2, which comes from the arithmetic series formula with a = 1 and d = 1.

**How do you show a sequence is increasing?**
Simplify uₙ₊₁ − uₙ and show it is positive for every n. Checking only the first few terms is not enough.

**What is the general term in the binomial expansion of (a + bx)ⁿ?**
The general term is ⁿCᵣ aⁿ⁻ʳ(bx)ʳ, where ⁿCᵣ = n!/(r!(n − r)!). Keep the bracket round bx so that b is raised to the power r as well.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Unit P2, section 4 (Pearson Education Limited).
