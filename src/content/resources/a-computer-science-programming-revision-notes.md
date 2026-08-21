---
title: "A Level Computer Science: Fundamentals of Programming — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on data types, constructs, arrays, subroutines, OOP and testing for AQA A Level Computer Science 7517."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of Programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-programming/).

## Data types

| Type | Holds |
|---|---|
| **Integer** | Whole numbers |
| **Real / float** | Numbers with a fractional part |
| **Boolean** | True / False |
| **Character** | One character |
| **String** | A sequence of characters |
| **Date/time**, **pointer/reference**, **records** | Composite and system types |

**A phone number is a string.** It may lead with zero, is never used in arithmetic, and may contain `+` or spaces.

**Variable** — value can change. **Constant** — fixed at design time, which makes the code readable and confines a change such as a tax rate to one line.

## Constructs and operators

Sequence, selection (`IF`, `CASE`), iteration (`FOR` count-controlled, `WHILE` condition tested **before**, `REPEAT UNTIL` condition tested **after**, so it always runs at least once).

```
DIV  integer division      17 DIV 5 = 3
MOD  remainder             17 MOD 5 = 2
```

`n MOD 2 = 0` tests for even. MOD is also the basis of hashing and of check-digit algorithms.

## Subroutines

**Procedure** returns nothing; **function** returns a value.

- **Parameters** are in the definition; **arguments** are what you pass.
- **By value** — a copy is passed, so the original is unchanged.
- **By reference** — the memory address is passed, so changes affect the original.
- **Local** variables exist only within the subroutine; **global** are visible throughout.

**Prefer local variables and pass by value** where possible, because it prevents unintended side effects — one subroutine changing data another depends on. That reasoning is what the mark scheme wants, not just the definitions.

## Recursion

A subroutine that calls itself. It must have a **base case** that stops the recursion, and each call must move towards it. Without a base case the **call stack** overflows.

```
factorial(n):
    IF n = 0 THEN RETURN 1          <- base case
    ELSE RETURN n * factorial(n-1)  <- general case
```

Recursion is elegant and natural for tree traversal, but uses more memory than iteration because every unfinished call remains on the stack.

## Object-oriented programming

| Concept | Meaning |
|---|---|
| **Class** | A template defining attributes and methods |
| **Object** | An instance of a class |
| **Encapsulation** | Attributes private, accessed through public methods |
| **Inheritance** | A subclass acquires the attributes and methods of its superclass |
| **Polymorphism** | The same method name behaves differently depending on the object |
| **Overriding** | A subclass replaces an inherited method |

**Encapsulation exists to protect data integrity.** Making attributes private and forcing access through get and set methods means validation can be enforced in one place and internal representation can change without breaking other code. Answers that define it without giving that reason lose the explanation mark.

**Composition ("has-a") versus inheritance ("is-a")** — a car *has an* engine; a car *is a* vehicle. Choosing inheritance where composition is meant produces fragile hierarchies.

## Data structures

- **Array** — fixed size, same type, indexed, contiguous.
- **Record** — fields of **different** types, one entity.
- **Stack** — **LIFO**. push, pop, peek. Used for call stacks and undo.
- **Queue** — **FIFO**. enqueue, dequeue. Used for print spooling and scheduling.
- **Linked list** — nodes with pointers; easy insertion and deletion, but no direct indexing.
- **Tree** — hierarchical; a binary search tree gives O(log n) search when balanced.
- **Hash table** — key mapped to index by a hash function; near O(1) lookup, with collisions handled by chaining or probing.

## Testing

| Test data | Purpose |
|---|---|
| **Normal** | Should be accepted |
| **Boundary** | On and just beyond the limits |
| **Erroneous** | Should be rejected |

**Boundary data catches the off-by-one errors that are the most common bug.** For a range of 1–100, test 0, 1, 100 **and** 101 — testing only 1 and 100 is insufficient.

**Errors:** syntax (will not run), logic (runs, wrong output, hardest to find), runtime (fails during execution).

**Testing strategies:** white box (tests the internal logic and all paths), black box (tests inputs against expected outputs without knowledge of the code), alpha, beta, and regression testing after changes.

## Exam traps

- Storing a phone number as an integer.
- Saying WHILE always executes at least once.
- Omitting the base case when explaining recursion.
- Defining encapsulation without explaining that it protects data integrity.
- Confusing a stack with a queue.
- Giving only normal test data.
- Using inheritance where composition is correct.

## Self-test

1. Distinguish passing by value from passing by reference, and say which is safer.
2. What two things must a recursive subroutine have?
3. Why is encapsulation used?
4. Distinguish a stack from a queue, with a use for each.
5. Give boundary test data for a value that must be between 1 and 100.

**Answers:** 1. By value passes a copy so the original is unchanged; by reference passes the memory address so the original can be modified. By value is safer because it avoids unintended side effects. 2. A base case that terminates the recursion, and a general case that moves towards it. 3. To protect data integrity — attributes are private and accessed only through methods, so validation is enforced in one place and the internal representation can change without breaking other code. 4. A stack is LIFO, used for call stacks and undo; a queue is FIFO, used for print spooling and scheduling. 5. 0, 1, 100 and 101.
