---
title: "Pearson Edexcel International A Level Physics: Unit 6: planning and evaluating experiments (YPH11) -- Revision Notes"
seoTitle: "Edexcel IAL Physics Unit 6 Planning Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 6: planning an experiment and evaluating partial experimental details"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-6-practical-skills-in-physics-ii"
    subtopic: "planning-unit-6-yph11"
  - qualification: "a-level"
    topic: "unit-6-practical-skills-in-physics-ii"
    subtopic: "implementation-and-measurements-unit-6-yph11"
description: "Condensed revision notes for Edexcel International A Level Physics Unit 6: the planning checklist, fixing partial methods, and log graph recipes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These revision notes follow the Pearson Edexcel International Advanced Subsidiary/Advanced Level Physics specification (YPH11), Issue 3. They cover section 6.3 Planning, section 6.4 Implementation and Measurements, and the unit description's log graphs. Unit 6 is an IA2 unit, linked to the experiments in Units 4 and 5. For full explanations read the [study guide](/resources/edexcel-ial-physics-unit-6-planning-an-experiment-and-evaluating-partial/).

Also use the [practice questions](/resources/edexcel-ial-physics-unit-6-planning-an-experiment-and-evaluating-partial-practice/), the [course hub](/boards/edexcel/a-level/physics/), the [printable checklist](/checklists/edexcel/a-level/physics/) and the [free diagnostics](/diagnostics/).

## The seven planning prompts (6.3)

The specification lists seven things you are assessed on. Use them as a checklist, in this order.

| Prompt | What to write |
|---|---|
| Apparatus | Instrument, range, resolution, key dimensions |
| Calibration | Zero check or comparison with a known value |
| Measuring | Which instrument, where, how, how many oscillations |
| Control | Name each variable and how it is held |
| Repeats | Whether and why; average; spot outliers |
| Safety | Hazard, harm, precaution |
| Data use | Graph, axes, gradient or intercept, final quantity |

### Method in steps: writing a plan

1. Say what you change (independent variable) and what you measure (dependent variable).
2. Choose instruments and justify them with range and resolution.
3. State the calibration check.
4. Describe the procedure so someone else could follow it.
5. List the controlled variables with values where possible.
6. Say how many readings and repeats, and over what range.
7. Name one specific hazard and its precaution.
8. Say how you will process the data.

## Equations and quick tools

| Quantity | Expression |
|---|---|
| Percentage uncertainty | (uncertainty / reading) × 100 |
| Corrected reading | reading − zero error |
| Period from n oscillations | T = t / n |
| Power law y = kxⁿ | lg y = n lg x + lg k |
| Exponential y = A e^(bx) | ln y = bx + ln A |
| Gradient | (y₂ − y₁)/(x₂ − x₁), using points far apart |

Reaction time is about 0.2 s. On a 20 s total, that is about 1%. On a 1 s single period it is about 20%.

## Fixing a partial method (6.4)

### Improvements

Name the change and the error it reduces.

- Set squares against a cylinder fix the ends of the diameter.
- A marker (fiducial) at the equilibrium position gives a consistent start and stop for timing.
- Time more oscillations to cut the reaction-time percentage.
- Use a micrometer or vernier callipers for small diameters.
- Wait for thermal equilibrium before reading.

### Readings, range and repeats

- Number of readings: too few cannot show scatter. Use at least six.
- Range: wide, with even spacing. A narrow range gives a poor gradient and says nothing outside it.
- Repeats: average to cut random error. They do not remove a systematic error.

### Significant figures

- Raw readings keep the instrument resolution, with trailing zeros kept.
- A calculation cannot have more significant figures than its data.
- Keep decimal places consistent in a column of raw readings.

### Units

Check each heading. Area is m², density is kg m⁻³, spring constant is N m⁻¹, resistivity is Ω m, power is W.

### Inconsistent readings

1. Locate the point that is off the line.
2. Re-read and repeat the measurement.
3. Compare it with the value the line predicts.
4. Keep it if the repeat still sits off the line, because the physics may change there.

## Log graphs

| Relationship | Plot | Gradient | Intercept |
|---|---|---|---|
| y = kxⁿ | lg y against lg x | n | lg k |
| y = A e^(bx) | ln y against x | b | ln A |

Write the headings as lg (L / m) or ln (V / V). The unit goes inside the bracket, so the log itself has no unit.

### Worked reminder: power law

A pendulum gives these points on a graph of lg (T / s) against lg (L / m): (−0.699, −0.046) and (0.000, 0.303).

Gradient = (0.303 − (−0.046))/(0.000 − (−0.699)) = 0.349/0.699 = 0.50.

So T ∝ L^0.50. The intercept is lg k = 0.303, so k = 10^0.303 = 2.0 s m^(−1/2).

### Worked reminder: exponential

