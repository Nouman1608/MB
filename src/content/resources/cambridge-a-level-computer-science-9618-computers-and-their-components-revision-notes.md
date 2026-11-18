---
title: "Cambridge A Level Computer Science (9618): Computers and their components -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "computers-and-their-components"
description: "Revision notes for Cambridge 9618 section 3.1: device operations in steps, embedded systems, buffers, memory types, sensors, actuators and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.1 Computers and their components of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The [components study guide](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components/) explains each device and system in full; the [components practice questions](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components-practice/) test them.

## Key terms

| Term | Meaning |
|---|---|
| Primary memory | Memory directly accessible by the processor: RAM and ROM |
| Secondary storage | Non-volatile storage for programs and files not currently in use |
| Removable storage | Secondary storage that can be taken out and moved: flash drive, memory card, optical disc |
| Embedded system | A computer system inside a larger device, performing a dedicated function |
| Buffer | Temporary memory holding data being transferred between devices working at different speeds |
| Volatile | Loses its contents when power is removed |
| Sensor | Input device that measures a physical quantity |
| Actuator | Output device that causes movement or change: motor, valve, pump, heater |
| Feedback | The system's output affects its next input, letting it correct itself |

## Device operations: key words in order

| Device | Sequence to remember |
|---|---|
| Laser printer | Charge drum → laser alters charge to form page image → toner attracted → charged paper pulls toner → fuser heats and presses → drum discharged and cleaned |
| 3D printer | Model sliced into layers → material deposited or hardened layer by layer → platform lowers after each layer |
| Microphone | Sound vibrates diaphragm → coil moves in magnetic field → varying current (analogue) → ADC |
| Speaker | DAC and amplifier → varying current in coil → coil and cone move in magnet's field → cone vibrates air |
| Magnetic hard disk | Platters spin → actuator arm moves head to track → sector rotates under head → head reads or changes magnetic orientation |
| Flash memory | No moving parts → charge trapped in transistor cells → written in pages, erased in blocks → limited write cycles |
| Optical disc | Disc spins → laser follows spiral track → reflection changes detected (pits and lands) → decoded to binary; writing changes the recording layer |
| Capacitive touchscreen | Conductive layer charged → finger draws charge → change in capacitance located; multi-touch |
| Resistive touchscreen | Pressure pushes two layers together → circuit completed → voltage gives position; works with stylus or glove |
| VR headset | Screen per eye with slightly different images → lenses widen view → sensors track head → images updated instantly |

## Embedded systems

**Benefits:** small, low power, cheap in volume, reliable, fast at one task.
**Drawbacks:** hard to upgrade or repair, single-purpose, connected ones may be hackable.
Examples: washing machine, microwave, car engine management, thermostat, smart meter.

## Memory comparison

| Feature | RAM | ROM |
|---|---|---|
| Volatile | Yes | No |
| Writable in normal use | Yes | No |
| Contents | OS, running programs, data in use | Start-up instructions, firmware |

| Feature | SRAM | DRAM |
|---|---|---|
| Built from | Flip-flops | Capacitor + transistor |
| Refresh | No | Yes, constantly |
| Speed | Faster | Slower |
| Cost per bit | Higher | Lower |
| Density | Lower | Higher |
| Used for | Cache | Main memory |

| Type | How it is changed |
|---|---|
| PROM | Programmed once, permanently |
| EPROM | Erased with ultraviolet light (whole chip, usually removed), then reprogrammed |
| EEPROM | Erased and rewritten electrically, in the circuit |

## Monitoring vs control

| Monitoring | Control |
|---|---|
| Sensors measure | Sensors measure |
| Readings recorded, displayed, alarms raised | Readings compared with a set value |
| No change to conditions | Actuators change the conditions |
| Example: weather station, patient monitor | Example: central heating, traffic lights, greenhouse windows |

Sensors in the syllabus: **temperature, pressure, infra-red, sound**. Analogue readings need an **ADC**.

**Feedback loop:** measure → compare with set value → act → change is measured at the next reading → repeat.

## Exam traps

- ROM types EEPROM and flash **can** be rewritten.
- DRAM, not SRAM, needs refreshing.
- A monitoring system does not operate actuators.
- Sensors do not make decisions; the processor does.
- A buffer is temporary and handles a speed mismatch.
- Laser printers use a laser to change charge on a drum, not to "burn" ink onto paper.
- Flash memory has no moving parts; do not mention read/write heads.

## Self-test

1. Why must a running program be held in primary memory rather than secondary storage?
2. Give **two** drawbacks of embedded systems.
3. What is the purpose of the fuser in a laser printer?
4. In a 3D printer, what happens after each layer is completed?
5. Which part of a microphone vibrates when sound reaches it?
6. Why can't a capacitive touchscreen be used with an ordinary plastic stylus?
7. Why does flash memory need to spread writes across the chip?
8. Explain why cache memory uses SRAM.
9. How is an EPROM erased?
10. State **one** difference between a monitoring system and a control system.
11. Name **two** actuators.
12. Explain the purpose of a buffer when streaming video.

### Answers

1. The processor can only access primary memory directly, and secondary storage is far too slow to supply instructions at processor speed.
2. Any two: hard to upgrade; hard to repair; limited to one task; connected devices may be hacked and rarely receive updates.
3. To heat and press the paper so the toner melts and sticks permanently.
4. The platform moves down (or the nozzle up) so the next layer can be built on top.
5. The diaphragm.
6. It detects a change in capacitance caused by a conductive object such as a finger; plastic does not draw charge.
7. Each cell can be rewritten only a limited number of times, so spreading writes extends the drive's life.
8. SRAM is faster than DRAM and needs no refresh, and the processor needs data from cache as fast as possible; only a small amount is needed, so the higher cost is acceptable.
9. By exposing the chip to ultraviolet light, which erases the whole chip.
10. A monitoring system only records or reports readings; a control system uses them to operate actuators that change the conditions.
11. Any two: motor, valve, pump, heater, relay-operated switch.
12. Data is downloaded ahead of the playback point into the buffer, so playback continues smoothly when the network speed briefly drops.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 3.1 Computers and their components. Published by Cambridge International.
