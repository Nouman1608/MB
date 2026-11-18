---
title: "Cambridge IGCSE Computer Science (0478): Data storage and compression -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.3
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "data-storage-and-compression-0478"
description: "Condensed Cambridge IGCSE Computer Science 0478 notes on storage units, file-size formulas, why we compress, lossy, lossless and RLE, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **1.3 Data storage and compression** from Topic 1, Data representation, of the Cambridge IGCSE
Computer Science 0478 syllabus for 2026 to 2028 (Paper 1, Computer systems). For the full method and worked
examples, read the
[Data storage and compression study guide](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression/),
then try the
[Data storage and compression practice questions](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-practice/).
The whole topic is summarised in the [Data Representation revision notes](/resources/data-representation-revision-notes/).

## Storage units

```
bit → nibble (4 bits) → byte (8 bits) → KiB → MiB → GiB → TiB → PiB → EiB
                                        each step ×1024 (2¹⁰)
up a unit: ÷ 1024        down a unit: × 1024        bits ↔ bytes: ÷ 8 or × 8
```

| Unit | Equals |
|---|---|
| 1 nibble | 4 bits |
| 1 byte | 8 bits |
| 1 KiB | 1024 bytes |
| 1 MiB | 1024 KiB = 1 048 576 bytes |
| 1 GiB | 1024 MiB |
| 1 TiB | 1024 GiB |
| 1 PiB | 1024 TiB |
| 1 EiB | 1024 PiB |

## File-size formulas (answers in BITS)

```
image = resolution (width × height) × colour depth
sound = sample rate × sample resolution × length in seconds
```

**Method**

```
Step 1  substitute (sound: time in SECONDS)
Step 2  multiply → bits
Step 3  ÷ 8 → bytes
Step 4  ÷ 1024 per unit → KiB, MiB, GiB
Step 5  round at the end; write the unit
```

Quick checks (all exact):

```
640 × 480 × 8 bits     = 2 457 600 bits = 307 200 bytes = 300 KiB
1024 × 1024 × 16 bits  = 2 MiB
8000 Hz × 8 bits × 10 s = 640 000 bits = 80 000 bytes = 78.125 KiB
```

**Proportional reasoning**

- Double colour depth → double image size.
- Halve width **and** height → **quarter** image size.
- Double sample rate, or sample resolution, or length → double sound size.
- How many files fit? Convert to the same unit, divide, **round down**.

## Why compress?

- Less **storage space** needed.
- Less **time to transmit** (faster upload, download, email).
- Less **bandwidth** used; smoother streaming.
- Fits within **size limits** for attachments or uploads.

## Lossy vs lossless

| | Lossy | Lossless |
|---|---|---|
| Data lost? | Yes, **permanently** | No |
| Original restorable? | No | Yes, **exactly** |
| Size reduction | Larger | Smaller |
| Image methods | Reduce resolution or colour depth | RLE |
| Sound methods | Reduce sample rate or sample resolution; remove sounds humans cannot hear | -- |
| Best for | Photos, music, video streaming | Text, program files, spreadsheets, simple graphics |

## Run length encoding (RLE)

- Lossless.
- Replaces a **run** of identical values with **one value and a count**.

```
AAAAAAABBBBCC → 7A 4B 2C
row: B B B B B W W B B B → 5B 2W 3B
no runs: WXYZ → 1W 1X 1Y 1Z  (bigger than the original!)
```

Works well: simple images with large single-colour areas; text with repeated characters.
Works badly: photographs and text with few repeats.

## Key terms

| Term | Meaning |
|---|---|
| Nibble | 4 bits |
| Kibibyte (KiB) | 1024 bytes |
| Compression | Reducing the size of a file |
| Lossy compression | Permanently removes data; original cannot be restored |
| Lossless compression | Reduces size with no data lost; original restored exactly |
| Run length encoding | Lossless method storing runs as value-and-count pairs |
| Bandwidth | Amount of data that can be transmitted in a given time |

## Exam traps

- ÷ 1000 instead of ÷ 1024.
- Missing ÷ 8 (bits to bytes).
- Minutes left as minutes in a sound question.
- Rounding a "how many fit" answer up.
- Saying lossy files can be restored, or that lossless "loses only a little" data.
- Recommending lossy compression for a program or text file.
- Giving RLE for a photograph as the best choice.

## Quick self-test

1. How many bits are in a nibble?
2. How many bytes are in 1 MiB?
3. Give the formula for the file size of a sound file.
4. Calculate the size in KiB of a 500 × 400 image with a 16-bit colour depth.
5. A sound is recorded at 22 050 Hz, 8-bit resolution, for 1 minute. Give the size in MiB to 2 d.p.
6. An image's width and height are both doubled. What happens to the file size?
7. How many 4 MiB files fit on a 2 GiB drive?
8. Give two reasons for compressing files before sending them over the internet.
9. Why must a program file be compressed losslessly?
10. Give two ways to compress a sound file using lossy compression.
11. Compress XXXXXYYZZZZ using RLE.
12. Why can RLE make a file larger?

### Answers

1. 4.
2. 1 048 576 (1024 × 1024).
3. Sample rate × sample resolution × length of sample in seconds.
4. 500 × 400 × 16 = 3 200 000 bits ÷ 8 = 400 000 bytes ÷ 1024 = **390.625 KiB**.
5. 22 050 × 8 × 60 = 10 584 000 bits ÷ 8 = 1 323 000 bytes ÷ 1024 ÷ 1024 = **1.26 MiB**.
6. It becomes four times as large.
7. 2 × 1024 = 2048 MiB; 2048 ÷ 4 = **512 files**.
8. Less time to transmit; less bandwidth used (or less storage space needed).
9. Any lost data would change the instructions, so the program might not run.
10. Reduce the sample rate; reduce the sample resolution (or remove sounds humans cannot hear).
11. **5X 2Y 4Z**.
12. If there are few runs, each single value becomes a value-and-count pair, doubling its size.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.3 Data storage and compression.
