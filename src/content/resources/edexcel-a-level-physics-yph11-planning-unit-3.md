---
title: "Edexcel International A Level Physics (YPH11): Unit 3 Planning"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Unit 3: Practical Skills in Physics I"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-3-practical-skills-in-physics-i"
    subtopic: "planning-unit-3-yph11"
description: "How to write a full-mark plan for Edexcel IAL Physics Unit 3 section 3.3: instruments, calibration, controls, safety, data use, uncertainty and context."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.3 Planning** of **Unit 3: Practical Skills in Physics I**, from the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics specification (YPH11), Issue 3. Unit 3 is an International AS unit. The specification says students "will be expected to plan an experiment set by Pearson, although they will not be expected to carry it out", so this is a written skill, tested on experiments from Units 1 and 2.

The [Unit 3 planning and checking overview](/resources/edexcel-ial-physics-unit-3-planning-an-experiment-and-checking-another/) introduces every 3.3 and 3.4 point and works a resistivity plan. This page goes deeper into 3.3 only, with a different full plan, an annotated answer and instrument choices worked as numbers. Condensed notes are in the [Unit 3 planning revision notes](/resources/edexcel-a-level-physics-yph11-planning-unit-3-revision-notes/) and questions in the [Unit 3 planning practice questions](/resources/edexcel-a-level-physics-yph11-planning-unit-3-practice/). Checking another student's work (3.4) has its own [Unit 3 implementation and measurements guide](/resources/edexcel-a-level-physics-yph11-implementation-and-measurements-unit-3/).

## What 3.3 assesses

The specification lists ten things a plan may be judged on. Treat them as the headings of your answer.

| Point | What a mark-earning answer contains |
|---|---|
| Apparatus | Every item named, including the less obvious ones (pulley, clamp, set square) |
| Range and resolution | The instrument's resolution stated, including Vernier calipers (0.1 mm) and micrometer screw gauge (0.01 mm) |
| Calibration | A check that each instrument reads zero, or reads correctly against a known value, before use |
| Measuring variables | The instrument for each variable **and** the technique that makes the reading reliable |
| Control variables | Each one named, with how it is kept constant |
| Repeat readings | Whether repeats help, and why |
| Health and safety | A specific hazard and a specific precaution |
| Use of data | The graph to plot and how the answer comes from it |
| Uncertainty and systematic error | The main sources, and how each is reduced or eliminated |
| Implications and context | A benefit or risk of the physics, and a social, environmental or historical setting |

The last row is the one that separates Unit 3 from Unit 6 planning: only the Unit 3 list includes implications and context, and only Unit 3 lists sources of uncertainty and systematic error as a planning point.

## Choosing an instrument by its resolution

"Most appropriate" is decided by the percentage uncertainty the instrument gives for the size of the quantity. For a single reading, the uncertainty is half the resolution.

**Worked example: measuring the diameter of a glass marble of about 16 mm.**

| Instrument | Resolution | Uncertainty | Percentage uncertainty |
|---|---|---|---|
| 30 cm ruler | 1 mm | 0.5 mm | 0.5 ÷ 16 × 100% = 3.1% |
| Vernier calipers | 0.1 mm | 0.05 mm | 0.05 ÷ 16 × 100% = 0.31% |
| Micrometer screw gauge | 0.01 mm | 0.005 mm | 0.005 ÷ 16 × 100% = 0.031% |

Vernier calipers are the sensible choice: they give a percentage uncertainty well under 1%, they grip a sphere across its widest point, and a ruler cannot be lined up with the edges of a curved object at all. Mention the **range** as well as the resolution when it matters: a micrometer with a range of 0–25 mm can measure the marble, but not a 40 mm ball. For a 0.30 mm wire, the same table would point to the micrometer, because 0.05 mm on Vernier calipers is about 17% of the diameter.

## Calibration and systematic error

Calibration in 3.3 means checking an instrument against a known reference before trusting it:

- A micrometer or Vernier is closed and read; any non-zero reading is a **zero error**, subtracted from every reading.
- A newton-meter is checked against a known mass hanging from it (weight = mg).
- A signal generator's frequency dial can be checked against an oscilloscope: measure the period of the trace from the time-base setting and calculate f = 1/T.
- A thermometer is checked in melting ice (0 °C).

Each of these removes a **systematic error**, one that shifts every reading by the same amount or in the same direction. Repeating readings cannot remove a systematic error; only calibration or a correction can. Random errors, by contrast, are reduced by repeats and by plotting a graph.

## A full plan: frequency of a vibrating wire against tension

**Task.** Plan an experiment to investigate how the frequency of the first harmonic of a stretched wire depends on the tension in it. This is one part of a Unit 2 core practical, investigating the effects of length, tension and mass per unit length on the frequency of a vibrating string or wire.

