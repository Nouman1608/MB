---
title: "Cambridge A Level Computer Science (9618): Hardware and Virtual Machines -- Revision Notes"
seoTitle: "Cambridge 9618 Hardware and Virtual Machines Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on RISC and CISC, pipelining, Flynn architectures, virtual machines, adders, flip-flops, De Morgan and Karnaugh maps for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

Topic 15 Hardware and Virtual Machines covers processor design (RISC versus CISC, pipelining and interrupt handling), parallel computer architectures, virtual machines, and logic design with adders, flip-flops, Boolean algebra and Karnaugh maps. In Cambridge International AS & A Level Computer Science 9618 it is A Level content examined in Paper 3, where you compare designs in contrasting pairs and simplify logic expressions with full working.

Related: [Hardware and Virtual Machines study guide](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide/) · [practice questions](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 15.1 | Show understanding of RISC and CISC processors: their differences, and interrupt handling on each |
| 15.1 | Show understanding of the importance and use of pipelining and registers in RISC processors |
| 15.1 | Show understanding of the four basic computer architectures: SISD, SIMD, MISD, MIMD |
| 15.1 | Show understanding of the characteristics of massively parallel computers |
| 15.1 | Show understanding of the concept of a virtual machine: examples of its role, benefits and limitations |
| 15.2 | Produce truth tables for logic circuits including half adders and full adders (gates may have more than two inputs) |
| 15.2 | Show understanding of SR and JK flip-flops: draw the circuit, derive the truth table, and their role as data storage elements |
| 15.2 | Show understanding of Boolean algebra and De Morgan's laws; simplify a circuit or expression using Boolean algebra |
| 15.2 | Show understanding of Karnaugh maps: their benefits, and solve logic problems with them |

## RISC versus CISC

| Feature | RISC | CISC |
|---|---|---|
| Instruction set | Small, simple instructions | Large, many complex instructions |
| Cycles per instruction | Mostly one | Many, varying |
| Instruction length | Fixed | Variable |
| Addressing modes | Few | Many |
| Registers | Many general-purpose registers | Fewer |
| Memory access | Only load and store instructions access memory | Many instructions can access memory |
| Control unit | Hardwired | Often microprogrammed |
| Program length | More instructions per program | Fewer instructions per program |
| Pipelining | Easy and efficient | Harder |

**Why registers matter in RISC**: operands are kept in registers, so most instructions work register-to-register in one cycle, avoiding slow memory accesses and keeping the pipeline full.

## Pipelining

Instruction processing is split into stages (for example fetch, decode, execute, memory access, write back) so that a different instruction can be in each stage at the same time. Throughput rises; each instruction still takes the same number of cycles.

With a 5-stage pipeline and no hazards, n instructions take 5 + (n − 1) cycles, compared with 5n without pipelining. For 20 instructions: 24 cycles instead of 100.

**Interrupt handling**: on a CISC processor without a pipeline, the interrupt is checked for after the current instruction finishes; registers are saved and the ISR runs. On a pipelined RISC processor several instructions are part-way through when the interrupt arrives. Either the later instructions are flushed from the pipeline and only the one furthest on is completed before the ISR is loaded, or each stage keeps its own copy of the program counter and register data so the state of every instruction in the pipeline can be saved and resumed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--07-pipeline-timing.webp" width="900" height="1070" alt="A grid with eight instructions down the side and twelve clock cycles across. Each instruction moves through five stages, one per cycle, starting one cycle after the previous instruction, so the staircase of coloured cells finishes at cycle 12. Without pipelining, eight instructions take 8 times 5 = 40 cycles; with pipelining they take 5 + 7 = 12 cycles. The speed-up is 40 divided by 12, about 3.3." loading="lazy">
  <figcaption>Eight instructions on a five-stage pipeline finish in 12 cycles instead of 40.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--08-pipeline-speedup.webp" width="900" height="960" alt="A graph of speed-up against number of instructions for a five-stage pipeline. The curve rises steeply, passing 3.3 at 8 instructions and 4.8 at 100 instructions, and approaches a dashed limit of 5, the number of stages. Pipelining raises throughput, but no single instruction runs faster." loading="lazy">
  <figcaption>Speed-up approaches the number of stages (5) as the run gets longer.</figcaption>
</figure>

## Flynn's four architectures

| Architecture | Meaning | Example |
|---|---|---|
| SISD | Single instruction, single data | A single-core processor running one program |
| SIMD | Single instruction, multiple data | Array or vector processing; applying one filter to every pixel |
| MISD | Multiple instruction, single data | Several processors check the same data, e.g. in fault-tolerant systems (rare) |
| MIMD | Multiple instruction, multiple data | Multi-core processors; clusters, each core running its own instructions on its own data |

**Massively parallel computers**: a very large number of processors, each with its own memory, linked by a fast network; each works on part of one problem and they exchange results by passing messages. Used for weather forecasting, climate and scientific simulation. The software must be written to split the task; parts that depend on each other limit the speed-up.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--09-flynn-classification.webp" width="900" height="1170" alt="Four panels. SISD: one instruction stream and one data stream feed one processor, like a traditional single core. SIMD: one instruction stream feeds several processors, each with its own data item, for example the same change applied to every pixel. MISD: several instruction streams act on a single data stream; rare, used in some fault-tolerant systems. MIMD: several processors each with their own instructions and data, as in multi-core processors and clusters." loading="lazy">
  <figcaption>SISD, SIMD, MISD and MIMD drawn as instruction and data streams feeding processors.</figcaption>
</figure>

## Virtual machines

A **virtual machine** is software that emulates a computer system, so a guest operating system or program runs as if on its own hardware, inside a host system.

| Examples of their role | Benefits | Limitations |
|---|---|---|
| Running a second operating system on one computer | Several systems on one set of hardware saves cost | Slower than running directly on hardware |
| Running intermediate code, e.g. Java bytecode on the Java Virtual Machine | Programs become portable across platforms | The VM uses extra memory and processing |
| Testing software, or examining malware, in an isolated environment | A crash or infection stays inside the VM | May not reproduce real hardware exactly |
| Running old (legacy) software on new hardware | Old software stays usable | Emulation can be complex to set up |

Virtual machines are not virtual memory (June 2024 Paper 32).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--10-virtual-machine.webp" width="900" height="920" alt="A stack of layers: hardware at the bottom, then the host operating system, then virtual machine software that imitates a computer. On top of the virtual machine software run two guest operating systems, each with programs. Benefits: several operating systems on one computer, safe isolated testing, portable programs. Limitations: slower than running directly on the hardware, and the virtual machine uses memory and processing power." loading="lazy">
  <figcaption>A virtual machine runs guest systems on top of a host operating system, with benefits and limitations.</figcaption>
</figure>

## Half adder and full adder

| A | B | Sum | Carry |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Half adder: Sum = A XOR B; Carry = A AND B.

| A | B | Cin | Sum | Cout |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Full adder: two half adders and an OR gate. Sum = (A XOR B) XOR Cin; Cout = (A AND B) OR (Cin AND (A XOR B)).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--12-full-adder.webp" width="900" height="1150" alt="A logic circuit and truth table for a full adder. Inputs A and B go into an XOR gate and an AND gate. The XOR output goes with carry in C into a second XOR gate, which gives Sum, and into a second AND gate. The two AND outputs go into an OR gate, which gives carry out Cout. The eight-row truth table shows Sum and Cout for every combination of A, B and C; in every row the binary value of Cout and Sum equals the number of inputs that are 1." loading="lazy">
  <figcaption>Full adder circuit built from two XOR, two AND and one OR gate, with its eight-row truth table.</figcaption>
</figure>

## Flip-flops

A flip-flop stores one bit; its output depends on its inputs **and its previous state**, which is why it can act as memory (registers, SRAM).

| SR (NOR gates) S | R | Q next |
|---|---|---|
| 0 | 0 | No change (Q held) |
| 1 | 0 | 1 (set) |
| 0 | 1 | 0 (reset) |
| 1 | 1 | Invalid: Q and Q̄ both 0, state unpredictable when inputs return to 0 |

A NOR-based SR flip-flop is two cross-coupled NOR gates: each gate's output feeds back to an input of the other.

| JK (clocked) J | K | Q next |
|---|---|---|
| 0 | 0 | No change |
| 1 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 1 | Toggle (Q becomes NOT Q) |

The JK flip-flop removes the invalid state and changes only on a clock pulse, so outputs are synchronised.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--13-flip-flops.webp" width="900" height="1000" alt="Top: four cards for an SR flip-flop. S=1, R=0 sets Q to 1. S=0, R=1 resets Q to 0. S=0, R=0 holds the state, so Q is unchanged. S=1, R=1 is not allowed because the output is unpredictable. Bottom: waveforms for a JK flip-flop with J and K both 1. A square clock wave has six pulses and Q toggles at each pulse, going 1, 0, 1, 0, 1, 0." loading="lazy">
  <figcaption>SR flip-flop set, reset, hold and forbidden states, and the JK toggle when J = K = 1.</figcaption>
</figure>

## Boolean algebra

| Law | AND form | OR form |
|---|---|---|
| Identity | A.1 = A | A + 0 = A |
| Null | A.0 = 0 | A + 1 = 1 |
| Idempotent | A.A = A | A + A = A |
| Inverse | A.Ā = 0 | A + Ā = 1 |
| Absorption | A.(A + B) = A | A + A.B = A |
| Distributive | A.(B + C) = A.B + A.C | A + B.C = (A + B).(A + C) |
| De Morgan | NOT(A.B) = Ā + B̄ | NOT(A + B) = Ā.B̄ |

**Worked simplification**: X = A.B + A.B̄ + Ā.B

- A.B + A.B̄ = A.(B + B̄) = A.1 = A, so X = A + Ā.B.
- A + Ā.B = (A + Ā).(A + B) = 1.(A + B) = A + B.

**De Morgan in use**: NOT(A.B + C) = NOT(A.B).NOT C = (Ā + B̄).C̄. Change the operator **and** invert each term.

## Karnaugh maps

- Label rows and columns in Gray code (00, 01, 11, 10) so neighbouring cells differ by one variable.
- Group 1s in rectangles of 1, 2, 4, 8 or 16 cells; make groups as large as possible and as few as possible; groups may overlap and wrap round edges.
- For each group, write the term using only the variables that do not change within it.
- **Benefits**: a visual method that gives the simplest sum-of-products expression with fewer steps and fewer errors than algebra, and so fewer gates.

**Example (four variables)**: F = 1 for ABCD = 0000, 0010, 1000, 1010 (the four corners) and 0101, 0111, 1101, 1111 (the centre block).

| AB \ CD | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 00 | 1 | 0 | 0 | 1 |
| 01 | 0 | 1 | 1 | 0 |
| 11 | 0 | 1 | 1 | 0 |
| 10 | 1 | 0 | 0 | 1 |

The corners form one group of four (B = 0, D = 0): B̄.D̄. The centre forms a group of four (B = 1, D = 1): B.D. So F = B̄.D̄ + B.D.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide--11-kmap-worked-example.webp" width="900" height="990" alt="A Karnaugh map with A as the row and BC in Gray code order 00, 01, 11, 10 across the columns. The ones are in row A=0 at BC 00, 01 and 11, and in row A=1 at BC 00 and 11. Three groups of two cover all five ones: B-not.C-not (BC 00, both rows), B.C (BC 11, both rows) and A-not.C (row A=0, BC 01 and 11). The simplified expression is F = B-not.C-not + B.C + A-not.C, checked against every row of the truth table." loading="lazy">
  <figcaption>The K-map for the five-minterm example with its three groups and the simplified expression.</figcaption>
</figure>

## Common mistakes and exam traps

- Saying pipelining speeds up a single instruction; it raises throughput.
- Swapping SIMD and MIMD.
- Confusing virtual machines with virtual memory (June 2024).
- K-map groups of 3 or 6; missing a wrap-round group; not making groups as large as possible.
- Applying De Morgan's law without changing AND to OR (or OR to AND).
- Forgetting that S = R = 1 is invalid for an SR flip-flop.

## Frequently asked questions

**Why are RISC processors better suited to pipelining?**
Their instructions are a fixed length and mostly take one cycle, so each stage takes the same time and instructions flow through evenly.

**Why can a flip-flop store data but an AND gate cannot?**
The flip-flop's outputs feed back into its inputs, so it keeps its state after the input changes; a simple gate's output depends only on the current inputs.

**Do I need to know MISD examples?**
It is rarely used in practice. Describe it correctly and give a fault-tolerant system, where several processors handle the same data, as an illustration.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 15 (15.1 and 15.2). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
