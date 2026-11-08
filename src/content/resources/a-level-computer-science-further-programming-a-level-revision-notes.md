---
title: "A Level Computer Science: Further Programming (A Level) — Revision Notes (Cambridge 9618)"
seoTitle: "Cambridge 9618 Further Programming Revision Notes"
resourceType: "revision-notes"
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
description: "Notes on paradigms, addressing modes, OOP terms, facts, rules and goals, serial, sequential and random files and exception handling for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These notes condense Topic 20 Further Programming, A Level content in Cambridge International AS & A Level Computer Science 9618: the low-level, imperative, object-oriented and declarative paradigms, and file processing with exception handling. It is examined in Paper 3, and in Paper 4 Practical (except low-level and declarative programming), where object-oriented code and file handling carry many marks.

Related: [Further Programming (A Level) study guide](/resources/a-level-computer-science-further-programming-a-level/) · [Further Programming (A Level) practice questions](/resources/a-level-computer-science-further-programming-a-level-practice/)

## Syllabus coverage

- **20.1 Programming Paradigms**: what a paradigm is; low-level code with immediate, direct, indirect, indexed and relative addressing; imperative (procedural) code with variables, constructs, procedures and functions; OOP terminology, class design and code; declarative facts, rules and goals.
- **20.2 File Processing and Exception Handling**: open in read, write and append mode and close; read and write records; operations on serial, sequential and random files; what an exception is, why handling matters, when to use it, and code that uses it.

## Paradigms in one table

| Paradigm | Key idea | Example features |
|---|---|---|
| Low-level | Instructions map directly to the processor; works with registers and addresses | Assembly mnemonics, addressing modes, ACC and IX |
| Imperative (procedural) | A sequence of statements that change the program state, grouped into procedures and functions | Variables, assignment, IF, loops, parameters |
| Object-oriented | The program is a set of objects that combine data and methods | Classes, inheritance, encapsulation, polymorphism |
| Declarative | State facts and rules; the system works out how to satisfy a goal | Facts, rules, queries, backtracking |

## Addressing modes (9618 instruction set)

| Mode | Instruction | Effect |
|---|---|---|
| Immediate | `LDM #n` | ACC ← n |
| Direct | `LDD <address>` | ACC ← contents of address |
| Indirect | `LDI <address>` | ACC ← contents of the address stored at <address> |
| Indexed | `LDX <address>` | ACC ← contents of (address + IX) |
| Relative | Operand is an offset from the current instruction's address | Code can run wherever it is loaded in memory |

**Mini trace**: address 50 holds 70, address 70 holds 9, IX = 2, address 52 holds 15.
`LDM #50` → ACC = 50. `LDD 50` → ACC = 70. `LDI 50` → ACC = 9. `LDX 50` → ACC = 15.

## OOP terms

| Term | One-line meaning |
|---|---|
| Class | Blueprint defining attributes and methods |
| Object / instance | One item created from a class with `NEW` |
| Attribute (property) | Data stored in an object |
| Method | Procedure or function of a class |
| Constructor | The method `NEW` that sets up a new object's attributes |
| Encapsulation | Attributes PRIVATE, accessed only via methods |
| Getter / setter | Returns / changes (and can validate) a private attribute |
| Inheritance | Subclass gains the superclass's attributes and methods (`INHERITS`) |
| Polymorphism | Same method name, different behaviour in different classes (overriding) |
| Containment / aggregation | An object holds other objects as attributes ("has-a") |

```
CLASS Vehicle
   PRIVATE Reg : STRING
   PUBLIC PROCEDURE NEW(GivenReg : STRING)
      Reg ← GivenReg
   ENDPROCEDURE
   PUBLIC FUNCTION GetReg() RETURNS STRING
      RETURN Reg
   ENDFUNCTION
   PUBLIC FUNCTION Toll() RETURNS REAL
      RETURN 3.00
   ENDFUNCTION
ENDCLASS

CLASS Lorry INHERITS Vehicle
   PRIVATE Axles : INTEGER
   PUBLIC PROCEDURE NEW(GivenReg : STRING, GivenAxles : INTEGER)
      SUPER.NEW(GivenReg)
      Axles ← GivenAxles
   ENDPROCEDURE
   PUBLIC FUNCTION Toll() RETURNS REAL
      RETURN 3.00 * Axles
   ENDFUNCTION
ENDCLASS

Truck ← NEW Lorry("KX21 ABC", 4)
OUTPUT Truck.Toll()      // 12.00: Lorry overrides Toll (polymorphism)
```

