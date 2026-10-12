---
title: "OxfordAQA International AS and A-level Physics: Capacitor charge and discharge through resistors (9630)"
seoTitle: "OxfordAQA A-level Physics Capacitor Charge and Discharge"
resourceType: "study-guides"
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
description: "Study guide to RC charge and discharge for OxfordAQA International A-level Physics: graphs, time constant, half-time, equations and Required practical 6."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide covers section 3.9.1, Capacitor charge and discharge, of the OxfordAQA International AS and A-level Physics (9630) specification (version 4.4). The specification marks section 3.9 as International A-level only, so you do not need it for International AS. It assumes you know C = Q/V from section 3.8.4. For the course overview see the [OxfordAQA A-level Physics hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/).

Quick recall is in the [revision notes](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors-revision-notes/), and exam-style questions are in the [practice set](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors-practice/). To find out where you stand first, take one of the [free 10-minute diagnostics](/diagnostics/).

## What you must be able to do

| Specification point | What it means for you |
|---|---|
| Graphs of Q, V and I against time | Sketch and recognise charging and discharging curves |
| Gradients and areas | Say what a gradient or area on each graph represents |
| Time constant = RC | Calculate it, and find it from a plotted data set |
| Time to halve, T½ = ln 2 × RC | Use it in both directions |
| Discharge: Q = Q₀e^(−t/RC), with V and I | Calculate values at a given time, or the time for a given value |
| Charge: Q = Q₀(1 − e^(−t/RC)) | Same, plus the matching V and I |
| Required practical 6 | Investigate charge and discharge; plot a log-linear graph to find RC |

## 1. The two processes

Discharge: a charged capacitor is connected across a resistor. Charge flows round the circuit and the capacitor loses charge. The rate of loss depends on how much charge is still there, because the p.d. across the capacitor drives the current:

I = V/R = Q/(RC)

So when Q is large the current is large and Q falls quickly. As Q falls, the current falls too. This feedback gives an exponential decay.

Charge: an uncharged capacitor is connected in series with a resistor and a supply of e.m.f. V₀ (treat the supply as having negligible internal resistance). At the start the capacitor has no p.d., so the whole e.m.f. is across the resistor and I₀ = V₀/R. As charge builds, the p.d. across the capacitor opposes the supply, the p.d. across the resistor falls, and the current falls. At every instant V₀ = V_R + V_C.

## 2. The graphs

All the graphs are exponential: equal time intervals produce equal fractional changes. None of them ever reaches its final value in a finite time.

| Quantity | Discharge | Charge |
|---|---|---|
| Q (or V across the capacitor) | Falls from Q₀ (V₀) towards zero; steepest at t = 0, flattening out | Rises from zero towards the final value CV₀ (V₀); steepest at t = 0, flattening out |
| I (or V across the resistor) | Falls from V₀/R towards zero, same shape as Q | Falls from V₀/R towards zero |

In charging, Q and V rise while I falls, so the curves differ in shape, and V_R + V_C stays equal to V₀. In discharge the current flows the opposite way round the circuit to the charging current.

### Gradients

- Gradient of the Q–t graph = the current (its magnitude). On discharge it is negative because Q falls. At t = 0 it is Q₀/RC in size.
- Gradient of the V–t graph for the capacitor = I/C in size, because V = Q/C.
- The tangent to a discharge curve at t = 0 meets the time axis at t = RC. The tangent to a charging Q–t curve at t = 0 reaches the final value at t = RC. This gives a quick way to read RC off a graph, although a tangent drawn by eye is not very precise.

### Areas

- Area under an I–t graph = charge transferred, since ΔQ = IΔt. For a full discharge this area equals Q₀. For the exponential, area = I₀ × RC.
- For a part of the curve, the area gives the charge moved in that time interval.

## 3. Time constant and half-time

