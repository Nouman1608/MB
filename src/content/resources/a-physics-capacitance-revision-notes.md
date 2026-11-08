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
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--02-energy-stored-vq-graph.webp" width="900" height="1010" alt="A straight V-Q graph from the origin has gradient 1/C. A thin strip is the work V delta Q and the triangle under the line is the energy stored, 1/2 QV = 1/2 CV^2 = Q^2/2C. For 470 microfarad at 12 V the energy is 33.8 mJ. OCR only: charging from a 12 V battery takes QV = 67.7 mJ, half stored and half lost as heat." loading="lazy">
  <figcaption>The energy stored is the area under the V-Q graph, half of QV.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--07-time-constant-tau.webp" width="900" height="930" alt="A discharge curve plotted against multiples of the time constant falls to 36.8, 13.5 and 5.0 percent at 1, 2 and 3 tau. The tangent at t = 0 meets the time axis at t = RC. For 470 microfarad and 33 kilohm tau is 15.5 s, and 37 percent is still left after one tau." loading="lazy">
  <figcaption>After one time constant a capacitor has not fully discharged: 37% remains.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--08-half-time-constant-ratio.webp" width="900" height="930" alt="An exponential decay halves in every equal time step T1/2 = 0.693 RC, wherever you start. For RC = 47 s, T1/2 is about 33 s. A straight-line fall loses a constant amount; a decay loses a constant fraction." loading="lazy">
  <figcaption>Each half-time halves the quantity, which is the constant-ratio property of exponential decay.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--09-ln-graph-find-rc.webp" width="900" height="1230" alt="Potential difference readings for a discharging capacitor lie on a curve. Plotting ln V against t gives a straight line of gradient minus 0.0500 per second, so RC = 20.0 s. With R = 100 kilohm, C = 200 microfarad. For charging, plot ln(V0 - V) instead." loading="lazy">
  <figcaption>A ln V against t graph is a straight line whose gradient is minus 1/RC.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--01-charge-flow-in-circuit.webp" width="900" height="1140" alt="Two circuits show a capacitor charging from a cell and discharging through a resistor. Teal arrows show electron flow round the circuit and gold arrows the conventional current, opposite in direction. No electrons cross the gap: charge is moved from one plate to the other by the circuit. The p.d. rises to the cell p.d. while charging and falls to zero while discharging." loading="lazy">
  <figcaption>Electrons move round the circuit, never across the gap, and the current reverses on discharge.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--03-series-parallel-capacitors.webp" width="900" height="1100" alt="The same two capacitors, 10 and 15 microfarad, are connected across 15 V. In series each holds 90 microcoulombs and the p.d.s (9.0 V and 6.0 V) add, giving 6.0 microfarad. In parallel each has 15 V and the charges (150 and 225 microcoulombs) add, giving 25 microfarad." loading="lazy">
  <figcaption>Series: same charge, p.d.s add, smaller C. Parallel: same p.d., charges add, larger C.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--04-dielectric-polar-molecules.webp" width="900" height="1090" alt="Polar molecules between capacitor plates point randomly with no field. When the plates are charged they line up, leaving layers of negative ends facing the positive plate and positive ends facing the negative plate. These layers reduce the net field, so the p.d. is smaller for the same charge and C = Q/V rises. For the lesson example, 916 pF with the dielectric against 398 pF in air." loading="lazy">
  <figcaption>Aligned polar molecules reduce the field, so the same charge gives a smaller p.d. and a larger capacitance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--05-isolated-sphere-capacitance.webp" width="900" height="980" alt="Two isolated spheres with radii 0.10 m and 0.20 m are shown at the same potential, 1000 V. C = 4 pi epsilon0 r depends only on the radius, so the larger sphere has capacitance 22.2 pF against 11.1 pF and holds twice the charge, 22.2 nC against 11.1 nC." loading="lazy">
  <figcaption>The capacitance of an isolated sphere is proportional to its radius.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-capacitance--06-rc-charge-discharge-curves.webp" width="900" height="1130" alt="Against time in units of RC, charging makes Q and the capacitor p.d. rise towards their final values (63 percent at one RC) while the current and resistor p.d. fall from their maximum. V_R + V_C always equals V0. Discharging makes Q, V and I all fall with the same exponential shape (37 percent at one RC)." loading="lazy">
  <figcaption>Charge and p.d. rise or fall, but the current always decays exponentially.</figcaption>
</figure>

## Frequently asked questions

**What is the time constant of a capacitor circuit?**
The time constant is τ = RC, measured in seconds with R in ohms and C in farads. After one time constant, the charge, p.d. and current during discharge have fallen to 1/e, about 37%, of their initial values.

**What is the half-life of a capacitor discharge?**
The half-life, the time for the charge to fall to half its initial value, is t½ = RC ln 2, which is about 0.69 RC.

**How can you check a series or parallel capacitor answer?**
A series combination must always be smaller than the smallest individual capacitor, and a parallel combination must always be larger than the largest. If your answer breaks this rule, you have probably swapped the formulas.

**Which Cambridge 9702 paper assesses capacitance?**
Capacitance is A Level content assessed on Paper 4, the A Level structured paper of Cambridge 9702 Physics.
