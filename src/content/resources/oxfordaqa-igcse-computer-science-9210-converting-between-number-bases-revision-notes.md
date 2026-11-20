---
title: "OxfordAQA IGCSE Computer Science (9210): Converting between number bases -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Converting Bases Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.2: converting binary, decimal and hexadecimal for 0 to 255 with worked examples and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.2 Converting between number bases** of OxfordAQA International GCSE Computer
Science (9210). Full methods are in the [Converting between number bases study
guide](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases/).

## What the specification asks

- Understand how **binary** and **hexadecimal** represent whole numbers.
- Represent decimal values from **0 to 255** in binary and in hexadecimal.
- Convert **both ways** between: binary and decimal; binary and hexadecimal; decimal and hexadecimal.
- Maximum values used: decimal **255**, binary **1111 1111**, hexadecimal **FF**.

## Facts to know

| Binary place values | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|

| Hex | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| Decimal | 10 | 11 | 12 | 13 | 14 | 15 |

Nibbles: 0 = 0000, 1 = 0001, 2 = 0010, 3 = 0011, 4 = 0100, 5 = 0101, 6 = 0110, 7 = 0111, 8 = 1000, 9 = 1001,
A = 1010, B = 1011, C = 1100, D = 1101, E = 1110, F = 1111.

## The six conversions

| From | To | Method |
|---|---|---|
| Binary | Decimal | Add the place values that have a 1 |
| Decimal | Binary | Subtract place values from 128 down, or divide by 2 and read remainders upwards |
| Binary | Hex | Split into two nibbles; convert each |
| Hex | Binary | Replace each hex digit with its four-bit group |
| Hex | Decimal | Left digit × 16, plus right digit |
| Decimal | Hex | Divide by 16: quotient is left digit, remainder is right digit |

## Worked examples

**Binary to decimal: 0010 1101.** 32 + 8 + 4 + 1 = **45**.

**Decimal to binary: 150.** 128 fits (22 left); 64 and 32 do not; 16 fits (6 left); 8 does not; 4 fits (2 left); 2
fits (0 left); 1 does not. Bits: 1 0 0 1 0 1 1 0, so **1001 0110**.

**Check by division:** 150 ÷ 2 gives 75 r 0, then 37 r 1, 18 r 1, 9 r 0, 4 r 1, 2 r 0, 1 r 0, 0 r 1. Remainders from
the bottom up: 1001 0110.

**Binary to hex: 1110 1101.** 1110 = E, 1101 = D, so **ED**.

**Hex to binary: 3C.** 3 = 0011, C = 1100, so **0011 1100**.

**Hex to decimal: A7.** 10 × 16 + 7 = **167**.

**Decimal to hex: 237.** 237 ÷ 16 = 14 remainder 13, so E and D, which gives **ED**.

## Quick reference values

| Decimal | Binary | Hex |
|---|---|---|
| 45 | 0010 1101 | 2D |
| 60 | 0011 1100 | 3C |
| 94 | 0101 1110 | 5E |
| 100 | 0110 0100 | 64 |
| 128 | 1000 0000 | 80 |
| 150 | 1001 0110 | 96 |
| 167 | 1010 0111 | A7 |
| 182 | 1011 0110 | B6 |
| 200 | 1100 1000 | C8 |
| 237 | 1110 1101 | ED |
| 255 | 1111 1111 | FF |

## Checks

- Convert back to the starting base.
- A binary number is odd if its last bit is 1.
- A value below 128 starts with 0 in an eight-bit number.
- A byte in hex has exactly two digits, and a value is never above FF (255).

## Layout for an exam answer

1. Write the eight place values above the bits: 128, 64, 32, 16, 8, 4, 2, 1.
2. Show each stage of the working, such as the nibbles or the subtractions.
3. Write the final answer clearly, with the base if the question gives more than one.
4. Check by converting back.

**Worked layout: binary 0101 1110 to decimal and hex.** Decimal: 64 + 16 + 8 + 4 + 2 = 94. Hex: 0101 is 5 and 1110 is E,
so 5E. Check: 5 × 16 + 14 = 94.

**Worked layout: decimal 203 to binary and hex.** 128 fits (75 left); 64 fits (11 left); 32 and 16 do not; 8 fits (3 left); 4
does not; 2 fits (1 left); 1 fits (0 left). The bits are 1100 1011. Hex: 1100 is C and 1011 is B, so CB. Check:
12 × 16 + 11 = 203.

## Exam traps

- **Remainders read the wrong way.** In repeated division, read from the bottom up.
- **Missing leading zeros.** A byte has eight bits, so write 0001 0011, not 10011, when eight bits are needed.
- **Grouping from the wrong end.** Always start with eight bits so that the groups of four line up.
- **Hex digits read as separate decimal numbers.** 3C is 3 × 16 + 12 = 60, not 312.
- **Treating 10, 11 or 12 as a hex digit.** Use A, B, C.
- **Multiplying the wrong digit by 16.** The left digit is multiplied by 16.
- **Wrong place values.** Binary place values double: 1, 2, 4, 8, 16, 32, 64, 128.
- **Arithmetic slips.** Add up the place values you used to check.

## Key terms

| Term | Meaning |
|---|---|
| Nibble | A group of four bits |
| Place value | The value of a column, a power of the base |
| Remainder | What is left over after a division |
| Leading zeros | Zeros added on the left to make the group the correct length |

## Self-test

1. Convert 0000 1111 to decimal.
2. Convert 1000 0001 to decimal.
3. Convert 77 to eight-bit binary.
4. Convert 203 to eight-bit binary.
5. Convert 1100 1011 to hexadecimal.
6. Convert 0100 1101 to hexadecimal.
7. Convert hexadecimal 5E to binary.
8. Convert hexadecimal 27 to decimal.
9. Convert decimal 175 to hexadecimal.
10. State the decimal value of FF and the binary value of the same number.

**Answers:**
1. 15 (8 + 4 + 2 + 1).
2. 129 (128 + 1).
3. 0100 1101 (64 + 8 + 4 + 1 = 77).
4. 1100 1011 (128 + 64 + 8 + 2 + 1 = 203).
5. CB (1100 = C, 1011 = B).
6. 4D (0100 = 4, 1101 = D).
7. 0101 1110.
8. 39 (2 × 16 + 7).
9. AF (175 ÷ 16 = 10 remainder 15).
10. 255 and 1111 1111.

## Related resources

- [Converting between number bases study guide](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases/)
- [Converting between number bases practice questions](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases-practice/)
- [Units of information revision notes](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information-revision-notes/)
