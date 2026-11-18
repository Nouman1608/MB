---
title: "Cambridge IGCSE Mathematics (0580): Probability of combined events"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 8 – Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 8.3
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "probability-of-combined-events-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 8.3: sample space diagrams, two-set Venn diagrams and tree diagrams, with replacement (Core) and without replacement (Extended)."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **8.3 Probability of combined events** in Topic 8 Probability of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is in **both tiers**, with one important difference: on Core papers combined events are only **with replacement**, while Extended questions may be **with or without replacement** and may use the notation P(A ∩ B) and P(A ∪ B) with Venn diagrams.

The topic-level [probability study guide](/resources/igcse-mathematics-probability/) includes one without-replacement tree. This page covers all three diagrams the syllabus names, the "and" and "or" rules, "at least one" questions, independent events in context and three-stage problems. Revise with the [combined events revision notes](/resources/cambridge-igcse-mathematics-0580-probability-of-combined-events-cambridge-igcse-maths-revision-notes/) and practise with the [combined events practice questions](/resources/cambridge-igcse-mathematics-0580-probability-of-combined-events-cambridge-igcse-maths-practice/).

## What subtopic 8.3 asks for

Calculate the probability of combined events using, where appropriate, **sample space diagrams**, **Venn diagrams** and **tree diagrams**.

| Syllabus note | Core (C8.3) | Extended (E8.3) |
|---|---|---|
| Replacement | combined events only with replacement | with or without replacement |
| Venn diagrams | limited to two sets | P(A ∩ B) and P(A ∪ B) notation may be used |
| Tree diagrams | outcomes at the ends of branches, probabilities beside the branches | the same |

## The two rules

```
AND (one thing, then another): MULTIPLY along the branches
OR  (one outcome or a different one): ADD the separate results
```

The "or" rule needs the outcomes to be **mutually exclusive** (they cannot both happen). The separate end-points of a tree are always mutually exclusive, so you can add them.

Two events are **independent** if the result of one does not change the probability of the other: two dice, two spins, or taking an item and replacing it.

## Sample space diagrams

A sample space diagram is a grid showing every combined outcome of two experiments. Use it when both experiments have equally likely outcomes.

### Worked example 1: two spinners (non-calculator)

Spinner A is numbered 1 to 4 and spinner B is numbered 1 to 3. Both are fair. They are spun and the two scores are multiplied.

```
          B = 1   B = 2   B = 3
A = 1       1       2       3
A = 2       2       4       6
A = 3       3       6       9
A = 4       4       8      12
```

There are 4 × 3 = 12 equally likely outcomes. Find (a) P(product is even), (b) P(product is greater than 6), (c) P(product is 6).

```
(a) even: 2, 2, 4, 6, 6, 4, 8, 12  → 8 outcomes   P = 8/12 = 2/3
(b) greater than 6: 9, 8, 12       → 3 outcomes   P = 3/12 = 1/4
(c) 6: (2, 3) and (3, 2)           → 2 outcomes   P = 2/12 = 1/6
```

Count from the grid, not from the list of different products: 6 appears twice, so it is twice as likely as 9.

## Venn diagrams (two sets)

A Venn diagram shows how two events overlap. With counts in the regions, divide by the grand total. With probabilities in the regions, all four regions add to 1.

### Worked example 2: probabilities in a Venn diagram (non-calculator)

For two events A and B, P(A) = 0.5, P(B) = 0.35 and the probability of both A and B is 0.15.

(a) Find the probability of each region. (b) Find the probability of A or B (or both). (c) Find the probability of B but not A.

```
(a) A and B (overlap)  = 0.15
    A only             = 0.5 − 0.15  = 0.35
    B only             = 0.35 − 0.15 = 0.2
    neither            = 1 − 0.35 − 0.15 − 0.2 = 0.3

(b) A or B = 0.35 + 0.15 + 0.2 = 0.7
(c) B but not A = 0.2
```

