---
title: "Cambridge O Level Computer Science (2210): Data storage and compression -- Revision Notes"
seoTitle: "Cambridge O Level Computer Science 2210 Storage and Compression Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 1.3: storage units, image and sound file size formulas, why files are compressed, lossy and lossless methods, RLE and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 1.3, Data storage and compression. For the full explanations and extra worked examples, use the [Data storage and compression study guide](/resources/cambridge-o-level-computer-science-2210-data-storage-and-compression/).

## Syllabus checklist

- How data storage is measured: bit, nibble, byte, kibibyte, mebibyte, gibibyte, tebibyte, pebibyte and exbibyte.
- The amount of the previous unit in each unit, for example 8 bits in a byte and 1024 mebibytes in a gibibyte.
- Calculating the file size of an image file and a sound file, using the information given.
- The purpose of and need for data compression, and its impact.
- Lossy and lossless compression, including run length encoding (RLE).

## Storage units

| Unit | Contains |
|---|---|
| Bit | 1 binary digit (0 or 1) |
| Nibble | 4 bits |
| Byte | 8 bits |
| Kibibyte (KiB) | 1024 bytes |
| Mebibyte (MiB) | 1024 KiB |
| Gibibyte (GiB) | 1024 MiB |
| Tebibyte (TiB) | 1024 GiB |
| Pebibyte (PiB) | 1024 TiB |
| Exbibyte (EiB) | 1024 PiB |

Rules:

- Use **1024**, never 1000, in calculations.
- Up a unit: **divide**. Down a unit: **multiply**.
- Bits to bytes: divide by **8**.
- Answers must be in the units the question specifies.

## File size formulas

**Image:** file size in bits = pixels (width × height) × colour depth

**Sound:** file size in bits = sample rate × sample resolution × length in seconds

Then: bits ÷ 8 = bytes; bytes ÷ 1024 = KiB; KiB ÷ 1024 = MiB.

### Method in five steps

1. Write the formula.
2. Put in the numbers (change minutes to seconds).
3. Multiply to get bits.
4. Divide by 8 for bytes.
5. Divide by 1024 once for each unit up.

### Worked example 1: image

Resolution 1200 × 800, colour depth 16 bits, answer in KiB.

- Pixels = 1200 × 800 = 960,000.
- Bits = 960,000 × 16 = 15,360,000.
- Bytes = 15,360,000 ÷ 8 = 1,920,000.
- KiB = 1,920,000 ÷ 1024 = **1875 KiB**.

### Worked example 2: sound

Sample rate 8000 Hz, resolution 16 bits, length 64 seconds, answer in KiB.

- Bits = 8000 × 16 × 64 = 8,192,000.
- Bytes = 8,192,000 ÷ 8 = 1,024,000.
- KiB = 1,024,000 ÷ 1024 = **1000 KiB**.

### Effect of changing the settings

| Change | Effect on file size |
|---|---|
| Double the colour depth | Image file size doubles |
| Double the number of pixels | Image file size doubles |
| Double the sample rate | Sound file size doubles |
| Double the length of the track | Sound file size doubles |
| Halve the sample resolution | Sound file size halves |

## Key terms

| Term | Definition |
|---|---|
| Compression | Reducing the size of a file |
| Lossy compression | Reduces file size by permanently removing data |
| Lossless compression | Reduces file size without permanent loss of data |
| Run | A group of identical values that follow each other |
| Run length encoding (RLE) | Replaces each run with the value and the number of times it repeats |
| Bandwidth | The amount of data that can be sent across a connection in a given time |

## Why compress files

Compression exists to **reduce the size of the file**. The impact:

- **less storage space** needed;
- **less bandwidth** needed;
- **shorter transmission time**.

Always give the impact, not only "it makes the file smaller".

## Lossy compression

- **Permanently removes** data, so the original cannot be restored.
- For images: reduce the **resolution** or the **colour depth**.
- For sound: reduce the **sample rate** or the **sample resolution**.
- Gives a smaller file than lossless, but quality is lower.
- Suitable for photographs, music and video where small losses go unnoticed.

## Lossless compression and RLE

- No permanent loss: the original is rebuilt **exactly**.
- Suitable for text, programs and graphics with large areas of one colour.
- RLE steps: find each run, write the value, write the count.

| Original | RLE |
|---|---|
| WWWWWWBBW | W6 B2 W1 |
| 000011 | 0 4, 1 2 (value, then count) |
| AAAABBBCCDDDDDD | A4 B3 C2 D6 |

RLE works well on long runs and badly on data without repeats: ABCD becomes A1 B1 C1 D1, which is longer.

## Lossy versus lossless

| | Lossy | Lossless |
|---|---|---|
| Data removed permanently? | Yes | No |
| Original recoverable? | No | Yes |
| Typical method | Lower resolution, colour depth, sample rate or sample resolution | RLE |
| Best for | Photographs, music, video | Text, program files |

## Answer templates

**Explain why a file is compressed (3 marks):** it reduces the size of the file; so less storage space is needed; and less bandwidth is needed or the transmission time is shorter.

**Compare lossy and lossless (4 marks):** lossy removes data permanently, lossless does not; lossy file cannot be restored but lossless can; lossy usually gives a smaller file; give a suitable use for each.

**Calculate a file size (3 to 5 marks):** formula or pixels/samples [1]; multiplied by depth/resolution [1]; converted to bytes [1]; converted to the unit asked [1]; correct unit stated [1].

## Exam traps

- **1000 instead of 1024.** This loses the answer mark.
- **Stopping at bits.** The question usually asks for bytes, KiB or MiB.
- **Wrong units for time.** Change minutes into seconds first.
- **"Lossy keeps all the data".** It does not. Lossless keeps all the data.
- **Using RLE on data with no runs.** The result may be longer.
- **Mixing up depth and resolution.** In images, resolution is pixels and colour depth is bits per pixel. In sound, sample resolution is bits per sample.

## Self-test

1. How many bits are in a nibble?
2. How many MiB are in 4 GiB?
3. Convert 6144 KiB into MiB.
4. State the formula for the size of an image file in bits.
5. Find the size in bytes of a 16 × 16 pixel image with a colour depth of 4 bits.
6. Find the size in KiB of a sound recorded at 8000 Hz with 8-bit resolution for 10 seconds.
7. Write WWWWWWBBW using run length encoding.
8. Expand the RLE data X5 Y2 Z3.
9. Give two ways of making an image file smaller using lossy compression.
10. Give one reason why a text document should not be compressed using a lossy method.
11. State two effects of compressing a file before it is sent over a network.
12. Why might RLE make a file larger?

**Answers**

1. 4.
2. 4 × 1024 = 4096 MiB.
3. 6144 ÷ 1024 = 6 MiB.
4. Number of pixels (width × height) × colour depth.
5. 16 × 16 = 256 pixels; 256 × 4 = 1024 bits; 1024 ÷ 8 = 128 bytes.
6. 8000 × 8 × 10 = 640,000 bits; ÷ 8 = 80,000 bytes; ÷ 1024 = 78.125 KiB.
7. W6 B2 W1.
8. XXXXXYYZZZ.
9. Reduce the resolution; reduce the colour depth.
10. Data would be permanently lost, so some characters could be missing or changed.
11. Less bandwidth is used; the transmission time is shorter (also: less storage space is needed).
12. If the data has few or no repeated values, each run of one value needs a value and a count, which takes more space than the original.
