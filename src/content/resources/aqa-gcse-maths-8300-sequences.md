---
title: "AQA GCSE Mathematics 8300: Sequences -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Sequences Study Guide"
resourceType: "study-guides"
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
description: "AQA GCSE Maths 8300 Sequences study guide: term-to-term and nth-term rules, special sequences, geometric and quadratic sequences, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches section **3.2.4 Sequences** (references A23, A24 and A25) of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Most of this content is on both tiers. The parts the specification places in its "Higher content only" column are labelled **Higher tier only**: other sequences, geometric progressions with a surd ratio, and the nth term of a quadratic sequence. Sequences can be tested on any of the three papers, so you need to do every method here by hand for the non-calculator Paper 1.

This page goes deeper than the [Algebra study guide](/resources/aqa-gcse-mathematics-algebra/), which covers all of Topic 2. For quick recall, use the [Sequences revision notes](/resources/aqa-gcse-maths-8300-sequences-revision-notes/), then test yourself with the [Sequences practice questions](/resources/aqa-gcse-maths-8300-sequences-practice/). The [AQA GCSE Mathematics hub](/boards/aqa/gcse/mathematics/) lists every topic, and the [printable checklist](/checklists/aqa/gcse/mathematics/) lets you tick off each statement. A [free 10-minute diagnostic](/diagnostics/) shows which topics need the most work.

## What this section covers

| Reference | What you must be able to do | Tier |
|---|---|---|
| A23 | Generate terms of a sequence from a term-to-term rule or a position-to-term rule, including from patterns and diagrams | Foundation and Higher |
| A24 | Recognise and use triangular, square and cube numbers and simple arithmetic progressions | Foundation and Higher |
| A24 | Recognise and use Fibonacci-type sequences, quadratic sequences and simple geometric progressions rⁿ (n an integer, r a rational number > 0) | Foundation and Higher |
| A24 | Other sequences, and geometric progressions where r is a surd | Higher tier only |
| A25 | Deduce an expression for the nth term of a linear sequence | Foundation and Higher |
| A25 | Deduce an expression for the nth term of a quadratic sequence | Higher tier only |

The specification notes that other recursive sequences will be defined in the question.

## A23: Generating terms

A **sequence** is a list of numbers in a fixed order. Each number is a **term**. The **position** of a term is its place in the list: 1st, 2nd, 3rd and so on. We use n for the position.

There are two kinds of rule.

- A **term-to-term rule** tells you how to get from one term to the next, for example "add 6" or "double, then subtract 3". You also need the first term.
- A **position-to-term rule** (the **nth term**) tells you how to work out any term straight from its position, for example 30 − 4n.

### Worked example 1: position-to-term rule

The nth term of a sequence is 30 − 4n. Write down the first three terms and work out the 25th term.

```
n = 1:  30 − 4 × 1 = 26
n = 2:  30 − 4 × 2 = 22
n = 3:  30 − 4 × 3 = 18
n = 25: 30 − 4 × 25 = 30 − 100 = −70
```

The first three terms are 26, 22, 18 and the 25th term is −70. Notice the terms go down by 4 each time. That matches the −4 in front of n.

### Worked example 2: term-to-term rule

The first term of a sequence is 5. The rule is "double the previous term, then subtract 3". Write down the next three terms.

```
2nd term: 2 × 5 − 3 = 7
3rd term: 2 × 7 − 3 = 11
4th term: 2 × 11 − 3 = 19
```

The terms are 5, 7, 11, 19. A term-to-term rule is slow for a far-off term, which is why the nth term is useful.

### Patterns and diagrams

Matchsticks are laid in a row of triangles. Pattern 1 is one triangle (3 matches). Each new triangle shares a side with the one before, so it needs 2 more matches. Pattern 2 uses 5 matches and pattern 3 uses 7. Turn the diagram into numbers first, then treat it like any other sequence: 3, 5, 7, 9, ... We find its nth term in worked example 7.

## A24: Special sequences you must recognise

### Square, cube and triangular numbers

