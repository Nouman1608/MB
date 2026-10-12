---
title: "OxfordAQA International AS and A-level Physics: Gravitational potential and orbits of planets and satellites (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Gravitational Potential Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Gravitational potential and orbits of planets and satellites"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 116
syllabusTopics:
  - qualification: "a-level"
    topic: "gravitational-fields-and-satellites"
    subtopic: "gravitational-potential-oxfordaqa"
  - qualification: "a-level"
    topic: "gravitational-fields-and-satellites"
    subtopic: "orbits-of-planets-and-satellites-oxfordaqa"
description: "Condensed revision notes on gravitational potential, V = -GM/r, equipotentials, orbit speed and period, satellite energy and geosynchronous orbits."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 3.7.3 (Gravitational potential) and 3.7.4 (Orbits of planets and satellites) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, exams from May/June 2020 onwards. Both sections are marked International A-level only. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-physics-gravitational-potential-and-orbits-of-planets-and/). Test yourself afterwards with the [practice questions](/resources/oxfordaqa-a-level-physics-gravitational-potential-and-orbits-of-planets-and-practice/), find gaps with the [free diagnostics](/diagnostics/), and tick off topics on the [checklist](/checklists/oxfordaqa/a-level/physics/). The [course hub](/boards/oxfordaqa/a-level/physics/) lists the rest of the course.

Data for the reminders, as a question would give them: G = 6.67 × 10⁻¹¹ N m² kg⁻²; the Earth has mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m.

## Definitions

- **Gravitational potential, V**: the work done per unit mass by an external agent in moving a small mass from infinity to the point. Zero at infinity, so negative everywhere else. Unit J kg⁻¹.
- **Gravitational potential difference, ΔV**: the work done per unit mass in moving a mass between two points.
- **Equipotential surface**: a surface on which V is constant. The field is at right angles to it.
- **Geosynchronous orbit**: an orbit whose period equals the rotation period of the planet (for the Earth, 23 h 56 min).
- **Geostationary orbit**: a geosynchronous orbit that is above the equator and in the same direction as the rotation, so the satellite stays above one point.

## Formulas

| Quantity | Formula | Notes |
|---|---|---|
| Work done | ΔW = mΔV | ΔV = V(final) − V(initial). Positive if the mass moves away. |
| Potential, radial field | V = −GM/r | r from the centre of the body. A scalar. |
| Field strength from potential | g = −ΔV/Δr | The magnitude is the gradient of the V–r graph. |
| Field strength, radial | g = GM/r² | From 3.7.2. |
| Orbital speed | v = √(GM/r) | Independent of the satellite's mass. |
| Orbital period | T = 2πr/v, T² = 4π²r³/(GM) | T² ∝ r³. |
| Kinetic energy | Ek = GMm/(2r) | |
| Potential energy | Ep = −GMm/r | |
| Total energy | E = −GMm/(2r) | E = −Ek and Ep = −2Ek. |

## Method in steps: work done between two radii

1. Write down GM (or G and M separately).
2. Convert both distances to metres and measure them from the centre of the body.
3. Find V = −GM/r at each radius, keeping the minus sign.
4. Subtract: ΔV = V(final) − V(initial).
5. Multiply by m. Quote the sign if the question asks for work done by the field, and the magnitude if it asks for work needed.

**Reminder.** Work to lift 1200 kg from the Earth's surface to a radius of 3 × 6.37 × 10⁶ m:

```
GM = 3.982e14
ΔV = GM (1/R - 1/3R) = 3.982e14 x (2/3) / 6.37e6 = 4.167 x 10^7 J/kg
ΔW = 1200 x 4.167e7 = 5.00 x 10^10 J
```

## Graphs

| | g against r (r larger than the body radius) | V against r |
|---|---|---|
| Shape | Falls steeply then flattens; inverse square | Rises from a negative value towards zero; inverse |
| Halving the distance | g is four times larger | V is twice as negative |
| Doubling the distance | g becomes one quarter | V becomes half as negative |
| Never reaches | Zero | Zero |

To find g from a V–r graph, draw a tangent at the point, find its gradient and take the magnitude. To find the potential difference from a g–r graph, the area under the curve gives the magnitude of ΔV.

## Method in steps: orbit problems

1. Gravity gives the centripetal force: GMm/r² = mv²/r.
2. Get v = √(GM/r), then T = 2πr/v.
3. For comparisons, use ratios: T² ∝ r³ and v ∝ r^(−1/2).
4. For energy, use Ek = GMm/(2r), Ep = −GMm/r and E = −GMm/(2r).
5. For a change of orbit, subtract the totals: ΔE = E(final) − E(initial).

**Reminder.** Orbit radius 2.00 × 10⁷ m about the Earth:

```
v = sqrt(3.982e14 / 2.00e7) = 4.46 x 10^3 m/s
T = 2 pi x 2.00e7 / 4462 = 2.82 x 10^4 s = 7.82 hours
```

