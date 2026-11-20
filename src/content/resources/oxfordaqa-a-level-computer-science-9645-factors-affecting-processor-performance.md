---
title: "OxfordAQA A-Level Computer Science (9645): Factors affecting processor performance"
seoTitle: "OxfordAQA A-Level CS 9645 Processor Performance Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.7.4 in depth: how cores, cache, clock speed, word length and address and data bus widths affect performance, with worked calculations."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.4 Factors affecting processor performance** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to explain the effect on processor performance of **multiple cores, cache memory, clock speed, word length, address bus width and data bus width**. The key word is *explain*: a bare list earns very little, and you must say what changes and why that changes the speed or the capability of the system.

For quick recall use the [processor performance revision notes](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-revision-notes/), and test yourself with the [processor performance practice questions](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-practice/). The [computer organisation and architecture study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) covers the whole of topic 3.7; this page adds the calculations and the reasoning behind each factor.

## What "performance" means

Performance is how quickly a system completes useful work. Two quantities matter: how long a program takes from start to finish, and how much work can be done in a period. No single number captures it. A processor with a very high clock speed can still be slow if it spends most of its time waiting for memory, and a processor with many cores can be slow on a program that cannot use them. For each factor in the specification, be ready to say what it is, how it speeds the system up (or makes it more capable) and what limits the benefit.

## Multiple cores

A **core** is a complete processing unit with its own ALU, control unit and registers. A processor with several cores can carry out several instruction streams **at the same time**.

- Separate programs can run on separate cores, so the computer feels faster when many things are running.
- One program can be split into parts (threads) that run on different cores at once.

The benefit is not automatic. A program only gains if it has been **written so that parts of it can run in parallel**, and some work cannot be split because one step needs the result of the previous step. The cores also have to share memory and buses, so they can hold each other up.

**Worked example.** A task takes 10 s on one core. 2 s of it must run in sequence and the other 8 s can be shared equally between cores. This is a simplified model that ignores the cost of coordinating the cores.

| Cores | Sequential part | Shared part | Total time |
|---|---|---|---|
| 1 | 2 s | 8 s | 10 s |
| 2 | 2 s | 4 s | 6 s |
| 4 | 2 s | 2 s | 4 s |
| 8 | 2 s | 1 s | 3 s |

Doubling the cores from 4 to 8 saves only 1 s, because the sequential 2 s never shrinks. This is why more cores gives diminishing returns.

## Cache memory

**Cache** is a small amount of very fast memory, placed close to (or inside) the processor. It holds **copies of the instructions and data that were used recently or that are likely to be needed next**. Main memory is much slower than the processor, so without cache the processor would often sit idle waiting.

When the processor needs something it looks in the cache first.

- A **cache hit** means the item is there and is supplied quickly.
- A **cache miss** means it is not there, so it must be fetched from main memory (and a copy is usually placed in the cache).

Programs reuse the same instructions in loops and often use data that is close together in memory, so the hit rate is usually high. A processor commonly has several levels, such as L1 (smallest and fastest), L2 and L3 (larger and slower).

**Worked example.** A cache access takes 2 ns and a main memory access takes 60 ns. Assume a miss costs a cache look-up followed by a memory access, 62 ns in total. The average time per access is:

average = hit rate × 2 + (1 − hit rate) × 62

| Hit rate | Average access time |
|---|---|
| 80% | 14.0 ns |
| 90% | 8.0 ns |
| 95% | 5.0 ns |
| 99% | 2.6 ns |

A small rise in hit rate makes a large difference. **More cache** can raise the hit rate, but cache is expensive and a very large cache is slower to search, so there is a limit.

## Clock speed

The **clock speed** is the number of clock cycles per second, measured in hertz. Each step of the processor starts on a clock pulse, so a faster clock lets the processor do more steps each second.

**Worked example.** A program needs 9 × 10^9 clock cycles.

- At 3 GHz: 9 × 10^9 ÷ 3 × 10^9 = **3 s**.
- At 4.5 GHz: 9 × 10^9 ÷ 4.5 × 10^9 = **2 s**.

Limits: a faster clock produces more heat and uses more power, and the other components must be able to keep up. If memory cannot deliver data at that rate, the processor waits. Also, comparing clock speeds only works for processors of a similar design, because different designs may do different amounts of work in one cycle.

