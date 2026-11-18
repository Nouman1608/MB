---
title: "Cambridge A Level Computer Science (9618): Compression"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "compression"
description: "Study guide to Cambridge 9618 section 1.3: why files are compressed, lossy versus lossless, run-length encoding worked through, and methods for each file type."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 1.3 Compression of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. It has three learning outcomes: show understanding of "the need for and examples of the use of compression"; show understanding of lossy and lossless compression "and justify the use of a method in a given situation"; and show understanding of how a text file, bitmap image, vector graphic and sound file can be compressed, "including the use of run-length encoding (RLE)".

The [Information Representation study guide](/resources/a-level-computer-science-information-representation/) compares lossy and lossless compression briefly. This page works through RLE in detail, including when it makes a file bigger, and shows how to build a justification answer for any scenario. Recall: [compression revision notes](/resources/cambridge-a-level-computer-science-9618-compression-revision-notes/) · Questions: [compression practice set](/resources/cambridge-a-level-computer-science-9618-compression-practice/).

## Why compress?

Compression reduces the number of bits needed to store or send a file. That matters because:

- **Storage**: more files fit on a device or in a paid cloud storage plan.
- **Transmission time**: smaller files upload and download faster, which matters most on slow or mobile connections.
- **Bandwidth**: less data crosses the network, so more users can share it and data allowances last longer.
- **Streaming**: audio and video must arrive at least as fast as they are played; compression makes the bit rate needed achievable.
- **Size limits**: email systems and websites often restrict attachment and upload sizes.

To see the scale, recall the sound formula from section 1.2. Three minutes of stereo sound at 44,100 Hz with 16-bit resolution is 44,100 × 16 × 2 × 180 = 254,016,000 bits, which is 31,752,000 bytes or about 30.3 MiB. Without compression, a phone holding thousands of songs or a service streaming them would need vastly more storage and bandwidth.

## Lossless and lossy

**Lossless** compression reduces the file size so that the **original can be reconstructed exactly**, bit for bit. It works by finding patterns and redundancy, such as repeated values, and storing them more efficiently.

**Lossy** compression **permanently removes** some data, chosen so that the loss is not noticeable, or acceptable, to a human. The decompressed file is an approximation of the original. Lossy methods usually achieve much smaller files than lossless methods.

| | Lossless | Lossy |
|---|---|---|
| Original recoverable? | Yes, exactly | No |
| Typical size reduction | Smaller | Larger |
| Suitable for | Text, program code, spreadsheets, databases, images that will be edited further | Photographs for the web, streamed music, video calls |
| Risk | None to the data | Repeated lossy saves lose more quality each time |

## Run-length encoding (RLE)

RLE is a lossless method. It replaces a **run** (a sequence of identical, consecutive values) with **one copy of the value and a count** of how many times it repeats.

### Worked example 1: text

The string below has 24 characters, stored at 1 byte each, so it occupies 24 bytes.

```
WWWWWWWWBBBWWWWWWWWWWWWB
```

Group the runs: 8 W, 3 B, 12 W, 1 B. Stored as count–character pairs, with each count in one byte:

```
8W 3B 12W 1B   → 4 pairs × 2 bytes = 8 bytes
```

The file has shrunk from 24 bytes to 8 bytes, a saving of 16 bytes (two-thirds). Decoding reverses the process exactly, so nothing is lost.

### Worked example 2: when RLE makes things worse

```
Original: ABCDEF          → 6 bytes
RLE:      1A1B1C1D1E1F    → 12 bytes
```

With no repeated neighbours, every character becomes a pair and the file **doubles**. This is why RLE suits data with long runs and is a poor choice for ordinary prose, photographs and noisy data.

### Worked example 3: a flagged variant

One way round the problem is to encode only long runs, marked by a **flag** character that does not otherwise appear in the data, and to leave short runs as they are. Using # as the flag and encoding runs of four or more as flag, count, character:

