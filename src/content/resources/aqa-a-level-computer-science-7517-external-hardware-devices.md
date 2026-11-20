---
title: "AQA A-Level Computer Science (7517): External Hardware Devices"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.7.4: barcode readers, digital cameras, laser printers, RFID, and hard disk, optical and solid-state secondary storage."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.7.4 External hardware devices** in AQA A-Level Computer Science (7517). It has two parts. First, **input and output devices**: you must know the main characteristics, purposes and suitability of four devices and understand their principles of operation. The devices named are the **barcode reader, digital camera, laser printer and RFID**. Second, **secondary storage**: you must explain the need for it, know the characteristics, purposes, suitability and principles of operation of the **hard disk, optical disk and solid-state disk (SSD)**, and compare the capacity and speed of access of various media to judge their suitability for different applications.

The wider [computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study-guide/) covers all of section 4.7. This page goes deeper on how each device works and on the comparisons that exam questions ask for.

Condensed notes are in the [external hardware devices revision notes](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-revision-notes/), and exam-style questions are in the [external hardware devices practice questions](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-practice/).

## How to answer "principles of operation" questions

A principle of operation is a short, ordered account of what physically happens, from the real-world input to the digital data (or from the digital data to the real-world output). Use this pattern: **what is sensed or produced, how it is converted, and where the result goes.** Then add a characteristic and a use if the question asks about suitability.

## Barcode reader

**Principle of operation.** A barcode is a pattern of dark bars and light spaces of different widths. A laser (or LED) beam sweeps across the code. Dark bars **absorb** light and light spaces **reflect** it. A light sensor (photodiode) detects the pattern of reflected light and turns it into an electrical signal. The reader's electronics convert the sequence of bar widths into a number, which is sent to the computer.

**Important point.** The barcode holds only an **identifier**. The product name and the price are not in the bars. The computer uses the number to look up a record in a database (in a shop, the stock file), which is why prices can change without changing the label.

**Characteristics and suitability**

- **Fast and accurate** compared with typing a code, so it reduces errors and speeds up queues.
- Cheap labels, simple to print.
- Needs the code to be **visible, undamaged and in line of sight**; a torn or dirty label may not scan.
- Holds a small amount of data and is **read-only** once printed.
- **Uses:** supermarket and shop tills (updating stock levels as each item is sold), library books, parcel tracking, ticket checks.

## Digital camera

**Principle of operation.**

1. A **lens** focuses light from the scene on to a **sensor** (a CCD or CMOS chip).
2. The sensor is a grid of light-sensitive cells, one for each **pixel**. Each cell builds up an electrical charge in proportion to the brightness of the light that hits it.
3. Colour filters over the cells (red, green and blue) let each cell record one colour; the processor combines neighbouring cells to estimate the full colour of each pixel.
4. An **analogue-to-digital converter (ADC)** turns each charge into a binary number.
5. The processor may **compress** the image (for example to JPEG) and stores it on flash memory.

**Characteristics.** The number of pixels (resolution), the **colour depth**, the quality of the lens and sensor, and the storage capacity decide the quality and file size.

**Worked example 1: file size.** An image is 4,000 × 3,000 pixels with 24 bits (3 bytes) per pixel.

- Pixels: 4,000 × 3,000 = 12,000,000.
- Bytes: 12,000,000 × 3 = 36,000,000, which is **36 MB** uncompressed.
- A 32 GB card (32,000 MB) holds 32,000 ÷ 36 = 888 such images (rounding down).
- If compression reduces each file to 9 MB, the card holds 32,000 ÷ 9 = 3,555 images (rounding down).

**Suitability.** Instant results with no film, easy to edit and share. Quality is limited by resolution and by the sensor in poor light. **Uses:** photography, security imaging, document capture, video calls.

## Laser printer

**Principle of operation.**

1. The page to be printed is converted by the printer into a **bitmap** held in its memory (this is done by a raster image processor).
2. A photosensitive **drum** is given an even electrical charge.
3. A **laser beam**, switched on and off by the bitmap, sweeps across the drum. Where the light hits, the charge is removed, leaving an invisible **electrostatic image** of the page.
4. **Toner** (fine powder) is attracted to the parts of the drum that carry the image.
5. The paper is given a charge and passes close to the drum, so the toner transfers to it.
6. The paper passes through a **fuser**: heated rollers melt the toner and press it into the paper.
7. The drum is cleaned and recharged ready for the next page.

Colour laser printers repeat the process with four toners: cyan, magenta, yellow and black.

**Characteristics and suitability**

- **Fast**, with high quality text and graphics, and a **low cost per page** for large print runs.
- A fully formed page is processed at once, so it needs enough memory for the page bitmap.
- Higher purchase cost than a simple inkjet, and time to warm up the fuser.
- Toner can be harmful to breathe, so ventilation matters in large offices.
- **Uses:** offices, schools and any setting printing many pages of text.

## RFID (radio-frequency identification)

**Principle of operation.** An RFID system has a **tag** (a small chip with an antenna that holds a unique identifier) and a **reader** (which has an antenna and sends out radio waves).

1. The reader transmits a radio signal.
2. In a **passive tag** (no battery) the signal induces a small current in the tag's antenna. This gives the chip enough power to respond.
3. The tag broadcasts its stored identifier back to the reader.
4. The reader passes the identifier to a computer, which looks it up in a database.

**Active tags** have their own battery, so they can transmit further.

**Characteristics and suitability**

