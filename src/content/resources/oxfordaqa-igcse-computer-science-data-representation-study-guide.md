---
title: "OxfordAQA IGCSE Computer Science (9210): Data representation -- Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA International GCSE Computer Science 9210 guide: number bases to 255, binary addition and shifts, ASCII, Unicode, bitmaps, sound, Huffman and RLE."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "Check whether the 9210 specification requires Huffman coding or only run-length encoding, and whether hexadecimal is limited to 8-bit values. 2026-11-08 recheck: checked against spec v3.3 section 3.3: Huffman and RLE both required, conversions 0-255, decimal prefixes only; added Huffman section and worked example, removed off-spec overflow/metadata/stereo; please re-review; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

A computer can only store and process two states, which we write as 0 and 1. Data representation explains how numbers, text, pictures and sound are all turned into patterns of bits. In OxfordAQA International GCSE Computer Science (9210), section 3.3 mixes short calculations (conversions, file sizes, Huffman bit counts) with explanations, and the calculations are reliable marks if your method is tidy.

## What does the 9210 specification cover in data representation?

| Spec ref | Content |
|---|---|
| 3.3.1 | Number bases: decimal (base 10), binary (base 2), hexadecimal (base 16); why computers use binary and why hexadecimal is used |
| 3.3.2 | Converting between binary, decimal and hexadecimal for values 0 to 255 |
| 3.3.3 | Units: bit, byte, and the decimal prefixes kilo, mega, giga, tera |
| 3.3.4 | Adding two binary numbers; logical binary shifts and their uses |
| 3.3.5 | Character sets: 7-bit ASCII and Unicode |
| 3.3.6 | Bitmap images: pixels, size in pixels, colour depth, file size, converting between binary and images |
| 3.3.7 | Sound: sampling, sampling rate, sample resolution, file size |
| 3.3.8 | Data compression: Huffman coding and run length encoding (RLE) |

## Why do computers use binary, and why is hexadecimal used?

Computers use binary because their circuits store and switch between two states, which represent 0 and 1. Every type of data (text, images, sound, numbers) and every instruction is a bit pattern; the same pattern can mean different things depending on how it is interpreted.

**Hexadecimal** (base 16) uses 0 to 9 and A to F (A = 10 up to F = 15). It is used because one hex digit stands for exactly four bits, so a byte is two hex digits. That makes it shorter and easier for people to read and write, with fewer mistakes, than long strings of 0s and 1s. The computer itself still works in binary.

## How do you convert between binary, decimal and hexadecimal?

The specification limits conversions to the range **0 to 255**, so the largest values you meet are 255, 1111 1111 and FF.

The place values of an 8-bit binary number are 128, 64, 32, 16, 8, 4, 2, 1.

- **Binary to decimal**: add the place values where there is a 1.
- **Decimal to binary**: subtract the largest place value that fits, write 1, and repeat; write 0 for place values that do not fit.
- **Binary to hex**: split into two groups of four bits (nibbles) and convert each.
- **Hex to binary**: replace each hex digit with its 4-bit pattern.
- **Decimal to hex**: divide by 16; the whole-number answer is the first digit and the remainder is the second (or go via binary).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--15-binary-decimal-hex.webp" width="900" height="990" alt="Two panels for the byte 10110101. Binary to decimal: place values 128, 64, 32, 16, 8, 4, 2, 1 sit above the bits; the place values under a 1 are added: 128 + 32 + 16 + 4 + 1 = 181. Binary to hex: the byte is split into two groups of four bits, 1011 and 0101. 1011 is 11, which is the hex digit B, and 0101 is 5, so the byte is B5. Check: 11 times 16 plus 5 is 181. One hex digit stands for exactly four bits." loading="lazy">
  <figcaption>Add the place values under each 1 for decimal; split into two groups of four bits for hex.</figcaption>
</figure>


## What units of information does 9210 use?

A **bit** (b) is a 0 or a 1, the fundamental unit of information. A **byte** (B) is 8 bits. The specification uses **decimal prefixes** (powers of 10) in all assessments: 1 kB = 1,000 bytes, 1 MB = 1,000 kB, 1 GB = 1,000 MB, 1 TB = 1,000 GB. Do not use 1,024.

