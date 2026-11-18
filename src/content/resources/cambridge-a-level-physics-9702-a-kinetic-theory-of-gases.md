---
title: "Cambridge A Level Physics (9702): Kinetic theory of gases"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Ideal gases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 15.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-ideal-gases"
    subtopic: "a-kinetic-theory-of-gases"
description: "A focused guide to 15.3 in Cambridge A Level Physics 9702: kinetic theory assumptions, deriving pV = ⅓Nm⟨c²⟩, r.m.s. speed and mean kinetic energy ³⁄₂kT."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **15.3 Kinetic theory of gases** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Ideal Gases study guide](/resources/a-physics-ideal-gases/) introduces all of Topic 15 and sets out the derivation; this page goes further into the reasoning examiners test: which assumption is used at which step of the derivation, a numerical feel for mean-square and root-mean-square speeds, the pressure equation written in terms of density, and how ³⁄₂kT links molecular motion to temperature. For quick recall use the [Kinetic theory of gases revision notes](/resources/cambridge-a-level-physics-9702-a-kinetic-theory-of-gases-revision-notes/), and for exam-style questions the [Kinetic theory of gases practice questions](/resources/cambridge-a-level-physics-9702-a-kinetic-theory-of-gases-practice/).

## What 15.3 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- **state the basic assumptions** of the kinetic theory of gases
- **explain how molecular movement causes the pressure** exerted by a gas and **derive and use pV = ⅓Nm⟨c²⟩**, where ⟨c²⟩ is the mean-square speed (a one-dimensional model extended to three dimensions using ⅓⟨c²⟩ = ⟨cₓ²⟩ is sufficient)
- understand that the **root-mean-square speed** c_r.m.s. is √⟨c²⟩
- **compare pV = ⅓Nm⟨c²⟩ with pV = NkT** to deduce that the **average translational kinetic energy of a molecule is ³⁄₂kT**, and recall and use this expression

The pressure equation appears on the A Level data sheet as p = ⅓(Nm/V)⟨c²⟩. The ³⁄₂kT result must be recalled.

## The assumptions, and what each is for

A list learned without its purpose is easy to garble. Each assumption below is tied to the step of the derivation that needs it.

| Assumption | Where it is used |
|---|---|
| A gas contains a very large number of identical molecules in **random motion** | Averaging: with random motion, every direction is equally likely, so ⟨cₓ²⟩ = ⟨c_y²⟩ = ⟨c_z²⟩ |
| Collisions between molecules and with the walls are **elastic** | Each molecule rebounds from a wall with the same speed, so its momentum change is exactly 2mcₓ, and no kinetic energy is lost |
| The **volume of the molecules is negligible** compared with the volume of the gas | Each molecule travels the full length L of the container between collisions with opposite walls |
| There are **no intermolecular forces** except during collisions | Molecules move in straight lines at constant velocity between collisions; the gas has no molecular potential energy |
| The **time of a collision is negligible** compared with the time between collisions | The time between hits on one wall is simply 2L/cₓ |

A full answer to "state the assumptions" usually needs three or four of these, each worded precisely. "Molecules are small" is not enough; "the volume of the molecules is negligible compared with the volume occupied by the gas" is.

## How molecular movement causes pressure

In words, for an "explain" question:

1. Molecules move randomly and collide with the walls of the container.
2. At each collision a molecule's momentum changes (it rebounds), so the wall exerts a force on it.
3. By Newton's third law, the molecule exerts an equal and opposite force on the wall.
4. A very large number of collisions per second gives an average, steady force on the wall.
5. Pressure is this force divided by the area of the wall.

## The derivation, with the assumptions marked

Consider N molecules, each of mass m, in a cube of side L.

```
one molecule, velocity component cₓ towards wall X:
  momentum change at X     = mcₓ − (−mcₓ) = 2mcₓ          (elastic)
  time between hits on X   = 2L / cₓ                      (negligible size and collision time)
  average force on X       = 2mcₓ ÷ (2L / cₓ) = mcₓ² / L

all N molecules:
  total force              = (m / L)(cₓ₁² + cₓ₂² + ...) = (Nm / L)⟨cₓ²⟩
  pressure p = F / L²      = (Nm / L³)⟨cₓ²⟩ = (Nm / V)⟨cₓ²⟩

three dimensions (random motion):
  ⟨c²⟩ = ⟨cₓ²⟩ + ⟨c_y²⟩ + ⟨c_z²⟩ = 3⟨cₓ²⟩  →  ⟨cₓ²⟩ = ⅓⟨c²⟩

result:   pV = ⅓ Nm⟨c²⟩
```

In an exam derivation, state the momentum change, the time between collisions, the use of force = rate of change of momentum, the sum over N molecules, and the step to three dimensions. Those are the marking points.

## Mean-square and root-mean-square speed

⟨c²⟩ is the **mean of the squares** of the speeds, not the square of the mean speed. A five-molecule example shows the difference.

## Worked example 1: five molecules

Five molecules have speeds 200, 400, 500, 600 and 800 m s⁻¹. Calculate the mean speed, the mean-square speed and the r.m.s. speed.

