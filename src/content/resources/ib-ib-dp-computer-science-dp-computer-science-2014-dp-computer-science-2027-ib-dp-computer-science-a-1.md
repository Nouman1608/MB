---
title: "IB DP Computer Science A.1: Computer Fundamentals"
resourceType: "study-guides"
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
description: "Study guide to A.1 Computer fundamentals in IB DP Computer Science (first assessment 2027): the CPU, the fetch-execute cycle, storage, binary data and the OS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the depth and scope of A.1 against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---

**A.1 Computer fundamentals is the first sub-topic of Theme A, "Concepts of computer science", in
the IB Diploma Programme Computer Science course first assessed in 2027.** It asks how a computer
actually works: the parts of the processor, how an instruction is fetched and executed, where data
and programs are stored, how every kind of data becomes binary, and what the operating system does.
The subject brief gives it 11 teaching hours at SL and 18 at HL, and Theme A is examined on Paper 1
together with the pre-released case study.

> **Scope of this page.** This page is written from the IB's public *Diploma Programme Subject Brief,
> Sciences: Computer science, first assessment 2027* (© International Baccalaureate Organization 2024)
> and the A.1 content summarised in our [Theme A study guide](/resources/ib-dp-computer-science-theme-a/).
> The detailed learning outcomes, including any HL-only extensions, are in the full DP Computer
> Science guide, available to IB schools through the Programme Resource Centre. Check your school's
> copy for the exact content and depth.

## What does A.1 cover?

- **The hardware layer:** the CPU and its components (control unit, arithmetic logic unit,
  registers); the fetch-execute cycle; primary and secondary storage.
- **Data representation:** how numbers, text, images and sound are represented in binary, and the
  units used to measure data (bits and bytes).
- **The operating system:** how it manages hardware resources and acts between applications and the
  machine.

## What are the components of the CPU?

| Component | Role |
|---|---|
| Control unit (CU) | Decodes instructions and sends control signals that coordinate the other components and the movement of data |
| Arithmetic logic unit (ALU) | Carries out arithmetic (addition, subtraction) and logical operations (comparisons, AND, OR, NOT) |
| Registers | Very small, very fast storage locations inside the CPU that hold the data, addresses and instructions currently in use |

Registers you should be able to describe include the **program counter (PC)**, which holds the
address of the next instruction; the **memory address register (MAR)**, which holds the address being
read from or written to; the **memory data register (MDR)**, which holds the data or instruction just
read or about to be written; and an **accumulator**, which holds results from the ALU. The CPU is
connected to memory by **buses**: the address bus carries addresses from the CPU, the data bus carries
data in both directions, and the control bus carries signals such as "read" and "write".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--01-cpu-registers-buses.webp" width="900" height="660" alt="The CPU contains the control unit, which decodes instructions and sends control signals, the ALU for arithmetic and logic, and registers: the PC (address of the next instruction), MAR (address being read or written), MDR (data just read or to be written) and the accumulator (ALU results). The control bus carries read and write signals, the address bus carries addresses from the CPU and the data bus carries data both ways." loading="lazy">
  <figcaption>The CU coordinates, the ALU calculates, registers hold what is in use, and buses link the CPU to memory.</figcaption>
</figure>

## What happens in the fetch-execute cycle?

The CPU repeats the same cycle billions of times a second. An answer that earns credit says what
happens to data at each stage, not only the stage names:

1. **Fetch.** The address in the PC is copied to the MAR. The CU sends a read signal on the control
   bus; the instruction stored at that address travels along the data bus into the MDR. The PC is
   incremented so that it points to the next instruction.
2. **Decode.** The instruction is passed from the MDR to the CU, which works out what operation it
   specifies and what data it needs.
3. **Execute.** The CU sends signals to carry out the operation. If data must be loaded, its address
   goes to the MAR and the data arrives in the MDR; the ALU performs any calculation and the result is
   stored, for example in the accumulator or written back to memory.

A **jump** or **branch** instruction changes the PC during execution, which is how selection and
loops in a program become different paths through memory.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--02-fetch-execute.webp" width="900" height="810" alt="Fetch: the address in the PC is copied to the MAR, the CU sends a read signal on the control bus, the instruction travels on the data bus into the MDR, and the PC is incremented. Decode: the instruction passes from the MDR to the CU. Execute: any data address goes to the MAR and the data to the MDR, the ALU calculates, and the result is stored in the accumulator or memory. A jump or branch changes the PC." loading="lazy">
  <figcaption>Say what happens to the PC, MAR and MDR at each stage, not just the stage names.</figcaption>
