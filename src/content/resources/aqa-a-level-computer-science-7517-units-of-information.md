---
title: "AQA A-Level Computer Science (7517): Units of information"
seoTitle: "AQA A-Level CS Units of Information Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data representation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
  - qualification: "a-level"
    topic: "fundamentals-of-data-representation"
    subtopic: "units-of-information-7517"
description: "Deeper guide to AQA 7517 section 4.5.3 Units of information: bits and bytes, 2 to the power n values, and binary and decimal prefixes such as kibibyte and kilobyte."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.5.3 Units of information** in AQA A-Level Computer Science (7517). It has two content blocks:

- **4.5.3.1 Bits and bytes**: the bit as the fundamental unit of information, the byte as a group of 8 bits, and the fact that **n bits can represent 2ⁿ different values**;
- **4.5.3.2 Units**: quantities of bytes described with **binary prefixes** (powers of 2) or **decimal prefixes** (powers of 10).

The wider [fundamentals of data representation study guide](/resources/aqa-a-level-computer-science-fundamentals-of-data-representation-study-guide/) covers all of section 4.5. Condensed notes are in the [units of information revision notes](/resources/aqa-a-level-computer-science-7517-units-of-information-revision-notes/), and exam-style questions are in the [units of information practice questions](/resources/aqa-a-level-computer-science-7517-units-of-information-practice/).

## Bits and bytes

A **bit** (short for binary digit) is the fundamental unit of information. It is either **0 or 1**. Everything a computer stores, whether numbers, text, images, sound or programs, is held as patterns of bits.

A **byte** is a group of **8 bits**. It is the usual unit for measuring the size of a file or of memory. A group of 4 bits is a **nibble**, so a byte is two nibbles.

### How many values can n bits represent?

Each bit has two possible values, and the choices are independent, so the number of different patterns doubles with every extra bit. **n bits can represent 2ⁿ different values.**

For 3 bits there are 2³ = 8 patterns:

000, 001, 010, 011, 100, 101, 110, 111

| Bits | Patterns | Notes |
|---|---|---|
| 1 | 2 | 0 and 1 |
| 2 | 4 | 00, 01, 10, 11 |
| 3 | 8 | as listed above |
| 4 | 16 | one hex digit |
| 8 | 256 | one byte |
| 10 | 1,024 | |
| 16 | 65,536 | |
| 32 | 4,294,967,296 | |

The number of patterns is **how many different things** can be distinguished. It is not the largest number that can be stored. With 8 bits there are 256 patterns, which could stand for the unsigned numbers 0 to 255, or for 256 different colours, or 256 different characters. How the patterns are interpreted is a separate matter (see the [binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)).

### How many bits are needed?

To represent N different values, find the smallest n such that 2ⁿ ≥ N. This is the same as rounding up log₂ N.

**Worked example 1.** How many bits are needed to give each of 26 letters a different code?
2⁴ = 16, which is too few. 2⁵ = 32, which is enough. **5 bits** are needed.

**Worked example 2.** How many bits are needed to number 1000 pupils?
2⁹ = 512 is too small and 2¹⁰ = 1024 is enough. **10 bits** are needed.

**Worked example 3.** A system has 257 different states. 2⁸ = 256 is one short, so **9 bits** are needed. This shows that adding one more value to a full set costs a whole extra bit.

| Number of values | Bits needed |
|---|---|
| 2 | 1 |
| 5 | 3 |
| 26 | 5 |
| 100 | 7 |
| 200 | 8 |
| 257 | 9 |
| 1,000 | 10 |
| 1,000,000 | 20 |

## Units: decimal and binary prefixes

Two sets of prefixes are used to describe quantities of bytes.

### Decimal prefixes (powers of 10)

| Prefix | Symbol | Power of 10 | Value in bytes |
|---|---|---|---|
| kilo | k | 10³ | 1,000 |
| mega | M | 10⁶ | 1,000,000 |
| giga | G | 10⁹ | 1,000,000,000 |
| tera | T | 10¹² | 1,000,000,000,000 |

So 1 kB = 10³ B, and a kilobyte is 1,000 bytes.

### Binary prefixes (powers of 2)

| Prefix | Symbol | Power of 2 | Value in bytes |
|---|---|---|---|
| kibi | Ki | 2¹⁰ | 1,024 |
| mebi | Mi | 2²⁰ | 1,048,576 |
| gibi | Gi | 2³⁰ | 1,073,741,824 |
| tebi | Ti | 2⁴⁰ | 1,099,511,627,776 |

So 1 KiB = 2¹⁰ B, and a kibibyte is 1,024 bytes.

The names kibi, mebi, gibi and tebi come from "kilo binary", "mega binary" and so on. The specification notes that, **historically, the terms kilobyte, megabyte and so on have often been used when kibibyte, mebibyte and so on are meant.** Memory sizes are naturally powers of 2 because of the way addresses work, so RAM comes in sizes such as 8 GiB. Storage devices and network speeds are usually sold using decimal prefixes.

