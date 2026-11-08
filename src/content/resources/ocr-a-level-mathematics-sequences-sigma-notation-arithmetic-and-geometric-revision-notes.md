---
title: "OCR A Level Mathematics A: Sequences, sigma notation, arithmetic and geometric series and modelling (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths A Sequences and Series Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Sequences, sigma notation, arithmetic and geometric series and modelling"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 111
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "sequences-and-series-ocr-alevel-maths"
description: "Condensed revision notes for OCR A Level Mathematics A sequences and series: formulae, methods, must-know distinctions and a quick self-test with answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---
These revision notes condense sections 1.04e to 1.04k of the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018): sequences, sigma notation, arithmetic and geometric series, the sum to infinity and modelling. All of this content is Stage 2, so it is A Level only. For full explanations and fuller worked examples, read the [study guide](/resources/ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric/).

Then test yourself with the [practice questions](/resources/ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/), the printable list is the [checklist](/checklists/ocr/a-level/mathematics/), and the [free diagnostics](/diagnostics/) show where to focus.

## Definitions (1.04e, 1.04f)

| Term | Meaning |
|---|---|
| Sequence | An ordered list u₁, u₂, u₃, ... |
| Series | A sum of terms of a sequence |
| Finite / infinite | The list stops / goes on for ever |
| Formula for nth term | uₙ = f(n): any term directly |
| Recurrence | xₙ₊₁ = f(xₙ) plus a starting term: term by term |
| Increasing | uₙ₊₁ > uₙ for all n |
| Decreasing | uₙ₊₁ < uₙ for all n |
| Periodic | Terms repeat in a cycle; order = cycle length |
| Convergent | Terms (or the sum) approach a limit |
| Divergent | No limit: grows without bound, or oscillates without settling |

Limit of a recurrence: if xₙ → L then L = f(L). Solve this equation. Example: xₙ₊₁ = 0.4xₙ + 9 gives L = 0.4L + 9, so L = 15.

Proving monotonic: show uₙ₊₁ − uₙ has one sign for every n. Spotting periodic: compute until a term repeats the start, then use remainders on division by the order.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--05-sequence-behaviour.webp" width="900" height="1110" alt="Three plots of terms against n. u_n = n squared minus 8n falls to its least value, minus 16 at n = 4, then rises. The recurrence x_(n+1) = 1/(1 - x_n) with x_1 = 3 gives 3, minus one half, two thirds, then repeats every three terms. u_n = (3n - 1)/(n + 2) increases for ever but stays below the limit 3." loading="lazy">
  <figcaption>Sequences can decrease then increase, repeat in a cycle, or climb towards a limit.</figcaption>
</figure>


## Sigma notation (1.04g)

```
  k
  Σ  f(r)  =  f(m) + f(m+1) + ... + f(k)      (k − m + 1 terms)
 r=m
```

- Σ c over k − m + 1 terms is c(k − m + 1), not c.
- A sum of two functions splits into two sums, and a constant multiplier comes outside the sigma.
- To change the start, subtract: sum from 6 to 15 = (sum from 1 to 15) − (sum from 1 to 5).
- To write a series in sigma form, find the rth term, then test the first and last terms.

## Formulae

| Result | Arithmetic | Geometric |
|---|---|---|
| Rule | add d each time | multiply by r each time |
| nth term | uₙ = a + (n − 1)d | uₙ = a rⁿ⁻¹ |
| Sum of n terms | Sₙ = n/2 (2a + (n − 1)d) = n/2 (a + l) | Sₙ = a(1 − rⁿ)/(1 − r) = a(rⁿ − 1)/(r − 1) |
| Sum to infinity | none (diverges unless all terms 0) | S∞ = a/(1 − r), only if |r| < 1 |
| Finding the parameter | subtract two terms and divide by the gap | divide two terms, take a root |

The specification gives a formulae sheet in each paper and lists the two nth term formulae as ones to know. Learn every line above anyway.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--07-pascal-binomial.webp" width="900" height="1130" alt="Pascal’s triangle for n = 0 to 6, each entry the sum of the two above; row 5 (1, 5, 10, 10, 5, 1) is highlighted and 10 is shown as 4 + 6. Below, a bar chart of the six terms of (4 + 3x)^5: 1024, 3840x, 5760x^2, 4320x^3, 1620x^4, 243x^5. At x = 1 they add to 7^5 = 16807." loading="lazy">
  <figcaption>Row n of Pascal’s triangle gives the binomial coefficients; the terms of (4 + 3x)^5 sum to 7^5 at x = 1.</figcaption>
</figure>


## Method boxes

**Arithmetic problem**
1. Write two equations in a and d (from terms or sums).
2. Subtract to find d, then substitute for a.
3. Write uₙ or Sₙ in terms of n.
4. For an inequality in n, solve the quadratic, then test the integers either side.

**Geometric problem**
1. Divide terms to get rᵏ for a gap of k places.
2. Take the root. If the gap is even, there may be a negative ratio as well as a positive one, so check both against the given information.
3. Find a from one term.
4. State |r| < 1 before using S∞.

