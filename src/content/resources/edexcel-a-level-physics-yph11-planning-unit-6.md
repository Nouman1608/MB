---
title: "Edexcel International A Level Physics (YPH11): Unit 6 Planning"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Unit 6: Practical Skills in Physics II"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-6-practical-skills-in-physics-ii"
    subtopic: "planning-unit-6-yph11"
description: "Planning Unit 4 and 5 experiments for Edexcel IAL Physics Unit 6 section 6.3: apparatus details, calibration, controls, repeats, radiation safety and data use."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **6.3 Planning** of **Unit 6: Practical Skills in Physics II**, Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (YPH11), Issue 3. Unit 6 is an International A2 unit. As in Unit 3, the specification says students "will be expected to plan an experiment set by Pearson, although they will not be expected to carry it out", but the experiments now come from Units 4 and 5: momentum, capacitors, thermal physics, radioactivity and oscillations.

The [Unit 6 planning and evaluating overview](/resources/edexcel-ial-physics-unit-6-planning-an-experiment-and-evaluating-partial/) introduces all of 6.3 and 6.4 with a pendulum plan and a gas-law log graph. This page goes deeper into 6.3 only, with two full plans of a different kind and a section on choosing apparatus dimensions. Condensed notes are in the [Unit 6 planning revision notes](/resources/edexcel-a-level-physics-yph11-planning-unit-6-revision-notes/) and questions in the [Unit 6 planning practice questions](/resources/edexcel-a-level-physics-yph11-planning-unit-6-practice/). Checking partial details of an experiment (6.4) has its own [Unit 6 implementation and measurements guide](/resources/edexcel-a-level-physics-yph11-implementation-and-measurements-unit-6/).

## What 6.3 assesses, and how it differs from Unit 3

| 6.3 point | Unit 3 equivalent | What changes at A2 |
|---|---|---|
| Identify the **most appropriate** apparatus, **giving details**: range and resolution and/or relevant dimensions (for example the length of string for a pendulum) | Identify the apparatus; range and resolution | You must justify sizes and values, not just name items |
| Discuss calibration of instruments | Same | Same |
| Describe how to measure relevant variables using the most appropriate instrument(s) and techniques | Same | Techniques are more specialised (timing oscillations, counting radiation) |
| Identify and state how to control all other relevant variables | Same | Same |
| Discuss whether repeat readings are appropriate | Same | Random processes such as decay make the answer more interesting |
| Identify health and safety issues and discuss how they may be dealt with | Same | Radioactive sources, high voltages, hot liquids |
| Discuss how the data collected will be used | Same | Log graphs are expected where the relationship is exponential or a power law |

Two Unit 3 planning points do not appear in the 6.3 list: implications and context, and sources of uncertainty and systematic error (which move to 6.5 Analysis). The Unit 6 description adds that students should gain experience of using log graphs to determine the relationship between two variables, so "how the data will be used" is where most A2 marks are won or lost.

## Giving details: choosing values, not just items

"Giving details" means a number with a reason. Three typical decisions:

- **Capacitor discharge timed with a stopwatch.** The time constant RC should be long enough to time by hand. A 470 µF capacitor and a 100 kΩ resistor give RC = 47 s, so readings every 10 s over about two minutes are practical. With a 1 kΩ resistor RC would be 0.47 s, which needs a data logger instead.
- **Mass on a spring.** Choose masses and a spring so the period is at least about 0.5 s; 20 oscillations then take 10 s or more, and a reaction-time uncertainty of 0.2 s is 2% or less.
- **Heating a liquid.** Choose a heater power and mass of liquid that give a temperature rise of at least 10 °C in a few minutes, so that a thermometer reading to 1 °C gives an uncertainty of 5% or less.

In each case, state the instrument's resolution as well: a stopwatch reading to 0.01 s, a top-pan balance reading to 0.01 g, a digital thermometer reading to 0.1 °C.

## Full plan 1: finding an unknown mass from oscillations

**Task.** Plan how to determine the value of an unknown mass using the resonant frequencies of the oscillation of known masses. This is a Unit 5 core practical.

**Physics.** For a mass m on a spring of stiffness k, T = 2π√(m/k), so T² = (4π²/k)m. A graph of T² against m for known masses is a straight line; the unknown mass is read from its T².

**Apparatus, with details.** A steel spring hung from a clamp stand, with a G-clamp fixing the stand to the bench. A 100 g mass hanger and 100 g slotted masses, giving 0.100 kg to 0.600 kg. A stopwatch reading to 0.01 s. A fiducial marker (a pin in a cork) clamped level with the equilibrium position. A top-pan balance reading to 0.01 g to check the masses.

**Calibration.** Check the masses on the balance, as slotted masses can differ from their marked value; zero the balance first.

**Method.**

