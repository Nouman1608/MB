---
title: "Cambridge O Level Mathematics (4024): Sequences -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.7
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "sequences"
description: "Revision notes for Cambridge O Level Maths 4024 subtopic 2.7: term-to-term rules and nth terms of linear, quadratic, cubic, exponential and combined sequences."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for subtopic **2.7 Sequences** of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027. The [sequences study guide](/resources/cambridge-o-level-mathematics-4024-sequences/) explains each method with worked examples; the [sequences practice questions](/resources/cambridge-o-level-mathematics-4024-sequences-practice/) give exam-style questions with mark schemes.

## Syllabus outcomes

1. Continue a given number sequence or pattern.
2. Recognise patterns, including the term-to-term rule and relationships between sequences.
3. Find and use the nth term.

Includes linear, quadratic, cubic and exponential sequences and simple combinations. Subscript notation: Tₙ is the nth term of T.

## Key terms

| Term | Meaning |
|---|---|
| Sequence | An ordered list of numbers following a rule |
| Term | One number in the sequence; T₁ is the first |
| Term-to-term rule | How to get the next term from the previous one |
| nth term | A formula giving the term in position n |
| Common difference | The constant amount added each time in a linear sequence |
| Second difference | The difference between first differences; constant for a quadratic |
| Common ratio | The constant multiplier in an exponential sequence |
| Triangular numbers | 1, 3, 6, 10, 15, … with nth term n(n + 1)/2 |

## Identify the type

| First differences constant | → linear: Tₙ = dn + c |
|---|---|
| Second differences constant | → quadratic: Tₙ = an² + bn + c, with 2a = second difference |
| Third differences constant | → cubic, often n³ adjusted |
| Constant ratio | → exponential: Tₙ = a × r^(n − 1) |

## Linear: Tₙ = dn + c

```
7, 11, 15, 19, …     d = 4,   c = 7 − 4 = 3      Tₙ = 4n + 3
26, 22, 18, 14, …    d = −4,  c = 26 + 4 = 30    Tₙ = 30 − 4n
```

c is the "zeroth term": the first term minus d.

## Quadratic: method

1. Second difference ÷ 2 = a.
2. Subtract an² from each term.
3. Find the nth term of what remains (linear) and add it on.

```
2, 9, 22, 41, 66
first:   7, 13, 19, 25      second: 6  → a = 3
term − 3n²:  −1, −3, −5, −7  → −2n + 1
Tₙ = 3n² − 2n + 1
```

```
5, 12, 21, 32, 45
second difference 2 → n²; remainder 4, 8, 12, 16 → 4n
Tₙ = n² + 4n
```

## Cubic and exponential: compare with known sequences

```
2, 16, 54, 128, 250   = 2 × cubes            Tₙ = 2n³
0, 7, 26, 63, 124     = cubes − 1            Tₙ = n³ − 1
5, 15, 45, 135, …     a = 5, r = 3           Tₙ = 5 × 3^(n − 1)
64, 16, 4, 1, …       a = 64, r = ¼          Tₙ = 64 × (¼)^(n − 1)
1, 7, 25, 79, 241     = powers of 3 − 2      Tₙ = 3ⁿ − 2
```

## Sequences to recognise on sight

| Sequence | nth term |
|---|---|
| 1, 4, 9, 16, 25 | n² |
| 3, 6, 11, 18, 27 | n² + 2 |
| 1, 8, 27, 64, 125 | n³ |
| 2, 4, 8, 16, 32 | 2ⁿ |
| 1, 3, 6, 10, 15 | n(n + 1)/2 |
| 2, 6, 12, 20, 30 | n(n + 1) |
| 2/4, 3/5, 4/6, 5/7 | (n + 1)/(n + 3) |

## Is a number a term?

Set Tₙ equal to the number and solve. A term exists only if n is a positive integer.

```
Tₙ = 4n + 3. Is 150 a term?   4n + 3 = 150 → n = 36.75 → not a term.
Tₙ = n² + 2. Is 146 a term?   n² = 144 → n = 12 → yes, the 12th term.
```

## Exam traps

- The sign of d: a decreasing sequence has a negative coefficient of n.
- "Goes up in 5s" means 5n, not n + 5.
- a is **half** the second difference.
- Exponential nth term uses r^(n − 1) when a is the first term.
- A quickly growing sequence is not necessarily exponential; test the ratio.
- Check the nth term with n = 1 and n = 2 before moving on.
- An answer of n = 36.75 means "not a term"; say so with the reason.

## Self-test

1. Write down the next two terms of 4, 9, 16, 25, …
2. Find the nth term of 7, 11, 15, 19, …
3. Find the nth term of 26, 22, 18, 14, …
4. Is 150 a term of the sequence with nth term 4n + 3? Explain.
5. Find the nth term of 5, 12, 21, 32, 45, …
6. Find the nth term of 2, 9, 22, 41, 66, …
7. Find the nth term of 2, 16, 54, 128, …
8. Find the nth term of 5, 15, 45, 135, …
9. Write down the 4th term of the sequence with Tₙ = 3ⁿ − 2.
10. Sequence P has nth term 2n + 1. Sequence Q has terms 9, 13, 17, 21, … Express Qₙ in terms of Pₙ.
11. Find the nth term of 1/2, 2/3, 3/4, 4/5, …
12. Which term of the sequence n² + 2 equals 146?

**Answers**

1. **36, 49** (the squares of 2, 3, 4, …: Tₙ = (n + 1)²).
2. **4n + 3**.
3. **30 − 4n**.
4. 4n + 3 = 150 gives n = 36.75, which is not a whole number, so **150 is not a term**.
5. **n² + 4n**.
6. **3n² − 2n + 1**.
7. **2n³**.
8. **5 × 3^(n − 1)**.
9. 3⁴ − 2 = **79**.
10. Qₙ = 4n + 5 and Pₙ = 2n + 1, so **Qₙ = 2Pₙ + 3**.
11. **n/(n + 1)**.
12. n² = 144, so the **12th term**.
