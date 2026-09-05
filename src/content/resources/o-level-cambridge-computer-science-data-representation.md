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
description: "Number systems, binary, and data storage -- the opening topic of Cambridge O-Level Computer Science (2210), which shares its ten-topic structure with sibling syllabus 0478."
author: "marlbridge-academic-team"
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
exam pressure. Because the sibling 0478 syllabus's official content
breaks this topic into number systems, text/sound/image representation,
and data storage and compression, structuring your revision around
those three strands gives a clear framework even though this O-Level's
own published materials list the topic as a single heading. Understanding
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

## Binary arithmetic and overflow

Add binary as in denary, carrying when a column reaches 2. **Overflow** occurs when the result needs more bits than the register holds — adding two 8-bit numbers giving a 9-bit answer. The extra bit is lost and the stored result is wrong.

A **logical shift** left multiplies by two, a shift right divides by two. Bits shifted out are lost, which is another route to inaccuracy.

## Text, sound and images

**Text** is stored using character sets. ASCII uses 7 bits for 128 characters, extended ASCII 8 bits for 256, and **Unicode** covers a very wide range of the world's writing systems — a fixed-width Unicode encoding uses more bits per character than ASCII, though UTF-8 (the most common Unicode encoding) keeps plain ASCII characters at one byte.

**Sound** is captured by sampling the analogue wave. **Sample rate** is how many samples per second, **sample resolution** is the number of bits per sample. Raising either improves accuracy and increases file size.

**Images** are stored as pixels. **Resolution** is the number of pixels, **colour depth** the bits per pixel. A higher colour depth allows more colours: n bits gives 2^n colours.

```
Image file size = width x height x colour depth (in bits)
Sound file size = sample rate x sample resolution x seconds
```

## Compression

**Lossless** compression removes redundancy so the original can be perfectly reconstructed — run-length encoding, and essential for text and program files where any loss would corrupt the data.

**Run-length encoding (RLE)** works by replacing runs of identical, repeated values with a single value and a count of how many times it repeats, so highly repetitive data — such as a simple image with large blocks of a single colour — is stored far more compactly. RLE can, however, sometimes produce a **larger** file than the original: on noisy or photographic data, where pixel values rarely repeat exactly, encoding each short run as a (value, count) pair can take more space than simply storing the original values, which is why RLE suits simple graphics far better than continuously varying photographic images.

**Lossy** compression permanently discards data the user is unlikely to notice, giving much smaller files — acceptable for photographs, music and video, unacceptable for a spreadsheet.

## Worked example

An image is 800 by 600 pixels with a colour depth of 24 bits. Find the file size in megabytes.

```
bits  = 800 x 600 x 24 = 11 520 000 bits
bytes = 11 520 000 / 8 = 1 440 000 bytes
KB    = 1 440 000 / 1024 = 1406.25 KB
MB    = 1406.25 / 1024   = 1.37 MB
```

Dividing by 8 to reach bytes, then by 1024 twice, is where most errors occur.

## Common mistakes

Confusing sample rate with sample resolution. Dividing by 1000 rather than 1024 when converting bytes to kilobytes. Forgetting to convert bits to bytes at all. Saying lossy compression "removes unnecessary data" without noting it is permanent. Describing hexadecimal as something the computer stores — the machine stores binary; hex is for human readability.

## Quick revision checklist

- Convert between denary, binary and hexadecimal in both directions.
- Add binary numbers, and explain overflow and logical shifts.
- Compare ASCII, extended ASCII and Unicode.
- Calculate image and sound file sizes with correct unit conversion.
- Distinguish lossless from lossy compression and justify which suits a given file type.
