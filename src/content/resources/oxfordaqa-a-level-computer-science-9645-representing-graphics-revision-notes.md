---
title: "OxfordAQA A-Level Computer Science (9645): Representing graphics -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Graphics Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.5
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "representing-graphics-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.5: bitmaps, colour depth, storage calculations, metadata, vector graphics, comparison and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.5 Representing graphics** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For worked examples, see the [representing graphics study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics/); then practise with the [representing graphics practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-practice/).

## What the specification requires

| Ref | Requirement |
|---|---|
| 3.5.5.1 | Describe how bitmaps represent images; understand size in pixels (width × height) and colour depth (bits per pixel); calculate storage requirements excluding metadata; be aware of metadata such as width, height and colour depth |
| 3.5.5.2 | Explain how vector graphics represent images using lists of objects; give typical properties |
| 3.5.5.3 | Compare vector and bitmap graphics (advantages, disadvantages) and their appropriate uses |

## Key terms

| Term | Meaning |
|---|---|
| Pixel | One picture element: the smallest unit of a bitmap |
| Size in pixels | Width in pixels × height in pixels |
| Colour depth | The number of bits used to represent the colour of one pixel |
| Bitmap | An image stored as a grid of pixel colour values |
| Metadata | Data about the image file, such as width, height and colour depth |
| Vector graphic | An image stored as a list of objects and their properties |
| Object | A geometric shape in a vector graphic (line, rectangle, circle and so on) |

## Bitmap formulas

- Number of colours = 2^(colour depth).
- Size in pixels = width × height.
- **Storage (bits) = size in pixels × colour depth** (excluding metadata).
- Bytes = bits ÷ 8.
- KiB = bytes ÷ 1,024; MiB = bytes ÷ 1,048,576.

| Colour depth | Colours |
|---|---|
| 1 | 2 |
| 4 | 16 |
| 8 | 256 |
| 16 | 65,536 |
| 24 | 16,777,216 |

## Worked reminders

All results recomputed.

| Width × height | Colour depth | Bits | Bytes | KiB |
|---|---|---|---|---|
| 300 × 200 | 1 | 60,000 | 7,500 | 7.32 |
| 200 × 100 | 8 | 160,000 | 20,000 | 19.53 |
| 500 × 400 | 16 | 3,200,000 | 400,000 | 390.63 |
| 1280 × 720 | 24 | 22,118,400 | 2,764,800 | 2,700 |
| 1280 × 720 | 8 | 7,372,800 | 921,600 | 900 |
| 2048 × 1536 | 24 | 75,497,472 | 9,437,184 | 9,216 (9 MiB) |

Effects:

- Halving colour depth halves the file size (24 to 12 bits per pixel).
- Halving width and height gives one quarter of the pixels.
- Going from 24-bit to 8-bit colour makes a 1280 × 720 image three times smaller.

**Working backwards.** A 40 × 50 bitmap stored in 2,000 bytes uses 2,000 × 8 = 16,000 bits for 2,000 pixels, so the colour depth is 8 bits. A 150,000-byte, 8-bit image that is 500 pixels wide is 300 pixels high (150,000 ÷ 500).

**Colour depth needed.** For 20 colours use 5 bits (32 colours possible); for 100 colours use 7 bits.

## Metadata

Typical metadata: **width, height, colour depth**. It lets software interpret the pixel data (where each row ends and how many bits form a pixel). It is extra data, so the real file is a little larger than the calculated value.

## Vector graphics

Stored as a **list of objects**. Each object has properties.

| Typical property | Example |
|---|---|
| x and y coordinates of the top left corner | x = 20, y = 30 |
| Colour of the outline | black |
| Line width of the outline | 2 |
| Colour of the fill | yellow |

Other properties depend on the shape (width, height, radius). To display, the computer redraws every object. Estimated size for a simple drawing: 500 objects at 20 bytes each is 10,000 bytes.

## Comparison

| | Bitmap | Vector |
|---|---|---|
| Stores | Pixel colours | Objects and properties |
| Enlarging | Pixelated and blocky | Sharp; redrawn |
| File size | Grows with pixels and colour depth | Grows with the number of objects |
| Editing | Change pixels; hard to move a shape | Edit each object independently |
| Best for | Photographs, scans | Logos, diagrams, maps, plans |
| Weakness | Large files; loses quality when scaled | Poor for photos; slower to draw complex images |

## Exam traps

- **Multiply by colour depth** and **divide by 8** for bytes.
- **Width × height,** not width + height.
- **State your unit** and the divisor used (1,000 or 1,024).
- **Vectors do not store pixels.**
- **Vectors are not always smaller.** A complex drawing may need very many objects.
- **Metadata is excluded** from the formula but exists in the file.
- **Reasons for comparisons:** link the feature to the mechanism.

## Quick self-test

1. What is a pixel?
2. Define colour depth.
3. How many colours can a 4-bit colour depth represent?
4. Give the formula for the storage requirement of a bitmap, excluding metadata.
5. Calculate the storage in bytes for a 200 × 100 bitmap with 8-bit colour.
6. Name three items of metadata.
7. List three properties of a vector object.
8. Why does a vector graphic stay sharp when enlarged?
9. Why does a bitmap become blocky when enlarged?
10. Which type would you choose for a company logo and why?
11. Which type would you choose for a photograph and why?
12. What happens to the size of a bitmap if both width and height are halved?

### Answers

1. The smallest picture element of a bitmap, with one colour value.
2. The number of bits used to represent the colour of a pixel.
3. 16.
4. Width × height × colour depth (in bits).
5. 200 × 100 × 8 = 160,000 bits = 20,000 bytes.
6. Width, height and colour depth.
7. Any three of: x and y coordinates, outline colour, line width, fill colour.
8. It is redrawn from the object properties at the new size.
9. Each pixel is made larger, so the individual squares show.
10. Vector, because it can be scaled to any size without losing quality and is made of shapes.
11. Bitmap, because each pixel can have any colour, which suits subtle variation.
12. It becomes one quarter of the size.

## Next steps

- [Representing graphics study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics/)
- [Representing graphics practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-practice/)
- [Representing characters revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-characters-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.5 Representing graphics.