**Physics.** For the first harmonic, f = (1/2l)√(T/μ), where l is the vibrating length and μ the mass per unit length. With l and μ constant, f is proportional to √T.

**Apparatus.** Steel wire fixed at one end and passed over a pulley at the edge of the bench; a mass hanger with 0.50 kg slotted masses; two bridges; a vibration generator under the wire, driven by a signal generator; a metre rule (resolution 1 mm); a clamp to fix the bench end; a sand tray under the masses.

**Method.**

1. Set the bridges 0.600 m apart, measured with the metre rule from the centre of each bridge, eye level with the scale to avoid parallax.
2. Hang 0.50 kg on the hanger, so T = mg = 4.91 N.
3. Increase the signal generator frequency slowly until the wire vibrates with the largest amplitude in a single loop between the bridges. Record f. Then approach the same resonance from a higher frequency and record again; take the mean.
4. Repeat for 1.0, 1.5, 2.0, 2.5 and 3.0 kg, giving six tensions from 4.91 N to 29.4 N.

**Controls.** Keep the vibrating length fixed by leaving the bridges in place (check it after each change of mass, as the wire can drag a bridge). Use the same wire throughout so μ is constant. Keep the vibration generator at the same position so it excites the first harmonic.

**Repeats.** Repeats are appropriate, because judging the point of largest amplitude is subjective. Approaching from below and above, for example 71.2 Hz and 72.8 Hz, gives a mean of 72.0 Hz with an uncertainty of half the range, 0.8 Hz (1.1%).

**Calibration.** Check the signal generator's displayed frequency with an oscilloscope before starting.

**Safety.** Hazard: falling masses if the wire snaps or the hanger slips. Precaution: a sand tray beneath the masses and feet kept clear. Hazard: a snapping wire under tension. Precaution: wear eye protection and do not exceed the masses planned.

**Use of data.** Plot f against √T. A straight line through the origin confirms f ∝ √T. The gradient equals 1/(2l√μ), so μ = 1/(4l² × gradient²). With l = 0.600 m and a gradient of 24.1 Hz N⁻½, μ = 1/(4 × 0.360 × 24.1²) = 1.20 × 10⁻³ kg m⁻¹.

**Uncertainties.** The largest source is judging resonance, reduced by approaching from both sides and repeating. The length has an uncertainty of 0.5 mm in 600 mm (0.08%) from the rule, but positioning the bridges matters more, so mark their positions with tape. A systematic error in frequency is removed by the oscilloscope check.

**Implications and context.** The same relationship governs how stringed instruments are tuned: increasing tension raises the pitch. A risk of high tension is that a wire can snap; instrument makers choose wire diameter and material so that the working tension is well below the breaking stress.

## Annotated answer: what earns the mark

Examiners credit specific, checkable statements. Compare these pairs:

| Vague (no mark) | Specific (mark) |
|---|---|
| "Measure the length with a ruler" | "Measure the length between the bridges with a metre rule, resolution 1 mm, eye level with the scale" |
| "Keep everything the same" | "Keep the distance between the bridges at 0.600 m and use the same wire, so μ is constant" |
| "Be careful with the masses" | "Place a sand tray under the hanger and keep feet clear in case the wire snaps" |
| "Draw a graph" | "Plot f against √T; a straight line through the origin shows f ∝ √T" |
| "Repeat to make it accurate" | "Repeat each resonance from above and below, because judging maximum amplitude causes random error, and take the mean" |

Two habits help: write the plan in numbered steps, and give a value or a reason in every line.

## Common mistakes

- Naming an instrument without its resolution, or quoting the resolution as the uncertainty (the uncertainty is half the resolution).
- Saying repeats reduce systematic error.
- Planning only three or four values of the independent variable: a graph needs at least five or six spread across the range.
- Choosing a range too narrow to show the relationship, such as masses from 0.5 kg to 1.0 kg.
- Plotting the raw variables when the relationship is not linear: plot the quantities that give a straight line (f against √T, not f against T).
- Writing a context point with no physics in it ("this is useful in real life").

## Exam technique for the command words

The IAS/IAL Science command words in the specification shape planning questions:

- **Describe** asks for an account of the method; the steps do not each need a reason.
- **Explain** needs a reason in every point, such as why a control variable matters.
- **Devise** asks you to plan a procedure from principles you know, often for an unfamiliar experiment.
- **Identify** asks you to select information, such as the main source of uncertainty in a given method.
- **Discuss**, used for repeats or safety, asks you to explore the issue: say whether, and why or why not.

Before writing, underline the variable to be changed, the variable to be measured and the quantity to be found. Every part of the plan should serve those three.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics (XPH11/YPH11), Issue 3, July 2021, Unit 3: Practical Skills in Physics I, section 3.3 Planning.
