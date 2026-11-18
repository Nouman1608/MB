---
title: "Cambridge A Level Computer Science (9618): Programming Paradigms -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 9618 notes on the four paradigms: addressing modes, imperative features, OOP terms and class design, and declarative facts, rules and goals."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 20.1 "Programming Paradigms" of Cambridge International AS & A Level Computer Science 9618: what a paradigm is, low-level code with immediate, direct, indirect, indexed and relative addressing, imperative (procedural) programming, object-oriented programming and class design, and declarative facts, rules and goals. Paper 3 assesses all four; Paper 4 assesses imperative and object-oriented code only.

Related: [Programming paradigms study guide](/resources/cambridge-a-level-computer-science-9618-programming-paradigms/) · [Programming paradigms practice questions](/resources/cambridge-a-level-computer-science-9618-programming-paradigms-practice/) · [Topic 20 Further Programming revision notes](/resources/a-level-computer-science-further-programming-a-level-revision-notes/)

## Paradigm in one line each

- **Paradigm**: a style of programming, with its own way of structuring a solution and its own language features.
- **Low-level**: individual processor instructions working on registers and memory addresses.
- **Imperative**: a sequence of statements that change variables, organised into procedures and functions.
- **Object-oriented**: classes bundle data and methods; programs are built from interacting objects.
- **Declarative**: facts and rules state what is true; goals are answered by the language's search.

## Addressing modes

| Mode | Operand is | Example | Typical use |
|---|---|---|---|
| Immediate | The value itself | LDM #25 | Constants |
| Direct | Address of the value | LDD 200 | Named variables |
| Indirect | Address holding the address of the value | LDI 200 | Following a pointer |
| Indexed | Base address + contents of IX | LDX 200 | Stepping through an array |
| Relative | Offset from the current instruction's address | "5 locations on" | Code that can be loaded anywhere |

**Memory check**: with 200 → 350, 202 → 3, 350 → 42 and IX = 2: LDM #200 gives 200; LDD 200 gives 350; LDI 200 gives 42; LDX 200 gives 3.

## Low-level instruction groups to remember

- **Load/store**: LDM, LDD, LDI, LDX, LDR (load IX), MOV IX (copy ACC to IX), STO.
- **Arithmetic**: ADD, SUB (address or #n), INC and DEC (ACC or IX).
- **Compare and jump**: CMP (address or #n), CMI (indirect), JPE (jump if equal), JPN (jump if not equal), JMP.
- **I/O**: IN (character's ASCII code into ACC), OUT (character in ACC to screen), END.

**Loop patterns**: count down a variable to 0 with DEC ACC, CMP #0, JPN LOOP; or stop at a sentinel value with CMP #0, JPE DONE.

## Imperative (procedural) features

Variables and constants · assignment · sequence, selection, iteration · procedures and functions · parameters by value and by reference · local and global variables. **Strength**: clear step-by-step control. **Weakness in large systems**: data is separate from the code that changes it.

## OOP terms

| Term | Meaning |
|---|---|
| Class | Template defining attributes and methods |
| Object / instance | One item created from a class |
| Attribute / property | Data held by an object |
| Method | Procedure or function belonging to a class |
| Encapsulation | Attributes PRIVATE, accessed only through methods |
| Getter / setter | Method returning / changing an attribute (setter can validate) |
| Constructor | Method that creates and initialises an object (NEW) |
| Inheritance | Subclass gains the superclass's attributes and methods ("is a kind of") |
| Polymorphism | Same method name, different behaviour in different classes (overriding) |
| Containment (aggregation) | A class has objects of another class as attributes ("has a") |

**Class design steps**: nouns → classes/attributes; verbs → methods; protect data → PRIVATE + getters/setters; "is a kind of" → inheritance; "has" → containment; same action done differently → polymorphism.

**Subclass constructor**: call SUPER.NEW(...) first, then set the new attributes.

## Declarative notation

- Constants start with lower case; variables start with a capital letter.
- Fact: `teaches(osei, drama).`
- Rule: `taughtby(S, T) IF attends(S, C) AND teaches(T, C).`
- Goal: `taughtby(tom, T).` The system searches facts in order and returns every match.
- One rule per alternative: two rules with the same head both give answers.

**Writing from supplied information**: one fact per statement; choose a predicate name and keep argument order consistent throughout.

## Matching a paradigm to a task

| Task | Suitable paradigm | Reason |
|---|---|---|
| Controlling a device register bit by bit | Low-level | Direct access to memory addresses and registers |
| A short calculation script | Imperative | Clear step-by-step method |
| A large system with many kinds of related item | Object-oriented | Encapsulation, inheritance and reuse |
| Answering questions from a set of known relationships | Declarative | Facts and rules queried with goals |

## Exam traps

- Indirect and direct addressing swapped.
- LDX described as loading IX (that is LDR).
- STO used with # (STO needs an address).
- A "greater than" jump used: the set has only JPE and JPN.
- Inheritance used for a "has" relationship.
- PUBLIC attributes when the question asks for encapsulation.
- Declarative constant written with a capital letter, or a missing full stop.
- Only the first solution given when a goal has several.

## Self-test

1. What is a programming paradigm?
2. Memory: 60 → 90, 61 → 14, 90 → 33; IX = 1. What is in ACC after LDI 60?
3. With the same memory, what is in ACC after LDX 60?
4. Give one benefit of relative addressing.
5. Which instruction copies ACC into IX?
6. Name two features of imperative programming.
7. Define encapsulation.
8. A Lorry is a kind of Vehicle. Which OOP relationship is this?
9. A Garage holds many Vehicle objects. Which relationship is this?
10. What is polymorphism?
11. Write a fact stating that Ana plays the violin.
12. Facts: parent(sam, ali). parent(ali, zoe). Rule: grandparent(X, Z) IF parent(X, Y) AND parent(Y, Z). What does grandparent(sam, G) return?

### Answers

1. A style of programming, with its own approach to structuring solutions and its own language features.
2. 33 (address 60 holds 90; address 90 holds 33).
3. 14 (address 60 + 1 = 61).
4. The code can be loaded and run anywhere in memory, as no absolute addresses are fixed.
5. MOV IX.
6. Any two: variables changed by assignment; sequence, selection and iteration; procedures and functions; parameters.
7. Keeping an object's attributes private so they can be accessed only through its methods.
8. Inheritance.
9. Containment (aggregation).
10. A method with the same name behaves differently depending on the class of the object, because subclasses override it.
11. `plays(ana, violin).`
12. G = zoe.
