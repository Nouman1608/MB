---
title: "Cambridge A Level Computer Science (9618): Processors, Parallel Processing and Virtual Machines -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 practice questions with answers on RISC and CISC, pipeline timing and interrupts, Flynn's architectures, parallel computers and virtual machines."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Processors, parallel processing and virtual machines study guide](/resources/cambridge-a-level-computer-science-9618-processors-parallel-processing-and-virtual-machines/) · [Processors, parallel processing and virtual machines revision notes](/resources/cambridge-a-level-computer-science-9618-processors-parallel-processing-and-virtual-machines-revision-notes/)

---

## Section A

**1.** State what is meant by a load/store architecture in a RISC processor. **[2]**

**2.** State **two** reasons why a RISC processor is easier to pipeline than a CISC processor. **[2]**

**3.** A processor has a four-stage pipeline. Each stage takes one clock cycle.

**(a)** Calculate the number of clock cycles needed to complete 15 instructions with pipelining and no hazards. **[1]**

**(b)** Calculate the number of clock cycles needed for the same 15 instructions without pipelining. **[1]**

**4.** State the meaning of MISD and give **one** situation in which it might be used. **[2]**

**5.** State **two** differences between a hardwired control unit and a microprogrammed control unit. **[2]**

**6.** Identify the most suitable architecture (SISD, SIMD, MISD or MIMD) for each of the following.

**(a)** A graphics processor changes the colour of every pixel in a frame using the same operation. **[1]**

**(b)** A web server has 32 cores; each core handles a different user's request. **[1]**

## Section B

**7.** A five-stage pipeline (IF, ID, OF, IE, WB) executes 30 instructions. Two branches are taken. Each taken branch is resolved at the IE stage, so the instructions behind it in the pipeline are flushed.

**(a)** State how many instructions are flushed by each taken branch. **[1]**

**(b)** Calculate the total number of clock cycles needed. Show your working. **[2]**

**(c)** Explain why branch instructions reduce the efficiency of a pipeline. **[2]**

**8.** Explain the problem that an interrupt causes in a pipelined RISC processor, and describe **two** ways the processor can deal with it. **[5]**

**9.** Explain why RISC processors have a large number of general-purpose registers, and how this supports pipelining. **[3]**

**10.** A meteorological office uses a massively parallel computer to produce weather forecasts.

**(a)** Describe **three** characteristics of a massively parallel computer. **[3]**

**(b)** Explain why doubling the number of processors does not halve the time taken to produce a forecast. **[2]**

**11.** A college still uses a stock-control program that only runs on an operating system its new computers do not support. The technician suggests using a virtual machine.

**(a)** Explain how a virtual machine would allow the college to keep using the program. **[2]**

**(b)** Give **two** other examples of the role of virtual machines. **[2]**

**(c)** Describe **two** limitations of using a virtual machine for this program. **[2]**

**12.** Compare RISC and CISC processors with reference to the number of instructions in a program, the time taken per instruction and the way interrupts are handled. **[6]**

---

## Answers

**1.** Only the LOAD and STORE instructions can access main memory [1]; all other instructions (such as arithmetic and logic) operate on values held in registers [1].

**2.** Any two: instructions are all the same length, so the fetch stage always knows where the next instruction starts [1]; most instructions take one clock cycle, so each stage takes the same time and no stage holds up the others [1]; simple instructions with few addressing modes make each stage's work uniform [1].

**3. (a)** 4 + (15 − 1) = **18 cycles** [1].

**(b)** 15 × 4 = **60 cycles** [1].

**4.** Multiple instruction, single data: several processors perform different operations on the same stream of data [1]. Used rarely, for example in a fault-tolerant system where results from the same data are cross-checked [1].

**5.** Any two pairs: hardwired produces control signals directly from logic circuits, microprogrammed uses a sequence of micro-instructions for each instruction [1]; hardwired is faster, microprogrammed is slower [1]; hardwired is harder to change, microprogrammed can be modified by changing the microprogram [1]; hardwired suits RISC, microprogrammed suits complex CISC instructions [1].

**6. (a)** **SIMD** [1].

**(b)** **MIMD** [1].

**7. (a)** **3** instructions (those in the OF, ID and IF stages) [1].

**(b)** No-hazard time = 5 + (30 − 1) = 34 cycles [1]; add 2 × 3 = 6 lost cycles, total **40 cycles** [1].

**(c)** The instructions fetched after the branch may be the wrong ones, because the branch decision is not known until the branch is executed [1]; they must be flushed and the correct instructions fetched, so clock cycles are wasted with no instruction completing [1].

**8.** Problem: when the interrupt arrives, several instructions are part-way through the pipeline, so there is no single point where the processor's state can simply be saved [1].

Way 1: flush (erase) the instructions that entered the pipeline most recently [1], allow the oldest instruction to complete and handle the interrupt, then fetch the erased instructions again afterwards [1].

Way 2: give each stage of the pipeline its own program counter value / storage [1], so the state of every instruction in the pipeline can be saved while the interrupt is handled and then resumed [1].

**9.** In a RISC processor, arithmetic and logic instructions can only use operands held in registers, so many registers are needed to hold the values being worked on [1]. Values stay in registers rather than being repeatedly read from and written to slower main memory [1]. Fewer memory accesses mean instructions keep to one clock cycle and the pipeline is not held up waiting for memory [1].

**10. (a)** Any three: a very large number of processors [1]; each processor has its own memory [1]; processors are linked by a high-speed network and communicate by passing messages [1]; each processor works on part of the same problem at the same time [1]; requires specially written software to divide the problem [1].

**(b)** Some parts of the forecast calculation depend on earlier results and must be done in sequence, so they cannot be shared between processors [1]; extra processors also add time spent communicating and combining partial results [1].

**11. (a)** The virtual machine software emulates a computer that runs the old operating system as a guest [1]; the stock-control program runs on the guest OS inside the virtual machine, on the new host computer [1].

**(b)** Any two: testing software on several operating systems from one computer [1]; running untrusted software or malware in isolation [1]; running several virtual servers on one physical server [1]; running intermediate code such as Java bytecode on any platform [1].

**(c)** Any two: the program will run more slowly than on real hardware, because instructions pass through the virtual machine layer [1]; the virtual machine uses the host's memory and processor time, reducing resources for other tasks [1]; some hardware the old program expects (such as a particular printer port) may not be available in the virtual machine [1].

**12.** Two marks per aspect, one for each processor type:
- **Number of instructions in a program**: RISC programs need more instructions, as each instruction is simple [1]; CISC programs need fewer, as one instruction can do several operations [1].
- **Time per instruction**: most RISC instructions take one clock cycle [1]; CISC instructions take varying numbers of cycles, often several [1].
- **Interrupt handling**: a pipelined RISC processor has several part-finished instructions when the interrupt arrives, so it must flush them or save the state of every stage [1]; on a CISC processor the interrupt is normally handled once the current, possibly long, instruction completes, which can delay the response [1].

---

## Where marks are usually lost

- Using stages × instructions for a pipelined processor.
- Forgetting to add the lost cycles for every taken branch, not just one.
- Labelling a multi-core processor as SIMD.
- Answering a virtual machine question with points about virtual memory.
- Explaining "many registers" without linking it to register-only operands.
- Describing an interrupt in a pipeline without saying what happens to the instructions already in it.
