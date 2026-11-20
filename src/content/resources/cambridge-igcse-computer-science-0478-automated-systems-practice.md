---
title: "Cambridge IGCSE Computer Science (0478): Automated systems -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 6.1
syllabusTopics:
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
    subtopic: "automated-systems-0478"
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 6.1: automated systems built from sensors, microprocessors and actuators."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [Automated systems study guide](/resources/cambridge-igcse-computer-science-0478-automated-systems/) and [Automated systems revision notes](/resources/cambridge-igcse-computer-science-0478-automated-systems-revision-notes/)

---

## Section A

**1.** Define the term **sensor**. **[1]**

**2.** State the role of the microprocessor in an automated system. **[1]**

**3.** Identify an actuator that could be used in an automated greenhouse. **[1]**

**4.** State **two** types of sensor that could be used in an automated weather station. **[2]**

**5.** Give **one** advantage of using an automated system on a farm. **[1]**

**6.** Give **one** disadvantage of using an automated system in a factory. **[1]**

## Section B

**7.** Describe how a sensor, a microprocessor and an actuator work together in an automatic door in a shopping centre. **[4]**

**8.** A school uses an automated lighting system in its corridors. Describe the advantages of this system. **[3]**

**9.** An automated greenhouse keeps the temperature between 18 °C and 24 °C. The program is shown below.

```
IF Temperature < 18
   THEN
     HeaterOn ← TRUE
   ELSE
     HeaterOn ← FALSE
ENDIF
IF Temperature > 24
   THEN
     WindowOpen ← TRUE
   ELSE
     WindowOpen ← FALSE
ENDIF
```

**(a)** Give the values of `HeaterOn` and `WindowOpen` for a temperature of 16. **[2]**

**(b)** Give the values of `HeaterOn` and `WindowOpen` for a temperature of 26. **[2]**

**(c)** Explain why the sensor must keep taking readings. **[2]**

**10.** An automated irrigation system uses soil moisture sensors. Explain **two** disadvantages of using this system. **[4]**

**11.** Describe how an automated system could be used to control the traffic lights at a busy junction. **[4]**

**12.** Explain why an actuator is needed in an automated system. **[2]**

**13.** Evaluate whether a small family farm should replace manual watering with an automated system. **[5]**

---

## Answers

**1.** An input device that measures a physical quantity (such as temperature or light) and sends the data to the microprocessor [1].

**2.** It processes the data from the sensors, compares it with stored values and decides what action to take [1].

**3.** Any one from: heater, motor for a window or vent, water pump or sprinkler [1].

**4.** Any two from: temperature, pressure, humidity, wind speed, rainfall, light [1 each].

**5.** Any one from: crops are watered only when needed, so water is saved; works all day and night; saves labour [1].

**6.** Any one from: expensive to install; can fail if power or software fails; jobs may be lost; needs maintenance [1].

**7.** The sensor (for example an infrared or motion sensor) detects a person approaching the door [1] and sends the data to the microprocessor [1]. The microprocessor decides the door should open and sends a signal [1] to the actuator, a motor that opens the door [1]. The sensor continues to take readings so the door can close when nobody is near (accept).

**8.** Any three from: lights are only on when light levels are low or when people are present, so electricity is saved [1]; no one has to switch lights on and off, which saves staff time [1]; corridors are lit whenever needed, day and night, so it is safer [1]; the system responds quickly and consistently [1]. Maximum 3.

**9.** **(a)** `HeaterOn` is TRUE [1] and `WindowOpen` is FALSE [1].

**(b)** `HeaterOn` is FALSE [1] and `WindowOpen` is TRUE [1].

**(c)** The temperature changes after the heater or window is used [1], so the readings let the microprocessor decide when to switch the heater or window off again [1]. Accept: the weather outside can change at any time.

**10.** Any two developed disadvantages: the system is expensive to buy and install [1] which may be hard for a small farm to afford [1]; a faulty sensor gives wrong readings [1] so the crops could be over-watered or under-watered [1]; the pumps stop if the power fails [1], so the crops are not watered [1]; the farm needs someone with skills to maintain it [1], which adds cost [1]. Maximum 4.

**11.** Sensors (such as cameras or sensors in the road) detect the number of vehicles waiting [1] and send the data to the microprocessor [1]. The microprocessor compares the data with its stored rules and decides which road should get a green light and for how long [1]. It sends signals to the actuators, the lights, which change colour [1]. Maximum 4.

**12.** Without an actuator, the system would only collect and process data [1]. The actuator carries out the physical action (such as moving, heating or switching) that changes the environment [1].

**13.** Any five from: advantages such as saving water by watering only when needed [1], saving the farmer's time [1] and watering at any time of day or night [1]; disadvantages such as the high cost of sensors, pumps and controller for a small business [1], the need to repair faults [1], risk of crop damage if a sensor fails or power is lost [1]; a judgement supported by the points, for example that automation is worthwhile only if the farm is large enough or water is expensive [1]. Maximum 5.

---

## Where marks are usually lost

- Question 7: saying the sensor "opens the door". The actuator does that.
- Question 8: advantages not linked to lighting, such as "it is cheaper".
- Question 9: reading both conditions as one, or giving TRUE for `WindowOpen` at 16.
- Question 10: listing disadvantages without developing them.
- Question 11: leaving out the actuator or the microprocessor's decision.
- Question 13: describing automation in general with no judgement for this farm.

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| Sensor | Measures and sends data |
| Microprocessor | Compares and decides |
| Actuator | Carries out the action |
| Loop | Sense, process, act, sense again |
