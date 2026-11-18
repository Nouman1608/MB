---
title: "Edexcel International GCSE Mathematics A (4MA1): Sequences"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, functions and graphs"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 3.1
syllabusTopics:
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "sequences-edexcel-igcse-maths"
description: "Study guide to 4MA1 section 3.1: term-to-term and position-to-term rules, arithmetic nth terms, and Higher a, d and the sum of an arithmetic series."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3.1, Sequences, in topic 3 (Sequences, functions and graphs) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2. Foundation content (generating terms, finding rules, the nth term of an arithmetic sequence) is for both tiers. The Higher Tier adds the first term a, the common difference d, the formula a + (n − 1)d and the sum of an arithmetic series.

The topic-level [Sequences, functions and graphs study guide](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs/) introduces sequences alongside functions, graphs and calculus. This page goes further into 3.1 alone, with new worked examples and the reasoning behind each formula. Afterwards, use the [sequences revision notes](/resources/edexcel-igcse-mathematics-4ma1-sequences-edexcel-igcse-maths-revision-notes/) and the [sequences practice questions](/resources/edexcel-igcse-mathematics-4ma1-sequences-edexcel-igcse-maths-practice/).

## What the specification says

| Statement | Students should be taught to | Tier |
|---|---|---|
| Foundation 3.1 A | generate terms of a sequence using term-to-term and position-to-term definitions (including odd, even, squares, multiples and powers) | Both |
| Foundation 3.1 B | find subsequent terms of an integer sequence and the rule for generating it | Both |
| Foundation 3.1 C | use linear expressions to describe the nth term of arithmetic sequences | Both |
| Higher 3.1 A | understand and use common difference (d) and first term (a) in an arithmetic sequence | Higher only |
| Higher 3.1 B | know and use nth term = a + (n − 1)d | Higher only |
| Higher 3.1 C | find the sum of the first n terms of an arithmetic series (Sₙ) | Higher only |

The Higher Tier formulae sheet gives the sum: Sₙ = (n/2)[2a + (n − 1)d]. The nth-term formula a + (n − 1)d is not on the sheet, so learn it.

## Two kinds of rule

A **term-to-term** rule tells you how to get from one term to the next. You need a starting term.

> First term 2; rule "multiply by 3, then subtract 1": 2, 5, 14, 41, 122, ...

A **position-to-term** rule (an nth term) gives any term directly from its position n.

> nth term n² + 3: put n = 1, 2, 3, 4, 5 to get 4, 7, 12, 19, 28.

The position-to-term rule is more powerful: the 100th term of n² + 3 is 10 003 straight away, while a term-to-term rule needs every term before it.

### Sequences named in the specification

| Sequence | Terms | nth term |
|---|---|---|
| Even numbers | 2, 4, 6, 8, ... | 2n |
| Odd numbers | 1, 3, 5, 7, ... | 2n − 1 |
| Multiples of 7 | 7, 14, 21, ... | 7n |
| Square numbers | 1, 4, 9, 16, ... | n² |
| Powers of 2 | 2, 4, 8, 16, ... | 2ⁿ |

Recognising these lets you spot a rule quickly: 1, 4, 9, 16 are the squares; 3, 6, 12, 24 double each time; 40, 33, 26, 19 go down by 7.

## The nth term of an arithmetic sequence (both tiers)

An arithmetic (linear) sequence changes by the same amount each time. That amount is the common difference. Its nth term has the form

```
nth term = (difference) × n + (zero term)
```

The "zero term" is the term that would come before the first one: subtract the difference from the first term.

**Worked example 1.** For the sequence 20, 17, 14, 11, ...

(a) Find an expression for the nth term. (b) Is 1 a term of the sequence? (c) Find the first negative term.

```
(a) difference = −3; zero term = 20 − (−3) = 23
    nth term = 23 − 3n
    check: n = 1 gives 20, n = 2 gives 17 ✓

(b) 23 − 3n = 1  →  3n = 22  →  n = 7.33...
    n is not a whole number, so 1 is not a term.

(c) 23 − 3n < 0  →  3n > 23  →  n > 7.67
    the first whole number is n = 8, and the 8th term is 23 − 24 = −1
```

For a decreasing sequence the coefficient of n is negative. Writing −3n + 23 or 23 − 3n are both correct; 3n + 23 is not.

