---
title: "AQA A-Level Computer Science (7517): Number bases"
seoTitle: "AQA A-Level Computer Science Number Bases Binary Hex Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "number-bases-7517"
description: "Deeper guide to AQA 7517 section 4.5.2 Number bases: converting between decimal, binary and hexadecimal, and why hexadecimal is used as a shorthand for binary."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.5.2 Number bases** in AQA A-Level Computer Science (7517). The only content block is **4.5.2.1 Number base**. The specification asks you to:

- be familiar with the concept of a **number base**, in particular **decimal (base 10)**, **binary (base 2)** and **hexadecimal (base 16)**;
- **convert between decimal, binary and hexadecimal**;
- be familiar with, and able to use, **hexadecimal as a shorthand for binary**, and understand **why it is used in this way**.

The specification also expects you to write a number's base as a subscript: base 10 as Number₁₀, for example 67₁₀; base 2 as Number₂, for example 10011011₂; base 16 as Number₁₆, for example AE₁₆.

The wider [fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) covers all of section 4.5. Condensed notes are in the [number bases revision notes](/resources/aqa-a-level-computer-science-7517-number-bases-revision-notes/), and exam-style questions are in the [number bases practice questions](/resources/aqa-a-level-computer-science-7517-number-bases-practice/).

## What a number base is

A **positional number system** writes a number as a row of digits, where each position has a **place value**. The **base** (or radix) is the number of different digit symbols and also the factor by which place values grow from one position to the next.

In decimal (base 10) the digits are 0 to 9, and the place values are powers of 10: …, 1000, 100, 10, 1. So 482₁₀ means 4 × 100 + 8 × 10 + 2 × 1.

In **binary** (base 2) the only digits are 0 and 1, and the place values are powers of 2: …, 128, 64, 32, 16, 8, 4, 2, 1. Computers use binary because electronic components have two reliable states, such as on and off, or high and low voltage.

In **hexadecimal** (base 16) there are sixteen digit symbols. Since we only have ten numerals, the letters A to F stand for the values ten to fifteen. The place values are powers of 16: …, 4096, 256, 16, 1.

| Decimal | Binary | Hex | Decimal | Binary | Hex |
|---|---|---|---|---|---|
| 0 | 0000 | 0 | 8 | 1000 | 8 |
| 1 | 0001 | 1 | 9 | 1001 | 9 |
| 2 | 0010 | 2 | 10 | 1010 | A |
| 3 | 0011 | 3 | 11 | 1011 | B |
| 4 | 0100 | 4 | 12 | 1100 | C |
| 5 | 0101 | 5 | 13 | 1101 | D |
| 6 | 0110 | 6 | 14 | 1110 | E |
| 7 | 0111 | 7 | 15 | 1111 | F |

Learn this table. Every conversion between hex and binary uses it.

## Converting binary to decimal

Write the place values over the bits, then add the place values where the bit is 1.

**Worked example 1.** Convert 11010110₂ to decimal.

| Place value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|
| Bit | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 |

128 + 64 + 16 + 4 + 2 = **214**. So 11010110₂ = 214₁₀.

## Converting decimal to binary

There are two reliable methods.

### Method 1: subtract place values

Start from the largest place value. If it fits into the number, write 1 and subtract; otherwise write 0.

**Worked example 2.** Convert 173₁₀ to binary.

| Place value | Fits? | Remainder | Bit |
|---|---|---|---|
| 128 | yes (173 − 128) | 45 | 1 |
| 64 | no | 45 | 0 |
| 32 | yes (45 − 32) | 13 | 1 |
| 16 | no | 13 | 0 |
| 8 | yes (13 − 8) | 5 | 1 |
| 4 | yes (5 − 4) | 1 | 1 |
| 2 | no | 1 | 0 |
| 1 | yes (1 − 1) | 0 | 1 |

Reading the bits from the top: **10101101₂**.

### Method 2: repeated division by 2

Divide by 2, write the remainder, divide the quotient by 2 again, and so on until the quotient is 0. The remainders **read from bottom to top** give the binary number.

| Number | ÷ 2 | Remainder |
|---|---|---|
| 173 | 86 | 1 |
| 86 | 43 | 0 |
| 43 | 21 | 1 |
| 21 | 10 | 1 |
| 10 | 5 | 0 |
| 5 | 2 | 1 |
| 2 | 1 | 0 |
| 1 | 0 | 1 |

Reading the remainders from bottom to top: **10101101₂**, as before. Reading from top to bottom is the most common slip, and it gives the reverse of the right answer.

## Converting hexadecimal to decimal

