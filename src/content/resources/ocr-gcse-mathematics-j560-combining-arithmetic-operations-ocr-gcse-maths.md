---
title: "OCR GCSE Mathematics (J560): Combining arithmetic operations"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 1 – Number operations and integers"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 1.3
syllabusTopics:
  - qualification: "gcse"
    topic: "number-operations-and-integers-ocr-gcse-maths"
    subtopic: "combining-arithmetic-operations-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 1.03 in depth: the order of operations with nested brackets, signs and powers, roots, reciprocals and calculator keying."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1.03, Combining arithmetic operations, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. The statement is in the first column, so it is content for **both tiers**. It is short to state, but it decides whether every later substitution, formula and multi-step calculation comes out right.

The [integer arithmetic, number theory, priority of operations and inverse operations guide](/resources/ocr-gcse-mathematics-integer-arithmetic-number-theory-priority-of/) sets out the basic order. This page goes further on 1.03 alone: hidden brackets, nested brackets, the difference between −3² and (−3)², reciprocals of sums, keying calculations into a calculator, and the "insert brackets" and "write the calculation" questions. Condense it with the [1.03 revision notes](/resources/ocr-gcse-mathematics-j560-combining-arithmetic-operations-ocr-gcse-maths-revision-notes/) and test yourself with the [1.03 practice questions](/resources/ocr-gcse-mathematics-j560-combining-arithmetic-operations-ocr-gcse-maths-practice/).

## What the specification asks

Section 1.03a, Priority of operations: "Know the conventional order for performing calculations involving brackets, four rules and powers, roots and reciprocals."

"Conventional" is the key word. The order is an agreement, so that one written calculation means the same thing to everyone who reads it, and to every scientific calculator.

| Priority | Operations | Within a level |
|---|---|---|
| 1 | Brackets, and anything that groups like a bracket | Innermost first |
| 2 | Powers, roots, reciprocals | — |
| 3 | Multiplication and division | Left to right |
| 4 | Addition and subtraction | Left to right |

## Hidden brackets

Three symbols group numbers without showing brackets.

- **A fraction bar** groups everything above it and everything below it. (12 + 8)/(3 + 2) is how a calculator must read a fraction with sums on top and bottom.
- **A root sign** groups everything under its top line. √(16 + 9) = √25 = 5, but √16 + 9 = 13.
- **A power** applies only to the number or bracket it is attached to. In 2 × 5², only the 5 is squared.

**Worked example 1.** Work out (3 × 8 − 2²)/(√16 + 1).

```
top:     3 × 8 − 2² = 24 − 4 = 20
bottom:  √16 + 1    = 4 + 1  = 5
answer:  20 ÷ 5     = 4
```

Finish the top and the bottom completely before you divide.

## Nested brackets

When brackets sit inside other brackets, start with the innermost and work outwards. Square brackets are sometimes used for the outer pair to make the structure easier to see.

**Worked example 2.** Work out 2 × [15 − (4 + 3)² ÷ 7].

```
innermost:      4 + 3   = 7
power:          7²      = 49
divide:         49 ÷ 7  = 7
outer bracket:  15 − 7  = 8
multiply:       2 × 8   = 16
```

The answer is **16**. Inside the square bracket the full order applies again: power, then division, then subtraction.

## Signs and powers: −3² is not (−3)²

By convention a power is applied before a minus sign that stands in front of a number.

```
−3²    = −(3²)    = −9
(−3)²  = (−3) × (−3) = 9
(−2)³  = −8       (an odd power of a negative is negative)
```

**Worked example 3.** Work out (−4)² − 3 × (−2)³.

```
powers:    (−4)² = 16      (−2)³ = −8
multiply:  3 × (−8) = −24
subtract:  16 − (−24) = 40
```

The answer is **40**. This distinction matters most when you substitute a negative value into a formula: always put the negative number in brackets first.

## Left to right within a level

Multiplication and division share a level, and so do addition and subtraction. Work left to right inside a level.

```
20 − 8 − 5  = 12 − 5 = 7       (not 20 − 3 = 17)
72 ÷ 6 ÷ 3  = 12 ÷ 3 = 4       (not 72 ÷ 2 = 36)
18 ÷ 3 × 2  = 6 × 2  = 12      (not 18 ÷ 6 = 3)
```

