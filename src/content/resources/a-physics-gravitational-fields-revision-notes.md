---
title: "A Level Physics: Gravitational Fields: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Gravitational fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 13.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-field"
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-force-between-point-masses"
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-field-of-a-point-mass"
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-potential"
description: "Condensed recall notes on Newton\u2019s law of gravitation, field strength, potential and orbits for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Gravitational Fields study guide](/resources/a-physics-gravitational-fields/).

## The core equations

```
Newton's law        F = G M m / r^2
field strength      g = F / m = G M / r^2        N/kg
potential           phi = -G M / r               J/kg
potential energy    Ep = -G M m / r              J
```

**Everything is measured from the centre** of the body, not the surface. For a satellite at height h above a planet of radius R, use `r = R + h`.

## Why potential is negative

Gravitational potential is defined as **zero at infinity**. Since gravity is always attractive, work must be done *on* a mass to move it to infinity — so at any finite distance the potential is negative.

Potential **increases** (becomes less negative) as r increases.

## Field strength vs potential

| | Field strength g | Potential φ |
|---|---|---|
| Type | **Vector** | **Scalar** |
| Formula | GM/r² | −GM/r |
| Falls off as | 1/r² | 1/r |
| Units | N/kg | J/kg |
| At infinity | 0 | 0 |

Relationship: `g = −dφ/dr` — field strength is the **negative gradient of the potential**.

## Orbits

For a circular orbit, gravity provides the centripetal force:

```
G M m / r^2 = m v^2 / r     ->    v = sqrt(G M / r)

and using v = 2 pi r / T:

T^2 = (4 pi^2 / G M) r^3      <- Kepler's third law
```

So `T² ∝ r³`. The orbiting mass **cancels** — orbital speed and period depend only on the central mass and the radius.

**Geostationary orbit:** period exactly 24 hours, orbiting west to east, directly above the **Equator**, radius ≈ 42 000 km from Earth's centre.

## Escape velocity

Total energy must reach zero:

```
1/2 m v^2 = G M m / r     ->    v_esc = sqrt(2 G M / r)
```

Independent of the escaping object's mass.

## Exam traps

- Using height above the surface instead of distance from the **centre**.
- Dropping the minus sign on potential or potential energy.
- Treating potential as a vector — it is a scalar, so potentials simply add.
- Confusing g (1/r²) with φ (1/r).
- Forgetting that geostationary requires equatorial, west-to-east **and** 24 hours — all three.
- Assuming a heavier satellite orbits faster; mass cancels.

## Self-test

1. Write Newton's law of gravitation and state what r measures.
2. Why is gravitational potential always negative?
3. Derive T² ∝ r³ for a circular orbit.
4. State the three conditions for a geostationary orbit.
5. Does a more massive satellite need a greater orbital speed at the same radius?

**Answers:** 1. F = GMm/r², where r is the distance between the **centres** of the two masses. 2. Potential is defined as zero at infinity and gravity is attractive, so work must be done on a mass to move it to infinity; at any finite separation the potential is therefore negative. 3. GMm/r² = mv²/r gives v² = GM/r; substituting v = 2πr/T gives 4π²r²/T² = GM/r, so T² = (4π²/GM)r³. 4. Period of 24 hours, orbiting west to east, directly above the Equator. 5. No — the satellite's mass cancels, so orbital speed depends only on the central mass and the orbital radius.
