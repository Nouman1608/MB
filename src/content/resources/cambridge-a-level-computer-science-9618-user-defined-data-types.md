---
title: "Cambridge A Level Computer Science (9618): User-defined Data Types"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13: Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 13.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "user-defined-data-types"
description: "Study guide to 9618 section 13.1: why user-defined types are needed, enumerated and pointer types, sets, records and classes, and designing a type for a problem."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please check the pseudocode for set definitions, pointer dereferencing and class declarations against the current 9618 pseudocode guide."
---

Section 13.1 User-defined data types of Cambridge International AS & A Level Computer Science 9618 asks you to show understanding of why user-defined types are necessary, to define and use non-composite types (including enumerated and pointer), to define and use composite types (including set, record and class/object), and to "choose and design an appropriate user-defined data type for a given problem". It is A Level content, examined in Paper 3.

Related: [User-defined Data Types revision notes](/resources/cambridge-a-level-computer-science-9618-user-defined-data-types-revision-notes/) · [User-defined Data Types practice questions](/resources/cambridge-a-level-computer-science-9618-user-defined-data-types-practice/) · [Data Representation (A Level) study guide](/resources/a-level-computer-science-data-representation-a-level/)

## Why user-defined types are necessary

Built-in types such as INTEGER, REAL, STRING and BOOLEAN describe single, general values. Real problems involve data that does not fit them well: a traffic light that can only be red, amber or green; a customer with a name, an address and a balance; a reference to data stored elsewhere in memory. A **user-defined data type** is one the programmer defines, using the built-in types as building blocks. It is necessary because it:

- models the data of the problem directly, so the program is easier to read and maintain;
- restricts a variable to sensible values, so the translator can reject invalid assignments;
- groups related items so that they can be stored, passed and processed as one unit;
- can be defined once and reused for many variables, so data is handled consistently.

## Non-composite types

A **non-composite** type holds a single value and is not built from other types.

### Enumerated

An enumerated type lists, in order, every value a variable of that type can take.

```
TYPE TLight = (Red, Amber, Green)
DECLARE Signal : TLight
Signal ← Amber
IF Signal = Red THEN
   OUTPUT "Stop"
ENDIF
```

The values are identifiers, not strings, so they are written without quotation marks. Because the list is ordered, the values can be compared (Red comes before Amber) and used to control loops. An enumerated type prevents an invalid value such as "Purple" from being stored, which a STRING could not.

### Pointer

A pointer type holds the **memory address** of a value of a stated type.

```
TYPE TIntPointer = ^INTEGER
DECLARE Stock, Reorder : INTEGER
DECLARE Ptr : TIntPointer
```

^INTEGER in the type definition means "address of an INTEGER". ^Stock gives the address of the variable Stock. Ptr^ **dereferences** the pointer: it means "the value at the address held in Ptr". Pointers are needed for dynamic data structures, such as linked lists and binary trees, where each node holds the address of the next.

## Composite types

A **composite** type is built from other types and holds several values.

### Record

A record groups fields of possibly different types, including other user-defined types.

```
TYPE TBooking
   DECLARE Reference : STRING
   DECLARE GuestName : STRING
   DECLARE Room : TRoom
   DECLARE Nights : INTEGER
   DECLARE Paid : BOOLEAN
ENDTYPE
```

Fields are reached by dot notation, such as ThisBooking.Nights, and an array of records stores a whole table: DECLARE Bookings : ARRAY[1:200] OF TBooking.

### Set

A set is an unordered collection of **distinct** values of one base type. It supports set operations: testing whether a value is a member, union (all items in either set), intersection (items in both), and difference (items in the first but not the second).

```
TYPE TCharSet = SET OF CHAR
DEFINE Vowels ('a', 'e', 'i', 'o', 'u') : TCharSet
```

A set suits data where the only questions asked are "is this value included?" or "what do these collections share?", not "what is in position 3?".

### Class and object

A **class** is a composite type that combines data (attributes) with the operations (methods) that act on that data. An **object** is an instance of a class. The class is the most complete user-defined type, because it groups the data with its own behaviour and can hide the data so that it is changed only through the methods. Object-oriented programming in Topic 20 builds on this.

## Choosing a type for a problem

| The data is... | Choose | Why |
|---|---|---|
| One of a small, fixed list of named options | Enumerated | Only valid values can be stored; meaning is clear |
| A reference to data stored elsewhere, or a link between nodes | Pointer | Holds an address, allowing dynamic structures |
| Several related items of different types about one thing | Record | Fields of mixed types handled as a unit |
| A collection used for membership tests or comparisons between collections | Set | Distinct values with set operations |
| Data that must be changed only by its own operations | Class | Combines attributes and methods; data can be hidden |

## Worked example 1: designing types for a hotel

**Problem.** A hotel system stores each booking: a reference such as "H0047", the guest's name, the type of room (single, double or suite), the number of nights and whether it has been paid. It must also check quickly whether a floor number entered by staff is one of the hotel's floors (1, 2, 3, 5 and 6; there is no floor 4).

**Design**

```
TYPE TRoom = (Single, Double, Suite)

TYPE TBooking
   DECLARE Reference : STRING
   DECLARE GuestName : STRING
   DECLARE Room : TRoom
   DECLARE Nights : INTEGER
   DECLARE Paid : BOOLEAN
ENDTYPE

TYPE TFloorSet = SET OF INTEGER
DEFINE Floors (1, 2, 3, 5, 6) : TFloorSet
```

*Why it scores:* the room type has three fixed options, so an enumerated type stops values such as "Twin" being stored; one booking has items of different types, so a record with suitable field types is right (Reference is a STRING because it contains a letter and leading zeros); the floor check is a membership test on a fixed collection of distinct values, which is what a set provides.

## Worked example 2: tracing a pointer

```
Stock ← 40
Reorder ← 15
Ptr ← ^Stock
Ptr^ ← Ptr^ - 12
Ptr ← ^Reorder
OUTPUT Stock, " ", Ptr^
```

Suppose (for illustration) Stock is at address 2000 and Reorder at address 2001.

| Statement | Stock | Reorder | Ptr |
|---|---|---|---|
| Stock ← 40, Reorder ← 15 | 40 | 15 | |
| Ptr ← ^Stock | 40 | 15 | 2000 |
| Ptr^ ← Ptr^ - 12 | 28 | 15 | 2000 |
| Ptr ← ^Reorder | 28 | 15 | 2001 |

The output is 28 15. The statement Ptr^ ← Ptr^ - 12 changed Stock without naming it, because Ptr held Stock's address. Changing Ptr afterwards altered only where it points, not the value of Stock.

## Common mistakes

- Putting enumerated values in quotation marks, which makes them strings.
- Confusing Ptr (an address) with Ptr^ (the value at that address).
- Calling a pointer or enumerated type composite.
- Treating a set as ordered or as allowing duplicates.
- Choosing a record where only a fixed list of options is needed, or a STRING where an enumerated type would prevent invalid values.
- Forgetting ENDTYPE, or omitting field types in a record definition.

## Exam technique

**Explain why** user-defined types are needed: give a benefit and tie it to the scenario. **Define** a type: write the full pseudocode definition with correct keywords. **Choose and design**: name the type, justify it from the data's features, and write the definition with appropriate field types. **Use** a type: show a declaration and a statement that assigns or reads a value, using dot notation for fields and ^ for pointers correctly.
