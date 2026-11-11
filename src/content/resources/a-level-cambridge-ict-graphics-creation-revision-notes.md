---
title: "Cambridge A Level Information Technology (ICT): Graphics creation (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Graphics Creation Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
description: "Revision notes for Cambridge A Level IT 9626 Graphics creation: key terms, colour systems, file formats, node types, compression and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

For full explanations and worked examples, use the [Graphics creation study guide](/resources/a-level-cambridge-ict-graphics-creation/). These notes condense **topic 19, Graphics creation**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections 19.1 to 19.5. It is an **A Level only** topic. Paper 3 (Advanced Theory) questions are based on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21, so revise both the reasons behind each tool and the skills themselves.

Links: [course hub](/boards/cambridge/a-level/ict/), [course checklist](/checklists/cambridge/a-level/ict/), [Graphics creation practice questions](/resources/a-level-cambridge-ict-graphics-creation-practice/), [free 10-minute diagnostics](/diagnostics/).

## Topic 19 at a glance

- **19.1 Common graphics skills** -- layers; transform; grouping and combining; alignment, distribution and order; layout aids; colour picker; crop; colour systems; resolution; file formats and export; solid and gradient fills.
- **19.2 Vector graphics** -- drawing and shape tools; selection (convert to curves, replication, transformation); fills; node and path editing; tracing bitmaps and its pros and cons.
- **19.3 Bitmap images** -- selection and masking; colour adjustments; brushes, pencils and pens; filters; resizing image or canvas, colour depth, resolution.
- **19.4 Compression** -- what it is; lossless and lossy; effects on images.
- **19.5 Text** -- font face, size, kerning, letter spacing, line spacing; text on a path; text in a shape; text to curves.

Every design choice should be justified by the **intended application and audience**.

## Bitmap v vector

| | Bitmap | Vector |
|---|---|---|
| Stored as | Grid of pixels, each with a colour | Paths of nodes and curves, with stroke and fill |
| Enlarging | Pixelates | Stays sharp |
| Best for | Photographs, fine shading | Logos, icons, diagrams, text |
| File size depends on | Pixel count and colour depth | Number of objects and nodes |
| Formats | BMP, JPG, PNG, GIF, TIF | SVG (PDF can hold both) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--14-gc-bitmap-vector.webp" width="900" height="950" alt="A circle is stored as a bitmap grid of pixels and as a vector path with nodes. At actual size both look fine; enlarged, the bitmap edge turns blocky while the vector stays smooth. Bitmaps suit photographs, vectors suit logos and diagrams." loading="lazy">
  <figcaption>Enlarging a bitmap shows its pixels; a vector graphic stays smooth at any size.</figcaption>
</figure>


## Layer and object tools (19.1)

- **Layers**: add, remove, select active layer, order, toggle visibility, lock, opacity/transparency.
- **Blend** = how a layer combines with those below. **Merge** = combine chosen layers. **Flatten** = combine all layers into one.
- **Transform**: move, resize, scale, rotate, reflect, skew, shear, envelope, perspective.
- **Group** keeps objects separate but moving together; **combine/join** makes one object or joins end nodes.
- **Add** (union) merges outlines; **subtract** cuts one shape from another; **intersect** keeps only the overlap.
- **Align** edges or centres; **distribute** for equal spacing.
- **Order**: raise, lower (one step); bring to front, send to back (all the way).
- **Layout**: rulers, grids, guidelines, snapping for precise placement.
- **Colour picker**: sample a colour or colour range from the image or another source.
- **Crop/clip to object**: keep only what is inside a chosen shape.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--15-gc-layers.webp" width="900" height="950" alt="Three stacked layers: text on top, a shape at 50 percent opacity, and a locked background, each with a visibility eye. Flattening combines them into one image where the half-transparent shape blends with the background." loading="lazy">
  <figcaption>Layers keep parts of a design separate until they are flattened.</figcaption>
</figure>


## Colour systems

| System | Model | Components | Use |
|---|---|---|---|
| RGB | Additive (light) | Red, green, blue; all full = white | Screens, web |
| HSL | Rearranges RGB colours | Hue (0–360°), saturation, lightness | Intuitive colour adjustment |
| CMYK | Subtractive (ink) | Cyan, magenta, yellow, key (black) | Print |
| CMS | Colour management system | Device profiles convert colours between devices | Consistent screen-to-print colour |

CMYK adds a separate black ink because mixing cyan, magenta and yellow gives a muddy dark colour rather than a true black. Some screen colours cannot be reproduced in ink, so check print work in CMYK.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--16-gc-colour.webp" width="900" height="1060" alt="RGB is additive: red, green and blue light overlap to make yellow, magenta, cyan and white, for screens. CMYK is subtractive: cyan, magenta and yellow inks overlap to give blue, red, green and a muddy dark, so black ink is added; used for printing." loading="lazy">
  <figcaption>Screens add light (RGB); printers use inks that absorb light (CMYK).</figcaption>
