---
title: "IGCSE Computer Science: Hardware — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on the fetch-decode-execute cycle, input/output devices and sensors, storage types, and network hardware for Cambridge IGCSE Computer Science (0478)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Hardware study guide](/resources/igcse-computer-science-hardware/).

## 3.1 Computer architecture — the FDE cycle

| Component | Role |
|---|---|
| ALU | Performs arithmetic/logic operations |
| CU | Controls the cycle's timing and sequencing |
| PC | Holds the address of the *next* instruction |
| MAR | Holds the address currently being accessed |
| MDR | Holds data/instructions moving to/from memory |
| CIR | Holds the instruction currently being decoded |
| ACC | Holds the result of ALU operations |

Buses carry information between components: **address bus** (where),
**data bus** (what), **control bus** (signals). Know the cycle in
order — fetch (instruction from RAM to CIR via MAR/MDR), decode (CU
interprets it), execute (ALU/CU carry it out).

**Core/cache/clock**: more cores, larger cache, faster clock all
improve performance — but be ready to say *why*, not just list them.
**Embedded system** = one dedicated function (a washing machine
controller); a PC is general-purpose.

## 3.2 Input, output and sensors

| Category | Named examples |
|---|---|
| Input | Barcode scanner, digital camera, keyboard, microphone, optical mouse, QR scanner, touch screen (resistive/capacitive/infra-red), 2D/3D scanner |
| Output | Actuator, DLP/LCD projector, inkjet/laser printer, LED/LCD screen, speaker, 3D printer |
| Sensor | Acoustic, accelerometer, flow, gas, humidity, infra-red, level, light, magnetic field, moisture, pH, pressure, proximity, temperature |

Scenario questions ("a greenhouse needs to monitor...") test whether
you can match a sensor to what it *measures* — build a quick-recall
table of sensor → measured quantity rather than memorising the list
alphabetically.

## 3.3 Data storage

| Type | Accessed by CPU directly? | Volatile? | Examples |
|---|---|---|---|
| Primary (RAM) | Yes | Yes | Current programs/data |
| Primary (ROM) | Yes | No | Startup instructions |
| Secondary — magnetic | No | No | HDD (platters, tracks, sectors, electromagnets) |
| Secondary — optical | No | No | CD/DVD/Blu-ray (laser, pits/lands) |
| Secondary — solid-state | No | No | SSD/SD/USB (NAND/NOR, transistors) |

**Virtual memory**: pages swapped between RAM and disk when RAM is
full. **Cloud storage**: remote access vs needing physical local
servers — know one advantage and one disadvantage of each side.

## 3.4 Network hardware

- **NIC** — required to access a network.
- **MAC address** — fixed at manufacture, hexadecimal, manufacturer
code + serial code.
- **IP address** — allocated by the network, static or dynamic; know
IPv4 vs IPv6 differences (address length/format).
- **Router** — directs data to its destination, can assign IP
addresses, connects a local network to the internet.

Links to Topic 2 (Data transmission): a router directing packets
builds directly on packet-switching — revise both together.

## Worked example: tracing an instruction through the FDE cycle

A common exam format describes a single instruction and asks you to
trace its path through the cycle. Work through it in this order every
time:

```
1. FETCH:   address of next instruction copied from PC into MAR
            instruction itself copied from RAM into MDR, then into CIR
            PC incremented to point at the following instruction
2. DECODE:  CU interprets the instruction held in CIR
3. EXECUTE: ALU performs the operation; result stored in ACC
            (or written back to RAM if the instruction requires it)
```

Practising this trace with different named registers filled in for
each stage is worth more than memorising the register list in
isolation, since exam questions usually ask you to identify *which*
register or bus is active at a *specific* stage, not to recite the
whole cycle from memory.

## Exam traps

- Naming FDE registers without being able to trace a single
instruction through fetch → decode → execute in order.
- Confusing a sensor's name with what it actually measures under
scenario pressure.
- Saying "RAM is used for storage" without distinguishing primary
(direct CPU access) from secondary (not directly accessed).
- Mixing up MAC address (fixed, hardware) with IP address (allocated,
network-level, can change).
- Listing cloud storage's benefits without a matched limitation
(accessibility vs. reliance on connectivity/host infrastructure).

## Self-test

1. Name the four buses/units involved in the FDE cycle's "fetch"
stage and what each does.
2. What distinguishes primary from secondary storage?
3. Give one advantage and one disadvantage of cloud storage vs local
storage.
4. What is the difference between a MAC address and an IP address?
5. Why is embedded system correctly distinguished from a
general-purpose computer?

**Answers:** 1. PC (holds next instruction's address), MAR (holds the
address being accessed), MDR (holds the data/instruction being
transferred), address/data/control buses (carry the address, data and
signals between components). 2. Primary storage is directly accessed
by the CPU; secondary storage is not and is used for more permanent
data. 3. Advantage: remote accessibility from any location;
disadvantage: dependence on physical servers/infrastructure to host
it and a network connection to access it. 4. A MAC address is fixed
at manufacture and identifies the specific network hardware; an IP
address is allocated by the network, can be static or dynamic, and
identifies a device's location on that network. 5. An embedded system
performs one dedicated function (e.g. a vending machine controller),
while a general-purpose computer such as a PC runs many different
programs and functions.