### Why the difference matters

The gap between the two systems grows with each step:

| Step | Decimal | Binary | Binary is bigger by |
|---|---|---|---|
| Kilo / kibi | 1,000 | 1,024 | 2.4% |
| Mega / mebi | 1,000,000 | 1,048,576 | about 4.9% |
| Giga / gibi | 10⁹ | 1,073,741,824 | about 7.4% |
| Tera / tebi | 10¹² | 1,099,511,627,776 | about 10% |

**Worked example 4.** A storage drive is sold as 500 GB. How many GiB does an operating system report if it uses binary units?
500 GB = 500 × 10⁹ bytes = 500,000,000,000 bytes.
1 GiB = 2³⁰ = 1,073,741,824 bytes.
500,000,000,000 ÷ 1,073,741,824 = **about 465.7 GiB**.
The drive has not lost any space: the two figures are the same number of bytes written in different units.

**Worked example 5.** A file is 3 MiB. How many bytes and how many bits is that?
3 × 2²⁰ = 3 × 1,048,576 = **3,145,728 bytes**.
Each byte has 8 bits: 3,145,728 × 8 = **25,165,824 bits**.

**Worked example 6.** A photograph is 1.5 MiB. Express this in KiB.
1 MiB = 2¹⁰ KiB = 1,024 KiB. 1.5 × 1,024 = **1,536 KiB**.

**Worked example 7.** Compare 12 KiB and 12 kB.
12 KiB = 12 × 1,024 = 12,288 B. 12 kB = 12 × 1,000 = 12,000 B. The difference is 288 bytes.

### Converting between prefixes

- **Within the binary system**, each step up divides by 1,024 (2¹⁰), and each step down multiplies by 1,024. A shortcut for the exam is to shift by powers of 2: 1 MiB = 2²⁰ B.
- **Within the decimal system**, each step is a factor of 1,000.
- **Between the systems**, convert to bytes first.

To convert bits to bytes, divide by 8. To convert bytes to bits, multiply by 8.

## Units in context

Prefixes help when you estimate how much space something needs.

**Text.** If each character is stored in one byte, a page of 3,000 characters needs about 3,000 bytes, which is just under 3 kB. A novel of 600,000 characters needs about 600 kB, a little under 1 MiB.

**Memory addresses.** If an address is made of n bits, there are 2ⁿ distinct addresses. With 32 address bits that is 2³² = 4,294,967,296 locations. If each location holds one byte, that is 4 GiB of memory. This is why the binary prefixes suit memory sizes so well: the capacity is exactly a power of two.

**Estimating a collection.** A phone has 64 GB of free storage. Each song is about 4 MB. The number of songs is 64 × 10⁹ ÷ (4 × 10⁶) = 16,000. If the same storage were quoted in binary units, the calculation would have to use 2³⁰ and 2²⁰ consistently, otherwise the estimate is wrong by several per cent. The golden rule is to use **one system of units throughout** a calculation and convert at the start.

**A method for any unit question.**

1. Identify whether the prefix is decimal or binary from its name or symbol: k, M, G, T are decimal; Ki, Mi, Gi, Ti are binary.
2. Convert everything to bytes (or bits) using the correct power.
3. Calculate.
4. Convert the answer back to the unit requested.
5. State the unit in the answer.

## Common mistakes

- Saying that n bits can represent n² or 2n values. The correct number is **2ⁿ**.
- Confusing the number of values (2ⁿ) with the largest value (2ⁿ − 1 for unsigned binary).
- Using 1,000 for a kibibyte or 1,024 for a kilobyte.
- Forgetting to convert bytes to bits (× 8) when the question asks for bits.
- Dividing by 1,000 when converting within the binary system.
- Choosing the number of bits by rounding down. Always round **up**.
- Writing lower-case b for bytes. A convention is B for byte and b for bit.

## Exam technique

- **How many values**: write 2ⁿ and the value, for example 2⁶ = 64.
- **How many bits**: find the first power of 2 that is at least as large as the number of values, and show the check.
- **Unit conversions**: write down the power of 2 or 10, then the multiplication, then the result.
- **Explain a discrepancy** in reported capacity: decimal prefixes on the label, binary prefixes in the software.

## More resources on this topic

- [Units of information revision notes](/resources/aqa-a-level-computer-science-7517-units-of-information-revision-notes/)
- [Units of information practice questions](/resources/aqa-a-level-computer-science-7517-units-of-information-practice/)
- [Number bases study guide](/resources/aqa-a-level-computer-science-7517-number-bases/)
- [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)

*Written against the AQA A-level Computer Science (7517) specification, 4.5.3 Units of information. Always check the current specification on the AQA website.*
