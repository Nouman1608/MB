---
title: "A Level Physics: Gravitational Fields — Revision Notes"
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
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
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

**G = 6.67 × 10⁻¹¹ N m² kg⁻²** — the gravitational constant, the same everywhere in the universe. It is printed on the data sheet (page 2 of the written papers), so copy it accurately from there, **including its units**, rather than relying on memory.

**Field lines** represent the field: they point in the direction of the force on a small test mass, and are drawn **closer together where the field is stronger**.

```
Worked example: Earth's mass = 5.97 x 10^24 kg, radius = 6.37 x 10^6 m.
g = GM/r^2 = (6.67 x 10^-11 x 5.97 x 10^24) / (6.37 x 10^6)^2 = 9.8 N/kg
```

This confirms g = 9.81 m/s² used throughout AS mechanics is not an arbitrary constant, but a direct consequence of Newton's law of gravitation applied at the Earth's surface.

## Why potential is negative

Gravitational potential is defined as **zero at infinity**. Since gravity is always attractive, work must be done *on* a mass to move it to infinity — so at any finite distance the potential is negative.

Potential **increases** (becomes less negative) as r increases, approaching zero as r approaches infinity but never becoming positive for a real, finite separation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--03-g-and-v-graphs.webp" width="900" height="1030" alt="Two graphs for Earth against distance r. g falls from 9.81 N per kg at the surface to 2.45 at 2R and never reaches zero. V rises from -62.5 MJ per kg at the surface towards zero at infinity. The gradient of V at 2R is 2.45 N per kg, the size of g there." loading="lazy">
  <figcaption>g falls as 1/r2; V = -GM/r rises towards 0; the gradient of the V graph gives g.</figcaption>
</figure>


## Field strength vs potential

| | Field strength g | Potential φ |
|---|---|---|
| Type | **Vector** | **Scalar** |
| Formula | GM/r² | −GM/r |
| Falls off as | 1/r² | 1/r |
| Units | N/kg | J/kg |
| At infinity | 0 | 0 |

Relationship: `g = −dφ/dr` — field strength is the **negative gradient of the potential**. See the [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) for the full derivations and worked reasoning behind every equation above.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--01-field-lines.webp" width="900" height="1230" alt="A planet has radial field lines pointing to its centre, closer together nearer the planet. Zooming in at the surface shows parallel, equally spaced lines, a uniform field. For two equal masses (OCR only) the lines curve towards each mass and never cross, and g is zero midway." loading="lazy">
  <figcaption>Radial lines get closer as g gets stronger; near the surface they are parallel; two masses give a point where g = 0.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--02-inverse-square.webp" width="900" height="1000" alt="The same field lines pass through windows of 1, 4 and 9 unit areas at distances R, 2R and 3R, so the field spreads thinner. For Earth g is 9.81, 2.45 and 1.09 N per kg at R, 2R and 3R." loading="lazy">
  <figcaption>Double the distance and g falls to a quarter; triple it and g falls to a ninth.</figcaption>
</figure>


## Orbits

For a circular orbit, gravity provides the entire centripetal force needed to keep the satellite on its curved path:

```
G M m / r^2 = m v^2 / r     ->    v = sqrt(G M / r)

and using v = 2 pi r / T:

T^2 = (4 pi^2 / G M) r^3      <- Kepler's third law
```

So `T² ∝ r³`. The orbiting mass **cancels** — orbital speed and period depend only on the central mass and the radius, which is exactly why every satellite at a given radius above a given planet, regardless of its own mass, keeps the same period.

**Geostationary orbit:** period exactly 24 hours, orbiting west to east, directly above the **Equator**, radius ≈ 42 000 km from Earth's centre — all three conditions together are what let the satellite stay fixed above the same point on the ground as the Earth turns beneath it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--05-orbit-kepler-third.webp" width="900" height="1210" alt="A satellite on a circular orbit has gravity as its centripetal force. Equating GMm/r2 with mv2/r cancels m and gives v = root(GM/r), then T2 = (4pi2/GM) r3. A graph of T2 against r3 for Earth satellites is a straight line through the origin, passing through the 24 hour point." loading="lazy">
  <figcaption>Gravity supplies the centripetal force, so v and T depend only on M and r, giving T2 proportional to r3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--06-orbit-energy.webp" width="900" height="1070" alt="Energies of a 520 kg satellite against orbital radius. Kinetic energy is positive, potential energy is negative and twice as large in size, and total energy is negative, equal to minus the kinetic energy. Raising the orbit from 6.97 to 10 million metres raises the total energy by 4.5 x 10^9 J." loading="lazy">
  <figcaption>Ek = GMm/2r, Ep = -GMm/r, E = -GMm/2r: a bigger orbit has E closer to zero and a smaller speed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--07-geostationary.webp" width="900" height="1180" alt="A to-scale view from above the North Pole. The geostationary ring is 4.22 x 10^7 m from Earth’s centre, about 36 000 km above the surface, far outside a 600 km low orbit. The satellite moves west to east with the Earth, so it stays above one point on the equator. Period 24 h, west to east and over the equator are all needed." loading="lazy">
  <figcaption>Geostationary means 24 h, west to east and over the equator, at one radius only.</figcaption>
