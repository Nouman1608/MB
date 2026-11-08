---
title: "Cambridge A Level Computer Science (9618): Hardware -- Practice Questions"
seoTitle: "Cambridge 9618 Hardware Practice Questions"
resourceType: "practice-questions"
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
description: "Original exam-style questions with mark-scheme answers on memory, embedded systems, devices, buffers, sensors and logic circuits for Cambridge 9618 Hardware."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Hardware revision notes](/resources/cambridge-a-level-computer-science-hardware-revision-notes/) · [Hardware study guide](/resources/cambridge-a-level-computer-science-hardware-study-guide/)

These questions practise Topic 3 Hardware of Cambridge International AS & A Level Computer Science 9618, which is assessed in Paper 1 Theory Fundamentals. They cover every point in sections 3.1 (computers and their components) and 3.2 (logic gates and logic circuits). Answers are written in mark-scheme style: each [1] is one creditable point.

---

## Questions

**1.** Explain why a laptop computer needs both primary memory and secondary storage. **[3]**

**2.** A smart thermostat controls the heating in a house. It contains an embedded system.

**(a)** State what is meant by an embedded system. **[1]**
**(b)** Give **two** benefits and **one** drawback of using an embedded system in the thermostat. **[3]**

**3.** Describe how a laser printer produces a printed page. **[5]**

**4.** Describe how data is read from an optical disc. **[3]**

**5.** A tablet computer has a capacitive touchscreen. Describe how the touchscreen detects where the user touches it. **[3]**

**6.** Explain how a buffer is used when a computer sends a long document to a printer. **[3]**

**7.** **(a)** Give **two** differences between SRAM and DRAM. **[2]**
**(b)** State which of SRAM or DRAM is used for cache memory, and justify your choice. **[2]**

**8.** A games console stores its start-up program in ROM, and its manufacturer wants to send firmware updates to consoles already sold. Explain why EEPROM is more suitable than PROM or EPROM for this. **[3]**

**9.** A swimming pool's water temperature is kept between 26 °C and 28 °C by a computer system.

**(a)** Explain why this is a control system and not a monitoring system. **[2]**
**(b)** Describe how the system uses a sensor, an actuator and feedback to keep the water temperature in range. **[4]**

**10.** Draw up the truth table for the logic expression X = (A NOR B) OR (B AND C). Show a working column for each gate. **[4]**

**11.** A greenhouse sprinkler S switches on (S = 1) when:

- the soil is dry (D = 1) and it is daytime (T = 1), **or**
- the soil is dry and the manual override is off (M = 0).

**(a)** Write a logic expression for S. **[2]**
**(b)** Complete the truth table for S. **[4]**
**(c)** Describe the logic circuit for your expression, gate by gate. **[2]**

**12.** The truth table below shows the output Q of a circuit with inputs P and R.

| P | R | Q |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**(a)** Write a logic expression for Q. **[2]**
**(b)** Name the single gate followed by a NOT gate that gives the same output. **[1]**

**13.** Explain how a microphone converts sound into data a computer can store. **[3]**

---

## Answers

**1.** Primary memory (RAM) holds the programs and data currently being used, because the processor can only execute instructions held in main memory [1]. RAM is volatile, so its contents are lost when the laptop is switched off [1]. Secondary storage is non-volatile and has a larger capacity, so it keeps the operating system, applications and files when the power is off [1].

**2. (a)** A computer system built into a larger device to perform a dedicated function [1].
**(b)** Benefits (any two): small enough to fit inside the thermostat [1]; cheap to mass-produce [1]; low power consumption [1]; reliable because it does only one task [1]. Drawback (any one): difficult for the owner to upgrade [1]; if connected to the internet it could be hacked [1]; faults need a specialist or replacement unit [1].

**3.** Any five, in a sensible order: the drum is given an electric charge [1]; a laser beam scans the drum and changes the charge on areas to form an image of the page [1]; the drum is coated with charged toner, which sticks only to the charged image [1]; paper is given a charge so it attracts the toner from the drum as it passes [1]; the fuser unit heats and presses the paper so the toner melts and fixes [1]; the charge is removed from the drum and excess toner is cleaned off ready for the next page [1].

