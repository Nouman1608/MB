---
title: "A Level Computer Science: Multimedia (Graphics and Sound) — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
order: 2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "multimedia-graphics-sound"
description: "Original questions with worked answers on bitmap and vector graphics, image and sound file sizes, and sampling rate and resolution, for Cambridge 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Information Representation study guide](/resources/a-level-computer-science-information-representation/) · [Information Representation revision notes](/resources/a-computer-science-data-representation-revision-notes/)

---

**What do these questions practise?** Section 1.2 Multimedia of the Cambridge International AS & A
Level Computer Science 9618 syllabus (2027–2029): how bitmap images and vector graphics are encoded,
estimating bitmap file sizes, the effect of resolution and colour depth, choosing bitmap or vector
for a task, how sound is sampled and encoded, and the effect of sampling rate and resolution on file
size and accuracy.

## Section A: graphics

**1.** Define the terms *pixel*, *image resolution* and *colour depth*. **[3]**

**2.** State what is stored in the *file header* of a bitmap image file, giving **two** examples. **[2]**

**3.** A bitmap image is 800 pixels wide and 600 pixels high with a colour depth of 8 bits.
**(a)** State how many different colours each pixel can represent. **[1]**
**(b)** Calculate the file size in kibibytes (KiB), ignoring the header. Show your working. **[3]**

**4.** A photograph is 1920 × 1080 pixels with a colour depth of 24 bits. Estimate the file size in
mebibytes (MiB), ignoring the header. **[3]**

**5.** Explain the effect on image quality and file size of reducing the colour depth of a bitmap
from 24 bits to 8 bits. **[3]**

**6.** Explain how a vector graphic is encoded. Use the terms *drawing object*, *property* and
*drawing list*. **[3]**

**7.** Justify whether a bitmap or a vector graphic is more suitable for:
**(a)** a company logo that will be printed on business cards and on large banners; **[2]**
**(b)** a photograph of a landscape. **[2]**

**8.** Explain the difference between *image resolution* and *screen resolution*. **[2]**

## Section B: sound

**9.** Explain how analogue sound is converted into digital data. Use the terms *sampling*,
*sampling rate* and *sampling resolution*. **[4]**

**10.** A stereo recording (2 channels) lasts 30 seconds, sampled at 44 100 Hz with a sampling
resolution of 16 bits. Calculate the file size in bytes and estimate it in MiB. **[3]**

**11.** Explain the impact of increasing the sampling rate on the accuracy of a recording and on the
file size. **[3]**

**12.** A voice message app records mono audio at 22 050 Hz with 8-bit resolution. Explain **one**
reason why these settings may be chosen, and **one** drawback. **[2]**

---

## Answers

**1.** Pixel: the smallest addressable element of a bitmap image [1]. Image resolution: the number of
pixels in the image, given as width × height [1]. Colour depth (bit depth): the number of bits used
to represent the colour of each pixel [1].

**2.** Data about the image needed to display it [1]; any two of: width and height in pixels, colour
depth, file type, compression used, file size [1].

**3. (a)** 2⁸ = 256 colours [1].
**(b)** 800 × 600 = 480 000 pixels [1]; × 8 bits = 3 840 000 bits = 480 000 bytes [1];
480 000 ÷ 1024 = 468.75 KiB [1].

**4.** 1920 × 1080 × 24 = 49 766 400 bits [1] = 6 220 800 bytes [1]; ÷ 1024 ÷ 1024 ≈ 5.93 MiB [1].

**5.** Fewer bits per pixel means fewer possible colours (from about 16.7 million to 256) [1], so
colours may show banding and the image is less true to life [1]; the file size is reduced to one
third of the original, because each pixel uses 8 bits instead of 24 [1].

**6.** A vector graphic is stored as a drawing list [1] of drawing objects, such as lines, circles and
rectangles [1]; each object is described by properties, such as coordinates, radius, line colour,
line width and fill colour, from which the image is redrawn when displayed [1].

**7. (a)** Vector [1]: it can be scaled to any size without losing quality or becoming pixelated,
and a simple logo needs few objects, so the file is small [1].
**(b)** Bitmap [1]: a photograph has continuous variations of colour that cannot be described
efficiently by drawing objects, so each pixel's colour is stored [1].

**8.** Image resolution is the number of pixels in the image itself [1]; screen resolution is the
number of pixels the display can show horizontally and vertically, so an image larger than the
screen resolution must be scaled or scrolled [1].

**9.** The amplitude of the analogue sound wave is measured at regular intervals (sampling) [1]; the
sampling rate is the number of samples taken per second [1]; each sample is stored as a binary
number [1]; the sampling resolution is the number of bits used for each sample, which sets how
precisely the amplitude is recorded [1].

**10.** 44 100 × 16 × 2 × 30 = 42 336 000 bits [1] = 5 292 000 bytes [1] ≈ 5.05 MiB [1].

**11.** More samples per second capture the wave's changes more closely, so the digital recording is
a more accurate reproduction of the original [1–2]; more samples must be stored, so the file size
increases in proportion to the sampling rate [1].

**12.** Reason: speech needs less detail than music, so lower settings still sound clear and give a
small file that uploads quickly [1]. Drawback: lower accuracy, so higher frequencies are lost and the
sound may be less natural or noisier [1].

## Frequently asked questions

**Should I use 1000 or 1024 for file sizes?** The 9618 syllabus uses binary prefixes: kibibyte
(1024 bytes) and mebibyte (1024 × 1024 bytes). Show your working so method marks are available.

**Do I need to include the header in calculations?** Questions usually say to ignore it; the
calculation estimates the size of the pixel data only.

*Based on the Cambridge International AS & A Level Computer Science 9618 syllabus for 2027, 2028 and
2029, section 1.2 Multimedia.*
