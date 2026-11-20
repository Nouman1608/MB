---
title: "Cambridge O Level Mathematics (4024): Sets"
seoTitle: "O Level Maths 4024 Sets Study Guide"
resourceType: "study-guides"
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
description: "Cambridge O Level Maths 4024 subtopic 1.2 in depth: set notation, set-builder definitions, subsets, complements, union, intersection and Venn diagram problems with two or three sets."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers subtopic **1.2 Sets** in Topic 1, Number, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027 series. A set is a collection of objects, and the language of sets gives a precise way to describe groups and the overlaps between them. The [Number revision notes](/resources/o-level-mathematics-number-revision-notes/) cover the whole topic briefly. This page teaches the notation, the meaning of each region of a Venn diagram, and a reliable method for counting problems.

Companion pages: the [Sets revision notes](/resources/cambridge-o-level-mathematics-4024-sets-revision-notes/) and the [Sets practice questions](/resources/cambridge-o-level-mathematics-4024-sets-practice/).

## What the syllabus asks

The syllabus asks you to understand and use set language, set notation and Venn diagrams to describe sets and show relationships between sets. Venn diagrams are limited to **two or three sets**. It lists the notation that will be used:

| Notation | Meaning |
|---|---|
| n(A) | number of elements in set A |
| ∈ | is an element of |
| ∉ | is not an element of |
| A' | complement of set A |
| ∅ | the empty set |
| ξ | the universal set |
| A ⊆ B | A is a subset of B |
| A ⊈ B | A is not a subset of B |
| A ∪ B | union of A and B |
| A ∩ B | intersection of A and B |

It also shows how sets can be defined, for example A = {x: x is a natural number}, B = {(x, y): y = mx + c}, C = {x: a ⩽ x ⩽ b} and D = {a, b, c, ...}. Sets questions can appear on either paper.

## Describing a set

A set can be written in three ways.

- **Listing**: {2, 4, 6, 8}. Curly brackets show the elements, which are separated by commas. Order does not matter, and an element is not repeated.
- **Describing in words**: "the even numbers from 2 to 8".
- **Set-builder notation**: {x: 2 ⩽ x ⩽ 8, x is an even integer}. Read the colon as "such that".

The notation x ∈ A says that x is an element of A. If A = {2, 4, 6, 8}, then 4 ∈ A and 5 ∉ A. The number of elements is n(A), so here n(A) = 4.

Set-builder notation is not limited to numbers. The set B = {(x, y): y = 2x + 1} is the set of all coordinate pairs on the line y = 2x + 1. The point (3, 7) is in B because 7 = 2 × 3 + 1, but (2, 6) is not, because 2 × 2 + 1 = 5.

**Worked example.** List the elements of E = {x: x is a multiple of 5, 20 ⩽ x ⩽ 45}.

```
multiples of 5 from 20 to 45 inclusive:
E = {20, 25, 30, 35, 40, 45}     n(E) = 6
```

The symbol ⩽ includes the end values. If the condition were 20 < x < 45, then 20 would not be included. Always check which inequality signs are used.

## The universal set, the empty set and complements

The **universal set** ξ contains every element being considered in a problem. If a question is about whole numbers from 1 to 12, then ξ = {1, 2, 3, ..., 12}. The **empty set** ∅ has no elements, so n(∅) = 0. Note that ∅ is not the same as {0}, which has one element.

