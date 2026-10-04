---
title: "AQA GCSE Mathematics 8300: Sequences -- Revision Notes"
seoTitle: "AQA GCSE Maths 8300 Sequences Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Sequences"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 2
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
    subtopic: "sequences-aqa-gcse-maths"
description: "Condensed AQA GCSE Maths 8300 Sequences revision notes: nth-term methods, special and geometric sequences, a quick self-test with answers, common slips."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

For full explanations and worked examples, read the [Sequences study guide](/resources/aqa-gcse-maths-8300-sequences/). These notes condense section **3.2.4 Sequences** (A23, A24 and A25) of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Content in the specification's "Higher content only" column is marked **Higher tier only**; everything else is for both tiers. Sequences can come up on the non-calculator Paper 1 as well as the calculator Papers 2 and 3, so practise every method by hand.

When you have read these notes, try the [Sequences practice questions](/resources/aqa-gcse-maths-8300-sequences-practice/). The topic-level [Algebra revision notes](/resources/aqa-gcse-mathematics-algebra-revision-notes/) cover the rest of Topic 2. Plan your revision with the [AQA GCSE Mathematics hub](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) and the [free diagnostics](/diagnostics/).

## What is on each tier

| Reference | Both tiers | Higher tier only |
|---|---|---|
| A23 | Terms from a term-to-term or position-to-term rule, including patterns and diagrams | -- |
| A24 | Triangular, square and cube numbers; arithmetic progressions; Fibonacci-type; quadratic sequences; geometric progressions rⁿ with r rational and > 0 | Other sequences; geometric progressions where r is a surd |
| A25 | nth term of a linear sequence | nth term of a quadratic sequence |

Other recursive sequences will be defined in the question, so you only need to follow the rule you are given.

## Key words

| Term | Meaning |
|---|---|
| Term | One number in a sequence |
| Position (n) | The place of a term: 1st, 2nd, 3rd, ... |
| Term-to-term rule | How to get the next term from the previous one (needs a first term) |
| Position-to-term rule | A formula in n that gives any term directly: the nth term |
| Common difference | The fixed amount added each time in an arithmetic (linear) sequence |
| Common ratio, r | The fixed number you multiply by each time in a geometric progression |
| Second difference | The difference between consecutive first differences |
| Fibonacci-type | Each term is the sum of the two before it |

## Sequences to recognise on sight

| Type | Example | How to spot it | nth term |
|---|---|---|---|
| Square numbers | 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 | n × n | n² |
| Cube numbers | 1, 8, 27, 64, 125 | n × n × n | n³ |
| Triangular numbers | 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 | add 2, 3, 4, 5, ... | n(n + 1)/2 |
| Arithmetic (linear) | 2, 9, 16, 23, ... | constant first difference | dn + c |
| Quadratic | 1, 6, 15, 28, 45, ... | constant second difference | an² + bn + c (Higher) |
| Geometric | 54, 18, 6, 2, ... | constant ratio | -- |
| Fibonacci-type | 2, 5, 7, 12, 19, ... | add the previous two | -- |

Note that 1 and 64 are both square and cube numbers, and 36 is both square and triangular. Questions that ask you to pick numbers from a list like to use these.

## Method: generating terms (A23)

- **Position-to-term:** substitute n = 1, 2, 3, ... into the nth term. For a far-off term, substitute that position straight in.
- **Term-to-term:** apply the rule to the first term, then to each new term in turn.
- **Pattern or diagram:** count the objects in the first three or four patterns, write the numbers as a sequence, then work with the numbers.

## Method: nth term of a linear sequence (A25)

```
1. Common difference d       → the nth term starts dn
2. Write out dn for n = 1, 2, 3
3. Compare with the sequence  → add or subtract the gap
4. Check one term
```

Worked reminder: 40, 37, 34, 31, ...

```
d = −3           −3n: −3, −6, −9, −12
Gap: 40 − (−3) = 43   →   nth term = 43 − 3n
Check n = 4: 43 − 12 = 31 ✓
```

## Method: is a number in the sequence?

```
Set nth term = the number  →  solve for n
n a positive whole number  →  yes, it is the nth term
n a decimal or fraction    →  no
```

Worked reminder: is 75 a term of 4n − 1? 4n = 76, n = 19. Yes, the 19th term.

To find the **first term above or below a value**, solve the inequality the same way, then round n **up** to the next whole number and work out that term to prove it.

## Method: Fibonacci-type with missing terms

Call the first two terms a and b. The terms are then:

```
a,  b,  a + b,  a + 2b,  2a + 3b,  3a + 5b,  5a + 8b
```

Match the given terms to these expressions, form two equations and solve them simultaneously. Check your answer by building the sequence forwards.

## Method: geometric progressions

