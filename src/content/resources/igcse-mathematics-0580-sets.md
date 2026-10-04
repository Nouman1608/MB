---
title: "Cambridge IGCSE Mathematics 0580: Sets -- Study Guide"
seoTitle: "Cambridge IGCSE Maths 0580 Sets and Venn Diagrams Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sets"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "sets-cambridge-igcse-maths"
description: "Set notation, listing sets, Venn diagram regions and counting, plus Extended-only three-set diagrams, for Cambridge IGCSE Mathematics 0580 subtopic 1.2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches subtopic 1.2 **Sets** from the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. It covers both columns of the syllabus: **C1.2** (Core, Papers 1 and 3) and **E1.2** (Extended, Papers 2 and 4). Core Venn diagrams are limited to two sets; Extended diagrams can have two or three sets, and Extended adds five extra symbols. Anything marked **Extended only** is not examined on the Core papers. Calculators are not allowed on Papers 1 and 2, and every example here can be done without one.

For the whole of Topic 1, see the [Number study guide](/resources/igcse-mathematics-number/); the examples below do not repeat the ones there or in the revision notes.

## What this subtopic covers

| Syllabus | What you must be able to do | Tier |
|---|---|---|
| C1.2 / E1.2 | Understand and use set language: elements, listing a set, describing a set by a rule | Core and Extended |
| C1.2 / E1.2 | Use n(A), A′, ℰ, A ∪ B and A ∩ B | Core and Extended |
| C1.2 / E1.2 | Read sets written as {x: x is a natural number}, {a, b, c, …} and {x: a ⩽ x ⩽ b} | Core and Extended |
| C1.2 / E1.2 | Draw, shade and interpret Venn diagrams with **two** sets | Core and Extended |
| E1.2 | Use ∈, ∉, ∅, ⊆ and ⊈ | Extended only |
| E1.2 | Read sets of points such as {(x, y): y = mx + c} | Extended only |
| E1.2 | Draw, shade and interpret Venn diagrams with **three** sets, and represent relationships between sets | Extended only |

Proper subsets were removed from the Extended content for this syllabus, so the only subset symbols you need are ⊆ and ⊈.

## 1. Set language and ways of writing a set

A **set** is a collection of objects. Each object is an **element** of the set. Sets are written inside curly brackets, and each element is listed **once**, in any order.

There are two ways to write a set:

- **Listing:** B = {a, b, c, d}. A long pattern can use "…", as in {2, 4, 6, …}.
- **A rule:** {x: x is a natural number} is read "the set of all x **such that** x is a natural number". The colon means "such that".

The interval form {x: a ⩽ x ⩽ b} means every number from a to b, including the ends. Unless the question limits x to integers, this set contains decimals and fractions too, so you **cannot** list it.

**Worked example 1 (Core).**

(a) List A = {x: x is an integer, −3 ⩽ x < 2} and find n(A).

(b) List B = {letters in the word STATISTICS} and find n(B).

(c) Explain why C = {x: 2 ⩽ x ⩽ 4} cannot be listed.

```
(a) integers from -3 up to, but not including, 2
    A = {-3, -2, -1, 0, 1}            n(A) = 5
(b) S, T, A, T, I, S, T, I, C, S -> each letter once
    B = {s, t, a, i, c}               n(B) = 5
(c) C contains every number between 2 and 4,
    e.g. 2.5, 3.01, 3.999 ... there are infinitely many.
```

In (a), ⩽ includes −3 but < excludes 2.

## 2. Core notation: ℰ, n(A), A′, ∪ and ∩

| Symbol | Read as | Meaning |
|---|---|---|
| ℰ | universal set | everything being considered in the question |
| n(A) | the number of elements in A | a count, not a list |
| A′ | A complement | elements of ℰ that are **not** in A |
| A ∪ B | A union B | elements in A **or** B **or both** |
| A ∩ B | A intersection B | elements in **both** A and B |

The complement always depends on ℰ. If ℰ changes, A′ changes, even when A stays the same.

**Worked example 2 (Core).** ℰ = {x: x is an integer, 20 ⩽ x ⩽ 32}, A = {multiples of 4} and B = {multiples of 6}.

Find A ∩ B, n(A ∪ B), A′, n((A ∪ B)′) and A ∩ B′.

```
ℰ = {20, 21, ..., 32}            n(ℰ) = 13
A = {20, 24, 28, 32}             B = {24, 30}
A ∩ B  = {24}
A ∪ B  = {20, 24, 28, 30, 32}    n(A ∪ B) = 5
A′     = {21, 22, 23, 25, 26, 27, 29, 30, 31}   (13 - 4 = 9 elements)
n((A ∪ B)′) = 13 - 5 = 8
A ∩ B′ = elements in A but not in B = {20, 28, 32}
```

