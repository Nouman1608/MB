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
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--08-fp-addressing-modes.webp" width="900" height="920" alt="Four rows. Immediate, LDM #25: the operand is the value, so ACC becomes 25. Direct, LDD 200: the operand is an address; address 200 holds 7 so ACC becomes 7. Indirect, LDI 300: address 300 holds 500, which is the address of the value; address 500 holds 9 so ACC becomes 9. Indexed, LDX 400 with IX equal to 2: the address is 400 plus 2 which is 402, holding 6, so ACC becomes 6. Relative addressing gives an offset from the current instruction and is used for jumps. Memory contents are illustrative." loading="lazy">
  <figcaption>Immediate, direct, indirect and indexed addressing show what the operand means.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--09-fp-indexed-sum-trace.webp" width="900" height="900" alt="The list NUMS holds 5, 8, 2 and 7. On each of four passes the index register IX selects the next number, which is added to TOTAL: TOTAL becomes 5, 13, 15 and then 22 while COUNT counts down 3, 2, 1, 0. When COUNT is 0 the jump is not taken and ACC holds 22. The trace was produced by running the lesson program in code." loading="lazy">
  <figcaption>Four passes of the indexed loop add 5, 8, 2 and 7 to give 22.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--10-fp-oop-classes.webp" width="900" height="890" alt="Account has private attributes Owner and Balance and public methods NEW, GetBalance and Deposit. SavingsAccount inherits from Account (an is-a relationship, hollow triangle arrow) and adds a private Rate. A Bank holds an array of Account objects (a has-a relationship, diamond end). MyAccount is an instance of SavingsAccount for Farah with rate 0.03 and balance 250.00 after depositing 250.00." loading="lazy">
  <figcaption>Account, SavingsAccount (is-a), Bank (has-a) and an instance of SavingsAccount.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--11-fp-encapsulation.webp" width="900" height="720" alt="Outside code can call Deposit on the Account object. Deposit 250.00 passes the check Amount greater than 0 and the private Balance becomes 250.00. Deposit minus 50.00 fails the check and is rejected, so Balance stays 250.00. Trying to set Balance directly from outside is blocked because Balance is PRIVATE. The behaviour was run in code." loading="lazy">
  <figcaption>A private Balance can only change through Deposit, which rejects a non-positive amount.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--12-fp-declarative-facts-rules.webp" width="900" height="990" alt="Four flight facts: cairo to doha, doha to manila, doha to nairobi and lima to cairo. The rule connects(X, Y) holds if flight(X, Z) and flight(Z, Y). Goal flight(doha, D) gives manila and nairobi. Goal connects(cairo, Y) matches Z equal to doha and gives manila and nairobi. Goal connects(lima, doha) succeeds with Z equal to cairo. Answers were computed in code." loading="lazy">
  <figcaption>Four flight facts and one rule answer three goals.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--13-fp-file-types.webp" width="900" height="1010" alt="Three lanes. Serial: a new record R4 is appended after R1 to R3. Sequential: records 10, 20, 40, 50 are copied to a new file and the new record 30 is written at its key position, giving 10, 20, 30, 40, 50. Random: the address is calculated from the key, for example room 412 MOD 200 equals 12, then the program seeks to address 12 and reads or writes the record directly. Key values are illustrative." loading="lazy">
  <figcaption>Serial files append, sequential files are copied with the new record in order, random files use an address from the key.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-further-programming-a-level--14-fp-exception-handling.webp" width="900" height="780" alt="A try block opens a file, reads its first line as an integer and closes the file. If opening fails with FileNotFoundError the except branch prints that the file does not exist. If the first line is not a whole number a ValueError branch handles it. If every step works the program carries on. Without exception handling the program would crash. The three cases were checked in code." loading="lazy">
  <figcaption>Each failing step jumps to the matching except branch instead of crashing.</figcaption>
</figure>


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
