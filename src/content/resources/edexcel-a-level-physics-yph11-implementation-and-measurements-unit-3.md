---
title: "Edexcel International A Level Physics (YPH11): Unit 3 Implementation and Measurements"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Unit 3: Practical Skills in Physics I"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 3.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-3-practical-skills-in-physics-i"
    subtopic: "implementation-and-measurements-unit-3-yph11"
description: "Checking an inexperienced student's experiment for Edexcel IAL Physics Unit 3 section 3.4: readings, range, significant figures, anomalies and improvements."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.4 Implementation and measurements** of **Unit 3: Practical Skills in Physics I**, Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (YPH11), Issue 3. The specification says students "will be given details of an experiment carried out by an inexperienced student. Results may be included." Your job is to act as the more experienced checker.

The [Unit 3 planning and checking overview](/resources/edexcel-ial-physics-unit-3-planning-an-experiment-and-checking-another/) introduces 3.4 with a spring experiment and one micrometer reading. This page goes further, with a complete falling-ball critique, the significant-figure rules applied to whole tables, and a bank of improvements using extra apparatus. Recall notes are in the [Unit 3 implementation and measurements revision notes](/resources/edexcel-a-level-physics-yph11-implementation-and-measurements-unit-3-revision-notes/) and questions in the [Unit 3 implementation and measurements practice questions](/resources/edexcel-a-level-physics-yph11-implementation-and-measurements-unit-3-practice/). Planning an experiment from scratch is in the [Unit 3 planning study guide](/resources/edexcel-a-level-physics-yph11-planning-unit-3/).

## The five things 3.4 assesses

| Specification point | The question you ask of the student's work |
|---|---|
| Comment on the number of readings taken | Are there enough values to show a trend and reveal an anomaly? |
| Comment on the range of measurements taken | Does the range span enough of the possible values to test the relationship? |
| Comment on significant figures | Is each reading recorded to the instrument's resolution, consistently? |
| Check a reading that is inconsistent with other readings | Which point does not fit, by how much, and what probably caused it? |
| Comment on how the experiment may be improved, possibly by using additional apparatus | What specific change would reduce an error, and why? |

The specification gives two examples worth knowing: a diagram of a micrometer measuring a wire, which you read to the correct number of significant figures, and using a set square to check that a ruler is vertical when measuring the extension of a spring.

"Comment on" in the specification's command-word list means you must bring several factors together into a judgement. So "there are four readings" scores nothing alone; "only four readings, so a curve cannot be distinguished from a straight line" does.

## Worked example: a falling-ball experiment

An inexperienced student investigates how the terminal velocity v of steel balls falling through oil depends on their diameter d. She measures each diameter with a 30 cm ruler, then times each ball once with a stopwatch as it falls between two rubber bands 0.300 m apart. The upper band is 2 cm below the oil surface.

| d / mm | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| t / s | 6.25 | 2.8 | 1.47 | 1.0 |
| v / m s⁻¹ | 0.048 | 0.107 | 0.204 | 0.300 |

Theory for small spheres predicts v ∝ d². Work through the five points in order.

**Number of readings.** Four diameters is too few: a graph of four points cannot reliably show whether v ∝ d² or some other power. Use at least six ball sizes, and time each ball at least three times.

**Range.** Diameters of 2 mm to 5 mm give a factor of 2.5. If balls from about 1.5 mm to 6 mm are available, a factor of 4 makes the pattern clearer. The range is acceptable but could be extended.

**Significant figures.** Two problems:

- The diameters are recorded to the nearest millimetre with a ruler, so "2 mm" has an uncertainty of 0.5 mm, a 25% uncertainty. They should be measured with a micrometer and recorded as, for example, 2.00 mm.
- The times are recorded inconsistently: 6.25 s and 1.47 s to two decimal places, but 2.8 s and 1.0 s to one. All times from the same stopwatch should have the same number of decimal places, so 2.80 s and 1.00 s if those were the readings.

**The inconsistent reading.** Check each result against the pattern rather than by eye. If v ∝ d², then v/d² should be constant:

- 2 mm: 0.048 ÷ 4 = 0.0120
- 3 mm: 0.107 ÷ 9 = 0.0119
- 4 mm: 0.204 ÷ 16 = 0.0128
- 5 mm: 0.300 ÷ 25 = 0.0120

