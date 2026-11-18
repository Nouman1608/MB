---
title: "Edexcel International A Level Physics (YPH11): Unit 6 Implementation and Measurements"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Unit 6: Practical Skills in Physics II"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 6.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-6-practical-skills-in-physics-ii"
    subtopic: "implementation-and-measurements-unit-6-yph11"
description: "Judging partial experiment details for Edexcel IAL Physics Unit 6 section 6.4: improvements, readings, range, significant figures, units and anomalies."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **6.4 Implementation and Measurements** of **Unit 6: Practical Skills in Physics II**, Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (YPH11), Issue 3. The specification says students "will be given partial details of how an experiment was carried out. Results may be included." Experiments come from Units 4 and 5.

The [Unit 6 planning and evaluating overview](/resources/edexcel-ial-physics-unit-6-planning-an-experiment-and-evaluating-partial/) introduces 6.4 with a corrected results table. This page goes further: a full critique of a capacitor discharge with errors in figures, units and one reading; the two techniques the specification names (set squares on a cylinder and a timing marker) worked in detail; and how 6.4 differs from the Unit 3 version. Recall notes are in the [Unit 6 implementation and measurements revision notes](/resources/edexcel-a-level-physics-yph11-implementation-and-measurements-unit-6-revision-notes/) and questions in the [Unit 6 implementation and measurements practice questions](/resources/edexcel-a-level-physics-yph11-implementation-and-measurements-unit-6-practice/). Planning is in the [Unit 6 planning study guide](/resources/edexcel-a-level-physics-yph11-planning-unit-6/).

## What 6.4 assesses

| Specification point | What you do |
|---|---|
| Comment on how the experiment could have been improved, possibly by using additional apparatus (e.g. to reduce errors) | Name the change, the apparatus and the error it reduces |
| Comment on the number of readings taken | Judge whether there are enough to show the relationship |
| Comment on the range of measurements taken | Judge whether the range tests the relationship fully |
| Comment on significant figures | Identify and/or round any incorrect figures in a table of results |
| Identify and/or amend units that are incorrect | Correct column headings and quoted results |
| Identify and check a reading that is inconsistent with other readings | Find it, show by calculation that it does not fit, and say how to check it |

Compared with Unit 3 (3.4), two things are new: you may be asked to **amend units**, and to **round** incorrect figures in a table yourself, not just comment on them. The experiment is also described only in part, so you must infer what was probably done.

## Worked example: a capacitor discharge with several faults

A student discharges a capacitor through a resistor and reads a digital voltmeter (resolution 0.01 V) while a partner calls out times from a stopwatch. Partial results:

| t / s | V / mV | ln V / V |
|---|---|---|
| 0 | 6.00 | 1.792 |
| 10 | 4.9 | 1.589 |
| 20 | 3.66 | 1.297 |
| 30 | 3.29 | 1.191 |
| 40 | 2.696 | 0.992 |
| 50 | 2.21 | 0.793 |
| 60 | 1.81 | 0.593 |

The student writes: "Time constant = 50.0 s⁻¹."

**Units.** Three faults:

- The p.d. column is labelled mV but the values are clearly in volts (a 6 V supply). Amend to **V / V**.
- A logarithm has no unit. The heading should be **ln (V / V)**: the log is taken of the number V/V.
- A time constant is a time, so its unit is **s**, not s⁻¹.

**Significant figures.** The voltmeter resolves 0.01 V, so every p.d. has two decimal places:

- 4.9 should be recorded to 0.01 V; if the meter showed 4.90, write **4.90**.
- 2.696 cannot have come from this meter; round it to **2.70**.
- The ln values are consistently given to three decimal places, which is acceptable for processed data from three-significant-figure readings.

