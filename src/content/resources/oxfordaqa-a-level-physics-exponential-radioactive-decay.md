---
title: "OxfordAQA International AS and A-level Physics: Exponential radioactive decay (9630)"
seoTitle: "OxfordAQA Physics 9630 Exponential Decay Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Exponential radioactive decay"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 120
syllabusTopics:
  - qualification: "a-level"
    topic: "exponential-change-oxfordaqa"
    subtopic: "exponential-changes-in-radioactivity-oxfordaqa"
description: "Study guide to random decay, the decay constant, N = N₀e^(−λt), activity, half-life, molar mass and log graphs for OxfordAQA International A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches section 3.9.2 (Exponential changes in radioactivity) of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4, for exams from May/June 2020 onwards. Section 3.9 is marked International A-level only. Section 3.3.3 adds that use of the exponential decay equations is needed at International A2 only, so none of this is needed for the International AS qualification.

Track your progress with the [OxfordAQA Physics hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/). Condensed recall is in the [revision notes](/resources/oxfordaqa-a-level-physics-exponential-radioactive-decay-revision-notes/) and questions with worked answers are in the [practice set](/resources/oxfordaqa-a-level-physics-exponential-radioactive-decay-practice/). Half-life with whole numbers of half-lives, decay modes and radiation types are in the [decay modes and half-life guide](/resources/oxfordaqa-a-level-physics-radioactive-decay-modes-half-life-radiation-properties/). Log graphs and uncertainty in readings link to [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/). Take the [free 10-minute diagnostics](/diagnostics/) to see where to start.

## What you must be able to do

| Specification statement | What it means for you |
|---|---|
| Random nature of decay; constant decay probability of a given nucleus | Explain why you cannot predict when one nucleus decays, and what λ represents |
| ΔN/Δt = −λN | Use the decay rule and link it to the gradient of an N–t graph |
| N = N₀e^(−λt) | Calculate how many nuclei remain after a time, or the time taken |
| Activity, A = λN | Find activity from the number of nuclei, and the reverse |
| A = A₀e^(−λt) | Apply the exponential law directly to activity |
| Modelling with constant decay probability | Step through a decay numerically and compare with the exact curve |
| Molar mass and the Avogadro constant | Turn a mass of a nuclide into a number of nuclei |
| T½ = ln2/λ | Convert between half-life and decay constant |
| Half-life from decay curves and log graphs | Read T½ from a curve, and λ from the gradient of a graph of ln A against t |

## Random decay and the decay constant

An unstable nucleus decays **spontaneously**: nothing outside the nucleus (temperature, pressure, chemical bonding) changes the chance that it will. It is **random**: you cannot say which nucleus in a sample will decay next, or when. What you can say is that every nucleus of a given nuclide has an **equal chance of decaying in any chosen interval**, and that this chance does not depend on how long the nucleus has already existed. A nucleus that has survived for a million years is no more "due" to decay than a new one.

The **decay constant** λ is the probability per unit time that any one given nucleus will decay. Its unit is s⁻¹ (or h⁻¹, y⁻¹ and so on). A large λ means a short-lived nuclide.

Because each nucleus decays independently, big samples behave predictably even though single nuclei do not. In a short interval Δt, each nucleus has probability λΔt of decaying, so with N nuclei present the expected number of decays is λNΔt. Real counts scatter around this expectation: for a count of C, the spread is about √C, which is why long counting times give smoother graphs.

## The decay rule and activity

The number of nuclei falls, so the change ΔN is negative:

ΔN/Δt = −λN

The rate of decay is proportional to the number of undecayed nuclei. The **activity** A is the number of nuclei decaying per second, so

A = −ΔN/Δt = λN

Activity is measured in becquerel (Bq), where 1 Bq is one decay per second. Because A is proportional to N, activity falls in the same proportion as the number of nuclei.

On a graph of N against t, the gradient at any point is −λN, so the gradient is steepest at the start and flattens out. A tangent at t = 0 has gradient −λN₀.

## The exponential law

