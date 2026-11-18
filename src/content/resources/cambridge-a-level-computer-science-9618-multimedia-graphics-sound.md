---
title: "Cambridge A Level Computer Science (9618): Multimedia – Graphics, Sound"
resourceType: "study-guides"
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
description: "Study guide to Cambridge 9618 section 1.2: how bitmaps, vector graphics and sound are encoded, file size estimates, and the effects of changing each setting."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 1.2 Multimedia of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. For **graphics** you must show understanding of how data for a bitmapped image are encoded (using the terms pixel, file header, image resolution, screen resolution and colour depth/bit depth), "perform calculations to estimate the file size for a bitmap image", explain the effects of changing resolution and colour depth on quality and file size, show how a vector graphic is encoded (drawing object, property, drawing list), and "justify the use of a bitmap image or a vector graphic for a given task". For **sound** you must explain sampling, sampling rate, sampling resolution, analogue and digital data, and the impact of changing the sampling rate and resolution "on file size and accuracy".

The [Information Representation study guide](/resources/a-level-computer-science-information-representation/) introduces the two file size formulas. This guide goes further: it shows how to work backwards from a number of colours, how to predict the effect of several changes at once, and how to write the justification answers the syllabus asks for. Recall: [multimedia revision notes](/resources/cambridge-a-level-computer-science-9618-multimedia-graphics-sound-revision-notes/) · Questions: [multimedia practice set](/resources/a-computer-science-multimedia-graphics-sound-practice/).

## Bitmap images: how the data is encoded

A bitmap is a grid of **pixels**, the smallest addressable elements of the image. Each pixel's colour is stored as a binary number. The file stores those numbers row by row, preceded by a **file header**.

- **Image resolution**: the number of pixels in the image, written width × height (for example 1024 × 768).
- **Colour depth (bit depth)**: the number of bits used for each pixel's colour. With n bits there are 2ⁿ possible colours.
- **File header**: data at the start of the file that software needs to decode the rest, such as the file type, width and height in pixels, colour depth and any compression used.
- **Screen resolution**: the number of pixels a display can show across and down. It belongs to the screen, not to the image.

If an image's resolution is larger than the screen resolution, it is scaled down or only part of it is shown at full size. If it is smaller and is stretched to fill the screen, each image pixel covers several screen pixels and the picture looks blocky (pixelated).

### Working out colour depth from the number of colours

Questions sometimes give the number of colours needed. Find the smallest n for which 2ⁿ is at least that number.

| Colours needed | Smallest colour depth | Colours available |
|---|---|---|
| 2 | 1 bit | 2 |
| 16 | 4 bits | 16 |
| 300 | 9 bits | 512 |
| 1,000 | 10 bits | 1,024 |
| About 16.7 million | 24 bits | 16,777,216 |

300 colours do not fit in 8 bits (only 256), so 9 bits are needed even though most of the 512 patterns go unused.

## Estimating bitmap file size

```
File size (bits) = width × height × colour depth
```

Divide by 8 for bytes, then by 1,024 for KiB or 1,048,576 for MiB. The header adds a little; questions usually say to ignore it, which is why the answer is called an estimate.

**Worked example 1.** A 1024 × 768 image with a colour depth of 16 bits.

```
1024 × 768        = 786,432 pixels
× 16 bits         = 12,582,912 bits
÷ 8               = 1,572,864 bytes
÷ 1,024           = 1,536 KiB
÷ 1,024           = 1.5 MiB
```

**Worked example 2: several changes at once.** The same image is resized to 2048 × 1536 and its colour depth is cut to 8 bits. Rather than recalculate from scratch, use ratios: doubling the width and the height multiplies the number of pixels by 4; halving the colour depth halves the bits per pixel. 4 × ½ = 2, so the new file is about 3 MiB. Showing the ratio reasoning in words earns credit in "explain the effect" questions.

## Effects of changing resolution and colour depth

| Change | Effect on quality | Effect on file size |
|---|---|---|
| More pixels (higher image resolution) | More detail; can be printed or displayed larger before looking pixelated | Increases in proportion to the number of pixels |
| Fewer pixels | Less detail; edges look jagged when enlarged | Decreases |
| Greater colour depth | More colours, smoother shading and gradients, more lifelike | Increases in proportion to bits per pixel |
| Smaller colour depth | Fewer colours; visible banding in skies and skin tones | Decreases |

Increasing resolution beyond what the display or print size can show adds file size without visible gain.

## Vector graphics: how the data is encoded

A vector graphic stores **instructions** for drawing the picture, not the colour of each pixel.