**Modelling problem**
1. Decide: fixed amount (arithmetic) or fixed percentage (geometric).
2. Identify a, d or r, and what n counts. Be exact about whether the first term is the start or the end of the first period.
3. Form the equation or inequality.
4. Solve with logarithms: log(rⁿ) = n log r. Flip the inequality when dividing by a negative number, which happens when r < 1.
5. Give a whole number and check either side, then answer in context with units.

## Small worked reminders

**Recurrence limit.** xₙ₊₁ = 0.4xₙ + 9, x₁ = 5: 5, 11, 13.4, 14.36, ... approaching 15.

**Sigma.** Σ (2r + 3) for r = 1 to 10 = 2(55) + 3(10) = 140, using the arithmetic formula: terms 5 to 23, so 10/2 × (5 + 23) = 140.

**Geometric.** 2, 6, 18, ...: a = 2 and r = 3, so S₅ = 2(3⁵ − 1)/2 = 242.

**Infinite.** 9 + 9/4 + 9/16 + ... = 9/(1 − ¼) = 12.

**Alternating.** 5/2 − 3/2 + 9/10 − ...: r = −3/5, so S∞ = (5/2)/(8/5) = 25/16.

**Recurring decimal.** 0.1818... = 0.18/0.99 = 2/11.

**Doubling inequality.** 3 × 1.07ⁿ > 20 gives n > ln(20/3)/ln 1.07 = 28.04..., so n = 29. Check: 3 × 1.07²⁸ ≈ 19.95 and 3 × 1.07²⁹ ≈ 21.34.

## Common modelling set-ups

| Situation | Model | Ratio or difference |
|---|---|---|
| Simple interest of 3% on £2000 | arithmetic, d = 60 | a = 2000 |
| Compound interest of 3% a year | geometric | r = 1.03 |
| Value falls 8% a year | geometric | r = 0.92 |
| Fixed monthly rise in saving | arithmetic | d = the rise |
| Regular payment into an account | sum of a geometric series | r = 1 + rate; list the payments one by one first |
| Repeated dose with a fraction removed | geometric with sum to infinity as the long-run level | r = fraction remaining |

For a regular saver, write the value of each payment at the end, starting with the earliest (largest) payment or the latest (smallest). That list is the geometric series, and a and r then come from it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--03-gp-sum-to-infinity.webp" width="900" height="1030" alt="A graph of the partial sums of 81 + 54 + 36 + ... (first term 81, ratio 2/3) for n = 1 to 20. The points rise then flatten towards a dashed line at 243, the sum to infinity. At n = 5 the sum is 211, a gap of 32. The gap 243(2/3)^n first drops below 1 at n = 14." loading="lazy">
  <figcaption>Partial sums of a convergent geometric series level off at S_infinity = a/(1 - r).</figcaption>
</figure>


## Must-know distinctions

- **Arithmetic or geometric:** constant difference or constant ratio? Compare the gaps between neighbouring terms, then compare the ratios.
- **Sequence or series:** the list or the total. Sₙ is a series; uₙ is a term. Note that uₙ = Sₙ − Sₙ₋₁ for n ≥ 2.
- **Convergent or divergent:** for a geometric series it depends on |r| < 1 only, not on the size of a.
- **Simple or compound interest:** simple interest is arithmetic (same amount each year); compound is geometric.
- **Increase of 12% or increase to 112%:** both give r = 1.12. A decrease of 12% gives r = 0.88.
- **Order of a periodic sequence:** the number of terms in one cycle. The sequence x, y, x, y, ... has order 2.

## Quick self-test

1. A sequence has uₙ = 2n² − 11n. Which term is the first to be positive?
2. Find the 4th term of xₙ₊₁ = 3xₙ − 2 with x₁ = 4.
3. Evaluate Σ (3r + 1) from r = 2 to 8.
4. An arithmetic series has first term 7, last term 95 and common difference 4. How many terms does it have, and what is its sum?
5. The 6th term of an arithmetic sequence is 9 and the 11th term is 24. Find a and d.
6. Find the 7th term and the sum of the first 7 terms of the geometric sequence 3, 6, 12, ...
7. Find S∞ for 20 + 8 + 3.2 + ...
8. Find the range of x for which a geometric series with ratio (x − 4)/3 converges.
9. A sequence has x₁ = 1 and xₙ₊₁ = 4/xₙ. State its order and find x₅₀.
10. A car is worth £16 000 and loses 15% of its value each year. In how many whole years is it first worth less than £6000?
11. A savings plan puts in £200 in year 1 and £15 more each year than the year before. How much is paid in over 12 years?

### Answers

