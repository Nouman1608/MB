---
title: "AQA A-Level Computer Science (7517): Binary number system"
seoTitle: "AQA A-Level CS Binary Number System Study Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.5.4 Binary number system: unsigned and two's complement binary, fixed and floating point, rounding and relative errors, normalisation, overflow and underflow."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.5.4 Binary number system** in AQA A-Level Computer Science (7517). It has nine content blocks: unsigned binary (4.5.4.1), unsigned binary arithmetic (4.5.4.2), signed binary using two's complement (4.5.4.3), numbers with a fractional part in fixed and floating point (4.5.4.4), rounding errors (4.5.4.5), absolute and relative errors (4.5.4.6), range and precision (4.5.4.7), normalisation of floating point form (4.5.4.8) and underflow and overflow (4.5.4.9).

The wider [fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) covers all of section 4.5. Condensed notes are in the [binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/), and exam-style questions are in the [binary number system practice questions](/resources/aqa-a-level-computer-science-7517-binary-number-system-practice/). The base conversions used here are explained in the [number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/).

## Unsigned binary

In **unsigned binary** every bit is a place value and there is no sign. With n bits the minimum value is **0** and the maximum is **2ⁿ − 1**. For 8 bits that is 0 to 255. **Signed binary** reserves a way to show negative numbers, and the only scheme examined is two's complement.

### Unsigned addition

Add column by column from the right, with a carry. 1 + 1 = 10₂ (write 0, carry 1) and 1 + 1 + 1 = 11₂ (write 1, carry 1).

```
  01101011   (107)
+ 00111101   (61)
  --------
  10101000   (168)
```

If the result needs more bits than are available, a carry out of the left-hand bit is lost and the stored answer is wrong. 11001000 (200) plus 01100100 (100) is 300, which does not fit in 8 bits (the maximum is 255). The stored result is 00101100 (44, which is 300 − 256) with a carry out. That is an **overflow**.

### Unsigned multiplication

Multiply as in long multiplication: for each 1 bit in the multiplier, write the multiplicand shifted left by that bit's position, then add the rows.

1011 (11) × 101 (5):

```
      1011      (× 1)
     00000      (× 0, shifted one place)
    101100      (× 1, shifted two places)
   -------
    110111      (55)
```

1011 + 101100 = 110111 = 32 + 16 + 4 + 2 + 1 = 55 ✓. Shifting left by one place doubles a number.

## Signed binary: two's complement

In **two's complement** the most significant bit has a **negative** place value. In 8 bits the place values are −128, 64, 32, 16, 8, 4, 2, 1. The range for n bits is **−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1**, so 4 bits give −8 to 7, 8 bits give −128 to 127 and 16 bits give −32768 to 32767.

**Decimal to two's complement.** For a positive number write it in binary with a leading 0. For a negative number, write the positive value, **invert every bit**, then **add 1**.

−45 in 8 bits: 45 = 00101101; inverted 11010010; add 1 gives **11010011**. Check: −128 + 64 + 16 + 2 + 1 = −45 ✓.

**Two's complement to decimal.** Add the place values with the sign bit as negative. 10110100 = −128 + 32 + 16 + 4 = **−76**.

**Subtraction.** To calculate a − b, add the two's complement of b to a, and ignore any carry out of the left-hand bit.

52 − 19: 52 = 00110100. −19: 19 = 00010011; inverted 11101100; add 1 gives 11101101.

```
  00110100
+ 11101101
  --------
 100100001  → discard the carry out → 00100001 = 33
```

**Overflow in two's complement.** 100 + 60 = 160 is outside −128 to 127. The sum of 01100100 and 00111100 is 10100000, which reads as −96. Adding two positives and getting a negative signals overflow.

## Numbers with a fractional part

### Fixed point

