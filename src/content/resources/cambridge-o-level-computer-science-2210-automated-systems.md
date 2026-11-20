---
title: "Cambridge O Level Computer Science (2210): Automated systems"
seoTitle: "Cambridge O Level CS 2210 Automated Systems Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 6 – Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6.1
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
    subtopic: "automated-systems-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 6.1: how sensors, microprocessors and actuators work together in automated systems, and their advantages and disadvantages in set scenarios."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 6.1 of Cambridge O Level Computer Science 2210 has two learning statements. Candidates should **describe how sensors, microprocessors and actuators can be used in collaboration to create automated systems**, and **describe the advantages and disadvantages of an automated system used for a given scenario**. The scenarios named in the guidance are industry, transport, agriculture, weather, gaming, lighting and science. This guide explains the three components, shows how they form a control loop, and then works through each scenario area so you can write balanced answers.

## Part 1: what is an automated system?

An **automated system** carries out a task with little or no human control. A person decides what the system should do and sets it up. After that, the system monitors the situation and takes action by itself. Examples are a central heating thermostat, an automatic door and a greenhouse watering system.

Every automated system in this section is built from three kinds of component: sensors, microprocessors and actuators.

## Part 2: the three components

### Sensors

A **sensor** is an input device that measures a physical quantity from the environment and sends the readings to the microprocessor.

| Sensor | Measures |
|---|---|
| Temperature | How hot or cold it is |
| Light | Brightness |
| Moisture | Water content of soil or air |
| Pressure | Force on a surface or the pressure of a gas |
| Motion | Movement nearby |
| Infrared | Heat given off by objects, or reflected infrared light |
| Proximity | How close an object is |
| pH | How acidic or alkaline a liquid is |
| Sound | Noise level |

Sensors produce **analogue** signals, which change smoothly. A computer needs digital data, so the signal is converted by an analogue-to-digital converter before it reaches the microprocessor.

### Microprocessors

A **microprocessor** is the processing chip that acts as the brain of the system. It:

1. receives the readings from the sensors;
2. **compares** them with stored values (a target or a limit set by a person);
3. **decides** what action is needed, following a program;
4. **sends a signal** to an actuator.

### Actuators

An **actuator** is an output device that carries out a physical action when it receives a signal from the microprocessor. It changes something in the environment.

| Actuator | Action |
|---|---|
| Motor | Turns or moves something, such as a door or a robot arm |
| Pump | Moves water or another liquid |
| Heater or cooler | Raises or lowers the temperature |
| Valve | Opens or closes the flow of a liquid or gas |
| Lamp | Switches light on or off, or changes brightness |
| Buzzer or siren | Makes a warning sound |

## Part 3: the control loop

The three components work together in a loop that repeats continuously.

1. The sensor measures a value.
2. The reading is converted to digital and sent to the microprocessor.
3. The microprocessor compares the reading with the stored value.
4. If action is needed, it sends a signal to the actuator.
5. The actuator changes the environment.
6. The sensor measures again, so the effect of the action is detected. This is **feedback**.

### Worked example: an automatic watering system in a greenhouse

A moisture sensor is placed in the soil. The target is for moisture to stay at or above 30 (units on the sensor scale).

- Soil is dry: the sensor reads 22. The microprocessor compares 22 with 30, decides it is too low, and sends a signal to switch on the pump (the actuator).
- Water flows. The moisture reading rises as the soil gets wetter.
- The sensor reads 31. The microprocessor compares it with 30 and tells the pump to switch off.

In Cambridge pseudocode the program in the microprocessor could be written like this:

```
CONSTANT MinMoisture ← 30
DECLARE Moisture : INTEGER
DECLARE SystemOn : BOOLEAN
SystemOn ← TRUE
WHILE SystemOn = TRUE DO
   INPUT Moisture
   IF Moisture < MinMoisture
      THEN
         OUTPUT "Pump ON"
      ELSE
         OUTPUT "Pump OFF"
   ENDIF
ENDWHILE
```

`INPUT Moisture` stands for the reading arriving from the sensor, and `OUTPUT` stands for the signal sent to the actuator.

### A second example: a security light

