---
title: "AS Physics: Electricity — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Electricity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 9.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-electric-current"
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-potential-difference-and-power"
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-resistance-and-resistivity"
description: "Condensed recall notes on current, potential difference, resistance, resistivity and I-V characteristics for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Electricity study guide](/resources/as-physics-electricity/).

## Definitions and equations

```
current            I = Q / t          (rate of flow of charge)
                   I = n A v q        (n = charge carrier density,
                                       v = drift velocity)
potential diff.    V = W / Q          (work done per unit charge)
e.m.f.             E = W / Q          (energy converted per unit charge
                                       FROM other forms TO electrical)
resistance         R = V / I
resistivity        R = rho L / A     (rho = resistivity, in Ohm m)
power              P = VI = I^2 R = V^2 / R
energy             W = VIt
```

**e.m.f. vs p.d.** — e.m.f. is energy *supplied to* the circuit per coulomb; p.d. is energy *transferred from* the circuit per coulomb. The distinction is examined directly, and a source's e.m.f. only equals the p.d. across its terminals when no current flows or when the source has no internal resistance — otherwise some energy per coulomb is lost inside the source itself. See the [Electricity study guide](/resources/as-physics-electricity/) for the full syllabus coverage and worked reasoning behind every equation and table above.

## Ohm's law and its limits

> The current through a conductor is proportional to the potential difference **provided physical conditions, especially temperature, remain constant.** This single sentence is the entire statement examiners expect verbatim in meaning, not just in spirit.

The temperature condition is part of the statement — omitting it loses the mark, since every I-V characteristic that curves away from a straight line does so because temperature (or, for a diode, the internal conduction mechanism) is not staying constant.

## I–V characteristics

| Component | Graph shape | Why |
|---|---|---|
| **Metallic conductor** at constant T | Straight line through origin | Obeys Ohm's law |
| **Filament lamp** | Curve flattening as V rises | Temperature rises → lattice ions vibrate more → more collisions → **R increases**, so the gradient falls as V rises |
| **Semiconductor diode** | Zero until ~0.6 V, then steep rise | Conducts in forward bias only, with negligible current in reverse bias |
| **Thermistor (NTC)** | Curve, R falls as T rises | More charge carriers released |
| **LDR** | Curve, R falls as light intensity rises | More charge carriers released by light energy |

## Resistivity

```
R = rho L / A
```

Resistance depends on the object's dimensions; **resistivity is a property of the material** and is independent of shape. Doubling the length doubles R; doubling the diameter **quarters** R (area ∝ d²).

```
Worked example: a wire of resistivity 1.7 x 10^-8 Ohm m, length 2.0 m
and cross-sectional area 5.0 x 10^-7 m2.
R = rho L / A = (1.7 x 10^-8 x 2.0) / (5.0 x 10^-7) = 0.068 Ohm
```

A longer, thinner wire always has a higher resistance than a shorter, thicker one of the same material, since R is directly proportional to length and inversely proportional to area.

## Charge carriers

```
I = n A v q
```

For a given current, a **thinner** wire (smaller A) means a **higher drift velocity** — the standard exam application. Metals have very large n, so drift velocity is tiny (millimetres per second) despite the near-instant effect — the electric field that starts the current flowing propagates through the conductor far faster than any individual electron actually moves.

## Exam traps

- Stating Ohm's law without the constant-temperature condition.
- Confusing e.m.f. with p.d.
- Saying a filament lamp "does not obey Ohm's law because it is a lamp" — the reason is the **temperature rise increasing resistance**.
- Forgetting A ∝ d² when a diameter is doubled.
- Using diameter instead of radius in A = πr², or forgetting to halve a given diameter before squaring it.
- Resistivity has units **Ω m**, not Ω/m.
- Confusing an LDR with a thermistor — an LDR's resistance responds to **light intensity**, a thermistor's to **temperature**; both fall as the relevant quantity rises, but the trigger is different.
- Forgetting to convert a cross-sectional area given as a diameter in mm into m² before substituting into R = ρL/A.

## Self-test

1. Define potential difference.
2. Explain the shape of the I–V graph for a filament lamp.
3. A wire's diameter is doubled. What happens to its resistance?
4. State Ohm's law in full.
5. A current is constant. What happens to drift velocity if the wire narrows?
6. A wire of resistivity 2.8 × 10⁻⁸ Ω m, length 1.5 m and cross-sectional area 2.0 × 10⁻⁷ m² is connected in a circuit. Calculate its resistance.
7. State how the resistance of an LDR changes as light intensity increases, and why.

**Answers:** 1. The work done (energy transferred) per unit charge as charge passes between two points, V = W/Q. 2. As current increases, the filament's temperature rises; lattice ions vibrate with greater amplitude, so electrons collide more frequently; resistance increases and the graph curves away from the straight line. 3. Area is proportional to d², so quadrupling the area **quarters** the resistance. 4. Current is directly proportional to potential difference provided physical conditions, particularly temperature, remain constant. 5. It increases — from I = nAvq, if I and n are fixed and A falls, v must rise. 6. R = ρL/A = (2.8 × 10⁻⁸ × 1.5) ÷ (2.0 × 10⁻⁷) = **0.21 Ω**. 7. It falls — more light energy releases more charge carriers, increasing the number density n available to carry current.
