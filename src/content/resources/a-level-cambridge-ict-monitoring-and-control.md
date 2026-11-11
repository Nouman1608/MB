---
title: "Cambridge A Level Information Technology (ICT): Monitoring and Control (9626)"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 3 – Monitoring and Control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "monitoring-and-measurement-technologies"
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "control-technologies"
description: "Sensors, calibration, actuators and microprocessor-controlled systems such as greenhouses and smart homes, for Cambridge AS & A Level IT 9626 topic 3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-09-02
updatedDate: 2026-09-27
featured: false
---

This guide covers **Topic 3 Monitoring and Control**, for Cambridge
International AS & A Level Information Technology (9626), 2025–2027 series. It is the third
of 21 topics, studied at AS Level alongside topics 1–11.

## Where this fits in 9626

Topic 3 builds directly on Topic 2's hardware and software
foundations, moving from general-purpose computing to systems built
specifically to sense the physical world and act on it — the sensors,
calibration methods, actuators and microprocessor-controlled devices
behind applications from weather stations to burglar alarms and smart
homes. Candidates are also expected to represent this processing as
algorithms or flowcharts, linking Topic 3 forward to Topic 4
(Algorithms and Flowcharts).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL INFORMATION TECHNOLOGY (9626) — TOPIC 3 MONITORING AND CONTROL**

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
of the control technologies listed above (linking to Topic 4)

## How to approach it

Keep monitoring (3.1) and control (3.2) conceptually separate even
though both rely on sensors: monitoring reads and records a value for a
human or system to review (a weather station logging humidity), while
control uses a sensor reading to trigger an automatic response without
waiting for a human decision (a greenhouse vent opening when a
temperature sensor crosses a threshold). A frequent slip is describing a monitoring scenario when the question
asks about control, or vice versa.

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
anything. An answer that names a sensor without justifying the fit to the
scenario is weak.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--01-mc-monitor-vs-control.webp" width="900" height="900" alt="Monitoring is a sensor feeding a log or display, with a person deciding what happens next. Control is a sensor feeding a microprocessor that drives an actuator, and the loop returns to the sensor so it keeps re-checking. Control acts automatically with no human decision." loading="lazy">
  <figcaption>Monitoring records a value for people; control uses the reading to trigger an automatic response in a closed loop.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--02-mc-calibration.webp" width="900" height="980" alt="Three graphs show how much error a temperature sensor has left after calibration. One-point calibration fixes the error only at one reference value. Two-point calibration fixes it at the low and high ends, so the error is smaller in between. Multipoint calibration uses several points across the range, so the error stays smallest, which suits a response that is not perfectly linear." loading="lazy">
  <figcaption>More calibration points leave less error across the working range (illustrative sensor).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--03-mc-sensors-uses.webp" width="900" height="1085" alt="Six sensors each paired with the property they sense and one use: infrared for body heat in a burglar alarm, proximity for a nearby object in a phone screen, touch for fluid level in cooling water, light for a car park barrier, moisture for soil water content, and sound in a burglar alarm." loading="lazy">
  <figcaption>A good answer names the sensor, what it senses and why that fits the job.</figcaption>
</figure>


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
the kind of link to topic 4
(4.1) that the syllabus asks for.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--05-mc-greenhouse-loop.webp" width="900" height="860" alt="A greenhouse with a temperature sensor inside, a microprocessor outside and a motorised actuator on the roof vent. The sensor reading goes to the microprocessor, which compares it with a stored threshold. If the reading is too high a signal goes to the actuator, which opens the vent. The system then keeps checking the sensor." loading="lazy">
  <figcaption>The worked example: temperature sensor, microprocessor with a threshold, and an actuator that opens the vent.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--06-mc-greenhouse-flowchart.webp" width="900" height="1090" alt="A flowchart reads the sensor, asks whether the temperature is above the threshold, opens the vent if yes and closes it if no, then repeats. A graph produced by running that rule shows the temperature rising while the vent is closed and falling while it is open, so it keeps returning to the threshold." loading="lazy">
  <figcaption>The flowchart of the worked example, and the temperature it produces when run (illustrative numbers).</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--04-mc-actuators.webp" width="900" height="990" alt="A sensor takes a reading from the physical world, while an actuator produces physical movement in response; they are different components. A piston shows linear movement and a turning wheel shows rotary movement. Soft, hydraulic, pneumatic, electric, thermal, magnetic and mechanical actuators are also listed in the syllabus." loading="lazy">
  <figcaption>A sensor reads the world; an actuator acts on it.</figcaption>
</figure>


## Frequently asked questions

**What is the difference between monitoring and control?**
In Cambridge 9626, monitoring reads and records a value for a human or system to review, such as a weather station logging humidity. Control uses a sensor reading to trigger an automatic response, such as a greenhouse vent opening when the temperature crosses a threshold.

**What is the difference between one-point, two-point and multipoint calibration?**
One-point calibration checks a sensor against a single known reference value. Two-point calibration checks it at two points, typically the low and high ends of its range, adjusting for offset and scale errors, and multipoint calibration checks several points for the highest accuracy where the response is not linear.

**What is the difference between a sensor and an actuator?**
A sensor takes a reading from the physical world, such as temperature or light level, while an actuator produces a physical movement or action in response, such as opening a vent or turning a motor.

**Why is a control system described as a closed loop?**
After an actuator acts, the system keeps re-checking the sensor and responds again when the reading changes, rather than acting only once. Forgetting this feedback loop is a common mistake.

## Official syllabus

Cambridge International AS & A Level Information Technology (9626)
syllabus for 2025, 2026 and 2027 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/662482-2025-2027-syllabus.pdf).
