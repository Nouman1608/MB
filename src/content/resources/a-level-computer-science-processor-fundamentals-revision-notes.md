---
title: "A Level Computer Science: Processor Fundamentals — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
description: "Condensed recall notes on CPU architecture, assembly language tracing, and bit manipulation for Cambridge AS & A Level Computer Science (9618), Topic 4."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Processor Fundamentals study guide](/resources/a-level-computer-science-processor-fundamentals/).

## 4.1 CPU architecture — the fetch-execute cycle

Know each register and **what changes at each stage**, not a vague
summary:

| Register/bus | Role |
|---|---|
| PC | Next instruction's address |
| MAR | Address currently being accessed |
| MDR | Data/instruction transferred |
| CIR | Instruction being decoded |
| ACC | Result of ALU operations |
| Address/data bus | Carries the address/data between components |

**Practise the fetch-execute cycle as a diagram from memory** —
completing a partially given cycle is a common exam format.

## 4.2 Assembly language — tracing accurately

Grading depends on tracing a program **accurately**, working through
each instruction in sequence and tracking register/memory contents
exactly. **One mis-tracked value early cascades into every following
line being wrong** — deliberate, careful hand-tracing beats reading
about what instructions do.

| Addressing mode | Meaning |
|---|---|
| Immediate | Instruction contains the value itself |
| Direct | Instruction contains the address of the value |
| Indirect / Indexed | (further variations — fix the immediate/direct distinction first) |

**Exam questions often test near-identical instructions differing
only in addressing mode** — fix the immediate-vs-direct distinction
early since it's the most frequently confused pair.

## 4.3 Bit manipulation — logical operations bit by bit

| Operation | Use |
|---|---|
| AND (with 0s) | Clear specific bits |
| OR (with 1s) | Set specific bits |
| XOR (with 1s in target positions) | Toggle specific bits |
| NOT | Invert all bits |

**Explain *why* a mask produces its result, not just the result
itself** — this is what distinguishes secure understanding from a
memorised procedure that breaks on an unfamiliar example.

## Worked example: masking a byte

Byte = `10110110`. Clear the two most significant bits, leave the
rest unchanged.

```
Mask:     00111111
Operation: AND
Reasoning: Anything ANDed with 0 becomes 0 (clears the top 2 bits);
           anything ANDed with 1 keeps its original value
           (preserves the remaining 6 bits)
Result:    00110110
```

The same reasoning applies in reverse: **OR** with a mask of 1s to
set bits, **XOR** with 1s in target positions to toggle bits.
Practise several different masks on paper until the pattern is
automatic — more reliable than memorising AND/OR/XOR/NOT truth
tables in isolation.

## Worked example: tracing a short assembly program

A short program loads a value, adds a second value to it, and stores
the result -- a typical trace question format.

```
Instruction        Register/memory effect
LDM #5              ACC <- 5 (immediate addressing: literal value 5)
ADD #3              ACC <- ACC + 3 = 8
STO 200             Memory address 200 <- 8 (value in ACC copied out)
```

Trace this kind of sequence line by line on paper, writing down the
new value of every affected register or memory location after each
instruction -- never skip a line, since exam mark schemes typically
award marks for each correctly tracked intermediate value, not just
the final result.

## Exam traps

- Describing the fetch-execute cycle vaguely ("the CPU fetches an
instruction and runs it") instead of naming which register changes
at each specific stage.
- Confusing immediate addressing (value itself) with direct
addressing (address of the value).
- Mis-tracking one register value early in an assembly trace,
cascading errors through the rest of the trace.
- Stating a bit-manipulation result without explaining why the
chosen mask and operation produce it.
- Treating Processor Fundamentals as a topic to learn once, when its
concepts (registers, fetch-execute, bit-level manipulation) recur
throughout later topics on how software executes on hardware.

## Where this topic sits in the syllabus sequence

Processor Fundamentals follows Information Representation,
Communication and Hardware, and is a direct prerequisite for System
Software (Topic 5), which explains how an operating system manages
the processor and memory this topic introduces. Assembly language
also forms a conceptual bridge to later programming topics, since it
exposes what a high-level programming construct ultimately becomes at
the level of individual machine instructions -- understanding this
link makes later topics on compilers and program execution
significantly easier to follow.

## Worked example: a conditional branch in a trace

A trace question with a conditional jump tests whether tracing is
genuinely understood rather than followed mechanically.

```
Instruction        Register/memory effect
LDM #0              ACC <- 0
LDD 300             ACC <- value at address 300 (suppose this is 5)
CMP #5              Compare ACC with 5 -> equal, so condition is TRUE
JPE 500             Since the comparison was equal, jump to address 500
                    (if it had NOT been equal, execution would simply
                    continue with the next instruction in sequence)
```

The key habit for conditional instructions is recording **which
branch was actually taken and why**, based on the specific values in
that trace — not assuming the same branch is always taken, since a
different starting value at address 300 would change the outcome
entirely.

## Two's complement: representing negative numbers at register level

Processor Fundamentals connects to Information Representation through
how the ACC and registers actually store negative results. In an
8-bit register, a value is negated by inverting all bits and adding
1:

```
Represent -5 in 8-bit two's complement:
   5        = 00000101
   invert   = 11111010
   add 1    = 11111011   <- this is -5
```

Recognising that arithmetic instructions like ADD and SUB operate on
these two's complement bit patterns directly, rather than on a
separate "negative number" representation, is what connects this
sub-topic back to binary representation taught earlier in the course.

## Self-test

1. Which register holds the address of the next instruction to be
fetched?
2. What's the difference between immediate and direct addressing?
3. Why does one mis-tracked register value in an assembly trace
matter so much?
4. What mask and operation would you use to set (not clear) specific
bits in a byte?
5. Why does this topic matter beyond its own exam questions?

**Answers:** 1. The program counter (PC). 2. In immediate addressing
the instruction contains the value itself; in direct addressing the
instruction contains the address where the value is stored.
3. Because tracing works sequentially — an error in one register's
tracked value carries forward and makes every subsequent line of the
trace incorrect. 4. OR the byte with a mask containing 1s in exactly
the positions to be set (and 0s elsewhere, to leave other bits
unchanged). 5. Its concepts (registers, the fetch-execute cycle,
bit-level manipulation) recur whenever later topics discuss how
software actually executes on hardware, including Topic 15 (Hardware
and Virtual Machines) at full A Level.
