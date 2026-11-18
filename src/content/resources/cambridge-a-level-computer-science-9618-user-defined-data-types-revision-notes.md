---
title: "Cambridge A Level Computer Science (9618): User-defined Data Types -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 13.1: enumerated, pointer, set, record and class types, their pseudocode, choosing a type for a problem, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please check the pseudocode for set definitions, pointer dereferencing and class declarations against the current 9618 pseudocode guide."
---

Condensed notes for 13.1 User-defined data types, A Level content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 3. You need to explain why user-defined types are necessary, define and use the non-composite types (enumerated, pointer) and the composite types (set, record, class/object), and choose and design a suitable type for a problem.

Related: [User-defined Data Types study guide](/resources/cambridge-a-level-computer-science-9618-user-defined-data-types/) · [User-defined Data Types practice questions](/resources/cambridge-a-level-computer-science-9618-user-defined-data-types-practice/) · [Data Representation (A Level) revision notes](/resources/a-level-computer-science-data-representation-a-level-revision-notes/)

## Why define your own types?

- Built-in types cannot describe every kind of data a problem uses.
- A user-defined type **models the problem**, making code clearer.
- It **restricts values**, so invalid data is rejected by the translator.
- It **groups related data** so it can be stored and passed as one unit.
- It is **defined once and reused**, giving consistent handling.

## The five types at a glance

| Type | Composite? | Holds | Pseudocode pattern |
|---|---|---|---|
| Enumerated | Non-composite | One value from an ordered list of named values | TYPE TLight = (Red, Amber, Green) |
| Pointer | Non-composite | The memory address of a value of a stated type | TYPE TIntPointer = ^INTEGER |
| Record | Composite | Named fields of possibly different types | TYPE TBooking ... ENDTYPE with DECLARE lines |
| Set | Composite | Distinct, unordered values of one base type | TYPE TCharSet = SET OF CHAR, then DEFINE Vowels ('a', 'e', 'i', 'o', 'u') : TCharSet |
| Class | Composite | Attributes and the methods that act on them | CLASS ... ENDCLASS |

## Using each type

- **Enumerated**: Signal ← Amber (no quotation marks). Values are ordered, so they can be compared.
- **Pointer**: Ptr ← ^Stock stores Stock's address. Ptr^ is the value at that address; Ptr^ ← 0 changes Stock. Changing Ptr changes only where it points.
- **Record**: Booking.Nights ← 3. An array of records stores a table: Bookings[5].Paid ← TRUE.
- **Set**: membership test, union, intersection, difference. No positions and no duplicates.
- **Class**: objects are created from it; data is usually private and changed through public methods.

## Set operations (example)

With A = {2, 4, 6, 8} and B = {3, 6, 9}:

- Union A ∪ B = {2, 3, 4, 6, 8, 9}
- Intersection A ∩ B = {6}
- Difference A − B = {2, 4, 8}
- 4 is a member of A; 4 is not a member of B.

## Choosing a type

| Clue in the question | Type |
|---|---|
| "One of the following options" | Enumerated |
| "Refers to / links to / address of" | Pointer |
| "Stores the following details about each ..." | Record |
| "Check whether a value is one of ...", "items common to both" | Set |
| "Data and the operations on it", "only changed by ..." | Class |

## Key terms

| Term | Meaning |
|---|---|
| User-defined data type | A type defined by the programmer, built from the built-in types |
| Non-composite type | A type holding a single value, not built from other types |
| Composite type | A type built from other types, holding several values |
| Enumerated type | A type defined by an ordered list of its possible values |
| Pointer type | A type whose variables hold memory addresses |
| Dereference | Access the value stored at the address held in a pointer |
| Set | An unordered collection of distinct values of one type |
| Object | An instance of a class |

## Exam traps

- Enumerated values in quotation marks become strings: write Amber, not "Amber".
- Ptr is an address; Ptr^ is a value. Mixing them is the commonest pointer error.
- Enumerated and pointer are non-composite; record, set and class are composite.
- A set has no order and no duplicates.
- A record definition needs a type for every field and ENDTYPE at the end.
- Justify a choice from the data: "fixed list of options", "fields of different types", "membership test".

## Self-test

1. Give two reasons why user-defined types are necessary.
2. Is a pointer type composite or non-composite?
3. Define an enumerated type TSize with the values Small, Medium and Large.
4. What does ^INTEGER mean in a type definition?
5. Ptr holds the address of Score, which holds 12. What does Ptr^ ← Ptr^ * 3 do?
6. Write a statement that sets the Paid field of the 4th element of the array Bookings to TRUE.
7. With A = {1, 3, 5} and B = {3, 4, 5}, give A ∩ B and A ∪ B.
8. Why is a set unsuitable for storing marks in the order they were entered?
9. Name the composite type that combines data with its own methods.
10. Which type suits a field that holds a suit of cards: Hearts, Clubs, Diamonds or Spades?
11. Why are pointers needed for a linked list in dynamic memory?
12. Why is a booking reference such as "H0047" a STRING field?

**Answers:** 1. Any two: models the problem's data directly; restricts variables to valid values; groups related data into one unit; defined once and reused. 2. Non-composite. 3. TYPE TSize = (Small, Medium, Large) 4. The address of a value of type INTEGER. 5. It changes Score to 36. 6. Bookings[4].Paid ← TRUE 7. A ∩ B = {3, 5}; A ∪ B = {1, 3, 4, 5}. 8. A set has no order and cannot hold duplicate values. 9. A class. 10. An enumerated type. 11. Each node must hold the address of the next node, which may be anywhere in memory. 12. It contains a letter and must keep its leading zeros, and no arithmetic is done on it.
