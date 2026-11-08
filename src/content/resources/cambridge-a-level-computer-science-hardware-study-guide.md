---
title: "Cambridge A Level Computer Science (9618): Hardware -- Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9618 Hardware study guide: memory types, PROM to EEPROM, embedded systems, how devices work, buffers, monitoring and control, and logic gates."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check the exact bullet points in 3.1 (devices, ports, memory, virtual memory) and whether 3.2 stops at gates and circuits or also lists adders and flip-flops, and where processor registers sit (Topic 4). 2026-11-08 recheck: checked against the syllabus 3.1-3.2; moved ports and interrupts out (they are 4.1), removed virtual memory (16.1) and cloud storage, added PROM/EPROM/EEPROM, the named device operations, buffers and monitoring/control; please re-review."
publishedDate: 2026-11-08
featured: false
---

Topic 3 of Cambridge International AS & A Level Computer Science (9618) has two parts. **3.1 Computers and their components** covers why a computer needs input, output, primary memory and secondary storage, embedded systems, how a named list of devices works, buffers, the types of RAM and ROM, and monitoring and control systems. **3.2 Logic gates and logic circuits** covers the six gates and converting between problem statements, circuits, expressions and truth tables. Both are AS content examined on Paper 1 (Theory Fundamentals).

## What does the 9618 syllabus list for Topic 3?

| Ref | Candidates should be able to |
|---|---|
| 3.1 | Show understanding of the need for input, output, primary memory and secondary (including removable) storage |
| 3.1 | Show understanding of embedded systems, including benefits and drawbacks |
| 3.1 | Describe the principal operations of: laser printer, 3D printer, microphone, speakers, magnetic hard disk, solid state (flash) memory, optical disc reader/writer, touchscreen, virtual reality headset |
| 3.1 | Show understanding of the use of buffers |
| 3.1 | Explain the differences between RAM and ROM, and between SRAM and DRAM, including their use in devices and systems |
| 3.1 | Explain the difference between PROM, EPROM and EEPROM |
| 3.1 | Show an understanding of monitoring and control systems: the difference between them, sensors (temperature, pressure, infra-red, sound) and actuators, and the importance of feedback |
| 3.2 | Use the symbols and define the functions of NOT, AND, OR, NAND, NOR and XOR; construct truth tables, logic circuits and logic expressions from each other and from a problem statement |

Ports (USB, HDMI, VGA) and interrupts are in **4.1 CPU Architecture**, and virtual memory is in **16.1** (A Level), so they are covered on those pages, not here.

## 3.1 Why does a computer need input, output, primary memory and secondary storage?

- **Input** devices capture data from the outside world so it can be processed.
- **Output** devices present the results of processing to people or other systems.
- **Primary memory** (RAM and ROM) is directly accessible by the processor. Programs and data must be in main memory for the processor to execute and use them.
- **Secondary storage** is non-volatile and keeps programs and data when the power is off, with much larger capacity than main memory. **Removable** storage (such as a USB flash drive or an optical disc) lets data be transported between computers and kept off-site as a backup.

## 3.1 What are embedded systems?

An **embedded system** is a computer system built into a larger device to perform a dedicated function, such as a washing-machine controller, a car's engine management unit or a microwave oven.

| Benefits | Drawbacks |
|---|---|
| Small, so it fits inside the device | Difficult or impossible to upgrade |
| Low power consumption | Hard to repair; the whole unit may need replacing |
| Cheap to mass-produce | Limited to the one task it was designed for |
| Reliable: dedicated software with few tasks | If connected to a network, may be vulnerable to attack and hard to patch |

## 3.1 How do the named hardware devices work?

