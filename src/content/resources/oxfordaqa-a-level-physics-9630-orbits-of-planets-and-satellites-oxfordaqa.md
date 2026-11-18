---
title: "OxfordAQA International AS and A-level Physics (9630): Orbits of planets and satellites"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.7 – Gravitational fields and satellites"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 7.04
syllabusTopics:
  - qualification: "a-level"
    topic: "gravitational-fields-and-satellites"
    subtopic: "orbits-of-planets-and-satellites-oxfordaqa"
description: "Deeper study guide to 9630 section 3.7.4: orbital speed and period against radius, finding a planet's mass, satellite energy and geosynchronous orbits."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.7.4 Orbits of planets and satellites** of the OxfordAQA International AS and A-level Physics (9630) specification. The section covers "orbital period and speed related to radius of circular orbit", "energy considerations for an orbiting satellite" and the "significance of a geosynchronous orbit". Section 3.7 is International A-level only.

The broader [study guide to gravitational potential and orbits](/resources/oxfordaqa-a-level-physics-gravitational-potential-and-orbits-of-planets-and/) derives v = √(GM/r) and T² ∝ r³ and works through satellite energies. This page builds on it: weighing a planet from the orbit of its moon, using graphs of orbital data, comparing satellites by ratio, the energy needed to launch a satellite from the ground, and a balanced account of why geosynchronous orbits matter. Afterwards use the [orbits revision notes](/resources/oxfordaqa-a-level-physics-9630-orbits-of-planets-and-satellites-oxfordaqa-revision-notes/) and the [orbits practice questions](/resources/oxfordaqa-a-level-physics-9630-orbits-of-planets-and-satellites-oxfordaqa-practice/).

Data used, as a question would give them: G = 6.67 × 10⁻¹¹ N m² kg⁻²; Earth mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m, so GM(Earth) = 3.98 × 10¹⁴ N m² kg⁻¹; speed of electromagnetic waves 3.00 × 10⁸ m s⁻¹.

## The starting point: gravity supplies the centripetal force

For a circular orbit of radius r about a body of mass M, the gravitational force provides exactly the centripetal force needed:

GMm/r² = mv²/r = mω²r

The satellite's mass m cancels from every version, so **the orbit does not depend on the satellite's mass**. From this one equation:

| Result | Derivation step |
|---|---|
| v = √(GM/r) | Cancel m and one r from GMm/r² = mv²/r |
| T = 2πr/v | One orbit is a distance 2πr |
| T² = (4π²/GM) r³ | Substitute v into T and square |
| ω = √(GM/r³) | From GM/r² = ω²r |

Speed falls and period rises as the radius increases. The circular-motion background is in the [circular motion study guide](/resources/oxfordaqa-a-level-physics-circular-motion-angular-speed-and-centripetal-force/).

## Weighing a planet

Rearranging T² = 4π²r³/GM gives M = 4π²r³/(GT²). Measuring the radius and period of any moon's orbit tells you the mass of the planet it orbits, without knowing anything about the moon.

### Worked example 1: mass from a moon's orbit

An invented moon orbits its planet with radius 5.8 × 10⁸ m and period 6.4 days. Find the planet's mass.

```
T = 6.4 × 24 × 3600 = 5.53 × 10⁵ s
M = 4π² r³ / (G T²)
  = 4π² × (5.8 × 10⁸)³ / (6.67 × 10⁻¹¹ × (5.53 × 10⁵)²)
  = 3.8 × 10²⁶ kg
```

Convert the period to seconds first; leaving it in days is the most common error.

## Using orbital data on graphs

Two graphs test T² ∝ r³:

- **T² against r³**: a straight line through the origin, gradient 4π²/GM. So M = 4π²/(G × gradient).
- **log T against log r**: a straight line of gradient 1.5, whatever the central mass. The intercept depends on M.

For the Earth, the gradient of T² against r³ would be 4π²/(3.98 × 10¹⁴) = 9.9 × 10⁻¹⁴ s² m⁻³. Every satellite of the Earth, of any mass, lies on that same line.

## Comparing satellites by ratio

Ratio questions avoid long calculations.

### Worked example 2: an outer and an inner satellite

Satellite B orbits the Earth at four times the radius of satellite A. Compare their periods and speeds.

```
T ∝ r^1.5: T(B)/T(A) = 4^1.5 = 8
v ∝ r^−0.5: v(B)/v(A) = 1/√4 = 1/2
```

