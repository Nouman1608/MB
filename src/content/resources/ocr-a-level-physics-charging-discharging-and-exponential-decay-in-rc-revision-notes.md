---
title: "OCR A Level Physics A: Charging, discharging and exponential decay in RC circuits (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics RC Circuits Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Charging, discharging and exponential decay in RC circuits"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 66
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "capacitors-ocr-alevel"
description: "Condensed revision notes on RC charging and discharging, time constant, ln graphs, spreadsheet modelling and exponential decay, for OCR A Level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 6.1.3, Charging and discharging capacitors, of the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. They cover statements 6.1.3(a) to 6.1.3(e). For full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc/), then test yourself with the [practice questions](/resources/ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-practice/). Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and [checklist](/checklists/ocr/a-level/physics/). Not sure where to start? Take the [free 10-minute diagnostics](/diagnostics/).

## Key ideas in one place

- **Charging:** cell p.d. V₀ = V_R + V_C at every instant. Current starts at V₀/R and decays. V_C and Q rise from zero.
- **Discharging:** the capacitor is the source. Q, V_C and I all decay, and I flows the opposite way to the charging current.
- **Time constant:** τ = CR, measured in seconds.
- **Exponential decay:** the rate of change is proportional to the amount remaining, so equal time intervals give equal ratios.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--06-rc-charge-discharge-curves.webp" width="900" height="1130" alt="Against time in units of RC, charging makes Q and the capacitor p.d. rise towards their final values (63 percent at one RC) while the current and resistor p.d. fall from their maximum. V_R + V_C always equals V0. Discharging makes Q, V and I all fall with the same exponential shape (37 percent at one RC)." loading="lazy">
  <figcaption>Charge and p.d. rise or fall, but the current always decays exponentially.</figcaption>
</figure>


## Formulas

| Situation | Equation | Notes |
|---|---|---|
| Time constant | τ = CR | C in farads, R in ohms |
| Discharge, any of Q, V, I | x = x₀ e^(−t/CR) | x₀ is the value at t = 0 |
| Charge or p.d. while charging | x = x₀(1 − e^(−t/CR)) | x₀ is the final value (Q₀ = CV₀) |
| Current while charging | I = I₀ e^(−t/CR) | I₀ = V₀/R, always decays |
| Time to reach x | t = CR ln(x₀/x) | for decay |
| Half-time | t½ = CR ln 2 = 0.693 CR | same anywhere on the curve |
| Straight-line form | ln x = ln x₀ − t/CR | gradient −1/CR |
| Rate model | ΔQ/Δt = −Q/CR | step: ΔQ = −(Q/CR) Δt |

## Fractions at multiples of CR

| Time | Left (discharge) | Reached (charge) |
|---|---|---|
| 1 CR | 36.8% | 63.2% |
| 2 CR | 13.5% | 86.5% |
| 3 CR | 5.0% | 95.0% |
| 5 CR | 0.67% | 99.3% |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--07-time-constant-tau.webp" width="900" height="930" alt="A discharge curve plotted against multiples of the time constant falls to 36.8, 13.5 and 5.0 percent at 1, 2 and 3 tau. The tangent at t = 0 meets the time axis at t = RC. For 470 microfarad and 33 kilohm tau is 15.5 s, and 37 percent is still left after one tau." loading="lazy">
  <figcaption>After one time constant a capacitor has not fully discharged: 37% remains.</figcaption>
</figure>


## 6.1.3(a) Circuit behaviour and the practical

**Graph shapes (describe them in words).**
- Discharge, Q or V or I against t: a curve from a maximum at t = 0, falling ever more gently towards zero.
- Charge, Q or V_C against t: a curve from zero, rising ever more gently towards a final value.
- Charge, I or V_R against t: the same shape as a discharge curve.

**Investigation (practical activity group 9).**
1. Series circuit: capacitor, resistor, supply, two-way switch. Voltmeter across the capacitor.
2. Charge fully, switch over, start timing.
3. Record V (or I) at regular intervals with meters and a stopwatch, or let a data-logger sample automatically.
4. Plot ln V against t. Gradient = −1/CR.

| | Meters | Data-logger |
|---|---|---|
| Timing | Reaction time in each reading | Logger clock |
| Sample rate | Slow | Fast, many points |
| Best for | Slow decays (large CR) | Any CR, including short ones |