## How do you add binary numbers and apply a binary shift?

Work from the right: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1), 1 + 1 + 1 = 11 (write 1, carry 1). The specification uses a maximum of 8 bits, and answers will not need a carry beyond the eighth bit.

A **logical binary shift** moves every bit left or right and fills the gaps with zeros. Shifting left by n places multiplies by 2 to the power n; shifting right by n places divides by 2 to the power n, with any remainder lost. This is the situation where shifts are used: simple multiplication and division by powers of 2. Only logical shifts are required, and fractions are not needed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--16-binary-addition.webp" width="900" height="850" alt="Column addition of 01101101 (109) and 00111011 (59). Working from the right, the carries are computed column by column and shown as gold circles above the columns that receive a carry. The result is 10101000, which is 168 in decimal (128 + 32 + 8) and matches 109 + 59. The rules are: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1) and 1 + 1 + 1 = 11 (write 1, carry 1)." loading="lazy">
  <figcaption>Work from the right, writing the digit and carrying when a column makes 2 or more.</figcaption>
</figure>


## What are ASCII and Unicode?

A **character set** is a defined list of characters, each with a binary code. **7-bit ASCII** gives 128 codes (0 to 127) for English letters, digits, punctuation and control codes. Codes are grouped and run in sequence: 'A' is 65, 'B' is 66 and so on, so if you know the code for 'A' you can calculate any other capital letter; the same applies to lower-case letters and digits.

**Unicode** exists to represent the characters of many different alphabets and special symbols, giving a far greater range of characters than ASCII. Unicode uses **the same codes as ASCII up to 127**. You do not need to know UTF-8 or UTF-16.

## How is a bitmap image stored?

A **pixel** (picture element) is a single point in a graphical image; a screen displays a picture as thousands or millions of pixels in rows and columns. A bitmap's **size** is written as width x height in pixels, and its **colour depth** is the number of bits used for each pixel. With colour depth D there are 2 to the power D possible colours (1 bit: 2 colours, 8 bits: 256 colours).

File size: **bits = W x H x D**, and **bytes = W x H x D / 8**. More pixels or a greater colour depth give a larger file.

You must also convert between binary and images: given a bit pattern and the width, draw the pixels row by row (for a 1-bit image, 1 might be black and 0 white); given a drawing, write the bit pattern.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--18-bitmap-image.webp" width="900" height="1010" alt="An 8 by 8 pixel image drawn from its bit pattern, where 1 is a black pixel and 0 is white. The eight rows 00111100, 01000010, 10100101, 10000001, 10100101, 10011001, 01000010 and 00111100 are shown beside the grid and together form a smiley face (an illustrative pattern). A colour depth of D bits gives 2 to the power D colours: 1 bit gives 2 colours and 8 bits give 256. File size in bytes is width times height times colour depth divided by 8; for a 640 by 480 image with 24-bit colour depth that is 921,600 bytes or 921.6 kB." loading="lazy">
  <figcaption>A bitmap is a grid of pixels, each stored with colour-depth bits; file size grows with pixels and depth.</figcaption>
</figure>


## How is sound stored digitally?

Sound is **analogue** and must be converted to digital form. The wave is **sampled**: a sample is a measure of the amplitude at a point in time. The **sampling rate** is the number of samples per second, in hertz (1 Hz = 1 sample per second). The **sample resolution** is the number of bits per sample.

File size: **bits = rate (Hz) x resolution x seconds**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--19-sound-sampling.webp" width="900" height="980" alt="A graph of an analogue sound wave against time with horizontal lines marking eight amplitude levels (an illustrative 3-bit resolution) and sixteen evenly spaced samples shown as gold dots snapped to the nearest level. The sampling rate is the number of samples per second in hertz; the sample resolution is the number of bits per sample. File size in bits equals rate times resolution times seconds; for 22,050 Hz, 16 bits and 20 seconds that is 7,056,000 bits, which is 882,000 bytes or 882 kB." loading="lazy">
  <figcaption>Sampling rate is samples per second; resolution is bits per sample.</figcaption>
