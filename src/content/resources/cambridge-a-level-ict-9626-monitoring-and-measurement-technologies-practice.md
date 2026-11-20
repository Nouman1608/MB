---
title: "Cambridge A Level Information Technology (9626): Monitoring and measurement technologies -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original Cambridge 9626 IT section 3.1 questions with answers: sensors, humidity, water and patient monitoring, and calibration calculations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Monitoring and measurement study guide](/resources/cambridge-a-level-ict-9626-monitoring-and-measurement-technologies/) | [Monitoring and measurement revision notes](/resources/cambridge-a-level-ict-9626-monitoring-and-measurement-technologies-revision-notes/)

These questions are for **section 3.1 Monitoring and measurement technologies** (Topic 3, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** State what a pH sensor measures and give **one** use of it in environmental monitoring. **[2]**

**2.** Identify **two** gases that a gas sensor may detect and give a reason for monitoring each. **[4]**

**3.** Define relative humidity. **[2]**

**4.** Explain what is meant by the sampling interval, and suggest a suitable interval for monitoring a patient's heart rate in intensive care. **[2]**

**5.** Explain why calibration is important for sensors used in patient monitoring. **[2]**

**6.** State what is meant by ambient temperature. **[1]**

## Section B

**7.** A humidity sensor in a museum reads 47% relative humidity when an accurate reference instrument reads 45%.

**(a)** State the offset that should be applied to the sensor's readings. **[1]**

**(b)** The sensor later reads 62%. Calculate the corrected reading. **[1]**

**(c)** Explain **one** limitation of using one-point calibration for this sensor. **[2]**

**8.** A temperature sensor is calibrated using two reference points. It reads 2.4 in a mixture of ice and water and 101.6 in boiling water at standard atmospheric pressure.

**(a)** Explain why these two references are used. **[2]**

**(b)** Calculate the corrected value of a raw reading of 40.0, to one decimal place. Show your working. **[3]**

**9.** A gas sensor is checked at four reference values.

| True value | 0 | 20 | 40 | 60 |
|---|---|---|---|---|
| Raw reading | 1.0 | 19.0 | 38.5 | 61.0 |

**(a)** Calculate the corrected value of a raw reading of 30.0, to one decimal place. **[3]**

**(b)** Explain why multipoint calibration is more suitable than two-point calibration for this sensor. **[2]**

**10.** An environment agency wants to monitor a river downstream of a factory. Describe how a computerised monitoring system would do this. **[6]**

**11.** A hospital plans to replace hourly manual checks of patients' vital signs with computerised monitoring. Evaluate this plan. **[6]**

**12.** A weather station is installed on a remote mountain. Explain how its sensors are used and why the readings are collected automatically. **[4]**

---

## Answers

**1.** The acidity or alkalinity of a liquid [1]; for example, detecting chemical pollution in a river or lake [1]. **[2]**

**2.** Any two, each with a reason: carbon monoxide [1], because it is poisonous and has no smell, so dangerous levels in homes or car parks must be detected [1]; oxides of nitrogen [1], to measure roadside air pollution from vehicle exhausts [1]; also accept oxygen (dissolved oxygen for fish health) or carbon dioxide (air quality in classrooms). **[4]**

**3.** The amount of water vapour in the air as a percentage [1] of the maximum it could hold at that temperature [1]. **[2]**

**4.** The time between one reading and the next [1]; for example, every second, because heart rate can change dangerously within seconds [1]. **[2]**

**5.** Sensors drift over time, so readings become inaccurate [1]; inaccurate readings could cause wrong treatment or a missed alarm, putting the patient at risk [1]. **[2]**

**6.** The temperature of the surrounding air [1]. **[1]**

**7. (a)** −2 percentage points (subtract 2 from every reading) [1].

**(b)** 62 − 2 = **60%** [1].

**(c)** It assumes the error is the same at every humidity [1]; if the sensor has a slope error, readings far from 45% will still be wrong, so two-point or multipoint calibration would be better [1]. **[4]**

**8. (a)** Their true temperatures are known accurately and are easy to reproduce: 0 °C and 100 °C [1]; they sit at the low and high ends of the range, so both offset and slope can be corrected [1].

**(b)** Raw range = 101.6 − 2.4 = 99.2 [1]; corrected = (40.0 − 2.4) × 100 ÷ 99.2 [1] = **37.9 °C** [1]. **[5]**

**9. (a)** 30.0 lies between 19.0 (true 20) and 38.5 (true 40) [1]; corrected = 20 + (30.0 − 19.0) × 20 ÷ (38.5 − 19.0) [1] = **31.3** [1].

**(b)** The sensor's errors are not consistent: it under-reads in the middle of the range and over-reads at the top [1], so its response is not a straight line and a line through only two points would leave errors elsewhere [1]. **[5]**

**10.** Sensors for pH, temperature and dissolved oxygen are placed in the river below the factory outflow [1]. Readings are taken automatically at a set interval, such as every 15 minutes, day and night [1]. Analogue signals are converted to digital by an analogue-to-digital converter [1] and sent, for example wirelessly, to a computer [1]. The computer stores the readings with the time and displays them as graphs [1], and compares them with preset limits, alerting staff if a reading shows pollution [1]. **[6]**

**11.** Advantages: readings are continuous rather than hourly, so a sudden change is spotted at once [1]; alarms sound immediately [1]; nurses spend less time taking readings and more on care [1]. Disadvantages: equipment is costly to buy and maintain [1]; false alarms when sensors slip can cause staff to ignore alarms [1]. Conclusion: worthwhile for patients whose condition can change quickly, provided staff still observe patients and sensors are calibrated regularly [1]. **[6]**

**12.** Temperature, pressure, humidity and light sensors take readings of the air, atmospheric pressure, water vapour and sunlight [1] at regular intervals and store them [1]. Collection is automatic because the site is remote and hard to reach, especially in bad weather [1], and readings are needed continuously, day and night, which people could not provide [1]. **[4]**

## Where marks are usually lost

- Describing an automatic response when the question is about monitoring.
- Leaving out the analogue-to-digital converter in a system description.
- Applying an offset with the wrong sign.
- Using the two end points when the reading falls between two closer calibration points.
- Confusing absolute and relative humidity.
