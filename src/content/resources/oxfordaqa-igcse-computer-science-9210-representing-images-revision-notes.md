---
title: "OxfordAQA IGCSE Computer Science (9210): Representing images -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Images Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.06
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "representing-images-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.6: pixels, bitmaps, colour depth, file size calculations, binary to image and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.6 Representing images** of OxfordAQA International GCSE Computer Science (9210).
Worked examples are in the [Representing images study
guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-images/).

## What the specification asks

- Understand a **pixel** and how pixels relate to an image and its display.
- Describe bitmaps: **size in pixels** and **colour depth**.
- Describe how a bitmap represents an image using pixels and colour depth.
- Describe, with examples, how the **number of pixels** and the **colour depth** affect file size.
- **Calculate** bitmap file sizes.
- **Convert binary data to an image** and **an image to binary data**.

## Key facts

| Term | Meaning |
|---|---|
| Pixel | Short for picture element: a single point in a graphical image |
| Display | The screen is divided into rows and columns of pixels (thousands or millions) |
| Size in pixels | Width × height, for example 800 × 600 |
| Colour depth | The number of bits used to represent each pixel |
| Bitmap | An image stored as a grid of pixels, each with its own value |

A colour depth of D bits gives 2 to the power D colours.

| Colour depth | Colours |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 8 | 256 |
| 24 | 16,777,216 |

## How a bitmap stores an image

The data holds the pixel values **in order, row by row**. The computer also needs the width and height (to know
where rows end) and the colour depth (to know how many bits are in each pixel).

## File size formulae

- **Size in bits = W × H × D**
- **Size in bytes = W × H × D ÷ 8**

W = width in pixels, H = height in pixels, D = colour depth in bits.

| Image | Bits | Bytes |
|---|---|---|
| 800 × 600, 24-bit | 11,520,000 | 1,440,000 (1.44 MB) |
| 1920 × 1080, 24-bit | 49,766,400 | 6,220,800 (6.2208 MB) |
| 640 × 480, 8-bit | 2,457,600 | 307,200 (307.2 kB) |
| 200 × 100, 1-bit | 20,000 | 2,500 (2.5 kB) |
| 8 × 8, 1-bit | 64 | 8 |
| 4 × 4, 2-bit | 32 | 4 |

Method: write W, H, D; multiply; divide by 8 for bytes; convert to kB or MB by dividing by 1,000 for each step; add
the unit.

## Effect on file size

| Change | File size | Image |
|---|---|---|
| More pixels | Larger | More detail |
| Fewer pixels | Smaller | Blocky if enlarged |
| Higher colour depth | Larger | More colours |
| Lower colour depth | Smaller | Fewer colours |

Examples with numbers:

- A 400 × 300 image at 24 bits is 360,000 bytes. Doubling both dimensions (800 × 600) gives 1,440,000 bytes, which is
  **four times** as large.
- An 800 × 600 image at 24 bits is 1,440,000 bytes. Reducing the depth to 8 bits gives 480,000 bytes, which is **one
  third**.

## Binary to image

1. Bits per pixel from the colour depth.
2. Split the data into groups of that size.
3. Split into rows using the width.
4. Colour each pixel using the key.

Example: 4 × 4, 1-bit, 0 = white, 1 = black, data `0110 1001 1001 0110`:

```
. # # .
# . . #
# . . #
. # # .
```

## Image to binary

1. Look up each colour's code in the key.
2. Read row by row from the top left.
3. Check the total is W × H × D bits.

Example: a 3 × 2 image with rows black, white, black and white, black, white (black = 1) gives `101 010`.

## Model answer

**Describe how the number of pixels and the colour depth affect the file size of a bitmap. [4 marks]** File size is width ×
height × colour depth. More pixels means more values to store, so the file is larger; for example doubling both the width
and the height gives four times as many pixels and a file four times as large. A higher colour depth means more bits for
each pixel, so the file is larger; reducing 24 bits to 8 bits makes the file one third of the size.

## Exam traps

- **No division by 8** when bytes are wanted.
- **Stopping at W × H.** The colour depth must be included.
- **Depth given as number of colours.** 256 colours is a depth of 8 bits.
- **Pixels and colours confused.** More pixels give more detail, not more colours.
- **Wrong reading order.** Data is read row by row from the top left.
- **Not grouping bits** when the colour depth is more than 1.
- **No unit**, or 1,024 used in place of 1,000.
- **Vague answers.** Say what changes (pixels or depth), what happens to the size, and why.

## Key terms

| Term | Meaning |
|---|---|
| Bitmap | An image made of a grid of pixels |
| Resolution | Informally, the number of pixels; the specification uses "size in pixels" |
| Colour depth | Bits per pixel |
| Key | A table matching bit patterns to colours |

## Self-test

1. State what the word pixel is short for.
2. State the number of colours that a colour depth of 4 bits can show.
3. Calculate the size in bits of a 100 × 50 image with a colour depth of 16 bits.
4. State the answer to question 3 in bytes.
5. Calculate the file size in bytes of a 1280 × 720 image with an 8-bit colour depth.
6. State the effect on the file size of doubling the width and doubling the height.
7. State the colour depth needed for 256 colours.
8. A 2 × 2 image has white = 0 and black = 1. Write the data for a diagonal: black, white in the top row and white, black
   in the bottom row.
9. State what the data `1001` represents in the key above, for a 2 × 2 image.
10. Explain why a lower colour depth gives a smaller file.

**Answers:**
1. Picture element.
2. 16 (2 to the power 4).
3. 80,000 bits (100 × 50 × 16).
4. 10,000 bytes (80,000 ÷ 8).
5. 921,600 bytes (1,280 × 720 × 8 ÷ 8).
6. The file is four times as large.
7. 8 bits.
8. `10 01`, which is `1001`.
9. Top row black, white; bottom row white, black: a diagonal.
10. Each pixel uses fewer bits, so there are fewer bits to store in total.

## Related resources

- [Representing images study guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-images/)
- [Representing images practice questions](/resources/oxfordaqa-igcse-computer-science-9210-representing-images-practice/)
- [Representing sound revision notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound-revision-notes/)
