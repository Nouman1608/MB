---
title: "IB DP Computer Science A.1: Computer Fundamentals -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "Recall notes on IB DP Computer Science A.1 Computer fundamentals: CPU registers, fetch-execute, storage, binary, hex, file sizes and the OS, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the depth and scope of A.1 against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---

Condensed for quick recall of **A.1 Computer fundamentals**, the first sub-topic of Theme A in IB DP
Computer Science, first assessment 2027 (11 hours SL / 18 hours HL). Theme A is examined on Paper 1
with the pre-released case study, so practise applying each point to a scenario. For explanations and
worked examples, use the [A.1 study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/).
The exact learning outcomes are in the full DP guide held by your school.

## Key terms

| Term | Meaning |
|---|---|
| CPU | Central processing unit: fetches, decodes and executes instructions |
| Control unit (CU) | Decodes instructions; sends control signals |
| ALU | Performs arithmetic and logical operations |
| Register | Tiny, very fast storage inside the CPU |
| Program counter (PC) | Holds the address of the next instruction |
| MAR | Memory address register: address to read from or write to |
| MDR | Memory data register: data or instruction being transferred |
| Accumulator | Holds results from the ALU |
| Address / data / control bus | Carry addresses / data / control signals |
| Cache | Small, fast memory near the CPU holding frequently used data |
| RAM | Volatile main memory for programs and data in use |
| ROM | Non-volatile memory holding start-up instructions |
| Virtual memory | Secondary storage used as an extension of RAM |
| Bit / byte | One binary digit / eight bits |
| Colour depth | Bits used per pixel |
| Sample rate / bit depth | Samples per second / bits per sample |
| Operating system | Software that manages hardware and provides services to applications |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--01-cpu-registers-buses.webp" width="900" height="660" alt="The CPU contains the control unit, which decodes instructions and sends control signals, the ALU for arithmetic and logic, and registers: the PC (address of the next instruction), MAR (address being read or written), MDR (data just read or to be written) and the accumulator (ALU results). The control bus carries read and write signals, the address bus carries addresses from the CPU and the data bus carries data both ways." loading="lazy">
  <figcaption>The CU coordinates, the ALU calculates, registers hold what is in use, and buses link the CPU to memory.</figcaption>
</figure>

## Fetch-execute in one line per step

1. **PC → MAR**; read signal; instruction from memory → **MDR**; **PC + 1**.
2. Instruction from MDR → **CU**, which **decodes** it.
3. CU **executes**: data may be fetched via MAR/MDR; **ALU** calculates; result stored (e.g. in the
   accumulator or memory).
4. Repeat. A jump instruction **changes the PC**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--02-fetch-execute.webp" width="900" height="810" alt="Fetch: the address in the PC is copied to the MAR, the CU sends a read signal on the control bus, the instruction travels on the data bus into the MDR, and the PC is incremented. Decode: the instruction passes from the MDR to the CU. Execute: any data address goes to the MAR and the data to the MDR, the ALU calculates, and the result is stored in the accumulator or memory. A jump or branch changes the PC." loading="lazy">
  <figcaption>Say what happens to the PC, MAR and MDR at each stage, not just the stage names.</figcaption>
</figure>

## Storage at a glance

- **Primary:** cache (fastest, smallest), RAM (volatile), ROM (non-volatile).
- **Secondary:** HDD (magnetic, moving parts, cheaper per GB), SSD (flash, no moving parts, faster,
  more robust), optical, USB flash.
- **Why both?** Primary is fast but limited and mostly volatile; secondary is large and permanent but
  slower.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--03-storage.webp" width="900" height="714" alt="Primary storage (cache, RAM and ROM) is accessed directly by the CPU; cache is fastest, and cache and RAM are volatile while ROM is not. Secondary storage (hard disk, SSD, optical disc, USB flash drive) is non-volatile and reached through input/output, so data must be loaded into RAM. When RAM is full, part of secondary storage is used as virtual memory: more programs run, but swapping slows the system." loading="lazy">
  <figcaption>Primary storage serves the CPU directly; virtual memory borrows slower secondary storage when RAM is full.</figcaption>
</figure>

## Data representation: formulas and facts

- Unsigned n-bit range: **0 to 2ⁿ − 1** (8 bits: 0–255).
- One hex digit = **4 bits**; two hex digits = **1 byte**.
- Image size (bits) = **width × height × colour depth**.
- Sound size (bits) = **sample rate × bit depth × channels × seconds**.
- Bytes = bits ÷ **8**.
- ASCII: 7-bit codes (often stored in 8); Unicode: more bits, characters from many languages.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--04-binary-hex-text.webp" width="900" height="714" alt="Place values 8, 4, 2 and 1 show that 1101 in binary is 8 + 4 + 0 + 1 = 13. Eight bits make a byte and hold 256 values, 0 to 255 unsigned. The byte 1011 0110 splits into two groups of four bits, 11 and 6, written in hexadecimal as B6. Text uses numeric codes: ASCII with 7 bits, Unicode with more." loading="lazy">
  <figcaption>Binary places double from right to left; each group of four bits is one hex digit.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--05-images-and-sound.webp" width="900" height="604" alt="A bitmap image is a grid of pixels, each colour stored as a binary number; colour depth is bits per pixel, so 24 bits give about 16.7 million colours, and file size is width × height × colour depth. Sound is sampled: its amplitude is measured at regular intervals, the sample rate is samples per second and the bit depth is bits per sample." loading="lazy">
  <figcaption>More bits per pixel or per sample means a truer copy and a bigger file.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--06-file-size-calculations.webp" width="900" height="788" alt="Image: 1920 × 1080 × 24 = 49,766,400 bits, divided by 8 = 6,220,800 bytes, about 6.2 MB. Sound: 44,100 samples per second × 16 bits × 2 channels × 60 seconds = 84,672,000 bits, divided by 8 = 10,584,000 bytes, about 10.6 MB." loading="lazy">
  <figcaption>Multiply to get bits, then divide by 8 for bytes.</figcaption>
