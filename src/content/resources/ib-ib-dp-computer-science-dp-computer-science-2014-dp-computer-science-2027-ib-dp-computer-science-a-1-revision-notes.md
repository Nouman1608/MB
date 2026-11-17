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
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
reviewNeeded: true
reviewNote: "New page written from the IB subject brief and the site's Theme A coverage; please check the depth and scope of A.1 against the full DP Computer Science guide."
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

## Fetch-execute in one line per step

1. **PC → MAR**; read signal; instruction from memory → **MDR**; **PC + 1**.
2. Instruction from MDR → **CU**, which **decodes** it.
3. CU **executes**: data may be fetched via MAR/MDR; **ALU** calculates; result stored (e.g. in the
   accumulator or memory).
4. Repeat. A jump instruction **changes the PC**.

## Storage at a glance

- **Primary:** cache (fastest, smallest), RAM (volatile), ROM (non-volatile).
- **Secondary:** HDD (magnetic, moving parts, cheaper per GB), SSD (flash, no moving parts, faster,
  more robust), optical, USB flash.
- **Why both?** Primary is fast but limited and mostly volatile; secondary is large and permanent but
  slower.

## Data representation: formulas and facts

- Unsigned n-bit range: **0 to 2ⁿ − 1** (8 bits: 0–255).
- One hex digit = **4 bits**; two hex digits = **1 byte**.
- Image size (bits) = **width × height × colour depth**.
- Sound size (bits) = **sample rate × bit depth × channels × seconds**.
- Bytes = bits ÷ **8**.
- ASCII: 7-bit codes (often stored in 8); Unicode: more bits, characters from many languages.

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

## The operating system's jobs

Memory management · process scheduling · device management with drivers · file management ·
security and access rights · user interface. Applications use OS services instead of controlling
hardware directly.

## Applying A.1 to scenarios

| Scenario detail | A.1 concept to apply | Point to make |
|---|---|---|
| A laptop slows when many apps are open | RAM, virtual memory | Swapping to secondary storage is slow; more RAM reduces it |
| A kiosk must start the same program every time it is switched on | ROM | Start-up instructions held in non-volatile memory survive power loss |
| A photo library is filling a phone's storage | Colour depth, resolution | Fewer pixels or lower colour depth reduce file size, at a cost in quality |
| A music app offers "high quality" downloads | Sample rate, bit depth | Higher values copy the sound more closely but make larger files |
| A field laptop is dropped often | SSD vs HDD | No moving parts makes an SSD more robust |

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