**4.** A laser beam is shone onto the surface of the spinning disc [1]. The light is reflected differently by pits and lands (or by marked and unmarked areas) [1]. A photodiode / light sensor detects the reflected light, and the changes are converted into binary values [1].

**5.** The screen has a layer that holds an electrostatic field / charge [1]. Touching with a finger (a conductor) changes the capacitance at that point [1]. Sensors detect the change and the controller / processor calculates the coordinates of the touch [1].

**6.** The buffer is a temporary area of memory that holds the data waiting to be printed [1]. The processor fills the buffer quickly and can then carry on with other tasks [1]. The printer, which is much slower, takes data from the buffer at its own speed; when the buffer is empty it requests (e.g. by an interrupt) more data [1].

*Tip:* the buffer only stores data. Do not write that the buffer "sends" data; the processor or printer does the transfer.

**7. (a)** Any two: SRAM does not need refreshing, DRAM must be refreshed constantly [1]; SRAM is faster to access [1]; SRAM is more expensive per bit [1]; SRAM stores fewer bits per chip / is less dense [1]; SRAM uses flip-flops, DRAM uses capacitors [1].
**(b)** SRAM [1]. Cache must be as fast as possible to reduce the time the processor waits, and only a small amount is needed, so its higher cost is acceptable [1].

**8.** PROM can be programmed only once, so the firmware could never be updated [1]. EPROM must be removed from the console and erased with ultraviolet light, which owners cannot do [1]. EEPROM can be erased and rewritten electrically while it stays in the console, so an update can be installed in place [1].

**9. (a)** The computer does not just record or display the temperature [1]; it acts to change the temperature, by switching a heater on or off through an actuator [1].
**(b)** A temperature sensor measures the water temperature and sends readings (via an ADC) to the computer [1]. The computer compares each reading with the stored range 26–28 °C [1]. If the reading is below 26 °C, it sends a signal to an actuator to switch on the heater / open the hot-water valve; above 28 °C it switches it off [1]. Feedback: readings continue to be taken after the actuator acts, and each new reading determines the next action, so the temperature stays within range [1].

**10.**

| A | B | C | A NOR B | B AND C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 | 1 |

Marks: NOR column correct [1]; AND column correct [1]; X correct in rows 1–4 [1]; X correct in rows 5–8 [1].

**11. (a)** S = (D AND T) OR (D AND NOT M) [2]. One mark for each bracketed term joined correctly by OR. D AND (T OR NOT M) is also correct.

**(b)**

| D | T | M | S |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

Marks: rows with D = 0 all 0 [1]; row 1,0,0 [1]; row 1,0,1 [1]; rows 1,1,0 and 1,1,1 [1].

**(c)** An AND gate with inputs D and T; a NOT gate on M feeding an AND gate with D [1]; the outputs of the two AND gates go into an OR gate whose output is S [1].

**12. (a)** Q = (NOT P AND NOT R) OR (P AND R) [2]. One mark per correct term.
**(b)** XOR followed by NOT (an XNOR function) [1]. Q is 1 when the inputs are the same.

**13.** Sound waves make a diaphragm vibrate [1]. The vibration moves a coil in a magnetic field (or changes a capacitance), producing a varying analogue electrical signal [1]. An analogue-to-digital converter samples the signal and turns it into digital values that can be stored [1].

---

## Where marks are usually lost

- Repeating the example in the question (here, "it controls heating") instead of giving a benefit for that device.
- Describing what a laser printer is used for instead of the stages of how it works.
- Saying that EPROM can only be written once; that describes PROM.
- Giving a monitoring answer (display, alarm) for a control question with no actuator.
- Missing rows in a truth table, or drawing NOR and XOR symbols that cannot be told apart.

## Frequently asked questions

**How are logic questions marked?**
Usually by groups of rows or by each correct gate, so a partly correct table still earns marks. Working columns help the examiner find your marks.

**Can I give a simpler logic expression than the one the description suggests?**
Yes. Any expression that gives the same truth table is accepted, unless the question says which gates to use.

**Which paper tests this topic?**
Paper 1 Theory Fundamentals (1 hour 30 minutes, 75 marks), which assesses sections 1 to 8 of the 9618 syllabus.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 3 Hardware. For examiner comments by series, see the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
