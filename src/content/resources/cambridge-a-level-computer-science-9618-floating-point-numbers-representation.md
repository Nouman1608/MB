---
title: "Cambridge A Level Computer Science (9618): Floating-point Numbers, Representation and Manipulation"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 13.3: floating-point format, converting to and from denary, normalisation, bit allocation, rounding, overflow and underflow."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 13.3 Floating-point numbers, representation and manipulation of Cambridge International AS & A Level Computer Science 9618 asks you to describe the format of binary floating-point real numbers in two's complement, understand the effect of changing the allocation of bits to mantissa and exponent, convert between binary floating point and denary, normalise floating-point numbers and give the reasons for it, and explain the consequences of binary being only an approximation, including rounding errors, underflow and overflow. It is A Level content, examined in Paper 3.

Related: [Floating-point revision notes](/resources/cambridge-a-level-computer-science-9618-floating-point-numbers-representation-revision-notes/) · [Floating-point practice questions](/resources/cambridge-a-level-computer-science-9618-floating-point-numbers-representation-practice/) · [Data Representation (A Level) study guide](/resources/a-level-computer-science-data-representation-a-level/)

## The format

A floating-point number is stored as two two's complement binary numbers:

- the **mantissa**, which holds the significant digits, with an implied binary point straight after its first bit;
- the **exponent**, an integer saying how many places to move that point (right if positive, left if negative).

value = mantissa × 2^exponent

In an 8-bit mantissa the place values are −1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64 and 1/128. The first bit has the negative place value −1, so it acts as the sign: 0 for a positive number, 1 for a negative one. In a 4-bit exponent the place values are −8, 4, 2 and 1, giving exponents from −8 to +7.

## Converting floating point to denary

1. Convert the exponent from two's complement to denary.
2. Work out the mantissa as a fraction using the place values above.
3. Multiply the mantissa by 2 to the power of the exponent.

**Positive mantissa, negative exponent.** Mantissa 01010000, exponent 1110.

- Exponent 1110 = −8 + 4 + 2 = −2.
- Mantissa 0.1010000 = 1/2 + 1/8 = 0.625.
- Value = 0.625 × 2⁻² = 0.625 ÷ 4 = 0.15625.

**Negative mantissa.** Mantissa 10110000, exponent 0100.

- Exponent 0100 = +4.
- Mantissa 1.0110000 = −1 + 1/4 + 1/8 = −0.625.
- Value = −0.625 × 2⁴ = −10.

An alternative for a positive exponent is to move the binary point: for 01010000 with exponent +3, 0.1010000 becomes 0101.0000, which is 5.

## Converting denary to normalised floating point

1. Write the magnitude of the number in binary fixed point.
2. Move the binary point so the number is in the form 0.1... and count the places moved: that count is the exponent (left moves give a positive exponent, right moves a negative one).
3. For a negative number, take the two's complement of the positive mantissa.
4. Check that the mantissa is normalised and write the exponent in two's complement.

## Worked example 1: +12.375 and −6.5

Use an 8-bit mantissa and a 4-bit exponent.

**+12.375**

- 12 = 1100 and 0.375 = 0.011, so 12.375 = 1100.011.
- Moving the point four places left gives 0.1100011, so the exponent is +4.
- Mantissa 01100011; exponent 0100.
- Check: 1/2 + 1/4 + 1/64 + 1/128 = 0.7734375, and 0.7734375 × 16 = 12.375.

**−6.5**

- 6.5 = 110.1, which is 0.1101 × 2³, so the positive mantissa is 0.1101000 and the exponent is +3.
- Two's complement: invert to 1.0010111, add 1 in the last place, giving 1.0011000.
- The mantissa begins 10, so it is normalised: mantissa 10011000; exponent 0011.
- Check: −1 + 1/8 + 1/16 = −0.8125, and −0.8125 × 8 = −6.5.

*Why it scores:* each stage is shown, the exponent comes from the number of places the point moved, the negative mantissa is formed by two's complement of the whole positive mantissa, and the final values are checked by converting back.

## Normalisation

A mantissa is **normalised** when its first two bits are different: **01** for a positive number and **10** for a negative one. To normalise, shift the mantissa left until this is true, and subtract 1 from the exponent for each place shifted, so the value is unchanged.

**Worked example 2: a negative value.** Mantissa 11101000, exponent 0101.

- The mantissa begins 11, so it is not normalised.
- One shift left gives 11010000; a second gives 10100000, which begins 10.
- The exponent falls by 2: 5 − 2 = 3, giving 0011.
- Check: before, 1.1101000 = −1 + 1/2 + 1/4 + 1/16 = −0.1875 and −0.1875 × 2⁵ = −6. After, 1.0100000 = −0.75 and −0.75 × 2³ = −6.

**Reasons for normalisation**

- **Maximum precision**: no mantissa bits are wasted on repeated leading 0s or 1s, so as many significant bits as possible are stored.
- **A unique representation**: each value has only one normalised form, which makes comparing two floating-point numbers straightforward.

## Changing the allocation of bits

With a fixed total number of bits, there is a trade-off.

- **More bits for the mantissa**: greater **precision**, because more significant bits are kept.
- **More bits for the exponent**: greater **range**, because larger and smaller magnitudes can be represented.

Using 12 bits in total:

| Split | Largest positive value | Effect |
|---|---|---|
| 8-bit mantissa, 4-bit exponent | 0.1111111 × 2⁷ = 127 | More precision, small range |
| 6-bit mantissa, 6-bit exponent | 0.11111 × 2³¹ = 2 080 374 784 | Far greater range, only five fraction bits of precision |

The most negative value with an 8-bit mantissa and 4-bit exponent is 1.0000000 × 2⁷ = −128, and the smallest positive normalised value is 0.1000000 × 2⁻⁸ = 1/512.

## Approximation, rounding errors, overflow and underflow

Many denary values have no exact binary form. 0.1 in binary is 0.000110011... recurring. With an 8-bit mantissa the nearest normalised value is mantissa 01100110 with exponent 1101 (−3), which is 0.796875 × 1/8 = 0.099609375, not 0.1. The difference is a **rounding error**.

Consequences:

- results of calculations can be slightly wrong, and repeated calculations can make the error grow;
- testing two real numbers for exact equality can fail even when they "should" be equal, so programs compare against a small tolerance instead;
- floating point is unsuitable where exact denary values are essential, such as money, unless the values are stored another way (for example as whole numbers of cents).

**Overflow** occurs when a result is too large in magnitude for the exponent to represent: with an 8-bit mantissa and 4-bit exponent, 100 × 2 = 200 exceeds the largest value, 127. **Underflow** occurs when a result is closer to zero than the smallest normalised value can show: 1/512 ÷ 4 cannot be stored and becomes 0.

## Common mistakes

- Treating the first mantissa bit as +1 instead of −1.
- Moving the binary point the wrong way for a negative exponent.
- Changing the exponent in the wrong direction when normalising: shifting the mantissa left reduces the exponent.
- Leaving a negative mantissa starting 11, or a positive one starting 00.
- Forming a negative mantissa by setting the first bit to 1 (sign and magnitude) instead of using two's complement.
- Confusing precision (mantissa) with range (exponent).

## Exam technique

**Convert** questions: show the exponent in denary, the mantissa as a sum of place values and the multiplication, so method marks are available even if one step slips. **Normalise**: write the shifted mantissa, the number of places shifted and the new exponent, then check by converting both forms. **Explain** the effect of changing the bit allocation: state which part gains, and whether that gives precision or range. **Explain** rounding errors, overflow or underflow: give the cause and a consequence for a program.