| Device | Principal operation |
|---|---|
| Laser printer | A rotating drum is charged; a laser changes the charge on parts of the drum to form an electrostatic image of the page; charged toner sticks to those parts; the paper is charged so the toner transfers to it; a heated fuser melts the toner onto the paper; the drum is discharged and cleaned |
| 3D printer | Software slices the design into thin layers; the printer builds the object one layer at a time, for example by extruding melted plastic through a moving nozzle or curing liquid resin with a laser |
| Microphone | Sound waves vibrate a diaphragm; the movement (for example a coil in a magnetic field) produces a varying analogue electrical signal; an ADC converts it to digital |
| Speaker | Digital data passes through a DAC and is amplified; the varying current flows through a coil attached to a cone in the field of a permanent magnet; the coil and cone move in and out, creating sound waves |
| Magnetic hard disk | Platters coated in magnetic material spin at high speed; read/write heads on an actuator arm move across the surface; data is stored as magnetised regions in tracks and sectors |
| Solid state (flash) memory | Data is stored as charge trapped in transistor cells (floating gates); no moving parts; data is erased and rewritten in blocks, and cells wear out after many writes |
| Optical disc reader/writer | A laser is shone on the spinning disc; reflected light differs between pits and lands and is detected by a photodiode and read as bits. A writer uses a stronger laser to change the reflectivity of a dye or phase-change layer |
| Touchscreen | Resistive: pressing pushes two conductive layers together, and the voltage at the contact point gives the position. Capacitive: a finger changes the capacitance of the screen's electrostatic field at that point, and the controller calculates the position |
| Virtual reality headset | A screen shows a slightly different image to each eye through lenses, giving a 3D effect; sensors such as gyroscopes and accelerometers track head movement so the image changes to match |

## 3.1 What is a buffer used for?

A **buffer** is a temporary area of memory that holds data while it is transferred between devices or processes working at different speeds. When printing, the processor fills the printer's buffer quickly and then gets on with other work while the slower printer empties it. When streaming video, data is downloaded into a buffer ahead of playback, so short drops in network speed do not stop the picture. The buffer **holds** the data; it does not send it.

## 3.1 How do RAM, ROM, SRAM and DRAM differ?

| | RAM | ROM |
|---|---|---|
| Volatile? | Yes: contents lost when power is off | No |
| Written in normal use? | Yes, read and write | No, read only |
| Typical contents | The operating system in use, running programs and their data | The bootstrap loader, firmware of embedded devices |

| | SRAM (static) | DRAM (dynamic) |
|---|---|---|
| Stores each bit in | A flip-flop | A capacitor (with a transistor) |
| Needs refreshing? | No | Yes, constantly, as the charge leaks |
| Speed | Faster | Slower |
| Cost and density | More expensive per bit, fewer bits per chip | Cheaper per bit, more bits per chip |
| Typical use | Cache memory | Main memory |

The choice depends on the device: a processor's cache uses SRAM because speed matters more than size, whereas a computer's main memory uses DRAM because large capacity at low cost matters more.

## 3.1 What is the difference between PROM, EPROM and EEPROM?

- **PROM (programmable ROM)**: blank when made, programmed **once** and then cannot be changed.
- **EPROM (erasable PROM)**: erased by shining **ultraviolet light** through a window on the chip, usually after removing it from the device, then reprogrammed.
- **EEPROM (electrically erasable PROM)**: erased and rewritten **electrically** while still in the circuit, so firmware can be updated without removing the chip. Flash memory is a type of EEPROM.

## 3.1 What is the difference between monitoring and control systems?

- A **monitoring** system uses **sensors** to take readings; the computer compares them with stored values and displays, records or raises a warning. It does **not** change the conditions. Example: a hospital monitor that sounds an alarm if a patient's heart rate falls.
- A **control** system also uses **actuators** (such as motors, valves, pumps and heaters) to **change** the conditions. Example: a greenhouse that opens a window when the temperature is too high.
- **Sensors** named in the syllabus: temperature, pressure, infra-red and sound. Analogue readings pass through an ADC before processing.
- **Feedback** is essential in control: after the actuator acts, new sensor readings are taken and compared again, so the output affects the next input and conditions are held near the target continuously.

## 3.2 Logic gates and logic circuits

All gates except NOT have exactly two inputs in this syllabus.

