---
title: "O Level Computer Science: Hardware (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "computer-architecture-2210"
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "input-and-output-devices-2210"
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "data-storage-2210"
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "network-hardware-2210"
description: "Guide to Topic 3 of Cambridge O Level Computer Science 2210 (2026-2028): the fetch-decode-execute cycle, CPU components, devices, sensors, storage and networks."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-09-02
featured: false
---

Topic 3 Hardware sits in the "Computer systems" half of Cambridge O
Level Computer Science (2210), examined on Paper 1. Cambridge builds
2210 on the same content as Cambridge IGCSE Computer Science (0478) --
the two share identical topic names, order and subject content, so
teachers using IGCSE-endorsed textbooks can use them directly with
this O Level too. This guide covers Topic 3 in full: computer
architecture, input and output devices, data storage, and network
hardware.

## 3.1 Computer architecture -- the fetch-decode-execute cycle

Start with the CPU's job: it processes the instructions and data that
are input into the computer so that a result can be output. A
**microprocessor** is a type of integrated circuit that packages this
processing capability onto a single chip.

For a computer built on **Von Neumann architecture**, you need to know
three families of internal component and how they interact during the
**fetch-decode-execute (FDE) cycle**:

| Category | Components |
|---|---|
| Units | Arithmetic logic unit (ALU), control unit (CU) |
| Registers | Program counter (PC), memory address register (MAR), memory data register (MDR), current instruction register (CIR), accumulator (ACC) |
| Buses | Address bus, data bus, control bus |

The FDE cycle fetches instructions and data from RAM into the CPU,
stores them in the appropriate registers, transmits data, addresses
and signals along the buses, and uses the ALU and CU to fetch, decode
and execute each instruction in turn.

Beyond the cycle itself, examiners can ask about **cores**, **cache**
and **clock speed** and how each affects CPU performance (more cores,
a larger cache and a higher clock speed can all improve it), the
**instruction set** (the fixed list of machine-code commands a CPU can
process), and **embedded systems** -- devices built to perform one
dedicated function (domestic appliances, cars, security systems,
lighting systems, vending machines), in contrast to a general-purpose
computer such as a PC or laptop that runs many different applications.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-hardware--08-cpu-architecture.webp" width="900" height="900" alt="A CPU box holds two units, the control unit (CU) and the arithmetic logic unit (ALU), and five registers: program counter (PC), memory address register (MAR), memory data register (MDR), current instruction register (CIR) and accumulator (ACC). Below, three buses (address bus, data bus and control bus) link the CPU to RAM, which holds instructions and data." loading="lazy">
  <figcaption>The CPU contains the CU, ALU and five registers, and is linked to RAM by the address, data and control buses.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-hardware--09-fetch-decode-execute.webp" width="900" height="854" alt="Three columns follow one example instruction, ADD 5, with the accumulator holding 3. Fetch: the program counter value 0 is copied to the memory address register, the instruction ADD 5 is read from RAM at address 0 into the memory data register and copied to the current instruction register, and the program counter becomes 1. Decode: the control unit decodes the instruction in the current instruction register. Execute: the ALU adds 3 and 5 so the accumulator becomes 8. An arrow loops back to fetch the next instruction. The example is illustrative." loading="lazy">
  <figcaption>One instruction followed through fetch, decode and execute, showing which register holds what.</figcaption>
</figure>


## 3.2 Input and output devices -- know the list, know the context

This sub-topic rewards precise recall of named devices over general
familiarity, since Cambridge limits examinable devices to specific
lists:

**Input**: barcode scanner, digital camera, keyboard, microphone,
optical mouse, QR code scanner, touch screen (resistive, capacitive,
infra-red), 2D and 3D scanners.

**Output**: actuator, digital light processing (DLP) projector, inkjet
printer, laser printer, LED screen, LCD projector, LCD screen, speaker,
3D printer.

**Sensors**, examined separately, are limited to: acoustic,
accelerometer, flow, gas, humidity, infra-red, level, light, magnetic
field, moisture, pH, pressure, proximity and temperature. You need to
understand what a sensor is and its purpose, then identify what data
each named sensor captures and select the most suitable sensor for a
given context -- for example, a moisture sensor in an automated plant
watering system, or a pH sensor in a swimming pool monitoring system.
Scenario questions on this sub-topic are answered well by matching the
sensor to what it physically measures, not by guessing from the
sensor's name alone.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-hardware--13-sensors.webp" width="900" height="880" alt="Two scenes. In an automated plant watering system, a moisture sensor pushed into the soil of a pot reads the moisture in the soil and sends data to a computer. In a swimming pool monitoring system, a pH sensor dipped in the water reads the pH of the water and sends data to a computer. The lesson says to choose the sensor by what it physically measures." loading="lazy">
  <figcaption>Match the sensor to what it physically measures, for example moisture in plant watering and pH in a pool.</figcaption>
</figure>


## 3.3 Data storage

Three storage categories are distinguished here.

