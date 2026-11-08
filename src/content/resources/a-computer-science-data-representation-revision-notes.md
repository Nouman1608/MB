---
title: "A Level Computer Science: Information Representation — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "data-representation"
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "multimedia-graphics-sound"
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "compression"
description: "Cambridge 9618 AS revision notes for Topic 1: binary prefixes, BCD, one's and two's complement, binary arithmetic, character sets, multimedia and compression."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
reviewNeeded: true
reviewNote: "2026-11-08 recheck: expanded thin page with 1.1-1.3 content it lacked (binary vs decimal prefixes, BCD and uses, one's complement, binary subtraction, file header, screen resolution, vector terms, compression by file type) and an FAQ; please re-review."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Information Representation study guide](/resources/a-level-computer-science-information-representation/).

## Number bases

```
binary  base 2    denary base 10    hexadecimal base 16
```

**Denary → binary:** repeatedly divide by 2, read the remainders **upwards**.
**Binary → denary:** add the place values where a 1 appears.
**Binary → hex:** split into groups of **4 bits from the right** and convert each nibble.

Hexadecimal is used because it is far more compact than binary and each hex digit maps to exactly **four** binary digits, making conversion trivial and human error less likely — used for memory addresses, colour codes and MAC addresses.

## Binary and decimal prefixes

| Binary prefix | Value | Decimal prefix | Value |
|---|---|---|---|
| kibi (Ki) | 2¹⁰ = 1024 | kilo (k) | 10³ = 1000 |
| mebi (Mi) | 2²⁰ = 1 048 576 | mega (M) | 10⁶ |
| gibi (Gi) | 2³⁰ | giga (G) | 10⁹ |
| tebi (Ti) | 2⁴⁰ | tera (T) | 10¹² |

So 1 KiB = 1024 bytes but 1 kB = 1000 bytes. Use the prefix the question uses; the gap grows with each step (1 TiB is about 10% larger than 1 TB).

## Binary Coded Decimal (BCD)

Each **denary digit** is stored separately as a 4-bit binary code: 395 = 0011 1001 0101. Only 0000 to 1001 are valid. BCD is used where denary digits must be shown or kept exactly: digital clocks and calculator displays (each digit drives one display segment), and financial calculations where denary fractions such as 0.1 must not suffer binary rounding errors.

## Binary addition and overflow

```
0+0=0    0+1=1    1+1=10 (carry 1)    1+1+1=11 (carry 1)
```

**Overflow** occurs when the result needs more bits than are available. In an 8-bit register the largest unsigned value is 255; adding beyond that produces an incorrect result and sets the **carry flag** (the flag for unsigned range overflow) — the separate **overflow flag** signals a different condition, invalid two's complement (signed) overflow, so name the correct flag for the case in the question. Explaining overflow as "the number is too big for the number of bits allocated" is the phrasing that scores, provided you also name the right flag.

## Signed integers — two's complement

To negate a number: **invert all the bits and add 1.**

```
+5  = 00000101
invert = 11111010
add 1  = 11111011  = -5
```

Range for n bits: **−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1**. For 8 bits, −128 to +127.

**Why two's complement rather than sign-and-magnitude:** it has only **one representation of zero**, and subtraction can be performed by ordinary addition — so the hardware needs no separate subtraction circuit. That reason is the answer to the standard comparison question.

The **most significant bit indicates the sign**: 0 positive, 1 negative.

**One's complement** negates a number by inverting every bit only: −5 = 11111010 in 8 bits. It has two zeros (00000000 and 11111111), which is one reason two's complement is preferred.

**Binary subtraction:** to work out A − B, add A to the two's complement of B and ignore any carry out of the most significant bit. Example: 9 − 5 = 00001001 + 11111011 = (1)00000100 = 4.

## Binary shifts

- **Logical left shift** by n → multiply by 2ⁿ.
- **Logical right shift** by n → divide by 2ⁿ, discarding the remainder.
- **Arithmetic right shift** preserves the sign bit, so it works correctly on negative two's complement values.

Using a logical right shift on a negative number turns it positive — which is why arithmetic shift exists.

> **Floating point** is not covered here — it is examined only within the
> full A Level (not the AS), so it sits outside these AS-stage notes.

## Character sets