- A **drawing object** is a shape such as a line, rectangle, circle, curve or text block.
- Each object has **properties**: for example its position coordinates, width and height or radius, line colour, line thickness and fill colour.
- The **drawing list** is the set of commands, in order, that draws every object. Objects later in the list are drawn on top of earlier ones.

An illustrative drawing list for a simple badge (the format is invented; real file formats differ):

```
Circle    centre (100,100)  radius 80  fill navy   line none
Rectangle corner (40,85)    width 120  height 30   fill white
Text      position (55,105) "WELCOME" colour navy  size 14
```

When the image is displayed, software recalculates every shape at the required size, so the graphic stays sharp however far it is enlarged. File size depends on the number of objects, not on the display size.

## Justifying bitmap or vector

The syllabus asks you to **justify** a choice, so give the choice, a reason linked to the task, and, for full answers, why the alternative is worse.

- **Company logo used on business cards and on a large banner**: vector. It scales without loss of quality, and a logo is made of a few simple shapes, so the file is small.
- **Photograph from a phone camera**: bitmap. A photograph has continuously varying colour that cannot be described efficiently as shapes; a camera sensor produces pixel data anyway.
- **Technical diagram or map that users zoom into**: vector, because lines must stay crisp at every zoom level.
- **Painting created with brush textures in a graphics package**: bitmap, because the detail of each brush stroke is stored pixel by pixel.

## Sound: how it is represented

Sound is an **analogue** signal: a continuously varying pressure wave that a microphone turns into a continuously varying voltage. A computer stores **digital** data: discrete values. Converting one to the other is **sampling**.

1. The amplitude (height) of the analogue wave is measured at regular time intervals.
2. Each measurement is a **sample**, rounded to the nearest value that can be stored.
3. Each sample is stored as a binary number.

- **Sampling rate**: the number of samples taken per second, measured in hertz (Hz).
- **Sampling resolution**: the number of bits used to store each sample. With n bits there are 2ⁿ possible amplitude levels: 8 bits gives 256 levels; 16 bits gives 65,536.

## Estimating sound file size

```
File size (bits) = sampling rate × sampling resolution × length in seconds × channels
```

**Worked example 3.** A 3-minute mono podcast sampled at 48,000 Hz with 16-bit resolution.

```
48,000 × 16 × 180 × 1 = 138,240,000 bits
÷ 8                   = 17,280,000 bytes
÷ 1,048,576           ≈ 16.5 MiB
```

A stereo version would have two channels and double the size.

## Impact of changing sampling rate and resolution

**Higher sampling rate**: samples are closer together in time, so rapid changes in the wave, including higher-pitched sounds, are captured more faithfully. Accuracy improves; file size rises in proportion.

**Higher sampling resolution**: each sample can take more possible values, so the rounding of each measurement is smaller and the stored wave is closer to the original, with less background distortion. Accuracy improves; file size rises in proportion to the bits per sample.

**Lower settings** give smaller files that are quicker to transmit, at the cost of accuracy. Speech can still be understood at settings that would make music sound noticeably worse, so a voice recording can use lower settings than a music recording without losing what matters.

## Common mistakes

- Defining image resolution as "pixels per inch" instead of the number of pixels in the image.
- Confusing image resolution with screen resolution.
- Forgetting to divide by 8 when the answer is wanted in bytes.
- Using 1,000 instead of 1,024 for KiB and MiB.
- Choosing 8 bits for 300 colours.
- Saying vector files are always smaller: a complex illustration with thousands of objects can be larger than a small bitmap.
- Saying a higher sampling rate makes sound "louder"; it makes it more accurate.
- Leaving out the number of channels for stereo sound.

## Exam technique

- **Calculate / estimate**: write the formula, substitute, convert units step by step and state the unit.
- **Explain the effect**: name the change, its effect on quality or accuracy, and its effect on file size, with a reason for each.
- **Justify**: choice + reason linked to the task + why the alternative is less suitable.
- **Show understanding**: use the syllabus terms exactly (pixel, file header, colour depth, drawing list, sampling resolution).

Next: condense this with the [multimedia revision notes](/resources/cambridge-a-level-computer-science-9618-multimedia-graphics-sound-revision-notes/), then try the [multimedia practice questions](/resources/a-computer-science-multimedia-graphics-sound-practice/). Compression of these files is section 1.3: see the [compression study guide](/resources/cambridge-a-level-computer-science-9618-compression/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 1.2 Multimedia (Graphics and Sound). Published by Cambridge International.
