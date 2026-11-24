---
title: "OxfordAQA A-Level Computer Science (9645): Finite state machines (FSMs) -- Revision Notes"
seoTitle: "OxfordAQA 9645 Finite State Machines Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "finite-state-machines-fsms-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.13.1: FSM diagrams and tables, accepting states, Mealy machines, traces, design steps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.13.1 Finite state machines (FSMs)** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.13, examined in Unit 4). For worked machines and traces, see the [FSM study guide](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines/), then practise with the [FSM practice questions](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-practice/).

## What the specification requires

- **Draw and interpret** simple state transition diagrams.
- **Draw and interpret** state transition tables.
- Do both for FSMs **with output** and **without output**.
- For FSMs with output, **only Mealy machines** are required, not Moore machines.

## Key terms

| Term | Meaning |
|---|---|
| State | One of a finite number of conditions the machine can be in |
| Start state | The state before any input is read; shown with an arrow from nowhere |
| Accepting state | A state (double circle) in which a string is accepted if it ends there |
| Transition | A move from one state to the next, labelled with the input symbol |
| Trap state | A non-accepting state that only leads to itself |
| Mealy machine | An FSM that gives an output on each transition, labelled input / output |
| Accepted | The machine ends in an accepting state after the last symbol |

## Two kinds of FSM

| | Without output | With output (Mealy) |
|---|---|---|
| Purpose | Decide if a string is in a language | Turn an input string into an output string |
| Accepting states | Yes | No |
| Arc label | input | input / output |
| Result | accepted or rejected | the output string |
| Length of result | none | same length as the input |

## Worked reminder 1: ends in ab

| State | Input a | Input b |
|---|---|---|
| S0 (start) | S1 | S0 |
| S1 | S1 | S2 |
| S2 (accepting) | S1 | S0 |

| String | State path | Result |
|---|---|---|
| `bbab` | S0, S0, S0, S1, S2 | accepted |
| `aabb` | S0, S1, S1, S2, S0 | rejected |
| `ba` | S0, S0, S1 | rejected |

Only the **last** state matters. `aabb` visits S2 on the way but finishes in S0.

## Worked reminder 2: even number of 1s

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start, accepting) | S0 | S1 |
| S1 | S1 | S0 |

`1001` ends in S0: accepted. `111` ends in S1: rejected. The empty string is accepted because S0 is the start and accepting.

## Worked reminder 3: Mealy machine

Each cell is next state / output. This machine outputs 1 when a 1 directly follows another 1.

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start) | S0 / 0 | S1 / 0 |
| S1 | S0 / 0 | S1 / 1 |

| Input | Path | Output |
|---|---|---|
| `0110111` | S0, S0, S1, S1, S0, S1, S1, S1 | `0010011` |
| `101` | S0, S1, S0, S1 | `000` |
| `1111` | S0, S1, S1, S1, S1 | `0111` |

The output string is always the same length as the input string, and the path has one more entry than the input has symbols.

## Reading a table

- Row = current state. Column = input symbol.
- The cell gives the **next state** (and, for a Mealy machine, the output after a slash).
- To trace: start in the start state, look up the first symbol, move, repeat.

## Design steps

1. List what the machine must remember. Each memory is a state.
2. Name states by meaning.
3. Mark the start state.
4. Fill in every state and input pair. Add a trap state for strings that can never succeed.
5. Mark the accepting states.
6. Test with an accepted string, a rejected string and the empty string.

## Table to arcs and back

A state transition table and a diagram hold the same information. To convert a table to arcs, write one arc for every cell.

| State | Input a | Input b |
|---|---|---|
| S0 (start) | S1 | S0 |
| S1 (accepting) | S1 | S0 |

Arcs: S0 --a--> S1, S0 --b--> S0, S1 --a--> S1, S1 --b--> S0. This machine accepts strings that **end in a**: for `bba` the path is S0, S0, S0, S1 (accepted), and for `ab` it is S0, S1, S0 (rejected). To convert the other way, make a row for every state and a column for every input symbol, and fill each cell from the arc that leaves that state on that symbol. If a cell would be empty, the machine is incomplete.

## Exam traps

- **Last state decides.** Passing through an accepting state is not enough.
- **Empty string.** It is accepted only if the start state is accepting.
- **Mealy output placement.** Write it on the arc as input / output.
- **Missing arcs.** Every state needs an arc for every input symbol, or a stated rule for what happens.
- **Moore machines** are not required; do not draw outputs inside states.
- **Counting limits.** An FSM has finitely many states, so it cannot count without limit.
- **Path length.** For a string of n symbols the state path has n + 1 states.

## Quick self-test

1. What is the difference between a start state and an accepting state?
2. How is an accepting state drawn?
3. When is the empty string accepted?
4. A Mealy machine reads 6 symbols. How long is its output?
5. Using the "ends in ab" table, give the final state for `abab`.
6. Is `abab` accepted?
7. Using the even-1s table, is `110011` accepted?
8. Using the Mealy table above, give the output for `101`.
9. What is a trap state for?
10. How many states does a machine need to count a symbols modulo 4?
11. Name the type of machine with output that the specification requires.
12. Where is the output written on a Mealy diagram?

### Answers

1. The start state is where the machine begins; an accepting state is one in which a string ends to be accepted.
2. As a double circle.
3. When the start state is also an accepting state.
4. 6 symbols.
5. S2 (path S0, S1, S2, S1, S2).
6. Yes, because S2 is accepting.
7. Yes: four 1s, final state S0.
8. `000`
9. To reject any string that has already gone wrong, because it can never leave.
10. Four.
11. The Mealy machine.
12. On each arc, written input / output.

## More on this topic

- [FSM study guide](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines/)
- [FSM practice questions](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-practice/)
- [Theory of computation revision notes](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.1 Finite state machines (FSMs).
