---
title: "OxfordAQA IGCSE Computer Science: Data Representation — Revision Notes"
seoTitle: "OxfordAQA IGCSE CS Data Representation Revision Notes"
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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--15-binary-decimal-hex.webp" width="900" height="990" alt="Two panels for the byte 10110101. Binary to decimal: place values 128, 64, 32, 16, 8, 4, 2, 1 sit above the bits; the place values under a 1 are added: 128 + 32 + 16 + 4 + 1 = 181. Binary to hex: the byte is split into two groups of four bits, 1011 and 0101. 1011 is 11, which is the hex digit B, and 0101 is 5, so the byte is B5. Check: 11 times 16 plus 5 is 181. One hex digit stands for exactly four bits." loading="lazy">
  <figcaption>Add the place values under each 1 for decimal; split into two groups of four bits for hex.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--16-binary-addition.webp" width="900" height="850" alt="Column addition of 01101101 (109) and 00111011 (59). Working from the right, the carries are computed column by column and shown as gold circles above the columns that receive a carry. The result is 10101000, which is 168 in decimal (128 + 32 + 8) and matches 109 + 59. The rules are: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1) and 1 + 1 + 1 = 11 (write 1, carry 1)." loading="lazy">
  <figcaption>Work from the right, writing the digit and carrying when a column makes 2 or more.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--17-binary-shifts.webp" width="900" height="920" alt="Three rows of eight bit cells. The start value 00110101 is 53. Shifted left by 2 places it becomes 11010100, which is 212, equal to 53 times 4; the two leftmost bits are lost and two new zeros fill the right. Shifting 11010100 right by 3 places gives 00011010, which is 26; the three rightmost bits 100 are lost and three new zeros fill the left, so 212 divided by 8 is 26.5 with the remainder lost. Shifting left by n places multiplies by 2 to the power n and shifting right divides by 2 to the power n." loading="lazy">
  <figcaption>A left shift multiplies by a power of 2; a right shift divides and loses the remainder.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--18-bitmap-image.webp" width="900" height="1010" alt="An 8 by 8 pixel image drawn from its bit pattern, where 1 is a black pixel and 0 is white. The eight rows 00111100, 01000010, 10100101, 10000001, 10100101, 10011001, 01000010 and 00111100 are shown beside the grid and together form a smiley face (an illustrative pattern). A colour depth of D bits gives 2 to the power D colours: 1 bit gives 2 colours and 8 bits give 256. File size in bytes is width times height times colour depth divided by 8; for a 640 by 480 image with 24-bit colour depth that is 921,600 bytes or 921.6 kB." loading="lazy">
  <figcaption>A bitmap is a grid of pixels, each stored with colour-depth bits; file size grows with pixels and depth.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--19-sound-sampling.webp" width="900" height="980" alt="A graph of an analogue sound wave against time with horizontal lines marking eight amplitude levels (an illustrative 3-bit resolution) and sixteen evenly spaced samples shown as gold dots snapped to the nearest level. The sampling rate is the number of samples per second in hertz; the sample resolution is the number of bits per sample. File size in bits equals rate times resolution times seconds; for 22,050 Hz, 16 bits and 20 seconds that is 7,056,000 bits, which is 882,000 bytes or 882 kB." loading="lazy">
  <figcaption>Sampling rate is samples per second; resolution is bits per sample.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--21-run-length-encoding.webp" width="900" height="980" alt="Three panels on run length encoding, which stores frequency then value. Encode: the 16-bit row 0000011100000011 has runs of five 0s, three 1s, six 0s and two 1s, giving 5 0 3 1 6 0 2 1. Decode: the pairs 3 0, 2 1 and 3 0 give 00011000. Poor case: an alternating row 0101010101010101 has 16 runs of length one, so it needs 16 pairs, which is 32 numbers, longer than the original (illustrative example). RLE works best with long runs of the same value, as in simple bitmaps." loading="lazy">
  <figcaption>RLE stores the count and then the value; it works best on long runs.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--20-huffman-bananas.webp" width="900" height="1000" alt="A Huffman tree for the word BANANAS, built in code. Frequencies are A 3, N 2, B 1 and S 1. B and S join to make a node of 2; that node joins N to make a node of 4; that node joins A to make the root of 7. Labelling left branches 0 and right branches 1 gives A = 0, N = 10, B = 110 and S = 111. The compressed size is 3 times 1 plus 2 times 2 plus 1 times 3 plus 1 times 3, which is 13 bits, compared with 7 characters times 7 bits, which is 49 bits in 7-bit ASCII, a saving of 36 bits." loading="lazy">
  <figcaption>Frequent characters sit near the root and get short codes: 13 bits instead of 49.</figcaption>
</figure>

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

## More resources on this topic

[Data representation study guide](/resources/oxfordaqa-igcse-computer-science-data-representation-study-guide/) |
[Data representation practice questions](/resources/oxfordaqa-igcse-computer-science-data-representation-practice/) |
[Computer systems revision notes](/resources/oxfordaqa-igcse-computer-science-computer-systems-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.3 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
