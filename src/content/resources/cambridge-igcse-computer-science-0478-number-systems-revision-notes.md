---
title: "Cambridge IGCSE Computer Science (0478): Number systems -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "number-systems-0478"
description: "Condensed Cambridge IGCSE Computer Science 0478 number systems notes: conversions, hex uses, overflow, logical shifts, two's complement and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **1.1 Number systems** from Topic 1, Data representation, of the Cambridge IGCSE Computer
Science 0478 syllabus for 2026 to 2028 (Paper 1, Computer systems). For explanations and worked examples, read the
[Number systems study guide](/resources/cambridge-igcse-computer-science-0478-number-systems/), then try the
[Number systems practice questions](/resources/cambridge-igcse-computer-science-0478-number-systems-practice/). The
whole topic is summarised in the [Data Representation revision notes](/resources/data-representation-revision-notes/).

## Why binary

- All data (numbers, text, sound, images) must be **converted to binary** to be processed.
- Processing uses **logic gates**; data is stored in **registers**; both work with two states, 0 and 1.

## Place values to know

```
16-bit binary: 32768 16384 8192 4096 | 2048 1024 512 256 | 128 64 32 16 | 8 4 2 1
hex:           4096  256  16  1
hex digits:    0–9, A=10 B=11 C=12 D=13 E=14 F=15
```

## Conversion methods

```
Denary → binary : subtract largest place value that fits, left to right
Binary → denary : add the place values under each 1
Binary → hex    : nibbles of 4 from the RIGHT; each nibble → one hex digit
Hex → binary    : each hex digit → 4 bits (keep leading zeros inside the number)
Hex → denary    : digit × place value (4096, 256, 16, 1), then add
Denary → hex    : go via binary, or divide by 16 repeatedly
```

Quick nibble table: 0000=0, 0101=5, 1000=8, 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F.

## Hexadecimal: why and where

| Why (benefits to humans) | Where it is used |
|---|---|
| Shorter: 1 hex digit = 4 bits | Error codes |
| Easier to read and remember | MAC addresses |
| Fewer errors when copying or checking | IPv6 addresses |
| Direct conversion to binary | HTML colour codes (e.g. #FF8000: R=FF, G=80, B=00) |

The computer still stores **binary**; hex does not save memory.

## Binary addition

```
0+0=0   1+0=1   1+1=0 carry 1   1+1+1=1 carry 1
```

- Work right to left; write carries above.
- **Overflow**: result greater than **255** in an 8-bit register → needs a 9th bit → bit lost → wrong result.
- Every device has a predefined limit (e.g. 8-bit or 16-bit) on the size of number it can hold.

## Logical shifts

- Left 1 place = × 2; left n places = × 2ⁿ.
- Right 1 place = ÷ 2 (remainder lost); right n places = ÷ 2ⁿ.
- Gaps filled with **0**; bits shifted off the end are **lost**.
- If a 1 is shifted out on the left, the result is wrong (too large for 8 bits).

## Two's complement (8-bit)

```
place values: −128  64  32  16  8  4  2  1
range:        −128 to +127
leading 0 → positive; leading 1 → negative
```

**To represent a negative number:** write the positive in 8 bits → flip every bit → add 1.
**To read one:** add the place values, using −128 for the leftmost bit.

## Worked mini-examples

```
Denary 300 → 256 + 32 + 8 + 4 → 0000 0001 0010 1100 → hex 12C
Hex 9E → 1001 1110 → 128 + 16 + 8 + 4 + 2 = 158
10010110 + 01101010 = 1 0000 0000 → 150 + 106 = 256 → overflow, stored 00000000
00001101 (13) shift left 1 → 00011010 (26)
−1 in two's complement: 00000001 → 11111110 → 11111111
```

## Key terms

| Term | Meaning |
|---|---|
| Bit | A single binary digit, 0 or 1 |
| Nibble | 4 bits; one hex digit |
| Byte | 8 bits |
| Denary | Base 10 number system |
| Hexadecimal | Base 16 number system |
| Register | Small storage location in the processor that holds a fixed number of bits |
| Overflow | Result too large for the bits available |
| Logical shift | Moving all bits left or right, filling with zeros |
| Two's complement | Method of representing negative integers with a −128 leftmost place value (8-bit) |
| Most significant bit | The leftmost bit |

## Exam traps

- Grouping nibbles from the left on a binary number whose length is not a multiple of 4.
- Dropping a zero nibble inside a hex-to-binary answer (A0F is 1010 0000 1111, not 1010 1111).
- "Hex uses less memory."
- Not stating that the extra bit is **lost** when explaining overflow.
- Filling shifted gaps with 1s.
- Two's complement: forgetting to add 1, or reading 1xxxxxxx as positive.

## Quick self-test

1. Convert 213 to 8-bit binary and to hex.
2. Convert 1234 to 16-bit binary and to hex.
3. Convert the hex number 7F3A to denary.
4. Convert C4 to binary and denary.
5. Add 01110010 and 10011001 in an 8-bit register. Does overflow occur?
6. Shift 00100111 two places left. Give the result and its denary value.
7. Represent −57 in 8-bit two's complement.
8. Convert the two's complement number 10000001 to denary.
9. What is the largest positive number in 8-bit two's complement?
10. Give two places where hexadecimal is used.
11. What effect does a logical right shift of 3 places have on a positive integer?
12. Why is binary used to represent data in a computer?

### Answers

1. 11010101; D5.
2. 0000 0100 1101 0010; 4D2.
3. (7 × 4096) + (15 × 256) + (3 × 16) + 10 = 28672 + 3840 + 48 + 10 = **32570**.
4. 1100 0100; 196.
5. 114 + 153 = 267, which needs 9 bits (100001011); yes, overflow: only 00001011 (11) is stored.
6. 10011100 = 156 (39 × 4).
7. 57 = 00111001 → flip 11000110 → add 1 → **11000111**.
8. −128 + 1 = **−127**.
9. +127 (01111111).
10. Any two from: error codes, MAC addresses, IPv6 addresses, HTML colour codes.
11. It divides it by 8 (2³); any remainder is lost, as the three right-hand bits are shifted out.
12. The computer processes data with logic gates and stores it in registers, which work with two states (0 and 1).

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.1 Number systems.
