---
title: "Cambridge IGCSE ICT (0417): File management -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 11: File management"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 11
syllabusTopics:
  - qualification: "igcse"
    topic: "file-management"
  - qualification: "igcse"
    topic: "file-management"
    subtopic: "manage-files-effectively-0417"
  - qualification: "igcse"
    topic: "file-management"
    subtopic: "reduce-file-sizes-for-storage-or-transmission-0417"
description: "Naming, organising, saving and backing up files, choosing file formats and reducing file size by compression, for Cambridge IGCSE ICT 0417 Topic 11."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Files are the units in which ICT users keep their work, and managing them well saves time and prevents loss. Topic 11 of Cambridge IGCSE ICT 0417 asks you to manage files effectively (11.1) and to reduce their size for storage or transmission (11.2). In the practical papers you will be told what to name and where to save files and in what format, and any mistake can cost marks even when the document itself is perfect.

## Where this fits in the specification

File management supports all of the practical topics because every task begins by opening a file and ends by saving or exporting one. The theory side links to storage devices (the [Storage Devices and Media study guide](/resources/igcse-ict-storage-devices-and-media/) covers capacities and media) and to communication, because smaller files are quicker to send by email.

## 11.1 Manage files effectively

### Naming and organising

- Use **meaningful file names** that tell you what is in the file, for example `Year9_Geography_Coursework_Draft2.docx`.
- Keep names free of unusual symbols, which may not be allowed on all systems.
- Organise files in **folders and subfolders** (a folder structure) by subject, date or project, and name each folder clearly.
- Follow the instructions in an exam task exactly, including capital letters and file extensions.
- Use **version numbers or dates** in names so you can see which is the latest.

### Saving, opening and moving files

Know how to **open**, **save**, **save as** (to give a different name, location or format), **rename**, **copy**, **move**, **delete** and **restore** files. Use **Save as** to make a copy in a new format without losing the original. Save regularly, because unsaved work is lost if the power fails or the program crashes.

### File extensions and formats

A **file extension** (such as `.docx`) tells the computer which program to use and which format the data is in. Know common formats:

| Type | Formats | Notes |
|---|---|---|
| Text | .txt, .rtf, .docx, .pdf | .txt has no formatting; .pdf keeps layout and is viewable on most devices |
| Spreadsheet and data | .xlsx, .csv | .csv (comma-separated values) stores plain data and can be opened by many programs |
| Images | .jpg or .jpeg, .png, .gif, .bmp, .svg | .jpg is compressed (lossy); .png and .gif are lossless; .svg is a vector format |
| Audio | .mp3, .wav, .aac | .mp3 is compressed; .wav is uncompressed |
| Video | .mp4, .avi, .mov | .mp4 is compressed and widely supported |
| Compressed archive | .zip, .rar | Hold one or more files in less space |
| Web | .htm or .html, .css | Web page and its style sheet |

**Generic (open) file formats** can be opened by many different programs and are not tied to one manufacturer's software. Examples are .csv, .txt, .rtf and .pdf. Use a generic format when the other person may not have the same software, or when the file must stay readable for many years.

### Backing up

A **back-up** is a copy of files kept separately so that they can be recovered after accidental deletion, hardware failure, theft or malware. Good practice is to back up regularly, keep the copy on a different device or in a different location (for example, cloud storage or an external hard drive), and to protect the copy with a password or encryption if the data is sensitive. Back-ups should be tested occasionally to make sure they can be restored.

## 11.2 Reduce file sizes for storage or transmission

Large files take up storage space and take longer to send, so reducing their size is useful. The main method is **compression**.

### Lossless and lossy compression

- **Lossless compression** reduces size without losing any data. The original can be rebuilt exactly. It is used for text, spreadsheets, programs and some images (PNG, GIF) and archives (ZIP). The saving is smaller.
- **Lossy compression** permanently removes some data that people are least likely to notice. The quality is reduced, and the original cannot be rebuilt. It is used for JPEG images, MP3 audio and MP4 video. The saving is much larger.

### Other ways of reducing size

- Reduce the **resolution** or the **dimensions** (pixels) of an image.
- Reduce the **colour depth** (bits per pixel).
- Save in a more efficient format, for example JPEG instead of BMP.
- **Crop** away parts you do not need, or shorten audio and video.
- Reduce the **bit rate** or **sample rate** for audio and video.
- Put several files into a single compressed archive (ZIP) before sending.

