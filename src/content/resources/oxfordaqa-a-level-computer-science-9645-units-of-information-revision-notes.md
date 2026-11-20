---
title: "OxfordAQA A-Level Computer Science (9645): Units of information -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Units of Information Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "units-of-information-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.2: bits and bytes, 2^n values, binary and decimal prefixes, conversion rules and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.2 Units of information** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For longer worked examples, see the [units of information study guide](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information/); then practise with the [units of information practice questions](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-practice/).

## What the specification requires

- The **bit** is the fundamental unit of information; a **byte** is a group of **8 bits**.
- **2^n different values** can be represented with *n* bits (for example 3 bits give 2^3 = 8 patterns).
- Quantities of bytes can use **binary prefixes** (powers of 2) or **decimal prefixes** (powers of 10). One kibibyte is 1 KiB = 2^10 B; one kilobyte is 1 kB = 10^3 B. The terms kibibyte, mebibyte and so on have replaced the historic meanings of kilobyte, megabyte and so on.
- Know the **names, symbols and powers** of the binary prefixes kibi, mebi, gibi, tebi and the decimal prefixes kilo, mega, giga, tera.

## Key terms

| Term | Meaning |
|---|---|
| Bit | A binary digit, 0 or 1; the fundamental unit of information |
| Byte | A group of 8 bits |
| Binary prefix | A prefix meaning a power of 2 (kibi, mebi, gibi, tebi) |
| Decimal prefix | A prefix meaning a power of 10 (kilo, mega, giga, tera) |
| Pattern | One distinct arrangement of bits |

## Prefix tables

| Binary | Symbol | Power of 2 | Decimal | Symbol | Power of 10 |
|---|---|---|---|---|---|
| kibi | Ki | 2^10 = 1,024 | kilo | k | 10^3 = 1,000 |
| mebi | Mi | 2^20 = 1,048,576 | mega | M | 10^6 |
| gibi | Gi | 2^30 = 1,073,741,824 | giga | G | 10^9 |
| tebi | Ti | 2^40 = 1,099,511,627,776 | tera | T | 10^12 |

Unit symbols: KiB, MiB, GiB, TiB against kB, MB, GB, TB. The capital B means byte; a small b means bit.

The binary unit is larger than its decimal neighbour by 2.4% (kibi against kilo), 4.9% (mebi), 7.4% (gibi) and 10.0% (tebi). Recomputed.

## Counting values from bits

- Each extra bit **doubles** the number of patterns.
- *n* bits give 2^n patterns, so unsigned values 0 to 2^n − 1.

| Bits | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 16 |
|---|---|---|---|---|---|---|---|---|---|---|
| Patterns | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 1,024 | 65,536 |

To find the **bits needed** for *v* values, find the smallest *n* with 2^n ≥ *v*.

| Values | Bits |
|---|---|
| 5 | 3 |
| 26 | 5 |
| 52 | 6 |
| 300 | 9 |
| 1,000 | 10 |

## Conversion rules

| From | To | Operation |
|---|---|---|
| MiB | KiB | × 1,024 |
| KiB | MiB | ÷ 1,024 |
| GiB | MiB | × 1,024 |
| MB | kB | × 1,000 |
| GB | MB | × 1,000 |
| B | bits | × 8 |
| bits | B | ÷ 8 |

Going to a smaller unit gives a bigger number. Going to a larger unit gives a smaller number.

## Worked reminders

All results recomputed.

| Conversion | Working | Result |
|---|---|---|
| 6 MiB to KiB | 6 × 1,024 | 6,144 KiB |
| 12,288 KiB to MiB | 12,288 ÷ 1,024 | 12 MiB |
| 8 GiB to MiB | 8 × 1,024 | 8,192 MiB |
| 2.5 TB to GB | 2.5 × 1,000 | 2,500 GB |
| 750 MB to bytes | 750 × 1,000,000 | 750,000,000 B |
| 320 kB to bytes | 320 × 1,000 | 320,000 B |
| 3,670,016 B to MiB | 3,670,016 ÷ 1,048,576 | 3.5 MiB |
| 4 GiB to bytes | 4 × 2^30 | 4,294,967,296 B |
| 40 GB drive in GiB | 40,000,000,000 ÷ 1,073,741,824 | about 37.3 GiB |

The last row explains why an operating system can report less space than the drive's label: the label uses decimal GB, the report uses binary GiB.

## Small examples

- 12 states need 4 bits (2^3 = 8 is too few, 2^4 = 16 is enough).
- 90 values need 7 bits (2^7 = 128).
- A 2 KiB block holds 2 × 1,024 × 8 = 16,384 bits.

## Exam traps

- **kB is 1,000 B; KiB is 1,024 B.** Do not swap them.
- **b is a bit, B is a byte.** Read the capital letter.
- **Direction of conversion.** Check whether the result should be bigger or smaller.
- **2^n, not 2n.** Each added bit doubles the count.
- **Highest unsigned value** with *n* bits is 2^n − 1.
- **Symbols.** Ki, Mi, Gi, Ti (binary); k, M, G, T (decimal).
- **Show the power of 2 or 10** you used, since it shows the system.

## Quick self-test

1. How many bits are in a byte?
2. How many patterns do 6 bits give?
3. How many bits are needed to represent 52 different values?
4. Write 1 KiB in bytes and 1 kB in bytes.
5. State the symbol and the power of 2 for mebi.
6. State the symbol and the power of 10 for giga.
7. Convert 6 MiB to KiB.
8. Convert 2.5 TB to GB.
9. How many bytes are in 4 GiB?
10. Which is larger, 1 GiB or 1 GB, and by about how much?
11. Why does a 40 GB drive appear as about 37.3 GiB?
12. What is the largest unsigned value that 10 bits can hold?

### Answers

1. 8.
2. 64.
3. 6.
4. 1,024 bytes and 1,000 bytes.
5. Mi, 2^20.
6. G, 10^9.
7. 6,144 KiB.
8. 2,500 GB.
9. 4,294,967,296.
10. 1 GiB, by about 7.4%.
11. The label uses decimal GB (10^9) and the display uses binary GiB (2^30).
12. 1,023.

## Next steps

- [Units of information study guide](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information/)
- [Units of information practice questions](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-practice/)
- [Number bases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-number-bases-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.2 Units of information.
