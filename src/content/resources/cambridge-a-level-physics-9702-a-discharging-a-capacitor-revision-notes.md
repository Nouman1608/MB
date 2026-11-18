---
title: "Cambridge A Level Physics (9702): Discharging a capacitor -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-discharging-a-capacitor"
description: "Revision notes for Cambridge A Level Physics 9702 19.3 Discharging a capacitor: decay graphs, τ = RC, x = x₀e^(−t/RC), finding τ, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 19.3 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers graphs of p.d., charge and current against time for a capacitor discharging through a resistor, the time constant τ = RC, and equations of the form x = x₀e^(−t/RC). These notes are condensed for recall. For full explanations and worked examples, read the [Discharging a capacitor study guide](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor/); to apply the ideas, try the [Discharging a capacitor practice questions](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-practice/).

## Why it is exponential, in one chain

1. Capacitor and resistor share the same p.d.: V = Q/C.
2. Current through the resistor: I = V/R = Q/(RC).
3. Current is the rate of loss of charge, so the rate of loss ∝ charge remaining.
4. Rate of decrease ∝ amount left → exponential decay.
5. V and I are both ∝ Q, so all three decay with the same time constant.

## The equations

```
τ = RC                      (Ω × F = s)
Q = Q₀e^(−t/RC)   V = V₀e^(−t/RC)   I = I₀e^(−t/RC),  I₀ = V₀/R
t = RC ln(x₀/x)             (time to fall from x₀ to x)
t½ = RC ln 2 = 0.693RC      (half-life)
ln x = ln x₀ − t/RC         (straight line, gradient −1/RC)
W = W₀e^(−2t/RC)            (stored energy falls with time constant RC/2)
```

## Fractions to remember

| t | x / x₀ |
|---|---|
| 0.693τ | 0.50 |
| τ | 0.37 |
| 2τ | 0.14 |
| 3τ | 0.050 |
| 5τ | < 0.01 |

## Reading the graphs

| Feature | Meaning |
|---|---|
| Starting value | V₀, Q₀ = CV₀ or I₀ = V₀/R |
| Value 0.37 × start | occurs at t = τ |
| Equal time steps, equal ratios | proof of exponential decay |
| Gradient of Q–t | current (magnitude) |
| Tangent to Q–t (or V–t, I–t) at t = 0 | meets time axis at t = τ |
| Area under I–t | charge that has flowed; total area = Q₀ |
| Negative current on the graph | discharge current flows opposite to charging current |

## Two calculations in full

**Value after a time.** 220 μF, 22 kΩ, V₀ = 10 V: τ = 4.84 s; after 2.0 s, V = 10e^(−2.0/4.84) = 6.6 V.

**Time to reach a value.** Same circuit, to 1.0 V: t = 4.84 × ln(10/1.0) = 4.84 × 2.30 = 11 s.

**From a half-life.** 16 V falls to 2.0 V in 9.0 s: three halvings, so t½ = 3.0 s and τ = 3.0/0.693 = 4.3 s.

## Ways to find τ

- Calculate RC from component values.
- Read the 37% time from a curve.
- Read the half-life and divide by ln 2.
- Gradient of ln V (or ln Q, ln I) against t is −1/RC.
- Tangent at t = 0 (least precise).

## Effect of changes

| Change | τ | Discharge |
|---|---|---|
| Larger R | larger | slower (smaller current) |
| Larger C | larger | slower (more charge to remove) |
| Second equal resistor in parallel | halved | faster |
| Second equal capacitor in parallel | doubled | slower |
| Larger starting p.d. | unchanged | same τ, larger values throughout |

## Key terms

| Term | Meaning |
|---|---|
| Discharge | Charge flowing off the plates through an external resistor, reducing Q, V and I |
| Time constant τ | RC; time for Q, V or I to fall to 1/e (≈ 0.37) of its initial value |
| Exponential decay | Decrease at a rate proportional to the amount remaining; equal fractional falls in equal times |
| Half-life (of discharge) | Time to fall to half; 0.693RC |
| Initial current I₀ | V₀/R at the moment discharge begins |

## Exam traps

- Saying τ is the time for the capacitor to discharge completely.
- Using RC as the half-life.
- Treating V, Q and I as having different time constants.
- Forgetting to convert kΩ, MΩ, μF and nF.
- Writing t = RC ln(x/x₀), which gives a negative time.
- Taking the gradient of a ln V–t graph as RC instead of −1/RC.
- Assuming the decay is linear and using "average current = half the initial current" to find a time.

## Self-test

1. Explain in terms of p.d. why the discharge current decreases with time.
2. Show that the unit of RC is the second.
3. State the fraction of the initial charge left after one time constant.
4. A 100 μF capacitor discharges through 47 kΩ. Calculate τ.
5. For the circuit in Question 4, starting at 9.0 V, calculate the initial current.
6. Calculate the p.d. after 10 s for the same circuit.
7. How long does it take the p.d. to fall from 9.0 V to 1.0 V?
8. A discharge has a half-life of 2.1 s. Calculate τ.
9. A graph of ln I against t has gradient −0.40 s⁻¹. Find τ.
10. The capacitance in a circuit is doubled and the resistance halved. What happens to τ?
11. What does the area under the whole I–t discharge curve represent?
12. After what time has the stored energy fallen to 37% of its initial value?

**Answers:** 1. As charge leaves, the p.d. across the capacitor (and so across the resistor) falls, and I = V/R falls with it. 2. Ω × F = (V A⁻¹)(C V⁻¹) = C A⁻¹ = (A s) A⁻¹ = s. 3. 1/e ≈ 0.37. 4. 47 × 10³ × 100 × 10⁻⁶ = 4.7 s. 5. 9.0 / 47 000 = 1.9 × 10⁻⁴ A. 6. 9.0e^(−10/4.7) = 9.0 × 0.119 = 1.1 V. 7. t = 4.7 ln 9 = 10.3 s. 8. 2.1 / 0.693 = 3.0 s. 9. 1/0.40 = 2.5 s. 10. Unchanged. 11. The initial charge Q₀ (all the charge that flows off the capacitor). 12. τ/2, because energy ∝ V² and decays as e^(−2t/RC).

## Related resources

- [Capacitance revision notes](/resources/a-physics-capacitance-revision-notes/) — the whole of Topic 19
- [Discharging a capacitor practice questions](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-practice/)
- [Energy stored in a capacitor revision notes](/resources/cambridge-a-level-physics-9702-a-energy-stored-in-a-capacitor-revision-notes/)
- [Rectification and smoothing revision notes](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-revision-notes/) — discharge between peaks sets the ripple
