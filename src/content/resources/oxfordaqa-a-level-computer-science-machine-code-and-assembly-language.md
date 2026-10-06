---
title: "OxfordAQA A-Level Computer Science: Machine code and assembly language (9645)"
seoTitle: "OxfordAQA A-Level CS Machine Code and Assembly Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Machine code and assembly language"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 8
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
description: "Study guide to OxfordAQA A-level Computer Science topic 8: instruction format, addressing modes and writing and tracing assembly programs."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches topic 8, Machine code and assembly language, from Version 1.1 of OxfordAQA's International AS and A-level Computer Science (9645) specification (it applies to International AS exams in May/June 2025 and later, and to International A-level exams in May/June 2026 and later). The sections taught are sections 3.8.1 and 3.8.2. The whole topic is International AS content. The assessment overview puts it in the written paper for Unit 2 (Concepts and principles of computer science), which means it also counts towards the full International A-level.

Use it alongside the [revision notes](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-revision-notes/) with its [practice set](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-practice/). Every topic is listed on the [9645 hub page](/boards/oxfordaqa/a-level/computer-science/), and each outcome can be ticked off on the [checklist to print](/checklists/oxfordaqa/a-level/computer-science/). Not sure which areas are weak? Try a [free diagnostic](/diagnostics/) before reading on.

## Outcomes in this topic

| Spec ref | You need to |
|---|---|
| 3.8.1 | Explain "processor instruction set" and why a set is processor specific |
| 3.8.1 | Know an instruction is made of an opcode, an addressing mode and one or more operands (value, memory address or register) |
| 3.8.1 | Know that the format of an instruction can depend on the type of instruction |
| 3.8.1 | Understand and apply immediate, direct and indirect addressing |
| 3.8.1 | Know machine code is written in binary and assembly language in mnemonics |
| 3.8.2 | Apply load, add, subtract, store, conditional and unconditional branching, compare, AND, OR, NOT, XOR, logical shift left and right, and halt |
| 3.8.2 | Write, trace and reason about assembly programs using all three addressing modes; convert pseudocode to assembly and back |

How machine code and assembly compare with high-level languages, and what an assembler does, belong to section 3.6.3. They are taught in the [guide to topic 6](/resources/oxfordaqa-a-level-computer-science-computer-systems/), which also shows a first three-line assembly program.

## 3.8.1 Instruction sets and instruction format

A **processor instruction set** is the complete set of instructions that a particular processor can decode and execute. Each processor family is designed around its own set, with its own operations and its own binary patterns. So the set is **processor specific**: a machine-code program built for one processor type will not, in general, run on a different type.

### Parts of an instruction

Every instruction is made from:

- an **opcode** -- which operation to carry out (load, add, branch and so on);
- an **addressing mode** -- how the operand should be interpreted;
- one or more **operands** -- a value, a memory address or a register.

In **machine code** all of this is a binary pattern held in memory. In **assembly language** the same instruction is written with **mnemonics**, such as `ADD` or `LDR`, and readable operands such as `R3` or `#20`.

### Format depends on the type of instruction

Instructions do not all have the same shape. `ADD R1, R2, #6` needs three operands. `B loop` needs only a destination. `HALT` needs no operand at all. So the way the bits are split up can change from one type of instruction to another.

The specification gives one real case for context: in a 32-bit ARM data processing instruction, 12 bits hold the opcode (4 bits), a 1-bit addressing mode for operand2 and other information such as the execution condition; the other 20 bits hold up to three operands (two 4-bit register numbers and a 12-bit operand2). You are told that knowledge of the format of a particular instruction set is not required. What you need is the skill of reading a format you are given.

**Worked example: decoding a made-up format.** A processor uses 16-bit instructions: 5 bits of opcode, then 2 bits of addressing mode (00 immediate, 01 direct, 10 indirect), then a 9-bit operand.

1. Number of different opcodes: 2⁵ = **32**.
2. Largest unsigned operand: 2⁹ − 1 = **511**.
3. Decode `0101101000101101`. Split it 5 | 2 | 9: `01011` | `01` | `000101101`.
4. Opcode 01011 = 8 + 2 + 1 = **11**. Mode 01 = **direct**. Operand 000101101 = 32 + 8 + 4 + 1 = **45**.

