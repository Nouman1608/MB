---
title: "Cambridge A Level Information Technology (ICT): 19.4 Compression (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Image Compression Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.4
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
  - qualification: "a-level"
    topic: "graphics-creation"
    subtopic: "compression"
description: "Original practice questions with marked answers on lossless and lossy compression, run length encoding and the effects of compression on images for section 19.4 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 19.4 Compression** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed, and in the practical Paper 4 (Advanced Practical), where files are exported in different formats. All questions can be answered on paper.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-compression/) and the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** State what is meant by compression of an image file, and give **two** reasons why images are compressed. **[3]**

**2.** Explain the difference between lossless compression and lossy compression. **[3]**

**3.** A row of pixels in a simple image is stored using run length encoding (RLE). Each run is stored as a count followed by a colour letter.

**(a)** The row is AAAAAAAAAABBBBBCCCCCCCCCCCCDD. Write the row in RLE form. **[2]**
**(b)** Assume each pixel colour letter and each count takes 1 byte. Calculate the size of the row before and after compression. **[2]**
**(c)** Calculate the percentage saving, to the nearest whole number. **[2]**
**(d)** Decode the RLE data 7W 2K 5W 1K 3W and state the number of pixels in the row. **[2]**

**4.** The row WBWBWBWB (8 pixels) is compressed with RLE using the same method as in Question 3.

**(a)** Write the RLE form and calculate its size in bytes. **[2]**
**(b)** Explain why this result shows a limitation of RLE. **[2]**

**5.** A photograph is 1,200 pixels wide and 800 pixels high, with 24 bits per pixel.

**(a)** Calculate the uncompressed file size in bytes. **[3]**
**(b)** The photograph is saved as a JPG file of 96,000 bytes. Calculate the compression ratio of the original to the compressed size. **[2]**
**(c)** State the type of compression used for a JPG, and give **one** effect on the picture. **[2]**

**6.** A newspaper has these images to put on its website. For each image, recommend lossless or lossy compression and justify your choice.

**(a)** A news photograph of a crowd, to be displayed quickly on mobile phones. **[2]**
**(b)** A logo with sharp edges and flat colours. **[2]**
**(c)** A master copy of an artwork that will be edited again many times. **[2]**

**7.** A designer opens a JPG, makes a small edit, saves it as a JPG, and repeats this twenty times. The picture now has visible blocks and fuzzy edges.

**(a)** Explain why this happened. **[2]**
**(b)** Describe what the designer should do to prevent it. **[2]**

**8.** Discuss the advantages and disadvantages of lossy compression for the photographs on a school website. **[4]**

## Answers

**1.** Compression reduces the size of the file by storing the same information in fewer bits [1]. Any two reasons: less storage space is needed [1]; faster to send or load over a network [1]; uses less bandwidth, so is cheaper; more images can be held on a device. [1] **[3]**

**2.** Lossless compression reduces the file size without losing any data, so the original can be restored exactly [1]. Lossy compression permanently removes some data (the information least likely to be noticed) [1], so the file is smaller but the original cannot be restored and some quality is lost. [1] **[3]**

**3. (a)** 10A 5B 12C 2D. [2 marks for all four correct; 1 mark for three correct] **[2]**
**(b)** Before: 29 pixels = 29 bytes [1]. After: 4 runs × 2 bytes = 8 bytes. [1] **[2]**
**(c)** Saving = (29 − 8) ÷ 29 = 21 ÷ 29 [1] = about 72%. [1] **[2]**
**(d)** WWWWWWWKKWWWWWKWWW [1]. Number of pixels = 7 + 2 + 5 + 1 + 3 = 18. [1] **[2]**

**4. (a)** 1W 1B 1W 1B 1W 1B 1W 1B [1]; 8 runs × 2 bytes = 16 bytes. [1] **[2]**
**(b)** The compressed data (16 bytes) is double the original (8 bytes) [1]; RLE only helps when there are long runs of the same value, and can make a file bigger if the data changes at every pixel. [1] **[2]**

**5. (a)** Pixels = 1,200 × 800 = 960,000 [1]. Bytes = 960,000 × 24 ÷ 8 [1] = 2,880,000 bytes. [1] **[3]**
**(b)** 2,880,000 ÷ 96,000 [1] = 30, so the ratio is 30 : 1. [1] **[2]**
**(c)** Lossy compression [1]. Any one effect: some detail is permanently lost; blocky patches or fuzziness may appear around edges; the colours are slightly changed. [1] **[2]**

**6. (a)** Lossy [1], because the file will be much smaller and load quickly on a phone, and a small loss of detail in a photograph is hard to see. [1] **[2]**
**(b)** Lossless [1], because lossy compression would produce fuzzy artefacts around the sharp edges and flat colours of a logo. [1] **[2]**
**(c)** Lossless [1], because no data is lost each time it is saved, so it can be edited repeatedly without a fall in quality. [1] **[2]**

**7. (a)** Each time a JPG is saved, lossy compression discards more data [1], and the losses add up, so quality gets worse with every save (generation loss). [1] **[2]**
**(b)** Keep a master copy in an uncompressed or lossless format and do the edits on that [1]; export a JPG only once from the master when the work is finished. [1] **[2]**

**8.** Advantages (up to 2 marks): much smaller files, so pages load quickly, even on slow connections [1]; less storage and bandwidth is used, so many photographs can be shown. [1]
Disadvantages (up to 2 marks): data is permanently lost and the original cannot be recovered [1]; too much compression causes visible blockiness or blurring, which could make a school look unprofessional, and repeated saving makes it worse. [1]
Maximum 4. A balanced answer, for example saying that the school should keep the originals and use a moderate quality setting for the web copies, gains credit within these marks. **[4]**

## Where marks are usually lost

- Saying lossy compression "deletes pixels" instead of data that is least noticeable.
- Forgetting that each RLE run needs a count and a value, so the size is two bytes per run.
- Saying RLE always reduces the size of a file.
- Giving a ratio the wrong way round.
- Not saying why a method is suitable for the type of image.
- Mixing up bits and bytes in the file size.

## Next steps

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-compression/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**How do I calculate a compression ratio?**
Divide the original size by the compressed size. A 2,880,000 byte file compressed to 96,000 bytes has a ratio of 30 to 1.

**When should I use lossless compression?**
When an exact copy is needed, or the image will be edited again, or it has sharp edges and flat colours, such as a logo.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.4: Compression.
