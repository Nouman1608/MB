---
title: "OxfordAQA IGCSE Computer Science (9210): Representing images -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Images Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.6: pixels, bitmaps, size in pixels, colour depth, file size calculations and converting between images and binary."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.6 Representing images** of OxfordAQA International GCSE Computer Science (9210). The
specification asks you to understand what a **pixel** is and how pixels relate to an image and to the way images
are displayed. For **bitmaps** you must describe the **size in pixels** and the **colour depth**, and how a bitmap
represents an image. You must describe, using examples, how the number of pixels and the colour depth affect file
size, and **calculate bitmap file sizes**. You must also **convert binary data into an image** and **convert an image
into binary data**.

## Pixels

An image on a screen is not one continuous picture. The display is divided into a grid of tiny squares called
**pixels**. The word is short for **picture element**, and a pixel is "a single point in a graphical image". The
specification says that a VDU (a display screen) displays pictures "by dividing the display screen into thousands (or
millions) of pixels, arranged into rows and columns". Each pixel shows one colour, and when you look at the whole grid
from a distance, the pixels blend into a picture.

A bitmap image stores one value for **every pixel** in the grid. The values are stored in order, row by row, as binary
numbers.

## Size in pixels

The **size** of a bitmap is the number of pixels across (the **width**) and down (the **height**). The specification
expresses it directly as **width × height**. A bitmap of 800 × 600 has 800 pixels in each row and 600 rows, so
800 × 600 = 480,000 pixels in total.

A greater number of pixels means the image can show more detail, because the picture is cut into smaller pieces. If
the same picture is stored with fewer pixels, it looks blocky when displayed large, because each pixel is bigger.

## Colour depth

The **colour depth** is the **number of bits used to represent each pixel**. The more bits per pixel, the more
different colours each pixel can take, because each extra bit doubles the number of patterns.

| Colour depth | Number of colours | Calculation |
|---|---|---|
| 1 bit | 2 | 2¹ |
| 2 bits | 4 | 2² |
| 3 bits | 8 | 2³ |
| 8 bits | 256 | 2⁸ |
| 24 bits | 16,777,216 | 2²⁴ |

A colour depth of 1 bit gives two colours, such as black (0) and white (1). A depth of 8 bits gives 256 different
colours. A depth of 24 bits gives more than sixteen million colours, which is enough for realistic photographs.

## How a bitmap represents an image

To store a bitmap, the computer needs three things: the **size in pixels** (so it knows where each row ends), the
**colour depth** (so it knows how many bits belong to each pixel) and the **bit pattern** of all the pixels in order.
The bits for the first row come first, then the second row, and so on.

### Example: a one-bit image

A small 8 × 8 image has a colour depth of 1 bit. Here 0 means white and 1 means black. The bit pattern is written one
row at a time, and the picture is the grid drawn from it.

| Row | Bits | Picture |
|---|---|---|
| 0 | 0011 1100 | `. . # # # # . .` |
| 1 | 0100 0010 | `. # . . . . # .` |
| 2 | 1010 0101 | `# . # . . # . #` |
| 3 | 1000 0001 | `# . . . . . . #` |
| 4 | 1010 0101 | `# . # . . # . #` |
| 5 | 1001 1001 | `# . . # # . . #` |
| 6 | 0100 0010 | `. # . . . . # .` |
| 7 | 0011 1100 | `. . # # # # . .` |

The picture is a smiling face. The total number of bits is 8 × 8 × 1 = 64 bits, which is 8 bytes.

### Example: a two-bit image

A 4 × 4 image uses 2 bits per pixel, so it can have 4 colours. The key says 00 is white, 01 is red, 10 is blue and 11
is black.

| Row | Bits (pairs) | Colours |
|---|---|---|
| 0 | 00 01 01 00 | white, red, red, white |
| 1 | 01 10 10 01 | red, blue, blue, red |
| 2 | 01 10 10 01 | red, blue, blue, red |
| 3 | 00 01 01 00 | white, red, red, white |

The image has 16 pixels, each of 2 bits, which is 32 bits, or 4 bytes.

## Calculating file size

The specification gives the formulae. Only the colour depth and the number of pixels are used.

- **Size in bits = W × H × D**
- **Size in bytes = W × H × D ÷ 8**

where W is the width in pixels, H is the height in pixels and D is the colour depth in bits.

### Worked example 1: an 800 × 600 image with 24-bit colour

- Bits: 800 × 600 × 24 = 11,520,000 bits.
- Bytes: 11,520,000 ÷ 8 = 1,440,000 bytes.
- In megabytes (using 1 MB = 1,000,000 bytes): **1.44 MB**.

### Worked example 2: a 1920 × 1080 image with 24-bit colour