```
r = any term ÷ the term before it      (check with a second pair)
next term = last term × r
```

Worked reminder: 54, 18, 6, ... has r = 18 ÷ 54 = 1/3. The next term is 6 × 1/3 = 2.

**Higher tier only, surd ratio:** keep surds exact and use √k × √k = k. With first term 4 and r = √5:

```
4,  4√5,  20,  20√5,  100, ...
```

Every second term is multiplied by 5.

## Method: quadratic sequences

**Both tiers — continue the sequence:** find the second difference, extend the first differences, then add.

**Higher tier only — the nth term:**

```
1. a = second difference ÷ 2       → start with an²
2. Subtract an² from every term    → a linear sequence remains
3. Find bn + c for that linear sequence
4. nth term = an² + bn + c; check one term
```

Worked reminder with a fraction coefficient: 2, 5, 9, 14, 20, ...

```
First differences: 3, 4, 5, 6      Second difference: 1   → a = 1/2
Term − ½n²:  1.5, 3, 4.5, 6, 7.5   → linear, d = 1.5, gap 0
nth term = ½n² + (3/2)n
Check n = 3: 4.5 + 4.5 = 9 ✓
```

Odd second differences always give a fraction for a. Do not round it.

**Coefficient check:** for an² + bn + c, the first term equals a + b + c and the first first-difference equals 3a + b.

## Must-know distinctions

| | Arithmetic | Geometric |
|---|---|---|
| Changes by | adding d | multiplying by r |
| How to find it | subtract consecutive terms | divide consecutive terms |
| Example | 2, 9, 16, 23 (d = 7) | 54, 18, 6, 2 (r = 1/3) |

| | Linear | Quadratic |
|---|---|---|
| Constant | first differences | second differences |
| nth term | dn + c | an² + bn + c, with a = second difference ÷ 2 |
| nth term asked on | both tiers | Higher tier only |

| | Term-to-term | Position-to-term |
|---|---|---|
| Uses | the previous term | the position n |
| Good for | the next few terms | any term, e.g. the 100th |

## Quick self-test

Do these without a calculator.

1. Write down the first three terms of the sequence with nth term 7 − 2n.
2. Find the nth term of 2, 9, 16, 23, ...
3. Find the nth term of 40, 37, 34, 31, ...
4. Is 75 a term of the sequence 4n − 1? Give a reason.
5. A Fibonacci-type sequence starts 2, 5, 7, 12. Write down the next two terms.
6. Write down the 10th triangular number.
7. Find the common ratio of 54, 18, 6, ... and the next term.
8. Write down the next term of the quadratic sequence 1, 6, 15, 28, ...
9. (Higher) Find the nth term of 1, 6, 15, 28, 45, ...
10. (Higher) A geometric progression has first term 4 and common ratio √5. Work out the 4th term in exact form.

### Answers

1. 5, 3, 1
2. d = 7; 7n gives 7, 14, 21, so subtract 5: **7n − 5**
3. d = −3; −3n gives −3, −6, −9, so add 43: **43 − 3n**
4. 4n − 1 = 75 gives n = 19, a whole number, so **yes** (the 19th term)
5. 7 + 12 = **19**, then 12 + 19 = **31**
6. 10 × 11 ÷ 2 = **55**
7. r = **1/3**; next term 6 × 1/3 = **2**
8. First differences 5, 9, 13; second difference 4; next first difference 17, so **45**
9. a = 4 ÷ 2 = 2. Term − 2n²: −1, −2, −3, −4, −5, which is −n. nth term **2n² − n**
10. 4, 4√5, 20, **20√5**

## Where marks are usually lost

- Using the first term instead of the common difference as the coefficient of n (writing 2n + 7 for 2, 9, 16, ...).
- Writing "n + 7" for a sequence that goes up in 7s.
- Dropping the minus sign for a decreasing sequence: 40, 37, 34 is 43 − 3n, not 3n + 43.
- Answering "yes" or "no" to "is this number a term?" with no working. Show the equation and the value of n.
- Stopping at an inequality such as n > 12.4 when asked for a term. Round up to the 13th term and work out its value.
- Using the second difference itself as the n² coefficient instead of half of it (Higher).
- Forgetting to subtract an² from **every** term, then finding the wrong linear part (Higher).
- Rounding a = 1/2 or a surd term to a decimal when an exact answer is needed.
- Dividing the wrong way when finding a geometric ratio, giving 3 instead of 1/3.
- Applying a recursive rule to the wrong term, or not working backwards in reverse order (undo the last operation first).

## Official syllabus

AQA GCSE Mathematics (8300) specification, version 1.0, for teaching from September 2015 onwards and exams from May/June 2017 onwards, published by AQA. Section 3.2.4 Sequences, references A23 to A25.
