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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--09-flynn-classification.webp" width="900" height="1170" alt="Four panels. SISD: one instruction stream and one data stream feed one processor, like a traditional single core. SIMD: one instruction stream feeds several processors, each with its own data item, for example the same change applied to every pixel. MISD: several instruction streams act on a single data stream; rare, used in some fault-tolerant systems. MIMD: several processors each with their own instructions and data, as in multi-core processors and clusters." loading="lazy">
  <figcaption>SISD, SIMD, MISD and MIMD drawn as instruction and data streams feeding processors.</figcaption>
</figure>


### Virtual machines

A **virtual machine** is software that imitates a computer system, so programs written for one environment can run on another. It may emulate a different hardware or operating system, or run a set of **intermediate code** (such as bytecode) on any device with the right interpreter. Benefits include running several operating systems on one computer, safe testing in an isolated environment and portability of programs. Limitations are slower performance than running directly on the hardware and the memory and processing resources the virtual machine itself consumes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--10-virtual-machine.webp" width="900" height="920" alt="A stack of layers: hardware at the bottom, then the host operating system, then virtual machine software that imitates a computer. On top of the virtual machine software run two guest operating systems, each with programs. Benefits: several operating systems on one computer, safe isolated testing, portable programs. Limitations: slower than running directly on the hardware, and the virtual machine uses memory and processing power." loading="lazy">
  <figcaption>A virtual machine runs guest systems on top of a host operating system, with benefits and limitations.</figcaption>
</figure>


## Boolean algebra and logic circuits

### Laws and simplification

Boolean expressions use AND (shown as a dot or by writing terms together), OR (+) and NOT (a bar or apostrophe). Key identities are: A + 0 = A, A.1 = A, A + A = A, A.A = A, A + A' = 1, A.A' = 0, the commutative, associative and distributive laws, and **De Morgan's laws**: (A.B)' = A' + B' and (A+B)' = A'.B'. These let you turn an AND-based circuit into an OR-based one and are widely tested.

### Karnaugh maps

A **Karnaugh map (K-map)** is a grid that lays out the rows of a truth table so that neighbouring cells differ in one variable only (Gray code order, 00, 01, 11, 10). You group adjacent 1s in rectangles of size 1, 2, 4 or 8 (powers of two), as large as possible, and write one product term per group using only the variables that stay constant across the group. Groups may wrap around the edges, and cells may be used in more than one group.

### Adders

A **half adder** adds two bits: Sum = A XOR B and Carry = A AND B. It cannot take a carry in. A **full adder** adds A, B and a carry in C: Sum = (A XOR B) XOR C, and Carry out = (A AND B) OR ((A XOR B) AND C). Chaining full adders gives a binary adder for multi-bit numbers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--12-full-adder.webp" width="900" height="1150" alt="A logic circuit and truth table for a full adder. Inputs A and B go into an XOR gate and an AND gate. The XOR output goes with carry in C into a second XOR gate, which gives Sum, and into a second AND gate. The two AND outputs go into an OR gate, which gives carry out Cout. The eight-row truth table shows Sum and Cout for every combination of A, B and C; in every row the binary value of Cout and Sum equals the number of inputs that are 1." loading="lazy">
  <figcaption>Full adder circuit built from two XOR, two AND and one OR gate, with its eight-row truth table.</figcaption>
</figure>


### Flip-flops

A **flip-flop** is a circuit that stores one bit. An **SR flip-flop** has Set and Reset inputs: S = 1 sets Q to 1, R = 1 resets Q to 0, both 0 holds the state, and S = R = 1 is not allowed because the output is unpredictable. A **JK flip-flop** removes this problem: J = K = 1 makes the output toggle (invert) on each clock pulse. Flip-flops are the basis of registers and memory.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--13-flip-flops.webp" width="900" height="1000" alt="Top: four cards for an SR flip-flop. S=1, R=0 sets Q to 1. S=0, R=1 resets Q to 0. S=0, R=0 holds the state, so Q is unchanged. S=1, R=1 is not allowed because the output is unpredictable. Bottom: waveforms for a JK flip-flop with J and K both 1. A square clock wave has six pulses and Q toggles at each pulse, going 1, 0, 1, 0, 1, 0." loading="lazy">
  <figcaption>SR flip-flop set, reset, hold and forbidden states, and the JK toggle when J = K = 1.</figcaption>
</figure>


## Worked example 1: pipeline timing

A processor has a five-stage pipeline and each stage takes one clock cycle. Compare the time to run 8 instructions with and without pipelining, assuming no hazards.

1. Without pipelining each instruction takes 5 cycles, so 8 x 5 = 40 cycles.
2. With pipelining the first instruction takes 5 cycles. After that, one instruction completes each cycle, so the remaining 7 need 7 more cycles. Total = 5 + 7 = 12 cycles.
3. The speed-up is 40 / 12, which is about 3.3.

For 100 instructions the figures are 500 cycles and 5 + 99 = 104 cycles, a speed-up of about 4.8, approaching 5 as the number of instructions grows. If a branch at instruction 4 flushes the 4 stages already filled with later instructions, those cycles are lost, which shows why branches reduce pipeline efficiency.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--07-pipeline-timing.webp" width="900" height="1070" alt="A grid with eight instructions down the side and twelve clock cycles across. Each instruction moves through five stages, one per cycle, starting one cycle after the previous instruction, so the staircase of coloured cells finishes at cycle 12. Without pipelining, eight instructions take 8 times 5 = 40 cycles; with pipelining they take 5 + 7 = 12 cycles. The speed-up is 40 divided by 12, about 3.3." loading="lazy">
  <figcaption>Eight instructions on a five-stage pipeline finish in 12 cycles instead of 40.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--08-pipeline-speedup.webp" width="900" height="960" alt="A graph of speed-up against number of instructions for a five-stage pipeline. The curve rises steeply, passing 3.3 at 8 instructions and 4.8 at 100 instructions, and approaches a dashed limit of 5, the number of stages. Pipelining raises throughput, but no single instruction runs faster." loading="lazy">
  <figcaption>Speed-up approaches the number of stages (5) as the run gets longer.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--11-kmap-worked-example.webp" width="900" height="990" alt="A Karnaugh map with A as the row and BC in Gray code order 00, 01, 11, 10 across the columns. The ones are in row A=0 at BC 00, 01 and 11, and in row A=1 at BC 00 and 11. Three groups of two cover all five ones: B-not.C-not (BC 00, both rows), B.C (BC 11, both rows) and A-not.C (row A=0, BC 01 and 11). The simplified expression is F = B-not.C-not + B.C + A-not.C, checked against every row of the truth table." loading="lazy">
  <figcaption>The K-map for the five-minterm example with its three groups and the simplified expression.</figcaption>
</figure>


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
