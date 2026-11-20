---
title: "OxfordAQA IGCSE Computer Science (9210): Number bases -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Number Bases Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.01
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "number-bases-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on decimal, binary and hexadecimal and why computers use binary and hex."
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
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Number bases study guide](/resources/oxfordaqa-igcse-computer-science-9210-number-bases/) | [Number bases revision notes](/resources/oxfordaqa-igcse-computer-science-9210-number-bases-revision-notes/)

These questions cover section 3.3.1 Number bases of the OxfordAQA International GCSE Computer Science (9210)
specification.

---

## Section A

**1.** State the number of different digits used in each of these number bases:

**(a)** binary **[1]**

**(b)** decimal **[1]**

**(c)** hexadecimal **[1]**

**2.** State the decimal value of each hexadecimal digit.

**(a)** B **[1]**

**(b)** F **[1]**

**3.** State the four-bit binary pattern for each hexadecimal digit.

**(a)** 5 **[1]**

**(b)** C **[1]**

**4.** State what is meant by a bit and what is meant by a byte. **[2]**

**5.** State the largest value that can be stored in 8 bits, in decimal, in binary and in hexadecimal. **[3]**

## Section B

**6.** Explain why computers use binary to represent data and instructions. **[3]**

**7.** Give two reasons why hexadecimal is often used in computer science. **[2]**

**8.** A programmer says, "Computers store values as hexadecimal because it is quicker for the processor." Explain
why this statement is wrong. **[2]**

**9.** The eight-bit pattern 0110 0001 is stored in a computer's memory.

**(a)** State the value of this pattern when it is interpreted as a whole number. **[1]**

**(b)** State the two hexadecimal digits that represent the pattern. **[2]**

**(c)** Explain how the same pattern could represent something other than a whole number. **[2]**

**10.** The table shows the same values in different bases. Complete the table.

| Decimal | Binary | Hexadecimal |
|---|---|---|
| 9 | 1001 | 9 |
| 12 | | |
| | 1111 | |
| | | A |

**[3]**

**11.** The number 10 is written in three number bases. Give the decimal value of the number when it is:

**(a)** a binary number **[1]**

**(b)** a hexadecimal number **[1]**

**12.** A student says that 8 bits can store 255 different values. Explain what is wrong with this statement and state
the correct figure. **[2]**

**13.** A web designer records a colour as C8 in hexadecimal. Explain why using hexadecimal is more convenient for a
human than writing the pattern in binary. **[2]**

**14.** Explain why the same pattern of bits can represent a number in one file and a letter in another. **[3]**

**15.** State the number of different values that can be stored using 3 bits, and show how you worked it out. **[2]**

**16.** State how many hexadecimal digits are needed to write a 16-bit binary pattern, and explain why. **[3]**

---

## Answers

**1.** **(a)** 2 [1]. **(b)** 10 [1]. **(c)** 16 [1].

**2.** **(a)** 11 [1]. **(b)** 15 [1].

**3.** **(a)** 0101 [1]. **(b)** 1100 [1].

**4.** A bit is a single binary digit, 0 or 1 [1]; a byte is a group of 8 bits [1].

**5.** 255 [1]; 1111 1111 [1]; FF [1].

**6.** Computers are built from electronic circuits and transistors that are either on or off, so there are two
states [1]; two states are easy to tell apart, which makes the circuits reliable [1]; two-state circuits are
simple and cheap to build, and all data and instructions can be encoded as patterns of 0s and 1s [1].

**7.** Any two from: it is shorter than binary, because one hex digit represents four bits [1]; it is easier for
people to read, remember and type [1]; it reduces the number of copying mistakes [1]; it is easy to convert to and
from binary [1].

**8.** Computers store everything in binary [1]; hexadecimal is only a shorthand that makes binary easier for
humans to read and write, and it is not faster for the processor [1].

**9.** **(a)** 97 [1] (64 + 32 + 1). **(b)** 61 [2] (0110 is 6 and 0001 is 1; one mark for each digit).
**(c)** The meaning depends on how the pattern is interpreted [1]; it could be, for example, the character `a`
in a text file, a pixel value in an image or a sample in a sound file [1].

**10.**

| Decimal | Binary | Hexadecimal |
|---|---|---|
| 9 | 1001 | 9 |
| 12 | 1100 | C |
| 15 | 1111 | F |
| 10 | 1010 | A |

Row 12: 1100 and C [1]; row 1111: 15 and F [1]; row A: 10 and 1010 [1].

**11.** **(a)** 2 [1]. **(b)** 16 [1].

**12.** 255 is the largest value, not the number of values [1]; 8 bits can store 256 different values (2 to the
power 8), from 0 to 255 [1].

**13.** C8 is shorter than 1100 1000, because one hex digit stands for four bits [1]; it is easier to read, copy and
remember, and there is less chance of a mistake [1].

**14.** A bit pattern has no meaning by itself [1]; the meaning depends on how the program or file format
interprets the bits [1]; for example, 0100 0001 is the integer 65 in a number file and the letter A in a text file [1].

**15.** 8 values [1]; each bit has 2 possible values, so 2 × 2 × 2 = 2 to the power 3 = 8 [1].

**16.** 4 hexadecimal digits [1]; each hexadecimal digit represents 4 bits [1]; 16 ÷ 4 = 4 [1].

---

## Where marks are usually lost

- Not mentioning **two states** (on and off) in the answer to Question 6.
- Saying that hexadecimal is "used by the computer" or "faster" in Question 8.
- Mixing up the largest value (255) and the number of values (256) in Question 12.
- Reading 10 as ten in every base in Question 11.
- Forgetting that A to F stand for 10 to 15.
