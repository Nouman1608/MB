---
title: "AQA A-Level Computer Science: Theory of Computation — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4: Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
description: "Recall notes on abstraction, FSMs, sets, regular expressions, BNF, Big-O, the Halting problem and Turing machines for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Theory of computation (section 4.4 of AQA A-Level Computer Science 7517) is about describing problems and
machines precisely: kinds of abstraction, finite state machines and regular expressions, BNF, Big-O
complexity, the limits of computation and the Turing machine. Exam questions are short and rule-driven --
trace a machine, write an expression, classify a complexity, explain a limit -- so exact definitions earn
the marks.

Condensed for the final weeks. For the full explanation, use the
[Theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/).
Then test yourself with the [Theory of computation practice questions](/resources/aqa-a-level-computer-science-theory-of-computation-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.4, assessed on Paper 1:

- **4.4.1** Abstraction and automation (4.4.1.1-4.4.1.11: problem-solving, algorithms, abstraction,
  information hiding, procedural, functional and data abstraction, problem reduction, decomposition,
  composition, automation)
- **4.4.2** Regular languages (FSMs, maths for regular expressions, regular expressions, regular language)
- **4.4.3** Context-free languages (BNF and syntax diagrams)
- **4.4.4** Classification of algorithms (comparing algorithms, Big-O, limits of computation,
  tractable/intractable, computable/non-computable, the Halting problem)
- **4.4.5** A model of computation (the Turing machine)

## Abstraction: definitions to learn word for word

| Term | Meaning in the specification |
|---|---|
| **Algorithm** | A sequence of steps that can be followed to complete a task and that **always terminates** |
| **Representational abstraction** | A representation arrived at by **removing unnecessary details** |
| **Abstraction by generalisation** | Grouping by common characteristics to give an **"is a kind of"** hierarchy |
| **Information hiding** | Hiding all details of an object that do not contribute to its essential characteristics |
| **Procedural abstraction** | Abstracting away the actual values to leave a computational method -- a **procedure** |
| **Functional abstraction** | A further abstraction in which the particular **computation method is hidden** -- a function |
| **Data abstraction** | Hiding how data is represented, so new data objects can be built from existing types (e.g. a stack built from an array and a top pointer) |
| **Problem abstraction / reduction** | Removing details until the problem reduces to one that **has already been solved** |
| **Decomposition** | Breaking a problem into sub-problems, each accomplishing an identifiable task |
| **Composition** | Combining procedures into compound procedures, or data objects into compound data (e.g. a tree) |
| **Automation** | Putting models into action: create algorithms, implement them in code, implement the models in data structures, execute the code |

## Sets you must be able to read

- `A = {1, 2, 3}`; set comprehension `A = {x | x ∈ ℕ ∧ x ≥ 1}` ("x such that x is a natural number and x ≥ 1").
- ℕ = {0, 1, 2, 3, ...} -- AQA's natural numbers **include 0**.
- Empty set: `{}` or `Ø`. Compact form: `{0ⁿ1ⁿ | n ≥ 1}` = {01, 0011, 000111, ...}.
- **Cardinality** = number of elements of a finite set. A **countably infinite** set can be counted off by
  the natural numbers; the reals ℝ are **not** countable.
- **Cartesian product** X × Y = all ordered pairs (x, y). {1, 2} × {a, b} = {(1,a), (1,b), (2,a), (2,b)}.
- **Subset** ⊆ (may be equal); **proper subset** ⊂ (at least one element of the larger set is missing).
- Operations: membership ∈, union ∪, intersection ∩, difference A \ B = {x : x ∈ A and x ∉ B}.

## Finite state machines and regular expressions

An FSM has states, a start state, transitions on input symbols and (for acceptors) accepting states. AQA
also requires FSMs **with output -- Mealy machines only** -- where the output is written on each transition
as `input/output`.

Regular expression metacharacters you must know:

| Symbol | Meaning |
|---|---|
| `*` | 0 or more repetitions |
| `+` | 1 or more repetitions |
| `?` | 0 or 1 (optional) |
| `\|` | alternation (or) |
| `( )` | grouping |

Example from the specification: `a(a|b)*` generates {a, aa, ab, aaa, aab, aba, ...} -- every string of a's
and b's that starts with a.

**Key fact:** regular expressions and FSMs are **equivalent** ways of defining a **regular language**. A
language is regular if a regular expression can represent it, or equally if an FSM accepts it.

### Worked example: regular expression to FSM

`a(a|b)*` needs two states (plus an optional dead state): S0 (start) --a--> S1 (accepting); S1 --a--> S1;
S1 --b--> S1. A `b` from S0 goes to a dead state, so "ba" is rejected and "abba" is accepted.

## BNF and why it is more powerful than regular expressions

```
<digit>   ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
<integer> ::= <digit> | <digit><integer>
<s>       ::= 01 | 0<s>1
```

The third rule defines {0ⁿ1ⁿ | n ≥ 1}. BNF can represent languages a regular expression cannot because its
rules can be **recursive**, so it can describe nesting and matching counts (brackets, 0ⁿ1ⁿ); an FSM has a
fixed, finite number of states and cannot remember an unbounded count.

## Big-O: order of complexity

| Class | Big-O | Example |
|---|---|---|
| Constant | O(1) | Reading one array element by index |
| Logarithmic | O(log n) | Binary search |
| Linear | O(n) | Linear search |
| Polynomial | O(n²), O(nᵏ) | Bubble sort |
| Exponential | O(2ⁿ) | Generating every subset of n items |

Also learn the function shapes the specification names -- linear y = 2x, polynomial y = 2x², exponential
y = 2ˣ, logarithmic y = log₁₀ x -- and that n distinct objects have **n!** permutations. Algorithms are
compared by how time (or space) grows with **the size of the problem**.

**Deriving complexity:** a single loop over n items -> O(n); two nested loops over n -> O(n²); halving the
data each step -> O(log n). Drop constants and lower-order terms: 3n² + 5n + 2 is O(n²).

## Limits of computation

- **Tractable**: has a polynomial (or less) time solution. **Intractable**: no polynomial-time solution
  -- **heuristic** methods are often used to find good-enough answers.
- Some problems are **non-computable**: no algorithm can solve them.
- **Halting problem**: the unsolvable problem of determining whether **any** program will eventually stop
  for a given input. Its significance: it shows there are problems a computer cannot solve. (Describe it;
  you are not asked to prove it.)
- Algorithmic complexity **and hardware** both limit what can be computed in practice.

## Turing machines

A Turing machine is a computer with a **single fixed program**, made of: a finite set of states in a state
transition diagram; a finite alphabet of symbols; an **infinite tape** of marked-off squares (AQA questions
use tape infinite in one direction); and a read-write head that moves one square at a time. It has a
**start state**; states with no outgoing transitions are **halting states**.

Transition function notation: `δ(S0, 1) = (S1, 0, R)` -- in state S0 reading 1, go to S1, write 0, move right.

**Importance:** Turing machines give a general, formal model of computation and **define what is
computable**. A **Universal Turing machine** can simulate any other Turing machine by reading that machine's
description from its tape -- the idea behind a stored-program computer.

## Common mistakes / exam traps

- Writing that an algorithm is "a set of instructions" without saying it **always terminates**.
- Confusing procedural abstraction (gives a procedure) with functional abstraction (hides the method).
- Using `+` when you mean `*`: `ab*` accepts "a"; `ab+` does not.
- Drawing a Moore-style FSM with outputs in states -- AQA asks for **Mealy** machines, outputs on transitions.
- Calling an intractable problem "impossible": it is solvable, just not in polynomial time. Non-computable is the impossible category.
- Forgetting to write the symbol and direction in every Turing machine transition.

## Frequently asked questions

**Is the Halting problem intractable or non-computable?**
Non-computable. No algorithm can decide, for every program and input, whether it halts. Intractable problems
can be solved, just not in polynomial time.

**Why can't a regular expression describe balanced brackets?**
Matching brackets needs a count that can grow without limit, but an FSM -- equivalent to a regular
expression -- has a fixed number of states. BNF's recursive rules can describe the nesting.

**Does AQA count 0 as a natural number?**
Yes. The 7517 specification defines ℕ as {0, 1, 2, 3, ...}.

## Related resources

[Theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) |
[Theory of computation practice questions](/resources/aqa-a-level-computer-science-theory-of-computation-practice/) |
[Fundamentals of Algorithms revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.4 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
