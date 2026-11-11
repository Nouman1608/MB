---
title: "Cambridge O-Level Computer Science: Data Representation (2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data Representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
description: "Guide to Topic 1 of Cambridge O Level Computer Science 2210 (2026-2028): binary, hex, overflow, two's complement, text, sound, images and compression."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Data Representation**, the first of ten
topics in Cambridge O-Level Computer Science (2210), for examination
2026-2028. The syllabus explicitly shares its content and topic
structure with Cambridge IGCSE Computer Science (0478) -- textbooks
endorsed for 0478 are suitable for use with this O-Level too.

## Where this fits in 2210

The ten topics are grouped into two broad strands: Computer systems
(topics 1-6, which Data Representation opens) and Algorithms,
programming and logic (topics 7-10). Understanding how data is
represented underpins later topics on hardware, software and
programming, where data types and storage limits recur constantly.

## Syllabus coverage

**CAMBRIDGE O-LEVEL COMPUTER SCIENCE (2210) — TOPIC 1 DATA
REPRESENTATION**

- 1.1 Number systems — denary, binary and hexadecimal, converting
between them, binary addition and overflow, logical binary shifts, and
two's complement for negative integers
- 1.2 Text, sound and images — how and why a computer represents text
using character sets, sound (sample rate and resolution), and images
(resolution and colour depth)
- 1.3 Data storage and compression — data storage units from bit to
exbibyte, calculating file size, and lossy and lossless compression

Sitting alongside Data transmission, Hardware, Software, The internet
and its uses, and Automated and emerging technologies within the
Computer systems strand, Data Representation covers how numbers, text,
sound and images are represented and stored in binary form inside a
computer system, including the compression of data to reduce storage
and transmission requirements.

## How to approach it

Binary and hexadecimal number conversion is a foundational skill
tested throughout this syllabus, not just within Topic 1, so practise
converting between denary, binary and hexadecimal until it is fluent
rather than something you have to work out from first principles under
exam pressure. This O-Level's own syllabus breaks the topic into the same three
numbered strands as the sibling 0478 syllabus — number systems,
text/sound/image representation, and data storage and compression —
so structuring your revision around those three strands follows the
syllabus's own structure directly. Understanding
*why* compression matters (storage and transmission efficiency) rather
than just the mechanics of an algorithm also strengthens answers on the
more applied questions this topic can generate.

## Official syllabus

Cambridge O-Level Computer Science (2210) syllabus for examination
2026-2028 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf).

## Number systems

Computers store everything as binary because a circuit has two reliable states. Hexadecimal is used as a shorthand for humans: one hex digit maps exactly to four binary digits, so long binary strings become readable.

```
Denary 205  ->  Binary 11001101  ->  Hex CD

128 64 32 16  8  4  2  1
  1  1  0  0  1  1  0  1     = 128+64+8+4+1 = 205

Split into nibbles: 1100 = 12 = C,  1101 = 13 = D  ->  CD
```

Hexadecimal appears in MAC addresses, IP version 6 addresses, colour codes and memory dumps — knowing where it is used is examinable alongside the conversion.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-representation--12-denary-binary-hex.webp" width="900" height="870" alt="Eight place values from 128 to 1 sit above the bits 11001101, which add up to 205. The bits split into nibbles 1100 and 1101, worth 12 and 13, written as hex digits C and D, giving CD." loading="lazy">
  <figcaption>Each hex digit stands for four bits, so 205 = 11001101 = CD.</figcaption>
</figure>


## Binary arithmetic and overflow

Add binary as in denary, carrying when a column reaches 2. **Overflow** occurs when the result needs more bits than the register holds — adding two 8-bit numbers giving a 9-bit answer. The extra bit is lost and the stored result is wrong.

A **logical shift** left multiplies by two, a shift right divides by two. Bits shifted out are lost, which is another route to inaccuracy.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-representation--13-overflow-and-shifts.webp" width="900" height="960" alt="Two 8-bit numbers are added to give a 9-bit answer; the 9th bit falls outside the register and is lost, leaving the wrong value 49. Below, the number 13 is shifted left to make 26 and right to make 6, with the bit shifted out lost." loading="lazy">
  <figcaption>Overflow loses the extra bit; a left shift doubles and a right shift halves.</figcaption>
</figure>


## Text, sound and images

**Text** is stored using character sets. ASCII uses 7 bits for 128 characters, extended ASCII 8 bits for 256, and **Unicode** covers a very wide range of the world's writing systems — a fixed-width Unicode encoding uses more bits per character than ASCII, though UTF-8 (the most common Unicode encoding) keeps plain ASCII characters at one byte.