Solving the decay rule gives

N = N₀e^(−λt)

where N₀ is the number of undecayed nuclei at t = 0. Since A is proportional to N, the same form holds for activity (and for the corrected count rate, which is proportional to activity):

A = A₀e^(−λt)

The exponent λt has no unit, so λ and t must use the same time unit. Convert before you substitute.

**Worked example 1.** A sample of copper-64, with half-life 12.7 h (given), contains 8.0 × 10¹⁵ nuclei at t = 0. Find λ in h⁻¹ and s⁻¹, the initial activity, and the number of nuclei and the activity after 40 h.

- λ = ln2/12.7 = 0.0546 h⁻¹.
- In seconds: λ = 0.0546/3600 = **1.52 × 10⁻⁵ s⁻¹**.
- A₀ = λN₀ = 1.52 × 10⁻⁵ × 8.0 × 10¹⁵ = **1.2 × 10¹¹ Bq**.
- N = N₀e^(−0.0546 × 40) = 8.0 × 10¹⁵ × e^(−2.183) = 8.0 × 10¹⁵ × 0.1127 = **9.0 × 10¹⁴**.
- A = 0.1127 × 1.21 × 10¹¹ = **1.4 × 10¹⁰ Bq**.

Sense check: 40 h is about 3.1 half-lives, and (½)³·¹ is about 0.11.

### Finding a time: use logarithms

To find t you must take natural logs. Rearrange A = A₀e^(−λt) as A/A₀ = e^(−λt), then take ln of both sides:

ln(A/A₀) = −λt, so t = (1/λ) ln(A₀/A)

**Worked example 2.** The copper-64 sample in example 1 must be stored until its activity falls to 2.0 × 10⁹ Bq. How long is that?

- A₀/A = 1.21 × 10¹¹ ÷ 2.0 × 10⁹ = 60.6.
- t = ln(60.6) ÷ 0.0546 h⁻¹ = 4.105 ÷ 0.0546 = 75.2 h, so **75 h**.
- Check: about 5.9 half-lives, and 2⁻⁵·⁹ is about 1/60.

## The half-life equation

The half-life T½ is how long it takes for the undecayed nuclei, and so the activity, to fall to half. Put N = ½N₀ into the exponential law:

½ = e^(−λT½), so ln 2 = λT½, giving **T½ = ln2/λ**

The result contains no N₀: the half-life of a nuclide is a constant, and the same whether you start with a large or small sample. ln2 = 0.693, so λ = 0.693/T½. A useful rewrite of the law is N = N₀(½)^(t/T½), handy when t is a simple multiple of T½.

Keep λ and T½ in matching time units. If T½ is in years, λ is in y⁻¹, and you divide by the number of seconds in a year to get s⁻¹.

## Molar mass and the Avogadro constant

You often know a **mass** of a nuclide rather than the number of nuclei. A mole of nuclei has mass equal to the molar mass M (in g mol⁻¹, numerically close to the nucleon number) and contains N_A = 6.02 × 10²³ nuclei.

N = (m/M) × N_A

where m is the mass in grams, M in g mol⁻¹. Check your mass unit: micrograms and milligrams must be converted to grams.

**Worked example 3.** A source contains 1.0 µg of krypton-85. Take M = 85 g mol⁻¹, T½ = 10.8 years (both given) and 1 year = 3.156 × 10⁷ s. Find the activity, and the activity after 20 years.

- N = (1.0 × 10⁻⁶ ÷ 85) × 6.02 × 10²³ = 7.08 × 10¹⁵.
- λ = ln2 ÷ (10.8 × 3.156 × 10⁷ s) = 0.693 ÷ 3.408 × 10⁸ = 2.03 × 10⁻⁹ s⁻¹.
- A = λN = 2.03 × 10⁻⁹ × 7.08 × 10¹⁵ = **1.4 × 10⁷ Bq**.
- After 20 years: 20 ÷ 10.8 = 1.85 half-lives, so A = 1.44 × 10⁷ × (½)^1.85 = **4.0 × 10⁶ Bq**.

