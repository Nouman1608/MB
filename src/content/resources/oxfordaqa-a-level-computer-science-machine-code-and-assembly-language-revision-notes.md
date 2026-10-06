---
title: "OxfordAQA A-Level Computer Science: Machine code and assembly language (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Assembly Language Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for OxfordAQA A-level Computer Science topic 8: opcodes, addressing modes, the assembly instruction set and loops."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

Fuller explanations, and longer worked examples, sit in the [study guide](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language/) first. These notes condense topic 8, Machine code and assembly language (sections 3.8.1 and 3.8.2), of Version 1.1 of OxfordAQA's International AS and A-level Computer Science (9645) specification, which applies to International AS exams in May/June 2025 and later and International A-level exams in May/June 2026 and later. Everything here is International AS content, assessed in the written Unit 2 paper and carried into the full International A-level.

Then test yourself with the [practice set](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-practice/). Use the [9645 hub page](/boards/oxfordaqa/a-level/computer-science/) for other topics, tick outcomes off on the [checklist to print](/checklists/oxfordaqa/a-level/computer-science/), and find weak spots with a [free diagnostic](/diagnostics/). For assemblers and low-level versus high-level languages (section 3.6.3), see the [topic 6 revision notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/).

## 3.8.1 Key definitions

- **Processor instruction set** -- all the instructions one processor can carry out. It is **processor specific**, so machine code for one processor type is not generally usable on another.
- **Opcode** -- the part of an instruction that says which operation to perform.
- **Addressing mode** -- says how to interpret the operand.
- **Operand** -- the data the instruction works on: a **value**, a **memory address** or a **register**. An instruction can have one or more.
- **Machine code** -- instructions expressed in **binary**.
- **Assembly language** -- the same instructions expressed as **mnemonics** (`LDR`, `CMP`, `BNE` ...).
- **Instruction format** -- how the bits of an instruction are split up. It may depend on the type of instruction: `HALT` has no operand, `B label` has one, `SUB Rd, Rn, <operand2>` has three.

You are not required to learn the format of any particular real instruction set. You must be able to work with a format a question gives you.

**Method: decoding a given format**

1. Split the bit pattern into fields, left to right, using the widths given.
2. Convert each field to denary.
3. Number of possible opcodes = 2^(opcode bits); largest unsigned operand = 2^(operand bits) − 1.
4. Use the mode field to say whether the operand is a value, an address or a register.

Small reminder: a 7-bit opcode field allows 2⁷ = 128 different opcodes.

## 3.8.1 Addressing modes

| Mode | The operand is ... | Example | Value used |
|---|---|---|---|
| Immediate | the value itself | `MOV R0, #12` | 12 |
| Direct | the address (memory location or register number) holding the value | `LDR R0, 12` or `ADD R0, R0, R7` | contents of location 12; contents of R7 |
| Indirect | a register holding a main memory address | `LDR R0, [R4]` | contents of the location whose address is in R4 |

Small reminder: if R4 holds 70 and location 70 holds 5, `LDR R0, [R4]` puts **5** in R0. `MOV R0, R4` would put 70 in R0.

## 3.8.2 Instruction set summary

The OxfordAQA set is based on ARM. A copy is included in any exam paper with an assembly language question, according to the specification.

| Group | Mnemonics | Remember |
|---|---|---|
| Memory | `LDR`, `STR` | Load = memory to register; store = register to memory |
| Arithmetic | `ADD`, `SUB` | Result goes in the **first** register |
| Copy | `MOV` | Copies operand2 into Rd |
| Compare | `CMP Rn, <operand2>` | Sets up the next conditional branch |
| Branch | `B`, `BEQ`, `BNE`, `BGT`, `BGE`, `BLT`, `BLE` | Condition reads "Rn ? operand2" from the last `CMP` |
| Logic | `AND`, `ORR`, `EOR`, `MVN` | `ORR` is OR; `EOR` is XOR; `MVN` is NOT |
| Shift | `LSL`, `LSR` | Logical: 0s come in, bits falling off are lost |
| Stop | `HALT` | Ends execution |

- operand2 is `#n` (a decimal value) or `Rm` (the value in register m).
- Registers R0 to R12 are available to the programmer.
- A label is an identifier then a colon: `top:`. The branch names it without the colon: `BNE top`.

## Must-know distinctions

- `#25` versus `25`: the value 25 versus the contents of location 25.
- `R3` versus `[R3]`: the value in R3 versus the contents of the location R3 points at.
- `MOV` versus `LDR`: `MOV` takes an immediate value or register; `LDR` reads main memory.
- `B` versus `B<condition>`: always jump versus jump only if the last comparison met the condition.
- `EOR` versus `ORR`: 1 OR 1 gives 1, but 1 XOR 1 gives 0.
- `MVN` versus `EOR` with all 1s: both invert every bit of a value of that width.
- Logical shift left versus multiply: equal only while no 1 bits are lost off the top.

