---
title: "Cambridge O Level Computer Science (2210): Data storage and compression"
seoTitle: "Cambridge O Level Computer Science 2210 Data Storage and Compression"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1.3
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
  - qualification: "o-level"
    topic: "data-representation-2210"
    subtopic: "data-storage-and-compression-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 1.3: units of data storage, calculating image and sound file sizes, and lossy and lossless compression including run length encoding."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 1.3 of Cambridge O Level Computer Science 2210 has four learning statements. Candidates should understand how data storage is **measured**, **calculate** the file size of an image file and a sound file from information given, understand the **purpose of and need for** data compression, and understand how files are compressed using **lossy** and **lossless** methods. This guide covers all four, with every calculation set out step by step.

## Part 1: measuring data storage

The smallest unit of data is the **bit**, a single 0 or 1. Larger units are built from it.

| Unit | Size |
|---|---|
| Bit | 1 binary digit |
| Nibble | 4 bits |
| Byte | 8 bits |
| Kibibyte (KiB) | 1024 bytes |
| Mebibyte (MiB) | 1024 KiB |
| Gibibyte (GiB) | 1024 MiB |
| Tebibyte (TiB) | 1024 GiB |
| Pebibyte (PiB) | 1024 TiB |
| Exbibyte (EiB) | 1024 PiB |

Each unit holds 1024 of the one before it. The factor is 1024, not 1000, because 1024 is 2 to the power 10 and computers work in powers of 2. The syllabus states that calculations must use 1024.

### Converting between units

To go to a **larger** unit, divide by 1024 (or by 8 for bits to bytes). To go to a **smaller** unit, multiply.

**Example 1:** how many MiB are in 3 GiB? 3 × 1024 = **3072 MiB**.

**Example 2:** convert 5120 KiB to MiB. 5120 ÷ 1024 = **5 MiB**.

**Example 3:** how many bits are in 2 KiB? 2 × 1024 = 2048 bytes, and 2048 × 8 = **16,384 bits**.

Always check the order of magnitude. A MiB is bigger than a KiB, so a number of MiB should be smaller than the same amount in KiB.

## Part 2: calculating the size of an image file

An image is a grid of pixels, and each pixel needs a number of bits equal to the colour depth. So:

**File size (bits) = number of pixels × colour depth**

The number of pixels is width multiplied by height (this is the resolution). Then convert the answer into the unit the question asks for. The syllabus says that answers must be given in the units specified.

### Worked example: image in KiB

An image is 640 pixels wide and 480 pixels high, with a colour depth of 8 bits. Find the file size in KiB.

1. Pixels = 640 × 480 = 307,200.
2. Bits = 307,200 × 8 = 2,457,600 bits.
3. Bytes = 2,457,600 ÷ 8 = 307,200 bytes.
4. KiB = 307,200 ÷ 1024 = **300 KiB**.

### Worked example: image in MiB

An image is 1024 pixels wide and 768 high with a colour depth of 24 bits. Find the file size in MiB.

1. Pixels = 1024 × 768 = 786,432.
2. Bits = 786,432 × 24 = 18,874,368 bits.
3. Bytes = 18,874,368 ÷ 8 = 2,359,296 bytes.
4. KiB = 2,359,296 ÷ 1024 = 2304 KiB.
5. MiB = 2304 ÷ 1024 = **2.25 MiB**.

The file size ignores any extra information stored with the file, such as the header. The questions give "information given" and you work only from that.

## Part 3: calculating the size of a sound file

A sound is a series of samples. Each sample uses a number of bits equal to the sample resolution. The number of samples is the sample rate multiplied by the length of the track in seconds. So:

**File size (bits) = sample rate × sample resolution × length (seconds)**

### Worked example

A sound is recorded at a sample rate of 44,100 Hz with a sample resolution of 16 bits. The track lasts 30 seconds. Find the file size in MiB.

1. Samples = 44,100 × 30 = 1,323,000.
2. Bits = 1,323,000 × 16 = 21,168,000 bits.
3. Bytes = 21,168,000 ÷ 8 = 2,646,000 bytes.
4. KiB = 2,646,000 ÷ 1024 = 2583.98 KiB.
5. MiB = 2583.98 ÷ 1024 = **2.52 MiB** (to 2 decimal places).

If the length is given in minutes, convert it to seconds first. A 2-minute track is 120 seconds.

### Method summary

1. Write the formula.
2. Substitute the numbers from the question.
3. Multiply to get bits.
4. Divide by 8 for bytes.
5. Divide by 1024 for each step up to the unit the question asks for.

