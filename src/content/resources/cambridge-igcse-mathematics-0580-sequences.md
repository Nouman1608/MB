---
title: "Cambridge IGCSE Mathematics (0580): Sequences"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.07
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "sequences-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.7 Sequences: term-to-term rules, linking sequences, and nth terms of linear, quadratic, cubic and exponential sequences."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.7 Sequences** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. Both tiers share the same three statements; the difference is in which sequences appear.

| Statement | Core (C2.7) | Extended (E2.7) |
|---|---|---|
| 1 Continue a given number sequence or pattern | yes | yes; subscript notation such as Tₙ may be used |
| 2 Recognise patterns, including the term-to-term rule and relationships between different sequences | yes | yes, for linear, quadratic, cubic and exponential sequences and simple combinations of these |
| 3 Find and use the nth term | linear, **simple** quadratic, **simple** cubic | sequences of all the types above |

"Simple" at Core means sequences such as n² + 1, 2n² or n³ − 2, which are a square or cube number pattern with a small change. Extended candidates must handle general quadratics such as 2n² + n + 1 and cubics such as n³ − n. After this guide, use the [sequences revision notes](/resources/cambridge-igcse-mathematics-0580-sequences-revision-notes/) and the [sequences practice questions](/resources/cambridge-igcse-mathematics-0580-sequences-practice/).

## Two kinds of rule

- A **term-to-term rule** tells you how to get from one term to the next: "add 4", "multiply by 3", "add 4, then 6, then 8, …".
- A **position-to-term rule**, the **nth term**, gives any term directly from its position n: the nth term 4n + 3 gives the 10th term as 4(10) + 3 = 43 without listing the first nine.

Term-to-term rules are quick for continuing a sequence; the nth term is what you need for a far-off term or to test whether a number belongs.

### Worked example 1 (Core): continuing a sequence

Write down the next two terms of 2, 6, 12, 20, 30, … and describe the term-to-term rule.

```
Differences:  4, 6, 8, 10  -> the differences go up by 2
Next differences: 12, 14
Next terms: 30 + 12 = 42, 42 + 14 = 56
Rule: add 4, then add 2 more each time (add 4, 6, 8, ...)
```

Each term is also n(n + 1): 1 × 2, 2 × 3, 3 × 4, and so on. Seeing a product like this is a quick route to an nth term.

## Linear sequences (Core and Extended)

A constant first difference d means the nth term is dn + c. Find c by asking what the sequence would be at n = 0 (the term before the first).

### Worked example 2

(a) Find the nth term of 7, 11, 15, 19, …. (b) Is 101 a term of the sequence? (c) Find the nth term of 20, 17, 14, 11, ….

```
(a) d = 4;  term before 7 is 3   ->  4n + 3

(b) 4n + 3 = 101  ->  4n = 98  ->  n = 24.5
    n is not a whole number, so 101 is not a term.

(c) d = -3; term before 20 is 23  ->  23 - 3n
```

For a decreasing sequence the coefficient of n is negative. Writing 3n + 23 is a common error; check by substituting n = 1.

## Simple quadratic and cubic sequences (Core and Extended)

Compare the sequence with the square numbers 1, 4, 9, 16, 25, … or the cube numbers 1, 8, 27, 64, 125, …. Finding a **relationship between two sequences** is exactly what statement 2 asks for.

### Worked example 3 (Core)

Find the nth term of (a) 3, 6, 11, 18, 27, … (b) 2, 9, 28, 65, 126, …

```
(a) n^2:    1, 4, 9, 16, 25
    terms:  3, 6, 11, 18, 27     each is 2 more  ->  n^2 + 2

(b) n^3:    1, 8, 27, 64, 125
    terms:  2, 9, 28, 65, 126    each is 1 more  ->  n^3 + 1
```

A quick test for the type: a linear sequence has a constant first difference, a quadratic a constant second difference, and a cubic a constant third difference.

## General quadratic sequences (Extended)

For an² + bn + c, the **second difference is 2a**. Find a, subtract an² from every term, and the remainder is a linear sequence bn + c.

### Worked example 4

Find the nth term of 4, 11, 22, 37, 56, ….

