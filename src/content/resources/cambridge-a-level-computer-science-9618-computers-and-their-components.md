---
title: "Cambridge A Level Computer Science (9618): Computers and their components"
resourceType: "study-guides"
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
description: "Study guide to Cambridge 9618 section 3.1: storage needs, embedded systems, how named devices work, buffers, RAM and ROM types, and monitoring and control."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.1 Computers and their components of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. You must show understanding of "the need for input, output, primary memory and secondary (including removable) storage"; embedded systems, with their benefits and drawbacks; "the principal operations" of the laser printer, 3D printer, microphone, speakers, magnetic hard disk, solid state (flash) memory, optical disc reader/writer, touchscreen and virtual reality headset; buffers; RAM and ROM; SRAM and DRAM; PROM, EPROM and EEPROM; and monitoring and control systems, including sensors, actuators and feedback.

The [Hardware study guide](/resources/cambridge-a-level-computer-science-hardware-study-guide/) covers all of Topic 3. This page concentrates on the skill most 3.1 questions test: describing a device or system as a **sequence of steps**. Recall: [components revision notes](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components-revision-notes/) · Questions: [components practice set](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components-practice/).

## Why a computer needs each kind of component

- **Input devices** turn data from the outside world into a form the computer can process.
- **Output devices** present results in a form people or other machines can use.
- **Primary memory** (RAM and ROM) is directly accessible by the processor. Running programs and their data must be in RAM because secondary storage is far too slow for the processor to work from directly.
- **Secondary storage** is non-volatile, so programs and files survive when the power is off, and it holds far more than RAM at a lower cost per byte.
- **Removable storage** (USB flash drives, memory cards, optical discs) lets data be carried between computers, kept off-site as a backup, or distributed.

## Embedded systems

An embedded system is a computer system built into a larger device to carry out a dedicated function: a washing machine controller, a car's engine management unit, a heating thermostat. It usually has a microprocessor or microcontroller, memory with its program in ROM or flash, and input from sensors.

| Benefits | Drawbacks |
|---|---|
| Small, so it fits inside the product | Hard or impossible to upgrade |
| Low power consumption | Difficult to repair; the whole unit may be replaced |
| Cheap to mass-produce | Limited to the task it was designed for |
| Reliable and fast at its one task | If connected to the internet, may be open to hacking and rarely patched |

## How the named devices work

Examiners reward a correct **sequence**. Learn each device as numbered steps.

**Laser printer**

1. The drum is given an electrostatic charge.
2. A laser beam, controlled by the page data, scans across the rotating drum and alters the charge wherever the page is to be printed, forming an electrostatic image.
3. Charged toner is attracted to that image on the drum.
4. The paper is charged so that it pulls the toner off the drum as it passes.
5. The fuser unit heats and presses the paper so the toner melts and sticks.
6. The drum is discharged and cleaned for the next page.

**3D printer**

1. A digital 3D model is sliced by software into many thin horizontal layers.
2. The printer builds the object one layer at a time from the bottom up.
3. In a common type, plastic filament is heated and pushed through a nozzle that moves across the build platform, tracing each layer; the plastic hardens as it cools.
4. After each layer the platform moves down (or the nozzle up) and the next layer is added on top. Other types harden liquid resin with light or fuse powder with a laser, still layer by layer.

**Microphone** (input)

1. Sound waves make a thin diaphragm vibrate.
2. In a dynamic microphone, a coil fixed to the diaphragm moves within the field of a magnet, inducing a varying electric current.
3. The current varies in the same pattern as the sound: an analogue signal.
4. An analogue-to-digital converter samples the signal for the computer.

**Speakers** (output)

1. Digital sound data is converted to an analogue signal by a digital-to-analogue converter and amplified.
2. The varying current flows through a coil attached to a cone, inside the field of a permanent magnet.
3. The coil is pushed and pulled as the current changes, so the cone vibrates.
4. The cone's vibrations create pressure waves in the air: sound.

**Magnetic hard disk**

1. One or more rigid platters coated in magnetic material spin at high speed.
2. Read/write heads on an actuator arm move across the surface to the required **track**, then wait for the required **sector** to rotate beneath them.
3. To write, the head changes the magnetic orientation of tiny areas of the surface; to read, it detects that orientation.

**Solid state (flash) memory**

1. There are no moving parts; data is stored in NAND flash memory chips.
2. Each cell holds data as electric charge trapped in a transistor, which stays when the power is off.
3. Data is written in pages but must be erased in larger blocks, and each cell can be rewritten a limited number of times, so a controller spreads writes across the chip.
4. Access is fast because no head has to move.

**Optical disc reader/writer**

