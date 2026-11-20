---
title: "OxfordAQA A-Level Computer Science (9645): Number bases -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Number Bases Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.1 Number bases: decimal, binary and hexadecimal, conversion methods, worked checks and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.1 Number bases** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For longer worked examples, see the [number bases study guide](/resources/oxfordaqa-a-level-computer-science-9645-number-bases/); then practise with the [number bases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-practice/).

## What the specification requires

- Be familiar with the concept of a **number base**: **decimal (base 10)**, **binary (base 2)** and **hexadecimal (base 16)**.
- **Convert between** decimal, binary and hexadecimal.
- Conversions are **not examined independently**, but may be needed in other topics such as floating point numbers and assembly language.

## Key terms

| Term | Meaning |
|---|---|
| Number base (radix) | The number of digits used, and the multiplier between place values |
| Decimal | Base 10, digits 0 to 9 |
| Binary | Base 2, digits 0 and 1 |
| Hexadecimal | Base 16, digits 0 to 9 and A to F |
| Bit | One binary digit |
| Nibble | A group of four bits, equal to one hex digit |
| Byte | A group of eight bits, equal to two hex digits |
| Place value | The value of a column: the base raised to a power |

## Column values

| Base | Columns (right to left) |
|---|---|
| Binary | 1, 2, 4, 8, 16, 32, 64, 128 |
| Hexadecimal | 1, 16, 256, 4096 |
| Decimal | 1, 10, 100, 1000 |

Hex letters: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

## The nibble table

| Dec | Bin | Hex | Dec | Bin | Hex |
|---|---|---|---|---|---|
| 0 | 0000 | 0 | 8 | 1000 | 8 |
| 1 | 0001 | 1 | 9 | 1001 | 9 |
| 2 | 0010 | 2 | 10 | 1010 | A |
| 3 | 0011 | 3 | 11 | 1011 | B |
| 4 | 0100 | 4 | 12 | 1100 | C |
| 5 | 0101 | 5 | 13 | 1101 | D |
| 6 | 0110 | 6 | 14 | 1110 | E |
| 7 | 0111 | 7 | 15 | 1111 | F |

## Methods

| Conversion | Method |
|---|---|
| Binary to decimal | Add the column values where there is a 1 |
| Decimal to binary | Repeatedly divide by 2 and read remainders upwards, or subtract column values from the largest that fits |
| Binary to hex | Group into fours from the right; convert each group |
| Hex to binary | Replace each hex digit by four bits |
| Hex to decimal | Multiply each digit by its column value and add |
| Decimal to hex | Repeatedly divide by 16 and read remainders upwards, or go via binary |

## Worked reminders

All values recomputed.

| Decimal | 8-bit binary | Hex | Working check |
|---|---|---|---|
| 36 | 00100100 | 24 | 32 + 4 = 36 |
| 77 | 01001101 | 4D | 64 + 8 + 4 + 1 = 77 |
| 150 | 10010110 | 96 | 128 + 16 + 4 + 2 = 150 |
| 219 | 11011011 | DB | 13 × 16 + 11 = 219 |
| 255 | 11111111 | FF | 15 × 16 + 15 = 255 |

**Decimal to binary by division (77).** 77 ÷ 2 = 38 r1; 38 ÷ 2 = 19 r0; 19 ÷ 2 = 9 r1; 9 ÷ 2 = 4 r1; 4 ÷ 2 = 2 r0; 2 ÷ 2 = 1 r0; 1 ÷ 2 = 0 r1. Reading upwards: 1001101, which is 01001101 in 8 bits.

**Decimal to hex by division (219).** 219 ÷ 16 = 13 r11, so the digits are D (13) and B (11): **DB**.

**Hex to decimal.** 0x6B = 6 × 16 + 11 = 107. 0xD4 = 13 × 16 + 4 = 212. 0xC3 = 12 × 16 + 3 = 195.

**Binary to hex.** 10101101: groups 1010 and 1101, which are A and D: **AD**, which is 173.

**Hex to binary.** 0x4C is 0100 1100. 0xC9 is 1100 1001.

## Why hexadecimal?

- One hex digit is exactly four bits, so conversion is direct.
- A byte is two hex digits, much easier to read and copy than eight bits.
- It is used in memory addresses, machine code and colour codes.

The computer stores bits; hex is only a way of writing them.

## Exam traps

- **Remainder order.** Division remainders are read from last to first.
- **Leading zeros.** Hex digit 2 is 0010, not 10. If the question gives a number of bits, include the zeros.
- **Grouping from the right** when converting binary to hex.
- **A to F are 10 to 15,** not 1 to 6.
- **Show working.** Method marks are available.
- **Check back.** Convert your result in the other direction.
- **Not tested alone.** Expect conversions inside floating point and assembly questions.

## Quick self-test

1. State the base and the digits of hexadecimal.
2. What is the hex digit for 13?
3. How many bits does one hex digit represent?
4. Convert 10010110 to decimal.
5. Convert 36 to 8-bit binary.
6. Convert 11011011 to hex.
7. Convert 0xC3 to decimal.
8. Convert 0x4C to binary.
9. Why is hex easier for people than binary?
10. What is the largest decimal value of one byte?
11. Convert 219 to hex by division.
12. Where might a question require a conversion even though conversions are not examined alone?

### Answers

1. Base 16; the digits 0 to 9 and A to F.
2. D.
3. Four.
4. 150.
5. 00100100.
6. DB.
7. 195.
8. 01001100.
9. It is shorter, so less likely to be copied wrongly, and each digit maps to four bits.
10. 255.
11. 219 ÷ 16 = 13 remainder 11, so DB.
12. Floating point numbers and assembly language (any other topic where a conversion is part of the working).

## Next steps

- [Number bases study guide](/resources/oxfordaqa-a-level-computer-science-9645-number-bases/)
- [Number bases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-practice/)
- [Representing data revision notes](/resources/oxfordaqa-a-level-computer-science-representing-data-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.1 Number bases.
