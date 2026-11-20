---
title: "OxfordAQA IGCSE Computer Science (9210): Units of information -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Units of Information Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.3: bits, bytes and the decimal prefixes kilo, mega, giga and tera, with unit conversions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.3 Units of information** of OxfordAQA International GCSE Computer Science (9210).
The specification says you must know that **a bit is the fundamental unit of information** and **a byte is a group
of 8 bits**; that quantities of bytes can be described using **prefixes**; and the **names, symbols and values** of
the decimal prefixes kilo, mega, giga and tera. The additional information also gives the notation: "b represents
bit" and "B represents byte". It notes that the older habit of using these words for powers of 2 is not used in
assessments: "in assessments we will use powers of 10 and the references to powers of 2 will not be used".

## The bit

A **bit** is the smallest unit of information a computer stores. It is a single binary digit, so it is **either 0 or
1**. A bit can answer one yes/no question. The symbol is a lower-case **b**.

A single bit does not store much. A group of bits can store more because the number of different patterns doubles with
every bit that is added: 1 bit gives 2 patterns, 2 bits give 4 patterns, 3 bits give 8, and 8 bits give 256. The
representation of numbers, text, images and sound in later sections of this specification all depend on this idea.

## The byte

A **byte** is a group of **8 bits**. The symbol is an upper-case **B**. Eight bits can hold 256 different patterns
(0 to 255), which is enough for one character in a simple text encoding, or one number from 0 to 255.

The difference between b and B is a common exam trap:

| Symbol | Meaning | Example |
|---|---|---|
| b | bit | 8 b is one byte |
| B | byte | 1 B is 8 bits |

So **1 B = 8 b**. To change bytes to bits, **multiply by 8**. To change bits to bytes, **divide by 8**.

## The decimal prefixes

Files are usually many thousands or millions of bytes, so larger units are used. The specification names four decimal
prefixes. Each is **1,000 times** the one before.

| Unit | Symbol | Value | In bytes |
|---|---|---|---|
| kilobyte | kB | 1,000 bytes | 1,000 |
| megabyte | MB | 1,000 kilobytes | 1,000,000 |
| gigabyte | GB | 1,000 megabytes | 1,000,000,000 |
| terabyte | TB | 1,000 gigabytes | 1,000,000,000,000 |

Notice the symbols: a **lower-case k** in kB, and **upper-case** M, G and T. Two memory tricks are useful:

- The prefixes go **kilo, mega, giga, tera**, and each step up is a multiplication by 1,000 (three more zeros).
- A bigger unit means **fewer** of them are needed, so when you go from a small unit to a large unit, you **divide**.
  When you go from a large unit to a small unit, you **multiply**.

### A note on powers of 2

Historically, some people used kilobyte to mean 1,024 bytes, because 1,024 is 2 to the power 10. The specification says
students may benefit from knowing this, but that **assessments use powers of 10 only**. In an exam, always use
**1 kB = 1,000 bytes**, and never 1,024.

## Converting between units

Use a simple method each time.

1. Write down the starting unit and the target unit.
2. Count the number of steps between them on the ladder **B, kB, MB, GB, TB**.
3. Each step is a factor of 1,000. Going **down** the ladder (towards bytes), **multiply**. Going **up**, **divide**.

### Worked example 1: megabytes to kilobytes

How many kilobytes is **3.5 MB**? MB to kB is one step down, so multiply by 1,000:
3.5 × 1,000 = **3,500 kB**. In bytes that is 3,500 × 1,000 = 3,500,000 B.

### Worked example 2: bytes to megabytes

A file is **2,400,000 bytes**. B to MB is two steps up, so divide by 1,000 twice (divide by 1,000,000):
2,400,000 ÷ 1,000,000 = **2.4 MB**.

### Worked example 3: gigabytes to megabytes

A film is **4.7 GB**. GB to MB is one step down: 4.7 × 1,000 = **4,700 MB**.

### Worked example 4: gigabytes to terabytes

A drive holds **750 GB**. GB to TB is one step up: 750 ÷ 1,000 = **0.75 TB**.

## Converting between bits and bytes

Convert to bytes first, then multiply by 8, to get bits.

### Worked example 5: kilobytes to bits