</figure>


## How do Huffman coding and run length encoding compress data?

Data is compressed so it needs less storage and can be transmitted more quickly.

**Huffman coding** builds a tree so that the most frequent characters get the shortest codes:

1. Count how often each character appears.
2. Repeatedly join the two items with the lowest totals into a new node whose total is their sum, until one root remains.
3. Label branches 0 and 1 (usually left 0, right 1). A character's code is the path from the root to it.
4. Compressed size = the sum of (frequency x code length) for every character.

To **interpret** a given tree, follow the branches from the root to the character and write down the bits.

**Run length encoding (RLE)** stores **frequency/data pairs**: how many times a value repeats, then the value. The specification's own example: `0000011100000011` becomes **5 0 3 1 6 0 2 1**. RLE works well when there are long runs of the same value, as in simple bitmaps, and badly when values change often.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--21-run-length-encoding.webp" width="900" height="980" alt="Three panels on run length encoding, which stores frequency then value. Encode: the 16-bit row 0000011100000011 has runs of five 0s, three 1s, six 0s and two 1s, giving 5 0 3 1 6 0 2 1. Decode: the pairs 3 0, 2 1 and 3 0 give 00011000. Poor case: an alternating row 0101010101010101 has 16 runs of length one, so it needs 16 pairs, which is 32 numbers, longer than the original (illustrative example). RLE works best with long runs of the same value, as in simple bitmaps." loading="lazy">
  <figcaption>RLE stores the count and then the value; it works best on long runs.</figcaption>
</figure>


## Worked example 1: conversions and addition

(a) Convert 10110101 to decimal: 128 + 32 + 16 + 4 + 1 = **181**.

(b) Convert 181 to hexadecimal: 1011 0101 gives 1011 = 11 = B and 0101 = 5, so **B5**. Check: 11 x 16 + 5 = 181.

(c) Convert 200 to hexadecimal: 200 / 16 = 12 remainder 8, so **C8** (binary 1100 1000).

(d) Add 01101101 (109) and 00111011 (59):

```
  01101101
+ 00111011
  --------
  10101000
```

The result 10101000 is 128 + 32 + 8 = **168**, which matches 109 + 59.

## Worked example 2: shifts

Take 00110101 (53). Shift left by 2 places: 11010100 = 212 = 53 x 4. Shift 11010100 right by 3 places: 00011010 = 26, which is 212 / 8 = 26.5 with the remainder lost.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--17-binary-shifts.webp" width="900" height="920" alt="Three rows of eight bit cells. The start value 00110101 is 53. Shifted left by 2 places it becomes 11010100, which is 212, equal to 53 times 4; the two leftmost bits are lost and two new zeros fill the right. Shifting 11010100 right by 3 places gives 00011010, which is 26; the three rightmost bits 100 are lost and three new zeros fill the left, so 212 divided by 8 is 26.5 with the remainder lost. Shifting left by n places multiplies by 2 to the power n and shifting right divides by 2 to the power n." loading="lazy">
  <figcaption>A left shift multiplies by a power of 2; a right shift divides and loses the remainder.</figcaption>
</figure>


## Worked example 3: file sizes

An image is 640 x 480 pixels with a colour depth of 24 bits. Bytes = 640 x 480 x 24 / 8 = 921,600 bytes = **921.6 kB**.

A sound clip is sampled at 22,050 Hz with a sample resolution of 16 bits for 20 seconds. Bits = 22,050 x 16 x 20 = 7,056,000 bits = 882,000 bytes = **882 kB**.

## Worked example 4: Huffman coding "BANANAS"

Frequencies: A = 3, N = 2, B = 1, S = 1.

1. Join the two lowest, B (1) and S (1), into a node of 2.
2. The lowest are now N (2) and the B/S node (2); join them into a node of 4.
3. Join A (3) with the node of 4 to make the root (7).

With left = 0 and right = 1, where A is on the left of the root, N on the left of the 4-node and B on the left of the 2-node: **A = 0, N = 10, B = 110, S = 111**.

Compressed size = A 3 x 1 + N 2 x 2 + B 1 x 3 + S 1 x 3 = 3 + 4 + 3 + 3 = **13 bits**.

