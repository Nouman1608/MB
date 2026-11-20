---
title: "OxfordAQA A-Level Computer Science (9645): Factors affecting processor performance -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Processor Performance Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "factors-affecting-processor-performance-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.7.4: cores, cache, clock speed, word length and bus widths, with calculations and full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.4 Factors affecting processor performance** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: multiple cores, cache memory, clock speed, word length, address bus width and data bus width. Where a model is needed, the question states it. Use 1 GiB = 1 073 741 824 bytes.

Related pages: [processor performance study guide](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance/) ·
[processor performance revision notes](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** Explain what is meant by a cache hit. **[2]**

**2.** A program needs 6 × 10^9 clock cycles. Calculate the time it takes at a clock speed of 2 GHz and at 3 GHz. **[2]**

**3.** State the effect on the number of addressable locations of adding three more lines to the address bus. **[1]**

**4.** Calculate the number of transfers needed to move a 256-bit block over a 64-bit data bus. **[1]**

**5.** State the largest unsigned integer that can be held in a 16-bit word. **[1]**

## Section B

**6.** Explain why a computer with four cores does not always run a program four times faster than a computer with one core. **[3]**

**7.** A task takes 12 s on one core. 3 s of it must run in sequence. The remaining 9 s can be shared equally between any number of cores. Ignore the cost of coordinating the cores.

**(a)** Calculate the time taken on 3 cores. **[2]**
**(b)** Calculate the time taken on 9 cores. **[1]**
**(c)** Explain why moving from 3 cores to 9 cores does not make the task three times faster. **[2]**

**8.** A cache access takes 1 ns and a main memory access takes 41 ns. When the processor misses the cache it pays for the cache access and then the memory access. The hit rate is 95%.

**(a)** Calculate the average time per access. **[3]**
**(b)** Explain why a larger cache might raise the hit rate. **[2]**

**9.** A computer uses a 32-line address bus with locations of one byte each.

**(a)** Calculate the maximum memory that can be addressed, in GiB. **[2]**
**(b)** Explain how increasing the memory could improve the speed of a program that works on large data sets, even though the address bus does not make an individual memory access quicker. **[3]**

**10.** A designer must choose between two processors for a video-editing workstation. Processor A has 8 cores at 2.8 GHz. Processor B has 2 cores at 4.2 GHz. Evaluate which is more suitable, referring to at least two factors that affect performance. **[5]**

## Answers

**1.** The data or instruction the processor needs is found in the cache [1], so it is supplied without a slower access to main memory [1]. **[2]**

**2.** 6 × 10^9 ÷ 2 × 10^9 = **3 s** [1]; 6 × 10^9 ÷ 3 × 10^9 = **2 s** [1]. **[2]**

**3.** The number of locations is multiplied by 2^3 = **8** [1]. **[1]**

**4.** 256 ÷ 64 = **4** [1]. **[1]**

**5.** 2^16 − 1 = **65 535** [1]. **[1]**

**6.** Only the parts of a program that can run in parallel benefit from extra cores [1]. Some steps must be carried out in order because they depend on earlier results, and the program must have been written to use several cores [1]. The cores also share resources such as memory and buses, which can cause them to wait for each other [1]. **[3]**

**7. (a)** 3 + 9 ÷ 3 [1] = **6 s** [1]
**(b)** 3 + 9 ÷ 9 = **4 s** [1]
**(c)** The 3 s sequential part cannot be shared [1], so it stays the same however many cores are used, and the total only falls from 6 s to 4 s [1]. **[2]**

**8. (a)** Average = 0.95 × 1 + 0.05 × (1 + 41) [1] = 0.95 + 2.1 [1] = **3.05 ns** [1]
**(b)** A larger cache can hold more of the instructions and data in use [1], so there is a greater chance that an item is found there when it is requested [1]. **[2]**

**9. (a)** 2^32 = 4 294 967 296 locations of 1 byte [1] = **4 GiB** (4 294 967 296 ÷ 1 073 741 824) [1]
**(b)** More main memory means more of the data set can be held in it at once [1]. Fewer transfers to and from slower secondary storage are then needed [1], so the processor spends less time waiting for data [1]. **[3]**

**10.** Cores: video editing can usually be split into many independent parts, such as frames or effects, so A's eight cores can work in parallel [1]. If the software can use them, A can finish sooner despite its lower clock speed [1]. Clock speed: B's higher clock speed (4.2 GHz) runs each core faster, which helps parts that must run in sequence [1]. Other factors: cache size, data bus width and memory speed would also affect the result and should be compared [1]. Conclusion: A is likely to be more suitable provided the editing software can use eight cores, with a justification [1]. **[5]**

## Frequently asked questions

**Is a higher clock speed always better?**
No. It lets the processor start more steps per second, but cache, cores, memory speed and design also affect how fast a program runs.

**Do I need to calculate cache averages?**
The specification asks you to explain the effect of cache. A calculation like question 8 is a good way to show you understand why a higher hit rate matters.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.4 Factors affecting processor performance.
