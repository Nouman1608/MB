---
title: "Cambridge O Level Computer Science (2210): Data storage and compression -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Storage and Compression Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 1 – Data representation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 1.3
syllabusTopics:
  - qualification: "o-level"
    topic: "data-representation-2210"
  - qualification: "o-level"
    topic: "data-representation-2210"
    subtopic: "data-storage-and-compression-2210"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 1.3: storage units, image and sound file size calculations, lossy and lossless compression and RLE."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Data storage and compression study guide](/resources/cambridge-o-level-computer-science-2210-data-storage-and-compression/) and [Data storage and compression revision notes](/resources/cambridge-o-level-computer-science-2210-data-storage-and-compression-revision-notes/)

---

## Section A

**1.** State the number of bits in a byte. **[1]**

**2.** State the number of bits in a nibble. **[1]**

**3.** Convert 3 gibibytes (GiB) into mebibytes (MiB). **[1]**

**4.** Convert 40,960 kibibytes (KiB) into mebibytes (MiB). **[2]**

**5.** Give the number of bytes in 1.5 kibibytes (KiB). **[1]**

**6.** State **one** reason why a file is compressed before it is sent over the internet. **[1]**

**7.** Name the type of compression that permanently removes data from a file. **[1]**

## Section B

**8.** A computer has a file of 2 mebibytes (MiB).

**(a)** State the size of the file in kibibytes (KiB). **[1]**

**(b)** State the size of the file in bytes. **[1]**

**9.** An image has a resolution of 1024 pixels by 512 pixels. The colour depth is 8 bits. Calculate the file size of the image in kibibytes (KiB). Show your working. **[4]**

**10.** A sound is recorded with a sample rate of 16,000 Hz and a sample resolution of 16 bits. The recording lasts 40 seconds. Calculate the file size in kibibytes (KiB). Show your working. **[4]**

**11.** An image has a resolution of 2048 pixels by 1024 pixels and a colour depth of 16 bits.

**(a)** Calculate the file size in mebibytes (MiB). **[3]**

**(b)** The colour depth is reduced to 4 bits. Calculate the new file size in mebibytes (MiB). **[2]**

**(c)** State **one** disadvantage of reducing the colour depth. **[1]**

**12.** Explain why a music streaming service compresses its audio files. **[3]**

**13.** Describe how lossy compression reduces the size of a sound file. **[2]**

**14.** The pixels in one row of an image are:

RRRRGGGBBBBBBY

where each letter is a colour.

**(a)** Encode the row using run length encoding (RLE), writing each run as a letter followed by a count. **[2]**

**(b)** State how many characters the encoded row has, compared with the original. **[1]**

**(c)** Expand the RLE data K3M5N2. **[1]**

**15.** A company stores its customer records as text files and its advertising photographs as image files. The company decides to use lossless compression for the records and lossy compression for the photographs.

**(a)** Explain why lossless compression is suitable for the customer records. **[2]**

**(b)** Explain why lossy compression is suitable for the photographs. **[2]**

**16.** Explain why run length encoding might not reduce the size of a file that contains a photograph. **[2]**

---

## Answers

**1.** 8 [1].

**2.** 4 [1].

**3.** 3 × 1024 = **3072 MiB** [1].

**4.** Divide by 1024 [1], giving **40 MiB** [1].

**5.** 1.5 × 1024 = **1536 bytes** [1].

**6.** Any one: the file takes up less storage space; less bandwidth is required; it takes less time to transmit [1].

**7.** Lossy compression [1].

**8. (a)** 2 × 1024 = **2048 KiB** [1].
**(b)** 2048 × 1024 = **2,097,152 bytes** [1].

**9.** Number of pixels = 1024 × 512 = 524,288 [1]. Bits = 524,288 × 8 = 4,194,304 [1]. Bytes = 4,194,304 ÷ 8 = 524,288 [1]. KiB = 524,288 ÷ 1024 = **512 KiB** [1].

**10.** Samples = 16,000 × 40 = 640,000 [1]. Bits = 640,000 × 16 = 10,240,000 [1]. Bytes = 10,240,000 ÷ 8 = 1,280,000 [1]. KiB = 1,280,000 ÷ 1024 = **1250 KiB** [1].

**11. (a)** Pixels = 2048 × 1024 = 2,097,152 and bits = 2,097,152 × 16 = 33,554,432 [1]. Bytes = 4,194,304 and KiB = 4096 [1]. MiB = 4096 ÷ 1024 = **4 MiB** [1].
**(b)** The file size is proportional to the colour depth, so 4 bits is a quarter of 16 bits [1], giving **1 MiB** [1].
**(c)** Fewer colours are available, so the image quality is lower (colours are less accurate or banding appears) [1].

**12.** Compression reduces the size of the files [1]. Smaller files need less bandwidth to stream, so the music plays without long pauses / more users can be served at once [1]. They also need less storage space on the service's servers and on listeners' devices [1].

**13.** Data is permanently removed [1], for example by reducing the sample rate or the sample resolution, which means fewer or smaller samples are stored [1].

**14. (a)** **R4G3B6Y1** [2]. Award 1 mark for three of the four runs correct.
**(b)** 8 characters, compared with 14 [1].
**(c)** **KKKMMMMMNN** [1].

**15. (a)** Lossless compression keeps all the data and the original can be rebuilt exactly [1]. Customer records must stay accurate, because removing or changing even one character would make the record wrong [1].
**(b)** Lossy compression gives a much smaller file by permanently removing some data [1], and small losses in a photograph are hard to notice, so the loss of quality is acceptable [1].

**16.** RLE only saves space when the same value repeats in long runs [1]. In a photograph neighbouring pixels are often slightly different, so most runs are very short and each needs a value and a count, which can make the file larger [1].

---

## Where marks are usually lost

- Question 3 and Question 4: using 1000 instead of 1024, or dividing when you should multiply.
- Question 9 and Question 10: stopping at bits, or forgetting to divide by 8 to reach bytes.
- Question 10: multiplying by the length in minutes or leaving out the length altogether.
- Question 11 (b): recalculating from scratch and slipping, when a ratio gives the answer quickly.
- Question 12: saying only "it makes the file smaller". Give the impact: storage, bandwidth or time.
- Question 13: saying lossy compression "removes the quiet parts". Use the syllabus ideas: reduce the sample rate or resolution.
- Question 14: forgetting the run of length one at the end (Y1).
- Question 16: describing how RLE works but not why photographs have few repeats.

## Checking a file size

Work backwards: multiply your answer in KiB by 1024 to get bytes, then by 8 to get bits, and compare with the number of pixels (or samples) times the depth (or resolution). For Question 9, 512 × 1024 × 8 = 4,194,304, which matches 524,288 × 8.