Uncompressed in 7-bit ASCII = 7 characters x 7 bits = **49 bits**, so Huffman coding saves 49 - 13 = **36 bits**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-data-representation-study-guide--20-huffman-bananas.webp" width="900" height="1000" alt="A Huffman tree for the word BANANAS, built in code. Frequencies are A 3, N 2, B 1 and S 1. B and S join to make a node of 2; that node joins N to make a node of 4; that node joins A to make the root of 7. Labelling left branches 0 and right branches 1 gives A = 0, N = 10, B = 110 and S = 111. The compressed size is 3 times 1 plus 2 times 2 plus 1 times 3 plus 1 times 3, which is 13 bits, compared with 7 characters times 7 bits, which is 49 bits in 7-bit ASCII, a saving of 36 bits." loading="lazy">
  <figcaption>Frequent characters sit near the root and get short codes: 13 bits instead of 49.</figcaption>
</figure>


## Worked example 5: RLE

A bitmap row is `1111000000001111`. As frequency/data pairs: four 1s, eight 0s, four 1s, so **4 1 8 0 4 1**. Decoding `3 0 2 1 3 0` gives `00011000`.

## Common mistakes

- Using 1,024 instead of 1,000 for a kilobyte. 9210 uses powers of 10.
- Saying hexadecimal is "faster for the computer". It is a shorthand for people.
- Forgetting to divide by 8 when the answer is in bytes.
- Counting Huffman bits per distinct character instead of multiplying by each character's frequency.
- Writing RLE pairs as value then frequency. The specification uses frequency then value.
- Joining nodes that are not the two lowest when building a Huffman tree.
- Shifting in the wrong direction: left multiplies, right divides.

## Exam technique

For **convert** or **calculate**, show every step: place values, the working and the answer with its unit. For file-size questions, write the formula, substitute and state the unit. For Huffman questions, write the frequency table first, show each join, then the codes and the bit total. For **explain**, give a reason: "hexadecimal is used because one digit represents four bits, so it is shorter and easier to read".

## Frequently asked questions

**Does 9210 require Huffman coding as well as RLE?**
Yes. Section 3.3.8 requires you to build and interpret a Huffman tree, calculate the bits for compressed data and for uncompressed ASCII, and represent data as RLE frequency/data pairs.

**What range of numbers must I convert?**
Decimal 0 to 255, which is binary 0000 0000 to 1111 1111 and hexadecimal 00 to FF.

**Does Unicode replace ASCII codes?**
No. Unicode uses the same codes as ASCII for 0 to 127 and adds many more codes for other alphabets and symbols.

**Do I need to know about arithmetic shifts or overflow?**
No. Only logical shifts on up to 8 bits are required, and addition questions will not carry beyond the eighth bit.

## Check your understanding

1. Convert 00101101 to decimal. *32 + 8 + 4 + 1 = 45.*
2. Convert 3F to decimal. *3 x 16 + 15 = 63.*
3. How many colours can a colour depth of 5 bits give? *2 to the power 5 = 32.*
4. State the effect of shifting 00011000 left by 2 places. *Multiplied by 4: 24 becomes 96 (01100000).*
5. The ASCII code for 'A' is 65. What is the code for 'E'? *69.*
6. A sound has a sampling rate of 8,000 Hz, a resolution of 8 bits and lasts 10 seconds. Give its size in bytes. *8,000 x 8 x 10 = 640,000 bits = 80,000 bytes.*
7. Write `0000000011111111` in RLE. *8 0 8 1.*
8. In a Huffman tree, why do frequent characters have short codes? *They sit nearer the root, so fewer branches (bits) are needed, which minimises the total size.*

## Related pages

- [Data representation revision notes](/resources/oxfordaqa-igcse-computer-science-data-representation-revision-notes/)
- [Data representation practice questions](/resources/oxfordaqa-igcse-computer-science-data-representation-practice/)

## Official specification

OxfordAQA, *International GCSE Computer Science (9210)*, for exams May/June 2019 onwards, Version 3.3, section 3.3 "Data representation".
