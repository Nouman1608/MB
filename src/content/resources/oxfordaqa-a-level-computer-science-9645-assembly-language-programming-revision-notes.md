---
title: "OxfordAQA A-Level Computer Science (9645): Assembly language programming -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Assembly Programming Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8 – Machine code and assembly language"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 8.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
    subtopic: "assembly-language-programming-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.8.2: instruction set summary, pseudocode patterns, loops, indirect addressing, bitwise operations and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.8.2 Assembly language programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.8 Machine code and assembly language). For longer programs and traces, see the [assembly language programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming/); then practise with the [assembly language practice questions](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-practice/).

## What the specification requires

- Understand and apply **load, add, subtract, store, branching (conditional and unconditional), compare, logical bitwise operators (AND, OR, NOT, XOR), logical shift right and left, and halt**.
- **Write, trace and reason about** programs using **immediate, direct and indirect** addressing.
- Questions may give a written requirement or a **pseudocode** algorithm.
- **Convert** pseudocode to assembly and assembly to pseudocode.
- Exam questions use the OxfordAQA instruction set (based on ARM). A copy is printed in the paper.

## Key terms

| Term | Meaning |
|---|---|
| Mnemonic | The name of an instruction, such as `LDR` |
| Label | An identifier followed by a colon that marks an instruction to branch to |
| Operand2 | `#n` (a decimal value) or `Rm` (the value in register m) |
| Branch | Change the instruction that runs next |
| Conditional branch | A branch that happens only if the last `CMP` met the condition |
| Bitwise | Applied to each bit position separately |
| Logical shift | Moves the bits along; vacated positions fill with 0 |
| Pointer | A register holding a memory address, used with `[Rn]` |

## The instruction set at a glance

| Group | Instructions |
|---|---|
| Memory | `LDR Rd, <ref>` / `LDR Rd, [Rn]`; `STR Rd, <ref>` / `STR Rd, [Rn]` |
| Arithmetic | `ADD Rd, Rn, op2`; `SUB Rd, Rn, op2`; `MOV Rd, op2` |
| Compare | `CMP Rn, op2` |
| Branch | `B label`; `BEQ BNE BGT BGE BLT BLE label` |
| Logic | `AND`, `ORR`, `EOR Rd, Rn, op2`; `MVN Rd, op2` |
| Shift | `LSL`, `LSR Rd, Rn, op2` |
| Stop | `HALT` |

Registers R0 to R12. The branch condition tests the **first** operand of `CMP` against the second: after `CMP R0, R1`, `BGT` branches if R0 > R1.

## Patterns

**Selection (skip the THEN part when the condition is false)**

```
      CMP R0, R1
      BLE skip       ; opposite of "R0 > R1"
      ...THEN part...
skip: ...
```

**IF with ELSE**

```
      CMP R0, R1
      BGT then
      ...ELSE part...
      B done
then: ...THEN part...
done: ...
```

**WHILE loop (test at the top)**

```
loop: CMP R1, #0
      BEQ done
      ...body...
      B loop
done: ...
```

**Array walk with a pointer**

```
      MOV R1, #120
loop: LDR R2, [R1]
      ...use R2...
      ADD R1, R1, #1
      CMP R1, #125
      BLT loop
```

## Worked reminder: loop trace

Product of 6 and 4 by repeated addition (R0 = 6, R1 = count 4, R2 = 0).

| Pass | R1 | R2 |
|---|---|---|
| 1 | 3 | 6 |
| 2 | 2 | 12 |
| 3 | 1 | 18 |
| 4 | 0 | 24 |

Then `CMP R1, #0` followed by `BEQ done` ends the loop and R2 = 24 is stored.

## Bitwise and shifts (8-bit registers assumed)

| Task | Instruction | Example with 182 (10110110) |
|---|---|---|
| Keep the low 4 bits | `AND Rd, Rn, #15` | 00000110 = 6 |
| Set bit 3 | `ORR Rd, Rn, #8` | 10111110 |
| Toggle bits | `EOR Rd, Rn, #255` | 01001001 |
| Invert all bits | `MVN Rd, Rn` | 01001001 |
| Divide by 2^n | `LSR Rd, Rn, #n` | `LSR #4` gives 00001011 = 11 |
| Multiply by 2^n | `LSL Rd, Rn, #n` | `LSL #3` gives 10110000 = 176 (bits lost) |

