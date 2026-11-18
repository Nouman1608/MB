---
title: "Cambridge A Level Computer Science (9618): Programming Paradigms"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 20: Further Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 20.1
syllabusTopics:
  - qualification: "a-level"
    topic: "further-programming"
    subtopic: "programming-paradigms"
description: "Study guide to 9618 section 20.1: comparing paradigms, addressing modes traced in memory, indirect loops, designing classes, and writing facts, rules and goals."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 20.1 "Programming Paradigms" of Cambridge International AS & A Level Computer Science 9618 asks you to understand "what is meant by a programming paradigm" and the characteristics of four: **low-level** (writing code "that uses various addressing modes: immediate, direct, indirect, indexed and relative"), **imperative (procedural)** (assumed from AS section 11.3), **object-oriented** (the terminology, "how to solve a problem by designing appropriate classes" and writing OOP code) and **declarative** ("writing appropriate facts and rules based on supplied information" and code "that can satisfy a goal"). Paper 3 assesses all four; Paper 4 assesses imperative and object-oriented code, but not low-level or declarative programming.

Related: [Programming paradigms revision notes](/resources/cambridge-a-level-computer-science-9618-programming-paradigms-revision-notes/) · [Programming paradigms practice questions](/resources/cambridge-a-level-computer-science-9618-programming-paradigms-practice/) · [Topic 20 Further Programming study guide](/resources/a-level-computer-science-further-programming-a-level/)

## What a paradigm is

A **programming paradigm** is a style of programming: a way of thinking about and structuring a solution, supported by particular language features. The four in the syllabus differ in what the programmer writes:

| Paradigm | The programmer writes | How a solution is organised | State |
|---|---|---|---|
| Low-level | Individual processor instructions | Sequence of instructions, jumps, memory addresses | Registers and memory locations |
| Imperative | Statements that say how to change variables, step by step | Procedures and functions | Variables, changed by assignment |
| Object-oriented | Classes that combine data with the methods that act on it | Objects that send each other messages | Held inside each object, accessed through its methods |
| Declarative | Facts and rules describing the problem | A knowledge base queried with goals | No step-by-step state; the language searches for answers |

Imperative and low-level code tell the computer **how**; declarative code states **what** is true and leaves the search to the language.

## Low-level programming: the addressing modes in memory

The syllabus instruction set has one general-purpose register, the accumulator (ACC), and an index register (IX). Take this memory and IX = 2:

| Address | Contents |
|---|---|
| 200 | 350 |
| 201 | 7 |
| 202 | 3 |
| 350 | 42 |

| Instruction | Mode | How the operand is used | ACC afterwards |
|---|---|---|---|
| LDM #200 | Immediate | 200 is the value itself | 200 |
| LDD 200 | Direct | 200 is the address of the value | 350 |
| LDI 200 | Indirect | Address 200 holds the address of the value (350) | 42 |
| LDX 200 | Indexed | Address = 200 + IX = 202 | 3 |

**Relative addressing** gives an address as an offset from the address of the current instruction (or from a base address), such as "the location 5 places on". Because no absolute address is fixed in the code, a block of relative code works wherever it is loaded in memory.

Each mode has a typical use. Immediate loads constants. Direct reads and writes named variables. Indirect follows a pointer stored in memory, so the same instruction can reach different locations as the pointer changes. Indexed steps through an array, because increasing IX moves to the next element.

### Worked example 1: a loop using indirect addressing

This program outputs a string stored as ASCII codes from address 300 onwards, ending with 0. PTR holds the address of the next character.

```
LOOP:   LDI PTR       // ACC ← contents of the address held in PTR
        CMP #0        // end of string?
        JPE DONE
        OUT           // output the character in ACC
        LDD PTR
        INC ACC       // move the pointer to the next address
        STO PTR
        JMP LOOP
DONE:   END
PTR:    300
```

With 72 at address 300, 73 at 301 and 0 at 302, the trace is:

| PTR | ACC after LDI | Compare with 0 | Output |
|---|---|---|---|
| 300 | 72 | Not equal | H |
| 301 | 73 | Not equal | I |
| 302 | 0 | Equal: jump to DONE | |

Output: **HI**. The instruction set has only "jump if equal" and "jump if not equal", so loops are controlled by comparing with a fixed value, as here, or by counting down to 0.

## Imperative (procedural) programming

