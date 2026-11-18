---
title: "Cambridge IGCSE ICT (0417): Reduce file sizes for storage or transmission"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 11: File management"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 11.2
syllabusTopics:
  - qualification: "igcse"
    topic: "file-management"
    subtopic: "reduce-file-sizes-for-storage-or-transmission-0417"
description: "Why file sizes are reduced, how to compress and extract .zip and .rar archives, when compression helps and how to calculate savings, for Cambridge IGCSE ICT 0417 section 11.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 11.2 of Cambridge IGCSE ICT 0417 has two short statements. As a skill, you must be able to "reduce file sizes for storage or transmission where necessary using file compression including .zip, .rar". As knowledge, you must understand "the need to reduce file sizes for storage or transmission". The [File management study guide](/resources/cambridge-igcse-ict-file-management-study-guide/) introduces lossy and lossless compression and works through an image calculation. This guide concentrates on what the syllabus names: compressed archives, the practical steps, and the reasons and judgement behind "where necessary".

For quick recall use the [file size revision notes](/resources/cambridge-igcse-ict-0417-reduce-file-sizes-for-storage-or-transmission-revision-notes/), and test yourself with the [file size practice questions](/resources/cambridge-igcse-ict-0417-reduce-file-sizes-for-storage-or-transmission-practice/).

## The need to reduce file sizes

### For storage

- Storage devices and cloud accounts have a **fixed capacity**, and some cloud plans charge more for more space.
- Smaller files mean **more files fit** on the same device, so storage lasts longer before more must be bought.
- **Back-ups** are quicker to make and take less space when the files are compressed.
- Old files that are rarely used can be **archived**: compressed into one file and kept, freeing space for current work.

### For transmission

- Email systems set a **maximum attachment size**; a file over the limit is rejected.
- Smaller files **upload and download faster**, which matters on slow or mobile connections.
- Less data sent means less **bandwidth** used, which can reduce costs on a limited data plan and leaves more capacity on a shared network.
- Web pages built from smaller files **load faster** for visitors.
- One archive is easier to send than many separate files, and the recipient receives everything together in its folder structure.

## Compressed archives: .zip and .rar

An **archive** is a single file that contains one or more files, often with their folders. Archive software compresses the contents as it builds the archive.

- **.zip** is the most widely supported archive format. Most operating systems can create and open .zip files without extra software.
- **.rar** is another archive format. It usually needs separate software to create, although many programs can open it. It can split a large archive into several parts of a chosen size.

Both formats use **lossless** compression: when the archive is extracted, every file is exactly the same as the original. That is why archives are suitable for documents, spreadsheets, databases and programs, where losing even one character would cause errors.

Lossless compression works by finding patterns that repeat in the data and storing them more efficiently. Files with a lot of repetition, such as text and spreadsheets, shrink a great deal. Files that are already compressed, such as .jpg photographs and .mp4 videos, have little repetition left, so putting them in an archive saves very little space.

### Practical steps

To **compress** files:

1. Select the files or folder to be compressed in the file manager.
2. Choose the compress option (for example *Send to compressed folder* or *Add to archive*).
3. Give the archive an appropriate file name and choose where to save it.
4. If required, set a password so the archive cannot be opened without it.
5. Check the size of the archive against the original.

To **extract** (decompress) files:

1. Locate the archive.
2. Choose *Extract all* or *Extract here*, and choose the destination folder.
3. Open the extracted files from the destination folder.

In a practical task you might be asked to compress a set of files into a .zip with a given name and provide evidence, such as a screenshot showing the archive and its size.

## "Where necessary": when compression helps

Compression is not always worth doing. Consider:

| Situation | Compress? | Reason |
|---|---|---|
| 40 Word documents to email | Yes | Text compresses well; one attachment replaces 40 |
| A folder of finished photos already saved as .jpg | Little benefit | Already compressed; the archive is only slightly smaller |
| A very large video over the attachment limit even after compression | Compression alone is not enough | Share a cloud link, or split the archive into parts |
| A small one-page document | Not needed | The saving is tiny |
| A recipient who cannot open .rar files | Use .zip instead | .zip is supported by most systems |
| Rarely used project files | Yes | Archiving frees storage space |

## Calculations

### Compression ratio and percentage saving

A folder of documents is 48 MB. After compressing to a .zip file it is 12 MB.

- **Compression ratio** = original size / compressed size = 48 / 12 = **4 to 1**.
- **Saving** = 48 - 12 = 36 MB.
- **Percentage reduction** = 36 / 48 x 100 = **75%**.

### Transmission time

Using a connection speed of 16 megabits per second (Mbit/s), and 1 byte = 8 bits:

- Original: 48 MB x 8 = 384 megabits; 384 / 16 = **24 seconds**.
- Compressed: 12 MB x 8 = 96 megabits; 96 / 16 = **6 seconds**.

The compressed file arrives in a quarter of the time, matching the 4 to 1 ratio.

### Worked example: is compression enough?

A student's video project is 60 MB. The school email system allows attachments of up to 25 MB. Compressing the folder as a .zip reduces it to 45% of its original size.

- Compressed size = 60 x 0.45 = **27 MB**.
- 27 MB is still more than the 25 MB limit, so the attachment would still be rejected.
- Options: split the archive into two parts of under 25 MB each (a .rar archive can be split this way), or upload the file to cloud storage and email a link.

The reasoning to show: calculate, compare with the limit, then recommend.

## Annotated model answer

*Question: A company emails 30 spreadsheet files to its accountant each month. Explain why the files should be compressed into a .zip file before sending.* **[4]**

> The 30 files are combined into one archive (1), so only one attachment is sent and none of the files is forgotten (1). Spreadsheets compress well, so the archive is much smaller than the originals (1), which means it uploads and downloads faster and is less likely to exceed the attachment size limit (1).

*Why it scores:* two developed points, each tied to the scenario. The answer does not claim any data is lost, which would be wrong for .zip.

## Common mistakes

- Saying .zip compression reduces quality. It is lossless: extracted files are identical to the originals.
- Expecting large savings when compressing .jpg or .mp4 files, which are already compressed.
- Forgetting that the recipient must **extract** the files before editing them properly.
- Mixing bits and bytes in time calculations: multiply megabytes by 8 to get megabits.
- Stating only "to save space" when a question asks about transmission. Use the transmission reasons: attachment limits, speed, bandwidth.

## Exam technique

For **explain the need**, give separate storage and transmission reasons, each with its effect. For **describe how**, list the steps in order using the names of the actions. In calculations, show each stage with units, and state any assumption, such as 1 MB = 1 000 000 bytes, if the question does not give one.

## Check your understanding

1. Give two reasons for reducing file size before transmission. *Attachment size limits; faster upload and download; less bandwidth used.*
2. Why are .zip and .rar suitable for spreadsheets? *They are lossless, so no data is changed when extracted.*
3. A 20 MB folder compresses to 5 MB. What is the percentage reduction? *15 / 20 x 100 = 75%.*
4. How long does a 5 MB file take to send at 10 Mbit/s? *5 x 8 = 40 megabits; 40 / 10 = 4 seconds.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 11 File management, section 11.2 Reduce file sizes for storage or transmission.
