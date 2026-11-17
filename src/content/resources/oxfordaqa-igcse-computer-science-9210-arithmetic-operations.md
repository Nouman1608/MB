---
title: "OxfordAQA IGCSE Computer Science (9210): Arithmetic operations in a programming language"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.2.3: the arithmetic operators, real division, and DIV and MOD with traced program examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

This guide covers section **3.2.3 Arithmetic operations in a programming language** of OxfordAQA International
GCSE Computer Science (9210). You must "be familiar with and be able to use" **addition, subtraction,
multiplication, real division, and integer division, including remainders**. The specification describes integer
division as "usually a two-stage process" that uses modular arithmetic: 11 divided by 2 gives the integer quotient
`11 DIV 2 = 5` and the remainder `11 MOD 2 = 1`. The [Programming Fundamentals study
guide](/resources/igcse-oxfordaqa-computer-science-programming-fundamentals/) introduces the operators; this guide
shows how they are used to solve problems in programs.

## The operators

| Operation | Pseudocode | Example | Result | Result type |
|---|---|---|---|---|
| Addition | `+` | `8 + 5` | `13` | Integer if both operands are integers |
| Subtraction | `-` | `8 - 5` | `3` | Integer if both operands are integers |
| Multiplication | `*` | `8 * 5` | `40` | Integer if both operands are integers |
| Real division | `/` | `8 / 5` | `1.6` | Real |
| Integer division | `DIV` | `8 DIV 5` | `1` | Integer |
| Remainder (modulus) | `MOD` | `8 MOD 5` | `3` | Integer |

In everyday maths, × and ÷ are used; in programs `*` and `/` are used, and your language may write `DIV` and
`MOD` differently (Python uses `//` and `%`, for example). In the exam's pseudocode, `/` is **always real
division**: `7 / 2` is `3.5`, even though both numbers are integers. Be aware that in some languages, such as C#,
dividing one integer by another with `/` gives a whole-number answer, which is a common source of bugs in
real programs.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--01-real-div-mod.webp" width="900" height="604" alt="Eight counters shared into groups of 5 make one full group with 3 left over. 8 / 5 gives the real number 1.6, 8 DIV 5 gives the integer 1 and 8 MOD 5 gives the integer remainder 3. In the exam pseudocode 7 / 2 is 3.5." loading="lazy">
  <figcaption>/ gives a real answer; DIV counts the whole groups and MOD gives what is left.</figcaption>
</figure>

## Integer division as a two-stage process

When you divide 23 by 4 by hand you get "5 remainder 3". A program needs two operations to get both parts:

- `23 DIV 4` → **5**, the number of whole times 4 goes into 23;
- `23 MOD 4` → **3**, what is left over.

The two results are always linked: `(23 DIV 4) * 4 + (23 MOD 4)` = `5 * 4 + 3` = `23`. You can use this to check
any `DIV` and `MOD` pair you calculate. Two special cases catch people out:

- When the first number is smaller than the second, `DIV` is 0 and `MOD` is the first number: `3 DIV 8 = 0`,
  `3 MOD 8 = 3`.
- When the division is exact, `MOD` is 0: `24 MOD 6 = 0`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--02-div-mod-two-stages.webp" width="900" height="649" alt="23 counters are split into 5 full groups of 4 with 3 left over, so 23 DIV 4 is 5 and 23 MOD 4 is 3; the check (23 DIV 4) * 4 + (23 MOD 4) gives 5 * 4 + 3 = 23. Two special cases: 3 DIV 8 = 0 and 3 MOD 8 = 3, and 24 MOD 6 = 0." loading="lazy">
  <figcaption>DIV and MOD are two halves of one division: quotient times divisor plus remainder gives the number back.</figcaption>
</figure>

## Where DIV and MOD are used

These operators are tested less as calculations and more as tools in algorithms:

| Task | Technique | Example |
|---|---|---|
| Test whether a number is even | `n MOD 2 = 0` | `14 MOD 2 = 0`, so 14 is even |
| Test whether one number divides another | `a MOD b = 0` | `35 MOD 7 = 0`, so 7 is a factor of 35 |
| Get the last digit of a whole number | `n MOD 10` | `472 MOD 10 = 2` |
| Remove the last digit | `n DIV 10` | `472 DIV 10 = 47` |
| Convert units | `DIV` for the large unit, `MOD` for the rest | 200 minutes: `200 DIV 60 = 3` hours, `200 MOD 60 = 20` minutes |
| Share items into groups | `DIV` for full groups, `MOD` for leftovers | 50 eggs in boxes of 6: 8 full boxes, 2 left |
| Repeat a pattern | `MOD` cycles through 0 to n − 1 | `day MOD 7` gives a weekday number |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--03-div-mod-toolkit.webp" width="900" height="686" alt="472 MOD 10 gives the last digit 2 and 472 DIV 10 gives 47. 200 minutes is 200 DIV 60 = 3 hours and 200 MOD 60 = 20 minutes; 50 eggs in boxes of 6 is 8 full boxes and 2 left. n MOD 2 = 0 tests for even, a MOD b = 0 tests for a factor, and day MOD 7 repeats a weekly pattern." loading="lazy">
  <figcaption>DIV counts whole units or groups; MOD gives the remainder, the last digit or a repeating cycle.</figcaption>
</figure>

## Worked example 1: converting seconds