</figure>


## Resolution

- **Too low**: blocky or soft images, worst in print or when enlarged.
- **Too high**: no visible gain on screen, but larger files, slower web pages, more storage.
- **Changing colour depth**: fewer bits per pixel give a smaller file but fewer colours, so smooth areas show banding.

**Worked reminder.** A 2000 × 1000 image with 8-bit colour: 2000 × 1000 × 8 ÷ 8 = 2,000,000 bytes = 2 MB, with 2⁸ = 256 colours.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--17-gc-resolution.webp" width="900" height="1000" alt="A 3600 by 2400 pixel photo at 300 ppi prints 12 by 8 inches and is sharp. At 24 by 16 inches the same pixels give 150 ppi, so each pixel is twice as large and the print is softer. 300 ppi at that size needs 7200 by 4800 pixels." loading="lazy">
  <figcaption>Stretching the same pixels over a bigger print lowers ppi and softens the image.</figcaption>
</figure>


## Formulas

| Quantity | Formula |
|---|---|
| Number of colours | 2 to the power of colour depth (bits per pixel) |
| Uncompressed size (bits) | width (px) × height (px) × colour depth |
| Size in bytes | bits ÷ 8 |
| Print size (inches) | pixels ÷ ppi |
| Pixels needed for print | inches × ppi |
| Effective ppi | pixels ÷ inches printed |

## Method in steps -- is this image good enough to print?

1. Find the pixel dimensions.
2. Divide each by the print size in inches to get the effective ppi.
3. Compare with the target (high-quality print commonly targets about 300 ppi).
4. Too low: expect blocky or soft print -- get a larger original or print smaller.
5. For screen use, reduce to the display size to save file size and load time.

## File formats

| Format | Compression | Transparency | Choose it for |
|---|---|---|---|
| SVG | Vector | Yes | Web logos and icons that must scale |
| BMP | Usually none | -- | Simple exchange; large files |
| JPG/JPEG | Lossy | No | Photographs |
| PNG | Lossless | Yes | Logos, screenshots, sharp text |
| GIF | Lossless, max 256 colours | Simple | Simple graphics, short animations |
| TIF | Usually none or lossless | -- | Print and archive masters |
| PDF | Mixed content | -- | Fixed-layout, print-ready artwork |

Paper 4: the syllabus states that work saved in an incorrect file format earns no marks for that task, so check the format every task asks for.

## Vector nodes (19.2)

| Node | Handles | Result |
|---|---|---|
| Cusp | Move independently | Sharp corner |
| Smooth | Kept in line | Curve passes through without a corner |
| Symmetrical | In line, equal length | Equal curvature both sides |
| Asymmetrical | In line, unequal length | Different curvature each side |

- **Bezier curve**: shape set by end nodes and control handles (direction and strength of bend).
- **Simplify a path**: delete unneeded nodes; fewer nodes give a cleaner line and smaller file.
- **Convert to curves**: shape object becomes an editable path; shape settings lost.
- **Replication**: duplicates or evenly spaced copies.
- **Trace bitmap**: edges and colour areas become vector paths. Gains: scalable, editable, small for simple logos. Losses: detail and shading, many nodes for complex images, clean-up time.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--18-gc-nodes.webp" width="900" height="930" alt="Four curves each with a node and two handles. Cusp: handles move independently for a sharp corner. Smooth: handles in a straight line. Symmetrical: smooth with equal-length handles. Asymmetrical: smooth with unequal handles." loading="lazy">
  <figcaption>The angle and length of a node’s handles set how the curve passes through it.</figcaption>
</figure>


## Bitmap tools (19.3)

- **Lasso** (draw round), **magic wand** (adjacent similar colour, with tolerance), **colour select** (similar colour anywhere), **cut-out**, **crop**, **masking** (hide without deleting).
- **Colour**: fills; black and white (2 colours) v greyscale (shades of grey); brightness; contrast; colour balance; shadows and highlights.
- **Brush/pencil/pen**: pre-set or customised size, hardness, opacity, shape.
- **Filters**: distort, clone (cover blemishes), erase, blur, smudge, sharpen, red eye removal.
- **Image resize** resamples pixels; **canvas resize** changes the working area only.

## Compression (19.4)