**Reminder.** Energy to move a 250 kg satellite from a circular orbit of radius 7.00 × 10⁶ m to one of radius 1.00 × 10⁷ m about the Earth:

```
E(7.00e6) = -3.982e14 x 250 / (2 x 7.00e6) = -7.11 x 10^9 J
E(1.00e7) = -3.982e14 x 250 / (2 x 1.00e7) = -4.98 x 10^9 J
ΔE = +2.13 x 10^9 J
```

The energy needed is the change in total energy, not the change in potential energy alone, because the kinetic energy also changes.

## Writing good explanations

- **Equipotential question.** State that the gravitational force is perpendicular to the surface, so the force has no component along the path. Then say the work done is zero because ΔV = 0.
- **Why a bigger orbit means a lower speed.** Gravity provides the centripetal force, GMm/r² = mv²/r, so v² = GM/r. A larger r gives a smaller v.
- **Drag paradox.** Drag removes total energy. The satellite falls to a smaller radius, where the potential energy is lower by twice the kinetic energy gained, so the speed rises.
- **Geosynchronous.** State the period (the Earth's rotation period), the equatorial plane and the direction of rotation if the answer must be geostationary. Then give the use: a fixed ground antenna can stay pointed at it.

## Must-know distinctions

- Potential (J kg⁻¹, scalar, negative) versus potential energy (J, mV) versus field strength (N kg⁻¹, vector).
- Total energy of an orbit becomes more negative as the orbit gets smaller, yet the speed becomes larger.
- A satellite loses mechanical energy to drag and falls to a lower orbit. Its kinetic energy rises.
- Geosynchronous means the period matches the planet's rotation. Geostationary needs the equatorial plane as well.
- Zero work along an equipotential means no change in potential energy. It does not mean no force acts: the force is perpendicular to the motion.

## Quick self-test

1. State what is meant by the gravitational potential at a point.
2. Find V at the Earth's surface.
3. Find V at a distance of 2 × 6.37 × 10⁶ m from the Earth's centre.
4. Find the work to move 1200 kg from the Earth's surface to a radius of 3 × 6.37 × 10⁶ m.
5. A planet has V = −2.4 × 10⁷ J kg⁻¹ at r = 4.0 × 10⁶ m, and V is proportional to −1/r. Find g and M.
6. A satellite's orbital radius doubles. By what factors do v and T change?
7. A satellite has a kinetic energy of 6.0 × 10⁹ J in a circular orbit. State its potential energy and total energy.
8. Find the orbital radius for a geosynchronous orbit of the Earth (T = 86 164 s).
9. Find the extra energy needed to free a 450 kg satellite from a 7.00 × 10⁶ m circular orbit to infinity.
10. One planet orbits a star at four times the radius of another. By what factor is its period larger?
11. Why is no work done moving a mass along an equipotential?
12. Explain why the total energy of a satellite in a circular orbit is negative.

### Answers

1. The work done per unit mass, by an external agent, in moving a small mass from infinity to the point.
2. V = −3.982e14/6.37e6 = **−6.25 × 10⁷ J kg⁻¹**.
3. V = −3.982e14/1.274e7 = **−3.13 × 10⁷ J kg⁻¹**.
4. **5.00 × 10¹⁰ J** (see the reminder above).
5. g = −ΔV/Δr gives g = V/r in magnitude for an inverse relationship, so g = 2.4e7/4.0e6 = **6.0 N kg⁻¹**. M = gr²/G = 6.0 × (4.0e6)²/6.67e-11 = **1.44 × 10²⁴ kg**.
6. v falls by a factor of 1/√2 (to 0.707 of its value). T increases by 2^1.5 = **2.83**.
7. Ep = −2Ek = **−1.2 × 10¹⁰ J**. E = −Ek = **−6.0 × 10⁹ J**.
8. r = (GMT²/4π²)^(1/3) = **4.21 × 10⁷ m**.
9. Extra energy = −E = GMm/(2r) = 3.982e14 × 450/(2 × 7.00e6) = **1.28 × 10¹⁰ J**.
10. T² ∝ r³, so T increases by 4^1.5 = **8**.
11. The field is perpendicular to the surface, so the force has no component along the displacement. Equivalently, ΔV = 0, so ΔW = mΔV = 0.
12. Ek = +GMm/(2r) and Ep = −GMm/r, so E = −GMm/(2r), which is less than zero. A negative total means the satellite is bound: it would need an input of energy equal to |E| to reach infinity with zero speed.

## Where marks are usually lost

- Dropping the sign of V, or taking initial minus final.
- Using height above the surface instead of the distance from the centre.
- Leaving r in kilometres.
- Quoting an energy change as the total energy of the orbit.
- Stating that the speed of a satellite depends on its mass.
- Writing "the satellite speeds up because energy is added" when drag is the cause. Explain the transfer from potential to kinetic energy.
- Defining potential without saying "per unit mass" and "from infinity".
- Calling any orbit with a 24 hour period geostationary, or giving 24 hours instead of 23 h 56 min for the Earth's rotation period.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.7.3 and 3.7.4.
