---
title: "OxfordAQA IGCSE Computer Science (9210): Units of information -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Units of Information Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.03
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "units-of-information-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.3: bit, byte, kB, MB, GB and TB with conversion rules, worked examples and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.3 Units of information** of OxfordAQA International GCSE Computer Science (9210).
Worked examples are in the [Units of information study
guide](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information/).

## What the specification asks

- Know that a **bit** is the fundamental unit of information, and a **byte** is a group of **8 bits**.
- Know that quantities of bytes can be described using **prefixes**.
- Know the **names, symbols and values** of the decimal prefixes: kilo, mega, giga, tera.
- Assessments use **powers of 10** (1 kB = 1,000 bytes), not powers of 2.

## Notation

| Symbol | Meaning |
|---|---|
| b | bit (a single 0 or 1) |
| B | byte (8 bits) |

1 B = 8 b. Bytes to bits: **× 8**. Bits to bytes: **÷ 8**.

## The prefixes

| Name | Symbol | Value | In bytes |
|---|---|---|---|
| kilobyte | kB | 1,000 bytes | 1,000 |
| megabyte | MB | 1,000 kB | 1,000,000 |
| gigabyte | GB | 1,000 MB | 1,000,000,000 |
| terabyte | TB | 1,000 GB | 1,000,000,000,000 |

Each unit is **1,000 times** the one before. Lower-case **k**, upper-case **M, G, T**.

## Conversion ladder

B, kB, MB, GB, TB.

- Going **down** the ladder (to a smaller unit): **multiply** by 1,000 for each step.
- Going **up** the ladder (to a bigger unit): **divide** by 1,000 for each step.
- Bigger unit, smaller number.

| Conversion | Factor |
|---|---|
| kB to B | × 1,000 |
| MB to kB | × 1,000 |
| MB to B | × 1,000,000 |
| GB to MB | × 1,000 |
| TB to GB | × 1,000 |
| B to MB | ÷ 1,000,000 |

## Worked examples

- **3.5 MB to kB:** 3.5 × 1,000 = **3,500 kB**.
- **2,400,000 B to MB:** 2,400,000 ÷ 1,000,000 = **2.4 MB**.
- **4.7 GB to MB:** 4.7 × 1,000 = **4,700 MB**.
- **750 GB to TB:** 750 ÷ 1,000 = **0.75 TB**.
- **12 kB to bits:** 12 × 1,000 = 12,000 B; 12,000 × 8 = **96,000 bits**.
- **6,000 bits to bytes:** 6,000 ÷ 8 = **750 B**.
- **2.5 MB to bits:** 2,500,000 B × 8 = **20,000,000 bits**.

## Capacity method

1. Convert both quantities into the **same unit**.
2. Divide the capacity by the size of one file.
3. Round **down** to a whole number of files.

Example: a 16 GB card, 5 MB per photograph. 16 GB = 16,000 MB, and 16,000 ÷ 5 = **3,200 photographs**.

Example: a 1 TB drive, 2.5 GB per film. 1 TB = 1,000 GB, and 1,000 ÷ 2.5 = **400 films**.

## Typical sizes (to judge whether an answer is sensible)

| Item | Typical size |
|---|---|
| Plain text page | a few kB |
| Photograph | a few MB |
| Film | a few GB |
| Large archive of videos | TB |

## Ordering sizes

Convert every value to **bytes**, then compare. For 4 kB, 5,000 B and 0.003 MB: 4,000 B, 5,000 B, 3,000 B, so the
order is 0.003 MB, 4 kB, 5,000 B.

## Model answers

**Explain why a 2.4 MB photograph is larger than a 2,000 kB photograph.** Convert to the same unit: 2.4 MB = 2,400 kB,
which is more than 2,000 kB. A number can only be compared when both sizes use the same unit.

**A video is 1.5 GB. Calculate its size in megabytes.** GB to MB is one step down the ladder, so multiply by 1,000:
1.5 × 1,000 = 1,500 MB.

**A message is 400 bits. State its size in bytes.** Divide by 8: 400 ÷ 8 = 50 bytes.

## Memory aids

- **k**ilo, **M**ega, **G**iga, **T**era: each is three more zeros.
- Small to big, divide; big to small, multiply.
- A lower-case **b** is small (a bit); an upper-case **B** is big (a byte, 8 bits).

## More worked capacity examples

- **How many 4 MB songs fit on a 2 GB player?** 2 GB = 2,000 MB; 2,000 ÷ 4 = **500 songs**.
- **How long is a file of 3,000,000 bytes in kilobytes?** 3,000,000 ÷ 1,000 = **3,000 kB**.
- **A drive has 250 GB. State its size in megabytes.** 250 × 1,000 = **250,000 MB**.
- **How many bits are in 3 bytes?** 3 × 8 = **24 bits**.
- **A file is 0.2 GB. State its size in kilobytes.** 0.2 × 1,000 = 200 MB, then 200 × 1,000 = **200,000 kB**.

## Exam traps

- **b and B mixed up.** A bit is b; a byte is B. A quantity in bits is eight times the same quantity in bytes.
- **1,024 used.** Use **1,000**.
- **Multiplying instead of dividing.** Going up the ladder divides.
- **One factor for two steps.** MB to B is two steps, so the factor is 1,000,000.
- **Capital K or lower-case m.** The symbols are kB and MB.
- **Different units in one division.** Convert first.
- **Part files.** Round down to whole files.
- **No units in the answer.**

## Key terms

| Term | Meaning |
|---|---|
| Bit | A single binary digit, 0 or 1 |
| Byte | A group of 8 bits |
| Prefix | A word placed before a unit to give a multiple, such as kilo for 1,000 |
| Decimal prefix | A prefix based on powers of 10 |
| Capacity | The amount of data a device can hold |

## Self-test

1. State the number of bits in a byte.
2. State the symbol for a kilobyte and the number of bytes it is.
3. Convert 8,500 kB to MB.
4. Convert 0.6 GB to MB.
5. Convert 3 MB to bytes.
6. Convert 4 kB to bits.
7. A memory stick holds 8 GB and each file is 20 MB. State how many files fit.
8. Convert 2,000,000,000 B to GB.
9. State which is larger: 450 MB or 0.5 GB.
10. State why the symbol b is not the same as B.

**Answers:**
1. 8.
2. kB; 1,000 bytes.
3. 8.5 MB.
4. 600 MB.
5. 3,000,000 B.
6. 32,000 bits (4 × 1,000 × 8).
7. 400 files (8,000 ÷ 20).
8. 2 GB.
9. 0.5 GB (500 MB).
10. b is a bit and B is a byte, which is 8 bits.

## Related resources

- [Units of information study guide](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information/)
- [Units of information practice questions](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information-practice/)
- [Binary arithmetic revision notes](/resources/oxfordaqa-igcse-computer-science-9210-binary-arithmetic-revision-notes/)
