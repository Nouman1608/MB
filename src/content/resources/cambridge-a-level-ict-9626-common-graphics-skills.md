---
title: "Cambridge A Level Information Technology (ICT): 19.1 Common graphics skills (9626)"
seoTitle: "Cambridge A Level IT 9626: Common Graphics Skills Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.1
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
  - qualification: "a-level"
    topic: "graphics-creation"
    subtopic: "common-graphics-skills"
description: "Study guide to section 19.1 of Cambridge A Level IT 9626: layers, transform and alignment tools, colour systems, resolution, file formats and exporting images."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: check the expansion given for CMS (colour management system) and the typical resolution figures against the course materials; the syllabus lists CMS but does not expand it."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **19.1 Common graphics skills** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. The syllabus says that Paper 4 (Advanced Practical) tests sections 17 to 21 and that Paper 3 (Advanced Theory) is based on sections 12 to 21, so you need both the practical skills and the explanations.

The syllabus asks you to be able to use software tools to create and edit digital graphics, including:

- **graphics tools:** layers
- **transform tools**
- **grouping or merging tools**
- **alignment and distribution tools**
- **layout tools**, the **colour picker** and **crop tools**
- **colour systems:** RGB, HSL, CMYK and CMS
- the need for different **image resolutions**
- different **bitmap and vector file formats** and **exporting** images, including SVG, BMP, JPG/JPEG, PNG, GIF, TIF and PDF
- changing solid and gradient **fills**.

Use it with the [graphics creation topic guide](/resources/a-level-cambridge-ict-graphics-creation/), the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-common-graphics-skills-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

Tool names differ between graphics programs. Learn the idea behind each tool, and practise in your own software.

## Layers

A **layer** is a transparent sheet. A graphic is built by stacking layers, so each element can be edited without damaging the others.

| Task | What it does |
|---|---|
| **Add layer** | Creates a new, empty layer |
| **Remove layer** | Deletes a layer and its content |
| **Select the active layer** | The layer that will receive edits; click it in the layers panel first |
| **Order** | Layers higher in the stack hide those beneath; drag layers to change what is in front |
| **Toggle visibility** | Show or hide a layer (the eye icon) without deleting it |
| **Lock / unlock** | Prevent accidental changes to a layer's content or position |
| **Opacity / transparency** | Make a layer see-through, from 100% (solid) to 0% (invisible) |
| **Blend** | A blend mode controls how the colours of a layer combine with those beneath |
| **Merge / flatten** | Merge combines selected layers into one; flatten combines all layers into one background layer |

Keep layers separate while editing; flatten or merge only at the end (and keep a layered master file), because flattening removes the ability to edit elements separately.

## Transform tools

| Tool | Effect |
|---|---|
| **Resize / scale** | Change the width and height; hold the proportion (aspect ratio) to avoid distortion |
| **Skew / shear** | Slant the object along one axis |
| **Reflect (flip)** | Mirror horizontally or vertically |
| **Rotate** | Turn around a point by an angle |
| **Move** | Change position |
| **Envelope** | Reshape an object by dragging the points of a bounding shape around it |
| **Perspective** | Make an object look as if it is receding in space |

## Grouping and merging tools

- **Group** joins objects so they move and scale together, and each can still be edited by ungrouping.
- **Ungroup** separates a group again.
- **Combine / join** merges objects into one object (for example, a ring with a hole).
- **Add (union)** merges shapes into one outline; **subtract** cuts the shape of one object from another; **intersect** keeps only the area where shapes overlap.

*Example:* subtract a small circle from a large circle to make a ring; add two circles and a rectangle to make a cloud.

## Alignment and distribution tools

**Align** objects to the left, right, top, bottom or centre relative to each other or the page. **Distribute** objects so that the gaps or centres are equal, horizontally or vertically. **Order** objects within a layer: raise, lower, bring to front, send to back.

## Layout tools

| Tool | Use |
|---|---|
| **Rulers** | Measure and read positions |
| **Grid** | A pattern of lines to help align objects |
| **Guidelines** | Lines dragged from the rulers to mark positions, such as margins |
| **Snapping** | Makes objects jump to the grid, guides or other objects, for accurate placement |

## Colour picker and crop

The **colour picker** (eyedropper) samples a colour from the image or from another source, so that the same colour or a range can be used again exactly. A **crop tool** removes the outer parts of an image; some tools crop or clip to the shape of an object.

