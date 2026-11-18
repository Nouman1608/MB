---
title: "Cambridge A Level Computer Science (9618): Data Representation -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 1.1
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "data-representation"
description: "Revision notes for Cambridge 9618 section 1.1: prefixes, conversions, BCD, signed binary ranges, overflow tests, character sets, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1.1 Data Representation of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The [data representation study guide](/resources/cambridge-a-level-computer-science-9618-data-representation/) teaches each method with worked examples; test yourself afterwards with the [data representation practice questions](/resources/cambridge-a-level-computer-science-9618-data-representation-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Bit | A single binary digit, 0 or 1 |
| Nibble | 4 bits; one hexadecimal digit |
| Byte | 8 bits |
| Binary prefix | Power of 2: kibi 2¹⁰, mebi 2²⁰, gibi 2³⁰, tebi 2⁴⁰ |
| Decimal prefix | Power of 10: kilo 10³, mega 10⁶, giga 10⁹, tera 10¹² |
| Denary | Base 10 |
| Hexadecimal | Base 16, digits 0 to 9 and A to F |
| BCD | Binary Coded Decimal: each denary digit stored as its own 4-bit code |
| One's complement | Negative number formed by inverting every bit of the positive value |
| Two's complement | Negative number formed by inverting every bit and adding 1; MSB has a negative place value |
| MSB | Most significant bit, the left-most bit; the sign bit in signed representations |
| Overflow | The result of a calculation is too large (or too small) to be stored in the bits available |
| Character set | The list of characters a computer can represent, each with a unique binary code |

## Conversion recipes

- **Binary → denary**: add place values where there is a 1.
- **Denary → binary**: subtract the largest place values that fit, or divide by 2 and read remainders upwards.
- **Binary ↔ hex**: groups of four bits from the right.
- **Hex → denary**: digit × 16ⁿ, added (place values 4,096, 256, 16, 1).
- **Denary → hex**: divide by 16, remainders read upwards, 10 to 15 become A to F.
- **Denary → BCD**: each digit to four bits separately.
- **Negative → two's complement**: positive in binary, invert, add 1.
- **Two's complement → denary**: MSB counts as −128 (8 bits), then add the rest.

Quick example: 214 = 11010110 = &D6. Check: 13 × 16 + 6 = 214.

## Prefix arithmetic

- 1 KiB = 1,024 bytes; 1 kB = 1,000 bytes.
- 1 MiB = 1,048,576 bytes; 1 MB = 1,000,000 bytes.
- To change a decimal-prefix size to binary-prefix: multiply out to bytes, then divide by the binary power.
- The binary unit is always the larger one, so the number gets smaller: 1 TB ≈ 0.91 TiB.

## Ranges for n bits

| Representation | Smallest | Largest | 8-bit example |
|---|---|---|---|
| Unsigned binary | 0 | 2ⁿ − 1 | 0 to 255 |
| Two's complement | −2ⁿ⁻¹ | 2ⁿ⁻¹ − 1 | −128 to +127 |
| One's complement | −(2ⁿ⁻¹ − 1) | 2ⁿ⁻¹ − 1 | −127 to +127 |
| BCD (n a multiple of 4) | 0 | n ÷ 4 nines | 0 to 99 |

One's complement has two zeros (00000000 and 11111111). Two's complement has one zero and one extra negative value.

## Arithmetic and overflow

- 0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 0 carry 1; 1 + 1 + 1 = 1 carry 1.
- A − B = A + (two's complement of B); ignore a carry out of the MSB.
- **Signed overflow test**: two positives give a negative, or two negatives give a positive.
- **Unsigned overflow test**: a carry out of the MSB.
- Adding numbers of opposite signs never overflows.

Example: 01100000 + 01000000 = 10100000. Both inputs positive (96 + 64), result negative (−96): overflow, because +160 is above +127.

## BCD and hexadecimal: uses

| Representation | Use | Why |
|---|---|---|
| BCD | Digital clock, calculator, electronic display | Each digit drives its own display unit |
| BCD | Financial values | Denary amounts stored exactly, no binary rounding |
| Hexadecimal | Memory addresses, debugging | Shorter than binary, easy to convert |
| Hexadecimal | Colour codes (#RRGGBB) | Two hex digits per byte of red, green, blue |
| Hexadecimal | MAC addresses, error codes | Compact and less error-prone to read and copy |

## Character sets

- **ASCII**: 7 bits, 128 characters.
- **Extended ASCII**: 8 bits, 256 characters; the upper 128 vary by version.
- **Unicode**: up to 32 bits per character; represents most world scripts; first 128 codes match ASCII.
- Codes for letters run in order, so given one code you can work out its neighbours.
- Upper and lower case have different codes.
- Storage = number of characters × bits per character.

## Exam traps

- Hex digits grouped from the left instead of the right.
- Forgetting the "+1" in two's complement.
- Treating BCD as a straight binary conversion.
- Writing invalid BCD nibbles (1010 to 1111).
- Claiming overflow because there is a carry out when subtracting by two's complement: that carry is discarded.
- Mixing up which prefix uses 1,024.
- Saying ASCII uses 8 bits: standard ASCII is 7 bits; extended ASCII is 8.

## Self-test

1. How many bytes are in 5 KiB?
2. Convert &A9 to denary.
3. Convert 300 to hexadecimal.
4. Write 47 in BCD.
5. Decode the BCD 0110 0000 0011.
6. Give −45 in 8-bit two's complement.
7. Give −45 in 8-bit one's complement.
8. Convert the two's complement number 10000001 to denary.
9. State the range of a 10-bit two's complement integer.
10. Calculate 01011010 + 00110111 in 8-bit two's complement and state whether overflow occurs.
11. Why does Unicode need more bits than ASCII?
12. A text of 1,500 characters is stored in 7-bit ASCII with one character per byte. How many bits are stored?

### Answers

1. 5 × 1,024 = **5,120 bytes**.
2. (10 × 16) + 9 = **169**.
3. 300 ÷ 16 = 18 r 12 (C); 18 ÷ 16 = 1 r 2; 1 ÷ 16 = 0 r 1 → **&12C**.
4. **0100 0111**.
5. **603**.
6. 45 = 00101101 → invert 11010010 → +1 → **11010011**.
7. **11010010**.
8. −128 + 1 = **−127**.
9. −2⁹ to 2⁹ − 1 = **−512 to +511**.
10. 90 + 55 = 145 → **10010001**; two positives give a negative result, so **overflow** (145 is above +127).
11. It must give a unique code to many thousands of characters across the world's writing systems, far more than the 128 that 7 bits allow.
12. 1,500 × 8 = **12,000 bits** (each character occupies a whole byte even though ASCII needs only 7 bits).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 1.1 Data Representation. Published by Cambridge International.
