---
title: "Cambridge IGCSE ICT (0417): Images -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 12: Images"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 12
syllabusTopics:
  - qualification: "igcse"
    topic: "images"
  - qualification: "igcse"
    topic: "images"
    subtopic: "place-and-edit-an-image-t12-0417"
  - qualification: "igcse"
    topic: "images"
    subtopic: "file-size-reduction-t12-0417"
description: "Placing, resizing, cropping and editing images in documents, and reducing image file size, for the Cambridge IGCSE ICT 0417 practical skills."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "The sub-topics for this practical topic are unnumbered in the source list; check which image-editing operations the 0417 2026-2028 syllabus names; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

Images appear in almost every document, web page and presentation you produce for Cambridge IGCSE ICT 0417. In the practical papers you are told to place an image in a precise position, change its size or shape, and sometimes save a smaller version. Marks are lost easily through distorted pictures, images that overlap text, or an instruction missed halfway through a task. This guide explains what each operation does, how to avoid common errors and how to reduce file size.

## Where this fits in the specification

This is a practical skills topic, and it works together with layout (placing images on a page), styles (consistent captions and alignment) and file management (saving a reduced copy). It also uses the audience ideas from earlier: an image must suit the people reading the document. If you use someone else's image, remember the rules from copyright.

## Place and edit an image

### Placing an image

To place an image you insert it from a file (or from a source you have permission to use), then position it. Details to control:

- **Position**: the image may be placed inline with the text, or positioned relative to the page, a margin or a paragraph. Exam tasks often name a place, such as "in the top right corner of the page, within the margins", or "centred below the heading".
- **Alignment**: left, centre or right.
- **Text wrapping**: this decides how surrounding text behaves. *In line with text* treats the image like one large character. *Square* or *tight* wraps text around the image. *Top and bottom* leaves no text at the sides. *Behind text* and *in front of text* let the image overlap text, which is rarely wanted unless the task asks for it.
- **Margins**: the picture must remain inside the page margins unless the task says otherwise.
- **Caption or alt text**: a caption explains the picture, and alt text helps people who use screen readers.

### Editing an image

- **Resize**: change the width and height. Keep **Lock aspect ratio** switched on to keep the proportions, otherwise the picture is stretched or squashed (distorted).
- **Crop**: remove unwanted edges. Cropping changes what is visible, and the pixels outside the crop are usually only hidden unless you choose to delete the cropped areas.
- **Rotate and flip**: turn the image by an angle or mirror it horizontally or vertically.
- **Brightness and contrast**: make the picture lighter or darker and increase or decrease the difference between light and dark areas.
- **Colour changes**: change to greyscale, adjust the colour tone, or recolour.
- **Layering and grouping**: place images in front of or behind others, and group objects so they move together.
- **Borders and effects**: add an outline, a shadow or a frame if the task requires it.

### Aspect ratio

The **aspect ratio** is the ratio of width to height. A photograph that is 3 200 by 2 400 pixels has an aspect ratio of 4 to 3, because 3 200 / 2 400 = 4/3. If you change the width and height by different factors, the image looks stretched.

### Worked example: resizing and cropping

An image is 3 200 pixels wide and 2 400 pixels high. A task says: "Resize the image to a width of 800 pixels, keeping its proportions."

Scale factor = 800 / 3 200 = 0.25.

New height = 2 400 x 0.25 = **600 pixels**. The new size is 800 by 600, which is still 4 to 3.

If the aspect ratio were not locked and the height was set to 800 as well, the new image would be 800 by 800. Its width has been scaled by 0.25, but its height by 800 / 2 400 = 0.33, so the picture is stretched vertically. That would be marked as distortion.

Now suppose the task says to crop the original to a square. The tallest square is 2 400 by 2 400, so you remove 3 200 - 2 400 = 800 pixels from the width, for example 400 from each side, which keeps the subject centred.

## File size reduction

Large images slow down web pages and email. The size of an uncompressed image depends on its dimensions and colour depth:

