---
title: "Cambridge A Level Information Technology (ICT): 19.5 Text in graphics (9626)"
seoTitle: "Cambridge A Level IT 9626: Text in Graphics Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.5
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
  - qualification: "a-level"
    topic: "graphics-creation"
    subtopic: "text"
description: "Study guide to section 19.5 of Cambridge A Level IT 9626: font style, kerning, spacing, text on a path, text in a shape and converting text to curves."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **19.5 Text** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 4 (Advanced Practical) tests sections 17 to 21, and Paper 3 (Advanced Theory) is based on sections 12 to 21, where calculators are not allowed.

The syllabus asks you to be able to:

- select **font style**, including font face, size, kerning, letter spacing and line spacing
- **fit text to a path or shape**, aligning text along a line or around a shape
- **set text in a shape**
- **convert text to curves**, turning fonts into editable vector shapes
- use text and its manipulation within graphics software.

Use it with the [graphics creation topic guide](/resources/a-level-cambridge-ict-graphics-creation/), the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-graphics-text-practice/). Vector drawing is covered in the [vector graphics guide](/resources/cambridge-a-level-ict-9626-vector-graphics/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Why text in graphics matters

Text is often the most important part of a logo, poster, sign or web banner. Poor choices make it hard to read or give the wrong impression. Graphics software offers much more control over text than a word processor. The aim is always to make the text **legible**, **suitable for the audience and purpose** and **consistent** with the rest of the design.

## Font style

### Font face

The **font face** (typeface) is the design of the letters.

| Type | Features | Typical use |
|---|---|---|
| **Serif** | Small strokes (serifs) at the ends of letters | Long printed text, formal or traditional designs |
| **Sans-serif** | No serifs; clean lines | Screens, signs, headings, modern designs |
| **Script** | Looks like handwriting | Invitations, short decorative text |
| **Decorative (display)** | Unusual shapes | Short titles only; hard to read in bulk |
| **Monospaced** | Every character has the same width | Code, tables |

Use few fonts (usually two at most), and choose a face to match the message. A child's party invitation and a law firm's logo need different fonts.

### Size

Font size is measured in **points**. One point is 1/72 of an inch, so 72-point text is about one inch tall. Choose a size that is readable at the intended viewing distance: a poster title is much larger than body text. Use size to show importance (headline larger than caption).

### Kerning

**Kerning** is adjusting the space between **a specific pair** of letters so that the spacing looks even. Some pairs, such as A and V, or T and o, leave a large gap because of their shapes. Reducing the space between them (negative kerning) looks better. Kerning matters most in large text like logos and titles.

### Letter spacing

**Letter spacing** (tracking) changes the space between **all** the letters in a selected block by the same amount. Wide spacing can make small capitals easier to read or give an elegant look. Tight spacing makes text compact but too tight becomes hard to read.

*Kerning vs letter spacing:* kerning adjusts the space between one pair of letters, while letter spacing adjusts the space across a range of letters.

### Line spacing

**Line spacing** (leading) is the vertical distance from one line of text to the next, measured from baseline to baseline. Too little makes lines crowd together, and too much makes the paragraph look disconnected. A common starting point is about 120% of the font size.

### Worked example: spacing calculations

- A paragraph is set in 12-point text with 1.5 line spacing. The distance from one baseline to the next is 12 x 1.5 = 18 points. Ten lines take 10 x 18 = 180 points, which is 180 / 72 = 2.5 inches.
- A heading in 36-point text is 36 / 72 = 0.5 inch tall.
- A 10-letter word has 9 gaps between letters. Adding 2 points of letter spacing to each gap makes the word 9 x 2 = 18 points wider.

## Fitting text to a path or shape

**Text on a path** makes text follow a line or curve. The path can be a straight line, a wave, a spiral or the edge of a circle or other shape.

- **Aligning text along a line:** draw the line or curve, then attach the text to it. The text follows the path, and can be moved along it, flipped to the other side or offset from it.
- **Around a shape:** attach text to the outline of a circle or other shape. For a badge, text curves around the top of a circle, and a second line may curve around the bottom, reading the right way up.
- The text stays **live**, so it can still be edited. If the path is edited, the text follows.
- The path itself can be made invisible by removing its outline.

Typical uses: logos, badges, stamps, labels for curved objects and decorative headings.

Check the result: letters at sharp curves may crowd or spread out, so adjust the spacing, curve or size.

## Setting text in a shape

**Text in a shape** places text *inside* a shape, such as a circle, star or speech bubble. The shape acts as a frame: the text fills the interior and **wraps** to follow the shape's boundary.

- Text can be aligned (left, centre, right or justified) inside the shape.
- If there is more text than space, the extra text is hidden (overflow). Make the shape larger, reduce the font size or shorten the text.
- Padding, the gap between text and the shape's edge, can be set so that text does not touch the outline.

Typical uses: speech bubbles in a comic, buttons, call-out boxes and text in an irregular area of a poster.

## Converting text to curves

**Converting text to curves** (outlines) changes each letter from a font character into a **vector shape** made of nodes and paths.

| Advantages | Disadvantages |
|---|---|
| The design does not depend on the font being installed, so it looks the same on any computer or printer | The text can no longer be edited as text (spelling, wording or font cannot be changed) |
| Each letter can be reshaped with node editing, or combined with other shapes, for a unique logo | The conversion cannot be undone later, other than by undo, so keep a copy of the text version |
| Effects such as gradients or cutting a shape from a letter are possible | Large amounts of converted text make the file larger and more complicated |
| Good for logos and for files sent to a printer | The fine adjustments built into a font for small sizes are lost |

**Good practice:** finish and proofread the text first, save a copy with live text, then convert. Convert only the text that needs it.

## Using and manipulating text in graphics software

Text in graphics software can also be:

- **transformed** (rotated, skewed, scaled, reflected)
- **given fills and outlines**, including gradients
- **grouped and aligned** with other objects
- **placed on its own layer** and given transparency
- **used as a mask**, so that an image shows through the shape of the letters.

Always check **contrast** between text and background (dark on light or light on dark), keep the text clear of busy areas of the picture, and keep a consistent style.

## Common errors

- Using many different fonts in one design.
- Using a script or decorative font for a lot of text.
- Confusing kerning (one pair of letters) with letter spacing (a range of letters).
- Mistaking line spacing for font size.
- Converting text to curves before proofreading.
- Forgetting that text in a shape can overflow and be hidden.
- Low contrast between text and its background.

## Frequently asked questions

**What is the difference between kerning and letter spacing?**
Kerning adjusts the space between a single pair of letters. Letter spacing changes the space between all the letters in a selection.

**Why convert text to curves in a logo?**
So that it looks the same on any computer without the font, and so that the letters can be reshaped as vector shapes.

**What is the disadvantage of converting text to curves?**
The text can no longer be edited as text, so mistakes cannot be corrected by retyping.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.5: Text.
