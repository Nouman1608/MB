---
title: "AQA GCSE Mathematics: Number — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Number"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 1
syllabusTopics:
  - qualification: "gcse"
    topic: "number-aqa-gcse-maths"
description: "Condensed recall notes on indices, surds, standard form, fractions, percentages and bounds for AQA GCSE Mathematics 8300."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

Condensed for the final weeks. For the full explanation, use the
[Number study guide](/resources/aqa-gcse-mathematics-number/).

**Tier:** fractional indices (N7), surds (N8), recurring decimals to fractions (N10) and calculating with upper and lower bounds (N16) are **Higher tier only**, and are marked **(Higher)** below. Everything else is Foundation content, assessed at both tiers.

## Index laws

```
a^m x a^n = a^(m+n)         a^m / a^n = a^(m-n)         (a^m)^n = a^(mn)
a^0 = 1                     a^-n = 1 / a^n              a^(1/n) = nth root of a
a^(m/n) = (nth root of a)^m
```

Integer indices, including negative ones, are Foundation. **(Higher)** For a fractional index, **take the root first, then the power** — the numbers stay small.

```
8^(2/3) = (cube root of 8)^2 = 2^2 = 4
```

A **negative** index means reciprocal, not a negative answer: `2⁻³ = 1/8`, never −8. **(Higher)** For a negative fractional index, **flip first, then apply**: `(4/9)^(−1/2) = (9/4)^(1/2) = 3/2`.

## Surds (Higher)

```
sqrt(a) x sqrt(b) = sqrt(ab)        sqrt(a) / sqrt(b) = sqrt(a/b)
```

**Simplify** by extracting the largest square factor: `√50 = √25 × √2 = 5√2`.

**Rationalising the denominator:**

```
single term:   3/sqrt(2)  ->  multiply top and bottom by sqrt(2)   =  3 sqrt(2) / 2

two terms:     1/(3 + sqrt(2))  ->  multiply by the CONJUGATE (3 - sqrt(2))
               = (3 - sqrt(2)) / (9 - 2) = (3 - sqrt(2)) / 7
```

The conjugate works because `(a + √b)(a − √b) = a² − b`, which contains no surd.

`√a + √b ≠ √(a+b)` — check with √9 + √16 = 7, not √25 = 5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-exponential-growth-decay-and-surds--04-surd-diagonal.webp" width="900" height="940" alt="A square of side 4 cm has a diagonal of root 32, since 16 + 16 = 32. Taking out the square factor gives 4 root 2, which lands near 5.657 on the number line." loading="lazy">
  <figcaption>The exact length 4√2 cm is a surd; 5.657 is only a rounded value.</figcaption>
</figure>


## Standard form

```
A x 10^n        where  1 <= A < 10
```

Multiplying and dividing: handle the numbers and the powers separately, then **re-adjust** if A falls outside the range. `40 × 10⁵` must become `4 × 10⁶`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-mathematics-number--06-rationalising-denominators.webp" width="900" height="850" alt="6 over root 3 becomes 2 root 3 on multiplying top and bottom by root 3. 4 over (3 + root 5) becomes 3 - root 5 on multiplying by the conjugate (3 - root 5), since 9 - 5 = 4. Decimal checks agree." loading="lazy">
  <figcaption>Multiply top and bottom by the right surd to leave a whole number underneath without changing the value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-powers-roots-and-indices--04-index-rules-tiles.webp" width="900" height="976" alt="Tiles show 2^3 x 2^4 as 7 factors (2^7 = 128), (3^2)^4 as 4 groups of 2 factors (3^8), and 2^4 / 2^7 with 4 pairs cancelling leaving 3 below (2^-3 = 1/8). The rules need the same base." loading="lazy">
  <figcaption>Counting factors explains add, multiply and subtract for indices.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-powers-roots-and-indices--03-zero-negative-indices.webp" width="900" height="1032" alt="A staircase lists 5^3 down to 5^-3. Each step lowers the index by 1 and divides by 5, giving 125, 25, 5, 1, 1/5, 1/25, 1/125. So 5^0 = 1 and a negative index gives a small positive reciprocal." loading="lazy">
  <figcaption>Each step down divides by 5, so 5^0 = 1 and 5^-n is 1 over 5^n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-powers-roots-and-indices--05-fractional-indices.webp" width="900" height="1000" alt="A cube of 125 blocks has side 5, so 125^(1/3) = 5. Two flow chains show 125^(-2/3): root 3, square, flip gives 1/25, and 32^(3/5): root 5, cube gives 8." loading="lazy">
  <figcaption>The denominator is the root, the numerator is the power, and a minus sign flips.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--03-standard-form.webp" width="900" height="880" alt="Digit boxes show the decimal point of 4 560 000 jumping 6 places left to give 4.56 x 10^6, and of 0.00032 jumping 4 places right to give 3.2 x 10^-4. A must lie between 1 and 10." loading="lazy">
  <figcaption>Move the decimal point until the number is between 1 and 10; the count of moves is the power of 10.</figcaption>
