---
title: "O Level Computer Science: Automated and Emerging Technologies (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Automated and Emerging Technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
description: "Topic 6 study guide for Cambridge O Level Computer Science 2210: sensor-microprocessor-actuator systems, scenario pros and cons, robots, AI and expert systems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 6 of Cambridge O Level Computer Science (2210) covers technologies that act on the world with little or no human input: automated systems, robots and artificial intelligence. You need to explain how a sensor, a microprocessor and an actuator cooperate, weigh up the advantages and disadvantages of automation in a given setting, describe what makes a machine a robot, and explain how an expert system and machine learning simulate intelligent behaviour.

## Where Topic 6 sits in 2210

This is the last of the six "Computer systems" topics and is examined on Paper 1 (1 hour 45 minutes, 75 marks). Its learning outcomes are identical to Topic 6 of Cambridge IGCSE Computer Science (0478). There are three sub-topics: 6.1 Automated systems, 6.2 Robotics and 6.3 Artificial intelligence. It draws heavily on Topic 3, where the named sensors and actuators are introduced, so revise the two together.

## 6.1 Automated systems

### The three components

| Component | Job in the system |
|---|---|
| Sensor | Measures a physical quantity (temperature, light, moisture, pressure, proximity…) and sends data to the microprocessor |
| Microprocessor | Compares the data with stored values and decides what should happen |
| Actuator | Receives a signal from the microprocessor and produces a physical action — a motor turning, a valve opening, a heater switching on |

These work in a continuous loop. The sensor keeps sending readings, the microprocessor keeps comparing them, and the actuator is switched on or off whenever the readings cross a set value. Because the loop never stops, the system responds to change at once without anyone watching it. If a sensor produces an analogue signal, it is converted to digital before the microprocessor can process it.

### Automation in the seven syllabus scenarios

The syllabus says advantages and disadvantages may be asked about scenarios from industry, transport, agriculture, weather, gaming, lighting and science. Here is one example of each with a balanced view.

| Scenario | Example system | One advantage | One disadvantage |
|---|---|---|---|
| Industry | A bottling plant that stops filling when a level sensor detects a full bottle | Every bottle is filled to the same level, so less product is wasted | A faulty sensor could overfill thousands of bottles before anyone notices |
| Transport | A driverless metro train that stops at platforms and opens its doors | Trains can run closer together on a precise timetable | Passengers may not trust it; very expensive to install |
| Agriculture | An automatic feeding system for dairy cattle | Each animal gets the correct amount at the right time, day and night | Fewer farm jobs; a breakdown could leave animals unfed |
| Weather | An unmanned weather station logging temperature, humidity and pressure | Readings are taken in remote places, at regular intervals, without staff | If it fails in a remote place, repair may take a long time |
| Gaming | A motion-sensing controller using an accelerometer | The game responds instantly to the player's movements | Equipment is costly and may misread movements |
| Lighting | Smart lights that switch on when a room is occupied and dark | Energy is saved because lights are not left on in empty rooms | Lights may switch off while someone sits still |
| Science | An incubator keeping a sample at exactly 37 °C | Conditions stay precise for days, giving reliable results | A power cut or sensor fault could ruin a long experiment |

The skill being tested is matching each point to the context. "It saves money" is weak; "it saves energy because lights are not left on in empty classrooms" is strong.

## 6.2 Robotics

**Robotics** is a branch of computer science that incorporates the design, construction and operation of robots. The syllabus gives factory equipment, domestic robots and drones as examples.

A machine is a robot if it has all three characteristics:

1. a **mechanical structure or framework** — the body, arms, wheels or rotors;
2. **electrical components** such as sensors, microprocessors and actuators;
3. it is **programmable** — its behaviour is set by a program that can be changed.

### Roles, advantages and disadvantages

