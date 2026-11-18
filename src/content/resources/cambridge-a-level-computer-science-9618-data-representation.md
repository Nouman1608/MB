---
title: "Cambridge A Level Computer Science (9618): Data Representation"
resourceType: "study-guides"
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
description: "Study guide to Cambridge 9618 section 1.1: binary prefixes, base conversion, BCD, one's and two's complement, binary arithmetic, overflow and character sets."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 1.1 Data Representation is the first part of Topic 1 in the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, and it is AS content assessed on Paper 1, Theory Fundamentals. The syllabus asks you to show understanding of "binary magnitudes and the difference between binary prefixes and decimal prefixes", of "different number systems" (binary, denary, hexadecimal, Binary Coded Decimal, one's and two's complement), to "perform binary addition and subtraction" including overflow, to describe practical uses of BCD and hexadecimal, and to represent character data using ASCII, extended ASCII and Unicode.

The [Information Representation study guide](/resources/a-level-computer-science-information-representation/) gives an overview of the whole topic. This page works through each 1.1 skill with fresh worked examples and the reasoning examiners look for. Recall: [data representation revision notes](/resources/cambridge-a-level-computer-science-9618-data-representation-revision-notes/) · Questions: [data representation practice set](/resources/cambridge-a-level-computer-science-9618-data-representation-practice/).

## Binary and decimal prefixes

Decimal prefixes go up in powers of 10; binary prefixes go up in powers of 2.

| Decimal | Value | Binary | Value |
|---|---|---|---|
| kilo (kB) | 10³ | kibi (KiB) | 2¹⁰ = 1,024 |
| mega (MB) | 10⁶ | mebi (MiB) | 2²⁰ = 1,048,576 |
| giga (GB) | 10⁹ | gibi (GiB) | 2³⁰ |
| tera (TB) | 10¹² | tebi (TiB) | 2⁴⁰ |

**Worked example 1.** A storage drive is sold as 500 GB. An operating system reports sizes in GiB. How much will it show?

```
500 GB  = 500 × 10⁹ bytes = 500,000,000,000 bytes
in GiB  = 500,000,000,000 ÷ 2³⁰ = 500,000,000,000 ÷ 1,073,741,824
        ≈ 465.7 GiB
```

Nothing is missing: the same number of bytes is being measured in a larger unit. Going the other way, 3 MiB = 3 × 1,048,576 = 3,145,728 bytes, whereas 3 MB is exactly 3,000,000 bytes.

## Number systems and conversion

You must convert an integer between binary, denary and hexadecimal in any direction.

- **Binary to denary**: add the place values (128, 64, 32, 16, 8, 4, 2, 1) wherever there is a 1.
- **Binary to hexadecimal**: split into groups of four bits from the right; each group is one hex digit (0 to 9, then A to F for 10 to 15).
- **Hexadecimal to denary directly**: multiply each digit by its place value (1, 16, 256, 4,096).
- **Denary to hexadecimal directly**: divide repeatedly by 16 and read the remainders from the last to the first.

**Worked example 2.** Convert &3F7 to denary, and 750 to hexadecimal.

```
&3F7 = (3 × 256) + (15 × 16) + (7 × 1) = 768 + 240 + 7 = 1015

750 ÷ 16 = 46 remainder 14  → E
 46 ÷ 16 =  2 remainder 14  → E
  2 ÷ 16 =  0 remainder 2   → 2
Read upwards: 750 = &2EE
Check: (2 × 256) + (14 × 16) + 14 = 512 + 224 + 14 = 750
```

Always check a conversion by converting back; it takes seconds and catches most slips.

## Binary Coded Decimal (BCD)

In BCD each **denary digit** is stored as its own 4-bit binary code. The number as a whole is not converted.

```
2709 in BCD = 0010 0111 0000 1001
             (2)  (7)  (0)  (9)
```

Only 0000 to 1001 are valid BCD codes; 1010 to 1111 never appear. To decode, read each nibble as one digit: 1001 0100 0110 = 946.

BCD is used where each denary digit must be handled separately or stored exactly: digital clocks, calculators and electronic displays (each digit drives its own display unit), and financial systems where values such as 0.10 must be stored without the rounding errors that a pure binary fraction can introduce. The cost is space: BCD needs 16 bits for 2709, while pure binary needs only 12 (101010010101).

## One's complement and two's complement

Both represent negative integers; the most significant bit (MSB) shows the sign, 1 for negative.