A running app stores a time in seconds and must display it as minutes and seconds.

```
totalSeconds ← 437
minutes ← totalSeconds DIV 60
seconds ← totalSeconds MOD 60
OUTPUT minutes, " min ", seconds, " s"
```

`437 DIV 60 = 7` because 7 × 60 = 420 and 8 × 60 = 480 is too big. `437 MOD 60 = 437 − 420 = 17`. The output is
`7 min 17 s`. Using `/` instead of `DIV` would give 7.283..., which is not a number of whole minutes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--04-seconds-to-minutes.webp" width="900" height="594" alt="The pseudocode sets totalSeconds to 437, then uses DIV 60 and MOD 60. On a number line marked every 60 seconds, 437 lies after 420 (7 × 60) and before 480, so there are 7 full minutes and 17 seconds left. The output is 7 min 17 s." loading="lazy">
  <figcaption>DIV 60 counts the full minutes; MOD 60 is the seconds left after them.</figcaption>
</figure>

## Worked example 2: adding the digits of a number

```
number ← 4827
digitSum ← 0
WHILE number > 0
  digitSum ← digitSum + (number MOD 10)
  number ← number DIV 10
ENDWHILE
OUTPUT digitSum
```

| number (start of pass) | number MOD 10 | digitSum | number DIV 10 |
|---|---|---|---|
| 4827 | 7 | 7 | 482 |
| 482 | 2 | 9 | 48 |
| 48 | 8 | 17 | 4 |
| 4 | 4 | 21 | 0 |

When `number` reaches 0 the loop stops and `21` is output. `MOD 10` peels off the last digit and `DIV 10`
removes it, which is the pattern behind many digit-processing questions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--05-digit-sum-trace.webp" width="900" height="715" alt="Pseudocode that adds the digits of 4827 with a WHILE loop, and its trace table. Each pass, number MOD 10 gives the last digit (7, 2, 8, 4), digitSum grows to 7, 9, 17 and 21, and number DIV 10 gives 482, 48, 4 and 0. The loop stops at 0 and outputs 21." loading="lazy">
  <figcaption>MOD 10 peels off the last digit and DIV 10 removes it, pass by pass.</figcaption>
</figure>

## Order of operations

Programs apply the usual mathematical order: multiplication and division (including `DIV` and `MOD`) before
addition and subtraction, and brackets first. So `2 + 3 * 4` is `14`, while `(2 + 3) * 4` is `20`. A common
error is `average ← a + b + c / 3`, which divides only `c` by 3. The correct statement is
`average ← (a + b + c) / 3`. When writing your own answers, add brackets whenever the order could be misread; they
cost nothing and remove doubt.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-arithmetic-operations--06-order-of-operations.webp" width="900" height="710" alt="Two expression trees. In 2 + 3 * 4 the multiplication 3 * 4 is done first, giving 14; in (2 + 3) * 4 the bracketed addition is done first, giving 20. Below, average ← a + b + c / 3 divides only c by 3, while average ← (a + b + c) / 3 is correct." loading="lazy">
  <figcaption>Multiplication and division (including DIV and MOD) come before + and −, unless brackets say otherwise.</figcaption>
</figure>

## Annotated model answer

**Question:** A delivery company packs bottles into crates of 12. Write pseudocode that takes the number of
bottles as input and outputs the number of full crates and the number of bottles left over. [4]

```
bottles ← STRING_TO_INT(USERINPUT)
fullCrates ← bottles DIV 12
leftOver ← bottles MOD 12
OUTPUT fullCrates
OUTPUT leftOver
```

**Why it scores:** input is taken (and converted, since keyboard input arrives as a string); `DIV` gives the full
crates; `MOD` gives the leftovers; both are output. With an input of 150, it outputs `12` and `6`
(12 × 12 = 144, 150 − 144 = 6). Using `/` would earn no mark for the crate count because 12.5 is not a whole
number of crates.

## Common mistakes

- **Swapping DIV and MOD.** `DIV` is the whole-number quotient; `MOD` is the remainder.
- **Thinking `MOD` gives a decimal.** `17 MOD 5` is `2`, never `0.4`.
- **Using `/` where a whole number is needed**, such as a count of groups or pages.
- **Forgetting brackets** when averaging: `(a + b) / 2`, not `a + b / 2`.
- **Stating that `n MOD 2 = 1` tests for even numbers.** It tests for odd numbers.
- **Assuming `7 / 2` is 3 in the exam.** In the specification's pseudocode it is 3.5.
- **Negative numbers.** Languages differ in how they apply `DIV` and `MOD` to negative values, so avoid relying on
  them, and work only with the values a question gives.

## Exam technique

- **Calculate** or **state the value**: show the quotient and remainder working, for example "60 × 7 = 420,
  437 − 420 = 17".
- **Write** pseudocode: store each result in a meaningfully named variable before outputting it, so the examiner
  can see which operator produced which value.
- **Trace** questions with `MOD` and `DIV`: add a column for each expression, as in Worked example 2.
- **Explain** why an operator was chosen: link it to the data ("a number of crates must be whole, so `DIV` is
  used").

## Next steps

Quick-recall tables and a self-test are in the [arithmetic operations revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations-revision-notes/), and you can apply
these techniques in the [arithmetic operations practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-arithmetic-operations-practice/). Arithmetic results
are often tested inside conditions, which is the subject of the [relational operations study
guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations/).