A mask with 1s keeps those bits under AND. Testing the lowest bit with `AND Rd, Rn, #1` shows odd (1) or even (0).

## Reading assembly into pseudocode

1. Name each register after the variable it holds.
2. Turn each `CMP` and branch pair into an IF or WHILE condition (remember that a branch out of a loop is the opposite of the loop condition).
3. Describe loops with WHILE.
4. Describe `LSR` by 1 as DIV 2 and `LSL` by 1 as multiply by 2.

## Pseudocode to assembly: translation table

| Pseudocode | Assembly idea |
|---|---|
| `x ← 5` | `MOV R0, #5` (or `LDR` from memory, then `STR` to save) |
| `x ← y + z` | `LDR` y and z, `ADD`, then `STR` |
| `x ← x + 1` | `ADD R0, R0, #1` |
| `IF x = y THEN` | `CMP R0, R1` then `BNE` past the THEN part |
| `IF x >= y THEN` | `CMP R0, R1` then `BLT` past the THEN part |
| `WHILE x > 0` | label, `CMP R0, #0`, `BLE` out of the loop, body, `B` back |
| `FOR i ← 1 TO 5` | counter in a register, `CMP` against the limit, `ADD` 1 each pass |
| `x ← x DIV 2` | `LSR R0, R0, #1` |
| `x ← x * 4` | `LSL R0, R0, #2` |
| `array[i]` | pointer register with `LDR R2, [R1]` |

Notice that the branch to skip a block uses the **opposite** of the condition in the IF.

## Worked reminder: IF with ELSE

Store the larger of the values at 100 and 101 into 102.

```
      LDR R0, 100
      LDR R1, 101
      CMP R0, R1
      BGE first
      STR R1, 102
      B end
first: STR R0, 102
end:  HALT
```

With 37 and 52 the branch is not taken and 52 is stored. With 80 and 45 the branch is taken and 80 is stored. With equal values the branch is taken and the common value is stored.

## Exam traps

- **Wrong condition.** `BGT` is strictly greater; `BGE` includes equal.
- **Missing `B`.** Without a branch past the ELSE part, execution falls through.
- **No update in the loop.** A counter or pointer that never changes makes an endless loop.
- **Immediate or direct.** `#25` is a value; `25` is a memory location.
- **Stale comparison.** A branch uses the last `CMP`, not an earlier one.
- **Forgot `STR`.** Results in registers are lost unless stored.
- **No `HALT`.** The program should end with `HALT`.

## Quick self-test

1. What does `LDR R2, [R4]` do?
2. What does `SUB R0, R1, #3` do?
3. Which instruction must come before `BNE`?
4. What is the difference between `BGT` and `BGE`?
5. What is the value in R1 after `MOV R0, #20` and `LSR R1, R0, #2`?
6. What is R2 after `MOV R0, #12`, `MOV R1, #10` and `AND R2, R0, R1`?
7. How do you test whether the number in R0 is odd?
8. Write the instruction that multiplies R0 by 8 into R1.
9. Why does a loop need a label?
10. What goes wrong if `B end` is missing between the THEN and ELSE parts of an IF?
11. What does `ADD R3, R3, #1` do?
12. What is the purpose of `HALT`?

### Answers

1. Loads into R2 the value stored at the memory address held in R4.
2. R0 = R1 − 3.
3. `CMP`.
4. `BGT` branches only if strictly greater; `BGE` branches if greater or equal.
5. 20 shifted right by 2 places is 5.
6. 12 is 1100, 10 is 1010, and AND gives 1000 = 8.
7. `AND R1, R0, #1`; if the result is 1 the number is odd.
8. `LSL R1, R0, #3`.
9. The branch back needs a place to jump to.
10. After the THEN part the program carries on into the ELSE part and overwrites the result.
11. Adds 1 to R3 (an increment).
12. It stops the program.

## Next steps

- [Assembly language programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming/)
- [Assembly language programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-practice/)
- [Classes, objects and instantiation study guide](/resources/oxfordaqa-a-level-computer-science-9645-classes-objects-instantiation/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.8.2 Assembly language programming. The Standard OxfordAQA assembly language instruction set is printed in section 6 of the specification.