| Sequence | First terms | nth term |
|---|---|---|
| Square numbers | 1, 4, 9, 16, 25, 36, ... | n² |
| Cube numbers | 1, 8, 27, 64, 125, ... | n³ |
| Triangular numbers | 1, 3, 6, 10, 15, 21, 28, ... | n(n + 1)/2 |

Triangular numbers count dots in triangle-shaped patterns: add 2, then 3, then 4, and so on. Know the first ten of each list.

### Arithmetic progressions

An **arithmetic progression** (also called a linear sequence) goes up or down by the same amount each time. That amount is the **common difference**. The sequence 31, 26, 21, 16, ... is arithmetic with common difference −5.

### Fibonacci-type sequences

In a **Fibonacci-type** sequence each term is the sum of the two terms before it. The original Fibonacci sequence starts 1, 1, 2, 3, 5, 8, ... but any two starting numbers work.

If you call the first two terms a and b, the sequence is:

```
a,  b,  a + b,  a + 2b,  2a + 3b,  3a + 5b, ...
```

This lets you work backwards when a question gives you later terms.

### Worked example 3: Fibonacci-type, working backwards

A Fibonacci-type sequence has 3rd term 11 and 5th term 29. Work out the first two terms.

```
3rd term: a + b = 11
5th term: 2a + 3b = 29
Double the first: 2a + 2b = 22
Subtract:          b = 7
Then               a = 11 − 7 = 4
```

The sequence is 4, 7, 11, 18, 29. Always check: 4 + 7 = 11, 11 + 18 = 29.

### Quadratic sequences (recognising them)

In a **quadratic sequence** the first differences are not constant, but the **second differences** (the differences between the differences) are. On both tiers you must recognise a quadratic sequence and continue it.

### Worked example 4: continuing a quadratic sequence

Write down the next two terms of 5, 7, 11, 17, 25, ...

```
Terms:              5    7    11    17    25
First differences:    2    4     6     8
Second differences:      2    2     2
```

The second differences are all 2, so the next first differences are 10 and 12. The next terms are 25 + 10 = **35** and 35 + 12 = **47**.

### Simple geometric progressions

In a **geometric progression** you multiply by the same number each time. That number is the **common ratio**, r. The specification uses the form rⁿ, with r a rational number greater than 0. Find r by dividing a term by the one before it.

### Worked example 5: geometric progression with a fraction ratio

Work out the next two terms of 192, 48, 12, 3, ...

```
r = 48 ÷ 192 = 1/4   (check: 12 ÷ 48 = 1/4)
Next terms: 3 × 1/4 = 3/4,   then 3/4 × 1/4 = 3/16
```

The sequence 5, 7.5, 11.25, ... has r = 1.5. When r is between 0 and 1 the terms get smaller; when r is greater than 1 they get bigger.

### Higher tier only: a surd ratio

At Higher tier the common ratio can be a surd. The same rule applies, and you use surd rules such as √3 × √3 = 3.

### Worked example 6 (Higher tier only): surd ratio

A geometric progression has first term 2 and common ratio √3. Work out the 7th term.

```
2,  2√3,  6,  6√3,  18,  18√3,  54
```

Each pair of steps multiplies by √3 × √3 = 3, so the whole-number terms go 2, 6, 18, 54. The 7th term is **54**. Leave answers like 6√3 in surd form.

### Higher tier only: other sequences

"Other sequences" means sequences with a rule you have not met before. The question will define the rule. For example: "The first term is 1. Each term after that is 2 × the previous term + 3." The terms are 1, 5, 13, 29.

You may need to run a rule backwards. Suppose the rule is "next term = 3 × previous term − 4" and the 3rd term is 29. Undo each step in reverse order: add 4, then divide by 3.

```
2nd term: (29 + 4) ÷ 3 = 11
1st term: (11 + 4) ÷ 3 = 5
```

Check forwards: 3 × 5 − 4 = 11 and 3 × 11 − 4 = 29.

## A25: The nth term of a linear sequence

For a linear sequence the nth term has the form **dn + c**, where d is the common difference.

Method:

