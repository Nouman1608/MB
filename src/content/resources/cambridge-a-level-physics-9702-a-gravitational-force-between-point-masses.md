---
title: "Cambridge A Level Physics (9702): Gravitational force between point masses"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Gravitational fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 13.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-force-between-point-masses"
description: "A focused guide to 13.2 in Cambridge A Level Physics 9702: spheres as point masses, Newton's law of gravitation, circular orbits and geostationary satellites."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **13.2 Gravitational force between point masses** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) introduces all of Topic 13; this page goes further into the force law and its main application: when a planet can be treated as a point, how to reason with the inverse square law, how to analyse any circular orbit from first principles, and why a geostationary orbit has to be exactly where it is. For quick recall use the [revision notes for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-force-between-point-masses-revision-notes/), and for exam-style questions the [practice questions for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-force-between-point-masses-practice/).

## What 13.2 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- understand that, **for a point outside a uniform sphere**, the mass of the sphere may be considered to be a **point mass at its centre**
- recall and use **Newton's law of gravitation, F = Gm₁m₂/r²**, for the force between two point masses
- **analyse circular orbits** by relating the gravitational force to the centripetal acceleration it causes
- understand that a **geostationary** satellite stays above the same point on the Earth's surface, with a **period of 24 hours**, orbiting **from west to east**, **directly above the Equator**

## Treating a sphere as a point

Newton's law is written for point masses, but planets, moons and stars are large. The first outcome removes the difficulty: outside a uniform sphere, the sphere attracts exactly as if all its mass were concentrated at its centre. Two consequences follow for calculations.

- **r is always measured from centre to centre.** A satellite at height h above a planet of radius R is at r = R + h.
- **The result applies outside the sphere only.** It says nothing about points inside a planet, and 9702 does not ask for them.

For two spheres (the Earth and the Moon, or two lead balls in a laboratory) each can be replaced by a point at its centre, so r is the distance between centres.

## Newton's law of gravitation

In words: every pair of point masses attracts with a force that is **proportional to the product of the masses** and **inversely proportional to the square of their separation**.

```
F = Gm₁m₂ / r²          G = 6.67 × 10⁻¹¹ N m² kg⁻²
```

