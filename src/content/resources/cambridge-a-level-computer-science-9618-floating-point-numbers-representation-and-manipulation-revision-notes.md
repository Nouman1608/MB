---
title: "Cambridge A Level Computer Science (9618): Floating-point Numbers, Representation and Manipulation -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13: Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 13.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "floating-point-numbers-representation-and-manipulation"
description: "Revision notes for 9618 section 13.3: mantissa and exponent, conversions, normalisation, range and precision, rounding errors and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 13.3 Floating-point numbers, representation and manipulation, A Level content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 3. You need the two's complement floating-point format, conversions in both directions, normalisation and its reasons, the effect of the bit allocation, and the consequences of approximation: rounding errors, overflow and underflow.

Related: [Floating-point study guide](/resources/cambridge-a-level-computer-science-9618-floating-point-numbers-representation-and-manipulation/) · [Floating-point practice questions](/resources/cambridge-a-level-computer-science-9618-floating-point-numbers-representation-and-manipulation-practice/) · [Data Representation (A Level) revision notes](/resources/a-level-computer-science-data-representation-a-level-revision-notes/)

## Format

- value = mantissa × 2^exponent; both in **two's complement**.
- Binary point straight after the first mantissa bit.
- 8-bit mantissa place values: −1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128.
- 4-bit exponent place values: −8, 4, 2, 1 (range −8 to +7).

## Floating point to denary

1. Exponent to denary.
2. Mantissa to a fraction (first bit is −1).
3. Multiply by 2^exponent, or move the point.

Examples (8-bit mantissa, 4-bit exponent):

| Mantissa | Exponent | Working | Value |
|---|---|---|---|
| 01001100 | 0011 (+3) | (1/2 + 1/16 + 1/32) × 8 = 0.59375 × 8 | 4.75 |
| 10010000 | 0010 (+2) | (−1 + 1/8) × 4 = −0.875 × 4 | −3.5 |
| 01100000 | 1101 (−3) | (1/2 + 1/4) × 1/8 = 0.75 ÷ 8 | 0.09375 |

## Denary to normalised floating point

1. Magnitude to binary fixed point.
2. Move the point to give 0.1...; places moved = exponent (left positive, right negative).
3. Negative number: two's complement of the positive mantissa.
4. Check the first two mantissa bits differ; write the exponent in two's complement.

Examples: +3.625 = 11.101 = 0.11101 × 2² → mantissa 01110100, exponent 0010. −0.6875: +0.6875 = 0.1011000; two's complement 1.0101000; already normalised → mantissa 10101000, exponent 0000.

## Normalisation

- Positive normalised mantissa starts **01**; negative starts **10**.
- Shift the mantissa left until the first two bits differ; **subtract 1 from the exponent for each shift**.
- Example: 00001101, exponent 0110 → shift 3 → 01101000, exponent 0011 (both 6.5).
- Reasons: **maximum precision** (no wasted leading bits) and a **unique representation** of each value.

## Bit allocation

- More mantissa bits → more **precision**.
- More exponent bits → more **range**.
- 8-bit mantissa, 4-bit exponent: largest 127; most negative −128; smallest positive normalised 1/512.

## Approximation

- Many denary fractions have no exact binary form (0.1 = 0.000110011... recurring).
- 0.1 stored with an 8-bit mantissa: 01100110, exponent 1101 = 0.099609375, a **rounding error**.
- Errors can accumulate over repeated calculations; exact equality tests on reals can fail.
- **Overflow**: result too large in magnitude for the exponent.
- **Underflow**: result too close to zero for the smallest normalised value; stored as 0.

## One conversion in full: −5.25

1. 5.25 = 101.01.
2. 101.01 = 0.10101 × 2³, so the exponent is +3 (0011) and the positive mantissa is 0.1010100.
3. Two's complement: invert to 1.0101011, add 1 in the last place: 1.0101100.
4. It starts 10, so it is normalised: mantissa 10101100, exponent 0011.
5. Check: (−1 + 1/4 + 1/16 + 1/32) × 8 = −0.65625 × 8 = −5.25.

## Range and precision in numbers

| Mantissa / exponent (12 bits) | Largest positive | Smallest positive normalised |
|---|---|---|
| 8 / 4 | 127 | 2⁻⁹ (1/512) |
| 6 / 6 | 0.11111 × 2³¹ | 2⁻³³ |

The 6 / 6 split reaches far larger and smaller magnitudes, but keeps only five fraction bits, so values close together cannot be told apart.

## Key terms

| Term | Meaning |
|---|---|
| Mantissa | The part holding the significant digits, with the point after its first bit |
| Exponent | The power of 2 that the mantissa is multiplied by |
| Normalised | First two mantissa bits differ (01 or 10) |
| Precision | How many significant bits are kept; set by the mantissa length |
| Range | The spread from smallest to largest magnitudes; set by the exponent length |
| Rounding error | The difference between a value and its nearest stored representation |
| Overflow | A result too large to be represented |
| Underflow | A non-zero result too small in magnitude to be represented |

## Exam traps

- The first mantissa bit is worth −1, not +1.
- Negative exponent: the point moves left; the value gets smaller.
- Shift left → exponent goes down.
- Negative normalised mantissas start 10, not 11.
- Use two's complement for negatives, not sign and magnitude.
- Precision is the mantissa; range is the exponent.

## Self-test

1. What is the denary value of the exponent 1011?
2. Convert mantissa 01100000, exponent 0011, to denary.
3. Convert mantissa 10100000, exponent 0011, to denary.
4. Is 11010000 a normalised mantissa?
5. Normalise mantissa 00110000, exponent 0010.
6. Write +1.5 as a normalised 8-bit mantissa and 4-bit exponent.
7. Write −2 as a normalised 8-bit mantissa and 4-bit exponent.
8. State two reasons for normalising.
9. What is gained by moving a bit from the exponent to the mantissa?
10. Give the largest positive value with an 8-bit mantissa and 4-bit exponent.
11. Why might IF Total = 0.3 be FALSE after adding 0.1 three times?
12. What is underflow?

**Answers:** 1. −8 + 2 + 1 = −5. 2. 0.75 × 8 = 6. 3. (−1 + 0.25) × 8 = −6. 4. No: it starts 11. 5. Shift left 1: 01100000, exponent 0001 (value 0.75 × 2 = 1.5 both ways). 6. 1.5 = 1.1 = 0.11 × 2¹: mantissa 01100000, exponent 0001. 7. −2 = −1 × 2¹: mantissa 10000000, exponent 0001. 8. Maximum precision for the bits available; a unique representation of each value. 9. Precision increases (and range decreases). 10. 0.1111111 × 2⁷ = 127. 11. 0.1 cannot be stored exactly, so the rounding errors make the total slightly different from the stored value of 0.3. 12. A result closer to zero than the smallest representable normalised value, so it cannot be stored and becomes 0.
