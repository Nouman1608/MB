---
title: "OxfordAQA A-Level Computer Science (9645): Finite state machines (FSMs)"
seoTitle: "OxfordAQA 9645 Finite State Machines Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.13.1 in depth: state transition diagrams and tables, accepting states, Mealy machines with output, tracing and designing FSMs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.13.1 Finite state machines (FSMs)** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.13 Theory of computation. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to be able to **draw and interpret simple state transition diagrams and state transition tables** for FSMs with output and without output. For FSMs with output, **only Mealy machines** are required, not Moore machines.

The topic-level [theory of computation study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) covers all of topic 3.13 in one pass. This page goes deeper on FSMs: more machines, full traces, and a method for designing your own. Afterwards use the [FSM revision notes](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-revision-notes/) and the [FSM practice questions](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-practice/). The next sub-topic, [regular expressions and regular languages](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages/), shows how FSMs connect to regular expressions.

## What an FSM is

A **finite state machine** is a model with a finite number of **states**. At any moment it is in exactly one state. It reads an input string one symbol at a time, and each symbol makes it move along a **transition** to the next state, which may be the same state. The machine has no memory except which state it is in. That is why it is called finite: it can only remember as many things as it has states.

## FSMs without output: accepting strings

An FSM without output answers a yes or no question about a string: does it belong to a language? It has:

- one **start state**, drawn with an arrow pointing in from nowhere;
- one or more **accepting states**, drawn as double circles;
- a **transition** from each state on each input symbol.

A string is **accepted** if the machine is in an accepting state after reading the last symbol. Otherwise it is **rejected**. The empty string is accepted only if the start state is also accepting.

### Worked example 1: an even number of 1s

Input symbols are 0 and 1. S0 is the start state and the only accepting state. S0 means "an even number of 1s so far" and S1 means "odd".

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start, accepting) | S0 | S1 |
| S1 | S1 | S0 |

In diagram form the arcs are: S0 --0--> S0, S0 --1--> S1, S1 --0--> S1, S1 --1--> S0. Tracing two strings:

| String | State path | Final state | Result |
|---|---|---|---|
| `1001` | S0, S1, S1, S1, S0 | S0 | accepted (two 1s) |
| `10110` | S0, S1, S1, S0, S1, S1 | S1 | rejected (three 1s) |

The empty string is accepted because the start state is accepting. This is correct: zero is an even number of 1s.

### Worked example 2: strings ending in ab

Input symbols are a and b. The machine must remember how much of "ab" it has just seen.

| State | Meaning | Input a | Input b |
|---|---|---|---|
| S0 (start) | no useful progress | S1 | S0 |
| S1 | last symbol was a | S1 | S2 |
| S2 (accepting) | last two symbols were ab | S1 | S0 |

| String | State path | Result |
|---|---|---|
| `bbab` | S0, S0, S0, S1, S2 | accepted |
| `aab` | S0, S1, S1, S2 | accepted |
| `abba` | S0, S1, S2, S0, S1 | rejected |
| `aabb` | S0, S1, S1, S2, S0 | rejected |

Look at `aabb`: it reaches the accepting state after the third symbol, but the fourth symbol sends it away again, so it is **rejected**. Only the state after the **last** symbol counts.

### Worked example 3: counting modulo 3

This machine accepts strings of a and b in which the number of a symbols is a multiple of 3. The three states count the a symbols so far, modulo 3. The letter b never changes the count.

| State | Meaning | Input a | Input b |
|---|---|---|---|
| S0 (start, accepting) | count is 0 mod 3 | S1 | S0 |
| S1 | count is 1 mod 3 | S2 | S1 |
| S2 | count is 2 mod 3 | S0 | S2 |

`baabab` contains three a symbols and its path is S0, S0, S1, S2, S2, S0, S0: accepted. `aabb` contains two and ends in S2: rejected. Notice the machine needs exactly three states. It cannot count a symbols without limit, because it has only finitely many states to count with.

## FSMs with output: Mealy machines

A **Mealy machine** produces an output on every transition. On a diagram each arc is labelled **input / output**. It has no accepting states, because its job is to turn an input string into an output string of the same length.

### Worked example 4: detecting 11

The output is 1 when the current bit and the previous bit are both 1, and 0 otherwise. S0 means "previous bit was 0, or no bit yet" and S1 means "previous bit was 1".

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start) | S0 / 0 | S1 / 0 |
| S1 | S0 / 0 | S1 / 1 |

Each cell reads "next state / output". For input `0110111` the path is S0, S0, S1, S1, S0, S1, S1, S1 and the output is **0010011**. Each 1 in the output marks an input 1 that directly follows another input 1, so the final run of three 1s gives two output 1s.

### Worked example 5: a serial incrementer

Mealy machines can do arithmetic. This one adds 1 to a binary number sent **least significant bit first**. S1 means "a carry is still waiting" and is the start state. S0 means "no carry".

| State | Input 0 | Input 1 |
|---|---|---|
| S1 (start, carry waiting) | S0 / 1 | S1 / 0 |
| S0 (no carry) | S0 / 0 | S0 / 1 |

| Input (LSB first) | Value | Path | Output (LSB first) | Value |
|---|---|---|---|---|
| `0110` | 6 | S1, S0, S0, S0, S0 | `1110` | 7 |
| `1101` | 11 | S1, S1, S1, S0, S0 | `0011` | 12 |
| `1111` | 15 | S1, S1, S1, S1, S1 | `0000` | 0 |

The last row shows what a fixed width does: 15 + 1 needs five bits, so the output wraps to 0 and the machine ends still holding a carry, which would be an overflow.

## Reading and drawing diagrams

A **state transition diagram** draws each state as a circle, each transition as an arrow labelled with the input (and, for Mealy machines, the output), the start state with an unattached arrow, and accepting states as double circles. A **state transition table** lists each state as a row and each input as a column, with the next state (and output) in each cell. The two forms hold the same information.

Checks to make on any FSM:

1. **Every state has an outgoing arc for every input symbol.** If an arc is missing, either the question tells you what that means (usually "rejected") or you add a trap state.
2. **There is exactly one start state.**
3. **A Mealy machine labels every arc with an output.** A machine without output has accepting states instead.

A **trap state** is a non-accepting state with all of its arcs leading back to itself, used to reject any string that has already gone wrong.

## Designing an FSM

1. Decide what the machine must **remember**. Each different thing is a state.
2. Name each state by its meaning ("odd so far", "last symbol was a").
3. Mark the start state, the state the machine is in before any input.
4. For every state and every input symbol, decide the next state (and output).
5. For an accepting machine, mark the states whose meaning matches the language as accepting.
6. Test with a short accepted string, a short rejected string and the empty string.

## Exam technique

- **Trace with a path.** Write the state after each symbol, not just the final state.
- **Read the last state only** for acceptance.
- **For Mealy machines,** write the output string next to the path and check that it has the same length as the input.
- **Draw clearly.** Label every arc, mark the start state and mark double circles for accepting states.

## Common mistakes

- Accepting a string as soon as it passes through an accepting state.
- Forgetting that the empty string is accepted when the start state is accepting.
- Writing Mealy outputs inside the states instead of on the arcs.
- Leaving out arcs without saying what happens.
- Drawing Moore machines, which the specification does not require.

## Next steps

- [FSM revision notes](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-revision-notes/)
- [FSM practice questions](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-practice/)
- [Regular expressions and regular languages study guide](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.1 Finite state machines (FSMs).
