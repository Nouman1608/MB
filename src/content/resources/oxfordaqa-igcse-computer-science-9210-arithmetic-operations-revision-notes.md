---
title: "OxfordAQA IGCSE Computer Science (9210): Arithmetic operations in a programming language -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.03
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "arithmetic-operations-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.3: arithmetic operators, real division, DIV and MOD patterns, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.3 Arithmetic operations in a programming language** of OxfordAQA International
GCSE Computer Science (9210). Worked examples and full explanations are in the [arithmetic operations study
guide](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations/).

## What the specification asks

Be familiar with and be able to use: **addition, subtraction, multiplication, real division, integer division
including remainders**. Integer division is "usually a two-stage process": `11 DIV 2 = 5` (integer quotient) and
`11 MOD 2 = 1` (remainder).

## Operator table

| Operator | Meaning | `17 ? 5` | `20 ? 4` |
|---|---|---|---|
| `+` | Addition | 22 | 24 |
| `-` | Subtraction | 12 | 16 |
| `*` | Multiplication | 85 | 80 |
| `/` | Real division | 3.4 | 5.0 |
| `DIV` | Integer quotient | 3 | 5 |
| `MOD` | Remainder | 2 | 0 |

Language names vary: Python `//` and `%`; Visual Basic `\` and `Mod`; C# `%` for remainder. **Use `DIV` and
`MOD` in exam answers** where the question uses them.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--01-real-div-mod.webp" width="900" height="604" alt="Eight counters shared into groups of 5 make one full group with 3 left over. 8 / 5 gives the real number 1.6, 8 DIV 5 gives the integer 1 and 8 MOD 5 gives the integer remainder 3. In the exam pseudocode 7 / 2 is 3.5." loading="lazy">
  <figcaption>/ gives a real answer; DIV counts the whole groups and MOD gives what is left.</figcaption>
</figure>

## Rules to remember

- `/` in the specification's pseudocode is **real division**: `9 / 2 = 4.5`.
- `DIV` gives a **whole number**, always rounding the answer **down** for positive values: `9 DIV 2 = 4`.
- `MOD` gives the **remainder**, always smaller than the divisor: `9 MOD 2 = 1`.
- **Check:** `(a DIV b) * b + (a MOD b) = a`.
- If `a < b`: `a DIV b = 0` and `a MOD b = a` (e.g. `4 DIV 9 = 0`, `4 MOD 9 = 4`).
- If `b` divides `a` exactly: `a MOD b = 0`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--02-div-mod-two-stages.webp" width="900" height="649" alt="23 counters are split into 5 full groups of 4 with 3 left over, so 23 DIV 4 is 5 and 23 MOD 4 is 3; the check (23 DIV 4) * 4 + (23 MOD 4) gives 5 * 4 + 3 = 23. Two special cases: 3 DIV 8 = 0 and 3 MOD 8 = 3, and 24 MOD 6 = 0." loading="lazy">
  <figcaption>DIV and MOD are two halves of one division: quotient times divisor plus remainder gives the number back.</figcaption>
</figure>

## Standard patterns

| Purpose | Code | Example |
|---|---|---|
| Even test | `n MOD 2 = 0` | `30 MOD 2 = 0` → even |
| Odd test | `n MOD 2 = 1` | `31 MOD 2 = 1` → odd |
| Factor/multiple test | `a MOD b = 0` | `45 MOD 9 = 0` → 9 is a factor of 45 |
| Last digit | `n MOD 10` | `386 MOD 10 = 6` |
| Drop last digit | `n DIV 10` | `386 DIV 10 = 38` |
| Hours and minutes | `m DIV 60`, `m MOD 60` | 135 min → 2 h 15 min |
| Full groups and leftovers | `items DIV size`, `items MOD size` | 29 pupils, teams of 4 → 7 teams, 1 left |
| Every nth item | `i MOD n = 0` | Do something on every 3rd pass |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--03-div-mod-toolkit.webp" width="900" height="686" alt="472 MOD 10 gives the last digit 2 and 472 DIV 10 gives 47. 200 minutes is 200 DIV 60 = 3 hours and 200 MOD 60 = 20 minutes; 50 eggs in boxes of 6 is 8 full boxes and 2 left. n MOD 2 = 0 tests for even, a MOD b = 0 tests for a factor, and day MOD 7 repeats a weekly pattern." loading="lazy">
  <figcaption>DIV counts whole units or groups; MOD gives the remainder, the last digit or a repeating cycle.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--04-seconds-to-minutes.webp" width="900" height="594" alt="The pseudocode sets totalSeconds to 437, then uses DIV 60 and MOD 60. On a number line marked every 60 seconds, 437 lies after 420 (7 × 60) and before 480, so there are 7 full minutes and 17 seconds left. The output is 7 min 17 s." loading="lazy">
  <figcaption>DIV 60 counts the full minutes; MOD 60 is the seconds left after them.</figcaption>
</figure>

## Order of operations

Brackets → `*`, `/`, `DIV`, `MOD` → `+`, `-`. So `10 - 6 / 2 = 7` but `(10 - 6) / 2 = 2`.
Averages need brackets: `(a + b + c) / 3`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--06-order-of-operations.webp" width="900" height="710" alt="Two expression trees. In 2 + 3 * 4 the multiplication 3 * 4 is done first, giving 14; in (2 + 3) * 4 the bracketed addition is done first, giving 20. Below, average ← a + b + c / 3 divides only c by 3, while average ← (a + b + c) / 3 is correct." loading="lazy">
  <figcaption>Multiplication and division (including DIV and MOD) come before + and −, unless brackets say otherwise.</figcaption>
</figure>

## Quick trace to remember

```
n ← 247
tens ← (n DIV 10) MOD 10
OUTPUT tens
```

`247 DIV 10 = 24`, then `24 MOD 10 = 4`, so `4` (the tens digit) is output. Combining `DIV` to shift the number
right and `MOD` to keep the last digit picks out any digit: `(n DIV 100) MOD 10` gives the hundreds digit, `2`.
Questions often hide this pattern inside a loop, so trace each expression in its own column.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--05-digit-sum-trace.webp" width="900" height="715" alt="Pseudocode that adds the digits of 4827 with a WHILE loop, and its trace table. Each pass, number MOD 10 gives the last digit (7, 2, 8, 4), digitSum grows to 7, 9, 17 and 21, and number DIV 10 gives 482, 48, 4 and 0. The loop stops at 0 and outputs 21." loading="lazy">
  <figcaption>MOD 10 peels off the last digit and DIV 10 removes it, pass by pass.</figcaption>
</figure>

## Key terms

| Term | Meaning |
|---|---|
| Operator | A symbol or keyword that performs an operation on values |
| Operand | A value an operator acts on |
| Real division | Division that gives a result that can have a fractional part |
| Integer division (`DIV`) | Division that gives only the whole-number quotient |
| Remainder (`MOD`) | What is left over after integer division |
| Modular arithmetic | Arithmetic using remainders, as `MOD` does |
| Quotient | The result of a division |

## Exam traps

- **DIV/MOD swapped**: "quotient" means `DIV`, "remainder" means `MOD`.
- **`MOD` written as a decimal**: `13 MOD 4` is 1, not 0.25.
- **`/` used for counts** of boxes, pages or teams, giving a non-whole answer.
- **Missing brackets** in averages and percentages.
- **Even/odd reversed**: `MOD 2 = 0` is even.
- **Integer stored where a real is needed**: the result of `/` belongs in a real variable.
- **Language habits**: writing `%` without saying it means remainder; in the exam, use `MOD` or name the operation.

## Self-test

1. Calculate `29 DIV 6` and `29 MOD 6`.
2. Calculate `29 / 4`.
3. State the value of `5 MOD 12`.
4. Write a condition that is true when `year` is a multiple of 4.
5. State the value of `3 + 4 * 2`.
6. A box holds 15 pens. Write expressions for the number of full boxes and the pens left over from `pens`.
7. Give the expression that returns the last digit of `code`.
8. Convert 500 seconds into minutes and seconds using `DIV` and `MOD`.
9. Explain why `total / 3` is wrong for the number of teams of three that can be made from `total` people.
10. Find the error: `mean ← x + y / 2`.
11. Use the check rule to verify that `47 DIV 8 = 5` and `47 MOD 8 = 7`.
12. State the value of `n` after `n ← 731`, `n ← n DIV 10`, `n ← n MOD 10`.

**Answers:**
1. 4 and 5 (6 × 4 = 24, 29 − 24 = 5).
2. 7.25.
3. 5.
4. `year MOD 4 = 0`.
5. 11.
6. `pens DIV 15` and `pens MOD 15`.
7. `code MOD 10`.
8. 8 minutes 20 seconds (`500 DIV 60 = 8`, `500 MOD 60 = 20`).
9. Real division may give a fractional answer such as 6.33, but the number of teams must be whole; use
`total DIV 3`.
10. Only `y` is divided by 2; it should be `mean ← (x + y) / 2`.
11. 5 × 8 + 7 = 47, so both values are consistent.
12. 3 (`731 DIV 10 = 73`, then `73 MOD 10 = 3`).

## More resources on this topic

- [Arithmetic operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations/)
- [Arithmetic operations practice questions](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations-practice/)
- [Programming Fundamentals revision notes](/resources/oxfordaqa-igcse-computer-science-programming-revision-notes/)
