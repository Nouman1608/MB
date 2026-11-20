---
title: "OxfordAQA A-Level Computer Science (9645): Representing graphics"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Graphics Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.5 in depth: bitmaps, pixels, colour depth, storage calculations, metadata, vector graphics and when to use each."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.5 Representing graphics** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). It has three parts: **bitmapped graphics** (3.5.5.1), **vector graphics** (3.5.5.2) and **comparing the two** (3.5.5.3). You must describe how bitmaps represent images; understand **size in pixels** and **colour depth**; **calculate storage requirements** (excluding metadata); know that files also contain **metadata**; explain how vector graphics store **lists of objects** with typical properties; and compare the two approaches and their appropriate uses.

For quick recall use the [representing graphics revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-revision-notes/), then try the [representing graphics practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. Sizes below were recomputed with a script.

## Bitmapped graphics

A **bitmap** represents an image as a grid of tiny squares called **pixels** (picture elements). Each pixel stores a number that gives its colour. The computer stores these numbers row by row. To display the image, the screen draws each pixel in the colour its number represents.

### Size in pixels

The specification defines the **size** of a bitmap as its width in pixels multiplied by its height in pixels, written *width* × *height*. An image 800 pixels wide and 600 pixels high is "800 × 600" and has 480,000 pixels. More pixels mean finer detail, so the image looks sharper when enlarged, but the file is bigger.

### Colour depth

**Colour depth** is the **number of bits used to represent the colour of a pixel**. With a colour depth of *d* bits, each pixel can be one of 2^d colours.

| Colour depth (bits) | Number of colours | Typical use |
|---|---|---|
| 1 | 2 | Black and white image |
| 2 | 4 | Very simple graphic |
| 4 | 16 | Small icon |
| 8 | 256 | Simple graphic or a grey-scale photo |
| 16 | 65,536 | Medium-quality image |
| 24 | 16,777,216 | Photographic quality ("true colour") |

A greater colour depth allows more colours and smoother shading but increases the file size.

### Worked example 1: a one-bit image

A 1-bit image stores 0 for white and 1 for black. This 8 × 8 pattern has one row per line.

| Row | Bits | Black pixels in the row |
|---|---|---|
| 1 | 00111100 | 4 |
| 2 | 01000010 | 2 |
| 3 | 10100101 | 4 |
| 4 | 10000001 | 2 |
| 5 | 10100101 | 4 |
| 6 | 10011001 | 4 |
| 7 | 01000010 | 2 |
| 8 | 00111100 | 4 |

There are 26 black pixels in total. The image has 8 × 8 = 64 pixels at 1 bit each, so it needs **64 bits = 8 bytes**. Each row is exactly one byte, and in hexadecimal the rows are 3C, 42, A5, 81, A5, 99, 42 and 3C.

### Calculating storage requirements

The specification gives the formula (excluding metadata):

**storage requirement (bits) = size in pixels × colour depth**

where *size in pixels* = width in pixels × height in pixels. Divide by 8 for bytes, then use the prefixes from sub-topic 3.5.2 for larger units.

### Worked example 2: an 800 × 600 photograph

Size = 800 × 600 = 480,000 pixels. Colour depth = 24 bits.
Storage = 480,000 × 24 = 11,520,000 bits. In bytes: 11,520,000 ÷ 8 = 1,440,000 bytes. That is **1,440 kB** or **1,406.25 KiB** (1,440,000 ÷ 1,024) or about **1.37 MiB**.

### Worked example 3: a larger image

A 1920 × 1080 image with 24-bit colour has 2,073,600 pixels, which need 2,073,600 × 24 = 49,766,400 bits = 6,220,800 bytes. In binary units that is 6,075 KiB, about **5.93 MiB**; in decimal units, about 6.22 MB.

### Worked example 4: effect of changing the settings

| Image | Pixels | Colour depth | Bytes | KiB |
|---|---|---|---|---|
| 640 × 480 | 307,200 | 8 | 307,200 | 300 |
| 640 × 480 | 307,200 | 4 | 153,600 | 150 |
| 1024 × 768 | 786,432 | 16 | 1,572,864 | 1,536 |
| 32 × 32 | 1,024 | 8 | 1,024 | 1 |

Halving the colour depth from 8 to 4 bits halves the size. Halving both the width and the height of a 1920 × 1080 image gives a quarter of the pixels (960 × 540), so the file is **4 times smaller**.

### Choosing a colour depth

To store an image using *n* different colours you need the smallest *d* with 2^d at least *n*. A logo with 20 colours needs 5 bits (2^4 = 16 is too few; 2^5 = 32 is enough). An image with 100 colours needs 7 bits (2^7 = 128).

### Metadata

A bitmap file also holds **metadata**: data that describes the image rather than being the image. Typical examples are the **width**, the **height** and the **colour depth**. Without these, a program reading the file would not know how many bits make one pixel or where each row ends. Other metadata can include the date, the camera and the file format. The storage formula excludes metadata, so the real file is slightly larger than the calculated value.

## Vector graphics

A **vector graphic** does not store pixels. It stores a **list of geometric objects** (such as lines, rectangles, circles and polygons), and the **properties** of each object are stored as a list. To display the image, the computer redraws every object from its properties.

Typical properties named in the specification:

- the **x and y coordinates of the top left corner** of the object;
- the **colour of the outline**;
- the **line width of the outline**;
- the **colour of the fill**.

Further properties depend on the shape, such as width, height and radius.

### Worked example 5: a vector description

| Object | x | y | Width | Height | Outline colour | Line width | Fill colour |
|---|---|---|---|---|---|---|---|
| Rectangle | 20 | 30 | 100 | 60 | black | 2 | yellow |
| Ellipse | 50 | 50 | 40 | 40 | red | 1 | none |
| Line | 20 | 120 | 100 | 0 | blue | 3 | none |

The image is simply this list. Changing the rectangle's fill colour means changing one value in the list. Doubling the picture size means doubling the numbers. No detail is lost, because the shapes are redrawn mathematically at the new size.

## Comparing bitmaps and vectors

| Feature | Bitmap | Vector |
|---|---|---|
| Stores | A grid of pixel colour values | A list of objects and their properties |
| Scaling up | Becomes blocky (pixelated) because pixels are enlarged | Stays sharp; shapes are redrawn |
| File size | Depends on pixels and colour depth; large for big images | Depends on the number of objects; often small for simple images |
| Editing | Edit individual pixels; hard to move one shape | Edit or move each object independently |
| Realistic photos | Good: any pixel can have any colour | Poor: too many objects needed |
| Rendering | Fast to display; just draws the pixels | Must calculate and draw every object |

### Appropriate uses

- **Bitmaps:** photographs, scanned images, detailed textures and any image with subtle colour variation.
- **Vectors:** logos, diagrams, maps, technical drawings and signs, which must look sharp at any size and are made of shapes.

A company logo is a good example. As a vector, it prints crisply on a business card and on a billboard from the same file. As a bitmap, it would need a very large pixel size to look sharp on the billboard.

## Exam technique

- **Show the formula** and every step: pixels, then bits, then bytes, then the requested unit.
- **Give units** and state clearly whether you used 1,000 or 1,024.
- **For comparisons,** pair a feature with a reason. "Vectors scale without loss of quality because they are redrawn from the object properties" earns more than "vectors are better".
- **For metadata,** name items (width, height, colour depth) and say why they are needed.

## Common mistakes

- Forgetting to multiply by the colour depth, or to divide by 8 for bytes.
- Using width + height instead of width × height.
- Saying a vector graphic stores pixels.
- Claiming vector graphics are always smaller than bitmaps.
- Giving "easier to edit" without saying what is being edited.
- Counting metadata in the storage formula.

## Next steps

- [Representing graphics revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-revision-notes/)
- [Representing graphics practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-practice/)
- [Units of information study guide](/resources/oxfordaqa-a-level-computer-science-9645-units-of-information/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.5 Representing graphics.
