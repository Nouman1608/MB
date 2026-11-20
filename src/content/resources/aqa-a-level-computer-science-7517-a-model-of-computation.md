---
title: "AQA A-Level Computer Science (7517): A model of computation"
seoTitle: "AQA A-Level Computer Science Turing Machine Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.4.5 A model of computation: the structure of a Turing machine, transition functions and diagrams, hand-tracing and the universal Turing machine."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.4.5 A model of computation** in AQA A-Level Computer Science (7517). The only content block is **4.4.5.1 Turing machine**. The specification asks you to:

- be familiar with the **structure and use** of Turing machines that perform simple computations;
- know that a Turing machine can be viewed as a computer with a **single fixed program**, expressed using a finite set of states, a finite alphabet, an infinite tape and a read-write head;
- understand the **equivalence between a transition function and a state transition diagram**, represent rules in either form, and **hand-trace** simple Turing machines;
- explain the **importance of Turing machines and the Universal Turing machine** to the subject of computation.

Exam questions will only be asked about Turing machines with **one tape that is infinite in one direction**. The wider [theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) gives an overview of section 4.4. Condensed notes are in the [model of computation revision notes](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes/), and exam-style questions are in the [model of computation practice questions](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-practice/).

## What a Turing machine is

A **Turing machine** is a simple, abstract machine invented by Alan Turing as a model of what it means to compute. It has five parts:

1. A **finite set of states**. At any time the machine is in exactly one state. One is the **start state**. States with no outgoing transitions are **halting states**: when the machine enters one, it stops.
2. A **finite alphabet** of symbols that may appear on the tape, including a special **blank** symbol. This guide writes the blank as □.
3. An **infinite tape** divided into squares, each holding one symbol. In AQA questions the tape runs to infinity in **one direction** only. Squares not given an input value contain the blank.
4. A **read-write head** that senses the symbol in the current square, and can write a symbol there and move **one square left or right**.
5. A **set of transition rules** that say, for each state and symbol read, what to do next.

Because the rules are fixed, a Turing machine behaves like a computer with a **single fixed program**. A different task needs a different machine.

### What the transition rules say

For each combination of current state and symbol under the head, a rule specifies three things:

- the **symbol to write** into the current square (which may be the same one);
- the **direction to move** the head, left (L) or right (R);
- the **next state**.

If no rule applies, the machine halts. A halting state is just a state with no outgoing rule.

## Two equivalent ways to write the rules

### Transition function

A **transition function** δ (delta) maps (current state, symbol read) to (next state, symbol to write, direction). For example:

δ(S0, 1) = (S0, 0, R)

means: "in state S0, if the symbol read is 1, stay in state S0, write 0 and move right".

### State transition diagram

A **state transition diagram** shows states as circles and transitions as arrows labelled with the symbol read, the symbol written and the direction. In this guide an arrow is labelled `read / write, move`, so the rule above becomes a loop on S0 labelled `1 / 0, R`. The start state has an incoming arrow, and a halting state is usually drawn with a double circle. Questions will explain the notation they use.

The two forms contain exactly the same information. You should be able to convert from one to the other, and a table is a convenient halfway form:

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 1 | R | S0 |
| S0 | 1 | 0 | R | S0 |
| S0 | □ | □ | R | S1 |

## Worked example 1: inverting a binary number

This machine replaces each 0 on the tape with 1, and each 1 with 0, then halts at the first blank. S0 is the start state and S1 is the halting state.

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 1 | R | S0 |
| S0 | 1 | 0 | R | S0 |
| S0 | □ | □ | R | S1 |

Trace the input `1011`, with the head on the leftmost symbol:

| Step | State | Head position | Read | Write | Move | Tape after the step |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | 1 | 0 | R | 0011 |
| 2 | S0 | 1 | 0 | 1 | R | 0111 |
| 3 | S0 | 2 | 1 | 0 | R | 0101 |
| 4 | S0 | 3 | 1 | 0 | R | 0100 |
| 5 | S0 | 4 | □ | □ | R | 0100 |

After step 5 the machine is in S1, which has no outgoing transitions, so it halts. The tape holds `0100`, the bitwise inversion of `1011`.

## Worked example 2: adding 1 to a binary number

This machine adds 1 to a binary number. For inputs made only of 1s the number must be written with a spare leading 0, so that there is room for a carry. The head starts on the leftmost bit. It first runs right to the blank, then moves back left, turning each 1 into 0 until it finds a 0, which it changes to 1.

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 0 | R | S0 |
| S0 | 1 | 1 | R | S0 |
| S0 | □ | □ | L | S1 |
| S1 | 1 | 0 | L | S1 |
| S1 | 0 | 1 | R | S2 |

