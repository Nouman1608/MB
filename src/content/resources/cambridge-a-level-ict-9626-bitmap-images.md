---
title: "Cambridge A Level Information Technology (ICT): 19.3 Bitmap images (9626)"
seoTitle: "Cambridge A Level IT 9626: Bitmap Images Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.3
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
  - qualification: "a-level"
    topic: "graphics-creation"
    subtopic: "bitmap-images"
description: "Study guide to section 19.3 of Cambridge A Level IT 9626: selection and masking tools, colour adjustments, brushes, filters, and resizing images by colour depth and resolution."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **19.3 Bitmap images** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 4 (Advanced Practical) tests sections 17 to 21, and Paper 3 (Advanced Theory) is based on sections 12 to 21, where calculators are not allowed.

The syllabus asks you to be able to create and edit bitmap images that meet the requirements of their intended application and audience, using:

- **selection tools** to select, remove or hide parts of an image: lasso, magic wand, colour select, cut-out, crop and masking tools
- **colour work**: solid and gradient fills, converting to black and white or greyscale, and adjusting brightness, contrast, colour balance, shadows and highlights
- **brush, pencil and pen tools**, with pre-set and customised options
- **tools and filters** to alter parts of an image: distort, clone, erase, blur, smudge, sharpen and red eye removal
- **resizing the image or canvas**, including changing colour depth and resolution.

Use it with the [graphics creation topic guide](/resources/a-level-cambridge-ict-graphics-creation/), the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-bitmap-images-practice/). Layers, colour systems and file formats are in the [common graphics skills guide](/resources/cambridge-a-level-ict-9626-common-graphics-skills/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What is a bitmap image?

A **bitmap image** is a grid of tiny squares called **pixels**. Each pixel stores a colour. The quality depends on the number of pixels (resolution) and the number of bits that describe each pixel's colour (colour depth). Bitmaps suit photographs and images with subtle shading. They lose quality when enlarged, because the pixels are enlarged with them.

## Meeting the requirements of application and audience

Before editing, decide what the image is for. A photograph for a school prospectus, a web banner and a poster have different size, resolution, colour and file format needs. The audience affects style, colour and content. Keep the original and work on a copy.

## Selection tools

Most edits apply only to the **selected** area, so choosing the right selection tool is the first skill.

| Tool | How it works | Best for |
|---|---|---|
| **Lasso** | Drawn by hand around the area (freehand, or straight-sided polygon) | Irregular areas where the edge can be traced |
| **Magic wand** | Selects connected pixels of similar colour, within a set tolerance | Areas of nearly uniform colour, such as a sky |
| **Colour select** | Selects all pixels in the image that match or are close to a chosen colour, even if they are not connected | Removing or changing a colour everywhere |
| **Cut-out** | Isolates an object from its background by selecting and removing the surroundings | Placing a person or product on a new background |
| **Crop** | Removes everything outside a chosen rectangle | Improving composition and reducing file size |
| **Masking tools** | A mask hides parts of a layer without deleting them: black hides, white shows, grey partly shows | Non-destructive editing, gradual blends and changing selections later |

Useful settings: **tolerance** (how similar a pixel must be to be selected), **feather** (softens the edge of a selection) and adding to or subtracting from a selection.

*Masking vs erasing:* erasing permanently removes pixels. A mask only hides them, so the edit can be reversed.

## Working with colour

### Fills

A **solid fill** colours a selection with one colour. A **gradient fill** blends colours smoothly, in a linear or radial pattern.

### Converting colour

- **Black and white** (strictly two tones) turns each pixel black or white, and so loses all shading.
- **Greyscale** uses shades of grey, typically 256 levels, and keeps the tones without colour.

### Adjustments

| Adjustment | Effect |
|---|---|
| **Brightness** | Makes all pixels lighter or darker |
| **Contrast** | Increases or decreases the difference between light and dark areas |
| **Colour balance** | Shifts the mix of colours, for example to remove a yellow cast |
| **Shadows and highlights** | Brightens dark areas or darkens bright areas without changing the rest, to reveal detail |

Adjust gently and compare with the original. Too much contrast loses detail in both dark and light areas.

## Brush, pencil and pen tools

These paint onto the image. The **pencil** makes hard-edged lines, the **brush** soft-edged strokes, and the **pen** precise paths. Options can be **pre-set** (supplied by the program) or **customised**: size, hardness (edge softness), opacity, flow, shape and spacing. A pressure-sensitive tablet can vary the width as you press.

## Tools and filters to alter parts of an image

| Tool | Effect |
|---|---|
| **Distort** | Bends, twists or ripples the image or a selection |
| **Clone** | Copies pixels from one part of the image to another, for example to remove a blemish or an unwanted object by painting over it with texture copied from nearby |
| **Erase** | Removes pixels (to transparency or to the background colour) |
| **Blur** | Softens detail by averaging neighbouring pixels, to hide flaws or create depth |
| **Smudge** | Drags pixels along the stroke as if smearing wet paint |
| **Sharpen** | Increases the contrast along edges so that detail appears crisper. Too much creates a rough, noisy appearance |
| **Red eye removal** | Replaces the red reflection in eyes from camera flash with a natural dark colour |

Apply filters to a selection or layer where possible, so the rest of the image is unchanged.

## Resizing the image or canvas

**Image size** changes the number of pixels, and so the content is scaled. **Canvas size** changes the working area but does not scale the image. Enlarging the canvas adds empty space, and reducing it crops the image.

### Resolution

Changing the number of pixels (the resolution) changes the file size and the detail. Reducing it (resampling down) discards pixels. Enlarging it adds pixels by estimating colours, which does not add real detail, so the image looks soft. Keep the aspect ratio to avoid distortion.

### Colour depth

**Colour depth** is the number of bits used for each pixel. It decides how many colours are possible: the number of colours = 2 raised to the power of the number of bits.

| Bits per pixel | Colours | Use |
|---|---|---|
| 1 | 2 | Black and white line art |
| 4 | 16 | Very simple graphics |
| 8 | 256 | Greyscale images, simple graphics (GIF) |
| 24 | 16,777,216 | Photographs (true colour) |

Reducing the colour depth reduces the file size but can cause banding (visible steps in smooth areas of colour) and loss of detail.

### Worked example: effect of resizing

An image is 1,200 pixels wide and 800 pixels high at 24 bits per pixel (uncompressed).

- Size = 1,200 x 800 x 24 bits = 1,200 x 800 x 3 bytes = 2,880,000 bytes.
- Scaled to 600 x 400 pixels (half the width and half the height), the size = 600 x 400 x 3 = 720,000 bytes. That is one quarter of the original, because both dimensions halve.
- Changed to 8 bits per pixel at the original dimensions, the size = 1,200 x 800 x 1 = 960,000 bytes, which is one third of the 24-bit size, but only 256 colours are available.

## Common errors

- Using erase when a mask would allow the edit to be reversed.
- Setting the magic wand tolerance too high, so the selection leaks into other areas.
- Enlarging a small bitmap and expecting a sharper picture.
- Confusing image size with canvas size.
- Overusing sharpen, brightness or contrast.
- Reducing colour depth on a photograph and getting banding.
- Editing the only copy of the original.

## Frequently asked questions

**What is the difference between the lasso and the magic wand?**
The lasso is drawn by hand around an area. The magic wand selects pixels of similar colour automatically, within a tolerance.

**What does a mask do?**
It hides part of a layer without deleting it. The edit can be changed or reversed later.

**What is colour depth?**
The number of bits used to store the colour of each pixel. More bits allow more colours but give a larger file.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.3: Bitmap images.
