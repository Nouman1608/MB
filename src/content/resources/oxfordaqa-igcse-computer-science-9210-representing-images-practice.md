---
title: "OxfordAQA IGCSE Computer Science (9210): Representing images -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Images Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.06
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "representing-images-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on pixels, colour depth, bitmap file sizes and converting between images and binary."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Representing images study guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-images/) | [Representing images revision notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-images-revision-notes/)

These questions cover section 3.3.6 Representing images of the OxfordAQA International GCSE Computer Science (9210)
specification.

In calculations, use 1 kB = 1,000 bytes and 1 MB = 1,000 kB.

---

## Section A

**1.** State what is meant by a pixel. **[1]**

**2.** State what is meant by the colour depth of a bitmap image. **[1]**

**3.** A bitmap uses a colour depth of 3 bits.

**(a)** State the number of different colours each pixel can have. **[1]**

**(b)** State the smallest colour depth that gives at least 16 different colours. **[1]**

**4.** State the formula used to calculate the size of a bitmap image in bits. **[1]**

## Section B

**5.** A bitmap image is 20 pixels wide and 10 pixels high, with a colour depth of 4 bits.

**(a)** Calculate the size of the image in bits. **[2]**

**(b)** State the size of the image in bytes. **[1]**

**6.** An image is 640 × 480 pixels with a colour depth of 24 bits. Calculate the file size in bytes and in kilobytes.
Show your working. **[3]**

**7.** A bitmap is 1024 pixels wide and 768 pixels high and has a colour depth of 8 bits. Calculate its size in bytes.
**[3]**

**8.** A photograph is 3000 × 2000 pixels with a colour depth of 24 bits.

**(a)** Calculate the size of the file in megabytes. **[3]**

**(b)** The width and the height are both halved, so that the image is 1500 × 1000 pixels. State the new file size in
megabytes and compare it with the original size. **[3]**

**9.** The binary data below is a 6 × 5 bitmap image. The colour depth is 1 bit, where 0 is white and 1 is black. The data
is stored row by row.

```
001100 011110 111111 001100 001100
```

**(a)** Draw the image by writing a `#` for a black pixel and a `.` for a white pixel, one row at a time. **[3]**

**(b)** State the number of bits used to store the image. **[1]**

**10.** A 3 × 3 image has a colour depth of 2 bits. The colours are 00 = white, 01 = grey and 10 = black. The data, stored
row by row, is:

```
01 10 01  10 00 10  01 10 01
```

**(a)** State the colour of each pixel in the middle row. **[2]**

**(b)** State the colour of the pixel at the centre of the image. **[1]**

**11.** The grid below shows a 4 × 3 image. B is a black pixel (1) and W is a white pixel (0).

| W | B | B | W |
|---|---|---|---|
| B | W | W | B |
| B | B | B | B |

Write down the binary data that stores this image, with a colour depth of 1 bit. **[3]**

**12.** Image A is 400 × 300 pixels with a colour depth of 24 bits. Image B is 800 × 600 pixels with a colour depth of 8
bits.

**(a)** Calculate the file size of each image in bytes. **[2]**

**(b)** State which image has the larger file and by how many bytes. **[2]**

**13.** Describe, with an example, how reducing the colour depth of an image changes the file size and the appearance of
the image. **[3]**

**14.** Explain why an image with a larger number of pixels can show more detail. **[2]**

---

## Answers

**1.** A picture element; a single point (or square) in a graphical image [1].

**2.** The number of bits used to represent each pixel [1].

**3.** **(a)** 8 [1] (2 to the power 3). **(b)** 4 bits [1] (2 to the power 4 is 16).

**4.** Size in bits = W × H × D (width × height × colour depth) [1].

**5.** **(a)** 20 × 10 × 4 [1] = 800 bits [1]. **(b)** 800 ÷ 8 = 100 bytes [1].

**6.** 640 × 480 × 24 = 7,372,800 bits [1]; 7,372,800 ÷ 8 = 921,600 bytes [1]; 921,600 bytes = 921.6 kB [1].

**7.** 1,024 × 768 × 8 = 6,291,456 bits [1]; divide by 8 [1] to give 786,432 bytes [1]. (Alternatively, with a depth of 8
bits, the image has one byte per pixel, so 1,024 × 768 = 786,432 bytes.)

**8.** **(a)** 3,000 × 2,000 × 24 = 144,000,000 bits [1]; ÷ 8 = 18,000,000 bytes [1]; = 18 MB [1].
**(b)** 1,500 × 1,000 × 24 ÷ 8 = 4,500,000 bytes, which is 4.5 MB [1]. It is one quarter of the original size [1]
because there are one quarter as many pixels (half the width and half the height) [1].

**9.** **(a)**

```
..##..
.####.
######
..##..
..##..
```

Row 1 and row 2 correct [1]; row 3 correct [1]; rows 4 and 5 correct [1]. The image is an arrow pointing up.
**(b)** 6 × 5 × 1 = 30 bits [1].

**10.** **(a)** The middle row is 10 00 10, so black, white, black [2] (one mark for black at each end, one mark for
white in the middle). **(b)** White [1].

**11.** 0110 1001 1111 [3] (one mark for each correct row; a total of 12 bits). Accept the data written without spaces.

**12.** **(a)** A: 400 × 300 × 24 ÷ 8 = 360,000 bytes [1]; B: 800 × 600 × 8 ÷ 8 = 480,000 bytes [1].
**(b)** Image B is larger [1], by 120,000 bytes [1].

**13.** A lower colour depth means fewer bits for each pixel [1], so the file is smaller; for example reducing the
depth of an 800 × 600 image from 24 bits to 8 bits changes the size from 1,440,000 bytes to 480,000 bytes [1]. The
image has fewer colours available, so colours may look flat or banded [1].

**14.** The image is divided into more, smaller pixels [1], so smaller features can be shown, and the picture looks
sharper when it is displayed or enlarged [1].

---

## Where marks are usually lost

- Not dividing by 8 to change bits into bytes, as in Questions 5, 6 and 8.
- Forgetting to multiply by the colour depth.
- Reading the data in the wrong order in Question 9, or not splitting it into 2-bit groups in Question 10.
- Saying more pixels means more colours.
- Giving a file size without a unit.
