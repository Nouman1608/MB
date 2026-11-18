---
title: "Cambridge IGCSE Computer Science (0478): Data storage -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.3
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "data-storage-0478"
description: "Original practice questions with mark-scheme answers on Cambridge IGCSE Computer Science 0478 section 3.3: RAM, ROM, secondary storage, virtual memory and the cloud."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data storage study guide](/resources/cambridge-igcse-computer-science-0478-data-storage/) and [Data storage revision notes](/resources/cambridge-igcse-computer-science-0478-data-storage-revision-notes/)

---

## Section A

**1.** State what is meant by primary storage. **[1]**

**2.** State what is meant by the term volatile, and identify which of RAM or ROM is volatile. **[2]**

**3.** Identify **one** example of each of magnetic, optical and solid-state storage. **[3]**

**4.** State the **two** types of gate found in a flash memory cell. **[2]**

**5.** State why secondary storage is needed in a computer. **[1]**

**6.** A tablet has a 256 GiB solid-state drive. Each song is stored as a 4 MiB file. Calculate how many songs the drive could hold, showing your working. **[2]**

## Section B

**7.** Explain why a computer needs both RAM and ROM. **[4]**

**8.** Describe how data is stored on and read from a hard disk drive. **[4]**

**9.** Describe how data is read from an optical disc such as a DVD. **[3]**

**10.** Explain why a Blu-ray disc can store more data than a CD of the same size. **[2]**

**11.** A user opens many large programs and the computer begins to use virtual memory.

**(a)** Describe how virtual memory is used.

**(b)** Explain why the computer becomes slower. **[5]**

**12.** A delivery driver uses a handheld device that is often dropped. The device stores the day's delivery data. Explain why solid-state storage is more suitable than magnetic storage for this device. **[4]**

**13.** A small charity is deciding whether to store its files in the cloud or on a server in its own office. Explain **two** advantages and **two** disadvantages of cloud storage for the charity. **[4]**

**14.** A student says: "Cloud storage means my files are not stored on any physical hardware." Explain why the student is wrong. **[2]**

---

## Answers

**1.** Storage that is directly accessed by the CPU [1].

**2.** Volatile means the contents are lost when the power is switched off [1]; RAM is volatile [1].

**3.** Magnetic: hard disk drive (HDD) [1]; optical: CD, DVD or Blu-ray [1]; solid-state: SSD, SD card or USB drive [1].

**4.** Control gate [1]; floating gate [1].

**5.** It provides more permanent (non-volatile) storage of data and programs, which is kept when the power is off [1].

**6.** 256 × 1024 = 262 144 MiB [1]; 262 144 ÷ 4 = **65 536 songs** [1].

**7.** RAM is volatile, so it is empty when the computer is switched on [1]. ROM is non-volatile, so it can hold the start-up instructions the CPU needs immediately [1]. These instructions load the operating system into RAM [1]. RAM is needed because it can be written to, so it can hold the programs and data in use, which change constantly; ROM is read only [1].

**8.** The platters, coated in magnetic material, spin and are divided into tracks and sectors [1]. A read/write head on an arm moves to the correct track [1]. To store data, an electromagnet in the head magnetises small areas in one of two directions to represent 1 or 0 [1]. To read, the head detects the direction of magnetisation of each area [1].

**9.** A laser shines on the spinning disc's surface [1]. Lands reflect the light back to a sensor, while pits reflect less / scatter it [1]. The changes in reflected light are converted into binary data [1].

**10.** Blu-ray uses a laser with a shorter wavelength (blue-violet) than a CD [1], so the pits can be smaller and the tracks closer together, fitting more data on the same area [1].

**11. (a)** When RAM is full, part of secondary storage is used as virtual memory [1]. Pages of data not currently needed are moved from RAM to virtual memory [1], freeing space in RAM for the active program [1]. When those pages are needed they are moved back into RAM [1].
**(b)** Secondary storage is much slower to access than RAM, so moving pages back and forth takes time [1].

**12.** Solid-state storage has no moving parts [1], so it is less likely to be damaged when the device is dropped [1]. An HDD's read/write head and spinning platters can be damaged by a fall, losing the delivery data [1]. Solid-state storage also uses less power, so the device's battery lasts longer during the day [1].

**13.** Advantages, any two: files can be accessed from any location or device with an internet connection [1]; the provider maintains the hardware and makes backups, so the charity does not need technical staff [1]. Also accept: no need to buy a server; capacity can be increased easily. Disadvantages, any two: files cannot be accessed if the internet connection fails [1]; the data is held by a third party, so there are security and privacy concerns [1]. Also accept: ongoing subscription cost; speed depends on the connection.

**14.** Cloud storage still stores the files on physical servers and storage devices [1], which belong to the cloud provider and are located remotely, for example in a data centre [1].

---

## Where marks are usually lost

- Question 7: saying ROM "stores the operating system" instead of the start-up instructions.
- Question 8: mentioning a laser for an HDD, or leaving out tracks and sectors.
- Question 11: describing virtual memory as storage in the cloud.
- Question 12: answering "SSDs are faster" when the scenario is about being dropped.
- Question 6: dividing by 1000 instead of multiplying by 1024.
- Question 9: describing pits as holes that "let the light through". The laser reflects off the disc; pits reflect less light back to the sensor than lands.
- Question 13: giving advantages and disadvantages that are not linked to the charity, such as "it is good". Each point should say what the charity gains or risks.
- Question 4: naming parts of a hard disk (tracks, sectors) instead of the gates inside a flash memory cell.
