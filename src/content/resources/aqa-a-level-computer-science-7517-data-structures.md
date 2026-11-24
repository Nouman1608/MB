---
title: "AQA A-Level Computer Science (7517): Data Structures"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.11
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "data-structures-7517"
description: "Deeper guide to AQA 7517 section 4.2.1.1: what a data structure is, how structures differ, and how to choose and justify one for a practical problem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.1.1 Data structures** in AQA A-Level Computer Science (7517). The specification's requirement is short: be familiar with the concept of data structures. Its guidance suggests setting the concept in contexts you already know and showing how structures are used in practical settings. That is exactly how exam questions use it: a scenario, then "identify a suitable data structure and justify your choice".

The [Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/) introduces the definition alongside arrays. This page goes further: it separates data structures from data types and abstract data types, gives you a set of properties for comparing structures, and works through choosing structures for realistic systems.

Condensed notes are in the [Data structures revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/), and exam-style questions are in the [Data structures practice questions](/resources/aqa-a-level-computer-science-data-structures-practice/).

## What a data structure is

A **data structure** is a way of organising related data items in memory, together with the rules for how they are arranged and accessed, so that a program can use them efficiently for a particular task.

Three ideas sit inside that definition:

1. **Many items, one name.** A structure groups related values so that the program can treat them as a unit (pass them to a subroutine, save them to a file, loop over them).
2. **An arrangement.** The items have relationships: one after another, in rows and columns, parent and child, connected in a network, or paired with keys.
3. **Ways of accessing them.** The arrangement determines which operations are quick and which are slow.

## Data type, data structure, abstract data type

These terms are related but not interchangeable.

| Term | What it describes | Example |
|---|---|---|
| Data type | The kind of a single value and the operations allowed on it | Integer, Boolean, character |
| Data structure | A concrete organisation of many values in memory | An array of 50 integers with a pointer variable |
| Abstract data type | A logical description defined by its operations, independent of how it is stored | A stack: push, pop, peek, test empty, test full |

The same abstract data type can be built from different data structures. A queue, for example, can be held in an array with front and rear pointers, or in a set of nodes linked by references. Section 4.2.1.4 develops this; see the [abstract data types guide for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/).

Some languages blur the line by providing built-in structures. A Python list or a C# `List` is an "equivalent" of an array that can grow; the specification's wording "(or equivalent)" allows for this.

## Properties for comparing structures

When a question asks you to compare or justify, use these properties. Each one gives you a reason to write down.

| Property | Options | Why it matters |
|---|---|---|
| Element types | **Homogeneous** (all the same type, as in an array) or **heterogeneous** (mixed types, as in a record) | Decides whether one structure can hold all the fields of an entity |
| Organisation | **Linear** (sequence), **hierarchical** (tree), **network** (graph), **key-based** (dictionary, hash table) | Should match the real relationships in the data |
| Access | **Direct** (go straight to an item by index or key) or **sequential** (start at one end and move through) | Determines how quickly an item can be found |
| Size | **Static** (fixed when created) or **dynamic** (grows and shrinks at run time) | Matters when the amount of data is unknown or varies |
| Order rule | None, insertion order, first in first out, last in first out, sorted, by priority | Decides which item an operation returns |

A one-dimensional array, for instance, is homogeneous, linear, directly accessed by index and, in many languages, static. A stack is linear with a last-in, first-out rule, accessed only at the top.

## Data structures in practical settings

The specification suggests linking structures to familiar contexts. The table pairs each structure on the 7517 specification with a context and the property that makes it fit.

| Context | Structure | Deciding property |
|---|---|---|
| Daily rainfall for one month | One-dimensional array | Fixed number of same-type values, accessed by day number |
| Seat availability in a theatre with rows and columns | Two-dimensional array | Two indices (row, seat) match the physical layout |
| One customer's name, age and account balance | Record | Fields of different types describing one entity |
| Jobs waiting for a printer | Queue | First in, first out |
| Undo history in an editor | Stack | Last in, first out |
| Direct flights between airports | Graph | Network of connections, possibly with weights such as distance |
| Folders inside folders | Tree | Hierarchy with one root |
| Looking up a product by its barcode | Hash table or dictionary | Direct access by key |
| A point or direction in 3-D space | Vector | Ordered list of numbers from the same field |

## Worked example 1: choosing structures for the parts of a system

A sports club writes a program to manage a weekly tennis tournament. Identify and justify a suitable data structure for each requirement.

**(a)** Store each player's membership number, name, date of birth and whether fees are paid.

*Record.* The fields have different types (integer, string, date/time, Boolean) and all describe one player, so a record groups them under one name. An array of these records holds all players.

**(b)** Store the scores in a round-robin table where every player plays every other player once, for 8 players.

*Two-dimensional array, 8 × 8.* Element [i][j] holds player i's score against player j. Both indices are player numbers, so any result is accessed directly, and a whole row gives one player's results. The number of players is fixed for the tournament, so a static structure is acceptable.

**(c)** Hold players who arrive to book a practice court, served in arrival order.

*Queue.* Players must be served first come, first served, which is the FIFO rule.

**(d)** Find a member's record instantly when a membership number is typed in.

*Hash table (or dictionary) keyed on membership number.* The key gives direct access, so there is no need to search through every record.

Each justification names a **property of the data** (mixed types, two indices, arrival order, lookup by key) and connects it to a **property of the structure**. Writing only "because it is efficient" earns nothing.

## Worked example 2: why not just use separate variables?

A beginner stores 30 test marks as `mark1`, `mark2`, …, `mark30`. Explain why an array is better.

- One loop can process every mark (`FOR i ← 0 TO 29`), whereas separate variables need 30 separate statements for every operation.
- The whole set can be passed to a subroutine as one parameter.
- Changing the class size means changing one declaration, not adding new variables and new code.
- An individual mark is still directly accessible through its index.

## Choosing badly: three warning signs

- **The structure fights the access pattern.** Storing a phone book in a structure that only allows sequential access makes every lookup slow.
- **The structure fights the relationships.** Storing a road network as a single list of town names loses the information about which towns connect.
- **The structure fights the size.** A static array sized for 100 items fails when the 101st arrives; a structure sized for 100 000 wastes memory when there are usually 20.

## Common mistakes

- Defining a data structure as "a way of storing data" without mentioning organisation or access.
- Using "data type" and "data structure" as if they mean the same thing.
- Choosing an array for fields of different types; that is a record.
- Justifying a choice with "it is efficient" without saying which operation is efficient and why.
- Naming a structure the specification does not use when a simpler named one fits.

## Exam technique

- **State** or **Identify** a data structure: name it precisely (two-dimensional array, priority queue, record).
- **Justify** your choice: one property of the data plus the matching property of the structure.
- **Describe** a structure: its organisation, its access method and its typical operations.
- **Compare** two structures: give a point of difference on the same property for both ("an array gives direct access by index; a queue only allows access at the front and rear").

## More resources on this topic

- [Data structures revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/)
- [Data structures practice questions](/resources/aqa-a-level-computer-science-data-structures-practice/)
- [Single- and multi-dimensional arrays study guide](/resources/aqa-a-level-computer-science-7517-single-and-multi-dimensional-arrays/)
- [Fields, records and files study guide](/resources/aqa-a-level-computer-science-7517-fields-records-and-files/)
- [Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.1.1 Data structures. Always check the current specification on the AQA website.*
