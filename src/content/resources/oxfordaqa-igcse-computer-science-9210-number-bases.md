---
title: "OxfordAQA IGCSE Computer Science (9210): Number bases -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Number Bases Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.01
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "number-bases-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.1: decimal, binary and hexadecimal, why computers use binary and why hexadecimal is used."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.1 Number bases** of OxfordAQA International GCSE Computer Science (9210). The
specification asks you to understand three number bases: **decimal (base 10)**, **binary (base 2)** and
**hexadecimal (base 16)**. You must understand that computers use binary to represent **all** data and
instructions, **explain why** they do so, and **explain why hexadecimal is often used** in computer science. The
additional information says you should be "familiar with the idea that a bit pattern could represent different
types of data including text, image, sound and integer". The conversion methods between bases are in a separate
section, covered in the [converting between number bases
guide](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases/). This guide builds the
understanding underneath those methods.

## What is a number base?

A **number base** (or radix) is the number of different digits a counting system uses before it has to start a
new column. In every base, a number is written as columns, and each column has a **place value** that is a power of
the base. The digit in a column tells you how many of that place value you have.

## Decimal (base 10)

Decimal is the system you use every day. It has **ten digits**, 0 to 9. The place values, from the right, are 1, 10,
100, 1,000 and so on, each ten times the one before. The number 4,052 means:

| 1,000 | 100 | 10 | 1 |
|---|---|---|---|
| 4 | 0 | 5 | 2 |

That is (4 × 1,000) + (0 × 100) + (5 × 10) + (2 × 1) = 4,052. When a column reaches 9 and you add 1, it drops back to 0
and 1 is carried into the next column.

## Binary (base 2)

Binary has **two digits**, 0 and 1. Each digit is called a **bit**, short for binary digit. The place values, from
the right, double each time: 1, 2, 4, 8, 16, 32, 64, 128. An eight-bit binary number therefore uses the columns:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |

The value is 128 + 32 + 16 + 4 + 2 = **182**. Only the columns that contain a 1 are added. The largest value with 8
bits is 1111 1111, which is 255: 8 bits give 2⁸ = 256 different patterns, from 0 to 255. Four bits give 16 patterns, from 0 to 15.

By convention, long binary numbers are written in groups of four bits for readability, such as 1011 0110.

## Hexadecimal (base 16)

Hexadecimal, often shortened to **hex**, has **sixteen digits**. Ten digits are borrowed from decimal and six
letters supply the rest: 0 to 9, then A, B, C, D, E and F, where A stands for 10 and F for 15. The place values are
powers of 16: 1, 16, 256, and so on.

Here is the start of the counting sequence in all three bases.

| Decimal | Binary (4 bits) | Hexadecimal |
|---|---|---|
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

The table shows an important fact. **One hexadecimal digit corresponds exactly to four bits.** Two hex digits
therefore describe one byte (8 bits). For example, 1011 0110 is B (1011) followed by 6 (0110), so the byte is **B6** in
hex, which is the decimal number 182 (the same value as the binary example above, which can be checked as
(11 × 16) + 6 = 182). The largest eight-bit value is 1111 1111 in binary, **FF** in hex and **255** in decimal; the
specification calls these "the following equivalent maximum values".

## Why do computers use binary?

A computer is built from electronic circuits that contain millions or billions of tiny switches called
**transistors**. A transistor is either on or off. Representing information with only two states fits that
hardware perfectly. This leads to several advantages:

- **Reliability.** It is easy for a circuit to distinguish a high voltage from a low one. A system with ten
  distinct voltage levels would make errors much more often, since small amounts of electrical noise could be
  mistaken for a different digit.
- **Simple, cheap hardware.** Two-state circuits are easy to build, copy and make smaller, and the logic gates
  (NOT, AND and OR) that perform calculations work directly with the two values.
- **Matches storage.** Data on storage devices is also held as two states: a pit or a land on an optical disc, a
  north or south magnetic region on a hard disk, or a trapped charge or none in a solid state drive.

To answer a "why binary" question, link the **two states** (on and off) with the **hardware** (transistors,
switches, circuits), and say that it is **reliable and simple**.

## All data is stored as binary

The specification states that computers use binary to represent **all** data and **instructions**. Programs are
stored in binary as machine code. Other data is converted into binary before it can be stored or processed.

