---
title: "OxfordAQA A-Level Computer Science (9645): Representing graphics -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Graphics Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.5
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "representing-graphics-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.5.5: bitmap storage calculations, colour depth, metadata, vector graphics and comparison, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.5 Representing graphics** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: bitmapped graphics, colour depth, storage calculations, metadata, vector graphics and their comparison. Use 1 KiB = 1,024 bytes and ignore metadata unless a question says otherwise.

Related pages: [representing graphics study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics/) · [representing graphics revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-revision-notes/)

## Section A

**1.** State what is meant by colour depth. **[1]**

**2.** State the number of different colours that can be represented with a colour depth of 8 bits. **[1]**

**3.** Give **two** items of metadata that are stored in a bitmap file. **[2]**

**4.** Give **two** properties that could be stored for an object in a vector graphic. **[2]**

## Section B

**5.** A black and white bitmap image is 300 pixels wide and 200 pixels high. Each pixel uses 1 bit.

**(a)** Calculate the size of the image in pixels. **[1]**
**(b)** Calculate the storage requirement in bytes. **[2]**

**6.** A photograph is 1280 pixels wide and 720 pixels high and has a colour depth of 24 bits.

**(a)** Calculate the storage requirement in bytes. **[3]**
**(b)** Give your answer to (a) in KiB. **[1]**
**(c)** The photograph is converted to 8-bit colour. Calculate the new storage requirement in bytes. **[2]**

**7.** A bitmap image is 40 pixels wide and 50 pixels high. Its pixel data occupies exactly 2,000 bytes. Calculate the colour depth. **[3]**

**8.** A designer needs a bitmap logo with 20 different colours.

**(a)** State the smallest colour depth that can be used. **[2]**
**(b)** Calculate the storage requirement in bytes for a 100 × 100 logo at this depth. Give the answer to the nearest byte. **[3]**

**9.** An 8 × 8 black and white bitmap uses 1 for black and 0 for white. The first two rows are 00111100 and 01000010.

**(a)** State the number of bytes needed to store the whole image. **[1]**
**(b)** State the hexadecimal value of the first two rows. **[2]**
**(c)** Explain why a program reading the image also needs metadata. **[2]**

**10.** A company needs images for two purposes: a company logo for stationery and a billboard, and a set of photographs of its products.

**(a)** State which type of graphic would be most suitable for the logo, and give **two** reasons. **[3]**
**(b)** State which type would be most suitable for the photographs, and give **one** reason. **[2]**
**(c)** Describe how a vector graphic stores a circle with a red outline and a blue fill. **[3]**

## Answers

**1.** The **number of bits** used to represent the colour of a pixel [1]. **[1]**

**2.** 2^8 = **256** [1]. **[1]**

**3.** Any two [1 each]: **width**; **height**; **colour depth** (accept date or camera details as other metadata). **[2]**

**4.** Any two [1 each]: **x and y coordinates** of the top left corner; **colour of the outline**; **line width** of the outline; **colour of the fill** (accept size or radius). **[2]**

**5. (a)** 300 × 200 = **60,000** pixels [1]. **[1]**
**(b)** 60,000 × 1 = 60,000 bits [1]; ÷ 8 = **7,500 bytes** [1]. **[2]**

**6. (a)** 1280 × 720 = 921,600 pixels [1]; × 24 = 22,118,400 bits [1]; ÷ 8 = **2,764,800 bytes** [1]. **[3]**
**(b)** 2,764,800 ÷ 1,024 = **2,700 KiB** [1]. **[1]**
**(c)** 921,600 × 8 = 7,372,800 bits [1]; ÷ 8 = **921,600 bytes** [1]. **[2]**

**7.** Pixels: 40 × 50 = 2,000 [1]. Bits: 2,000 × 8 = 16,000 [1]. Colour depth: 16,000 ÷ 2,000 = **8 bits** [1]. **[3]**

**8. (a)** 2^4 = 16 is too few [1]; 2^5 = 32 is enough, so **5 bits** [1]. **[2]**
**(b)** 100 × 100 × 5 = 50,000 bits [1]; ÷ 8 = 6,250 bytes [1]; so **6,250 bytes** [1]. **[3]**
(Check: 100 × 100 = 10,000 pixels, 10,000 × 5 = 50,000 bits, 6,250 bytes.)

**9. (a)** 8 × 8 × 1 = 64 bits = **8 bytes** [1]. **[1]**
**(b)** 00111100 is **3C** [1]; 01000010 is **42** [1]. **[2]**
**(c)** The bits alone do not show **how wide the image is** (where each row ends) [1] or **how many bits make one pixel**, so the width, height and colour depth are needed to rebuild the picture [1]. **[2]**

**10. (a)** **Vector** [1]. Any two reasons [1 each]: it can be **enlarged to any size without losing quality** (the shapes are redrawn); the file is **small** for a simple shape-based image; it is easy to **edit** individual objects. **[3]**
**(b)** **Bitmap** [1], because a photograph has fine variation in colour and each pixel can be given any colour [1]. **[2]**
**(c)** The graphic stores the circle as an **object** in a list [1], with properties such as the **position** (x and y coordinates) and **size** (radius or width and height) [1], the **outline colour (red)** and the **fill colour (blue)** [1]. **[3]**

## Frequently asked questions

**Is metadata included in the storage calculation?**
No. The specification says to calculate storage requirements for bitmapped images excluding metadata.

**Are vector graphics always smaller than bitmaps?**
No. A simple image with few objects is small, but a complex drawing with thousands of objects can be large.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.5 Representing graphics.
