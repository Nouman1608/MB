---
title: "OxfordAQA IGCSE Computer Science (9210): Converting between number bases -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Converting Bases Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.02
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "converting-between-number-bases-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on converting between binary, decimal and hexadecimal for values 0 to 255."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Converting between number bases study guide](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases/) | [Converting between number bases revision notes](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases-revision-notes/)

These questions cover section 3.3.2 Converting between number bases of the OxfordAQA International GCSE Computer
Science (9210) specification.

---

## Section A

**1.** Convert each binary number to decimal.

**(a)** 0000 1010 **[1]**

**(b)** 0110 0100 **[1]**

**(c)** 1111 0000 **[1]**

**2.** Convert each decimal number to an eight-bit binary number.

**(a)** 19 **[1]**

**(b)** 86 **[1]**

**(c)** 203 **[2]**

**3.** Convert each binary number to hexadecimal.

**(a)** 1010 1111 **[1]**

**(b)** 0110 0100 **[1]**

**4.** Convert each hexadecimal number to an eight-bit binary number.

**(a)** 7B **[2]**

**(b)** 90 **[1]**

**5.** Convert each hexadecimal number to decimal.

**(a)** 4D **[1]**

**(b)** B3 **[2]**

## Section B

**6.** Convert decimal 100 to hexadecimal, showing your working. **[2]**

**7.** Complete the table. Each value is one byte.

| Decimal | Binary | Hexadecimal |
|---|---|---|
| 45 | | |
| | 1001 0110 | |
| | | 5E |
| 255 | | |

**[8]**

**8.** A student converts the hexadecimal number 3C to decimal by writing 3 and 12 side by side to give 312.

**(a)** Explain why this is wrong. **[1]**

**(b)** State the correct decimal value of 3C, and show your working. **[2]**

**9.** A student converts the decimal number 150 to binary using repeated division by 2 and writes down the
remainders in the order they are found: 0, 1, 1, 0, 1, 0, 0, 1.

**(a)** State the binary number the student has written, as eight bits. **[1]**

**(b)** State the correct binary number and explain the mistake. **[2]**

**10.** Describe the steps used to convert the binary number 1110 1101 to hexadecimal. **[3]**

**11.** Pat says that the binary number 0110 1010 is larger than the hexadecimal number 6B. Show whether Pat is
correct. **[3]**

**12.** Explain why every value from 0 to 255 can be written using exactly two hexadecimal digits. **[2]**

**13.** Convert the binary number 0101 0111 to decimal and to hexadecimal. **[3]**

**14.** Convert the hexadecimal number 8D to binary and to decimal. **[3]**

**15.** State the largest value that can be stored in one byte, giving the value in decimal, in binary and in
hexadecimal. **[3]**

---

## Answers

**1.** **(a)** 10 [1]. **(b)** 100 [1]. **(c)** 240 [1].

**2.** **(a)** 0001 0011 [1]. **(b)** 0101 0110 [1]. **(c)** 1100 1011 [2] (one mark for the correct method, such as 128 + 64
+ 8 + 2 + 1, and one for the correct answer).

**3.** **(a)** AF [1]. **(b)** 64 [1].

**4.** **(a)** 0111 1011 [2] (one mark for each correct nibble). **(b)** 1001 0000 [1].

**5.** **(a)** 77 [1] (4 × 16 + 13). **(b)** 179 [2] (11 × 16 + 3 = 176 + 3; one mark for the method and one for
the answer).

**6.** 100 ÷ 16 = 6 remainder 4 [1]; the answer is 64 [1]. (Alternative: 0110 0100 gives 6 and 4.)

**7.**

| Decimal | Binary | Hexadecimal |
|---|---|---|
| 45 | 0010 1101 | 2D |
| 150 | 1001 0110 | 96 |
| 94 | 0101 1110 | 5E |
| 255 | 1111 1111 | FF |

One mark for each of the eight correct cells: 0010 1101, 2D, 150, 96, 94, 0101 1110, 1111 1111 and FF [8].

**8.** **(a)** Each hex digit is not a separate decimal number; the left digit is worth 16 times its value [1].
**(b)** 3 × 16 + 12 [1] = 60 [1].

**9.** **(a)** 0110 1001 [1].
**(b)** The correct answer is 1001 0110 [1]. The remainders must be read from the bottom to the top (in reverse
order), but the student read them from the top to the bottom [1].

**10.** Split the byte into two groups of four bits (1110 and 1101) [1]; convert each group to its hexadecimal
digit: 1110 is E and 1101 is D [1]; join them to give ED [1].

**11.** 0110 1010 is 64 + 32 + 8 + 2 = 106 [1]; hexadecimal 6B is 6 × 16 + 11 = 107 [1]; so Pat is not correct,
because 6B is larger by 1 [1].

**12.** One hex digit represents four bits, so two hex digits represent eight bits [1]; eight bits can store 0 to 255,
and the largest value is FF [1].

**13.** Decimal: 64 + 16 + 4 + 2 + 1 = 87 [1]; hexadecimal: 0101 is 5 and 0111 is 7 [1], so 57 [1].

**14.** Binary: 8 is 1000 and D is 1101, so 1000 1101 [1]; decimal: 8 × 16 + 13 [1] = 141 [1].

**15.** 255 [1]; 1111 1111 [1]; FF [1].

---

## Where marks are usually lost

- Reading remainders from top to bottom in Question 9.
- Treating hex digits as separate decimals, as in Question 8.
- Forgetting leading zeros so that a byte is shorter than eight bits.
- Not showing working in Question 5(b) and Question 11, where method marks are available.
- Mixing up the letters A to F, for example treating C as 13 instead of 12.
