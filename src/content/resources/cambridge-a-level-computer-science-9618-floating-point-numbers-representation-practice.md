---
title: "Cambridge A Level Computer Science (9618): Floating-point Numbers, Representation and Manipulation -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 section 13.3 questions with worked answers: conversions, normalisation, range and precision, rounding, overflow and underflow."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Floating-point study guide](/resources/cambridge-a-level-computer-science-9618-floating-point-numbers-representation/) · [Floating-point revision notes](/resources/cambridge-a-level-computer-science-9618-floating-point-numbers-representation-revision-notes/)

Unless a question says otherwise, numbers use an 8-bit mantissa and a 4-bit exponent, both in two's complement, with the binary point after the first bit of the mantissa.

---

## Section A

**1.** State what is meant by the mantissa and the exponent of a floating-point number. **[2]**

**2.** Convert each floating-point number to denary, showing your working.

**(a)** Mantissa 01110000, exponent 0010 **[2]**

**(b)** Mantissa 10111000, exponent 0001 **[2]**

**(c)** Mantissa 01010000, exponent 1111 **[2]**

**3.** State whether each mantissa is normalised.

**(a)** 01011010 **[1]**

**(b)** 11100000 **[1]**

**(c)** 00111111 **[1]**

**(d)** 10000001 **[1]**

**4.** State **two** reasons why floating-point numbers are normalised. **[2]**

## Section B

**5.** Convert +9.25 into a normalised floating-point number. Show your working. **[3]**

**6.** Convert −3.75 into a normalised floating-point number. Show your working. **[4]**

**7.** Convert 0.078125 into a normalised floating-point number. Show your working. **[3]**

**8.** Normalise each floating-point number, and show that its value is unchanged.

**(a)** Mantissa 00010110, exponent 0100 **[3]**

**(b)** Mantissa 11110100, exponent 0011 **[3]**

**9.** A different system uses a 10-bit mantissa and a 6-bit exponent, both in two's complement.

**(a)** State the range of exponent values. **[1]**

**(b)** Write an expression for the largest positive value that can be stored. **[2]**

**(c)** Write an expression for the smallest positive normalised value that can be stored. **[2]**

**10.** The system in Question 9 is changed to a 12-bit mantissa and a 4-bit exponent. Explain the effect of this change. **[3]**

**11.** Explain why the denary value 0.2 cannot be stored exactly in binary floating point, and describe **one** consequence for a program. **[3]**

**12.** Using the 8-bit mantissa and 4-bit exponent system, explain what is meant by overflow and underflow, giving an example of each. **[4]**

---

## Answers

**1.** The mantissa holds the significant digits of the number as a two's complement fraction [1]. The exponent is a two's complement integer giving the power of 2 by which the mantissa is multiplied, which sets where the binary point is [1].

**2.** **(a)** Exponent 0010 = +2; mantissa 0.1110000 = 1/2 + 1/4 + 1/8 = 0.875 [1]. 0.875 × 2² = 3.5 [1].

**(b)** Exponent 0001 = +1; mantissa 1.0111000 = −1 + 1/4 + 1/8 + 1/16 = −0.5625 [1]. −0.5625 × 2 = −1.125 [1].

**(c)** Exponent 1111 = −1; mantissa 0.1010000 = 1/2 + 1/8 = 0.625 [1]. 0.625 × 2⁻¹ = 0.3125 [1].

**3.** **(a)** Yes (starts 01) [1].

**(b)** No (starts 11) [1].

**(c)** No (starts 00) [1].

**(d)** Yes (starts 10) [1].

**4.** To give maximum precision, because no mantissa bits are wasted on leading 0s or 1s [1]. To give a unique representation for each value, so numbers can be compared easily [1].

**5.** 9.25 = 1001.01 [1]. Moving the point four places left gives 0.100101, so the exponent is +4 [1]. Mantissa 01001010, exponent 0100 [1]. (Check: (1/2 + 1/16 + 1/64) × 16 = 0.578125 × 16 = 9.25.)

**6.** 3.75 = 11.11 = 0.1111 × 2², so the positive mantissa is 0.1111000 [1]. Invert: 1.0000111 [1]; add 1: 1.0001000, which starts 10 and is normalised [1]. Mantissa 10001000, exponent 0010 [1]. (Check: (−1 + 1/16) × 4 = −0.9375 × 4 = −3.75.)

**7.** 0.078125 = 0.000101 [1]. Moving the point three places right gives 0.101, so the exponent is −3 [1]. Mantissa 01010000, exponent 1101 [1]. (Check: 0.625 × 2⁻³ = 0.078125.)

**8.** **(a)** Shift the mantissa two places left: 01011000 [1]. Exponent 4 − 2 = 2: 0010 [1]. Before: 0.171875 × 2⁴ = 2.75; after: 0.6875 × 2² = 2.75 [1].

**(b)** Shift left three places: 11110100 → 11101000 → 11010000 → 10100000 [1]. Exponent 3 − 3 = 0: 0000 [1]. Before: (−1 + 1/2 + 1/4 + 1/8 + 1/32) × 2³ = −0.09375 × 8 = −0.75; after: (−1 + 1/4) × 2⁰ = −0.75 [1].

**9.** **(a)** −32 to +31 [1].

**(b)** Largest mantissa 0.111111111 = 1 − 2⁻⁹ [1]; largest value (1 − 2⁻⁹) × 2³¹ [1].

**(c)** Smallest positive normalised mantissa 0.100000000 = 1/2 [1]; smallest value 1/2 × 2⁻³² = 2⁻³³ [1].

**10.** The mantissa gains two bits, so numbers are stored with greater precision [1]. The exponent loses two bits, so its range shrinks from −32 to +31 down to −8 to +7 [1]. The range of values that can be represented is therefore much smaller, so very large and very small numbers can no longer be stored [1].

**11.** 0.2 in binary is a recurring fraction, 0.00110011... [1], so it cannot be held in a finite number of mantissa bits and the nearest value is stored instead [1]. Consequence (any one): calculations give slightly wrong results that can grow with repetition; a test for exact equality, such as IF X = 0.2, may be FALSE when it should be TRUE [1].

**12.** Overflow is when a result is too large in magnitude to be represented [1], for example 100 × 2 = 200, which is greater than the largest value, 127 [1]. Underflow is when a non-zero result is closer to zero than the smallest normalised value, so it cannot be represented and is stored as 0 [1], for example 1/512 ÷ 4, since 1/512 is the smallest positive normalised value [1].

---

## Where marks are usually lost

- Giving the first mantissa bit a value of +1.
- Shifting the mantissa left and increasing the exponent.
- Forming a negative mantissa by setting only the first bit.
- Leaving out the check, so an arithmetic slip goes unnoticed.
- Mixing up range and precision when bits are reallocated.
