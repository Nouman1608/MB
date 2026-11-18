---
title: "AQA A-Level Computer Science (7517): Programming Paradigms"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-programming"
    subtopic: "programming-paradigms-aqa-alevel-cs"
description: "Deeper guide to AQA 7517 section 4.1.2: the structured approach and hierarchy charts, OOP concepts, method types, specifiers and class diagrams."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **4.1.2 Programming paradigms** of AQA A-Level Computer Science (7517). The section has three parts: 4.1.2.1 Programming paradigms, 4.1.2.2 Procedural-oriented programming and 4.1.2.3 Object-oriented programming. The [Fundamentals of Programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-programming/) gives a short introduction; this page follows one invented scenario, a cinema booking system, through both paradigms so that you can see each concept in use and compare them.

Condensed notes are in the [Programming paradigms revision notes](/resources/aqa-a-level-computer-science-7517-programming-paradigms-aqa-alevel-cs-revision-notes/), and exam-style questions with mark schemes are in the [Programming Paradigms practice questions](/resources/aqa-a-level-computer-science-programming-paradigms-practice/).

## What 4.1.2 asks of you

- Understand the characteristics of the **procedural** and **object-oriented** paradigms, with experience of programming in each.
- Understand the **structured approach** to program design; construct and use **hierarchy charts**; explain the advantages of the structured approach.
- Be familiar with **class, object, instantiation, encapsulation, inheritance, aggregation, composition, polymorphism and overriding**.
- Know that a class defines **methods and property/attribute fields**; that objects are created with a **constructor** (implicit or explicit), and a **reference** to the new object is assigned to a variable of the class type; and that in UML **composition** is a **black diamond** line and **aggregation** a **white diamond** line.
- Know **why** the object-oriented paradigm is used, and be aware of three design principles: **encapsulate what varies, favour composition over inheritance, program to interfaces, not implementation**. (AQA states that programming to interfaces will not be explicitly tested in a practical exam.)
- Write object-oriented programs using **abstract, virtual and static methods**, inheritance, aggregation, polymorphism, and **public, private and protected** specifiers.
- Draw and interpret **class diagrams** with single inheritance, composition, aggregation and the specifiers + (public), − (private) and # (protected).

## The procedural paradigm and the structured approach

A procedural program is a sequence of instructions organised into **procedures and functions** that operate on data passed to them. The **structured approach** designs such a program **top-down**: the whole problem is broken into sub-problems, each sub-problem into smaller ones, until each piece is small enough to code as a single subroutine. It uses only the three control structures (sequence, selection, iteration), and each module has a clear interface.

A **hierarchy chart** records that decomposition. Each box is a module; lines join a module to the modules it is broken into. It shows structure, not the order of execution or the conditions under which a module runs.

**Worked example 1: hierarchy chart for the booking system.**

```
                    Cinema booking system
          ┌──────────────┼──────────────────┐
     Show listings   Make booking       Print ticket
      ┌────┴────┐   ┌─────┼──────┐
  Load films  Display  Choose  Calculate  Take
              times    seats   price      payment
```

Reading it: "Make booking" is decomposed into three modules; "Calculate price" is a leaf, so it would be a single subroutine with an interface such as `CalculatePrice(age, seatType) → Real`.

**Advantages of the structured approach** (examiners expect reasons, not just labels):

- each module is small, so it is easier to write, read and **test in isolation**;
- modules with clear interfaces can be **developed by different programmers** at the same time;
- modules can be **reused** in other programs;
- a fault or a change is confined to one module, so the program is **easier to maintain**.

## The object-oriented paradigm

In object-oriented programming the program is a set of **objects** that combine data (attributes) and behaviour (methods), and that interact by calling each other's methods.

**Class and object.** A **class** defines the attributes and methods that capture the common characteristics and behaviours of its objects. An **object** is one instance. **Instantiation** creates an object using the class's **constructor**, and a reference to it is stored in a variable:

```
CLASS Ticket
    PRIVATE seatCode : String
    PROTECTED basePrice : Real
    PUBLIC PROCEDURE New(seat, price)          # explicit constructor
        seatCode ← seat
        basePrice ← price
    ENDPROCEDURE
    PUBLIC FUNCTION GetSeat() : String
        RETURN seatCode
    ENDFUNCTION
    PUBLIC VIRTUAL FUNCTION GetPrice() : Real
        RETURN basePrice
    ENDFUNCTION
    PUBLIC STATIC FUNCTION ValidSeat(code) : Boolean
        RETURN LEN(code) = 3
    ENDFUNCTION
ENDCLASS

t ← NEW Ticket("B07", 9.00)    # t holds a reference to the new object
```

**Encapsulation.** `seatCode` is private, so other classes can reach it only through `GetSeat()`. Data and the methods that act on it are kept together, and the class controls how its data is accessed, so invalid changes can be prevented in one place.

**Inheritance and overriding.**

```
CLASS ChildTicket INHERITS Ticket
    PUBLIC OVERRIDE FUNCTION GetPrice() : Real
        RETURN basePrice * 0.6
    ENDFUNCTION
ENDCLASS
```