- **ASCII** — 7 bits, 128 characters. Extended ASCII uses 8 bits for 256.
- **Unicode** — up to 32 bits (in a fixed-width encoding), representing a very wide range of the world's writing systems.

Unicode was needed because ASCII could not represent non-Latin scripts. The cost is that Unicode text can require more storage per character, which is why UTF-8 uses a variable-length encoding that keeps ASCII characters at one byte.

## Images and sound

```
image file size  = width x height x colour depth
sound file size  = sampling rate x sampling resolution x duration x channels
```

- **Image resolution** — the number of pixels in the image, width × height. **Colour depth** — bits per pixel; n bits give 2ⁿ colours.
- **Sampling rate** — samples per second. **Sampling resolution** — bits per sample.

**Higher sampling rate and sampling resolution give better quality but larger files.** That trade-off is the answer to most multimedia questions.

**Vector graphics** store objects and their properties rather than pixels, so they scale without loss and are usually smaller for line art — but are unsuitable for photographs.

Syllabus terms to use:

- **File header**: data at the start of a bitmap file giving its width, height, colour depth and file type, so software can decode it.
- **Image resolution** (pixels in the image) versus **screen resolution** (pixels the display can show).
- **Drawing object**, **property** (e.g. line colour, fill colour, coordinates, radius) and **drawing list** (the set of commands that draws every object).
- **Analogue vs digital data**: sound is a continuous analogue wave; sampling turns it into discrete digital values.

Worked size estimate: a 1200 × 800 image at 24-bit colour depth = 1200 × 800 × 24 = 23 040 000 bits = 2 880 000 bytes, about 2.75 MiB (2.88 MB).

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data | **Fully recoverable** | Permanently discarded |
| Use | Text, program files, spreadsheets | Images, audio, video |
| Methods | Run-length encoding, dictionary encoding | JPEG, MP3 |

**Lossless must be used where every bit matters** — a compressed program or spreadsheet that lost data would be corrupt. Lossy is acceptable where the discarded data is imperceptible to human senses.

**Run-length encoding** replaces runs of identical values with a value and a count. It works well on images with large blocks of uniform colour and **badly on noisy or photographic data**, where it can produce a larger file than the original.

How each file type can be compressed (1.3):

| File | Typical method |
|---|---|
| Text | Lossless only: RLE on repeated characters, or dictionary encoding that replaces repeated words with short references |
| Bitmap image | Lossless RLE on runs of the same colour, or lossy (reduce colour depth or resolution, or discard detail the eye barely sees) |
| Vector graphic | Usually already small; lossless compression of the drawing list |
| Sound | Lossy: reduce sampling rate or resolution, or remove sounds outside human hearing or masked by louder sounds; lossless methods also exist |

## Frequently asked questions

**What is the difference between kibi and kilo?**
Kibi means 2¹⁰ = 1024; kilo means 10³ = 1000. The 9618 syllabus expects you to use both correctly.

**Where is BCD used?**
In digital clocks, calculators and displays, where each denary digit is shown separately, and in financial systems that must store denary values exactly.

**Why is two's complement preferred to one's complement?**
It has a single zero and allows subtraction by addition without an end-around carry, so the hardware is simpler.

## Exam traps

- Forgetting to add 1 after inverting in two's complement.
- Using a logical rather than arithmetic right shift on a signed value.
- Naming the overflow flag for an unsigned range overflow — that case sets the carry flag; the overflow flag is for signed (two's complement) overflow.
- Defining resolution as a pixel density rather than a pixel count.
- Claiming lossy compression is always worse — it is appropriate for perceptual media.
- Assuming RLE always reduces file size.

## Self-test

1. Convert 202 to binary and to hexadecimal.
2. Give the two's complement of +5 in 8 bits, and the 8-bit range.
3. Why is two's complement preferred to sign-and-magnitude?
4. Which status flag is set when an unsigned addition exceeds a register's range, and which flag is set for signed overflow instead?
5. When is run-length encoding a poor choice?

**Answers:** 1. 11001010 and CA. 2. −5 is 11111011; the range is −128 to +127. 3. It has a single representation of zero and allows subtraction to be carried out by addition, so no separate subtraction hardware is needed. 4. Unsigned range overflow sets the **carry** flag; the **overflow** flag is reserved for signed two's complement overflow, a different condition. 5. On noisy or photographic data with few repeated adjacent values — it can produce a file larger than the original.
