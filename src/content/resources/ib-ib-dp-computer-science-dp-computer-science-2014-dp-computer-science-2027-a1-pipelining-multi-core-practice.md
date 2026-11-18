---
title: "IB DP Computer Science (DP Computer Science): Pipelining in Multi-Core Architectures (HL) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original HL questions on pipelining and multi-core processors for IB DP Computer Science A.1: diagrams, cycle counts, hazards and evaluation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.1.6 label (pipelining in multi-core architectures, HL only); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A1.1.6, pipelining in multi-core architectures** (HL only), inside A.1
Computer fundamentals. Related: [pipelining study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core-revision-notes/).
All pipelines below have three stages (Fetch, Decode, Execute), each taking one clock cycle.

## Section A

**1.** Outline what is meant by pipelining. **[2]**

**2.** Calculate the number of clock cycles needed to complete 15 instructions:
**(a)** without pipelining;
**(b)** with an ideal pipeline. **[2]**

**3.** State the difference between the throughput and the latency of a pipelined processor. **[2]**

**4.** Identify the type of hazard in each case.
**(a)** An instruction uses the value of a variable that the instruction before it is still
calculating.
**(b)** A loop's jump instruction is executed, but the next two instructions in memory have already
been fetched. **[2]**

**5.** State **two** components that each core of a multi-core processor has of its own. **[2]**

**6.** Outline the role of the operating system in making use of a multi-core processor. **[2]**

## Section B

**7.** Four instructions, W, X, Y and Z, are executed in order.
**(a)** Construct a pipeline diagram showing the stage each instruction is in during each clock
cycle. **[3]**
**(b)** State the total number of cycles. **[1]**

**8.** Instructions J, K, L, M and N are executed in order. Instruction K is a branch that is taken,
jumping to instruction R, which is followed by S. The branch is resolved in the execute stage.
**(a)** Identify the instructions that are flushed. **[1]**
**(b)** Calculate the total number of cycles needed to complete J, K, R and S. **[2]**
**(c)** Explain how branch prediction could reduce this number. **[2]**

**9.** Consider this code:
```
total <- 0
FOR i <- 0 TO 999
    total <- total + scores[i]
ENDFOR
```
Explain why this loop is difficult to speed up using several cores, and suggest how the work could
be divided between four cores. **[4]**

**10.** Illustrative figures: a video-editing export takes 120 seconds on one core. 24 seconds of the
work must run in order; the rest can be divided evenly across cores.
**(a)** Calculate the time on 4 cores and on 12 cores. **[2]**
**(b)** Explain what these results show about adding cores. **[2]**

**11.** Distinguish between pipelining and multi-core processing. **[4]**

**12.** A case study describes a hospital that wants faster processing of patient scan images.
Each scan is analysed separately, and many scans are waiting at once. The current server has a
single-core processor with a deep pipeline. A supplier offers either a single-core processor with a
higher clock speed or an eight-core processor with a slightly lower clock speed. Evaluate the two
options. **[6]**

---

## Answers

**1.** The stages of instruction processing (fetch, decode, execute) are overlapped [1], so that while
one instruction is executed the next is decoded and the one after is fetched [1].

**2. (a)** 3 × 15 = 45 cycles [1].
**(b)** 3 + (15 − 1) = 17 cycles [1].

**3.** Throughput is the number of instructions completed per unit time, which pipelining increases
[1]; latency is the time one instruction takes to pass through all stages, which pipelining does
not reduce [1].

**4. (a)** Data hazard [1].
**(b)** Control hazard [1].

**5.** Any two, [1] each: control unit; ALU; registers; pipeline; level 1 cache. Maximum 2.

**6.** The scheduler assigns processes or threads to different cores [1] so that independent tasks
run simultaneously and the workload is balanced across the cores [1].

**7. (a)** Award [3] for a fully correct diagram, [2] with one error, [1] with two errors:

| Cycle | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Fetch | W | X | Y | Z | | |
| Decode | | W | X | Y | Z | |
| Execute | | | W | X | Y | Z |

**(b)** 6 cycles [1].

**8. (a)** L and M [1] (fetched in cycles 3 and 4, before K executes in cycle 4; at the end of cycle 4
L has been decoded and M fetched).
**(b)** K executes in cycle 4; R is fetched in cycle 5 and S in cycle 6, so S executes in cycle 8 [1];
total 8 cycles [1]. (An ideal pipeline would take 3 + 3 = 6 cycles.)
**(c)** The processor predicts that the branch will be taken and fetches R and S straight after K
[1], so if the prediction is correct no instructions are flushed and no cycles are wasted [1].

**9.** One mark per point, up to 4:
- Each iteration updates `total`, which depends on the value from the previous iteration [1].
- So the iterations cannot simply run at the same time on different cores without waiting for each
  other [1].
- Divide the array into four parts of 250 elements (indexes 0-249, 250-499, 500-749, 750-999), one
  per core [1].
- Each core calculates its own subtotal independently, then the four subtotals are added at the end
  [1].
Maximum 4.

**10. (a)** 4 cores: 24 + 96 ÷ 4 = 48 s [1]. 12 cores: 24 + 96 ÷ 12 = 32 s [1].
**(b)** Tripling the cores from 4 to 12 only saves 16 seconds [1]; the sequential 24 seconds is never
reduced, so returns diminish and the time can never fall below 24 seconds [1].

**11.** One mark per valid point, up to 4, with both sides addressed:
- Pipelining happens within a single core; multi-core uses several cores [1].
- Pipelining overlaps the stages of successive instructions from one stream; multi-core runs separate
  instruction streams (threads) simultaneously [1].
- Pipelining is done by the hardware without the program being changed; multi-core usually needs
  the program to be split into threads [1].
- Pipelining is limited by hazards; multi-core is limited by sequential parts of a task and the need
  for cores to coordinate [1].
- Each core in a multi-core processor has its own pipeline, so the two are used together [1].
Maximum 4.

**12.** Award up to 6:
- Identifies that the scans are analysed separately, so the work is naturally parallel [1].
- Explains that the eight-core processor could analyse up to eight scans at the same time, each on its
  own core with its own pipeline [1].
- Recognises that the faster single core speeds up every instruction but still processes one scan at
  a time [1].
- Notes a limitation of the eight-core option: the analysis software must be able to run several
  scans in parallel (multi-threaded or several processes), and cores share memory, which may limit
  the gain [1].
- Notes that the slightly lower clock speed means each individual scan takes a little longer on the
  eight-core option [1].
- Justified conclusion: with many independent scans waiting, the eight-core processor is likely to
  give much higher throughput and clear the queue faster, provided the software supports it [1].
Maximum 6.

---

## Where marks are usually lost

- Writing *n* cycles for a pipelined total instead of *k* + (*n* − 1).
- Drawing pipeline diagrams where an instruction skips or repeats a stage.
- Forgetting that instructions behind a taken branch are flushed.
- Claiming eight cores means eight times faster without considering the sequential part or the
  software.

## Frequently asked questions

**Do I need to know pipelines with more than three stages?**
The same reasoning works for any number of stages. These questions use three to match the
fetch-decode-execute cycle; check the full guide for any further detail your school requires.

**Are these real IB questions?**
No. They are original practice questions written for revision.
