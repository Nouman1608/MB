---
title: "A Level Computer Science: Data Representation (A Level) (Cambridge 9618)"
seoTitle: "Cambridge 9618 A Level Data Representation Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "A"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "user-defined-data-types"
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "file-organisation-and-access"
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "floating-point-numbers-representation-and-manipulation"
description: "Study guide to user-defined data types, serial, sequential and random files, hashing and binary floating point for Cambridge A Level Computer Science 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 13 Data Representation, the first A Level topic in Cambridge International AS & A Level Computer Science 9618, covers three ways of shaping data: user-defined data types (enumerated, pointer, set, record and class), how files are organised and accessed (serial, sequential and random, with hashing), and binary floating-point numbers. It is examined in Paper 3 Advanced Theory, where floating-point conversion and normalisation questions need exact working.

Related: [Data Representation (A Level) revision notes](/resources/a-level-computer-science-data-representation-a-level-revision-notes/) · [Data Representation (A Level) practice questions](/resources/a-level-computer-science-data-representation-a-level-practice/) · [AS Information Representation study guide](/resources/a-level-computer-science-information-representation/)

## Where this fits in 9618

Topic 13 builds on the AS work on binary and two's complement (Topic 1) and on records and files (Topic 10). Paper 3 (1 hour 30 minutes, 75 marks) assesses sections 13 to 20. File-processing code for serial, sequential and random files is written in Paper 4 under Topic 20.

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 13.1 User-defined data types | Show understanding of why user-defined types are necessary |
| 13.1 | Define and use non-composite types, including enumerated and pointer |
| 13.1 | Define and use composite types, including set, record and class/object |
| 13.1 | Choose and design an appropriate user-defined data type for a given problem |
| 13.2 File organisation and access | Show understanding of serial, sequential (using a key field) and random (using a record key) file organisation, and choose one for a problem |
| 13.2 | Show understanding of sequential access (serial and sequential files) and direct access (sequential and random files) |
| 13.2 | Describe and use hashing algorithms to read from and write to a random or sequential file |
| 13.3 Floating-point numbers | Describe the format of binary floating-point real numbers using two's complement; understand the effect of changing the allocation of bits to mantissa and exponent |
| 13.3 | Convert binary floating-point numbers to denary and vice versa; normalise floating-point numbers and understand why |
| 13.3 | Understand the consequences of binary being only an approximation; how underflow and overflow occur; how rounding errors arise |

## 13.1 Why are user-defined data types needed?

Built-in types (INTEGER, STRING and so on) cannot describe every kind of data a problem uses. A user-defined type lets the programmer model the problem directly, which makes code easier to read, lets the translator reject invalid values, and groups related data so it can be handled as one item.

### Non-composite types

A **non-composite** type is defined without reference to other user-defined types: it holds a single value.

- An **enumerated** type lists every value it can take, in order:

```
TYPE Season = (Spring, Summer, Autumn, Winter)
DECLARE ThisSeason : Season
ThisSeason ← Summer
```

The values are not strings, so they have no quotation marks. Because they are ordered, `Summer + 1` gives Autumn in the pseudocode guide's examples.

- A **pointer** type holds the memory address of a value of a stated type:

```
TYPE TIntPointer = ^INTEGER
DECLARE MyPointer : TIntPointer
MyPointer ← ^Score        // address of Score
OUTPUT MyPointer^          // the value stored at that address
```

Pointers are used to build dynamic structures such as linked lists and trees.

### Composite types

A **composite** type is built from other types.

- A **record** groups fields of different types (TYPE ... ENDTYPE with DECLARE lines).
- A **set** holds an unordered collection of distinct values of one type, on which set operations (union, intersection, membership) can be carried out:

```
TYPE LetterSet = SET OF CHAR
DEFINE Vowels ('A', 'E', 'I', 'O', 'U') : LetterSet
```

- A **class** defines the attributes and methods of objects; each **object** is an instance of a class (Topic 20 covers object-oriented programming).

**Choosing a type**: a fixed list of named options suggests an enumerated type; data about one thing with mixed types suggests a record; data that also needs its own operations suggests a class; a collection used for membership tests suggests a set.

## 13.2 How are files organised and accessed?

| Organisation | How records are stored | Typical use |
|---|---|---|
| Serial | One after another in the order they arrive (chronological), not sorted | A log of transactions or sensor readings |
| Sequential | In order of a key field (for example, ascending CustomerID) | A master file updated in batches, such as payroll |
| Random | At an address calculated from the record key by a hashing algorithm | A file where single records must be found quickly, such as stock records at a till |

**Access methods**:

- **Sequential access** reads records one after another from the start. It is used for serial and sequential files. A search of a sequential file can stop as soon as a key greater than the target is reached; a serial file must be read until the record is found or the file ends.
- **Direct access** goes to a record's location without reading the ones before it. For a **sequential** file this needs an **index** of key values and positions; for a **random** file the hashing algorithm calculates the address.