**Worked example 2.** The nth term of a sequence is 5n − 2. Write down the first three terms and find the 50th term.

n = 1, 2, 3 give **3, 8, 13**; the 50th term is 5 × 50 − 2 = **248**.

## Higher tier only: a, d and a + (n − 1)d

In Higher notation, a is the first term and d is the common difference. To reach the nth term you add d a total of (n − 1) times:

```
1st term  a
2nd term  a + d
3rd term  a + 2d
nth term  a + (n − 1)d
```

This is the same as the Foundation form: a + (n − 1)d = dn + (a − d).

**Worked example 3 (Higher).** The 3rd term of an arithmetic sequence is 14 and the 10th term is 49. Find a, d and the nth term.

```
a + 2d = 14
a + 9d = 49
subtract: 7d = 35, so d = 5
a = 14 − 10 = 4
nth term = 4 + 5(n − 1) = 5n − 1
```

Between the 3rd and 10th terms there are 7 steps of d, which is why 49 − 14 is divided by 7, not by 10 − 3 + 1.

## Higher tier only: the sum of an arithmetic series

A series is the sum of the terms of a sequence. The formula comes from writing the sum forwards and backwards and adding: each pair of terms adds to the same total, 2a + (n − 1)d, and there are n pairs, giving twice the sum.

```
Sₙ = (n/2)[2a + (n − 1)d]          on the formulae sheet
Sₙ = (n/2)(a + l)                  equivalent form, where l is the last term
```

**Worked example 4 (Higher).** Find the sum of the first 20 terms of 4 + 9 + 14 + ...

a = 4, d = 5, n = 20: S₂₀ = 10 × [8 + 19 × 5] = 10 × 103 = **1030**.

**Worked example 5 (Higher, finding n).** The series 7 + 11 + 15 + ... has a sum of 900. How many terms are there?

```
Sₙ = (n/2)[14 + 4(n − 1)] = (n/2)(4n + 10) = n(2n + 5)
n(2n + 5) = 900
2n² + 5n − 900 = 0
(2n + 45)(n − 20) = 0
n = 20  (n must be a positive integer)
```

**Worked example 6 (Higher, a series in words).** Find the sum of all the multiples of 3 between 100 and 200.

```
first multiple 102, last multiple 198, d = 3
number of terms: (198 − 102)/3 + 1 = 33
S = (33/2)(102 + 198) = 33 × 150 = 4950
```

Count the terms with "(last − first)/d + 1". Forgetting the +1 is a classic error.

## Common mistakes

- Writing the nth term of 20, 17, 14 as 3n + 23 or −3n + 17.
- Using the term-to-term rule ("add 4") as if it were the nth term ("4n").
- Deciding a number is a term because n comes out positive, without checking that n is a whole number.
- (Higher) Using n instead of n − 1 in a + (n − 1)d.
- (Higher) Confusing the 20th term with the sum of 20 terms.
- (Higher) Counting the number of terms between two values without the +1.

## Exam technique

- **"Write down the next two terms"**: one mark, no working needed, but state the rule if a later part asks.
- **"Find an expression for the nth term"**: the answer must contain n; check it with n = 1 and n = 2.
- **"Is ... a term? Show how you decide"** or **"Explain"**: solve the nth term equation, then state the conclusion in words, giving the reason (n is or is not a whole number).
- **"Show that"** a given sum: write the formula with numbers substituted before simplifying.
- (Higher) Quote Sₙ from the formulae sheet, and define a, d and n before substituting.

## Next steps

Revise with the [sequences revision notes](/resources/edexcel-igcse-mathematics-4ma1-sequences-edexcel-igcse-maths-revision-notes/), then try the [sequences practice questions](/resources/edexcel-igcse-mathematics-4ma1-sequences-edexcel-igcse-maths-practice/). A linear nth term is a straight-line rule in disguise: the difference plays the role of the gradient, covered in the [graphs study guide](/resources/edexcel-igcse-mathematics-4ma1-graphs-edexcel-igcse-maths/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 3, Sequences, functions and graphs: 3.1 Sequences, Foundation Tier statements A to C and Higher Tier statements A to C; Higher Tier formulae sheet (arithmetic series).
