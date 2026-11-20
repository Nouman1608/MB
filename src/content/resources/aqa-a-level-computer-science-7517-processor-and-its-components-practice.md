---
title: "AQA A-Level Computer Science (7517): Structure and Role of the Processor and its Components -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
    subtopic: "structure-and-role-of-the-processor-and-its-components-7517"
description: "Original AQA 7517 section 4.7.3 questions with answers: registers, the Fetch-Execute cycle, addressing modes, assembly traces, interrupts and performance."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Processor study guide](/resources/aqa-a-level-computer-science-7517-processor-and-its-components/) | [Processor revision notes](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-revision-notes/)

Unless a question says otherwise, assume assembly language of this style: `MOV Rd, #n` (immediate), `LDR Rd, addr` (direct), `STR Rs, addr`, `ADD Rd, Rn, Operand2`, `SUB Rd, Rn, Operand2`, `CMP Rn, Operand2`, `B label`, `BLT label` (branch if the last compare showed less than), `LSL Rd, Rn, #n` (shift left), `LSR Rd, Rn, #n` (shift right) and `HALT`.

---

## Section A

**1.** State the purpose of the program counter. **[1]**

**2.** State what the memory address register holds. **[1]**

**3.** State what is meant by a processor instruction set. **[2]**

**4.** State the difference between immediate addressing and direct addressing. **[2]**

**5.** State **two** factors that affect processor performance, other than clock speed. **[2]**

## Section B

**6.** Describe the **fetch** stage of the Fetch-Execute cycle, naming the registers involved and showing the changes in each as register transfers. **[4]**

**7.** The program counter holds 40 at the start of a fetch. State the values of the PC and the MAR once the first two register transfers of the fetch stage are complete. **[2]**

**8.** An instruction is 12 bits long. The opcode occupies 5 bits and the operand occupies 7 bits.

**(a)** Calculate the number of different opcodes. **[1]**
**(b)** Calculate the number of memory locations the operand can address directly. **[1]**
**(c)** The designer wants to double the number of opcodes without changing the instruction length. State the effect on the operand. **[2]**

**9.** Trace this program and give the final values of R0, R1, R2 and R3.

```
MOV R0, #12
MOV R1, #5
ADD R2, R0, R1
SUB R3, R0, R1
HALT
```
**[4]**

**10.** R0 contains 00010111.

**(a)** Give the contents of R0 after `LSL R0, R0, #3`. **[1]**
**(b)** Give the contents of R0 after a further `LSR R0, R0, #2`. **[1]**
**(c)** Give the denary values of R0 before and after the two shifts, and state the relationship between the first shift and multiplication. **[2]**

**11.** R1 contains 10101100.

**(a)** Give the result of a bitwise AND with 11110000. **[1]**
**(b)** Give the result of a bitwise XOR with 11001100. **[1]**
**(c)** Explain how an AND with a mask can be used to examine only the upper four bits of a register. **[2]**

**12.** Trace this program and state the final values of R0 and R1.

```
      MOV R0, #1
      MOV R1, #0
loop: ADD R1, R1, R0
      LSL R0, R0, #1
      CMP R0, #16
      BLT loop
      HALT
```
Show the values of R0 and R1 after each pass of the loop. **[5]**

**13.** Describe what happens when an interrupt occurs while a program is running, and explain why the volatile environment must be saved. **[5]**

**14.** Explain why a processor with a higher clock speed does not always run a program faster. **[3]**

**15.** A manufacturer replaces a single-core processor with a four-core processor of the same clock speed. Evaluate whether a program that cannot be split into independent tasks will run faster. **[3]**

---

## Answers

**1.** It holds the address of the next instruction to be fetched [1].

**2.** The address of the memory location that is about to be read from or written to [1].

**3.** The complete set of machine code instructions that a processor can execute [1]; it is specific to that processor (or family of processors), so programs for one will not run on another [1].

**4.** Immediate: the operand is the data itself [1]. Direct: the operand is the address of the data [1].

**5.** Any two from: number of cores; cache memory; word length; address bus width; data bus width [1 each].

**6.** MAR ← PC (the address of the next instruction is copied to the MAR) [1]; PC ← PC + 1 [1]; MBR ← memory[MAR], the contents of the addressed location are copied into the MBR [1]; CIR ← MBR [1].

**7.** MAR = 40 [1]; PC = 41 [1].

**8. (a)** 2⁵ = 32 [1].
**(b)** 2⁷ = 128 [1].
**(c)** Doubling the opcodes needs one more opcode bit (6 bits) [1]; the operand then has only 6 bits, so it can address half as many locations (64) [1].

**9.** R0 = 12 [1]; R1 = 5 [1]; R2 = 12 + 5 = 17 [1]; R3 = 12 − 5 = 7 [1].

**10. (a)** 10111000 [1].
**(b)** 00101110 [1].
**(c)** Before: 23; after both shifts: 46 [1]. Shifting left by three places multiplies by 2³ = 8, so 23 becomes 184 (before the right shift) [1].

**11. (a)** 10100000 [1].
**(b)** 01100000 [1].
**(c)** The mask has 1s in the upper four bit positions and 0s in the rest [1]; AND leaves the upper four bits unchanged and sets the lower four to 0, so only the upper bits can have a value of 1 [1].

**12.** Initially R0 = 1, R1 = 0.

| Pass | R1 after ADD | R0 after LSL | Compare | Branch |
|---|---|---|---|---|
| 1 | 1 | 2 | 2 < 16 | yes |
| 2 | 3 | 4 | 4 < 16 | yes |
| 3 | 7 | 8 | 8 < 16 | yes |
| 4 | 15 | 16 | 16 < 16 false | no |

Pass 1 correct [1]; pass 2 correct [1]; pass 3 correct [1]; pass 4 correct and loop ends [1]; final R0 = 16 and R1 = 15 [1].

**13.** The interrupt signal is raised by a device or event [1]. The processor checks for interrupts at the end of each Fetch-Execute cycle [1]. If the interrupt has sufficient priority, the contents of the PC, the status register and the other registers are saved (usually on a stack) [1]. The PC is loaded with the address of the interrupt service routine, which runs [1]. When it finishes, the saved values are restored and the interrupted program resumes where it stopped [1]. The environment must be saved because the ISR will use and overwrite registers, so without a saved copy the original program would continue with wrong values (or the wrong next address) [1]. (Maximum 5 marks.)

**14.** A higher clock speed gives more cycles each second [1], but the processor may spend time waiting for main memory, which is slower [1]; heat and power limits, a narrow data bus or a small cache can also stop the extra speed being used [1].

**15.** The program will gain little or nothing [1]. Extra cores help only when work can be run at the same time on different cores [1]. A program that runs as one sequence of dependent steps uses only one core, so with the same clock speed the run time is almost unchanged [1].

---

## Where marks are usually lost

- Swapping the MAR (address) and the MBR (data).
- Incrementing the PC after execution instead of during fetch.
- Calculating shifts from the wrong end of the binary pattern.
- Forgetting to explain why the environment is saved in an interrupt answer.
- Assuming more cores or a faster clock always gives a proportional speed-up.
