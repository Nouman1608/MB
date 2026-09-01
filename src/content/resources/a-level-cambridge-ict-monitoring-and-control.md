---
title: "Cambridge A-Level ICT: Monitoring and Control (9626)"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Section 3 – Monitoring and Control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
description: "Sensors, calibration, actuators and microprocessor-controlled technology -- Section 3 of Cambridge International AS & A Level ICT (9626), covering monitoring, measurement and control systems."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

This guide covers **Section 3 Monitoring and Control**, for Cambridge
International AS & A Level ICT (9626), 2025–2027 series. It is the third
of 21 sections, studied at AS Level alongside Sections 1–11.

## Where this fits in 9626

Section 3 builds directly on Section 2's hardware and software
foundations, moving from general-purpose computing to systems built
specifically to sense the physical world and act on it — the sensors,
calibration methods, actuators and microprocessor-controlled devices
behind applications from weather stations to burglar alarms and smart
homes. Candidates are also expected to represent this processing as
algorithms or flowcharts, linking Section 3 forward to Section 4
(Algorithms and Flowcharts).

## Syllabus coverage

**CAMBRIDGE A-LEVEL ICT (9626) — SECTION 3 MONITORING AND CONTROL**

- 3.1 Monitoring and measurement technologies — sensors including
light/UV, temperature, pressure, humidity, pH, gas sensors (oxygen,
carbon dioxide, carbon monoxide, oxides of nitrogen), sound, infrared,
touch, (electro)magnetic field and proximity sensors; uses in
environmental monitoring (water pollution, weather stations, ambient
temperature, atmospheric pressure, humidity, sunlight) and in monitoring
patients
- 3.1 Calibration — the importance of calibration and methods used,
including when to use one-point, two-point and multipoint calibration,
and how readings from sensors such as temperature sensors are calibrated
- 3.2 Control technologies: sensors and their uses — touch sensors
detecting fluid levels (for example, cooling water in nuclear power
plants), temperature sensors, light sensors (detecting level or source,
for example in a car park barrier system), moisture sensors measuring
soil water content, pH sensors measuring soil acidity, gas sensors,
infrared sensors detecting body heat (for example in burglar alarms),
(electro)magnetic field sensors, ultrasonic sensors, induction loops in
car parking systems, sound sensors in burglar alarms, and proximity
sensors switching off a smartphone screen near the ear
- 3.2 Actuators and their uses — carrying out linear, rotary, soft,
hydraulic, pneumatic, electric, thermal, magnetic and mechanical
actions/movements
- 3.2 Microprocessor-controlled/computer-controlled technology —
greenhouses, central heating systems, air conditioning systems, burglar
alarms, control of traffic and pedestrian flow (including smart
motorways), car park barriers, traffic lights, wireless sensor and
actuator networks, and smart homes, together with the advantages and
disadvantages of different control technologies
- Representing control processing as an algorithm or flowchart for any
of the control technologies listed above (linking to Section 4)

## How to approach it

Keep monitoring (3.1) and control (3.2) conceptually separate even
though both rely on sensors: monitoring reads and records a value for a
human or system to review (a weather station logging humidity), while
control uses a sensor reading to trigger an automatic response without
waiting for a human decision (a greenhouse vent opening when a
temperature sensor crosses a threshold). Many exam answers lose marks by
describing a monitoring scenario when the question asks about control,
or vice versa.

For calibration, learn the distinction between the three methods rather
than the term alone: one-point calibration checks a sensor against a
single known reference value, two-point calibration checks it at two
points (typically the low and high ends of its working range) and
adjusts for any offset and scale error, and multipoint calibration checks
several points across the range for the highest accuracy where the
sensor's response is not perfectly linear.

When asked to link a sensor to a real device, be specific about *why*
that sensor suits that use — a proximity sensor works for a smartphone
screen because it needs to detect closeness without contact, while an
infrared sensor suits a burglar alarm because it detects the heat given
off by a human body rather than requiring the intruder to touch
anything. Vague answers that name a sensor without justifying the fit to
the scenario are a common way marks are lost.

## Worked example: choosing a sensor

A greenhouse control system needs to open a vent automatically when it
gets too hot, and close it again when the temperature drops. A suitable
answer identifies a temperature sensor feeding a microprocessor that
compares the reading against a stored threshold value; if the reading
exceeds the threshold, the microprocessor sends a signal to an actuator
that opens the vent (a motorised or pneumatic actuator, carrying out a
rotary or linear movement); once the temperature falls back below the
threshold, the reverse signal closes the vent. A flowchart representation
would show the sensor reading, a decision box comparing it to the
threshold, and the actuator action as the outcome of that decision —
exactly the kind of link to Section 4 the syllabus expects.

## Common mistakes

Treating a sensor and an actuator as the same kind of component — a
sensor takes a reading from the physical world, an actuator produces
physical movement or action in response. Naming a sensor for a scenario
without saying what specific property it measures (temperature sensors
measure temperature, not "conditions" in general). Forgetting that
control systems are a closed loop: the system must keep re-checking the
sensor after acting, not just act once. Describing an application (a
smart home, a burglar alarm) without breaking it down into the
sensor–processing–actuator chain the syllabus expects.

## Quick revision checklist

- Separate monitoring (recording a value) from control (triggering an
automatic response) in every scenario.
- Know the difference between one-point, two-point and multipoint
calibration.
- Match named sensors to specific real-world uses, with a reason.
- Be able to sketch or describe a simple sensor → microprocessor →
actuator control loop as a flowchart.

## Official syllabus

Cambridge International AS & A Level Information Technology (9626)
syllabus for 2025, 2026 and 2027 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/662482-2025-2027-syllabus.pdf).
