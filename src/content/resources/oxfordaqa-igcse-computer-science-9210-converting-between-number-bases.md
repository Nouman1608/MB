---
title: "OxfordAQA IGCSE Computer Science (9210): Converting between number bases -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Converting Number Bases Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.02
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "converting-between-number-bases-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.2: converting between binary, decimal and hexadecimal for values from 0 to 255, with every step shown."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.2 Converting between number bases** of OxfordAQA International GCSE Computer
Science (9210). The specification asks you to understand how binary and hexadecimal can represent whole numbers,
and to be able to convert in **both directions** between binary and decimal, between binary and hexadecimal, and
between decimal and hexadecimal. Its additional information limits the range: "students must be able to represent
decimal values between 0 and 255" in binary and in hexadecimal, and "the following equivalent maximum values will
be used: decimal 255, binary 1111 1111, hexadecimal FF". So every conversion is of a value that fits in one byte.
The ideas behind the bases are in the [number bases study
guide](/resources/oxfordaqa-igcse-computer-science-9210-number-bases/); this guide is about the methods.

## Tools you need

Learn these two sets of place values, and the 4-bit table.

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|

Hexadecimal digits: 0 to 9, then A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

| Hex digit | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Binary | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

You can rebuild the 4-bit table in the exam from the place values 8, 4, 2, 1. For example, 11 is 8 + 2 + 1, so it is
1011.

## Method 1: binary to decimal

Write the place values above the bits, then **add the place values where there is a 1**.

Convert **0010 1101** to decimal.

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 |

32 + 8 + 4 + 1 = **45**.

Convert **1011 0110**: the 1s are under 128, 32, 16, 4 and 2, so 128 + 32 + 16 + 4 + 2 = **182**.

Always write all eight place values, even for a four-bit number, so that the bits line up with the right
columns.

## Method 2: decimal to binary

There are two reliable methods. Use the one you find easier.

### Place-value subtraction

Work from 128 downwards. For each place value, if it **fits** in the number you still have, write 1 and subtract
it. Otherwise write 0.

Convert **150**.

| Place value | Fits? | Bit | Remainder |
|---|---|---|---|
| 128 | Yes (150 ≥ 128) | 1 | 150 - 128 = 22 |
| 64 | No | 0 | 22 |
| 32 | No | 0 | 22 |
| 16 | Yes | 1 | 22 - 16 = 6 |
| 8 | No | 0 | 6 |
| 4 | Yes | 1 | 6 - 4 = 2 |
| 2 | Yes | 1 | 2 - 2 = 0 |
| 1 | No | 0 | 0 |

Reading the bits down the table gives **1001 0110**. Check: 128 + 16 + 4 + 2 = 150.

### Repeated division by 2

Divide by 2 again and again, noting the **remainder** each time, until the quotient is 0. The binary number is the
remainders read from **bottom to top**.

| Divide | Quotient | Remainder |
|---|---|---|
| 150 ÷ 2 | 75 | 0 |
| 75 ÷ 2 | 37 | 1 |
| 37 ÷ 2 | 18 | 1 |
| 18 ÷ 2 | 9 | 0 |
| 9 ÷ 2 | 4 | 1 |
| 4 ÷ 2 | 2 | 0 |
| 2 ÷ 2 | 1 | 0 |
| 1 ÷ 2 | 0 | 1 |

Reading the remainders from the bottom up gives 1001 0110, the same answer. Add leading zeros if needed to make up
eight bits (for example 19 gives 10011, which is written 0001 0011).

## Method 3: binary to hexadecimal

Split the byte into two groups of four bits (called nibbles), then convert each nibble using the 4-bit table.

Convert **1110 1101**.

- 1110 is 14, which is E.
- 1101 is 13, which is D.

The answer is **ED**.

Convert **0101 1110**: 0101 is 5 and 1110 is E, so the answer is **5E**.

There is no arithmetic across the whole byte. This is why hexadecimal is convenient. If a number has fewer than
eight bits, add zeros on the left so that each group has four bits.

## Method 4: hexadecimal to binary

Convert each hex digit into a four-bit group and join the groups.

Convert **3C**.

- 3 is 0011.
- C is 1100.

The answer is **0011 1100**. Keep the leading zeros in each group, because each hex digit must give exactly four
bits.

## Method 5: hexadecimal to decimal

Multiply the **left** digit by 16 and add the **right** digit. Convert letters to their values first.

Convert **A7**: A is 10, so 10 × 16 + 7 = 160 + 7 = **167**.

Convert **3C**: 3 × 16 + 12 = 48 + 12 = **60**.

Convert **FF**: 15 × 16 + 15 = 240 + 15 = **255**, the largest value.

## Method 6: decimal to hexadecimal

Divide by 16. The **quotient** is the left digit and the **remainder** is the right digit. Change values of 10 and
above to letters.

Convert **237**: 237 ÷ 16 = 14 remainder 13. 14 is E and 13 is D, so the answer is **ED**.

Convert **150**: 150 ÷ 16 = 9 remainder 6, so the answer is **96**.

Convert **94**: 94 ÷ 16 = 5 remainder 14, so the answer is **5E**.

You can also convert decimal to binary first, and then binary to hex. For 237: 237 = 128 + 64 + 32 + 8 + 4 + 1 =
1110 1101, then 1110 1101 gives ED.

## Checking your answers

- **Convert back.** Take your answer and convert it in the other direction. If you do not get the start value, find the
  mistake.
- **Check the size.** A binary number with 1 in the 128 column is at least 128; a decimal value below 128 must
  start with 0.
- **Check odd and even.** A decimal number is odd if and only if the last (right-hand) binary bit is 1.
- **Check the range.** For this specification the answer must never be above 255 (FF, 1111 1111).
- **Use the pattern for powers.** 128 is 1000 0000, which is hex 80; 255 is FF; 100 is 0110 0100, which is hex 64.

## Worked example: one value in all three bases

The decimal value **200** in each base:

1. Binary: 128 fits (200 - 128 = 72); 64 fits (72 - 64 = 8); 32 no; 16 no; 8 fits (8 - 8 = 0); the rest are 0. The
   bits are 1100 1000.
2. Hexadecimal: 1100 is C and 1000 is 8, so C8. Check: 12 × 16 + 8 = 200.
3. Back to decimal from binary: 128 + 64 + 8 = 200.

All three agree, so the conversions are correct.

## Common mistakes

- Reading the binary remainders from the **top down** instead of from bottom to top.
- Leaving out leading zeros, so that a byte has fewer than eight bits and the groups no longer line up.
- Splitting a binary number into groups of four **from the left** when it has fewer than eight bits. Add zeros
  on the left first.
- Treating hex digits as separate decimal numbers, for example reading **3C** as "3 and C is 12" and writing
  312.
- Forgetting that hex digits go up to **F (15)**, and writing 10, 11 or 12 as a "digit".
- Multiplying the right-hand hex digit by 16 instead of the left.
- Using place values that are not powers of 2, for example 1, 2, 3, 4, 5.
- Making an arithmetic slip in the subtraction. Check by adding up the place values you used.

## Exam technique

- **Show your working.** A wrong answer with correct working often still earns method marks.
- Write the **place values** above the bits in the answer space.
- Conversion marks are given for each nibble or each correct stage, so do **not** skip the nibble split.
- Write hex letters in **capitals** and keep to **two** hex digits for a byte.
- If a question gives both the binary and hex forms, use the one that makes the conversion shortest. Binary to hex
  and hex to binary need no division.

## Next steps

For a condensed summary and self-test, use the [Converting between number bases revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases-revision-notes/), and
practise with the [Converting between number bases practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases-practice/).