</figure>


## Percentages

```
increase by 15%:   x 1.15          decrease by 15%:   x 0.85
reverse percentage: DIVIDE by the multiplier
compound interest:  P x (multiplier)^n
```

**Reverse percentage is the most commonly failed question.** If a price is £69 after a 15% increase, the original is 69 ÷ 1.15 = £60 — **not** 69 × 0.85, which gives £58.65. Divide, never subtract.

A 15% rise followed by a 15% fall does **not** return you to the start: 1.15 × 0.85 = 0.9775, a 2.25% net loss.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-fractions-decimals-percentages-ordering-operations--01-fraction-decimal-percentage.webp" width="900" height="830" alt="A bar of 16 equal parts with 7 shaded, a 0 to 1 scale and a 0 to 100% scale mark the same point. Dividing 7 by 16 gives 0.4375, and multiplying by 100 gives 43.75%." loading="lazy">
  <figcaption>7/16 as a fraction, decimal and percentage are all the same point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--06-percentage-multiplier.webp" width="900" height="780" alt="Bars drawn to scale show $70 as 100%. Multiplying by 1.2 gives $84 (120%); multiplying by 0.8 gives $56 (80%). The decrease panel extends the lesson example for contrast." loading="lazy">
  <figcaption>A percentage change is a single multiplication: increase 20% is x 1.2, decrease 20% is x 0.8.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-fractions-decimals-percentages-ordering-operations--03-recurring-to-fraction.webp" width="900" height="870" alt="Two rows of digit boxes show x = 0.3636... and 100x = 36.3636... with identical tails after the decimal point. Subtracting gives 99x = 36, so x = 36/99 = 4/11." loading="lazy">
  <figcaption>Multiplying by 100 lines up the repeating tails so that subtracting removes them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-mathematics-ratio-proportion-rates-of-change--07-simple-vs-compound-interest.webp" width="900" height="950" alt="A graph of 1000 pounds over 5 years at 3 percent. Simple interest rises in equal steps to 1150 pounds (multiplier 1.15). Compound interest curves slightly higher to 1159.27 pounds (multiplier 1.03 to the power 5, about 1.159). The vertical axis starts at 1000." loading="lazy">
  <figcaption>Compound interest multiplies by 1.03^5 = 1.159; simple interest by 1.15.</figcaption>
</figure>


## Fractions

Multiply: multiply across. Divide: **multiply by the reciprocal** of the second fraction. Add and subtract: common denominator first. Always convert mixed numbers to improper fractions before multiplying or dividing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-fractions-decimals-percentages-ordering-operations--04-order-of-operations.webp" width="900" height="960" alt="Two worked examples with the part being calculated highlighted at each step: (5 - 2^3) x 4 + 6 / (-2) = -15, and 18 - 12 / 4 x 3 = 9. Multiplication and division have equal rank, so work left to right." loading="lazy">
  <figcaption>Work out indices and brackets first, then multiply and divide left to right, then add and subtract.</figcaption>
</figure>


## Bounds

For a value rounded to the nearest unit u, add and subtract **u/2**.

```
length 24 cm to nearest cm:   23.5 <= L < 24.5
```

Writing this error interval is Foundation (N15). **(Higher)** Combining bounds — the rule that decides the marks:

| Operation | For the **maximum** | For the **minimum** |
|---|---|---|
| Add | UB + UB | LB + LB |
| Subtract | UB − **LB** | LB − **UB** |
| Multiply | UB × UB | LB × LB |
| Divide | UB ÷ **LB** | LB ÷ **UB** |

**Subtraction and division cross over.** That is the entire difficulty of the topic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-mathematics-number--05-bounds-in-division.webp" width="900" height="1090" alt="A distance of 8.4 m lies between 8.35 and 8.45; a time of 2.0 s lies between 1.95 and 2.05. The largest speed is 8.45 divided by 1.95, about 4.33; the smallest is 8.35 divided by 2.05, about 4.07." loading="lazy">
  <figcaption>Higher tier: for a division use the largest top with the smallest bottom for the upper bound.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-mathematics-number--08-truncate-vs-round.webp" width="900" height="810" alt="On a number line from 3.7 to 3.8, 3.72 rounds and truncates to 3.7. 3.78 rounds to 3.8 but truncates to 3.7, because truncation just cuts off the digits." loading="lazy">
  <figcaption>Rounding goes to the nearest value; truncating simply cuts digits off.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--04-limits-of-accuracy.webp" width="900" height="810" alt="A number line from 4.50 to 4.70 kg shades the values from 4.55 to 4.65 that round to 4.6 kg. The lower bound 4.55 is included (filled dot); the upper bound 4.65 is not (open dot)." loading="lazy">
  <figcaption>A value given to 1 d.p. can be up to half a unit (0.05) either side: 4.55 &lt;= mass &lt; 4.65.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-estimation-and-using-a-calculator--03-estimate-calculation.webp" width="900" height="800" alt="62.4, 0.187 and 3.87 are rounded to 60, 0.2 and 4. The estimate is (60 x 0.2) / 4 = 3. On a number line it lies right next to the calculator value 3.015." loading="lazy">
  <figcaption>Round every number to 1 s.f., write the rounded calculation, and work it out.</figcaption>