Reduce error: voltmeter resistance far larger than R, electrolytic capacitor the right way round, repeats averaged, full discharge between runs, large CR for hand timing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--01-charge-flow-in-circuit.webp" width="900" height="1140" alt="Two circuits show a capacitor charging from a cell and discharging through a resistor. Teal arrows show electron flow round the circuit and gold arrows the conventional current, opposite in direction. No electrons cross the gap: charge is moved from one plate to the other by the circuit. The p.d. rises to the cell p.d. while charging and falls to zero while discharging." loading="lazy">
  <figcaption>Electrons move round the circuit, never across the gap, and the current reverses on discharge.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--03-series-parallel-capacitors.webp" width="900" height="1100" alt="The same two capacitors, 10 and 15 microfarad, are connected across 15 V. In series each holds 90 microcoulombs and the p.d.s (9.0 V and 6.0 V) add, giving 6.0 microfarad. In parallel each has 15 V and the charges (150 and 225 microcoulombs) add, giving 25 microfarad." loading="lazy">
  <figcaption>Series: same charge, p.d.s add, smaller C. Parallel: same p.d., charges add, larger C.</figcaption>
</figure>


## 6.1.3(b) and (c) Method boxes

**Method: discharge value at a given time.**
1. Convert units and find τ = CR.
2. Find x₀ (for V and Q: Q₀ = CV₀; for I: I₀ = V₀/R).
3. Substitute into x = x₀ e^(−t/τ).

**Method: time to reach a value.**
1. Write x/x₀ as a fraction.
2. t = τ ln(x₀/x).
3. Check the sign: t must be positive for a decay.

**Method: charging values.**
1. Find V_C = V₀(1 − e^(−t/τ)) or Q = CV₀(1 − e^(−t/τ)).
2. Find V_R = V₀ − V_C.
3. Find I = V_R/R. Check against I₀ e^(−t/τ).

**Worked reminder.** A 47 µF capacitor and 82 kΩ resistor are connected to a 5.0 V supply, with the capacitor uncharged. τ = 47 × 10⁻⁶ × 82 × 10³ = 3.854 s. After 5.0 s: V_C = 5.0(1 − e^(−1.297)) = 5.0 × 0.7268 = 3.63 V, so V_R = 1.37 V and I = 1.37/82 000 = 1.7 × 10⁻⁵ A.

**Worked reminder (ln graph).** A graph of ln V against t has gradient −0.056 s⁻¹ and passes through ln V = 1.79 at t = 0. CR = 1/0.056 = 17.9 s. V₀ = e^1.79 = 6.0 V.

## 6.1.3(c) ln graphs: what to remember

- The line is straight for any exponential decay, so a straight ln x graph confirms the model.
- Gradient = −1/CR, intercept on the ln x axis = ln x₀.
- Base 10 logs: gradient = −0.434/CR.
- For charging, plot ln of a decaying quantity (I, V_R, or V₀ − V_C).
- Use a large gradient triangle on the best-fit line.

## 6.1.3(d) Modelling steps

1. Pick Δt much smaller than CR.
2. ΔQ = −(Q/CR) Δt.
3. Q_new = Q_old + ΔQ.
4. Copy down a spreadsheet column, plot Q against t.

The model always lies slightly below the exact curve because it uses the rate at the start of each step. A smaller Δt reduces the gap. Each step multiplies Q by (1 − Δt/CR).

**Worked reminder.** CR = 10 s, Q₀ = 5.0 mC, Δt = 2.0 s. Factor 0.80 per step: 5.0, 4.0, 3.2, 2.56, 2.05 mC at 0, 2, 4, 6, 8 s. The exact value at 8 s is 5.0 e^(−0.8) = 2.25 mC.

Graphically, the tangent at t = 0 meets the t-axis at t = CR.

## 6.1.3(e) Exponential decay and constant ratio

| Feature | Exponential decay | Linear decrease |
|---|---|---|
| Equal time intervals | Same ratio | Same amount subtracted |
| Reaches zero? | Never | Yes, at a finite time |
| Gradient | Proportional to the value | Constant |
| ln graph | Straight line | Curve |

The time for the value to halve is the same wherever you start. After n half-times the fraction left is (1/2)ⁿ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--08-half-time-constant-ratio.webp" width="900" height="930" alt="An exponential decay halves in every equal time step T1/2 = 0.693 RC, wherever you start. For RC = 47 s, T1/2 is about 33 s. A straight-line fall loses a constant amount; a decay loses a constant fraction." loading="lazy">
  <figcaption>Each half-time halves the quantity, which is the constant-ratio property of exponential decay.</figcaption>
</figure>


## Must-know distinctions

