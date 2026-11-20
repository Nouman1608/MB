---
title: "Cambridge IGCSE Computer Science (0478): Automated systems -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 6.1: the sensor, microprocessor and actuator loop and the advantages and disadvantages of automated systems."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 6.1, Automated systems: how sensors, microprocessors and actuators work as a loop, and how to judge an automated system in a given scenario.

## Four facts to start with

1. A **sensor** is an input device that measures the environment.
2. A **microprocessor** processes the readings and makes decisions.
3. An **actuator** is an output device that causes movement or change.
4. The system works in a **loop**: sense, process, act, sense again.

## Key terms

| Term | Definition |
|---|---|
| Automated system | System that carries out a task with little or no human control |
| Sensor | Input device that measures a physical quantity |
| Microprocessor | Processor that compares data with stored values and decides what to do |
| Actuator | Output device that moves or changes something when it receives a signal |
| Feedback loop | Repeated sensing, processing and acting so the result is measured again |
| ADC | Analogue-to-digital converter: turns a sensor's analogue reading into digital data |

## The control loop

| Step | Part | Action |
|---|---|---|
| 1 | Sensor | Measures and sends the reading |
| 2 | Microprocessor | Compares with the stored value |
| 3 | Microprocessor | Sends a signal if action is needed |
| 4 | Actuator | Carries out the action |
| 5 | Sensor | Measures the effect and the loop repeats |

## Scenario bank

| Scenario | Sensor | Actuator |
|---|---|---|
| Industry | Temperature, pressure | Valve, motor, robotic arm |
| Transport | Distance, speed, camera | Brakes, motor, signals |
| Agriculture | Soil moisture, light | Pump, sprinkler, vent |
| Weather | Temperature, pressure, wind | Often none; data collected |
| Gaming | Motion, touch | Vibration motor, display |
| Lighting | Light, motion | Switch, dimmer |
| Science | Temperature, pH | Heater, stirrer, valve |

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Works 24 hours a day | Expensive to buy and install |
| Accurate and consistent | Needs maintenance and skilled staff |
| Fast response | Jobs may be lost |
| Safer in dangerous places | Fails if power or software fails |
| Saves labour cost over time | Cannot deal with unplanned situations |
| Saves water, heat or electricity | May be hacked if connected to a network |

## Worked example: street lamp

A lamp has a light sensor. The microprocessor holds the value 40 (units of light). A reading of 25 arrives: 25 is below 40, so the microprocessor tells the switch (actuator) to turn the lamp on. In the morning the reading rises to 60: 60 is above 40, so the lamp is turned off.

## Worked example: trace of a greenhouse program

Limits: low 18, high 24.

| Reading | Heater | Window |
|---|---|---|
| 15.0 | On | Shut |
| 20.5 | Off | Shut |
| 26.0 | Off | Open |

## Model answer to learn: linking the parts to a scenario

*Scenario: an automatic watering system in a garden.* A moisture sensor measures how wet the soil is and sends the reading to the microprocessor. The microprocessor compares the reading with the stored value for dry soil. If the soil is too dry, it sends a signal to the actuator, a pump or valve, which waters the plants. The sensor keeps measuring, so the microprocessor can stop the pump when the soil is wet enough.

## Advantages and disadvantages: how to develop a point

A one-word point earns little. Add a reason and a link to the scenario.

| Weak | Developed |
|---|---|
| "It is cheaper" | "It saves labour costs because fewer workers are needed to monitor the process" |
| "It is faster" | "The microprocessor reacts within a fraction of a second, so the valve closes before the tank overflows" |
| "It can break" | "A faulty temperature sensor sends wrong readings, so the heater may stay on and damage the crop" |

## Exam traps

- **Sensor decides.** The microprocessor decides.
- **Actuator measures.** The sensor measures.
- **Order wrong.** Always sensor, microprocessor, actuator.
- **Context missing.** Advantages must refer to the scenario.
- **No loop.** Say that readings continue.
- **"Never makes mistakes."** A faulty sensor or program causes errors.

## Self-test

1. What is a sensor?
2. What is an actuator?
3. What does the microprocessor do with the sensor data?
4. Give a sensor and an actuator used in a greenhouse.
5. Why does the system keep taking readings?
6. Give two advantages of an automated system.
7. Give two disadvantages of an automated system.
8. In a street lighting system, what does the light sensor measure?
9. Why might a farmer worry about a faulty moisture sensor?
10. Give one use of an automated system in weather monitoring.

**Answers**

1. An input device that measures a physical quantity and sends the data to the microprocessor.
2. An output device that causes a movement or change when it receives a signal.
3. Compares it with stored values and decides what action is needed.
4. Sensor: temperature (or light, moisture); actuator: heater, window motor, pump or sprinkler.
5. So the system can check the effect of its action and keep conditions correct.
6. Any two from: works continuously, accurate, quick response, safer, saves labour cost, saves resources.
7. Any two from: expensive, needs maintenance, jobs lost, fails when power or software fails, less flexible, security risk.
8. How much light there is.
9. It could give wrong data, so crops could be over-watered or under-watered.
10. Sensors measure temperature, pressure, humidity or wind and send the data to a computer, which records it without anyone present.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## Next steps

Read the full explanations in the [Automated systems study guide](/resources/cambridge-igcse-computer-science-0478-automated-systems/), then try the [Automated systems practice questions](/resources/cambridge-igcse-computer-science-0478-automated-systems-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 6.1:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
