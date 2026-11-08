---
title: "OxfordAQA IGCSE Computer Science: Data Representation — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
description: "Recall notes on number bases, units, binary addition and shifts, ASCII, Unicode, bitmaps, sound, Huffman coding and RLE for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Data representation (topic 3.3 of OxfordAQA International GCSE Computer Science 9210) explains how numbers,
text, images and sound are stored in binary, and how data is compressed with Huffman coding and run length
encoding. It is assessed on Paper 2, mostly through short calculations -- conversions, binary addition, file
sizes, Huffman bit counts -- where tidy working earns reliable marks.

Condensed for the final weeks. For the full explanation, use the
[Data representation study guide](/resources/oxfordaqa-igcse-computer-science-data-representation-study-guide/).
Practise with the [Data representation practice questions](/resources/oxfordaqa-igcse-computer-science-data-representation-practice/).

## Syllabus coverage

OxfordAQA 9210 specification (Version 3.4), section 3.3:

- **3.3.1** Number bases -- decimal, binary, hexadecimal; why computers use binary; why hex is used
- **3.3.2** Converting between number bases -- values 0 to 255 (maximum 1111 1111 / FF)
- **3.3.3** Units of information -- bit, byte, kB, MB, GB, TB (powers of 10)
- **3.3.4** Binary arithmetic -- adding two binary numbers; logical binary shifts (maximum 8 bits)
- **3.3.5** Character encoding -- 7-bit ASCII and Unicode
- **3.3.6** Representing images -- pixels, size, colour depth, file size, binary to image and back
- **3.3.7** Representing sound -- sampling, sampling rate, sample resolution, file size
- **3.3.8** Data compression -- Huffman coding and run length encoding (RLE)

Both Huffman coding and RLE are required, and number conversions are limited to 0-255.

## Number bases and conversions

| Base | Digits | Example (decimal 201) |
|---|---|---|
| Decimal (base 10) | 0-9 | 201 |
| Binary (base 2) | 0, 1 | 1100 1001 |
| Hexadecimal (base 16) | 0-9, A-F (A = 10 ... F = 15) | C9 |

- Computers use **binary** for all data and instructions because their circuits have **two states** (on/off).
  The same bit pattern could represent text, an image, sound or an integer depending on how it is used.
- **Hexadecimal** is used because it is a shorter way of writing binary: one hex digit = 4 bits, so it is
  easier for people to read and less prone to errors.
- 8-bit place values: 128, 64, 32, 16, 8, 4, 2, 1.
- **Binary -> hex**: split into two groups of 4 bits: 1100 = C, 1001 = 9 -> C9.
- **Decimal -> hex**: divide by 16: 201 ÷ 16 = 12 remainder 9 -> C9.

## Units

A **bit** (b) is a 0 or 1 -- the fundamental unit of information. A **byte** (B) is 8 bits.
In 9210 exams the prefixes are **powers of 10**:

| Unit | Value |
|---|---|
| 1 kilobyte (kB) | 1,000 bytes |
| 1 megabyte (MB) | 1,000 kB |
| 1 gigabyte (GB) | 1,000 MB |
| 1 terabyte (TB) | 1,000 GB |

## Binary addition and shifts

```
  0101 1011   (91)
+ 0011 0110   (54)
  ---------
  1001 0001   (145)    rules: 0+0=0, 0+1=1, 1+1=0 carry 1, 1+1+1=1 carry 1
```

Answers are at most 8 bits and will not carry beyond the eighth bit.

**Logical shift**: move every bit left or right and fill the gap with 0s. Each place **left multiplies by 2**;
each place **right divides by 2** (whole-number result).

```
0001 0110 (22)  shift left 2  -> 0101 1000 (88)   = 22 × 4
0001 0110 (22)  shift right 1 -> 0000 1011 (11)   = 22 ÷ 2
```

## Character encoding