S0 is the start state. S1 is the carry state. S2 is the halting state.

Trace the input `1011` (decimal 11). The carry stops at the second bit, so no spare 0 is needed on the left for this input:

| Step | State | Head position | Read | Action | Tape after |
|---|---|---|---|---|---|
| 1 to 4 | S0 | 0 to 3 | 1, 0, 1, 1 | move right, no changes | 1011 |
| 5 | S0 | 4 | □ | move left, go to S1 | 1011 |
| 6 | S1 | 3 | 1 | write 0, move left | 1010 |
| 7 | S1 | 2 | 1 | write 0, move left | 1000 |
| 8 | S1 | 1 | 0 | write 1, move right, go to S2 | 1100 |

The machine halts in S2 with `1100`, which is decimal 12. The method is the same as the carry in binary addition: a 1 plus a carry gives 0 and carries on, and a 0 plus a carry gives 1 with no more carry. If the input were all 1s, the carry would try to move off the left end of the tape. The tape only extends in one direction, so such inputs need a spare 0 on the left. Test any machine you design on awkward inputs of this kind.

## Worked example 3: a machine that writes an answer

This machine reads a binary string and writes a parity digit in the blank square after it: 1 if the number of 1s is odd, 0 if it is even. It uses S0 for "even number of 1s so far" and S1 for "odd so far".

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 0 | R | S0 |
| S0 | 1 | 1 | R | S1 |
| S0 | □ | 0 | R | S2 |
| S1 | 0 | 0 | R | S1 |
| S1 | 1 | 1 | R | S0 |
| S1 | □ | 1 | R | S2 |

S2 is the halting state. For the input `1101`: S0 reads 1, goes to S1; S1 reads 1, goes to S0; S0 reads 0, stays; S0 reads 1, goes to S1; S1 reads □, writes 1 and halts. The tape is `11011`, because 1101 contains three 1s.

The states here act as a memory of the count so far, just like the states of a finite state machine. What gives the Turing machine more power than an FSM is the **tape**, which can be written and read again and has no limit, so the machine can store unlimited data and move in both directions.

## Tracing technique

- Write out the rules as a table first, so that none are missed.
- In a trace, record the **state**, the **head position**, the **symbol read** and the **tape**, step by step.
- Change the tape only where the head is. Write first, then move.
- A machine halts when there is **no rule** for the current state and symbol. State this clearly.
- Check the final tape against what the machine is meant to do.

## Why Turing machines matter

- A Turing machine is a **general, formal model of computation**. It strips computing down to a few operations and still computes anything we can describe as an algorithm.
- It gives a **definition of what is computable**: a problem is computable if some Turing machine can solve it. Problems that no Turing machine can solve, such as the halting problem, are non-computable. See the [classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/).
- Every real computer, however fast, can compute exactly the same set of things as a Turing machine; it is faster, not more capable.

### The Universal Turing machine

A normal Turing machine has one fixed program. A **Universal Turing machine** is a single Turing machine which can **simulate any other Turing machine**. The description of the other machine (its rules) and its input are both written on the tape of the universal machine, which then carries out the steps.

This is significant because it is the idea behind the **stored program computer**. A universal machine is a general-purpose computer: the program is data held in memory, and the same hardware can run any program by changing what is stored. Without it, a new machine would be needed for each task.

## Common mistakes

- Moving the head before writing, or writing in the wrong square.
- Leaving out the rule for the blank symbol, so that the machine stops too soon or too late.
- Forgetting that a halting state has no outgoing transitions.
- Describing the tape as large. It is infinite (unbounded), not just big.
- Mixing up the transition function and its parts: current state and symbol are inputs; next state, symbol to write and direction are outputs.
- Saying a Universal Turing machine is "a faster" Turing machine. It is one that can simulate any other.

## Exam technique

- **Trace**: use a table with a row per step, and write the whole tape each time.
- **Convert** between a transition function and a diagram by listing every rule once.
- **Explain importance**: model of computation, definition of what is computable, and universal machine as the basis of the stored program computer.
- **Describe the structure** with all five parts: states, alphabet, tape, head, rules.

## Related resources

- [A model of computation revision notes](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes/)
- [A model of computation practice questions](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-practice/)
- [Regular languages study guide](/resources/aqa-a-level-computer-science-7517-regular-languages/)
- [Classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/)

*Written against the AQA A-level Computer Science (7517) specification, 4.4.5 A model of computation. Always check the current specification on the AQA website.*
