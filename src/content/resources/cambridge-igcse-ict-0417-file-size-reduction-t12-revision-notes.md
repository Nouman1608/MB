---
title: "Cambridge IGCSE ICT (0417): File size reduction -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on image file size for Cambridge IGCSE ICT 0417 Topic 12: resolution, colour depth, effects on size and quality, and the size formula."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense the "File size reduction" statement in Topic 12 of Cambridge IGCSE ICT 0417: "recognise that reducing the file size can be achieved by reducing the image resolution or colour depth". The [image file size study guide](/resources/cambridge-igcse-ict-0417-file-size-reduction-t12/) explains the ideas with full worked examples, and the [image file size practice questions](/resources/cambridge-igcse-ict-0417-file-size-reduction-t12-practice/) test them.

## Syllabus coverage

| Syllabus wording | What to know |
|---|---|
| Reducing the image resolution | Fewer pixels, so less data; loss of detail; pixelation |
| Reducing the colour depth | Fewer bits per pixel, so less data; fewer colours; banding |
| Reducing the file size | Why it matters and how to calculate the effect |

## The formula

**Uncompressed size (bytes) = width in pixels x height in pixels x colour depth in bits / 8**

Divide by 1 000 000 for megabytes (unless the question uses 1 048 576).

## Resolution at a glance

- **What it is**: the amount of detail, given as pixel dimensions or pixels per inch.
- **Reduce it**: fewer pixels to store, so a smaller file.
- **Scale rule**: halve width and height, and the file becomes a quarter of the size.
- **Quality cost**: detail lost for good; **pixelation** (blocky squares) if enlarged.
- **Good for**: photos shown small, such as web thumbnails.

## Colour depth at a glance

- **What it is**: the number of bits stored for each pixel's colour.
- **Colours available**: 2 to the power of the number of bits.
- **Reduce it**: fewer bits per pixel, so a smaller file; the pixel count does not change.
- **Scale rule**: 24 bits to 8 bits makes the file one third of the size.
- **Quality cost**: smooth gradients show **banding** (stripes or patches of flat colour).
- **Good for**: logos, cartoons and diagrams with few colours.

## Colour depth table

| Bits per pixel | Colours |
|---|---|
| 1 | 2 |
| 4 | 16 |
| 8 | 256 |
| 16 | 65 536 |
| 24 | 16 777 216 |

## Quick calculations

| Image | Calculation | Size |
|---|---|---|
| 2 400 x 1 600, 24-bit | 2 400 x 1 600 x 24 / 8 | 11 520 000 bytes, 11.52 MB |
| 1 200 x 800, 24-bit (half each side) | 1 200 x 800 x 24 / 8 | 2 880 000 bytes, 2.88 MB (one quarter) |
| 2 400 x 1 600, 8-bit | 2 400 x 1 600 x 8 / 8 | 3 840 000 bytes, 3.84 MB (one third) |
| 1 200 x 800, 8-bit | 1 200 x 800 x 8 / 8 | 960 000 bytes, 0.96 MB (one twelfth) |

## Which method to choose

| Image | Better method | Why |
|---|---|---|
| Photograph for a web page | Reduce resolution | Shown small, so lost detail is hard to see; colours stay realistic |
| Company logo with three colours | Reduce colour depth | Few colours needed, so no visible change |
| Photograph for a large printed poster | Avoid big reductions | Needs many pixels and colours to stay sharp and realistic |
| Black and white line diagram | Reduce colour depth to 1 bit | Only two colours used |

## Key terms

| Term | Meaning |
|---|---|
| Pixel | The smallest element of a bitmap image |
| Image resolution | The amount of detail, as pixel dimensions or pixels per inch |
| Pixels per inch (ppi) | Number of pixels in each inch of a printed image |
| Colour depth | Number of bits used to store each pixel's colour |
| Pixelation | Visible square pixels when an image is enlarged beyond its detail |
| Banding | Stripes of flat colour where a smooth gradient should be |

## Exam traps

- Colour depth is **bits per pixel**, not brightness or contrast.
- Reducing colour depth does **not** change the number of pixels.
- Halving the resolution in **both** directions gives a **quarter**, not a half.
- **Divide by 8** to turn bits into bytes.
- Lost detail **cannot** be restored by increasing the resolution again.
- Dragging an image smaller on the page changes how it is **displayed**, not necessarily the stored pixels.
- Keep the original: save the reduced copy under a **new name**.

## Self-test

1. Name the two ways of reducing image file size given in the syllabus.
2. What is colour depth?
3. How many colours can a 4-bit image show?
4. Calculate the uncompressed size of a 1 280 x 960 image at 24 bits per pixel, in MB.
5. The image in question 4 is reduced to 640 x 480. By what factor does its size change?
6. A 24-bit image is changed to 8-bit. What fraction of the original size is it now?
7. What visible problem can reducing resolution cause?
8. What visible problem can reducing colour depth cause in a photograph of the sky?
9. Which method suits a simple logo, and why?
10. Give two reasons for reducing the file size of images on a website.
11. Why should the original image be kept?
12. A 640 x 480 image uses 16 bits per pixel. Calculate its size in bytes.

## Self-test answers

1. Reducing the image resolution and reducing the colour depth.
2. The number of bits used to store the colour of each pixel.
3. 16.
4. 1 280 x 960 x 24 / 8 = 3 686 400 bytes, about 3.69 MB.
5. It becomes one quarter of the size (half the width and half the height).
6. One third.
7. Pixelation: the image looks blocky or blurred when enlarged.
8. Banding: stripes of flat colour instead of a smooth change.
9. Reducing colour depth, because a logo uses only a few colours, so quality is not visibly affected.
10. Pages load faster; less bandwidth and storage are used.
11. Lost detail cannot be recovered from the reduced copy.
12. 640 x 480 x 16 / 8 = 614 400 bytes.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 12 Images, "File size reduction".
