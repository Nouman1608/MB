---
title: "Cambridge A Level Information Technology (ICT): Graphics creation (9626)"
seoTitle: "Cambridge A Level ICT 9626 Graphics Creation Study Guide"
resourceType: "study-guides"
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
description: "Study guide for Cambridge A Level IT 9626 Graphics creation: layers, vector and bitmap tools, colour systems, resolution, compression and text."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 19, Graphics creation**, of Cambridge International AS & A Level Information Technology (9626). It follows the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), sections 19.1 to 19.5. Topic 19 is **A Level only**. The syllabus bases **Paper 3 (Advanced Theory)** questions on sections 12–21 and **Paper 4 (Advanced Practical)** tasks on sections 17–21, so you can meet this topic in both papers.

The syllabus names no software, so tools are described by what they do. Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Printable checklist: [course checklist](/checklists/cambridge/a-level/ict/). Find your gaps with a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Stage |
|---|---|---|
| 19.1 | Layer, transform, grouping, alignment, layout, colour picker and crop tools; colour systems; resolution; file formats and export; fills | A Level only |
| 19.2 | Vector drawing, selection, fills, node and path editing; tracing bitmaps | A Level only |
| 19.3 | Bitmap selection and masking, colour, brushes, filters, resizing | A Level only |
| 19.4 | Lossless and lossy compression and their effects | A Level only |
| 19.5 | Font style, text on a path or in a shape, text to curves | A Level only |

Every graphic must meet the requirements of its **intended application and audience**.

## Bitmap and vector: the starting point

A **bitmap** image is a grid of pixels, each storing a colour. It suits photographs; enlarging it shows the pixels (**pixelation**). A **vector** graphic stores objects as paths of nodes and curves, each with a stroke and fill. It scales without losing quality and suits logos and diagrams, not photographs.

## 19.1 Common graphics skills

### Layers

Layers are stacked sheets. You can **add**, **remove** and **select the active layer** (the one edits apply to), change their **order**, **toggle visibility**, **lock** a layer against accidental edits (or release the lock), and change **opacity/transparency**. **Blending** sets how a layer's colours combine with those below; **merging** combines chosen layers; **flattening** combines all into one. Keep a layered master copy.

### Transform tools

| Tool | Effect |
|---|---|
| Move | Changes position only |
| Resize / scale | Changes size; lock the aspect ratio to avoid distortion |
| Rotate | Turns about a centre point |
| Reflect | Flips to a mirror image |
| Skew / shear | Slants the object by sliding opposite edges past each other (often the same effect) |
| Envelope | Bends the object to fit an editable outline |
| Perspective | Makes the object appear to recede |

**Worked example 1.** A 40 mm × 25 mm badge scaled to 150%: 40 × 1.5 = 60 mm and 25 × 1.5 = 37.5 mm. Same factor both ways, so no distortion.

### Grouping and combining

- **Group** -- objects move together but stay separate; **ungroup** releases them.
- **Combine/join** -- makes several paths one object, or joins two end nodes.
- **Add** (union) -- merges overlapping shapes into one outline.
- **Subtract** -- cuts the top shape out of the one below.
- **Intersect** -- keeps only the area where the shapes overlap.

### Alignment, distribution and order

**Align** (left, right, top, bottom, centre) lines up edges or centres. **Distribute** (vertical or horizontal) makes the spacing equal. **Order** sets which object is in front: **raise** and **lower** move one step; **bring to front** and **send to back** go to the top or bottom.

**Worked example 2.** Three 30 mm buttons; first left edge at 10 mm, last right edge at 160 mm.

```
Span = 160 − 10 = 150 mm
Space left for gaps = 150 − 3 × 30 = 60 mm, so each gap = 60 ÷ 2 = 30 mm
Left edges: 10, 70, 130 mm   Centres: 25, 85, 145 mm
```

### Layout, colour picker and crop

**Rulers**, **grids** and **guidelines** place objects precisely; **snapping** pulls an object to the nearest grid line, guide or node. The **colour picker** samples a colour or colour range from the image or another source, such as a brand colour. **Crop/clip to an object** keeps only the part inside a chosen shape.

### Colour systems

