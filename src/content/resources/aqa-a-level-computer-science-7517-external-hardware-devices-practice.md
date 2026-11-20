---
title: "AQA A-Level Computer Science (7517): External Hardware Devices -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
    subtopic: "external-hardware-devices-7517"
description: "Original AQA 7517 section 4.7.4 questions with answers: barcode readers, cameras, laser printers, RFID and the choice of secondary storage."
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
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [External hardware devices study guide](/resources/aqa-a-level-computer-science-7517-external-hardware-devices/) | [External hardware devices revision notes](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-revision-notes/)

Use 1 GB = 1,000 MB and 1 TB = 1,000,000 MB in calculations.

---

## Section A

**1.** State why a computer needs secondary storage as well as main memory. **[2]**

**2.** State what information a barcode on a product contains. **[1]**

**3.** State the four toner colours used in a colour laser printer. **[1]**

**4.** State the difference between a passive RFID tag and an active RFID tag. **[2]**

**5.** State **one** disadvantage of a solid-state disk compared with a hard disk. **[1]**

## Section B

**6.** Describe how a barcode reader turns a printed barcode into data for a till system. **[4]**

**7.** Describe how a digital camera turns light from a scene into a stored image file. **[4]**

**8.** A photograph is 6,000 pixels wide and 4,000 pixels high, with 24 bits for each pixel.

**(a)** Calculate the uncompressed size of the image in megabytes. **[3]**
**(b)** Calculate how many such images, uncompressed, fit on a 1 TB drive, rounding down. **[2]**

**9.** Describe the stages by which a laser printer places an image on paper. **[5]**

**10.** A warehouse is deciding between printed barcodes and RFID tags for tracking boxes on pallets.

**(a)** Give **two** advantages of RFID for this use. **[2]**
**(b)** Give **two** disadvantages of RFID compared with barcodes. **[2]**

**11.** A hard disk spins at 5,400 revolutions per minute.

**(a)** Calculate the time for one revolution, in milliseconds, to two decimal places. **[2]**
**(b)** Calculate the average rotational latency. **[1]**
**(c)** Explain what is meant by seek time, and why it is a separate delay from rotational latency. **[2]**

**12.** Explain how data is stored and read on an optical disk. **[3]**

**13.** Explain why a block of flash memory in an SSD must be erased before its pages can be written again. **[3]**

**14.** A file of 3,000 MB is read from a hard disk at 120 MB per second and from an SSD at 480 MB per second.

**(a)** Calculate the time for each device. **[2]**
**(b)** Give **one** reason why a real transfer from the hard disk might take longer than this calculation suggests. **[1]**

**15.** A company wants to back up 60 GB of data. Compare the use of single-layer DVDs (4.7 GB each), Blu-ray disks (25 GB each) and an external hard disk. Your answer should include the number of disks needed for each type of optical disk and a justified recommendation. **[6]**

---

## Answers

**1.** Main memory is volatile, so contents are lost when the power is off [1]; main memory is limited in size, so secondary storage holds the programs and files permanently and in far greater quantity [1].

**2.** An identifier (a number) for the product; the name and price are held in a database [1].

**3.** Cyan, magenta, yellow and black [1].

**4.** A passive tag has no battery and is powered by the reader's signal [1]; an active tag has its own battery, so it can transmit over a longer range [1].

**5.** Any one from: higher cost per byte; limited number of erase cycles [1].

**6.** A laser (or light) beam is swept across the code [1]; dark bars absorb light and light spaces reflect it [1]; a light sensor (photodiode) detects the reflected pattern and turns it into an electrical signal [1]; the reader converts the bar widths into a number, which the till uses to look up the product and its price in a database [1].

**7.** A lens focuses light on to a sensor (CCD or CMOS) [1]; each light-sensitive cell builds up a charge in proportion to the light that falls on it (colour filters give red, green and blue values) [1]; an analogue-to-digital converter turns each charge into a binary number [1]; the processor compresses the data if required and stores the file in flash memory [1].

**8. (a)** Pixels: 6,000 × 4,000 = 24,000,000 [1]; bytes: 24,000,000 × 3 = 72,000,000 [1]; 72 MB [1].
**(b)** 1,000,000 ÷ 72 [1] = 13,888 images (13,888.9 rounded down) [1].

**9.** The page is converted to a bitmap in the printer's memory [1]; the drum is given an even electrical charge [1]; a laser beam, switched on and off by the bitmap, removes the charge where required to leave an electrostatic image [1]; toner sticks to the image on the drum and is transferred to the paper [1]; the paper passes through a fuser that melts the toner using heat and pressure so it stays on the paper [1].

**10. (a)** Any two from: no line of sight is needed; tags can be read through packaging; many tags can be read at once; tags can be read from a distance [1 each].
**(b)** Any two from: tags cost more than printed labels; metals or liquids can interfere with the signal; privacy or security concerns because tags can be read without anyone noticing; passive tags have a limited range [1 each].

**11. (a)** 60 ÷ 5,400 = 0.01111 s [1]; = 11.11 ms [1].
**(b)** 11.11 ÷ 2 = 5.56 ms [1].
**(c)** Seek time is the time taken to move the read/write head to the correct track [1]; it is a separate delay because the head must reach the track before the disk's rotation can bring the right sector under it (the two actions are different physical movements) [1].

**12.** Data is stored as a pattern of pits and lands on a spiral track [1]; a laser is shone on the track and a sensor detects the changes in reflected light [1]; changes at the edges of pits and lands, and the lengths between them, are decoded as binary 1s and 0s [1].

**13.** Flash memory pages cannot be overwritten directly [1]; a page must be erased before it can be written to [1], and the technology can only erase a whole block, made up of many pages, at once [1].

**14. (a)** Hard disk: 3,000 ÷ 120 = 25 seconds [1]. SSD: 3,000 ÷ 480 = 6.25 seconds [1].
**(b)** The hard disk must first move the head (seek time) and wait for the sector to rotate under it (latency); the file may also be spread over several places on the disk [1].

**15.** DVDs: 60 ÷ 4.7 = 12.8, so 13 disks [1]. Blu-ray: 60 ÷ 25 = 2.4, so 3 disks [1]. An external hard disk holds the whole 60 GB on one device [1]. Optical disks are cheap and portable but slow to write and need several disks handled and labelled, so one disk can be lost or damaged and break the set [1]. A hard disk is faster and simpler to use but can be damaged by knocks, and the data is in one place [1]. A justified recommendation, for example a hard disk for convenience and speed, with a second copy kept off site [1]. (Maximum 6 marks.)

---

## Where marks are usually lost

- Saying the barcode holds the price.
- Describing laser printers as using ink.
- Leaving out the conversion to digital data in a principle-of-operation answer.
- Rounding down the number of disks needed.
- Writing "faster" without saying why (no moving parts, no seek time).
