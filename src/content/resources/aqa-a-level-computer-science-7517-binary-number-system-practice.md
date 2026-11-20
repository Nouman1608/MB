---
title: "AQA A-Level Computer Science (7517): Binary number system -- Practice Questions"
seoTitle: "AQA A-Level CS Binary Number System Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.5.4 questions with answers: binary arithmetic, two's complement, fixed and floating point, normalisation, errors, overflow and underflow."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/) | [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)

Floating point numbers in this set have an 8-bit mantissa, with the binary point after the first bit, and a 4-bit exponent. Both are in two's complement, and the value is mantissa × 2 to the power of the exponent. Fixed point numbers have 8 bits in two's complement, with 4 bits before the binary point and 4 after.

---

## Section A

**1.** State the minimum and maximum values of a 6-bit unsigned binary number. **[2]**

**2.** State the range of values that can be stored in 6 bits using two's complement. **[2]**

**3.** State why the number 0.1 (decimal) cannot be stored exactly in binary. **[1]**

**4.** State what is meant by overflow. **[1]**

**5.** State the formula for the relative error of a stored value. **[1]**

## Section B

**6.** Add the unsigned binary numbers 00111011 and 01001011. Show the carries and give the answer in decimal. **[3]**

**7.** Multiply 1101 by 110 in binary. Show your working and check the answer in decimal. **[4]**

**8.** Represent each of these in 8-bit two's complement.

**(a)** 89 **[1]**
**(b)** −100 **[2]**

**9.** Convert 11000111 from 8-bit two's complement to decimal. **[2]**

**10.** Calculate 70 − 95 in 8-bit two's complement by adding the two's complement of 95 to 70. Show each stage and give the answer in decimal. **[4]**

**11.** The two numbers 00111011 and 01001011 from Question 6 are now interpreted as 8-bit two's complement numbers.

**(a)** State the result of adding them, and its value in decimal. **[2]**
**(b)** Explain why this result is wrong. **[2]**

**12.** Convert each fixed point number to decimal.

**(a)** 0011.0111 **[2]**
**(b)** 1101.1100 **[2]**

**13.** Represent 5.625 in the fixed point format. **[2]**

**14.** A floating point number has the mantissa 01100000 and the exponent 0010.

**(a)** Calculate its value in decimal. **[2]**
**(b)** State whether the mantissa is normalised and give a reason. **[1]**

**15.** Represent 2.5 as a normalised floating point number, and then represent −2.5. **[4]**

**16.** The mantissa 00101100 and the exponent 0101 represent a floating point number.

**(a)** Normalise the number. **[2]**
**(b)** Show that the value is the same before and after normalising. **[2]**

**17.** Explain why floating point numbers are normalised. **[2]**

**18.** A value of 0.1 is stored in a computer as 0.09765625.

**(a)** Calculate the absolute error. **[1]**
**(b)** Calculate the relative error as a percentage. **[2]**

**19.** Explain why an absolute error of 0.0005 is more serious when the actual value is 0.005 than when it is 2000. **[3]**

**20.** Compare fixed point and floating point representation in terms of range, precision and speed of calculation. **[4]**

**21.** Explain the difference between overflow and underflow in floating point, and state one circumstance in which each occurs. **[4]**

---

## Answers

**1.** Minimum 0 [1]; maximum 2⁶ − 1 = 63 [1].

**2.** −32 [1] to 31 [1].

**3.** 0.1 is a recurring binary fraction (0.0001100110011…), so it would need an infinite number of bits [1].

**4.** The result of a calculation is too large to be stored in the number of bits available [1].

**5.** Relative error = absolute error ÷ actual value (the absolute error is the difference between the actual and stored values) [1].

**6.**
```
  00111011
+ 01001011
  --------
  10000110
```
Correct addition with carries [2]; the answer is 134 (59 + 75) [1].

**7.**
```
      1101
   × 110
  --------
     0000
    11010
   110100
  --------
  1001110
```
Rows for the multiplier bits shown correctly (0000, 11010, 110100) [2]; correct addition 1001110 [1]; check: 13 × 6 = 78 = 64 + 8 + 4 + 2 [1].

**8. (a)** 01011001 [1].
**(b)** 100 = 01100100; inverted 10011011 [1]; add 1 gives 10011100 [1].

**9.** −128 + 64 + 4 + 2 + 1 [1] = −57 [1].

**10.** 70 = 01000110 [1]; 95 = 01011111, inverted 10100000, plus 1 gives 10100001 [1]; 01000110 + 10100001 = 11100111 [1]; this is −128 + 64 + 32 + 4 + 2 + 1 = −25 [1].

**11. (a)** 10000110 [1]; the value in two's complement is −128 + 4 + 2 = −122 [1].
**(b)** 59 + 75 = 134 is outside the range −128 to 127 [1]; the sum of two positive numbers has produced a negative result, which shows that overflow occurred [1].

**12. (a)** 2 + 1 + 0.25 + 0.125 + 0.0625 [1] = 3.4375 [1].
**(b)** −8 + 4 + 1 + 0.5 + 0.25 [1] = −2.25 [1].

**13.** 5.625 = 4 + 1 + 0.5 + 0.125 [1]; so 0101.1010 [1].

**14. (a)** The mantissa is 0.11 in binary, which is 0.75 [1]; 0.75 × 2² = 3 [1].
**(b)** Yes, it starts 01 [1].

**15.** 2.5 = 10.1 in binary = 0.101 × 2² [1]; mantissa 01010000 with exponent 0010 [1]; for −2.5, invert the mantissa 10101111 and add 1 to give 10110000 [1]; the exponent stays 0010 [1].

**16. (a)** Shift the mantissa left once to give 01011000 [1] and reduce the exponent by 1 to give 0100 [1].
**(b)** Before: 00101100 is 0.34375, and 0.34375 × 2⁵ = 11 [1]. After: 01011000 is 0.6875, and 0.6875 × 2⁴ = 11 [1].

**17.** To give the greatest possible precision for the number of bits in the mantissa (no bits wasted on a leading zero or one) [1]; each value then has one unique representation [1].

**18. (a)** 0.1 − 0.09765625 = 0.00234375 [1].
**(b)** 0.00234375 ÷ 0.1 [1] = 0.0234375, which is about 2.3% [1].

**19.** Relative error is absolute error divided by the actual value [1]; for 0.005 the relative error is 0.0005 ÷ 0.005 = 0.1, or 10% [1]; for 2000 it is 0.0005 ÷ 2000 = 0.00000025, or 0.000025%, which is negligible [1].

**20.** Range: floating point has a much larger range than fixed point for the same number of bits [1]. Precision: fixed point has the same spacing between values everywhere, whereas floating point has finer spacing for small values and coarser for large ones [1]. Speed: fixed point calculations are quicker and simpler [1], whereas floating point arithmetic needs more complex hardware or software and is slower [1].

**21.** Overflow occurs when a result is too large to be represented [1]; for example, an exponent that would need to be greater than the largest the exponent bits allow [1]. Underflow occurs when a result is too close to zero (too small in size) to be represented [1]; for example, an exponent that would need to be less than the smallest allowed, in which case the value is stored as zero [1].

---

## Where marks are usually lost

- Forgetting to add 1 after inverting the bits.
- Keeping the carry out of the top bit in a two's complement subtraction.
- Leaving an overflow unnoticed because the answer looks reasonable in unsigned form.
- Normalising by shifting right or changing the exponent in the wrong direction.
- Calculating relative error from the stored value, or giving only absolute error.
