---
title: "OxfordAQA A-Level Computer Science (9645): Factors affecting processor performance -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Processor Performance Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.4: effect of cores, cache, clock speed, word length and bus widths on performance, with formulae and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.4 Factors affecting processor performance** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For explanations and worked examples, see the [processor performance study guide](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance/); then practise with the [processor performance practice questions](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-practice/).

## What the specification requires

Explain the effect on processor performance of:

- **multiple cores**
- **cache memory**
- **clock speed**
- **word length**
- **address bus width**
- **data bus width**.

## Key terms

| Term | Meaning |
|---|---|
| Core | A complete processing unit with its own ALU, control unit and registers |
| Cache | Small, very fast memory close to the processor holding copies of recently or likely-to-be-used instructions and data |
| Cache hit / miss | The item is found in the cache / it is not, so main memory must be read |
| Clock speed | Clock cycles per second (Hz) |
| Word length | Number of bits the processor handles as one unit |
| Address bus width | Number of address lines, which fixes the number of addressable locations |
| Data bus width | Number of data lines, which fixes the bits moved per transfer |
| Parallel | Several parts of a task being carried out at the same time |

## Each factor in two lines

| Factor | Effect | Limit |
|---|---|---|
| More cores | Several instruction streams run at once, so parallel work finishes sooner | Software must be written to use them; some steps must run in order |
| More cache | More accesses are hits, so fewer slow trips to main memory | Cost; very large caches are slower to search |
| Higher clock speed | More cycles, so more steps, per second | Heat and power; memory must keep up |
| Longer word length | More bits per operation; larger numbers in one operation | Little gain for programs using small values |
| Wider address bus | More memory locations can be addressed (2 to the power of the lines) | Does not make an access faster |
| Wider data bus | More bits per transfer, so fewer transfers | Memory must be able to supply them |

## Formulae

- Time = number of cycles ÷ clock speed.
- Locations = 2^(address lines).
- Transfers = bits to move ÷ data bus width (round up).
- Average access time = hit rate × cache time + (1 − hit rate) × (cache time + memory time), if a miss pays for the cache look-up and the memory access.
- Time with several cores = sequential part + shared part ÷ number of cores (a simplified model).

## Worked reminders

*Clock.* 9 × 10^9 cycles: 3 s at 3 GHz, 2 s at 4.5 GHz.

*Cores.* A 10 s task with 2 s sequential and 8 s shareable: 6 s on 2 cores, 4 s on 4 cores and 3 s on 8 cores. The sequential 2 s limits the gain.

*Cache.* Cache 2 ns, memory 60 ns, hit rate 90%: 0.9 × 2 + 0.1 × 62 = 8.0 ns. At 99% it is 2.6 ns.

*Data bus.* A 256-bit block: 16 transfers on a 16-bit bus, 4 on a 64-bit bus.

*Address bus.* 32 lines, byte locations: 4 294 967 296 locations = 4 GiB.

*Word length.* Largest unsigned value: 16 bits = 65 535; 32 bits = 4 294 967 295.

## Writing a good explanation

Use the pattern **change, effect, reason**.

> A larger cache means more of the instructions and data the processor needs are already held close to it. So there are fewer slow accesses to main memory and the processor waits less.

For "evaluate" or "justify" questions, add a limit or compare uses:

> For a video editor, more cores help because the work can be split. For simple word processing, the extra cores would hardly be used.

## Matching factors to uses

| Use | Factors that matter most | Why |
|---|---|---|
| Video editing or rendering | Cores, cache, data bus width | Work splits into many independent parts and moves large blocks of data |
| Scientific calculation with huge numbers | Word length, clock speed | Large values are handled in fewer operations, each one quickly |
| Database server with a large data set | Address bus width (more memory), cache, data bus width | More data stays in main memory and moves in wide transfers |
| Everyday office software | Little difference between modern processors | The tasks do not use all the capability available |
| Running many programs at once | Cores | Separate programs run on separate cores at the same time |

## Cache levels in brief

- **L1** is the smallest and fastest, closest to each core.
- **L2** is larger and a little slower.
- **L3** is larger again and is often shared by all the cores.
- The processor checks the levels in order, then main memory. The deeper it has to go, the longer the wait.

## Exam traps

- **Clock speed alone.** A higher clock speed does not guarantee a faster computer. Cache, cores and memory speed also matter.
- **Cores alone.** Two cores do not double the speed unless the program can use both.
- **Cache is not RAM.** It stores copies, is much smaller and is faster.
- **Address versus data.** Address bus: how many locations. Data bus: how many bits per transfer.
- **Word length.** It helps with large values; it does not speed up every program.
- **Show the working.** Marks are given for the division or multiplication, not only the final value.

## Quick self-test

1. What is a core?
2. Why might a program not run twice as fast on two cores?
3. What is a cache hit?
4. Why does a larger cache usually improve performance?
5. A program needs 12 × 10^9 cycles. How long does it take at 3 GHz?
6. What does word length mean?
7. What is the effect of widening the address bus by 2 lines?
8. How many transfers move 512 bits over a 64-bit data bus?
9. Why might a faster clock not give a faster computer?
10. Explain how a wider data bus improves performance.
11. A task has 4 s that must run in order and 12 s that can be shared. How long on 4 cores?
12. Which two buses are sometimes confused, and what does each determine?

### Answers

1. A complete processing unit with its own ALU, control unit and registers.
2. Some of the program must run in sequence, and the program must be written to run in parallel; the cores also share memory and buses.
3. The item the processor wants is found in the cache.
4. More of the needed instructions and data are held close to the processor, so fewer slow accesses to main memory are needed.
5. 12 × 10^9 ÷ 3 × 10^9 = 4 s.
6. The number of bits the processor handles as one unit.
7. The number of addressable locations is multiplied by 4.
8. 512 ÷ 64 = 8.
9. Memory or other components may not keep up, so the processor waits; heat may limit it; the design may do less per cycle.
10. More bits are moved in each transfer, so fewer transfers are needed to move the same data.
11. 4 + 12 ÷ 4 = 7 s.
12. The address bus sets how many locations can be addressed and the data bus sets how many bits move per transfer.

## Next steps

- [Factors affecting processor performance study guide](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance/)
- [Factors affecting processor performance practice questions](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-practice/)
- [Secondary storage revision notes](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.4 Factors affecting processor performance.
