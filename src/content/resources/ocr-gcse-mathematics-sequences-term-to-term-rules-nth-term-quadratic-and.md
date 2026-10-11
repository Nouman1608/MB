---
title: "OCR GCSE Mathematics: Sequences, nth term and quadratic sequences (J560) -- Study Guide"
seoTitle: "OCR GCSE Maths Sequences and nth Term Study Guide"
resourceType: "study-guides"
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
description: "OCR GCSE Maths study guide to sequences: term-to-term rules, nth term, special and quadratic sequences, with fully worked examples for both tiers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide teaches sections 6.06a (generate terms of a sequence) and 6.06b (special sequences) of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), first assessed in 2017. Most of the content is on both tiers. Anything the specification puts in its Higher tier column is labelled **Higher tier only**: subscript notation, the nth term of a quadratic sequence, and generating or finding nth terms of other sequences.

Quick recall is in the [revision notes](/resources/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and-revision-notes/) and exam-style work is in the [practice questions](/resources/ocr-gcse-mathematics-sequences-term-to-term-rules-nth-term-quadratic-and-practice/). Every topic sits on the [course hub](/boards/ocr/gcse/mathematics/), you can tick off statements on the [printable checklist](/checklists/ocr/gcse/mathematics/), and [free 10-minute diagnostics](/diagnostics/) point you to weak spots.

## Scope of 6.06

| Ref. | Skill | Tier |
|---|---|---|
| 6.06a | Continue a sequence by spotting a pattern or using a term-to-term rule given in words or algebra | Both |
| 6.06a | Find a position-to-term rule for simple arithmetic sequences, such as 2n or n + 2 | Both |
| 6.06a | Generate terms from a formula for the nth term | Both |
| 6.06a | Find the nth term of an arithmetic sequence | Both |
| 6.06a | Use subscript notation for position-to-term and term-to-term rules | Higher tier only |
| 6.06a | Find the nth term of a quadratic sequence | Higher tier only |
| 6.06b | Recognise triangular, square and cube numbers and simple arithmetic progressions | Both |
| 6.06b | Recognise Fibonacci and quadratic sequences, and simple geometric progressions rⁿ (integer n, rational r above 0) | Both |
| 6.06b | Generate and find nth terms of other sequences | Higher tier only |

## Terms, positions and rules

A **sequence** is an ordered list of numbers. Each number is a **term**, and n is its **position**: 1st, 2nd, 3rd and so on. Two kinds of rule describe a sequence.

- A **term-to-term rule** builds each term from its predecessor. You must be given the first term too.
- A **position-to-term rule** (the nth term) gives any term straight from its position.

### Worked example 1: a term-to-term rule

The first term is 4. The rule is "multiply by 3, then subtract 5". Find the first four terms.

```
2nd term: 3 × 4 − 5 = 7
3rd term: 3 × 7 − 5 = 16
4th term: 3 × 16 − 5 = 43
```

The terms are 4, 7, 16, 43. Apply the whole rule each time. Multiplying first and subtracting second is not the same as the reverse.

### Spotting a pattern

For 1, 4, 7, 10, ... the differences are all 3, so the rule is "add 3". For 1, 4, 9, 16, ... the terms are the square numbers. When you are asked to continue a sequence, work out the differences first. If they are constant, the sequence is arithmetic. If the differences themselves grow steadily, look at square numbers or a quadratic sequence (see below).

### Simple position-to-term rules

For 2, 4, 6, ... the rule is 2n, because each term is twice its position. For 3, 4, 5, ... the rule is n + 2, because each term is the position plus 2. In words, you might write "multiply the position by 5" for 5, 10, 15, ...

## Terms from an nth-term formula

Substitute the position for n. Follow the order of operations: powers first, then multiplication, then addition and subtraction.

### Worked example 2: a formula with n²

The nth term is n² − 4n + 10. Find the first three terms and the 10th term.

```
n = 1:  1 − 4 + 10 = 7
n = 2:  4 − 8 + 10 = 6
n = 3:  9 − 12 + 10 = 7
n = 10: 100 − 40 + 10 = 70
```

The terms go 7, 6, 7, ... then rise again. A formula with n² does not give a constant difference.

### Is a number in the sequence?

