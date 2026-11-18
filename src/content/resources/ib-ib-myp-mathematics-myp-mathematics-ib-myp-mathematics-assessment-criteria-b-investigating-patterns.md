---
title: "IB MYP Mathematics (MYP Mathematics): Criterion B, Investigating patterns"
resourceType: "study-guides"
subject: "mathematics"
level: ["ib"]
topic: "Assessment criteria"
boards: ["ib"]
qualifications: ["ib-myp"]
syllabusCodes: ["MYP Mathematics"]
syllabusSeries: "From 2020, first assessment 2022"
order: 5.2
syllabusTopics:
  - qualification: "ib-myp"
    topic: "ib-myp-mathematics-assessment-criteria"
    subtopic: "ib-myp-mathematics-assessment-criteria-b-investigating-patterns"
description: "How to run an MYP Mathematics Criterion B investigation: techniques, writing general rules, and verifying, justifying and proving them, with three examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: The Year 5 strand wording was written from memory, so a teacher should check it against the MYP Mathematics guide."
publishedDate: 2026-11-18
featured: false
---

This guide covers Criterion B, investigating patterns, from the IB *Mathematics guide for the MYP* (for use from September 2020 and January 2021, first assessment 2022). It concentrates on how to do an investigation well: which techniques to use, how to write a rule, and how to move from testing a rule to proving it. The band tables and the year-by-year wording are set out in [Criteria A and B by year](/resources/ib-myp-mathematics-criteria-a-and-b-by-year-knowing-understanding-and/), so they are only summarised here. Revise with the [Criterion B revision notes](/resources/ib-ib-myp-mathematics-myp-mathematics-ib-myp-mathematics-assessment-criteria-b-investigating-patterns-revision-notes/) and practise with the [Criterion B practice questions](/resources/ib-ib-myp-mathematics-myp-mathematics-ib-myp-mathematics-assessment-criteria-b-investigating-patterns-practice/).

## What Criterion B assesses

Criterion B is marked out of 8. In Year 5 its three strands ask you to:

1. select and apply mathematical problem-solving techniques to discover complex patterns;
2. describe patterns as general rules consistent with findings;
3. prove, or verify and justify, general rules.

Years 1 and 3 use gentler versions of the same three strands (recognise patterns, state or suggest rules, check or verify and justify them). In every year, strand iii only starts to count from the 5-6 band, so a rule with no testing cannot reach it. An investigation is open: you are given a situation, and choosing how to explore it is part of what is assessed.

## Strand i: techniques for discovering patterns

| Technique | When it helps | Example of use |
|---|---|---|
| Simplify the problem | The situation is too large to count | Study a 1 × 1, 2 × 2 and 3 × 3 grid before an 8 × 8 one |
| Work systematically | Cases could be missed or counted twice | List squares by size: all 1 × 1, then all 2 × 2 |
| Tabulate | You have several cases | Put the case number in one row, the result in the next |
| Change one variable at a time | The situation has two or more inputs | Fix the width, vary the length |
| Take differences | Results grow by an even amount or a growing amount | Constant first, second or third differences point to linear, quadratic or cubic rules |
| Take ratios | Results grow by multiplying | A constant ratio points to an exponential rule |
| Look for known numbers | Results seem familiar | Squares, cubes, triangular numbers, powers of 2 |
| Draw a diagram | The structure is geometric | Shade the parts that change between cases |

"Complex" patterns are what the higher bands need. The guide's examples for Year 5 treat linear rules and quadratics of the form ax² or ax² + c as simple, and other quadratics, cubics, exponentials and rational rules as complex.

## Strand ii: describing a general rule

A general rule should be:

- **stated in words and in symbols**: "the number of layers doubles with each fold", L = 2ⁿ;
- **defined**: say what each letter stands for and where n starts;
- **consistent with your findings**: every result in your table should fit it;
- **general**: written for any n, not just the cases you drew.

A rule built on wrong data can still show method, but from Year 3 the top band needs rules consistent with *correct* findings, so check your counts before generalising.

## Strand iii: verify, justify, prove

| Word | What you do | What it shows |
|---|---|---|
| Verify | Test the rule on a case you did **not** use to find it | The rule works for that case |
| Justify | Explain why the structure of the situation produces the rule | The rule is not a coincidence |
| Prove | Give an algebraic or logical argument for every n | The rule always holds |

Testing a case you used to build the rule is not verification, because the rule was made to fit it. Choose a larger case, and work it out independently (by counting or drawing) before comparing with the rule.

## Investigation 1: squares on a grid (a cubic pattern)

*How many squares of any size are there on an n × n grid?*

Work systematically, counting by size. On a 3 × 3 grid there are nine 1 × 1 squares, four 2 × 2 squares and one 3 × 3 square: 9 + 4 + 1 = 14.

