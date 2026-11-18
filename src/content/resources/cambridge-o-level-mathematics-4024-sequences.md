---
title: "Cambridge O Level Mathematics (4024): Sequences"
resourceType: "study-guides"
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
description: "Cambridge O Level Maths 4024 subtopic 2.7 in depth: term-to-term rules, nth terms of linear, quadratic, cubic and exponential sequences, and combined sequences."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.7 Sequences** in Topic 2, Algebra and graphs, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series. The combined [Sequences and Proportion study guide](/resources/sequences-and-proportion/) lists the four sequence types and finds a linear and an exponential nth term. This page adds the method for quadratic nth terms, decreasing and fractional sequences, combinations of sequences, and the reasoning questions that ask whether a number belongs to a sequence.

Companion pages: the [sequences revision notes](/resources/cambridge-o-level-mathematics-4024-sequences-revision-notes/) and the [sequences practice questions](/resources/cambridge-o-level-mathematics-4024-sequences-practice/).

## What the syllabus asks

The 4024 syllabus lists three outcomes for 2.7:

1. Continue a given number sequence or pattern.
2. Recognise patterns in sequences, including the term-to-term rule, and relationships between different sequences.
3. Find and use the nth term of sequences.

Its notes say the sequences include **linear, quadratic, cubic and exponential** sequences and **simple combinations** of these, and that subscript notation may be used: Tₙ is the nth term of sequence T.

## Two kinds of rule

- A **term-to-term rule** tells you how to get from one term to the next, such as "add 4" or "multiply by 3". It is good for continuing a sequence, but finding the 100th term with it is slow.
- A **position-to-term rule** (the nth term) gives any term directly from its position n. Substitute n = 100 to get the 100th term at once.

## Recognising the type: the differences method

Write the sequence, then the differences between consecutive terms, then the differences of those.

| Type | What the differences show | Example |
|---|---|---|
| Linear | First differences constant | 17, 14, 11, 8, … (difference −3) |
| Quadratic | Second differences constant | 2, 9, 20, 35, … (second difference 4) |
| Cubic | Third differences constant | 3, 10, 29, 66, … (third difference 6) |
| Exponential | Each term is a constant multiple of the one before | 80, 40, 20, 10, … (ratio ½) |

If the differences never settle but the ratio between terms is constant, the sequence is exponential.

## Linear sequences, including decreasing ones

The nth term is Tₙ = dn + c, where d is the common difference.

**Worked example.** Find the nth term of 17, 14, 11, 8, …

```
d = −3, so Tₙ = −3n + c
T₁ = 17:  −3 + c = 17,  c = 20
Tₙ = 20 − 3n
```

Check with n = 4: 20 − 12 = 8. ✓

**Is 100 a term of 3, 8, 13, 18, …?** Here Tₙ = 5n − 2. Setting 5n − 2 = 100 gives n = 20.4. Because n must be a positive whole number, **100 is not a term**. This argument, with the equation solved and the reason stated, is what a "show that" or "explain" question needs.

## Quadratic sequences

For Tₙ = an² + bn + c, the second difference is always **2a**. Use that to find a, subtract an² from each term, and the remainder is a linear sequence.

**Worked example.** Find the nth term of 2, 9, 20, 35, 54, …

```
terms:              2    9    20    35    54
first differences:     7   11    15    19
second differences:      4    4     4

2a = 4, so a = 2:  start with 2n²

n:            1    2    3    4
2n²:          2    8   18   32
term − 2n²:   0    1    2    3      → linear, n − 1

Tₙ = 2n² + n − 1
```

Check with n = 5: 50 + 5 − 1 = 54. ✓

**Worked example.** Find the nth term of 3, 3, 5, 9, 15, …

```
first differences:   0, 2, 4, 6
second difference:   2  → a = 1, start with n²

n²:          1, 4, 9, 16
term − n²:   2, −1, −4, −7   → linear, −3n + 5

Tₙ = n² − 3n + 5
```

A sequence whose first terms are equal, like 3, 3, is still quadratic; the differences show it.

## Cubic sequences

Cubic sequences in 4024 are usually a simple change to the cubes 1, 8, 27, 64, 125, …

**Worked example.** Find the nth term of 3, 10, 29, 66, 127, …

```
compare with n³:  1, 8, 27, 64, 125
each term is 2 more
Tₙ = n³ + 2
```

Always compare an unfamiliar sequence with the squares and cubes first; it is quicker than working out three rows of differences.

## Exponential sequences

Each term is multiplied by a constant ratio r. The nth term is Tₙ = a × r^(n − 1), where a is the first term.

```
80, 40, 20, 10, …   a = 80, r = ½     Tₙ = 80 × (½)^(n − 1)
3, 6, 12, 24, …     a = 3,  r = 2     Tₙ = 3 × 2^(n − 1)
```

An exponential sequence with r > 1 grows much faster than any quadratic or cubic eventually; one with 0 < r < 1 decreases towards zero but never reaches it.

## Combinations and relationships between sequences

The syllabus includes simple combinations and relationships between sequences. Spot a familiar sequence inside the new one.

| Sequence | Related to | nth term |
|---|---|---|
| 3, 5, 9, 17, 33, … | powers of 2: 2, 4, 8, 16, 32 | 2ⁿ + 1 |
| 2, 6, 12, 20, 30, … | n and n + 1 multiplied: 1×2, 2×3, 3×4, … | n(n + 1) |
| 1, 3, 6, 10, 15, … | half of 2, 6, 12, 20, 30 | n(n + 1)/2 |
| 1/3, 2/5, 3/7, 4/9, … | numerators 1, 2, 3, 4; denominators 3, 5, 7, 9 | n/(2n + 1) |

**Relationship example.** Sequence A has nth term 5n − 2 (3, 8, 13, …) and sequence B has terms 7, 17, 27, … Each term of B is 2 × (term of A) + 1, so Bₙ = 2(5n − 2) + 1 = 10n − 3.

The triangular numbers 1, 3, 6, 10, 15 are worth recognising on sight; they appear in many pattern questions with dots or tiles.

## Patterns from diagrams

When a sequence comes from a diagram, such as matchsticks or tiles, count the first few patterns carefully, write the numbers as a sequence, and then use the methods above. Explaining the formula from the diagram (for example, "each new square adds 3 matches to the 1 at the start") is good evidence in an "explain" question.

## Exam technique

- **Write down the next term**: give the term only, but make sure the rule works for every term given.
- **Find an expression for the nth term**: show the differences; a correct coefficient of n or n² usually earns a method mark.
- **Show that** or **Explain why** a number is or is not a term: form and solve an equation, then comment on whether n is a positive integer.
- Check every nth term by substituting n = 1 and one other value.

## Common mistakes

- Writing the common difference with the wrong sign: 17, 14, 11 gives −3n, not 3n.
- Writing n + 3 for a sequence that goes up in 3s; the 3 belongs to n.
- Halving the second difference wrongly, or forgetting to halve it.
- Treating a quadratic as exponential because it grows quickly.
- Using a × rⁿ instead of a × r^(n − 1), which gives the wrong first term.
- Saying a number is a term because the equation has a solution, without checking it is a whole number.

For proportion, which follows sequences in the syllabus, see the [proportion study guide](/resources/cambridge-o-level-mathematics-4024-proportion/).
