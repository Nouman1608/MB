---
title: "Cambridge A Level Physics (9702): Capacitors and capacitance"
resourceType: "study-guides"
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
description: "Cambridge A Level Physics 9702 subtopic 19.1: capacitance of spheres and parallel plates, C = Q/V, and series and parallel formulae derived."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **19.1 Capacitors and capacitance** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Capacitance study guide](/resources/a-physics-capacitance/) introduces all of Topic 19, including energy storage and discharge; this page stays with 19.1: what capacitance means for an isolated sphere and for a pair of plates, why the series and parallel formulae take the form they do, and how to work through capacitor networks step by step. For quick recall use the [Capacitors and capacitance revision notes](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance-revision-notes/), and for exam-style questions the [Capacitors and capacitance practice questions](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance-practice/).

## What 19.1 asks you to do

Candidates should be able to:

- **define capacitance**, as applied to both **isolated spherical conductors** and to **parallel plate capacitors**
- **recall and use C = Q/V**
- **derive**, using C = Q/V, formulae for the combined capacitance of capacitors **in series and in parallel**
- **use** the capacitance formulae for capacitors in series and in parallel

The series and parallel formulae appear on the Paper 4 data sheet, but the derivations must be learned, and C = Q/V must be recalled.

## Defining capacitance

> Capacitance is the **charge stored per unit potential**, C = Q/V. Its unit is the **farad** (F), equal to one coulomb per volt.

What Q and V mean depends on the conductor.

**Parallel plate capacitor.** Two conducting plates separated by an insulator. When connected to a supply, one plate gains charge +Q and the other −Q. Here:

- Q is the magnitude of the charge on **one** plate (the total charge on the capacitor is zero)
- V is the **potential difference between the plates**

**Isolated spherical conductor.** A single sphere, far from other objects. Here:

- Q is the charge on the sphere
- V is the **potential of the sphere**, measured relative to zero at infinity (in practice, relative to earth)

### Capacitance of an isolated sphere

From 18.5, the potential at the surface of a sphere of radius R carrying charge Q is V = Q/(4πε₀R). So:

```
C = Q / V = Q / (Q/(4πε₀R)) = 4πε₀R
```

The capacitance depends only on the radius: a bigger sphere can store more charge at the same potential. The numbers show how small the farad is for everyday objects:

| Sphere | Radius | C = 4πε₀R |
|---|---|---|
| Small metal ball | 0.10 m | 1.1 × 10⁻¹¹ F (11 pF) |
| Large dome | 0.25 m | 2.8 × 10⁻¹¹ F (28 pF) |
| The Earth | 6.4 × 10⁶ m | 7.1 × 10⁻⁴ F |

Practical capacitors therefore use the microfarad (μF, 10⁻⁶ F), nanofarad (nF, 10⁻⁹ F) and picofarad (pF, 10⁻¹² F).

## Deriving the parallel formula

Capacitors in parallel share the **same p.d.** V, because each is connected directly across the same two points. The total charge drawn from the supply is the sum of the charges on each:

```
Q = Q₁ + Q₂ + Q₃
C V = C₁V + C₂V + C₃V
C = C₁ + C₂ + C₃
```

Adding a capacitor in parallel always **increases** the total capacitance: at the same p.d., the extra capacitor stores extra charge.

## Deriving the series formula

Capacitors in series all carry the **same charge** Q. The supply moves charge +Q onto the first plate and removes it from the last. Each inner pair of connected plates is an isolated conductor with zero net charge, so if one plate gains −Q the plate joined to it must gain +Q. The p.d.s add up to the supply p.d.:

```
V = V₁ + V₂ + V₃
Q/C = Q/C₁ + Q/C₂ + Q/C₃
1/C = 1/C₁ + 1/C₂ + 1/C₃
```

The combined capacitance in series is always **smaller than the smallest** individual capacitance.

**Two-capacitor shortcut:** for two in series, C = C₁C₂/(C₁ + C₂). For n identical capacitors C₀ in series, C = C₀/n; in parallel, C = nC₀.

These rules are the **reverse** of the rules for resistors, a point examiners like to test.

## Working through a network

