---
title: "AQA A-Level Computer Science (7517): Units of information -- Revision Notes"
seoTitle: "AQA A-Level CS Units of Information Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.5.3 recall: bits, bytes, 2 to the power n values, binary and decimal prefixes, size calculations and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.5.3 Units of information**, AQA A-Level Computer Science (7517): bits and bytes, the fact that n bits give 2ⁿ values, and the **binary** (kibi, mebi, gibi, tebi) and **decimal** (kilo, mega, giga, tera) prefixes. Fuller explanations are in the [units of information study guide](/resources/aqa-a-level-computer-science-7517-units-of-information/); exam-style questions are in the [units of information practice questions](/resources/aqa-a-level-computer-science-7517-units-of-information-practice/).

## Bits and bytes

- A **bit** is the fundamental unit of information: **0 or 1**.
- A **byte** is a group of **8 bits**. A **nibble** is 4 bits.
- **n bits can represent 2ⁿ different values.**

| Bits | Values |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 (000 to 111) |
| 4 | 16 |
| 8 | 256 |
| 10 | 1,024 |
| 16 | 65,536 |

The number of values is **not** the largest number stored. For unsigned binary, the range is 0 to 2ⁿ − 1.

## How many bits are needed?

Find the smallest n with 2ⁿ ≥ N (round **up**).

| Values | Bits | Check |
|---|---|---|
| 26 | 5 | 2⁴ = 16 is too few; 2⁵ = 32 |
| 100 | 7 | 2⁶ = 64 is too few; 2⁷ = 128 |
| 257 | 9 | 2⁸ = 256 is one short |
| 1,000 | 10 | 2⁹ = 512 is too few; 2¹⁰ = 1,024 |

## Prefixes

### Decimal (powers of 10)

| Name | Symbol | Power | Bytes |
|---|---|---|---|
| kilo | k | 10³ | 1,000 |
| mega | M | 10⁶ | 1,000,000 |
| giga | G | 10⁹ | 1,000,000,000 |
| tera | T | 10¹² | 1,000,000,000,000 |

### Binary (powers of 2)

| Name | Symbol | Power | Bytes |
|---|---|---|---|
| kibi | Ki | 2¹⁰ | 1,024 |
| mebi | Mi | 2²⁰ | 1,048,576 |
| gibi | Gi | 2³⁰ | 1,073,741,824 |
| tebi | Ti | 2⁴⁰ | 1,099,511,627,776 |

- Example from the specification: **1 KiB = 2¹⁰ B** and **1 kB = 10³ B**.
- Historically "kilobyte", "megabyte" and so on have often been used when kibibyte, mebibyte and so on are meant.
- The binary unit is larger than its decimal partner by 2.4% (kilo), about 4.9% (mega), about 7.4% (giga) and about 10% (tera).

## Conversion rules

- Binary prefixes: each step is a factor of **1,024**.
- Decimal prefixes: each step is a factor of **1,000**.
- Between systems: convert to **bytes** first.
- Bits to bytes: **÷ 8**. Bytes to bits: **× 8**.

## Worked checks

- **500 GB in GiB:** 500 × 10⁹ ÷ 2³⁰ = 500,000,000,000 ÷ 1,073,741,824 = about 465.7 GiB.
- **3 MiB in bytes:** 3 × 1,048,576 = 3,145,728 bytes. In bits: × 8 = 25,165,824.
- **1.5 MiB in KiB:** 1.5 × 1,024 = 1,536 KiB.
- **12 KiB against 12 kB:** 12,288 B against 12,000 B.

## Method for any unit question

1. Decide whether each prefix is **decimal** (k, M, G, T) or **binary** (Ki, Mi, Gi, Ti).
2. Convert everything to **bytes** (or bits) using the correct power.
3. Calculate.
4. Convert the answer to the unit asked for.
5. Write the **unit** in the answer.

**Worked example.** A 64 GB card holds songs of 4 MB each. Songs = 64 × 10⁹ ÷ (4 × 10⁶) = 16,000. Using one system of units throughout avoids errors of several per cent.

**Worked example.** An address of 32 bits gives 2³² = 4,294,967,296 locations. If each holds one byte, that is 4 GiB.

**Worked example.** A page of 3,000 characters at one byte each needs 3,000 bytes, just under 3 kB. As a fraction of a MiB it is 3,000 ÷ 1,048,576, about 0.003 MiB.

## Why advertised and reported capacities differ

A manufacturer labels a drive using **decimal** prefixes (1 GB = 10⁹ bytes). The operating system may report using **binary** units (1 GiB = 2³⁰ bytes). The same number of bytes is a smaller figure in the larger unit, so a "500 GB" drive appears as about 465.7 GiB. No space has been lost.

## Why memory comes in powers of 2

Memory locations are addressed with binary numbers. With n address bits there are 2ⁿ locations, so sizes like 4 GiB (2³² bytes) arise naturally.

## Exam traps

- **n² or 2n** instead of **2ⁿ**.
- **Number of values against largest value:** 2ⁿ against 2ⁿ − 1.
- **1,000 for a kibibyte** or 1,024 for a kilobyte.
- **Bits against bytes** left unconverted.
- **Rounding down** the number of bits.
- **Small b and capital B** mixed up (bit against byte).

## Key terms

| Term | Definition |
|---|---|
| Bit | The fundamental unit of information; 0 or 1 |
| Byte | A group of 8 bits |
| Nibble | A group of 4 bits |
| Kibibyte (KiB) | 2¹⁰ = 1,024 bytes |
| Kilobyte (kB) | 10³ = 1,000 bytes |
| Mebibyte (MiB) | 2²⁰ bytes |
| Gibibyte (GiB) | 2³⁰ bytes |
| Tebibyte (TiB) | 2⁴⁰ bytes |
| Binary prefix | A prefix representing a power of 2 |
| Decimal prefix | A prefix representing a power of 10 |

## Self-test

1. How many bits are in a byte?
2. How many different values can 6 bits represent?
3. How many bits are needed for 300 different values?
4. State the number of bytes in 1 KiB.
5. State the number of bytes in 1 kB.
6. State the power of 2 for a gibibyte.
7. How many bytes are in 2 MiB?
8. How many bits are in 2 KiB?
9. Why might a 1 TB drive be reported as about 931 GiB?
10. Which is larger, a gigabyte or a gibibyte?

**Answers**

1. 8.
2. 2⁶ = 64.
3. 9 bits, because 2⁸ = 256 is too small and 2⁹ = 512 is enough.
4. 1,024 (2¹⁰).
5. 1,000 (10³).
6. 2³⁰.
7. 2 × 1,048,576 = 2,097,152.
8. 2 × 1,024 × 8 = 16,384.
9. 1 TB is 10¹² bytes. Dividing by 2³⁰ gives about 931, so the same number of bytes is reported in the larger binary unit.
10. A gibibyte (1,073,741,824 bytes against 1,000,000,000).

## Related resources

- [Units of information study guide](/resources/aqa-a-level-computer-science-7517-units-of-information/)
- [Units of information practice questions](/resources/aqa-a-level-computer-science-7517-units-of-information-practice/)
- [Number bases revision notes](/resources/aqa-a-level-computer-science-7517-number-bases-revision-notes/)
- [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)