**Primary storage** is accessed directly by the CPU: RAM (volatile,
holds data and instructions currently in use) and ROM (non-volatile,
typically holds startup instructions). Know why a computer needs both
and what separates them.

**Secondary storage** is not directly accessed by the CPU and provides
more permanent storage:

| Technology | How it works | Examples |
|---|---|---|
| Magnetic | Platters divided into tracks and sectors; read/written using electromagnets | Hard disk drive (HDD) |
| Optical | Lasers create and read pits and lands | CD, DVD, Blu-ray |
| Solid-state (flash) | NAND/NOR technology; transistors as control and floating gates | SSD, SD card, USB drive |

**Virtual memory** describes how pages of data are transferred between
RAM and virtual memory when needed, and why this is necessary when
physical RAM is insufficient. **Cloud storage** is assessed for both
its advantages (remote access from any location) and disadvantages
(dependence on physical servers and storage hosted elsewhere,
compared with the direct control of storing data locally).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-hardware--10-storage-types.webp" width="900" height="840" alt="Top: the CPU connects directly to primary storage. RAM is volatile and holds data in use; ROM is non-volatile and holds startup instructions. Below: secondary storage is not accessed directly by the CPU, in three technologies. Magnetic: a platter divided into tracks and sectors, for example a hard disk drive. Optical: a laser creates and reads pits and lands, for example CD, DVD and Blu-ray. Solid-state flash: NAND or NOR memory chips with control and floating gates, for example SSD, SD card and USB drive." loading="lazy">
  <figcaption>Primary storage is read directly by the CPU; secondary storage is magnetic, optical or solid-state.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-hardware--11-virtual-memory.webp" width="900" height="830" alt="RAM is drawn as six page slots, P1 to P6, and is full. Virtual memory below holds pages P7 to P9. Page P7 is needed, so an arrow moves it into RAM, and page P4 is unused, so an arrow moves it out to virtual memory. This shows pages being transferred between RAM and virtual memory when physical RAM is not enough." loading="lazy">
  <figcaption>When RAM is not big enough, pages are transferred between RAM and virtual memory as needed.</figcaption>
</figure>


## 3.4 Network hardware

The final sub-topic covers what a device needs to join and be
identified on a network:

- A **network interface card (NIC)** is required to access a network.
- Every NIC carries a **MAC address**, assigned at manufacture, built
  from a manufacturer code and a serial code, and usually written in
  hexadecimal.
- An **IP address** is allocated by the network itself and can be
  static or dynamic; know the characteristics of, and differences
  between, IPv4 and IPv6.
- A **router** directs data to a specific destination on a network,
  can assign IP addresses, and connects a local network to the
  internet.

This sub-topic builds directly on Topic 2 (Data transmission): a
router's role in directing packets connects straight back to the
packet-switching content there, so revise the two together.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-hardware--12-network-hardware.webp" width="900" height="830" alt="A device with a network interface card (NIC) connects to a router, which directs data, can assign IP addresses and connects the local network to the internet. Below, a MAC address is shown in two halves, a manufacturer code and a serial code, fixed on the NIC at manufacture. An IP address is allocated by the network and can be static or dynamic. The example values are illustrative." loading="lazy">
  <figcaption>A NIC with a MAC address joins a network, the network allocates an IP address, and a router links to the internet.</figcaption>
</figure>


## How to approach it

Computer architecture is the single hardest sub-topic to hold in
memory reliably, so practise tracing one instruction through the full
FDE cycle by hand, naming which register or bus is active at each
step, rather than trying to memorise the component list as isolated
facts. For 3.2, make yourself a sensor-to-application table and test
yourself against unfamiliar scenarios, since exam questions reward
matching a sensor to what it measures rather than recognising its
name. Across 3.3 and 3.4, the syllabus repeatedly asks for explicit
comparisons -- RAM vs ROM, primary vs secondary storage, local vs
cloud storage, IPv4 vs IPv6 -- so practise writing short, structured
"difference between" answers for each pair rather than treating them
as separate topics to learn independently.

## Frequently asked questions

**Which paper is Hardware examined on in O Level Computer Science 2210?**
Topic 3 Hardware is in the Computer systems half of the 2210 syllabus and is examined on Paper 1.

**What is a microprocessor?**
A microprocessor is a type of integrated circuit that packages the CPU's processing capability onto a single chip.

**How does solid-state storage work?**
Solid-state (flash) storage uses NAND or NOR technology, with transistors acting as control gates and floating gates. It has no moving parts.

**What comparisons should you prepare for the Hardware topic?**
Prepare short, structured answers on RAM versus ROM, primary versus secondary storage, local versus cloud storage, and IPv4 versus IPv6.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210)
syllabus for examination in 2026, 2027 and 2028* (Version current as
of December 2025): [official syllabus
PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf),
Subject content, section 3 "Hardware". Verified 2026-09-02 -- content
confirmed identical to the equivalent Cambridge IGCSE Computer Science
(0478) section, consistent with Cambridge's own statement that this O
Level shares its subject content with 0478.
