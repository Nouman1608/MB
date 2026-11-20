---
title: "AQA A-Level Computer Science (7517): A model of computation -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Turing Machine Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.5
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "a-model-of-computation-7517"
description: "Condensed AQA 7517 section 4.4.5 recall: the structure of a Turing machine, transition functions and diagrams, tracing, and the importance of the universal Turing machine."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.4.5 A model of computation**, AQA A-Level Computer Science (7517): the **structure and use of Turing machines**, representing rules as a **transition function** or a **state transition diagram**, **hand-tracing** simple machines, and the importance of Turing machines and the **Universal Turing machine**. Exam questions use machines with **one tape, infinite in one direction**. Fuller explanations are in the [model of computation study guide](/resources/aqa-a-level-computer-science-7517-a-model-of-computation/); exam-style questions are in the [model of computation practice questions](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-practice/).

## Structure

A Turing machine can be viewed as a computer with a **single fixed program**, expressed using:

| Part | Detail |
|---|---|
| Finite set of states | One is the **start state**. States with **no outgoing transitions** are **halting states** |
| Finite alphabet of symbols | Includes a **blank** (written □) |
| Infinite tape | Marked-off squares; infinite in **one direction** in AQA questions |
| Sensing read-write head | Reads and writes one square; moves **one square at a time**, left or right |
| Transition rules | For each (state, symbol read): next state, symbol written, direction |

## Representing the rules

**Transition function** δ: (state, symbol read) → (next state, symbol written, direction).

δ(S0, 1) = (S0, 0, R) means: in S0 reading 1, stay in S0, write 0, move right.

**State transition diagram:** circles for states, arrows labelled with the symbol read, the symbol written and the direction (here `read / write, move`). The function and the diagram are **equivalent**.

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 1 | R | S0 |
| S0 | 1 | 0 | R | S0 |
| S0 | □ | □ | R | S1 |

This machine (S0 start, S1 halting) inverts a binary string. Input `1011` produces `0100`.

## How to trace

1. Put the rules in a table.
2. Record the **state**, **head position**, **symbol read** and the **tape** at each step.
3. At each step: read, **write**, **move**, change state.
4. Halt when there is **no rule** for the current state and symbol (a halting state).
5. Check the final tape.

### Increment machine

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 0 | R | S0 |
| S0 | 1 | 1 | R | S0 |
| S0 | □ | □ | L | S1 |
| S1 | 1 | 0 | L | S1 |
| S1 | 0 | 1 | R | S2 |

S0 runs right to the end. S1 carries left: every 1 becomes 0 until a 0 becomes 1. S2 halts. Input `1011` gives `1100` (11 + 1 = 12). Input `0101` gives `0110`. An input of all 1s needs a spare 0 on the left, because the tape does not extend to the left of the first square.

### Parity machine

S0 means an even number of 1s so far and S1 means odd. At the blank it writes 0 (even) or 1 (odd) and halts in S2. Input `1101` produces `11011`. Input `1001` produces `10010`.

## Memory in a Turing machine

- The **state** remembers a small, fixed amount of information (such as odd or even so far).
- The **tape** can store unlimited data and be read again, which a finite state machine cannot do.
- This extra power lets Turing machines carry out computations that finite state machines cannot, such as checking that a string has equal numbers of 0s and 1s.

## Importance of Turing machines

- They are a **general (formal) model of computation**.
- They provide a **definition of what is computable**: a problem is computable if a Turing machine can solve it.
- Non-computable problems, for example the halting problem, are those no Turing machine can solve.
- Real computers compute the same set of things; they are faster, not more capable.

## Universal Turing machine

- A single Turing machine that can **simulate any other Turing machine**.
- The description of the other machine and its input are both held on the tape.
- It is the idea behind the **stored program computer**: the program is data in memory, so one machine can run any program.

## Exam traps

- **Write then move**, in that order, within a step.
- **No rule means halt**. Do not invent a rule.
- **Blank symbol** is part of the alphabet; do not forget its rule.
- **Wrong direction** for L and R.
- **Confusing inputs and outputs** of the transition function.
- **Calling the universal machine faster** instead of able to simulate others.
- **Calling the tape large** instead of infinite (unbounded).

## Key terms

| Term | Definition |
|---|---|
| Turing machine | An abstract machine with states, a finite alphabet, an infinite tape and a read-write head |
| Tape | The infinite sequence of squares holding symbols |
| Head | The part that reads, writes and moves one square at a time |
| Start state | The state in which the machine begins |
| Halting state | A state with no outgoing transitions; the machine stops there |
| Transition function | A rule mapping (state, symbol read) to (next state, symbol written, move) |
| State transition diagram | A picture of the states and transitions |
| Universal Turing machine | A Turing machine that can simulate any other Turing machine |

## Self-test

1. Name the five parts of a Turing machine.
2. What makes a state a halting state?
3. In which directions can the head move, and how far?
4. Explain δ(S1, 0) = (S2, 1, R).
5. What does the inversion machine produce from `0110`?
6. In the increment machine, what does `0111` become?
7. Why can a Turing machine do things a finite state machine cannot?
8. State two reasons why Turing machines are important.
9. What is a Universal Turing machine?
10. Which modern idea is the Universal Turing machine the basis of?

**Answers**

1. States (with start and halting states), alphabet, infinite tape, read-write head, transition rules.
2. It has no outgoing transitions.
3. Left or right, one square at a time.
4. In state S1 reading 0: write 1, move right and go to state S2.
5. `1001`.
6. `1000`.
7. Its tape provides unlimited storage that can be read and written again, whereas an FSM only has its current state.
8. Any two: a general model of computation; a definition of what is computable; they show the limits of computation.
9. A Turing machine that can simulate any other Turing machine, given that machine's description and input on its tape.
10. The stored program computer.

## Related resources

- [A model of computation study guide](/resources/aqa-a-level-computer-science-7517-a-model-of-computation/)
- [A model of computation practice questions](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-practice/)
- [Regular languages revision notes](/resources/aqa-a-level-computer-science-7517-regular-languages-revision-notes/)
- [Classification of algorithms revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms-revision-notes/)