</figure>


## Escape velocity (beyond the syllabus — background only, not examinable)

Escape velocity is not named in the Cambridge 9702 syllabus; it is included only as an extension of the energy ideas above. It is the minimum launch speed for which total energy (kinetic plus gravitational potential) just reaches zero, allowing the object to reach infinity with nothing left over:

```
1/2 m v^2 = G M m / r     ->    v_esc = sqrt(2 G M / r)
```

Independent of the escaping object's mass, since m cancels from both sides of the energy equation, leaving only the central mass M and the starting distance r.

## Exam traps

- Using height above the surface instead of distance from the **centre**.
- Dropping the minus sign on potential or potential energy.
- Treating potential as a vector — it is a scalar, so potentials simply add.
- Confusing g (1/r²) with φ (1/r).
- Forgetting that geostationary requires equatorial, west-to-east **and** 24 hours — all three.
- Assuming a heavier satellite orbits faster; mass cancels.
- Miscopying the value or units of G (6.67 × 10⁻¹¹ N m² kg⁻²) from the data sheet — it is always supplied, so take care to copy it, and its units, accurately.
- Drawing field lines further apart where the field is actually stronger — closer lines always mean a stronger field, never the reverse.

## Self-test

1. Write Newton's law of gravitation and state what r measures.
2. Why is gravitational potential always negative?
3. Derive T² ∝ r³ for a circular orbit.
4. State the three conditions for a geostationary orbit.
5. Does a more massive satellite need a greater orbital speed at the same radius?
6. Where do you find the value of the gravitational constant G, and why should you still write down its units carefully?
7. A planet has mass 6.4 × 10²³ kg and radius 3.4 × 10⁶ m. Calculate the gravitational field strength at its surface.

**Answers:** 1. F = GMm/r², where r is the distance between the **centres** of the two masses. 2. Potential is defined as zero at infinity and gravity is attractive, so work must be done on a mass to move it to infinity; at any finite separation the potential is therefore negative. 3. GMm/r² = mv²/r gives v² = GM/r; substituting v = 2πr/T gives 4π²r²/T² = GM/r, so T² = (4π²/GM)r³. 4. Period of 24 hours, orbiting west to east, directly above the Equator. 5. No — the satellite's mass cancels, so orbital speed depends only on the central mass and the orbital radius. 6. On the data sheet (it is not required from memory); its units, N m² kg⁻², must still be copied correctly since they are needed to check the working. 7. g = GM/r² = (6.67 × 10⁻¹¹ × 6.4 × 10²³) ÷ (3.4 × 10⁶)² ≈ **3.7 N/kg**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--04-area-under-force-graph.webp" width="900" height="1050" alt="A graph of the force on a 1000 kg probe near Mars against distance. The shaded area under the inverse-square curve is the work done, m times the change in potential, 8.42 x 10^9 J. Four trapezia give 8.9 x 10^9 J, an overestimate." loading="lazy">
  <figcaption>Area under F against r equals the work done, m x change in potential; trapezia overestimate for this curve.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--08-escape-velocity.webp" width="900" height="1210" alt="The Earth’s potential well is -62.5 MJ per kg at the surface and zero at infinity. Launching with kinetic energy 62.5 MJ per kg brings the total energy to zero, giving escape velocity root(2GM/R) = 11.2 km per s. Bars compare Moon 2.37, Mars 5.03 and Earth 11.2 km per s; light-gas atoms at 1.9 km per s are 80% of the Moon value." loading="lazy">
  <figcaption>Escape velocity v = root(2GM/r) makes total energy zero; it is independent of the escaping mass.</figcaption>
</figure>

## Frequently asked questions

**How do you derive Kepler's third law for a circular orbit?**
Set gravitational force equal to centripetal force, GMm/r² = mv²/r, so v² = GM/r. Substituting v = 2πr/T gives T² = (4π²/GM)r³, so T² is proportional to r³.

**What are the conditions for a geostationary orbit?**
A geostationary satellite has a period of exactly 24 hours, orbits from west to east, and stays directly above the Equator. All three conditions are needed for it to stay above the same point on the ground.

**Does a heavier satellite orbit faster?**
No. The satellite's mass cancels in the orbit equation, so orbital speed and period depend only on the central mass and the orbital radius.

**Is the gravitational constant G given in the Cambridge 9702 exam?**
Yes. G = 6.67 × 10⁻¹¹ N m² kg⁻² is printed on the 9702 data sheet, so copy its value and units accurately rather than relying on memory.
