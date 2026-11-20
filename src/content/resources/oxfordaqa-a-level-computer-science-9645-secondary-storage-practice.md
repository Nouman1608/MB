---
title: "OxfordAQA A-Level Computer Science (9645): Secondary storage -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Secondary Storage Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.5
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "secondary-storage-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.7.5 Secondary storage: hard disks, SSDs, comparisons, cloud storage and calculations, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.5 Secondary storage** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the need for secondary storage, the magnetic hard disk, the solid-state drive, comparing them, and cloud storage. Where a calculation needs units, use 1 GB = 1 000 MB and 1 MB = 1 000 000 bytes, as the question says.

Related pages: [secondary storage study guide](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage/) ·
[secondary storage revision notes](/resources/oxfordaqa-a-level-computer-science-9645-secondary-storage-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** State two differences between main memory and secondary storage. **[2]**

**2.** Define the term cloud storage. **[2]**

**3.** State why a solid-state drive has no seek time. **[1]**

**4.** A hard disk spins at 5 400 revolutions per minute.

**(a)** Calculate the time for one revolution, in milliseconds, to 2 decimal places. **[1]**
**(b)** Calculate the average rotational latency. **[1]**

## Section B

**5.** Describe how data is read from a magnetic hard disk. **[4]**

**6.** Describe how an SSD stores data and explain why it can be read faster than a hard disk. **[4]**

**7.** A drive has a capacity of 256 GB. Photographs have an average size of 5 MB.

**(a)** Calculate how many photographs fit on the drive. **[2]**
**(b)** A 3.6 GB folder of photographs is copied. Calculate the time taken at 150 MB/s and at 500 MB/s. **[2]**

**8.** A school wants to store the following. For each one, recommend either a magnetic hard disk or an SSD and justify your choice.

**(a)** The drives inside tablets that students carry between lessons. **[2]**
**(b)** An archive of ten years of recorded lessons that is rarely played back. **[2]**

**9.** A student saves coursework to cloud storage.

**(a)** Give two advantages to the student of using cloud storage instead of a USB flash drive. **[2]**
**(b)** Give two disadvantages of using cloud storage. **[2]**
**(c)** The student uploads a 12 GB project over a 40 Mbit/s connection. Calculate the time in minutes. **[3]**

**10.** Evaluate the use of an SSD for the system drive and a hard disk for bulk files in a desktop computer. **[4]**

## Answers

**1.** Any two differences [1 each]: main memory is volatile but secondary storage is not; the processor accesses main memory directly but secondary storage must be copied into main memory first; main memory is faster; secondary storage has a larger capacity or a lower cost per byte. **[2]**

**2.** Storage of data on servers at a remote location [1] that is accessed via the Internet [1]. **[2]**

**3.** It has no moving parts or read/write head to position; locations are reached electronically [1]. **[1]**

**4. (a)** 60 ÷ 5 400 s = 0.01111 s = **11.11 ms** [1]
**(b)** Half a revolution = **5.56 ms** [1]

**5.** The platters are spinning at a constant speed [1]. The arm moves the read/write head to the correct track [1]. The head waits until the required sector rotates underneath it [1]. The head detects the direction of magnetisation of the surface, which gives the 0s and 1s [1]. **[4]**

**6.** Data is stored as electrical charge trapped in flash memory cells, with the amount of charge representing the bit [1]. The charge remains when power is off [1]. There are no moving parts, so there is no seek or rotational delay [1]. Any location can be reached electronically in a similar time [1]. **[4]**

**7. (a)** 256 GB = 256 000 MB [1]; 256 000 ÷ 5 = **51 200** photographs [1]
**(b)** 3.6 GB = 3 600 MB. At 150 MB/s: 3 600 ÷ 150 = **24 s** [1]. At 500 MB/s: 3 600 ÷ 500 = **7.2 s** [1]

**8. (a)** SSD [1], because it has no moving parts, so it survives being carried and knocked, and it uses little power (accept: it is light and silent) [1]
**(b)** Hard disk [1], because it has a lower cost per gigabyte and large capacity, and the speed of access matters little for rarely played files [1]

**9. (a)** Any two from: the files can be accessed from any device with an Internet connection; there is no device to lose; the provider backs up the data; it is easy to share with a teacher; the capacity is large [1 each]. **[2]**
**(b)** Any two from: it needs an Internet connection; uploads and downloads are limited by bandwidth; there may be a subscription charge; the student depends on the provider for security and availability [1 each]. **[2]**
**(c)** 12 GB = 12 × 10^9 × 8 = 9.6 × 10^10 bits [1]. Time = 9.6 × 10^10 ÷ 40 × 10^6 = 2 400 s [1] = **40 minutes** [1]

**10.** Advantage: the operating system and programs load quickly from the SSD because there is no seek or rotational delay [1]. Advantage: the hard disk provides a large capacity at a low cost per gigabyte for files such as photos and videos that do not need to be read quickly [1]. Disadvantage: files kept on the hard disk are slower to open, and having two drives costs more than one and adds complexity [1]. Judgement: the combination is suitable, because each device is used for what it does best, with a justification [1]. **[4]**

## Frequently asked questions

**Is an SSD the same as RAM?**
No. Both are electronic, but RAM is volatile main memory the processor reads directly, while an SSD is non-volatile secondary storage.

**Do I need to know the exact speeds of devices?**
No. The question will give any figures you need. Know which is faster and why.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.5 Secondary storage.