- **One's complement**: write the positive value, then invert every bit.
- **Two's complement**: invert every bit, then add 1. Equivalently, the MSB has a **negative** place value (−128 in 8 bits).

**Worked example 3.** Represent −89 in 8 bits.

```
+89                = 01011001
One's complement   = 10100110
Two's complement   = 10100110 + 1 = 10100111
Check: −128 + 32 + 4 + 2 + 1 = −89
```

To read a two's complement number, use the negative MSB directly: 11100110 = −128 + 64 + 32 + 4 + 2 = −26.

**Ranges for n bits:** unsigned 0 to 2ⁿ − 1; two's complement −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1 (−128 to +127 in 8 bits); one's complement −(2ⁿ⁻¹ − 1) to 2ⁿ⁻¹ − 1, because it wastes a pattern on a second zero (11111111 is "−0").

## Binary addition, subtraction and overflow

Add column by column from the right: 1 + 1 = 0 carry 1; 1 + 1 + 1 = 1 carry 1. To **subtract**, add the two's complement of the second number and ignore any carry out of the MSB.

**Worked example 4.** 45 − 73 in 8-bit two's complement.

```
 45 = 00101101
−73 = 10110111   (73 = 01001001, inverted 10110110, +1)
      --------
sum = 11100100   = −128 + 64 + 32 + 4 = −28
```

The result is negative, as expected, and correct.

**Overflow** happens when the true result is outside the range the bits can hold. For signed numbers the test is simple: if two numbers with the **same** sign are added and the result has the **opposite** sign, overflow has occurred.

```
117 = 01110101
 44 = 00101100
sum = 10100001   true answer 161, but this reads as −95
```

Both inputs are positive, the result's MSB is 1, so the answer has overflowed: +161 cannot be held in 8-bit two's complement. Adding a positive and a negative number can never overflow.

## Hexadecimal in practice

Hexadecimal is a shorthand for binary that people find easier to read and copy correctly, since each hex digit stands for exactly four bits. Uses include memory addresses shown by debuggers, colour codes in web pages (#FF8000 gives red 255, green 128, blue 0), MAC addresses on network cards, and error or status codes displayed to technicians. The computer still stores binary; hex exists for people.

## Character sets

A character set gives every character a unique binary code.

| Set | Bits per character | Characters | Notes |
|---|---|---|---|
| ASCII | 7 | 128 | English letters, digits, punctuation, control codes |
| Extended ASCII | 8 | 256 | Adds accented letters and symbols; the extra 128 vary between versions |
| Unicode | Up to 32 | Very many | Covers most of the world's writing systems and emoji; ASCII codes kept as its first 128 |

You will not be asked to memorise codes, but you should use given codes sensibly. Letters are stored in alphabetical order, so if a question tells you "A" is 65, then "D" is 68. Upper-case and lower-case letters have different codes, which is why "a" and "A" sort differently.

**Storage consequence:** a 2,000-character message takes 2,000 bytes in extended ASCII but 8,000 bytes in a fixed 32-bit Unicode encoding. Unicode is needed for multilingual text, at the cost of space; variable-length encodings reduce that cost.

## Common mistakes

- Using 1,000 instead of 1,024 (or the reverse) when the question names the other prefix.
- Grouping bits into nibbles from the left when converting to hex; group from the right and pad with leading zeros.
- Forgetting to add 1 after inverting, which gives one's complement, not two's.
- Converting a whole number to binary and calling it BCD.
- Explaining overflow as "too many bits" without saying the result no longer fits the number of bits available.
- Saying Unicode "uses 16 bits": the syllabus describes Unicode as using up to 32 bits.

## Exam technique

- **Convert / Calculate**: show the working (place values, divisions, the inverted pattern). Method marks are often available even if a final digit slips.
- **Show understanding**: define the idea and then apply it, for example "BCD stores each denary digit in four bits, so 59 becomes 0101 1001".
- **Describe** a practical application: name the device and say why the representation suits it.
- **Explain** overflow: give the range, show that the true result is outside it, and say what the stored result wrongly represents.

Next: condense the methods with the [data representation revision notes](/resources/cambridge-a-level-computer-science-9618-data-representation-revision-notes/), then try the [data representation practice questions](/resources/cambridge-a-level-computer-science-9618-data-representation-practice/). The [Information Representation revision notes](/resources/a-computer-science-data-representation-revision-notes/) cover 1.1 to 1.3 together.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 1.1 Data Representation. Published by Cambridge International.
