---
title: "OxfordAQA A-Level Computer Science (9645): The binary number system -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Binary Number System Practice"
resourceType: "practice-questions"
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
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.5.3: unsigned and two's complement arithmetic, fixed and floating point, errors and normalisation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.3 The binary number system** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1. **Fixed point format:** 8 bits in two's complement with 4 bits after the binary point. **Floating point format:** an 8-bit two's complement mantissa with the binary point after its first bit, and a 4-bit two's complement exponent; value = mantissa × 2 to the power of the exponent.

Related pages: [binary number system study guide](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system/) · [binary number system revision notes](/resources/oxfordaqa-a-level-computer-science-9645-binary-number-system-revision-notes/)

## Section A

**1.** State the largest unsigned integer that can be stored in 14 bits. **[1]**

**2.** State the range of integers that can be stored in 12-bit two's complement. **[2]**

**3.** Write the decimal number −58 as an 8-bit two's complement binary number. Show your working. **[3]**

**4.** State the decimal value of the 8-bit two's complement number 10100110. **[2]**

## Section B

**5.** Multiply the unsigned binary numbers 1101 and 11. Show the rows you add. **[3]**

**6.** Add the 8-bit unsigned numbers 10101101 and 01100110.

**(a)** Give the result of the addition. **[2]**
**(b)** Explain what happens, in terms of the 8-bit register. **[2]**

**7.** Calculate 44 − 91 using 8-bit two's complement. Show the representation of −91 and the addition, and give the answer in decimal. **[5]**

**8.** Using the fixed point format given:

**(a)** convert 2.8125 to binary **[2]**
**(b)** convert −3.25 to binary **[3]**
**(c)** convert 1011.0110 to decimal **[2]**

**9.** Using the floating point format given, find the decimal value of:

**(a)** mantissa 01100000, exponent 0011 **[2]**
**(b)** mantissa 11010000, exponent 0011 (a negative value) **[2]**

**10.** The number 6.5 is stored with mantissa 00110100 and exponent 0100.

**(a)** Show that this represents 6.5. **[2]**
**(b)** Normalise the number. **[2]**
**(c)** Explain why floating point numbers are normalised. **[2]**

**11.** A value of 0.4 is stored in the fixed point format as 0.4375.

**(a)** Calculate the absolute error. **[1]**
**(b)** Calculate the relative error as a percentage. **[2]**
**(c)** The value 40.4 is stored as 40.4375 in a larger format. Explain, using calculations, why the relative error is a more useful measure than the absolute error here. **[3]**

**12.** Compare fixed point and floating point representation in terms of range, precision and speed of calculation. **[3]**

## Answers

**1.** 2^14 − 1 = **16,383** [1]. **[1]**

**2.** −2^11 = **−2,048** [1] to 2^11 − 1 = **+2,047** [1]. **[2]**

**3.** 58 is 00111010 [1]; inverted: 11000101 [1]; add 1: **11000110** [1]. **[3]**

**4.** −128 + 32 + 4 + 2 [1] = **−90** [1]. **[2]**

**5.** The multiplier 11 has 1s in positions 0 and 1 [1]. Rows: 1101 and 11010 [1]. Sum: 1101 + 11010 = **100111** (39 = 13 × 3) [1]. **[3]**

**6. (a)** 173 + 102 = 275, which is **100010011** in binary [1 for the correct 9-bit sum, 1 for the carry out]. **[2]**
**(b)** The result needs **9 bits** but the register holds 8, so the leftmost carry is lost and the register holds 00010011 (19) [1]; this is an **overflow** and the stored answer is wrong [1]. **[2]**

**7.** 44 is 00101100 [1]. 91 is 01011011, so −91 is 10100101 [1: inverted 10100100, plus 1]. Addition: 00101100 + 10100101 [1] = **11010001** [1]. Value: −128 + 64 + 16 + 1 = **−47** [1]. **[5]**

**8. (a)** 2 is 0010 and 0.8125 = 1/2 + 1/4 + 1/16 is .1101 [1], giving **0010.1101** [1]. **[2]**
**(b)** 3.25 is 0011.0100 [1]; inverted: 1100.1011 [1]; add 1 at the last place: **1100.1100** [1]. **[3]**
**(c)** The bits 1011.0110 give −8 + 2 + 1 + 0.25 + 0.125 [1] = **−4.625** [1]. **[2]**

**9. (a)** Mantissa 0.11 = 0.75 [1]; 0.75 × 2^3 = **6** [1]. **[2]**
**(b)** The mantissa 11010000 = −128 + 64 + 16 = −48, so −48 ÷ 128 = −0.375 [1]; −0.375 × 2^3 = **−3** [1]. **[2]**

**10. (a)** Mantissa 00110100 = 52 ÷ 128 = 0.40625; exponent 0100 = 4; 0.40625 × 16 = **6.5** [2: mantissa value [1]; multiplication [1]]. **[2]**
**(b)** Shift the mantissa left one place to give **01101000** [1] and reduce the exponent by 1 to give **0011** [1]. **[2]**
**(c)** Normalising gives the **maximum precision** for the number of mantissa bits [1] and a **unique representation** of each value [1]. **[2]**

**11. (a)** |0.4 − 0.4375| = **0.0375** [1]. **[1]**
**(b)** 0.0375 ÷ 0.4 [1] = 0.09375, which is **9.4%** (to 1 d.p.) [1]. **[2]**
**(c)** For 40.4 the absolute error is also 0.0375 [1], but the relative error is 0.0375 ÷ 40.4 ≈ 0.00093, about **0.09%** [1]. The absolute errors are equal, but the same error is far more serious for 0.4 than for 40.4, and the relative error shows this by comparing the error with the size of the number [1]. **[3]**

**12.** Range: floating point has a **much larger range** because of the exponent [1]. Precision: floating point gives **greater precision for small numbers** and its precision is set by the mantissa length, while fixed point has the same absolute precision everywhere [1]. Speed: fixed point calculations are **faster** (simpler hardware, integer arithmetic) than floating point [1]. **[3]**

## Frequently asked questions

**Are negative numbers examined in any representation other than two's complement?**
No. The specification says two's complement is the only representation of negative integers that will be examined.

**Do I need the IEEE standard for floating point?**
No. You work with a simplified mantissa and exponent format, both in two's complement, as given in the question.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.3 The binary number system.
