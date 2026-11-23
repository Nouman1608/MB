---
title: "Cambridge A Level Computer Science (9618): Processors, Parallel Processing and Virtual Machines -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 9618 notes on RISC and CISC, pipeline timing, interrupts, RISC registers, SISD to MIMD, massively parallel computers and virtual machines."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 15.1 "Processors, Parallel Processing and Virtual Machines" of Cambridge International AS & A Level Computer Science 9618: RISC and CISC (including interrupt handling), pipelining and registers in RISC, the four basic computer architectures, massively parallel computers, and virtual machines with their roles, benefits and limitations. It is assessed in Paper 3.

Related: [Processors, parallel processing and virtual machines study guide](/resources/cambridge-a-level-computer-science-9618-processors-parallel-processing-and-virtual/) · [Processors, parallel processing and virtual machines practice questions](/resources/cambridge-a-level-computer-science-9618-processors-parallel-processing-and-virtual-practice/) · [Topic 15 revision notes](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| Instruction set | All the machine-code instructions a processor can execute |
| RISC | Small set of simple, fixed-length instructions, mostly one clock cycle each |
| CISC | Large set of complex, variable-length instructions, often several cycles each |
| Load/store architecture | Only LOAD and STORE access memory; other instructions use registers |
| Hardwired control unit | Control signals produced directly by logic circuits (typical of RISC) |
| Microprogrammed control unit | Each instruction carried out as a sequence of micro-instructions (typical of CISC) |
| Pipelining | Overlapping the stages of consecutive instructions |
| Pipeline flush | Erasing instructions in the pipeline that should not be executed |
| Flynn's classification | SISD, SIMD, MISD, MIMD, by number of instruction and data streams |
| Massively parallel computer | Very many processors, each with its own memory, working on one problem |
| Virtual machine | Software emulating a computer system |
| Host / guest | The physical machine and its OS / the OS running inside the virtual machine |
| Hypervisor | Software that creates and runs virtual machines, sharing the host's hardware |

## RISC against CISC

| Feature | RISC | CISC |
|---|---|---|
| Number of instructions | Few | Many |
| Instruction length | Fixed | Variable |
| Cycles per instruction | Mostly one | Often several |
| Addressing modes | Few | Many |
| Memory access | Only LOAD and STORE | Many instructions can access memory |
| Registers | Many general-purpose | Fewer |
| Control unit | Hardwired | Microprogrammed |
| Program length | Longer (more instructions) | Shorter |
| Pipelining | Efficient | Harder, as stages are unequal |

**Registers in RISC, in one chain**: operands must be in registers → so many registers are needed → so memory is accessed less → so each instruction stays at one cycle and the pipeline does not stall.

## Pipelining facts

- Five-stage model: IF (fetch), ID (decode), OF (operand fetch), IE (execute), WB (write back).
- No hazards: time = stages + (instructions − 1).
- Without pipelining: time = stages × instructions.
- Each taken branch resolved at IE flushes the instructions behind it (3 in the five-stage model).
- Pipelining raises **throughput**; it does not make one instruction faster.

**Quick figures** (five stages): 10 instructions → 14 cycles against 50; 50 instructions → 54 cycles against 250.

## Interrupt handling

- **Without a pipeline (typical CISC)**: interrupt checked at the end of each fetch-execute cycle; a long multi-cycle instruction must finish first, so the response can be delayed. Then save registers → run the interrupt service routine → restore registers.
- **With a pipeline (RISC)**: several part-finished instructions are in the pipeline when the interrupt arrives. Either flush the most recent instructions, finish the oldest, handle the interrupt and refetch the flushed ones later; or store the state of every stage (each with its own program counter value) and resume them after the interrupt.

## Flynn's four architectures

| Type | Streams | Example |
|---|---|---|
| SISD | 1 instruction, 1 data | Single-core processor |
| SIMD | 1 instruction, many data | Applying one filter to every pixel; vector or array processing |
| MISD | Many instructions, 1 data | Rare; cross-checking one data stream in fault-tolerant systems |
| MIMD | Many instructions, many data | Multi-core processors, clusters, massively parallel computers |

**Decision test**: same operation on many items → SIMD. Different tasks at once on different data → MIMD.

## Massively parallel computers: four characteristics

1. A very large number of processors.
2. Each processor has its own memory.
3. Processors connected by a fast network and communicate by passing messages.
4. Needs specially written software that divides one problem into parts solved at the same time.

**Limits**: parts of the task that must run in sequence; time spent communicating and combining results.

## Virtual machines

**Roles**
- Run a guest OS on a host OS.
- Keep legacy software running.
- Test software on several OSs on one computer.
- Isolate untrusted software or malware.
- Divide one physical server into several virtual servers.
- Run intermediate code (for example Java bytecode) on any platform.

| Benefits | Limitations |
|---|---|
| Many OSs on one machine; less hardware | Slower than running on the hardware directly |
| Isolation protects the host | Shares host resources, so performance falls with more VMs |
| Easy to back up, copy, restore | Some hardware features unavailable to the guest |
| Old software survives hardware change | Set-up and management take skill |

## Exam traps

- "RISC is slower because it has fewer instructions": wrong reasoning.
- "Pipelining makes each instruction faster": it raises throughput only.
- Multi-core processor labelled SIMD: it is MIMD.
- Virtual machine confused with virtual memory.
- Pipeline time written as stages × instructions for a pipelined processor.
- Interrupt answers that ignore the instructions already in the pipeline.

## Self-test

1. Give three features of a RISC instruction set.
2. Why does a RISC processor have many general-purpose registers?
3. A five-stage pipeline runs 12 instructions with no hazards. How many cycles?
4. The same processor, without pipelining, runs those 12 instructions. How many cycles?
5. In the five-stage model, how many instructions are flushed by a taken branch resolved at IE?
6. Why might a CISC processor take longer to respond to an interrupt?
7. Give one way a pipelined processor can deal with an interrupt.
8. Classify: one instruction adds 5 to every element of an array at once.
9. Classify: a quad-core laptop runs a browser, a music player and a virus scan.
10. State two characteristics of a massively parallel computer.
11. Give two roles of a virtual machine.
12. Give one limitation of a virtual machine.

### Answers

1. Any three: few instructions; fixed length; mostly one clock cycle; few addressing modes; only LOAD/STORE access memory; hardwired control unit.
2. Operands must be in registers, so many are needed to hold values without repeated slow memory accesses, keeping instructions to one cycle.
3. 5 + 11 = 16 cycles.
4. 12 × 5 = 60 cycles.
5. Three (those in OF, ID and IF).
6. The interrupt is usually serviced only when the current instruction has finished, and a CISC instruction may take many cycles.
7. Flush the most recent instructions and refetch them after the interrupt, or save the state of every stage and resume after the interrupt.
8. SIMD.
9. MIMD.
10. Any two: very many processors; each with its own memory; linked by a fast network passing messages; specially written parallel software; work on parts of one problem at once.
11. Any two: run a guest OS; run legacy software; test on several OSs; isolate malware; split a server; run bytecode.
12. Any one: slower than direct execution; shares host resources; not all hardware features available; needs skill to manage.
