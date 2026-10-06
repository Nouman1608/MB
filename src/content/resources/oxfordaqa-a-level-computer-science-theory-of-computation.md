---
title: "OxfordAQA A-Level Computer Science: Theory of computation (9645)"
seoTitle: "OxfordAQA A-Level CS 9645 Theory of Computation Guide"
resourceType: "study-guides"
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
description: "Study guide to FSMs, regular expressions, Turing machines, BNF, Big O and computability, with worked traces, for OxfordAQA A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section **3.13 Theory of computation** of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). Subsections 3.13.1 to 3.13.5 are included, and every one is **International A-level only**; the section is examined in Unit 4: Advanced concepts and principles of computer science, a written exam.

Useful links: [OxfordAQA A-level Computer Science hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [theory of computation revision notes](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-revision-notes/) · [theory of computation practice set](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-practice/) · [free 10-minute diagnostics](/diagnostics/)

## What this topic covers

Every row is International A-level only.

| Section | You need to |
|---|---|
| 3.13.1 | Draw and interpret state transition diagrams and tables, with and without output (Mealy machines only) |
| 3.13.2 | Use regular expressions; convert between FSMs and regular expressions; define a regular language |
| 3.13.3 | Describe, write and hand-trace Turing machines; explain the importance of Turing machines and the UTM |
| 3.13.4 | Check syntax with BNF or syntax diagrams; write production rules; know BNF's extra power |
| 3.13.5 | Big O; best and worst cases; tractable and intractable problems; heuristics; the Halting problem |

**Notation.** The specification sets no pseudo-code or diagram conventions for this section, so pseudo-code here is language-neutral and diagrams are given as tables or arc lists.

## 3.13.1 Finite state machines

A **finite state machine (FSM)** has a fixed number of states, one **start state**, and moves between states as it reads input symbols one at a time. An FSM **without output** has one or more **accepting states**: a string is accepted if the machine is in one of them after the last symbol.

### Worked example: an FSM without output

This machine reads strings of `x` and `y`. S0 is the start state; S2 is accepting. Each row lists the arcs leaving that state.

| State | Input x | Input y |
|---|---|---|
| S0 (start) | S1 | S3 |
| S1 | S1 | S2 |
| S2 (accepting) | S1 | S2 |
| S3 (trap) | S3 | S3 |

Trace `xxyxy`: S0 → S1 → S1 → S2 → S1 → S2. It ends in S2, so it is **accepted**. `xyx` ends in S1, so it is **rejected**. `yxy` falls into S3 at once and can never leave.

A string reaches S2 only if it began with `x` and its last symbol was `y`. The machine accepts **strings that start with x and end with y**.

### FSMs with output: Mealy machines

Only **Mealy machines** are required. The output is attached to each **transition**, written `input / output` on the arc. A Mealy machine has no accepting states; you read the output string.

This machine copies its input one step late (a one-bit delay). The state remembers the previous bit.

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start; last bit 0) | S0, output 0 | S1, output 0 |
| S1 (last bit 1) | S0, output 1 | S1, output 1 |

Input `1101`: S0 reads 1, outputs 0, goes to S1; S1 reads 1, outputs 1, stays in S1; S1 reads 0, outputs 1, goes to S0; S0 reads 1, outputs 0. Output: **0110**.

## 3.13.2 Regular expressions and regular languages

A **regular expression** describes a set of strings. You need these metacharacters:

| Symbol | Meaning | Example | Matches | Rejects |
|---|---|---|---|---|
| `*` | 0 or more | `zu*m` | zm, zuum | zam |
| `+` | 1 or more | `zu+m` | zum, zuum | zm |
| `?` | 0 or 1 | `pin?e` | pie, pine | pinne |
| `\|` | or | `(sun\|moon)light` | sunlight, moonlight | light |
| `( )` | grouping | `(ab)+` | ab, abab | aba |
| `[ ]` | character class | `[CH]at` | Cat, Hat | Bat |

A range such as `[A-Z]` matches any one character from A to Z inclusive. Any other metacharacter in an exam question will be explained in the question.