The 4 mm result is about 6% above the others. The expected time is 6.25 × (2 ÷ 4)² = 1.56 s, but 1.47 s was recorded. A likely cause is a late start of the stopwatch, or a ball that was not truly 4 mm, which the ruler could not detect. The response is to repeat that measurement, not to delete it.

**Improvements, each with its reason.**

- Use a micrometer for the diameters, because a ruler's 0.5 mm uncertainty is a large fraction of a 2 mm ball.
- Move the upper band at least 10 cm below the surface, so the ball has reached terminal velocity before timing starts.
- Increase the distance between bands, because a hand-timed interval of 1.0 s with a reaction-time uncertainty of about 0.15 s has a percentage uncertainty of about 15%. A longer tube, or light gates, reduces this.
- View each band at eye level, or film the fall against a scale, to avoid parallax when judging when the ball passes.
- Keep the oil at a constant temperature, monitored with a thermometer, because viscosity changes with temperature.

## Reading a micrometer to the correct significant figures

A micrometer resolves 0.01 mm, so its readings always have two decimal places.

1. Read the sleeve to the last visible millimetre mark.
2. Check whether the half-millimetre mark below the line is also visible; if so, add 0.5 mm.
3. Read the thimble division on the line and add it in hundredths of a millimetre.
4. Subtract any zero error found with the jaws closed.

**Example.** The sleeve shows 3 mm with the half-millimetre mark visible beyond it, and the thimble reads 41. Reading = 3 + 0.5 + 0.41 = **3.91 mm**. The common error is to miss the half-millimetre mark and write 3.41 mm. A reading of exactly 3 mm with the thimble at zero is written **3.00 mm**, never 3 mm, because the zeros show the resolution.

## Significant figures in a whole table

When you are asked to comment on a results table, check each column separately:

- **Raw readings** should match the instrument's resolution and be consistent: a metre rule gives lengths to the nearest millimetre, so 0.450 m, 0.500 m, 0.550 m, not 0.45 m, 0.5 m, 0.55 m.
- **Calculated values** should carry the same number of significant figures as the least precise data used, usually three. The specification's appendix accepts a mix of three and four significant figures when values cross a power of ten.
- **Averages** of repeats should not have more decimal places than the readings.

A digital stopwatch shows 0.01 s, but if the timing is by hand, the true uncertainty is set by reaction time, so recording a single time to 0.01 s suggests a precision the method does not have. That is a valid comment.

## Improvements using additional apparatus

| Problem seen in the method | Additional apparatus | Why it helps |
|---|---|---|
| Ruler may not be vertical beside a spring or wire | Set square against the bench | Ensures each reading is taken along the true vertical |
| Pointer reading has parallax | Pointer on the spring, or a plane mirror behind the scale | Eye can be lined up with pointer and its image |
| Hand timing of a short interval | Light gates and an electronic timer | Removes reaction time |
| Diameter measured once with a ruler | Micrometer or Vernier calipers, several readings at different places | Smaller resolution; checks for non-uniformity |
| Finding the start of a swing or fall is difficult | A fixed fiducial marker | Gives a definite point to start and stop timing |
| Temperature may change during readings | Thermometer or water bath | Monitors or controls a variable that affects the result |
| Reading a changing meter by eye | Data logger | Records many readings at fixed intervals |

## Common mistakes

- Commenting "more readings" without saying how many, or why.
- Stating the range is "too small" without suggesting new end values.
- Calling a point anomalous without showing, with a calculation, how far it is from the pattern.
- Deleting an anomalous reading instead of repeating it.
- Suggesting "use a computer" or "be more careful" instead of a named instrument and a reason.
- Writing micrometer readings without the trailing zero, such as 0.5 mm for 0.50 mm.

## Exam technique

- **Comment on**: name the issue, give the evidence from the table, and state its effect on the result.
- **Identify** a reading: quote it, then justify with a number (expected value or ratio).
- **Suggest** an improvement: name the apparatus or change and say which error it reduces.
- **Criticise**, where used, asks for the merits and faults of the method, with each judgement supported.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (XPH11/YPH11), Issue 3, July 2021, Unit 3: Practical Skills in Physics I, section 3.4 Implementation and measurements.