**Sound** is captured by sampling the analogue wave. **Sample rate** is how many samples per second, **sample resolution** is the number of bits per sample. Raising either improves accuracy and increases file size.

**Images** are stored as pixels. **Resolution** is the number of pixels, **colour depth** the bits per pixel. A higher colour depth allows more colours: n bits gives 2^n colours.

```
Image file size = width x height x colour depth (in bits)
Sound file size = sample rate x sample resolution x seconds
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-representation--16-sound-sampling.webp" width="900" height="870" alt="A smooth sound wave is sampled at regular intervals; each sample is a dot rounded to the nearest of eight levels. Arrows mark the time between samples (sample rate) and the size of a level step (resolution). The file size formula is shown below." loading="lazy">
  <figcaption>Sample rate is how often the wave is measured; resolution is how many bits each measurement uses.</figcaption>
</figure>


## Compression

**Lossless** compression removes redundancy so the original can be perfectly reconstructed — run-length encoding, and essential for text and program files where any loss would corrupt the data.

**Run-length encoding (RLE)** works by replacing runs of identical, repeated values with a single value and a count of how many times it repeats, so highly repetitive data — such as a simple image with large blocks of a single colour — is stored far more compactly. RLE can, however, sometimes produce a **larger** file than the original: on noisy or photographic data, where pixel values rarely repeat exactly, encoding each short run as a (value, count) pair can take more space than simply storing the original values, which is why RLE suits simple graphics far better than continuously varying photographic images.

**Lossy** compression permanently discards data the user is unlikely to notice, giving much smaller files — acceptable for photographs, music and video, unacceptable for a spreadsheet.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-representation--14-run-length-encoding.webp" width="900" height="930" alt="Two rows of 12 pixels. The simple row compresses to two runs (8 white, 4 black), 4 values. The noisy row has 10 runs, 20 values, which is larger than the original 12." loading="lazy">
  <figcaption>RLE shrinks repetitive data but can enlarge noisy data.</figcaption>
</figure>


## Worked example

An image is 800 by 600 pixels with a colour depth of 24 bits. Find the file size in mebibytes (MiB).

```
bits  = 800 x 600 x 24 = 11 520 000 bits
bytes = 11 520 000 / 8 = 1 440 000 bytes
KiB   = 1 440 000 / 1024 = 1406.25 KiB
MiB   = 1406.25 / 1024   = 1.37 MiB
```

Dividing by 8 to reach bytes, then by 1024 twice, is where most errors occur.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-cambridge-computer-science-data-representation--15-image-file-size.webp" width="900" height="1050" alt="A pixel grid is labelled 800 pixels by 600 pixels with 24 bits per pixel. Below, a chain of conversions: 11 520 000 bits, divide by 8 to 1 440 000 bytes, divide by 1024 to 1406.25 KiB, divide by 1024 to 1.37 MiB." loading="lazy">
  <figcaption>Convert bits to bytes (divide by 8), then divide by 1024 twice to reach MiB.</figcaption>
</figure>


## Common mistakes

Confusing sample rate with sample resolution. Dividing by 1000 rather than 1024 when converting bytes to kibibytes, or labelling the answer KB or MB instead of KiB or MiB. Forgetting to convert bits to bytes at all. Saying lossy compression "removes unnecessary data" without noting it is permanent. Describing hexadecimal as something the computer stores — the machine stores binary; hex is for human readability.

## Quick revision checklist

- Convert between denary, binary and hexadecimal in both directions.
- Add binary numbers, and explain overflow and logical shifts.
- Compare ASCII, extended ASCII and Unicode.
- Calculate image and sound file sizes with correct unit conversion.
- Distinguish lossless from lossy compression and justify which suits a given file type.

## Frequently asked questions

**Is O Level Computer Science 2210 the same as IGCSE 0478?**
The 2210 syllabus shares its content and ten-topic structure with Cambridge IGCSE Computer Science 0478, and textbooks endorsed for 0478 are suitable for 2210.

**Can run-length encoding make a file bigger?**
Yes. On noisy or photographic data where values rarely repeat, storing each short run as a value and count can take more space than the original, so RLE suits simple graphics better.

**Where is hexadecimal used in computing?**
Hexadecimal is used in MAC addresses, IPv6 addresses, colour codes and memory dumps. It is a shorthand for humans; the computer itself stores binary.

**What is a common mistake in O Level Computer Science file size questions?**
Dividing by 1000 instead of 1024, labelling the answer KB or MB instead of KiB or MiB, or forgetting to convert bits to bytes first.
