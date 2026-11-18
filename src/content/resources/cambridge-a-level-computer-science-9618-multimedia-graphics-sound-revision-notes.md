---
title: "Cambridge A Level Computer Science (9618): Multimedia – Graphics, Sound -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "multimedia-graphics-sound"
description: "Revision notes for Cambridge 9618 section 1.2: bitmap and vector terms, file size formulas, effects of changes, sampling, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1.2 Multimedia (Graphics and Sound) of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The [multimedia study guide](/resources/cambridge-a-level-computer-science-9618-multimedia-graphics-sound/) explains each idea with worked examples; the [multimedia practice questions](/resources/a-computer-science-multimedia-graphics-sound-practice/) test them.

## Key terms

| Term | Meaning |
|---|---|
| Pixel | Smallest addressable element of a bitmap image |
| Image resolution | Number of pixels in the image, width × height |
| Screen resolution | Number of pixels a display can show, across × down |
| Colour depth / bit depth | Bits used to store the colour of one pixel |
| File header | Data at the start of an image file needed to decode it: file type, width, height, colour depth, compression |
| Drawing object | A shape in a vector graphic: line, rectangle, circle, curve, text |
| Property | A value describing an object: coordinates, size, line colour, line width, fill colour |
| Drawing list | The ordered set of commands that draws every object |
| Analogue data | Continuously varying values, such as a sound wave |
| Digital data | Discrete values stored as binary |
| Sampling | Measuring the amplitude of an analogue wave at regular intervals |
| Sampling rate | Number of samples per second (Hz) |
| Sampling resolution | Number of bits per sample |

## Formulas

```
Colours available       = 2^(colour depth)
Bitmap size (bits)      = width × height × colour depth
Amplitude levels        = 2^(sampling resolution)
Sound size (bits)       = sampling rate × sampling resolution × seconds × channels
bits → bytes: ÷ 8      bytes → KiB: ÷ 1,024      KiB → MiB: ÷ 1,024
```

**Colour depth for a required number of colours:** smallest n with 2ⁿ ≥ colours. 50 colours → 6 bits (64); 300 colours → 9 bits (512).

## Quick worked reminders

**Bitmap.** 640 × 480 pixels, 4-bit colour depth:

```
640 × 480 × 4 = 1,228,800 bits = 153,600 bytes = 150 KiB
```

**Sound.** 10 seconds of stereo at 32,000 Hz, 16-bit:

```
32,000 × 16 × 10 × 2 = 10,240,000 bits = 1,280,000 bytes = 1,250 KiB
```

**Ratio shortcut.** File size is proportional to every factor in the formula. Double width and height → × 4. Halve the colour depth → × ½. Change from stereo to mono → × ½. Multiply the ratios together.

## Effects of changes

| Change | Quality or accuracy | File size |
|---|---|---|
| Image resolution up | More detail; enlarges further before pixelation | Up |
| Colour depth up | More colours; smoother gradients | Up |
| Colour depth down | Fewer colours; banding | Down |
| Sampling rate up | Captures rapid changes and higher pitches more faithfully | Up |
| Sampling resolution up | Smaller rounding error per sample; closer to original wave | Up |
| Mono instead of stereo | No left–right separation | Halved |

## Bitmap or vector?

| Bitmap | Vector |
|---|---|
| Stores every pixel's colour | Stores drawing objects and their properties |
| Suits photographs and detailed, textured images | Suits logos, diagrams, maps, icons, text-based art |
| Pixelates when enlarged | Scales to any size without loss |
| Size depends on resolution and colour depth | Size depends on number and complexity of objects |
| Editing works on pixels | Objects can be edited individually |

**Justify** = choice + reason tied to the task + why the alternative is weaker.

## Sound in four steps

1. Microphone converts the sound wave to a varying analogue voltage.
2. The amplitude is measured at fixed intervals (sampling rate).
3. Each measurement is rounded to the nearest available level (2ⁿ levels for n-bit resolution).
4. Each level is stored as an n-bit binary number.

## Exam traps

- Image resolution is a pixel count, not pixels per inch.
- Screen resolution is a property of the display, not the image.
- Forgetting ÷ 8 before converting to KiB or MiB.
- Using 1,000 instead of 1,024 for binary prefixes.
- Rounding colour depth down (300 colours need 9 bits, not 8).
- Forgetting channels for stereo.
- "Higher sampling rate = louder": wrong; it means more accurate.
- Claiming vector files are always smaller.

## Self-test

1. Define colour depth.
2. How many colours can a 5-bit colour depth represent?
3. What is the smallest colour depth for an image needing 120 colours?
4. Calculate the size in KiB of a 512 × 256 image with an 8-bit colour depth.
5. An image's width and height are both halved and its colour depth is doubled. What happens to the file size?
6. Name **two** items stored in a bitmap file header.
7. Name **two** properties of a circle in a vector graphic.
8. Why does a vector logo stay sharp when printed on a large banner?
9. Define sampling resolution.
10. How many amplitude levels does a 12-bit sampling resolution allow?
11. Calculate the size in bytes of 5 seconds of mono sound at 8,000 Hz with 8-bit resolution.
12. Give **one** effect of reducing the sampling rate on a music recording.

### Answers

1. The number of bits used to represent the colour of each pixel.
2. 2⁵ = **32**.
3. **7 bits** (2⁷ = 128; 6 bits give only 64).
4. 512 × 256 × 8 = 1,048,576 bits = 131,072 bytes = **128 KiB**.
5. Pixels × ¼, bits per pixel × 2, so the file is **half** the size.
6. Any two: file type, width, height, colour depth, compression method, file size.
7. Any two: centre coordinates, radius, line colour, line thickness, fill colour.
8. It is stored as objects and properties, so it is redrawn at the new size rather than stretching fixed pixels.
9. The number of bits used to store each sample.
10. 2¹² = **4,096**.
11. 8,000 × 8 × 5 = 320,000 bits = **40,000 bytes**.
12. Higher-pitched and rapidly changing sounds are captured less accurately, so the music sounds less like the original (the file is smaller).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 1.2 Multimedia (Graphics and Sound). Published by Cambridge International.
