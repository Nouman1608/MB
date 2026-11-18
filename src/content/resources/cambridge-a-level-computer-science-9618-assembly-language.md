---
title: "Cambridge A Level Computer Science (9618): Assembly Language"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
    subtopic: "assembly-language"
description: "Study guide to Cambridge 9618 section 4.2: assembly and machine code, the two-pass assembler, instruction groups, addressing modes and tracing programs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 4.2 Assembly Language of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. You must show understanding of "the relationship between assembly language and machine code"; describe the stages of the assembly process for a two-pass assembler and "apply the two-pass assembler process to a given simple assembly language program"; "trace a given simple assembly language program"; show that instructions are grouped (data movement, input and output of data, arithmetic operations, unconditional and conditional instructions, compare instructions); and use the immediate, direct, indirect, indexed and relative addressing modes.

The syllabus prints an instruction set that questions use, and states that "all questions will assume there is only one general purpose register available (Accumulator)". The [Processor Fundamentals study guide](/resources/a-level-computer-science-processor-fundamentals/) summarises the topic. This page traces programs line by line, which is where most marks in this section are won or lost. Recall: [assembly language revision notes](/resources/cambridge-a-level-computer-science-9618-assembly-language-revision-notes/) · Questions: [assembly language practice set](/resources/cambridge-a-level-computer-science-9618-assembly-language-practice/).

## Assembly language and machine code

**Machine code** is the binary the processor executes directly. Each instruction has an **opcode** (the operation) and usually an **operand** (a value or an address).

**Assembly language** is a low-level language in which each machine code instruction is written as a **mnemonic** such as LDD or ADD, with operands written in denary, binary, hexadecimal or as **symbolic addresses** (labels). In general **one assembly instruction translates to one machine code instruction**, so the programmer controls exactly what the processor does. An **assembler** translates assembly language into machine code.

Notation from the syllabus instruction set: # means a denary number (#123), B a binary number (B01001010) and & a hexadecimal number (&4A). An operand with none of these is an address.

## Instruction groups

| Group | Instructions from the syllabus set | Purpose |
|---|---|---|
| Data movement | LDM, LDD, LDI, LDX, LDR, MOV, STO | Copy values between memory and registers |
| Input and output | IN, OUT | Read a character's ASCII value into ACC; output the character whose ASCII value is in ACC |
| Arithmetic | ADD, SUB, INC, DEC | Change the value in ACC or IX |
| Unconditional | JMP | Always jump to the given address |
| Conditional | JPE, JPN | Jump only if the last compare was True (JPE) or False (JPN) |
| Compare | CMP, CMI | Compare ACC with a value or the contents of an address |
| Ending | END | Return control to the operating system |

## Addressing modes

The addressing mode tells the processor how to use the operand.

**Worked example 1.** Memory and the Index Register hold:

| Address | Contents |
|---|---|
| 200 | 350 |
| 201 | 12 |
| 202 | 47 |
| 350 | 99 |

IX = 2.

| Instruction | Mode | How the value is found | ACC after |
|---|---|---|---|
| LDM #200 | Immediate | The operand **is** the value | 200 |
| LDD 200 | Direct | The operand is the address of the value | 350 |
| LDI 200 | Indirect | The operand is the address of a location that holds the address of the value: 200 → 350 → 99 | 99 |
| LDX 200 | Indexed | Address = operand + IX = 200 + 2 = 202 | 47 |

**Relative addressing**: the operand is an offset that is added to the address of the current instruction (or to a base address) to give the address used. Because no absolute address is written into the code, a program using relative addresses can be loaded and run anywhere in memory.

**Why the modes exist.** Immediate is used for constants. Direct is used for single variables. Indirect allows an address to be calculated or changed while the program runs, as with a pointer. Indexed lets one instruction step through consecutive locations, such as an array, by changing IX in a loop.

## The two-pass assembler

Programs use labels for jump targets and data. A label can be used before the line that defines it (a **forward reference**), so the assembler cannot know every address the first time it reads the program. It therefore reads the program twice.

**Pass 1**

- Read each line; remove comments and unneeded spaces.
- Keep a count of the address of each line.
- When a label is defined, add it and its address to the **symbol table**.
- When a label is used before it is defined, add it to the symbol table and fill in the address once the definition is reached.

**Pass 2**

