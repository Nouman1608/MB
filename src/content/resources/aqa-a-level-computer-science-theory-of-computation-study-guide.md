---
title: "AQA A Level Computer Science (7517): Theory of computation -- Study Guide"
resourceType: "study-guides"
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
description: "Abstraction, finite state machines, regular expressions, BNF, Big-O, computability and the Turing machine for AQA A Level Computer Science, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Theory of computation asks what a computer can do in principle, how fast, and how we describe problems and languages precisely. It is the most mathematical part of AQA 7517, but questions are usually short and rule-driven: trace a machine, write an expression, state a complexity, justify a limit.

## Where this fits in the specification

Theory of computation is section 4.4 of the AQA 7517 subject content and is examined on Paper 1 alongside programming, data structures and algorithms. It builds on the algorithm ideas in the guide to [Fundamentals of algorithms](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/), because Big-O notation is how you compare the algorithms you trace there. Expect short definition questions, traces of a finite state machine or Turing machine, and a longer justification question.

## Abstraction and automation

**Abstraction** means removing detail that is not needed so that a problem can be solved or a system understood. Be able to name and illustrate each of these kinds:

- **Representational abstraction**: leaving out unneeded detail. A tube map shows connections but not true distances.
- **Abstraction by generalisation**: grouping things that share features, such as treating bubble sort and merge sort as "sorting algorithms".
- **Information hiding**: a user needs a procedure's interface, not its internals.
- **Procedural abstraction**: a named procedure is used without knowing how it works.
- **Functional abstraction**: procedural abstraction where the procedure returns a value for given arguments.
- **Data abstraction**: hiding how data is stored, as with a stack that is used through push and pop without the programmer knowing whether it is an array or a linked list.
- **Problem abstraction / reduction**: removing details until the problem matches one that is already solved, then reusing that solution.

**Automation** is putting an abstract model into action: you create algorithms, represent them in code and run them on a machine, so the model is carried out without human steps. It pairs with **decomposition** (splitting a problem into sub-problems) and **composition** (combining the solved parts).

## Finite state machines

A **finite state machine** (FSM) has a finite set of states, an input alphabet, and transition rules that say which state to move to for each input. One state is the **start state** and some are **accepting (final) states**. An FSM with no output simply decides whether an input string is accepted. A machine with output, such as a **Mealy machine**, produces an output on each transition.

On a state transition diagram, states are circles, the start state has an arrow pointing in from nowhere, accepting states have a double circle, and each arrow is labelled with its input (and output, for a Mealy machine). A **state transition table** gives the same information with a row per state and a column per input.


## Regular expressions and set descriptions

A **regular language** is any language an FSM can accept, and the same language can be written as a **regular expression**. The AQA notation uses:

| Symbol | Meaning |
|---|---|
| `a\|b` | a or b |
| `ab` | a followed by b |
| `a*` | zero or more a |
| `a+` | one or more a |
| `a?` | zero or one a |
| `( )` | grouping |

Regular languages cannot count without limit, so a language such as a^n b^n (n a's followed by exactly n b's) cannot be recognised by an FSM.

## Backus-Naur form

**Backus-Naur form (BNF)** defines the syntax of a language using production rules. A symbol in angle brackets is a non-terminal, the symbol `::=` means "is defined as", `|` means "or", and anything not in brackets is a terminal. Because a rule may mention itself, BNF can express **recursion**, which a regular expression cannot. This is why BNF describes programming-language syntax and regular expressions do not fully do so. A **syntax diagram** shows the same rules graphically.

## Big-O notation and complexity

Big-O describes how the running time (or memory) of an algorithm grows with input size n, keeping only the dominant term and ignoring constants. The orders you must know are:

| Order | Name | Example |
|---|---|---|
| O(1) | constant | reading an array element by index |
| O(log n) | logarithmic | binary search |
| O(n) | linear | linear search |
| O(n log n) | linearithmic | merge sort |
| O(n^2) | polynomial | bubble sort |
| O(2^n) | exponential | trying every subset |
| O(n!) | factorial | trying every ordering |

Polynomial time or better is **tractable**; exponential or worse is **intractable**: a solution exists but takes unreasonable time even for modest n. A **heuristic** gives a good-enough answer in acceptable time, with no guarantee it is best.

For n = 1000 items, a quadratic algorithm needs about 1000 x 1000 = 1,000,000 steps, while an O(n log n) algorithm needs about 1000 x 9.97, roughly 9,966, which is around 100 times fewer.