- **Q, V_C against I, V_R when charging:** the first pair rises, the second pair falls.
- **x₀ when discharging against x₀ when charging:** start value against final value.
- **CR against t½:** t½ = 0.693 CR.
- **Gradient of ln x against CR:** gradient = −1/CR, not CR.
- **ΔQ negative:** charge on the capacitor falls, so the model has a minus sign.

## Quick self-test

1. State the unit of CR in terms of a single SI unit.
2. Find τ for 2.2 µF and 4.7 MΩ.
3. What percentage of the initial charge is left after 2 CR when discharging?
4. A 100 µF capacitor charged to 10 V discharges through 22 kΩ. Find the p.d. after 3.0 s.
5. A capacitor charges from a 6.0 V cell with τ = 4.0 s. Find V_C after 6.0 s.
6. A ln I against t graph has gradient −0.080 s⁻¹. Find CR.
7. Find the half-time for CR = 20 s.
8. A 12 V supply is connected through 4.7 kΩ to an uncharged capacitor. Find the initial current.
9. A discharge current starts at 3.0 mA. Find the current after one time constant.
10. A p.d. falls from 12 V to 8.0 V in 5.0 s. Predict the p.d. after another 5.0 s.
11. In a spreadsheet model with CR = 10 s, Q₀ = 5.0 mC and Δt = 2.0 s, find Q after the first step.
12. Why does a ln V against t graph for a discharge give a straight line?

### Answers

1. The second (s), since CR = Q/I.
2. τ = 2.2 × 10⁻⁶ × 4.7 × 10⁶ = 10.3 s.
3. e⁻² = 0.135, so 13.5%.
4. τ = 2.2 s. V = 10 e^(−3.0/2.2) = 2.56 V.
5. V_C = 6.0(1 − e^(−1.5)) = 4.66 V.
6. CR = 1/0.080 = 12.5 s.
7. t½ = 0.693 × 20 = 13.9 s.
8. I₀ = 12 / 4700 = 2.55 mA.
9. I = 3.0 e⁻¹ = 1.10 mA.
10. Ratio 2/3, so 8.0 × 2/3 = 5.33 V.
11. ΔQ = −(5.0/10) × 2.0 = −1.0 mC, so Q = 4.0 mC.
12. Taking logs of V = V₀ e^(−t/CR) gives ln V = ln V₀ − t/CR, which has the form y = mx + c.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--02-energy-stored-vq-graph.webp" width="900" height="1010" alt="A straight V-Q graph from the origin has gradient 1/C. A thin strip is the work V delta Q and the triangle under the line is the energy stored, 1/2 QV = 1/2 CV^2 = Q^2/2C. For 470 microfarad at 12 V the energy is 33.8 mJ. OCR only: charging from a 12 V battery takes QV = 67.7 mJ, half stored and half lost as heat." loading="lazy">
  <figcaption>The energy stored is the area under the V-Q graph, half of QV.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--09-ln-graph-find-rc.webp" width="900" height="1230" alt="Potential difference readings for a discharging capacitor lie on a curve. Plotting ln V against t gives a straight line of gradient minus 0.0500 per second, so RC = 20.0 s. With R = 100 kilohm, C = 200 microfarad. For charging, plot ln(V0 - V) instead." loading="lazy">
  <figcaption>A ln V against t graph is a straight line whose gradient is minus 1/RC.</figcaption>
</figure>


## Where marks are usually lost

- Leaving C in µF or R in kΩ when evaluating CR.
- Using the charging equation for the current.
- Reading the gradient of a ln graph as CR instead of −1/gradient.
- Writing the gradient as positive.
- Taking a gradient from two data points off the best-fit line.
- Saying the capacitor is "fully discharged" after one time constant.
- Forgetting that x₀ is the final value in the charging equation.
- Describing a decay graph as reaching zero, or a curve as "linear then flat".
- In an explanation of a data-logger's advantage, writing "more accurate" without saying it removes reaction-time error or gives more readings.
- In a model, forgetting that a larger step gives a larger error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--04-dielectric-polar-molecules.webp" width="900" height="1090" alt="Polar molecules between capacitor plates point randomly with no field. When the plates are charged they line up, leaving layers of negative ends facing the positive plate and positive ends facing the negative plate. These layers reduce the net field, so the p.d. is smaller for the same charge and C = Q/V rises. For the lesson example, 916 pF with the dielectric against 398 pF in air." loading="lazy">
  <figcaption>Aligned polar molecules reduce the field, so the same charge gives a smaller p.d. and a larger capacitance.</figcaption>
</figure>


## Official syllabus

This page is aligned to the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), first assessment 2017, published by OCR, section 6.1.3.