- Read each line again.
- Replace each mnemonic with its binary opcode, using the opcode table.
- Replace each symbolic address with its absolute address from the symbol table.
- Produce the machine code (object code) and report any errors, such as a label that was never defined.

**Worked example 2.** A program that multiplies NUM by COUNT using repeated addition:

```
100  START: LDD TOTAL
101         ADD NUM
102         STO TOTAL
103         LDD COUNT
104         DEC ACC
105         STO COUNT
106         CMP #0
107         JPN START
108         END
109  NUM:   5
110  TOTAL: 0
111  COUNT: 3
```

Symbol table after pass 1:

| Label | Address |
|---|---|
| START | 100 |
| TOTAL | 110 |
| NUM | 109 |
| COUNT | 111 |

TOTAL, NUM and COUNT are used on lines 100 to 103 but defined only at 109 to 111: these are forward references, which is why a single pass would fail. In pass 2, LDD TOTAL becomes the opcode for LDD with operand 110, and so on.

## Tracing a program

A trace table has a column for the ACC, for any other register used (such as IX) and for each memory location that changes. Write a new value only when it changes, one instruction at a time.

**Worked example 3.** Trace the program in worked example 2.

| Instruction | ACC | NUM (109) | TOTAL (110) | COUNT (111) |
|---|---|---|---|---|
| Start | | 5 | 0 | 3 |
| 100 LDD TOTAL | 0 | | | |
| 101 ADD NUM | 5 | | | |
| 102 STO TOTAL | | | 5 | |
| 103 LDD COUNT | 3 | | | |
| 104 DEC ACC | 2 | | | |
| 105 STO COUNT | | | | 2 |
| 106 CMP #0 then 107 JPN START | (2 ≠ 0, so False: jump) | | | |
| 100 LDD TOTAL | 5 | | | |
| 101 ADD NUM | 10 | | | |
| 102 STO TOTAL | | | 10 | |
| 103 to 105 | 2, 1 | | | 1 |
| 106, 107 | (1 ≠ 0: jump) | | | |
| 100 LDD TOTAL | 10 | | | |
| 101 ADD NUM | 15 | | | |
| 102 STO TOTAL | | | 15 | |
| 103 to 105 | 1, 0 | | | 0 |
| 106, 107 | (0 = 0, so True: no jump) | | | |
| 108 END | | | | |

TOTAL finishes as 15 = 5 × 3. The loop runs three times because COUNT starts at 3 and the program stops when it reaches 0.

**Tracing tips**

- STO changes memory, not the ACC.
- CMP changes neither the ACC nor memory; it sets the result used by the next JPE or JPN.
- JPN jumps when the comparison was **False**; JPE jumps when it was **True**.
- INC IX and DEC IX change the Index Register, not the ACC.
- For LDX, work out operand + IX before reading memory.

## Input and output

IN waits for a key press and stores that character's ASCII value in the ACC; OUT displays the character whose ASCII value is in the ACC. Given that the ASCII value of "A" is 65, this fragment outputs AB:

```
LDM #65
OUT
INC ACC
OUT
END
```

## Common mistakes

- Treating LDM #200 and LDD 200 as the same: the first loads 200; the second loads the contents of address 200.
- Following only one step of indirect addressing.
- Reversing JPE and JPN.
- Changing the ACC on a STO or CMP line in a trace.
- Forgetting to add IX in indexed addressing, or adding it to the value instead of the address.
- Describing pass 1 and pass 2 the other way round.

## Exam technique

- **Trace**: one row per instruction executed, a column per register and changed location, values written only when they change.
- **Describe the two-pass process**: pass 1 builds the symbol table; pass 2 uses it to produce machine code.
- **Explain an addressing mode**: say what the operand represents and give the value loaded for a given memory map.
- **Complete a program**: check the end condition by tracing the last loop before you write the final answer.

Next: condense the instruction set and modes with the [assembly language revision notes](/resources/cambridge-a-level-computer-science-9618-assembly-language-revision-notes/), then trace programs in the [assembly language practice questions](/resources/cambridge-a-level-computer-science-9618-assembly-language-practice/). The bitwise instructions AND, OR, XOR, LSL and LSR belong to the [bit manipulation study guide](/resources/cambridge-a-level-computer-science-9618-bit-manipulation/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 4.2 Assembly Language, including the example instruction set. Published by Cambridge International.