## Part 4: the purpose of and need for compression

**Compression** reduces the size of a file. It is needed because large files cause problems. Compressing a file means that:

- **less storage space** is required, so more files fit on a device;
- **less bandwidth** is required when the file is sent;
- the **transmission time is shorter**, so web pages load and downloads finish faster.

Streaming a film or sending a photograph by email is much quicker when the file has been compressed.

## Part 5: lossy compression

**Lossy compression** reduces the file size by **permanently removing** some of the data. Once the data has gone, the original file cannot be rebuilt exactly.

Ways it works in the syllabus:

- for an image, reducing the **resolution** or reducing the **colour depth**;
- for sound, reducing the **sample rate** or reducing the **sample resolution**.

The result is a much smaller file, but with some loss of quality. Lossy compression suits photographs, video and music, where small losses are hard to notice. It is not suitable for a document, a program or any file where every character matters.

**Example:** a photo of 1024 × 768 pixels at 24-bit colour is reduced to 8-bit colour. The file size falls to a third of its size (2.25 MiB becomes 0.75 MiB), but fewer colours are available.

## Part 6: lossless compression

**Lossless compression** reduces the file size **without permanent loss of data**. The original file can be rebuilt exactly from the compressed one. It is used where accuracy matters, such as text files, program files and some images.

### Run length encoding (RLE)

**Run length encoding** is the lossless method named in the syllabus. A **run** is a group of identical values that follow each other. RLE replaces each run with a pair of items: the value and the number of times it repeats.

**Example 1: text.** The string AAAABBBCCDDDDDD has 15 characters. Written as runs: A4 B3 C2 D6, which is 8 characters.

To decompress, expand each pair again: A4 becomes AAAA, and so on, giving back exactly the original string.

**Example 2: a row of pixels.** A row of black (1) and white (0) pixels is 111100001111. In RLE it is: four 1s, four 0s, four 1s. If each run is written as a (count, value) pair, this is (4,1) (4,0) (4,1). The row of twelve bits is described with three pairs.

RLE works best when the data has **long runs of repeated values**, such as a logo with large areas of one colour. If there are few repeats, the compressed file can be as large as, or larger than, the original. For example ABCDEF becomes A1 B1 C1 D1 E1 F1, which is twice as long.

## Part 7: choosing a method

| | Lossy | Lossless |
|---|---|---|
| Data after compression | Some permanently removed | All data kept |
| Original recoverable? | No | Yes, exactly |
| Size reduction | Usually greater | Usually smaller |
| Typical uses | Photographs, music, video | Text, programs, simple graphics |
| Example method | Reduce resolution, colour depth, sample rate, or sample resolution | Run length encoding |

## Common mistakes

- **Using 1000 instead of 1024.** The syllabus requires 1024.
- **Forgetting to divide by 8.** The first answer is in bits.
- **Mixing up units.** A question asking for MiB expects MiB.
- **Saying lossy removes "unnecessary" data.** It removes data permanently, and quality falls.
- **Saying compression "makes the file smaller" and stopping.** Add the effect: less storage, less bandwidth or shorter transmission time.
- **Applying RLE to varied data and expecting a smaller file.** RLE needs repeats.
- **Mixing up the sound formula.** Rate is per second and resolution is per sample, and both are multiplied by the length.

## Exam technique

- **Calculation questions:** write the formula, show each stage and label the units. Method marks are given even if the last step is wrong.
- **Explain the need for compression:** give at least two effects, for example less storage space and shorter transmission time.
- **Compare lossy and lossless:** talk about what happens to the data and whether the original can be recovered.
- **Describe RLE:** runs of identical values are replaced with the value and a count.

## Quick check

1. How many KiB are in 8 MiB? *8192.*
2. Find the size in bytes of an image 100 pixels wide and 100 high with colour depth 1 bit. *1250 bytes (10,000 bits ÷ 8).*
3. Write AAABBBBBCC using RLE. *A3 B5 C2.*
4. Which type of compression allows the original file to be rebuilt exactly? *Lossless.*
5. Give two effects of compressing a file before sending it. *Less bandwidth is used; the transmission time is shorter.*

## Continue with

Revise with the [Data storage and compression revision notes](/resources/cambridge-o-level-computer-science-2210-data-storage-and-compression-revision-notes/) and practise with the [Data storage and compression practice questions](/resources/cambridge-o-level-computer-science-2210-data-storage-and-compression-practice/).