So the instruction carries out operation 11 on the value **held at address 45**, not on 45 itself. Written in hexadecimal, in groups of four bits, the whole instruction is **5A2D**. The specification says number base conversions can appear inside assembly language questions, so practise moving between binary, denary and hex.

## 3.8.1 Addressing modes

The specification defines three modes.

| Mode | Meaning | OxfordAQA form |
|---|---|---|
| Immediate | The operand **is** the value to operate on | `#n`, for example `MOV R1, #40` |
| Direct | The operand is the **address** the value is fetched from: a main memory address or a register number | `LDR R2, 40` or `ADD R0, R0, R5` |
| Indirect | The operand is a **register holding an address** in main memory; the value is fetched from that address | `LDR R3, [R2]` |

Note the second row: when operand2 is a register such as `R5`, the instruction uses the value stored in register 5. The specification says "address" can mean a register number, so this counts as direct addressing.

**Worked example: three loads, three answers.** Memory location 40 holds 52 and location 52 holds 9.

```
MOV R1, #40      ; immediate: R1 gets 40 itself
LDR R2, 40       ; direct: R2 gets the contents of location 40
LDR R3, [R2]     ; indirect: R2 holds 52, so R3 gets the contents of 52
```

Results: R1 = **40**, R2 = **52**, R3 = **9**. The same number, 40, gave a different result in each mode. Indirect addressing is what lets one instruction work through a block of memory: change the register, and the same `LDR` reads a new location.

## 3.8.2 The OxfordAQA instruction set

Exam questions use the OxfordAQA assembly language instruction set, which is based on the ARM processor instruction set. The specification states that a copy will be included in any exam paper with an assembly language question, and it is printed in the specification's appendix. Know what each instruction does so you can use it quickly.

| Operation | Instruction | Effect |
|---|---|---|
| Load | `LDR Rd, <memory ref>` / `LDR Rd, [Rn]` | Copy a value from memory into Rd |
| Store | `STR Rd, <memory ref>` / `STR Rd, [Rn]` | Copy Rd into memory |
| Add, subtract | `ADD Rd, Rn, <operand2>` / `SUB Rd, Rn, <operand2>` | Rd = Rn + operand2 or Rn − operand2 |
| Move | `MOV Rd, <operand2>` | Copy operand2 into Rd |
| Compare | `CMP Rn, <operand2>` | Compare Rn with operand2 for the next conditional branch |
| Branch | `B label` | Always jump to label |
| Conditional branch | `BEQ`, `BNE`, `BGT`, `BGE`, `BLT`, `BLE` | Jump only if the last comparison met the condition |
| Bitwise | `AND`, `ORR`, `EOR`, `MVN` | AND, OR, XOR between Rn and operand2; NOT of operand2 |
| Shift | `LSL Rd, Rn, <operand2>` / `LSR ...` | Shift Rn left or right by operand2 bits |
| Halt | `HALT` | Stop the program |

Rules from the appendix: operand2 is either `#` followed by a decimal value or `Rm`, meaning the value in register m. General purpose registers are numbered 0 to 12. A label is an identifier followed by a colon. The appendix does not fix the format of `<memory ref>`; these pages write it as a decimal address such as `90`. Text after `;` is a comment added for you, not part of the instruction set. Pseudo-code here is language-neutral (`←` for assignment), since the specification does not define its own conventions.

## 3.8.2 Selection: compare and branch

A conditional branch always follows a `CMP`. The branch tests the **register** against **operand2**: after `CMP R0, R1`, `BGT over` jumps if R0 > R1.

**Worked example.** Speed is held at location 90, the limit at 91. Store the amount over the limit at 92, or 0 if the driver was within it.

```
IF speed > limit THEN
    excess ← speed - limit
ELSE
    excess ← 0
ENDIF
```

