---
title: "OCR A Level Physics A: Charging, discharging and exponential decay in RC circuits (H556)"
seoTitle: "OCR A Level Physics RC Circuits Study Guide"
resourceType: "study-guides"
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
description: "Study guide to charging and discharging a capacitor through a resistor, time constant CR, ln graphs and spreadsheet models, for OCR A Level Physics (H556)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers section 6.1.3, Charging and discharging capacitors, of the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. It teaches statements 6.1.3(a) to 6.1.3(e) with worked examples. The definition of capacitance, capacitor combinations and stored energy belong to sections 6.1.1 and 6.1.2 and are not repeated here.

Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and [checklist](/checklists/ocr/a-level/physics/). Companion pages: [revision notes](/resources/ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-revision-notes/) and [practice questions](/resources/ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-practice/). Related: [resistance and power](/resources/ocr-a-level-physics-resistance-resistivity-and-electrical-power/) and [practical skills](/resources/ocr-a-level-physics-practical-endorsement-skills-apparatus-and-techniques/). To find weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Statement | What you must be able to do |
|---|---|
| 6.1.3(a)(i) | Describe charging and discharging of a capacitor through a resistor |
| 6.1.3(a)(ii) | Describe techniques and procedures to investigate charge and discharge with meters and with data-loggers (practical activity group 9) |
| 6.1.3(b) | Define and use the time constant of a capacitor-resistor circuit, τ = CR |
| 6.1.3(c) | Use x = x₀ e^(−t/CR) and x = x₀(1 − e^(−t/CR)); use ln x against t graphs to find CR |
| 6.1.3(d) | Model ΔQ/Δt = −Q/CR for a discharging capacitor by a graphical method and by a spreadsheet |
| 6.1.3(e) | Recognise an exponential decay graph and its constant-ratio property |

Maths skills: logarithms (M2.5), log plots (M3.10, M3.11), e^(±x) sketches (M3.12), rate-of-change models (M3.9).

## 6.1.3(a)(i) What happens in the circuit

Take a capacitor C in series with a resistor R, a cell and a two-way switch.

**Charging.** With the switch closed on the cell, electrons flow on to one plate and off the other. At first the capacitor is uncharged, its p.d. is zero, so the whole cell p.d. V₀ is across R and the current is at its largest, I₀ = V₀/R. As charge builds, the capacitor p.d. V_C = Q/C rises and opposes the cell. The p.d. across R falls, so the current falls.

At any instant, V₀ = V_R + V_C. Use this in every charging question.

**Discharging.** Move the switch so the charged capacitor is across R alone. The initial current is V₀/R. As charge leaves, V_C and the current fall, and the current flows opposite to the charging current.

| Quantity | Discharging | Charging |
|---|---|---|
| Charge Q on capacitor, p.d. V_C across it | Falls from Q₀, V₀ towards zero | Rises from zero towards Q₀ = CV₀, V₀ |
| Current I, p.d. V_R across the resistor | Falls from V₀/R, V₀ towards zero | Falls from V₀/R, V₀ towards zero |

## 6.1.3(b) The time constant

The **time constant** of a capacitor-resistor circuit is τ = CR. It has the unit second, because C = Q/V and R = V/I give CR = Q/I, and charge divided by current is time.

A large CR means slow charging and discharging. After one τ a discharging quantity has dropped to 1/e, roughly 37%, of where it started. For a charging capacitor it is the time for Q or V_C to reach about 63% of its final value.

**Worked example 1.** Find τ for C = 470 µF and R = 33 kΩ.

τ = CR = 470 × 10⁻⁶ × 33 × 10³ = 15.51 s, so **τ = 15.5 s**.

Convert µF and kΩ to F and Ω before multiplying.

## 6.1.3(c) The equations

For a **discharging** capacitor, the charge, p.d. across the capacitor and the current all obey

x = x₀ e^(−t/CR)

where x₀ is the value at t = 0. So Q = Q₀ e^(−t/CR), V = V₀ e^(−t/CR) and I = I₀ e^(−t/CR), with I₀ = V₀/R.

For a **charging** capacitor, the charge and the p.d. across the capacitor obey

