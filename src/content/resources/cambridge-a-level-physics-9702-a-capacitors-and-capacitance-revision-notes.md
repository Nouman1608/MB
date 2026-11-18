---
title: "Cambridge A Level Physics (9702): Capacitors and capacitance -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-capacitors-and-capacitance"
description: "Revision notes on 19.1 for Cambridge A Level Physics 9702: C = Q/V, isolated spheres, series and parallel derivations, networks and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 19.1 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers the definition of capacitance for isolated spherical conductors and parallel plate capacitors, C = Q/V, and the derivation and use of the series and parallel formulae. These notes are condensed for recall. For full explanations and worked examples, read the [Capacitors and capacitance study guide](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance/); to apply the ideas, try the [Capacitors and capacitance practice questions](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance-practice/).

## Definition

```
C = Q / V        unit: farad, F = C V⁻¹
```

| Conductor | Q means | V means |
|---|---|---|
| Parallel plate capacitor | Charge on one plate (plates carry +Q and −Q) | p.d. between the plates |
| Isolated sphere | Charge on the sphere | Potential of the sphere (zero at infinity/earth) |

**Base units:** F = A² s⁴ kg⁻¹ m⁻².

## Isolated sphere

```
V = Q/(4πε₀R)   →   C = 4πε₀R
```

| R | C |
|---|---|
| 0.10 m | 11 pF |
| 0.25 m | 28 pF |
| Earth, 6.4 × 10⁶ m | 7.1 × 10⁻⁴ F |

Capacitance ∝ radius. Two spheres joined by a long wire reach the same potential, so they share charge in the ratio of their radii.

## Prefixes

| Prefix | Factor |
|---|---|
| m (milli) | 10⁻³ |
| μ (micro) | 10⁻⁶ |
| n (nano) | 10⁻⁹ |
| p (pico) | 10⁻¹² |

## Combinations

| | Parallel | Series |
|---|---|---|
| Same for each | p.d. V | Charge Q |
| Adds up | Charge: Q = Q₁ + Q₂ + … | p.d.: V = V₁ + V₂ + … |
| Formula | C = C₁ + C₂ + … | 1/C = 1/C₁ + 1/C₂ + … |
| Total compared with parts | Larger than the largest | Smaller than the smallest |
| Resistor rule that looks like it | Resistors in series | Resistors in parallel |

**Derivations in two lines each:**

- Parallel: Q = Q₁ + Q₂ → CV = C₁V + C₂V → C = C₁ + C₂.
- Series: V = V₁ + V₂ → Q/C = Q/C₁ + Q/C₂ → 1/C = 1/C₁ + 1/C₂.

**Why series capacitors have equal charge:** each pair of joined inner plates is isolated with zero net charge, so −Q on one plate means +Q on the next.

**Shortcuts:** two in series: C₁C₂/(C₁ + C₂). n identical: C₀/n in series, nC₀ in parallel.

## Network routine

1. Add parallel groups.
2. Combine the series chain with reciprocals; **invert** at the end.
3. Q_total = C_total × V_supply.
4. Series parts: same Q; V = Q/C (smallest C takes largest V).
5. Parallel parts: same V; Q = CV.
6. Check: p.d.s add to the supply; charges in parallel add to the series charge.

## Series p.d.s are not shared equally

2.0 μF and 6.0 μF in series on a 12 V supply:

```
C = (2.0 × 6.0)/(2.0 + 6.0) = 1.5 μF
Q = 1.5 μF × 12 V = 18 μC on each capacitor
V across 2.0 μF = 18/2.0 = 9.0 V
V across 6.0 μF = 18/6.0 = 3.0 V
```

The p.d.s are in the inverse ratio of the capacitances, and they add to 12 V.

## Charge sharing

Charged capacitor (C₁, V₀) connected across an uncharged one (C₂), with no supply:

```
charge conserved:  C₁V₀ = (C₁ + C₂)V
final common p.d.: V = C₁V₀/(C₁ + C₂)
```

## Key terms

| Term | Meaning |
|---|---|
| Capacitance | Charge stored per unit potential (difference), C = Q/V |
| Farad | One coulomb per volt |
| Capacitor | Two conductors separated by an insulator, storing equal and opposite charges |
| Isolated spherical conductor | A charged sphere far from other conductors; C = 4πε₀R |
| Dielectric | The insulating material between the plates of a capacitor |

## Exam traps

- Series and parallel rules swapped (resistor confusion).
- "Total charge = 2Q" for a capacitor.
- Equal p.d.s assumed in series.
- Reciprocals added but not inverted.
- μ, n and p mixed up.
- For a sphere, using a p.d. between plates instead of the sphere's potential.

## Self-test

1. Define capacitance.
2. A capacitor stores 3.3 mC at 15 V. Find C.
3. Show that C = 4πε₀R for an isolated sphere.
4. Find the capacitance of a sphere of radius 0.25 m.
5. Express the farad in SI base units.
6. Find the combined capacitance of 2.0 μF and 3.0 μF in series and in parallel.
7. Why do capacitors in series carry the same charge?
8. Three 6.0 μF capacitors are in series. Find the total.
9. 4.0 μF is in series with (2.0 μF ∥ 10 μF) on 12 V. Find the total capacitance and total charge.
10. In Question 9, find the p.d. across the 4.0 μF capacitor.
11. A 50 μF capacitor at 20 V is connected to an uncharged 30 μF capacitor. Find the final p.d.
12. Which capacitor in a series chain has the largest p.d. across it?

**Answers:** 1. Charge stored per unit potential (difference): C = Q/V. 2. 3.3 × 10⁻³ ÷ 15 = 2.2 × 10⁻⁴ F (220 μF). 3. V = Q/(4πε₀R), so C = Q/V = 4πε₀R. 4. 4π × 8.85 × 10⁻¹² × 0.25 = 2.8 × 10⁻¹¹ F. 5. A² s⁴ kg⁻¹ m⁻². 6. Series: 6.0/5.0 = 1.2 μF; parallel: 5.0 μF. 7. The joined inner plates form an isolated conductor with zero net charge, so equal and opposite charges are induced on them. 8. 2.0 μF. 9. Parallel 12 μF; series with 4.0 μF gives (4.0 × 12)/16 = 3.0 μF; Q = 3.0 × 12 = 36 μC. 10. 36 ÷ 4.0 = 9.0 V. 11. 1000 μC ÷ 80 μF = 12.5 V. 12. The one with the smallest capacitance.

## Related resources

- [Capacitance revision notes](/resources/a-physics-capacitance-revision-notes/) — the whole of Topic 19
- [Electric potential revision notes](/resources/cambridge-a-level-physics-9702-a-electric-potential-revision-notes/)
- [Capacitors and capacitance practice questions](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance-practice/)
