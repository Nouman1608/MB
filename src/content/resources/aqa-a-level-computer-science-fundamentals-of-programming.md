---
title: "AQA A-Level Computer Science: Fundamentals of Programming (7517)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-programming"
description: "Core programming concepts and data types, plus procedural-oriented programming -- the full content of Topic 1 for AQA A-Level Computer Science (7517)."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Fundamentals of programming**, the first
of 13 named subject-content sections in AQA A-level Computer Science
(7517), first teaching September 2015. (The non-exam-assessment
practical project is a coursework component, not part of the
subject-content sections numbered here.)

## Where this fits in 7517

Fundamentals of programming establishes the core programming
vocabulary and techniques -- data types, control structures,
subroutines -- that every later topic assumes, from data structures
and algorithms through to the practical project itself.

## Syllabus coverage

**AQA A-LEVEL COMPUTER SCIENCE (7517) — TOPIC 1 FUNDAMENTALS OF
PROGRAMMING**

- 4.1.1 Programming — data types (integer, real/float, Boolean,
character, string, date/time, records, arrays) and user-defined data
types; programming concepts including variable and constant
declaration, assignment, definite and indefinite iteration, and
selection; arithmetic, relational, Boolean and string-handling
operations; random number generation; exception handling; subroutines,
including parameters, return values, local and global variables and
the role of a stack frame in storing a subroutine call's return
address, parameters and local variables; and recursive techniques
- 4.1.2 Programming paradigms — paradigms in general; the structured,
procedural-oriented approach to program design and construction,
constructing and using hierarchy charts to plan a program's structure,
and explaining the advantages of the structured approach over
unstructured code; and object-oriented programming, requiring students
to write object-oriented programs using classes, objects,
instantiation, encapsulation, inheritance, aggregation, composition,
polymorphism and overriding, including abstract, virtual and static
methods and public, private and protected access specifiers

## How to approach it

Data types and programming concepts (4.1.1) is the largest and most
foundational sub-topic in the whole specification -- fluency here,
particularly with the three combining principles of sequence,
iteration and selection, is assumed without re-explanation in every
later topic on data structures, algorithms and computer organisation.
Practise writing and tracing short programs by hand that combine
these constructs, rather than only reading about them, since the exam
tests the ability to read, write and debug pseudocode and program
code directly. Local versus global variables and how subroutines pass
and return values are common sources of confusion -- be precise about
scope, since exam questions frequently test whether a variable's value
is accessible or changed correctly across a subroutine call, and be
able to explain how a stack frame stores a call's return address,
parameters and local variables. Programming paradigms (4.1.2) opens
with the structured, procedural-oriented approach -- be able to
construct a hierarchy chart for a given problem and explain, in your
own words, why breaking a program into structured, hierarchical
components makes it easier to design, test and maintain than a single
unstructured block of code -- and then moves to object-oriented
programming, which is where A-level candidates most often under-revise:
you are expected to be able to **write** object-oriented programs, not
just define the vocabulary, so practise declaring a class with
attributes and methods, instantiating an object from it, and using
inheritance to extend a base class, rather than only memorising the
term list.

## Official syllabus

AQA A-level Computer Science (7517) specification, first teaching
September 2015 —
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).

## Data types and variables

Every value has a type, and choosing correctly affects both memory and correctness.

| Type | Holds | Note |
|---|---|---|
| Integer | Whole numbers | Exact; use for counters and indices |
| Real / float | Numbers with fractional parts | Subject to rounding error |
| Boolean | True or False | One bit conceptually |
| Character | A single character | |
| String | A sequence of characters | "5" is not the same as 5 |
| Date/time, pointer, record | Composite and reference types | |

A **variable** may change during execution; a **constant** may not. Using constants for fixed values — tax rates, array bounds — makes a program easier to maintain and prevents accidental modification.

**Scope** matters: a local variable exists only within its subroutine, a global variable throughout the program. Globals are convenient but create hidden dependencies, which is why they are discouraged.

**Random number generation** is also part of this sub-topic: most languages provide a function that returns a pseudo-random number, often within a stated range, which programs use for tasks such as simulations, games and test-data generation.

## The three programming constructs

All procedural code is built from **sequence**, **selection** (IF, ELSE IF, CASE/SWITCH) and **iteration**.