`ChildTicket` inherits the attributes and methods of `Ticket` and **overrides** `GetPrice`. It can read `basePrice` because that attribute is **protected**; it could not read the private `seatCode` directly.

**Polymorphism.** One call behaves differently depending on the class of the object:

```
total ← 0
FOR EACH t IN booking.tickets
    total ← total + t.GetPrice()
ENDFOR
```

If the list holds a `Ticket` and a `ChildTicket` at a base price of 9.00, the loop adds 9.00 and 5.40, giving 14.40, without any IF statement testing the type.

**Method types.**

| Method | Meaning | In the example |
|---|---|---|
| Abstract | Declared with no implementation; a subclass must provide one, and the class cannot be instantiated | An abstract `Ticket` could declare `GetPrice()` without a body |
| Virtual | Has an implementation that a subclass may override | `Ticket.GetPrice()` |
| Static | Belongs to the class, not to any object; called without instantiating | `Ticket.ValidSeat("B07")` |

## Aggregation and composition

Both are "has-a" associations; the difference is the **lifetime** of the contained object.

- **Composition** (black diamond): the part is created and destroyed with the whole. A `Screen` is composed of `Seat` objects; delete the screen and its seats no longer exist.
- **Aggregation** (white diamond): the part exists independently. A `Booking` aggregates a `Customer`; cancelling the booking does not delete the customer's account.

The diamond is drawn at the **containing** class end of the line.

## Class diagram for the scenario

```
 ┌────────────────────┐          ┌──────────────────┐
 │ Ticket             │          │ Customer         │
 ├────────────────────┤          ├──────────────────┤
 │ − seatCode: String │          │ − name: String   │
 │ # basePrice: Real  │          └──────────────────┘
 ├────────────────────┤                   │
 │ + New(seat, price) │                   ◇ (white: aggregation)
 │ + GetPrice(): Real │          ┌──────────────────┐
 └────────────────────┘          │ Booking          │
           △ (hollow triangle:   └──────────────────┘
           │  inheritance)
 ┌────────────────────┐          ┌────────┐  ◆────  ┌──────┐
 │ ChildTicket        │          │ Screen │ (black) │ Seat │
 │ + GetPrice(): Real │          └────────┘         └──────┘
 └────────────────────┘
```

When asked to interpret a diagram, name the relationship, the direction (which class inherits from which, which contains which) and what the specifiers mean for access.

## Why use the object-oriented paradigm?

- Classes map naturally onto things in the problem (tickets, screens, customers), which makes the design easier to understand.
- Encapsulation protects data and hides implementation, so a class can change internally without breaking code that uses it.
- Inheritance reuses tested code; polymorphism lets new subclasses (for example `SeniorTicket`) be added without changing the loop that totals a booking.
- Classes can be developed and tested separately and reused in other programs.

## The three design principles

- **Encapsulate what varies.** Pricing rules change often, so they live inside `GetPrice()` methods, not scattered across the program.
- **Favour composition over inheritance.** Rather than creating `ChildTicketWithPopcorn` as a subclass, give a booking a collection of `Extra` objects; inheritance hierarchies become rigid when used for every variation.
- **Program to interfaces, not implementation.** Code that totals a booking relies only on the fact that every ticket has `GetPrice()`, not on how each class calculates it.

## Comparing the paradigms

| | Procedural | Object-oriented |
|---|---|---|
| Building block | Subroutine | Class and object |
| Data | Passed between subroutines; may be global | Held inside objects, accessed through methods |
| Design tool | Hierarchy chart | Class diagram |
| Reuse | Library of subroutines | Inheritance, composition, reusable classes |
| Suits | Smaller tasks with a clear sequence of steps | Large systems modelling many interacting entities |

## Common mistakes

- Treating a hierarchy chart as a flowchart; it shows decomposition, not order or conditions.
- Defining encapsulation only as "making attributes private" without the reason (controlled access, protecting data).
- Swapping the diamonds: black is composition, white is aggregation.
- Saying a protected attribute is accessible everywhere; it is accessible to the class and its subclasses.
- Calling a method "static" because it does not change; static means it belongs to the class.
- Confusing overriding (same method, redefined in a subclass) with polymorphism (the effect of calling it through a general reference).

## Exam technique

- **Explain the advantages**: give a consequence for each feature ("so modules can be tested independently").
- **Draw a class diagram**: three compartments, specifiers on every member, correct arrowhead or diamond, and the diamond at the containing class.
- **Write a class**: declare attributes with specifiers, write the constructor, then the methods; mark overrides clearly.
- **Describe the relationship**: state composition or aggregation and justify with the lifetime of the part.

## Related resources

- [Programming paradigms revision notes](/resources/aqa-a-level-computer-science-7517-programming-paradigms-aqa-alevel-cs-revision-notes/)
- [Programming Paradigms practice questions](/resources/aqa-a-level-computer-science-programming-paradigms-practice/)
- [Programming study guide for section 4.1.1](/resources/aqa-a-level-computer-science-7517-programming-aqa-alevel-cs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.1.2 Programming paradigms. Always check the current specification on the AQA website.*
