---
title: "AQA A-Level Computer Science (7517): External Hardware Devices -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.7.4 recall: barcode reader, digital camera, laser printer, RFID, hard disk, optical disk and SSD, with a comparison table and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.7.4 External hardware devices**, AQA A-Level Computer Science (7517): characteristics, purposes, suitability and principles of operation of the **barcode reader, digital camera, laser printer and RFID**, and of **hard disk, optical disk and solid-state disk (SSD)** storage. Full explanations and worked examples are in the [external hardware devices study guide](/resources/aqa-a-level-computer-science-7517-external-hardware-devices/); questions are in the [external hardware devices practice questions](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-practice/).

## Input and output devices

### Barcode reader

1. A laser sweeps across the bars.
2. Dark bars absorb light; light spaces reflect it.
3. A photodiode detects the reflected pattern as an electrical signal.
4. The reader converts the bar widths to a number.
5. The computer looks the number up in a database (product and price).

**Points:** the code holds an identifier only. Fast, accurate, cheap. Needs line of sight and an undamaged label. Used at tills, in libraries, in parcel tracking.

### Digital camera

1. A lens focuses light on a CCD or CMOS sensor.
2. Each cell (pixel) builds up a charge in proportion to brightness; colour filters give red, green and blue.
3. An analogue-to-digital converter turns each charge into a binary number.
4. The image is usually compressed (for example JPEG) and stored on flash memory.

**Size check:** 4,000 × 3,000 pixels at 24 bits = 12,000,000 × 3 bytes = 36 MB uncompressed.

### Laser printer

1. The page is converted to a bitmap.
2. The drum is evenly charged.
3. A laser removes the charge where the page is to be dark (or light, depending on the design), forming an electrostatic image.
4. Toner sticks to the image on the drum.
5. The toner is transferred to charged paper.
6. A fuser melts the toner with heat and pressure.
7. The drum is cleaned and recharged.

**Points:** fast, high quality, low cost per page for large runs, but a higher purchase cost. Colour uses cyan, magenta, yellow and black toner.

### RFID

1. A reader sends radio waves.
2. A passive tag's antenna picks up the energy, which powers its chip.
3. The tag sends back its identifier.
4. The reader passes it to a computer for look-up.

**Points:** no line of sight; many tags at once; read through packaging. Passive tags have no battery and a short range; active tags have a battery. Costlier than barcodes and raises privacy concerns. Used in contactless payment, stock tracking, access cards, pets and livestock.

## Why secondary storage is needed

Main memory is **volatile** and **limited**. Secondary storage is **non-volatile** and much larger, so it keeps the operating system, programs and files when the power is off. Programs must be loaded into main memory to run.

## Storage devices

| | Hard disk | Optical disk | SSD |
|---|---|---|---|
| Principle | Magnetised areas on spinning platters, read by moving heads | Laser reads pits and lands on a spiral track | NAND flash of floating-gate transistors trapping charge, with a controller |
| Moving parts | Yes | Yes | No |
| Capacity | Several TB | 0.7 GB (CD), 4.7 GB (DVD), 25 GB (Blu-ray) per layer | Hundreds of GB to several TB |
| Speed | Moderate | Slowest | Fastest, lowest latency |
| Cost per byte | Low | Low per disk | Higher |
| Weakness | Fragile, noisy | Scratches, small | Limited erase cycles, cost |
| Uses | Bulk storage, backup | Distribution, archive | Laptops, phones, boot drives |

## Hard disk timing

- **Access time** = seek time + rotational latency.
- One revolution at 7,200 rpm = 60 ÷ 7,200 s = 8.33 ms; average latency = half = 4.17 ms.
- With a 9 ms average seek, access time is about 13.17 ms.

## SSD detail

- Flash is organised in **pages** grouped into **blocks**.
- A page **cannot be overwritten**: it must be erased before it is written.
- Erasing can only be done on a **whole block**.
- The controller manages pages and blocks and spreads wear across the chip.
- Lower latency and faster transfer than a magnetic disk.

## Choosing a medium

State the priority, then match it with a reason:

- Fast start-up and low power in a laptop: **SSD**.
- Cheap bulk storage for a server's backup: **hard disk**.
- Posting a program to many customers: **optical disk**.
- Holding a record of customer data that must survive power loss: any **secondary** medium, not RAM.

## Key terms

| Term | Definition |
|---|---|
| Secondary storage | Non-volatile storage used to keep programs and data when the power is off |
| Volatile | Loses its contents when the power is removed |
| Seek time | Time taken to move the read/write head to the right track |
| Rotational latency | Time for the right sector to rotate under the head |
| Pit and land | The hollows and flat areas that encode data on an optical disk |
| Floating-gate transistor | A transistor that traps charge to store a bit in flash memory |
| Toner | Fine powder fused on to paper by a laser printer |
| Passive tag | An RFID tag powered by the reader's signal |
| Resolution | The number of pixels in an image |
| Latency | The delay before data starts to be transferred |

## Exam traps

- **A barcode holds an identifier, not the price.**
- **A passive RFID tag has no battery.**
- **A laser printer uses toner, a drum and a fuser**, not ink.
- **SSD pages cannot be overwritten directly**; blocks are erased.
- **Round the right way:** up for the number of disks needed.
- **Always compare** like with like (capacity with capacity, speed with speed).

## Self-test

1. What does a barcode actually store?
2. What does the photodiode in a barcode reader detect?
3. Give one advantage of RFID over a barcode.
4. What converts the charge in a camera sensor to binary?
5. Which part of a laser printer melts toner on to paper?
6. State two reasons a computer needs secondary storage.
7. Calculate the average rotational latency at 7,200 rpm.
8. What is stored in a pit or land on an optical disk?
9. What is the controller's job in an SSD?
10. Why is an SSD faster to access than a hard disk?
11. How many 4.7 GB DVDs are needed for 60 GB?
12. Give one disadvantage of an SSD compared with a hard disk.

**Answers**

1. An identifier (a number) that is looked up in a database.
2. The light reflected from the bars and spaces.
3. Any one of: no line of sight; reads many tags at once; reads through packaging.
4. An analogue-to-digital converter.
5. The fuser.
6. Main memory is volatile; main memory is limited in size (so secondary storage keeps programs and files, and holds more).
7. About 4.17 ms.
8. The pattern of pits and lands encodes the binary data, read by changes in reflected laser light.
9. To manage pages and blocks, including erasing and spreading wear.
10. No moving parts, so there is no seek time or rotational delay.
11. 60 ÷ 4.7 = 12.8, so 13.
12. Any one of: higher cost per byte; limited number of erase cycles.

## Related resources

- [External hardware devices study guide](/resources/aqa-a-level-computer-science-7517-external-hardware-devices/)
- [External hardware devices practice questions](/resources/aqa-a-level-computer-science-7517-external-hardware-devices-practice/)
- [Internal hardware components revision notes](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes/)
