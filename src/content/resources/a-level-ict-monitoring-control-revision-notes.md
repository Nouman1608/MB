---
title: "Cambridge A-Level ICT: Monitoring and Control — Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Section 3 – Monitoring and Control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
description: "Condensed recall notes on sensors, calibration, actuators, and microprocessor-controlled systems for Cambridge International AS & A Level ICT (9626), Section 3."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Monitoring and Control study guide](/resources/a-level-cambridge-ict-monitoring-and-control/).

## Monitoring vs control — keep them separate

| | Monitoring | Control |
|---|---|---|
| What it does | Reads/records a value for review | Triggers an automatic response |
| Example | A weather station logging humidity | A greenhouse vent opening at a temperature threshold |
| Human involvement | Human reviews the data | No human decision needed |

**The most common way marks are lost**: describing a monitoring
scenario when the question asks about control, or vice versa.

## 3.1 Sensors and calibration

**Named sensors**: light/UV, temperature, pressure, humidity, pH, gas
(oxygen, CO₂, CO, nitrogen oxides), sound, infrared, touch,
(electro)magnetic field, proximity.

**Monitoring uses**: environmental (water pollution, weather
stations, ambient temperature, atmospheric pressure, humidity,
sunlight) and patient monitoring.

| Calibration type | What it does |
|---|---|
| One-point | Checks against a single known reference value |
| Two-point | Checks at two points (low/high range), adjusts offset and scale error |
| Multipoint | Checks several points across the range for highest accuracy where response isn't perfectly linear |

## 3.2 Control: matching sensor to real-world use

| Sensor | Named application | Why it fits |
|---|---|---|
| Touch | Fluid level (nuclear plant cooling water) | Physical contact detection |
| Light | Car park barrier | Detects presence/level of light |
| Moisture | Soil water content | Measures moisture directly |
| Infrared | Burglar alarm | Detects body heat, no contact needed |
| Proximity | Smartphone screen near ear | Detects closeness without contact |
| Sound | Burglar alarm | Detects noise |

**Always justify the fit** — naming a sensor without saying *why* it
suits the scenario loses marks. A vague "temperature sensor for
conditions" answer is weaker than "temperature sensor because it
specifically measures temperature, triggering the vent at a defined
threshold."

**Actuators** carry out: linear, rotary, soft, hydraulic, pneumatic,
electric, thermal, magnetic, mechanical actions.

**Microprocessor-controlled systems** (named): greenhouses, central
heating, air conditioning, burglar alarms, traffic/pedestrian flow
(smart motorways), car park barriers, traffic lights, wireless
sensor/actuator networks, smart homes.

## Worked example: sensor → microprocessor → actuator chain

A greenhouse vent system:

```
1. SENSOR:        Temperature sensor takes a reading
2. MICROPROCESSOR: Compares reading against a stored threshold
3. DECISION:       Reading > threshold?
4. ACTUATOR:       If yes, motorised/pneumatic actuator opens vent
                    (rotary or linear movement)
5. LOOP:            System re-checks the sensor continuously --
                    reverse signal closes vent once temperature
                    drops back below threshold
```

A flowchart answer must show the sensor reading, a **decision box**
comparing it to the threshold, and the actuator action as the
decision's outcome — this is exactly the Section 4 (Algorithms and
Flowcharts) link the syllabus expects.

## Second worked example: a car park barrier system

A car park uses a light sensor and an induction loop to control
entry.

```
1. SENSOR:        Light sensor detects a vehicle blocking a light
                   beam at the barrier; induction loop detects the
                   change in magnetic field caused by a vehicle's
                   metal body passing over it.
2. MICROPROCESSOR: Confirms a vehicle is present using both signals
                   together (reducing false triggers from, e.g., a
                   pedestrian or small object).
3. DECISION:       Is a valid ticket/payment also registered?
4. ACTUATOR:       If yes, a motorised (rotary) actuator raises the
                   barrier arm; a timer-based process lowers it again
                   once the vehicle has fully passed the loop.
```

Notice this example uses **two sensor types together** rather than
one -- a useful reminder that named real-world systems in this
syllabus often combine several sensor types to increase reliability,
not just a single sensor in isolation.

## Exam traps

- Confusing a sensor (takes a reading) with an actuator (produces
physical movement/action).
- Naming a sensor without stating the specific property it measures.
- Forgetting control systems are a **closed loop** — the system must
keep re-checking the sensor after acting, not act once and stop.
- Describing an application (smart home, burglar alarm) without
breaking it into the sensor → processing → actuator chain.
- Mixing up which calibration type suits a linear vs non-linear
sensor response.

## Self-test

1. What is the key difference between monitoring and control?
2. Name the three calibration types and what distinguishes them.
3. Why does an infrared sensor suit a burglar alarm specifically?
4. What is the "closed loop" property of a control system, and why
does forgetting it lose marks?
5. What three elements must a control-system flowchart show?

**Answers:** 1. Monitoring reads and records a value for a human or
system to review; control uses a sensor reading to trigger an
automatic response without waiting for a human decision. 2. One-point
(checks against a single reference value), two-point (checks low and
high range, adjusts offset/scale error), multipoint (checks several
points for highest accuracy on a non-linear response). 3. Because it
detects the heat given off by a human body without requiring contact,
unlike sensors that need direct touch. 4. The system must continuously
re-check the sensor and respond to changes, not simply act once and
stop; forgetting this means describing a one-off action rather than
an ongoing automatic response. 5. The sensor reading, a decision box
comparing it to a threshold, and the actuator action as the outcome.