| System | How it produces colour | Typical use |
|---|---|---|
| RGB | **Additive**: red, green and blue light mixed at different intensities; all at full gives white, none gives black | Screens, web, digital images |
| HSL | The same colours as RGB described by **hue** (position on the colour wheel, 0–360°), **saturation** (intensity) and **lightness** (0% black, 100% white) | Adjusting colours by eye, e.g. a lighter tint |
| CMYK | **Subtractive**: cyan, magenta, yellow and key (black) inks absorb parts of white light reflected from paper | Commercial and desktop printing |
| CMS | A **colour management system** uses a profile for each device to convert colours so they look consistent on screen and in print | Work moving between devices |

Black is a separate ink because mixing cyan, magenta and yellow gives a muddy dark colour. Some screen colours cannot be printed, so check print designs in CMYK.

### Resolution

Image resolution is the number of pixels; print resolution is often given in **pixels per inch (ppi)**.

- **Too low**: blocky or blurred, especially in print or when enlarged.
- **Too high**: no visible gain on screen, but larger files, slower web pages and more storage.

**Worked example 3.** A photo is 3600 × 2400 pixels; high-quality print commonly targets about 300 ppi.

```
At 300 ppi: 3600 ÷ 300 = 12 in, 2400 ÷ 300 = 8 in  → 12 × 8 inch print
For a 24 × 16 inch poster at 300 ppi you need 7200 × 4800 pixels
Using 3600 pixels over 24 inches gives 3600 ÷ 24 = 150 ppi → visibly softer
```

### File formats and exporting

| Format | Key properties | Good for |
|---|---|---|
| SVG | Vector; scales to any size | Logos and icons on websites |
| BMP | Bitmap; usually uncompressed, so large | Where file size does not matter |
| JPG/JPEG | Bitmap; lossy; millions of colours; no transparency | Photographs on the web |
| PNG | Bitmap; lossless; supports transparency | Logos, screenshots, sharp edges and text |
| GIF | Bitmap; lossless; 256 colours at most; can animate | Simple graphics, small animations |
| TIF | Bitmap; usually uncompressed or lossless; large | Print and publishing masters |
| PDF | Holds vector and bitmap content and fonts; keeps the layout | Print-ready artwork |

**Exporting** saves a copy in the chosen format, with options such as quality and transparency. The syllabus states that Paper 4 work saved in an incorrect file format earns no marks for that task.

### Fills

A **solid fill** is one colour. A **gradient fill** blends two or more colours, **linear** (along a line) or **radial** (out from a centre); you can change the colours, their positions and the angle.

## 19.2 Vector graphics

### Drawing tools

- **Freehand** -- follows the pointer; many nodes, uneven line.
- **Straight lines** -- click node to node.
- **Bezier curves** -- each segment is set by its two end nodes and **control handles**; the handle's direction sets the curve's direction and its length sets how strongly it bends.
- **Shape tools** -- rectangles, ellipses, circles, arcs, stars, polygons and spirals, each with settings such as number of points.
- **Envelopes and perspectives** -- as in 19.1.

### Selecting and manipulating

**Convert to curves** turns a shape object (such as a star) into an ordinary path whose nodes can be edited; the shape's own settings are lost. **Replication** makes copies, such as a row of evenly spaced duplicates. **Transformation tools** then act on the selection.

### Node and path editing

| Node type | Behaviour |
|---|---|
| Cusp | Handles move independently, making a sharp corner |
| Smooth | Handles stay in a straight line, so the path passes through without a corner |
| Symmetrical | Smooth, with both handles the same length, so the curve bends equally on each side |
| Asymmetrical | Smooth, with handles of different lengths, so the curve bends differently on each side |

Software labels vary. **Adding** nodes allows a new bend; **moving** nodes reshapes the path; **deleting** unneeded nodes **simplifies** it. **Align and distribute nodes** lines nodes up or spaces them evenly.

**Worked example 4.** A freehand leaf outline has 60 nodes and a wobbly edge. Delete the nodes along each gentle curve, keeping one at each end. Make the tip a cusp node so it stays sharp and the side nodes smooth, then drag the handles to restore the curve. Result: few nodes, a clean edge, a smaller file.

### Tracing bitmaps

**Trace bitmap** detects edges and areas of colour in a bitmap and creates vector paths from them.

| Advantages | Disadvantages |
|---|---|
| Scales without pixelation | Fine detail and smooth shading are lost |
| Shapes and colours editable separately | Complex images give many nodes, larger files |
| A simple logo becomes a small, sharp file | Results often need time-consuming cleaning |

