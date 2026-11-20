---
title: "OxfordAQA A-Level Computer Science (9645): Units of information -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Units of Information Practice"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.5.2: bits, bytes, 2^n values, binary and decimal prefixes and size conversions, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.2 Units of information** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: bits and bytes, 2^n patterns, binary prefixes (kibi, mebi, gibi, tebi) and decimal prefixes (kilo, mega, giga, tera). Use 1 KiB = 2^10 B and 1 kB = 10^3 B.

Related pages: [units of information study guide](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information/) · [units of information revision notes](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information-revision-notes/)

## Section A

**1.** State what is meant by a bit and by a byte. **[2]**

**2.** State the number of different patterns that can be made with 6 bits. **[1]**

**3.** Give the symbol and the power of 2 for the prefix **gibi**. **[2]**

**4.** Give the symbol and the power of 10 for the prefix **tera**. **[2]**

## Section B

**5.** A sensor can report one of 12 different states. Calculate the smallest number of bits needed to represent the state. Show your reasoning. **[2]**

**6.** Convert:

**(a)** 6 MiB to KiB **[1]**
**(b)** 12,288 KiB to MiB **[1]**
**(c)** 2.5 TB to GB **[1]**
**(d)** 750 MB to bytes **[1]**

**7.** A file is 3,670,016 bytes long. Give its size in MiB. **[2]**

**8.** A memory chip is labelled 4 GiB. Calculate the number of bytes it holds. **[2]**

**9.** A hard drive is sold as 40 GB. The operating system reports the capacity as 37.3 GiB.

**(a)** Explain why the two figures differ although the drive has lost no storage. **[2]**
**(b)** Show a calculation that gives 37.3 GiB from the sale label. **[2]**

**10.** A programmer says that 1 KiB is the same as 1 kB because both mean about a thousand bytes.

**(a)** State the number of bytes in each. **[2]**
**(b)** Explain why the difference becomes more important for larger units. **[2]**
**(c)** State the name of the unit written MB and the name of the unit written MiB. **[2]**

## Answers

**1.** A bit is the **fundamental unit of information** (a binary digit with the value 0 or 1) [1]; a byte is a group of **8 bits** [1]. **[2]**

**2.** 2^6 = **64** [1]. **[1]**

**3.** Gi [1]; 2^30 [1]. **[2]**

**4.** T [1]; 10^12 [1]. **[2]**

**5.** 2^3 = 8 is too few and 2^4 = 16 is enough [1], so **4 bits** [1]. **[2]**

**6. (a)** 6 × 1,024 = **6,144 KiB** [1]
**(b)** 12,288 ÷ 1,024 = **12 MiB** [1]
**(c)** 2.5 × 1,000 = **2,500 GB** [1]
**(d)** 750 × 1,000,000 = **750,000,000 bytes** [1]

**7.** 3,670,016 ÷ 1,048,576 (2^20) [1] = **3.5 MiB** [1]. **[2]**

**8.** 4 × 2^30 [1] = **4,294,967,296 bytes** [1]. **[2]**

**9. (a)** The label uses **decimal** gigabytes (1 GB = 10^9 bytes) [1], while the operating system reports **binary** gibibytes (1 GiB = 2^30 bytes), which are bigger units, so the number is smaller [1]. **[2]**
**(b)** 40 × 10^9 = 40,000,000,000 bytes [1]; divided by 1,073,741,824 gives about **37.3 GiB** [1]. **[2]**

**10. (a)** 1 KiB = **1,024** bytes [1]; 1 kB = **1,000** bytes [1]. **[2]**
**(b)** The gap grows with each step: about 2.4% for kibi against kilo, but about 7.4% for gibi against giga and 10% for tebi against tera [1], so a mix-up gives larger errors in big quantities [1]. **[2]**
**(c)** MB is a **megabyte** (10^6 bytes) [1]; MiB is a **mebibyte** (2^20 bytes) [1]. **[2]**

## Frequently asked questions

**Do I need to know the historic meaning of kilobyte?**
You should know that kibibyte, mebibyte and so on have replaced the historic meanings of kilobyte, megabyte and so on, and that kilo, mega, giga and tera are now decimal prefixes.

**Is a Mbit the same as a MB?**
No. A small b is a bit and a capital B is a byte; one byte is eight bits.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.2 Units of information.