**Worked example.** Room codes in a fictional college must match `[ABL]-?[0-9]+`. `A-12` matches; `L7` matches (the hyphen is optional); `B-` fails because `+` needs at least one digit; `C12` fails because C is not in the class; `AL3` fails because only one letter is allowed.

### FSMs and regular expressions are equivalent

Regular expressions and FSMs are **equivalent ways of defining a regular language**:

- A language is **regular** if it can be represented by a regular expression.
- Any regular language can be recognised by an FSM.
- A regular expression can be written to describe the language recognised by any FSM.

**FSM to regular expression.** The machine in 3.13.1 accepts strings that start with `x`, have anything in the middle, and end with `y`: `x(x|y)*y`.

**Regular expression to FSM.** Design an FSM for `(ab)+c?`.

1. Start `a` then `b`: S0 --a--> S1, S1 --b--> S2.
2. The string may stop after `ab`, so S2 is accepting.
3. More pairs are allowed: S2 --a--> S1.
4. An optional final `c`: S2 --c--> S3, with S3 accepting and no arcs out.
5. Any missing arc leads to a rejecting trap state. If you leave it off the diagram, say so.

Check: `abab` ends in S2 and `ababc` in S3 (both accepted); `aba` ends in S1 and `abcc` has no arc from S3 (both rejected).

## 3.13.3 Turing machines

A **Turing machine** can be viewed as a computer with a single fixed program, made of:

- a finite set of states in a state transition diagram
- a finite alphabet of symbols
- an infinite tape with marked-off squares
- a sensing read-write head that moves one square at a time.

One state is the **start state**; states with no outgoing transitions are **halting states**. Exam questions use one tape, infinite in one direction, with no distinction between input and tape alphabets.

**Transition function.** Each rule gives, for a state and the symbol read, the new state, the symbol to write and the direction to move. One common way to write it:

```
δ(S0, 1) = (S1, 1, R)
```

On a diagram this is an arc from S0 to S1 labelled `1 / 1, R`. Each rule is exactly one arc and each arc is exactly one rule, which is why the two forms are **equivalent**.

### Worked example: hand-tracing

This machine appends an even-parity bit. SE means "even number of 1s so far", SO means "odd", `□` is a blank and SH halts.

```
δ(SE, 0) = (SE, 0, R)     δ(SO, 0) = (SO, 0, R)
δ(SE, 1) = (SO, 1, R)     δ(SO, 1) = (SE, 1, R)
δ(SE, □) = (SH, 0, R)     δ(SO, □) = (SH, 1, R)
```

The head starts on the leftmost symbol of `1011`, in state SE.

| Step | State | Read | Write | Move | New state |
|---|---|---|---|---|---|
| 1 | SE | 1 | 1 | R | SO |
| 2 | SO | 0 | 0 | R | SO |
| 3 | SO | 1 | 1 | R | SE |
| 4 | SE | 1 | 1 | R | SO |
| 5 | SO | □ | 1 | R | SH |

Final tape: **10111**, with four 1s. It halts because SH has no outgoing transitions.

### Why Turing machines matter

Turing machines provide a general, formal **model of computation** and a **definition of what is computable**. The **Universal Turing machine (UTM)** can simulate the behaviour of any other Turing machine: a description of the machine to simulate and its input are stored on the UTM's tape.

## 3.13.4 Backus-Naur Form and syntax diagrams

**BNF** defines a language with **production rules**: `::=` means "is defined as", `|` means "or", names in angle brackets are **non-terminals** and plain symbols are **terminals**.

### Worked example: checking syntax

```
<digit>    ::= 0|1|2|3|4|5|6|7|8|9
<unsigned> ::= <digit> | <digit><unsigned>
<sign>     ::= + | -
<signed>   ::= <unsigned> | <sign><unsigned>
<decimal>  ::= <signed>.<unsigned>
```

`<unsigned>` refers to itself (it is **recursive**), so it allows one or more digits.

- `-12.5` is valid: sign, unsigned 12, point, unsigned 5.
- `3.` is invalid: the part after the point needs at least one digit.
- `+.7` is invalid: a sign must be followed by a digit.
- `--2.1` is invalid: only one sign is allowed.

