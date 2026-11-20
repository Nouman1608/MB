---
title: "OxfordAQA A-Level Computer Science (9645): The binary number system"
seoTitle: "OxfordAQA A-Level CS 9645 Binary Number System Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.3 in depth: unsigned and two's complement binary, fixed and floating point, errors, overflow and normalisation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.3 The binary number system** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). It has nine numbered parts: unsigned binary (3.5.3.1), unsigned binary arithmetic (3.5.3.2), signed binary using two's complement (3.5.3.3), numbers with a fractional part (3.5.3.4), rounding errors (3.5.3.5), absolute and relative errors (3.5.3.6), underflow and overflow (3.5.3.7), comparing fixed and floating point (3.5.3.8) and normalisation (3.5.3.9).

For quick recall use the [binary number system revision notes](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-revision-notes/), then try the [binary number system practice questions](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. Every calculation below was recomputed with a script.

## 3.5.3.1 Unsigned binary

**Unsigned binary** represents only zero and positive whole numbers. Every bit is a place value, so the bits give 1, 2, 4, 8, ... from the right. In *n* bits the minimum is **0** and the maximum is **2^n − 1**. In 8 bits that is 0 to 255; in 16 bits it is 0 to 65,535. **Signed binary** uses some of the patterns for negative numbers.

## 3.5.3.2 Unsigned binary arithmetic

### Addition

Add column by column from the right. The rules for each column are 0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 10 (write 0, carry 1); 1 + 1 + 1 = 11 (write 1, carry 1).

**Add 01101101 (109) and 00111011 (59).**

| Bit position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|
| Carry in | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| First number | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| Second number | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 |
| Sum | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 |

The result is **10101000**, which is 168 = 109 + 59.

### Multiplication

Binary multiplication uses shift and add. For each 1 in the multiplier, write the multiplicand shifted left by that bit's position, then add the rows.

**Multiply 1101 (13) by 101 (5).** The multiplier has 1s in positions 0 and 2. Row 1 is 1101. Row 2 is 1101 shifted left two places, 110100. The sum 1101 + 110100 = **1000001**, which is 65 = 13 × 5.

## 3.5.3.3 Signed binary using two's complement

**Two's complement** is the only signed representation examined. The most significant bit has a **negative** place value. In 8 bits the column values are −128, 64, 32, 16, 8, 4, 2, 1.

The range of *n* bits is **−2^(n−1) to +2^(n−1) − 1**.

| Bits | Range |
|---|---|
| 4 | −8 to +7 |
| 8 | −128 to +127 |
| 12 | −2,048 to +2,047 |
| 16 | −32,768 to +32,767 |

### From two's complement to decimal

Add the column values, counting the leftmost as negative. 10110011 = −128 + 32 + 16 + 2 + 1 = **−77**. Also 11111111 = **−1**, 10000000 = **−128**, 01111111 = **+127** and 11001001 = **−55**. A leading 1 shows a negative number.

### From decimal to two's complement

For a positive number, write ordinary binary with a leading 0: 45 is 00101101.

For a negative number, write the positive value in binary, then **invert every bit and add 1**.

| Step | −45 in 8 bits |
|---|---|
| Positive 45 | 00101101 |
| Invert all bits | 11010010 |
| Add 1 | **11010011** |

Check: −128 + 64 + 16 + 2 + 1 = −45. Other values: −100 is 10011100; −37 is 11011011; −1 is 11111111.

### Subtraction using two's complement

To compute *a* − *b*, add *a* to the two's complement of *b*, and **ignore any carry out** of the top bit.

**75 − 42 in 8 bits.** 75 is 01001011. 42 is 00101010, so −42 is 11010110. Adding gives 01001011 + 11010110 = 1 00100001. Discarding the carry out leaves **00100001** = 33.

**60 − 85 in 8 bits.** 60 is 00111100. 85 is 01010101, so −85 is 10101011. The sum is **11100111**, which is −128 + 64 + 32 + 4 + 2 + 1 = **−25**. No carry was produced and the answer is correct.

## 3.5.3.4 Numbers with a fractional part

### Fixed point

In **fixed point** the binary point sits in a fixed place, set by the format. In an 8-bit two's complement format with 4 bits after the point, the column values are −8, 4, 2, 1, 1/2, 1/4, 1/8, 1/16.

| Binary | Working | Value |
|---|---|---|
| 0110.1100 | 4 + 2 + 0.5 + 0.25 | 6.75 |
| 0001.0101 | 1 + 0.25 + 0.0625 | 1.3125 |
| 1111.0100 | −8 + 4 + 2 + 1 + 0.25 | −0.75 |

To convert 5.3125: the whole part 5 is 0101; the fraction 0.3125 = 1/4 + 1/16, which is 0101. So the answer is 0101.0101. To convert −2.5, write 2.5 = 0010.1000, invert (1101.0111) and add 1 at the last place: **1101.1000**.

### Floating point

**Floating point** stores a **mantissa** and an **exponent**. The value is mantissa × 2^exponent. The specification says exam questions use a format where both are in two's complement, and you will not need the IEEE standard. The examples here use an 8-bit mantissa with the binary point after the first bit (so it is a value from −1 to just under 1) and a 4-bit exponent.

| Mantissa | Exponent | Working | Value |
|---|---|---|---|
| 01101000 | 0011 | 0.8125 × 2^3 | 6.5 |
| 01010100 | 0011 | 0.65625 × 2^3 | 5.25 |
| 10010000 | 0010 | −0.875 × 2^2 | −3.5 |
| 01100000 | 1110 | 0.75 × 2^(−2) | 0.1875 |

To encode 5.25: 5.25 is 101.01 in binary, which is 0.10101 × 2^3. The mantissa is 01010100 and the exponent 3 is 0011.

In floating point the **number of mantissa bits sets the precision** and the **number of exponent bits sets the range**.

## 3.5.3.5 Rounding errors

A real number can be stored exactly only if it is a binary fraction that fits in the available bits. Some values can **never** be exact, for example 0.1, whose binary expansion 0.000110011001... repeats forever. With 4 bits after the point, 0.1 is stored as 0.125 (the nearest). Both fixed point and floating point can therefore be inaccurate. Python's `0.1 + 0.2` giving `0.30000000000000004` is the same effect.

## 3.5.3.6 Absolute and relative errors

**Absolute error** = |actual value − stored value|. **Relative error** = absolute error ÷ actual value (often a percentage).

| Actual | Stored | Absolute error | Relative error |
|---|---|---|---|
| 0.1 | 0.125 | 0.025 | 0.25 (25%) |
| 100.1 | 100.125 | 0.025 | 0.00025 (0.025%) |

Both have the same absolute error, but the relative error shows that the error matters hugely for 0.1 and hardly at all for 100.1. This is why **relative error is the more useful measure**: it shows the size of the error compared with the size of the number.

## 3.5.3.7 Underflow and overflow

**Overflow** occurs when a result is too large to be represented in the available bits. For example 200 + 100 = 300 does not fit in 8 unsigned bits. In 8-bit two's complement, 100 + 50 is 01100100 + 00110010 = 10010110, which reads as −106, so the result is wrong. **Underflow** occurs when a result is so close to zero that its closest representation is zero. In the floating point format above, the smallest normalised positive number is 0.5 × 2^(−8) = 0.001953125, and the largest is about 127.0. A result smaller than the least value may be stored as 0.

## 3.5.3.8 Comparing fixed and floating point

| | Fixed point | Floating point |
|---|---|---|
| Range | Small for the number of bits | Much larger, because of the exponent |
| Precision | Same absolute precision everywhere | Greater precision for small numbers; set by the mantissa |
| Speed of calculation | Faster and simpler (integer arithmetic) | Slower and more complex |

## 3.5.3.9 Normalisation of floating point form

A floating point number is **normalised** when its mantissa starts with **01** (positive) or **10** (negative). This gives the **maximum precision** for the number of mantissa bits and a **unique representation**, so values compare easily.

To normalise, **shift the mantissa left** until it starts 01 or 10, and **subtract 1 from the exponent for each shift**.

- Positive: 00011010 with exponent 0100 (value 3.25). Shift left 2 places: 01101000; exponent 4 − 2 = 2, which is 0010. Value is 0.8125 × 4 = 3.25.
- Negative: 11100100 with exponent 0101 (value −7). Shift left 2 places: 10010000; exponent 5 − 2 = 3, which is 0011. Value is −0.875 × 8 = −7.

Normalising never changes the value.

## Exam technique

- **Show each step**: inverted bits, the added 1, carries.
- **State the number of bits** and keep to it.
- **For errors,** give the formula, then the numbers.
- **For overflow,** say what is too large for the bits available.

## Common mistakes

- Forgetting to add 1 after inverting.
- Treating a leading 1 as a minus sign rather than as −2^(n−1).
- Not discarding the carry out in two's complement subtraction.
- Mixing up mantissa (precision) and exponent (range).
- Shifting right instead of left when normalising, or forgetting to adjust the exponent.
- Calling relative error the "bigger" error. It is a ratio, not a size.

## Next steps

- [Binary number system revision notes](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-revision-notes/)
- [Binary number system practice questions](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-practice/)
- [Units of information study guide](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.3 The binary number system.
