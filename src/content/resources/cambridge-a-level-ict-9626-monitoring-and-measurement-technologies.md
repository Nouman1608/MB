---
title: "Cambridge A Level Information Technology (9626): Monitoring and measurement technologies"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 3 – Monitoring and control"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "monitoring-and-control"
    subtopic: "monitoring-and-measurement-technologies"
description: "Cambridge 9626 IT section 3.1 study guide: the named sensors, environmental and patient monitoring, and one-point, two-point and multipoint calibration."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide teaches **section 3.1 Monitoring and measurement technologies** of Topic 3 Monitoring and control in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [Monitoring and control overview](/resources/a-level-cambridge-ict-monitoring-and-control/) separates monitoring from control; this page covers every sensor and use in 3.1 and works through calibration with numbers. Use it with the [monitoring and measurement revision notes](/resources/cambridge-a-level-ict-9626-monitoring-and-measurement-technologies-revision-notes/) and the [monitoring and measurement practice questions](/resources/cambridge-a-level-ict-9626-monitoring-and-measurement-technologies-practice/).

## What section 3.1 covers

| Syllabus point | Content |
|---|---|
| Sensors | Light/UV, temperature, pressure, humidity, pH, gas (oxygen, carbon dioxide, carbon monoxide, oxides of nitrogen), sound, infrared, touch, (electro)magnetic field, proximity |
| Environmental monitoring | Water pollution; weather stations and their sensors; ambient temperature; atmospheric pressure; absolute and relative humidity; sunlight |
| Patient monitoring | Monitoring patients |
| Calibration | Why it matters; when to use one-point, two-point and multipoint calibration; how readings from sensors such as temperature sensors are calibrated |

## How a monitoring system works

1. **Sensors** measure a physical quantity continuously or at set intervals.
2. Most sensors produce an **analogue** signal, so an **analogue-to-digital converter** turns it into digital data the computer can process.
3. The computer **stores** the readings, often with the time of each one, and **displays** them as tables or graphs.
4. It **compares** readings with preset limits and **warns** a person, for example with an alarm, if a value is out of range.

A monitoring system does not change the environment itself: a person decides what to do. When the computer acts automatically, for example opening a valve, it has become a control system (section 3.2).

Two settings are chosen for every monitoring task: the **sampling interval** (time between readings) and the **period** of monitoring (how long readings are taken for). A patient's heart rate might be read every second for days; a river's pH might be read every 15 minutes for a year.

## The sensors named in 3.1

| Sensor | What it measures | Example in monitoring |
|---|---|---|
| Light/UV | Light intensity, or ultraviolet levels | Sunlight at a weather station; UV levels for health warnings |
| Temperature | How hot or cold something is | Ambient air temperature; a patient's body temperature; river temperature |
| Pressure | Force on a surface | Atmospheric pressure; blood pressure |
| Humidity | Water vapour in the air | Weather stations; museum display cases |
| pH | Acidity or alkalinity of a liquid | Water pollution in rivers and lakes |
| Gas: oxygen | Oxygen level in air or dissolved in water | Fish health in a river; air in a mine |
| Gas: carbon dioxide | CO2 level | Air quality in classrooms and offices |
| Gas: carbon monoxide | CO, a poisonous gas | Homes, car parks, workshops |
| Gas: oxides of nitrogen | NOx, mainly from vehicle exhausts | Roadside air pollution |
| Sound | Sound level | Noise near airports and building sites |
| Infrared | Infrared radiation, such as body heat | Detecting people; measuring temperature without contact |
| Touch | Contact or pressure from a finger or object | Detecting whether a sensor probe is in contact with a surface |
| (Electro)magnetic field | Strength of a magnetic field | Detecting passing vehicles or metal objects; checking field levels near equipment |
| Proximity | How close an object is, without contact | Detecting how near a person or object is to equipment |

## Environmental monitoring

### Water pollution

Sensors are placed in rivers, lakes or outflow pipes, often in a floating or fixed unit that sends data wirelessly.

- **pH sensors** detect acid or alkaline pollution, such as chemicals from a factory.
- **Temperature sensors** detect warm water discharged from power stations or factories, which holds less dissolved oxygen.
- **Oxygen sensors** measure dissolved oxygen; low levels harm fish and can signal sewage or fertiliser pollution.

The system logs readings day and night, so a short pollution event that a person taking occasional samples would miss is still recorded, with its exact time.

### Weather stations

A weather station combines several sensors and logs their readings automatically, often in remote places.

