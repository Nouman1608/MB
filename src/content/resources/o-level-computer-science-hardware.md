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
description: "The fetch-decode-execute cycle and CPU components, named input/output devices and sensors, primary/secondary/cloud storage, and network hardware -- the full content of Topic 3 for Cambridge O Level Computer Science 2210, 2026-2028 series."
author: "marlbridge-academic-team"
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

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210)
syllabus for examination in 2026, 2027 and 2028* (Version current as
of December 2025): [official syllabus
PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf),
Subject content, section 3 "Hardware". Verified 2026-09-02 -- content
confirmed identical to the equivalent Cambridge IGCSE Computer Science
(0478) section, consistent with Cambridge's own statement that this O
Level shares its subject content with 0478.