- A **character set** is the list of characters a computer can represent, each with a unique code.
- **7-bit ASCII**: 128 characters -- English letters, digits, punctuation and control codes.
- Codes run **in sequence**: 'A' = 65, 'B' = 66 ... so 'E' = 65 + 4 = **69**. The same is true for lower-case
  letters and digits.
- **Unicode** represents the characters of many different alphabets and special symbols -- a far greater range.
  Unicode uses the **same codes as ASCII up to 127**. (UTF-8, UTF-16 are not required.)

## Images

- A **pixel** (picture element) is a single point in an image; a screen divides the display into rows and
  columns of pixels.
- **Size** = width × height in pixels. **Colour depth** = number of bits per pixel (1 bit = 2 colours,
  2 bits = 4 colours, 8 bits = 256 colours).
- More pixels or a higher colour depth -> better quality but a **larger file**.

**File size (bytes) = W × H × D ÷ 8**

```
640 × 480 pixels, colour depth 8 bits
640 × 480 × 8 = 2,457,600 bits ÷ 8 = 307,200 bytes = 307.2 kB
```

Binary to image: with 1-bit colour (1 = black, 0 = white), the row `00111100` is two white pixels, four black,
two white.

## Sound

Sound is **analogue**; it is **sampled** to make a digital version. A **sample** is a measure of the amplitude at a
point in time.

- **Sampling rate** = samples per second, in hertz (1 Hz = 1 sample per second).
- **Sample resolution** = number of bits per sample.

**File size (bits) = rate × resolution × seconds**

```
10 seconds at 44,100 Hz with 16-bit resolution
44,100 × 16 × 10 = 7,056,000 bits ÷ 8 = 882,000 bytes = 882 kB
```

## Compression: Huffman coding and RLE

Data is compressed to use **less storage** and to **transmit faster** over networks.

**Huffman coding** gives the most frequent characters the **shortest codes**, using a tree.

### Worked example: "BANANA"

```
Frequencies: A = 3, N = 2, B = 1
Build: join the two lowest (B 1 + N 2 = 3), then join that with A 3 (= 6)
            (6)
          0/   \1
         A     (3)
             0/   \1
             B     N
Codes: A = 0, B = 10, N = 11
BANANA = 10 0 11 0 11 0 -> 3×1 + 1×2 + 2×2 = 9 bits
7-bit ASCII: 6 characters × 7 = 42 bits -> saving of 33 bits
```

Read a code by following the branches from the root to the character (0 for left, 1 for right, unless the
question labels them differently).

**Run length encoding (RLE)** stores **frequency/data pairs**: specification example
`0000011100000011` -> **5 0 3 1 6 0 2 1**. It works well when data has long runs of the same value, such as simple
bitmap images.

## Common mistakes / exam traps

- Using 1,024 instead of 1,000 for kB -- 9210 uses powers of 10.
- Forgetting to divide by 8 when the question asks for bytes.
- Writing an RLE pair in the wrong order -- the specification uses **frequency then value**.
- Counting Huffman bits per distinct character instead of per **occurrence** of each character.
- Saying hexadecimal is used "because computers use it" -- computers use binary; hex is for people.
- Losing a carry when adding binary; write the carries above each column.

## Frequently asked questions

**Does 9210 require Huffman coding?**
Yes. Section 3.3.8 requires you to build and interpret a Huffman tree and calculate the bits needed, as well as
use run length encoding.

**Why is Unicode needed if ASCII exists?**
7-bit ASCII has only 128 codes, enough for English. Unicode represents the characters of many alphabets and
special symbols, and it keeps the same codes as ASCII for the first 128.

**What does a logical left shift of one place do?**
It moves every bit one place to the left and puts a 0 on the right, which multiplies the value by 2.

## Related resources

[Data representation study guide](/resources/oxfordaqa-igcse-computer-science-data-representation-study-guide/) |
[Data representation practice questions](/resources/oxfordaqa-igcse-computer-science-data-representation-practice/) |
[Computer systems revision notes](/resources/oxfordaqa-igcse-computer-science-computer-systems-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.3 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
