---
title: "OxfordAQA A-Level Computer Science (9645): Number bases -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Number Bases Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "number-bases-oxfordaqa-alevel-cs"
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.5.1 Number bases: converting between decimal, binary and hexadecimal, with full working."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.1 Number bases** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: decimal, binary and hexadecimal and conversions between them. Hexadecimal numbers are written with the prefix `0x` where it helps.

Related pages: [number bases study guide](/resources/oxfordaqa-a-level-computer-science-9645-number-bases/) · [number bases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-revision-notes/)

## Section A

**1.** State the number of different digits used in hexadecimal and give the hexadecimal digit that represents the decimal value 14. **[2]**

**2.** State how many bits are represented by one hexadecimal digit. **[1]**

**3.** Convert the binary number 10111001 to decimal. **[2]**

**4.** Convert the decimal number 58 to an eight-bit binary number. **[2]**

## Section B

**5.** Convert the hexadecimal number `0x7A` to:

**(a)** binary (eight bits) **[2]**
**(b)** decimal **[2]**

**6.** Convert the decimal number 180 to hexadecimal. Show your working. **[3]**

**7.** Convert the binary number 10101101 to hexadecimal, showing how the bits are grouped. **[2]**

**8.** Explain why programmers often write memory addresses in hexadecimal rather than binary. **[2]**

**9.** The decimal number 77 is to be written in binary and in hexadecimal.

**(a)** Use repeated division by 2 to convert 77 to binary. Show every division. **[4]**
**(b)** Convert your binary answer (in eight bits) to hexadecimal. **[2]**
**(c)** Check your hexadecimal answer by converting it back to decimal. **[2]**

**10.** An assembly language instruction contains the operand `0xA5`. A student says that this means 10 and 5 in decimal, which is 105.

**(a)** Explain the student's mistake. **[1]**
**(b)** State the decimal value of `0xA5`. **[2]**
**(c)** State the largest decimal value that can be held in two hexadecimal digits, and the hex number that holds it. **[2]**

**11.** Convert the hexadecimal number `0xF0` to decimal and to eight-bit binary. Show your working. **[4]**

**12.** The eight-bit binary number 10110111 is the operand of an instruction.

**(a)** Write the number in hexadecimal. **[2]**
**(b)** Write the number in decimal. **[2]**
**(c)** A student converts the number to hexadecimal by splitting 10110111 into 101 and 10111. Explain the mistake. **[2]**

## Answers

**1.** 16 digits [1]; E [1]. **[2]**

**2.** Four bits [1]. **[1]**

**3.** 128 + 32 + 16 + 8 + 1 = **185** [2: correct column values added [1]; answer [1]]. **[2]**

**4.** 58 = 32 + 16 + 8 + 2, so the bits are 0 0 1 1 1 0 1 0 [1], giving **00111010** [1]. **[2]**

**5. (a)** 7 is 0111 and A is 1010 [1], so the binary is **01111010** [1]. **[2]**
**(b)** 7 × 16 + 10 [1] = 112 + 10 = **122** [1]. **[2]**

**6.** 180 ÷ 16 = 11 remainder 4 [1]; 11 is the digit B [1]; the answer is **B4** [1]. **[3]** (Check: 11 × 16 + 4 = 180.)

**7.** Groups of four from the right: 1010 and 1101 [1]; 1010 is A and 1101 is D, so the answer is **AD** [1]. **[2]**

**8.** Hexadecimal is **shorter**, so addresses are easier to read and less likely to be copied wrongly [1]; each hex digit stands for exactly **four bits**, so converting to and from binary is simple [1]. **[2]**

**9. (a)**

| Division | Quotient | Remainder |
|---|---|---|
| 77 ÷ 2 | 38 | 1 |
| 38 ÷ 2 | 19 | 0 |
| 19 ÷ 2 | 9 | 1 |
| 9 ÷ 2 | 4 | 1 |
| 4 ÷ 2 | 2 | 0 |
| 2 ÷ 2 | 1 | 0 |
| 1 ÷ 2 | 0 | 1 |

Divisions correct [2: all correct [2]; one slip [1]]; remainders read from the bottom up [1]; **1001101** [1]. **[4]**
**(b)** In eight bits the number is 01001101 [1]; groups 0100 and 1101 give 4 and D, so **4D** [1]. **[2]**
**(c)** 4 × 16 + 13 [1] = 64 + 13 = **77** [1]. **[2]**

**10. (a)** In hexadecimal, A is a **single digit** with value 10 [1] and the columns are worth 16 and 1, not 10 and 1 (the student read the digits as separate decimal numbers). **[1]**
**(b)** 10 × 16 + 5 [1] = **165** [1]. **[2]**
**(c)** **255** [1], held by **FF** [1]. **[2]**

**11.** F is 15, so 15 × 16 + 0 [1] = **240** [1]. F is 1111 and 0 is 0000 [1], so the binary is **11110000** [1]. **[4]**

**12. (a)** Groups of four from the right: 1011 and 0111 [1]; 1011 is B and 0111 is 7, so **B7** [1]. **[2]**
**(b)** 11 × 16 + 7 [1] = 176 + 7 = **183** [1]. **[2]**
**(c)** The bits must be split into groups of **four, starting from the right** [1]; the student's groups have 3 and 5 bits, so they do not match hexadecimal digits [1]. **[2]**

## Frequently asked questions

**Will there be a question that is only a base conversion?**
The specification says number base conversions will not be examined independently. They are needed as part of other questions, such as floating point numbers and assembly language.

**Do I need to learn hexadecimal addition?**
It is not in the specification content for this sub-topic. Practise conversion instead.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.1 Number bases.