1. u₁ = −9, u₂ = −14, u₃ = −15, u₄ = −12, u₅ = −5, u₆ = 6. The first positive term is **u₆** (also 2n² − 11n > 0 gives n > 5.5).
2. x₂ = 10, x₃ = 28, x₄ = **82**.
3. Terms 7, 10, ..., 25 (7 terms): 7/2 × (7 + 25) = **112**.
4. 95 = 7 + (n − 1)4 gives n = 23. S₂₃ = 23/2 × (7 + 95) = **1173**.
5. 5d = 15, so d = 3 and a = 9 − 15 = **−6**.
6. u₇ = 3 × 2⁶ = **192**. S₇ = 3(2⁷ − 1) = **381**.
7. r = 0.4, so S∞ = 20/0.6 = **100/3** (33.3 to 3 s.f.).
8. |x − 4| < 3, so **1 < x < 7**.
9. x: 1, 4, 1, 4, ... **Order 2**; x₅₀ is an even term, so x₅₀ = **4**.
10. 16 000 × 0.85ⁿ < 6000 gives n > ln(0.375)/ln(0.85) = 6.03..., so **7 years** (after 6 years: £6034.39, after 7 years: £5129.23).
11. Arithmetic with a = 200, d = 15: S₁₂ = 12/2 × (400 + 165) = **£3390**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--01-ap-vs-gp.webp" width="900" height="1060" alt="Two bar charts of six terms each. The arithmetic progression 5, 8, 11, 14, 17, 20 adds 3 each time, so the added amount on top of each bar is the same height every time. The geometric progression 3, 6, 12, 24, 48, 96 doubles each time, so the added amount grows. Three consecutive terms satisfy 2b = a + c for an arithmetic progression (8, 11, 14) and b squared = ac for a geometric one (6, 12, 24)." loading="lazy">
  <figcaption>An arithmetic progression adds the same amount each time; a geometric progression multiplies by the same ratio.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--02-ap-sum-pairing.webp" width="900" height="1070" alt="The series 3 + 7 + 11 + 15 + 19 + 23 + 27, written as the sum from r = 1 to 7 of (4r minus 1), is drawn as seven columns. Each column stacks a term on the term in the reversed order and every column totals 30, the first term plus the last. Seven columns of 30 give twice the sum, 210, so the sum is 105." loading="lazy">
  <figcaption>Pairing each term with its reverse shows why S_n = half n times (a + l).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--04-gp-convergence.webp" width="900" height="1230" alt="Four stem plots of the first eight terms of a geometric series with first term 1. For r = 0.6 and r = minus 0.6 the terms shrink to zero (convergent). For r = 1.2 and r = minus 1.2 they grow (divergent). A number line shows convergence exactly when r is between minus 1 and 1." loading="lazy">
  <figcaption>A geometric series has a sum to infinity only when |r| &lt; 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--08-binomial-validity.webp" width="900" height="980" alt="A graph of y = (1 - 3x)^(-1/2) with its series up to x cubed, 1 + 3x/2 + 27x^2/8 + 135x^3/16. A shaded band shows the range of validity, x between minus one third and one third. The series matches near zero but the curves separate outside the band and near the asymptote at x = 1/3." loading="lazy">
  <figcaption>The series for a rational power only represents the function when |bx/a| &lt; 1.</figcaption>
</figure>


## Where marks are usually lost

- Writing the answer to a "find n" inequality as a decimal, or not checking the integers either side.
- Quoting S∞ with no check on |r|, or writing r < 1 when r could be below −1.
- Mixing up the number of terms in sigma notation (k − m + 1) and slipping by one.
- Raising a negative ratio to a power without brackets.
- Using 0.15 as the ratio for a 15% fall.
- Failing to give a reason when asked to show a sequence is periodic or increasing. Show the working, not just the first few terms.
- Rounding intermediate values in modelling problems, so the final figure drifts.
- Giving an answer without context (units, years, mg) when the question is set in a real situation.

Go on to the [practice questions](/resources/ocr-a-level-mathematics-sequences-sigma-notation-arithmetic-and-geometric-practice/) when you can do the self-test without notes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-series--06-recurrence-cobweb.webp" width="900" height="1140" alt="A cobweb diagram for x_(n+1) = 0.6x_n + 8 with x_1 = 5. The lines y = 0.6x + 8 and y = x are drawn. The path steps from 5 through 11, 14.6 and 16.76 and closes in on where the lines cross at L = 20, found by solving L = 0.6L + 8." loading="lazy">
  <figcaption>A recurrence settles at the limit L where L = f(L); the cobweb shows the terms closing in on it.</figcaption>
</figure>


## Frequently asked questions

**What is the difference between a sequence and a series?**
A sequence is an ordered list of terms, and a series is the sum of terms of a sequence. uₙ is a term, Sₙ is a series, and uₙ = Sₙ − Sₙ₋₁ for n ≥ 2.

**What are the formulae for the nth term of arithmetic and geometric sequences?**
For an arithmetic sequence uₙ = a + (n − 1)d, and for a geometric sequence uₙ = arⁿ⁻¹, where a is the first term, d the common difference and r the common ratio.

**When does a geometric series converge?**
A geometric series converges only when |r| < 1, whatever the size of the first term. Then S∞ = a/(1 − r). Writing r < 1 is not enough when r could be below −1.

**What is a periodic sequence?**
A periodic sequence repeats its terms in a cycle, and its order is the number of terms in one cycle. For example, x, y, x, y, ... has order 2.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 1.04e to 1.04k.
