---
title: "Cambridge A Level Mathematics (9709): Permutations and combinations"
resourceType: "study-guides"
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
description: "Cambridge 9709 Paper 5 subtopic 5.2 in depth: arrangements with repeated letters, together and apart restrictions, rows, conditional selections and case-splitting."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 5.2 Permutations and combinations is pure counting, but it is examined in Paper 5 of Cambridge International AS & A Level Mathematics 9709 with enough restrictions that a formula alone rarely finishes a question. The skill being tested is translating a restriction ("these two must sit together", "at least two women") into a counting plan. This guide builds that plan step by step and shows the cases where the obvious method gives the wrong answer.

The [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/) covers the whole paper. This page is paired with the [permutations and combinations revision notes](/resources/cambridge-a-level-mathematics-9709-permutations-and-combinations-cambridge-alevel-maths-revision-notes/) and the [permutations and combinations practice questions](/resources/cambridge-a-level-mathematics-9709-permutations-and-combinations-cambridge-alevel-maths-practice/).

## What the syllabus asks for

Candidates should be able to:

- understand the terms permutation and combination, and solve simple problems involving selections;
- solve problems about arrangements of objects in a line, including those involving **repetition** (the syllabus example is the number of ways of arranging the letters of the word NEEDLESS) and **restriction** (for example, two particular people who must, or must not, stand next to each other).

The notes add that questions may involve people sitting in two or more rows, and that **objects arranged in a circle will not be included**.

## Permutation or combination?

A **permutation** is an arrangement: order matters. A **combination** is a selection: order does not matter.

```
n distinct objects in a line:            n!
r objects chosen from n, in order:       ⁿPᵣ = n! ÷ (n − r)!
r objects chosen from n, order ignored:  ⁿCᵣ = n! ÷ (r!(n − r)!)
```

The quick test: if swapping two chosen items gives a different outcome, it is a permutation. Choosing a captain and a vice-captain from 10 players is a permutation (10 × 9 = 90 ways); choosing two players to represent the team is a combination (¹⁰C₂ = 45 ways).

## Repetition

When some objects are identical, divide by the factorial of each repeat count, because swapping identical objects does not create a new arrangement. NEEDLESS has 8 letters: N, E, E, E, D, L, S, S.

```
Arrangements = 8! ÷ (3! × 2!) = 40 320 ÷ 12 = 3360
```

## Restrictions: together

Glue the objects that must be together into a single block, arrange the block with the other objects, then multiply by the internal arrangements of the block.

- Seven people in a line, A and B together: the block AB and five others give 6! arrangements, and the block can be AB or BA, so 2 × 6! = **1440**.
- NEEDLESS with all three Es together: the block EEE with N, D, L, S, S gives 6 objects with S repeated, so 6! ÷ 2! = **360**. The block of identical Es has only one internal order.

## Restrictions: apart

There are two methods, and choosing the right one depends on the wording.

**Complement method.** "A and B are not next to each other" means total minus together: 7! − 1440 = 5040 − 1440 = **3600**.

**Gaps method.** "No two Es are next to each other" is stronger than "the Es are not all together". Arrange the other letters first, then drop the Es into the gaps between and around them, at most one per gap.

```
N, D, L, S, S:  5! ÷ 2! = 60 arrangements, creating 6 gaps
Choose 3 gaps for the identical Es:  ⁶C₃ = 20
No two Es adjacent:  60 × 20 = 1200
```

*Annotation:* the complement of "all three Es together" gives 3360 − 360 = 3000, which still includes arrangements such as NEEDSELS with two Es side by side. "Not all together" and "no two together" are different conditions; read the wording carefully.

## Restrictions: positions

Fill the restricted positions first. Seven people in a line with A and B at the two ends: A and B can fill the ends in 2 ways, the others fill the middle in 5! ways, giving 2 × 120 = **240**.

## Rows

People in two rows are still a line problem: each seat is a distinct position. Eight people sit in two rows of four.

- With no restriction there are 8! = 40 320 arrangements.
- If two particular people must sit in the front row, place them first: they take 2 of the 4 front seats in ⁴P₂ = 12 ways, and the other six fill the remaining six seats in 6! = 720 ways, giving **8640**.
- If those two must sit in the same row, either row will do, so the answer doubles to **17 280**.

## Selections with conditions

**"At least" conditions.** From 7 men and 5 women, choose 5 people with at least 2 women. Either add the cases or subtract the unwanted ones:

```
Direct:  2W: ⁵C₂ × ⁷C₃ = 350,  3W: ⁵C₃ × ⁷C₂ = 210,  4W: ⁵C₄ × ⁷C₁ = 35,  5W: 1
         Total = 596
Complement:  ¹²C₅ − (0W: ⁷C₅ = 21) − (1W: 5 × ⁷C₄ = 175) = 792 − 196 = 596
```

The complement is quicker when the unwanted cases are fewer than the wanted ones.

**A forbidden pair.** From 10 people, choose 4, where X and Y refuse to serve together. Subtract the selections containing both: ¹⁰C₄ − ⁸C₂ = 210 − 28 = **182**.

A common wrong method for "at least 2 women" is to choose 2 women first (⁵C₂) and then any 3 of the remaining 10 people (¹⁰C₃), giving 1200. This counts the same committee more than once whenever it contains three or more women, because different "first two" women give the same final group. Case-splitting or the complement avoids this double counting.

## Select, then arrange

When a question asks for arrangements of a selection, choose first and arrange second. Three boys from 6 and two girls from 5 are chosen and then stand in a line: ⁶C₃ × ⁵C₂ × 5! = 20 × 10 × 120 = **24 000**.

With repeated letters, selections must be split into cases according to which letters repeat. For example, the number of 3-letter arrangements using letters of BANANA (B, A, A, A, N, N) is found from the cases "all different", "one pair plus one other" and "three the same". The practice questions take you through this case analysis.

## Common mistakes

- Dividing by repeat factorials when the objects are in fact distinct.
- Forgetting the internal arrangements of a block of distinct objects.
- Treating "not all together" as "no two together", or the reverse.
- Choosing the compulsory people first in an "at least" problem and double counting.
- Adding when the stages happen together (multiply) or multiplying when the cases are alternatives (add).

## Exam technique

- **Find the number of ways:** show the structure of your answer, such as "2 × 6!" or "⁵C₂ × ⁷C₃", before the final number. Method marks attach to the structure.
- **Show that** the number is a given value: every case must appear, with its count.
- **Explain** a method or an error: name the double counting or the missing case explicitly.
- Check a large answer for size: a restricted count must be smaller than the unrestricted total.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 5.2 "Permutations and combinations" (Probability & Statistics 1, Paper 5).