</figure>

## Quick conversions

| Denary | Binary | Hex |
|---|---|---|
| 10 | 1010 | A |
| 15 | 1111 | F |
| 47 | 0010 1111 | 2F |
| 182 | 1011 0110 | B6 |
| 255 | 1111 1111 | FF |

**Method, binary to hex:** split into groups of four from the right, convert each group.
**Method, denary to binary:** repeatedly divide by 2 and read the remainders from last to first.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--07-denary-to-binary-trace.webp" width="900" height="796" alt="A flowchart of the algorithm: set n to 13 and result to empty; while n is greater than 0, find the remainder of n MOD 2, join it to the front of result and set n to n DIV 2; then output result. The trace table shows n going 13, 6, 3, 1, 0 with remainders 1, 0, 1, 1 and result building to &quot;1101&quot;." loading="lazy">
  <figcaption>Remainders joined to the front build 1101, which checks back to 13.</figcaption>
</figure>

## The operating system's jobs

Memory management · process scheduling · device management with drivers · file management ·
security and access rights · user interface. Applications use OS services instead of controlling
hardware directly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--16-operating-system-layer.webp" width="900" height="740" alt="A three-layer stack. Applications sit at the top, hardware (the CPU, primary storage and secondary storage) at the bottom, and the operating system in the middle, joined to both by two-way arrows. The operating system manages hardware resources and mediates between applications and the machine." loading="lazy">
  <figcaption>The operating system manages hardware resources and mediates between applications and the machine.</figcaption>
</figure>

## Applying A.1 to scenarios

| Scenario detail | A.1 concept to apply | Point to make |
|---|---|---|
| A laptop slows when many apps are open | RAM, virtual memory | Swapping to secondary storage is slow; more RAM reduces it |
| A kiosk must start the same program every time it is switched on | ROM | Start-up instructions held in non-volatile memory survive power loss |
| A photo library is filling a phone's storage | Colour depth, resolution | Fewer pixels or lower colour depth reduce file size, at a cost in quality |
| A music app offers "high quality" downloads | Sample rate, bit depth | Higher values copy the sound more closely but make larger files |
| A field laptop is dropped often | SSD vs HDD | No moving parts makes an SSD more robust |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--08-case-study-chain.webp" width="900" height="706" alt="A chain of reasoning for slow school laptops with many browser tabs open: RAM is full, so the operating system moves pages to virtual memory on the SSD; secondary storage is much slower than RAM, so the CPU waits. Adding RAM would reduce swapping." loading="lazy">
  <figcaption>Marks come from linking each concept to the scenario’s details in a chain.</figcaption>
</figure>

## Exam traps

- **Stage names only.** Explain what happens in the PC, MAR, MDR and CU.
- **Forgetting the PC increments** during fetch.
- **ROM as secondary storage.** It is primary storage.
- **Bits vs bytes.** Divide by 8, and show your working.
- **Cache vs virtual memory.** Cache speeds the CPU up; virtual memory lets more programs run but
  slows the system.
- **Generic answers in case-study questions.** Tie each concept to the scenario's details.

## Self-test

1. What does the program counter hold?
2. Which register holds data that has just been read from memory?
3. Which component performs comparisons?
4. What happens to the PC during the fetch stage?
5. Give two differences between RAM and ROM.
6. Why does a computer use cache?
7. When does virtual memory slow a computer down?
8. How many values can 8 bits represent?
9. Convert 1011 0101 to hexadecimal.
10. An image is 800 × 600 pixels with an 8-bit colour depth. What is its size in bytes?
11. Why does Unicode need more bits than ASCII?
12. Give three functions of an operating system.

**Answers:** 1. The address of the next instruction. 2. The MDR. 3. The ALU. 4. It is incremented to
point to the next instruction. 5. Any two: RAM is volatile, ROM is not; RAM can be written to in
normal use, ROM is read-only or rarely changed; RAM holds programs and data in use, ROM holds start-up
instructions. 6. To keep frequently used data and instructions close to the CPU so it waits less for
RAM. 7. When data must be swapped often between RAM and much slower secondary storage. 8. 256.
9. B5. 10. 800 × 600 × 8 = 3,840,000 bits ÷ 8 = 480,000 bytes. 11. It must represent characters from
many writing systems, far more than 128. 12. Any three: memory management, process scheduling,
device management, file management, security, user interface.

## Related pages

- [A.1 Computer fundamentals study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/)
- [A.1 Computer fundamentals practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-practice/)
- [Theme A revision notes](/resources/ib-dp-computer-science-theme-a-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
