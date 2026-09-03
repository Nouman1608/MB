---
title: "IGCSE Computer Science: Data Representation (Cambridge 0478)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
description: "Binary and hexadecimal number systems, how text, sound and images are represented in binary, and data storage and compression -- the full content of Topic 1 for Cambridge IGCSE Computer Science 0478, 2026-2028 series."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Data representation**, for Cambridge IGCSE
Computer Science 0478, 2026–2028 series (Version 5, published December
2025). 0478 is not tiered — all candidates study the same content —
and this is the plain A*-G qualification, distinct from the
numeric-grade Cambridge IGCSE (9-1) Computer Science 0984 sibling
syllabus.

## Where this fits in 0478

Data representation is the first of six topics grouped under "Computer
systems" (the other four are Data transmission, Hardware, Software, The
internet and its uses, and Automated and emerging technologies), before
the syllabus moves on to "Algorithms, programming and logic." It
establishes that everything a computer processes — numbers, text,
sound, images — is ultimately stored as binary, which the Hardware and
Programming topics later take for granted when discussing registers,
data types and file handling.

## Syllabus coverage

**CAMBRIDGE IGCSE COMPUTER SCIENCE 0478 — TOPIC 1 DATA REPRESENTATION**

- 1.1 Number systems — understanding how and why computers use binary
to represent all data; the denary, binary and hexadecimal number
systems and converting between positive values in each (maximum 16-bit
binary length); why hexadecimal is a useful, more human-readable
alternative to binary; adding two positive 8-bit binary integers and
understanding overflow; performing a logical binary shift on a positive
8-bit integer and its effect; using two's complement to represent
positive and negative 8-bit binary integers
- 1.2 Text, sound and images — how and why a computer represents text
using character sets, including ASCII and Unicode; how and why a
computer represents sound, including the effects of sample rate and
sample resolution on accuracy and file size; how and why a computer
represents an image, including the effects of resolution and colour
depth on file size and quality
- 1.3 Data storage and compression — how data storage is measured, from
bit and nibble up to kibibyte, mebibyte, gibibyte, tebibyte, pebibyte
and exbibyte, and the relationship between each denomination (1024 of
one unit per unit above it); calculating the file size of an image or
sound file from given information; the purpose of and need for data
compression; how lossy and lossless compression methods work, e.g. run
length encoding (RLE)

## How to approach it

Binary-to-hex and binary-to-denary conversions are graded almost purely
on procedural accuracy, so timed practice converting in both directions
— including negative numbers via two's complement — closes most of the
gap here; overflow and logical shifts are the two ideas within 1.1 most
often tested with a "what happens if..." style question rather than a
plain conversion. For file-size calculations in 1.3, the most common
error is using 1000 instead of 1024 as the conversion factor between
storage units, which the syllabus explicitly requires — get in the
habit of writing "×1024" before every unit conversion rather than
relying on memory under exam pressure. Conceptually, tie 1.2 and 1.3
together: resolution, sample rate and colour depth all trade fidelity
for file size, and questions frequently ask candidates to explain that
trade-off in words rather than calculate it, so practise articulating
it, not just computing it.

## Worked examples

**Why binary?** Computers are built from transistors and other
components that reliably hold only **two stable states** — on and off,
or high and low voltage. Binary maps directly onto those two states,
which makes circuits simple, cheap to manufacture, and far less
vulnerable to errors from small voltage fluctuations than a system
using more than two states would be.

**Binary addition and overflow.** Add 11010010 and 01100011 in an
8-bit register.

```
  11010010   (210)
+ 01100011   (99)
-----------
  100110101  (309, needing 9 bits)
```

The result needs **9 bits**, but the register only holds 8, so the
extra (leftmost) bit is lost and the stored answer is wrong — this is
**overflow**. Always check whether the sum of the two denary values
exceeds 255 (the maximum an unsigned 8-bit register can hold) before
concluding overflow has occurred.

**Image file size.** An image is 800 × 600 pixels with a colour depth
of 24 bits. Find its file size in megabytes.

```
total bits = 800 x 600 x 24 = 11 520 000 bits
bytes      = 11 520 000 / 8 = 1 440 000 bytes
megabytes  = 1 440 000 / 1 000 000 (or / 1 048 576 for MiB)
           = 1.44 MB  (or 1.37 MiB)
```

Halving the colour depth to 12 bits would halve the file size, but it
would also reduce the number of available colours from about 16.7
million to only 4096 — a trade-off between fidelity and storage that
recurs throughout this topic, whether the variable being reduced is
colour depth, resolution, or sample rate.

**Sound sampling.** The amplitude of an analogue sound wave is measured
at regular intervals, and each measurement is stored as a binary
number. Increasing the **sample rate** means more measurements are
taken per second, so the digital version follows the shape of the
original wave more closely and sound quality improves — but the file
size increases proportionally, since more samples must be stored.
Increasing the **sample resolution** (bits per sample) instead allows
each individual measurement to be recorded more precisely, again at
the cost of a larger file.

## Related resources

- [Data Representation revision notes](/resources/data-representation-revision-notes/) — condensed recall notes covering the same conversions, arithmetic and compression content
- [Data Representation practice questions](/resources/data-representation-practice/) — exam-style questions with full worked answers
- [Cambridge IGCSE Computer Science hub](/boards/cambridge/igcse/computer-science/)

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028
(Version 5, December 2025) —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
