---
title: "OxfordAQA IGCSE Computer Science (9210): Systems architecture -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Systems Architecture Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.4.4: Von Neumann architecture, the CPU, buses, fetch-execute cycle, memory and storage, cloud storage and embedded systems."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.4.4 Systems architecture** of OxfordAQA International GCSE Computer Science (9210). It is
the largest section in Topic 4. You must explain the **Von Neumann architecture**; the role and operation of **main
memory**, the **arithmetic logic unit, control unit and clock** of the central processing unit (CPU), and **buses**;
the effect of **clock speed, number of processor cores and cache size** on performance; the **fetch-execute cycle**;
**main memory and secondary storage**, **RAM and ROM**, **volatile and non-volatile**; **solid state, optical and magnetic
storage**; **cloud storage**; and **embedded systems**.

## Von Neumann architecture

The **Von Neumann architecture** is the design on which most computers are built. Its central idea is the **stored
program concept**: the program instructions and the data they work on are both stored, as binary, in the **same main
memory**. The CPU fetches instructions from memory one at a time and carries them out.

The main parts are the **CPU** (with its ALU, control unit and clock), **main memory**, **input and output** devices,
and the **buses** that connect them. Because a program is just data in memory, a computer can be given a different program
simply by loading it into memory, so one machine can do many jobs.

## The central processing unit (CPU)

The **CPU** is the part of the computer that carries out the instructions of a program. The specification names three
major components.

| Component | Role |
|---|---|
| **Arithmetic logic unit (ALU)** | Carries out **arithmetic** (such as add and subtract) and **logic** operations (such as comparing two values) |
| **Control unit** | Controls and coordinates the CPU: it **decodes** each instruction and sends signals to the other parts to make the instruction happen |
| **Clock** | Produces a regular stream of pulses that **synchronises** the operations of the CPU, so that each step happens at the right time |

The CPU also has very fast storage built into it. The specification mentions registers and cache but does not need
you to know individual registers.

### Main memory

**Main memory** is "any form of memory that is directly accessible by the CPU", other than cache and registers. It holds
the programs and data that are being used now, so that the CPU can reach them quickly. In practice this is RAM, and ROM
as well.

### Buses

A **bus** is "a collection of wires through which data is transmitted from one component to another". The three buses
that you should know are:

| Bus | Carries |
|---|---|
| **Data bus** | The data and instructions being moved between the CPU, memory and other devices |
| **Address bus** | The address (location) in memory or the device that the CPU wants to read from or write to |
| **Control bus** | Control signals, such as whether the operation is a read or a write, and timing signals |

## Performance of the CPU

Three factors affect how quickly a CPU can work. You should say what each is and **explain the effect**.

**Clock speed.** The clock speed is the number of clock pulses per second, measured in **hertz** (usually gigahertz,
GHz). A higher clock speed means that the CPU can carry out more steps each second, so it can process more
instructions in a given time and the computer is faster. Very high speeds produce more heat, which limits how far the
clock speed can be raised.

**Number of cores.** A **core** is a processing unit that can carry out the fetch-execute cycle by itself. A processor with
several cores (dual-core, quad-core) can work on more than one instruction stream at once, so it can run several
programs together, or share one task between cores. The gain is greatest when the software is written to use more
than one core. A program that uses only one core will not be much faster on a quad-core processor.

**Cache size.** **Cache** is a small amount of very fast memory in or next to the CPU that holds the instructions and
data used most often. Reading from cache is much faster than reading from main memory, so the CPU spends less time
waiting. A **larger cache** can hold more of what the CPU needs, so it needs to use the slower main memory less often,
which improves performance.

| Factor | Increase it, and... | Why |
|---|---|---|
| Clock speed | The CPU does more steps per second | More pulses per second |
| Cores | More instructions can be carried out at the same time | Each core runs its own instructions |
| Cache size | Less waiting for main memory | More frequently used data is close to the CPU |

## The fetch-execute cycle

The CPU "continually reads instructions stored in main memory and executes them as required". It repeats three stages for
every instruction.

1. **Fetch:** the next instruction is fetched to the CPU from main memory. The address is sent on the address bus, and the
   instruction comes back on the data bus.
2. **Decode:** the control unit works out what the instruction means and what has to be done.
3. **Execute:** the instruction is carried out. This may involve the ALU (for example adding two numbers) and may include
   reading data from main memory or writing data to it.

The CPU then moves on to the next instruction, and the cycle repeats billions of times each second. For example, to
add two numbers that are held in memory, the CPU fetches the "add" instruction, decodes it to see that two values are
needed, fetches the values, and the ALU adds them in the execute stage, writing the answer back to memory.

## Main memory and secondary storage

| | Main memory | Secondary storage |
|---|---|---|
| Access | Directly accessible by the CPU | **Not** directly accessible by the CPU; data must first be copied to main memory |
| Volatility | RAM is volatile | Non-volatile |
| Speed | Fast | Slower |
| Capacity | Smaller | Larger |
| Purpose | Holds the programs and data in use | Holds programs and files permanently |

