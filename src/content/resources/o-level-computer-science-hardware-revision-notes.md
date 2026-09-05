---
title: "O Level Computer Science: Hardware — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on CPU components and the FDE cycle, input/output devices and sensors, storage types, and network hardware for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Hardware study guide](/resources/o-level-computer-science-hardware/).

## 3.1 The CPU and the FDE cycle

| Category | Components |
|---|---|
| Units | ALU (arithmetic/logic operations), CU (controls sequencing) |
| Registers | PC (next instruction's address), MAR (address being accessed), MDR (data/instruction transferred), CIR (instruction being decoded), ACC (result of ALU operations) |
| Buses | Address (where), data (what), control (signals) |

**Cycle order**: instruction fetched from RAM via MAR/MDR into CIR →
CU decodes it → ALU/CU execute it, result stored in ACC.

**Performance factors**: more cores, larger cache, higher clock speed
— all improve performance, but be ready to explain *how*, not just
list them. **Instruction set** = fixed list of machine-code commands
a CPU can process. **Embedded system** = one dedicated function
(e.g. a car's engine-management unit) vs a general-purpose computer
running many applications.

## 3.2 Input/output devices and sensors

| Category | Named examples |
|---|---|
| Input | Barcode scanner, digital camera, keyboard, microphone, optical mouse, QR scanner, touch screen (resistive/capacitive/infra-red), 2D/3D scanner |
| Output | Actuator, DLP/LCD projector, inkjet/laser printer, LED/LCD screen, speaker, 3D printer |
| Sensor | Acoustic, accelerometer, flow, gas, humidity, infra-red, level, light, magnetic field, moisture, pH, pressure, proximity, temperature |

Scenario questions reward matching a sensor to **what it physically
measures**, not recognising it by name alone — build a sensor →
measured-quantity table for revision, e.g. a moisture sensor in an
automated plant-watering system, or a pH sensor in a swimming-pool
monitoring system.

## 3.3 Data storage

| Type | CPU accesses directly? | Volatile? |
|---|---|---|
| RAM (primary) | Yes | Yes |
| ROM (primary) | Yes | No |
| Magnetic (HDD) | No | No |
| Optical (CD/DVD/Blu-ray) | No | No |
| Solid-state (SSD/SD/USB) | No | No |

**Virtual memory**: pages swapped between RAM and disk when physical
RAM is insufficient. **Cloud storage**: advantage (remote access from
anywhere) vs disadvantage (dependence on physical servers/storage
hosted elsewhere, compared with direct local control).

## 3.4 Network hardware

- **NIC** required to access a network.
- **MAC address** — fixed at manufacture (manufacturer code + serial
code), usually hexadecimal.
- **IP address** — allocated by the network, static or dynamic; know
IPv4 vs IPv6 differences.
- **Router** — directs data to its destination, can assign IP
addresses, connects a local network to the internet.

Builds directly on Topic 2 (Data transmission) — a router's
packet-directing role connects straight to that topic's
packet-switching content.

## Worked example: tracing an instruction

```
FETCH:   address of next instruction copied from PC into MAR
         instruction copied from RAM into MDR, then into CIR
         PC incremented
DECODE:  CU interprets the instruction in CIR
EXECUTE: ALU performs the operation; result placed in ACC
```

Practise naming *which* register or bus is active at a *specific*
named stage — exam questions rarely ask for the whole cycle recited
from memory, but frequently ask "what happens to the MAR during
fetch?" style questions.

## This O Level shares content with IGCSE Computer Science

Cambridge explicitly builds O Level Computer Science (2210) on the
same subject content as Cambridge IGCSE Computer Science (0478) --
Topic 3's structure, named devices, sensors and storage technologies
are identical between the two qualifications. If your centre also
offers 0478, resources for that qualification's Hardware topic cover
exactly the same content and can be used interchangeably for
practice, though always confirm with your teacher which specific
syllabus code and series applies to your own examination entry before
relying on cross-qualification material for anything beyond general
revision.

## Exam traps

- Reciting the register list without being able to trace a single
instruction through fetch, decode and execute.
- Naming a sensor without stating what it actually measures under
scenario pressure.
- Treating RAM and secondary storage as interchangeable, rather than
distinguishing direct CPU access (primary) from indirect (secondary).
- Confusing MAC address (fixed, hardware-level) with IP address
(network-allocated, can change).
- Listing cloud storage's benefit without a matched limitation.

## Self-test

1. What happens to the Program Counter during the fetch stage?
2. Name the three secondary storage technologies and one example
device for each.
3. What does "embedded system" mean, with an example?
4. Give one advantage and one disadvantage of cloud storage.
5. What is the difference between a MAC address and an IP address?

**Answers:** 1. It holds the address of the next instruction to be
fetched, and is incremented once the current instruction has been
fetched. 2. Magnetic (HDD), optical (CD/DVD/Blu-ray), solid-state
(SSD/SD card/USB drive). 3. A device built to perform one dedicated
function, such as a car's engine-management system, as opposed to a
general-purpose computer that runs many different applications.
4. Advantage: remote accessibility from any location; disadvantage:
dependence on physical servers/infrastructure hosted elsewhere rather
than direct local control. 5. A MAC address is fixed at manufacture
and identifies specific hardware; an IP address is allocated by the
network, can be static or dynamic, and identifies a device's location
on that network.