If A takes 1.5 hours, B takes 12 hours. B moves at half A's speed but has a path four times longer, and 4 ÷ ½ = 8, which is a useful check.

## Energy considerations

For a satellite in a circular orbit:

- kinetic energy Ek = GMm/(2r)
- potential energy Ep = −GMm/r
- total energy E = −GMm/(2r)

Three points examiners reward:

1. The total energy is negative: the satellite is bound to the planet.
2. In a higher orbit the total energy is greater (less negative), but the kinetic energy is smaller. Energy must be supplied to move out, yet the satellite ends up slower.
3. In a circular orbit the speed is constant, so the kinetic energy and potential energy are both constant. The gravitational force is perpendicular to the velocity and does no work.

### Worked example 3: energy to put a satellite into orbit

A 500 kg satellite is launched from the Earth's surface into a circular orbit of radius 7.0 × 10⁶ m. Ignoring air resistance and the Earth's rotation, find the minimum energy that must be supplied.

```
energy on the ground (at rest): E = −GMm / R = −3.98 × 10¹⁴ × 500 / 6.37 × 10⁶ = −3.13 × 10¹⁰ J
energy in orbit: E = −GMm / 2r = −3.98 × 10¹⁴ × 500 / (2 × 7.0 × 10⁶) = −1.42 × 10¹⁰ J
energy supplied = −1.42 × 10¹⁰ − (−3.13 × 10¹⁰) = 1.7 × 10¹⁰ J
```

Of this, about 1.4 × 10¹⁰ J ends up as the satellite's kinetic energy in orbit and the rest raises its potential energy. Raising the satellite to the orbit's height without giving it orbital speed would need far less energy; most of the cost of a launch is the speed.

## The significance of a geosynchronous orbit

A geosynchronous orbit has a period equal to the Earth's rotation period. If it is also circular, above the equator and in the direction of the Earth's rotation, the satellite stays above one point on the equator: a geostationary orbit. Because T is fixed, T² ∝ r³ fixes the radius too, at about 4.2 × 10⁷ m from the Earth's centre, roughly 3.6 × 10⁷ m above the surface.

**Why it matters**

- A ground aerial or dish can point in one fixed direction, with no tracking.
- The satellite gives continuous coverage of the same large region, which suits communications, broadcasting and weather monitoring.
- Three such satellites spaced around the equator can between them see almost all of the Earth except the polar regions.

**Its limitations**

- The large distance delays signals. A signal going up to the satellite and back down travels at least about 2 × 3.6 × 10⁷ m:

```
t = 7.2 × 10⁷ / 3.00 × 10⁸ = 0.24 s
```

- Detailed imaging is harder from so far away, so mapping and surveillance satellites use much lower orbits, which have short periods and pass over different parts of the Earth.
- Coverage near the poles is poor, because the satellite is low on the horizon there.

## Common mistakes

- Using the satellite's altitude as r, rather than the distance from the planet's centre.
- Leaving the period in hours or days in T² = 4π²r³/GM.
- Saying a more massive satellite needs a different speed for the same orbit.
- Saying a satellite in a higher orbit moves faster because it was given more energy.
- Saying gravity does work on a satellite in a circular orbit.
- Calling every geosynchronous orbit geostationary; it must also be equatorial and in the same direction as the rotation.
- Giving the period of a geosynchronous orbit as "one day" without saying it matches the Earth's rotation.

## Exam technique

- **Derive** v or T: start from "gravitational force provides the centripetal force", write the equation, and show m cancelling.
- **Calculate** M from an orbit: convert T to seconds, then use M = 4π²r³/(GT²).
- **Compare** two orbits: use the proportionalities T ∝ r^1.5 and v ∝ r^−0.5 rather than full calculations.
- **Discuss** the energy of a satellite: state which of Ek, Ep and E increase or decrease, with the formulas.
- **Explain** the significance of a geosynchronous orbit: link the fixed position to fixed ground dishes and continuous coverage, and mention at least one limitation if asked to evaluate.

## Next steps

Condense the page with the [orbits revision notes](/resources/oxfordaqa-a-level-physics-9630-orbits-of-planets-and-satellites-oxfordaqa-revision-notes/) and test yourself with the [orbits practice questions](/resources/oxfordaqa-a-level-physics-9630-orbits-of-planets-and-satellites-oxfordaqa-practice/). The potential energy used here comes from the [gravitational potential study guide](/resources/oxfordaqa-a-level-physics-9630-gravitational-potential-oxfordaqa/).
