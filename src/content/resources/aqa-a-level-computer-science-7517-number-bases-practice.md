---
title: "AQA A-Level Computer Science (7517): Number bases -- Practice Questions"
seoTitle: "AQA A-Level CS Number Bases Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "number-bases-7517"
description: "Original AQA 7517 section 4.5.2 questions with answers: converting between decimal, binary and hexadecimal and explaining why hexadecimal is used."
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

Related: [Number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/) | [Number bases revision notes](/resources/aqa-a-level-computer-science-7517-number-bases-revision-notes/)

A subscript shows the base of a number: for example 25₁₀, 1011₂ and 3C₁₆.

---

## Section A

**1.** State the number of different digit symbols used in the hexadecimal number system. **[1]**

**2.** State the decimal values represented by the hexadecimal digits A and F. **[2]**

**3.** State how many bits are represented by one hexadecimal digit. **[1]**

**4.** State how many hexadecimal digits are needed to represent one byte. **[1]**

**5.** Convert 1010₂ to hexadecimal. **[1]**

## Section B

**6.** Convert 10110110₂ to decimal. Show your working. **[2]**

**7.** Convert 200₁₀ to binary. Show your working. **[3]**

**8.** Convert 01101100₂ to hexadecimal. **[2]**

**9.** Convert 2C₁₆ to binary. **[2]**

**10.** Convert 7A₁₆ to decimal. Show your working. **[2]**

**11.** Convert 300₁₀ to hexadecimal, using repeated division by 16. Show each division. **[3]**

**12.** A web designer writes a colour as three bytes in hexadecimal: F0, 80 and 1F.

**(a)** Write the three values in binary. **[3]**
**(b)** Write the three values in decimal. **[3]**

**13.** A student converts 45₁₀ to binary by repeated division by 2. Their remainders, in the order they were found, are 1, 0, 1, 1, 0, 1. They write the answer as 101101₂.

**(a)** State whether the answer is correct and explain what the student must do with the remainders. **[2]**
**(b)** Convert the number 54₁₀ to binary and say what the answer would be if the remainders were read in the wrong order. **[3]**

**14.** A programmer reads a memory address as 3E8₁₆. Explain two reasons why a hexadecimal address is easier for the programmer than the same address written in binary. **[2]**

**15.** Explain why hexadecimal is more convenient than decimal as a shorthand for binary. **[3]**

**16.** Convert 1B4₁₆ to decimal. Show your working. **[3]**

**17.** Convert 1000₁₀ to hexadecimal. Show each division and check your answer by converting back to decimal. **[4]**

**18.** A student converts 10110100101₂ to hexadecimal by grouping the bits in fours from the left: 1011, 0100 and 101. Explain the error in this method and give the correct hexadecimal value. **[3]**

**19.** Explain why computers use binary rather than decimal to store data. **[2]**

---

## Answers

**1.** 16 [1].

**2.** A is 10 [1]; F is 15 [1].

**3.** 4 bits (a nibble) [1].

**4.** 2 [1].

**5.** A [1].

**6.** 128 + 32 + 16 + 4 + 2 [1] = 182 [1].

**7.** 200 = 128 + 64 + 8 [1]; the bits for 128, 64, 32, 16, 8, 4, 2, 1 are 1, 1, 0, 0, 1, 0, 0, 0 [1]; the answer is 11001000₂ [1].

**8.** Groups 0110 and 1100 [1]; 6C₁₆ [1].

**9.** 2 is 0010 and C is 1100 [1]; 00101100₂ (leading zeros may be dropped) [1].

**10.** 7 × 16 + 10 [1] = 122 [1].

**11.**

| Number | ÷ 16 | Remainder |
|---|---|---|
| 300 | 18 | 12 (C) |
| 18 | 1 | 2 |
| 1 | 0 | 1 |

Correct divisions [1]; remainder 12 converted to C [1]; read from the bottom: 12C₁₆ [1].

**12. (a)** F0 is 11110000, 80 is 10000000 and 1F is 00011111 [3]. (One mark each.)
**(b)** F0 is 15 × 16 + 0 = 240, 80 is 8 × 16 + 0 = 128 and 1F is 1 × 16 + 15 = 31 [3]. (One mark each.)

**13. (a)** The answer 101101₂ is correct as written [1]; but the remainders were found in the order 1, 0, 1, 1, 0, 1, and the number is made by reading them from the last remainder to the first (bottom to top), which here happens to give the same result [1].
**(b)** 54 ÷ 2 gives remainders 0, 1, 1, 0, 1, 1 (54, 27, 13, 6, 3, 1) [1]; read from the last to the first: 110110₂ [1]; read in the wrong order (first to last) the student would give 011011₂, which is 27₁₀ and not 54₁₀ [1].

**14.** Any two from: the hex address 3E8 is only three characters, whereas the binary address 1111101000 is ten; it is easier to read and remember; fewer mistakes when copying it; each hex digit converts directly to four bits [2].

**15.** One hex digit corresponds to exactly four bits, so a binary number can be converted by replacing each group of four bits with one digit, with no arithmetic [1]; decimal does not line up with groups of bits, because 10 is not a power of 2, so conversion needs calculation [1]; hex is a quarter of the length of binary, so it is shorter and less error-prone for people to read and copy [1].

**16.** 1 × 256 + 11 × 16 + 4 × 1 [2] = 436 [1].

**17.** 1000 ÷ 16 = 62 remainder 8 [1]; 62 ÷ 16 = 3 remainder 14, which is E [1]; 3 ÷ 16 = 0 remainder 3, so reading upwards the answer is 3E8₁₆ [1]; check: 3 × 256 + 14 × 16 + 8 = 768 + 224 + 8 = 1000 [1].

**18.** Groups must be formed from the right (the least significant end) [1]; the final group of 101 is not a full nibble, so the place values of the groups are wrong [1]; correct grouping is 0101, 1010, 0101 (padding the left with a zero), giving 5A5₁₆ [1].

**19.** Digital electronic circuits have two reliable states (such as high and low voltage, or on and off) [1]; these are naturally represented by 1 and 0, and are easier and more reliable to build than circuits distinguishing ten levels [1].

---

## Where marks are usually lost

- Reading the remainders of repeated division in the wrong order.
- Grouping bits from the left when converting binary to hexadecimal.
- Using the wrong value for the letters A to F.
- Dropping zeros inside a group of four bits.
- Giving "it saves memory" as the reason for using hexadecimal.
