---
title: "AQA A-Level Computer Science (7517): Regular languages -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Regular Languages Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.4.2 recall: finite state machines, Mealy machines, set notation, regular expressions and regular languages, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.4.2 Regular languages**, AQA A-Level Computer Science (7517): finite state machines (FSMs) with and without output, the set maths behind regular expressions, regular expressions, and regular languages. Fuller explanations are in the [regular languages study guide](/resources/aqa-a-level-computer-science-7517-regular-languages/); exam-style questions are in the [regular languages practice questions](/resources/aqa-a-level-computer-science-7517-regular-languages-practice/).

## Finite state machines (4.4.2.1)

An FSM has a **finite set of states**, an **input alphabet**, **transition rules**, one **start state** and (for acceptors) one or more **accepting states**.

- **Diagram:** circles for states, arrows labelled with the input symbol, an arrow in from nowhere for the start state, a **double circle** for an accepting state.
- **Table:** a row for each state and a column for each input symbol; each cell gives the next state.
- A string is **accepted** if the FSM is in an accepting state when the input has **all been read**; otherwise it is rejected.
- An FSM has no memory except its current state, so it cannot count without limit.

**Example (accepts strings of a and b ending in ab):**

| State | a | b |
|---|---|---|
| S0 (start) | S1 | S0 |
| S1 | S1 | S2 |
| S2 (accepting) | S1 | S0 |

`baab` ends in S2, so it is accepted. `abb` ends in S0, so it is rejected.

### Mealy machines

A **Mealy machine** is an FSM with **output**. The output is produced **on each transition**. Label arrows `input / output`; table cells hold `next state / output`. Mealy machines are the only machines with output on the specification.

**Example (outputs 1 when the current and previous bits are both 1):**

| State | Input 0 | Input 1 |
|---|---|---|
| A (previous 0 or start) | A / 0 | B / 0 |
| B (previous 1) | A / 0 | B / 1 |

Input `0110111` gives output `0010011`.

## Set maths (4.4.2.2)

| Idea | Notation or fact |
|---|---|
| Set | Unordered; each value occurs at most once |
| Listing | `A = {1, 2, 3, 4, 5}` |
| Comprehension | `A = {x \| x ∈ ℕ ∧ x ≥ 1}`: "such that", member of, AND |
| Empty set | `{}` or `Ø` |
| ℕ | {0, 1, 2, 3, …} |
| Compact form | `{0ⁿ1ⁿ \| n ≥ 1}` = {01, 0011, 000111, …} |
| Finite set | Can be counted off up to some number |
| Infinite set | Cannot (ℕ, ℝ) |
| Countably infinite | Infinite, but can be counted off by ℕ. ℝ is **not** countable |
| Cardinality | Number of elements of a finite set |
| ⊂ | Proper subset |
| ⊆ | Subset of (includes equal) |
| Membership | `3 ∈ A` |
| Union | `A ∪ B`: in either |
| Intersection | `A ∩ B`: in both |
| Difference | `A \ B`: in A and not in B |
| Cartesian product | `X × Y`: all ordered pairs (a, b), a ∈ X and b ∈ Y |

**Worked check.** A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7}. Union {1, 2, 3, 4, 5, 6, 7}; intersection {4, 5}; A \ B = {1, 2, 3}; B \ A = {6, 7}. For X = {1, 2, 3} and Y = {x, y} the Cartesian product has 3 × 2 = 6 pairs.

## Regular expressions (4.4.2.3)

A **regular expression** is a compact way of describing a **set of strings**.

| Symbol | Meaning |
|---|---|
| `*` | zero or more |
| `+` | one or more |
| `?` | zero or one (optional) |
| `\|` | or |
| `( )` | grouping |

Other metacharacters are explained if they appear in a question.

| Expression | Matches | Does not match |
|---|---|---|
| `a(a\|b)*` | a, aa, ab, aab | b, ba, empty |
| `colou?r` | color, colour | colr |
| `(ab)+` | ab, abab | empty, aba |
| `a*b` | b, ab, aaab | a, abb |
| `ab*c?` | a, ab, abbc, ac | b, abcc |

Be careful with grouping: `(ab)+` repeats the pair, whereas `ab+` repeats only b.

### Linking FSMs and regular expressions

- **Regular expressions and FSMs are equivalent** ways of defining a regular language.
- FSM accepting strings ending in ab: `(a|b)*ab`.
- FSM accepting bit strings with an even number of 1s: `0*(10*10*)*`.
- Only very simple conversions are assessed. Test an answer on a short string that should match and one that should not.

## Regular language (4.4.2.4)

A language is **regular** if it can be represented by a **regular expression**, or equivalently if a **finite state machine** accepts it.

`{0ⁿ1ⁿ | n ≥ 1}` is **not** regular: an FSM would need to count n without limit, but it only has finitely many states. Such a language is context-free instead (see 4.4.3).

## Exam traps

- **Output on states** in a Mealy machine. It belongs on transitions.
- **Accepting too early**: judge the state when the input has ended.
- **Missing transitions**: every state needs a rule for every symbol.
- **⊂ against ⊆**, and **ordered against unordered** (sets have no order; pairs do).
- **Regex grouping**: `(ab)*` is not `ab*`.
- **Claiming `{0ⁿ1ⁿ}` is regular.**

## Key terms

| Term | Definition |
|---|---|
| Finite state machine | A model with a finite number of states and rules for moving between them on input |
| Transition | A move from one state to another on an input symbol |
| Start state | The state in which the machine begins |
| Accepting state | A state that, when reached at the end of input, means the input is accepted |
| Mealy machine | An FSM that produces an output on each transition |
| Set | An unordered collection of values with no repeats |
| Cardinality | The number of elements in a finite set |
| Regular expression | A notation that describes a set of strings |
| Regular language | A language that a regular expression describes or an FSM accepts |

## Self-test

1. What does an FSM remember as it reads input?
2. When is a string accepted by an FSM?
3. Where is the output in a Mealy machine?
4. What is the cardinality of {2, 4, 6, 6, 8}?
5. For A = {1, 2, 3} and B = {3, 4}, give A ∪ B and A ∩ B.
6. How many pairs are in {a, b, c} × {0, 1}?
7. Which strings does `ab*` match: a, abb, b, ba?
8. Write a regular expression for the strings that begin with 0 and end with 1 over {0, 1}.
9. What is the relationship between regular expressions and FSMs?
10. Why is `{0ⁿ1ⁿ | n ≥ 1}` not a regular language?

**Answers**

1. Only its current state.
2. When it is in an accepting state after all the input has been read.
3. On each transition (labelled input / output).
4. 4, because the set is {2, 4, 6, 8}.
5. A ∪ B = {1, 2, 3, 4}; A ∩ B = {3}.
6. 6 pairs (3 × 2).
7. a and abb.
8. `0(0|1)*1`.
9. They are equivalent ways of defining a regular language.
10. An FSM has a finite number of states and cannot count an unlimited number of 0s to compare with the 1s.

## Related resources

- [Regular languages study guide](/resources/aqa-a-level-computer-science-7517-regular-languages/)
- [Regular languages practice questions](/resources/aqa-a-level-computer-science-7517-regular-languages-practice/)
- [Context-free languages revision notes](/resources/aqa-a-level-computer-science-7517-context-free-languages-revision-notes/)
- [A model of computation revision notes](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes/)
