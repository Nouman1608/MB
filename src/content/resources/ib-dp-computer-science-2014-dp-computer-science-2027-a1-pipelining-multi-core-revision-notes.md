---
title: "IB DP Computer Science (DP Computer Science): Pipelining in Multi-Core Architectures (HL) -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "Condensed HL notes on pipelining in multi-core architectures for IB DP Computer Science A.1: cycle formula, hazards, cores, limits and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.1.6 label (pipelining in multi-core architectures, HL only); please check the depth and wording against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A1.1.6, pipelining in multi-core architectures**, an HL-only statement in
A.1 Computer fundamentals (IB DP Computer Science, first assessment 2027). For explanations and the
full worked examples, use the
[pipelining in multi-core architectures study guide](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core/);
for the single-instruction fetch-execute cycle, see the
[A.1 Computer fundamentals revision notes](/resources/ib-dp-computer-science-a-1-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Pipelining | Overlapping the stages of successive instructions so each stage is always busy |
| Stage | One step of instruction processing, such as fetch, decode or execute |
| Clock cycle | One tick of the processor clock; in an ideal pipeline each stage takes one cycle |
| Throughput | Instructions completed per unit time |
| Latency (of an instruction) | Time for one instruction to pass through all stages |
| Hazard | A situation that stops the next instruction entering the pipeline on time |
| Data hazard | An instruction needs a result not yet produced by an earlier instruction |
| Control hazard | A branch means the instructions already fetched may be the wrong ones |
| Structural hazard | Two stages need the same hardware in the same cycle |
| Stall (bubble) | An empty cycle inserted while the pipeline waits |
| Flush | Discarding instructions already in the pipeline after a taken branch |
| Forwarding | Passing a result straight from the ALU to a waiting instruction |
| Core | A complete processing unit with its own CU, ALU, registers and pipeline |
| Thread | A sequence of instructions that the OS can schedule on a core |

## The numbers to remember

- Unpipelined time = *k* × *n* cycles (*k* stages, *n* instructions).
- Ideal pipelined time = *k* + (*n* − 1) cycles.
- Each taken branch resolved in stage *s* wastes *s* − 1 cycles (the instructions behind it).
- For large *n*, ideal throughput approaches one instruction per cycle.

Quick check (3 stages): 6 instructions → 18 unpipelined, 8 pipelined. 10 instructions → 30 and 12.
100 instructions → 300 and 102.

## Drawing a pipeline diagram

1. Rows = stages (Fetch, Decode, Execute); columns = clock cycles.
2. Each instruction moves **diagonally**: one stage further each cycle.
3. A stall shifts every later instruction one column to the right.
4. A flush leaves empty cells where the discarded instructions would have been.
5. Count the cycle in which the last instruction leaves the final stage.

## Hazards at a glance

| Hazard | Example | Effect | Response |
|---|---|---|---|
| Data | `x <- y + 1` followed by `z <- x * 2` | Second needs `x` before it is stored | Stall, or forward the result |
| Control | A taken branch or loop jump | Wrong instructions already fetched | Flush; branch prediction |
| Structural | Fetching an instruction while another loads data from the same memory | One must wait | Stall; separate hardware paths |

## Multi-core at a glance

- Each core has its **own pipeline**; cores often share a larger cache and main memory.
- The OS **scheduler** places threads on cores.
- **Gains:** true simultaneous execution; responsiveness under load; more work per unit of power than
  one very fast core.
- **Limits:** software must be split into threads; sequential parts do not speed up; cores sharing
  data must coordinate and keep cached copies consistent; shared memory becomes a bottleneck.

**Sequential-part reasoning (illustrative):** time = sequential part + parallel part ÷ cores. With
20 s sequential and 80 s parallel: 4 cores → 40 s, 8 cores → 30 s, never below 20 s.

## Pipelining versus multi-core

| | Pipelining | Multi-core |
|---|---|---|
| Scope | One core | Several cores |
| Overlaps | Stages of one instruction stream | Separate instruction streams |
| Program changes needed | No | Usually |
| Main obstacle | Hazards | Sequential parts, coordination |

## Exam traps

- Pipelining raises **throughput**, not the speed of one instruction.
- Do not write *n* cycles for a pipeline; it must **fill** first.
- A core is not a stage: **each core contains a whole pipeline**.
- Four cores do not make every program four times faster.
- When you name a hazard, say which instruction depends on which, and the consequence.
- In a case study, say **which tasks** can run in parallel before claiming a benefit.

## Self-test

1. What does pipelining overlap?
2. State the ideal number of cycles for 8 instructions in a 3-stage pipeline.
3. How many cycles do the same 8 instructions take without pipelining?
4. Why is the latency of one instruction not reduced by pipelining?
5. Name the hazard in: `a <- b + c` then `d <- a - 1`.
6. What happens to instructions already in the pipeline when a branch is taken?
7. How does branch prediction help?
8. Give one example of a structural hazard.
9. What does each core in a multi-core processor contain?
10. Which part of the operating system decides which thread runs on which core?
11. A task has 30 s sequential and 60 s parallel work. How long on 3 cores?
12. Give two reasons a program may not run faster on more cores.

**Answers:**
1. The fetch, decode and execute stages of successive instructions.
2. 3 + (8 − 1) = 10 cycles.
3. 3 × 8 = 24 cycles.
4. Each instruction must still pass through every stage, taking the same number of cycles.
5. A data hazard: the second instruction needs the new value of `a`.
6. They are flushed (discarded) and fetching restarts from the branch target.
7. It guesses the branch outcome so the correct instructions are usually fetched in advance,
   avoiding a flush.
8. Any one: fetching an instruction and loading data from the same memory in one cycle; two
   instructions needing the same ALU at once.
9. Its own control unit, ALU, registers and pipeline (usually also its own level 1 cache).
10. The scheduler (process management).
11. 30 + 60 ÷ 3 = 50 seconds.
12. Any two: it is not written to use several threads; much of it is sequential; cores must wait for
    each other's results; shared memory or cache becomes a bottleneck.

## Related pages

- [Pipelining in multi-core architectures practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core-practice/)
- [CPU and GPU differences revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