The **complement** A' contains every element of ξ that is not in A. Every element of ξ is either in A or in A', never both. So n(A) + n(A') = n(ξ).

## Subsets

A is a **subset** of B, written A ⊆ B, if every element of A is also in B. For example {2, 4} ⊆ {2, 4, 6, 8}. Every set is a subset of itself, and the empty set is a subset of every set. If even one element of A is missing from B, then A ⊈ B.

Two facts help in problems. If A ⊆ B, then A ∩ B = A and A ∪ B = B. In a Venn diagram, the circle for A sits wholly inside the circle for B.

## Union and intersection

- **A ∪ B** (union) holds everything that is in A, in B, or in both.
- **A ∩ B** (intersection) holds only what is in both.

Remember the shapes: ∪ looks like a cup that holds everything; ∩ looks like an arch that you must pass through both sides to reach.

**Worked example.** ξ = {1, 2, 3, ..., 12}, A = {even numbers} and B = {multiples of 3}. Find A ∩ B, A ∪ B, A' and (A ∪ B)'.

```
A = {2, 4, 6, 8, 10, 12}
B = {3, 6, 9, 12}

A ∩ B   = {6, 12}
A ∪ B   = {2, 3, 4, 6, 8, 9, 10, 12}
A'      = {1, 3, 5, 7, 9, 11}
(A ∪ B)' = {1, 5, 7, 11}
```

Count check: n(A ∪ B) = 8, and n(A) + n(B) - n(A ∩ B) = 6 + 4 - 2 = 8. This **addition rule** works for any two sets, because adding n(A) and n(B) counts the overlap twice:

```
n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
```

## Venn diagrams with two sets

A Venn diagram is a rectangle for ξ with overlapping circles inside. Two overlapping circles make four regions:

1. in A only
2. in both A and B (the overlap)
3. in B only
4. in neither (inside the rectangle, outside both circles)

The regions together hold every element of ξ exactly once.

**Worked example.** In a class of 50 students, 30 play football (F) and 22 play basketball (B). Eight students play neither. How many play both, and how many play only football?

```
students who play at least one sport = 50 - 8 = 42
n(F ∪ B) = n(F) + n(B) - n(F ∩ B)
42 = 30 + 22 - n(F ∩ B)
n(F ∩ B) = 52 - 42 = 10

football only   = 30 - 10 = 20
basketball only = 22 - 10 = 12
check: 20 + 10 + 12 + 8 = 50
```

Ten play both and twenty play only football. Always finish by adding all regions to confirm that they total n(ξ).

## Venn diagrams with three sets

Three overlapping circles give **eight** regions: seven inside the circles and one outside. Fill them from the middle outward.

1. Start with the centre, A ∩ B ∩ C.
2. Work out each region that is in exactly two sets by taking the pairwise overlap and subtracting the centre.
3. Work out each region that is in only one set by subtracting everything else in that circle from its total.
4. Find the outside region by subtracting the total inside the circles from n(ξ).

**Worked example.** Of 50 students, 24 study art (A), 20 study biology (B) and 16 study chemistry (C). Nine study A and B, six study B and C, five study A and C, and three study all three subjects. Find how many study none of them.

```
centre (all three)         = 3
A and B only               = 9 - 3 = 6
B and C only               = 6 - 3 = 3
A and C only               = 5 - 3 = 2
A only   = 24 - 6 - 2 - 3  = 13
B only   = 20 - 6 - 3 - 3  = 8
C only   = 16 - 3 - 2 - 3  = 8

inside the circles: 3 + 6 + 3 + 2 + 13 + 8 + 8 = 43
none: 50 - 43 = 7
```

Seven study none of the subjects. A common error is subtracting the pairwise overlap from a single circle without first removing the centre, so that part of the centre is taken away twice.

## Forming equations from a Venn diagram

Sometimes a region is given in terms of an unknown. Write each region as an expression, add them up to n(ξ), and solve.

**Worked example.** In a group of 40 people, n(A) = 18 and n(B) = 22. The number in both sets is x and the number in neither set is 2x - 5. Find x.

```
union = 18 + 22 - x = 40 - x
neither = 40 - union = x
so   2x - 5 = x
     x = 5
```

Check: both = 5 and neither = 2(5) - 5 = 5. The union is 35 and 18 + 22 - 5 = 35. ✓

## Reading shaded regions

A sets question may name a region using symbols, such as A' ∩ B. Break it into pieces. A' ∩ B means "not in A, and in B", which is the part of B outside the overlap, or B only. The expression (A ∪ B)' means outside both circles. Take the two complements of ξ = {a, b, c, d, e, f, g, h}, A = {a, b, c, d} and B = {c, d, e, f}:

```
A' = {e, f, g, h}      B' = {a, b, g, h}
A' ∩ B' = {g, h}
(A ∪ B)' = {g, h}
```

The last two sets are equal. This is true for any sets: "not in A and not in B" is the same as "not in A or B".

## Exam technique

- Draw the rectangle for ξ even when the question does not ask for a diagram. Fill in the regions as you go.
- Write the number in each region, not only the total for each circle. Circle totals include the overlap.
- When the question says "only" or "exactly", exclude the overlap.
- In a list question, put the elements inside curly brackets, in order if you can.
- Check that the regions add up to n(ξ).

## Common mistakes

- Putting the circle total, such as 30, into the region for "football only".
- Forgetting the region outside the circles.
- Mixing up ∪ and ∩.
- Writing A ⊆ B when A has an element that B lacks.
- Treating ∅ and {0} as the same.
- Listing the same element twice, or writing n(A) as a list of elements.
- Using the three-set rule without subtracting the centre.

## Where this leads

Sets give a clear language for describing conditions, which links directly to probability, where the same Venn diagrams are used to count outcomes, and to inequalities and regions on graphs, where set-builder notation describes the solutions.
