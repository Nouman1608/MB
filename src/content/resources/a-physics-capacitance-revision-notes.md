---
title: "A Level Physics: Capacitance — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 19.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-capacitors-and-capacitance"
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-energy-stored-in-a-capacitor"
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-discharging-a-capacitor"
description: "Condensed recall notes on capacitance, capacitors in series and parallel, energy stored and discharge curves for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Capacitance study guide](/resources/a-physics-capacitance/).

Assessed on **Paper 4** (A Level structured, 2 hours, 100 marks, 38.5% of the A Level).

## Definitions and equations

```
capacitance        C = Q / V          farads (F)

energy stored      W = 1/2 Q V
                     = 1/2 C V^2
                     = 1/2 Q^2 / C
```

**Capacitance** is the charge stored per unit potential difference. A capacitor stores **charge separation** and energy in the electric field between its plates.

## Combining capacitors — the reverse of resistors

```
PARALLEL:   C_total = C1 + C2 + C3          (capacitances ADD)
SERIES:     1/C_total = 1/C1 + 1/C2 + ...   (reciprocals add)
```

This is the **opposite** of the resistor rules, and swapping them is the most common error in the topic. In parallel the effective plate area increases, so capacitance increases.

## Why energy is ½QV, not QV

As charge accumulates, the p.d. rises from zero. The work done to move each successive charge increases linearly, so the total is the **area under the Q–V graph** — a triangle, hence ½QV.

That "area under the graph" reasoning is worth quoting when asked to explain the factor of ½.

## Discharge through a resistor

```
Q = Q0 e^(-t / RC)
V = V0 e^(-t / RC)
I = I0 e^(-t / RC)
```

All three decay exponentially with the **same** time constant.

**Time constant τ = RC** (seconds). After time τ the quantity falls to **1/e ≈ 37%** of its initial value.

```
after 1 tau   -> 37%
after 2 tau   -> 13.5%
after 3 tau   -> 5%
after 5 tau   -> essentially fully discharged
```

**Half-life:** t½ = RC ln 2 ≈ 0.69 RC.

To find RC graphically, plot **ln Q against t**: the gradient is −1/RC.

## Charging

Charge and p.d. rise as `Q = Q₀(1 − e^(−t/RC))`, while current **decays** exponentially from its initial maximum V₀/R.

## Exam traps

- Series and parallel formulae are the reverse of the resistor ones.
- Energy is ½QV — not QV.
- τ = RC has units of seconds; check R in ohms and C in farads (not μF).
- Convert μF to F: 1 μF = 10⁻⁶ F.
- During charging, **current decays** while charge grows.
- The time constant is independent of the initial charge.

## Self-test

1. Define capacitance and give its unit.
2. Two 6 μF capacitors in series — find the total capacitance. And in parallel?
3. Why is the energy stored ½QV rather than QV?
4. What fraction remains after one time constant?
5. A 100 μF capacitor discharges through 10 kΩ. Find τ.

**Answers:** 1. The charge stored per unit potential difference, C = Q/V, measured in farads. 2. Series: 1/C = 1/6 + 1/6 → **3 μF**. Parallel: **12 μF**. 3. The p.d. rises from zero as charge accumulates, so the work done per unit charge increases linearly; the total energy is the area under the Q–V graph, which is a triangle. 4. 1/e, about 37%. 5. τ = RC = 10 000 × 100 × 10⁻⁶ = **1.0 s**.
