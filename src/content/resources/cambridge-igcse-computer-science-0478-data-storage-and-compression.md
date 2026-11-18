---
title: "Cambridge IGCSE Computer Science (0478): Data storage and compression"
resourceType: "study-guides"
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
description: "Cambridge IGCSE Computer Science 0478 storage and compression in depth: storage units, image and sound file sizes, and lossy and lossless methods."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **1.3 Data storage and compression**, the last subtopic of Topic 1, Data representation,
in the Cambridge IGCSE Computer Science 0478 syllabus for 2026 to 2028, examined on Paper 1, Computer systems. The
[Data Representation study guide](/resources/igcse-computer-science-data-representation/) gives one image
calculation; this page sets out a reliable method for every file-size question, works through image and sound
examples in several units, and explains compression in more detail. It builds on the ideas of resolution, colour
depth, sample rate and sample resolution from the
[Text, sound and images study guide](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images/). For
quick recall, use the
[Data storage and compression revision notes](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-revision-notes/),
and test yourself with the
[Data storage and compression practice questions](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-practice/).

## What 1.3 asks you to do

- Understand how data storage is **measured**: bit, nibble, byte, kibibyte (KiB), mebibyte (MiB), gibibyte (GiB),
  tebibyte (TiB), pebibyte (PiB) and exbibyte (EiB).
- **Calculate the file size** of an image file and a sound file from given information, in any of these units.
- Understand the **purpose of and need for** data compression.
- Understand how files are compressed using **lossy** and **lossless** methods, including **run length encoding
  (RLE)**.

## Measuring storage

```
1 nibble = 4 bits
1 byte   = 8 bits
1 KiB    = 1024 bytes
1 MiB    = 1024 KiB
1 GiB    = 1024 MiB
1 TiB    = 1024 GiB
1 PiB    = 1024 TiB
1 EiB    = 1024 PiB
```

From the byte upwards, each unit is **1024** times the one before, because 1024 = 2¹⁰. To move **up** a unit, divide
by 1024; to move **down**, multiply by 1024. Between bits and bytes, the factor is **8**.

**Worked example 1.** How many bytes are in 2 GiB?

```
2 × 1024 × 1024 × 1024 = 2 147 483 648 bytes
```

## Calculating file sizes

### The two formulas

```
image file size (bits) = image resolution (width × height in pixels) × colour depth
sound file size (bits) = sample rate × sample resolution × length of sample (seconds)
```

Both formulas give an answer in **bits**. That is the most important thing to remember.

### A method that always works

1. Write the formula and substitute the values, with the time in **seconds** for sound.
2. Multiply to get the size in **bits**.
3. Divide by **8** to get **bytes**.
4. Divide by **1024** for each step up to the unit asked for.
5. Round only at the end, and write the unit.

**Worked example 2 (image).** A photo is 1920 × 1080 pixels with a colour depth of 24 bits. Calculate its size in MiB.

```
bits  = 1920 × 1080 × 24 = 49 766 400 bits
bytes = 49 766 400 / 8   = 6 220 800 bytes
KiB   = 6 220 800 / 1024 = 6075 KiB
MiB   = 6075 / 1024      = 5.93 MiB (2 d.p.)
```

**Worked example 3 (sound).** A 30-second clip is recorded at a sample rate of 44 100 Hz with a sample resolution of 16
bits. Calculate its size in MiB.

```
bits  = 44 100 × 16 × 30   = 21 168 000 bits
bytes = 21 168 000 / 8     = 2 646 000 bytes
KiB   = 2 646 000 / 1024   = 2583.98 KiB
MiB   = 2583.98 / 1024     = 2.52 MiB (2 d.p.)
```

**Worked example 4 (working backwards).** A memory card holds 64 GiB. Each photo uses 3 MiB. How many photos fit?

```
64 GiB = 64 × 1024 = 65 536 MiB
65 536 / 3 = 21 845.3 → 21 845 whole photos
```

Round **down**: a part-photo cannot be stored.

### Proportional reasoning

Because each formula is a product, the size is proportional to each factor. Doubling the colour depth doubles the
image size; halving both the width and the height **quarters** it; recording for three times as long triples a sound
file. Examiners use this to test understanding without a long calculation.

## Why compress data?

Compression reduces the **file size**. That matters because a smaller file:

- uses **less storage space** on a device
- takes **less time to transmit**, so downloads, uploads and emails are faster
- uses **less bandwidth** on a network, so more people can share a connection, and streaming is smoother
- may fit within an **upload or attachment size limit**.

In a scenario answer, link the reason to the situation: "the website will load faster because the images take less
time to transmit".

## Lossy compression

**Lossy** compression **permanently removes data** from the file. The original cannot be recovered exactly. It
removes data that is less noticeable or unnecessary, so the user may not notice the loss.

Ways to apply lossy compression:

- For **images**: reduce the **resolution** (fewer pixels) or reduce the **colour depth** (fewer bits per pixel).
- For **sound**: reduce the **sample rate** or the **sample resolution**, or remove sounds that the human ear cannot
  hear.

Lossy compression gives a large reduction in size, but quality falls. It suits photographs, music and video
streaming, where a small loss of quality is acceptable.

## Lossless compression

**Lossless** compression reduces file size **without permanently losing any data**: the original file can be
**restored exactly**. It suits text documents, program files and spreadsheets, where one changed character or value
could make the file wrong or unusable.

### Run length encoding (RLE)

RLE finds **runs** of the same value next to each other and stores each run as **one value and a count**.

**Worked example 5 (text).**

```
original: AAAABBBCCCCCCD          (14 characters)
RLE:      4A 3B 6C 1D             (4 pairs, 8 items)
```

**Worked example 6 (image row).** A row of a black-and-white icon is W W W W B B W W W W W W.

```
RLE: 4W 2B 6W
```

Decoding is exact: write each value the number of times shown. That is why RLE is lossless.

RLE only helps when there are **long runs**. On data with no repeats it can make the file **bigger**:

```
ABCD → 1A 1B 1C 1D   (8 items instead of 4)
```

So RLE suits simple graphics with large areas of one colour, and text with repeated characters, but not
photographs, where neighbouring pixels are rarely identical.

## Common mistakes

- Dividing by 1000 instead of 1024.
- Forgetting to divide by 8 to change bits into bytes.
- Using minutes instead of seconds in a sound calculation.
- Rounding in the middle of a calculation, which can change the final answer.
- Saying lossy files can be "decompressed back to the original".
- Saying lossless compression "removes unnecessary data". It removes **redundancy** that can be rebuilt; no data is
  lost.
- Writing RLE pairs for single characters as just the character, then decoding them wrongly.

## Exam technique

In **calculate** questions, show every stage, because each stage can carry a mark: the multiplication, the ÷ 8 and
each ÷ 1024. Give the unit the question asks for. In **explain** questions about compression, say whether data is
lost, whether the original can be restored, and why that suits the file in the scenario. If asked to **describe**
RLE, include the idea of a run, the value-and-count pair, and give a short example.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.3 Data storage and compression.
