---
title: "OxfordAQA IGCSE Computer Science (9210): Number bases -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Number Bases Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.1: decimal, binary and hexadecimal, why binary and hexadecimal are used, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.1 Number bases** of OxfordAQA International GCSE Computer Science (9210). The
explanations are in the [Number bases study
guide](/resources/oxfordaqa-igcse-computer-science-9210-number-bases/).

## What the specification asks

- Understand the bases **decimal (10)**, **binary (2)** and **hexadecimal (16)**.
- Understand that computers use **binary** to represent **all data and instructions**.
- **Explain why** computers use binary.
- **Explain why** hexadecimal is often used in computer science.
- Be familiar with one bit pattern representing different types of data: text, image, sound and integer.

## The three bases

| Base | Name | Digits | Place values (from the right) |
|---|---|---|---|
| 10 | Decimal | 0 to 9 | 1, 10, 100, 1,000 |
| 2 | Binary | 0 and 1 | 1, 2, 4, 8, 16, 32, 64, 128 |
| 16 | Hexadecimal | 0 to 9 and A to F | 1, 16, 256 |

- A binary digit is a **bit**. A group of 8 bits is a **byte**.
- A is 10, B is 11, C is 12, D is 13, E is 14 and F is 15.
- The same digits mean different numbers in different bases: 10 is two in binary, ten in decimal and sixteen in hex.

## Counting table

| Decimal | Binary | Hex |
|---|---|---|
| 0 to 9 | 0000 to 1001 | 0 to 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

**One hex digit = four bits.** Two hex digits = one byte.

## Maximum values for 8 bits

| Decimal | Binary | Hex |
|---|---|---|
| 255 | 1111 1111 | FF |

Number of patterns for n bits is 2 to the power n: 4 bits give 16 patterns, 8 bits give 256 patterns (0 to 255).

## Why computers use binary

- Electronic circuits are made from **transistors** (switches) that are either **on or off**: two states.
- Two states are **reliable**: it is easy to tell high from low, even with some electrical noise.
- Two-state circuits are **simple and cheap** to build, and logic gates use two values.
- Storage also has two states, such as pit or land on a disc, north or south magnetic region, charge or no charge.

Answer shape: **two states** + **hardware** + **benefit** (reliable or simple).

## All data is binary

Programs (machine code), text, images, sound and numbers are all converted to bit patterns before storing or
processing.

A bit pattern has **no meaning by itself**. The way it is interpreted gives the meaning.

| 0100 0001 interpreted as | Meaning |
|---|---|
| Integer | 65 |
| ASCII character | A |
| Image data | A pixel value |
| Sound data | A sample value |

The file format or the program tells the computer how to interpret the bits.

## Why hexadecimal is used

- **Shorter**: one hex digit replaces four bits, so 1100 1000 is just C8.
- **Easier for people** to read, remember and type.
- **Fewer errors** when copying values.
- **Converts easily** to and from binary, because 16 is a power of 2 and each hex digit is a group of four bits.
- Hex is for **people**. The computer still stores binary.

Examples where hex is seen (not required by the specification): web colour codes, memory addresses.

## Worked example

Show the byte 1011 0110 in hex and decimal.

- Split into nibbles: 1011 and 0110.
- 1011 is 11, which is B. 0110 is 6.
- Hex: **B6**.
- Decimal check: (11 × 16) + 6 = 182. Using binary place values: 128 + 32 + 16 + 4 + 2 = 182.

## Model answers

**Explain why computers use binary. [3 marks]** Computers are built from transistors, which are switches that are either on
or off, giving two states. Two states are easy to tell apart, so the circuits are reliable, and they are simple and cheap to
build.

**Explain why programmers use hexadecimal. [2 marks]** It is shorter than binary, because one hex digit represents four
bits, and it is easier for people to read and to copy without mistakes.

## Exam traps

- **"Binary is easy for computers"** with no mention of two states, on and off.
- **"Computers use hexadecimal."** They do not; hex is for humans.
- **"Hex is faster for the computer."** It is not; it is more convenient for people.
- **Bit and byte confused.** A bit is one binary digit; a byte is 8 bits.
- **Hex 25 read as twenty-five.** It is 2 × 16 + 5 = 37.
- **Place values written as 1, 2, 3, 4.** They are 1, 2, 4, 8.
- **Saying binary only stores numbers.** It stores any data once encoded.
- **Forgetting that hex has 16 digits**, with the letters stopping at F.

## Key terms

| Term | Meaning |
|---|---|
| Number base | How many different digits a number system uses |
| Bit | A single binary digit, 0 or 1 |
| Byte | A group of 8 bits |
| Nibble | A group of 4 bits, shown by one hex digit |
| Transistor | An electronic switch that is either on or off |
| Hexadecimal | Base 16, using 0 to 9 and A to F |
| Place value | The value of a column in a number |

## Self-test

1. State the number of digits used in binary, decimal and hexadecimal.
2. State the decimal value represented by the hex digit D.
3. State the four-bit pattern for the hex digit 9.
4. State the largest number that can be stored in 8 bits, in decimal, binary and hex.
5. Give the number of different patterns that 6 bits can store.
6. Explain why computers use binary.
7. Give two reasons why hexadecimal is used.
8. A byte has the pattern 0100 0001. Give two different things it could represent.
9. Write the hex number FF as two groups of four bits.
10. State whether a computer stores a hex number in hex or in binary.

**Answers:**
1. 2, 10 and 16.
2. 13.
3. 1001.
4. 255, 1111 1111 and FF.
5. 64 (2 to the power 6).
6. Circuits are made of transistors with two states, on and off, which is reliable and simple.
7. Any two from: shorter, easier for people to read, fewer copying errors, easy to convert to binary.
8. For example the integer 65 or the character A.
9. 1111 1111.
10. In binary.

## Related resources

- [Number bases study guide](/resources/oxfordaqa-igcse-computer-science-9210-number-bases/)
- [Number bases practice questions](/resources/oxfordaqa-igcse-computer-science-9210-number-bases-practice/)
- [Converting between number bases revision notes](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases-revision-notes/)