The syllabus assumes the AS structured-programming knowledge: variables and constants, the constructs of sequence, selection and iteration, and code broken into procedures and functions with parameters passed by value or by reference. Its characteristics are that the program is a sequence of commands, the order of execution is explicit, and the program's state is held in variables that statements change. It is well suited to tasks with a clear step-by-step method, but in a large system data and the code that changes it are separate, so any procedure can alter shared data.

## Object-oriented programming: designing classes

To **design classes** from a problem description:

1. Find the **nouns**: each important noun is a candidate class or attribute.
2. Find the **verbs**: these become methods.
3. Decide which data must be protected: make it PRIVATE, with getters and setters that validate.
4. Look for **"is a kind of"** relationships: inheritance.
5. Look for **"has"** relationships: containment (aggregation).
6. Look for actions that every subclass does differently: polymorphism.

### Worked example 2: a library system

*A library lends items. Every item has an ID, a title and an on-loan flag. Books also have an author; DVDs also have a running time. Books may be borrowed for 21 days and DVDs for 7. A member has a name and can have up to 5 items on loan.*

- **LibraryItem** (superclass): PRIVATE ItemID, Title, OnLoan; methods GetTitle(), SetOnLoan(), GetLoanDays().
- **Book INHERITS LibraryItem**: adds Author; **overrides** GetLoanDays() to return 21.
- **DVD INHERITS LibraryItem**: adds RunningTime; overrides GetLoanDays() to return 7.
- **Member**: PRIVATE Name and Loans, an array of up to 5 LibraryItem objects: **containment**.

```
CLASS DVD INHERITS LibraryItem
   PRIVATE RunningTime : INTEGER
   PUBLIC PROCEDURE NEW(GivenID : STRING, GivenTitle : STRING, GivenTime : INTEGER)
      SUPER.NEW(GivenID, GivenTitle)
      RunningTime ← GivenTime
   ENDPROCEDURE
   PUBLIC FUNCTION GetLoanDays() RETURNS INTEGER
      RETURN 7
   ENDFUNCTION
ENDCLASS
```

When the Member class loops through its Loans array calling GetLoanDays() on each item, each object runs its own class's version: that is **polymorphism**, and it means Member does not need to test what kind of item each one is. Adding a new item type later needs only a new subclass.

## Declarative programming: facts, rules and goals

Cambridge papers use a Prolog-style notation: lower-case words are constants, words starting with a capital letter are variables, facts and rules end with a full stop, and rules use IF and AND.

### Worked example 3: writing facts and rules from supplied information

*Mr Khan runs chess club. Ms Osei runs robotics and drama. Maya attends chess. Leo attends robotics and drama. Tom attends drama.*

```
01 teaches(khan, chess).
02 teaches(osei, robotics).
03 teaches(osei, drama).
04 attends(maya, chess).
05 attends(leo, robotics).
06 attends(leo, drama).
07 attends(tom, drama).
08 taughtby(S, T) IF attends(S, C) AND teaches(T, C).
```

Rule 08 says student S is taught by teacher T if S attends some club C that T teaches. The language satisfies a goal by searching the facts in order and trying every way of matching the variables:

- `attends(leo, C).` gives C = robotics, then C = drama.
- `taughtby(tom, T).` matches attends(tom, drama), then teaches(T, drama): T = osei.
- `taughtby(S, osei).` gives S = leo (through robotics), S = leo again (through drama), then S = tom. Leo appears twice because there are two ways to satisfy the rule.

New information is added as a fact: "Priya attends chess" becomes `attends(priya, chess).` A new relationship becomes a rule: two students share a club if `sameclub(A, B) IF attends(A, C) AND attends(B, C).` Note that this also succeeds when A and B are the same student, a point worth stating in an answer.

## Common mistakes

- Confusing direct and indirect addressing: indirect goes to memory **twice**.
- Writing LDX as "load the index register"; it loads ACC from address + IX.
- Using inheritance for a "has" relationship (a member is not a kind of item).
- Making attributes PUBLIC, which breaks encapsulation.
- Forgetting SUPER.NEW in a subclass constructor.
- In declarative code, starting constants with a capital letter (so they become variables), or omitting the full stop.
- Giving only the first answer to a goal that has several.

## Exam technique

- **Trace** low-level code in a table with a column for each register or memory location that changes.
- **Write** low-level code using only the instructions given in the question's table.
- **Design** classes: name each class, its attributes (with PRIVATE) and methods, and state the relationships.
- **State the result** of a goal: list every solution in the order the facts are searched.
- **Explain** a paradigm: say what the programmer writes and how the program is organised, as in the comparison table.