A single bit pattern has no meaning on its own. The meaning depends on how the program **interprets** it. Take the
eight bits 0100 0001:

| Interpreted as | Meaning |
|---|---|
| An integer | The whole number 65 |
| A character (ASCII) | The capital letter A |
| Part of an image | One value in a pixel, for example a brightness |
| Part of a sound | One sample's amplitude |
| An instruction | Part of a machine code instruction |

The computer does not know which of these it is looking at unless the software tells it. That is why files have
formats: the format says how to read the bits. This is the idea the specification wants when it says that a bit
pattern could represent different types of data including text, image, sound and integer.

## Why is hexadecimal often used?

Computers work in binary, but long strings of 1s and 0s are very hard for humans to read, copy and remember.
Hexadecimal solves this problem.

- **It is shorter.** One hex digit stands for four bits, so a binary number is four times as long as its hex
  equivalent. The eight-bit number 1100 1000 is just **C8** in hex.
- **It is easier to read and remember.** C8 is quicker to read out, type and compare than 11001000.
- **It is less error-prone.** Fewer digits means fewer places to make a slip when copying a value.
- **It converts easily to binary.** Because 16 is a power of 2, each hex digit maps directly to a group of four bits
  (see the table above), so it is quick to convert in either direction without arithmetic.

Typical uses include colour codes on web pages (such as #FF0000 for red), memory addresses, and error codes. The
specification does not name these uses as required, so treat them as examples. The general reason is that
hexadecimal is a **compact, human-friendly way of writing binary**. Note that the computer still stores everything
in binary. Hex is for people, not for the hardware.

Compare the three forms of the same value:

| Decimal | Binary | Hexadecimal |
|---|---|---|
| 200 | 1100 1000 | C8 |
| 255 | 1111 1111 | FF |
| 37 | 0010 0101 | 25 |

Hex is not decimal. The hex number 25 is *not* twenty-five: it is 2 × 16 + 5 = 37. This is why a number base is often
written beside the value in exam questions, to avoid confusion.

## Worked example: identifying the base

**Question:** the number 10 is written in three bases. What is its value in decimal when it is (a) binary, (b)
decimal, (c) hexadecimal?

- (a) Binary 10: one 2 and no 1s, so the value is **2**.
- (b) Decimal 10: **10**.
- (c) Hexadecimal 10: one 16 and no 1s, so the value is **16**.

The same digits mean three different numbers. The base tells you how to read them. Writing the base as a
subscript, such as 10₂ or 10₁₀ or 10₁₆, is a good habit while you are learning.

## Worked example: how many values can be stored?

**Question:** how many different values can 8 bits represent, and what is the largest whole number?

Each bit has two possibilities, and the choices multiply: 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 2⁸ = **256**. They start
from 0, so the largest is 256 - 1 = **255**. For 4 bits, the number of values is 2⁴ = 16, and the largest is 15, or F in
hex, which is why one hex digit covers exactly four bits.

## Common mistakes

- Saying computers use binary "because it is simple" with no reference to **two states** such as on and off.
- Saying computers use hexadecimal. Hex is only a way for **people** to write binary.
- Saying hexadecimal is "faster for the computer". It is not; it is easier for humans to read.
- Writing "a bit is a byte". A bit is one binary digit; a byte is 8 bits.
- Reading the hex number 25 as twenty-five instead of 37.
- Forgetting that hex has **sixteen** digits, so the letters stop at F.
- Saying binary can only store numbers. Binary can represent any data, once it is encoded.
- Listing the place values of binary as 1, 2, 3, 4 ... instead of 1, 2, 4, 8 ...

## Exam technique

- **Explain why binary** questions: name the two states, link them to transistors or switches, and give a benefit
  (reliability, simplicity).
- **Explain why hexadecimal** questions: give two benefits, such as shorter and easier to read, and say that it
  maps to groups of four bits.
- **State the largest value** questions: use 255, 1111 1111 and FF for eight bits.
- **Different types of data** questions: use the 0100 0001 example, giving two different meanings for one pattern.

## Next steps

For a condensed summary and self-test, use the [Number bases revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-number-bases-revision-notes/), and test yourself with the
[Number bases practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-number-bases-practice/). To learn the conversion
methods, go on to the [converting between number bases study
guide](/resources/oxfordaqa-igcse-computer-science-9210-converting-between-number-bases/).