**Volatile** memory loses its contents when the power is switched off. **Non-volatile** memory keeps its contents without
power. The specification describes secondary storage as "any non-volatile storage mechanism which is not directly
accessible by the CPU".

**Why is secondary storage needed?** Main memory (RAM) is volatile, so data would be lost every time the computer is
switched off, and it has a smaller capacity. Secondary storage keeps programs and files permanently and in large
quantities.

### RAM and ROM

| | RAM (random access memory) | ROM (read only memory) |
|---|---|---|
| Can the contents change? | Yes; it can be read and written | Normally only read |
| Volatile? | Volatile | Non-volatile |
| What it holds | The operating system, programs and data currently in use | Instructions that must always be present, such as the program that starts the computer up |

## Secondary storage technologies

### Magnetic storage

A hard disk drive has one or more spinning **platters** coated with a magnetic material. A read/write head moves across
the surface. To **write**, the head changes the magnetic direction of tiny areas on the surface, which represent 0 and 1. To
**read**, the head senses the direction of the magnetism.

- **Advantages:** low cost for each gigabyte; large capacity.
- **Disadvantages:** slower than solid state; moving parts make it more likely to be damaged by knocks, noisy and more
  power-hungry.

### Optical storage

Optical discs (CD, DVD, Blu-ray) store data as tiny **pits** and flat areas called **lands** along a spiral track. A **laser**
shines on the disc, and the amount of light reflected back is different for a pit and a land, which gives 0 and 1.
Recordable discs use the laser to change a dye layer.

- **Advantages:** discs are cheap and light, and suitable for distributing software and media.
- **Disadvantages:** low capacity compared with the other types; slower; discs scratch easily; a drive is needed.

### Solid state storage

Solid state drives and memory cards use **electrical circuits** (flash memory) to store data persistently. There are **no
moving parts**. You do not need to know the precise details of how the circuits work.

- **Advantages:** very fast access; durable because there are no moving parts; silent; light and low power.
- **Disadvantages:** higher cost per gigabyte than magnetic storage; each memory cell can be rewritten only a limited number of times.

## Cloud storage

**Cloud storage** means saving data on **remote servers**, accessed through the internet. The servers use magnetic and,
increasingly, solid state storage, in a remote location owned by the provider.

| Advantages compared with local storage | Disadvantages compared with local storage |
|---|---|
| Files can be reached from any device and any place with an internet connection | Needs an internet connection; slow or no access when the connection is poor |
| The provider holds extra copies, which helps if a local device is lost or damaged | Costs may be ongoing (a subscription) |
| It is easy to share files and to add more capacity | Security and privacy concerns, as the data is held by another company |
| There is no need to buy and maintain local devices | Access depends on the provider staying in business and working |

## Embedded systems

An **embedded system** is a computer system built into a larger device to carry out a **dedicated** (specific) function.
Its program is usually fixed and stored in ROM, and the user does not normally install other programs. Examples are a
washing machine controller, a microwave, a car's engine management system, a digital thermostat and traffic lights.

A **non-embedded** system is a general-purpose computer, such as a laptop, desktop or smartphone. It can run many
different programs that the user chooses and installs.

| | Embedded system | Non-embedded system |
|---|---|---|
| Purpose | One dedicated function | General purpose |
| Software | Fixed, often in ROM | Many programs, installed by the user |
| User interaction | Limited | Full interface |
| Examples | Washing machine, car engine controller | Laptop, desktop, tablet |

## Common mistakes

- Saying that the CPU "stores" the program. Programs are stored in memory; the CPU **executes** them.
- Confusing the **control unit** (decodes and coordinates) with the **ALU** (calculates and compares).
- Saying that a faster clock **always** gives a faster computer, or that more cores always do. Explain the effect and
  the condition.
- Treating **cache** as the same thing as RAM. Cache is smaller and faster and is in or next to the CPU.
- Mixing up **volatile** and **non-volatile**. RAM is volatile; secondary storage and ROM are not.
- Saying that ROM "cannot be changed" without saying that it is **normally read only**, and that RAM is **read/write**.
- Saying that solid state storage is magnetic or has a spinning disk. It uses electrical circuits and has no moving parts.
- Giving an advantage of cloud storage without a comparison with local storage.
- Saying that a **smartphone** is an embedded system. It is a general-purpose system.

## Exam technique

- **Explain the effect** questions: state the factor, say what changes in the CPU, and say what happens to performance.
- **Fetch-execute**: name the three stages in order and say what happens in each.
- **Compare storage** questions: give an advantage or disadvantage for each type and link it to the use given.
- **Cloud storage** questions: give a point for local storage and the matching point for cloud storage.
- **Embedded** questions: use "dedicated function" and give an example.

## More on this topic

For a condensed summary and a self-test, use the [Systems architecture revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture-revision-notes/), and practise with the
[Systems architecture practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture-practice/).