1. Find the common difference d. This is the number in front of n.
2. Write out the terms of dn for n = 1, 2, 3, ...
3. Compare with the sequence to find the number you must add or subtract.
4. Check with one term.

### Worked example 7: from a pattern

The matchstick pattern above gives 3, 5, 7, 9, ... Find the nth term and the number of matches in pattern 30.

```
Common difference: 2, so start with 2n
2n:        2, 4, 6, 8
Sequence:  3, 5, 7, 9      (each is 1 more)
nth term:  2n + 1
Pattern 30: 2 × 30 + 1 = 61 matches
```

The +1 is the extra match that starts the row; then 2 per triangle.

### Worked example 8: a decreasing sequence and testing a number

(a) Find the nth term of 31, 26, 21, 16, ...

```
Common difference: −5, so start with −5n
−5n:       −5, −10, −15, −20
Sequence:  31,  26,  21,  16     (each is 36 more)
nth term:  36 − 5n
```

(b) Is 150 a term of the sequence with nth term 7n − 4? Is 200 a term of the sequence with nth term 6n + 5?

```
7n − 4 = 150   →  7n = 154   →  n = 22      (a whole number: yes, the 22nd term)
6n + 5 = 200   →  6n = 195   →  n = 32.5    (not a whole number: no)
```

Positions must be positive whole numbers, so say clearly whether n is one.

## A25 Higher tier only: the nth term of a quadratic sequence

A quadratic sequence has an nth term of the form **an² + bn + c**. The key fact: the second difference is always **2a**.

Method:

1. Find the first and second differences. Halve the second difference to get a.
2. Subtract an² from each term. What is left is a linear sequence.
3. Find the nth term of that linear sequence (bn + c).
4. Add the two parts and check with one term.

### Worked example 9 (Higher tier only)

Find the nth term of 4, 8, 18, 34, 56, ...

```
Terms:              4    8    18    34    56
First differences:    4    10    16    22
Second differences:      6     6     6
a = 6 ÷ 2 = 3, so start with 3n²

3n²:                3    12    27    48    75
Term − 3n²:         1    −4    −9   −14   −19
```

The remainder 1, −4, −9, −14, −19 is linear with common difference −5. Using −5n: −5, −10, −15, ... and each remainder is 6 more. So the linear part is −5n + 6.

```
nth term = 3n² − 5n + 6
Check n = 2: 3 × 4 − 10 + 6 = 8  ✓
```

There is a quicker check on the coefficients. For an² + bn + c, the first term is a + b + c and the first first-difference is 3a + b. Here 3 + (−5) + 6 = 4 and 3 × 3 + (−5) = 4. Both match.

The [Algebra revision notes](/resources/aqa-gcse-mathematics-algebra-revision-notes/) have a second example.

## Common errors

- **Using the first term as the number in front of n.** For 31, 26, 21, ... the nth term is 36 − 5n, not 31 − 5n. The number in front of n is the common difference.
- **Getting the sign of a decreasing sequence wrong.** A sequence that goes down has a negative coefficient of n.
- **Writing n + 2 for "add 2 each time".** The term-to-term rule "+2" gives 2n + something, not n + 2.
- **Calling 32.5 a position.** If solving gives a decimal n, the number is not in the sequence. Say so in words.
- **Using the whole second difference as a.** In worked example 9 the second difference is 6, so the n² coefficient is 3, not 6.
- **Finding a geometric ratio the wrong way round.** Divide a term by the term before it, not the term after it.
- **Turning surds into decimals too early.** 6√3 is exact; 10.39... loses marks if an exact answer is asked for.

## Next steps

Next, use the [revision notes](/resources/aqa-gcse-maths-8300-sequences-revision-notes/) and [practice questions](/resources/aqa-gcse-maths-8300-sequences-practice/). For the rest of Topic 2, try the [Algebra practice questions](/resources/aqa-gcse-mathematics-algebra-practice/).

## Official syllabus

AQA GCSE Mathematics (8300) specification, version 1.0, for teaching from September 2015 onwards and exams from May/June 2017 onwards, published by AQA. Section 3.2.4 Sequences, references A23 to A25.
