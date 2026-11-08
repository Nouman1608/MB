---
title: "A Level Computer Science: Further Programming (A Level) (Cambridge 9618)"
seoTitle: "Cambridge 9618 Further Programming Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Further Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 20
syllabusTopics:
  - qualification: "a-level"
    topic: "further-programming"
  - qualification: "a-level"
    topic: "further-programming"
    subtopic: "programming-paradigms"
  - qualification: "a-level"
    topic: "further-programming"
    subtopic: "file-processing-and-exception-handling"
description: "Guide to low-level, procedural, object-oriented and declarative paradigms, serial, sequential and random file processing and exceptions for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 20 Further Programming covers four programming paradigms (low-level, imperative, object-oriented and declarative) and two practical skills: processing serial, sequential and random files, and handling exceptions. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 3 and, apart from low-level and declarative programming, in program code in Paper 4 Practical.

Related: [Further Programming (A Level) revision notes](/resources/a-level-computer-science-further-programming-a-level-revision-notes/) · [Further Programming (A Level) practice questions](/resources/a-level-computer-science-further-programming-a-level-practice/) · [AS Programming study guide](/resources/cambridge-a-level-computer-science-programming-study-guide/)

## Where this fits in 9618

Topic 20 builds on AS Topic 11 (structured programming) and Topic 4 (assembly language), and on Topic 13 (user-defined types and file organisation). Paper 3 (1 hour 30 minutes, 75 marks) tests understanding and short code in pseudocode. Paper 4 (2 hours 30 minutes, 75 marks) assesses sections 19 and 20 in Java, Visual Basic or Python, except for low-level and declarative programming.

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 20.1 | Understand what is meant by a programming paradigm |
| 20.1 | Low-level programming: understand and write low-level code using immediate, direct, indirect, indexed and relative addressing |
| 20.1 | Imperative (procedural) programming: assumed knowledge of structured programming (AS 11.3); write code using variables, constructs, procedures and functions |
| 20.1 | Object-oriented programming: the terminology (objects, properties/attributes, methods, classes, inheritance, polymorphism, containment (aggregation), encapsulation, getters, setters, instances); design classes to solve a problem; write OOP code |
| 20.1 | Declarative programming: solve a problem by writing facts and rules from supplied information; write code that satisfies a goal using facts and rules |
| 20.2 | Write code to open a file in read, write or append mode and close it; read and write a record; perform file-processing operations on serial, sequential and random files |
| 20.2 | Show understanding of an exception and the importance of exception handling; know when it is appropriate; write code that uses exception handling |

## What is a programming paradigm?

A **paradigm** is a style or approach to programming, with its own way of structuring a solution and its own features. A language may support more than one paradigm.

## Low-level programming

Low-level code works directly with the processor's instructions and memory addresses. The 9618 instruction set (from Topic 4) has one general-purpose register, the accumulator (ACC), and an index register (IX). The addressing modes are:

| Mode | Operand means | Example |
|---|---|---|
| Immediate | The value itself | `LDM #25` loads 25 into ACC |
| Direct | The address holding the value | `LDD 200` loads the contents of address 200 |
| Indirect | The address of an address that holds the value | `LDI 300` uses the address stored in 300 |
| Indexed | A base address plus the contents of IX | `LDX 400` loads from address 400 + IX |
| Relative | An address given as an offset from the current instruction's address | Used for jumps within a block of code that can be loaded anywhere in memory |

### Worked example: summing a list with indexed addressing

```
        LDR #0          // IX ← 0
LOOP:   LDX NUMS        // ACC ← contents of (NUMS + IX)
        ADD TOTAL       // ACC ← ACC + contents of TOTAL
        STO TOTAL       // save the running total
        INC IX          // move to the next number
        LDD COUNT
        DEC ACC         // one fewer number left
        STO COUNT
        CMP #0
        JPN LOOP        // jump if COUNT is not 0
        LDD TOTAL
        END
NUMS:   5
        8
        2
        7
TOTAL:  0
COUNT:  4
```

Each pass loads the next number using indexed addressing, adds it to TOTAL and counts down. After four passes COUNT is 0, the jump is not taken, and ACC holds 5 + 8 + 2 + 7 = 22.

## Imperative (procedural) programming

A program is a sequence of statements that change the program's state (the values of variables), using sequence, selection and iteration, and structured into **procedures and functions** with parameters. Most Paper 2 pseudocode is imperative. Its strengths are a clear order of execution and easy decomposition into modules; its weakness for large systems is that data and the code that changes it are kept apart, which object-oriented programming addresses.

## Object-oriented programming

| Term | Meaning |
|---|---|
| Class | A template that defines the attributes and methods of a type of object |
| Object / instance | A single item created from a class, with its own attribute values |
| Attribute / property | Data held by an object |
| Method | A procedure or function defined in a class that acts on its objects |
| Encapsulation | Keeping an object's attributes PRIVATE and accessing them only through its methods |
| Getter / setter | A method that returns an attribute's value / that changes it (and can validate the new value) |
| Inheritance | A subclass takes on the attributes and methods of its superclass and can add its own |
| Polymorphism | A method with the same name behaves differently in different classes, because a subclass overrides it |
| Containment (aggregation) | A class has an attribute that is an object (or a collection of objects) of another class: a "has-a" relationship |

In Cambridge pseudocode:

