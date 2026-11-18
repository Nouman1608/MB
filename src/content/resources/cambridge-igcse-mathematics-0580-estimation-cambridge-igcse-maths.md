---
title: "Cambridge IGCSE Mathematics (0580): Estimation"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 1 – Number"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 1.09
syllabusTopics:
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "estimation-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 1.9 Estimation: 1 s.f. estimates with fraction bars and roots, over- or underestimates, and sensible accuracy in context."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **1.9 Estimation** in Topic 1 Number of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. The Core (C1.9) and Extended (E1.9) statements are word for word the same, so everything here is for both tiers. Estimation can be tested on every paper, including the non-calculator Papers 1 and 2, where an estimate is often the whole question.

The broader [estimation and using a calculator study guide](/resources/igcse-mathematics-0580-estimation-and-using-a-calculator/) teaches the basic rounding rules. This page goes further on the harder estimation questions: fraction bars, powers and roots, deciding whether an estimate is too big or too small, estimating real quantities, and choosing a sensible accuracy for an answer. Revise with the [estimation revision notes](/resources/cambridge-igcse-mathematics-0580-estimation-cambridge-igcse-maths-revision-notes/) and test yourself with the [estimation practice questions](/resources/cambridge-igcse-mathematics-0580-estimation-cambridge-igcse-maths-practice/).

## What subtopic 1.9 asks for

| Statement | What you must be able to do | Syllabus example |
|---|---|---|
| 1.9.1 | Round values to a specified degree of accuracy, including decimal places and significant figures | write 5764 correct to the nearest thousand (6000) |
| 1.9.2 | Make estimates for calculations involving numbers, quantities and measurements | by writing each number correct to 1 significant figure, estimate 41.3 ÷ (9.79 × 0.765) |
| 1.9.3 | Round answers to a reasonable degree of accuracy in the context of a given problem | -- |

## Rounding where zeros and carries matter

The basic method (mark the last digit kept, look at the next digit only) is in the broader guide. The marks that are lost usually come from carries that change more than one digit:

```
0.0996 to 2 s.f.   -> 0.10      (the 9 rounds up, carries into the 0; the final 0 is significant)
4.997  to 2 d.p.   -> 5.00      (two digits must follow the point)
96 480 to 1 s.f.   -> 100 000   (the leading 9 becomes 10, so the answer has one more digit)
```

In each case the number of significant figures or decimal places you were asked for must still be visible. Writing 0.1 for 0.0996 to 2 s.f. shows only 1 s.f. and loses the mark.

## Estimating a calculation

When a question says "by writing each number correct to 1 significant figure", you must round **every** number to 1 s.f., write those values down, and then work out the simpler calculation exactly. Do not adjust a value to make the arithmetic nicer: the instruction fixes the rounding.

### Worked example 1: a fraction bar (non-calculator)

Using the syllabus example: estimate 41.3 ÷ (9.79 × 0.765).

```
41.3  -> 40        9.79 -> 10        0.765 -> 0.8

  40          40
-------- =  ----- = 5
10 × 0.8      8
```

Estimate **5**. A calculator gives 5.51..., so the estimate is close. Notice that 0.765 rounds to 0.8, not 0.7: the second digit is 6.

Treat a fraction bar as a pair of brackets. Work out the whole of the numerator and the whole of the denominator before dividing.

### Worked example 2: powers and roots (non-calculator)

Estimate (a) 6.12² × 0.0483 ÷ 19.7, (b) √(0.0912 × 395).

```
(a) 6.12 -> 6     0.0483 -> 0.05     19.7 -> 20
    6^2 × 0.05 = 36 × 0.05 = 1.8
    1.8 ÷ 20 = 0.09

(b) 0.0912 -> 0.09     395 -> 400
    0.09 × 400 = 36
    √36 = 6
```

Estimates **0.09** and **6** (exact values 0.0918... and 6.00...). In (b), round the numbers inside the root, then take the root of the result. You are not asked to round the square root itself.

Multiplying by 0.05 is the same as dividing by 20, and dividing by 0.2 is the same as multiplying by 5. These facts let you finish estimates without a calculator.

### Worked example 3: dividing by a small decimal (non-calculator)

Estimate 78.4 ÷ (0.213 × 3.86).

```
78.4 -> 80     0.213 -> 0.2     3.86 -> 4
0.2 × 4 = 0.8
80 ÷ 0.8 = 800 ÷ 8 = 100
```

Estimate **100** (exact 95.4 to 3 s.f.). Multiply top and bottom by 10 to remove the decimal before dividing. Dividing by a number less than 1 makes the answer larger than the numerator; if your estimate is smaller than 80, something has gone wrong.

## Is the estimate too big or too small?