- **Compression**: reducing file size by encoding data more efficiently.
- **Lossless**: original rebuilt exactly; e.g. run-length encoding (`RRRRBB` → `4R 2B`). Best on flat colour.
- **Lossy**: detail permanently removed; much smaller files; artefacts (blockiness, blur, banding, fuzzy edges round text); worse with each re-save.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--19-gc-compression.webp" width="900" height="960" alt="Run-length encoding stores 20 pixels (8 white, 4 black, 8 white) as 8W 4B 8W and rebuilds them exactly. A 1600 by 1200 image is 5.76 MB at 24-bit and 1.92 MB at 8-bit uncompressed, and 0.48 MB as a JPEG, a 12 to 1 reduction." loading="lazy">
  <figcaption>Lossless compression keeps every pixel; lossy compression discards detail for much smaller files.</figcaption>
</figure>


## Text (19.5)

- **Kerning**: space between one pair of letters.
- **Letter spacing**: even spacing across all selected letters.
- **Line spacing**: distance between lines.
- **Text on a path**: follows a line or wraps round a shape.
- **Text in a shape**: flows inside an outline.
- **Text to curves**: letters become paths; no font needed, letters reshaped, but no longer editable as text.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-graphics-creation--20-gc-text.webp" width="900" height="890" alt="The word AVID shown three ways. Default spacing; kerning, where only the A and V pair is moved closer; and letter spacing, where the gaps between all letters are widened equally. Gold bars mark the adjusted spaces." loading="lazy">
  <figcaption>Kerning adjusts one pair of letters; letter spacing adjusts every letter.</figcaption>
</figure>


## Must-know distinctions

- **Additive** (RGB, light, adds to white) v **subtractive** (CMYK, ink, absorbs light).
- **Group** (still separate objects) v **combine/add** (one object).
- **Merge** (some layers) v **flatten** (all layers).
- **Magic wand** (adjacent pixels) v **colour select** (whole image).
- **Image resize** v **canvas resize**.
- **Kerning** (a pair) v **letter spacing** (a range).
- **Lossless** (exact) v **lossy** (permanent loss).

## Quick self-test

1. State how many colours a 4-bit image can show.
2. Calculate the uncompressed size in MB of a 1000 × 800 image with 16-bit colour (1 MB = 1,000,000 bytes).
3. A 1800-pixel-wide image is printed at 300 ppi. State the print width.
4. State the pixel width needed for an 8-inch-wide print at 300 ppi.
5. Write the row `GGGGGYYGGGGG` using run-length encoding.
6. A file shrinks from 8 MB to 0.5 MB. State the compression ratio.
7. State which colour system a commercial printer uses.
8. Give one reason to choose PNG rather than JPEG for a logo.
9. Describe a cusp node.
10. Give one disadvantage of converting text to curves.
11. Explain the difference between kerning and letter spacing.
12. Explain why a photograph should not be traced into a vector.

### Answers

1. 2⁴ = **16** colours.
2. 1000 × 800 × 16 ÷ 8 = 1,600,000 bytes = **1.6 MB**.
3. 1800 ÷ 300 = **6 inches**.
4. 8 × 300 = **2400 pixels**.
5. **5G 2Y 5G**.
6. 8 ÷ 0.5 = **16:1**.
7. **CMYK**.
8. PNG is lossless, keeping sharp edges, and supports a transparent background.
9. A node whose handles move independently, giving a sharp corner.
10. The text can no longer be edited or spell-checked as text.
11. Kerning changes the space between one pair of letters; letter spacing changes the spacing evenly across all selected letters.
12. Its shading and fine detail would be lost, and the trace would need very many nodes, giving a large, slow file.

## Where marks are usually lost

- Calling CMYK additive, or saying RGB is the print system.
- Forgetting ÷ 8 when converting bits to bytes.
- Giving 2 × bit depth instead of 2 to the power of bit depth for the number of colours.
- Recommending JPEG where transparency or sharp text is needed.
- Describing tracing as "improving" a photo instead of noting the detail lost.
- Mixing up magic wand and colour select.
- Saying "text to curves makes text editable" -- it does the opposite.
- Naming a file format without a reason linked to the application and audience.

## Frequently asked questions

**What is the difference between RGB and CMYK?**
RGB is an additive colour system that mixes red, green and blue light and is used for screens and the web. CMYK is a subtractive system using cyan, magenta, yellow and key (black) inks and is used for print.

**How do you calculate the file size of an uncompressed image?**
Multiply the width in pixels by the height in pixels by the colour depth in bits, then divide by 8 to get bytes. For example, a 2000 by 1000 image at 8-bit colour is 2,000,000 bytes, or 2 MB.

**How many colours does a given colour depth allow?**
The number of colours is 2 to the power of the colour depth, so 8 bits per pixel gives 256 colours. Giving 2 multiplied by the bit depth instead is a common mistake.

**What is the difference between kerning and letter spacing?**
Kerning adjusts the space between one specific pair of letters, such as "AV", while letter spacing changes the space evenly across all the selected letters.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 19: Graphics creation (19.1 Common graphics skills; 19.2 Vector graphics; 19.3 Bitmap images; 19.4 Compression; 19.5 Text).
