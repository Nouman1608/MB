---
title: "A Level Computer Science: Information Representation (Cambridge 9618)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
description: "An overview of data representation, multimedia (graphics and sound), and compression for Topic 1 Information representation, Cambridge AS & A Level Computer Science 9618, 2027-2029 series -- covering number-base conversion, file-size calculation and compression choice; see the note below on parts of 1.1 this overview does not go into."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Information representation**, an AS Level
topic for Cambridge International AS & A Level Computer Science 9618,
2027-2029 series, sat by both AS-only candidates and those continuing to
the full A Level.

## Where this fits in 9618

Information representation is the first topic candidates meet, and it
establishes how all data — numbers, text, images, sound — is ultimately
stored and manipulated as binary inside a computer system, a fact that
remains true regardless of how abstracted the programming language or
application layer a later topic discusses appears to be. Later
topics on data structures, databases and networking all take for
granted that candidates already understand how the underlying data is
represented and how its size can be calculated and reduced. The
syllabus is staged rather than tiered: AS Level candidates study
sections 1-12, while the full A Level adds sections 13-20 — this
topic sits within the AS-level core that every 9618 candidate covers.

## Syllabus coverage

**CAMBRIDGE AS & A LEVEL COMPUTER SCIENCE 9618 — TOPIC 1 INFORMATION
REPRESENTATION**

- 1.1 Data Representation — how numbers, text and other data types are
represented in binary inside a computer system. This is a large
sub-topic; this guide focuses on number base conversion between
denary, binary and hexadecimal, including converting to and from
two's complement for negative numbers, which it covers in depth. It
does **not** go into the sub-topic's other required content:
binary/decimal prefixes, binary coded decimal (BCD), one's
complement, binary addition/subtraction and overflow, practical uses
of BCD and hexadecimal, or character sets (including extended sets
and a universal encoding such as Unicode) — see that overflow and
character-set coverage in the [Information Representation revision
notes](/resources/a-computer-science-data-representation-revision-notes/)
and [practice questions](/resources/a-computer-science-data-representation-practice/)
instead
- 1.2 Multimedia – Graphics, Sound — how images and sound are
represented digitally, including the effect of resolution, colour
depth, sampling rate and sampling resolution on file size and quality, and
justifying a choice between a bitmap image and a vector graphic for a
given use
- 1.3 Compression — why data compression is needed, and the difference
between lossy and lossless compression methods, including named example techniques for each

## How to approach it

Number representation and base conversion (1.1) are graded almost
entirely on procedural accuracy, so timed practice converting between
denary, binary and hexadecimal — including negative numbers where the
syllabus requires it — closes most of the gap here, and a small number
of careless arithmetic slips is a far more common cause of lost marks
on this sub-topic than any genuine conceptual misunderstanding. For 1.2, practise
calculating file sizes from given parameters (resolution × colour
depth for images; sampling rate × sampling resolution × duration for
sound) and be ready to explain, in words, how increasing any one of
those parameters trades higher quality for larger file size — this
explanatory skill is tested as often as the calculation itself. For
1.3, know a specific, real compression method for both lossy (such as
reducing colour depth or sampling rate) and lossless (such as run-length
encoding) compression, since "describe how a file could be compressed"
questions expect a genuine mechanism, not just the general concept
that "compression makes files smaller." Being able to state the
trade-off each method involves — lossy compression permanently
discards data in exchange for a smaller file, lossless compression
allows exact reconstruction but achieves a smaller compression ratio —
is often the specific distinction a mark is awarded for. Since this topic recurs
throughout the practical programming components of the course
whenever data storage or file handling comes up, treat fluency here as
an investment that pays off well beyond Topic 1's own exam questions —
file-handling and data-structure topics later in the AS core (sections
1-12) both assume this level of comfort with how data is actually
stored in memory.

## Number base conversion — the core techniques

Converting denary to binary uses repeated division by 2 (reading remainders bottom to top), or
subtracting the largest available power of 2 repeatedly. Converting binary to denary sums the place
values of each set bit. Binary-to-hexadecimal conversion splits the binary number into groups of
four bits (nibbles) from the right, converting each nibble to its single hex digit — this only
works cleanly because 16 = 2⁴, which is exactly why hexadecimal is used as a compact way to
represent binary in the first place. Two's complement (used for negative numbers) inverts every
bit of the positive binary representation and adds 1 — practise this alongside ordinary conversion,
since exam questions frequently test both positive and negative numbers within the same question.

## Calculating file sizes — the two core formulas

**Image file size** = image resolution (width × height, in pixels) × colour depth (bits per pixel).
Increasing either the resolution or the colour depth increases quality but also increases file size
proportionally — a question that asks you to calculate the effect of doubling resolution should
show the file size roughly quadrupling (since both width and height double), not merely doubling.

**Sound file size** = sampling rate (samples per second) × sampling resolution (bits per sample) ×
duration (seconds). A higher sampling rate captures the waveform more accurately (closer to the
original analogue sound) and a higher sampling resolution captures more possible amplitude values per
sample — both trade higher audio quality for a larger file.

## Lossy versus lossless compression

Lossless compression (such as run-length encoding, which replaces repeated sequences of the same
value with a shorter code representing the value and its repeat count) allows the original file to
be reconstructed exactly. Lossy compression (such as reducing colour depth in an image, or reducing
sampling rate in audio) permanently discards some information to achieve a smaller file, trading a
small, often imperceptible loss in quality for a significantly smaller file size. Knowing which
category a given real-world format or technique falls into — and being able to justify why — is
tested as directly as the underlying calculations.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618 syllabus
for 2027-2029 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/721397-2027-2029-syllabus.pdf).