```
Original:       PPPPPPQRSTTTTT          → 14 bytes
Simple pairs:   6P 1Q 1R 1S 5T          → 10 bytes
Flagged:        #6P Q R S #5T           → 3 + 1 + 1 + 1 + 3 = 9 bytes
```

The decoder copies characters straight through until it meets the flag, then reads the next two bytes as a count and a character. The exact format varies between implementations; examiners give or accept a stated format, so always say what yours is.

### Worked example 4: a bitmap row

In an 8-bit greyscale image, 0 is black and 255 is white. One row of 16 pixels:

```
0 0 0 0 0 255 255 255 255 255 255 0 0 0 0 0
```

As (count, value) pairs: (5, 0) (6, 255) (5, 0), which is 6 bytes instead of 16. Images with large areas of flat colour, such as icons, diagrams and cartoons, compress well this way; photographs, where neighbouring pixels nearly always differ slightly, do not.

## Compressing each file type

**Text file.** Must be lossless: losing a character could change the meaning or break a program. RLE works on runs of repeated characters, such as spaces used for layout. **Dictionary-based** methods replace frequently repeated words or character sequences with short codes and store a dictionary of codes alongside the file; this suits natural language, where words repeat even if letters rarely do.

**Bitmap image.** Either type is possible.

- Lossless: RLE on runs of identical pixels, as in worked example 4.
- Lossy: reduce the image resolution (fewer pixels), reduce the colour depth (fewer bits per pixel, so nearby shades merge), or discard fine detail and subtle colour variations that the eye barely notices.

**Vector graphic.** The file is already a compact list of objects and properties, so it is usually small. It is compressed **losslessly**, for example by applying a general text-compression method to the drawing list, because changing a coordinate or property would change the shape itself.

**Sound file.** Usually lossy, using **perceptual** techniques: remove frequencies outside the range of human hearing, and remove quieter sounds that are masked by louder sounds playing at the same time. Reducing the sampling rate or sampling resolution also reduces the size, at the cost of accuracy. Lossless sound compression exists for archiving and studio work, but the files are larger.

## Justifying a method

A justification answer has three parts: the method, the property of the data or situation that makes it suitable, and the consequence of choosing the other method.

**Model answer: archiving scanned exam scripts for legal records.** "Lossless compression should be used, because the scripts may be needed as evidence and must be identical to the originals; lossy compression would permanently discard detail such as faint handwriting, which could not be recovered."

**Model answer: a music streaming service on mobile data.** "Lossy compression is more suitable, because it produces much smaller files, so music can stream without pauses on a slow connection and uses less of the listener's data allowance; the sounds removed are ones listeners are unlikely to notice, whereas lossless files would be several times larger."

Notice that each answer names the specific data and the specific need. "Lossless keeps quality" with no context scores little.

## Common mistakes

- Saying lossy compression "lowers quality a lot": the point is that the loss is chosen to be hard to notice.
- Claiming RLE always reduces file size.
- Calling RLE lossy. It is lossless.
- Suggesting lossy compression for text, program files or spreadsheets.
- Describing compression without naming a method for the file type in the question.
- Forgetting to state the format when writing out an RLE answer.

## Exam technique

- **Show understanding of the need**: give a reason and its consequence, such as "smaller files transmit faster, so web pages load more quickly".
- **Justify**: method + reason from the scenario + why the alternative is worse.
- **Apply RLE**: write the runs, state the format, count the bytes before and after.
- **Describe how a file type is compressed**: name the technique and say what data it removes or encodes.

Next: condense this with the [compression revision notes](/resources/cambridge-a-level-computer-science-9618-compression-revision-notes/) and test it with the [compression practice questions](/resources/cambridge-a-level-computer-science-9618-compression-practice/). File size calculations for the files being compressed are in the [multimedia study guide](/resources/cambridge-a-level-computer-science-9618-multimedia-graphics-sound/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 1.3 Compression. Published by Cambridge International.