### Worked example: image size and transmission time

A camera takes a photo of 4 000 by 3 000 pixels with a colour depth of 24 bits per pixel.

Number of pixels = 4 000 x 3 000 = 12 000 000.

Size in bits = 12 000 000 x 24 = 288 000 000 bits.

Size in bytes = 288 000 000 / 8 = 36 000 000 bytes, which is **36 MB** (using 1 MB = 1 000 000 bytes).

After saving as a JPEG, the file is 2.4 MB. Compression ratio = 36 / 2.4 = **15 to 1**, so the file is 15 times smaller (about 6.7% of the original).

Transmission time over a connection of 8 megabits per second:

- Uncompressed: 288 megabits / 8 Mbit/s = **36 seconds**.
- JPEG: 2.4 x 8 = 19.2 megabits / 8 = **2.4 seconds**.

The point to state is that compression saves both storage space and transmission time. Take care with units: file sizes are usually in bytes (capital B) and speeds in bits per second (lower-case b), so you multiply by 8 to convert bytes to bits. Some courses use 1 MB = 1 048 576 bytes; if so, follow the convention given in the question and state which you used.

### Choosing a method

For a school website photo gallery, use JPEG at reduced dimensions because quality loss is acceptable and pages must load quickly. For a legal document that must not change, use lossless compression such as ZIP, or a PDF. For a logo with flat colours and a transparent background, use PNG.

## Common mistakes

- Using vague file names such as `work1`, or changing the extension by hand without converting the file.
- Confusing "Save" and "Save as". Save overwrites; Save as creates a new file.
- Claiming that lossy compression can be reversed.
- Mixing up bits and bytes in size and speed calculations.
- Saying that a back-up on the same hard drive is enough. If the drive fails, both copies are lost.
- Forgetting to say what is lost in lossy compression (quality, detail).

## Exam technique

**State** and **give** need a short fact; **describe** needs the process (for example, how lossy compression removes data); **compare** needs a point for each type (lossy and lossless) and a connecting word such as "whereas". In calculations, write each step with units. In practical tasks, re-read the file name and format instruction before saving, and check the file opens afterwards.

## Check your understanding

1. Give two features of a good file name. *It describes the content and has no unusual characters (and may include a version or date).*
2. What is a generic file format? Give an example. *One that many programs can open, not tied to one product; for example CSV or PDF.*
3. State two reasons for making a back-up. *To recover after accidental deletion, hardware failure, theft or malware.*
4. Distinguish between lossy and lossless compression. *Lossy permanently removes some data to reduce size more; lossless keeps all data so the original can be rebuilt.*
5. Name a lossy format for images and one for audio. *JPEG; MP3.*
6. A 1 600 by 1 200 image uses 24 bits per pixel. Calculate its size in MB. *1 600 x 1 200 x 24 / 8 = 5 760 000 bytes, about 5.76 MB.*
7. How long does a 6 MB file take to send at 12 megabits per second? *6 x 8 = 48 megabits; 48 / 12 = 4 seconds.*
8. Suggest two ways to reduce the size of a photograph for email. *Reduce the dimensions or resolution, and save it as a JPEG with higher compression.*

## Frequently asked questions

**What is a generic file format?**
In Cambridge IGCSE ICT (0417), a generic file format can be opened by many different programs and is not tied to one manufacturer's software, for example .csv, .txt, .rtf and .pdf. Use one when the recipient may not have the same software.

**What is the difference between lossy and lossless compression?**
Lossless compression reduces file size without losing any data, so the original can be rebuilt exactly, as with ZIP or PNG. Lossy compression permanently removes data people are least likely to notice, giving a much bigger saving, as with JPEG, MP3 and MP4.

**What makes a good file name?**
A good file name describes the content, avoids unusual symbols and may include a version number or date. In the practical papers, follow the file name and format instructions exactly, including capital letters and extensions.

**How should files be backed up?**
Back up regularly, keep the copy on a different device or in a different location such as cloud storage or an external drive, protect sensitive copies with a password or encryption, and test occasionally that the back-up can be restored.
