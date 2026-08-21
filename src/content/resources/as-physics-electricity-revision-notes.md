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
resistivity        R = rho L / A
power              P = VI = I^2 R = V^2 / R
energy             W = VIt
```

**e.m.f. vs p.d.** — e.m.f. is energy *supplied to* the circuit per coulomb; p.d. is energy *transferred from* the circuit per coulomb. The distinction is examined directly.

## Ohm's law and its limits

> The current through a conductor is proportional to the potential difference **provided physical conditions, especially temperature, remain constant.**

The temperature condition is part of the statement — omitting it loses the mark.

## I–V characteristics

| Component | Graph shape | Why |
|---|---|---|
| **Metallic conductor** at constant T | Straight line through origin | Obeys Ohm's law |
| **Filament lamp** | Curve flattening as V rises | Temperature rises → lattice ions vibrate more → more collisions → **R increases** |
| **Semiconductor diode** | Zero until ~0.6 V, then steep rise | Conducts in forward bias only |
| **Thermistor (NTC)** | Curve, R falls as T rises | More charge carriers released |

## Resistivity

```
R = rho L / A
```

Resistance depends on the object's dimensions; **resistivity is a property of the material** and is independent of shape. Doubling the length doubles R; doubling the diameter **quarters** R (area ∝ d²).

## Charge carriers

```
I = n A v q
```

For a given current, a **thinner** wire (smaller A) means a **higher drift velocity** — the standard exam application. Metals have very large n, so drift velocity is tiny (millimetres per second) despite the near-instant effect.

## Exam traps

- Stating Ohm's law without the constant-temperature condition.
- Confusing e.m.f. with p.d.
- Saying a filament lamp "does not obey Ohm's law because it is a lamp" — the reason is the **temperature rise increasing resistance**.
- Forgetting A ∝ d² when a diameter is doubled.
- Using diameter instead of radius in A = πr².
- Resistivity has units **Ω m**, not Ω/m.

## Self-test

1. Define potential difference.
2. Explain the shape of the I–V graph for a filament lamp.
3. A wire's diameter is doubled. What happens to its resistance?
4. State Ohm's law in full.
5. A current is constant. What happens to drift velocity if the wire narrows?

**Answers:** 1. The work done (energy transferred) per unit charge as charge passes between two points, V = W/Q. 2. As current increases, the filament's temperature rises; lattice ions vibrate with greater amplitude, so electrons collide more frequently; resistance increases and the graph curves away from the straight line. 3. Area is proportional to d², so quadrupling the area **quarters** the resistance. 4. Current is directly proportional to potential difference provided physical conditions, particularly temperature, remain constant. 5. It increases — from I = nAvq, if I and n are fixed and A falls, v must rise.
