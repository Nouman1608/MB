---
title: "AQA A-Level Computer Science (7517): Regular languages"
seoTitle: "AQA A-Level Computer Science Regular Languages Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "regular-languages-7517"
description: "Deeper guide to AQA 7517 section 4.4.2 Regular languages: finite state machines with and without output, set notation, regular expressions and the definition of a regular language."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.4.2 Regular languages** in AQA A-Level Computer Science (7517). It has four content blocks:

- **4.4.2.1** finite state machines (FSMs) with and without output (Mealy machines only), as state transition diagrams and state transition tables;
- **4.4.2.2** the maths needed for regular expressions: sets, set notation, set operations, subsets and the Cartesian product;
- **4.4.2.3** regular expressions, and their equivalence to FSMs;
- **4.4.2.4** the definition of a regular language.

The wider [theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) gives an overview of section 4.4. Condensed notes are in the [regular languages revision notes](/resources/aqa-a-level-computer-science-7517-regular-languages-revision-notes/), and exam-style questions are in the [regular languages practice questions](/resources/aqa-a-level-computer-science-7517-regular-languages-practice/).

## 4.4.2.1 Finite state machines

A **finite state machine** (FSM) is a model of computation with a **finite** number of **states**. It reads an input one symbol at a time. After each symbol it moves from its current state to another (or the same) state according to its transition rules. It can only remember which state it is in, so it has a very limited memory.

An FSM is described by:

- a finite set of **states**, one of which is the **start state**;
- an **alphabet** of input symbols, such as {a, b} or {0, 1};
- **transition rules**: for each state and input symbol, the next state;
- for FSMs that accept or reject input, a set of **accepting (final) states**.

In a **state transition diagram** states are circles, transitions are arrows labelled with the input symbol, the start state has an arrow pointing in from nowhere, and accepting states are drawn with a double circle. A **state transition table** lists the same information with a row per state and a column per input.

### Worked example 1: an FSM with no output

Design an FSM over the alphabet {a, b} that accepts exactly the strings that **end in "ab"**.

States: S0 (start; no useful progress), S1 (last symbol was a), S2 (last two symbols were ab; **accepting**).

| State | Input a | Input b |
|---|---|---|
| S0 (start) | S1 | S0 |
| S1 | S1 | S2 |
| S2 (accepting) | S1 | S0 |

Test with `baab`: start in S0. Read b: S0. Read a: S1. Read a: S1. Read b: S2. The input has ended in an accepting state, so the string is **accepted**.

Test with `abb`: S0, then a gives S1, b gives S2, b gives S0. Ending in S0, which is not accepting, so the string is **rejected**.

A string is accepted if the FSM is in an accepting state when the input has been completely read.

### Worked example 2: a Mealy machine (FSM with output)

A **Mealy machine** produces an **output on each transition**. On a diagram each arrow is labelled `input / output`. In a table each cell holds `next state / output`.

This Mealy machine reads a stream of bits and outputs 1 whenever the current bit **and the previous bit are both 1**, and otherwise 0.

| State | Input 0 | Input 1 |
|---|---|---|
| A (previous bit was 0, or start) | A / 0 | B / 0 |
| B (previous bit was 1) | A / 0 | B / 1 |

Trace the input `0110111`:

| Input | Current state | Output | Next state |
|---|---|---|---|
| 0 | A | 0 | A |
| 1 | A | 0 | B |
| 1 | B | 1 | B |
| 0 | B | 0 | A |
| 1 | A | 0 | B |
| 1 | B | 1 | B |
| 1 | B | 1 | B |

The output is `0010011`. The AQA specification covers Mealy machines only, where output depends on the state and the input, so do not expect to be asked about other kinds of machine with output.

## 4.4.2.2 Maths for regular expressions

### Sets and notation

A **set** is an **unordered** collection of values in which each value occurs **at most once**. Write a set by listing members: `A = {1, 2, 3, 4, 5}`. Write it by **set comprehension**: `A = {x | x ∈ ℕ ∧ x ≥ 1}`.

| Symbol | Meaning |
|---|---|
| `\|` | such that |
| `∈` | is a member of |
| `ℕ` | the natural numbers {0, 1, 2, 3, …} |
| `∧` | AND |
| `{}` or `Ø` | the empty set, with no members |

The comprehension above reads: "A is the set of all x such that x is a member of ℕ and x is at least 1". In Python, `{2 * x for x in {1, 2, 3}}` builds the set {2, 4, 6}, which is a set comprehension over {1, 2, 3}.

A **compact representation** describes an infinite set by a rule. The set `{0ⁿ1ⁿ | n ≥ 1}` contains all strings of n zeros followed by n ones: {01, 0011, 000111, 00001111, …}.

### Kinds of set

- A **finite set** has members that can be counted off with natural numbers up to some number, for example 1st, 2nd, … 20th and last.
- An **infinite set** cannot, such as ℕ or the real numbers ℝ.
- A **countably infinite set** is infinite but can be counted off by the natural numbers (ℕ is the standard example). The real numbers are **not countable**.
- A **countable set** has the same cardinality as some subset of the natural numbers.
- The **cardinality** of a finite set is its number of elements. The cardinality of {a, e, i, o, u} is 5.

### Subsets

`{0, 1, 2} ⊂ ℕ`: the symbol ⊂ means **proper subset**: everything in the left set is in the right, and the right set has at least one more member. `{0, 1, 2} ⊆ {0, 1, 2, 3}` uses ⊆ for **subset of**, which includes both proper subset and equality. So `{0, 1, 2, 3} ⊆ {0, 1, 2, 3}` is true, but it is not a proper subset.

