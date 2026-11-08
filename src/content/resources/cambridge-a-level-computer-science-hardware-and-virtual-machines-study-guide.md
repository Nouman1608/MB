---
title: "Cambridge A Level Computer Science (9618): Hardware and Virtual Machines -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15: Hardware and Virtual Machines"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 15
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "processors-parallel-processing-and-virtual-machines"
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "boolean-algebra-and-logic-circuits"
description: "Cambridge A Level Computer Science 9618 Topic 15 guide: RISC and CISC, pipelining, parallel processing, virtual machines, Karnaugh maps, adders, flip-flops."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

This A Level topic extends the AS work on processors and logic gates. It asks why different processor designs exist, how instructions can be overlapped or executed at the same time, how a virtual machine lets one computer behave like another, and how Boolean algebra and Karnaugh maps are used to design and simplify logic circuits, including adders and flip-flops.

## Where this fits in the specification

Topic 15 is A Level content and is examined on Paper 3 (Advanced Theory). It assumes you know the fetch-decode-execute cycle, registers and basic logic gates from the AS processor topics; the [processor fundamentals study guide](/resources/a-level-computer-science-processor-fundamentals/) covers that groundwork. Questions combine explanation (compare RISC with CISC) and calculation or design (simplify an expression, draw a circuit).

## Processors, parallel processing and virtual machines

### RISC and CISC

**CISC** (Complex Instruction Set Computer) processors have a large set of instructions, many of which perform several operations and take several clock cycles. Programs need fewer instructions, so code is shorter, but the control unit is complex.

**RISC** (Reduced Instruction Set Computer) processors have a small set of simple instructions, mostly of the same length, and most complete in one clock cycle. They use many registers, fewer addressing modes and a hardwired control unit. Programs need more instructions, but the simple fixed-length format makes **pipelining** efficient. In an exam, give contrasting pairs: number of instructions, cycles per instruction, number of registers, program length and ease of pipelining.

### Pipelining

**Pipelining** splits the fetch-decode-execute cycle into stages so that several instructions are in progress at once, each at a different stage. While instruction 1 is executed, instruction 2 is decoded and instruction 3 fetched. It increases throughput, not the speed of any single instruction.

A **hazard** is a situation that stops the pipeline flowing smoothly. The commonest in this course is a **branch** or jump: the instructions already fetched after it may be wrong and have to be flushed, wasting cycles. An **interrupt** also disrupts the flow, because the pipeline must be emptied so the current state can be saved and the interrupt service routine run.

### Parallel processing

Flynn's classification describes four arrangements of instruction and data streams.

| Type | Instructions | Data | Example idea |
|---|---|---|---|
| SISD | Single | Single | A traditional single-core processor |
| SIMD | Single | Multiple | The same operation applied to many pixels or array elements |
| MISD | Multiple | Single | Rare; some fault-tolerant systems |
| MIMD | Multiple | Multiple | Multi-core processors and clusters |

A **massively parallel computer** links a very large number of processors, each with its own memory, to work on parts of one problem. Parallel processing speeds up large tasks such as weather modelling, but gains are limited when parts of the task depend on each other, and splitting work and combining results has an overhead. Doubling the processors rarely halves the time.

### Virtual machines

A **virtual machine** is software that imitates a computer system, so programs written for one environment can run on another. It may emulate a different hardware or operating system, or run a set of **intermediate code** (such as bytecode) on any device with the right interpreter. Benefits include running several operating systems on one computer, safe testing in an isolated environment and portability of programs. Limitations are slower performance than running directly on the hardware and the memory and processing resources the virtual machine itself consumes.

## Boolean algebra and logic circuits

### Laws and simplification

Boolean expressions use AND (shown as a dot or by writing terms together), OR (+) and NOT (a bar or apostrophe). Key identities are: A + 0 = A, A.1 = A, A + A = A, A.A = A, A + A' = 1, A.A' = 0, the commutative, associative and distributive laws, and **De Morgan's laws**: (A.B)' = A' + B' and (A+B)' = A'.B'. These let you turn an AND-based circuit into an OR-based one and are widely tested.

### Karnaugh maps

A **Karnaugh map (K-map)** is a grid that lays out the rows of a truth table so that neighbouring cells differ in one variable only (Gray code order, 00, 01, 11, 10). You group adjacent 1s in rectangles of size 1, 2, 4 or 8 (powers of two), as large as possible, and write one product term per group using only the variables that stay constant across the group. Groups may wrap around the edges, and cells may be used in more than one group.

### Adders

A **half adder** adds two bits: Sum = A XOR B and Carry = A AND B. It cannot take a carry in. A **full adder** adds A, B and a carry in C: Sum = (A XOR B) XOR C, and Carry out = (A AND B) OR ((A XOR B) AND C). Chaining full adders gives a binary adder for multi-bit numbers.