The time constant is RC. With R in ohms and C in farads, the product is in seconds. Its meaning follows from putting t = RC into the discharge equation: Q = Q₀e⁻¹ = 0.368Q₀. In one time constant the charge (and V, and I) falls to about 37% of its starting value. In charging, Q (and V) rises to 1 − e⁻¹ = 0.632, or about 63%, of its final value after one time constant.

Time to halve: set Q = Q₀/2.

1/2 = e^(−T½/RC), so T½ = RC ln 2 = 0.693 RC

The same T½ applies to Q, V and I, and it does not depend on where you start, so after 2T½ a quarter is left, after 3T½ an eighth, and so on.

**Worked example 1.** Find the time constant for C = 1000 µF and R = 47 kΩ, and the time for the charge to halve.
RC = 1000 × 10⁻⁶ F × 47 × 10³ Ω = **47 s**.
T½ = 0.693 × 47 = **33 s** (2 s.f.).
Convert µF and kΩ to F and Ω before multiplying. The unit check: (V/A) × (C/V) = C/A = s.

## 4. Discharge equations

| Quantity | Equation | Initial value |
|---|---|---|
| Charge | Q = Q₀e^(−t/RC) | Q₀ = CV₀ |
| Capacitor p.d. | V = V₀e^(−t/RC) | V₀ |
| Current | I = I₀e^(−t/RC) | I₀ = V₀/R |

**Worked example 2.** A 820 µF capacitor charged to 11.0 V discharges through 50 kΩ. Find (a) Q₀ and I₀, (b) V after 30 s, (c) the time for V to fall to 4.0 V, (d) the area under the I–t graph.
(a) Q₀ = CV₀ = 820 × 10⁻⁶ × 11.0 = **9.02 × 10⁻³ C**. I₀ = V₀/R = 11.0 / 50 000 = **2.2 × 10⁻⁴ A** (220 µA).
(b) RC = 50 000 × 820 × 10⁻⁶ = 41.0 s. V = 11.0 × e^(−30/41.0) = 11.0 × 0.481 = **5.3 V**.
(c) 4.0 = 11.0e^(−t/41.0), so t = 41.0 × ln(11.0/4.0) = 41.0 × 1.0116 = **41 s**.
(d) Area = I₀ × RC = 2.2 × 10⁻⁴ × 41.0 = **9.0 × 10⁻³ C**, which equals Q₀ as it must.

To get t out of an exponential, divide by the starting value and take natural logs: t = −RC ln(V/V₀) = RC ln(V₀/V).

## 5. Charging equations

| Quantity | Equation | Final or initial value |
|---|---|---|
| Charge on capacitor | Q = Q₀(1 − e^(−t/RC)) | Q₀ = CV₀ is the final charge |
| Capacitor p.d. | V = V₀(1 − e^(−t/RC)) | V₀ is the supply e.m.f. |
| Current | I = I₀e^(−t/RC) | I₀ = V₀/R |
| P.d. across resistor | V_R = V₀e^(−t/RC) | V₀ |

In the charging equation Q₀ means the final charge, not the charge at t = 0.

**Worked example 3.** A 220 µF capacitor, initially uncharged, charges through 120 kΩ from a 5.0 V supply. Find (a) RC, (b) V and I after 40 s, (c) the time for V to reach 4.0 V.
(a) RC = 120 × 10³ × 220 × 10⁻⁶ = **26.4 s**.
(b) V = 5.0(1 − e^(−40/26.4)) = 5.0(1 − 0.2197) = **3.9 V**. I₀ = 5.0/120 000 = 4.17 × 10⁻⁵ A, so I = 4.17 × 10⁻⁵ × 0.2197 = **9.2 × 10⁻⁶ A**. Check with V_R = 5.0 − 3.9 = 1.1 V and 1.1/120 000 = 9.2 × 10⁻⁶ A.
(c) 4.0 = 5.0(1 − e^(−t/26.4)), so e^(−t/26.4) = 0.20 and t = 26.4 ln 5 = **42 s**.

After 2RC the capacitor has reached 86% of its final charge, after 3RC 95%, after 5RC 99.3%. 