| Area | Example role | Advantage | Disadvantage |
|---|---|---|---|
| Industry | Spray-painting car bodies | Consistent finish; workers kept away from fumes | High purchase and maintenance cost |
| Transport | Self-driving delivery vehicles | Can operate around the clock | Hard to program for every road situation |
| Agriculture | Drones photographing crops to spot disease | Large fields are surveyed quickly | Limited battery life and affected by wind or rain |
| Medicine | Robots dispensing medicines in a hospital pharmacy | Very accurate doses, fewer human errors | A software fault could affect many patients |
| Domestic | Robotic lawnmower | Saves the owner time | Can be stolen or struggle on rough ground |
| Entertainment | Animatronic figures in a theme park | Repeat the same performance exactly every time | Expensive to build and repair |

## 6.3 Artificial intelligence

**Artificial intelligence (AI)** is a branch of computer science dealing with the simulation of intelligent behaviours by computers. Its main characteristics, as listed in the syllabus, are the collection of data and the rules for using that data, the ability to reason, and — in some systems — the ability to learn and adapt.

The syllabus limits AI systems to two kinds.

### Expert systems

An expert system gives advice in one specialist area. It has four components:

- a **knowledge base** — a store of facts about the area;
- a **rule base** — a set of rules (usually IF … THEN …) for using those facts;
- an **inference engine** — the part that applies the rules to the facts and the user's answers to reach conclusions;
- an **interface** — through which the user answers questions and sees the result.

### Machine learning

**Machine learning** is when a program has the ability to automatically adapt its own processes and/or data. A navigation app that adjusts its predicted journey times after recording thousands of real journeys is adapting its own data, so it is learning rather than following fixed rules.

## Worked example 1: diagnosing a crop disease

*A farmer uses an expert system to identify a disease affecting tomato plants. Describe how it reaches a diagnosis.* [4]

The interface asks the farmer questions, for example about the colour of the leaves [1]. The answers are passed to the inference engine [1], which applies rules from the rule base to the facts in the knowledge base [1]; depending on each answer it chooses the next question to ask. When it has enough information it outputs the most likely disease, often with a probability, through the interface [1].

## Worked example 2: describing an automated system in a new context

*A swimming pool's water must stay between 26 °C and 28 °C.* [4]

A temperature sensor measures the water temperature continuously and sends readings to the microprocessor [1]. The microprocessor compares each reading with the stored values 26 and 28 [1]. If the temperature falls below 26 °C it signals an actuator to switch the heater on; if it rises above 28 °C it signals for the heater to be switched off [1]. The monitoring repeats continuously, so the temperature stays in range [1].

## How to approach it

Learn the sensor → microprocessor → actuator loop as a four-sentence answer you can apply to any scenario. For advantage and disadvantage questions, always write the point and then "so…" with its effect in that situation. For robots, check every answer against the three characteristics. For AI, know which component of an expert system does what, and use the phrase "adapts its own processes and/or data" when defining machine learning.

## Frequently asked questions

**Is every automated system a robot?**
No. A smart lighting system is automated but has no mechanical structure that moves, so it does not meet the robot characteristics. A robot must have a mechanical framework, electrical components and be programmable.

**Which part of an automated system makes decisions?**
The microprocessor. The sensor only measures, and the actuator only carries out the action it is signalled to perform.

**What is the difference between the knowledge base and the rule base?**
The knowledge base stores facts; the rule base stores the rules for using those facts. The inference engine uses both.

**Do I need to know how neural networks work for 2210?**
No. The syllabus limits AI systems to expert systems and machine learning.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210) syllabus for examination in 2026, 2027 and 2028*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf), Subject content, section 6 "Automated and emerging technologies" (6.1–6.3). Checked 2026-11-08.

Next steps: revise from the [Automated and emerging technologies revision notes](/resources/o-level-computer-science-automated-and-emerging-technologies-revision-notes/), then try the [practice questions](/resources/o-level-computer-science-automated-and-emerging-technologies-practice/).