The mnemonic BIDMAS lists D before M and A before S, which tempts people to do every division before any multiplication. The pairs have equal priority.

## Reciprocals in calculations

The reciprocal of a number is 1 divided by it. The reciprocal of 4 is 1/4, of 0.2 is 5, and of 2/3 is 3/2. In the order of operations a reciprocal sits with powers and roots, because it is the power −1 of a number.

**Worked example 4.** Work out 5 × (the reciprocal of 0.2), and compare "the reciprocal of 1/2 plus the reciprocal of 1/3" with "the reciprocal of (1/2 + 1/3)".

```
5 × (1 ÷ 0.2) = 5 × 5 = 25

reciprocal of 1/2 + reciprocal of 1/3 = 2 + 3 = 5
reciprocal of (1/2 + 1/3) = 1 ÷ (5/6) = 6/5
```

The two expressions in the second part differ only in the brackets, and the answers differ by a factor of more than four. The reciprocal of a sum is not the sum of the reciprocals.

## Keying calculations into a calculator

A scientific calculator follows the same convention, so it calculates exactly what you type, not what you meant. Add brackets wherever the written form uses a fraction bar or a long root sign.

**Worked example 5.** Work out (12.6 + 3.4)/(2.5 × 0.8) and √(9² + 40²) on a calculator.

```
correct keying:   (12.6 + 3.4) ÷ (2.5 × 0.8) = 8
missing brackets: 12.6 + 3.4 ÷ 2.5 × 0.8      = 13.688

correct keying:   √(9² + 40²) = √1 681 = 41
```

A quick estimate catches a keying error. The top is 16 and the bottom is 2, so the answer must be 8, not 13.688. Writing down the value of the numerator and denominator separately is also good practice: it earns method marks if the final answer slips.

## Inserting brackets to make a statement true

These questions test whether you can predict the effect of each bracket.

**Worked example 6.** Without brackets, 5 + 3 × 6 − 2 = 21. Insert one pair of brackets to make each answer.

```
(5 + 3) × 6 − 2   = 8 × 6 − 2 = 46
5 + 3 × (6 − 2)   = 5 + 12    = 17
(5 + 3) × (6 − 2) = 8 × 4     = 32   (two pairs)
```

A good strategy: decide which operation must happen first to reach the target, and bracket it. Then check the whole calculation in order.

## Writing a calculation from words

**Worked example 7.** "Subtract 4 from 9, square the result, then divide by 5." Write this as one calculation and evaluate it.

```
(9 − 4)² ÷ 5 = 5² ÷ 5 = 25 ÷ 5 = 5
```

The bracket is essential: 9 − 4² ÷ 5 would mean 9 − 3.2 = 5.8. "The result" is the signal that the previous steps form a group.

## Common mistakes

- Squaring the minus sign in −3², giving 9 instead of −9.
- Doing all divisions before multiplications, as in 18 ÷ 3 × 2.
- Working right to left through a run of subtractions.
- Dividing only the last term of a numerator, as in 12.6 + 3.4 ÷ 2 instead of (12.6 + 3.4) ÷ 2.
- Taking the root of only the first term under a long root sign.
- Treating the reciprocal of a sum as the sum of the reciprocals.
- Forgetting that the order applies afresh inside every bracket.

## Exam technique

- **"Work out"** with several operations: write one operation per line, as in the examples, so each step can earn credit.
- **"Write down"** means little or no working is expected, but you can still jot the intermediate values.
- **"Insert brackets"**: check your final version from left to right before moving on.
- **Calculator papers**: write down unrounded intermediate values and round only the final answer, to the accuracy the question asks for.

## Where to go next

Condense this unit with the [1.03 revision notes](/resources/ocr-gcse-mathematics-j560-combining-arithmetic-operations-ocr-gcse-maths-revision-notes/), then try the [1.03 practice questions](/resources/ocr-gcse-mathematics-j560-combining-arithmetic-operations-ocr-gcse-maths-practice/). The [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) links to every other topic.

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 1.03, Combining arithmetic operations (1.03a, Priority of operations).