A common follow-up asks whether your estimate is greater or less than the exact answer. Decide from the direction of each rounding:

| Calculation | Rounding that makes the estimate larger |
|---|---|
| a × b | rounding a or b **up** |
| a + b | rounding a or b **up** |
| a ÷ b | rounding a **up** or b **down** |
| a − b | rounding a **up** or b **down** |

If every rounding pushes the same way, you can be sure of the answer. If the roundings pull in opposite directions, you cannot tell without working out the exact value.

### Worked example 4

(a) Estimate 3.8 × 6.7 and state whether the estimate is larger or smaller than the exact value.
(b) Explain why you cannot decide this from the rounding alone for 4.6 × 7.4.

```
(a) 3.8 -> 4 (up)     6.7 -> 7 (up)
    4 × 7 = 28. Both factors were rounded up, so 28 is LARGER than the exact value.
    (Exact: 25.46.)

(b) 4.6 -> 5 (up)     7.4 -> 7 (down)
    One rounding increases the product and the other decreases it,
    so the direction of the error depends on which effect is bigger.
```

For an "Explain" question, name each rounding as up or down and say what that does to the result. "Because I rounded" earns nothing.

## Estimating quantities and measurements

Statement 1.9.2 also covers estimates in real contexts: areas, numbers of items, costs. Round the measurements to 1 s.f., then think about what the answer means.

### Worked example 5: tins of varnish (non-calculator)

A hall floor measures 18.6 m by 11.3 m. One tin of varnish covers 23 m². Estimate the number of tins needed.

```
Area ≈ 20 × 10 = 200 m^2
Tins ≈ 200 ÷ 20 = 10
```

Estimate **10 tins**. The exact area is 210.18 m², and 210.18 ÷ 23 = 9.14..., which also means 10 tins must be bought. In context, a number of tins is always a whole number; when the question asks how many are **needed**, round up.

## Reasonable accuracy in context

Statement 1.9.3 asks for judgement. Three checks decide the accuracy of a final answer:

1. **What does the question say?** An instruction such as "give your answer to the nearest metre" overrides everything else.
2. **What are the default rules?** On the calculator papers, non-exact answers go to 3 significant figures, and angles in degrees to 1 decimal place, unless the question says otherwise. Money goes to the nearest cent.
3. **What makes sense?** People, buses and tins are whole numbers. An answer should not claim more accuracy than the data it came from.

### Worked example 6: an answer from measured data (calculator)

Three planks are measured as 1.68 m, 1.72 m and 1.65 m, each to the nearest centimetre. Find the mean length to a sensible accuracy.

```
(1.68 + 1.72 + 1.65) ÷ 3 = 5.05 ÷ 3 = 1.683 333...
```

The measurements are to the nearest centimetre (2 decimal places of a metre), so the mean is given as **1.68 m**. Writing 1.683 333 m suggests the planks were measured to a millionth of a metre, which they were not. Here 1.68 m is also the 3 s.f. answer, so both rules agree.

## Common mistakes

- Rounding only some of the numbers, or rounding to "nice" values (such as 9.79 to 9.8) when 1 s.f. was asked for.
- Giving the estimate without writing down the rounded values, so the method mark cannot be awarded.
- Rounding the answer of the rounded calculation again, for example writing 5 as "about 6".
- Dividing only part of the numerator by the denominator because the fraction bar was not treated as brackets.
- Rounding a square root instead of the number inside it.
- Saying an estimate is an overestimate just because "the numbers were rounded up" when one of them was rounded down.
- Using ordinary rounding for a number of items that must be bought or needed.

## Exam technique for the command words

- **Work out / Calculate** an estimate: show the 1 s.f. values in a line of working, then the simpler calculation, then the answer.
- **Show (that)** an estimate equals a given value: every rounded value and every step must appear, because the answer is already printed. Write the final line so it ends with the given value.
- **Explain** whether an estimate is too large or too small: state the direction of each rounding and its effect on the result.
- **Write down** a rounded value: one step, no working needed, but the accuracy must be exactly as asked.

## Next steps

- Condensed rules and a self-test: the [estimation revision notes](/resources/cambridge-igcse-mathematics-0580-estimation-cambridge-igcse-maths-revision-notes/).
- Exam-style questions with marked answers: the [estimation practice questions](/resources/cambridge-igcse-mathematics-0580-estimation-cambridge-igcse-maths-practice/).
- Calculator skills that go with estimating: the [estimation and using a calculator study guide](/resources/igcse-mathematics-0580-estimation-and-using-a-calculator/).
- The whole of Topic 1: the [Number study guide](/resources/igcse-mathematics-number/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027 (Version 3), Cambridge University Press & Assessment. Topic 1 Number, subtopic C1.9 / E1.9 Estimation.