1. Hang 0.100 kg and let it come to rest. Set the fiducial marker level with the bottom of the hanger.
2. Pull the mass down about 2 cm and release it, so it oscillates vertically without swinging sideways.
3. Start timing as the hanger passes the marker moving downwards, and time 20 oscillations, counting "zero" at the start.
4. Repeat the timing twice more; calculate the mean time and T = mean ÷ 20.
5. Repeat for six masses up to 0.600 kg, then for the unknown mass.

**Why these techniques.** Timing at the equilibrium position, where the mass moves fastest, gives the most definite instant to start and stop. Timing 20 oscillations makes the reaction-time uncertainty a small fraction of the total: with k = 25 N m⁻¹, 20 oscillations of 0.100 kg take about 7.9 s, so 0.2 s is about 2.5%.

**Controls.** Same spring throughout, as k must stay constant. Same small amplitude, so the spring stays within its limit of proportionality. Oscillations vertical, so the motion is simple harmonic and not a pendulum swing.

**Repeats.** Yes: hand timing has random error from reaction time, so three timings per mass and a mean.

**Safety.** Hazard: the masses could fall from the hanger or the stand could topple. Precaution: G-clamp the stand to the bench and keep feet clear, with a soft mat underneath.

**Use of the data.** Plot T² against m for the known masses and draw the line of best fit. Calculate T² for the unknown mass and read its value from the line. The gradient is 4π²/k, so k = 4π² ÷ gradient. For example, with a gradient of 1.58 s² kg⁻¹, k = 25.0 N m⁻¹; if the unknown mass gives 20 oscillations in 14.6 s, T² = 0.533 s² and m = 0.533 ÷ 1.58 = 0.337 kg. Reading the unknown from the graph, rather than calculating from one equation, also allows for the spring's own mass, which shifts the line slightly so it does not pass exactly through the origin.

## Full plan 2: absorption of gamma radiation by lead

**Task.** Plan how to investigate the absorption of gamma radiation by lead, a Unit 5 core practical.

**Apparatus, with details.** A sealed gamma source in a holder; a Geiger–Müller (GM) tube connected to a counter; a set of lead sheets; a micrometer to measure each sheet's thickness (resolution 0.01 mm); a metre rule to fix the source-to-tube distance; a stopwatch, or the counter's own timer; long-handled tongs.

**Calibration and correction.** Check the micrometer for zero error. With the source locked away, record the **background count** for at least 10 minutes and calculate the background count rate. Every reading is corrected by subtracting it.

**Method.**

1. Clamp the source and GM tube on a bench so their separation is fixed, for example 5.0 cm.
2. With no lead, record the count over 100 s.
3. Add lead sheets between source and tube, measuring the total thickness x with the micrometer at several points, and record the count over 100 s at each thickness, up to about 20 mm in at least six steps.

**Controls.** Fixed source-to-tube distance, because count rate also falls with distance. Same source and tube. Absorber placed at the same position each time.

**Repeats.** Repeats are appropriate and important, because radioactive decay is random: the count in a fixed time varies even when nothing changes. Repeat each count three times, or count for longer, and use the mean.

**Safety.** Hazard: exposure to ionising radiation. Precautions: handle the source only with tongs, holding it at arm's length and pointing away from people; keep exposure time short; return the source to its lead-lined box as soon as the experiment ends. Lead is toxic, so wash hands after handling the sheets.

**Use of the data.** Calculate the corrected count rate C for each thickness. If absorption is exponential, C = C₀e^(−μx), so ln C = ln C₀ − μx. Plot ln C against x: a straight line confirms the exponential relationship, and the magnitude of the gradient gives μ.

## Common mistakes

- Listing apparatus with no details: "a spring and masses" instead of masses from 0.100 kg to 0.600 kg in 0.100 kg steps.
- Timing one oscillation, or starting the timer at the top of the motion where the mass is momentarily still.
- Forgetting the background count in a radioactivity plan, or subtracting a background count rather than a count rate.
- Saying repeats are unnecessary for counting experiments.
- Planning to plot C against x and "see if it curves", instead of a log graph that tests the relationship with a straight line.
- Generic safety: "be careful with the source" scores nothing; tongs, distance, time and storage do.

## Exam technique for the command words

- **Describe** the method in numbered steps, each with the instrument and technique.
- **Explain** a choice: give the reason, such as why 20 oscillations or why ln C is plotted.
- **Discuss** repeats or safety: say whether they are needed and why, then how they are handled.
- **Devise** a procedure for an unfamiliar experiment by working from the equation: it tells you what to vary, what to measure and what to plot.

Before writing, rearrange the equation into the form y = mx + c, or its log form. That single line tells the examiner what you will measure, what you will plot and how the result comes from the gradient or intercept.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (XPH11/YPH11), Issue 3, July 2021, Unit 6: Practical Skills in Physics II, section 6.3 Planning.