**The inconsistent reading.** For a discharge, ln V should fall by the same amount in each 10 s. The differences are 0.203, 0.292, 0.106, 0.199, 0.199, 0.200. The two irregular differences either side of 20 s point to the 20 s reading. From the line through the other points, the gradient is (0.593 − 1.792) ÷ 60 = −0.0200 s⁻¹, so at 20 s, ln V should be 1.792 − 0.400 = 1.392, giving V = e^1.392 = **4.02 V**, not 3.66 V. Solving for the time at which 3.66 V is reached gives t = 50 × ln(6.00 ÷ 3.66) = 24.7 s, so the reading was probably taken about 5 s late. The fix is to repeat that reading or the whole discharge, not to delete it.

**Number and range.** Seven readings over 60 s is a reasonable number, but 60 s is only about 1.2 time constants: the p.d. falls only to 30% of its starting value. Continuing to about 150 s (three time constants) tests the exponential relationship over a much wider range.

**Improvement with additional apparatus.** Replace the stopwatch and voltmeter with a **data logger** sampling the p.d. at fixed intervals, which removes the delay between calling a time and reading the meter. If hand methods must be used, a longer time constant (a larger resistor) makes the timing delay a smaller fraction of each interval.

With the 20 s point corrected, the gradient −0.0200 s⁻¹ gives RC = 1 ÷ 0.0200 = **50.0 s**.

## The specification's two named techniques

### Using set squares to measure the diameter of a cylinder

A cylinder too wide for Vernier calipers, such as a metal can about 75 mm across, is measured against a metre rule. Holding the rule across the end and guessing where the edges are introduces parallax and a misjudged diameter, especially as a chord is easily measured instead.

Method: lay the cylinder on its side against a metre rule fixed to the bench. Place a set square on each side so that its vertical edge just touches the cylinder. Read the rule at the edge of each set square, for example 112.0 mm and 187.5 mm, so d = 75.5 mm. Rotate the cylinder and repeat at least twice, taking the mean.

Why it helps: the set squares transfer each edge of the curved surface straight down to the scale at right angles, so the reading is taken at the widest point and without parallax. Repeating at different orientations checks whether the cylinder is truly circular.

### Using a marker for timing oscillations

A student timing a pendulum or a mass on a spring by watching for "the top of the swing" starts and stops the stopwatch inconsistently, because the object is momentarily stationary there. A **fiducial marker**, such as a pin in a cork clamped at the equilibrium position, gives a fixed point that the object passes at its highest speed, so the instant is sharp.

Combine it with timing many oscillations: if a student times 5 oscillations of period 0.80 s (4.0 s) with a reaction-time uncertainty of 0.2 s, the uncertainty is 5%; timing 20 oscillations (16.0 s) with the same 0.2 s reduces it to 1.25%. Count "zero" as the timer starts, so that 20 is counted at the end of the 20th oscillation.

## A short checklist for unseen methods

Because only partial details are given, read for what is missing as well as what is wrong:

- Is there any sign of **repeats**? If not, suggest repeats where random error is likely.
- Was anything kept constant that should be, and is anything **uncontrolled**, such as temperature in a thermal or electrical experiment?
- Could the instrument resolve the quantity? A thermometer reading to 1 °C on a 4 °C rise gives a 12.5% uncertainty.
- Was a **zero error** or **background** correction needed but not mentioned?
- Are the column headings in the form **quantity / unit**?

## Common mistakes

- Commenting on significant figures without writing the corrected value.
- Leaving a unit on a logarithm column, or writing the unit inside the log incorrectly.
- Identifying an anomaly from a graph sketch without a calculation.
- Suggesting "use a computer" rather than a data logger with a stated advantage.
- Saying "more readings" when the real problem is the range.
- Proposing an improvement without saying which error it reduces.

## Exam technique

- **Comment on**: bring several factors together into a judgement, such as number and range together.
- **Identify** and **amend**: point to the exact entry, then write the corrected version.
- **Suggest** an improvement: name the change, the apparatus and the error reduced.
- **Calculate** where it supports a judgement: an expected value or a percentage uncertainty turns an opinion into evidence.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (XPH11/YPH11), Issue 3, July 2021, Unit 6: Practical Skills in Physics II, section 6.4 Implementation and Measurements.
