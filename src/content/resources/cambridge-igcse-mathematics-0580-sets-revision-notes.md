---
title: "Cambridge IGCSE Mathematics (0580): Sets -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Number"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 1.2
syllabusTopics:
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "sets-cambridge-igcse-maths"
description: "Revision notes for 0580 subtopic 1.2 Sets: notation by tier, Venn diagram regions, shading and counting methods, three-set diagrams and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **1.2 Sets** of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. Core (C1.2) uses Venn diagrams with two sets; Extended (E1.2) uses two or three sets and extra notation, marked **Extended only** below. For full explanations and worked examples, use the [sets study guide](/resources/igcse-mathematics-0580-sets/); then test yourself with the [sets practice questions](/resources/cambridge-igcse-mathematics-0580-sets-practice/).

## Notation

| Symbol | Meaning | Tier |
|---|---|---|
| ℰ | Universal set: everything under consideration | Core and Extended |
| n(A) | Number of elements in A | Core and Extended |
| A′ | Complement of A: in ℰ but not in A | Core and Extended |
| A ∪ B | Union: in A or B or both | Core and Extended |
| A ∩ B | Intersection: in both A and B | Core and Extended |
| ∈ | "… is an element of …" | Extended only |
| ∉ | "… is not an element of …" | Extended only |
| ∅ | The empty set | Extended only |
| A ⊆ B | A is a subset of B | Extended only |
| A ⊈ B | A is not a subset of B | Extended only |

**Ways a set is defined in questions**

| Form | Read as | Tier |
|---|---|---|
| {x: x is a natural number} | the set of x such that x is a natural number | Core and Extended |
| {a, b, c, …} | a list of elements | Core and Extended |
| {x: a ⩽ x ⩽ b} | every number from a to b, ends included | Core and Extended |
| {(x, y): y = mx + c} | every point on the line y = mx + c | Extended only |

## Two-set Venn diagram: the four regions

| Region | Notation | Words |
|---|---|---|
| A only | A ∩ B′ | in A, not in B |
| Overlap | A ∩ B | in both |
| B only | A′ ∩ B | in B, not in A |
| Outside | (A ∪ B)′ or A′ ∩ B′ | in neither |

Useful combinations:

- A ∪ B = all three regions inside the circles.
- (A ∩ B)′ = everything except the overlap.
- A′ ∪ B′ = everything except the overlap (the same set as (A ∩ B)′).
- "Exactly one of the sets" = A only and B only.

## Shading method

```
1. Write the regions for each part of the expression.
2. ∩ -> keep regions that appear in BOTH lists.
   ∪ -> keep regions that appear in EITHER list.
3. ' on a bracket -> shade everything NOT in the bracket.
4. Shade the final list only.
```

Example: A ∪ B′. A = {A only, overlap}; B′ = {A only, outside}. Union = A only, overlap, outside: everything except "B only".

## Counting method

```
1. Fill the overlap first (given, or call it x).
2. "Only" region = whole-set total − overlap.
3. Outside = n(ℰ) − (sum of the regions inside the circles).
4. Check: all regions add up to n(ℰ).
```

Formula: **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**.

Example: n(ℰ) = 40, n(A) = 23, n(B) = 18, n(A ∪ B)′ = 6. Then n(A ∪ B) = 34, so n(A ∩ B) = 23 + 18 − 34 = 7.

## Three-set diagrams (Extended only)

- Eight regions: three "one set only", three "exactly two sets", the centre, and outside.
- Fill **from the centre outwards**: centre, then each "exactly two" region (given pair total minus the centre), then each "only" region, then outside.
- "Exactly two" means the pair regions only; "at least two" means the pair regions **and** the centre.

## Extended notation in use

- ∈ links an element to a set: 7 ∈ {primes}. ⊆ links a set to a set: {3, 5} ⊆ {odd numbers}.
- To show A ⊈ B, name **one** element of A that is not in B.
- If A ⊆ B, draw circle A inside circle B. If A ∩ B = ∅, draw separate circles.
- A ∩ B for two straight-line sets is the set of intersection points: {(x, y)} for crossing lines, ∅ for parallel lines.

## Exam traps

- n(A) is a **number**; A is a **set** in curly brackets. "List the elements" needs brackets; "find n(A)" needs one number.
- List each element once: the set of letters in "LETTER" is {l, e, t, r}.
- A′ is **not** "B only"; it also includes the outside region.
- {x: 1 ⩽ x ⩽ 4} contains all numbers from 1 to 4, not just 1, 2, 3, 4, unless x is stated to be an integer.
- The empty set is ∅ or { }, never {0} or {∅}.
- In counting problems, a whole-set total does not go in the "only" region.

## Quick self-test

ℰ = {integers from 1 to 15}, P = {prime numbers}, T = {multiples of 3}.

1. List P ∩ T.
2. Find n(P ∪ T).
3. List (P ∪ T)′.
4. List P′ ∩ T.
5. Describe in words the set P ∩ T′.
6. n(ℰ) = 30, n(A) = 17, n(B) = 12, n(A ∩ B) = 5. Find n(A ∪ B)′.
7. In a group of 28, 15 have a bicycle and 19 have a scooter. Everyone has at least one. How many have both?
8. Which regions of a two-set diagram make up A′ ∪ B?
9. (Extended) True or false: {2, 4} ⊆ T. Give a reason.
10. (Extended) A = {(x, y): y = 3x − 1}, B = {(x, y): y = x + 5}. Find A ∩ B.
11. (Extended) In a three-set diagram, 9 people are in both A and C, and 4 are in all three sets. How many are in A and C but not B?
12. (Extended) Write a set C with C ⊆ P and n(C) = 2.

### Answers

1. P = {2, 3, 5, 7, 11, 13}, T = {3, 6, 9, 12, 15}; P ∩ T = {3}.
2. 6 + 5 − 1 = 10.
3. {1, 4, 8, 10, 14}.
4. {6, 9, 12, 15}.
5. Prime numbers from 1 to 15 that are not multiples of 3: {2, 5, 7, 11, 13}.
6. n(A ∪ B) = 17 + 12 − 5 = 24, so n(A ∪ B)′ = 30 − 24 = 6.
7. 15 + 19 − 28 = 6.
8. Overlap, B only and outside (everything except A only).
9. False: 2 ∈ {2, 4} but 2 ∉ T, so {2, 4} ⊈ T.
10. 3x − 1 = x + 5 gives x = 3, y = 8; A ∩ B = {(3, 8)}.
11. 9 − 4 = 5.
12. Any two primes from 2 to 13, for example C = {5, 13}.

## More on this topic

- Re-read the worked examples in the [sets study guide](/resources/igcse-mathematics-0580-sets/).
- Test yourself with the [sets practice questions](/resources/cambridge-igcse-mathematics-0580-sets-practice/).
- Recall the rest of Topic 1 with the [Number revision notes](/resources/igcse-mathematics-number-revision-notes/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge International Education. Topic 1 Number, subtopics C1.2 and E1.2 Sets.
