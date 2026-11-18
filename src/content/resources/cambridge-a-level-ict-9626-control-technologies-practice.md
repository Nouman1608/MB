---
title: "Cambridge A Level Information Technology (9626): Control technologies -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 3 – Monitoring and control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "control-technologies"
description: "Twelve original Cambridge 9626 IT section 3.2 questions with answers: control sensors, actuators, named systems, a control algorithm and a trace table."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Control technologies study guide](/resources/cambridge-a-level-ict-9626-control-technologies/) | [Control technologies revision notes](/resources/cambridge-a-level-ict-9626-control-technologies-revision-notes/)

These questions are for **section 3.2 Control technologies** (Topic 3, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Algorithms use the pseudocode style of section 4.1. All organisations and figures are invented.

---

## Section A

**1.** State the function of an actuator and give **one** example. **[2]**

**2.** Explain how an induction loop is used in a car park barrier system. **[2]**

**3.** Explain why touch sensors are used in devices that detect the cooling water level in a nuclear power plant. **[2]**

**4.** Identify the type of actuator used in each case: bus doors opened by compressed air; road bollards raised by pressurised oil; a door held shut by an electromagnet. **[3]**

**5.** Explain what is meant by feedback in a control system. **[2]**

**6.** Explain **one** advantage of using a Wireless Sensor and Actuator Network to water a large orchard. **[2]**

## Section B

**7.** A central heating system keeps a room at 20 °C.

**(a)** Describe how the system does this. **[4]**

**(b)** Explain **one** disadvantage of computer-controlled central heating. **[2]**

**8.** An office air-conditioning system switches cooling on when the temperature is above 25 °C and off when it is below 23 °C. Fans run when the humidity is above 60% and stop otherwise. The system runs until it is switched off. Write an algorithm for this system. **[6]**

**9.** A greenhouse checks soil moisture five times a day using this algorithm.

```
Minutes ← 0
FOR Check ← 1 TO 5
    READ Moisture from moisture sensor
    IF Moisture < 35 THEN
        Open water valve for 10 minutes
        Minutes ← Minutes + 10
    ENDIF
NEXT Check
PRINT Minutes
```

The readings are 40, 30, 33, 36 and 20. Complete a trace table and state the output. **[4]**

**10.** Describe how a computer-controlled burglar alarm uses sensors to protect a house. **[5]**

**11.** Explain how sensors and computer control are used on a smart motorway. **[4]**

**12.** Evaluate the use of computer control in a large commercial greenhouse. **[6]**

---

## Answers

**1.** An actuator turns a signal from the microprocessor into physical movement or action [1], for example a motor that opens a greenhouse vent [1]. **[2]**

**2.** A loop of wire is buried in the road in front of the barrier, and the car's metal body changes its magnetic field [1]; the microprocessor detects this change, knows a car is waiting, and raises the barrier [1]. **[2]**

**3.** The probe detects whether water is touching it at a set level [1]; if the water falls below the probe, the system immediately starts pumps or raises an alarm, preventing overheating without needing a person to check [1]. **[2]**

**4.** Pneumatic [1]; hydraulic [1]; magnetic [1]. **[3]**

**5.** The result of the system's action changes the next sensor reading [1], and the system uses that reading to decide its next action, for example switching the heater off once the room warms [1]. **[2]**

**6.** Sensors and actuators communicate without cables, so they can be spread across the whole orchard cheaply [1], and each area can be watered only when its own soil is dry, saving water [1]. **[2]**

**7. (a)** A temperature sensor measures the room temperature continuously [1]. The reading is converted to digital and compared by the microprocessor with the preset 20 °C [1]. If it is below 20 °C, a signal switches the boiler and pump on; if above, they are switched off [1]. The sensor keeps reading, so the system responds to the effect of its own action [1].

**(b)** If the sensor fails or is badly placed, for example near a sunny window, the system acts on wrong readings [1], so the room could become too cold or waste energy [1]. **[6]**

**8.** Example algorithm:

```
REPEAT
    READ Temp from temperature sensor
    IF Temp > 25 THEN
        Switch cooling on
    ELSE
        IF Temp < 23 THEN
            Switch cooling off
        ENDIF
    ENDIF
    READ Humidity from humidity sensor
    IF Humidity > 60 THEN
        Switch fans on
    ELSE
        Switch fans off
    ENDIF
    INPUT Power
UNTIL Power = 0
```

Marking: a loop with a way to end [1]; temperature read inside the loop [1]; cooling on above 25 [1]; cooling off below 23, with no change in between [1]; humidity read and fans switched on above 60 and off otherwise [1]; correct structure with each IF closed by ENDIF [1]. **[6]**

**9.** Trace:

| Check | Moisture | Valve opened? | Minutes |
|---|---|---|---|
| 1 | 40 | No | 0 |
| 2 | 30 | Yes | 10 |
| 3 | 33 | Yes | 20 |
| 4 | 36 | No | 20 |
| 5 | 20 | Yes | 30 |

Checks 1 and 4 correct [1]; checks 2 and 3 correct [1]; check 5 correct [1]; output **30** [1]. **[4]**

**10.** When the alarm is set, the microprocessor reads its sensors continuously [1]. Infrared sensors detect the body heat of a person moving in a room [1]; magnetic field sensors on doors and windows detect when a magnet moves away as they open [1]; sound sensors detect breaking glass [1]. If any sensor is triggered, the system starts an entry delay and, if the code is not entered, sounds the siren or alerts a monitoring company [1]. **[5]**

**11.** Sensors such as induction loops in the road measure traffic speed and flow [1]. The data is sent to a control centre computer [1], which compares it with preset values and sets variable speed limits on overhead signs to smooth traffic [1]. After an incident it can close a lane by displaying a closure sign, keeping traffic away from the hazard [1]. **[4]**

**12.** Advantages: conditions are kept within precise limits day and night, improving crop growth [1]; watering and heating happen only when needed, saving water and energy [1]; fewer staff are needed for routine checks [1]. Disadvantages: high installation and maintenance cost [1]; a faulty sensor could cause over-watering or overheating that damages a whole crop [1]. Conclusion: worthwhile for a large commercial greenhouse because savings and better yields over many crops outweigh the cost, provided sensors are maintained and an alarm warns staff of faults [1]. **[6]**

## Where marks are usually lost

- Reading the sensor once, before the loop starts.
- Using one threshold when the question gives two values.
- Leaving out the actuator signal, so the algorithm decides but never acts.
- Skipping rows in a trace table or recording values that did not change.
- Describing a monitoring system when asked about control.
