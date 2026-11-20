---
title: "OxfordAQA A-Level Computer Science (9645): Number bases"
seoTitle: "OxfordAQA A-Level CS 9645 Number Bases Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.1 in depth: decimal, binary and hexadecimal place values and step-by-step conversions between all three bases."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.1 Number bases** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). The specification asks you to be familiar with the concept of a **number base**, in particular **decimal (base 10)**, **binary (base 2)** and **hexadecimal (base 16)**, and to **convert between decimal, binary and hexadecimal**. Its additional information says that number base conversions **will not be examined independently**, but you may need to convert between bases while answering questions on other topics, such as floating point numbers and assembly language. That makes the skill essential even though a question is rarely only "convert this".

For quick recall use the [number bases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-revision-notes/), then try the [number bases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. This guide uses `0x` in front of hexadecimal numbers when a number could be mistaken for decimal.

## What a number base is

A **number base** (or radix) is the number of distinct digits a system uses, and also the multiplier between neighbouring place values. In every base, a number is written as digits in columns. The value of a column is the base raised to a power, and each digit is multiplied by the value of its column.

| Base | Name | Digits used | Column values (right to left) |
|---|---|---|---|
| 10 | Decimal | 0 to 9 | 1, 10, 100, 1000, ... |
| 2 | Binary | 0 and 1 | 1, 2, 4, 8, 16, 32, 64, 128, ... |
| 16 | Hexadecimal | 0 to 9 and A to F | 1, 16, 256, 4096, ... |

In hexadecimal the letters stand for the values above 9: A is 10, B is 11, C is 12, D is 13, E is 14 and F is 15. A hexadecimal digit therefore holds a value from 0 to 15, which is exactly the range of **four bits**.

| Decimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Binary | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
| Hex | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |

Learn this table. Almost every conversion uses it.

## Why binary and hexadecimal?

- Computers store data using two-state electronic components, so **binary** is the natural representation.
- Long binary numbers are hard for people to read and easy to copy wrongly. **Hexadecimal** is a compact shorthand: one hex digit stands for exactly four bits, so an eight-bit byte is two hex digits.
- Hexadecimal is used for memory addresses, colour codes and machine code listings.

Hexadecimal is only a way of **writing** binary. The computer still stores bits.

## Binary to decimal

Write the column values above the bits, then add the column values where there is a 1.

### Worked example 1: 1011011 to decimal

| Column value | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|
| Bit | 1 | 0 | 1 | 1 | 0 | 1 | 1 |

64 + 16 + 8 + 2 + 1 = **91**.

### Worked example 2: 11010110 to decimal

Columns 128, 64, 32, 16, 8, 4, 2, 1 with bits 1, 1, 0, 1, 0, 1, 1, 0 give 128 + 64 + 16 + 4 + 2 = **214**.

## Decimal to binary

### Method A: repeated division by 2

Divide by 2, note the remainder, and repeat with the quotient until it reaches 0. The remainders **read from last to first** give the binary number.

**Convert 45.**

| Division | Quotient | Remainder |
|---|---|---|
| 45 ÷ 2 | 22 | 1 |
| 22 ÷ 2 | 11 | 0 |
| 11 ÷ 2 | 5 | 1 |
| 5 ÷ 2 | 2 | 1 |
| 2 ÷ 2 | 1 | 0 |
| 1 ÷ 2 | 0 | 1 |

Reading the remainders from the bottom: **101101**. Check: 32 + 8 + 4 + 1 = 45.

### Method B: subtracting column values

Start with the largest column value that fits. Write 1, subtract it, and move right. Write 0 for any column that does not fit.

**Convert 93.** Columns: 64, 32, 16, 8, 4, 2, 1.

| Column | Fits into remainder? | Bit | Remainder after |
|---|---|---|---|
| 64 | 93 ≥ 64 | 1 | 29 |
| 32 | 29 < 32 | 0 | 29 |
| 16 | 29 ≥ 16 | 1 | 13 |
| 8 | 13 ≥ 8 | 1 | 5 |
| 4 | 5 ≥ 4 | 1 | 1 |
| 2 | 1 < 2 | 0 | 1 |
| 1 | 1 ≥ 1 | 1 | 0 |

The binary number is **1011101**.

When a question specifies a number of bits, add leading zeros: 93 in 8 bits is **01011101**.

## Binary and hexadecimal

Because 16 is 2 to the power 4, the two bases line up. Each hex digit corresponds to a **group of four bits (a nibble)**.

### Binary to hexadecimal

Split the binary number into groups of four **starting from the right**, padding the left with zeros. Convert each group using the table.

**Convert 11010110.** Groups: 1101 and 0110. 1101 is 13, which is D; 0110 is 6. So the hex number is **D6**. Check: 13 × 16 + 6 = 214, which matches worked example 2.

**Convert 1011101.** Pad to eight bits: 0101 1101. 0101 is 5, 1101 is D. The hex number is **5D**, which is 93.

### Hexadecimal to binary

Replace each hex digit by its four-bit group.

**Convert 2F.** 2 is 0010 and F is 1111, so the binary is **00101111**. **Convert 9E.** 9 is 1001 and E is 1110, so the binary is **10011110**.

## Hexadecimal and decimal

### Hexadecimal to decimal

Multiply each digit by its column value (1, 16, 256, ...) and add.

- **0x3C:** 3 × 16 + 12 = 48 + 12 = **60**.
- **0xA7:** 10 × 16 + 7 = 160 + 7 = **167**.
- **0x3A7:** 3 × 256 + 10 × 16 + 7 = 768 + 160 + 7 = **935**.

### Decimal to hexadecimal

Use repeated division by 16, reading the remainders from last to first, or convert to binary and then group in fours.

**Convert 200.**

| Division | Quotient | Remainder (hex digit) |
|---|---|---|
| 200 ÷ 16 | 12 | 8 |
| 12 ÷ 16 | 0 | 12 (C) |

Reading from the bottom: **C8**. Check: 12 × 16 + 8 = 200.

**Convert 167.** 167 ÷ 16 = 10 remainder 7, and 10 ÷ 16 = 0 remainder 10 (A). So the answer is **A7**, matching the earlier result.

## Quick reference of conversions

| Decimal | Binary (8 bits) | Hexadecimal |
|---|---|---|
| 45 | 00101101 | 2D |
| 93 | 01011101 | 5D |
| 167 | 10100111 | A7 |
| 200 | 11001000 | C8 |
| 255 | 11111111 | FF |

255 is the largest value in one byte. 0xFF + 1 = 256, which is 16 squared.

## Where this appears in other topics

- **Assembly language and machine code** use hexadecimal for memory addresses and values.
- **Floating point** questions give a mantissa and exponent in binary, which you convert to decimal.
- **Character codes** (sub-topic 3.5.4) are often quoted in decimal or hex.
- **Bitmap colours** are commonly written as hexadecimal triplets.

## Exam technique

- **Show your working.** A wrong final answer with correct steps still earns method marks.
- **Check in the other direction.** Convert your answer back to the starting base.
- **Count bits.** If the question says 8 bits, include the leading zeros.
- **Use the nibble table** for binary and hex, not decimal as a go-between.
- **Mark hex clearly** (`0x` or the base as a subscript) when there could be confusion.

## Common mistakes

- Reading repeated-division remainders from the wrong end.
- Forgetting leading zeros when converting hex digits to binary (the digit 2 is 0010, not 10).
- Grouping bits from the left instead of the right.
- Treating A to F as 1 to 6.
- Writing decimal 10 as a hex digit "10" instead of A.
- Writing the column values wrongly; each is double the one to its right.

## Next steps

- [Number bases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-revision-notes/)
- [Number bases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-practice/)
- [Representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.1 Number bases.
