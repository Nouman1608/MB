---
title: "Cambridge O Level Mathematics (4024): Sets -- Revision Notes"
seoTitle: "O Level Maths 4024 Sets Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Number"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 1.2
syllabusTopics:
  - qualification: "o-level"
    topic: "number"
  - qualification: "o-level"
    topic: "number"
    subtopic: "sets-4024"
description: "Revision notes for Cambridge O Level Maths 4024 subtopic 1.2: set notation, subsets, complements, union, intersection and Venn diagram counting with two or three sets."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for subtopic **1.2 Sets** of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027. The [Sets study guide](/resources/cambridge-o-level-mathematics-4024-sets/) works through each idea with full examples; the [Sets practice questions](/resources/cambridge-o-level-mathematics-4024-sets-practice/) give exam-style questions with mark schemes.

## Syllabus outcome

Understand and use set language, notation and Venn diagrams to describe sets and represent relationships between sets. Venn diagrams are limited to two or three sets.

## Notation

| Symbol | Read as | Example |
|---|---|---|
| ∈ | is an element of | 3 ∈ {1, 3, 5} |
| ∉ | is not an element of | 4 ∉ {1, 3, 5} |
| n(A) | number of elements in A | n({1, 3, 5}) = 3 |
| ξ | universal set | all numbers being considered |
| ∅ | empty set | n(∅) = 0 |
| A' | complement of A | everything in ξ not in A |
| A ⊆ B | A is a subset of B | {1, 3} ⊆ {1, 3, 5} |
| A ⊈ B | A is not a subset of B | {1, 4} ⊈ {1, 3, 5} |
| A ∪ B | union | in A or B or both |
| A ∩ B | intersection | in both A and B |

## Ways to define a set

| Style | Example | Elements |
|---|---|---|
| Listing | {a, b, c, ...} | as shown |
| Words | the prime numbers below 12 | 2, 3, 5, 7, 11 |
| Set-builder | {x: 3 ⩽ x < 7, x an integer} | 3, 4, 5, 6 |
| Pairs | {(x, y): y = 2x + 1} | all points on that line |

The colon in set-builder notation means "such that". The symbol ⩽ includes the end value, whereas < does not.

## Key facts

- n(A) + n(A') = n(ξ).
- If A ⊆ B, then A ∩ B = A and A ∪ B = B.
- ∅ is a subset of every set, and every set is a subset of itself.
- ∅ has no elements; {0} has one.
- Order and repeats do not matter in a list.
- The addition rule for two sets: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).
- (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'.

## Regions of a two-set diagram

| Description | Symbol | Region |
|---|---|---|
| in A only | A ∩ B' | left crescent |
| in both | A ∩ B | lens |
| in B only | A' ∩ B | right crescent |
| in neither | (A ∪ B)' | outside both circles |
| in A or B or both | A ∪ B | all inside the circles |
| not in A | A' | everything except circle A |

Check: the four basic regions add up to n(ξ).

## Method for counting problems

1. Draw a rectangle for ξ and the circles.
2. Start with the **intersection** (the centre for three sets).
3. Subtract it from each given overlap and each circle total to get the "only" regions.
4. Add every region inside the circles.
5. Subtract from n(ξ) for the "neither" region.
6. Check that all regions add to n(ξ).

### Worked example, two sets

In a group of 36, 21 have a bike (B) and 17 have a scooter (S). Four have neither. Find how many have both.

```
at least one = 36 - 4 = 32
n(B ∩ S) = 21 + 17 - 32 = 6
```

Bike only = 15, scooter only = 11, both = 6, neither = 4, total 36.

### Worked example, three sets

If the three-set regions are filled from the centre out, the total of the circles is:

```
n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C)
```

With n(A) = 24, n(B) = 20, n(C) = 16, n(A ∩ B) = 9, n(B ∩ C) = 6, n(A ∩ C) = 5 and n(A ∩ B ∩ C) = 3:

```
24 + 20 + 16 - 9 - 6 - 5 + 3 = 43
```

If n(ξ) = 50, then 7 are in none of the sets.

## Worked list example

ξ = {1, 2, ..., 12}, A = {2, 4, 6, 8, 10, 12}, B = {3, 6, 9, 12}.

| Set | Elements |
|---|---|
| A ∩ B | 6, 12 |
| A ∪ B | 2, 3, 4, 6, 8, 9, 10, 12 |
| A' | 1, 3, 5, 7, 9, 11 |
| B' | 1, 2, 4, 5, 7, 8, 10, 11 |
| A' ∩ B | 3, 9 |
| (A ∪ B)' | 1, 5, 7, 11 |

## Unknowns in Venn diagrams

When a region contains an algebraic expression, add the regions, put them equal to n(ξ) and solve. Then substitute back to give each region a number, and check that none is negative.

## Exam traps

- A circle total is not a region count unless the circles do not overlap.
- "Only" means exclude the overlap.
- Do not forget the outside region.
- ∈ links an element to a set; ⊆ links a set to a set. Writing 3 ⊆ A is an error; write 3 ∈ A or {3} ⊆ A.
- A' is a set in ξ, not a count, so write n(A') when you want the number.
- When listing, use curly brackets and commas.
- Write the answer to a list question in order, with no repeats.
- Read inequality signs in set-builder notation carefully: x > 3 and x ⩾ 3 differ.

## Self-test

1. If A = {2, 4, 6, 8} and B = {4, 8, 12}, write down A ∩ B.
2. For the same sets, write down A ∪ B and n(A ∪ B).
3. List {x: x is an integer, -2 ⩽ x < 3}.
4. ξ = {1, 2, ..., 10} and P = {1, 4, 9}. Write down P' and n(P').
5. True or false: {5, 6} ⊆ {4, 5, 6, 7}.
6. True or false: ∅ = {0}.
7. n(A) = 14, n(B) = 11 and n(A ∩ B) = 6. Find n(A ∪ B).
8. Of 30 children, 18 like tea, 15 like juice and 5 like neither. How many like both?
9. In the same group, how many like tea only?
10. Is (3, 7) ∈ {(x, y): y = 2x + 1}?

**Answers**

1. **{4, 8}**.
2. **{2, 4, 6, 8, 12}**, n = **5**.
3. **{-2, -1, 0, 1, 2}**.
4. P' = **{2, 3, 5, 6, 7, 8, 10}**, n(P') = **7**.
5. **True**.
6. **False**: ∅ has no elements, {0} has one.
7. 14 + 11 - 6 = **19**.
8. At least one = 25; 18 + 15 - 25 = **8**.
9. 18 - 8 = **10**.
10. 2 × 3 + 1 = 7, so **yes**.