In **fixed point** form the binary point sits at a **fixed position** that is agreed in advance. Suppose 8 bits are split as 4 bits before the point and 4 after. Place values: 8, 4, 2, 1 then 0.5, 0.25, 0.125, 0.0625 (with the first bit negative in two's complement).

- 0110.1100 = 4 + 2 + 0.5 + 0.25 = **6.75**.
- 5.625 = 4 + 1 + 0.5 + 0.125 = **0101.1010**.
- −2.25: 2.25 = 0010.0100; invert 1101.1011; add 1 (at the last place) 1101.1100. Check: −8 + 4 + 1 + 0.5 + 0.25 = −2.25 ✓.

### Floating point

**Floating point** stores a number as a **mantissa** (the significant digits) and an **exponent** (the power of 2), so that value = mantissa × 2^exponent. The binary point "floats". The specification uses a simplified format in which **both mantissa and exponent are in two's complement**, and you do not need the IEEE standard.

In this guide the mantissa has 8 bits with the binary point after the first bit (so the first bit has place value −1, then 0.5, 0.25, …) and the exponent has 4 bits (range −8 to 7). Exam questions state their own format.

**Binary to decimal.** Mantissa 01101000 is 0.1101000 = 0.5 + 0.25 + 0.0625 = 0.8125. Exponent 0011 is 3. Value = 0.8125 × 2³ = **6.5**.

**Decimal to floating point.** Convert 10.25. In binary 1010.01. Move the point to just after the leading bit: 0.101001 × 2⁴. Mantissa 01010010, exponent 0100.

**Negative number.** −6.5: 6.5 has mantissa 01101000 and exponent 0011. Take the two's complement of the mantissa: invert 10010111, add 1 gives **10011000** (−1 + 0.125 + 0.0625 = −0.8125). The exponent stays 0011. Value = −0.8125 × 8 = −6.5 ✓.

## Normalisation

A floating point number is **normalised** if its mantissa starts **01** (positive) or **10** (negative). Normalising has two purposes: it gives the **maximum precision** for the number of mantissa bits (no bits are wasted on leading zeros or ones), and it gives every value a **unique** representation, which makes comparison easier.

To normalise, **shift the mantissa left** until it starts 01 or 10, and **subtract 1 from the exponent for each shift**. The value stays the same.

- Mantissa 00011010, exponent 0100 (value 0.203125 × 16 = 3.25). Shift left twice: 01101000, exponent 0010. Value 0.8125 × 4 = 3.25 ✓.
- Negative: 11100110, exponent 0011 (−0.203125 × 8 = −1.625). Shift left twice: 10011000, exponent 0001. Value −0.8125 × 2 = −1.625 ✓.

## Rounding errors

A number can be stored exactly only if it is a sum of powers of 2 that fit in the available bits. Many decimal fractions are not. **0.1₁₀ cannot be represented exactly in binary**, because it is 0.0001100110011… repeating for ever. With four bits after the point the nearest stored values are 0.0625 and 0.125, so the stored value is wrong. More bits give a closer approximation but never an exact one. This is why a calculation such as repeatedly adding 0.1 can drift from the expected total.

## Absolute and relative errors

- **Absolute error** = |actual value − stored value|.
- **Relative error** = absolute error ÷ |actual value| (often shown as a percentage).

Storing 0.1 as 0.0625 gives an absolute error of 0.0375 and a relative error of 0.375, or 37.5%. With eight fractional bits 0.1 is stored as 0.09765625, an absolute error of about 0.0023 and a relative error of about 2.3%.

The same size of error matters differently at different magnitudes. An absolute error of 0.5 in a value of 1000 has a relative error of 0.0005 (0.05%). An absolute error of 0.0005 in a value of 0.004 has a relative error of 0.125 (12.5%). So for **large numbers** a given absolute error is small in relative terms, for **small numbers** it is large, and for numbers **close to one** the absolute and relative errors are about the same size. Relative error is the better measure of how serious an error is.

## Range and precision

**Range** is the span from the smallest to the largest value. **Precision** is how finely values can be distinguished (the number of significant bits).

| | Fixed point | Floating point |
|---|---|---|
| Range | Small, limited by the bits before the point | Very large, set by the exponent |
| Precision | Same absolute spacing everywhere | Spacing varies; better for small numbers, coarser for large |
| Speed of calculation | Fast and simple (integer hardware) | Slower and more complex |
| Typical use | Money, embedded and signal processing | Science, graphics, general calculation |

With a fixed number of bits, a floating point format must **trade range against precision**: more exponent bits give more range, and more mantissa bits give more precision. In the format above the largest positive value is 0.1111111 × 2⁷ = 127, and the smallest positive normalised value is 0.1 × 2⁻⁸ = 0.001953125.

## Underflow and overflow

- **Overflow** happens when the result of a calculation is too large to represent, for example a positive exponent beyond 7 in the format above. The stored result is wrong or an error is raised.
- **Underflow** happens when a result is too close to zero to represent, for example a number needing an exponent below −8. It is usually stored as zero, losing the information.

Both result from a finite number of bits being used for the mantissa and exponent.

## Common mistakes

- Giving the range of n-bit two's complement as 0 to 2ⁿ − 1, or forgetting that −2ⁿ⁻¹ has no positive partner.
- Forgetting to add 1 after inverting the bits.
- Not discarding the carry out of the left-hand bit in a two's complement subtraction.
- Shifting a mantissa right instead of left to normalise, or changing the exponent in the wrong direction.
- Calling a negative mantissa normalised when it begins 11 or a positive one normalised when it begins 00.
- Calculating relative error with the stored value instead of the actual value.
- Claiming that floating point stores all values exactly.

## Exam technique

- **Show the stages** in a conversion: invert, add 1, check.
- **Check** a result by converting back using place values.
- **State the format** you are assuming if the question has not fixed one.
- **Discuss error** by naming the cause (limited bits, non-terminating binary fraction) and its effect.

## Related resources

- [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)
- [Binary number system practice questions](/resources/aqa-a-level-computer-science-7517-binary-number-system-practice/)
- [Number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/)
- [Units of information study guide](/resources/aqa-a-level-computer-science-7517-units-of-information/)

*Written against the AQA A-level Computer Science (7517) specification, 4.5.4 Binary number system. Always check the current specification on the AQA website.*