**Extended notation.** On Extended papers these can be written P(A ∩ B) = 0.15 (A **and** B, the overlap), P(A ∪ B) = 0.7 (A **or** B or both) and P(A′ ∩ B) = 0.2. Always fill the overlap first, then subtract.

Note that P(A ∪ B) is not 0.5 + 0.35 = 0.85: that adds the overlap twice.

## Tree diagrams

Draw one set of branches for each stage. Write probabilities beside the branches and outcomes at the ends, as the syllabus specifies. Each pair (or set) of branches from one point adds to 1.

### Worked example 3: with replacement (Core and Extended)

A bag contains 3 green and 7 yellow counters. A counter is taken at random, its colour noted, and it is replaced. A second counter is then taken.

```
First        Second
G (3/10) ── G (3/10)   GG: 3/10 × 3/10 = 9/100
         └─ Y (7/10)   GY: 3/10 × 7/10 = 21/100
Y (7/10) ── G (3/10)   YG: 7/10 × 3/10 = 21/100
         └─ Y (7/10)   YY: 7/10 × 7/10 = 49/100
                                 total = 100/100 ✓
```

(a) P(both green) = **9/100**. (b) P(one of each colour) = 21/100 + 21/100 = **42/100 = 21/50**. (c) P(at least one green) = 1 − P(both yellow) = 1 − 49/100 = **51/100**.

"At least one" is almost always quickest as 1 − P(none).

### Worked example 4: independent events in context (non-calculator)

The probability that Ali is late for school is 0.2 and the probability that Bea is late is 0.1, independently. Find the probability that (a) neither is late, (b) exactly one of them is late.

```
(a) P(neither) = 0.8 × 0.9 = 0.72
(b) Ali late, Bea not: 0.2 × 0.9 = 0.18
    Ali not, Bea late: 0.8 × 0.1 = 0.08
    exactly one = 0.18 + 0.08 = 0.26
```

Check: P(both late) = 0.02, and 0.72 + 0.26 + 0.02 = 1 ✓.

### Worked example 5: three stages (calculator)

The probability that a seed grows is 0.8. Three seeds are planted and grow independently. Find the probability that exactly two grow.

```
Paths with exactly two growing (G = grows, N = does not):
GGN, GNG, NGG — three paths, each 0.8 × 0.8 × 0.2 = 0.128
P(exactly two) = 3 × 0.128 = 0.384
```

Listing the paths is safer than drawing all eight branches when only some are needed.

## Without replacement (Extended only)

If the first item is **not** replaced, the second-stage probabilities change: one fewer item in total, and one fewer of the colour already taken.

### Worked example 6: same colour (non-calculator)

A drawer holds 4 black and 6 white socks. Two socks are taken at random without replacement. Find the probability that they are the same colour.

```
P(BB) = 4/10 × 3/9 = 12/90
P(WW) = 6/10 × 5/9 = 30/90
P(same colour) = 42/90 = 7/15
```

### Worked example 7: continuing until a success (non-calculator)

A bag contains 3 lemon and 5 orange sweets. Sweets are taken at random, one at a time without replacement, until a lemon sweet is taken. Find the probability that exactly three sweets are taken.

```
Three sweets means orange, orange, lemon:
5/8 × 4/7 × 3/6 = 60/336 = 5/28
```

## Common mistakes

- Adding along branches instead of multiplying.
- Forgetting one of the paths in "one of each" (GY and YG are both needed).
- Changing the denominators on a with-replacement tree, or not changing them on a without-replacement tree.
- Counting different products or totals in a sample space as equally likely.
- Adding P(A) + P(B) for P(A ∪ B) when A and B overlap.
- Simplifying fractions on a tree before multiplying, then making an arithmetic slip; it is fine to leave fractions unsimplified until the end.

## Exam technique

- **Complete the tree diagram**: write every missing probability beside its branch; each pair must add to 1.
- **Find the probability**: show the multiplication for each path and the addition of paths.
- Check that all end-of-branch probabilities add to 1.
- Read whether the question says "replaced" or "not replaced" before writing the second-stage branches.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 8 Probability, C8.3 and E8.3 Probability of combined events. See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