### Flip-flops

A **flip-flop** is a circuit that stores one bit. An **SR flip-flop** has Set and Reset inputs: S = 1 sets Q to 1, R = 1 resets Q to 0, both 0 holds the state, and S = R = 1 is not allowed because the output is unpredictable. A **JK flip-flop** removes this problem: J = K = 1 makes the output toggle (invert) on each clock pulse. Flip-flops are the basis of registers and memory.

## Worked example 1: pipeline timing

A processor has a five-stage pipeline and each stage takes one clock cycle. Compare the time to run 8 instructions with and without pipelining, assuming no hazards.

1. Without pipelining each instruction takes 5 cycles, so 8 x 5 = 40 cycles.
2. With pipelining the first instruction takes 5 cycles. After that, one instruction completes each cycle, so the remaining 7 need 7 more cycles. Total = 5 + 7 = 12 cycles.
3. The speed-up is 40 / 12, which is about 3.3.

For 100 instructions the figures are 500 cycles and 5 + 99 = 104 cycles, a speed-up of about 4.8, approaching 5 as the number of instructions grows. If a branch at instruction 4 flushes the 4 stages already filled with later instructions, those cycles are lost, which shows why branches reduce pipeline efficiency.

## Worked example 2: simplifying with a K-map

A circuit has inputs A, B, C and output F = 1 for the input combinations ABC = 000, 001, 011, 100 and 111, and 0 otherwise.

Place the 1s on a map with A as the row and BC across the columns in the order 00, 01, 11, 10:

| | BC=00 | BC=01 | BC=11 | BC=10 |
|---|---|---|---|---|
| A=0 | 1 | 1 | 1 | 0 |
| A=1 | 1 | 0 | 1 | 0 |

Groups of two: the cells 000 and 100 (BC = 00, both values of A) give B'.C'; the cells 011 and 111 (BC = 11) give B.C; the cells 001 and 011 (A = 0, C = 1) give A'.C. All five 1s are covered.

F = B'.C' + B.C + A'.C

Check by substituting all eight input combinations: it gives 1 for exactly 000, 001, 011, 100 and 111. For example, input 101 gives B'.C' = 0, B.C = 0 and A'.C = 0, so F = 0, as required. Each term needs fewer gates than the original five-term sum of products.

## Common mistakes

- Claiming pipelining makes a single instruction faster. It improves throughput.
- Saying RISC has "fewer instructions so slower". The simple instructions are fast and pipeline well.
- Mixing up SIMD and MIMD.
- Making K-map groups of 3 or 6, or not making groups as large as possible.
- Forgetting the carry in a full adder or allowing S = R = 1 on an SR flip-flop.
- Applying De Morgan's law but leaving AND and OR unchanged.

## Exam technique

**Compare** means points on both designs, so use contrasting pairs. **Explain** a benefit needs the reason. For circuit questions, show the truth table, the grouping and each product term before the final expression, since method marks are available. Check a simplified expression against at least one row of the truth table.

## Check your understanding

1. Give two differences between RISC and CISC. *RISC has fewer, simpler instructions that mostly take one cycle and uses more registers; CISC has many complex multi-cycle instructions and shorter programs.*
2. A 4-stage pipeline runs 10 instructions with no hazards. How many cycles are needed? *4 + 9 = 13 cycles.*
3. State what SIMD means and give a use. *Single instruction, multiple data; the same operation applies to many data items, such as adjusting every pixel of an image.*
4. Give one benefit and one limitation of a virtual machine. *Benefit: runs another operating system or test environment safely on one computer; limitation: slower than direct execution.*
5. Apply De Morgan's law to (A + B)'. *A'.B'.*
6. Write the Sum and Carry of a half adder. *Sum = A XOR B; Carry = A AND B.*
7. What happens to a JK flip-flop when J = K = 1 at a clock pulse? *The output toggles.*
8. Why is S = R = 1 not allowed on an SR flip-flop? *The output state becomes unpredictable.*

## Frequently asked questions

**What is the difference between RISC and CISC processors?**
RISC processors have a small set of simple, mostly fixed-length instructions that usually take one clock cycle, with many registers, which makes pipelining efficient. CISC processors have many complex instructions that take several cycles, giving shorter programs.

**Does pipelining make each instruction faster?**
No. Pipelining overlaps the stages of several instructions, which increases throughput, but it does not speed up any single instruction.

**How do you group cells in a Karnaugh map?**
Group adjacent 1s in rectangles of 1, 2, 4 or 8 cells, as large as possible, and write one product term per group. Groups may wrap round the edges and cells may be used more than once.

**What is the difference between an SR and a JK flip-flop?**
In an SR flip-flop, S = R = 1 is not allowed because the output is unpredictable. A JK flip-flop removes this problem: J = K = 1 makes the output toggle on each clock pulse.