</figure>


## HCF and LCM

Use prime factorisation. HCF = product of the **lowest** power of each common prime. LCM = product of the **highest** power of every prime appearing.

**Worked example.** Find the HCF and LCM of 60 and 72.

```
60 = 2^2 x 3 x 5
72 = 2^3 x 3^2

HCF = lowest power of each shared prime = 2^2 x 3 = 12
LCM = highest power of every prime present = 2^3 x 3^2 x 5 = 360
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-number--02-hcf-lcm-prime-factors.webp" width="900" height="920" alt="Two overlapping circles hold the prime factors of 24 and 36. The overlap 2, 2, 3 multiplies to the HCF 12. Every factor counted once, overlap plus the extra 2 and extra 3, multiplies to the LCM 72." loading="lazy">
  <figcaption>The overlap gives the HCF; every prime factor used once gives the LCM.</figcaption>
</figure>


## Reverse percentage for a decrease

A jacket costs £68 after a 15% **reduction**. The sale price is 85% of the original, so the multiplier is 0.85: original = 68 ÷ 0.85 = **£80**. Check by working forwards: 80 × 0.85 = 68.

The trap here is finding 15% of £68 and adding it on — that gives £78.20, which is wrong, because the percentage applies to the **original** price, not the sale price. **Estimating** by rounding each value to 1 significant figure before a calculation is also useful for sanity-checking whether an answer is plausible.

## Exam traps

- Reading a negative index as a negative answer.
- Subtracting a percentage instead of dividing in reverse-percentage problems.
- Assuming an increase then an equal decrease cancels out.
- (Higher) Using UB ÷ UB for a maximum quotient.
- (Higher) Writing `√a + √b = √(a+b)`.
- (Higher) Leaving a surd in the denominator when an exact answer is required.

## Self-test

1. (Higher) Evaluate `8^(2/3)` and `(4/9)^(−1/2)`.
2. (Higher) Rationalise `1/(3 + √2)`.
3. A price is £69 after a 15% increase. What was it before?
4. Give the error interval for a length of 24 cm measured to the nearest cm.
5. (Higher) How do you find the maximum value of `a ÷ b` from bounds?
6. A jacket costs £68 after a 15% reduction. Find the original price, and explain the common error to avoid.
7. Find the HCF and LCM of 60 and 72 using prime factorisation.

**Answers:** 1. 4; and 3/2. 2. Multiply top and bottom by (3 − √2) to get (3 − √2)/7. 3. 69 ÷ 1.15 = £60. 4. 23.5 ≤ L < 24.5. 5. Upper bound of a divided by the **lower** bound of b. 6. £80, since the multiplier for an 85% sale price is 0.85 and 68 ÷ 0.85 = £80; the common error is finding 15% of £68 and adding it on, which wrongly applies the percentage to the sale price rather than the original. 7. 60 = 2² × 3 × 5 and 72 = 2³ × 3², so HCF = 2² × 3 = 12 and LCM = 2³ × 3² × 5 = 360.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-mathematics-number--04-reverse-percentage-jacket.webp" width="900" height="900" alt="A bar for the sale price 68 pounds is 85 percent. Dividing by 0.85 gives the original, 80 pounds, as 100 percent. The slip of adding 15 percent of 68 gives 78.20 pounds, which is wrong." loading="lazy">
  <figcaption>Divide by the multiplier to get back to the original price.</figcaption>
</figure>

## Frequently asked questions

**Does a 15% increase followed by a 15% decrease give the original value?**
No. The multipliers give 1.15 × 0.85 = 0.9775, which is a 2.25% overall loss, because the decrease is applied to the already-increased value.

**How do you find the HCF and LCM using prime factors?**
Write each number as a product of prime factors. The HCF is the product of the lowest power of each common prime, and the LCM is the product of the highest power of every prime that appears.

**How do you write an error interval?**
For a value rounded to the nearest unit u, add and subtract half of u. For example, 24 cm to the nearest cm gives 23.5 ≤ L < 24.5.

**How do you find the maximum value of a division from bounds?**
Divide the upper bound of the numerator by the lower bound of the denominator. For subtraction and division the bounds cross over, which is the main difficulty of the topic at Higher tier.
