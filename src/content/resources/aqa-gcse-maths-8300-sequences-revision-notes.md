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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--02-special-numbers.webp" width="900" height="880" alt="Dot patterns: square numbers 1, 4, 9, 16 are n by n squares of dots; triangular numbers 1, 3, 6, 10 are triangles with rows of 1, 2, 3, 4 dots, adding 2, then 3, then 4 dots. Cube numbers are 1, 8, 27, 64, 125, written n cubed." loading="lazy">
  <figcaption>Square numbers are n by n grids; triangular numbers add one more row each time.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--02-differences-type.webp" width="900" height="1202" alt="Four sequences with their difference rows. Linear 3, 7, 11, 15 has constant first differences of 4. Quadratic 1, 4, 9, 16 has constant second differences of 2. Cubic 1, 8, 27, 64 has constant third differences of 6. Exponential 3, 6, 12, 24 has a constant ratio of 2." loading="lazy">
  <figcaption>Keep taking differences until a row is constant; that row tells you the type.</figcaption>
</figure>


## Method: generating terms (A23)

- **Position-to-term:** substitute n = 1, 2, 3, ... into the nth term. For a far-off term, substitute that position straight in.
- **Term-to-term:** apply the rule to the first term, then to each new term in turn.
- **Pattern or diagram:** count the objects in the first three or four patterns, write the numbers as a sequence, then work with the numbers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--01-matchstick-triangles.webp" width="900" height="840" alt="Three matchstick patterns: one triangle uses 3 matches, two triangles in a row use 5, three use 7. Each new triangle adds 2 matches, so the nth term is 2n + 1 and pattern 30 uses 61 matches." loading="lazy">
  <figcaption>A row of n triangles uses 2n + 1 matches: 2 for each new triangle plus 1 to start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--01-undo-the-rule.webp" width="900" height="790" alt="Three boxes show the terms 5, 11 and 29. Going forwards the rule is times 3 then subtract 4. Going backwards from the 3rd term 29 you undo in reverse order: add 4 then divide by 3 gives the 2nd term 11, and the same steps give the 1st term 5. A forward check confirms 3 times 5 minus 4 is 11 and 3 times 11 minus 4 is 29." loading="lazy">
  <figcaption>To run a rule backwards, undo each step in reverse order: add 4, then divide by 3.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--05-linear-nth-term.webp" width="900" height="950" alt="The sequence 5, 8, 11, 14 rises by 3 each time. On a graph the terms lie on a straight line rising 3 per step and reaching 2 at n = 0. So the nth term is 3n + 2." loading="lazy">
  <figcaption>A constant difference d gives dn plus the value the line has at n = 0.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--01-linear-nth-term.webp" width="900" height="940" alt="Graph of the sequence 5, 8, 11, 14 against n. Each point is 3 higher than the one before, so the points lie on a straight line of gradient 3. Extending the line back to n = 0 gives 2, so the nth term is 3n + 2." loading="lazy">
  <figcaption>A linear sequence lies on a straight line whose gradient is the common difference.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--06-quadratic-nth-term.webp" width="900" height="980" alt="The sequence 2, 5, 10, 17, 26 has first differences 3, 5, 7, 9 and constant second difference 2. Dot squares show each term as n squared plus one extra dot, so the nth term is n squared plus 1." loading="lazy">
  <figcaption>A constant second difference means a quadratic nth term.</figcaption>
</figure>


## Method: is a number in the sequence?

```
Set nth term = the number  →  solve for n
n a positive whole number  →  yes, it is the nth term
n a decimal or fraction    →  no
```

Worked reminder: is 75 a term of 4n − 1? 4n = 76, n = 19. Yes, the 19th term.

To find the **first term above or below a value**, solve the inequality the same way, then round n **up** to the next whole number and work out that term to prove it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--02-decreasing-nth-term.webp" width="900" height="880" alt="A graph of the terms of 31, 26, 21, 16, 11, 6 against position 1 to 6. The points fall in a straight line, down 5 each step. Extending the line back to position 0 gives 36, so the nth term is 36 minus 5n, not 31 minus 5n." loading="lazy">
  <figcaption>The terms fall by 5 each step, so n has coefficient −5, and the line starts at 36 when n = 0.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--03-is-it-a-term.webp" width="900" height="850" alt="Two number lines. For the sequence 7n minus 4 the terms near 150 are 143 (n = 21), 150 (n = 22) and 157 (n = 23), so 150 is the 22nd term. For 6n plus 5 the terms near 200 are 197 (n = 32) and 203 (n = 33); 200 falls halfway between them, which is n = 32.5, so 200 is not a term." loading="lazy">
  <figcaption>Set the nth term equal to the number and solve: n must be a positive whole number.</figcaption>
</figure>


## Method: Fibonacci-type with missing terms

Call the first two terms a and b. The terms are then:

```
a,  b,  a + b,  a + 2b,  2a + 3b,  3a + 5b,  5a + 8b
```

Match the given terms to these expressions, form two equations and solve them simultaneously. Check your answer by building the sequence forwards.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--03-fibonacci-backwards.webp" width="900" height="800" alt="A Fibonacci-type sequence with first terms a and b continues a + b, a + 2b, 2a + 3b. If the 3rd term is 11 and the 5th is 29, then a + b = 11 and 2a + 3b = 29, giving b = 7 and a = 4. The sequence is 4, 7, 11, 18, 29." loading="lazy">
  <figcaption>Write the terms using a and b, match the known terms, then solve.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-sequences--04-geometric-ratio.webp" width="900" height="900" alt="Top: 192, 48, 12, 3, 3/4, 3/16 with each term the previous times 1/4; the circle areas shrink to a quarter each step. Bottom (Higher tier): first term 2 and ratio root 3 gives 2, 2 root 3, 6, 6 root 3, 18, 18 root 3, 54, so every two steps multiply by 3." loading="lazy">
  <figcaption>Divide a term by the one before to find r; r below 1 shrinks the terms, r above 1 grows them.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--03-four-shapes.webp" width="900" height="970" alt="Four small graphs of a sequence for n = 1 to 6. Linear 4n minus 1 rises in a straight line to 23. Quadratic n squared curves upward to 36. Cubic n cubed curves upward more steeply to 216. Exponential 3 times 2 to the n minus 1 doubles each step and reaches 96." loading="lazy">
  <figcaption>Linear sequences are straight; quadratic, cubic and exponential sequences curve upward at different rates.</figcaption>
</figure>


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