Iteration divides into **definite** (FOR — the number of repetitions is known) and **indefinite** (WHILE, REPEAT UNTIL — controlled by a condition). The distinction between WHILE and REPEAT UNTIL is that WHILE tests before the first pass, so its body may execute zero times, whereas REPEAT UNTIL tests after, so it always executes at least once.

## Subroutines and parameters

A **procedure** performs a task; a **function** returns a value. Both allow decomposition, reuse and independent testing.

**Parameters passed by value** send a copy, so changes inside do not affect the original. **Passed by reference** sends the memory address, so changes do affect it. Confusing these is a frequent source of both exam errors and real bugs.

**Recursion** — a subroutine calling itself — requires a base case that terminates it and a general case that moves towards the base case. Each call uses stack space, so deep recursion risks stack overflow; an iterative solution is often more efficient but less elegant.

**Stack frames.** Every subroutine call pushes a new stack frame onto the call stack, which stores the **return address** (where execution resumes once the call finishes), the subroutine's **parameters**, and its **local variables**. When the subroutine ends, its frame is popped and control returns to the stored address. This is why recursion is expensive in memory — each nested call keeps its own frame on the stack until it returns — and why a missing base case causes a **stack overflow**: frames keep being pushed with nothing ever popping them off.

## Object-oriented programming

Alongside the procedural, structured approach, this specification requires you to be able to **write object-oriented programs**, not just define the terms.

A **class** is a template that defines the attributes (data) and methods (behaviour) an object of that type will have; an **object** is a specific instance created from a class, a process called **instantiation**. **Encapsulation** bundles an object's data with the methods that operate on it and restricts direct access to that data from outside the class, usually via **public**, **private** and **protected** access specifiers — private members are accessible only within the class itself, protected members within the class and its subclasses, and public members from anywhere.

**Inheritance** lets one class (a subclass) derive from another (a superclass), gaining its attributes and methods while adding or overriding its own — **overriding** replaces an inherited method with a new implementation in the subclass. **Aggregation** and **composition** both model a "has-a" relationship between objects (e.g. a car has an engine), differing in ownership and lifetime: in composition the contained object cannot meaningfully exist independently of its container and is destroyed with it, while in aggregation the contained object can exist and be shared independently. **Polymorphism** allows objects of different classes to be treated through a common interface, with each responding to the same method call in its own way — for example, an **abstract method** declares a method's signature without an implementation, requiring each subclass to provide its own; a **virtual method** provides a default implementation that a subclass may override; and a **static method** belongs to the class itself rather than to any one instance.

## Data structures and file handling

Arrays store fixed-size collections of one type, indexed from 0 or 1 depending on the language. Records group fields of different types. Beyond these sit lists, stacks, queues and dictionaries.

File handling follows a fixed pattern: open, read or write, then **close** — and failing to close a file is a standard mark deduction.

## Worked example

Trace this and state the output.

```
total = 0
count = 1
WHILE count <= 4
    total = total + (count * count)
    count = count + 1
ENDWHILE
OUTPUT total
```

| count | count*count | total |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 4 | 5 |
| 3 | 9 | 14 |
| 4 | 16 | 30 |

The loop then tests count = 5, which fails, so output is **30** — the sum of the first four square numbers.

## Common mistakes

Using a FOR loop where the number of repetitions is not known in advance. Assuming REPEAT UNTIL may execute zero times. Confusing pass by value with pass by reference. Writing recursion with no base case, producing infinite recursion. Off-by-one errors from array indexing. Comparing a string to an integer without casting. Forgetting to close a file. Describing a stack frame as storing only the return address and forgetting the parameters and local variables it also holds. Confusing aggregation with composition, or describing polymorphism without naming a concrete mechanism such as an overridden or abstract method.

## Quick revision checklist

- Select appropriate data types and explain the difference between variables and constants.
- Explain local and global scope and why globals are discouraged, and know how to use random number generation in a program.
- Use sequence, selection and both forms of iteration, choosing correctly between WHILE and REPEAT UNTIL.
- Distinguish procedures from functions, and pass by value from pass by reference.
- Write recursive routines with a valid base case, and explain what a stack frame stores and why deep recursion risks a stack overflow.
- Define class, object, instantiation, encapsulation, inheritance, aggregation, composition, polymorphism and overriding precisely, and practise writing a short object-oriented program (a class with attributes and methods, instantiated and used) rather than only reciting the vocabulary.
- Complete a trace table accurately, row by row.
