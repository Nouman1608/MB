---
title: "IGCSE Computer Science: Hardware (Cambridge 0478)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
description: "Computer architecture and the fetch-decode-execute cycle, input/output devices and sensors, primary/secondary/cloud storage, and network hardware -- the full content of Topic 3 for Cambridge IGCSE Computer Science 0478, 2026-2028 series."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Topic 3 of Cambridge IGCSE Computer Science (0478) is Hardware --
the physical components that make computing possible. It sits in the
"Computer systems" half of the syllabus (Topics 1-6), examined on
Paper 1, and is one of the largest topics in the course with four
sub-topics: computer architecture, input and output devices, data
storage, and network hardware.

## 3.1 Computer architecture

This sub-topic covers what happens inside the CPU. You need to
understand the role of the central processing unit -- processing
instructions and data that are input into the computer so a result can
be output -- and what is meant by a microprocessor (a type of
integrated circuit on a single chip).

For a computer with **Von Neumann architecture**, you must know the
purpose of each internal component and be able to describe the
**fetch-decode-execute (FDE) cycle**:

- **Units**: the arithmetic logic unit (ALU) and the control unit (CU)
- **Registers**: the program counter (PC), memory address register
  (MAR), memory data register (MDR), current instruction register
  (CIR) and accumulator (ACC)
- **Buses**: the address bus, data bus and control bus, which transmit
  data, addresses and signals between components

The FDE cycle itself describes how instructions and data are fetched
from RAM into the CPU, processed by these components, and then
executed -- data and addresses are stored into specific registers, and
buses carry information between them.

Beyond the cycle itself, you need to understand what is meant by a
**core**, **cache** and **clock** in a CPU, and how each affects
performance (more cores, a larger cache and a faster clock speed can
all improve performance), the purpose of an **instruction set** (the
list of commands a CPU can process, given in machine code), and the
purpose and characteristics of an **embedded system** -- a system
built to perform one dedicated function (for example in domestic
appliances, cars, security systems, lighting systems or vending
machines), as distinct from a general-purpose computer such as a PC or
laptop that runs many different functions.

## 3.2 Input and output devices

This sub-topic is largely a named list you need to recognise and be
able to select appropriately for a given scenario, plus an
understanding of sensors as a distinct category.

**Input devices** named in the syllabus include: barcode scanner,
digital camera, keyboard, microphone, optical mouse, QR code scanner,
touch screen (resistive, capacitive and infra-red), and 2D and 3D
scanners.

**Output devices** named in the syllabus include: actuator, digital
light processing (DLP) projector, inkjet printer, laser printer, LED
screen, LCD projector, LCD screen, speaker and 3D printer.

**Sensors** are treated separately: you need to understand what a
sensor is and its purpose, then identify what type of data each named
sensor captures and when it would be used. The named sensors are:
acoustic, accelerometer, flow, gas, humidity, infra-red, level, light,
magnetic field, moisture, pH, pressure, proximity and temperature.
Exam questions commonly present a real-world scenario (a greenhouse, a
security system, a car) and ask you to select and justify the most
suitable sensor -- this requires knowing what each sensor actually
measures, not just its name.

## 3.3 Data storage

This sub-topic separates storage into primary, secondary and cloud
categories.

**Primary storage** is directly accessed by the CPU and includes
random access memory (RAM) and read only memory (ROM). You need to
understand why a computer needs both, and the difference between them
(RAM is volatile and holds data/instructions currently in use; ROM is
non-volatile and typically holds the startup instructions).

**Secondary storage** is not directly accessed by the CPU and is used
for more permanent data storage. Three technologies are named:

- **Magnetic storage** -- uses platters divided into tracks and
  sectors, with data read and written using electromagnets (hard disk
  drive, HDD)
- **Optical storage** -- uses lasers to create and read pits and lands
  (CD, DVD, Blu-ray)
- **Solid-state (flash memory)** -- uses NAND or NOR technology with
  transistors as control gates and floating gates (SSD, SD card, USB
  drive)

You also need to describe **virtual memory** -- how pages of data are
transferred between RAM and virtual memory when needed, and why this
is necessary -- and **cloud storage**, including its advantages and
disadvantages compared with storing data locally (remote accessibility
versus the need for physical servers and storage to host it).

## 3.4 Network hardware

The final sub-topic covers the hardware and addressing that make
networking possible:

- A computer needs a **network interface card (NIC)** to access a
  network.
- Every NIC is given a **MAC address** at the point of manufacture,
  usually written in hexadecimal and built from a manufacturer code
  and a serial code.
- An **IP address** is allocated by the network and can be static or
  dynamic; you need to know the characteristics of, and differences
  between, IPv4 and IPv6.
- A **router** sends data to a specific destination on a network, can
  assign IP addresses, and connects a local network to the internet.

This sub-topic connects directly to Topic 2 (Data transmission) --
understanding how a router directs packets to their destination builds
on the packet-switching content covered there, so revising the two
topics together reinforces both.

## How to approach it

Computer architecture (3.1) is the conceptually hardest part of this
topic and the one most worth drilling with practice diagrams: being
able to trace a single instruction through fetch, decode and execute,
naming which register or bus is involved at each step, is a skill that
only comes from repetition. For 3.2, build yourself a quick-reference
table of sensor names against what they actually measure, since
scenario-based questions reward precise matching over general
familiarity. For 3.3 and 3.4, focus on the comparisons the syllabus
explicitly asks for -- RAM vs ROM, primary vs secondary storage, local
vs cloud storage, IPv4 vs IPv6 -- since "explain the difference
between" questions are a recurring format across this topic.

## Official syllabus

Cambridge International, *Cambridge IGCSE Computer Science (0478)
syllabus for examination in 2026, 2027 and 2028* (Version 5, published
December 2025): [official syllabus
PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf),
Subject content, section 3 "Hardware". Verified 2026-09-02.