Multiply each digit by its place value (a power of 16) and add. The letters A to F stand for 10 to 15.

**Worked example 3.** Convert B7₁₆ to decimal. B is 11, so 11 × 16 + 7 × 1 = 176 + 7 = **183**.

**Worked example 4.** Convert 1B4₁₆ to decimal. 1 × 256 + 11 × 16 + 4 × 1 = 256 + 176 + 4 = **436**.

## Converting decimal to hexadecimal

Use repeated division by 16, reading the remainders from the bottom to the top and converting any remainder of 10 to 15 into a letter.

**Worked example 5.** Convert 1000₁₀ to hexadecimal.

| Number | ÷ 16 | Remainder | Hex digit |
|---|---|---|---|
| 1000 | 62 | 8 | 8 |
| 62 | 3 | 14 | E |
| 3 | 0 | 3 | 3 |

Reading from the bottom: **3E8₁₆**. Check: 3 × 256 + 14 × 16 + 8 = 768 + 224 + 8 = 1000.

An alternative is to convert to binary first and then to hex, using the shortcut in the next section.

## Binary and hexadecimal: the shortcut

Because 16 = 2⁴, **one hex digit corresponds exactly to four bits**. A group of four bits is called a **nibble**. This makes conversion between binary and hex direct, with no arithmetic.

**Binary to hex.** Split the binary number into groups of four bits starting from the **right** (pad on the left with zeros if needed), and replace each group with its hex digit.

**Worked example 6.** Convert 10101101₂ to hex. Groups: 1010 and 1101. 1010 is A and 1101 is D. The result is **AD₁₆**.

**Worked example 7.** Convert 101110100101₂ to hex. Groups: 1011, 1010, 0101, giving B, A, 5: **BA5₁₆**.

**Worked example 8.** Convert 110010₂ to hex. Pad on the left to make groups of four: 0011 0010, giving **32₁₆**.

**Hex to binary.** Replace each hex digit with its four-bit group.

**Worked example 9.** Convert 3F₁₆ to binary. 3 is 0011 and F is 1111, so the result is **00111111₂**. The leading zeros can be dropped to give 111111₂, which is 63₁₀.

## Why hexadecimal is used as a shorthand for binary

- **Compact.** A hex number is a quarter the length of the binary number. A 16-bit value such as 1011101001010011₂ is just BA53₁₆.
- **Easier for people to read, copy and remember.** Long strings of 0s and 1s are easy to mistake. Fewer symbols mean **fewer transcription errors**.
- **Simple conversion.** Each hex digit maps to exactly four bits, so the conversion is direct, which is not true of decimal. Decimal does not line up with groups of bits.
- **Bytes fit neatly.** A byte (8 bits) is exactly two hex digits, from 00 to FF.

Hexadecimal is only a human convenience. The computer stores and processes the binary pattern. Typical uses are **memory addresses**, **colour codes** in web pages (for example the three bytes FF, 80 and 00 describe an orange shade), **machine code and debugging output**, and **MAC addresses**.

## Useful values to remember

| Bits | Largest unsigned value | In hex |
|---|---|---|
| 4 | 15 | F |
| 8 | 255 | FF |
| 12 | 4095 | FFF |
| 16 | 65535 | FFFF |

## Common mistakes

- Reading remainders from top to bottom after repeated division.
- Forgetting that A is 10 and F is 15, or using the value 16 for a digit.
- Grouping bits from the left instead of the right when converting binary to hex.
- Mixing up place values: in hexadecimal they are powers of 16, not of 10.
- Missing leading zeros in a nibble, for example writing 11 for 0011.
- Omitting the base subscript when a number could be read in more than one base, such as 101.
- Treating hexadecimal as a way for computers to store data more efficiently. It does not change the storage.

## Exam technique

- **Show the working**: place values for binary, a division table for repeated division.
- **Check** a decimal to binary conversion by converting back.
- **Use the nibble shortcut** to convert between hex and binary, then convert to decimal if needed.
- **Explain hex**: say it is shorter, easier to read and less error-prone for people, with each digit being four bits.

## More resources on this topic

- [Number bases revision notes](/resources/aqa-a-level-computer-science-7517-number-bases-revision-notes/)
- [Number bases practice questions](/resources/aqa-a-level-computer-science-7517-number-bases-practice/)
- [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)
- [Units of information study guide](/resources/aqa-a-level-computer-science-7517-units-of-information/)

*Written against the AQA A-level Computer Science (7517) specification, 4.5.2 Number bases. Always check the current specification on the AQA website.*
