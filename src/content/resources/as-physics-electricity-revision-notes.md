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
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--06-two-source-kirchhoff.webp" width="900" height="1100" alt="Two branches (12 V with 3.0 ohm, 8.0 V with 2.0 ohm) share a 2.0 ohm resistor. The junction law and two loop equations give I1 = 2.0 A, I2 = 1.0 A and 3.0 A through the shared resistor, with 6.0 V across it. Power from sources (32 W) equals power in the resistors (12 + 2 + 18 W)." loading="lazy">
  <figcaption>Solving a two-source circuit with Kirchhoff laws and checking energy.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--07-internal-resistance.webp" width="900" height="1290" alt="A real cell is an e.m.f. E in series with internal resistance r. With E = 12.0 V, r = 0.50 ohm and R = 5.5 ohm, I = 2.0 A, the terminal p.d. is 11.0 V and 1.0 V is lost across r. A V-I graph of a cell is a straight line with gradient -r and intercept E: data give E = 1.50 V and r = 0.60 ohm, short-circuit current 2.5 A." loading="lazy">
  <figcaption>Where the e.m.f. goes: terminal p.d. plus lost volts, and how a V–I graph gives E and r.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--02-iv-characteristics.webp" width="900" height="1115" alt="Four I-V graphs: a fixed resistor is a straight line through the origin; a filament lamp curves flat as it heats, with lesson data giving 10 ohm at 1.0 V and 25 ohm at 10 V; a diode conducts only above about 0.7 V forward; an NTC thermistor curve steepens as it heats." loading="lazy">
  <figcaption>Four I–V shapes side by side, with R = V/I read at a point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--09-sensing-dividers.webp" width="900" height="1210" alt="With an NTC thermistor and a 2.2 kohm resistor on 9.0 V, the output across the fixed resistor rises from 4.95 V at 20 C to 7.07 V at 60 C while the output across the thermistor falls from 4.05 V to 1.93 V. With an LDR in series with 10 kohm on 6.0 V, the 10 kohm resistor has 5.45 V in bright light and 0.29 V in the dark." loading="lazy">
  <figcaption>Which component the output is across decides whether it rises or falls.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--03-resistivity-wire.webp" width="900" height="1255" alt="Three wires drawn to scale show that doubling the length doubles R (11.9 to 23.9 ohm) and doubling the diameter quarters it (2.98 ohm). A graph of R against L for a 0.32 mm wire has gradient 13.7 ohm per metre, so resistivity equals gradient times area, 1.1 x 10^-6 ohm metre." loading="lazy">
  <figcaption>How length and diameter change resistance, and how a graph gives resistivity.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--01-drift-velocity.webp" width="900" height="1260" alt="A wire carries free electrons that drift slowly against the conventional current. In time t the carriers in a slab of length vt cross a plane, so I = nAvq. For a 13 A copper cable the drift speed is 3.8 x 10^-4 m/s, and halving the diameter makes the drift speed four times larger for the same current." loading="lazy">
  <figcaption>Why a current of many amperes needs only a tiny drift speed: I = nAvq.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-electricity--04-resistance-temperature.webp" width="900" height="1275" alt="In a metal, heating makes the ions vibrate more so electrons collide more and resistance rises. In an NTC thermistor or an LDR, heat or light frees many more carriers so resistance falls. The graph shows a metal rising gently and an NTC thermistor falling from 2.4 kohm at 25 C to 0.50 kohm at 65 C." loading="lazy">
  <figcaption>Collisions versus carrier number: why metals and NTC thermistors behave oppositely.</figcaption>
</figure>

## Frequently asked questions

**What is the difference between e.m.f. and potential difference?**
E.m.f. is the energy converted from other forms to electrical energy per unit charge by a source. Potential difference is the energy transferred from electrical to other forms per unit charge between two points, V = W/Q.

**What is Ohm's law?**
The current through a conductor is directly proportional to the potential difference across it, provided physical conditions, especially temperature, remain constant. Omitting the temperature condition loses the mark.

**Why does a filament lamp's I-V graph curve?**
As current increases the filament gets hotter, so the lattice ions vibrate more and electrons collide with them more often. Resistance increases, so the graph's gradient falls.

**What happens to resistance when a wire's diameter doubles?**
Area is proportional to the diameter squared, so doubling the diameter quadruples the area and quarters the resistance, from R = ρL/A.