1. The disc spins and a laser is focused on its surface along a spiral track.
2. To read, the light reflected from the disc is measured by a photodetector; the pattern of changes in reflection (from pits and lands on a pressed disc) is decoded as binary.
3. To write, a more powerful laser changes the reflectivity of a recording layer at chosen points.

**Touchscreen**

- **Capacitive**: a transparent conductive layer holds an electric charge. A finger draws charge away at the point of contact; sensors detect the change in capacitance and calculate the coordinates. Supports multi-touch, but does not respond to an ordinary stylus or most gloves.
- **Resistive**: two flexible layers are separated by a small gap. Pressing pushes them together and completes a circuit; the voltage measured gives the position. Works with any object, but is less responsive and usually single-touch.

**Virtual reality headset**

1. A screen in front of each eye (or one screen split in two) shows slightly different images, giving a 3D effect.
2. Lenses focus and widen the images to fill the user's field of view.
3. Sensors such as accelerometers and gyroscopes track head movement.
4. The computer updates the images immediately to match the movement, so the user feels present in the scene; delay can cause motion sickness.

## Buffers

A buffer is an area of memory that holds data temporarily while it is transferred between two devices or processes working at **different speeds**. A computer sends a document to a printer's buffer quickly and carries on with other work while the slower printer empties it.

## RAM, ROM and their types

| | RAM | ROM |
|---|---|---|
| Volatile? | Yes: contents lost when power is off | No |
| Read and write? | Read and write | Read only in normal use |
| Holds | Operating system, running programs and current data | Start-up instructions and firmware |
| Example use | Open documents on a laptop | The fixed program in a microwave oven's controller |

**SRAM and DRAM**

| | SRAM (static) | DRAM (dynamic) |
|---|---|---|
| Storage | Flip-flop circuits of several transistors per bit | One transistor and one capacitor per bit |
| Refreshing | Not needed while powered | Needed many times a second, because capacitors leak charge |
| Speed | Faster | Slower |
| Cost and density | More expensive per bit, fewer bits per chip | Cheaper, more bits per chip |
| Typical use | Cache memory inside the processor | Main memory in PCs, laptops and phones |

Choose SRAM where speed matters more than capacity (cache); choose DRAM where large, affordable capacity matters (main memory).

**PROM, EPROM, EEPROM**

- **PROM** (programmable ROM): blank when made; programmed once, permanently. Suits a finished product whose firmware never changes.
- **EPROM** (erasable PROM): erased by exposing the chip to ultraviolet light, usually through a window after removing it from the circuit, then reprogrammed. The whole chip is erased.
- **EEPROM** (electrically erasable PROM): erased and rewritten electrically while still in the circuit, so firmware can be updated in place. Flash memory is a type of EEPROM that erases in blocks.

## Monitoring and control systems

- A **monitoring** system uses sensors to measure conditions and records, displays or warns about them. It does **not** change the conditions. Example: a hospital system recording a patient's temperature and sounding an alarm.
- A **control** system also uses the readings to decide on action and drives **actuators** (motors, valves, pumps, heaters) to change the conditions. Example: a greenhouse that opens a window motor when it is too hot.
- **Sensors** named in the syllabus: temperature, pressure, infra-red, sound. Analogue sensor readings pass through an analogue-to-digital converter.

**Feedback** means the output of the system affects its next input. In the greenhouse, opening the window lowers the temperature, which the sensor then measures. The system keeps comparing readings with the set value and adjusts, so conditions stay near the target instead of overshooting.

**Worked example: describing a control loop.** A swimming-pool heater keeps water at 28 °C.

1. A temperature sensor reads the water temperature at regular intervals.
2. The analogue reading is converted to digital and sent to the microprocessor.
3. The microprocessor compares the reading with the stored value of 28 °C.
4. If the water is below 28 °C, it sends a signal to switch the heater on; if at or above, the heater is switched off.
5. The change in water temperature is detected at the next reading (feedback), and the loop repeats continuously.

## Common mistakes

- Saying ROM "cannot be changed": EEPROM and flash are types of ROM that can be rewritten.
- Mixing up which of SRAM and DRAM needs refreshing.
- Describing a monitoring system as if it switched devices on and off.
- Calling a sensor "a device that controls" something: sensors measure; actuators act.
- Writing device operations as a vague paragraph without the order of steps.

## Exam technique

- **Describe the principal operations**: numbered steps, naming each component (drum, fuser, platter, read/write head, diaphragm, coil).
- **Explain the differences**: compare on the same features each time (volatility, speed, cost, use).
- **Justify a choice**: link a property to the situation, such as "SRAM for cache because the processor needs data faster than DRAM can supply".

Next: condense this with the [components revision notes](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components-revision-notes/), then try the [components practice questions](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components-practice/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 3.1 Computers and their components. Published by Cambridge International.
