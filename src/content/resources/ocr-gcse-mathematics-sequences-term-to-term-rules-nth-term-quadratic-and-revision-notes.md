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
publishedDate: 2026-10-11
featured: false
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

## Spot the type

| Test | Type | What to do |
|---|---|---|
| First differences constant | Arithmetic | nth term dn + c |
| Divide each term by the one before: constant | Geometric | Multiply by r to continue |
| Second differences constant | Quadratic | Continue using differences |
| Each term equals the two before it added together | Fibonacci-type | Add to continue |

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

## Method: geometric progression

```
1. Divide a term by its predecessor to get r. Confirm with a second pair.
2. Multiply by r to continue.
```

Reminder: 160, 80, 40 has r = 1/2, so the next terms are 20 and 10. A ratio between 0 and 1 makes terms smaller. A ratio above 1 makes them larger.

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

## Higher tier only: subscript notation

| Notation | Meaning |
|---|---|
| xₙ | The term in position n |
| xₙ = n + 2 | Position-to-term rule |
| xₙ₊₁ | The term after xₙ |
| xₙ₊₁ = 2xₙ − 3 | Term-to-term rule (needs a starting value such as x₁) |

To run a rule backwards, undo each step in reverse order. If xₙ₊₁ = 2xₙ − 3 and x₃ = 21, then x₂ = (21 + 3)/2 = 12.

## Higher tier only: other sequences

| Pattern | Idea | nth term |
|---|---|---|
| √3, √6, 3, 2√3 | Put each term under a root: √3, √6, √9, √12 | √(3n) |
| 1/2, 2/5, 3/8 | Numerators n, denominators 3n − 1 | n/(3n − 1) |
| 5, 5√2, 10, 10√2 | Geometric, ratio √2 | 5 × (√2)ⁿ⁻¹ |
| 2, 6, 18, 54 | Geometric, ratio 3 | 2 × 3ⁿ⁻¹ |

Split a fraction sequence into a numerator sequence and a denominator sequence, and find each one separately.

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

## Official syllabus

Source: OCR, GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), section 6.06 Sequences (6.06a and 6.06b).