```
      LDR R0, 90        ; speed
      LDR R1, 91        ; limit
      CMP R0, R1
      BGT over          ; speed > limit: jump to the THEN part
      MOV R2, #0        ; ELSE part
      B done            ; skip the THEN part
over: SUB R2, R0, R1
done: STR R2, 92
      HALT
```

Trace with speed 68 and limit 50: 68 > 50, so the branch is taken and R2 = 68 − 50 = **18**. With speed 45, the branch is not taken, R2 = **0**, and `B done` jumps over the subtraction. Leaving out `B done` is the classic slip: the program would fall through into `over:` and overwrite the 0.

## 3.8.2 Iteration with indirect addressing

A loop needs a counter or pointer, a test and a branch back.

**Worked example.** Four values are stored in locations 80 to 83. Add them up and store the total in 84.

```
      MOV R0, #0        ; total
      MOV R1, #80       ; pointer to the first value
loop: LDR R2, [R1]      ; indirect: fetch the value R1 points at
      ADD R0, R0, R2
      ADD R1, R1, #1    ; move pointer on
      CMP R1, #84
      BLT loop          ; repeat while pointer < 84
      STR R0, 84
      HALT
```

Memory holds 12, 7, 30 and 5. Trace table, one row per pass:

| Pass | R1 at LDR | R2 | R0 after ADD | R1 after +1 | Branch? |
|---|---|---|---|---|---|
| 1 | 80 | 12 | 12 | 81 | yes |
| 2 | 81 | 7 | 19 | 82 | yes |
| 3 | 82 | 30 | 49 | 83 | yes |
| 4 | 83 | 5 | 54 | 84 | no |

Location 84 ends up holding **54**. Without indirect addressing you would need four separate `LDR` instructions with fixed addresses.

## 3.8.2 Bitwise operations and shifts

Logical operations work on each bit position separately. Shifts move every bit; the bits that fall off the end are lost and 0s come in. The appendix does not set a register size, so for these examples take registers as **8 bits**.

**Worked example.** R1 holds 10110110 (182).

| Instruction | Result in binary | Denary | Use |
|---|---|---|---|
| `AND R2, R1, #15` | 00000110 | 6 | Mask: keep the low 4 bits, clear the rest |
| `ORR R3, R1, #1` | 10110111 | 183 | Set bit 0 |
| `EOR R4, R1, #255` | 01001001 | 73 | Flip every bit |
| `MVN R5, R1` | 01001001 | 73 | NOT gives the same flip |
| `LSL R6, R1, #1` | 01101100 | 108 | Top 1 lost, so not 2 × 182 |
| `LSR R7, R1, #2` | 00101101 | 45 | 182 ÷ 4 = 45.5, fraction dropped |

For an unsigned value, a logical shift left by n multiplies by 2ⁿ as long as no 1 bits are pushed out. A logical shift right by n divides by 2ⁿ and discards the remainder. `#15` is 00001111 in binary, which is why it works as a mask for the lower half.

## Converting assembly back to pseudocode

Read the program in blocks. A `CMP` plus conditional branch that jumps **forward** is an IF. A branch that jumps **backward** to a label is a loop. Name each register by what it holds. For the summing program above:

```
total ← 0
FOR i ← 80 TO 83
    total ← total + memory[i]
ENDFOR
memory[84] ← total
```

## Common errors

- Writing `ADD R1, R1, 4`: the last operand must be `#4` or a register.
- Reading `LDR R2, 40` as "put 40 in R2"; that needs `MOV R2, #40`.
- Mixing up `[R2]` (the location R2 points at) with `R2` (the value in R2).
- Reversing a condition: to skip the THEN block when `a > b` is false, branch on `BLE`.
- Forgetting the unconditional `B` that jumps over the ELSE block.
- Forgetting that shifted-out bits are lost in a fixed-size register.
- Using registers above R12.

## Next steps

Check what you remember using the [revision notes](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-revision-notes/), then try the [practice set](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-practice/). The [topic 6 notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/) cover assemblers and low-level languages, and the [exam preparation page](/resources/oxfordaqa-a-level-computer-science-exam-preparation/) deals with exam technique.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.8 Machine code and assembly language, and 6 Appendix: Standard OxfordAQA assembly language instruction set.