## Bitwise and shift patterns

| Task | Instruction pattern | Why it works |
|---|---|---|
| Clear chosen bits | `AND` with 0s in those positions | x AND 0 = 0, x AND 1 = x |
| Set chosen bits | `ORR` with 1s in those positions | x OR 1 = 1 |
| Toggle chosen bits | `EOR` with 1s in those positions | x XOR 1 = NOT x |
| Multiply by 2ⁿ | `LSL Rd, Rn, #n` | Each shift left doubles |
| Divide by 2ⁿ (whole part) | `LSR Rd, Rn, #n` | Each shift right halves, remainder lost |

Small reminder: 13 = 00001101. `LSL` by 2 gives 00110100 = 52. `LSR` 52 by 2 gives back 13.

## Method in steps: pseudocode to assembly

**Assignment** such as `x ← x + y` (x at 33, y at 34):

```
LDR R0, 33
LDR R1, 34
ADD R0, R0, R1
STR R0, 33
```

If x is 16 and y is 9, location 33 ends with 25.

**IF ... ELSE**

1. `LDR` the values; `CMP` them.
2. Branch to the THEN label on the condition, or to the ELSE label on the opposite condition.
3. Write the block that falls through, then `B end` to jump past the other block.
4. Write the other block after its label, then `end:`.

**WHILE loop**

1. `top:` label, then `CMP` and a conditional branch **out** of the loop on the opposite condition.
2. Loop body, including the update of the counter or pointer.
3. `B top`, then the label for the code after the loop.

Small reminder: `n ← 3`, then `WHILE n < 100` double n.

```
      MOV R0, #3
top:  CMP R0, #100
      BGE out           ; opposite of "n < 100" leaves the loop
      LSL R0, R0, #1    ; n ← n * 2
      B top
out:  HALT
```

R0 runs 3, 6, 12, 24, 48, 96, 192. The test fails at 192, so the loop ends with R0 = 192.

**Assembly back to pseudocode**: forward conditional branch = IF; backward branch = loop; give each register a meaningful variable name; turn `LDR`/`STR` with fixed addresses into named variables.

**Trace tables**: one column per register or memory location that changes, plus a column for "branch taken?". Write a new row each time something changes. Check the loop's exit test on the final pass.

## Quick self-test

1. Name the three parts an instruction consists of.
2. State the addressing mode used by operand2 in `SUB R2, R2, #12`.
3. R4 holds 70 and memory location 70 holds 5. What does `LDR R0, [R4]` place in R0?
4. Which OxfordAQA mnemonic performs a bitwise NOT?
5. R1 holds 00110101 (53) in an 8-bit register. Give R2 in binary and denary after `LSL R2, R1, #2`.
6. Give the denary result of `AND R3, R1, #7` for the same R1.
7. Which branch mnemonic means "branch if not equal"?
8. R1 holds 10. After `CMP R1, #10`, which of `BGT`, `BGE` and `BLT` would branch?
9. How many different opcodes can a 7-bit opcode field represent?
10. R5 holds 01011100 (92) in an 8-bit register. Give the result of `EOR R6, R5, #255` in binary and denary.
11. Why will a machine-code program written for one processor type not usually run on another?
12. Which registers may the programmer use in the OxfordAQA instruction set?

### Answers

1. Opcode, addressing mode, operand(s).
2. Immediate.
3. 5.
4. `MVN`.
5. 11010100 = 212 (no 1 bits were lost).
6. 00110101 AND 00000111 = 00000101 = 5.
7. `BNE`.
8. Only `BGE` (10 is not greater than 10 and not less than 10).
9. 2⁷ = 128.
10. 10100011 = 163.
11. Instruction sets are processor specific, so the binary patterns mean different things (or nothing) on another processor.
12. R0 to R12.

## Where marks are usually lost

- Writing an immediate value without `#`, which changes it to a memory address.
- Using `MOV` to read a value from main memory; that needs `LDR`.
- Getting the order of operands in `SUB` wrong: `SUB Rd, Rn, <operand2>` gives Rn − operand2.
- Placing the conditional branch before the `CMP`, or comparing the wrong pair of registers.
- Choosing the wrong condition when branching past a block (needing the opposite, such as `BLE` to skip when "greater than" is false).
- Missing the `B` that jumps over the ELSE block, so both blocks run.
- Updating the loop pointer after the `CMP` instead of before it, which gives one pass too few or too many.
- Ignoring the register size in shift questions, so lost bits are still counted.
- Saying indirect addressing "uses an address" without saying the address is **in a register**.
- Writing pseudocode that simply renames each instruction instead of showing the IF or loop structure.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.8 Machine code and assembly language, and 6 Appendix: Standard OxfordAQA assembly language instruction set.
