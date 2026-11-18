---
title: "Cambridge A Level Information Technology (9626): Monitoring and measurement technologies -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 3.1: sensors, weather and water monitoring, patient monitoring, humidity and calibration methods, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 3.1 Monitoring and measurement technologies** (Topic 3 Monitoring and control) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Worked calibration examples are in the [monitoring and measurement study guide](/resources/cambridge-a-level-ict-9626-monitoring-and-measurement-technologies/); test yourself with the [monitoring and measurement practice questions](/resources/cambridge-a-level-ict-9626-monitoring-and-measurement-technologies-practice/).

## The monitoring chain

Sensor → analogue-to-digital converter → computer stores, displays and compares readings with limits → warning to a person. **No automatic action**: that would be control (3.2).

Choose a **sampling interval** (time between readings) and a **period** (how long monitoring lasts).

## Sensors named in 3.1

| Sensor | Measures | Monitoring example |
|---|---|---|
| Light/UV | Light intensity; UV level | Sunlight at weather stations |
| Temperature | Heat | Ambient air; body temperature; river water |
| Pressure | Force | Atmospheric pressure; blood pressure |
| Humidity | Water vapour in air | Weather stations; museums |
| pH | Acidity | River and lake pollution |
| Gas | Oxygen, carbon dioxide, carbon monoxide, oxides of nitrogen | Dissolved oxygen in rivers; air quality; roadside pollution |
| Sound | Noise level | Airports, building sites |
| Infrared | Infrared radiation, body heat | Contact-free temperature; detecting people |
| Touch | Contact | Checking a probe is in contact |
| (Electro)magnetic field | Field strength | Detecting vehicles or metal objects |
| Proximity | Closeness without contact | How near an object is |

## Key terms

| Term | Meaning |
|---|---|
| Monitoring | Measuring and recording values for people to review, with warnings but no automatic action |
| Analogue-to-digital converter | Turns a sensor's continuous signal into digital data |
| Sampling interval | Time between readings |
| Ambient temperature | Temperature of the surrounding air |
| Atmospheric pressure | Pressure exerted by the air |
| Absolute humidity | Mass of water vapour in a volume of air, such as g/m³ |
| Relative humidity | Water vapour as a percentage of the maximum the air could hold at that temperature |
| Calibration | Checking readings against known reference values and adjusting so they are accurate |
| Drift | Gradual change in a sensor's accuracy over time |
| Offset | A constant amount by which all readings are wrong |
| Slope (gain) error | Error that grows as the measured value rises |

## Environmental monitoring: recall

- **Water pollution:** pH (chemical pollution), temperature (warm discharges), dissolved oxygen (sewage, fertiliser). Logs day and night, catching short events with exact times.
- **Weather stations:** ambient temperature (shaded, ventilated sensor), atmospheric pressure (falling: unsettled; rising: settled), humidity (absolute and relative), light (sunshine strength and hours). Data sent to a central computer.
- Warmer air can hold more water, so the same absolute humidity gives **lower relative humidity** on a warmer day.

## Patient monitoring: recall

- Measures heart rate, blood pressure, body temperature, blood oxygen, breathing rate.
- Displays, stores and alarms when a value leaves the limits set for that patient.
- **Advantages:** continuous, instant alarms, frees nurses, no human error or tiredness, one nurse watches many patients.
- **Disadvantages:** cost, false alarms and alarm fatigue, over-reliance, misleading readings from faulty or uncalibrated sensors.

## Calibration: recall

| Method | Reference points | Corrects | Use when |
|---|---|---|---|
| One-point | 1 | Offset only | Constant error, or used near one value |
| Two-point | 2 (low and high) | Offset and slope | Straight-line response over a wide range |
| Multipoint | 3 or more | Non-linear errors | Curved response, or high accuracy across the range |

**Formulas.**
- One-point: corrected = raw + offset.
- Two-point: corrected = low reference + (raw − raw at low) × (high reference − low reference) ÷ (raw at high − raw at low).

**Quick example: pH sensor.** Buffer solutions of pH 4.00 and 7.00 read 4.20 and 7.10. A raw reading of 6.00 is corrected to 4 + (6.00 − 4.20) × 3 ÷ 2.90 = **5.86**.

**Temperature references:** ice and water (0 °C) and boiling water (100 °C at standard atmospheric pressure).

## Exam traps

- Monitoring answers that describe automatic actions.
- Mixing up absolute and relative humidity.
- Saying calibration increases sensitivity rather than accuracy.
- One-point calibration for a sensor with a slope error.
- Forgetting the analogue-to-digital converter in a system description.
- Generic sensors: "a sensor detects the weather" earns nothing.

## Self-test

1. What is the difference between monitoring and control?
2. Why is an analogue-to-digital converter needed?
3. Name three sensors used in a weather station and what each measures.
4. Distinguish absolute and relative humidity.
5. Which three readings would show pollution in a river?
6. Give two advantages of computerised patient monitoring.
7. Give one disadvantage of computerised patient monitoring.
8. Why must sensors be calibrated regularly?
9. What does one-point calibration correct, and what does it not?
10. A sensor reads 2 at 0 °C and 96 at 100 °C. What is the corrected value of a raw reading of 50?
11. When is multipoint calibration needed?
12. Why is a weather station's temperature sensor shaded?

### Answers

1. Monitoring records values and warns a person; control acts automatically on the readings.
2. Sensors give analogue signals, but the computer can only process digital data.
3. Any three: temperature (ambient air), pressure (atmospheric), humidity (water vapour), light (sunlight).
4. Absolute: mass of water vapour per volume of air. Relative: water vapour as a percentage of the maximum the air could hold at that temperature.
5. pH, temperature and dissolved oxygen.
6. Any two: continuous readings, instant alarms, frees nurses, no human error, one nurse can watch several patients.
7. Any one: false alarms, cost, over-reliance, misleading readings from faulty sensors.
8. Sensors drift over time, and decisions depend on accurate readings.
9. It corrects a constant offset; it does not correct a slope error.
10. (50 − 2) × 100 ÷ 94 = 51.1 °C.
11. When the sensor's response is not a straight line, or high accuracy is needed across the full range.
12. So direct sunlight does not heat the sensor and it measures the air temperature, not the sun's heating.
