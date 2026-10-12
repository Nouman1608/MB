---
title: "OxfordAQA International AS and A-level Physics: Capacitor charge and discharge through resistors (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics RC Circuits Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Capacitor charge and discharge through resistors"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 119
syllabusTopics:
  - qualification: "a-level"
    topic: "exponential-change-oxfordaqa"
    subtopic: "capacitor-charge-and-discharge-oxfordaqa"
description: "Condensed revision notes on RC charge and discharge for OxfordAQA International A-level Physics: equations, graphs, time constant and log-linear plots."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

Condensed notes for section 3.9.1 of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4. The specification marks section 3.9 as International A-level only. For full explanations, use the [study guide](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors/); for questions, use the [practice set](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors-practice/). Course pages: [physics hub](/boards/oxfordaqa/a-level/physics/) and [checklist](/checklists/oxfordaqa/a-level/physics/). To find weak spots, try the [free 10-minute diagnostics](/diagnostics/).

## Key ideas in one place

- Discharge: capacitor loses charge through R. I = V/R = Q/(RC), so the rate of loss is proportional to the charge left. Result: exponential decay.
- Charge: capacitor gains charge from a supply of e.m.f. V₀ through R. V₀ = V_R + V_C at all times. The current is largest at the start and falls.
- Time constant = RC, in seconds when R is in Ω and C in F.
- Neither process finishes in a finite time. Each is exponential: equal time steps give equal fractional changes.

## Equations

| Quantity | Discharge | Charge |
|---|---|---|
| Charge | Q = Q₀e^(−t/RC), Q₀ = CV₀ | Q = Q₀(1 − e^(−t/RC)), Q₀ = CV₀ is the final charge |
| Capacitor p.d. | V = V₀e^(−t/RC) | V = V₀(1 − e^(−t/RC)) |
| Current | I = I₀e^(−t/RC), I₀ = V₀/R | I = I₀e^(−t/RC), I₀ = V₀/R |
| Resistor p.d. | equals the capacitor p.d. | V_R = V₀e^(−t/RC) |
| Time to halve | T½ = ln 2 × RC = 0.693 RC | the quantity that is falling halves in T½ |

Useful fractions:

| Time | Fraction left (discharge) | Fraction of final value reached (charge) |
|---|---|---|
| RC | 0.368 (about 37%) | 0.632 (about 63%) |
| 2RC | 0.135 | 0.865 |
| 3RC | 0.050 | 0.950 |
| 5RC | 0.0067 | 0.993 |

## Graphs: shapes, gradients, areas

| Graph | Shape | Gradient | Area |
|---|---|---|---|
| Q–t (discharge) | Falling curve, steepest at t = 0 | Equals −I | — |
| V–t (discharge) | Same shape as Q–t | Equals −I/C | — |
| I–t (discharge) | Same shape, starts at V₀/R | — | Charge transferred; total = Q₀ |
| Q–t, V–t (charge) | Rising from zero to CV₀, V₀; steepest at t = 0 | Q–t gradient = I | — |
| I–t (charge) | Falling curve from V₀/R to zero | — | Charge stored so far; total = CV₀ |

Tangent at t = 0 to a discharge curve meets the time axis at t = RC. For a charging curve the tangent at t = 0 reaches the final value at t = RC.

## Method boxes

**Find a value at time t (discharge).**
1. Convert to F, Ω, s.
2. RC = R × C.
3. Quantity = start value × e^(−t/RC).

**Find the time for a given value.**
1. Divide: target/start.
2. t = −RC ln(target/start) for discharge.
3. For charge, first find the fraction left to go: (final − target)/final, then t = −RC ln(that fraction) = RC ln(final/(final − target)).

**Find RC from data (log-linear).**
1. Add a column ln V (or ln Q, ln I). For charging use ln(V₀ − V).
2. Plot against t, draw the best line, take the gradient with a large triangle.
3. RC = −1/gradient. The intercept is ln V₀ (discharge).
4. For C, divide RC by the known R.

**Half-time check.** RC = T½ / 0.693. Read T½ at two places on the curve: if the values are the same, the decay is exponential.

**Worked reminder.** RC = 20 s and V₀ = 15 V. Discharging, at t = 20 s: V = 15e⁻¹ = 5.5 V. Charging from zero, at t = 20 s: V = 15(1 − e⁻¹) = 9.5 V. At t = 40 s: discharge 15e⁻² = 2.0 V; charge 15(1 − e⁻²) = 13.0 V.

**Worked reminder (half-time).** A discharge takes 26 s for V to halve. RC = 26/0.693 = 37.5 s. With C = 750 µF, R = 37.5 / (750 × 10⁻⁶) = 50 kΩ. After 78 s (three half-times) one eighth of V₀ remains.

**Worked reminder (sloping tangent).** On a discharge Q–t graph, Q₀ = 6.0 mC and the tangent at t = 0 meets the time axis at 12 s. RC = 12 s. The initial current is the magnitude of the gradient: 6.0 mC / 12 s = 0.50 mA.

## Describing and sketching graphs