```
mean speed     = (200 + 400 + 500 + 600 + 800) / 5 = 500 m s⁻¹
squares        = 4.0, 16, 25, 36, 64  (× 10⁴ m² s⁻²)
⟨c²⟩           = 145 × 10⁴ / 5 = 2.9 × 10⁵ m² s⁻²
c_r.m.s.       = √(2.9 × 10⁵) = 539 m s⁻¹
```

*Annotation.* The r.m.s. speed is larger than the mean speed (except when all speeds are equal), because squaring gives extra weight to the faster molecules. ⟨c²⟩ has unit m² s⁻²; c_r.m.s. has unit m s⁻¹.

## The pressure equation in terms of density

Nm is the total mass of gas, so Nm/V is its density ρ:

```
p = ⅓ ρ⟨c²⟩      →      c_r.m.s. = √(3p / ρ)
```

For air at 1.01 × 10⁵ Pa with density 1.2 kg m⁻³: c_r.m.s. = √(3 × 1.01 × 10⁵ ÷ 1.2) = 500 m s⁻¹. This is about one and a half times the speed of sound in air (about 340 m s⁻¹): sound is carried by molecular motion, so the two speeds are of the same order.

## From kinetic theory to temperature

Two equations describe the same gas:

```
pV = ⅓ Nm⟨c²⟩        (kinetic theory)
pV = NkT              (equation of state)
```

Equating them: ⅓Nm⟨c²⟩ = NkT, so m⟨c²⟩ = 3kT. Multiplying by ½:

```
average translational kinetic energy of a molecule:   ½m⟨c²⟩ = ³⁄₂ kT
```

Consequences to be able to explain:

- The mean kinetic energy depends **only on T**. Different gases at the same temperature have the same mean kinetic energy per molecule.
- At the same temperature, **lighter molecules move faster**: c_r.m.s. = √(3kT/m) ∝ 1/√m.
- For one gas, c_r.m.s. ∝ √T: to double the r.m.s. speed, the thermodynamic temperature must be multiplied by 4.
- At absolute zero, the model gives zero translational kinetic energy.

## Worked example 2: helium at room temperature

Calculate the mean translational kinetic energy of a helium atom at 300 K, and its r.m.s. speed. The molar mass of helium is 4.0 g mol⁻¹.

```
E_k = ³⁄₂kT = 1.5 × 1.38 × 10⁻²³ × 300 = 6.21 × 10⁻²¹ J
m = M / N_A = 0.0040 / 6.02 × 10²³ = 6.64 × 10⁻²⁷ kg
c_r.m.s. = √(2E_k / m) = √(2 × 6.21 × 10⁻²¹ / 6.64 × 10⁻²⁷) = 1.37 × 10³ m s⁻¹
```

*Annotation.* An oxygen molecule (32 g mol⁻¹) at the same temperature has the same 6.21 × 10⁻²¹ J but eight times the mass, so its r.m.s. speed is smaller by a factor of √8, about 480 m s⁻¹. For a whole mole, multiply by N_A: ³⁄₂RT = 3.74 × 10³ J at 300 K.

## Common mistakes

- **Vague assumptions**: "molecules are small", "no forces", "collisions are perfect".
- **Momentum change of mcₓ** instead of 2mcₓ.
- **Time between collisions of L/cₓ** instead of 2L/cₓ.
- **Treating ⟨c²⟩ as the square of the mean speed.**
- **Using the molar mass instead of the mass of one molecule** in ½m⟨c²⟩ = ³⁄₂kT.
- **Saying heavier molecules have more kinetic energy** at the same temperature.
- **Celsius temperatures in ³⁄₂kT.**

## Exam technique for the command words

- **State** (assumptions): three or four precise statements from the table above.
- **Explain** (pressure): collisions, change of momentum, force on the wall by Newton's third law, many collisions, force per unit area.
- **Derive** (pV = ⅓Nm⟨c²⟩): set out the marking points in order, including the three-dimensional step.
- **Show that** or **deduce** (³⁄₂kT): equate the two expressions for pV and rearrange, keeping N on both sides until it cancels.
- **Calculate**: use m = M/N_A for one molecule; T in kelvin; c_r.m.s. = √⟨c²⟩.
- **Compare** (two gases at the same temperature): equal mean kinetic energy; r.m.s. speeds in the inverse ratio of the square roots of the molecular masses.

## Related resources

- [Ideal Gases study guide](/resources/a-physics-ideal-gases/) — the whole of Topic 15
- [Kinetic theory of gases revision notes](/resources/cambridge-a-level-physics-9702-a-kinetic-theory-of-gases-revision-notes/)
- [Kinetic theory of gases practice questions](/resources/cambridge-a-level-physics-9702-a-kinetic-theory-of-gases-practice/)
- [Equation of state](/resources/cambridge-a-level-physics-9702-a-equation-of-state/) — pV = NkT, used in the comparison
- [Thermodynamics](/resources/a-physics-thermodynamics/) — internal energy, the next topic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
