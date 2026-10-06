---
title: "OxfordAQA A-Level Computer Science: Theory of computation (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Theory of Computation Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
description: "Condensed revision notes on FSMs, Mealy machines, regex, Turing machines, BNF, Big O and the Halting problem for OxfordAQA A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes cover section **3.13 Theory of computation** (3.13.1 to 3.13.5) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). Everything here is **International A-level only**, examined in Unit 4: Advanced concepts and principles of computer science, a written exam. Go to the [study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) when you need a topic taught from the start.

Course links: [OxfordAQA A-level Computer Science hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [free 10-minute diagnostics](/diagnostics/) · [theory of computation practice set](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-practice/)

Pseudo-code and diagram notation here is language-neutral; the specification does not define its own conventions for this section.

## Key definitions

- **Finite state machine (FSM):** a machine with a fixed number of states that changes state as it reads each input symbol.
- **Accepting state:** in an FSM without output, a state where the input is accepted if the input ends there.
- **Mealy machine:** an FSM with output, where each output is produced on a **transition** (arc label `input / output`).
- **Regular expression:** a pattern that describes a set of strings.
- **Regular language:** a language that can be represented by a regular expression.
- **Turing machine:** a computer with a single fixed program: finite states, finite alphabet, infinite tape of squares, and a read-write head moving one square at a time.
- **Halting state:** a state with no outgoing transitions.
- **Universal Turing machine (UTM):** a Turing machine that can simulate any other; the other machine's description and its input are stored on the UTM's tape.
- **BNF:** a notation of production rules for defining the syntax of a language.
- **Tractable / intractable:** has / has no polynomial (or less) time solution.
- **Heuristic:** a set of rules or knowledge about the problem domain.
- **Halting problem:** the unsolvable problem of determining whether a program will eventually stop if given particular input, without executing the program.

## 3.13.1 FSMs

**Method: tracing an FSM without output**

1. Start in the start state.
2. For each symbol, follow the matching arc (or table cell).
3. If no arc exists, the string is rejected.
4. After the last symbol, accept only if you are in an accepting state.

**Method: tracing a Mealy machine**

1. Start in the start state with an empty output string.
2. For each symbol, append that arc's output, then move.
3. The answer is the output string. There are no accepting states.

**Worked reminder.** A Mealy machine outputs 1 when the input bit equals the previous bit, otherwise 0 (the first bit always gives 0).

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start) | S1, output 0 | S2, output 0 |
| S1 (last bit 0) | S1, output 1 | S2, output 0 |
| S2 (last bit 1) | S1, output 0 | S2, output 1 |

Input `00110` gives output **01010**.

Only Mealy machines are required, not Moore machines.

## 3.13.2 Regular expressions

| Symbol | Meaning |
|---|---|
| `*` | 0 or more repetitions |
| `+` | 1 or more repetitions |
| `?` | 0 or 1 repetitions (optional) |
| `\|` | alternation (or) |
| `( )` | groups a regular expression |
| `[CH]` | one character: C or H |
| `[A-Z]` | one character from A to Z inclusive |

**Worked reminder.** `k(o|i)+t` matches `kot`, `kiot` and `koit` but not `kt`, because `+` needs at least one `o` or `i`.

**Three facts to quote**

- Regular expressions and FSMs are equivalent ways of defining a regular language.
- Any regular language can be recognised by an FSM.
- A regular expression can be written for the language recognised by any FSM.

**Method: FSM to regular expression**

1. Find every path from the start state to an accepting state.
2. Write a single arc as its symbol, a choice of arcs with `|`, and a loop with `*` (or `+` if it must be used at least once).
3. Join the pieces in path order; test two accepted and two rejected strings.

**Method: regular expression to FSM**

1. Read the expression left to right and give each fixed symbol its own arc to a new state.
2. Turn `*` and `+` into loops back to an earlier state; for `+`, the arc must be taken once first.
3. For `?` on the final part, make the state before it accepting as well; elsewhere, add a bypass arc.
4. Mark every state where the string may legally end as accepting.
5. State that missing arcs go to a rejecting trap state.

## 3.13.3 Turing machines

| Part | What it is |
|---|---|
| States | finite set, one start state, halting states have no outgoing transitions |
| Alphabet | finite set of symbols (input and tape alphabets not distinguished in exam questions) |
| Tape | infinite in one direction, divided into squares |
| Head | reads and writes one square, moves one square at a time |

**Transition function:** `δ(current state, symbol read) = (new state, symbol written, move)`. Each rule is one arc on the state transition diagram, labelled `read / write, move`. That one-to-one match is the **equivalence** between the two forms.

**Worked reminder.** Rules `δ(S0, 0) = (S0, 1, R)`, `δ(S0, 1) = (S0, 1, R)`, `δ(S0, □) = (S1, □, L)`. On tape `0100`, every 0 becomes 1 and the machine halts in S1 on the last digit. Final tape: **1111**.