## Fills

A **solid fill** uses one colour. A **gradient fill** blends two or more colours, for example linear (along a line) or radial (outwards from a point). The colours, positions and direction of the gradient are set in the fill tool.

## Colour systems

| System | How it produces colour | Properties and uses |
|---|---|---|
| **RGB** | **Additive:** red, green and blue light are added. With all three at full, the result is white; none gives black | Screens, cameras, scanners and web graphics. In 8 bits per channel there are 256 levels each, so 24 bits gives 256 x 256 x 256 = 16,777,216 colours |
| **HSL** | Describes a colour by **hue** (position on the colour wheel, 0 to 360 degrees), **saturation** (intensity, from grey to pure colour) and **lightness** (from black to white) | Easy for people to choose and adjust colours, such as making a shade lighter |
| **CMYK** | **Subtractive:** cyan, magenta and yellow inks absorb light from white paper, and black (K) is added for depth and to save ink | Printing. Its range (gamut) is smaller than RGB, so some bright screen colours cannot be printed exactly |
| **CMS** | A colour management system uses profiles to convert colours between devices so they look consistent on screens and in print | Used when an image passes between camera, screen, and printer |

## Image resolution

**Resolution** is the amount of detail: the number of pixels in the image, or the number of pixels per inch (ppi, or dots per inch, dpi, for print).

- **Too low:** the image looks blocky or blurred (pixelated), particularly when enlarged or printed.
- **Too high:** the file is very large, slow to open, edit and send; on a screen the extra detail cannot be seen.
- Choose a resolution to match the use. As a guide, screens and web pages need fewer pixels per inch than print, and good-quality print typically needs around 300 ppi.

### Worked example: file size and print size

An image is 1,920 pixels wide and 1,080 pixels high, with 24 bits per pixel, and no compression.

- Number of pixels = 1,920 x 1,080 = 2,073,600.
- Size in bits = 2,073,600 x 24; in bytes = 2,073,600 x 3 = 6,220,800 bytes (about 6.2 megabytes).

A 6-inch by 4-inch print at 300 ppi needs (6 x 300) by (4 x 300) = 1,800 by 1,200 pixels. At 24 bits per pixel the uncompressed size is 1,800 x 1,200 x 3 = 6,480,000 bytes. A 600 by 400 pixel image printed at the same size would have only 100 ppi (600 / 6), so it would look soft.

## File formats and exporting

| Format | Type | Features and uses |
|---|---|---|
| **SVG** | Vector | Scalable; based on text; ideal for logos, icons and web graphics; small for simple images |
| **BMP** | Bitmap | Usually uncompressed, so files are large; simple and widely supported |
| **JPG / JPEG** | Bitmap | Lossy compression; small files; good for photographs; no transparency; repeated saving reduces quality |
| **PNG** | Bitmap | Lossless compression; supports transparency; good for screenshots, logos and graphics with sharp edges |
| **GIF** | Bitmap | Limited to 256 colours; lossless; simple transparency; supports basic animation; good for simple graphics |
| **TIF / TIFF** | Bitmap | High quality, often lossless; used in professional printing and scanning; large files |
| **PDF** | Both | Holds vector, bitmap and text together; keeps the layout across devices; used for documents and printing |

Choose the format to suit the purpose: a photo for a web page (JPG), a logo that must scale and have a transparent background (SVG or PNG), a print-ready image (TIF or PDF). To export, use the **Save as** or **Export** command, choose the format and set options such as quality, resolution and transparency. Always keep the original editable file.

## Common errors

- Flattening layers too early and losing the ability to edit.
- Resizing a bitmap upwards and expecting it to be sharp.
- Stretching an image by changing width and height separately.
- Using JPG for a logo with sharp edges and transparency.
- Using RGB for an image that will be printed, without checking the colours.
- Describing RGB as subtractive or CMYK as additive.
- Writing "high resolution is always better".

## Frequently asked questions

**What is the difference between RGB and CMYK?**
RGB is additive and uses light, so it suits screens. CMYK is subtractive and uses inks, so it suits printing.

**Which format is best for a photograph on a web page?**
JPG, because lossy compression gives a small file with acceptable quality for photographs.

**Why keep layers?**
Each element can be edited separately without affecting the others.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.1: Common graphics skills.
