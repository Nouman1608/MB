---
title: "Cambridge IGCSE ICT (0417): File size reduction"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 12: Images"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 12.2
syllabusTopics:
  - qualification: "igcse"
    topic: "images"
    subtopic: "file-size-reduction-t12-0417"
description: "How reducing image resolution or colour depth cuts file size, the effect on quality and how to calculate the saving, for Cambridge IGCSE ICT 0417 Topic 12."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Topic 12 of Cambridge IGCSE ICT 0417 ends with one knowledge statement under the heading "File size reduction": you should "recognise that reducing the file size can be achieved by reducing the image resolution or colour depth". The [Images study guide](/resources/cambridge-igcse-ict-images-study-guide/) lists several ways of making an image smaller. This guide focuses on the two the syllabus names, resolution and colour depth: what each one is, why reducing it shrinks the file, what it does to quality, and how to choose sensible values.

For quick recall use the [image file size revision notes](/resources/cambridge-igcse-ict-0417-file-size-reduction-t12-revision-notes/), and test yourself with the [image file size practice questions](/resources/cambridge-igcse-ict-0417-file-size-reduction-t12-practice/).

## How an image is stored

A bitmap image, such as a photograph, is a grid of tiny squares called **pixels**. For each pixel the computer stores a binary number that represents its colour. The size of the uncompressed file therefore depends on two things:

1. **how many pixels there are**, which is set by the image resolution;
2. **how many bits are stored for each pixel**, which is the colour depth.

Uncompressed size in bits = number of pixels x colour depth.

Divide by 8 to get bytes, then by 1 000 000 to get megabytes.

## Image resolution

**Image resolution** describes how much detail an image holds. It is given either as the **pixel dimensions** (for example 1 920 x 1 080 pixels) or as the **number of pixels per inch** (ppi) when the image is printed at a particular size.

- **Higher resolution**: more pixels, more detail, larger file.
- **Lower resolution**: fewer pixels, less detail, smaller file.

### Why reducing resolution reduces file size

Every pixel removed is one fewer colour value to store. Halving both the width and the height leaves only a quarter of the pixels, so the uncompressed file becomes a quarter of its size.

### Effect on quality

When the resolution is reduced, fine detail is lost. If the smaller image is then displayed or printed larger than its new pixel dimensions allow, each pixel becomes visible as a small square. This is called **pixelation**, and the image looks blocky or blurred. The lost detail cannot be recovered, which is why the original should be kept.

### Choosing a resolution

The resolution needed depends on how the image will be used:

| Use | Requirement |
|---|---|
| Thumbnail on a web page | Few pixels needed; small file loads quickly |
| Full-screen image on a monitor | Pixel dimensions similar to the screen's |
| Printed photograph or poster | Many more pixels, so it stays sharp when printed |

A sensible choice uses the lowest resolution that still looks sharp at the size it will be seen.

## Colour depth

**Colour depth** (also called bit depth) is the number of bits used to store the colour of each pixel. More bits allow more colours.

| Colour depth | Number of colours |
|---|---|
| 1 bit | 2 |
| 4 bits | 16 |
| 8 bits | 256 |
| 16 bits | 65 536 |
| 24 bits | 16 777 216 |

Each extra bit doubles the number of possible colours, so *n* bits give 2 to the power *n* colours. A 24-bit image can show over 16 million colours, enough for realistic photographs.

### Why reducing colour depth reduces file size

The file stores one colour value per pixel. Reducing the colour depth from 24 bits to 8 bits means each pixel uses one third as many bits, so the uncompressed file becomes one third of its size, even though the number of pixels stays the same.

### Effect on quality

With fewer colours available, smooth changes in colour, such as a sunset sky or the shading on a face, can no longer be shown accurately. Areas that should blend gradually appear as visible stripes or patches of flat colour, and the image may look unrealistic. Simple images with few colours, such as a logo, a cartoon or a black-and-white diagram, can use a low colour depth with little or no visible change.

## Worked example: comparing the two methods

A photograph is 1 920 x 1 080 pixels with a colour depth of 24 bits.

**Original size**

Pixels = 1 920 x 1 080 = 2 073 600.

Bits = 2 073 600 x 24 = 49 766 400.

Bytes = 49 766 400 / 8 = 6 220 800, which is about **6.22 MB**.

**Reduce resolution only** to 960 x 540 (half the width and half the height):

960 x 540 x 24 / 8 = 1 555 200 bytes, about **1.56 MB**: one quarter of the original.

**Reduce colour depth only** to 8 bits:

1 920 x 1 080 x 8 / 8 = 2 073 600 bytes, about **2.07 MB**: one third of the original.

**Reduce both**:

960 x 540 x 8 / 8 = 518 400 bytes, about **0.52 MB**: one twelfth of the original (1/4 x 1/3).

**Judgement:** for a photograph on a web page, reducing the resolution is usually the better first step, because the image is shown small and the loss of detail is hard to see. Reducing a photograph to 256 colours is more likely to cause visible banding. For a simple logo, reducing the colour depth is the better choice, because a logo uses only a few colours.

## Worked example: a print resolution

A photograph is to be printed 6 inches wide by 4 inches high.

- At 300 pixels per inch it needs 1 800 x 1 200 pixels. At 24 bits: 1 800 x 1 200 x 24 / 8 = 6 480 000 bytes, about 6.48 MB.
- At 150 pixels per inch it needs 900 x 600 pixels: 1 620 000 bytes, about 1.62 MB.

Halving the pixels per inch halves both dimensions, so the file is a quarter of the size. The 150 ppi print will be noticeably less sharp when viewed close up.

## Why reduce image file size?

- Web pages with smaller images **load faster**, especially on mobile connections.
- Smaller images keep documents and presentations a manageable size for **emailing** and **storage**.
- Less **bandwidth** is used when images are sent or viewed.

Always save the reduced image with **a new file name** so that the full-quality original remains available.

## Common mistakes

- Thinking that resizing an image on the page, by dragging it smaller in a document, reduces the file size. It changes the display size; the stored pixels are usually unchanged unless the image is compressed or resampled.
- Confusing colour depth with brightness. Colour depth is the number of bits per pixel.
- Writing that reducing colour depth reduces the number of pixels. It reduces the bits per pixel; the pixel count is unchanged.
- Forgetting to divide by 8 when converting bits to bytes.
- Saying that quality can be restored by increasing the resolution again. Lost detail cannot be recovered.

## Exam technique

When asked to **describe** how to reduce an image's file size, name the method and state what changes: "reduce the resolution, so there are fewer pixels to store". For **explain**, add the consequence: "so the file is smaller, but detail is lost and the image may pixelate if enlarged". In calculations, write the formula first, then substitute, then give the answer with units.

## Check your understanding

1. How many colours can an 8-bit image show? *256.*
2. A 1 000 x 800 image at 24 bits is reduced to 4 bits. How many times smaller is the uncompressed file? *24 / 4 = 6 times smaller.*
3. What visible effect can a big reduction in resolution cause? *Pixelation: a blocky or blurred image when enlarged.*
4. Why is a low colour depth acceptable for a two-colour logo? *It only needs a few colours, so no visible change occurs.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 12 Images, "File size reduction".