- **No line of sight** is needed. Tags can be read through packaging, and **many tags can be read at once**.
- Tags can be small and can store more than a printed barcode.
- Tags and readers cost more than printed barcodes. Range is limited for passive tags. Metal and liquids can interfere.
- **Privacy concerns:** a tag may be read without the owner knowing.
- **Uses:** contactless payment and travel cards, warehouse stock tracking, access cards, pet and livestock identification, electronic passports.

**Barcode versus RFID.** A barcode needs a clear view and is read one at a time. RFID can read many items through packaging at once, but each tag costs more.

## Why secondary storage is needed

Main memory (RAM) is **volatile**, so it loses its contents when the power is off. It is also **limited in size** and costly for each byte. A computer therefore needs **non-volatile secondary storage** to keep the operating system, programs and users' files when switched off, and to hold far more data than main memory can. The processor cannot execute directly from secondary storage: programs are first loaded into main memory.

## Hard disk

**Principle of operation.** A hard disk drive contains one or more **platters** coated with magnetic material and spinning at a constant speed (commonly 5,400 or 7,200 revolutions per minute). **Read/write heads** on a moving arm float just above each surface. Data is stored by magnetising very small areas in one of two directions, which represent 0 and 1, arranged in circular **tracks** divided into **sectors**. To write, the head's magnetic field sets the direction; to read, the head senses the direction of the magnetisation.

**Access time** has two main parts: **seek time** (moving the arm to the right track) and **rotational latency** (waiting for the right sector to arrive under the head).

**Worked example 2: rotational latency.** At 7,200 rpm one revolution takes 60 ÷ 7,200 = 0.00833 s = **8.33 ms**. On average the sector is half a turn away, so the average rotational latency is 8.33 ÷ 2 = **4.17 ms**. If the average seek time is 9 ms, the average access time is about 9 + 4.17 = **13.17 ms**.

**Characteristics.** Very large capacity at low cost per byte. Moving parts make it slower, noisier, heavier and more easily damaged by knocks than an SSD. **Uses:** desktop and server storage, backup, large media libraries.

## Optical disk

**Principle of operation.** Data is stored on a single spiral track as a pattern of **pits** (hollows) and **lands** (flat areas) in a reflective layer. A **laser** shines on the track and a sensor reads the reflected light: the change at the edge of a pit or land is read as a 1 and an unchanged length as 0s. Writeable disks use a dye or a phase-change layer that the laser can alter; rewriteable disks can be returned to their original state. CD, DVD and Blu-ray use lasers of shorter and shorter wavelength, which makes the tracks narrower and the capacity larger (about 700 MB, 4.7 GB and 25 GB for a single layer).

**Characteristics.** Cheap, light and portable, and the disks can be posted or stored for long periods. Capacity is low and speed is slower than hard disks or SSDs, and surfaces can scratch. **Uses:** distributing software, films and music; archives.

**Worked example 3: how many disks?** A 100 GB backup is written to single-layer DVDs of 4.7 GB. 100 ÷ 4.7 = 21.3, so **22 disks** are needed (round up). Blu-ray disks of 25 GB need 100 ÷ 25 = 4.

## Solid-state disk (SSD)

**Principle of operation.** An SSD contains **NAND flash memory** and a **controller**. Each cell is a **floating-gate transistor** that traps and stores electrical charge; the amount of charge held represents the stored bits. There are no moving parts.

Flash memory is arranged in **pages**, which are grouped into **blocks**. A page cannot be overwritten directly: it must be **erased before it can be written to**, and the technology only allows a **whole block to be erased** at once. The controller therefore hides this complexity: it manages pages and blocks, moves valid data when a block must be erased, and spreads writes across the chip so that no cell wears out early.

**Characteristics.** Much **lower latency** and **faster transfer speeds** than a magnetic disk. Silent, light, low power, and more resistant to shock. Higher cost per byte than a hard disk, and each cell can survive only a limited number of erase cycles. **Uses:** laptops and phones, boot drives, databases that need fast access.

## Comparing the media

| Feature | Hard disk | Optical disk | SSD |
|---|---|---|---|
| Typical capacity | Several terabytes | 0.7 to 25 GB per layer | Hundreds of GB to several TB |
| Speed of access | Moderate (milliseconds) | Slowest | Fastest (very low latency) |
| Moving parts | Yes | Yes (in the drive) | No |
| Cost per byte | Low | Low per disk | Higher |
| Robustness | Can be damaged by shocks | Scratches | Good |
| Best suited to | Bulk storage, backups | Distribution, archives | Fast, portable devices |

When asked to **make a judgement**, name the application's priority (capacity, speed, cost, portability or robustness) and match the medium to it with a reason.

## Common mistakes

- Saying a barcode **contains the price**. It holds an identifier that is looked up.
- Saying RFID needs a **battery** in every tag. Passive tags do not.
- Describing the laser printer as spraying ink. It uses toner fused by heat.
- Forgetting the step that **converts to digital** in the camera or barcode reader.
- Saying SSDs have no limit on writes, or that they "overwrite" pages directly.
- Giving capacity or speed figures with no units or with no comparison.

## Exam technique

- For **principle of operation**, write numbered steps in the right order.
- For **suitability**, give a reason tied to the scenario, not just "it is faster".
- For **comparison**, use a feature for each device in the same sentence.
- For **calculations**, show the unit conversions and round the right way (up for disks needed, down for files that fit).

## Related resources

- [External hardware devices revision notes](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-revision-notes/)
- [External hardware devices practice questions](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-practice/)
- [Internal hardware components study guide](/resources/aqa-a-level-computer-science-7517-internal-hardware-components/)

*Written against the AQA A-level Computer Science (7517) specification, 4.7.4 External hardware devices. Always check the current specification on the AQA website.*