Note that 30 ∈ A′: it is in B but not in A.

**Intervals.** The same symbols work on sets written as inequalities. If P = {x: −2 ⩽ x ⩽ 5} and Q = {x: 3 ⩽ x ⩽ 9}, then P ∩ Q = {x: 3 ⩽ x ⩽ 5} (where they overlap) and P ∪ Q = {x: −2 ⩽ x ⩽ 9}. If x were limited to integers, P ∩ Q would be {3, 4, 5}.

## 3. Two-set Venn diagrams

A Venn diagram draws ℰ as a rectangle and each set as a circle inside it. Two overlapping circles split the rectangle into **four regions**. Label them once and every expression becomes a list of regions:

```
ℰ
+---------------------------------+
|        A                B       |
|    +--------+-----+--------+    |
|    |   r1   | r2  |   r3   |    |
|    +--------+-----+--------+    |
|                          r4    |
+---------------------------------+
r1 = A only      r2 = A and B
r3 = B only      r4 = outside both
```

(Drawn here with boxes; on paper the sets are overlapping circles.)

| Expression | Regions | In words |
|---|---|---|
| A | r1, r2 | in A |
| A′ | r3, r4 | not in A |
| A ∩ B | r2 | in both |
| A ∪ B | r1, r2, r3 | in at least one |
| (A ∪ B)′ | r4 | in neither |
| A ∩ B′ | r1 | A only |
| A′ ∩ B | r3 | B only |
| A ∪ B′ | r1, r2, r4 | everything except B only |

**Worked example 3 (Core): shading.** Shade A′ ∪ B.

```
A′ = r3, r4
B  = r2, r3
union: any region in either list -> r2, r3, r4
```

Shade everything except "A only". For an **intersection**, keep only regions in **both** lists, so A′ ∩ B is r3 alone.

Working the other way, "elements in exactly one of the sets" is r1 and r3. In notation that is (A ∩ B′) ∪ (A′ ∩ B).

### Counting with a Venn diagram

When regions hold counts, fill the overlap first, then the "only" regions, then the outside, and check that the four regions add up to n(ℰ). A useful link is:

```
n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
```

The overlap is subtracted once because adding n(A) and n(B) counts it twice.

**Worked example 4 (Core): an unknown overlap.** 50 tourists were asked about two attractions. 31 visited the museum (M) and 27 visited the gallery (G). The number who visited neither was half the number who visited both. Find how many visited both.

```
Let x = n(M ∩ G).
M only = 31 - x      G only = 27 - x      neither = x/2
Total:  (31 - x) + x + (27 - x) + x/2 = 50
        58 - x + x/2 = 50
        x/2 = 8
        x = 16
Regions: M only 15, both 16, G only 11, neither 8
Check:   15 + 16 + 11 + 8 = 50
```

Writing 31 in the "M only" region is the classic slip. The 31 is the **whole** circle, so the overlap must come out of it first.

## 4. Extended notation: ∈, ∉, ∅, ⊆ and ⊈ (Extended only)

| Symbol | Meaning | Example |
|---|---|---|
| ∈ | "… is an element of …" | 3 ∈ {1, 3, 5} |
| ∉ | "… is not an element of …" | 4 ∉ {1, 3, 5} |
| ∅ | the empty set, with no elements | n(∅) = 0 |
| A ⊆ B | A is a subset of B: every element of A is also in B | {2, 4} ⊆ {1, 2, 3, 4} |
| A ⊈ B | A is not a subset of B: at least one element of A is not in B | {2, 6} ⊈ {1, 2, 3, 4} |

∈ links an **element** to a set; ⊆ links a **set** to a set. Write ∅ for the empty set, not {0} (that set has one element).

To show A ⊈ B, give **one element** that is in A but not in B. To show A ⊆ B, check every element of A. On a Venn diagram, A ⊆ B is drawn with circle A entirely inside circle B, and two sets with A ∩ B = ∅ are drawn as circles that do not overlap.

**Worked example 5 (Extended).** ℰ = {x: x is an integer, 1 ⩽ x ⩽ 20}, E = {even numbers}, T = {multiples of 4} and S = {square numbers}. Decide whether each statement is true or false, giving a reason.