How many bits are in **12 kB**? First change to bytes: 12 × 1,000 = 12,000 B. Then to bits: 12,000 × 8 =
**96,000 bits**.

### Worked example 6: bits to bytes

A message is **6,000 bits** long. Divide by 8: 6,000 ÷ 8 = **750 bytes**.

### Worked example 7: a larger file in bits

An image file is **2.5 MB**. In bytes that is 2.5 × 1,000,000 = 2,500,000 B, and in bits it is 2,500,000 × 8 =
**20,000,000 bits**. Later calculations of image and sound file sizes give the answer in bits, so being able to change
bits to bytes and then up the ladder is an important link.

## Capacity questions

Storage questions ask how many files fit into a given capacity. Put both quantities into the **same unit** first.

### Worked example 8: photographs on a memory card

A memory card holds **16 GB**. Each photograph is **5 MB**. How many photographs fit?

- Change 16 GB to MB: 16 × 1,000 = 16,000 MB.
- Divide by the size of one photograph: 16,000 ÷ 5 = **3,200 photographs**.

### Worked example 9: films on a drive

A drive holds **1 TB**. Each film is **2.5 GB**. How many films fit? 1 TB = 1,000 GB, and 1,000 ÷ 2.5 = **400 films**.

### Worked example 10: music files

A music player holds **64 GB**, and each song takes **8 MB**. 64 GB = 64,000 MB, and 64,000 ÷ 8 = **8,000 songs**.

In an examination, give only whole files. If the answer is not a whole number, round **down**, because a partly
stored file is not a stored file.

## Putting units in order

You may be asked to order a list of sizes. Convert all of them to **bytes** (or all of them to the same unit), and
then compare.

For example: 4 kB, 5,000 B, 0.003 MB and 0.000002 GB. In bytes these are 4,000 B, 5,000 B, 3,000 B and 2,000 B. The
order from smallest to largest is 0.000002 GB, 0.003 MB, 4 kB, 5,000 B.

## Why do we need these units?

Data representation topics rely on being able to talk about quantity of data. A text document may be a few kB. A
photograph is a few MB. A film is several GB. A large archive of video may be several TB. Knowing these approximate
sizes helps you check that a calculated answer is reasonable. If your calculation says that a photograph is 5 TB, you
know a mistake has been made.

## Quick reference

| To change | Do this |
|---|---|
| bytes to kilobytes | divide by 1,000 |
| kilobytes to megabytes | divide by 1,000 |
| megabytes to gigabytes | divide by 1,000 |
| gigabytes to megabytes | multiply by 1,000 |
| megabytes to kilobytes | multiply by 1,000 |
| bytes to bits | multiply by 8 |
| bits to bytes | divide by 8 |

A check that always works: a bigger unit gives a smaller number, and a smaller unit gives a bigger number. If you change
from megabytes to kilobytes and the number gets smaller, the conversion is wrong.

## Common mistakes

- Mixing up **b** and **B**. The same quantity is eight times larger when measured in bits than in bytes, so always
  check the symbol.
- Using **1,024** instead of **1,000**. The specification requires powers of 10.
- Multiplying when you should divide. A **bigger unit gives a smaller number**: 2,400,000 B is 2.4 MB, not 2.4
  billion MB.
- Jumping two steps with one factor of 1,000. MB to B is **two** steps, so the factor is 1,000,000.
- Writing the prefix symbols wrongly, such as **KB** (capital K) or **mB**. The specification uses kB and MB.
- Forgetting to convert both quantities to the same unit in a capacity question.
- Writing a part-file in the answer, such as 3,200.5 photographs.
- Mixing up the order of the prefixes. They go kilo, mega, giga, tera, and each is 1,000 times the previous one.

## Exam technique

- **State** questions: give the name, the symbol and the value, such as "kilobyte, kB, 1,000 bytes".
- **Calculate** questions: show the conversion factor, and say what you are multiplying or dividing by.
- **Compare** or **order** questions: convert everything to the same unit.
- **Bits and bytes**: always check whether the question wants bits or bytes in the answer, and change units at the end,
  not in the middle.
- Quote units with every final answer. A number alone loses the mark.

## Next steps

For a condensed summary and self-test, use the [Units of information revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information-revision-notes/), and test yourself
with the [Units of information practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information-practice/).