### Set operations

Let A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7}.

| Operation | Meaning | Result |
|---|---|---|
| Membership: `3 ∈ A` | is a member of | True |
| Union: `A ∪ B` | in A or B or both | {1, 2, 3, 4, 5, 6, 7} |
| Intersection: `A ∩ B` | in both | {4, 5} |
| Difference: `A \ B` (or A − B) | in A and not in B | {1, 2, 3} |
| Difference: `B \ A` | in B and not in A | {6, 7} |

The **difference** is defined as `A \ B = {x : x ∈ A and x ∉ B}`, and is not symmetrical.

### Cartesian product

The **Cartesian product** X × Y ("X cross Y") is the set of all **ordered pairs** (a, b) with a ∈ X and b ∈ Y. For X = {1, 2, 3} and Y = {x, y}:

X × Y = {(1, x), (1, y), (2, x), (2, y), (3, x), (3, y)}.

The number of pairs is the product of the two cardinalities: 3 × 2 = 6. Order matters, so (1, x) is a different pair from (x, 1).

## 4.4.2.3 Regular expressions

A **regular expression** is a way of describing a **set** of strings using a compact notation. For example, `a(a|b)*` describes the set {a, aa, ab, aaa, aab, aba, …}: every string that begins with a followed by any number of a's and b's.

The metacharacters you must know:

| Symbol | Meaning |
|---|---|
| `*` | zero or more repetitions of the preceding item |
| `+` | one or more repetitions |
| `?` | zero or one (the item is optional) |
| `\|` | alternation (or) |
| `( )` | grouping |

Any other metacharacters in an exam question are explained in the question. A regular expression matches the **whole** string, so the whole string must be described by the pattern.

### Worked examples

| Regular expression | Matches | Does not match |
|---|---|---|
| `colou?r` | color, colour | colouur, colr |
| `(ab)+` | ab, abab, ababab | (empty string), aba |
| `a*b` | b, ab, aaab | a, abb |
| `ab*c?` | a, ab, abbc, ac | abcc, b |
| `(0\|1)*1` | 1, 01, 111 | 10, 0, (empty string) |

For `(ab)+` the brackets matter: `ab+` means a followed by one or more b's, which is a different set.

### Equivalence with FSMs

**Regular expressions and FSMs are equivalent ways of defining a regular language.** Any language you can describe with a regular expression, an FSM can accept, and vice versa. You may be asked to write a regular expression for the language an FSM accepts, or to draw an FSM for a regular expression. The specification says very simple examples will be assessed.

**From the FSM in worked example 1.** The strings that end in ab: any string of a's and b's, then ab. The regular expression is `(a|b)*ab`.

**Another example.** An FSM with start state T0 (accepting) and state T1, where a 1 moves between T0 and T1 and a 0 leaves the state unchanged, accepts bit strings with an even number of 1s. A regular expression is `0*(10*10*)*`: zeros anywhere, and 1s that come in pairs with zeros allowed around them.

**From a regular expression to an FSM.** For `ab*c?`: a start state; reading a moves to an accepting state; in that state b loops back to itself; reading c moves to a second accepting state with no further transitions. Inputs not described by a transition lead to rejection.

## 4.4.2.4 Regular language

A language is called **regular** if it can be represented by a regular expression. Equivalently, a regular language is any language that a **finite state machine** will accept.

Not every language is regular. The set `{0ⁿ1ⁿ | n ≥ 1}` needs the machine to count the zeros so that it can compare with the ones. An FSM has a fixed, finite number of states, so it cannot count without limit. Languages like this need more powerful descriptions, such as the Backus-Naur Form covered in the [context-free languages study guide](/resources/aqa-a-level-computer-science-7517-context-free-languages/).

## Common mistakes

- Drawing a Mealy machine with output on states instead of on transitions.
- Marking the wrong state as accepting, or forgetting a start state.
- Leaving a transition out. Every state needs a rule for every input symbol (or an agreed "reject" for missing ones).
- Accepting a string as soon as an accepting state is passed. It must be in one when the input **ends**.
- Treating a set as ordered or counting repeated members. {1, 2, 2, 3} is the same set as {1, 2, 3}.
- Confusing ⊂ (proper subset) and ⊆ (subset of).
- Writing `ab+` when `(ab)+` is meant.
- Using regular expressions to claim that `{0ⁿ1ⁿ}` is regular.

## Exam technique

- **Trace an FSM**: write the state after each input symbol, and state whether the final state is accepting.
- **Mealy machines**: show input and output together in the trace.
- **Regular expressions**: test your answer on a short string that should match and one that should not.
- **Set questions**: write out the members, then apply the operation, and check the cardinality.

## More resources on this topic

- [Regular languages revision notes](/resources/aqa-a-level-computer-science-7517-regular-languages-revision-notes/)
- [Regular languages practice questions](/resources/aqa-a-level-computer-science-7517-regular-languages-practice/)
- [Context-free languages study guide](/resources/aqa-a-level-computer-science-7517-context-free-languages/)
- [A model of computation study guide](/resources/aqa-a-level-computer-science-7517-a-model-of-computation/)

*Written against the AQA A-level Computer Science (7517) specification, 4.4.2 Regular languages. Always check the current specification on the AQA website.*