x = x₀(1 − e^(−t/CR))

where x₀ is now the **final** value: Q₀ = CV₀ and V₀ is the cell p.d. The current and the p.d. across the resistor still decay, with I = I₀ e^(−t/CR).

Fractions worth knowing (each is the fraction remaining when discharging, or the fraction reached when charging):

| Time | Remaining when discharging | Reached when charging |
|---|---|---|
| 1 CR | 36.8% | 63.2% |
| 2 CR | 13.5% | 86.5% |
| 3 CR | 5.0% | 95.0% |

**Worked example 2 (discharge).** A 680 µF capacitor charged to 12 V discharges through 56 kΩ. Find (a) the initial charge and current, (b) the p.d. after 60 s, (c) the time for the p.d. to fall to 3.0 V.

(a) Q₀ = CV₀ = 680 × 10⁻⁶ × 12 = 8.16 × 10⁻³ C. I₀ = V₀/R = 12 / 56 000 = 2.14 × 10⁻⁴ A.

(b) τ = 680 × 10⁻⁶ × 56 × 10³ = 38.08 s. V = 12 e^(−60/38.08) = 12 × 0.2069 = **2.5 V**.

(c) 3.0 = 12 e^(−t/τ), so e^(−t/τ) = 1/4 and t = τ ln 4 = 38.08 × 1.386 = **52.8 s**.

To find a time, take natural logs: t = τ ln(x₀/x).

**Worked example 3 (charge).** A 150 µF capacitor, initially uncharged, charges through 18 kΩ from a 9.0 V cell. Find, after 4.0 s, the charge, the p.d. across the capacitor, and the current.

τ = 150 × 10⁻⁶ × 18 × 10³ = 2.7 s, so 1 − e^(−4.0/2.7) = 0.7726.

Q = CV₀ × 0.7726 = 1.35 × 10⁻³ × 0.7726 = **1.04 × 10⁻³ C**.
V_C = 9.0 × 0.7726 = **6.95 V**.
V_R = 9.0 − 6.95 = 2.05 V, so I = 2.05 / 18 000 = **1.14 × 10⁻⁴ A**, compared with an initial current of 5.0 × 10⁻⁴ A.

## 6.1.3(c) ln x–t graphs

Take natural logs of the discharge equation:

ln x = ln x₀ − t/CR

This has the form y = mx + c. A graph of ln x (y-axis) against t (x-axis) is a **straight line** with gradient −1/CR and intercept ln x₀. A straight line shows the decay is exponential. The gradient gives CR, so C follows if R is known.

**Worked example 4.** A capacitor discharges through R = 100 kΩ. The p.d. readings are:

| t / s | 0 | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|
| V / V | 10 | 6.1 | 3.7 | 2.2 | 1.4 | 0.82 |
| ln(V / V) | 2.30 | 1.81 | 1.31 | 0.79 | 0.34 | −0.20 |

Gradient using the end points = (−0.198 − 2.303) / (50 − 0) = −0.0500 s⁻¹.

CR = 1 / 0.0500 = 20.0 s, so C = 20.0 / 100 000 = **2.0 × 10⁻⁴ F** (200 µF).

Points to remember:
- Use a large triangle on the best-fit line.
- The gradient is negative. Quoting CR = −20 s is wrong.
- Write ln(V / V) so the logarithm acts on a pure number. The gradient then has unit s⁻¹.
- With logarithms to base 10 the gradient is −0.434/CR, because lg e = 0.434. Check which log is plotted.
- For charging, V_C does not give a straight ln graph. Plot ln of the current, or of V_R, or of (V₀ − V_C), against t.

## 6.1.3(a)(ii) Investigating charge and discharge

Practical activity group 9 uses digital instruments to measure current, p.d., resistance and time, and finds the time constant from the gradient of a ln V or ln I against time graph.

**With meters.**
1. Connect the capacitor, a resistor, a power supply and a switch in series. Connect a digital voltmeter across the capacitor. A micro-ammeter in series reads the current.
2. Charge the capacitor, switch to discharge and start a stopwatch.
3. Read the meter at regular intervals, for example every 10 s.
4. Plot ln V against t and find the gradient.

