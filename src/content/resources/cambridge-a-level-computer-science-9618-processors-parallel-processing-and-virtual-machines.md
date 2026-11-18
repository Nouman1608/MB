---
title: "Cambridge A Level Computer Science (9618): Processors, Parallel Processing and Virtual Machines"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15: Hardware and Virtual Machines"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 15.1
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "processors-parallel-processing-and-virtual-machines"
description: "Study guide to 9618 section 15.1: RISC and CISC, interrupts in pipelines, RISC registers, Flynn's four architectures, massively parallel computers and virtual machines."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 15.1 of Cambridge International AS & A Level Computer Science 9618 covers RISC and CISC processors, "the importance / use of pipelining and registers in RISC processors", "the four basic computer architectures" (SISD, SIMD, MISD, MIMD), "the characteristics of massively parallel computers" and "the concept of a virtual machine". The notes and guidance add two details that are easy to overlook: "interrupt handling on CISC and RISC processors", and the "benefits and limitations of virtual machines" with "examples of the role of virtual machines". It is A Level content, assessed in Paper 3.

Related: [Processors, parallel processing and virtual machines revision notes](/resources/cambridge-a-level-computer-science-9618-processors-parallel-processing-and-virtual-machines-revision-notes/) · [Processors, parallel processing and virtual machines practice questions](/resources/cambridge-a-level-computer-science-9618-processors-parallel-processing-and-virtual-machines-practice/) · [Topic 15 Hardware and Virtual Machines study guide](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide/)

## Why two instruction-set philosophies exist

An instruction set is the set of machine-code instructions a processor can carry out. Designers face a trade-off: make each instruction powerful, so programs are short, or make each instruction simple, so the hardware can run them quickly and predictably.

- **CISC** (Complex Instruction Set Computer) takes the first route. One instruction can, for example, fetch two operands from memory, add them and store the result. Instructions vary in length and in the number of clock cycles they take, and many addressing modes are available. The control unit is usually **microprogrammed**: each complex instruction is carried out as a sequence of simpler micro-instructions.
- **RISC** (Reduced Instruction Set Computer) takes the second route. Instructions are few, simple and mostly the same length, and most finish in one clock cycle. Only LOAD and STORE instructions access main memory; every other instruction works on registers. The control unit is usually **hardwired**.

So the same task needs more RISC instructions, but each is quicker and the uniform format pipelines efficiently; a CISC program is shorter, but each instruction takes longer.

## Registers in RISC processors

Because RISC arithmetic and logic instructions can only use operands in registers, a RISC processor needs **many general-purpose registers**. Values are loaded into registers once, used repeatedly, and stored back only when finished. This matters for two reasons:

1. Register access is far faster than main memory access, so keeping operands in registers keeps each instruction to a single cycle.
2. Fewer memory accesses mean fewer stalls in the pipeline while an instruction waits for memory.

So a good answer links three ideas: simple instructions, register-only operands, and many registers to make that workable.

## Pipelining in RISC processors

**Pipelining** overlaps the stages of consecutive instructions. A common teaching model uses five stages: instruction fetch (IF), instruction decode (ID), operand fetch (OF), instruction execute (IE) and write back the result (WB). Each stage is handled by its own part of the processor, so while one instruction is executed, the next is having its operands fetched, the one after that is being decoded, and so on.

Here are five instructions, labelled A to E, passing through the pipeline with no hazards:

| Clock cycle | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| IF | A | B | C | D | E | | | | |
| ID | | A | B | C | D | E | | | |
| OF | | | A | B | C | D | E | | |
| IE | | | | A | B | C | D | E | |
| WB | | | | | A | B | C | D | E |

A finishes in cycle 5, then one instruction finishes every cycle, so the five take 9 cycles instead of 25. In general, with *s* stages and *n* instructions and no hazards, the time is *s* + (*n* − 1) cycles.

RISC suits pipelining because instructions are the same length (so the fetch stage always knows where the next instruction starts) and take the same time (so no stage holds the others up). Variable-length, multi-cycle CISC instructions make the stages unequal, which is why pipelining is described as a feature of RISC in this syllabus.

### Worked example: a branch in the pipeline

*A program runs 20 instructions through the five-stage pipeline. One of them is a branch that is taken; the decision is known only when it reaches the IE stage.*

- When the branch reaches IE, the three instructions behind it (in OF, ID and IF) were fetched from the wrong place and must be **flushed**.
- The correct instruction is fetched in the next cycle, so 3 cycles are lost.
- Pipelined time = 5 + 19 + 3 = **27 cycles**. Without pipelining, 20 × 5 = **100 cycles**. Speed-up = 100 ÷ 27 ≈ **3.7**.

This explains why branches reduce, but do not remove, the benefit of pipelining.