- Bits: 1,920 × 1,080 × 24 = 49,766,400 bits.
- Bytes: 49,766,400 ÷ 8 = 6,220,800 bytes.
- In megabytes: **6.2208 MB**, or about 6.2 MB.

### Worked example 3: a 640 × 480 image with 8-bit colour

- Bits: 640 × 480 × 8 = 2,457,600 bits.
- Bytes: 2,457,600 ÷ 8 = 307,200 bytes, which is **307.2 kB**.

### Worked example 4: a 200 × 100 black and white image

A black and white image uses 1 bit per pixel.

- Bits: 200 × 100 × 1 = 20,000 bits.
- Bytes: 20,000 ÷ 8 = 2,500 bytes, which is **2.5 kB**.

### Method

1. Write down W, H and D.
2. Multiply them to get the size in **bits**.
3. Divide by 8 if the answer is wanted in **bytes**.
4. Convert to kB, MB or GB if asked, by dividing by 1,000 for each step (see the [units of information
   guide](/resources/oxfordaqa-igcse-computer-science-9210-units-of-information/)).
5. Write the **unit** with the answer.

## How pixels and colour depth affect file size

Because file size = W × H × D, the file size depends directly on each of the three values.

| Change | Effect on file size | Effect on the image |
|---|---|---|
| More pixels (greater width or height) | Larger, in proportion to W × H | More detail; sharper when enlarged |
| Fewer pixels | Smaller | Less detail; looks blocky when enlarged |
| Higher colour depth | Larger, in proportion to D | More colours; smoother colour changes |
| Lower colour depth | Smaller | Fewer colours; colours look banded or flat |

Some examples with numbers show the effect clearly.

- Double the width and the height of a 400 × 300 image with 24-bit colour. The 400 × 300 image is 2,880,000 bits (360,000
  bytes). The 800 × 600 image is 11,520,000 bits (1,440,000 bytes). **Doubling both dimensions makes the file four times
  larger**, since there are four times as many pixels.
- Reduce the colour depth of an 800 × 600 image from 24 bits to 8 bits. The size goes from 1,440,000 bytes to 480,000
  bytes. **The file is one third of the size**, because 8 is one third of 24.

A good exam answer uses a short comparison like these, as the specification asks you to describe the effect "using
examples".

## Converting binary data into an image

You are given a bit pattern, a size and a key, and must draw the image.

1. Work out the number of bits per pixel from the colour depth.
2. Split the pattern into groups of that many bits, one group for each pixel.
3. Break the groups into rows, using the width of the image.
4. Colour each pixel using the key.

**Example:** a 4 × 4 image has colour depth 1, with 0 = white and 1 = black. The data is `0110 1001 1001 0110`. Each
row is four bits, so the image is:

| | Column 1 | Column 2 | Column 3 | Column 4 |
|---|---|---|---|---|
| Row 1 | white | black | black | white |
| Row 2 | black | white | white | black |
| Row 3 | black | white | white | black |
| Row 4 | white | black | black | white |

The black pixels form a ring shape around a white centre.

## Converting an image into binary data

You are given a grid of coloured pixels and a key, and must write the bit pattern.

1. Look up the bit pattern for each colour in the key.
2. Read the pixels row by row, from the top left, and write the code for each pixel.
3. Check that you have W × H × D bits in total.

**Example:** a 3 × 2 image, with white = 0 and black = 1, has the top row black, white, black and the bottom row white,
black, white. The data is `101 010`, a total of 3 × 2 × 1 = 6 bits.

## Common mistakes

- Forgetting to divide by **8** to turn bits into bytes.
- Multiplying W × H and stopping, without multiplying by the colour depth D.
- Giving the colour depth as the **number of colours** (256) instead of the **bits per pixel** (8).
- Using colour depth of 1 byte rather than 1 bit.
- Saying more pixels means more colours. The number of pixels and the number of colours (colour depth) are
  different things.
- Saying "higher resolution" without explaining that it means more pixels.
- Reading a bit pattern in the wrong order. The data is read **row by row**, left to right.
- Not splitting the pattern into groups of D bits when D is more than 1.
- Forgetting the unit, or using 1,024 instead of 1,000 when converting.

## Exam technique

- **Describe** questions about a pixel: say that it is a picture element, a single point of the image, and that an
  image is a grid of rows and columns of pixels.
- **Calculate** questions: write the formula, substitute the numbers, then calculate, giving the unit.
- **Effect on file size**: name the factor (number of pixels or colour depth), say whether the file gets larger or
  smaller, and give the reason (more bits to store).
- **Binary to image and image to binary**: show your grouping of bits, because it earns method marks.
- Check the answer by working out the number of bits: it must equal W × H × D.

## Next steps

For a condensed summary and a self-test, use the [Representing images revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-images-revision-notes/), and practise with the
[Representing images practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-representing-images-practice/).
