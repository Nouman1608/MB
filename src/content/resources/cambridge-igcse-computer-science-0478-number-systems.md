---
title: "Cambridge IGCSE Computer Science (0478): Number systems"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "number-systems-0478"
description: "Cambridge IGCSE Computer Science 0478 number systems in depth: binary, denary and hex conversions, hex uses, addition, overflow, shifts and two's complement."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **1.1 Number systems**, the first subtopic of Topic 1, Data representation, in the
Cambridge IGCSE Computer Science 0478 syllabus for 2026 to 2028. It is examined on Paper 1, Computer systems. The
[Data Representation study guide](/resources/igcse-computer-science-data-representation/) covers the whole topic;
this page gives every 1.1 method step by step with fresh worked examples, including 16-bit conversions, shifts that
lose data and reading negative two's complement values. For quick recall, use the
[Number systems revision notes](/resources/cambridge-igcse-computer-science-0478-number-systems-revision-notes/),
and test yourself with the
[Number systems practice questions](/resources/cambridge-igcse-computer-science-0478-number-systems-practice/).

## What 1.1 asks you to do

- Explain how and why computers use **binary** to represent all forms of data.
- Understand **denary** (base 10), **binary** (base 2) and **hexadecimal** (base 16).
- Convert positive whole numbers between denary, binary and hexadecimal, with binary up to **16 bits**.
- Explain how and why hexadecimal is used as a beneficial way of representing data.
- **Add** two positive 8-bit binary integers and explain **overflow**.
- Perform a **logical binary shift** on a positive 8-bit integer and describe its effect.
- Use **two's complement** to represent positive and negative 8-bit integers.

## Why binary?

Any data, whether numbers, text, sound or images, must be converted to binary before a computer can process it.
Processors are made of logic gates built from switches with two states, and data is held in **registers** as rows of
those two-state bits. A bit is either 0 or 1, so base 2 is the natural number system for the hardware.

## Place values

| System | Base | Digits | Place values (right to left) |
|---|---|---|---|
| Denary | 10 | 0–9 | 1, 10, 100, 1000 ... |
| Binary | 2 | 0, 1 | 1, 2, 4, 8, 16, 32, 64, 128, 256 ... up to 32768 for 16 bits |
| Hexadecimal | 16 | 0–9, A–F | 1, 16, 256, 4096 |

In hex, A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15.

## Conversions

### Denary to binary (16 bits)

Write the place values, then subtract the largest that fits, working left to right.

**Worked example 1.** Convert 5000 to 16-bit binary.

```
5000 − 4096 = 904    → 1 in the 4096 column
 904 − 512  = 392    → 1 in the 512 column
 392 − 256  = 136    → 1 in the 256 column
 136 − 128  = 8      → 1 in the 128 column
   8 − 8    = 0      → 1 in the 8 column

result: 0001 0011 1000 1000
```

Writing it in groups of four makes the next conversion easy.

### Binary to hexadecimal and back

Split the binary into **nibbles** (groups of 4 bits) from the right, and convert each nibble to one hex digit.

```
0001 0011 1000 1000
  1    3    8    8    →  1388 in hex
```

Going the other way, write each hex digit as 4 bits: B7E → 1011 0111 1110.

### Hexadecimal to denary

Multiply each digit by its place value: 2FA = (2 × 256) + (15 × 16) + (10 × 1) = 512 + 240 + 10 = **762**.

To go from denary to hex, either divide by 16 repeatedly or convert to binary first and then group into nibbles.
The binary route is slower but much less error-prone.

## Why hexadecimal is used

Computers do not store hex; they store binary. Hex is for **people**:

- It is **shorter**: one hex digit stands for exactly four bits, so a 16-bit value is 4 hex digits instead of 16
  binary digits.
- It is **easier to read and remember**, so people make **fewer errors** copying or checking values.
- It converts **directly** to and from binary, nibble by nibble.

Places it is used: **error codes**, **MAC addresses**, **IPv6 addresses** and **HTML colour codes**. In an HTML colour
such as #FF8000, each pair of hex digits is one byte: red FF (255), green 80 (128), blue 00 (0), giving orange.

## Binary addition and overflow

Add column by column from the right. The rules: 0 + 0 = 0; 1 + 0 = 1; 1 + 1 = 0 carry 1; 1 + 1 + 1 = 1 carry 1.

**Worked example 2.** Add 01011011 and 00110110.

```
carries   1 1 1 1 1 1
          0 1 0 1 1 0 1 1    (91)
        + 0 0 1 1 0 1 1 0    (54)
          ---------------
          1 0 0 1 0 0 0 1    (145)
```

Check in denary: 91 + 54 = 145. It fits in 8 bits.

**Overflow** happens when the result is too large for the number of bits available. The largest value an 8-bit
register can hold is 255. Every device has a predefined limit, such as 8 or 16 bits, on what it can store.

**Worked example 3.** Add 10110110 (182) and 01011101 (93).

```
182 + 93 = 275, which needs 9 bits: 1 0001 0011
the register keeps only 8 bits:       0001 0011 = 19
```

The ninth bit is lost, so the stored result, 19, is wrong. That is an overflow error.

## Logical binary shifts

A **logical shift** moves every bit left or right by a set number of places. Bits shifted off the end are **lost**,
and the empty places are filled with **zeros**.

- Each place **left** multiplies by 2.
- Each place **right** divides by 2 (whole-number result; any remainder is lost).

**Worked example 4.**

```
00010110 (22)  shift left 2  → 01011000 (88)    22 × 4 = 88, correct
10110100 (180) shift right 3 → 00010110 (22)    180 ÷ 8 = 22.5; the .5 is lost
11000101 (197) shift left 1  → 10001010 (138)   197 × 2 = 394, but the leftmost 1 is lost
```

The last case shows a shift can give a **wrong** answer when a 1 is shifted out, just as overflow does in addition.

## Two's complement

Two's complement lets 8 bits hold negative numbers. The leftmost bit has the place value **−128**; the rest are
unchanged.

```
−128   64   32   16   8   4   2   1
```

So the range is **−128 to +127**. A leading 1 means the number is negative; a leading 0 means it is positive and reads
as normal binary.

**Worked example 5: denary to two's complement.** Represent −100.

```
+100        = 0110 0100
flip bits   = 1001 1011
add 1       = 1001 1100
check: −128 + 16 + 8 + 4 = −100
```

**Worked example 6: two's complement to denary.** Convert 11010110.

```
−128 + 64 + 16 + 4 + 2 = −42
```

Add the place values directly, using −128 for the leftmost bit. There is no need to reverse the flip-and-add method.

## Common mistakes

- Converting binary to hex through denary and slipping; group into nibbles instead.
- Writing a 16-bit answer with fewer than 16 digits when the question asks for 16 bits.
- Saying computers "use hex to save memory". Hex does not change storage; it helps humans.
- Forgetting the carry in the leftmost column, or not mentioning that the ninth bit is lost in overflow.
- Shifting and filling the gaps with 1s, or forgetting that shifted-out bits are lost.
- In two's complement, flipping the bits but not adding 1, or reading 1xxxxxxx as a large positive number.

## Exam technique

**Convert** questions: show the working, such as the nibbles or the place values, because a method mark may survive
an arithmetic slip. **Explain** why hex is used: give a benefit and tie it to people (readability, fewer errors), not
to the computer. **Describe** the effect of a shift: give the direction, the multiplication or division, and what
happens to bits shifted out. For overflow, state the register limit and the value that was too large. Always check
binary answers by converting back to denary.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.1 Number systems.