The reverse also works. If you are given a measured activity and a mass, A/m gives λ via N, and then T½ follows. The practice set includes this.

## Modelling with constant decay probability

You can model decay without the exponential function. Because each nucleus has probability λΔt of decaying in a short step Δt, the number lost in each step is ΔN = −λNΔt. The new total is

N(new) = N(old) − λN(old)Δt = N(old)(1 − λΔt)

A spreadsheet or a few lines of code repeats this. You need only a starting N, λ and a step length.

**Worked example 4.** Take N₀ = 1000 and λ = 0.20 s⁻¹. Model with Δt = 1.0 s, then compare with the exact value at t = 4.0 s.

| t / s | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| N (model, Δt = 1.0 s) | 1000 | 800 | 640 | 512 | 409.6 |
| N (exact) | 1000 | 819 | 670 | 549 | 449 |

Each step multiplies by (1 − 0.20 × 1.0) = 0.80. At 4.0 s the model gives 410 against an exact 449, which is 9% too low. The model uses the rate at the start of each step, which overestimates the loss as the rate is falling through the step. With Δt = 0.5 s each step multiplies by 0.90, and after eight steps N = 1000 × 0.90⁸ = 430, closer to 449. **Smaller steps give a better model.**

A physical or computer version gives each of many "nuclei" a fixed probability of being removed at every tick. The counts fluctuate around a smooth exponential curve, and the match improves as the number of nuclei grows. This shows that a constant decay probability produces exponential decay. The practice set has a question on this.

## Half-life from graphs

### From a decay curve

Subtract the background count rate first. Read the time for the corrected value to fall to half, starting from at least two different heights. Constant half-life readings confirm the exponential form. Mark the construction lines on the graph.

### From a log graph

Taking natural logs of A = A₀e^(−λt):

ln A = ln A₀ − λt

Plotting ln A against t gives a straight line. Its **gradient is −λ** and its intercept is ln A₀. The line is easier to draw, and easier to judge for fit, than a curve. You can use any time unit and any activity or count-rate unit, as the unit only changes the intercept. Taking logs to base 10 also gives a straight line, but then the gradient is −λ log₁₀e, so λ = −gradient × 2.303.

**Worked example 5.** A detector measured a source with a background rate of 18 per minute.

| t / min | 0 | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|
| Measured rate | 658 | 469 | 336 | 242 | 176 | 129 |
| Corrected rate | 640 | 451 | 318 | 224 | 158 | 111 |
| ln (corrected rate) | 6.461 | 6.111 | 5.762 | 5.412 | 5.063 | 4.710 |

The points lie on a straight line. Using the first and last points:

- gradient = (4.710 − 6.461) ÷ 50 = −0.0350 min⁻¹, so **λ = 0.0350 min⁻¹**.
- T½ = ln2 ÷ 0.0350 = **19.8 min**.
- Check on the raw data: 640 falls to about 320 near t = 20 min, matching 318.

If you had taken ln of the **measured** rate, the points would curve and the gradient would be wrong. Subtract background first. For accuracy, use a long line, such as a large triangle on the plotted line, not adjacent points.

## Common errors

- Mixing time units: λ in h⁻¹ with t in days, or T½ in years with λ in s⁻¹.
- Using log₁₀ in N = N₀e^(−λt) work. Use ln, the inverse of e.
- Forgetting to subtract background before taking ln or finding a half-life.
- Reading the gradient of a ln A graph as +λ. The gradient is negative and λ is positive.
- Treating λ as the activity. λ is a probability per unit time, while A = λN also depends on how many nuclei are present.
- Describing half-life as the time for one nucleus to decay. It describes a large sample: half of the nuclei decay in that time, but which ones is unpredictable.
- Using mass in micrograms or milligrams directly in N = (m/M)N_A.
- Giving too many significant figures. Match the data supplied.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for exams from May/June 2020 onwards, published by Oxford International AQA Examinations: section 3.9.2 Exponential changes in radioactivity (International A-level only).
