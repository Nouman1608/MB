---
title: "OxfordAQA A-Level Computer Science (9645): Units of information"
seoTitle: "OxfordAQA A-Level CS 9645 Units of Information Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.2 in depth: bits and bytes, 2^n values, binary and decimal prefixes, and worked size conversions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.2 Units of information** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). The specification says you must know that the **bit** is the fundamental unit of information and that a **byte** is a group of 8 bits; that **2^n different values** can be represented with *n* bits; that quantities of bytes can be described using **binary prefixes** (powers of 2) or **decimal prefixes** (powers of 10); and the **names, symbols and powers** of the four binary and four decimal prefixes.

For quick recall use the [units of information revision notes](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-revision-notes/), then try the [units of information practice questions](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5.

## Bits and bytes

A **bit** (binary digit) is the smallest unit of information. It has two possible values, 0 and 1, which a computer stores as two distinct electrical, magnetic or optical states. A **byte** is a group of **8 bits**. The byte is the usual unit for measuring storage and file sizes.

Because 8 bits can be arranged in 2^8 = 256 ways, one byte can hold a value from 0 to 255 if used as an unsigned binary number (see sub-topic 3.5.3.1), or one of 256 different codes.

## 2^n values from n bits

With *n* bits there are 2^n different patterns. Each extra bit **doubles** the number of patterns, because the new bit can be 0 or 1 on top of every existing pattern.

| Bits (*n*) | Patterns (2^n) |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
| 5 | 32 |
| 6 | 64 |
| 7 | 128 |
| 8 | 256 |
| 10 | 1,024 |
| 16 | 65,536 |
| 24 | 16,777,216 |

The specification's example is 3 bits: 2^3 = 8 patterns, namely 000, 001, 010, 011, 100, 101, 110 and 111.

### Working out how many bits you need

To represent *v* different values you need the **smallest *n* such that 2^n is at least *v***.

| Values to represent | Bits needed | Check |
|---|---|---|
| 26 letters of the alphabet | 5 | 2^4 = 16 is too small; 2^5 = 32 is enough |
| 52 (upper and lower case letters) | 6 | 2^5 = 32 is too small; 2^6 = 64 is enough |
| 100 | 7 | 2^6 = 64 is too small; 2^7 = 128 is enough |
| 200 | 8 | 2^7 = 128 is too small; 2^8 = 256 is enough |
| 1,000 | 10 | 2^9 = 512 is too small; 2^10 = 1,024 is enough |
| 65,536 | 16 | exactly 2^16 |

### Worked example 1: bits for a traffic light controller

A controller must signal 5 states (red, red and amber, green, amber, flashing). 2^2 = 4 is too few; 2^3 = 8 is enough, so **3 bits** are needed. Three of the 8 patterns are unused.

### Worked example 2: two ways to see the same fact

A colour display uses 4 bits per pixel. It can show 2^4 = **16** colours. If the designer needs at least 200 colours, 8 bits are needed (2^8 = 256), and 7 bits (128) would not be enough.

## Prefixes: powers of 10 and powers of 2

Computer memory is built from doubling, so quantities are naturally powers of 2. Everyday decimal prefixes (kilo, mega) are powers of 10. This led to confusion, because "kilobyte" was used for both 1,000 and 1,024 bytes. The specification notes that the terms **kibibyte, mebibyte and so on have replaced the historic meanings** of kilobyte, megabyte, etc.

### Binary prefixes (powers of 2)

| Prefix | Symbol | Power of 2 | Value | Unit symbol |
|---|---|---|---|---|
| kibi | Ki | 2^10 | 1,024 | KiB |
| mebi | Mi | 2^20 | 1,048,576 | MiB |
| gibi | Gi | 2^30 | 1,073,741,824 | GiB |
| tebi | Ti | 2^40 | 1,099,511,627,776 | TiB |

### Decimal prefixes (powers of 10)

| Prefix | Symbol | Power of 10 | Value | Unit symbol |
|---|---|---|---|---|
| kilo | k | 10^3 | 1,000 | kB |
| mega | M | 10^6 | 1,000,000 | MB |
| giga | G | 10^9 | 1,000,000,000 | GB |
| tera | T | 10^12 | 1,000,000,000,000 | TB |

So **1 KiB = 2^10 B = 1,024 B** and **1 kB = 10^3 B = 1,000 B**. Notice the capital K in Ki and the lower-case k in kilo, and that the binary prefixes end in "bi" (kibi, mebi, gibi, tebi).

### How big is the difference?

The binary unit is always larger than the decimal unit with a similar name, and the gap grows with each step. Recomputed:

| Pair | Binary value ÷ decimal value | Binary is larger by |
|---|---|---|
| KiB and kB | 1,024 ÷ 1,000 | 2.4% |
| MiB and MB | 1,048,576 ÷ 1,000,000 | 4.9% |
| GiB and GB | 1,073,741,824 ÷ 1,000,000,000 | 7.4% |
| TiB and TB | 1,099,511,627,776 ÷ 1,000,000,000,000 | 10.0% |

## Worked conversions

### Worked example 3: within the binary system

Convert 3 MiB to KiB. 1 MiB = 2^20 B and 1 KiB = 2^10 B, so 1 MiB = 2^10 KiB = 1,024 KiB. Therefore 3 MiB = 3 × 1,024 = **3,072 KiB**.

Convert 4,096 KiB to MiB: 4,096 ÷ 1,024 = **4 MiB**. Convert 1,536 KiB to MiB: 1,536 ÷ 1,024 = **1.5 MiB**.

### Worked example 4: within the decimal system

Convert 2.5 GB to MB: multiply by 1,000, giving **2,500 MB**. Convert 7,500,000 B to MB: divide by 1,000,000, giving **7.5 MB**.

### Worked example 5: between the two systems

Convert 5 MiB to bytes: 5 × 2^20 = 5 × 1,048,576 = **5,242,880 B**. In MB this is 5,242,880 ÷ 1,000,000 ≈ **5.24 MB**. And 5 MB in bytes is 5 × 10^6 = **5,000,000 B**. So 5 MiB is larger than 5 MB.

### Worked example 6: the 500 GB drive

A drive is sold as 500 GB, meaning 500 × 10^9 = 500,000,000,000 B. An operating system that reports in GiB divides by 2^30 = 1,073,741,824, giving about **465.7 GiB**. The drive has not lost any space. The two figures use different units.

### Worked example 7: a file size

An uncompressed image 800 pixels wide and 600 pixels high with 24 bits per pixel contains 800 × 600 × 24 = 11,520,000 bits. Dividing by 8 gives 1,440,000 bytes. In decimal units that is **1,440 kB**; in binary units 1,440,000 ÷ 1,024 = **1,406.25 KiB**. (Sub-topic 3.5.5 covers image sizes.)

## Bits or bytes?

Storage sizes are normally given in **bytes** (capital B). Data transfer rates are often given in **bits** per second (lower-case b). The conversion is 1 byte = 8 bits, so 1,000,000 B = 8,000,000 bits. Be careful with the capital letter when reading a question.

## Exam technique

- **Name the unit and the system.** Write KiB or kB exactly, because the symbol shows which system you are using.
- **Know the powers.** Write 2^10, 2^20, 2^30 and 2^40 on the first line of your working.
- **Use a conversion factor** that matches the prefix: 1,024 for binary steps and 1,000 for decimal steps.
- **Bits needed:** test powers of 2 until you reach one that is at least the number of values.
- **Check direction.** Going from a larger unit to a smaller one gives a larger number.

## Common mistakes

- Using 1,000 for KiB or 1,024 for kB.
- Mixing up bits and bytes (b and B).
- Dividing when you should multiply when converting to a smaller unit.
- Saying that *n* bits give 2 × *n* values, instead of 2^n values.
- Counting the highest value as 2^n instead of 2^n − 1 when starting from zero.
- Giving the prefix symbol incorrectly: the correct symbols are Ki, Mi, Gi, Ti and k, M, G, T.

## Next steps

- [Units of information revision notes](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-revision-notes/)
- [Units of information practice questions](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-practice/)
- [Number bases study guide](/resources/oxfordaqa-a-level-computer-science-9645-number-bases/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.2 Units of information.
