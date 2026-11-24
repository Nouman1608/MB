---
title: "Cambridge A Level Information Technology (ICT): 19.3 Bitmap images (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Bitmap Images Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with marked answers on bitmap selection tools, masking, adjustments, filters, colour depth and resizing for section 19.3 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 19.3 Bitmap images** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content. The syllabus tests the practical skills in Paper 4 (Advanced Practical) and bases Paper 3 (Advanced Theory) on sections 12 to 21, where calculators are not allowed. These written questions can be answered on paper; practise the tools in your own software too.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-bitmap-images/) and the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** A photographer is preparing a portrait for a magazine cover. State the selection tool that is best suited to each task and justify your choice.

**(a)** Selecting the plain blue sky behind the person, which is almost one colour. **[2]**
**(b)** Selecting the person's hair, which has an irregular outline against a patterned background. **[2]**
**(c)** Selecting every red pixel in the picture, including red areas that are not touching. **[2]**

**2.** Explain the difference between using a mask to hide the background of a photograph and using the erase tool. Explain why the mask is usually preferred. **[3]**

**3.** The portrait is too dark and the faces are in shadow, but the sky is already bright.

**(a)** State the adjustment that would brighten the faces without making the sky brighter. **[1]**
**(b)** Explain why increasing the brightness of the whole image might not be a good choice. **[2]**
**(c)** The photograph has a yellow colour cast from the indoor lighting. State the adjustment that corrects it. **[1]**

**4.** State the tool or filter that would be used for each task.

**(a)** Removing a blemish by copying clear skin from nearby. **[1]**
**(b)** Removing the red reflection from the subject's eyes caused by the flash. **[1]**
**(c)** Making the edges look crisper in a slightly out-of-focus image. **[1]**
**(d)** Softening the background to draw attention to the subject. **[1]**

**5.** A graphic designer wants to convert a coloured photograph to black and white for a newspaper.

**(a)** Explain the difference between converting to greyscale and converting to black and white (two tones). **[2]**
**(b)** State which of these would keep more detail and give a reason. **[1]**

**6.** A photograph is 1,000 pixels wide and 1,500 pixels high with 24 bits per pixel. It is not compressed.

**(a)** Calculate its file size in bytes. **[3]**
**(b)** The designer reduces the colour depth to 8 bits per pixel. Calculate the new size in bytes and state the number of colours available. **[3]**
**(c)** The designer, instead, resamples the original image to half its width and half its height. Calculate the new size in bytes and compare it with the original. **[3]**
**(d)** Give **one** disadvantage of reducing the colour depth of a photograph. **[1]**

**7.** Explain the difference between changing the image size and changing the canvas size. **[2]**

**8.** A small image, 300 pixels wide, is enlarged to four times its width for a poster. Explain why the poster image looks blurred even though it has more pixels. **[2]**

## Answers

**1. (a)** Magic wand [1], because it selects connected pixels of a similar colour automatically, and the sky is nearly one colour. [1] **[2]**
**(b)** Lasso (freehand) [1], because the edge can be traced by hand where the colour is not uniform (magic wand would not work against a patterned background). [1] **[2]**
**(c)** Colour select [1], because it selects all pixels in the image that match a colour, even if they are not connected. [1] **[2]**

**2.** A mask hides the background without deleting it [1]; the erase tool permanently deletes the pixels [1]. The mask is preferred because the edit can be changed or reversed, for example if the edge is wrong or the background is needed again. [1] **[3]**

**3. (a)** Shadows and highlights (brighten the shadows). [1] **[1]**
**(b)** It would also brighten the sky, which is already bright [1], so the sky would lose detail (be "blown out" to white). [1] **[2]**
**(c)** Colour balance. [1] **[1]**

**4. (a)** Clone. [1]
**(b)** Red eye removal. [1]
**(c)** Sharpen. [1]
**(d)** Blur. [1] **[4]**

**5. (a)** Greyscale uses many shades of grey (typically 256) [1]; black and white (two tones) turns each pixel to black or white only, with no grey. [1] **[2]**
**(b)** Greyscale keeps more detail [1], because it keeps the range of light and dark tones. **[1]**

**6. (a)** Pixels = 1,000 × 1,500 = 1,500,000 [1]. Bits = 1,500,000 × 24 = 36,000,000 [1]. Bytes = 36,000,000 ÷ 8 = 4,500,000. [1] **[3]**
**(b)** 8 bits is 1 byte per pixel, so 1,500,000 × 1 = 1,500,000 bytes [1]; 2 to the power of 8 gives 256 colours [1]; the size is one third of the original (4,500,000 ÷ 3 = 1,500,000). [1] **[3]**
**(c)** New dimensions are 500 × 750 = 375,000 pixels [1]; at 3 bytes per pixel, 375,000 × 3 = 1,125,000 bytes [1]; this is one quarter of the original (4,500,000 ÷ 4 = 1,125,000), because both dimensions are halved. [1] **[3]**
**(d)** Any one: banding (visible steps in smooth colour areas) appears; fewer colours means some detail and subtle shading are lost. [1] **[1]**

**7.** Image size changes the number of pixels, so the content is scaled larger or smaller [1]; canvas size changes the area of the working space without scaling the picture, adding blank space when enlarged or cropping when reduced. [1] **[2]**

**8.** Enlarging adds pixels by estimating colours from neighbouring pixels [1]; this does not add any real detail, so the picture is the same amount of detail spread over a bigger area, and looks soft. [1] **[2]**

## Where marks are usually lost

- Choosing the magic wand for an area with many colours.
- Not saying what a tool does when asked to justify it.
- Giving file sizes in bits, or forgetting to divide by 8.
- Treating a quarter of the pixels as half the size.
- Using "black and white" and "greyscale" as if they were the same.
- Saying enlarging an image "adds detail".

## More on this topic

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-bitmap-images/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**How do I work out how many colours a colour depth gives?**
Raise 2 to the power of the number of bits per pixel. For example 8 bits gives 2 to the power 8, which is 256 colours.

**Why is a mask better than the eraser?**
A mask hides pixels without deleting them, so the edit can be reversed.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.3: Bitmap images.
