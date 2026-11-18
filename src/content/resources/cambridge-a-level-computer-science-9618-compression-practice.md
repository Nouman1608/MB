---
title: "Cambridge A Level Computer Science (9618): Compression -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "compression"
description: "Original questions with mark-scheme answers on Cambridge 9618 section 1.3: the need for compression, lossy and lossless choices, RLE and methods by file type."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 1.3 Compression of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026: the need for compression, lossy and lossless compression and justifying a method, and how text, bitmap, vector and sound files are compressed, including run-length encoding. Learn the content first in the [compression study guide](/resources/cambridge-a-level-computer-science-9618-compression/) and the [compression revision notes](/resources/cambridge-a-level-computer-science-9618-compression-revision-notes/).

## Section A

**1.** Explain the difference between lossy and lossless compression. **[2]**

**2.** Give **two** reasons why a video-sharing website compresses the videos users upload. **[2]**

**3.** The following string is stored using one byte per character:

```
GGGGGGGHHHHKKKKKKKKKKM
```

**(a)** Encode the string using run-length encoding as count–character pairs. **[2]**

**(b)** Calculate the number of bytes saved, assuming each count and each character takes one byte. **[2]**

**4.** Explain why run-length encoding would be an unsuitable method for compressing a paragraph of ordinary English text. **[2]**

**5.** One row of a black-and-white image is stored with 1 byte per pixel, where 0 is white and 1 is black:

```
0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 1 1
```

Encode the row as (count, value) pairs and state its compressed size in bytes. **[3]**

**6.** State **two** lossy methods of reducing the file size of a bitmap image. **[2]**

## Section B

**7.** Describe how a sound file can be compressed using lossy compression. **[3]**

**8.** A company stores its customer database in compressed form. Justify the type of compression it should use. **[2]**

**9.** An online newspaper publishes photographs on its website. Justify the type of compression that should be used for the photographs. **[3]**

**10.** Explain why a vector graphic is usually compressed using a lossless method. **[2]**

**11.** A compression program uses this format: any run of four or more identical characters is replaced by the flag character $, then the count, then the character; shorter runs are copied unchanged. Each flag, count and character takes one byte.

**(a)** Encode the string NNNNNNNOPQQQQQ. **[2]**

**(b)** State the original and compressed sizes in bytes. **[1]**

**(c)** Explain why the program does not encode runs shorter than four characters. **[2]**

**12.** Describe how dictionary encoding can be used to compress a long text document. **[3]**

## Answers

**1.** Lossless compression reduces file size in a way that allows the original data to be reconstructed exactly [1]; lossy compression permanently removes some data, so the decompressed file is only an approximation of the original [1]. **[2]**

**2.** Any two, one mark each [2]: smaller files need less server storage; videos stream with less buffering because a lower bit rate is needed; less bandwidth is used, so uploads and downloads are faster and mobile data allowances last longer. **[2]**

**3. (a)** **7G 4H 10K 1M** [2] (one mark for at least two correct pairs).

**(b)** Original 22 bytes; compressed 4 pairs × 2 = 8 bytes [1]; saving = **14 bytes** [1]. **[4]**

**4.** Ordinary text rarely contains runs of the same character, as most adjacent letters differ [1]; each single character would become a count–character pair, so the encoded file could be larger than the original, up to double [1]. **[2]**

**5.** (6, 0) (4, 1) (8, 0) (2, 1) [2] (one mark for at least two correct pairs); 4 pairs × 2 bytes = **8 bytes**, compared with 20 bytes originally [1]. **[3]**

**6.** Any two, one mark each [2]: reduce the image resolution (fewer pixels); reduce the colour depth (fewer bits per pixel); discard fine detail or small colour variations the human eye is unlikely to notice. **[2]**

**7.** Perceptual coding removes frequencies that are outside the range of human hearing [1]; it removes quieter sounds that are masked by louder sounds played at the same time [1]; alternatively, or as well, the sampling rate or sampling resolution can be reduced, so fewer bits are stored per second [1]. **[3]**

**8.** Lossless compression [1], because every record must be restored exactly; losing or changing even one character could corrupt customer details such as an address or account number [1]. **[2]**

**9.** Lossy compression [1], because it produces much smaller files, so pages load quickly for readers and use less bandwidth [1]; the detail removed is chosen to be hard to notice when the photographs are viewed on screen, so lossless compression's larger files would bring little visible benefit [1]. **[3]**

**10.** A vector graphic is stored as a drawing list of objects and their properties, which is already compact [1]; removing or changing any data would alter coordinates, sizes or colours, so the shapes drawn would change [1]. **[2]**

**11. (a)** **$7N O P $5Q** [2] (one mark for each correctly encoded run, with O and P copied unchanged).

**(b)** Original **14 bytes**; compressed 3 + 1 + 1 + 3 = **8 bytes** [1].

**(c)** Encoding a run uses three bytes (flag, count and character) [1], so a run of three or fewer characters would take as many bytes, or more, encoded as it does unchanged, giving no saving [1]. **[5]**

**12.** The program finds words or character sequences that occur many times in the document [1]; each is stored once in a dictionary and given a short code [1]; every occurrence in the text is replaced with its code, and the dictionary is stored with the file so the text can be reconstructed exactly [1]. **[3]**

## Where marks are usually lost

- Describing RLE as lossy.
- Not stating or following the encoding format given in the question.
- Counting characters instead of bytes, or forgetting that each pair takes two bytes.
- Justifying a method with "better quality" or "smaller" and no reference to the scenario.
- Suggesting lossy compression for data that must be exact.
- Listing "compression" as a method for sound without naming what is removed.