**Importance:** Turing machines give a general, formal model of computation and define what is computable. The UTM shows that one machine can run any program held as data on its tape.

## 3.13.4 BNF and syntax diagrams

| Item | Meaning |
|---|---|
| `::=` | is defined as |
| `\|` | or |
| `<name>` | non-terminal (has its own rule) |
| plain symbol | terminal |
| rule that uses its own name | recursion: allows repetition |

**Method: checking a string**

1. Start from the top-level rule.
2. Replace each non-terminal by one of its options until only terminals remain.
3. The string is valid only if some sequence of choices produces it exactly. Give the rule that fails when it is invalid.

In a **syntax diagram**, a loop arrow means repeat; a branch means choose; any route from entry to exit is a valid string.

**BNF beats regular expressions** on palindromes and on strings with equal numbers of certain characters, because these need recursion (unlimited memory) that an FSM cannot provide.

## 3.13.5 Classification of algorithms

| Class | Big O | Growth when n doubles |
|---|---|---|
| Constant | O(1) | no change |
| Logarithmic | O(log n) | one extra step |
| Linear | O(n) | doubles |
| Polynomial | O(nᵃ) | multiplies by 2ᵃ (×4 for n²) |
| Exponential | O(aⁿ) | squares the step count (for 2ⁿ) |

**Method: deriving Big O**

1. Identify the basic operation (a comparison, an assignment).
2. Count it as a function of n: one loop to n gives n; nested loops give n²; repeated halving gives log n.
3. Keep the dominant term and drop constants.

| Algorithm | Best | Worst |
|---|---|---|
| Binary search | O(1) | O(log n) |
| Linear search | O(1) | O(n) |
| Merge sort (any input order) | O(n log n) | O(n log n) |
| Bubble sort | O(n) | O(n²) |
| Dijkstra (simple array version) | O(V²) | O(V²) |
| Binary search tree search | O(1) | O(n), unbalanced tree |

Efficiency is measured **time-wise** and **space-wise** (memory). A heuristic method on an intractable problem may give an **approximate but non-optimal** solution or **change some of the problem constraints**. The Halting problem shows some problems **cannot be solved by a computer** at all.

## Must-know distinctions

- **Mealy output vs FSM acceptance:** a Mealy machine produces a string; an FSM without output says accept or reject.
- **Start state vs halting state:** a Turing machine begins in the start state; it stops in a state with no outgoing transitions.
- **Polynomial vs exponential:** n³ is polynomial; 3ⁿ is exponential.
- **Intractable vs non-computable:** intractable problems can be solved, just not in polynomial time; non-computable problems cannot be solved algorithmically.

## Quick self-test

1. Which of `kt`, `kot`, `koit` match `k(o|i)+t`?
2. Which of the empty string, `bab` and `baba` match `(ba)*`?
3. Using the "equals previous bit" Mealy machine above, give the output for input `1011`.
4. What makes a Turing machine state a halting state?
5. Write `δ(S2, □) = (S3, 1, L)` as an arc label and say which states it joins.
6. Write a BNF rule `<as>` for one or more letters `a`.
7. How many times does `WHILE n > 1: n ← n DIV 2` run for n = 128?
8. How many comparisons does a nested "compare every pair once" loop make for n = 6?
9. State the worst case for searching a binary search tree and when it happens.
10. Define an intractable problem.
11. Why can no regular expression describe strings of the form ab, aabb, aaabbb, ...?
12. What is stored on the tape of a UTM?

### Answers

1. `kot` and `koit`.
2. The empty string and `baba`.
3. **0001**.
4. It has no outgoing transitions.
5. Arc from S2 to S3 labelled `□ / 1, L`.
6. `<as> ::= a | a<as>`
7. **7** times (128 → 64 → 32 → 16 → 8 → 4 → 2 → 1).
8. **15** (5 + 4 + 3 + 2 + 1).
9. O(n), when the tree is unbalanced (for example one long chain).
10. A problem with no polynomial (or less) time solution.
11. The machine must count unlimited a's to match the b's; an FSM has only a fixed number of states.
12. A description of the Turing machine to be simulated and that machine's input.

## Where marks are usually lost

- Drawing outputs inside state circles on a Mealy machine instead of on the arcs.
- Leaving out the accepting state marking (double circle or label) when drawing an FSM.
- Confusing `*` with `+`, so the expression accepts the empty case when it should not.
- Writing a character class like `[A-Z]` and assuming it matches more than one character.
- Giving a Turing machine trace without showing the tape after each step.
- Forgetting that a recursive BNF rule needs a non-recursive option, or it can never finish.
- Quoting O(log n) for every binary search tree search, ignoring the unbalanced worst case.
- Saying the Halting problem is "very slow" rather than unsolvable without running the program.

Next: try the [practice questions](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-practice/), then check gaps with the [free 10-minute diagnostics](/diagnostics/). Related: [searching and sorting revision notes](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/) and [advanced data structures revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-revision-notes/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.13 Theory of computation.