Set the formula equal to the number and solve for n. The number is a term only if n is a positive whole number.

### Worked example 3: testing a number

The nth term is 7n − 3. Is 207 a term? Is 150 a term?

```
7n − 3 = 207 → 7n = 210 → n = 30   (a whole number, so yes)
7n − 3 = 150 → 7n = 153 → n = 21.857...  (not whole, so no)
```

207 is the 30th term. 150 is not a term.

## The nth term of an arithmetic sequence

An **arithmetic sequence** changes by a fixed step each time. That step is the **common difference**, d. Its nth term has the form dn + c.

Method:

1. Work out d, the step between terms. It becomes the multiplier of n.
2. List the first few values of dn.
3. See what has to be added or subtracted to turn dn into the given terms. That amount is c.
4. Check the formula on two terms.

### Worked example 4: a decreasing sequence

Find the nth term of 52, 47, 42, 37, ...

```
d = −5, so start with −5n:   −5, −10, −15, −20
Sequence:                     52,  47,  42,  37
Difference from −5n:          +57, +57, +57, +57
nth term = 57 − 5n
```

Check: n = 3 gives 57 − 15 = 42. The first negative term is the first n with 57 − 5n < 0, so 5n > 57 and n = 12. The 12th term is −3.

### Worked example 5: increasing

Find the nth term of 9, 14, 19, 24, ...

```
d = 5. The terms of 5n are 5, 10, 15, 20.
Each term is 4 more than 5n, so the nth term is 5n + 4.
```

The nth term is always the first term minus d, plus dn. Here 9 − 5 = 4. In example 4, 52 + 5 = 57.

## Special sequences you must recognise (6.06b)

| Name | Formula for the nth term | Listing |
|---|---|---|
| Square numbers | n² | 1, 4, 9, 16, 25, 36 |
| Cube numbers | n³ | 1, 8, 27, 64, 125, 216 |
| Triangular numbers | n(n + 1)/2 | 1, 3, 6, 10, 15, 21, 28 |
| Powers of 2 | 2ⁿ | 2, 4, 8, 16, 32 |

Triangular numbers come from adding 1, then 2, then 3, and so on. Learn the first ten terms of each.

### Fibonacci-type sequences

A **Fibonacci sequence** adds the last two terms to make the next: 1, 1, 2, 3, 5, 8, 13, ... Other sequences with this rule can start from any two numbers. If the first two terms are a and b, the next terms are a + b, a + 2b, 2a + 3b, 3a + 5b.

### Worked example 6: working backwards

A Fibonacci-type sequence has 4th term 17 and 6th term 44. Find the first two terms.

```
4th term: a + 2b = 17
6th term: 3a + 5b = 44
From the first: a = 17 − 2b
Substitute: 3(17 − 2b) + 5b = 44 → 51 − b = 44 → b = 7
Then a = 17 − 14 = 3
```

The sequence is 3, 7, 10, 17, 27, 44. Check: 10 + 17 = 27 and 17 + 27 = 44.

### Geometric progressions

A **geometric progression** keeps multiplying by one fixed number, the **common ratio** r. The specification names the form rⁿ with integer n and rational r above 0. To find r, divide any term by the term just before it.

### Worked example 7: a fractional ratio

Continue 8, 12, 18, 27, ... and give the next two terms.

```
r = 12 ÷ 8 = 3/2   (check: 18 ÷ 12 = 3/2)
5th term: 27 × 3/2 = 81/2 = 40.5
6th term: 81/2 × 3/2 = 243/4 = 60.75
```

If r is between 0 and 1 the terms shrink. If r is more than 1 they grow.

### Quadratic sequences

A **quadratic sequence** has first differences that keep changing while its **second differences** stay fixed. To recognise one, write both rows of differences under the terms.

### Worked example 8: recognising and continuing

Show that 5, 6, 9, 14, 21, ... is quadratic and find the next two terms.

```
Terms:              5   6   9   14   21
First differences:    1   3    5    7
Second differences:     2   2    2
```

The second differences are constant at 2, so the sequence is quadratic. The next first differences are 9 and 11, so the next terms are 21 + 9 = 30 and 30 + 11 = 41.

## Higher tier only: subscript notation