Size in bytes = width x height x bits per pixel / 8.

For the original above at 24 bits per pixel, the size is 3 200 x 2 400 x 24 / 8 = 23 040 000 bytes, about **23.04 MB**.

After reducing it to 800 by 600, the size is 800 x 600 x 24 / 8 = 1 440 000 bytes, about **1.44 MB**. The new image has 16 times fewer pixels (3 200 x 2 400 / 800 x 600 = 16), so it is 16 times smaller.

Methods of reducing the size of an image:

- **Resize** it to smaller pixel dimensions, as above. This is the most effective for pictures that will be displayed small.
- **Crop** away areas that are not needed.
- **Reduce the resolution** (for example, from 300 to 150 pixels per inch), which discards pixels.
- **Reduce the colour depth**, for example 24-bit to 8-bit, which allows fewer colours.
- **Use compression**, saving as JPEG (lossy) for photographs, or PNG or GIF (lossless) for logos and diagrams.
- Apply stronger **JPEG quality compression** for web use.

Always keep the original image safe and save the reduced version under a new name, so that you can return to the full-quality picture later. Use **Save as** and check the new file size afterwards.

A trade-off must be mentioned in explanations: reducing size also reduces quality. A picture that is too small, or too heavily compressed, looks blurred or blocky when enlarged or printed. The right choice depends on the use: an image for a large printed poster needs high resolution, but a thumbnail on a web page does not.

## Common mistakes

- Dragging a corner handle without lock aspect ratio, which distorts the picture.
- Leaving the image overlapping text because wrapping was left as the default.
- Placing an image outside the page margins.
- Forgetting that cropping does not always reduce file size unless the cropped areas are deleted.
- Replacing the original with a reduced copy and losing the full-quality version.
- Using a lossy format for a logo with sharp edges, which gives fuzzy edges.

## Exam technique

Read the task twice and tick off each instruction: position, size, wrapping, alignment, caption. When you are asked **to describe** how to reduce an image's file size, name a method and say what changes (for example, fewer pixels, fewer colours, or discarded detail). **Explain** questions need the effect: smaller size, faster to load, lower quality. After finishing a practical task, check that the image is not distorted, is within the margins and does not hide any text.

## Check your understanding

1. What does locking the aspect ratio do? *It keeps the width and height in proportion so the image is not distorted when resized.*
2. A 1 200 by 900 image is resized to a width of 400. What is the new height if the aspect ratio is kept? *900 x 400 / 1 200 = 300 pixels.*
3. State two text wrapping options. *Square or tight, in line with text, top and bottom, behind text, or in front of text.*
4. What is the effect of cropping an image? *It removes unwanted outer parts so that only the chosen area is shown.*
5. Calculate the size in MB of a 2 000 by 1 000 image at 24 bits per pixel. *2 000 x 1 000 x 24 / 8 = 6 000 000 bytes, so 6 MB.*
6. Give two ways to reduce the file size of an image. *Resize to fewer pixels; reduce colour depth; compress as JPEG.*
7. Why should you save a reduced image with a new name? *To keep the original, full-quality image unchanged.*
8. Why might a heavily compressed image be unsuitable for a poster? *It loses detail and looks blocky or blurred when enlarged.*

## Frequently asked questions

**What does locking the aspect ratio do?**
Locking the aspect ratio keeps an image's width and height in proportion when it is resized, so it is not stretched or squashed. In the Cambridge IGCSE ICT (0417) practical, a distorted image loses marks.

**What is the difference between cropping and resizing an image?**
Resizing changes the overall width and height of an image, while cropping removes unwanted outer parts so only the chosen area is shown.

**How can you reduce the file size of an image?**
You can resize the image to fewer pixels, reduce its colour depth, or save it as a compressed JPEG. Save the reduced copy with a new name so the original full-quality image is kept.

**What text wrapping options are there for images?**
Common options are in line with text, square, tight, top and bottom, behind text and in front of text. Behind and in front of text let the image overlap text, which is rarely wanted unless the task asks for it.