June 2024 examiners noted that answers to direct access of a sequential file described sequential access and did not mention an index; serial and sequential files were also confused.

### Hashing

A **hashing algorithm** is applied to a record's **key field** (not to the whole file) to give the address where the record is stored. A common example is the remainder method:

address = key MOD number of addresses

With 500 addresses, key 74 317 goes to 74 317 MOD 500 = 317. A **collision** happens when two keys hash to the same address (key 12 817 also gives 317). Two common ways to deal with it:

- **Open addressing (linear probing)**: store the record in the next free address (318, 319, ...). To find it later, hash the key, then search forward from that address until the key matches or an empty address is found.
- **Overflow area**: store colliding records in a separate area, which is searched serially when the record is not at its home address.

A good hash spreads keys evenly and is quick to calculate. Writing to and reading from the file both use the same algorithm, so the address does not need to be stored anywhere.

## 13.3 How are floating-point numbers represented?

A binary floating-point number has a **mantissa** and an **exponent**, both in two's complement in 9618. The value is mantissa × 2^exponent, where the mantissa has its binary point just after the first (sign) bit.

### Converting denary to normalised floating point

Use an 8-bit mantissa and a 4-bit exponent.

**+5.75**

1. 5.75 = 101.11 in binary.
2. Move the point so the number is 0.10111; it moved 3 places left, so the exponent is +3.
3. Mantissa 01011100 (padded with 0s); exponent 0011.
4. Check: 0.10111 = 0.5 + 0.125 + 0.0625 + 0.03125 = 0.71875, and 0.71875 × 2³ = 5.75.

**−0.375**

1. +0.375 = 0.011, or 0.0110000 as an 8-bit fixed-point mantissa.
2. Two's complement: invert to 1.1001111 and add 1 in the last place, giving 1.1010000 (−1 + 0.5 + 0.125 = −0.375).
3. A normalised negative mantissa starts 1.0, so shift left one place: 1.0100000, and reduce the exponent by 1 to −1.
4. Mantissa 10100000; exponent 1111. Check: (−1 + 0.25) × 2⁻¹ = −0.75 × 0.5 = −0.375.

### Converting floating point to denary

Mantissa 01101000, exponent 0101.

1. Exponent 0101 = +5.
2. Mantissa 0.1101000 = 0.5 + 0.25 + 0.0625 = 0.8125.
3. Value = 0.8125 × 2⁵ = 26. (Or move the point 5 places right: 011010.00 = 26.)

### Normalisation and why it matters

A normalised mantissa starts **01** if positive and **10** if negative, so there are no redundant leading bits. To normalise, shift the mantissa left until the first two bits differ, and subtract 1 from the exponent for each shift.

Example: mantissa 00011010, exponent 0011. Shift left two places: 01101000, exponent 3 − 2 = 1 (0001). Both represent 1.625.

Reasons for normalisation:

- **Maximum precision**: all mantissa bits are used for significant digits, none are wasted on leading 0s (or 1s).
- **Unique representation**: each value has only one normalised form, which makes comparison straightforward.

### Changing the allocation of bits

With a fixed total, more bits for the **mantissa** give **greater precision** (more significant bits), and more bits for the **exponent** give a **greater range** (larger and smaller magnitudes). With an 8-bit mantissa and 4-bit exponent, the largest positive value is 0.1111111 × 2⁷ = 0.9921875 × 128 = 127, and the smallest positive normalised value is 0.1000000 × 2⁻⁸ = 1/512.

### Approximation, rounding, overflow and underflow

- Many denary fractions, such as 0.1, have no exact binary representation (0.1 is 0.000110011... recurring), so they are stored as the nearest value the mantissa allows. This is a **rounding error**, and repeated calculations can make it grow, so tests for exact equality of real numbers can fail.
- **Overflow** happens when a result is too large for the exponent to represent.
- **Underflow** happens when a result is too close to zero (too small a magnitude) for the exponent to represent, so it is stored as zero.

June 2025 examiners noted that a negative floating-point value often lost its sign, so always check the first bit of your mantissa.

## Common mistakes

- Treating serial and sequential files as the same; a serial file is in order of arrival, a sequential file is in key order.
- Hashing "the file" instead of a record's key, or saying you access the file rather than a record (June 2024, November 2024).
- Moving the binary point the wrong way: a number less than 0.5 has a negative exponent.
- Writing a negative normalised mantissa beginning 11.
- Putting quotation marks round enumerated values.

## Frequently asked questions

**Why do floating-point numbers use two's complement for the exponent?** So that the exponent can be negative, representing numbers with a magnitude less than 0.5.

**Is a record composite or non-composite?** Composite: it is built from fields of other data types. Enumerated and pointer types are non-composite.

**When is a sequential file better than a random file?** When most records are processed in key order in one run, such as producing every employee's payslip, since sequential access through an ordered file is efficient and no hash or index is needed.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 13 Data Representation (13.1 to 13.3); type syntax from the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
