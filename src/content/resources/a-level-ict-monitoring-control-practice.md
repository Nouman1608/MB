---
title: "Cambridge A-Level ICT: Monitoring and Control — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Section 3 – Monitoring and Control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
description: "Exam-style questions with full worked answers on monitoring vs control, sensors, calibration, actuators, and microprocessor-controlled systems, for Cambridge AS & A Level ICT (9626) Section 3."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

> These are original practice questions written in the style of Cambridge
> AS & A Level ICT (9626) assessment objectives. They are not taken from any
> past paper and are not endorsed by Cambridge International.

Use these questions alongside the [Section 3 – Monitoring and Control
study guide](/resources/a-level-cambridge-ict-monitoring-and-control/)
and [revision
notes](/resources/a-level-ict-monitoring-control-revision-notes/).

## Section A

**1.** State the key difference between monitoring and control. **[2]**

**2.** Name the three types of calibration. **[3]**

**3.** State the difference between a sensor and an actuator. **[2]**

**4.** Name two named actions or movements an actuator can carry out. **[2]**

**5.** Name three microprocessor-controlled systems listed in the
syllabus. **[3]**

## Section B

**6.** A weather station records humidity and atmospheric pressure
throughout the day for a meteorologist to review later.

**(a)** Explain why this is an example of monitoring rather than
control. **[2]**
**(b)** Suggest what would need to change for this to become a
control system instead. **[2]**

**7.** A sensor manufacturer tests a new temperature sensor and finds
its readings drift slightly out of true over time.

**(a)** Explain why two-point calibration would be more suitable than
one-point calibration for correcting this sensor. **[2]**
**(b)** Suggest a situation where multipoint calibration would be
needed instead of two-point calibration. **[2]**

**8.** A burglar alarm system uses an infrared sensor and a sound
sensor together.

**(a)** Explain why an infrared sensor is well suited to detecting an
intruder. **[2]**
**(b)** Suggest one reason the system might use two sensor types
together rather than relying on one alone. **[2]**

**9.** A central heating system automatically switches the boiler on
when room temperature falls below a set point, and off again once the
room warms up.

**(a)** Describe this system as a sensor → microprocessor → actuator
chain. **[3]**
**(b)** Explain why this system must be a closed loop, and what would
be wrong with a system that only checked the temperature once. **[2]**

**10.** A car park barrier system uses a light sensor to detect a
vehicle and a motorised actuator to raise the barrier.

**(a)** Represent this system's logic as a simple flowchart
description, including a decision box. **[3]**
**(b)** Explain why the syllabus expects control processing to be
represented as an algorithm or flowchart. **[1]**

---

## Answers

**1.** Monitoring reads and records a value for a human or system to
review; control uses a sensor reading to trigger an automatic response
without waiting for a human decision [2].

**2.** One-point, two-point and multipoint calibration [3].

**3.** A sensor takes a reading from the physical world; an actuator
produces physical movement or action in response to a signal [2].

**4.** Any two of: linear, rotary, soft, hydraulic, pneumatic,
electric, thermal, magnetic, mechanical [2].

**5.** Any three of: greenhouses, central heating systems, air
conditioning systems, burglar alarms, control of traffic and
pedestrian flow, car park barriers, traffic lights, wireless sensor
and actuator networks, smart homes [3].

**6. (a)** This is monitoring because the sensor readings are being
recorded for a human (the meteorologist) to review and interpret
later, rather than automatically triggering an action [2].
**(b)** The system would need a microprocessor that compares the
readings against a threshold and automatically triggers an actuator
(for example, closing a weatherproof cover) without waiting for a
human decision [2].

**7. (a)** Two-point calibration checks the sensor at both the low
and high ends of its working range and adjusts for offset and scale
error, which corrects a sensor that has drifted consistently out of
true across its range, whereas one-point calibration only checks
against a single reference value and cannot correct for a scale error
[2].
**(b)** Multipoint calibration would be needed where the sensor's
response is not perfectly linear across its range, so checking only
two points would not reveal or correct inaccuracies that occur at
points in between [2].

**8. (a)** An infrared sensor detects the heat given off by a human
body, allowing it to detect an intruder's presence without requiring
any physical contact or the intruder triggering a switch directly [2].
**(b)** Using two sensor types together reduces false triggers, since
an event that only one sensor type might misinterpret (for example, a
sound sensor picking up an unrelated noise) is less likely to also
trigger a second, independent sensor type unless an actual intruder is
present [2].

**9. (a)** A temperature sensor takes a reading of the room
temperature [1]; a microprocessor compares this reading against a
stored threshold (the set point) [1]; if the reading is below the
threshold, the microprocessor sends a signal to an actuator that
switches the boiler on [1].
**(b)** The system must be a closed loop because room temperature
changes continuously, so the sensor must keep being re-checked and the
boiler switched on or off repeatedly as conditions change [1]. A
system that only checked the temperature once would switch the boiler
on or off a single time and then never respond again, even if the room
later became too hot or too cold [1].

**10. (a)** Sensor: the light sensor detects a vehicle blocking the
beam at the barrier. Decision box: is a vehicle present? If yes,
proceed; if no, continue checking. Actuator: if a vehicle is detected
(and any other condition, such as payment, is met), the motorised
actuator raises the barrier arm; once the vehicle has passed, the
barrier is lowered again [3].
**(b)** Representing control processing as an algorithm or flowchart
makes the decision-making logic explicit and checkable, and links the
sensor reading, the threshold comparison, and the actuator's response
into a single, precise sequence that could be implemented in a real
control program [1].

## A note on exam technique for this topic

The most common way marks are lost on this topic is blurring the line
between monitoring and control in a described scenario, so before
answering any question, check whether the system merely records a
value for a human to review or automatically triggers a response — the
two are tested as a deliberate contrast, not interchangeable terms.
When asked to link a sensor to a real device, always state the
specific property the sensor measures and why that property matches
the scenario's need, rather than naming the sensor alone. For
flowchart-style questions, make sure your answer shows all three
elements the mark scheme expects: the sensor reading, a decision box
comparing it to a threshold, and the actuator action as the outcome —
and remember that a genuine control system re-checks the sensor
continuously rather than acting once and stopping.
