---
title: "Cambridge IGCSE Computer Science (0478): Automated systems"
resourceType: "study-guides"
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
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 6.1: how sensors, microprocessors and actuators work together, with advantages and disadvantages of automated systems in industry, transport, agriculture, weather, gaming, lighting and science."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
Section 6.1 of the Cambridge IGCSE Computer Science 0478 syllabus has two content statements. You must **describe how sensors, microprocessors and actuators can be used in collaboration to create automated systems**, and you must **describe the advantages and disadvantages of an automated system used for a given scenario**. The syllabus lists scenarios from **industry, transport, agriculture, weather, gaming, lighting and science**.

An **automated system** is a system that carries out a task with little or no human control, because a computer makes the decisions and devices carry them out.

## The three building blocks

| Component | Role | Examples |
|---|---|---|
| **Sensor** | An input device that measures a physical quantity from the environment and sends the data to the microprocessor | Temperature, light, moisture, pressure, motion, infrared, sound, pH |
| **Microprocessor** | Processes the data from the sensors, compares it with stored values and decides what to do | A small processor in a greenhouse controller or traffic light controller |
| **Actuator** | An output device that causes something to move or change in response to a signal from the microprocessor | Motor, heater, valve, pump, lamp, buzzer, door lock |

Sensors often produce **analogue** data, which is a continuous reading. A microprocessor works with digital data, so the reading is converted by an analogue-to-digital converter (ADC). If an actuator needs an analogue signal, a digital-to-analogue converter (DAC) is used. In an exam it is enough to say that the sensor sends data to the microprocessor, which sends a signal to the actuator.

## How the parts work together

An automated system works in a **loop**. This is sometimes called a feedback loop, because the result of the action is measured again.

1. The **sensor** measures the physical quantity and sends the reading to the microprocessor.
2. The **microprocessor** compares the reading with a stored value (the target or limit).
3. If action is needed, the microprocessor sends a signal to the **actuator**.
4. The **actuator** carries out the action, which changes the environment.
5. The sensor measures again, and the loop continues.

### Worked example 1: greenhouse temperature

A greenhouse must stay between 18 °C and 24 °C.

| Part | What it does |
|---|---|
| Temperature sensor | Measures the air temperature every few seconds and sends it to the microprocessor |
| Microprocessor | Compares the reading with 18 and 24 |
| Heater (actuator) | Switched on when the temperature is below 18 |
| Window motor (actuator) | Opens the window when the temperature is above 24 |

Pseudocode for the control program, written using the conventions in the syllabus:

```
CONSTANT LowLimit ← 18
CONSTANT HighLimit ← 24
// ReadTemperature returns the sensor reading as a REAL
WHILE TRUE DO
    Temperature ← ReadTemperature()
    IF Temperature < LowLimit
       THEN
         HeaterOn ← TRUE
         WindowOpen ← FALSE
       ELSE
         HeaterOn ← FALSE
         IF Temperature > HighLimit
            THEN
              WindowOpen ← TRUE
            ELSE
              WindowOpen ← FALSE
         ENDIF
    ENDIF
ENDWHILE
```

The two variables `HeaterOn` and `WindowOpen` are sent to the heater and the window motor. Trace for the readings 16.5, 21.0 and 25.2:

| Reading | HeaterOn | WindowOpen | Explanation |
|---|---|---|---|
| 16.5 | TRUE | FALSE | Below 18, so heat and keep the window shut |
| 21.0 | FALSE | FALSE | Within the range, so do nothing |
| 25.2 | FALSE | TRUE | Above 24, so open the window |

### Worked example 2: street lighting

A light sensor on a lamp post measures the light level. When the level falls below a set value, the microprocessor signals a switch (actuator) to turn the lamp on. In the morning the level rises above a second value and the lamp is turned off. A motion sensor can be added so that the lamp brightens only when someone is nearby, which saves energy.

## Scenarios in the syllabus

Be ready to apply the three parts to each scenario.