Write the term in position n as xₙ. A position-to-term rule such as xₙ = n + 2 gives x₁ = 3, x₂ = 4, and so on. The term after xₙ is xₙ₊₁, so a term-to-term rule is written xₙ₊₁ = 2xₙ − 3.

### Worked example 9: a term-to-term rule in subscripts

A sequence has x₁ = 6 and xₙ₊₁ = 2xₙ − 3. Find x₂, x₃ and x₄. Then find x₁ if instead x₃ = 21.

```
x₂ = 2 × 6 − 3 = 9
x₃ = 2 × 9 − 3 = 15
x₄ = 2 × 15 − 3 = 27

Backwards, with x₃ = 21:  x₃ = 2x₂ − 3 = 21 → x₂ = 12
                          x₂ = 2x₁ − 3 = 12 → x₁ = 7.5
```

To run a rule backwards, undo the steps in reverse order: add 3, then halve.

## Higher tier only: finding a quadratic rule

The nth term of any quadratic sequence looks like an² + bn + c, and its second difference is always 2a. So a is half of the second difference.

Method:

1. Write both rows of differences, then halve the constant second difference. This is a.
2. Take away the terms of an² from the sequence, term by term.
3. The leftovers form a linear sequence: find bn + c for it.
4. Test the final rule on the first two terms.

### Worked example 10: positive a

Find the nth term of 4, 9, 18, 31, 48, ...

```
First differences:   5, 9, 13, 17
Second differences:  4, 4, 4  → a = 2
2n²:                 2, 8, 18, 32, 50
Sequence − 2n²:      2, 1, 0, −1, −2  → 3 − n
nth term = 2n² − n + 3
```

Check: n = 2 gives 8 − 2 + 3 = 9. This sequence has no term equal to 200, since 2n² − n + 3 = 200 gives 2n² − n − 197 = 0, whose discriminant 1 + 8 × 197 = 1577 is not a perfect square, so n is not a whole number.

### Worked example 11: negative a

Find the nth term of 20, 29, 34, 35, 32, ...

```
First differences:   9, 5, 1, −3
Second differences:  −4, −4, −4  → a = −2
−2n²:                −2, −8, −18, −32, −50
Sequence − (−2n²):   22, 37, 52, 67, 82  → 15n + 7
nth term = −2n² + 15n + 7
```

The specification's own example, 0, 3, 10, 21, ..., gives 2n² − 3n + 1 by the same method.

## Higher tier only: other sequences

The specification asks you to generate and find nth terms of other sequences, with surds and fractions as examples. The skill is to find what changes from term to term, then express it using n.

### Worked example 12: surds

Find the nth term of √3, √6, 3, 2√3, ...

```
Write each as a square root: √3, √6, √9, √12
The numbers under the root are 3, 6, 9, 12 = 3n
nth term = √(3n)
```

For a surd geometric sequence, find the ratio. For 5, 5√2, 10, 10√2, 20, ... each step multiplies by √2, so the nth term is 5 × (√2)ⁿ⁻¹.

### Worked example 13: fractions

Find the nth term of 1/3, 2/5, 3/7, 4/9, ...

```
Numerators: 1, 2, 3, 4          → n
Denominators: 3, 5, 7, 9        → 2n + 1
nth term = n/(2n + 1)
```

Check: n = 4 gives 4/9. Treat the top and bottom as two separate sequences. For 3/2, 5/3, 7/4, ... the numerators are 2n + 1 and the denominators n + 1.

## Common errors

- Applying only part of a term-to-term rule, or doing the steps in the wrong order.
- Writing the nth term as n + d instead of dn + c. The common difference multiplies n.
- Getting the sign wrong for a decreasing sequence: 52, 47, 42 is 57 − 5n, not 5n + 57.
- Saying a number is a term when n is a fraction. Position must be a positive whole number.
- Calling a sequence arithmetic when only the second differences are constant.
- Forgetting to halve the second difference when finding the n² coefficient.
- Subtracting the n² terms wrongly when a is negative: the remainder is sequence minus an².
- Mixing up xₙ₊₁ (the next term) with xₙ + 1 (one more than this term).

## Official syllabus

Source: OCR, GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), section 6.06 Sequences (6.06a and 6.06b).
