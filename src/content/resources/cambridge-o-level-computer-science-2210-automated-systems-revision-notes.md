---
title: "Cambridge O Level Computer Science (2210): Automated systems -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Automated Systems Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 6.1: sensors, microprocessors and actuators, the control loop, scenario advantages and disadvantages, and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 6.1, Automated systems. For the full explanations and worked examples, use the [Automated systems study guide](/resources/cambridge-o-level-computer-science-2210-automated-systems/).

## Syllabus checklist

- How sensors, microprocessors and actuators can be used in collaboration to create automated systems.
- The advantages and disadvantages of an automated system used for a given scenario, from: industry, transport, agriculture, weather, gaming, lighting and science.

## Key terms

| Term | Definition |
|---|---|
| Automated system | A system that carries out a task with little or no human control |
| Sensor | An input device that measures a physical quantity and sends readings to the microprocessor |
| Microprocessor | The chip that processes the sensor data, compares it with stored values and decides what to do |
| Actuator | An output device that carries out a physical action when it receives a signal |
| Feedback | The effect of the action is measured again by the sensor |
| Analogue | A signal that changes smoothly, as most sensors produce |
| Digital | Data in binary, which the microprocessor needs |
| Analogue-to-digital converter (ADC) | Converts the sensor's analogue signal to digital |

## The roles

| Component | Role | Examples |
|---|---|---|
| Sensor | **Input**: measures the environment | Temperature, light, moisture, pressure, motion, infrared, pH, sound |
| Microprocessor | **Process**: compares and decides | One chip running a program |
| Actuator | **Output**: acts on the environment | Motor, pump, heater, valve, lamp, buzzer |

## The loop in six steps

1. Sensor measures.
2. Reading is converted to digital and sent on.
3. Microprocessor compares it with the stored value.
4. Microprocessor decides on the action.
5. Signal sent to the actuator.
6. Actuator acts; the sensor measures again (feedback).

### Quick pseudocode pattern

```
WHILE SystemOn = TRUE DO
   INPUT Reading
   IF Reading < Limit
      THEN
         OUTPUT "Actuator ON"
      ELSE
         OUTPUT "Actuator OFF"
   ENDIF
ENDWHILE
```

## Matching sensor and actuator to a scenario

| Scenario | Sensor | Action by actuator |
|---|---|---|
| Greenhouse heating | Temperature | Heater on or vents opened by a motor |
| Automatic watering | Moisture | Pump on |
| Street light | Light | Lamp on at dusk |
| Automatic door | Motion or infrared | Motor opens the door |
| Burglar alarm | Motion or pressure | Siren sounds |
| River monitoring | Water level | Gate or warning light |

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Works 24 hours a day | High cost to install |
| Fast, accurate and consistent | Needs maintenance; a faulty sensor gives wrong actions |
| Can work in dangerous places | Jobs can be lost |
| Saves labour costs and reduces human error | Stops in a power cut or a software fault |
| Saves resources, for example energy or water | Cannot cope with unexpected situations |
| Data can be recorded | Risk of hacking |

## Scenario bank

| Scenario | One advantage | One disadvantage |
|---|---|---|
| Industry | Production line runs without breaks; consistent quality | Expensive; a breakdown stops the line |
| Transport | Reacts faster than a human driver | Sensor fault could cause an accident |
| Agriculture | Water used only when the soil is dry | Costly for small farms |
| Weather | Collects data in remote places all day and night | Equipment can be damaged by harsh weather |
| Gaming | Responds to the player's movement for a realistic game | Needs expensive equipment |
| Lighting | Saves electricity by switching off automatically | Faulty light sensor leaves lights on |
| Science | Frequent readings without a person present | Sensor must be calibrated; may miss unexpected events |

## Answer templates

**Describe how an automated system works (4 marks):** sensor measures; microprocessor compares with stored value; signal sent to actuator; process repeats.

**Give advantages and disadvantages for a scenario (4 marks):** two advantages and two disadvantages, each tied to the scenario and explained.

**Name the components for a given system (3 marks):** one sensor that suits the quantity; the microprocessor; one actuator that suits the action.

## Exam traps

- **Sensors "decide".** The microprocessor decides.
- **The microprocessor "switches on" the heater itself.** It sends a signal; the actuator does the work.
- **A fan as a sensor.** A fan is an actuator.
- **No stored value.** The comparison needs a target or limit.
- **Same generic point repeated.** "Cheaper" and "saves money" are one point.
- **No scenario link.** Always say what is being measured or controlled.

## Self-test

1. What does a sensor do?
2. What is the role of the microprocessor?
3. What does an actuator do?
4. Name two types of sensor.
5. Name two types of actuator.
6. Why is the sensor reading converted to digital?
7. What is meant by feedback?
8. Which sensor suits a street light that comes on at dusk?
9. Give two advantages of an automated system.
10. Give two disadvantages of an automated system.
11. In an automatic watering system, what does the microprocessor compare the sensor reading with?
12. Name the components needed for an automatic door.

**Answers**

1. It measures a physical quantity from the environment and sends the reading to the microprocessor.
2. It processes the readings, compares them with stored values, decides what action is needed and sends signals to the actuators.
3. It carries out a physical action when it receives a signal.
4. Any two: temperature, light, moisture, pressure, motion, infrared, pH, sound.
5. Any two: motor, pump, heater, valve, lamp, buzzer.
6. The microprocessor can only process digital (binary) data.
7. The sensor measures the result of the actuator's action, so the system can adjust again.
8. A light sensor.
9. Any two: works continuously; fast and accurate; safer; saves labour costs; reduces human error.
10. Any two: high cost; maintenance; job losses; stops with power or software failure; cannot cope with the unexpected.
11. A stored value (the minimum moisture level set for the soil).
12. A motion or infrared sensor, a microprocessor and a motor.