</figure>

## How do primary and secondary storage differ?

| | Primary storage | Secondary storage |
|---|---|---|
| Examples | RAM, cache, ROM | Hard disk drive, solid-state drive, optical disc, USB flash drive |
| Access | Directly by the CPU | Through input/output; data must be loaded into RAM first |
| Speed | Fast (cache fastest) | Slower |
| Volatility | RAM and cache are volatile; ROM is not | Non-volatile |
| Purpose | Programs and data currently in use; ROM holds start-up instructions | Long-term storage of files and programs |

**Cache** is small, very fast memory close to the CPU that keeps copies of frequently used
instructions and data, so the CPU waits less for RAM. When RAM is full, the operating system can use
part of secondary storage as **virtual memory**, which lets more programs run but slows the system
when data must be swapped in and out.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--03-storage.webp" width="900" height="714" alt="Primary storage (cache, RAM and ROM) is accessed directly by the CPU; cache is fastest, and cache and RAM are volatile while ROM is not. Secondary storage (hard disk, SSD, optical disc, USB flash drive) is non-volatile and reached through input/output, so data must be loaded into RAM. When RAM is full, part of secondary storage is used as virtual memory: more programs run, but swapping slows the system." loading="lazy">
  <figcaption>Primary storage serves the CPU directly; virtual memory borrows slower secondary storage when RAM is full.</figcaption>
</figure>

## How is data represented in binary?

Everything stored or processed is a pattern of **bits** (binary digits, 0 or 1). Eight bits make a
**byte**. Larger units are multiples: a kilobyte is 1000 bytes, a kibibyte 1024; check which
convention your course uses.

**Integers.** Each binary place is a power of 2. 1101 in binary is 8 + 4 + 0 + 1 = 13. Eight bits
can hold 2⁸ = 256 different values, 0 to 255 when unsigned. **Hexadecimal** (base 16, digits 0–9
and A–F) is a compact way to write binary: each hex digit stands for four bits, so 1011 0110 is B6.

**Text.** Each character is given a numeric code. ASCII uses 7 bits (often stored in 8), enough for
English letters, digits and symbols; **Unicode** uses more bits so that it can represent characters
from writing systems across the world.

**Images.** A bitmap image is a grid of **pixels**; each pixel's colour is stored as a binary number.
The **colour depth** is the number of bits per pixel: 24 bits allow 2²⁴, about 16.7 million, colours.
File size (before compression) = width × height × colour depth.

**Sound.** Sound is **sampled**: its amplitude is measured at regular intervals. The **sample rate**
is samples per second; the **bit depth** is bits per sample. Higher values give a closer copy of the
original sound and a larger file.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--04-binary-hex-text.webp" width="900" height="714" alt="Place values 8, 4, 2 and 1 show that 1101 in binary is 8 + 4 + 0 + 1 = 13. Eight bits make a byte and hold 256 values, 0 to 255 unsigned. The byte 1011 0110 splits into two groups of four bits, 11 and 6, written in hexadecimal as B6. Text uses numeric codes: ASCII with 7 bits, Unicode with more." loading="lazy">
  <figcaption>Binary places double from right to left; each group of four bits is one hex digit.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--05-images-and-sound.webp" width="900" height="604" alt="A bitmap image is a grid of pixels, each colour stored as a binary number; colour depth is bits per pixel, so 24 bits give about 16.7 million colours, and file size is width × height × colour depth. Sound is sampled: its amplitude is measured at regular intervals, the sample rate is samples per second and the bit depth is bits per sample." loading="lazy">
  <figcaption>More bits per pixel or per sample means a truer copy and a bigger file.</figcaption>
</figure>

## Worked example 1: calculating file sizes

**An image** is 1920 × 1080 pixels with a colour depth of 24 bits.
- Bits = 1920 × 1080 × 24 = 49,766,400 bits.
- Bytes = 49,766,400 ÷ 8 = 6,220,800 bytes, about 6.2 MB.