## Word length

The **word length** is the number of bits the processor treats as a single unit. Registers, the ALU and (often) the data paths are one word wide.

- A longer word means the ALU can process **more bits in one operation**. Adding two 64-bit numbers takes one operation on a 64-bit processor, but at least two on a 32-bit processor.
- A longer word can represent **larger numbers** in one go: the largest unsigned 16-bit value is 65 535, for 32 bits it is 4 294 967 295, and for 64 bits it is 18 446 744 073 709 551 615.
- It can also allow **bigger addresses** and instructions that carry more information.

The benefit is seen mainly in programs that handle large values or large blocks of data. A program that uses small numbers will not run faster just because the word is longer.

## Address bus width

The number of lines in the **address bus** sets the number of memory locations that can be addressed: 2 to the power of the number of lines. Widening it **increases the maximum memory** the processor can use. With 32 lines and one byte per location, 2^32 = 4 294 967 296 locations can be addressed, which is 4 GiB.

Address bus width does not make each access quicker. Its effect on performance is **indirect**: with more memory available, a computer can keep more of a program and its data in main memory and avoid slow transfers to and from secondary storage.

## Data bus width

The **data bus** carries the data that moves between the processor and memory. A wider bus carries **more bits at the same time**, so a given amount of data needs **fewer transfers**.

**Worked example.** A 256-bit block is read from memory.

- 16-bit data bus: 256 ÷ 16 = **16 transfers**.
- 64-bit data bus: 256 ÷ 64 = **4 transfers**.

Widening the data bus therefore reduces the time spent moving data. It does not change how many locations can be addressed.

## Putting the factors together

| Factor | What it changes | Main limit |
|---|---|---|
| Multiple cores | Several instruction streams at once | Software must be parallel; shared resources |
| Cache | Fewer slow memory accesses | Cost; size; hit rate |
| Clock speed | More steps per second | Heat, power, memory speed |
| Word length | More bits processed per operation | Only helps with large values |
| Address bus width | More addressable memory | Does not speed up an access |
| Data bus width | More bits per transfer | Memory must supply them |

A good evaluation compares the factors for a stated use. A video-editing computer benefits from multiple cores, a large cache and a wide data bus. A simple task such as reading email depends far less on these.

## Worked example: choosing between two processors

Processor A runs at 3.0 GHz with 4 cores. Processor B runs at 4.0 GHz with 2 cores. Each task needs 8 × 10^9 cycles. Assume one cycle of work per clock pulse and ignore cache and memory effects.

- **A task that cannot be split** runs on one core. A takes 8 × 10^9 ÷ 3.0 × 10^9 = 2.67 s. B takes 8 × 10^9 ÷ 4.0 × 10^9 = 2.00 s. B is faster.
- **A task that splits perfectly** can use every core. A takes 8 × 10^9 ÷ (3.0 × 10^9 × 4) = 0.67 s. B takes 8 × 10^9 ÷ (4.0 × 10^9 × 2) = 1.00 s. A is faster.

Neither processor is better for every job. The right choice depends on whether the software can use several cores, which is the sort of judgement that "evaluate" questions reward.

## Exam technique

- **Always say why.** "More cores means more instructions can be carried out at the same time, so a program that has been written to run in parallel finishes sooner."
- **Give a limit when asked to evaluate.** Mention parallel software, cost, heat or memory speed.
- **Separate address bus and data bus.** Address bus width means more locations. Data bus width means more bits per transfer.
- **Show the arithmetic.** Time = cycles ÷ frequency; transfers = bits ÷ bus width.
- **Use the context.** If the question describes a game server or a phone, link your factor to that use.

## Common mistakes

- Saying that a higher clock speed always means a faster computer.
- Saying that two cores always doubles the speed.
- Saying that cache is "extra RAM". It is a small, faster store holding copies of data.
- Saying that a wider address bus makes data transfer faster.
- Saying that a bigger word length makes every program run faster.
- Confusing a cache hit with a cache miss.

## Next steps

- [Factors affecting processor performance revision notes](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-revision-notes/)
- [Factors affecting processor performance practice questions](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-practice/)
- [Secondary storage study guide](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.4 Factors affecting processor performance.