Three details are worth a mark each in "state" questions: the force acts **along the line joining the masses**, it is **attractive**, and the two bodies experience forces that are **equal in size and opposite in direction** (a Newton's third law pair).

**How small G is.** Two people of masses 50 kg and 60 kg standing 0.80 m apart attract with F = 6.67 × 10⁻¹¹ × 50 × 60 ÷ 0.80² = 3.1 × 10⁻⁷ N. Gravity is only noticeable when at least one mass is astronomically large.

**Equal forces, unequal effects.** The Earth (5.97 × 10²⁴ kg) and the Moon (7.35 × 10²² kg) are 3.84 × 10⁸ m apart:

```
F = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 7.35 × 10²²) / (3.84 × 10⁸)² = 1.98 × 10²⁰ N
```

The same force acts on each body, but the Moon's acceleration (F/m = 2.7 × 10⁻³ m s⁻²) is about 80 times the Earth's, because the Moon's mass is about 80 times smaller.

## Reasoning with the inverse square law

Ratio questions are faster and safer than recalculating. Since F ∝ m₁m₂/r²:

| Change | Effect on F |
|---|---|
| Separation doubled | ÷ 4 |
| Separation tripled | ÷ 9 |
| One mass doubled | × 2 |
| Both masses doubled and separation doubled | unchanged |
| Satellite raised from the surface (r = R) to a height R (r = 2R) | ÷ 4 |

The last row catches many candidates: "a height equal to the radius" doubles r, it does not add R to nothing.

## Analysing circular orbits

For a body of mass m moving in a circular orbit of radius r around a much larger mass M, the gravitational force is the only force acting, and it supplies the centripetal force. This is the whole analysis; every orbital formula follows from it:

```
GMm / r² = mv² / r      →   v² = GM / r
GMm / r² = mrω²         →   ω² = GM / r³
with ω = 2π / T         →   T² = (4π² / GM) r³
```

What the results show:

- **m cancels.** Speed and period depend only on M and r, so a space station and an astronaut outside it orbit together.
- **Higher orbits are slower.** v ∝ 1/√r, so a satellite further out moves more slowly.
- **Higher orbits take longer.** T² ∝ r³, so quadrupling the orbital radius multiplies the period by 4^(3/2) = 8.
- **The orbit's centre is the centre of the attracting body.** The force always points at that centre, so it must also be the centre of the circle.

**A low orbit for comparison.** At 400 km above the Earth, r = 6.77 × 10⁶ m, v = √(GM/r) = 7.7 km s⁻¹ and T = 2πr/v ≈ 92 minutes.

## Worked example 1: weighing the Earth with the Moon

The Moon orbits the Earth with radius 3.84 × 10⁸ m and period 27.3 days. Treating the orbit as circular, estimate the mass of the Earth.

```
T = 27.3 × 24 × 3600 = 2.36 × 10⁶ s
GMm / r² = mr(2π / T)²   →   M = 4π²r³ / (GT²)
M = 4π² × (3.84 × 10⁸)³ / (6.67 × 10⁻¹¹ × (2.36 × 10⁶)²)
M = 6.0 × 10²⁴ kg
```

*Annotation.* The mass found is the mass of the **central** body; the Moon's mass cancels. The same method gives the mass of any planet with a moon, or of the Sun from the Earth's orbit. Show the equating step (gravitational force = mass × centripetal acceleration) explicitly, because it is usually a mark on its own.

## Geostationary orbits

A geostationary satellite stays above the same point on the Earth's surface. Each of the three conditions in the syllabus has a reason:

| Condition | Why it is needed |
|---|---|
| Period of 24 hours | The satellite must turn through one revolution in the time the Earth does |
| Orbits from west to east | The Earth rotates west to east, so the satellite must move the same way |
| Directly above the Equator | The orbit must be centred on the Earth's centre; only an orbit in the equatorial plane stays above a single latitude, and the only point it can stay above is on the Equator |

An orbit with a 24-hour period that is tilted to the Equator stays at the same longitude on average but drifts north and south each day, so it is not geostationary. Giving all three conditions is needed for full marks.

Geostationary satellites are used for communications and weather observation, because a receiving dish on the ground can point in one fixed direction.

## Worked example 2: the radius of a geostationary orbit

Calculate the orbital radius and the height above the surface of a geostationary satellite. The mass of the Earth is 5.97 × 10²⁴ kg and its radius is 6.37 × 10⁶ m.

```
r³ = GMT² / 4π²
   = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 86 400²) / 4π²
   = 7.53 × 10²² m³
r = 4.22 × 10⁷ m
height = r − R = 4.223 × 10⁷ − 0.637 × 10⁷ = 3.59 × 10⁷ m
orbital speed v = 2πr / T = 3.07 × 10³ m s⁻¹
```

*Annotation.* T must be in seconds (24 × 3600 = 86 400 s). Remember to subtract the Earth's radius when a height is asked for, and do not subtract it when a radius is asked for.

## Common mistakes

- **Using height instead of orbital radius** in F = Gm₁m₂/r² or v² = GM/r.
- **Forgetting to square r**, or squaring the height and then adding R.
- **Drawing an extra "centripetal force"** on a satellite: gravity is the only force.
- **Saying the satellite's mass affects its orbital speed.** It cancels.
- **Giving only one or two geostationary conditions**, or saying "above the poles".
- **Thinking an astronaut in orbit has no gravitational force acting.** At 400 km the field is still nearly 90% of its surface value; the astronaut is in free fall.
- **Leaving T in hours or days** when substituting.

## Exam technique for the command words

- **State** (Newton's law): proportional to the product of the masses, inversely proportional to the square of the separation; mention point masses.
- **Show that** or **derive** (orbital speed or period): start from "gravitational force provides the centripetal force", write GMm/r² = mv²/r, cancel m, rearrange.
- **Explain** (why a geostationary orbit is equatorial): the force points to the Earth's centre, so the orbit's centre is the Earth's centre; to stay above one point it must lie in the equatorial plane.
- **Calculate** or **determine**: convert heights to radii and times to seconds before substituting; give the unit.
- **Suggest** (a use for a geostationary satellite): communications or weather monitoring, with the fixed-dish reason.

## Related resources

- [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) — the whole of Topic 13
- [Gravitational field](/resources/cambridge-a-level-physics-9702-a-gravitational-field/) — subtopic 13.1
- [Gravitational field of a point mass](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass/) — subtopic 13.3
- [Centripetal acceleration](/resources/cambridge-a-level-physics-9702-a-centripetal-acceleration/) — the circular-motion equations used for orbits

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
