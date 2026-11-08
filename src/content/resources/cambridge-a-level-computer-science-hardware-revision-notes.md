---
title: "Cambridge A Level Computer Science (9618): Hardware -- Revision Notes"
seoTitle: "Cambridge 9618 Hardware Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware"
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "computers-and-their-components"
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "logic-gates-and-logic-circuits"
description: "Revision notes on memory types, embedded systems, how devices work, monitoring and control, and logic gates for Cambridge AS & A Level Computer Science 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 3 Hardware covers the parts of a computer system (memory, storage, input and output devices, embedded systems, and monitoring and control systems) and the logic gates they are built from. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 1 Theory Fundamentals, where you must explain how named devices work, compare memory types, and construct truth tables, logic circuits and logic expressions without error.

Related: [Hardware study guide](/resources/cambridge-a-level-computer-science-hardware-study-guide/) · [Hardware practice questions](/resources/cambridge-a-level-computer-science-hardware-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

These notes follow the 9618 syllabus subject content for Topic 3 (the 2027-2029 syllabus states it has no significant changes from 2026).

| Section | Candidates should be able to |
|---|---|
| 3.1 | Show understanding of the need for input, output, primary memory and secondary (including removable) storage |
| 3.1 | Show understanding of embedded systems, including their benefits and drawbacks |
| 3.1 | Describe the principal operations of: laser printer, 3D printer, microphone, speakers, magnetic hard disk, solid state (flash) memory, optical disc reader/writer, touchscreen, virtual reality headset |
| 3.1 | Show understanding of the use of buffers |
| 3.1 | Explain the differences between RAM and ROM, and between SRAM and DRAM, with their uses in devices |
| 3.1 | Explain the difference between PROM, EPROM and EEPROM |
| 3.1 | Show an understanding of monitoring and control systems: sensors (temperature, pressure, infra-red, sound), actuators and feedback |
| 3.2 | Use the symbols for, and define the functions of, NOT, AND, OR, NAND, NOR and XOR gates (two inputs except NOT) |
| 3.2 | Construct a logic circuit, a truth table and a logic expression from a problem statement or from either of the other two forms |

## Key definitions

| Term | Definition |
|---|---|
| Primary memory | Memory the processor accesses directly (RAM and ROM) |
| Secondary storage | Non-volatile storage for programs and data not currently in use; includes removable media |
| Volatile | Contents are lost when the power is switched off |
| Embedded system | A computer system built into a larger device to carry out a dedicated function |
| Buffer | A temporary memory area holding data while it is transferred between devices or processes that work at different speeds |
| Sensor | An input device that measures a physical quantity such as temperature or pressure |
| Actuator | A device that turns an electrical signal from a computer into physical movement, e.g. a motor or valve |
| Feedback | Output of a control system affecting its next input, so readings taken after an actuator acts decide the next action |
| Truth table | A table giving the output of a gate or circuit for every combination of inputs |

## Why does a computer need input, output, primary memory and secondary storage?

- **Input** devices capture data from the user or environment; **output** devices present results.
- **Primary memory** holds the instructions and data the processor is working on, because the processor can only execute what is in main memory.
- **Secondary storage** keeps programs and files permanently, because RAM is volatile and too small to hold everything. **Removable** storage (USB flash drive, optical disc, external drive) lets data be moved between computers or kept off-site as a backup.

## What are the benefits and drawbacks of embedded systems?

| Benefits | Drawbacks |
|---|---|
| Small and cheap to mass-produce | Hard or impossible for the user to upgrade |
| Low power consumption | Limited to the one task they were designed for |
| Dedicated to one task, so fast and reliable at it | Faults usually need a specialist or a replacement unit |
| Little or no user setting-up needed | If connected to a network, they can be a security weak point |

Examples: washing machine controller, microwave oven, car engine management, central heating controller. An answer must be about the device in the question; June 2024 examiners noted that generic embedded-system answers scored poorly.

## How do the named hardware devices work?

| Device | Principal operation |
|---|---|
| Laser printer | A rotating drum is charged; the laser changes the charge on parts of the drum to form an electrostatic image of the page; charged toner sticks to those parts; the paper is charged so the toner transfers to it; a heated fuser melts the toner onto the paper; the drum is discharged and cleaned |
| 3D printer | The design is sliced into thin layers by software; the printer builds the object one layer at a time, e.g. by extruding melted plastic through a moving nozzle, or by curing liquid resin with a laser |
| Microphone | Sound waves vibrate a diaphragm; the movement (e.g. a coil moving in a magnetic field) produces a varying analogue electrical signal; an ADC converts it to digital |
| Speaker | Digital data goes through a DAC and is amplified; the varying current passes through a coil attached to a cone, inside the field of a permanent magnet; the coil and cone move in and out, creating sound waves |
| Magnetic hard disk | Platters coated in magnetic material spin at high speed; read/write heads on an actuator arm move across the surface; data is stored as magnetised regions in tracks and sectors |
| Solid state (flash) memory | Data is stored as electric charge trapped in transistor cells (floating gates); no moving parts; data is erased and rewritten in blocks, and cells wear out after many writes |
| Optical disc reader/writer | A laser is shone onto the spinning disc; the reflected light differs between pits and lands, detected by a photodiode and read as bits. A writer uses a stronger laser to change the reflectivity of a dye or phase-change layer. Blu-ray uses a shorter-wavelength laser, so data is packed more densely |
| Touchscreen | Resistive: pressing pushes two conductive layers together and the voltage at the contact point gives its position. Capacitive: the screen carries an electrostatic field; a finger changes the capacitance at that point, and the controller calculates the position (supports multi-touch) |
| Virtual reality headset | A screen (or two) shows a slightly different image to each eye through lenses, giving a 3D effect; sensors such as gyroscopes and accelerometers track head movement so the image changes to match |

## What is a buffer used for?

A buffer lets a fast device (the processor) hand data to a slower one (a printer) and get on with other work while the slower device catches up. When streaming video, data is downloaded into a buffer ahead of playback so short drops in network speed do not stop the picture. The buffer holds the data; the processor or device does the sending. Examiners in June 2024 and November 2024 penalised answers saying the buffer "sends" data.

## How do RAM, ROM, SRAM and DRAM differ?

| | RAM | ROM |
|---|---|---|
| Volatile? | Yes | No |
| Can be written in normal use? | Yes | No |
| Typical contents | Operating system in use, running programs and their data | Bootstrap loader / BIOS, firmware of embedded devices |

| | SRAM (static) | DRAM (dynamic) |
|---|---|---|
| Stores each bit in | A flip-flop | A capacitor (with a transistor) |
| Needs refreshing? | No | Yes, constantly, as the charge leaks |
| Speed | Faster access | Slower |
| Cost and density | More expensive per bit, fewer bits per chip | Cheaper per bit, more bits per chip |
| Typical use | Cache memory | Main memory |

## What is the difference between PROM, EPROM and EEPROM?

- **PROM**: blank when made; programmed **once** by the user or manufacturer, and then cannot be changed.
- **EPROM**: can be erased by shining **ultraviolet light** through a window on the chip (removed from the device), then reprogrammed. It is not write-once; November 2024 candidates lost marks for saying it was.
- **EEPROM**: erased and rewritten **electrically** while still in the circuit, so firmware can be updated without removing the chip. Flash memory is a form of EEPROM.

## What is the difference between monitoring and control?

- **Monitoring**: sensors take readings; the computer compares them with stored values and displays, records or warns (e.g. an alarm), but does not change the conditions. Example: monitoring a patient's heart rate.
- **Control**: the computer also sends signals to **actuators** to change the conditions. Example: a greenhouse that opens windows with a motor when it is too hot.
- **Feedback** makes control continuous: after the actuator acts, new sensor readings are taken and compared again, so the system keeps the value within the required range.
- Sensors in the syllabus: temperature, pressure, infra-red and sound. Sensor readings are analogue, so an ADC converts them for the computer; actuators may need a DAC.

## Logic gates in one table

| Gate | Expression | Output 1 when | 00 | 01 | 10 | 11 |
|---|---|---|---|---|---|---|
| AND | A AND B | both inputs are 1 | 0 | 0 | 0 | 1 |
| OR | A OR B | at least one input is 1 | 0 | 1 | 1 | 1 |
| NAND | NOT (A AND B) | not both inputs are 1 | 1 | 1 | 1 | 0 |
| NOR | NOT (A OR B) | both inputs are 0 | 1 | 0 | 0 | 0 |
| XOR | A XOR B | the inputs differ | 0 | 1 | 1 | 0 |

NOT has one input and inverts it. The NAND and NOR symbols are the AND and OR shapes with a small circle on the output; XOR is the OR shape with an extra curved line on the input side.

## Worked example: truth table to logic expression

A circuit has inputs A, B, C and output X = 1 only in the rows A=0, B=1, C=1 and A=1, B=1, C=0.

1. Write one AND term per row where X = 1, using NOT for each input that is 0: (NOT A AND B AND C) and (A AND B AND NOT C).
2. Join the terms with OR: X = (NOT A AND B AND C) OR (A AND B AND NOT C).
3. Check: both terms need B = 1, and A and C must differ, so X = B AND (A XOR C) is an equivalent, simpler answer. Either form earns the marks unless a particular gate set is required.

## Common mistakes and exam traps

- Saying SRAM is cheaper than DRAM, or that DRAM is used for cache. It is the other way round.
- Describing a device by what it is used for instead of how it works when the question says "describe the principal operation".
- Giving a monitoring example when the question asks for control (control must change conditions through an actuator).
- Swapping the NOR, XOR and NAND symbols, or describing a gate's output for only some input combinations (June 2024, June 2025 examiner reports).
- Leaving rows out of a truth table. Three inputs give 2^3 = 8 rows; list them in binary order.
- Writing XOR as "A or B"; it is 0 when both inputs are 1.

## Frequently asked questions

**Is virtual memory part of Topic 3?** No. In 9618 the details of virtual memory, paging and segmentation are in Topic 16 (A Level). In Topic 3 you need RAM, ROM, SRAM, DRAM, PROM, EPROM and EEPROM.

**How much detail do I need on how a laser printer works?** Enough to give the stages in order: charge the drum, form the image with the laser, attract toner, transfer it to charged paper, fuse it with heat, clean the drum. Each correct stage is typically one mark.

**Do I need three-input gates?** Not for single gates: the syllabus says all gates except NOT have two inputs. Circuits can still have three or more inputs overall, built from two-input gates.

**What is the difference between a sensor and an actuator?** A sensor is an input device that measures a physical quantity. An actuator is an output device that creates movement, such as opening a valve, in response to a signal from the computer.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 3 Hardware (sections 3.1 and 3.2). Examiner points are from Cambridge's Principal Examiner Reports for June 2024, November 2024 and June 2025, as summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
