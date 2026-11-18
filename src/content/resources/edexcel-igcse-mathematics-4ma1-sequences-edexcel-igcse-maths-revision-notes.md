---
title: "Edexcel International GCSE Mathematics A (4MA1): Sequences -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 4MA1 section 3.1 notes: sequence rules, nth terms, testing whether a number is a term, and Higher a, d and Sₙ, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for section 3.1, Sequences, in Pearson Edexcel International GCSE Mathematics A (4MA1). Foundation statements A to C (rules and linear nth terms) are for both tiers; Higher statements A to C (a, d, a + (n − 1)d and Sₙ) are Higher tier only. For explanations and worked examples, read the [sequences study guide](/resources/edexcel-igcse-mathematics-4ma1-sequences-edexcel-igcse-maths/); for exam-style questions, use the [sequences practice questions](/resources/edexcel-igcse-mathematics-4ma1-sequences-edexcel-igcse-maths-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Sequence | An ordered list of numbers (terms) following a rule |
| Term | One number in the sequence; the nth term is in position n |
| Term-to-term rule | How to get the next term from the one before |
| Position-to-term rule | A formula for the nth term in terms of n |
| Arithmetic (linear) sequence | Constant difference between consecutive terms |
| Common difference, d | The constant amount added each time (negative if decreasing) |
| First term, a | The term in position 1 |
| Series | The sum of the terms of a sequence |
| Sₙ | The sum of the first n terms |

## Foundation essentials (both tiers)

```
nth term of an arithmetic sequence = dn + (first term − d)

7, 10, 13, 16, ...    d = 3,  3n + 4
20, 17, 14, 11, ...   d = −3, 23 − 3n
```

| Sequence | nth term |
|---|---|
| even numbers | 2n |
| odd numbers | 2n − 1 |
| multiples of k | kn |
| square numbers | n² |
| powers of 2 | 2ⁿ |
| cube numbers | n³ |

### Non-linear rules to spot

Not every sequence is arithmetic. Check the differences first; if they are not constant, try these:

- **Multiplying:** 1, 2, 4, 8, ... (× 2); 81, 27, 9, 3, ... (÷ 3). The next terms follow the same multiplier.
- **Related to squares:** 2, 5, 10, 17, ... is n² + 1; 0, 3, 8, 15, ... is n² − 1.
- **Adding the two previous terms:** 1, 1, 2, 3, 5, 8, ... continues 13, 21.

State the rule in words when the question asks for it, for example "multiply the previous term by 2".

### Is it a term?

Set the nth term equal to the number and solve. If n is a positive whole number, it is a term.

```
6n − 5 = 121   →  n = 21        yes, the 21st term
23 − 3n = 1    →  n = 22/3      no
```

### First term above or below a value

Solve the inequality, then take the next whole number.

```
5n + 4 > 200   →  n > 39.2   →  n = 40, term 204
```

### Patterns of shapes

If each new pattern adds the same number of pieces, the number of pieces is a linear sequence: count the pieces in patterns 1, 2 and 3, find the difference, and write the nth term.

## Higher essentials

```
nth term     uₙ = a + (n − 1)d          learn this
sum          Sₙ = (n/2)[2a + (n − 1)d]  on the formulae sheet
             Sₙ = (n/2)(a + l)          l = last term
terms        number of terms = (last − first)/d + 1
```

### Two given terms

```
3rd term 14, 10th term 49
7 steps of d: 7d = 35, d = 5
a = 14 − 2d = 4
```

### Unknown n in a sum

Substitute, simplify to a quadratic, solve and keep the positive integer root.

```
7 + 11 + 15 + ...  Sₙ = n(2n + 5)
n(2n + 5) = 900  →  n = 20
```

### "How many terms to exceed"

Find where Sₙ passes the target and check the two whole numbers either side.

```
8 + 11 + 14 + ...   S₁₆ = 488,  S₁₇ = 544   so 17 terms are needed to exceed 500
```

## Exam traps

- **Rule versus nth term.** "Add 4" is a term-to-term rule; the nth term is 4n + something.
- **Sign of d.** A decreasing sequence has a negative coefficient of n: 23 − 3n, not 3n − 23.
- **Whole-number test.** n = 7.33 means "not a term"; say so in words.
- **n − 1, not n.** The 10th term is a + 9d.
- **Term or sum?** "The 20th term" and "the sum of the first 20 terms" need different formulae.
- **Counting terms.** From 102 to 198 in steps of 3 is 33 terms, not 32.
- **Quadratic roots.** Reject a negative or fractional value of n.

## Self-test

1. Write the first four terms of the sequence with nth term n² + 3.
2. First term 2; rule "multiply by 3, then subtract 1". Write the first four terms.
3. Find the nth term of 7, 10, 13, 16, ...
4. Find the nth term of 20, 17, 14, 11, ...
5. Is 1 a term of 23 − 3n? Explain.
6. Find the first term of 5n + 4 that is greater than 200.
7. Write down the nth term of 1, 8, 27, 64, ...
8. (Higher) The 3rd term is 14 and the 10th term is 49. Find a and d.
9. (Higher) Find the 25th term of 4, 9, 14, ...
10. (Higher) Find the sum of the first 20 terms of 4 + 9 + 14 + ...
11. (Higher) How many multiples of 3 are there from 102 to 198, and what is their sum?
12. (Higher) Show that the sum of the first n odd numbers is n².

### Answers

1. **4, 7, 12, 19**.
2. **2, 5, 14, 41**.
3. **3n + 4**.
4. **23 − 3n**.
5. 23 − 3n = 1 gives n = 22/3, which is not a whole number, so **no**.
6. n > 39.2, so n = 40 and the term is **204**.
7. **n³**.
8. 7d = 35, so **d = 5** and **a = 4**.
9. 4 + 24 × 5 = **124**.
10. 10 × (8 + 95) = **1030**.
11. **33** terms; (33/2)(102 + 198) = **4950**.
12. a = 1, d = 2: Sₙ = (n/2)[2 + 2(n − 1)] = (n/2)(2n) = **n²**.