| Gate | Output is 1 when |
|---|---|
| NOT | the input is 0 |
| AND | both inputs are 1 |
| OR | at least one input is 1 |
| NAND | not both inputs are 1 (NOT AND) |
| NOR | neither input is 1 (NOT OR) |
| XOR | the inputs are different |

A **truth table** lists the output for every combination of inputs; a circuit with n inputs has 2 to the power n rows, listed in binary counting order. A **logic expression** such as X = (A AND B) OR NOT C is the written form of a circuit. You must be able to construct any one of circuit, truth table and expression from the others, or from a problem statement.

### Worked example 1: truth table for a circuit

Complete the truth table for X = (A AND B) OR NOT C.

| A | B | C | A AND B | NOT C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

X is 0 only where C = 1 and A AND B is 0. There are eight rows, since 2 to the power 3 = 8.

### Worked example 2: from a problem statement

A safe's alarm sounds (S = 1) if the door is open (D = 1) while the system is armed (A = 1), or if the panic button is pressed (P = 1).

1. The first condition is D AND A; the second is P; either is enough.
2. S = (D AND A) OR P.
3. The circuit is one AND gate whose output goes into an OR gate with P.

Check: D = 1, A = 1, P = 0 gives S = 1; D = 1, A = 0, P = 0 gives S = 0; D = 0, A = 0, P = 1 gives S = 1. A full table has S = 1 in 5 of its 8 rows: the four with P = 1, plus D = 1, A = 1, P = 0.

## Common mistakes

- Saying SRAM is cheaper than DRAM, or that DRAM is used for cache.
- Saying EPROM can only be written once (that is PROM), or that EPROM is erased electrically (that is EEPROM).
- Giving a monitoring answer (display, alarm) for a control question with no actuator.
- Saying the buffer "sends" data.
- Describing a sensor as an output device.
- Omitting rows from truth tables or listing inputs out of order.
- Writing XOR as "A or B": it excludes both being 1.

## Exam technique

For a device question, describe the operation in sequence, as the mark scheme awards a mark per step. For memory comparisons, make a point on each side. For logic questions, show the working columns in the truth table, because partly correct tables still earn marks.

## Frequently asked questions

**Are ports and interrupts part of 9618 Topic 3?**
No. Ports (USB, HDMI, VGA) and the purpose and handling of interrupts are in 4.1 CPU Architecture.

**What is the difference between EPROM and EEPROM?**
EPROM is erased with ultraviolet light, usually after removing the chip. EEPROM is erased and rewritten electrically while it stays in the circuit.

**Why is feedback important in a control system?**
New readings are taken after the actuator acts, so the system can keep adjusting and hold conditions near the target rather than overshooting.

**Which sensors does the syllabus name?**
Temperature, pressure, infra-red and sound sensors.

## Check your understanding

1. Why does a computer need secondary storage as well as RAM? *RAM is volatile and limited; secondary storage keeps programs and data when power is off and holds far more.*
2. Give one benefit and one drawback of an embedded system. *Benefit: small, cheap or low power. Drawback: hard to upgrade.*
3. Give two differences between SRAM and DRAM. *SRAM needs no refresh and is faster but costs more; DRAM must be refreshed and is cheaper and denser.*
4. Which type of ROM can be updated without removing it from the device? *EEPROM.*
5. Describe how a microphone works. *Sound vibrates a diaphragm; this produces a varying analogue signal, which an ADC converts to digital.*
6. What makes a system a control system rather than a monitoring system? *It uses actuators to change conditions, with feedback.*
7. Give the output of NOR for inputs 0 and 0. *1.*
8. In worked example 2, what is S when D = 0, A = 1 and P = 0? *0, as D AND A is 0 and P is 0.*

## Related pages

- [Hardware revision notes](/resources/cambridge-a-level-computer-science-hardware-revision-notes/)
- [Hardware practice questions](/resources/cambridge-a-level-computer-science-hardware-practice/)

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Computer Science 9618*, syllabus for 2026 and syllabus for 2027, 2028 and 2029, section 3 "Hardware" (3.1 and 3.2).