**A sound** is recorded for 60 seconds in stereo (2 channels) at 44,100 samples per second with a
bit depth of 16.
- Bits = 44,100 × 16 × 2 × 60 = 84,672,000 bits.
- Bytes = 84,672,000 ÷ 8 = 10,584,000 bytes, about 10.6 MB.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--06-file-size-calculations.webp" width="900" height="788" alt="Image: 1920 × 1080 × 24 = 49,766,400 bits, divided by 8 = 6,220,800 bytes, about 6.2 MB. Sound: 44,100 samples per second × 16 bits × 2 channels × 60 seconds = 84,672,000 bits, divided by 8 = 10,584,000 bytes, about 10.6 MB." loading="lazy">
  <figcaption>Multiply to get bits, then divide by 8 for bytes.</figcaption>
</figure>

## Worked example 2: an algorithm for denary to binary

```
n <- 13
result <- ""
WHILE n > 0
    remainder <- n MOD 2
    result <- remainder + result      // join the digit to the front
    n <- n DIV 2
ENDWHILE
OUTPUT result
```

| n (start of loop) | remainder | result | n (end of loop) |
|---|---|---|---|
| 13 | 1 | "1" | 6 |
| 6 | 0 | "01" | 3 |
| 3 | 1 | "101" | 1 |
| 1 | 1 | "1101" | 0 |

The loop stops when n is 0, and the output is **1101**, which checks back to 8 + 4 + 1 = 13.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--07-denary-to-binary-trace.webp" width="900" height="796" alt="A flowchart of the algorithm: set n to 13 and result to empty; while n is greater than 0, find the remainder of n MOD 2, join it to the front of result and set n to n DIV 2; then output result. The trace table shows n going 13, 6, 3, 1, 0 with remainders 1, 0, 1, 1 and result building to &quot;1101&quot;." loading="lazy">
  <figcaption>Remainders joined to the front build 1101, which checks back to 13.</figcaption>
</figure>

## What does the operating system do?

The operating system (OS) sits between applications and hardware. Its main roles:

- **Memory management:** allocating RAM to programs, keeping them apart, and using virtual memory.
- **Process management:** scheduling which program runs on the CPU and when, so several appear to run
  at once.
- **Device management:** communicating with peripherals through drivers.
- **File management:** organising data on secondary storage into files and folders, with permissions.
- **Security:** user accounts, passwords and access rights.
- **User interface:** a graphical or command-line interface through which users run programs.

Applications request services from the OS instead of controlling hardware directly, so the same
program can run on different hardware.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--16-operating-system-layer.webp" width="900" height="740" alt="A three-layer stack. Applications sit at the top, hardware (the CPU, primary storage and secondary storage) at the bottom, and the operating system in the middle, joined to both by two-way arrows. The operating system manages hardware resources and mediates between applications and the machine." loading="lazy">
  <figcaption>The operating system manages hardware resources and mediates between applications and the machine.</figcaption>
</figure>

## Applying A.1 to a case-study scenario

Paper 1 often sets Theme A content inside a scenario. Suppose a school's laptops are slow when many
browser tabs are open. A strong answer applies A.1 precisely: RAM is full, so the OS moves pages to
virtual memory on the SSD; because secondary storage is much slower than RAM, the CPU waits, so
adding RAM would reduce swapping. Naming the concepts and linking them to the details given is what
earns marks.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1--08-case-study-chain.webp" width="900" height="706" alt="A chain of reasoning for slow school laptops with many browser tabs open: RAM is full, so the operating system moves pages to virtual memory on the SSD; secondary storage is much slower than RAM, so the CPU waits. Adding RAM would reduce swapping." loading="lazy">
  <figcaption>Marks come from linking each concept to the scenario’s details in a chain.</figcaption>
</figure>

## Common mistakes

- Naming the stages of the fetch-execute cycle without saying what the PC, MAR and MDR do.
- Saying ROM is "secondary storage": it is primary storage that the CPU can access directly.
- Forgetting to divide by 8 when converting bits to bytes.
- Describing the OS only as "the user interface".
- Confusing cache (fast memory near the CPU) with virtual memory (secondary storage used as RAM).

## Frequently asked questions

**How many hours is A.1?**
The subject brief recommends 11 hours at SL and 18 at HL.

**Which paper examines A.1?**
Paper 1, which is set on Theme A together with the pre-released case study.

**Do I need to write code for A.1?**
Theme A is mostly explanation and application; short algorithms such as number conversion are useful
practice, but programming is assessed mainly through Theme B.

## Related pages

- [A.1 Computer fundamentals revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-revision-notes/)
- [A.1 Computer fundamentals practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-practice/)
- [A.2 Networks study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-2/)
- [Theme A study guide](/resources/ib-dp-computer-science-theme-a/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