## 19.3 Bitmap images

### Selection and masking

- **Lasso** -- draw round an area.
- **Magic wand** -- selects neighbouring pixels of similar colour, within a **tolerance**.
- **Colour select** -- selects similar-coloured pixels anywhere in the image.
- **Cut-out** -- separates a selected object from its background.
- **Crop** -- removes outer areas.
- **Masking** -- hides part of a layer without deleting pixels, so it can be changed later.

### Working with colour

Apply **solid and gradient fills** to selections. Convert to **black and white** (two colours) or **greyscale** (shades of grey). Adjust **brightness**, **contrast** (light against dark), **colour balance** (remove a colour cast) and **shadows and highlights** (recover detail in the darkest or brightest areas).

### Brushes, pencils and pens

Use **pre-set** options or **customise** size, hardness, opacity and shape. Pencils typically give hard edges, brushes soft ones.

### Filters and retouching

| Tool | Use |
|---|---|
| Distort | Warps part of the image |
| Clone | Copies pixels from a source point to cover a blemish |
| Erase | Removes pixels |
| Blur | Softens detail, e.g. a background |
| Smudge | Drags colour like wet paint |
| Sharpen | Increases contrast at edges |
| Red eye removal | Darkens red pupils caused by flash |

### Resizing the image or canvas

Resizing the **image** resamples the picture to more or fewer pixels. Resizing the **canvas** adds space or removes edges, leaving the picture the same size. **Changing resolution** sets pixel dimensions or ppi. **Changing colour depth** sets bits per pixel: colours available = 2 to the power of the bit depth.

**Worked example 5.** Uncompressed 1600 × 1200 image (1 MB = 1,000,000 bytes).

```
24-bit: 1600 × 1200 × 24 ÷ 8 = 5,760,000 bytes = 5.76 MB  (2^24 = 16,777,216 colours)
8-bit:  1600 × 1200 × 8 ÷ 8  = 1,920,000 bytes = 1.92 MB  (2^8 = 256 colours)
```

Fewer colours can cause **banding** in skies.

## 19.4 Compression

**Compression** reduces file size by storing the data more efficiently, so files load, send and store faster.

- **Lossless** compression can rebuild the original exactly. One method is **run-length encoding**: a row `WWWWWWWWBBBBWWWWWWWW` (20 pixels) is stored as `8W 4B 8W`. It works best on large areas of one colour (logos, diagrams).
- **Lossy** compression permanently removes detail people are least likely to notice. Files are much smaller, but strong settings cause **artefacts**: blocky patches, blurring, banding and fuzzy edges round text. Each re-save loses more.

**Worked example 6.** The 5.76 MB image above saved as a JPEG is 0.48 MB: 5.76 ÷ 0.48 = 12, a 12:1 reduction.

## 19.5 Text

- **Font face** -- the typeface, such as a serif or sans serif design.
- **Size** -- usually in points.
- **Kerning** -- adjusts the space between one specific pair of letters, such as "AV".
- **Letter spacing** -- changes the space evenly across all selected letters.
- **Line spacing** -- the vertical distance between lines of text.

**Text on a path** follows a line or runs around a shape, such as a slogan round a badge. **Text in a shape** flows inside a shape's outline. **Converting text to curves** turns letters into vector paths: the font is no longer needed and letters can be reshaped, but the text can no longer be edited as text, so keep an editable copy.

## Common errors

- Saying CMYK is for screens or RGB for print.
- Confusing kerning (one pair) with letter spacing (all selected letters).
- Choosing JPEG for a logo that needs a transparent background.
- Resizing the canvas when the image should be resized.
- Forgetting to divide by 8 to change bits to bytes.

## Next steps

Condense this with the [Graphics creation revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/), then try the [Graphics creation practice questions](/resources/a-level-cambridge-ict-graphics-creation-practice/). Video and audio compression is in [Video and audio editing](/resources/a-level-cambridge-ict-video-and-audio-editing/); compression utilities are in [Hardware and software](/resources/a-level-cambridge-ict-hardware-and-software/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 19: Graphics creation (19.1 Common graphics skills; 19.2 Vector graphics; 19.3 Bitmap images; 19.4 Compression; 19.5 Text).
