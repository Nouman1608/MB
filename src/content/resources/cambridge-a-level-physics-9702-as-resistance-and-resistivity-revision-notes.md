---
title: "Cambridge A Level Physics (9702): Resistance and resistivity -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Electricity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 9.3
syllabusTopics:
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-resistance-and-resistivity"
description: "Revision notes for Cambridge AS Physics 9702 9.3: defining resistance, Ohm's law, I–V characteristics, R = ρL/A, LDRs and thermistors, and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 9.3 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers the definition of resistance, Ohm's law, the I–V characteristics of a metal at constant temperature, a filament lamp and a diode, resistivity, and the behaviour of LDRs and thermistors. These notes are condensed for recall. The [Resistance and resistivity study guide](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity/) gives worked examples and the experimental method; the [Resistance and resistivity practice questions](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity-practice/) test them.

## Resistance

```
R = V / I        1 Ω = 1 V A⁻¹
```

- **Definition:** resistance is the ratio of the p.d. across a component to the current in it.
- From an I–V graph: R = V ÷ I **at the point**, never 1 ÷ (gradient of the tangent) for a curve.
- V = IR applies to all components at any instant.

## Ohm's law

> For a metallic conductor at constant temperature, the current is directly proportional to the potential difference across it.

- Obeying Ohm's law means R is constant as V changes.
- A filament lamp does **not** obey Ohm's law, but its resistance is still V/I.

## The three I–V characteristics (I vertical, V horizontal)

| Component | Shape | Resistance behaviour |
|---|---|---|
| Metal at constant temperature | Straight line through origin, both quadrants | Constant |
| Filament lamp | Curve through origin, flattening as the size of V increases, symmetrical | Increases as current increases |
| Semiconductor diode | Near-zero current in reverse; tiny forward current until a threshold (about 0.5–0.7 V for silicon), then steep rise | Very high in reverse; low in forward bias above threshold |

**Filament lamp explanation chain:** current ↑ → temperature ↑ → lattice ions vibrate more → more frequent electron–ion collisions → resistance ↑.

## Resistivity

```
R = ρL / A      ρ = RA / L      unit of ρ: Ω m
A = πr² = πd²/4 for a round wire
```

- ρ depends on the material (and its temperature), not on its dimensions.
- R ∝ L and R ∝ 1/A.
- Uncertainty in d counts twice in A (A ∝ d²).

**Scaling table (same material):**

| Change | Effect on R |
|---|---|
| Length × 2 | × 2 |
| Diameter × 2 | ÷ 4 |
| Length × 2 and diameter × 2 | ÷ 2 |
| Stretched to length × k, volume constant | × k² |
| Cut in half (each piece) | ÷ 2 |

## Resistivity experiment summary

- Micrometer: diameter at several points, two perpendicular directions; mean; check zero error.
- Metre rule: lengths L.
- Ammeter in series, voltmeter across the length; R = V/I.
- Small current to avoid heating.
- Plot R against L: gradient = ρ/A, so ρ = gradient × A. A non-zero intercept shows contact resistance, which the gradient method ignores.

## LDR and thermistor

| Component | Increase in | Resistance |
|---|---|---|
| LDR | Light intensity | Decreases |
| Thermistor (NTC) | Temperature | Decreases (non-linearly) |
| Metal wire | Temperature | Increases |

Reason for LDR and thermistor: more charge carriers are released, so n increases.

## Key terms

| Term | Meaning |
|---|---|
| Resistance | p.d. ÷ current |
| Ohm | 1 V A⁻¹ |
| Ohmic conductor | Obeys Ohm's law: I ∝ V at constant temperature |
| Resistivity | ρ = RA/L, a property of the material |
| Forward bias | Diode connected so that it conducts |
| Reverse bias | Diode connected so that it blocks current |
| NTC thermistor | Resistance decreases as temperature increases |

## Exam traps

- Taking 1/gradient of a tangent as the resistance.
- Writing "the lamp does not obey V = IR".
- Omitting "constant temperature" from Ohm's law.
- Drawing the filament curve bending towards the I axis.
- Drawing a diode curve that is symmetrical.
- Not squaring the radius, or using diameter as radius.
- Saying resistivity changes when a wire is stretched.
- Explaining the lamp by "the wire gets hot so it resists more" without the collisions step.

## Self-test

1. Define resistance.
2. State Ohm's law.
3. Show that the unit of resistivity is Ω m.
4. A lamp carries 0.25 A at 2.0 V and 0.60 A at 12 V. Find its resistance at each.
5. Why does the lamp's resistance increase?
6. Describe the I–V graph of a diode in reverse bias.
7. A wire is replaced by one of the same material with twice the length and twice the diameter. How does the resistance change?
8. A 3.0 Ω wire is stretched to twice its length at constant volume. New resistance?
9. Why should the current be kept small when measuring resistivity?
10. What does the gradient of a graph of R against L represent?
11. State how the resistance of an NTC thermistor changes as it is heated.
12. Calculate ρ for a wire with R = 5.0 Ω, L = 2.0 m and A = 2.0 × 10⁻⁷ m².

**Answers:** 1. The ratio of the p.d. across a component to the current in it. 2. For a metallic conductor at constant temperature, current is directly proportional to p.d. 3. ρ = RA/L, so units are Ω × m² ÷ m = Ω m. 4. 8.0 Ω and 20 Ω. 5. Larger current raises the filament's temperature, so the ions vibrate more and the electrons collide with them more often. 6. Practically zero current for all reverse p.d.s shown (a line along the V axis). 7. R ∝ L/d², so 2 ÷ 4 = half: the resistance halves. 8. Length × 2 and area ÷ 2, so R × 4 = 12 Ω. 9. A large current would heat the wire, changing its resistivity. 10. ρ/A. 11. It decreases. 12. ρ = RA/L = 5.0 × 2.0 × 10⁻⁷ ÷ 2.0 = 5.0 × 10⁻⁷ Ω m.

## Related resources

- [Electricity revision notes](/resources/as-physics-electricity-revision-notes/) — the whole of Topic 9
- [Potential difference and power revision notes](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power-revision-notes/) — subtopic 9.2
- [Resistance and resistivity practice questions](/resources/cambridge-a-level-physics-9702-as-resistance-and-resistivity-practice/)
