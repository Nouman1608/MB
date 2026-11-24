---
title: "OxfordAQA A-Level Computer Science (9645): The binary number system -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Binary Number System Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "the-binary-number-system-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.3: unsigned and two's complement, fixed and floating point, errors, overflow, normalisation and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.3 The binary number system** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For worked examples, see the [binary number system study guide](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system/); then practise with the [binary number system practice questions](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-practice/).

## What the specification requires

| Ref | Requirement |
|---|---|
| 3.5.3.1 | Difference between unsigned and signed binary; unsigned range 0 to 2^n − 1 |
| 3.5.3.2 | Add and multiply unsigned binary integers |
| 3.5.3.3 | Two's complement: represent positive and negative integers, subtract, range of *n* bits (−2^(n−1) to +2^(n−1) − 1) |
| 3.5.3.4 | Fixed and floating point: convert decimal to binary and binary to decimal in a given format; mantissa bits give precision, exponent bits give range |
| 3.5.3.5 | Why fixed and floating point may be inaccurate (for example 0.1 can never be exact) |
| 3.5.3.6 | Calculate absolute and relative error; explain why relative error is more useful |
| 3.5.3.7 | Explain overflow and underflow |
| 3.5.3.8 | Compare fixed and floating point: range, precision, speed |
| 3.5.3.9 | Why normalise; normalise positive and negative mantissas |

## Key terms

| Term | Meaning |
|---|---|
| Unsigned | Binary with no negative values |
| Two's complement | Signed binary where the top bit has a negative place value |
| Mantissa | The significant digits of a floating point number |
| Exponent | The power of 2 by which the mantissa is multiplied |
| Normalised | A mantissa that starts 01 (positive) or 10 (negative) |
| Absolute error | The size of the difference between actual and stored values |
| Relative error | Absolute error divided by the actual value |
| Overflow | A result too large to represent |
| Underflow | A result so near zero that it is stored as zero |

## Unsigned binary

- *n* bits: 0 to 2^n − 1 (8 bits: 0 to 255; 6 bits: 0 to 63; 10 bits: 0 to 1,023).
- Addition rules per column: 1 + 1 = 10; 1 + 1 + 1 = 11.
- Multiplication: shift and add. 1011 × 110 = 10110 + 101100 = 1000010 (11 × 6 = 66).
- Recomputed: 00110111 + 01001110 = 10000101 (55 + 78 = 133).

## Two's complement

Place values in 8 bits: −128, 64, 32, 16, 8, 4, 2, 1.

| Bits | Range |
|---|---|
| 4 | −8 to 7 |
| 6 | −32 to 31 |
| 8 | −128 to 127 |
| 10 | −512 to 511 |
| 16 | −32,768 to 32,767 |

**Negative numbers.** Write the positive value, invert all bits, add 1. For −92: 92 is 01011100, inverted 10100011, plus 1 is **10100100**.

**To decimal.** 11100101 = −128 + 64 + 32 + 4 + 1 = −27. 10001010 = −128 + 8 + 2 = −118.

**Subtraction.** Add the two's complement and discard any carry out. 52 − 77: 00110100 + 10110011 = 11100111 = −25.

## Fixed point (8 bits, 4 after the point, two's complement)

| Binary | Value |
|---|---|
| 0101.1010 | 5.625 |
| 0011.0111 | 3.4375 |
| 1110.1000 | −1.5 |
| 1010.0000 | −6.0 |

## Floating point (8-bit mantissa with the point after the first bit, 4-bit exponent)

Value = mantissa × 2^exponent.

| Mantissa | Exponent | Value |
|---|---|---|
| 01011000 | 0010 | 0.6875 × 4 = 2.75 |
| 01111000 | 0011 | 0.9375 × 8 = 7.5 |
| 11110000 | 0100 | −0.125 × 16 = −2 |
| 01000000 | 1111 | 0.5 × 2^(−1) = 0.25 |

To encode 6.5: 6.5 = 110.1 = 0.1101 × 2^3, so mantissa 01101000, exponent 0011. To encode −5: 5 = 0.101 × 2^3, so −5 is mantissa 10110000 (−0.625) with exponent 0011.

More mantissa bits give more **precision**; more exponent bits give a larger **range**.

## Normalisation

Shift the mantissa left until it starts 01 (positive) or 10 (negative), subtracting 1 from the exponent for each shift. The value does not change.

| Before | After | Value |
|---|---|---|
| 00101100, exp 0011 | 01011000, exp 0010 | 2.75 |
| 00010100, exp 0101 | 01010000, exp 0011 | 5 |
| 11110000, exp 0100 | 10000000, exp 0001 | −2 |

Why: maximum precision and a unique representation.

## Errors

| | Formula |
|---|---|
| Absolute error | \|actual − stored\| |
| Relative error | absolute error ÷ actual |

Examples: 0.3 stored as 0.3125 has absolute error 0.0125 and relative error 0.0417 (about 4.2%). 12.3 stored as 12.3125 has the same absolute error but a relative error of about 0.1%. **Relative error shows how serious the error is compared with the size of the number**, so it is the more useful measure.

Rounding errors arise because many decimal fractions (0.1, 0.3) are not exact binary fractions.

## Overflow and underflow

- **Overflow.** 90 + 60 = 150 in 8-bit two's complement gives 10010110 = −106. The result is too large for the available bits.
- **Underflow.** A result between zero and the smallest representable positive number is stored as zero.

## Fixed against floating point

| | Fixed | Floating |
|---|---|---|
| Range | Smaller | Larger |
| Precision | Same absolute precision everywhere | Higher for small numbers |
| Speed | Faster | Slower |

## Exam traps

- **Add 1 after inverting.**
- **Discard the carry out** in subtraction.
- **Top bit is negative:** −128 in 8 bits, not "a sign".
- **Mantissa is precision; exponent is range.**
- **Normalise by shifting left** and reducing the exponent.
- **Relative error** needs the division by the actual value.
- **State the number of bits** and keep to it.

## Quick self-test

1. State the unsigned range of 12 bits.
2. State the two's complement range of 10 bits.
3. Write −19 as 8-bit two's complement.
4. What does 11100101 represent in two's complement?
5. Add 00110111 and 01001110.
6. Multiply 1011 by 110.
7. Write 3.4375 in 8-bit fixed point with 4 bits after the point.
8. Why can 0.1 never be stored exactly?
9. Calculate the relative error for 0.3 stored as 0.3125 (give 2 decimal places).
10. Explain overflow.
11. Why are floating point numbers normalised?
12. Normalise 00101100 with exponent 0011.

### Answers

1. 0 to 4,095.
2. −512 to 511.
3. 11101101.
4. −27.
5. 10000101.
6. 1000010.
7. 0011.0111.
8. Its binary expansion repeats forever, so it cannot fit in a fixed number of bits.
9. 0.0125 ÷ 0.3 = 0.04.
10. The result is too large to be represented in the available bits.
11. For maximum precision and a unique representation.
12. 01011000 with exponent 0010.

## More on this topic

- [Binary number system study guide](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system/)
- [Binary number system practice questions](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-practice/)
- [Number bases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.3 The binary number system.
