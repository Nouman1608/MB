---
title: "OxfordAQA IGCSE Computer Science (9210): Systems architecture -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Systems Architecture Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4.04
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
  - qualification: "igcse"
    topic: "computer-systems-9210"
    subtopic: "systems-architecture-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.4.4: Von Neumann, CPU, buses, fetch-execute, memory, storage, cloud storage, embedded systems and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.4.4 Systems architecture** of OxfordAQA International GCSE Computer Science (9210).
Explanations are in the [Systems architecture study
guide](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture/).

## What the specification asks

- Explain the **Von Neumann architecture**.
- Explain the role and operation of **main memory**, the **ALU, control unit and clock** of the CPU, and **buses**.
- Explain the effect of **clock speed, number of cores and cache size** on CPU performance.
- Explain the **fetch-execute cycle**.
- **Main memory against secondary storage**; **RAM against ROM**; **volatile and non-volatile**; why secondary storage
  is needed.
- **Solid state, optical and magnetic** storage: operation, advantages and disadvantages.
- **Cloud storage** against local storage.
- **Embedded systems**, with examples of embedded and non-embedded systems.

## Von Neumann architecture

- **Stored program concept:** instructions and data are held together, in binary, in the same main memory.
- The CPU fetches and executes instructions one after another.
- Parts: CPU (ALU, control unit, clock), main memory, input and output devices, buses.

## CPU components

| Component | Role |
|---|---|
| ALU | Arithmetic (add, subtract) and logic (compare) operations |
| Control unit | Decodes instructions and coordinates the other parts with control signals |
| Clock | Regular pulses that synchronise the CPU's operations |

## Memory and buses

- **Main memory:** any memory directly accessible by the CPU (except cache and registers); holds programs and data in use.
- **Bus:** a collection of wires carrying data from one component to another.

| Bus | Carries |
|---|---|
| Data bus | Data and instructions |
| Address bus | The memory address to read or write |
| Control bus | Control signals such as read and write |

## CPU performance

| Factor | Effect of an increase | Condition or limit |
|---|---|---|
| Clock speed (GHz) | More steps per second, so more instructions in a given time | Higher speeds produce more heat |
| Number of cores | More instructions carried out at once; programs can run together | Software must be written to use several cores |
| Cache size | Less waiting for slower main memory | Gains reduce once the useful data fits |

**Cache:** a small, very fast memory in or next to the CPU, holding frequently used instructions and data.

## Fetch-execute cycle

1. **Fetch** the next instruction from main memory to the CPU (address sent on the address bus; instruction returned on
   the data bus).
2. **Decode** it, so that the control unit works out what it means.
3. **Execute** it, which may use the ALU and may read or write main memory.
4. Repeat.

## Main memory against secondary storage

| | Main memory | Secondary storage |
|---|---|---|
| Directly accessible by CPU | Yes | No |
| Volatile | RAM is | No (non-volatile) |
| Speed | Faster | Slower |
| Capacity | Smaller | Larger |

- **Volatile:** loses contents without power. **Non-volatile:** keeps contents without power.
- Secondary storage is needed because RAM is volatile and limited in size.

## RAM and ROM

| | RAM | ROM |
|---|---|---|
| Read and write | Yes | Normally read only |
| Volatile | Yes | No |
| Holds | Programs and data in use | Start-up instructions and other permanent instructions |

## Secondary storage types

| Type | How it works | Advantages | Disadvantages |
|---|---|---|---|
| Magnetic | Read/write head magnetises areas on a spinning platter | Cheap per gigabyte; large capacity | Slower; moving parts; noisy |
| Optical | Laser reads pits and lands (reflection differs) | Cheap discs; good for distribution | Low capacity; slow; scratches |
| Solid state | Electrical circuits (flash) store data with no moving parts | Fast; durable; silent; low power | Costlier per gigabyte; limited rewrites |

## Cloud storage

Data kept on remote servers, accessed over the internet. The servers use magnetic and increasingly solid state storage.

| Advantages | Disadvantages |
|---|---|
| Access from any device or place | Needs an internet connection |
| Provider keeps extra copies | Ongoing cost |
| Easy to share and expand | Security and privacy concerns |
| No local hardware to buy | Depends on the provider |

## Embedded systems

A computer system built into a larger device for a **dedicated function**. Program usually fixed in ROM. Limited user
interaction.

| Embedded | Non-embedded (general purpose) |
|---|---|
| Washing machine controller | Laptop |
| Microwave | Desktop |
| Car engine management | Tablet and smartphone |
| Digital thermostat | Games console |

## Exam traps

- **CPU "stores" programs.** Memory stores them; the CPU executes them.
- **Control unit and ALU confused.** The control unit decodes; the ALU calculates and compares.
- **"More cores is always faster."** It depends on the software.
- **Cache is RAM.** Cache is smaller and faster, in or next to the CPU.
- **Volatile and non-volatile reversed.**
- **ROM "cannot change"** with no mention of RAM being read/write.
- **Solid state described as magnetic.**
- **One-sided cloud answers.** Compare with local storage.
- **Smartphone called embedded.** It is general purpose.

## Key terms

| Term | Meaning |
|---|---|
| CPU | The part of the computer that carries out instructions |
| Core | A processing unit within a CPU |
| Clock speed | The number of clock pulses per second, in hertz |
| Cache | Very fast memory close to the CPU |
| Volatile | Loses its contents when power is off |
| Embedded system | A computer built into a device for a dedicated function |

## Self-test

1. State the stored program concept.
2. State the role of the control unit.
3. State the role of the ALU.
4. Name the three buses.
5. State the three stages of the fetch-execute cycle.
6. Explain how a larger cache can improve performance.
7. State whether RAM is volatile.
8. State one advantage and one disadvantage of magnetic storage.
9. Describe how an optical disc stores data.
10. State one advantage of cloud storage over local storage.
11. State whether a washing machine controller is an embedded system, and why.

**Answers:**
1. Instructions and data are both stored in the same main memory, in binary.
2. It decodes instructions and coordinates the CPU with control signals.
3. It carries out arithmetic and logic operations.
4. Data bus, address bus and control bus.
5. Fetch, decode, execute.
6. Frequently used data is held close to the CPU, so there is less waiting for slower main memory.
7. Yes.
8. Advantage: low cost per gigabyte (or large capacity). Disadvantage: moving parts, slower, noisy.
9. Pits and lands on a track reflect a laser differently, giving 0 and 1.
10. Access from any device with an internet connection (or off-site copies).
11. Yes, because it is built into the machine for a dedicated function.

## More resources on this topic

- [Systems architecture study guide](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture/)
- [Systems architecture practice questions](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture-practice/)
- [Software classification revision notes](/resources/oxfordaqa-igcse-computer-science-9210-software-classification-revision-notes/)
