---
title: "OxfordAQA A-Level Computer Science (9645): Turing machines -- Revision Notes"
seoTitle: "OxfordAQA 9645 Turing Machines Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.13.3: Turing machine parts, transition functions and diagrams, hand-tracing, the UTM and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.13.3 Turing machines** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.13, examined in Unit 4). For fully traced machines, see the [Turing machines study guide](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines/), then practise with the [Turing machines practice questions](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-practice/).

## What the specification requires

- Know that a Turing machine is a computer with a **single fixed program**, made of a finite set of states, a finite alphabet, an infinite tape and a read-write head.
- Know the **start state** and **halting states** (no outgoing transitions).
- **Represent** rules as a transition function and as a state transition diagram.
- **Hand-trace** simple Turing machines.
- Understand the **equivalence** of the two representations.
- Explain the importance of Turing machines and the **Universal Turing machine (UTM)**.

Exam questions use one tape, infinite in one direction, with no distinction between the input alphabet and the tape alphabet.

## Key terms

| Term | Meaning |
|---|---|
| Tape | Infinite row of squares, each holding one symbol (□ is blank) |
| Read-write head | Senses the current square, writes a symbol and moves one square at a time |
| State | The machine's current condition; a finite set of them exists |
| Start state | Where the machine begins |
| Halting state | A state with no outgoing transitions; the machine stops there |
| Transition function | A rule δ(state, symbol) = (new state, symbol to write, move) |
| UTM | A Turing machine that can simulate any other Turing machine |

## Rules in two forms

| Transition function | Diagram arc | Meaning |
|---|---|---|
| δ(S0, 1) = (S0, 1, R) | S0 to S0 labelled `1 / 1, R` | read 1, write 1, move right, stay in S0 |
| δ(S0, □) = (SH, 1, R) | S0 to SH labelled `□ / 1, R` | read blank, write 1, move right, halt |
| δ(S1, 1) = (S1, 0, L) | S1 to S1 labelled `1 / 0, L` | read 1, write 0, move left, stay in S1 |

One rule is one arc. The two forms are **equivalent**.

## One step of a trace

1. Read the symbol under the head.
2. Find the rule for the current state and that symbol.
3. **Write** the new symbol.
4. **Move** the head one square.
5. Change to the **new state**.

## Worked reminder 1: unary increment

```
δ(S0, 1) = (S0, 1, R)
δ(S0, □) = (SH, 1, R)
```

Input `111` becomes `1111` in 4 steps. The machine passes over every 1, then writes a 1 on the first blank.

## Worked reminder 2: flipping bits

```
δ(S0, 0) = (S0, 1, R)
δ(S0, 1) = (S0, 0, R)
δ(S0, □) = (SH, □, R)
```

| Input | Output | Steps |
|---|---|---|
| `1011` | `0100` | 5 |
| `0110` | `1001` | 5 |
| `1` | `0` | 2 |

The number of steps is the number of symbols plus one for the blank.

## Worked reminder 3: binary increment

```
δ(S0, 0) = (S0, 0, R)     δ(S1, 1) = (S1, 0, L)
δ(S0, 1) = (S0, 1, R)     δ(S1, 0) = (SH, 1, L)
δ(S0, □) = (S1, □, L)
```

| Input | Output | Steps | Denary |
|---|---|---|---|
| `01011` | `01100` | 9 | 11 to 12 |
| `0111` | `1000` | 9 | 7 to 8 |
| `0101` | `0110` | 7 | 5 to 6 |

S0 runs right to the blank. S1 runs left, turning 1s into 0s until it finds a 0, which becomes 1. The leading 0 makes room for the carry.

## Worked reminder 4: unary addition

```
δ(S0, 1) = (S0, 1, R)      δ(S1, □) = (S2, □, L)
δ(S0, +) = (S1, 1, R)      δ(S2, 1) = (SH, □, L)
δ(S1, 1) = (S1, 1, R)
```

`11+111` becomes `11111` in 8 steps: the `+` becomes a 1, then the last 1 is erased.

## Why Turing machines matter

- They are a **general, formal model of computation**.
- They give a **definition of what is computable**: a problem is computable if some Turing machine can solve it.
- The **UTM** simulates any other Turing machine. The description of that machine and its input are stored on the UTM's tape.
- The UTM is the idea behind a general-purpose computer, where the program is data in memory.

## Exam traps

- **Order inside a step.** Write first, then move, then change state.
- **Argument order.** δ(state, symbol), not δ(symbol, state).
- **Halting.** The machine stops only in a state with no outgoing transition.
- **Blank squares.** They can be read, overwritten and moved over.
- **Position tracking.** Number the squares and update the position every row.
- **UTM wording.** It has one program; it reads another machine's description from its tape.
- **Final answer.** Give the final tape, not just the final state.

## Quick self-test

1. Name the four parts a Turing machine is expressed with.
2. What is a halting state?
3. Write the arc label for δ(S2, 0) = (S3, 1, L).
4. Write the transition function for an arc from S1 to S1 labelled `0 / 0, R`.
5. In which order do write, move and change state happen?
6. A machine runs the bit-flip rules on `0110`. What is the final tape?
7. How many steps does that take?
8. Trace the unary increment rules on `11`. What is the final tape?
9. What does the UTM store on its tape?
10. Give one reason Turing machines are important.
11. How many tapes do exam questions use?
12. What name is given to the symbol for an empty square in these notes?

### Answers

1. A finite set of states, a finite alphabet, an infinite tape, and a read-write head.
2. A state with no outgoing transitions; the machine stops when it enters one.
3. `0 / 1, L` on the arc from S2 to S3.
4. δ(S1, 0) = (S1, 0, R)
5. Write, then move, then change state.
6. `1001`
7. 5 steps (4 symbols plus the blank).
8. `111`
9. A description of the Turing machine to simulate, and that machine's input.
10. They provide a formal model of computation and a definition of what is computable.
11. One tape, infinite in one direction.
12. The blank, written □.

## Next steps

- [Turing machines study guide](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines/)
- [Turing machines practice questions](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-practice/)
- [Theory of computation revision notes](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.3 Turing machines.