A **syntax diagram** shows the same rules as paths: `<unsigned>` is a `digit` box with a loop arrow back to its start; `<signed>` has a branch that passes through a `sign` box or bypasses it. A string is valid if some path uses its symbols in order.

### What BNF can do that regular expressions cannot

```
<pal>  ::= a | b | aa | bb | a<pal>a | b<pal>b
<same> ::= ab | a<same>b
```

`<pal>` generates palindromes over {a, b}, such as `bbabb`. `<same>` generates `ab`, `aabb`, `aaabbb`: equal numbers of a and b. Both need unlimited memory of what came earlier; an FSM has a fixed number of states, so no regular expression can describe either language.

## 3.13.5 Classification of algorithms

### Comparing algorithms (3.13.5.1)

Algorithms are compared by expressing **complexity as a function of problem size**, n, usually the number of data items. An algorithm can be more efficient **time-wise** (runs quickly) or **space-wise** (uses less memory).

### Order of complexity (3.13.5.2)

| n | log₂ n | n² | 2ⁿ |
|---|---|---|---|
| 8 | 3 | 64 | 256 |
| 16 | 4 | 256 | 65,536 |
| 32 | 5 | 1,024 | 4,294,967,296 |

The classes are **constant O(1)**, **logarithmic O(log n)**, **linear O(n)**, **polynomial O(nᵃ)** and **exponential O(aⁿ)**.

**Deriving complexity.** Count how the basic steps grow with n, keep the fastest-growing term and drop constants.

```
count ← 0
FOR i ← 0 TO n - 2
    FOR j ← i + 1 TO n - 1
        IF items[i] = items[j] THEN count ← count + 1
```

The comparisons total (n−1) + (n−2) + … + 1 = n(n−1)/2: 45 for n = 10, 190 for n = 20. The leading term is n²/2, so this is **O(n²)**.

```
WHILE n > 1
    n ← n DIV 2
```

Each pass halves n: 64 needs 6 passes, 1000 needs 9. Doubling n adds one pass: **O(log n)**.

**Best and worst cases** can differ for inputs of the same size.

| Algorithm | Best case | Worst case |
|---|---|---|
| Binary search | O(1) | O(log n) |
| Linear search | O(1) | O(n) |
| Merge sort (any input order) | O(n log n) | O(n log n) |
| Bubble sort | O(n) | O(n²) |
| Dijkstra (simple array version, V vertices) | O(V²) | O(V²) |
| Searching a binary search tree | O(1) | O(n) |

A BST search hits its worst case when the tree is unbalanced, for example built from sorted data into one long chain; a balanced tree gives O(log n). The array version of Dijkstra selects every vertex and scans every distance each time; a priority-queue version is usually quoted as O((V + E) log V) for E edges. State which version you mean.

### Tractable and intractable problems (3.13.5.3)

A problem with a **polynomial (or less)** time solution is **tractable**; one with **no polynomial (or less)** time solution is **intractable**.

Example: finding the shortest order for a van to visit 10 shops. Checking every order means 10! = 3,628,800 routes; for 15 shops, 1,307,674,368,000. No polynomial-time method is known, so it is treated as intractable.

A **heuristic** is a set of rules or knowledge about the problem domain. A heuristic method might find an **approximate but non-optimal** solution ("always drive to the nearest unvisited shop") or **change some of the problem constraints** (accept any route under a time limit).

### Computable and non-computable problems (3.13.5.4)

Some problems cannot be solved algorithmically. The **Halting problem** is the unsolvable problem of determining whether a program will eventually stop if given particular input, **without executing the program**. No proof is required. Its significance: it shows there are problems that cannot be solved by a computer, however fast the hardware.

## Common errors

- Writing Mealy outputs inside states instead of on arcs as `input / output`.
- Using `+` where nothing is allowed: `zu+m` rejects `zm`.
- Calling O(n²) exponential. n² is polynomial; 2ⁿ is exponential.
- Describing the Halting problem as "too slow". It is unsolvable.

## Next steps

Use the [revision notes](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-practice/). Search and sort traces: [searching and sorting guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/); binary search trees: [advanced data structures guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.13 Theory of computation.