```
CLASS Account
   PRIVATE Owner : STRING
   PRIVATE Balance : REAL
   PUBLIC PROCEDURE NEW(GivenOwner : STRING)
      Owner ← GivenOwner
      Balance ← 0.0
   ENDPROCEDURE
   PUBLIC FUNCTION GetBalance() RETURNS REAL
      RETURN Balance
   ENDFUNCTION
   PUBLIC PROCEDURE Deposit(Amount : REAL)
      IF Amount > 0 THEN
         Balance ← Balance + Amount
      ENDIF
   ENDPROCEDURE
ENDCLASS

CLASS SavingsAccount INHERITS Account
   PRIVATE Rate : REAL
   PUBLIC PROCEDURE NEW(GivenOwner : STRING, GivenRate : REAL)
      SUPER.NEW(GivenOwner)
      Rate ← GivenRate
   ENDPROCEDURE
ENDCLASS

MyAccount ← NEW SavingsAccount("Farah", 0.03)
MyAccount.Deposit(250.00)
OUTPUT MyAccount.GetBalance()
```

The subclass constructor calls the parent constructor with `SUPER.NEW`. Deposit is a setter-style method that validates the amount, which is the benefit of encapsulation: Balance cannot be set to a nonsense value from outside. A Bank class holding an array of Account objects would be **containment**. If SavingsAccount defined its own `Deposit` that added a bonus, calling `Deposit` on a savings account would run that version: **polymorphism**.

**Designing classes**: identify the nouns in the problem (each may be a class or an attribute), the actions (methods), which data must be protected (private attributes with getters and setters), and the "is-a" (inheritance) and "has-a" (containment) relationships.

## Declarative programming

A declarative program states **what** is true (facts and rules) and asks **goals** (queries); the language's inference engine searches the facts and rules to satisfy the goal, rather than the programmer giving the steps. Cambridge papers use a Prolog-like notation.

```
01 flight(cairo, doha).
02 flight(doha, manila).
03 flight(doha, nairobi).
04 flight(lima, cairo).
05 connects(X, Y) IF flight(X, Z) AND flight(Z, Y).
```

- Facts 01 to 04 state single flights. Lower-case words are constants; capitalised words (X, Y, Z) are variables.
- The goal `flight(doha, D).` returns D = manila, D = nairobi.
- The goal `connects(cairo, Y).` matches Z = doha, so Y = manila, Y = nairobi (one change of plane).
- The goal `connects(lima, doha).` succeeds with Z = cairo.

## 20.2 File processing

### Opening, closing, reading and writing

Files are opened in **read**, **write** (create a new file, replacing any old data) or **append** (add to the end) mode, and closed when finished. A record can be written as one line of fields, or, for a random file, as one fixed-length record.

### Serial, sequential and random files

- **Serial**: add a record by opening the file in append mode and writing it at the end. Search by reading from the start until found or end of file.
- **Sequential**: records are in key order, so adding a record means copying to a new file: read each old record, write it to the new file, and write the new record when its key position is reached; then copy the rest. Deleting works the same way, without copying the record to be removed.
- **Random**: calculate the address from the key with a hashing algorithm, move to that position, and read or write the record directly.

```
TYPE RoomRecord
   DECLARE RoomNumber : INTEGER
   DECLARE Booked : BOOLEAN
ENDTYPE

DECLARE Room : RoomRecord
DECLARE Address : INTEGER
Address ← RoomNumber MOD 200
OPENFILE "Rooms.dat" FOR RANDOM
SEEK "Rooms.dat", Address
GETRECORD "Rooms.dat", Room
Room.Booked ← TRUE
SEEK "Rooms.dat", Address
PUTRECORD "Rooms.dat", Room
CLOSEFILE "Rooms.dat"
```

## Exception handling

An **exception** is an unexpected event that happens at run time and would stop the program, such as opening a file that does not exist, reading past the end of a file, dividing by zero, or converting non-numeric input to a number. **Exception handling** catches the exception and runs code to deal with it, so the program can report a helpful message, recover (for example, ask for another file name) or close files cleanly, instead of crashing and possibly losing data.

It is appropriate wherever an operation can fail for reasons outside the program's control: file and network operations, user input conversion, and operations on data from outside the program. In Python (one of the Paper 4 languages):

```python
try:
    file = open(filename, "r")
    first = int(file.readline())
    file.close()
except FileNotFoundError:
    print("That file does not exist")
except ValueError:
    print("The file does not start with a whole number")
```

Java and Visual Basic use `try ... catch` blocks in the same way.

## Common mistakes

- Storing data in plain arrays in Paper 4 instead of creating and storing objects (November 2024, June 2025).
- Not calling the parent constructor in a subclass, or making attributes public when they should be private (examiner reports June 2024 to June 2025).
- Reading PRIVATE as "data privacy" rather than access control (November 2024).
- Using inheritance where containment is needed (June 2024).
- Forgetting to close a file before reopening it in another mode.

## Frequently asked questions

**What is the difference between inheritance and containment?**
Inheritance is an "is-a" relationship: a SavingsAccount is an Account. Containment is "has-a": a Bank has many Account objects as one of its attributes.

**Why use getters and setters?**
They keep attributes private (encapsulation), so the class controls how its data is read and changed, and a setter can validate a new value before storing it.

**Is low-level programming tested in Paper 4?**
No. The syllabus excludes low-level and declarative programming from Paper 4; they are tested in Paper 3.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 20 Further Programming (20.1 and 20.2); syntax from the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