**With a data-logger.** A voltage sensor across the capacitor feeds a data-logger, which samples at a set interval and plots V against t on screen.

| | Meter and stopwatch | Data-logger |
|---|---|---|
| Timing | Reaction time adds uncertainty | Time recorded by the logger |
| Readings | Few, widely spaced | Many, closely spaced |

**Reducing error.** A voltmeter across the capacitor adds a second discharge path. Use a meter with resistance far larger than R, or the measured CR is too small. Use a CR of tens of seconds for hand timing. Capacitor tolerance is often large, so compare measured and marked values. Connect an electrolytic capacitor the right way round. Repeat, average, and discharge fully between runs.

## 6.1.3(d) Modelling ΔQ/Δt = −Q/CR

The current is the rate of loss of charge, I = −ΔQ/Δt. With V = IR and V = Q/C, Q/C = −R ΔQ/Δt, giving

ΔQ/Δt = −Q/CR

Charge leaves at a rate proportional to the charge present, which is why the curve is exponential.

**Method (a spreadsheet does exactly this).**
1. Choose a small time step Δt and the starting Q.
2. Calculate ΔQ = −(Q/CR) × Δt.
3. New Q = old Q + ΔQ. New t = old t + Δt.
4. Repeat down the column and plot Q against t.

**Worked example 5.** C = 250 µF, R = 20 kΩ, V₀ = 8.0 V, Δt = 1.0 s.

CR = 5.0 s and Q₀ = 250 × 10⁻⁶ × 8.0 = 2.0 mC. Each step multiplies Q by (1 − Δt/CR) = 0.80.

| t / s | Model Q / mC | Exact Q / mC |
|---|---|---|
| 0 | 2.000 | 2.000 |
| 1 | 1.600 | 1.637 |
| 2 | 1.280 | 1.341 |
| 3 | 1.024 | 1.098 |
| 4 | 0.819 | 0.899 |
| 5 | 0.655 | 0.736 |

At 5 s the model is 11% too low. It keeps the rate at its start-of-step value, but the rate falls during the step, so it removes too much charge. With Δt = 0.5 s the factor is 0.90 per step, and after ten steps Q = 0.697 mC, only 5.2% too low. **A smaller time step gives a closer match.**

**Graphical method.** On a Q–t graph, ΔQ/Δt is the gradient, equal to −Q/CR at every point. At t = 0 the tangent has gradient −Q₀/CR and meets the t-axis at t = CR, which reads the time constant from the graph.

## 6.1.3(e) Exponential decay and the constant ratio

A decay graph falls steeply at first, then flattens towards the t-axis without touching it.

**Constant-ratio property.** Over any equal time interval, the quantity is multiplied by the same factor. If x falls from x₁ to x₂ in time T, then it falls from x₂ to x₂ × (x₂/x₁) in the next time T. A straight line falls by a constant amount instead, which tells the two apart.

The half-time is a special case: x = x₀/2 gives t½ = CR ln 2 = 0.693 CR, wherever on the curve you start.

**Worked example 6.** A capacitor p.d. falls from 9.0 V to 6.0 V in 14 s. Find the p.d. after a further 14 s, and CR.

Ratio = 6.0 / 9.0 = 2/3. After 28 s the p.d. is 6.0 × 2/3 = **4.0 V**.

From e^(−14/CR) = 2/3: CR = 14 / ln 1.5 = **34.5 s**.

## Common errors

- Forgetting that x₀ means the final value when charging, but the initial value when discharging.
- Using the charging equation for the current, which always decays.
- Leaving C in µF or R in kΩ inside CR.
- Calling τ the time to discharge fully: 37% is left after one time constant.
- Quoting the ln V against t gradient as CR instead of −1/gradient.

## Next steps

Try the [practice questions](/resources/ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-practice/), then condense with the [revision notes](/resources/ocr-a-level-physics-charging-discharging-and-exponential-decay-in-rc-revision-notes/). Recheck the [checklist](/checklists/ocr/a-level/physics/).

## Official syllabus

This page is aligned to the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), first assessment 2017, published by OCR, section 6.1.3.
