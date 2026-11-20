---
title: "AQA A-Level Computer Science (7517): Binary number system -- Revision Notes"
seoTitle: "AQA A-Level CS Binary Number System Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "binary-number-system-7517"
description: "Condensed AQA 7517 section 4.5.4 recall: unsigned and two's complement binary, fixed and floating point, errors, normalisation, overflow and underflow."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.5.4 Binary number system**, AQA A-Level Computer Science (7517). Worked explanations are in the [binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/); exam-style questions are in the [binary number system practice questions](/resources/aqa-a-level-computer-science-7517-binary-number-system-practice/).

## Unsigned binary

- No sign bit. With n bits, the minimum is **0** and the maximum is **2ⁿ − 1** (8 bits: 0 to 255).
- **Add** column by column with carries: 1 + 1 = 10, 1 + 1 + 1 = 11.
- **Multiply** by shifting and adding: for each 1 in the multiplier, add the multiplicand shifted left by that position.
- A carry out of the top bit means **overflow**: the stored result is wrong.

**Checks.** 01101011 + 00111101 = 10101000 (107 + 61 = 168). 1011 × 101 = 110111 (11 × 5 = 55). 200 + 100 in 8 bits gives 00101100 (44) and a carry out: overflow.

## Two's complement

- The most significant bit has a **negative** place value (8 bits: −128, 64, 32, 16, 8, 4, 2, 1).
- Range for n bits: **−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1**. 8 bits: −128 to 127. 4 bits: −8 to 7. 16 bits: −32768 to 32767.
- **Make a negative number:** write the positive value, **invert** the bits, **add 1**. −45: 00101101, 11010010, **11010011**.
- **Read a number:** add place values with the top bit negative. 10110100 = −128 + 32 + 16 + 4 = **−76**.
- **Subtract:** add the two's complement of the second number and **ignore the carry out**. 52 − 19: 00110100 + 11101101 = (1) 00100001 = 33.
- **Overflow:** two positives that give a negative (or two negatives that give a positive) signal an overflow. 01100100 + 00111100 = 10100000 = −96, not 160.

## Fractions: fixed point

- The binary point is at a **fixed position**. Example: 4 bits before and 4 after.
- Place values: 8, 4, 2, 1 . 0.5, 0.25, 0.125, 0.0625 (top bit negative in two's complement).
- 0110.1100 = 6.75. 5.625 = 0101.1010. −2.25 = 1101.1100.

## Fractions: floating point

- **Value = mantissa × 2^exponent.** The simplified AQA form has **mantissa and exponent both in two's complement**.
- Example format: 8-bit mantissa with the binary point after the first bit, and 4-bit exponent (−8 to 7).
- 01101000 (0.8125) with exponent 0011 (3): 0.8125 × 8 = **6.5**.
- 10.25 = 1010.01 = 0.101001 × 2⁴: mantissa 01010010, exponent 0100.
- −6.5: mantissa 10011000 (the two's complement of 01101000), exponent 0011.

## Normalisation

- **Normalised** means the mantissa starts **01** (positive) or **10** (negative).
- **Why:** maximum precision for the bits available, and one unique representation of each value.
- **How:** shift the mantissa **left** until it starts 01 or 10; **subtract 1 from the exponent** for each shift. The value does not change.
- 00011010, exponent 0100 becomes 01101000, exponent 0010 (both 3.25).
- 11100110, exponent 0011 becomes 10011000, exponent 0001 (both −1.625).

## Errors

| Idea | Fact |
|---|---|
| Rounding error | Only values that are sums of powers of 2 within the bits can be exact. **0.1₁₀ cannot be represented exactly** in binary (it recurs: 0.0001100110011…). Fixed and floating point can both be inaccurate |
| Absolute error | \|actual − stored\| |
| Relative error | absolute error ÷ \|actual\|, often as a percentage |
| Large numbers | A given absolute error is a small relative error |
| Small numbers | The same absolute error is a large relative error |
| Numbers near one | Absolute and relative errors are similar in size |

**Example.** 0.1 stored as 0.0625: absolute error 0.0375, relative error 0.375 (37.5%). 0.1 stored with 8 fractional bits as 0.09765625: absolute error about 0.0023, relative error about 2.3%.

## Range and precision

| | Fixed point | Floating point |
|---|---|---|
| Range | Small | Large |
| Precision | Constant spacing | Varies with size |
| Speed | Faster | Slower |
| Trade-off | None between range and precision at a fixed size | More exponent bits give more **range**; more mantissa bits give more **precision** |

## Overflow and underflow

- **Overflow:** the result is too large to represent.
- **Underflow:** the result is too close to zero to represent, usually stored as zero.

## Exam traps

- **Forgetting +1** after inverting.
- **Keeping the carry** in two's complement subtraction.
- **Range of two's complement** given as 0 to 2ⁿ − 1.
- **Normalising to the right**, or changing the exponent the wrong way.
- **Mantissa starting 00 or 11** called normalised.
- **Relative error** divided by the stored value instead of the actual value.
- **Claiming floating point is exact.**

## Key terms

| Term | Definition |
|---|---|
| Unsigned binary | Binary with no sign; every bit has a positive place value |
| Two's complement | A signed form in which the top bit has a negative place value |
| Fixed point | A binary fraction form with the point at an agreed fixed position |
| Floating point | A form using a mantissa and an exponent |
| Mantissa | The digits of a floating point number |
| Exponent | The power of 2 by which the mantissa is multiplied |
| Normalisation | Shifting the mantissa so it starts 01 or 10, adjusting the exponent |
| Overflow | A result too large for the bits available |
| Underflow | A result too small in size for the bits available |

## Self-test

1. State the range of 6-bit unsigned binary.
2. State the range of 6-bit two's complement.
3. Write −12 in 8-bit two's complement.
4. Give the decimal value of 11110000 in two's complement.
5. What is wrong with 01110000 + 00110000 in 8-bit two's complement?
6. Give the value of 0101.1000 in fixed point (4.4 form).
7. Why is 00110000 not a normalised mantissa?
8. State the formula for relative error.
9. Give one advantage and one disadvantage of floating point against fixed point.
10. What is underflow?

**Answers**

1. 0 to 63.
2. −32 to 31.
3. 12 = 00001100; inverted 11110011; plus 1 gives 11110100.
4. −128 + 64 + 32 + 16 = −16.
5. The sum is 10100000, which is negative. Two positives gave a negative, so overflow has occurred (112 + 48 = 160 is out of range).
6. 4 + 1 + 0.5 = 5.5.
7. It starts 00, not 01 or 10, so bits are wasted on a leading zero.
8. Absolute error ÷ actual value.
9. Advantage: much larger range. Disadvantage: slower and more complex calculation (accept lower or varying precision for large values).
10. A result too close to zero to be represented, usually stored as zero.

## Related resources

- [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)
- [Binary number system practice questions](/resources/aqa-a-level-computer-science-7517-binary-number-system-practice/)
- [Number bases revision notes](/resources/aqa-a-level-computer-science-7517-number-bases-revision-notes/)
- [Information coding systems revision notes](/resources/aqa-a-level-computer-science-7517-information-coding-systems-revision-notes/)