1. Reduce parallel groups to single values by adding.
2. Combine the resulting series chain with the reciprocal rule.
3. Find the total charge from Q = CV with the supply p.d.
4. Work back: series parts share that charge; find each p.d. from V = Q/C.
5. Parallel parts share a p.d.; find each charge from Q = CV.

## Worked example 1: a mixed network

A 4.0 μF capacitor is in series with a parallel pair of 2.0 μF and 6.0 μF. The network is connected to a 12 V supply. Find the charge and p.d. for each capacitor.

```
parallel pair: 2.0 + 6.0 = 8.0 μF
in series with 4.0 μF: C = (4.0 × 8.0)/(4.0 + 8.0) = 2.67 μF
total charge: Q = CV = 2.67 × 10⁻⁶ × 12 = 32 μC

4.0 μF: Q = 32 μC, V = 32 μC / 4.0 μF = 8.0 V
parallel pair: V = 12 − 8.0 = 4.0 V
2.0 μF: Q = 2.0 × 4.0 = 8.0 μC
6.0 μF: Q = 6.0 × 4.0 = 24 μC
```

*Annotation.* Check: the parallel charges add to 8.0 + 24 = 32 μC, the same as the charge on the series capacitor. Working in μF and μC throughout keeps the numbers simple, as long as the units are stated.

## Worked example 2: an isolated sphere

A metal sphere of radius 0.10 m is charged to a potential of 50 kV. Calculate its capacitance and the charge on it.

```
C = 4πε₀R = 4π × 8.85 × 10⁻¹² × 0.10 = 1.1 × 10⁻¹¹ F
Q = CV = 1.1 × 10⁻¹¹ × 5.0 × 10⁴ = 5.6 × 10⁻⁷ C
```

*Annotation.* The definition C = Q/V for a sphere uses the potential of the sphere itself. A 50 kV potential is needed to store only half a microcoulomb, which is why parallel plate capacitors, with their closely spaced opposite charges, are used to store charge in circuits.

## Worked example 3: connecting a charged capacitor to an uncharged one

A 10 μF capacitor is charged to 12 V and then disconnected from the supply. It is connected in parallel with an uncharged 20 μF capacitor. Find the final common p.d.

```
charge available: Q = CV = 10 × 12 = 120 μC (conserved)
combined capacitance in parallel: 10 + 20 = 30 μF
final p.d.: V = Q/C = 120 / 30 = 4.0 V
charges: 10 μF has 40 μC; 20 μF has 80 μC
```

*Annotation.* Charge is conserved because the pair is isolated from any supply. Charge flows until both capacitors have the same p.d.

## Common mistakes

- **Combining capacitors like resistors**: series and parallel rules are swapped.
- **Saying the total charge on a capacitor is 2Q.** The plates carry +Q and −Q; "charge stored" means Q.
- **Using the p.d. across one capacitor as the supply p.d.** in series problems.
- **Assuming capacitors in series share the p.d. equally.** The smallest capacitor has the largest p.d.
- **Prefix errors**: μ = 10⁻⁶, n = 10⁻⁹, p = 10⁻¹².
- **Forgetting to invert** after adding reciprocals.

## Exam technique for the command words

- **Define** (capacitance): charge per unit potential (difference); for a parallel plate capacitor, V is the p.d. between the plates; for an isolated sphere, V is its potential.
- **Show that** (C = 4πε₀R): start from V = Q/(4πε₀R) and substitute into C = Q/V.
- **Derive** (series or parallel): state what is common (Q in series; V in parallel), write what adds, and divide through.
- **Calculate** (a network): show each reduction step, then work back to individual charges and p.d.s, and check that charges and p.d.s are consistent.
- **Explain** (equal charges in series): the connected inner plates form an isolated conductor with zero net charge.

## Related resources

- [Capacitance study guide](/resources/a-physics-capacitance/) — the whole of Topic 19
- [Capacitors and capacitance revision notes](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance-revision-notes/)
- [Capacitors and capacitance practice questions](/resources/cambridge-a-level-physics-9702-a-capacitors-and-capacitance-practice/)
- [Electric potential study guide](/resources/cambridge-a-level-physics-9702-a-electric-potential/) — the potential of a charged sphere

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