A motion sensor and a light sensor both feed a microprocessor. The microprocessor switches the lamp (the actuator) on only if motion is detected **and** it is dark. This shows that a system can use more than one sensor and combine readings.

## Part 4: advantages and disadvantages

For any automated system, the same general points apply. Always link them to the scenario.

**Advantages**

- **Works continuously**: no need for rest breaks, so the monitoring never stops.
- **Fast and accurate**: readings and responses are quick and consistent.
- **Safer**: can work where it is dangerous or unpleasant for people.
- **Saves labour costs** over time and reduces human error.
- Can make **decisions based on data**, such as saving energy.

**Disadvantages**

- **High initial cost** for equipment, installation and programming.
- **Needs maintenance**, and failure of a sensor or actuator can stop the system or give wrong actions.
- **Job losses** where staff are replaced by the system.
- **Relies on power and software**: a power cut or a software fault can stop it.
- **Cannot cope well with situations it was not programmed for**.
- **Hacking** could allow someone to take control.

## Part 5: the syllabus scenarios

| Area | Example system | Advantage in this scenario | Disadvantage in this scenario |
|---|---|---|---|
| Industry | Robotic assembly line with sensors checking parts | Runs all day and night; consistent quality | Expensive to install; breakdown halts the whole line; jobs lost |
| Transport | Automatic train or a car with an automatic braking system | Reacts faster than a person; may reduce accidents caused by tiredness | A sensor fault could cause an accident; passengers may not trust it; hacking risk |
| Agriculture | Automated irrigation using soil moisture sensors | Water is used only when needed; crops get the right amount; no need for constant checking | Costly for small farms; sensors can be damaged or give false readings |
| Weather | Automatic weather station that records temperature, wind and rain | Collects data in remote places, day and night; readings are regular | Needs power and regular maintenance; harsh weather can damage equipment |
| Gaming | Games that sense the player's movement and respond | More realistic and engaging experience; can adjust difficulty automatically | Needs expensive devices; players may take less physical exercise |
| Lighting | Street lights that switch on when light levels fall | Saves electricity; no need for a person to switch on and off | A faulty light sensor may leave lights on in the day or off at night |
| Science | Data logging of an experiment over days or weeks | Readings are frequent and accurate; no one has to be present; works in hazardous places | Sensor must be calibrated; the system only collects what it was set to collect |

## Worked example

**Question:** A farmer uses sensors, a microprocessor and actuators to control the temperature in a greenhouse. Describe how the system works. [4]

> A temperature sensor in the greenhouse measures the temperature and sends the readings to the microprocessor [1]. The microprocessor compares each reading with the stored value the farmer has chosen [1]. If the temperature is too low, the microprocessor sends a signal to the actuator, which switches the heater on (and if it is too high, a motor opens the vents) [1]. The sensor keeps taking readings, so the system carries on checking and adjusting the temperature [1].

## Common mistakes

- **Calling the sensor the "brain".** The microprocessor processes the data.
- **Forgetting that the actuator does the physical work.** The microprocessor only sends the signal.
- **Missing the comparison step.** The microprocessor compares the reading with a stored value.
- **Leaving out the loop.** The system keeps repeating.
- **Giving generic advantages.** "It is quicker" scores less than a point tied to the scenario.
- **Saying automation removes all humans.** People still design, set up and maintain the system.

## Exam technique

- **Describe how a system works:** sensor, microprocessor (compare with stored value, decide), actuator, repeat.
- **Name the sensor and the actuator that fit the scenario.**
- **Advantages and disadvantages:** give at least one of each, each applied to the scenario.

## Quick check

1. Which component measures the environment? *The sensor.*
2. Which component sends a signal to a pump? *The microprocessor.*
3. Name an actuator. *Motor, pump, heater, valve, lamp or buzzer.*
4. What does the microprocessor compare a sensor reading with? *A stored value.*
5. Give one disadvantage of an automated system. *High cost; job losses; needs maintenance; a fault can stop it.*

## Continue with

Revise with the [Automated systems revision notes](/resources/cambridge-o-level-computer-science-2210-automated-systems-revision-notes/) and practise with the [Automated systems practice questions](/resources/cambridge-o-level-computer-science-2210-automated-systems-practice/).