| Scenario | Sensors | Microprocessor decision | Actuators |
|---|---|---|---|
| Industry | Temperature, pressure, position | Keep a chemical process in safe limits; check items on a production line | Valves, motors, robotic arms |
| Transport | Distance, speed, infrared, camera | Detect obstacles, control speed, change traffic signals | Brakes, motors, signals |
| Agriculture | Soil moisture, temperature, light | Decide when plants need water or heat | Pumps, sprinklers, heaters, vents |
| Weather | Temperature, pressure, humidity, wind | Record the readings and send them to a computer | Often none; the system collects data (some stations raise an alert or move equipment) |
| Gaming | Motion, touch, pressure | Work out the player's movements and update the game | Vibration motor in a controller, display, speakers |
| Lighting | Light, motion | Decide when a lamp should be on | Switches, dimmers |
| Science | Temperature, pH, pressure | Keep conditions steady during an experiment or collect data over a long time | Heaters, stirrers, valves |

## Advantages and disadvantages

### Advantages

- **Works continuously.** There are no breaks, so the task is monitored 24 hours a day.
- **More accurate and consistent.** The system measures precisely and responds in the same way each time.
- **Faster response.** The system can react to a change in a fraction of a second.
- **Safer.** It can work in places that are dangerous or hard for humans to reach, such as a hot factory or the inside of a nuclear plant.
- **Saves labour costs** in the long term, because fewer workers are needed to monitor processes.
- **Can save resources.** Water, heat and electricity are only used when needed.

### Disadvantages

- **High cost to buy and install** the sensors, microprocessors and actuators.
- **Needs maintenance and skilled staff.** Faulty sensors give wrong readings, and the system may make a wrong decision.
- **Jobs may be lost** where machines replace people.
- **Depends on power and software.** A power cut or a software error can stop the system or cause damage.
- **Less flexible.** The system can only deal with situations that were programmed.
- **Security risk.** If a system is connected to a network, it may be hacked.

### Applying them to a scenario

Questions ask for advantages and disadvantages "for a given scenario". Link each point to the context. For an automated irrigation system on a farm:

| Advantage | Disadvantage |
|---|---|
| Soil moisture is checked all day and night, so crops are watered only when needed, saving water | The sensors, pumps and controller cost a lot to buy and set up |
| The farmer does not need to water the fields by hand, so there is more time for other work | A faulty moisture sensor could cause over-watering or under-watering and damage the crop |
| The right amount of water is given to each part of the field | If power fails the pumps stop and the crops are not watered |

## Annotated model answer

**Question:** A farm uses an automated system to keep the temperature of a greenhouse between 18 °C and 24 °C. Describe how a sensor, a microprocessor and an actuator work together. [4]

> The temperature sensor measures the temperature inside the greenhouse and sends the data to the microprocessor [1]. The microprocessor compares the reading with the stored limits of 18 °C and 24 °C [1]. If the reading is outside the limits, the microprocessor sends a signal to the actuator, such as a heater or a window motor [1]. The actuator switches on or opens, which changes the temperature, and the sensor continues to take readings [1].

**Why it scores 4:** it uses the scenario (greenhouse, 18 and 24, heater, window) and follows the loop in order. Answers that say "the sensor does everything" score nothing for the microprocessor's decision.

## Common mistakes

- Saying the sensor "decides" what to do. The microprocessor decides.
- Saying the actuator collects data. It carries out an action.
- Describing a robot's whole behaviour without naming a sensor, microprocessor and actuator.
- Giving general advantages ("it is better") without linking to the scenario.
- Forgetting that the loop repeats. The sensor keeps taking readings.
- Claiming that an automated system never makes errors. A faulty sensor or program causes mistakes.

## Exam technique

- **Describe how they work together**: name the three parts and put them in order: sensor, microprocessor, actuator.
- **Advantages and disadvantages for a scenario**: use one point from the context for each.
- **Use values from the question**: for example "below 18 °C" instead of "too cold".
- **Explain** why a sensor is needed in a scenario by saying what it measures.

## Practise this sub-topic

Use the [Automated systems revision notes](/resources/cambridge-igcse-computer-science-0478-automated-systems-revision-notes/) for quick recall and the [Automated systems practice questions](/resources/cambridge-igcse-computer-science-0478-automated-systems-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 6.1 Automated systems:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
