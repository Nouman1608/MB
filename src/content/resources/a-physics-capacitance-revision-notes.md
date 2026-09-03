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

**Capacitance** is the charge stored per unit potential difference. A capacitor stores **charge separation** and energy in the electric field between its plates. One farad is a large unit for practical circuits, so capacitance values are usually quoted in microfarads (μF, ×10⁻⁶), nanofarads (nF, ×10⁻⁹) or picofarads (pF, ×10⁻¹²) — always convert to farads before substituting into an equation.

## Combining capacitors — the reverse of resistors

```
PARALLEL:   C_total = C1 + C2 + C3          (capacitances ADD)
SERIES:     1/C_total = 1/C1 + 1/C2 + ...   (reciprocals add)
```

This is the **opposite** of the resistor rules, and swapping them is the most common error in the topic. In parallel the effective plate area increases, so capacitance increases.

**Worked example.** Two capacitors, 4 μF and 12 μF, are connected first
in series and then in parallel. Find the combined capacitance each way.

```
SERIES:    1/C = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3
           C = 3 uF   (always LESS than the smallest individual value)

PARALLEL:  C = 4 + 12 = 16 uF   (always MORE than the largest individual value)
```

A quick sanity check for any series/parallel calculation: the series
total must always come out **smaller** than the smallest capacitor in
the combination, and the parallel total must always come out **larger**
than the largest — if your answer doesn't satisfy that, the formulas
have likely been swapped.

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

To find RC graphically, plot **ln Q against t**: since ln Q = ln Q₀ − t/RC, this gives a straight line with gradient **−1/RC**, letting you find the time constant from experimental discharge data without needing to identify a specific point where the charge has fallen to exactly 37%.

**Worked example.** A 100 μF capacitor is charged to 20 V. Find the
energy stored.

```
W = 1/2 C V^2 = 0.5 x 100x10^-6 x 20^2 = 0.5 x 100x10^-6 x 400 = 0.02 J
```

## Charging

Charge and p.d. rise as `Q = Q₀(1 − e^(−t/RC))`, while current **decays** exponentially from its initial maximum V₀/R.

## Exam traps

- Series and parallel formulae are the reverse of the resistor ones.
- Energy is ½QV — not QV.
- τ = RC has units of seconds; check R in ohms and C in farads (not μF).
- Convert μF to F: 1 μF = 10⁻⁶ F.
- During charging, **current decays** while charge grows.
- The time constant is independent of the initial charge.
- Forgetting that a series combination must come out **smaller** than the smallest individual capacitor, and a parallel combination **larger** than the largest — a quick check that catches a swapped formula immediately.
- Leaving capacitance in μF when substituting into τ = RC or W = ½CV² — both equations require **farads**, so convert first.

## Self-test

1. Define capacitance and give its unit.
2. Two 6 μF capacitors in series — find the total capacitance. And in parallel?
3. Why is the energy stored ½QV rather than QV?
4. What fraction remains after one time constant?
5. A 100 μF capacitor discharges through 10 kΩ. Find τ.
6. Two capacitors, 4 μF and 12 μF, are connected in series. Find the combined capacitance, and explain why your answer must be less than 4 μF.
7. A 100 μF capacitor is charged to 20 V. Find the energy stored.

**Answers:** 1. The charge stored per unit potential difference, C = Q/V, measured in farads. 2. Series: 1/C = 1/6 + 1/6 → **3 μF**. Parallel: **12 μF**. 3. The p.d. rises from zero as charge accumulates, so the work done per unit charge increases linearly; the total energy is the area under the Q–V graph, which is a triangle. 4. 1/e, about 37%. 5. τ = RC = 10 000 × 100 × 10⁻⁶ = **1.0 s**. 6. 1/C = 1/4 + 1/12 = 1/3, so C = **3 μF**; a series combination must be smaller than the smallest individual capacitance, because the same charge sits on each capacitor but the potential differences add, making the overall C = Q/V smaller. 7. W = ½CV² = 0.5 × 100×10⁻⁶ × 20² = **0.02 J**.

For the full derivation of each formula and further worked examples, see
the [Capacitance study guide](/resources/a-physics-capacitance/); for
exam-style practice questions with complete worked answers, see the
[Capacitance practice questions](/resources/a-physics-capacitance-practice/).