Use the same name for an attribute, its getter and its setter (e.g. Reg, GetReg, SetReg), as the 9618 examiner reports from June 2024 to June 2025 advise.

## Declarative: facts, rules, goals

```
01 parent(rana, omar).
02 parent(omar, lina).
03 parent(omar, sami).
04 grandparent(X, Y) IF parent(X, Z) AND parent(Z, Y).
05 sibling(A, B) IF parent(P, A) AND parent(P, B) AND A <> B.
```

| Goal | Result |
|---|---|
| `parent(omar, C).` | C = lina, C = sami |
| `grandparent(rana, G).` | G = lina, G = sami |
| `sibling(lina, S).` | S = sami |

Constants start lower case; variables start upper case. The system matches facts in order and backtracks to find every solution.

## File processing summary

| File type | Add a record | Find a record |
|---|---|---|
| Serial | Open in APPEND mode; write at the end | Read from the start until found or end of file |
| Sequential | Copy the old file to a new one in key order, writing the new record in its place | Read in order; stop when found or when a key greater than the target is passed |
| Random | Hash the key, SEEK the address, PUTRECORD | Hash the key, SEEK the address, GETRECORD (follow the collision method if the key does not match) |

Pseudocode keywords (9618 guide): `OPENFILE ... FOR READ / WRITE / APPEND / RANDOM`, `READFILE`, `WRITEFILE`, `EOF(<file>)`, `SEEK`, `GETRECORD`, `PUTRECORD`, `CLOSEFILE`.

## Exceptions

- **Exception**: an unexpected event at run time that would make the program stop, e.g. file not found, end of file reached unexpectedly, division by zero, invalid type conversion.
- **Why handle them**: the program does not crash; the user gets a meaningful message; the program can recover (ask again, use a default) and close files so data is not lost.
- **When appropriate**: around code that can fail for reasons outside the program's control: file access, user input, network or device operations.
- **Code**: the risky statements go in a `try` block; each `except` (Python) or `catch` (Java, VB) block handles one kind of exception.

## Worked example: inserting into a sequential text file

Each line of Members.txt is a member ID in ascending order. Insert NewID.

```
DECLARE ThisID : STRING
DECLARE Inserted : BOOLEAN
Inserted ← FALSE
OPENFILE "Members.txt" FOR READ
OPENFILE "NewMembers.txt" FOR WRITE
WHILE NOT EOF("Members.txt")
   READFILE "Members.txt", ThisID
   IF Inserted = FALSE AND ThisID > NewID THEN
      WRITEFILE "NewMembers.txt", NewID
      Inserted ← TRUE
   ENDIF
   WRITEFILE "NewMembers.txt", ThisID
ENDWHILE
IF Inserted = FALSE THEN
   WRITEFILE "NewMembers.txt", NewID
ENDIF
CLOSEFILE "Members.txt"
CLOSEFILE "NewMembers.txt"
```

The final IF puts the new ID at the end if it is larger than every existing one.

## Common mistakes and exam traps

- Keeping data in arrays instead of instantiating and storing objects (November 2024, June 2025).
- Not calling `SUPER.NEW` in a subclass constructor; making attributes public; using inheritance when it is not asked for (June 2024 to June 2025).
- Reading PRIVATE as "data privacy" (November 2024).
- Swapping direct and indirect addressing.
- Writing variables in declarative code in lower case, so they are treated as constants.
- Opening a file in WRITE mode when records must be added (data lost); not closing a file before reopening it.

## Frequently asked questions

**Is a getter the same as a function?**
A getter is a method, normally a function, whose only job is to return the value of a private attribute.

**Why must a sequential file be copied to insert a record?**
Records are stored in key order with no gaps, so a new record can only be placed in order by writing a new version of the file.

**Does the 9618 pseudocode guide define TRY and EXCEPT?**
No. Exception handling is written in your Paper 4 language (Python, Java or Visual Basic). In Paper 3, describe the try and catch structure in words or use the syntax a question gives.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 20 Further Programming (20.1 and 20.2), with syntax from the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