A good description or sketch includes these features:
- The axes labelled with quantity and unit, and the starting value marked.
- The exponential shape: steepest at t = 0, with the gradient decreasing.
- The curve approaches the final value (zero for discharge; CV₀ or V₀ for charging) but does not reach it.
- For several curves on one axis, the one with the larger RC is drawn flatter, and curves that start at the same value do not cross.
- The same time axis used for Q, V and I so that the half-times can be compared.

## Units and powers of ten

| Prefix | Meaning | Example in RC work |
|---|---|---|
| m (milli) | × 10⁻³ | 3.0 mF = 3.0 × 10⁻³ F |
| µ (micro) | × 10⁻⁶ | 470 µA = 4.7 × 10⁻⁴ A |
| k (kilo) | × 10³ | 5.0 kΩ = 5.0 × 10³ Ω |
| M (mega) | × 10⁶ | 2.0 MΩ = 2.0 × 10⁶ Ω |

A quick size check: a microfarad capacitor with a megohm resistor gives a time constant of 1 s, since 10⁻⁶ × 10⁶ = 1. A millifarad capacitor with a kilohm resistor also gives 1 s. Use these to see if an answer is the right size before you move on.

## Required practical 6

Investigate charge and discharge. Typical set-up: capacitor, resistor, switch, supply, voltmeter or data logger.

1. Charge the capacitor fully. Switch to discharge. Start timing at the same moment.
2. Record V at regular times across several time constants.
3. Plot ln V against t. Gradient = −1/RC.
4. Check by changing R or C: RC changes in proportion.

Evaluation points: finite voltmeter resistance in parallel with R shortens the measured time constant; capacitor tolerance means the marked C is not exact; polarity of an electrolytic capacitor; read timings from one start point; the uncertainty in RC has the same percentage uncertainty as the gradient.

## Must-know distinctions

- Discharge form Q₀e^(−t/RC) versus charging form Q₀(1 − e^(−t/RC)). In the second, Q₀ is the final charge.
- Gradient of the Q–t graph (current) versus area under the I–t graph (charge).
- Time constant (to fall to 37%) versus half-time (to fall to 50%). T½ is shorter than RC.
- The quantity never reaches zero in a finite time: after 5RC about 0.7% remains.
- Charging current falls even though Q rises.

## Quick self-test

1. A 3.0 mF capacitor discharges through a 5.0 kΩ resistor. Find the time constant.
2. For the same circuit, find T½.
3. A 100 µF capacitor charged to 12 V discharges through 200 kΩ. Find Q₀, I₀ and V after 30 s.
4. What fraction of the initial charge remains after 3RC?
5. What fraction of the final p.d. has been reached after 2RC while charging?
6. A ln V against t graph for a discharge through 25 kΩ has gradient −0.040 s⁻¹. Find RC and C.
7. The half-time of a discharge is 8.0 s. How long does it take for the charge to fall to 1/16 of its start?
8. What should be plotted against t to get a straight line for a charging capacitor?
9. A discharge has I₀ = 50 µA and RC = 30 s. What charge was stored initially?
10. R is doubled with C and V₀ unchanged. What happens to Q₀, I₀ and RC?
11. A discharging capacitor has RC = 15 s. How long does V take to fall from 9.0 V to 3.0 V?

### Answers

1. RC = 3.0 × 10⁻³ × 5.0 × 10³ = **15 s**.
2. T½ = 0.693 × 15 = **10.4 s**.
3. RC = 20 s; Q₀ = 100 × 10⁻⁶ × 12 = **1.2 × 10⁻³ C**; I₀ = 12/200 000 = **6.0 × 10⁻⁵ A**; V = 12e^(−30/20) = **2.7 V**.
4. e⁻³ = **0.050** (5.0%).
5. 1 − e⁻² = **0.865** (about 86%).
6. RC = 1/0.040 = **25 s**; C = 25/25 000 = **1.0 × 10⁻³ F**.
7. 1/16 = four halvings, so 4 × 8.0 = **32 s**.
8. **ln(V₀ − V)** against t, with gradient −1/RC. (ln I against t also works.)
9. Q₀ = I₀ × RC = 50 × 10⁻⁶ × 30 = **1.5 × 10⁻³ C**.
10. Q₀ = CV₀ is **unchanged**; I₀ = V₀/R **halves**; RC **doubles**.
11. t = 15 ln(9.0/3.0) = 15 ln 3 = **16.5 s**.

## Where marks are usually lost

- Putting µF or kΩ into RC without converting, so the answer is wrong by a power of ten.
- Using the discharge equation for a charging question, or the reverse.
- Entering e^(−t/RC) without brackets round the whole exponent, so only part of it is divided. Write the exponent in brackets and check the answer is smaller than the starting value.
- Giving the gradient of a ln graph as +1/RC.
- Plotting ln V against t for charging instead of ln(V₀ − V).
- Saying the capacitor is empty after one time constant.
- Describing curves without saying "exponential", "never reaches zero" or "steepest at the start", so a description loses detail.
- No units, or a wrong unit, on RC, charge or current.
- Forgetting that the area under an I–t graph is charge, and quoting energy.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams from May/June 2020 onwards, published by OxfordAQA. These notes follow section 3.9.1 and Required practical 6.