- **Temperature sensors** measure **ambient** temperature, the temperature of the surrounding air. They are shaded and ventilated so direct sunlight does not heat them.
- **Pressure sensors** measure **atmospheric** pressure. Falling pressure often signals unsettled weather; rising pressure, settled weather.
- **Humidity sensors** measure water vapour. **Absolute humidity** is the actual mass of water vapour in a given volume of air, for example in grams per cubic metre. **Relative humidity** is the amount of water vapour compared with the maximum the air could hold at that temperature, given as a percentage. Warm air can hold more water, so the same absolute humidity gives a lower relative humidity on a warmer day.
- **Light sensors** measure sunlight, recording how strong it is and for how many hours the sun shines.

Readings are sent to a central computer that combines data from many stations to produce forecasts and long-term records.

## Monitoring patients

In hospital wards and intensive care, sensors attached to the patient feed a bedside monitor:

- **heart rate** (pulse) and the heart's electrical activity
- **blood pressure**, using a pressure sensor
- **body temperature**, using a temperature sensor
- **blood oxygen level**, using a sensor that shines light through a finger or ear lobe
- **breathing rate**

The monitor displays the values and graphs, stores them, and sounds an alarm when any value moves outside limits set for that patient.

**Advantages:** readings are continuous, day and night; alarms respond instantly; nurses are freed from manual checks for other care; readings are not affected by human error or tiredness; one nurse can watch several patients from a central station.

**Disadvantages:** equipment is expensive; false alarms, for example when a patient moves and a sensor slips, can cause alarm fatigue; staff may rely on the machine and miss signs it does not measure; faulty or badly calibrated sensors give misleading readings.

## Calibration

**Calibration** is checking a sensor's readings against known, accurate reference values and adjusting the system so that its readings match. It matters because:

- sensors **drift** over time through age, wear and temperature changes
- two sensors of the same model can give slightly different readings
- decisions rest on the readings: a patient's medication, a pollution warning, a weather forecast

### One-point calibration

The sensor is checked against **one** reference value, and the difference (the **offset**) is added to or subtracted from every reading. It suits a sensor whose readings are all wrong by the same amount, or one used only close to a single value.

**Worked example 1.** A room temperature sensor reads 21.6 °C when an accurate reference thermometer shows 20.0 °C. The offset is −1.6 °C. A later raw reading of 25.3 °C is corrected to 25.3 − 1.6 = **23.7 °C**.

### Two-point calibration

The sensor is checked at **two** reference values, usually near the bottom and top of its working range. This corrects both the offset and the **slope** (whether the sensor over- or under-reads more as the value rises). It suits sensors that respond in a straight line but may have both kinds of error.

A temperature sensor can be calibrated in a mixture of ice and water (0 °C) and in boiling water (100 °C at standard atmospheric pressure).

**Worked example 2.** A sensor reads 1.5 in the ice bath and 98.0 in boiling water. Its raw range is 98.0 − 1.5 = 96.5 for a true range of 100.

Corrected value = (raw reading − 1.5) × 100 ÷ 96.5

A raw reading of 37.0 gives (37.0 − 1.5) × 100 ÷ 96.5 = **36.8 °C** (1 decimal place). Notice that a one-point correction at 0 °C alone would give 35.5 °C, which is wrong by more than a degree for a body temperature.

### Multipoint calibration

The sensor is checked at **three or more** reference values across its range. Readings between two calibration points are corrected using those two points. It suits sensors whose response is **not a straight line** and situations where high accuracy is needed across the whole range.

**Worked example 3.** A sensor is checked at five points:

| True value (°C) | 0 | 25 | 50 | 75 | 100 |
|---|---|---|---|---|---|
| Raw reading | 0.8 | 26.0 | 52.4 | 79.6 | 103.0 |

A raw reading of 62.0 lies between 52.4 (true 50) and 79.6 (true 75). Corrected = 50 + (62.0 − 52.4) × 25 ÷ (79.6 − 52.4) = **58.8 °C**. A single straight line through the end points would not fit the middle readings this well.

### Choosing a method

| Method | Use when |
|---|---|
| One-point | Readings are off by a constant amount, or the sensor is used near one value |
| Two-point | The response is a straight line, used across a wide range |
| Multipoint | The response is not linear, or high accuracy is needed across the full range |

## Common mistakes

- Describing an automatic response in a monitoring question: monitoring warns a person; control acts.
- Mixing up absolute and relative humidity.
- Saying calibration "makes the sensor more sensitive". It makes readings accurate.
- Choosing one-point calibration for a sensor with a slope error.
- Naming a sensor without saying what it measures in the scenario.

## Exam technique

- **Describe** a monitoring system: sensors → analogue-to-digital conversion → store, display, compare → warn.
- **Explain** a sensor's use: what it measures and why that matters in the scenario.
- **Calibration** questions: name the method, say when it is suitable, and show the working when figures are given.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 3 Monitoring and control, section 3.1 Monitoring and measurement technologies.
