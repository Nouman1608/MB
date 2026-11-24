---
title: "Cambridge IGCSE Computer Science (0478): Data storage and compression -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.3
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "data-storage-and-compression-0478"
description: "Thirteen original Cambridge IGCSE Computer Science 0478 questions on storage units, file sizes, compression and run length encoding, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover **1.3 Data storage and compression** in Topic 1, Data representation, of the Cambridge IGCSE
Computer Science 0478 syllabus for 2026 to 2028. Use 1024 for every step between units from the byte upwards.

Related: [Data storage and compression study guide](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression/)
and [Data storage and compression revision notes](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-revision-notes/)

---

## Section A

**1.** State the number of bits in 3 bytes. **[1]**

**2.** State the number of kibibytes in 1 gibibyte. **[1]**

**3.** Put these units in order of size, smallest first: MiB, nibble, TiB, byte, KiB, GiB. **[1]**

**4.** State what is meant by lossless compression. **[2]**

**5.** Give the formula for the file size of an image, in bits. **[1]**

**6.** Compress the string PPPPPPQQRRRRRRRR using run length encoding. **[1]**

## Section B

**7.** An image is 1280 × 720 pixels with a colour depth of 16 bits. Calculate its file size in MiB, giving your answer
to two decimal places. Show your working. **[4]**

**8.** A podcast clip lasts 2 minutes. It is recorded at a sample rate of 48 000 Hz with a sample resolution of 24 bits.
Calculate the file size in MiB, to two decimal places. Show your working. **[4]**

**9.** A sound file is exactly 4 MiB. It was recorded at 32 000 Hz with a 16-bit sample resolution. Calculate the length
of the recording in seconds, to one decimal place. **[3]**

**10.** A music player has 8 GiB of free storage. Each song uses 2.5 MiB. Calculate how many complete songs can be
stored. **[2]**

**11.** One row of pixels in a black (B) and white (W) icon is:

W W W W W W W W W W W B B B W W

**(a)** Write the row using run length encoding. **[1]**
**(b)** State how many items are stored before and after compression, if each value and each count is one item. **[2]**
**(c)** Explain why run length encoding would not reduce the size of a photograph by much. **[2]**

**12.** A travel website stores two kinds of file: holiday photographs and customer booking records.

**(a)** Give two reasons why the website owner wants to compress the photographs. **[2]**
**(b)** Recommend a type of compression for each kind of file. Justify each choice. **[4]**
**(c)** Describe two ways lossy compression could reduce the size of a photograph. **[2]**

**13.** A 3-minute audio clip is recorded at 44 100 Hz with a sample resolution of 16 bits.

**(a)** Calculate the file size in MiB, to two decimal places. **[2]**
**(b)** Lossy compression reduces the sample resolution to 8 bits. State the new file size and explain the effect on
the sound. **[2]**

---

## Answers

**1.** 3 × 8 = **24 bits** [1]

**2.** 1024 × 1024 = **1 048 576 KiB** [1]

**3.** nibble, byte, KiB, MiB, GiB, TiB (all in order) [1]

**4.** The file size is reduced without permanently losing any data [1]; the original file can be restored exactly [1]

**5.** Image resolution (width × height in pixels) × colour depth [1]

**6.** **6P 2Q 8R** [1]

**7.** 1280 × 720 × 16 = 14 745 600 bits [1]; ÷ 8 = 1 843 200 bytes [1]; ÷ 1024 = 1800 KiB [1]; ÷ 1024 = **1.76 MiB** [1]
*Examiner insight:* Dividing by 1000 at any stage gives about 1.84 and loses the final mark; the syllabus units are binary.

**8.** 2 minutes = 120 seconds; 48 000 × 24 × 120 = 138 240 000 bits [1]; ÷ 8 = 17 280 000 bytes [1]; ÷ 1024 = 16 875 KiB [1]; ÷ 1024 = **16.48 MiB** [1]
*Examiner insight:* Using 2 instead of 120 for the time is the most common error here, and it affects every later mark.

**9.** 4 MiB = 4 × 1024 × 1024 × 8 = 33 554 432 bits [1]; bits per second = 32 000 × 16 = 512 000 [1]; length = 33 554 432 ÷ 512 000 = **65.5 seconds** [1]

**10.** 8 GiB = 8 × 1024 = 8192 MiB; 8192 ÷ 2.5 = 3276.8 [1]; **3276 complete songs** (round down) [1]

**11. (a)** **11W 3B 2W** [1]
**(b)** Before: 16 items [1]; after: 6 items [1]
**(c)** Neighbouring pixels in a photograph are rarely exactly the same colour, so there are few long runs [1]; each short run still needs a value and a count, so little space is saved, and the file could even get bigger [1] **[5]**

**12. (a)** Any two from: less storage space is needed on the server [1]; the pages load faster because the photographs take less time to transmit [1]; less bandwidth is used [1]
**(b)** Photographs: lossy [1]; a large reduction in size, and the small loss of detail is unlikely to be noticed by customers [1]; booking records: lossless [1]; every character must be restored exactly, or names, dates or prices could be wrong [1]
**(c)** Reduce the resolution (fewer pixels) [1]; reduce the colour depth (fewer bits per pixel) [1] **[8]**
*Examiner insight:* A recommendation without a reason linked to the file type earns only half the marks in (b).

**13. (a)** 44 100 × 16 × 180 = 127 008 000 bits [1]; ÷ 8 ÷ 1024 ÷ 1024 = **15.14 MiB** [1]
**(b)** Half the bits per sample, so half the size: **7.57 MiB** [1]; each sample is stored less precisely, so the sound is less accurate (lower quality), and the lost data cannot be restored [1] **[4]**
*Examiner insight:* Proportional reasoning is accepted in (b); there is no need to repeat the whole calculation.

---

## Where marks are usually lost

- Using 1000 instead of 1024 between units.
- Skipping the ÷ 8 step from bits to bytes.
- Leaving time in minutes in a sound calculation.
- Rounding a "how many files" answer up instead of down.
- Saying lossless compression "removes some data".
- Recommending a compression type without linking it to the file in the scenario.

## More on this topic

- [Data storage and compression study guide](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression/)
- [Data storage and compression revision notes](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-revision-notes/)
- [Data Representation practice questions](/resources/data-representation-practice/) for the whole topic

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.3 Data storage and compression.