## Computability and the Turing machine

A problem is **computable** if an algorithm exists that solves it. The **halting problem** asks whether a general algorithm can decide, for any program and input, whether that program eventually stops. It has been proved that no such algorithm exists, so the halting problem is **non-computable**. So some questions cannot be answered by any program, however powerful the machine.

A **Turing machine** has an infinite tape of cells, a read/write head, a finite set of states and a transition function. On each step it reads the current cell and, depending on state and symbol, writes a symbol, moves left or right (or stays) and changes state. It is a mathematical model of computation: any computable problem can be solved by some Turing machine. A **universal Turing machine** reads a description of another machine and its input from the tape and simulates it, which is the stored-program computer in abstract form. The transition function is a rule (state, read) -> (state, write, move), or a table.

## Worked example 1: tracing a Turing machine

The machine below adds 1 to a binary number. The head starts on the least significant (rightmost) bit, in state CARRY. Blank cells surround the number.

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| CARRY | 1 | 0 | left | CARRY |
| CARRY | 0 | 1 | none | HALT |
| CARRY | blank | 1 | none | HALT |

Trace on the tape `0 1 0 1 1` (decimal 11), head on the last cell:

| Step | Cell read | Written | Tape afterwards |
|---|---|---|---|
| 1 | 1 | 0, move left | 0 1 0 1 0 |
| 2 | 1 | 0, move left | 0 1 0 0 0 |
| 3 | 0 | 1, halt | 0 1 1 0 0 |

The final tape is `0 1 1 0 0`, which is 12, so the machine has added 1 in three steps. The leading 0 guarantees a cell to absorb the carry. Running the same rules on `0 1 1 1` takes four steps and gives `1 0 0 0` (7 + 1 = 8).

## Worked example 2: regular expression and BNF

A club membership code is two capital letters followed by exactly three digits, such as `QR482`.

Regular expression: `[A-Z][A-Z][0-9][0-9][0-9]`

BNF:

```
<code>   ::= <letter><letter><digit><digit><digit>
<letter> ::= A | B | C | ... | Z
<digit>  ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

`AB123` matches; `A123` fails (one letter); `ab123` fails (lower case); `AB1234` fails (four digits). If the club allowed any number of letters first, BNF could use recursion:

```
<letters> ::= <letter> | <letter><letters>
```

whereas the regular expression is `[A-Z]+` followed by three digits, written out as `[A-Z]+[0-9][0-9][0-9]`. This is still a regular language, but only a recursive BNF rule can describe nesting such as matched brackets.

## Common mistakes

- Giving Big-O as an exact step count. O(2n + 5) is written O(n); drop constants and lower terms.
- Saying a Turing machine "is" a computer. It is a model, and its tape is unlimited whereas real memory is finite.
- Writing a recursive BNF rule with no non-recursive alternative, so that it can never end.
- Saying the halting problem is "hard". It is non-computable: no algorithm exists at all.

## Exam technique

**State** and **name** need one fact; **describe** needs a sequence of features; **explain** needs a reason; **trace** needs every row of the table shown. For complexity, tie the order to the behaviour: "binary search halves the remaining list each time, so O(log n)". For FSM design, check every state has a transition for every input.

## Check your understanding

1. Name two types of abstraction and give an example of each. *Answer: for example data abstraction (a stack used through push and pop) and procedural abstraction (calling a named procedure without knowing its code).*
2. What is the difference between a state and an accepting state in an FSM? *Answer: a state is any condition the machine can be in; an accepting state is one in which the machine ends if the input is valid.*
3. Write a regular expression for one or more `a` followed by a single `b`. *Answer: `a+b`.*
4. Why can BNF describe something a regular expression cannot? *Answer: BNF rules can be recursive, so it can describe nested structures such as bracket matching.*
5. Put in order of growth: O(n^2), O(log n), O(2^n), O(n). *Answer: O(log n), O(n), O(n^2), O(2^n).*
6. Explain what the halting problem shows. *Answer: no algorithm can decide for every program and input whether the program halts, so some problems are non-computable.*
7. What does a universal Turing machine do? *Answer: it reads a description of another Turing machine and its input and simulates that machine, so one machine can run any program.*
8. Using the machine in worked example 1, what is the tape after running it on `0 0 1 1`? *Answer: `0 1 0 0` (3 + 1 = 4).*
