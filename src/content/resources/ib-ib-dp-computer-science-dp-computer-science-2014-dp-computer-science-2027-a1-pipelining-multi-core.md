---
title: "IB DP Computer Science (DP Computer Science): Pipelining in Multi-Core Architectures (HL)"
resourceType: "study-guides"
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
description: "HL study guide to pipelining in multi-core architectures for IB DP Computer Science A.1: overlapping stages, cycle counts, hazards, cores and their limits."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.1.6 label (pipelining in multi-core architectures, HL only); please check the depth and wording against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers statement A1.1.6 of A.1 Computer fundamentals, pipelining in multi-core
architectures, which the guide marks HL only.** It assumes you can already describe the
fetch-execute cycle in terms of the PC, MAR and MDR, as set out in the
[A.1 Computer fundamentals study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/).
Here the question changes from "what happens to one instruction?" to "how can a processor work on
many instructions at once?"

> **Scope of this page.** The public subject brief names A.1 and its teaching hours; the statement
> number and its HL status come from the full DP Computer Science guide (first assessment 2027).
> Check your school's copy for the exact wording and depth of the learning outcome.

## Two kinds of parallelism

A processor can do more work per second in two different ways:

1. **Inside one core, by pipelining:** start fetching the next instruction before the current one has
   finished executing, so that several instructions are at different stages at the same time.
2. **Across several cores:** give each core its own stream of instructions (a thread or process), so
   that separate tasks run truly simultaneously.

A modern multi-core processor does both: **every core has its own pipeline**, and the operating
system spreads threads across the cores. The statement asks you to understand how the two combine.

## How a pipeline works

Without pipelining, a core finishes all three stages of one instruction before starting the next.
The fetch hardware sits idle while an instruction is decoded and executed. Pipelining keeps every
stage busy, like an assembly line: while instruction A is executed, B is decoded and C is fetched.

Using a three-stage pipeline (Fetch, Decode, Execute) and six instructions A to F:

| Clock cycle | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Fetch | A | B | C | D | E | F | | |
| Decode | | A | B | C | D | E | F | |
| Execute | | | A | B | C | D | E | F |

- **Unpipelined:** 6 instructions × 3 cycles = 18 cycles.
- **Pipelined:** the first instruction takes 3 cycles to reach the end; each later one finishes one
  cycle after the previous. Total = 3 + (6 − 1) = **8 cycles**.

In general, with *k* stages and *n* instructions, an ideal pipeline needs *k* + (*n* − 1) cycles.
For large *n* the time per instruction approaches **one cycle**, so the throughput approaches *k*
times that of an unpipelined core. The time taken by any single instruction (its latency) does not
improve; the gain is that more instructions finish per second.

## Why real pipelines fall short: hazards

The ideal count assumes every instruction can start one cycle after the last. Three situations
break that assumption.

**Data hazard.** An instruction needs a result that an earlier instruction has not yet produced.

```
B:  total <- price * quantity
C:  total <- total + delivery     // needs the new value of total
```

If C reaches the execute stage before B has stored `total`, C would use the old value. The
pipeline must **stall** (insert empty cycles, called bubbles) or pass B's result straight to C as
soon as the ALU produces it (forwarding).

**Control hazard.** A branch changes the PC. By the time the branch is executed, the instructions
after it have already been fetched and decoded. If the branch is taken, they are the wrong
instructions and must be **flushed** (discarded). **Branch prediction** reduces the cost by guessing
the outcome and fetching from the predicted address.

**Structural hazard.** Two stages need the same hardware in the same cycle, for example fetching an
instruction and loading data from memory at once. One must wait.

## Worked example: counting the cost of a branch

A three-stage pipeline runs instructions A, B and C, where C is a branch that is taken and jumps to
instruction P, followed by Q. The branch is resolved in the execute stage.

| Cycle | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Fetch | A | B | C | D | E | P | Q | | |
| Decode | | A | B | C | D | | P | Q | |
| Execute | | | A | B | C | | | P | Q |

- In cycle 5, C executes and the jump is taken. D and E, already in the pipeline, are flushed.
- P is fetched in cycle 6, so five useful instructions (A, B, C, P, Q) take **9 cycles**.
- An ideal pipeline would take 3 + (5 − 1) = **7 cycles**. The branch cost 2 cycles, one for each
  stage in front of execute.

The lesson for exam answers: the deeper the pipeline, the more instructions are flushed by a
mispredicted branch, which is why branch prediction matters more as pipelines get longer.

## Multi-core processors

A **multi-core processor** has two or more cores on one chip. Each core has its own control unit,
ALU, registers, pipeline and usually its own small (level 1) cache; the cores typically share a
larger cache and the connection to main memory.

The operating system's scheduler assigns threads to cores. Two independent programs, or two threads
of one program written to run in parallel, can then execute at the same moment, each moving through
its own core's pipeline.

**Benefits**
- Several programs run truly simultaneously, so the system stays responsive under load.
- A program designed for parallelism (rendering, compiling many files, simulations) can finish
  much sooner.
- Several cores at a moderate clock speed can deliver more work for the same power and heat than one
  core pushed to a very high clock speed.

**Limits**
- A program only benefits if it is written to divide its work into threads.
- Parts of a task that must happen in order cannot be shared out.
- Cores that share data must coordinate: one core may have to wait for another's result, and copies
  of the same data in different cores' caches must be kept consistent.
- Shared memory and cache can become a bottleneck when all cores need them at once.

## Worked example: how far do extra cores help?

Illustrative figures: a program takes 100 seconds on one core. 20 seconds of it must run in order;
the other 80 seconds can be split evenly across any number of cores.

```
1 core:   20 + 80 ÷ 1 = 100 s
2 cores:  20 + 80 ÷ 2 =  60 s
4 cores:  20 + 80 ÷ 4 =  40 s
8 cores:  20 + 80 ÷ 8 =  30 s
```

Doubling from 4 to 8 cores saves only 10 seconds, and no number of cores can bring the time below
20 seconds. This is the clearest way to show in an answer that "more cores" has diminishing returns
when part of the work is sequential.

## Pipelining versus multi-core: keep them distinct

| | Pipelining | Multi-core |
|---|---|---|
| Where | Inside one core | Across several cores |
| What overlaps | Stages of successive instructions from one stream | Whole instruction streams (threads) |
| Needs program changes? | No; the hardware does it | Usually; work must be split into threads |
| Main obstacle | Hazards (data, control, structural) | Sequential parts, coordination, shared resources |

## Common mistakes

- **Saying pipelining makes each instruction faster.** It increases throughput; each instruction
  still passes through every stage.
- **Calculating pipelined time as *n* cycles.** The pipeline has to fill first: *k* + (*n* − 1).
- **Treating cores as pipeline stages.** Each core has its own complete pipeline.
- **Claiming four cores make every program four times faster.** Only the parallel part speeds up.
- **Describing a hazard without its consequence.** Say what happens: a stall, or a flush of
  instructions already fetched.

## Exam technique for the command words

- **Construct** or **Complete** a pipeline diagram: one row per stage, one column per cycle, and
  check that each instruction moves one stage per cycle.
- **Calculate:** show the formula, then the substitution, then the answer with "cycles".
- **Explain** a hazard: name it, show which instruction depends on which, and state the effect.
- **Evaluate** a multi-core upgrade in a case study: identify which tasks are parallel, which are
  sequential, and conclude on the likely real gain.

## Practise and revise

- [Pipelining in multi-core architectures revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core-revision-notes/)
- [Pipelining in multi-core architectures practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core-practice/)
- [CPU and GPU differences study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
