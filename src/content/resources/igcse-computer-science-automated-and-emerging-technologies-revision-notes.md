---
title: "IGCSE Computer Science: Automated and Emerging Technologies — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 6
syllabusTopics:
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
description: "Revision notes on automated systems, sensors and actuators, robots, AI, expert systems and machine learning for Cambridge IGCSE Computer Science 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 6 is about computer systems that act without constant human control: automated systems built from sensors, microprocessors and actuators, robots, and artificial intelligence. In Cambridge IGCSE Computer Science (0478) it is examined on Paper 1, and almost every question is set in a scenario, so you score by applying each idea to the situation given rather than by reciting a definition.

Condensed for the final weeks. For the full explanation and longer worked examples, use the
[Automated and emerging technologies study guide](/resources/cambridge-igcse-computer-science-automated-and-emerging-technologies-study-guide/); to practise, use the
[Automated and emerging technologies practice questions](/resources/igcse-computer-science-automated-and-emerging-technologies-practice/).

## Syllabus coverage

Learning outcomes from the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028:

| Ref | Learning outcome (summarised) |
|---|---|
| 6.1.1 | How sensors, microprocessors and actuators work together in automated systems |
| 6.1.2 | Advantages and disadvantages of an automated system in a given scenario (industry, transport, agriculture, weather, gaming, lighting, science) |
| 6.2.1 | What is meant by robotics |
| 6.2.2 | Characteristics of a robot |
| 6.2.3 | Roles robots can perform, with advantages and disadvantages (industry, transport, agriculture, medicine, domestic, entertainment) |
| 6.3.1 | What is meant by artificial intelligence (AI) |
| 6.3.2 | Main characteristics of AI |
| 6.3.3 | Basic operation and components of AI systems: expert systems and machine learning |

## Key definitions

| Term | Definition to learn |
|---|---|
| Sensor | An input device that measures a physical quantity, such as temperature or light |
| Microprocessor | Processes the data from the sensor and decides what action is needed |
| Actuator | An output device that produces movement or another physical action, such as a motor, valve or pump |
| Automated system | A system that uses sensors, a microprocessor and actuators to perform a task without human intervention |
| Robotics | A branch of computer science that incorporates the design, construction and operation of robots |
| Artificial intelligence (AI) | A branch of computer science dealing with the simulation of intelligent behaviours by computers |
| Expert system | An AI system with a knowledge base, rule base, inference engine and interface that gives advice in one area |
| Machine learning | When a program can automatically adapt its own processes and/or data |

## 6.1 How does an automated system work?

Learn this as a loop — the order is where marks are won.

1. The **sensor** continually measures a physical quantity and sends the readings to the microprocessor (via an analogue-to-digital converter if the reading is analogue).
2. The **microprocessor** compares each reading with a stored value or range.
3. If the reading is outside the range, the microprocessor sends a signal to the **actuator**.
4. The **actuator** carries out the action (opens a valve, switches on a motor, turns on a light).
5. The process repeats continuously, so the system keeps responding to changes.

### Scenario quick-reference

| Area | Example | Sensor | Actuator action |
|---|---|---|---|
| Lighting | Street lights that switch on at dusk | Light | Switches lamps on or off |
| Agriculture | Automatic field irrigation | Moisture | Opens a valve to the water supply |
| Transport | Automatic train doors at a platform | Proximity / pressure | Motor opens or closes the doors |
| Industry | Bottling line filling bottles | Level | Closes the filling valve |
| Weather | Remote weather station | Temperature, humidity, pressure | Stores and transmits readings (data logging) |
| Science | Laboratory experiment monitoring | pH, temperature | Adds a chemical or adjusts a heater |
| Gaming | Motion-controlled console | Accelerometer | Changes what is shown on screen or makes a controller vibrate |

### Advantages and disadvantages of automated systems

| Advantages | Disadvantages |
|---|---|
| Faster response to changes than a human | Expensive to set up and maintain |
| Work continuously, 24 hours a day | Can fail if a sensor or actuator breaks, and may not detect its own fault |
| More accurate and consistent | May reduce the number of jobs |
| Safer: people do not need to work in dangerous places | Vulnerable to hacking if connected to a network |
| Can reduce waste, such as water or energy | Cannot cope with situations they were not programmed for |