```
Terms:              4    11    22    37    56
First differences:     7    11    15    19
Second differences:       4     4     4
2a = 4  ->  a = 2, so start with 2n^2

2n^2:               2     8    18    32    50
Terms - 2n^2:       2     3     4     5     6   -> n + 1

nth term: 2n^2 + n + 1
```

Check with n = 3: 2(9) + 3 + 1 = 22, which matches the third term.

### Using the nth term: which term first exceeds a value?

Which is the first term of 2n² + n + 1 to be greater than 500?

```
n = 15: 2(225) + 15 + 1 = 466     not enough
n = 16: 2(256) + 16 + 1 = 529     first term over 500
```

Estimate first (2n² ≈ 500 gives n² ≈ 250, so n ≈ 16), then test the whole numbers either side.

## Cubic sequences (Extended)

For an³ + bn² + cn + d, the **third difference is 6a**. Find a, subtract an³, and treat what remains as a quadratic or linear sequence.

### Worked example 5

Find the nth term of 0, 6, 24, 60, 120, ….

```
Terms:              0     6    24    60   120
First differences:     6    18    36    60
Second differences:      12    18    24
Third differences:          6     6
6a = 6  ->  a = 1, so start with n^3

n^3:                1     8    27    64   125
Terms - n^3:       -1    -2    -3    -4    -5   -> -n

nth term: n^3 - n
```

## Exponential sequences and combinations (Extended)

An exponential (geometric) sequence has a **constant ratio** between terms. Its nth term is a × rⁿ⁻¹, where a is the first term and r the ratio.

### Worked example 6

Find the nth term of (a) 3, 6, 12, 24, … (b) 81, 27, 9, 3, … (c) 3, 5, 9, 17, 33, ….

```
(a) ratio 2, first term 3        ->  3 × 2^(n-1)

(b) ratio 1/3, first term 81     ->  81 × (1/3)^(n-1)
    81 = 3^4, so this is also 3^(5-n)

(c) differences 2, 4, 8, 16 double each time, so compare with 2^n:
    2^n:    2, 4, 8, 16, 32
    terms:  3, 5, 9, 17, 33      ->  2^n + 1
```

Part (c) is a **combination**: an exponential sequence plus a constant. Its term-to-term rule is "multiply by 2, then subtract 1". The giveaway is differences that multiply rather than add.

## Subscript notation (Extended)

Tₙ means the nth term of sequence T. If Tₙ = 5n − 2, then T₁ = 3 and T₁₀ = 48. A question may define two sequences, Pₙ = n² and Qₙ = 2n + 1, and ask for the value of n where Pₙ = Qₙ + 7: n² = 2n + 8 gives n² − 2n − 8 = 0, so n = 4 (n = −2 is not a position).

## Common mistakes

- Using the first difference as the coefficient of n² in a quadratic: the coefficient is **half** the second difference.
- Getting the constant wrong in a linear nth term by using the first term instead of the zero term (writing 4n + 7 for 7, 11, 15, …).
- Stopping at first differences when they are not constant.
- Confusing 3 × 2ⁿ⁻¹ with 6ⁿ⁻¹: the power applies to the 2 only.
- Answering "Is 101 a term?" with just "no"; the reason (n is not an integer) carries the mark.

## Exam technique

- **"Write down the next term"**: no working needed, but write the differences lightly to check.
- **"Find an expression for the nth term"**: an expression in n, not a term-to-term rule such as "add 4".
- **"Explain why"** a number is not in a sequence: solve nth term = number and comment on the value of n.
- Always check your nth term against two of the given terms.

## More on this topic

- [Sequences revision notes](/resources/cambridge-igcse-mathematics-0580-sequences-revision-notes/) for the methods in brief and a self-test.
- [Sequences practice questions](/resources/cambridge-igcse-mathematics-0580-sequences-practice/) with marked answers.
- Exponential growth in context: [exponential growth, decay and surds guide](/resources/igcse-mathematics-0580-exponential-growth-decay-and-surds/).
- The whole topic: [Algebra and graphs study guide](/resources/igcse-mathematics-algebra-and-graphs/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, C2.7 and E2.7 Sequences.
