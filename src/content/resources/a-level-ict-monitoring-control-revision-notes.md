---
title: "Cambridge A Level Information Technology (ICT): Monitoring and Control — Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Monitoring and Control Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 3 – Monitoring and Control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "monitoring-and-measurement-technologies"
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "control-technologies"
description: "Condensed recall notes on sensors, calibration, actuators and microprocessor-controlled systems such as greenhouses for Cambridge AS & A Level IT 9626 topic 3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-09-05
updatedDate: 2026-09-27
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

**A frequent slip**: describing a monitoring
scenario when the question asks about control, or vice versa.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--01-mc-monitor-vs-control.webp" width="900" height="900" alt="Monitoring is a sensor feeding a log or display, with a person deciding what happens next. Control is a sensor feeding a microprocessor that drives an actuator, and the loop returns to the sensor so it keeps re-checking. Control acts automatically with no human decision." loading="lazy">
  <figcaption>Monitoring records a value for people; control uses the reading to trigger an automatic response in a closed loop.</figcaption>
</figure>

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
suits the scenario makes a weak answer. A vague "temperature sensor for
conditions" answer is weaker than "temperature sensor because it
specifically measures temperature, triggering the vent at a defined
threshold."

**Actuators** carry out: linear, rotary, soft, hydraulic, pneumatic,
electric, thermal, magnetic, mechanical actions.

**Microprocessor-controlled systems** (named): greenhouses, central
heating, air conditioning, burglar alarms, traffic/pedestrian flow
(smart motorways), car park barriers, traffic lights, wireless
sensor/actuator networks, smart homes.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--03-mc-sensors-uses.webp" width="900" height="1085" alt="Six sensors each paired with the property they sense and one use: infrared for body heat in a burglar alarm, proximity for a nearby object in a phone screen, touch for fluid level in cooling water, light for a car park barrier, moisture for soil water content, and sound in a burglar alarm." loading="lazy">
  <figcaption>A good answer names the sensor, what it senses and why that fits the job.</figcaption>
</figure>

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
decision's outcome — this is the topic 4 (Algorithms and
flowcharts) link the syllabus asks for.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--05-mc-greenhouse-loop.webp" width="900" height="860" alt="A greenhouse with a temperature sensor inside, a microprocessor outside and a motorised actuator on the roof vent. The sensor reading goes to the microprocessor, which compares it with a stored threshold. If the reading is too high a signal goes to the actuator, which opens the vent. The system then keeps checking the sensor." loading="lazy">
  <figcaption>The worked example: temperature sensor, microprocessor with a threshold, and an actuator that opens the vent.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--06-mc-greenhouse-flowchart.webp" width="900" height="1090" alt="A flowchart reads the sensor, asks whether the temperature is above the threshold, opens the vent if yes and closes it if no, then repeats. A graph produced by running that rule shows the temperature rising while the vent is closed and falling while it is open, so it keeps returning to the threshold." loading="lazy">
  <figcaption>The flowchart of the worked example, and the temperature it produces when run (illustrative numbers).</figcaption>
</figure>

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

## Why calibration matters even for a "correctly working" sensor

A sensor can be electronically functional but still give inaccurate
readings if it has never been calibrated, or has drifted out of
calibration over time. Calibration compares the sensor's output
against a known reference value and adjusts for any systematic
offset — this is conceptually distinct from the sensor simply
"working" in the sense of producing a signal at all. A pH sensor left
uncalibrated for months, for example, may still respond correctly to
changes in acidity, but every reading it gives could be shifted from
the true value by a consistent offset — exactly the kind of
systematic error that only calibration, not repeated readings, can
correct.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--02-mc-calibration.webp" width="900" height="980" alt="Three graphs show how much error a temperature sensor has left after calibration. One-point calibration fixes the error only at one reference value. Two-point calibration fixes it at the low and high ends, so the error is smaller in between. Multipoint calibration uses several points across the range, so the error stays smallest, which suits a response that is not perfectly linear." loading="lazy">
  <figcaption>More calibration points leave less error across the working range (illustrative sensor).</figcaption>
</figure>

## Worked example: choosing a calibration type

A pressure sensor is known to respond in a genuinely linear way
across its whole range, while a humidity sensor is known to respond
non-linearly near the extremes of its range.

```
Pressure sensor:  Two-point calibration is sufficient -- since the
                   response is linear, checking at a low and a high
                   reference point is enough to correct any offset
                   and scale error across the whole range.
Humidity sensor:   Multipoint calibration is more appropriate --
                   because the response is non-linear near the
                   extremes, checking only two points would leave
                   inaccuracies uncorrected in the parts of the range
                   where the response curves away from a straight
                   line.
```

Matching calibration type to the sensor's actual response shape,
rather than defaulting to the same calibration method for every
sensor, is the judgement to show when a question
asks which method to use.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-monitoring-and-control--04-mc-actuators.webp" width="900" height="990" alt="A sensor takes a reading from the physical world, while an actuator produces physical movement in response; they are different components. A piston shows linear movement and a turning wheel shows rotary movement. Soft, hydraulic, pneumatic, electric, thermal, magnetic and mechanical actuators are also listed in the syllabus." loading="lazy">
  <figcaption>A sensor reads the world; an actuator acts on it.</figcaption>
</figure>

## Self-test

1. What is the key difference between monitoring and control?
2. Name the three calibration types and what distinguishes them.
3. Why does an infrared sensor suit a burglar alarm specifically?
4. What is the "closed loop" property of a control system, and why does it matter?
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

## Frequently asked questions

**Which sensors are named in the Cambridge 9626 syllabus?**
Topic 3 names light/UV, temperature, pressure, humidity, pH, gas (oxygen, carbon dioxide, carbon monoxide and nitrogen oxides), sound, infrared, touch, (electro)magnetic field and proximity sensors.

**Why does a sensor need calibrating if it works?**
A sensor can produce a signal but still give inaccurate readings if it has never been calibrated or has drifted over time. Calibration compares its output against a known reference value and corrects a systematic offset that repeated readings cannot fix.

**Which calibration type suits a non-linear sensor?**
Multipoint calibration suits a sensor whose response is not linear, because checking only two points would leave errors uncorrected in between. Two-point calibration is enough for a sensor with a linear response across its range.

**Why do car park barriers often use two sensor types?**
A car park may combine a light sensor with an induction loop, which detects the change in magnetic field caused by a vehicle's metal body. Using both signals together reduces false triggers from pedestrians or small objects.
