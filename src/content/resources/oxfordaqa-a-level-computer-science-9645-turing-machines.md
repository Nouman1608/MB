---
title: "OxfordAQA A-Level Computer Science (9645): Turing machines"
seoTitle: "OxfordAQA 9645 Turing Machines Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "turing-machines-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.13.3 in depth: Turing machine parts, transition functions and diagrams, hand-tracing four machines, and the Universal Turing machine."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.13.3 Turing machines** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.13 Theory of computation. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to know that a Turing machine can be viewed as a computer with a single fixed program, to represent transition rules as a **transition function** and as a **state transition diagram**, to hand-trace simple Turing machines, to understand the equivalence of the two representations, and to explain the importance of Turing machines and the **Universal Turing machine (UTM)**.

The topic-level [theory of computation study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) covers all of topic 3.13 in one pass. This page gives Turing machines their own space, with four machines traced step by step. Afterwards use the [Turing machines revision notes](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-revision-notes/) and the [Turing machines practice questions](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-practice/).

## The parts of a Turing machine

A Turing machine can be viewed as a computer with **one fixed program**. The program is expressed using:

- a finite set of **states**, shown in a state transition diagram;
- a finite **alphabet** of symbols;
- an **infinite tape** divided into marked-off squares;
- a sensing **read-write head** that can travel along the tape, **one square at a time**.

One state is the **start state**. States with **no outgoing transitions** are **halting states**: when the machine enters one, it stops. In the exam, machines have one tape that is infinite in one direction, and there is no distinction between the input alphabet and the tape alphabet. Squares not holding data contain the **blank** symbol, written □ here.

## What one step does

On each step the machine looks at the current state and the symbol under the head. A rule then tells it three things:

1. which symbol to **write** on the current square (it may be the same symbol);
2. which way to **move** the head, left (L) or right (R);
3. which state to enter **next**.

## Two ways to write the rules

### Transition function

Each rule is written δ(current state, symbol read) = (new state, symbol written, move). For example

```
δ(S0, 1) = (S0, 1, R)
```

means: in state S0 reading 1, write 1, move right and stay in S0.

### State transition diagram

The same rule is an arc from S0 to S0 labelled `1 / 1, R`, read as "read 1 / write 1, move R". Each rule is exactly one arc and each arc is exactly one rule. This is the **equivalence** between the two forms: you can convert either into the other without losing anything. If a state and symbol have no rule, the machine has nowhere to go; the questions in this specification use machines in which that only happens in halting states.

## Worked example 1: unary increment

Numbers are written as a row of 1s (so 3 is `111`). The head starts on the leftmost 1 in state S0. This machine adds one to the number.

```
δ(S0, 1) = (S0, 1, R)
δ(S0, □) = (SH, 1, R)
```

| Step | State | Position | Read | Write | Move | New state |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | 1 | 1 | R | S0 |
| 2 | S0 | 1 | 1 | 1 | R | S0 |
| 3 | S0 | 2 | 1 | 1 | R | S0 |
| 4 | S0 | 3 | □ | 1 | R | SH |

The final tape is `1111`: 3 + 1 = 4. SH has no outgoing rules, so the machine halts after 4 steps.

## Worked example 2: flipping bits

This machine changes every 0 to 1 and every 1 to 0 and halts at the first blank.

```
δ(S0, 0) = (S0, 1, R)
δ(S0, 1) = (S0, 0, R)
δ(S0, □) = (SH, □, R)
```

Starting on the leftmost symbol of `1011`:

| Step | State | Position | Read | Write | Move | New state |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | 1 | 0 | R | S0 |
| 2 | S0 | 1 | 0 | 1 | R | S0 |
| 3 | S0 | 2 | 1 | 0 | R | S0 |
| 4 | S0 | 3 | 1 | 0 | R | S0 |
| 5 | S0 | 4 | □ | □ | R | SH |

The final tape is `0100`, the bitwise complement of `1011`. The machine takes one step per symbol plus one for the blank.

## Worked example 3: binary increment

This machine adds 1 to a binary number. The number is written with a leading 0 so that there is room for a carry, and the head starts on the leftmost symbol. State S0 runs right to the end of the number; state S1 then works leftwards, turning 1s to 0s until it finds a 0 to turn into 1.

