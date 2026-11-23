---
title: "Cambridge A Level Mathematics (9709): Permutations and combinations -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "permutations-and-combinations-cambridge-alevel-maths"
description: "Condensed 9709 Paper 5 notes on 5.2: counting formulae, repeated letters, together, apart and position restrictions, rows, at-least selections and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 5.2 of Cambridge 9709 Paper 5. The [permutations and combinations study guide](/resources/cambridge-a-level-mathematics-9709-permutations-and-combinations/) explains each method with worked examples; the [permutations and combinations practice questions](/resources/cambridge-a-level-mathematics-9709-permutations-and-combinations-practice/) test them.

## Scope

- Permutations (order matters) and combinations (order does not).
- Arrangements **in a line**, including repetition and restriction; two or more **rows** may appear.
- **Circular arrangements are not included.**

## Formula sheet

```
n distinct objects in a line              n!
n objects with repeats p, q, r, ...       n! ÷ (p! q! r! ...)
Ordered choice of r from n                ⁿPᵣ = n! ÷ (n − r)!
Unordered choice of r from n              ⁿCᵣ = n! ÷ (r!(n − r)!)
Symmetry                                  ⁿCᵣ = ⁿCₙ₋ᵣ
```

## Restriction toolkit

| Wording | Method |
|---|---|
| "must be together" | glue into one block; arrange blocks; × internal arrangements |
| "not next to each other" (two items) | total − together |
| "no two of these are adjacent" | arrange the others; choose gaps for the restricted items |
| "at the ends" / "in the middle" | fill restricted positions first |
| "begins with a vowel" | choose the first letter, arrange the rest |
| two rows of seats | every seat is a distinct position; fill restricted rows first |
| "at least k" | add the cases, or total − the unwanted cases |
| "X and Y not both chosen" | total − selections containing both |
| select then arrange | ⁿCᵣ choices × r! orders (adjust for repeats) |

Gaps rule: k objects in a line create **k + 1 gaps** (including both ends).

## Add or multiply?

- **Multiply** for successive stages that happen together: choose the men **and** choose the women.
- **Add** for mutually exclusive cases: exactly 2 women **or** exactly 3 women.

## Key terms

| Term | Meaning |
|---|---|
| Permutation | an ordered arrangement |
| Combination | an unordered selection |
| Repetition | identical objects; divide by their factorials |
| Restriction | a condition on positions or adjacency |
| Block method | treating together-objects as one unit |
| Gaps method | placing objects in spaces between others so none are adjacent |
| Complement | counting the total and subtracting what is not wanted |

## Worked mini-check

How many arrangements of TATTOO (T, T, T, A, O, O) have the three Ts together?

- Block TTT with A, O, O: 4 objects with O repeated, so 4! ÷ 2! = **12**.
- Total arrangements: 6! ÷ (3! × 2!) = 60, so 48 arrangements do not have all three Ts together.

## Three patterns worth memorising

**Arrangements with a fixed letter at one end.** For NEEDLESS beginning with S: the remaining letters N, E, E, E, D, L, S give 7! ÷ 3! = 840. Fixing a repeated letter changes the repeat count of what is left, so recount before dividing.

**Selections from a word with repeats.** Choosing letters from a word with repeated letters is not a single ⁿCᵣ: split by how many of each repeated letter are used. For 3 letters chosen from E, E, E, N, D (order ignored): EEE; two Es with one of N or D (2 ways); one E with N and D (1 way). Total 4 selections.

**People in rows with a pair together.** "Together" in a row means adjacent seats in the same row; a pair split across the front and back rows is not together. Count the adjacent pairs of seats in each row first: a row of four seats has three adjacent pairs.

## Checking an answer

- A restricted count must be less than the unrestricted one.
- "Together" plus "not together" must equal the total.
- For "at least" problems, the direct sum of cases and the complement method must agree.
- For small cases, list the arrangements: two people and three seats give 3 × 2 = 6, which is quick to check by hand.

## Exam traps

- **"Not all together" ≠ "no two together".** The complement of "all together" still includes pairs.
- **Block of distinct objects.** AB and BA are different: multiply by 2!.
- **Block of identical objects.** EEE has only one internal order.
- **Double counting in "at least".** Choosing the compulsory people first and then "any others" counts some groups more than once.
- **Repeated letters left in.** Two identical Ss in a selection must still be divided out.
- **ⁿPᵣ for a committee.** A committee has no order; use ⁿCᵣ.
- **Size check.** A restricted count cannot exceed the total.
- **Final answer only.** Write the structure, such as 2 × 6!, so method marks can be awarded.

## Self-test

1. How many ways can 6 different books be arranged on a shelf?
2. In how many ways can a president, a secretary and a treasurer be chosen from 10 people?
3. In how many ways can 3 people be chosen from 10?
4. How many arrangements are there of the letters of LETTER?
5. Five people stand in a line. In how many ways can this be done if A is at the left-hand end?
6. Five people stand in a line. In how many arrangements are A and B not next to each other?
7. Two people are chosen from 8 and three from another group of 5. How many selections?
8. A team of 4 is chosen from 6 men and 5 women. How many teams have no women?
9. How many teams in question 8 have at least one woman?
10. Four maths books and three science books (all different) are put on a shelf with the maths books together. How many arrangements?
11. Is choosing a captain and a vice-captain from 10 players a permutation or a combination? How many ways?
12. Six people sit in two rows of three. How many arrangements?

### Answers

1. 6! = **720**.
2. ¹⁰P₃ = **720**.
3. ¹⁰C₃ = **120**.
4. 6! ÷ (2! × 2!) = **180** (E and T each appear twice).
5. 4! = **24**.
6. 5! − 2 × 4! = 120 − 48 = **72**.
7. ⁸C₂ × ⁵C₃ = 28 × 10 = **280**.
8. ⁶C₄ = **15**.
9. ¹¹C₄ − 15 = 330 − 15 = **315**.
10. Block of maths books with 3 science books: 4! arrangements; inside the block 4!; total **576**.
11. **Permutation**, since the roles differ: 10 × 9 = **90**.
12. Each seat is a distinct position: 6! = **720**.