A capacitor discharges through a resistor. The readings are:

| t / s | 0 | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|
| V / V | 6.00 | 4.30 | 3.08 | 2.21 | 1.58 | 1.13 |
| ln (V / V) | 1.792 | 1.459 | 1.125 | 0.793 | 0.457 | 0.122 |

Gradient = (0.122 − 1.792)/(25 − 0) = −0.0668 s⁻¹. Since V = V₀ e^(−t/RC), the gradient is −1/RC, so RC = 1/0.0668 = 15.0 s. The intercept 1.792 gives V₀ = e^1.792 = 6.00 V.

Check: 75 kΩ × 200 μF = 15.0 s.

## Must-know distinctions

- **Resolution and uncertainty.** Resolution is what the instrument can show. Uncertainty is how far the reading may be from the true value.
- **Random and systematic error.** Repeats cut random error. Calibration and better technique reduce systematic error.
- **Zero error and anomaly.** A zero error shifts every reading by the same amount. An anomaly is one reading out of line.
- **lg and ln.** Both give the same gradient for a power law. The intercepts differ.
- **Range and number of readings.** Range is the spread of the variable. Number is how many points you take.

## Quick self-test

1. A voltmeter reads 0.06 V with the terminals shorted. It then reads 1.45 V in a circuit. What is the corrected reading?
2. A 1 mm uncertainty is made on a length of 0.050 m. Find the percentage uncertainty.
3. Fifteen oscillations take 18.0 s. The reaction-time uncertainty is 0.2 s. Find the percentage uncertainty in the total time.
4. A student calculates 3.2184 from data given to 3 significant figures. Rewrite it.
5. State the unit of the gradient of a graph of T² (s²) against L (m).
6. For y = 3.0x², what are the gradient and intercept of a graph of lg y against lg x?
7. A graph of ln (R / s⁻¹) against t has gradient −0.25 s⁻¹ and intercept 3.0. Find the decay constant and R₀.
8. Give one improvement for measuring the diameter of a cylinder with a ruler.
9. Why can you not plot "lg V" if V is written as 25 cm³?
10. Why plot lg p against lg V for gas data instead of p against V?

### Answers

1. 1.45 − 0.06 = **1.39 V**.
2. (1/50) × 100 = **2.0%**.
3. (0.2/18.0) × 100 = **1.1%**.
4. **3.22**.
5. **s² m⁻¹**.
6. Gradient **2**, intercept lg 3.0 = **0.477**.
7. λ = **0.25 s⁻¹**, R₀ = e^3.0 = **20 s⁻¹** (20.1).
8. Hold two set squares against the cylinder on a flat surface and read the distance between them with a rule, or use vernier callipers.
9. A log needs a pure number. Plot lg (V / cm³) instead.
10. The curve becomes a straight line, so a gradient of −1 shows p ∝ 1/V directly.

## Worked reminder: planning numbers

A 1.00 m metre rule has resolution 1 mm. For a length of 0.250 m the percentage uncertainty is 1/250 × 100 = 0.4%. For a length of 0.025 m it is 4%, so a rule is poor for small lengths and a micrometer or vernier callipers is better.

For a hand-timed pendulum, time 20 oscillations. If the total is 40.12 s then T = 40.12/20 = 2.006 s. The 0.2 s reaction uncertainty is 0.2/40.12 × 100 = 0.5% of the total.

## Reading a partial method

When you are given a described method, read it once for the physics and once for faults. Ask five questions in turn.

1. Is the instrument suitable for the size of the quantity?
2. Is the start and stop of any timing well defined?
3. Are there enough readings, over a wide enough range?
4. Are any variables left uncontrolled?
5. Do the table headings, units and significant figures agree with the instruments used?

## Mini planning frame

Use this wording pattern for any set experiment:

- "I will change [variable] from [low] to [high] in [number] steps, measuring it with [instrument] (resolution [value])."
- "I will measure [variable] with [instrument], [where and how]."
- "I will keep [named variables] constant by [method]."
- "I will repeat each reading [number] times and average, because [reason]."
- "The hazard is [hazard], so I will [precaution]."
- "I will plot [y] against [x]. The gradient equals [expression], which gives [quantity]."

Fill every bracket with something specific from the question. An empty template earns little.

## Where marks are usually lost

- Naming an instrument with no range or resolution.
- Timing a single oscillation.
- Writing "keep other variables constant" without naming them.
- Giving no precaution for the named hazard.
- Not saying what the graph will show.
- Dropping trailing zeros from readings.
- Quoting a calculated value to more significant figures than the data.
- Using a small triangle for the gradient.
- Deleting an off-line point without checking it.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics specification (YPH11), Issue 3, Unit 6: Practical Skills in Physics II, sections 6.1 (log graphs), 6.3 and 6.4. Publisher: Pearson Education Limited.