```
δ(S0, 0) = (S0, 0, R)     δ(S1, 1) = (S1, 0, L)
δ(S0, 1) = (S0, 1, R)     δ(S1, 0) = (SH, 1, L)
δ(S0, □) = (S1, □, L)
```

Trace on `01011` (denary 11):

| Step | State | Position | Read | Write | Move | New state |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | 0 | 0 | R | S0 |
| 2 | S0 | 1 | 1 | 1 | R | S0 |
| 3 | S0 | 2 | 0 | 0 | R | S0 |
| 4 | S0 | 3 | 1 | 1 | R | S0 |
| 5 | S0 | 4 | 1 | 1 | R | S0 |
| 6 | S0 | 5 | □ | □ | L | S1 |
| 7 | S1 | 4 | 1 | 0 | L | S1 |
| 8 | S1 | 3 | 1 | 0 | L | S1 |
| 9 | S1 | 2 | 0 | 1 | L | SH |

The final tape is `01100`, denary 12. Run on `0111` it takes 9 steps and gives `1000`, because the carry ripples through every 1 into the leading 0. The head sweeps right, then back left, so the number of steps grows with the length of the number.

## Worked example 4: unary addition

The input is two unary numbers separated by `+`, for example `11+111`. The idea is to turn the `+` into a 1 and then delete one 1 from the end.

```
δ(S0, 1) = (S0, 1, R)
δ(S0, +) = (S1, 1, R)
δ(S1, 1) = (S1, 1, R)
δ(S1, □) = (S2, □, L)
δ(S2, 1) = (SH, □, L)
```

| Step | State | Position | Read | Write | Move | New state |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | 1 | 1 | R | S0 |
| 2 | S0 | 1 | 1 | 1 | R | S0 |
| 3 | S0 | 2 | + | 1 | R | S1 |
| 4 | S1 | 3 | 1 | 1 | R | S1 |
| 5 | S1 | 4 | 1 | 1 | R | S1 |
| 6 | S1 | 5 | 1 | 1 | R | S1 |
| 7 | S1 | 6 | □ | □ | L | S2 |
| 8 | S2 | 5 | 1 | □ | L | SH |

After step 3 the tape is `111111` (six 1s); step 8 erases the last 1, leaving `11111`: 2 + 3 = 5.

## A method for hand-tracing

1. Write the rules out, or have the diagram in front of you.
2. Draw the tape with a pointer under the starting square, and note the starting state.
3. For each step, record state, position, symbol read, symbol written, move and new state.
4. Update the tape and move the pointer **after** writing.
5. Stop when the machine enters a halting state, and write down the final tape.

## Why Turing machines matter

A Turing machine is a **general, formal model of computation**. Anything that can be computed by an algorithm can be computed by a Turing machine, so Turing machines give a **definition of what is computable**. If a problem could not be solved by any Turing machine, no computer program could solve it.

### The Universal Turing machine

Each machine above has a single fixed program. The **Universal Turing machine (UTM)** is a Turing machine that can **simulate the behaviour of any other Turing machine**. A description of the machine to simulate, together with that machine's input, is stored on the UTM's tape. The UTM reads the description and does what the described machine would do. This is the idea behind a modern general-purpose computer: the program is data held in memory, and one machine can run any program.

## Exam technique

- **Trace in a table**, one row per step, so you never lose track of the position.
- **Write after reading**, then move, then change state.
- **For a diagram question,** label each arc as read / write, move.
- **For importance,** give two points: a formal model of computation, and a definition of what is computable. For the UTM, say it simulates any other Turing machine with the description and input on its tape.

## Common mistakes

- Moving the head before writing.
- Writing the state and symbol the wrong way round in δ(state, symbol).
- Forgetting that blank squares can be read, written and moved over.
- Stopping before the machine enters a state with no outgoing transitions.
- Saying the UTM has a different program for each machine; it has one program and reads the description from its tape.

## Next steps

- [Turing machines revision notes](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-revision-notes/)
- [Turing machines practice questions](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-practice/)
- [Classification of algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.3 Turing machines.