```
S = {1, 4, 9, 16}        T = {4, 8, 12, 16, 20}

(i)   12 ∈ T           TRUE   12 = 3 x 4
(ii)  9 ∉ S            FALSE  9 = 3², so 9 ∈ S
(iii) T ⊆ E            TRUE   every multiple of 4 is even
(iv)  S ⊆ E            FALSE  1 ∈ S but 1 ∉ E, so S ⊈ E
(v)   S ∩ T = {4, 16}  TRUE
(vi)  S ∩ T′ ∩ E = ∅   TRUE   even squares here are 4 and 16,
                              and both are multiples of 4
```

### Sets of points (Extended only)

E1.2 also uses sets of coordinate pairs, such as A = {(x, y): y = mx + c}. Each element is a point (x, y), and the set is every point on that straight line.

**Worked example 6 (Extended).** A = {(x, y): y = 2x + 1}, B = {(x, y): y = 7 − x} and C = {(x, y): y = 2x − 3}. Find A ∩ B and A ∩ C.

```
A ∩ B: the point on both lines
  2x + 1 = 7 - x  ->  3x = 6  ->  x = 2,  y = 2(2) + 1 = 5
  A ∩ B = {(2, 5)}          n(A ∩ B) = 1
A ∩ C: both lines have gradient 2, different intercepts
  -> parallel, never meet
  A ∩ C = ∅
```

A ∩ B is a **set containing one point**, so keep the curly brackets.

## 5. Three-set Venn diagrams (Extended only)

Three overlapping circles A, B and C split ℰ into **eight regions**: three "one set only" regions, three "exactly two sets" regions, the centre (all three), and the outside. Describe each one by saying, for every set, whether you are in it or not:

| Region | Notation |
|---|---|
| A only | A ∩ B′ ∩ C′ |
| A and B, not C | A ∩ B ∩ C′ |
| all three | A ∩ B ∩ C |
| none | (A ∪ B ∪ C)′ |

Fill a three-set count diagram **from the centre outwards**. A figure such as "12 take A and B" includes the people in all three, so the "A and B only" region is 12 minus the centre.

**Worked example 7 (Extended): an unknown centre.** In a group of 60 students, 28 take Biology (B), 30 take Chemistry (C) and 26 take Physics (P). 12 take Biology and Chemistry, 10 take Chemistry and Physics, and 9 take Biology and Physics. x students take all three, and 5 take none of them. Find x.

```
Centre:            x
B and C only:      12 - x
C and P only:      10 - x
B and P only:       9 - x
B only: 28 - (12 - x) - (9 - x) - x  = 7 + x
C only: 30 - (12 - x) - (10 - x) - x = 8 + x
P only: 26 - (9 - x) - (10 - x) - x  = 7 + x

Sum of all eight regions:
(7+x) + (8+x) + (7+x) + (12-x) + (10-x) + (9-x) + x + 5 = 58 + x
58 + x = 60  ->  x = 2
```

With x = 2 the regions are: B only 9, C only 10, P only 9, B and C only 10, C and P only 8, B and P only 7, all three 2, none 5. They add to 60. So 9 + 10 + 9 = 28 students take exactly one science.

## Venn diagrams in probability

Topic 8 uses the same diagrams to find probabilities, with notation such as P(A ∩ B) and P(A ∪ B) on the Extended papers. If you can read the regions here, the probability step, when each member is equally likely to be chosen, is dividing a region's count by n(ℰ). See the [Probability study guide](/resources/igcse-mathematics-probability/) for that work.

## Common errors

- Listing a repeated element twice, as in {s, t, a, t, i, …}. Each element appears once.
- Reading A′ as "B only". A′ is everything outside circle A, including the region outside both circles.
- Putting a whole-set total (such as 31 in Worked example 4) into the "only" region instead of subtracting the overlap first.
- Forgetting the region outside all circles, so the regions do not add up to n(ℰ).
- (Extended) Writing {0} or {∅} for the empty set, or using ∈ between two sets.
- (Extended) Proving A ⊈ B with a general comment instead of naming one element of A that is not in B.
- Treating {x: 2 ⩽ x ⩽ 4} as {2, 3, 4} when the question did not say x is an integer.

## Where to go next

- Recall: the sets section of the [Number revision notes](/resources/igcse-mathematics-number-revision-notes/).
- Practice with mark schemes: [Number practice questions](/resources/igcse-mathematics-number-practice/) and [Number (Extended) practice questions](/resources/igcse-mathematics-number-extended-practice/).
- Diagnostics: [Core](/practice/0580/diagnostic/core/) or [Extended](/practice/0580/diagnostic/extended/).
- The [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/) and the printable [checklist for syllabus 0580](/checklists/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International Education). Subtopics C1.2 Sets (Core) and E1.2 Sets (Extended).