Always tie each point to the scenario: "the irrigation system only waters when the soil is dry, so less water is wasted" scores; "it saves resources" may not.

## 6.2 Robots

**Characteristics of a robot (learn all three):**

- a **mechanical structure or framework**
- **electrical components**, such as sensors, microprocessors and actuators
- it is **programmable**

Examples in the syllabus: factory equipment, domestic robots and drones.

| Area | Example role | Advantage | Disadvantage |
|---|---|---|---|
| Industry | Welding car bodies | Works without breaks, consistent quality | High initial cost; fewer jobs |
| Transport | Driverless vehicles | Can reduce human error | Hard to program for every situation; public trust |
| Agriculture | Fruit-picking robots, crop-spraying drones | Works long hours, sprays exact amounts | Expensive; may damage crops if sensors fail |
| Medicine | Surgical robots | Very steady and precise | Expensive; surgeons need training |
| Domestic | Robot vacuum cleaners | Saves the owner time | Struggles with stairs and clutter |
| Entertainment | Animatronics in theme parks or films | Repeatable, realistic movement | Costly to build and maintain |

## 6.3 Artificial intelligence

**Main characteristics of AI (6.3.2):** the collection of data and the rules for using that data; the ability to reason; and it can include the ability to learn and adapt.

### Expert system components

| Component | Role |
|---|---|
| Knowledge base | Stores the facts about the area of expertise |
| Rule base | Stores the IF–THEN rules used to apply the facts |
| Inference engine | Applies the rules to the facts and the user's answers to reach a conclusion |
| Interface | Lets the user enter information and see the conclusion and explanation |

**How it runs:** the interface asks questions → the user's answers are passed to the inference engine → the inference engine searches the knowledge base using the rule base → it may ask further questions → it outputs a conclusion (often with a probability) through the interface.

**Machine learning:** the program automatically adapts its own processes and/or data, for example as it is given more examples, so its performance improves without it being reprogrammed.

## Worked example: describing an automated system in full

*An automatic barrier at a car park exit opens when a car pulls up.* Describe how the system works. [4]

- A proximity (or pressure) sensor detects the car and sends data to the microprocessor. [1]
- The microprocessor compares the reading with a stored value to decide whether a car is present. [1]
- If a car is present, the microprocessor sends a signal to the actuator (motor), which raises the barrier. [1]
- The sensor keeps monitoring; when the car has passed, the microprocessor signals the motor to lower the barrier. [1]

## Common mistakes / exam traps

- Calling a sensor an actuator or vice versa. A sensor is input; an actuator is output that causes movement.
- Saying "the sensor decides" — only the microprocessor makes decisions.
- Forgetting that the process is continuous.
- Writing generic advantages ("it's better") that do not mention the scenario.
- Saying a robot must look like a human. The syllabus characteristics are framework, electrical components and programmable.
- Mixing up the knowledge base (facts) and the rule base (rules).
- Calling any program that follows fixed rules "machine learning". Machine learning means the program adapts itself.

## Frequently asked questions

**Is a robot always an automated system?**
A robot uses sensors, microprocessors and actuators like an automated system, but its defining features in 0478 are a mechanical framework, electrical components and being programmable. Many robots are also remotely controlled by people.

**What is the difference between an expert system and machine learning?**
An expert system applies fixed rules in its rule base to the facts in its knowledge base. Machine learning changes its own processes or data as it gets more data, so its behaviour adapts.

**Do I need to name the type of sensor?**
Yes, in scenario questions name a specific sensor (light, moisture, proximity) and say what it measures. The hardware topic (3.2) lists the sensors you should know.

## Self-test

1. State the role of the actuator in an automated system.
2. Give the three characteristics of a robot.
3. State two disadvantages of using robots in a factory.
4. Name the four components of an expert system.
5. State what is meant by machine learning.

**Answers:** 1. To carry out a physical action, such as turning a motor or opening a valve, when it receives a signal from the microprocessor. 2. A mechanical structure or framework; electrical components such as sensors, microprocessors and actuators; it is programmable. 3. Any two: high cost of buying and maintaining them; fewer jobs for workers; they cannot adapt to tasks they were not programmed for. 4. Knowledge base, rule base, inference engine and interface. 5. A program that can automatically adapt its own processes and/or data.
