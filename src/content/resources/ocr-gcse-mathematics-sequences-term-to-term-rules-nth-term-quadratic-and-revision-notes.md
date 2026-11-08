---
title: "OCR GCSE Mathematics: Sequences, nth term and quadratic sequences (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Sequences Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Sequences: term-to-term rules, nth term, quadratic and special sequences"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 50
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "sequences-ocr-gcse-maths"
description: "Condensed OCR GCSE Maths revision notes on sequences: rules, nth term, special sequences, quadratic nth term, subscripts, and a self-test with answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These revision notes condense sections 6.06a and 6.06b (sequences) of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), first assessed in 2017. Full explanations and extended examples are in the [study guide](/resources/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and/). Then try the [practice questions](/resources/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and-practice/). Content the specification places in the Higher tier column is marked **Higher tier only**. Everything else is on both tiers.

Use the [course hub](/boards/ocr/gcse/mathematics/) for other topics and the [printable checklist](/checklists/ocr/gcse/mathematics/) to record progress. If you are unsure where to begin, try a [free 10-minute diagnostic](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Term | One number in the sequence |
| Position, n | Where the term sits: 1st, 2nd, 3rd ... |
| Term-to-term rule | A step that builds each term from the one before |
| Position-to-term rule | A formula for the nth term |
| Common difference, d | The fixed amount added each time in an arithmetic sequence |
| Common ratio, r | The fixed multiplier used in a geometric progression |
| Second difference | Differences taken a second time, from the first differences |

## Special sequences to know by heart

| Type | Rule | Terms |
|---|---|---|
| Square | n² | 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 |
| Cube | n³ | 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 |
| Triangular | n(n + 1)/2 | 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 |
| Fibonacci | Add the previous two terms | 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 |
| Powers of 2 | 2ⁿ | 2, 4, 8, 16, 32, 64 |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--02-triangular-numbers.webp" width="900" height="1060" alt="Dot triangles show 1, 3, 6 and 10 dots. Two copies of the 10-dot triangle fit together as a 4 by 5 rectangle of 20 dots, so the nth triangular number is n(n + 1) divided by 2." loading="lazy">
  <figcaption>Two triangular numbers make a rectangle n by n + 1, which is why the formula halves it.</figcaption>
</figure>


## Spot the type

| Test | Type | What to do |
|---|---|---|
| First differences constant | Arithmetic | nth term dn + c |
| Divide each term by the one before: constant | Geometric | Multiply by r to continue |
| Second differences constant | Quadratic | Continue using differences |
| Each term equals the two before it added together | Fibonacci-type | Add to continue |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--07-fibonacci-type-backwards.webp" width="900" height="770" alt="The terms are a, b, a+b, a+2b, 2a+3b, 3a+5b. With the 4th term 17 and the 6th 44, b = 7 and a = 3, giving 3, 7, 10, 17, 27, 44." loading="lazy">
  <figcaption>Fibonacci-type sequence found backwards from two known terms.</figcaption>
</figure>


## Method: term-to-term rule

```
1. Write down the first term.
2. Apply the full rule to get the next term.
3. Repeat. Keep the order of the steps in the rule.
```

Reminder: first term 2, rule "multiply by 3, then add 1" gives 2, 7, 22, 67.

## Method: terms from a formula

```
1. Substitute the position for n.
2. Powers first, then multiply, then add or subtract.
3. To test if a number is a term, set formula = number and solve.
   It is a term only if n is a positive whole number.
```

Reminder: for 7n + 4, is 95 a term? 7n = 91, n = 13, so yes. Is 100? 7n = 96, n = 13.71..., so no.

## Method: nth term of an arithmetic sequence

```
1. d = common difference. This is the number in front of n.
2. Write the terms of dn.
3. Compare with the sequence. The constant is c.
4. nth term = dn + c. Check on two terms.
```

Shortcut: c = first term − d.

| Sequence | d | c | nth term |
|---|---|---|---|
| 11, 18, 25, 32 | 7 | 11 − 7 = 4 | 7n + 4 |
| 30, 26, 22, 18 | −4 | 30 + 4 = 34 | 34 − 4n |
| 0.5, 1, 1.5, 2 | 0.5 | 0 | 0.5n |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--05-linear-nth-term.webp" width="900" height="950" alt="The sequence 5, 8, 11, 14 rises by 3 each time. On a graph the terms lie on a straight line rising 3 per step and reaching 2 at n = 0. So the nth term is 3n + 2." loading="lazy">
  <figcaption>A constant difference d gives dn plus the value the line has at n = 0.</figcaption>
</figure>


## Method: geometric progression

```
1. Divide a term by its predecessor to get r. Confirm with a second pair.
2. Multiply by r to continue.
```

Reminder: 160, 80, 40 has r = 1/2, so the next terms are 20 and 10. A ratio between 0 and 1 makes terms smaller. A ratio above 1 makes them larger.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--08-geometric-progression.webp" width="900" height="900" alt="Bars for 8, 12, 18, 27, 40.5, 60.75 each multiply the previous term by 3/2, the common ratio found by dividing a term by the one before." loading="lazy">
  <figcaption>A geometric progression multiplies by the same ratio each time.</figcaption>
</figure>


## Two more worked reminders

**From a pattern.** Pattern 1 uses 4 counters, pattern 2 uses 7, pattern 3 uses 10. Each pattern adds 3 counters, so d = 3 and the nth term is 3n + 1. Pattern 30 uses 3 × 30 + 1 = 91 counters. Always turn the diagram into a list of numbers first.

**Fibonacci-type, working backwards.** The 3rd term is 11 and the 5th term is 31. With first two terms a and b, a + b = 11 and 2a + 3b = 31.

```
2a + 2b = 22
Subtract from 2a + 3b = 31:  b = 9
a = 11 − 9 = 2
Sequence: 2, 9, 11, 20, 31
```

Check: 9 + 11 = 20 and 11 + 20 = 31.

**Finding the first term to pass a value.** Find the first term of 34 − 4n that is below zero. Solve 34 − 4n < 0, so n > 8.5, and the first such term is the 9th: 34 − 36 = −2. Round n up to the next whole number for "greater than", and always check the term you give.

## Method: quadratic sequences

**Recognise (both tiers):** write first and second differences. If the second differences are constant, the sequence is quadratic. Continue it by extending the differences.

Reminder: 5, 8, 13, 20 has first differences 3, 5, 7 and second differences 2. The next first difference is 9, so the next term is 29.

**Find the nth term (Higher tier only):**

```
1. Second difference ÷ 2 = a (the coefficient of n²).
2. Subtract the terms of an² from the sequence.
3. The remainder is linear: find bn + c.
4. nth term = an² + bn + c. Check on the first two terms.
```

Worked reminder: 7, 12, 19, 28, 39.

```
First differences:   5, 7, 9, 11
Second differences:  2, 2, 2  → a = 1
n²:                  1, 4, 9, 16, 25
Remainder:           6, 8, 10, 12, 14 = 2n + 4
nth term = n² + 2n + 4
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--06-quadratic-nth-term.webp" width="900" height="980" alt="The sequence 2, 5, 10, 17, 26 has first differences 3, 5, 7, 9 and constant second difference 2. Dot squares show each term as n squared plus one extra dot, so the nth term is n squared plus 1." loading="lazy">
  <figcaption>A constant second difference means a quadratic nth term.</figcaption>
</figure>


## Higher tier only: subscript notation

| Notation | Meaning |
|---|---|
| xₙ | The term in position n |
| xₙ = n + 2 | Position-to-term rule |
| xₙ₊₁ | The term after xₙ |
| xₙ₊₁ = 2xₙ − 3 | Term-to-term rule (needs a starting value such as x₁) |

To run a rule backwards, undo each step in reverse order. If xₙ₊₁ = 2xₙ − 3 and x₃ = 21, then x₂ = (21 + 3)/2 = 12.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--01-quadratic-two-n-squared.webp" width="900" height="1110" alt="Differences 5, 9, 13, 17 and 4, 4, 4 give a = 2. Subtracting 2n squared from 4, 9, 18, 31, 48 leaves 2, 1, 0, minus 1, minus 2, which is 3 minus n, so the nth term is 2n squared minus n plus 3." loading="lazy">
  <figcaption>Halve the constant second difference to get a, then fit the leftover linear part.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--06-term-to-term-two-step.webp" width="900" height="840" alt="Multiply by 3 then subtract 5 from 4 gives 4, 7, 16, 43. With x1 = 6 and x(n+1) = 2x(n) - 3 the terms are 6, 9, 15, 27, and undoing the steps from x3 = 21 gives x2 = 12 and x1 = 7.5." loading="lazy">
  <figcaption>Two-step term-to-term rules forwards, in subscript notation, and backwards.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--10-quadratic-negative-a.webp" width="900" height="870" alt="The terms 20, 29, 34, 35, 32 rise then fall. First differences 9, 5, 1, -3 and constant second difference -4 give a = -2, and the nth term is -2n squared + 15n + 7." loading="lazy">
  <figcaption>A quadratic sequence with negative a rises then falls.</figcaption>
</figure>


## Higher tier only: other sequences

| Pattern | Idea | nth term |
|---|---|---|
| √3, √6, 3, 2√3 | Put each term under a root: √3, √6, √9, √12 | √(3n) |
| 1/2, 2/5, 3/8 | Numerators n, denominators 3n − 1 | n/(3n − 1) |
| 5, 5√2, 10, 10√2 | Geometric, ratio √2 | 5 × (√2)ⁿ⁻¹ |
| 2, 6, 18, 54 | Geometric, ratio 3 | 2 × 3ⁿ⁻¹ |

Split a fraction sequence into a numerator sequence and a denominator sequence, and find each one separately.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and--09-surd-fraction-nth-term.webp" width="900" height="1140" alt="Surd terms rewritten as roots of 3, 6, 9, 12 give the square root of 3n. Fractions 1/3, 2/5, 3/7, 4/9 have tops n and bottoms 2n + 1, so the nth term is n over 2n + 1." loading="lazy">
  <figcaption>Split surds and fractions into simple patterns to find the nth term.</figcaption>
</figure>


## Must-know distinctions

- **Arithmetic or geometric.** Arithmetic adds the same amount each time. Geometric multiplies by the same amount each time. 3, 6, 9 and 3, 6, 12 are different.
- **Linear or quadratic.** Constant first differences mean linear. Constant second differences mean quadratic.
- **dn + c.** The common difference is the coefficient of n, not the constant.
- **xₙ₊₁ and xₙ + 1.** The first is the next term. The second is the current term plus one.
- **n² and 2n.** n² gives 1, 4, 9. 2n gives 2, 4, 6.

## Quick self-test

1. The first term is 2 and the rule is "multiply by 3, then add 1". Write the first four terms.
2. The nth term is 3n² − 2. Find the 5th term.
3. Find the nth term of 11, 18, 25, 32, ...
4. Is 100 a term of 7n + 4? Is 95?
5. Write down the 9th triangular number.
6. Find the common ratio of 160, 80, 40, ... and write the next two terms.
7. Find the next term of 5, 8, 13, 20, ...
8. A Fibonacci-type sequence starts 2, 5. Write the next three terms.
9. **(Higher tier only)** x₁ = 3 and xₙ₊₁ = xₙ² − 2. Find x₂ and x₃.
10. **(Higher tier only)** Find the nth term of 2, 9, 22, 41, 66, ...
11. **(Higher tier only)** Find the nth term of 1/2, 2/5, 3/8, ...

### Answers

1. 2, 7, 22, 67.
2. 3 × 25 − 2 = **73**.
3. d = 7 and c = 11 − 7 = 4, so **7n + 4**.
4. 100: 7n = 96, n = 13.71..., not a term. 95: 7n = 91, n = 13, **a term (the 13th)**.
5. 9 × 10/2 = **45**.
6. r = 80 ÷ 160 = 1/2. Next terms **20 and 10**.
7. First differences 3, 5, 7, so the next is 9. 20 + 9 = **29**.
8. 2 + 5 = 7, 5 + 7 = 12, 7 + 12 = 19. **7, 12, 19**.
9. x₂ = 9 − 2 = **7**. x₃ = 49 − 2 = **47**.
10. First differences 7, 13, 19, 25, so the second difference is 6 and a = 3. Taking away 3n² leaves −1, −3, −5, −7, which is 1 − 2n. **3n² − 2n + 1**.
11. Numerators n, denominators 3n − 1. **n/(3n − 1)**.

## Where marks are usually lost

- Using the common difference as the constant: writing n + 7 for 7n + 4.
- Dropping the negative sign when the sequence decreases.
- Reading a quadratic sequence as arithmetic because the first two differences look similar.
- Not halving the second difference before writing the n² coefficient.
- Forgetting to check the formula on the first two terms.
- Stating that a number is a term without checking n is a whole number.
- Writing a bare value for a "show that" question instead of showing the working.
- Working a term-to-term rule in the wrong order, for example adding before multiplying.
- Leaving a fraction sequence as one pattern instead of splitting numerator and denominator.
- Giving the next term when the question asks for the nth term, or the reverse.

## Frequently asked questions

**How can you tell if a sequence is arithmetic, geometric or quadratic?**
If the first differences are constant, it is arithmetic; if dividing each term by the one before gives a constant, it is geometric. If the second differences are constant, it is quadratic.

**What is the formula for triangular numbers?**
The nth triangular number is n(n + 1)/2, giving 1, 3, 6, 10, 15 and so on. For example, the 9th triangular number is 9 × 10 ÷ 2 = 45.

**How do you find the nth term of a quadratic sequence?**
Halve the constant second difference to get the coefficient of n², subtract the terms of an² from the sequence, then find the linear nth term of what is left. Check your answer on the first two terms; this method is Higher tier only.

**How do you find the nth term of a fraction sequence?**
Treat the numerators and denominators as two separate sequences and find the nth term of each. For 1/2, 2/5, 3/8, ..., the numerators are n and the denominators are 3n − 1, giving n/(3n − 1).

## Official syllabus

Source: OCR, GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), section 6.06 Sequences (6.06a and 6.06b).