## Interrupt handling on CISC and RISC processors

In a processor without a pipeline, the processor checks for interrupts at the end of each fetch-execute cycle. On a CISC processor an instruction may take many clock cycles, so the interrupt may wait until that long instruction completes before it is serviced. Then the register contents are saved, the interrupt service routine runs, and the registers are restored.

On a pipelined RISC processor the difficulty is different: when an interrupt arrives there are several instructions in the pipeline, each part-way through. Two approaches are commonly taught:

1. **Flush the pipeline**: erase the instructions that entered most recently, let the oldest instruction complete, then apply the normal interrupt routine. When the interrupt has been serviced, the erased instructions are fetched again.
2. **Save the state of every stage**: give the pipeline stages their own program counter values, so the current state of every instruction in the pipeline can be stored while the interrupt is handled and then resumed.

The first is simpler but wastes the cycles already spent; the second avoids repeating work but needs more hardware.

## Flynn's four architectures

The classification asks two questions: how many instruction streams, and how many data streams, are processed at once?

| Architecture | Meaning | Typical role |
|---|---|---|
| SISD | Single instruction, single data | A single-core processor running one program step by step |
| SIMD | Single instruction, multiple data | Array or vector processing: one instruction applied to many data items at once, such as brightening every pixel in an image |
| MISD | Multiple instruction, single data | Rare; several processors apply different operations to the same data, for example to cross-check results in a fault-tolerant system |
| MIMD | Multiple instruction, multiple data | Multi-core processors and clusters: each core runs its own instructions on its own data |

To classify a scenario, ask: is every processing element doing the *same* operation (SIMD) or *different* ones (MIMD)? Is there one stream of data (SISD or MISD) or many (SIMD or MIMD)?

## Massively parallel computers

A **massively parallel computer** links a very large number of processors (often whole computers) to work on one problem at the same time. Its characteristics are:

- a very large number of processors, each normally with its own memory;
- processors linked by a high-speed network, communicating by passing messages;
- each processor works on part of the problem simultaneously;
- programs must be written specially, so that the problem is split into parts that can run in parallel and the results combined.

Massively parallel systems suit problems that divide into many independent parts, such as weather forecasting or large simulations. The limit is the part of a task that must run in sequence. As an invented illustration, if a 100-second job has 20 seconds that cannot be shared, then 4 processors give 20 + 80 ÷ 4 = 40 seconds, and 8 processors give 20 + 80 ÷ 8 = 30 seconds. Doubling the processors does not halve the time, and communication between processors adds further overhead.

## Virtual machines

A **virtual machine** is software that emulates a computer system, so that programs run as if on a separate physical machine. The real computer is the **host**; the operating system running inside the virtual machine is the **guest**. Software called a hypervisor (virtual machine software) shares the host's hardware between the virtual machines.

### Examples of the role of virtual machines

- Running a different operating system (guest) on a host, for example to use software written for that operating system.
- Running legacy software that needs an old operating system or old hardware that is no longer available.
- Testing new software on several operating systems from one computer.
- Running untrusted software or examining malware in an isolated environment, so the host is protected.
- Running one physical server as many virtual servers, each for a different user or service.
- Running intermediate code, such as Java bytecode, on a process virtual machine, so the same program runs on any platform that has that virtual machine.

### Benefits and limitations

| Benefits | Limitations |
|---|---|
| Several operating systems on one machine, saving hardware cost | Slower than running directly on the hardware, because instructions pass through an extra layer |
| Guest is isolated: a crash or infection does not affect the host | Shares the host's processor, memory and storage, so performance falls as more virtual machines run |
| Easy to copy, back up or restore a whole virtual machine | Some hardware features may not be available to the guest |
| Old software kept running after its hardware has gone | Setting up and managing virtual machines needs skill and time |

## Common mistakes

- Writing "RISC has fewer instructions so it is slower". Each instruction is quick, and the processor pipelines well.
- Saying pipelining speeds up a single instruction. It increases the number completed per unit time.
- Forgetting that RISC operands must be in registers, so the importance of registers is not explained.
- Confusing virtual machines with virtual memory.
- Giving SIMD for any multi-core processor; multi-core cores run different instructions, so that is MIMD.

## Exam technique

- **Describe** RISC or CISC: give features (instruction count, length, cycles, addressing modes, registers, control unit).
- **Compare**: give each feature for both, in pairs.
- **Explain** why pipelining suits RISC: feature plus reason (fixed length, so fetching is simple; one cycle, so stages stay in step).
- **Calculate** pipeline times: write *s* + (*n* − 1), add lost cycles for each flush, and show the comparison.
- **Justify** an architecture or a virtual machine for a scenario: name it and give the feature that matters in that scenario.