| n | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Squares S | 1 | 5 | 14 | 30 | 55 |
| First differences | | 4 | 9 | 16 | 25 |
| Second differences | | | 5 | 7 | 9 |
| Third differences | | | | 2 | 2 |

The first differences are the square numbers, and the third differences are constant, so the rule is cubic. The results are sums of squares: S = 1² + 2² + … + n². A cubic through the data is **S = n(n + 1)(2n + 1)/6** (check n = 3: 3 × 4 × 7 ÷ 6 = 14).

**Verify** with n = 6, counted by size: 36 + 25 + 16 + 9 + 4 + 1 = 91. The rule gives 6 × 7 × 13 ÷ 6 = 91.

**Justify**: a k × k square can start in any of (n − k + 1) positions across and (n − k + 1) down, so there are (n − k + 1)² squares of size k. As k runs from 1 to n, these are n², (n − 1)², …, 1², which is why the total is a sum of squares. The structure explains the pattern.

## Investigation 2: folding paper (an exponential pattern)

*A sheet of paper is folded in half again and again. How many layers are there after n folds?*

| Folds n | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Layers L | 1 | 2 | 4 | 8 | 16 |

The differences (1, 2, 4, 8) are not constant at any level, but the **ratio** is always 2. Rule: **L = 2ⁿ**, for n = 0, 1, 2, …

**Justify**: each fold places every existing layer on top of a copy of itself, so the number of layers doubles. Starting from 1 and doubling n times gives 2ⁿ.

**Extend**: if the paper is 0.1 mm thick, the stack after n folds is 0.1 × 2ⁿ mm. After 7 folds that is 12.8 mm. A good investigation also notes the limit of the model: real paper becomes too thick and small to fold after a few folds, so the rule describes the idealised situation.

## Investigation 3: a sum of fractions (a rational pattern)

*Find a rule for S(n) = 1/(1 × 2) + 1/(2 × 3) + … + 1/(n(n + 1)).*

| n | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| S(n) | 1/2 | 2/3 | 3/4 | 4/5 |

Conjecture: **S(n) = n/(n + 1)**.

**Verify** with n = 5: 4/5 + 1/30 = 24/30 + 1/30 = 25/30 = 5/6, as the rule predicts.

**Prove**: each term splits as 1/(k(k + 1)) = 1/k − 1/(k + 1), because 1/k − 1/(k + 1) = (k + 1 − k)/(k(k + 1)). Then

```
S(n) = (1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + … + (1/n − 1/(n + 1))
     = 1 − 1/(n + 1)
     = n/(n + 1)
```

Every middle term cancels with the next one. This argument works for every n, so it is a proof, the strongest form of strand iii in Year 5.

## Writing up an investigation

A clear write-up also supports Criterion C, which is usually assessed in the same task:

1. State the question you are investigating and any simplification.
2. Show the cases (diagrams or lists) and a results table.
3. Describe the pattern you noticed and the technique that found it.
4. State the rule in words and symbols, with the variable defined.
5. Verify on a new case, worked out independently.
6. Justify or prove the rule.
7. Note any limits, such as values of n where the rule does not apply.

## Common mistakes

- Counting cases carelessly, then building a rule on wrong data.
- Stopping at first differences when they are not constant, instead of trying second differences or ratios.
- "Verifying" with a case already in the table.
- Writing a rule with no definition of the variable or of its starting value.
- Offering three more examples as a proof.
- Following a fixed worksheet route: tasks that dictate the technique limit the level available.
- Ignoring when the rule stops applying, such as n = 0 or physical limits.

## Exam technique

Command terms in investigation tasks build on one another. "Describe" the pattern means give a detailed account of it. "Explain" asks for reasons. "Justify" asks for valid reasons or evidence that support the rule. "Prove" asks for an argument that works in every case. "Verify" means check the rule on a case. If a task asks you to "describe a general rule", give it in symbols as well as words, and if it asks for "your own" case, choose a value well beyond your table.

## Frequently asked questions

**What counts as a complex pattern in MYP Mathematics Criterion B?**
The guide's Year 5 examples treat linear rules and quadratics of the form ax² or ax² + c as simple. Other quadratics, cubics, exponentials and rational rules count as complex.

**What is the difference between verifying and justifying a rule?**
Verifying tests the rule on a new case. Justifying explains why the structure of the situation produces the rule, so it shows the pattern is not a coincidence.

**Can three examples prove a rule?**
No. Examples only verify. A proof needs an argument, usually algebraic, that holds for every value of n.

## Official syllabus

International Baccalaureate Organization, *Mathematics guide for the Middle Years Programme* (for use from September 2020/January 2021), first assessment 2022. Objective B and the Criterion B descriptors, paraphrased.