## 6. Finding RC from data

Reading the 63% or 37% time works, but one point is unreliable. Better methods use the whole data set.

**Method A: half-time.** Read the time for the quantity to halve at several places on the curve. They should agree. Then RC = T½ / 0.693.

**Method B: natural log graph.** Take ln of the discharge equation:

ln V = ln V₀ − t/RC

This has the form y = c + mx, so ln V plotted against t gives a straight line of gradient −1/RC and intercept ln V₀. The same applies to ln Q and ln I. For charging, ln(V₀ − V) = ln V₀ − t/RC, so plot ln(V₀ − V) against t. The gradient is again −1/RC. A straight line confirms the exponential model; curvature means the model does not fit.

**Worked example 4.** A capacitor discharges through R = 75 kΩ. Readings:

| t / s | 0 | 20 | 40 | 60 | 80 | 100 | 120 |
|---|---|---|---|---|---|---|---|
| V / V | 8.0 | 6.1 | 4.7 | 3.6 | 2.7 | 2.1 | 1.6 |
| ln of V value | 2.08 | 1.81 | 1.55 | 1.28 | 0.99 | 0.74 | 0.47 |

The points fall on a straight line, so V follows an exponential decay. Using the end points, gradient = (0.47 − 2.08)/(120 − 0) = −0.0134 s⁻¹. So RC = 1/0.0134 = **75 s** (the unrounded value is 74.6 s) and C = RC/R = 75/75 000 = **1.0 × 10⁻³ F**. The intercept 2.08 is ln 8.0, as expected.

Use a large triangle on the best-fit line, not two close points.

**Worked example 5 (tangent).** A tangent to the Q–t graph of a discharge at t = 0 meets the time axis at t = 14 s. Since the tangent meets the axis at t = RC, RC = **14 s**. If R = 7.0 kΩ, then C = 14/7000 = **2.0 × 10⁻³ F**.

## 7. Required practical 6

The specification asks for an investigation of the charge and discharge of capacitors, with analysis that includes log-linear plotting leading to a determination of RC. One approach for discharge:

1. Build a circuit with a capacitor, a known resistor and a two-way switch that connects the capacitor to the supply or across the resistor. If the capacitor is electrolytic, connect it the correct way round.
2. Charge fully, then switch to discharge and start the timer. Record V at regular intervals, or use a voltage sensor and data logger.
3. Tabulate t and V, then add a column for ln V.
4. Plot ln V against t, draw a best-fit line, and find the gradient from a large triangle. RC = −1/gradient.
5. Repeat with a different R or C and show that RC changes in proportion.

Points that can gain credit in an evaluation:
- A voltmeter of finite resistance is in parallel with the resistor and drains the capacitor faster. Use a high-resistance meter or sensor and say why.
- Capacitors have a manufacturing tolerance, so a measured C may differ from the marked value.
- Start readings at a fixed, known time, and take enough readings across several time constants so the straight line is well defined.

For the uncertainty in RC, find the percentage uncertainty in the gradient from the steepest and shallowest acceptable lines; RC has the same percentage uncertainty. The [measurements and their errors guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/) covers this method.

## Common errors

- Using µF or kΩ directly in RC without converting.
- Treating the charging equation as Q = Q₀e^(−t/RC); that is the discharge form.
- Saying the capacitor "fully discharges at t = RC". At t = RC about 37% remains.
- Reading the gradient of a ln V–t graph as 1/RC and forgetting the minus sign.
- Using ln V against t for a charging curve. Plot ln(V₀ − V) instead.

Next: [revision notes](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors-revision-notes/), then the [practice set](/resources/oxfordaqa-a-level-physics-capacitor-charge-and-discharge-through-resistors-practice/). For general exam advice see the [exam preparation page](/resources/oxfordaqa-a-level-physics-exam-preparation/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams from May/June 2020 onwards, published by OxfordAQA. This guide follows section 3.9.1 and Required practical 6.
