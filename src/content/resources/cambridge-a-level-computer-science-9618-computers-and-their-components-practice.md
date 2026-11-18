---
title: "Cambridge A Level Computer Science (9618): Computers and their components -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with mark-scheme answers on Cambridge 9618 section 3.1: device operations, embedded systems, buffers, memory types and control systems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 3.1 Computers and their components of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026. Learn the content first in the [components study guide](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components/) and the [components revision notes](/resources/cambridge-a-level-computer-science-9618-computers-and-their-components-revision-notes/).

## Section A

**1.** Explain why a laptop needs both primary memory and secondary storage. **[2]**

**2.** A school stores pupils' coursework on removable storage that is taken off-site each week. Give **one** reason for doing this. **[1]**

**3.** Define the term *embedded system* and give **one** example. **[2]**

**4.** Describe the purpose of a buffer when a computer sends a long document to a printer. **[2]**

**5.** State **two** differences between RAM and ROM. **[2]**

**6.** Explain why DRAM must be refreshed but SRAM does not. **[2]**

**7.** A manufacturer needs a memory chip in a set-top box whose firmware can be updated over the internet without opening the box. State which of PROM, EPROM and EEPROM it should use, and why. **[2]**

## Section B

**8.** Describe how a laser printer prints a page. **[5]**

**9.** Describe how data is read from a magnetic hard disk. **[3]**

**10.** A games company is choosing between a magnetic hard disk and a solid state drive for a new handheld console. Explain **two** reasons why a solid state drive is more suitable. **[4]**

**11.** Describe how a speaker produces sound from the digital data in a music file. **[4]**

**12.** Compare capacitive and resistive touchscreens for a touchscreen used by staff wearing thick gloves in a cold-storage warehouse. Justify your choice. **[3]**

**13.** An automatic watering system for a garden keeps soil moisture above a set level.

**(a)** Explain why this is a control system and not a monitoring system. **[2]**

**(b)** Describe how feedback is used in the system. **[3]**

**14.** Describe how a virtual reality headset gives the user the impression of being inside a 3D scene. **[3]**

## Answers

**1.** Primary memory (RAM) holds the programs and data in use, because the processor can access it directly and quickly [1]; secondary storage is non-volatile and has a much larger capacity, so files and software are kept when the laptop is switched off [1]. **[2]**

**2.** If the school's building is damaged, for example by fire or flood, or its main system fails, a copy of the coursework survives elsewhere [1]. **[1]**

**3.** A computer system built into a larger device to carry out a dedicated function [1]; any suitable example, such as the controller in a washing machine or a car's engine management system [1]. **[2]**

**4.** The buffer is an area of memory that temporarily holds the document data [1]; the computer can transfer the data quickly and carry on with other tasks while the slower printer takes data from the buffer as it needs it [1]. **[2]**

**5.** Any two, one mark each [2]: RAM is volatile but ROM is non-volatile; RAM can be read from and written to in normal use but ROM is read-only; RAM holds the OS, programs and data currently in use while ROM holds start-up instructions or firmware. **[2]**

**6.** DRAM stores each bit as charge on a capacitor, which leaks away over time [1]; SRAM stores bits in flip-flop circuits that hold their state as long as power is supplied, so no refresh is needed [1]. **[2]**

**7.** EEPROM [1], because it can be erased and rewritten electrically while still in the circuit, so the update can be applied without removing the chip [1]. **[2]**

**8.** The drum is given an electrostatic charge [1]. A laser, controlled by the page data, alters the charge on the drum to form an electrostatic image of the page [1]. Charged toner is attracted to the image on the drum [1]. The paper is charged so that it attracts the toner from the drum [1]. The fuser heats and presses the paper to fix the toner, and the drum is then discharged and cleaned [1]. **[5]**

**9.** The platters spin at high speed [1]; the actuator arm moves the read/write head to the correct track and the required sector rotates beneath it [1]; the head detects the magnetic orientation of areas on the surface, which represents the binary data [1]. **[3]**

**10.** A solid state drive has no moving parts [1], so it is not damaged if the handheld console is dropped or shaken while running, unlike a hard disk with a moving head close to the platter [1]. It has faster access times because no head or platter has to move [1], so games load more quickly [1]. (Credit also: lower power use, so the battery lasts longer; lighter and smaller.) **[4]**

**11.** The digital data is converted into an analogue signal by a digital-to-analogue converter and amplified [1]. The varying current passes through a coil attached to a cone [1]. The coil is in the field of a permanent magnet, so it is pushed and pulled as the current changes, making the cone vibrate [1]. The vibrations create pressure waves in the air, which are heard as sound [1]. **[4]**

**12.** Resistive [1]. It works by pressure pushing two layers together, so it responds to a gloved finger [1]; a capacitive screen relies on a conductive finger drawing charge, so it would not respond through thick gloves [1]. **[3]**

**13. (a)** The system does not only measure and record soil moisture [1]; it uses the readings to operate an actuator, such as a valve or pump, that changes the conditions by watering the soil [1].

**(b)** A moisture sensor sends readings to the processor, which compares them with the set level [1]. If the soil is too dry, the processor opens the valve or switches on the pump [1]. The watering raises the moisture, which is measured at the next reading, so the output affects the next input and the valve is closed once the set level is reached [1]. **[5]**

**14.** A screen in front of each eye shows a slightly different image, so the brain sees depth (a 3D effect) [1]; lenses widen the image to fill the user's field of view [1]; sensors track head movement and the images are updated immediately to match, so the scene appears to stay fixed around the user as they look about [1]. **[3]**

## Where marks are usually lost

- Describing devices in the wrong order, or missing named parts such as the fuser or actuator arm.
- Saying SRAM needs refreshing.
- Treating all ROM as unchangeable.
- Describing a monitoring system that "turns on" a device.
- Explaining feedback as "the system gets information" without showing the loop.
- Choosing a device without linking its features to the situation in the question.
